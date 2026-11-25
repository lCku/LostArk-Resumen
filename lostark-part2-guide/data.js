/* Lost Ark Parte 2 · datos y textos
   Fuente: aviso oficial 13608 (25/11/2026).
   La tabla es "mayor que gt, hasta lte". */

window.LOA = {

  presets: [1600, 1605, 1675, 1770, 1775, 1785, 1790, 1795],

  migration: [
    { gt: 50,    lte: 100,  grade: 't1-advanced',  step: 0, ilvl: 100  },
    { gt: 100,   lte: 150,  grade: 't1-rare',      step: 0, ilvl: 150  },
    { gt: 150,   lte: 200,  grade: 't1-epic',      step: 0, ilvl: 200  },
    { gt: 200,   lte: 250,  grade: 't1-legendary', step: 0, ilvl: 250  },
    { gt: 250,   lte: 600,  grade: 't2-normal',    step: 0, ilvl: 600  },
    { gt: 600,   lte: 700,  grade: 't2-advanced',  step: 0, ilvl: 700  },
    { gt: 700,   lte: 800,  grade: 't2-rare',      step: 0, ilvl: 800  },
    { gt: 800,   lte: 900,  grade: 't2-epic',      step: 0, ilvl: 900  },
    { gt: 900,   lte: 1000, grade: 't2-legendary', step: 0, ilvl: 1000 },
    { gt: 1000,  lte: 1200, grade: 't3-normal',    step: 0, ilvl: 1200 },
    { gt: 1200,  lte: 1300, grade: 't3-advanced',  step: 0, ilvl: 1300 },
    { gt: 1300,  lte: 1400, grade: 't3-rare',      step: 0, ilvl: 1400 },
    { gt: 1400,  lte: 1500, grade: 't3-epic',      step: 0, ilvl: 1500 },
    { gt: 1500,  lte: 1600, grade: 't3-legendary', step: 0, ilvl: 1600 },
    { gt: 1600,  lte: 1675, grade: 't4-advanced',  step: 0, ilvl: 1675 },
    { gt: 1675,  lte: 1680, grade: 't4-advanced',  step: 1, ilvl: 1680 },
    { gt: 1680,  lte: 1685, grade: 't4-advanced',  step: 2, ilvl: 1685 },
    { gt: 1685,  lte: 1690, grade: 't4-advanced',  step: 3, ilvl: 1690 },
    { gt: 1690,  lte: 1695, grade: 't4-advanced',  step: 4, ilvl: 1695 },
    { gt: 1695,  lte: 1700, grade: 't4-rare',      step: 0, ilvl: 1700 },
    { gt: 1700,  lte: 1705, grade: 't4-rare',      step: 1, ilvl: 1705 },
    { gt: 1705,  lte: 1710, grade: 't4-rare',      step: 2, ilvl: 1710 },
    { gt: 1710,  lte: 1715, grade: 't4-rare',      step: 3, ilvl: 1715 },
    { gt: 1715,  lte: 1720, grade: 't4-rare',      step: 4, ilvl: 1720 },
    { gt: 1720,  lte: 1725, grade: 't4-epic',      step: 0, ilvl: 1725 },
    { gt: 1725,  lte: 1730, grade: 't4-epic',      step: 1, ilvl: 1730 },
    { gt: 1730,  lte: 1735, grade: 't4-epic',      step: 2, ilvl: 1735 },
    { gt: 1735,  lte: 1740, grade: 't4-epic',      step: 3, ilvl: 1740 },
    { gt: 1740,  lte: 1745, grade: 't4-epic',      step: 4, ilvl: 1745 },
    { gt: 1745,  lte: 1750, grade: 't4-legendary', step: 0, ilvl: 1750 },
    { gt: 1750,  lte: 1755, grade: 't4-legendary', step: 1, ilvl: 1755 },
    { gt: 1755,  lte: 1760, grade: 't4-legendary', step: 2, ilvl: 1760 },
    { gt: 1760,  lte: 1765, grade: 't4-legendary', step: 3, ilvl: 1765 },
    { gt: 1765,  lte: 1770, grade: 't4-legendary', step: 4, ilvl: 1770 },
    { gt: 1770,  lte: 1775, grade: 't4-relic',     step: 2, ilvl: 1785 },
    { gt: 1775,  lte: 1780, grade: 't4-relic',     step: 3, ilvl: 1790 },
    { gt: 1780,  lte: 1785, grade: 't4-relic',     step: 4, ilvl: 1795 },
    { gt: 1785,  lte: 1790, grade: 't4-ancient',   step: 0, ilvl: 1800 },
    { gt: 1790,  lte: 1795, grade: 't4-ancient',   step: 2, ilvl: 1810 },
    { gt: 1795,  lte: 1800, grade: 't4-ancient',   step: 3, ilvl: 1815 }
  ],

  grades: {
    es: {
      't1-advanced': 'T1 Avanzado',
      't1-rare': 'T1 Raro',
      't1-epic': 'T1 Épico',
      't1-legendary': 'T1 Legendario',
      't2-normal': 'T2 Normal',
      't2-advanced': 'T2 Avanzado',
      't2-rare': 'T2 Raro',
      't2-epic': 'T2 Épico',
      't2-legendary': 'T2 Legendario',
      't3-normal': 'T3 Normal',
      't3-advanced': 'T3 Avanzado',
      't3-rare': 'T3 Raro',
      't3-epic': 'T3 Épico',
      't3-legendary': 'T3 Legendario',
      't4-advanced': 'T4 Avanzado',
      't4-rare': 'T4 Raro',
      't4-epic': 'T4 Épico',
      't4-legendary': 'T4 Legendario',
      't4-relic': 'T4 Reliquia',
      't4-ancient': 'T4 Antiguo'
    },
    en: {
      't1-advanced': 'T1 Advanced',
      't1-rare': 'T1 Rare',
      't1-epic': 'T1 Epic',
      't1-legendary': 'T1 Legendary',
      't2-normal': 'T2 Normal',
      't2-advanced': 'T2 Advanced',
      't2-rare': 'T2 Rare',
      't2-epic': 'T2 Epic',
      't2-legendary': 'T2 Legendary',
      't3-normal': 'T3 Normal',
      't3-advanced': 'T3 Advanced',
      't3-rare': 'T3 Rare',
      't3-epic': 'T3 Epic',
      't3-legendary': 'T3 Legendary',
      't4-advanced': 'T4 Advanced',
      't4-rare': 'T4 Rare',
      't4-epic': 'T4 Epic',
      't4-legendary': 'T4 Legendary',
      't4-relic': 'T4 Relic',
      't4-ancient': 'T4 Ancient'
    }
  },



  ui: {
    es: {
      'brand.title': 'Parte 2',
      'brand.sub': 'Guía de preparación',
      'a11y.skip': 'Saltar al contenido',
      'nav.calc': 'Calculadora',
      'nav.table': 'Tabla',
      'nav.traps': 'Trampas',
      'nav.checklist': 'Checklist',
      'nav.gold': 'Oro',
      'nav.rules': 'Reglas',
      'nav.thoughts': 'Qué viene',
      'nav.conclusions': 'Conclusiones',
      'nav.sources': 'Fuentes',

      'hero.eyebrow': 'Aviso oficial · 25 nov 2026',
      'hero.title': 'La Parte 2 borra sistemas enteros. Decide antes del mantenimiento.',
      'hero.lead': 'El honing pasa a ser por ranura, la calidad desaparece, los accesorios se vuelven libros y el material de Tier 3 se elimina. Esta guía traduce el aviso y te dice qué mover, qué no comprar y qué piezas vale la pena subir antes del parche.',
      'hero.cta1': 'Calcular mi pieza',
      'hero.cta2': 'Ver checklist',
      'hero.note': 'Sin build, sin conexión y sin cuentas: se abre con doble clic y funciona offline.',

      'calc.eyebrow': 'Herramienta',
      'calc.title': 'Calculadora de migración',
      'calc.lead': 'La conversión es por pieza, no por personaje. Escribe el nivel de objeto de una pieza y mira qué te da el parche, y si el siguiente paso de honing sirve o es dinero perdido.',
      'calc.label': 'Nivel de objeto de la pieza',
      'calc.submit': 'Calcular',
      'calc.hint': 'Los pasos de honing van de 5 en 5, así que los niveles reales son 1770, 1775, 1780 y así.',
      'calc.presetsLabel': 'Atajos',
      'calc.newIlvl': 'Nivel nuevo',
      'calc.gain': 'Ganancia gratis',
      'calc.grade': 'Grado nuevo',
      'calc.step': 'Paso de pulido',
      'calc.footnote': 'Umbrales de grado: desde 1775 la pieza nueva sale como Reliquia y desde 1790 como Antiguo.',
      'calc.idle': 'Escribe un nivel para empezar.',
      'calc.below': 'Por debajo del rango de la tabla',
      'calc.belowBody': 'La tabla publicada empieza por encima de 50. Una pieza así se sustituye por equipo de nivel 100 o inferior.',
      'calc.above': 'Por encima de la tabla',
      'calc.aboveBody': 'La tabla termina en 1800. Por encima de eso rigen las reglas del arma Esther: una Esther de 1800 o más entrega las seis piezas derivadas del arma en pulido 25.',
      'calc.vBigTitle': 'Honea ya: este paso regala nivel',
      'calc.vBigBody': 'El siguiente paso ({from} → {to}) deja la pieza en {newIlvl}, {delta} puntos por encima de donde estaría sin subir. Es el mejor retorno de oro del parche.',
      'calc.vDeadTitle': 'No honees: zona muerta',
      'calc.vDeadBody': 'De {from} a {to} la tabla entrega el mismo nivel nuevo. Gastas oro y material para llegar al mismo sitio. Espera al parche.',
      'calc.vNeutralTitle': 'Neutral: suma 5, sin bonus',
      'calc.vNeutralBody': 'El siguiente paso ({from} → {to}) lleva el nivel nuevo a {newIlvl}, lo mismo que subiría en el sistema nuevo. Hazlo solo si ese material se va a convertir igual.',
      'calc.vMaxTitle': 'Ya estás en el techo de la tabla',
      'calc.vMaxBody': 'Con 1800 o más, la tabla deja de aplicar y entran las reglas del arma Esther. No hay bonus extra por seguir subiendo antes del parche.',
      'calc.next': 'Siguiente paso: {from} → {to} entrega {newIlvl} ({delta}).',
      'calc.nextNone': 'No hay siguiente paso dentro de la tabla.',
      'calc.nextAbove': 'Con 1800 o más aplican las reglas del arma Esther, no esta tabla.',
      'calc.nextBelow': 'Por debajo de 51 no hay tramo publicado en el aviso.',
      'calc.gradeChange': 'Cambia el grado a {grade}.',
      'calc.deltaPlus': '+{n}',

      'table.eyebrow': 'Referencia',
      'table.title': 'Tabla de migración completa',
      'table.lead': 'Cada tramo es "mayor que el límite inferior, hasta el límite superior". Busca tu nivel o filtra los tramos donde el honing no suma nada.',
      'table.searchLabel': 'Buscar nivel',
      'table.searchPlaceholder': 'Ej. 1770',
      'table.filterAll': 'Todo',
      'table.filterDead': 'Zona muerta',
      'table.filterLift': 'Salto alto',
      'table.filterAncient': 'Antiguo',
      'table.caption': 'Migración de nivel de objeto por pieza',
      'table.colOld': 'Nivel viejo',
      'table.colNew': 'Nivel nuevo',
      'table.colLift': 'Ganancia',
      'table.colGrade': 'Grado',
      'table.colStep': 'Paso',
      'table.empty': 'Ningún tramo coincide con esa búsqueda.',
      'table.count': 'Mostrando {shown} de {total} tramos',
      'table.range': '{from} a {to}',
      'table.rangeSingle': '{to}',
      'table.legendDead': 'Zona muerta: honear dentro del tramo no suma nivel',
      'table.legendLift': 'Salto alto: el escalón regala nivel',

      'traps.eyebrow': 'Lo que cuesta oro',
      'traps.title': 'Tres trampas de la tabla',
      'traps.lead': 'La tabla no es lineal. Hay escalones que regalan nivel y tramos donde honear no mueve nada.',

      'checklist.eyebrow': 'Antes del mantenimiento',
      'checklist.title': 'Checklist de cierre',
      'checklist.lead': 'Nueve movimientos que no se pueden recuperar después del parche. El progreso se guarda solo, incluso si cierras la página.',
      'checklist.reset': 'Reiniciar',
      'checklist.done': '{done} de {total} completados',

      'gold.eyebrow': 'Economía',
      'gold.title': '¿Guardar oro o invertirlo?',
      'gold.lead': 'El oro sobrevive al parche. Casi todo lo demás se convierte, se borra o pierde valor. La regla es simple: no conviertas oro en activos con fecha de vencimiento.',
      'gold.tabAvoid': 'No comprar',
      'gold.tabKeep': 'Conservar',
      'gold.tabLiquid': 'Convertir y vender',

      'rules.eyebrow': 'Detalle',
      'rules.title': 'Qué pasa con cada sistema',
      'rules.lead': 'Doce bloques con lo que se elimina, lo que se convierte y lo que se reembolsa.',

      'sources.eyebrow': 'Trazabilidad',
      'sources.title': 'Fuentes y contexto',
      'sources.body': 'Las cifras de la tabla, los ratios de conversión y las reglas de sistemas salen del aviso oficial de reestructuración de la Parte 2 (Notice 13608, 25 de noviembre de 2026). El apartado de hoja de ruta y conclusiones cruza ese aviso con el resumen del directo KR State of the Game 2026 (Maxroll), comunicados de feedback de la versión occidental (playlostark.com) y análisis de estado del juego de 2026.',
      'sources.linkLabel': 'Aviso oficial · Notice 13608',
      'sources.contextLabel': 'Resumen KR State of the Game (Part 2) · Maxroll',
      'sources.feedbackLabel': 'Cambios y feedback occidental · playlostark.com',
      'sources.disclaimer': 'El aviso no publica la fecha exacta del mantenimiento: confírmala en la web oficial. Esta guía es un proyecto local sin relación con Smilegate.',

      'thoughts.eyebrow': 'Hoja de ruta y comunidad',
      'thoughts.title': '¿Qué viene después?',
      'thoughts.lead': 'Resumen de los anuncios del director Lee Byung-tak, el directo State of the Game 2026 (Parte 2) y los cambios previstos rumbo al Winter LOA ON del 19 de diciembre.',

      'conclusions.eyebrow': 'Lectura y balance',
      'conclusions.title': 'A qué se llega y conclusiones',
      'conclusions.lead': 'Qué explica un giro tan drástico en 2026, hacia dónde apunta la Parte 2 y qué conviene concluir según tu forma de jugar.',
      'conclusions.synthesisTitle': 'Lectura general: por qué ocurre y a qué se llega',
      'conclusions.takeawaysTitle': 'Conclusiones por perfil de jugador',

      'footer.built': 'Proyecto local de estudio',
      'footer.updated': 'Actualizado',
      'footer.fine': 'Lost Ark es una marca de Smilegate. Esta página no está afiliada ni patrocinada por Smilegate.'
    },

    en: {
      'brand.title': 'Part 2',
      'brand.sub': 'Preparation guide',
      'a11y.skip': 'Skip to content',
      'nav.calc': 'Calculator',
      'nav.table': 'Table',
      'nav.traps': 'Traps',
      'nav.checklist': 'Checklist',
      'nav.gold': 'Gold',
      'nav.rules': 'Rules',
      'nav.thoughts': "What's next",
      'nav.conclusions': 'Conclusions',
      'nav.sources': 'Sources',

      'hero.eyebrow': 'Official notice · Nov 25, 2026',
      'hero.title': 'Part 2 deletes whole systems. Decide before maintenance.',
      'hero.lead': 'Honing moves to slots, quality disappears, accessories become tomes, and all Tier 3 material is removed. This guide translates the notice and tells you what to move, what not to buy, and which pieces are worth pushing before the patch.',
      'hero.cta1': 'Check my piece',
      'hero.cta2': 'See checklist',
      'hero.note': 'No build step, no connection, no accounts: double click and it runs offline.',

      'calc.eyebrow': 'Tool',
      'calc.title': 'Migration calculator',
      'calc.lead': 'Conversion is per piece, not per character. Type a piece item level to see what the patch gives you, and whether the next honing step is worth gold or wasted.',
      'calc.label': 'Piece item level',
      'calc.submit': 'Calculate',
      'calc.hint': 'Honing steps come in fives, so real levels are 1770, 1775, 1780 and so on.',
      'calc.presetsLabel': 'Shortcuts',
      'calc.newIlvl': 'New level',
      'calc.gain': 'Free gain',
      'calc.grade': 'New grade',
      'calc.step': 'Polish step',
      'calc.footnote': 'Grade thresholds: from 1775 the new piece comes out as Relic, from 1790 as Ancient.',
      'calc.idle': 'Enter a level to start.',
      'calc.below': 'Below the table range',
      'calc.belowBody': 'The published table starts above 50. A piece that low is replaced by level 100 gear or lower.',
      'calc.above': 'Above the table',
      'calc.aboveBody': 'The table ends at 1800. Above that, Esther weapon rules apply: an Esther at 1800 or more grants the six weapon-derived pieces at polish 25.',
      'calc.vBigTitle': 'Hone now: this step gives free level',
      'calc.vBigBody': 'The next step ({from} → {to}) leaves the piece at {newIlvl}, {delta} points above where it would be without it. Best gold return in the patch.',
      'calc.vDeadTitle': 'Do not hone: dead zone',
      'calc.vDeadBody': 'From {from} to {to} the table gives the same new level. You spend gold and material to land in the same place. Wait for the patch.',
      'calc.vNeutralTitle': 'Neutral: plus 5, no bonus',
      'calc.vNeutralBody': 'The next step ({from} → {to}) takes the new level to {newIlvl}, the same as it would move in the new system. Do it only if that material will be converted anyway.',
      'calc.vMaxTitle': 'You are at the table ceiling',
      'calc.vMaxBody': 'At 1800 or more the table stops applying and Esther rules take over. There is no extra bonus for pushing further before the patch.',
      'calc.next': 'Next step: {from} → {to} yields {newIlvl} ({delta}).',
      'calc.nextNone': 'No further step inside the table.',
      'calc.nextAbove': 'At 1800 or more Esther weapon rules apply, not this table.',
      'calc.nextBelow': 'Below 51 the notice publishes no bracket.',
      'calc.gradeChange': 'Grade changes to {grade}.',
      'calc.deltaPlus': '+{n}',

      'table.eyebrow': 'Reference',
      'table.title': 'Full migration table',
      'table.lead': 'Every bracket reads "above the lower bound, up to the upper bound". Search your level or filter the brackets where honing adds nothing.',
      'table.searchLabel': 'Search level',
      'table.searchPlaceholder': 'e.g. 1770',
      'table.filterAll': 'All',
      'table.filterDead': 'Dead zone',
      'table.filterLift': 'Big jump',
      'table.filterAncient': 'Ancient',
      'table.caption': 'Per-piece item level migration',
      'table.colOld': 'Old level',
      'table.colNew': 'New level',
      'table.colLift': 'Gain',
      'table.colGrade': 'Grade',
      'table.colStep': 'Step',
      'table.empty': 'No bracket matches that search.',
      'table.count': 'Showing {shown} of {total} brackets',
      'table.range': '{from} to {to}',
      'table.rangeSingle': '{to}',
      'table.legendDead': 'Dead zone: honing inside this bracket adds no level',
      'table.legendLift': 'Big jump: the step hands out level',

      'traps.eyebrow': 'Where gold dies',
      'traps.title': 'Three traps in the table',
      'traps.lead': 'The table is not linear. Some steps hand out free levels and some brackets move nothing at all.',

      'checklist.eyebrow': 'Before maintenance',
      'checklist.title': 'Closing checklist',
      'checklist.lead': 'Nine moves that cannot be undone after the patch. Progress saves itself, even if you close the page.',
      'checklist.reset': 'Reset',
      'checklist.done': '{done} of {total} done',

      'gold.eyebrow': 'Economy',
      'gold.title': 'Save gold or spend it?',
      'gold.lead': 'Gold survives the patch. Almost everything else converts, gets deleted, or loses value. The rule is simple: do not turn gold into assets with an expiry date.',
      'gold.tabAvoid': 'Do not buy',
      'gold.tabKeep': 'Keep',
      'gold.tabLiquid': 'Convert and sell',

      'rules.eyebrow': 'Detail',
      'rules.title': 'What happens to each system',
      'rules.lead': 'Twelve blocks covering what is removed, what converts, and what gets refunded.',

      'sources.eyebrow': 'Traceability',
      'sources.title': 'Sources & context',
      'sources.body': 'Table numbers, conversion ratios, and system rules come from the official Part 2 restructuring notice (Notice 13608, Nov 25, 2026). The roadmap and conclusions sections combine that notice with the KR State of the Game 2026 (Part 2) stream summary (Maxroll), Western feedback updates (playlostark.com), and 2026 ecosystem assessments.',
      'sources.linkLabel': 'Official notice · Notice 13608',
      'sources.contextLabel': 'KR State of the Game (Part 2) Summary · Maxroll',
      'sources.feedbackLabel': 'Western feedback & changes · playlostark.com',
      'sources.disclaimer': 'The notice does not publish the exact maintenance date: confirm it on the official site. This guide is a local project with no ties to Smilegate.',

      'thoughts.eyebrow': 'Roadmap & community',
      'thoughts.title': 'What comes next?',
      'thoughts.lead': 'Summary of announcements from director Lee Byung-tak, the State of the Game 2026 (Part 2) stream, and upcoming shifts heading into Winter LOA ON on Dec 19.',

      'conclusions.eyebrow': 'Synthesis & takeaways',
      'conclusions.title': 'Where this leads & conclusions',
      'conclusions.lead': 'Why such a radical redesign is happening in 2026, what Part 2 actually changes in direction, and practical conclusions by player profile.',
      'conclusions.synthesisTitle': 'Big picture: why it happens and where it leads',
      'conclusions.takeawaysTitle': 'Conclusions by player profile',

      'footer.built': 'Local study project',
      'footer.updated': 'Updated',
      'footer.fine': 'Lost Ark is a Smilegate trademark. This page is not affiliated with or sponsored by Smilegate.'
    }
  },

  traps: [
    {
      id: 'steps',
      kicker: '01',
      es: {
        title: 'Escalones que regalan nivel',
        body: 'Una pieza clavada en 1600, 1675 o 1770 recibe cero de regalo. Un solo paso la saca del escalón muerto: el caso extremo es 1600 a 1605, que convierte la pieza en 1675, un salto de 70 niveles por un solo honing.'
      },
      en: {
        title: 'Steps that hand out levels',
        body: 'A piece sitting exactly at 1600, 1675 or 1770 gets zero free gain. One single step lifts it off the dead rung: the extreme case is 1600 to 1605, which turns the piece into 1675, a 70 level jump for one hone.'
      }
    },
    {
      id: 'dead',
      kicker: '02',
      es: {
        title: 'Zonas muertas de 70 niveles',
        body: 'Entre 1605 y 1670 todo cae en el mismo tramo y termina en 1675. Honear de 1620 a 1625 no cambia nada en el sistema nuevo: es oro y material tirados. Lo mismo ocurre entre 1505 y 1600.'
      },
      en: {
        title: 'Seventy level dead zones',
        body: 'Everything from 1605 to 1670 lands in the same bracket and ends at 1675. Honing 1620 to 1625 changes nothing in the new system: that is gold and material thrown away. The same happens between 1505 and 1600.'
      }
    },
    {
      id: 'grade',
      kicker: '03',
      es: {
        title: 'El umbral de grado',
        body: 'Desde 1775 la pieza nueva sale como Reliquia y desde 1790 como Antiguo. Si te faltan dos pasos para 1790, es la inversión con mejor retorno después de los escalones muertos.'
      },
      en: {
        title: 'The grade threshold',
        body: 'From 1775 the new piece comes out as Relic, and from 1790 as Ancient. If you are two steps away from 1790, that is the best return on investment after the dead rungs.'
      }
    }
  ],

  checklist: [
    {
      id: 't3-mats',
      es: {
        title: 'Intercambia el material de Tier 3 a Tier 4',
        detail: 'Piedras de ruptura y guardián, piedras de salto y materiales de fusión de T3 se eliminan. Solo los Fragmentos de Honor sobreviven, y se pagan en plata. Usa el NPC de intercambio de material de honing.'
      },
      en: {
        title: 'Swap Tier 3 material into Tier 4',
        detail: 'T3 destruction and guardian stones, leapstones and fusion material are all deleted. Only Honor Shards survive, and they are paid out as silver. Use the honing material exchange NPC.'
      }
    },
    {
      id: 'dead-rung',
      es: {
        title: 'Honea un solo paso las piezas clavadas',
        detail: 'Si una pieza está exactamente en 1600, 1675 o 1770, un paso la saca del escalón muerto: hasta 70 niveles nuevos por un honing.'
      },
      en: {
        title: 'One step on pieces stuck on a rung',
        detail: 'If a piece sits exactly at 1600, 1675 or 1770, one step lifts it off the dead rung: up to 70 new levels for a single hone.'
      }
    },
    {
      id: 'ancient',
      es: {
        title: 'Empuja a 1790 las piezas cerca del grado Antiguo',
        detail: 'Desde 1790 la pieza nueva sale Antigua. Si estás en 1785 o 1780, valora el salto antes del mantenimiento: es el mejor retorno después de los escalones muertos.'
      },
      en: {
        title: 'Push pieces near Ancient to 1790',
        detail: 'From 1790 the new piece comes out Ancient. If you are at 1785 or 1780, weigh the jump before maintenance: best return after the dead rungs.'
      }
    },
    {
      id: 'gems-low',
      es: {
        title: 'Fusiona las gemas T3 de nivel 1 y 2',
        detail: 'Esas se borran sin compensación. Súbelas a nivel 3 o más para que entren en la conversión, que baja dos niveles y las vuelve gemas T4.'
      },
      en: {
        title: 'Fuse T3 gems at level 1 and 2',
        detail: 'Those are deleted with no compensation. Push them to level 3 or higher so they enter the conversion, which drops them two levels and turns them into T4 gems.'
      }
    },
    {
      id: 'bracelet',
      es: {
        title: 'Aplica efectos a los brazaletes T4',
        detail: 'Sin efectos, un brazalete solo entrega material de desmontaje. Con efectos, el mejor de tu personaje se convierte en un libro de sello de grado 1 a 21.'
      },
      en: {
        title: 'Apply effects to T4 bracelets',
        detail: 'Without effects a bracelet only yields dismantle material. With effects, your best one becomes a seal tome graded 1 to 21.'
      }
    },
    {
      id: 'potions',
      es: {
        title: 'Gasta pociones de aura, descanso y arena',
        detail: 'Las pociones de Aura de Resonancia, las de bono de descanso y la Arena de Pruebas se eliminan sin compensación.'
      },
      en: {
        title: 'Spend aura, rest and trial consumables',
        detail: 'Resonance Aura potions, rest bonus potions and Trial Sand are deleted with no compensation.'
      }
    },
    {
      id: 'bloodstones',
      es: {
        title: 'Reparte las piedras de sangre del gremio',
        detail: 'Las del gremio no se compensan. Las de tus personajes se cambian a plata de forma automática.'
      },
      en: {
        title: 'Distribute guild bloodstones',
        detail: 'Guild-held bloodstones get no compensation. Bloodstones on your characters convert to silver automatically.'
      }
    },
    {
      id: 'styling',
      es: {
        title: 'Reclama el apoyo de estilo del salto',
        detail: 'El apoyo de estilo de los pases de salto deja de existir con la Parte 2.'
      },
      en: {
        title: 'Claim jump styling support',
        detail: 'Styling support from power passes stops existing with Part 2.'
      }
    },
    {
      id: 'market',
      es: {
        title: 'Limpia el mercado',
        detail: 'La subasta desaparece y todas las publicaciones se cancelan. Vende lo que no vayas a usar y no dejes nada listado.'
      },
      en: {
        title: 'Clean up the market',
        detail: 'The auction house disappears and every listing is cancelled. Sell what you will not use and leave nothing listed.'
      }
    }
  ],

  gold: {
    avoid: [
      {
        es: { title: 'Libros de grabado legendarios', detail: 'Los grabados pasan a grado reliquia base y los libros legendarios dejan de usarse. Comprarlos ahora es quemar oro.' },
        en: { title: 'Legendary engraving books', detail: 'Engravings drop to relic base grade and legendary books stop being used. Buying them now is burning gold.' }
      },
      {
        es: { title: 'Piedras de habilidad', detail: 'El sistema se elimina. Solo cuenta la piedra que ya tienes con 4 o más puntos válidos; el resto se convierte en polvo.' },
        en: { title: 'Ability stones', detail: 'The system is removed. Only a stone you already own with 4 or more valid points counts; the rest becomes powder.' }
      },
      {
        es: { title: 'Accesorios y brazaletes', detail: 'Se convierten en libros según sus opciones. El mercado de accesorios desaparece: pagar precio de accesorio por algo que será un libro es una pérdida.' },
        en: { title: 'Accessories and bracelets', detail: 'They turn into tomes based on their options. The accessory market disappears: paying accessory prices for something that becomes a tome is a loss.' }
      },
      {
        es: { title: 'Materiales de mejora de calidad', detail: 'La calidad se elimina y sus materiales pasan a fichas.' },
        en: { title: 'Quality upgrade material', detail: 'Quality is removed and its material becomes tokens.' }
      },
      {
        es: { title: 'Materiales de karma', detail: 'El karma se elimina; sus ítems pasan a fichas.' },
        en: { title: 'Karma material', detail: 'Karma is removed; its items become tokens.' }
      },
      {
        es: { title: 'Runas de habilidad', detail: 'Se eliminan. Parte del efecto migra a gemas y daño PvE, no al objeto que compras.' },
        en: { title: 'Skill runes', detail: 'They are removed. Part of the effect migrates into gems and PvE damage, not into the item you buy.' }
      },
      {
        es: { title: 'Herramientas y materiales de vida', detail: 'Se convierten a Cristal de Vida o a oro, y solo una herramienta legendaria o relic por tipo se reembolsa en oro. Las copias extra no se pagan.' },
        en: { title: 'Life tools and life material', detail: 'They convert to Life Crystals or gold, and only one legendary or relic tool per type is refunded in gold. Extra copies are not paid for.' }
      },
      {
        es: { title: 'Mapas secretos', detail: 'Se convierten por valor tasado, no por precio de mercado.' },
        en: { title: 'Secret maps', detail: 'They convert at appraised value, not market price.' }
      },
      {
        es: { title: 'Material de honing Tier 3', detail: 'Se borra. Solo los Fragmentos de Honor se pagan en plata.' },
        en: { title: 'Tier 3 honing material', detail: 'It is deleted. Only Honor Shards are paid out as silver.' }
      }
    ],
    keep: [
      {
        es: { title: 'La pieza de mayor calidad por slot', detail: 'Las fichas de compensación se calculan con la calidad más alta que tengas en cada slot. El arma Esther no entra en ese cálculo.' },
        en: { title: 'Your highest quality piece per slot', detail: 'Compensation tokens are calculated from the highest quality you own in each slot. Esther weapons are excluded.' }
      },
      {
        es: { title: 'Accesorios T4 con calidad 67 o más', detail: 'Con opciones válidas se convierten en libros de grado 1 a 6 y conservan el número de comercios del accesorio original.' },
        en: { title: 'T4 accessories at quality 67 or higher', detail: 'With valid options they become tomes graded 1 to 6 and keep the original accessory trade count.' }
      },
      {
        es: { title: 'El mejor brazalete T4', detail: 'Solo uno por personaje se convierte en libro de sello, de grado 1 a 21. Los demás son material de desmontaje.' },
        en: { title: 'Your best T4 bracelet', detail: 'Only one per character becomes a seal tome, graded 1 to 21. The rest is dismantle material.' }
      },
      {
        es: { title: 'La piedra con 4 o más puntos válidos', detail: 'Define el nivel de tus ranuras de grabado. Las de 5 o más que sobren dan material de crecimiento de accesorios.' },
        en: { title: 'The stone with 4 or more valid points', detail: 'It sets your engraving slot level. Extra stones at 5 or more give accessory growth material.' }
      },
      {
        es: { title: 'Gemas T4', detail: 'Las T4 de nivel 1 a 10 pasan al mismo nivel. Es la conversión más limpia del parche: no pierdes nada.' },
        en: { title: 'T4 gems', detail: 'T4 gems from level 1 to 10 keep their level. Cleanest conversion in the patch: you lose nothing.' }
      }
    ],
    liquid: [
      {
        es: { title: 'Vende el material T4 que no vas a gastar', detail: 'Se convierte a fichas a un ratio fijo, no a precio de mercado. Si no lo usas, el mercado te paga más hoy que la ficha mañana.' },
        en: { title: 'Sell T4 material you will not spend', detail: 'It converts to tokens at a fixed ratio, not at market price. If you will not use it, the market pays more today than the token does tomorrow.' }
      },
      {
        es: { title: 'Cancela todas tus publicaciones', detail: 'La subasta desaparece y el mantenimiento cancela todo lo listado.' },
        en: { title: 'Cancel every listing', detail: 'The auction house disappears and maintenance cancels everything listed.' }
      },
      {
        es: { title: 'Mueve oro por el mercado, no por correo', detail: 'El correo y el trato directo pasan a usar confianza; con confianza baja se cobra peón como recargo.' },
        en: { title: 'Move gold through the market, not mail', detail: 'Mail and direct trades start using trust; low trust adds a peon surcharge.' }
      },
      {
        es: { title: 'Reparte las piedras de sangre del gremio', detail: 'Las del gremio no se compensan. Es oro que desaparece si nadie las reclama.' },
        en: { title: 'Distribute guild bloodstones', detail: 'Guild-held ones get no compensation. That is gold vanishing if nobody claims it.' }
      },
      {
        es: { title: 'Reclama las recompensas extra gratis', detail: 'La recompensa extra gratuita de fin de juego y el beneficio de PC bang que la daba se eliminan.' },
        en: { title: 'Claim free extra rewards', detail: 'The free endgame extra reward and the PC bang perk that granted it are removed.' }
      },
      {
        es: { title: 'Cuenta tus personajes de oro', detail: 'Con seis personajes cobrando, del séptimo en adelante el fin de juego paga oro ligado al personaje. Ese oro queda atrapado en ese personaje.' },
        en: { title: 'Count your gold characters', detail: 'Once six characters have collected, the seventh and beyond earn character-bound gold. That gold stays locked to that character.' }
      }
    ]
  },

  rules: [
    {
      id: 'honing',
      es: { title: 'Honing y equipo', items: [
        'Refinas la ranura, no la pieza. El honing superior y el especial se eliminan.',
        'El equipo nuevo no se puede destruir, vender ni comerciar.',
        'Pasas de 6 a 16 slots: arma, brazal, seis armaduras, reliquia, sello, collar, dos pendientes, dos anillos y brazalete.',
        'La energía de artesano acumulada se mantiene en la ranura equivalente.'
      ] },
      en: { title: 'Honing and gear', items: [
        'You hone the slot, not the piece. Advanced and special honing are removed.',
        'New gear cannot be destroyed, sold or traded.',
        'Six slots become sixteen: weapon, bracer, six armor pieces, relic, seal, necklace, two earrings, two rings and bracelet.',
        'Accumulated artisan energy carries over to the equivalent slot.'
      ] }
    },
    {
      id: 'materials',
      es: { title: 'Materiales de honing', items: [
        'Tier 3: todo se elimina salvo los Fragmentos de Honor y sus cofres, que se pagan en plata.',
        'Tier 4: piedras de ruptura y guardián, materiales de fusión y alientos se convierten a material de crecimiento nuevo.',
        'Piedras de salto, fragmentos del destino, metalurgia, sastrería y materiales especiales pasan a fichas de intercambio.'
      ] },
      en: { title: 'Honing material', items: [
        'Tier 3: everything is removed except Honor Shards and their pouches, paid out as silver.',
        'Tier 4: destruction and guardian stones, fusion material and breath items convert to new growth material.',
        'Leapstones, fate fragments, metallurgy, tailoring and special material become exchange tokens.'
      ] }
    },
    {
      id: 'quality',
      es: { title: 'Calidad', items: [
        'Desaparece en equipo y accesorios, junto con su sistema de mejora.',
        'Los materiales de mejora de calidad pasan a fichas.',
        'Se pagan fichas extra según la calidad más alta que tengas por slot; el arma Esther no cuenta.'
      ] },
      en: { title: 'Quality', items: [
        'It disappears from gear and accessories, along with its upgrade system.',
        'Quality upgrade material becomes tokens.',
        'Extra tokens are paid based on your highest quality per slot; Esther weapons do not count.'
      ] }
    },
    {
      id: 'accessories',
      es: { title: 'Accesorios', items: [
        'Ahora tienen nivel de objeto y crecen por ranura; el pulido de accesorios desaparece.',
        'T4 antiguo con calidad 67 o más y opciones válidas: libro de grado 1 a 6, conservando los comercios.',
        'Calidad menor a 67 u opciones no válidas: fragmentos de gema, canjeables por plata.'
      ] },
      en: { title: 'Accessories', items: [
        'They now have item level and grow by slot; accessory polishing is gone.',
        'T4 ancient at quality 67 or higher with valid options: a tome graded 1 to 6, keeping trade counts.',
        'Below quality 67 or invalid options: gem fragments, redeemable for silver.'
      ] }
    },
    {
      id: 'bracelet',
      es: { title: 'Brazaletes', items: [
        'Se elimina el sistema de efectos y el de ascenso.',
        'Solo el mejor brazalete del personaje se convierte en libro de sello, de grado 1 a 21.',
        'Los demás, y los que no tengan efectos, se convierten en material de desmontaje.'
      ] },
      en: { title: 'Bracelets', items: [
        'The effect and upgrade systems are removed.',
        'Only your best bracelet becomes a seal tome, graded 1 to 21.',
        'The rest, and any without effects, become dismantle material.'
      ] }
    },
    {
      id: 'engravings',
      es: { title: 'Grabados y piedras', items: [
        'Todos los grabados pasan a grado reliquia base; los libros legendarios dejan de usarse.',
        'Las piedras de habilidad se eliminan y se sustituyen por mejora de ranuras de grabado.',
        'Una piedra con 4 o más puntos válidos define el nivel de ranuras; las de 5 o más que sobren dan material de accesorios.'
      ] },
      en: { title: 'Engravings and stones', items: [
        'All engravings drop to relic base grade; legendary books stop being used.',
        'Ability stones are removed and replaced by engraving slot upgrades.',
        'A stone with 4 or more valid points sets your slot level; extras at 5 or more give accessory material.'
      ] }
    },
    {
      id: 'gems',
      es: { title: 'Gemas', items: [
        'Se comparten en toda la expedición desde un almacén común, sin condiciones de equipado.',
        'T3 de nivel 3 a 10 pasa a gema T4 dos niveles más abajo; las T3 de nivel 1 y 2 se borran.',
        'T4 de nivel 1 a 10 conserva el nivel. Tres gemas T4 de nivel 10 se combinan en una gema Estelar de nivel 1.'
      ] },
      en: { title: 'Gems', items: [
        'They are shared across the whole roster from a common storage, with no equip requirements.',
        'T3 gems from level 3 to 10 become T4 gems two levels lower; T3 level 1 and 2 are deleted.',
        'T4 gems from level 1 to 10 keep their level. Three T4 level 10 gems combine into one level 1 Starlight gem.'
      ] }
    },
    {
      id: 'esther',
      es: { title: 'Arma Esther', items: [
        'Se eliminan la evolución y la conversión; el arma crece por pulido.',
        'Hay reembolso parcial de Energía de Esther y kits románticos según la etapa de evolución alcanzada.',
        'Una Esther de 1800 o más entrega las seis piezas derivadas del arma en pulido 25.'
      ] },
      en: { title: 'Esther weapon', items: [
        'Evolution and conversion are removed; the weapon grows through polishing.',
        'Partial refunds of Esther Energy and romantic kits apply based on the evolution stage reached.',
        'An Esther at 1800 or more grants the six weapon-derived pieces at polish 25.'
      ] }
    },
    {
      id: 'combat',
      es: { title: 'Combate', items: [
        'Se eliminan supresión, aguante y pericia. Entra un atributo nuevo (기량, destreza) que sube daño y buffs de ataque.',
        'El Ark Passive se reordena: se van evolución y salto, queda la rama de iluminación como estilo de combate.',
        'El karma y las runas de habilidad se eliminan; parte de su efecto migra a gemas y daño PvE.'
      ] },
      en: { title: 'Combat', items: [
        'Domination, endurance and expertise are removed. A new stat (기량, prowess) raises damage and attack buffs.',
        'Ark Passive is restructured: evolution and leap are gone, leaving the enlightenment branch as combat style.',
        'Karma and skill runes are removed; part of their effect migrates into gems and PvE damage.'
      ] }
    },
    {
      id: 'life',
      es: { title: 'Vida y navegación', items: [
        'Las seis profesiones se unifican en un solo nivel y un solo material: Cristal de Vida.',
        'Se eliminan las herramientas de vida; solo una legendaria o relic por tipo se reembolsa en oro.',
        'Las monedas piratas pasan a monedas oceánicas y el oro de las misiones cooperativas de navegación desaparece.'
      ] },
      en: { title: 'Life skills and sailing', items: [
        'The six life skills merge into one level and one material: Life Crystal.',
        'Life tools are removed; only one legendary or relic tool per type is refunded in gold.',
        'Pirate coins become ocean coins and gold from sailing co-op quests is removed.'
      ] }
    },
    {
      id: 'endgame',
      es: { title: 'Fin de juego y oro', items: [
        'El fin de juego pasa a ser Shadow Raid y la catedral del horizonte.',
        'Kayangel, Torre de Marfil, Valtan a Kakul, las incursiones de Kazeros y las épicas dejan de dar oro.',
        'Con seis personajes de oro, del séptimo en adelante se paga oro ligado al personaje.'
      ] },
      en: { title: 'Endgame and gold', items: [
        'Endgame becomes Shadow Raid and the cathedral of the horizon.',
        'Kayangel, Ivory Tower, Valtan through Kakul, Kazeros raids and epic raids stop paying gold.',
        'With six gold characters, the seventh and beyond earn character-bound gold.'
      ] }
    },
    {
      id: 'market',
      es: { title: 'Mercado y confianza', items: [
        'La subasta desaparece; las gemas pasan al mercado y todo lo listado se cancela.',
        'Correo y trato directo usan confianza; con confianza baja se cobra peón como recargo.',
        'Las tarjetas dejan de equiparse: los efectos se aplican por colección y se elige el efecto representativo más fuerte.'
      ] },
      en: { title: 'Market and trust', items: [
        'The auction house disappears; gems move to the market and every listing is cancelled.',
        'Mail and direct trades use trust; low trust adds a peon surcharge.',
        'Cards are no longer equipped: effects apply from collection and the strongest representative effect is chosen.'
      ] }
    }
  ],

  thoughts: [
    {
      id: 'part2-transition',
      es: {
        tag: 'Transición',
        title: 'Rediseño estructural, no un reinicio',
        body: 'La Parte 2 desacopla el progreso del equipo del honing tradicional y redefine combate y economía sin borrar lo conseguido: los brazaletes al máximo se transfieren, los accesorios al máximo pasan a equivalentes al máximo (ligados al personaje) y los materiales se convierten a nuevas cantidades.'
      },
      en: {
        tag: 'Transition',
        title: 'Structural redesign, not a reset',
        body: 'Part 2 decouples equipment progression from traditional honing and reshapes combat and economy without wiping progress: maxed bracelets carry over, maxed accessories convert to maxed equivalents (character-bound), and materials convert to new quantities.'
      }
    },
    {
      id: 'crit-mechanic',
      es: {
        tag: 'Combate',
        title: 'Mecánica Multi-Crit',
        body: 'El exceso de probabilidad de crítico por encima del 100 % se convierte en daño crítico adicional en lugar de daño plano, para que probabilidad y daño crítico sigan siendo estadísticas relevantes.'
      },
      en: {
        tag: 'Combat',
        title: 'Multi-Crit mechanic',
        body: 'Excess Crit Rate above 100% converts into additional Crit Damage rather than flat damage, keeping both Crit Chance and Crit Damage meaningful combat stats.'
      }
    },
    {
      id: 'companion-system',
      es: {
        tag: 'Invierno 2026',
        title: 'Sistema Companion (aliados IA)',
        body: 'NPCs aliados (incluida Nineveh) actuarán como miembros de grupo controlados por IA con rol seleccionable de DPS o Soporte. Facilita el progreso en solitario sin reemplazar las raids de dificultad Normal o superior.'
      },
      en: {
        tag: 'Winter 2026',
        title: 'Companion system (AI allies)',
        body: 'Allied NPCs (including Nineveh) join as AI party members with selectable DPS or Support roles. Designed to make solo content smoother without replacing Normal+ raid difficulties.'
      }
    },
    {
      id: 'gold-limit',
      es: {
        tag: 'Economía',
        title: 'Límite de 6 personajes con oro comerciable',
        body: 'Confirmado tras el directo de noviembre y el aviso oficial: del séptimo personaje en adelante el oro de raid pasa a ser ligado al personaje. Permite avanzar más alters sin desestabilizar la economía.'
      },
      en: {
        tag: 'Economy',
        title: '6-character tradable gold cap',
        body: 'Confirmed following the November review and official notice: from the 7th character onward, raid gold becomes character-bound. This lets you progress more alts without flooding the tradable gold economy.'
      }
    },
    {
      id: 'world-boss',
      es: {
        tag: 'Mundo abierto',
        title: 'Nuevo World Boss por equipos',
        body: 'Cinco equipos de color por canal compiten según el daño global aportado en todos los canales. La probabilidad base de victoria ronda el 20 % según la contribución total y habrá recompensas individuales por golpes finales.'
      },
      en: {
        tag: 'Open world',
        title: 'New team-based World Boss',
        body: 'Five color teams per channel compete with rewards driven by global damage across all channels. Winning odds reflect total team contribution (20% baseline) alongside individual rewards for killing blows.'
      }
    },
    {
      id: 'raid-structure',
      es: {
        tag: 'Calendario',
        title: 'Cuatro raids al año (cada 3 meses)',
        body: 'La cadencia prevista alterna contenido exigente y accesible: 1 raid principal de fin de juego, 2 raids casuales y 1 desafío de verano para que toda la comunidad pueda participar.'
      },
      en: {
        tag: 'Cadence',
        title: 'Four raids per year (every 3 months)',
        body: 'The planned cadence balances challenge and accessibility: 1 major endgame raid, 2 casual raids, and 1 summer challenge so every player tier can participate.'
      }
    },
    {
      id: 'female-sharpshooter',
      es: {
        tag: 'Invierno 2026',
        title: 'Nueva clase: Female Sharpshooter',
        body: 'Llega en la actualización de invierno como la primera clase nueva tras una larga pausa, sumándose al plantel con su propio kit de habilidades y rotación.'
      },
      en: {
        tag: 'Winter 2026',
        title: 'New class: Female Sharpshooter',
        body: 'Arrives in the winter update as the first new class in a long time, joining the roster with her own skill kit and rotation.'
      }
    },
    {
      id: 'comm-improvements',
      es: {
        tag: 'LOA ON · 19 dic',
        title: 'Comunicación y próximo Winter LOA ON',
        body: 'El director Lee Byung-tak prioriza recuperar la confianza tras los tropiezos en raids Extreme con directos frecuentes, cartas de desarrollo y avisos en el juego. Además, el 19 de diciembre de 2026 se anunciarán más detalles de la Parte 2 en el Winter LOA ON.'
      },
      en: {
        tag: 'LOA ON · Dec 19',
        title: 'Communication & upcoming Winter LOA ON',
        body: 'Director Lee Byung-tak is prioritizing rebuilding trust after Extreme raid missteps with more frequent streams, dev letters, and in-game notices. Further Part 2 details are scheduled for Winter LOA ON on December 19, 2026.'
      }
    }
  ],

  conclusions: {
    synthesis: [
      {
        id: 'why-now',
        es: {
          kicker: '01 · El diagnóstico',
          title: 'Por qué el juego necesitaba un corte tan profundo',
          body: 'Los análisis de 2026 reflejan una contracción fuerte en Steam (hasta ~75 % menos jugadores que en 2025) y una percepción de pay-to-win máxima (5/5) pese a mantener buenas valoraciones de combate. Zonas muertas en Tier 3, spam de buses, exceso de sistemas heredados y picos de dificultad en Extreme habían convertido la entrada y el progreso en un muro.'
        },
        en: {
          kicker: '01 · Diagnosis',
          title: 'Why the game needed such a deep reset of systems',
          body: '2026 assessments show steep Steam contraction (around 75% fewer players than in 2025) and a 5/5 pay-to-win perception despite solid core combat reviews. Tier 3 dead zones, bus advertising, stacked legacy systems, and punishing Extreme spikes had turned onboarding and progression into a wall.'
        }
      },
      {
        id: 'where-it-lands',
        es: {
          kicker: '02 · A qué se llega',
          title: 'Menos capas de azar, economía contenida y más margen en solitario',
          body: 'Al cruzar el aviso 13608 con la hoja de ruta, la conclusión es clara: se eliminan sistemas de fricción pura (calidad, karma, piedras de habilidad, runas, material T3), se comparten gemas en toda la expedición, se limita el oro comerciable a 6 personajes y se introduce el modo Companion (IA) junto a raids alternas casual/endgame para bajar la barrera de entrada sin borrar la inversión del veterano.'
        },
        en: {
          kicker: '02 · Destination',
          title: 'Fewer RNG layers, contained economy, and stronger solo viability',
          body: 'Combining Notice 13608 with the roadmap reveals a clear direction: pure-friction systems (quality, karma, ability stones, runes, T3 mats) are stripped out, gems become roster-wide, tradable gold caps at 6 characters, and AI Companions plus alternating casual/endgame raids lower entry barriers without erasing veteran progress.'
        }
      },
      {
        id: 'what-to-watch',
        es: {
          kicker: '03 · Lectura crítica',
          title: 'Lo que queda por demostrar rumbo al Winter LOA ON',
          body: 'El diseño resuelve sobre el papel el problema de complejidad y de alters infinitos, pero el éxito real dependerá de tres puntos: la generosidad práctica de las fichas de conversión, cómo aterricen estos cambios en la versión occidental frente al bussing y la percepción P2W, y las novedades que se concreten el 19 de diciembre de 2026.'
        },
        en: {
          kicker: '03 · Critical watch',
          title: 'What remains to be proven heading into Winter LOA ON',
          body: 'On paper the redesign tackles system bloat and infinite-alt inflation, yet real-world impact hinges on three things: how generous conversion token ratios feel in practice, whether Western adaptations curb bussing and P2W perception, and what further details land at Winter LOA ON on Dec 19, 2026.'
        }
      }
    ],
    takeaways: [
      {
        id: 'veteran',
        es: {
          badge: 'Veterano / main alto',
          title: 'Protege valor sin comprar activos que caducan',
          body: 'No es un reinicio, pero sí un cambio de reglas: sube solo los escalones con salto (1600→1605, 1770→1775) o umbrales (1775 Reliquia / 1790 Antiguo), conserva tu mejor brazalete y accesorios ≥67, y evita gastar oro en libros legendarios, piedras o T3.'
        },
        en: {
          badge: 'Veteran / high main',
          title: 'Protect value without buying expiring assets',
          body: 'Not a wipe, but a rule change: only hone jump rungs (1600→1605, 1770→1775) or grade thresholds (1775 Relic / 1790 Ancient), keep your best bracelet and ≥67 accessories, and stop spending gold on legendary books, stones, or T3.'
        }
      },
      {
        id: 'multi-alt',
        es: {
          badge: 'Roster +6 personajes',
          title: 'Reordena tus alters y deja de duplicar gemas',
          body: 'El 7.º personaje en adelante generará oro ligado al personaje, así que decide qué 6 cobran oro comerciable. A cambio, el almacén común de gemas abarata mantener varios personajes activos.'
        },
        en: {
          badge: '6+ character roster',
          title: 'Rebalance your alts and stop duplicating gems',
          body: 'Your 7th character onward earns character-bound gold, so lock in which 6 collect tradable gold. In return, shared roster gem storage makes keeping multiple characters geared much cheaper.'
        }
      },
      {
        id: 'returning-solo',
        es: {
          badge: 'Vuelta o juego en solitario',
          title: 'El mejor punto de regreso previsto desde Tier 3',
          body: 'Con el fin de la zona muerta T3, la expansión del contenido en solitario y el sistema Companion (IA) previsto para invierno, volver o empezar requiere aprender muchas menos mecánicas muertas y menos dependencia inmediata de grupo.'
        },
        en: {
          badge: 'Returning or solo',
          title: 'Best planned entry point since Tier 3',
          body: 'With T3 dead zones removed, solo raid expansion, and the winter Companion AI system, returning or starting requires learning far fewer obsolete systems and less forced early group reliance.'
        }
      },
      {
        id: 'decision-rule',
        es: {
          badge: 'Regla de oro',
          title: 'Ante la duda antes del parche, quédate en oro líquido',
          body: 'El oro sobrevive íntegro; los materiales de honing y consumibles se convierten a ratios fijos o desaparecen. Si una mejora no te da un salto real de tramo o grado en la calculadora, espera al mantenimiento.'
        },
        en: {
          badge: 'Rule of thumb',
          title: 'When in doubt before patch day, hold liquid gold',
          body: 'Gold survives intact; honing mats and consumables convert at fixed rates or vanish. Unless the calculator shows a real bracket jump or grade threshold, wait for maintenance.'
        }
      }
    ]
  }
};
