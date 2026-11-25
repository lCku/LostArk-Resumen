# Lost Ark · Parte 2 · Guía de preparación

Página estática, bilingüe (ES/EN) y sin dependencias para preparar la cuenta antes del parche de la Parte 2.

## Cómo usarla

Doble clic en `index.html`. No necesita servidor, ni build, ni conexión.

El idioma y el checklist se guardan en dos sitios a la vez: en `localStorage` y en el hash de la propia URL (`#lang=es&done=t3-mats,bracelet`). Chromium no conserva `localStorage` entre recargas cuando la página se abre con `file://`, así que el hash es lo que hace que el progreso sobreviva a un F5 o a cerrar el navegador. Si prefieres una URL limpia, puedes borrar el hash: solo perderás el progreso marcado.

Servirla en local sigue siendo la opción más cómoda si vas a usarla mucho:

```powershell
# desde la carpeta del proyecto
python -m http.server 8080
# o
npx serve .
```

Y abrir `http://localhost:8080`.

## Contenido

| Sección | Qué hace |
|---|---|
| Calculadora | Convierte el nivel de objeto de una pieza y dice si el siguiente honing sirve o es pérdida |
| Tabla | Los 40 tramos de migración, con buscador y filtros de zona muerta, salto alto y grado Antiguo |
| Trampas | Los tres puntos donde la tabla engaña |
| Checklist | Nueve acciones previas al mantenimiento, con progreso guardado |
| Oro | Qué no comprar, qué conservar y qué convertir antes del parche |
| Reglas | Doce bloques con el destino de cada sistema |
| Qué viene | Ocho tarjetas con la hoja de ruta y anuncios recientes (Multi-Crit, Companion, límite de oro, World Boss, calendario de raids, Female Sharpshooter y Winter LOA ON) |
| Conclusiones | Comentario de síntesis (diagnóstico 2026, a qué se llega y qué vigilar) y conclusiones prácticas por perfil de jugador |
| Fuentes | Enlaces al aviso oficial 13608, resumen KR State of the Game (Maxroll) y comunicados occidentales |

## Estructura

```
index.html   estructura y textos estáticos marcados con data-i18n
data.js      tabla de migración, textos ES/EN y contenido de las secciones
app.js       motor de idioma, calculadora, tabla, checklist, pestañas y acordeón
styles.css   sistema visual completo
```

## Cómo actualizar

- **Un tramo de la tabla**: edita el array `migration` en `data.js`. La regla es `gt` exclusivo y `lte` inclusivo. El resto de la interfaz se recalcula sola.
- **Un texto**: busca la clave en `LOA.ui.es` y `LOA.ui.en`. Las dos deben existir o el idioma se queda con el valor anterior.
- **Una acción del checklist**: añade un objeto a `LOA.checklist` con `id` único; el progreso se ajusta solo.
- **Una tarjeta de oro**: añádela a `LOA.gold.avoid`, `keep` o `liquid`.
- **Una tarjeta de hoja de ruta**: añádela al array `LOA.thoughts` en `data.js`.
- **Una tarjeta de conclusiones**: añádela a `LOA.conclusions.synthesis` o `LOA.conclusions.takeaways` en `data.js`.

## Reglas de la calculadora

- La conversión es por pieza, no por personaje.
- Los pasos de honing van de 5 en 5.
- El veredicto compara el nivel nuevo del paso actual con el del paso siguiente:
  - `delta = 0` → zona muerta, no honees.
  - `delta > 5` → el paso regala nivel extra, honea ya.
  - `delta = 5` → neutral, solo si el material se iba a convertir igual.

## Alcance

Proyecto local de estudio, sin relación con Smilegate. Las cifras salen del aviso oficial de reestructuración de la Parte 2 del 25 de noviembre de 2026; las recomendaciones son una lectura estratégica de esas reglas, no instrucciones oficiales. La fecha exacta del mantenimiento debe confirmarse en la web oficial.
