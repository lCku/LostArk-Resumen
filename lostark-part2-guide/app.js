/* ============================================================
   Lost Ark Parte 2 · app.js
   Une index.html con window.LOA (data.js). Script clásico, sin
   módulos, sin fetch y sin dependencias: funciona con file://.
   Bloques: utilidades · i18n · calculadora · tabla · trampas ·
   checklist · oro · reglas · arranque.
   ============================================================ */

(function () {
  'use strict';

  const D = window.LOA;
  if (!D) return;

  /* ---------- 1. Utilidades ---------- */

  const ENTIDADES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  // Texto seguro para las plantillas HTML que construimos nosotros.
  const esc = (valor) => String(valor == null ? '' : valor)
    .replace(/[&<>"']/g, (c) => ENTIDADES[c]);

  // Sustituye {clave} en una plantilla de LOA.ui.
  const fill = (plantilla, vars) => String(plantilla).replace(/\{(\w+)\}/g, (todo, clave) => (
    Object.prototype.hasOwnProperty.call(vars, clave) ? vars[clave] : todo
  ));

  const $ = (sel, raiz) => (raiz || document).querySelector(sel);
  const $$ = (sel, raiz) => Array.prototype.slice.call((raiz || document).querySelectorAll(sel));

  // closest tolerante: el target de un evento no siempre es un Element.
  function ancestro(ev, selector) {
    const objetivo = ev.target;
    if (!objetivo || typeof objetivo.closest !== 'function') return null;
    return objetivo.closest(selector);
  }

  // Ejecuta un módulo sin romper el resto de la página.
  function seguro(fn) {
    try { return fn(); } catch (e) { return undefined; }
  }

  // localStorage puede fallar en file://: espejo en memoria siempre.
  const LS = (() => {
    const memoria = Object.create(null);
    return {
      get(clave) {
        if (clave in memoria) return memoria[clave];
        try { return window.localStorage.getItem(clave); } catch (e) { return null; }
      },
      set(clave, valor) {
        memoria[clave] = String(valor);
        try { window.localStorage.setItem(clave, String(valor)); } catch (e) { /* sin persistencia */ }
      },
      remove(clave) {
        delete memoria[clave];
        try { window.localStorage.removeItem(clave); } catch (e) { /* sin persistencia */ }
      }
    };
  })();

  // Chromium no conserva localStorage entre recargas en file:// (origen opaco).
  // El estado mínimo viaja también en el hash para que el doble clic funcione.
  function leerHash() {
    const salida = { lang: null, done: [] };
    try {
      const bruto = String(location.hash || '').replace(/^#/, '');
      if (!bruto) return salida;
      const p = new URLSearchParams(bruto);
      const lang = p.get('lang');
      if (lang === 'es' || lang === 'en') salida.lang = lang;
      const done = p.get('done');
      if (done) salida.done = done.split(',').filter(Boolean);
    } catch (e) { /* hash ilegible */ }
    return salida;
  }

  function escribirHash() {
    try {
      const ids = (D.checklist || [])
        .map((item) => item.id)
        .filter((id) => state.checklist.has(id));
      const partes = ['lang=' + state.lang];
      if (ids.length) partes.push('done=' + ids.join(','));
      const destino = '#' + partes.join('&');
      if (location.hash === destino) return;
      try {
        history.replaceState(null, '', location.href.split('#')[0] + destino);
      } catch (e) {
        location.hash = destino;
      }
    } catch (e) { /* sin persistencia en URL */ }
  }

  /* ---------- 2. Estado ---------- */

  const state = {
    lang: 'es',
    filter: 'all',
    search: '',
    goldTab: 'avoid',
    checklist: new Set(),
    openRules: new Set([0])
  };

  // El estado de la app vive en window.LOA (además de los datos de data.js).
  D.state = state;

  // Formato de miles: punto en es, coma en en (useGrouping 'always' fuerza 4 cifras).
  let nf = null;
  function crearFormato(lang) {
    const locale = lang === 'es' ? 'es-ES' : 'en-US';
    try {
      return new Intl.NumberFormat(locale, { useGrouping: 'always', maximumFractionDigits: 0 });
    } catch (e) {
      return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
    }
  }
  const num = (n) => (nf || crearFormato('es')).format(Math.round(Number(n) || 0));

  /* ---------- 3. Motor i18n ---------- */

  function t(clave) {
    const dic = D.ui[state.lang] || D.ui.es;
    if (dic && dic[clave] != null) return dic[clave];
    if (D.ui.es && D.ui.es[clave] != null) return D.ui.es[clave];
    return clave;
  }

  function grado(clave) {
    const tabla = D.grades[state.lang] || D.grades.es;
    return (tabla && tabla[clave]) || clave;
  }

  function idiomaInicial() {
    const delHash = leerHash().lang;
    if (delHash) return delHash;
    const guardado = LS.get('loa-p2-lang');
    if (guardado === 'es' || guardado === 'en') return guardado;
    const nav = String(navigator.language || '').toLowerCase();
    return nav.indexOf('en') === 0 ? 'en' : 'es';
  }

  function aplicarIdioma(lang) {
    state.lang = lang;
    nf = crearFormato(lang);

    // Textos planos y placeholders (nunca innerHTML).
    $$('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.title = lang === 'es'
      ? 'Lost Ark Parte 2 · Guía de preparación'
      : 'Lost Ark Part 2 · Preparation guide';

    $$('[data-lang-btn]').forEach((btn) => {
      const activo = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', activo);
      btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
    });

    // Todo lo dinámico se reconstruye en el idioma nuevo.
    seguro(renderTabla);
    seguro(renderTrampas);
    seguro(renderChecklist);
    seguro(renderOro);
    seguro(renderReglas);
    seguro(renderPensamientos);
    seguro(renderConclusiones);
    seguro(calcular);
  }

  /* ---------- 4. Calculadora ---------- */

  function leerNivel() {
    const input = $('#ilvl-input');
    if (!input) return NaN;
    const bruto = String(input.value == null ? '' : input.value).trim().replace(',', '.');
    if (bruto === '') return NaN;
    const n = Number(bruto);
    if (!isFinite(n)) return NaN;
    return Math.round(n);
  }

  // Regla de la tabla: mayor que gt, hasta lte inclusive.
  function filaPara(x) {
    return D.migration.find((fila) => x > fila.gt && x <= fila.lte) || null;
  }

  function firmar(n) {
    if (n < 0) return '-' + num(Math.abs(n));
    return fill(t('calc.deltaPlus'), { n: num(n) });
  }

  function pintarCifras(nueva, ganancia, gradoTxt, paso) {
    const elNuevo = document.getElementById('calc-new');
    const elGain = document.getElementById('calc-gain');
    const elGrade = document.getElementById('calc-grade');
    const elStep = document.getElementById('calc-step');
    if (elNuevo) elNuevo.textContent = nueva;
    if (elGain) elGain.textContent = ganancia;
    if (elGrade) elGrade.textContent = gradoTxt;
    if (elStep) elStep.textContent = paso;
  }

  function pintarVeredicto(estado, titulo, cuerpo) {
    const caja = document.getElementById('calc-verdict');
    if (caja) caja.setAttribute('data-state', estado);
    const elTitulo = document.getElementById('calc-verdict-title');
    const elCuerpo = document.getElementById('calc-verdict-body');
    if (elTitulo) elTitulo.textContent = titulo;
    if (elCuerpo) elCuerpo.textContent = cuerpo || '';
  }

  function marcarPresets(x) {
    $$('#ilvl-presets [data-preset]').forEach((btn) => {
      const activo = isFinite(x) && Number(btn.getAttribute('data-preset')) === x;
      btn.classList.toggle('is-active', activo);
      btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
    });
  }

  function marcarFilaActual(filaActiva) {
    const gtActivo = filaActiva ? String(filaActiva.gt) : '';
    $$('#table-body tr[data-gt]').forEach((tr) => {
      const esActual = gtActivo !== '' && tr.getAttribute('data-gt') === gtActivo;
      if (esActual) tr.setAttribute('data-current', 'true');
      else tr.removeAttribute('data-current');
    });
  }

  function calcular() {
    const x = leerNivel();
    const elNext = document.getElementById('calc-next');
    marcarPresets(x);

    // Campo vacío: estado inicial sin marcar error.
    if (!isFinite(x)) {
      pintarCifras('—', '—', '—', '—');
      pintarVeredicto('idle', t('calc.idle'), '');
      if (elNext) elNext.textContent = '';
      marcarFilaActual(null);
      return;
    }

    // Fuera de la tabla por abajo.
    if (x <= 50) {
      pintarCifras('—', '—', '—', '—');
      pintarVeredicto('below', t('calc.below'), t('calc.belowBody'));
      if (elNext) elNext.textContent = t('calc.nextBelow');
      marcarFilaActual(null);
      return;
    }

    const fila = filaPara(x);
    marcarFilaActual(fila);

    // Sin fila solo puede pasar por encima del techo publicado.
    if (!fila) {
      pintarCifras('—', '—', '—', '—');
      pintarVeredicto('above', t('calc.above'), t('calc.aboveBody'));
      if (elNext) elNext.textContent = t('calc.nextAbove');
      return;
    }

    const ganancia = fila.ilvl - x;
    pintarCifras(
      num(fila.ilvl),
      ganancia === 0 ? '0' : fill(t('calc.deltaPlus'), { n: num(ganancia) }),
      grado(fila.grade),
      fila.step ? String(fila.step) : '—'
    );

    // Veredicto del siguiente paso: x + 5 y su tramo.
    const siguiente = x + 5;
    const filaNext = filaPara(siguiente);

    if (!filaNext) {
      pintarVeredicto('max', t('calc.vMaxTitle'), t('calc.vMaxBody'));
      if (elNext) elNext.textContent = t('calc.nextNone');
      return;
    }

    const delta = filaNext.ilvl - fila.ilvl;
    const vars = {
      from: num(x),
      to: num(siguiente),
      newIlvl: num(filaNext.ilvl),
      delta: firmar(delta)
    };

    let estado = 'neutral';
    let claveTitulo = 'calc.vNeutralTitle';
    let claveCuerpo = 'calc.vNeutralBody';

    if (delta === 0) {
      estado = 'dead';
      claveTitulo = 'calc.vDeadTitle';
      claveCuerpo = 'calc.vDeadBody';
    } else if (delta > 5) {
      estado = 'big';
      claveTitulo = 'calc.vBigTitle';
      claveCuerpo = 'calc.vBigBody';
    }

    pintarVeredicto(estado, t(claveTitulo), fill(t(claveCuerpo), vars));

    let textoNext = fill(t('calc.next'), vars);
    if (filaNext.grade !== fila.grade) {
      textoNext += ' ' + fill(t('calc.gradeChange'), { grade: grado(filaNext.grade) });
    }
    if (elNext) elNext.textContent = textoNext;
  }

  // Atajos numéricos: se generan una sola vez, no dependen del idioma.
  function generarPresets() {
    const cont = document.getElementById('ilvl-presets');
    if (!cont) return;
    cont.textContent = '';
    (D.presets || []).forEach((valor) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.setAttribute('data-preset', String(valor));
      btn.textContent = String(valor);
      cont.appendChild(btn);
    });
  }

  /* ---------- 5. Tabla de migración ---------- */

  function zonaDe(fila) {
    const ancho = fila.lte - fila.gt;
    if (ancho >= 70) return 'dead';
    if (ancho < 70 && fila.ilvl - fila.lte >= 10) return 'lift';
    return 'normal';
  }

  // Menor múltiplo de 5 estrictamente mayor que gt.
  function primerMultiploDe5(gt) {
    return Math.floor(gt / 5) * 5 + 5;
  }

  function claseGanancia(max, zona) {
    // En zona muerta la ganancia se muestra apagada: el rojo ya lo marca la fila.
    if (zona === 'dead') return 'gain--low';
    if (max >= 10) return 'gain--high';
    return 'gain--low';
  }

  function textoGanancia(min, max) {
    const mas = (v) => fill(t('calc.deltaPlus'), { n: num(v) });
    if (min === max) return mas(max);
    const desde = min === 0 ? '0' : mas(min);
    return fill(t('table.range'), { from: desde, to: mas(max) });
  }

  const normalizar = (txt) => String(txt)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Búsqueda numérica: acepta 1770, 1770,5 y 1.770.
  function leerBusqueda(q) {
    const limpio = String(q).trim();
    if (!/^\d+(?:[.,]\d+)?$/.test(limpio)) return null;
    if (/^\d{1,3}(?:\.\d{3})+$/.test(limpio)) return Number(limpio.replace(/\./g, ''));
    return Math.round(Number(limpio.replace(',', '.')));
  }

  function marcarFiltros() {
    $$('#table-filters [data-filter]').forEach((btn) => {
      const activo = btn.getAttribute('data-filter') === state.filter;
      btn.classList.toggle('is-active', activo);
      btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
    });
  }

  function renderTabla() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    marcarFiltros();

    const consulta = String(state.search || '').trim();
    const numero = leerBusqueda(consulta);
    const texto = numero === null ? normalizar(consulta) : '';

    const filas = D.migration.slice().sort((a, b) => a.gt - b.gt);
    const xActual = leerNivel();
    const filaActual = isFinite(xActual) ? filaPara(xActual) : null;

    const visibles = filas.filter((fila) => {
      // Filtro por pestaña.
      if (state.filter === 'dead' && zonaDe(fila) !== 'dead') return false;
      if (state.filter === 'lift' && zonaDe(fila) !== 'lift') return false;
      if (state.filter === 'ancient' && fila.grade !== 't4-ancient') return false;
      // Buscador (se combina con el filtro).
      if (numero !== null) return numero > fila.gt && numero <= fila.lte;
      if (texto) return normalizar(grado(fila.grade)).indexOf(texto) !== -1;
      return true;
    });

    tbody.innerHTML = visibles.map((fila) => {
      const zona = zonaDe(fila);
      const min = fila.ilvl - fila.lte;
      const max = fila.ilvl - primerMultiploDe5(fila.gt);
      const ancho = fila.lte - fila.gt;
      const viejo = ancho > 5
        ? fill(t('table.range'), { from: num(fila.gt), to: num(fila.lte) })
        : fill(t('table.rangeSingle'), { to: num(fila.lte) });
      const actualAttr = filaActual && filaActual.gt === fila.gt ? ' data-current="true"' : '';

      return '<tr data-gt="' + esc(fila.gt) + '" data-zone="' + zona + '" data-grade="' + esc(fila.grade) + '"' + actualAttr + '>'
        + '<td class="cell-old">' + esc(viejo) + '</td>'
        + '<td class="cell-new"><strong>' + esc(num(fila.ilvl)) + '</strong></td>'
        + '<td class="cell-lift"><span class="gain ' + claseGanancia(max, zona) + '">'
        + esc(textoGanancia(min, max)) + '</span></td>'
        + '<td class="cell-grade"><span class="grade-badge" data-grade="' + esc(fila.grade) + '">'
        + esc(grado(fila.grade)) + '</span></td>'
        + '<td class="cell-step">' + esc(fila.step ? String(fila.step) : '—') + '</td>'
        + '</tr>';
    }).join('');

    const contador = document.getElementById('table-count');
    if (contador) {
      contador.textContent = fill(t('table.count'), {
        shown: String(visibles.length),
        total: String(filas.length)
      });
    }

    const vacio = visibles.length === 0;
    const aviso = document.getElementById('table-empty');
    if (aviso) aviso.hidden = !vacio;

    // El aviso vive dentro de .table-wrap: se oculta la tabla, no el contenedor.
    const tabla = document.getElementById('migration-table');
    if (tabla) {
      tabla.hidden = vacio;
      tabla.style.display = vacio ? 'none' : '';
    }
    const wrap = $('#table .table-wrap');
    if (wrap) wrap.classList.toggle('is-empty', vacio);
  }

  /* ---------- 6. Trampas ---------- */

  function renderTrampas() {
    const cont = document.getElementById('traps-list');
    if (!cont) return;
    cont.innerHTML = (D.traps || []).map((trampa) => {
      const datos = trampa[state.lang] || trampa.es;
      return '<article class="card trap-card" data-trap="' + esc(trampa.id) + '">'
        + '<span class="trap-kicker" aria-hidden="true">' + esc(trampa.kicker) + '</span>'
        + '<h3>' + esc(datos.title) + '</h3>'
        + '<p>' + esc(datos.body) + '</p>'
        + '</article>';
    }).join('');
  }

  /* ---------- 7. Checklist ---------- */

  const CLAVE_CHECKLIST = 'loa-p2-checklist';

  function cargarChecklist() {
    const validos = new Set((D.checklist || []).map((item) => item.id));

    // 1) localStorage (funciona en http y en algunos navegadores con file://).
    const bruto = LS.get(CLAVE_CHECKLIST);
    if (bruto) {
      try {
        const ids = JSON.parse(bruto);
        if (Array.isArray(ids)) ids.forEach((id) => { if (validos.has(id)) state.checklist.add(id); });
      } catch (e) { /* estado corrupto: se ignora */ }
    }

    // 2) hash de la URL (sobrevive a la recarga en file://).
    leerHash().done.forEach((id) => { if (validos.has(id)) state.checklist.add(id); });
  }

  function guardarChecklist() {
    LS.set(CLAVE_CHECKLIST, JSON.stringify(Array.from(state.checklist)));
    escribirHash();
  }

  function actualizarProgreso() {
    const total = (D.checklist || []).length;
    const hechos = (D.checklist || []).filter((item) => state.checklist.has(item.id)).length;
    const pct = total ? Math.round((hechos / total) * 100) : 0;

    const barra = document.getElementById('checklist-progress-bar');
    if (barra) barra.setAttribute('aria-valuenow', String(pct));

    const relleno = document.getElementById('checklist-progress-fill');
    if (relleno) relleno.style.width = pct + '%';

    const etiqueta = document.getElementById('checklist-progress-label');
    if (etiqueta) {
      etiqueta.textContent = fill(t('checklist.done'), {
        done: String(hechos),
        total: String(total)
      });
    }
  }

  function renderChecklist() {
    const lista = document.getElementById('checklist-list');
    if (!lista) return;

    lista.innerHTML = (D.checklist || []).map((item) => {
      const datos = item[state.lang] || item.es;
      const marcado = state.checklist.has(item.id);
      return '<li class="check-item' + (marcado ? ' is-done' : '') + '" data-check="' + esc(item.id) + '">'
        + '<label class="check" for="chk-' + esc(item.id) + '">'
        + '<input type="checkbox" id="chk-' + esc(item.id) + '" data-check-id="' + esc(item.id) + '"'
        + (marcado ? ' checked' : '') + '>'
        + '<span class="check-box" aria-hidden="true"></span>'
        + '<span class="check-text"><strong>' + esc(datos.title) + '</strong>'
        + '<span>' + esc(datos.detail) + '</span></span>'
        + '</label>'
        + '</li>';
    }).join('');

    actualizarProgreso();
  }

  /* ---------- 8. Oro ---------- */

  function seleccionarTabOro(clave, enfocar) {
    if (!clave || !D.gold || !D.gold[clave]) return;
    state.goldTab = clave;
    renderOro();
    if (enfocar) {
      const btn = $('#gold-tabs [data-gold-tab="' + clave + '"]');
      if (btn) btn.focus();
    }
  }

  function renderOro() {
    $$('#gold-tabs [data-gold-tab]').forEach((tab) => {
      const activo = tab.getAttribute('data-gold-tab') === state.goldTab;
      tab.classList.toggle('is-active', activo);
      tab.setAttribute('aria-selected', activo ? 'true' : 'false');
      tab.tabIndex = activo ? 0 : -1;
    });

    const grid = document.getElementById('gold-grid');
    if (!grid) return;

    const items = (D.gold && D.gold[state.goldTab]) || [];
    grid.innerHTML = items.map((item) => {
      const datos = item[state.lang] || item.es;
      return '<article class="card gold-card" data-tone="' + esc(state.goldTab) + '">'
        + '<h3>' + esc(datos.title) + '</h3>'
        + '<p>' + esc(datos.detail) + '</p>'
        + '</article>';
    }).join('');
  }

  /* ---------- 9. Reglas ---------- */

  function renderReglas() {
    const cont = document.getElementById('rules-list');
    if (!cont) return;

    cont.innerHTML = (D.rules || []).map((regla, i) => {
      const datos = regla[state.lang] || regla.es;
      const abierto = state.openRules.has(i);
      const items = (datos.items || []).map((txt) => '<li>' + esc(txt) + '</li>').join('');
      return '<details class="rule"' + (abierto ? ' open' : '') + ' data-rule="' + i + '">'
        + '<summary>'
        + '<span class="rule-index" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<span class="rule-title">' + esc(datos.title) + '</span>'
        + '<span class="rule-caret" aria-hidden="true"></span>'
        + '</summary>'
        + '<ul class="rule-list">' + items + '</ul>'
        + '</details>';
    }).join('');
  }

  /* ---------- 9b. Hoja de ruta y comunidad ---------- */

  function renderPensamientos() {
    const cont = document.getElementById('thoughts-list');
    if (!cont) return;
    cont.innerHTML = (D.thoughts || []).map((item) => {
      const datos = item[state.lang] || item.es;
      return '<article class="card thought-card" data-thought="' + esc(item.id) + '">'
        + (datos.tag ? '<span class="thought-tag">' + esc(datos.tag) + '</span>' : '')
        + '<h3>' + esc(datos.title) + '</h3>'
        + '<p>' + esc(datos.body) + '</p>'
        + '</article>';
    }).join('');
  }

  /* ---------- 9c. Lectura y conclusiones ---------- */

  function renderConclusiones() {
    const data = D.conclusions || {};
    const contSynth = document.getElementById('conclusions-synthesis');
    if (contSynth) {
      contSynth.innerHTML = (data.synthesis || []).map((item) => {
        const datos = item[state.lang] || item.es;
        return '<article class="card synthesis-card" data-synthesis="' + esc(item.id) + '">'
          + (datos.kicker ? '<span class="synthesis-kicker">' + esc(datos.kicker) + '</span>' : '')
          + '<h4>' + esc(datos.title) + '</h4>'
          + '<p>' + esc(datos.body) + '</p>'
          + '</article>';
      }).join('');
    }

    const contTake = document.getElementById('conclusions-takeaways');
    if (contTake) {
      contTake.innerHTML = (data.takeaways || []).map((item) => {
        const datos = item[state.lang] || item.es;
        return '<article class="card takeaway-card" data-takeaway="' + esc(item.id) + '">'
          + (datos.badge ? '<span class="takeaway-badge">' + esc(datos.badge) + '</span>' : '')
          + '<h4>' + esc(datos.title) + '</h4>'
          + '<p>' + esc(datos.body) + '</p>'
          + '</article>';
      }).join('');
    }
  }

  /* ---------- 10. Eventos (delegación en lo que se re-renderiza) ---------- */

  function enlazarEventos() {
    // Navegación interna sin pisar el hash de persistencia (#lang=...&done=...).
    document.addEventListener('click', (ev) => {
      const enlace = ancestro(ev, 'a[href^="#"]');
      if (!enlace) return;
      const href = enlace.getAttribute('href');
      if (!href || href === '#') return;
      const destino = document.getElementById(href.slice(1));
      if (!destino) return;
      ev.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    // Idioma.
    $$('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang-btn');
        if (lang !== 'es' && lang !== 'en') return;
        if (lang === state.lang) return;
        LS.set('loa-p2-lang', lang);
        aplicarIdioma(lang);
        escribirHash();
      });
    });

    // Calculadora: submit + input en vivo.
    const form = document.getElementById('calc-form');
    if (form) {
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        calcular();
      });
    }
    const input = document.getElementById('ilvl-input');
    if (input) input.addEventListener('input', calcular);

    // Atajos (el contenedor no se reconstruye, los chips sí).
    const presets = document.getElementById('ilvl-presets');
    if (presets) {
      presets.addEventListener('click', (ev) => {
        const btn = ancestro(ev, '[data-preset]');
        if (!btn) return;
        const campo = document.getElementById('ilvl-input');
        if (!campo) return;
        campo.value = btn.getAttribute('data-preset');
        calcular();
      });
    }

    // Tabla: filtros y buscador.
    const filtros = document.getElementById('table-filters');
    if (filtros) {
      filtros.addEventListener('click', (ev) => {
        const btn = ancestro(ev, '[data-filter]');
        if (!btn) return;
        state.filter = btn.getAttribute('data-filter') || 'all';
        renderTabla();
      });
    }
    const buscador = document.getElementById('table-search');
    if (buscador) {
      buscador.addEventListener('input', () => {
        state.search = buscador.value;
        renderTabla();
      });
    }

    // Checklist: marcar/desmarcar y reiniciar.
    const lista = document.getElementById('checklist-list');
    if (lista) {
      lista.addEventListener('change', (ev) => {
        const casilla = ev.target;
        if (!casilla || casilla.type !== 'checkbox') return;
        const id = casilla.getAttribute('data-check-id');
        if (!id) return;
        if (casilla.checked) state.checklist.add(id);
        else state.checklist.delete(id);
        const item = casilla.closest('.check-item');
        if (item) item.classList.toggle('is-done', casilla.checked);
        guardarChecklist();
        actualizarProgreso();
      });
    }
    const reset = document.getElementById('checklist-reset');
    if (reset) {
      reset.addEventListener('click', () => {
        state.checklist.clear();
        LS.remove(CLAVE_CHECKLIST);
        renderChecklist();
        escribirHash();
      });
    }

    // Oro: pestañas con ratón y teclado.
    const tablist = document.getElementById('gold-tabs');
    if (tablist) {
      tablist.addEventListener('click', (ev) => {
        const btn = ancestro(ev, '[data-gold-tab]');
        if (!btn) return;
        seleccionarTabOro(btn.getAttribute('data-gold-tab'), false);
      });
      tablist.addEventListener('keydown', (ev) => {
        const actual = ancestro(ev, '[data-gold-tab]');
        if (!actual) return;
        const tabs = $$('#gold-tabs [data-gold-tab]');
        const idx = tabs.indexOf(actual);
        if (idx === -1) return;

        let destino = null;
        if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') destino = tabs[(idx + 1) % tabs.length];
        else if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') destino = tabs[(idx - 1 + tabs.length) % tabs.length];
        else if (ev.key === 'Home') destino = tabs[0];
        else if (ev.key === 'End') destino = tabs[tabs.length - 1];
        if (!destino) return;

        ev.preventDefault();
        seleccionarTabOro(destino.getAttribute('data-gold-tab'), true);
      });
    }

    // Reglas: 'toggle' no burbujea, se escucha en captura.
    const reglas = document.getElementById('rules-list');
    if (reglas) {
      reglas.addEventListener('toggle', (ev) => {
        const det = ev.target;
        if (!det || det.tagName !== 'DETAILS') return;
        const idx = Number(det.getAttribute('data-rule'));
        if (!isFinite(idx)) return;
        if (det.open) state.openRules.add(idx);
        else state.openRules.delete(idx);
      }, true);
    }
  }

  /* ---------- 11. Arranque ---------- */

  function iniciar() {
    seguro(cargarChecklist);
    seguro(generarPresets);
    seguro(enlazarEventos);
    seguro(() => aplicarIdioma(idiomaInicial()));
    seguro(escribirHash);
  }

  try {
    iniciar();
  } catch (e) {
    /* La página debe seguir siendo legible aunque falle un módulo. */
  }
})();
