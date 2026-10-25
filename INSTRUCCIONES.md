# Mushin Dojo — instrucciones para continuar

Este documento reúne el contexto inicial del proyecto y las pautas extraídas del manual de marca. Úsalo como referencia al continuar el diseño y el contenido. Si se añaden nuevas instrucciones, conservar estas pautas salvo que el usuario indique un cambio.

## Proyecto
- Web informativa estática para **Mushin Dojo**.
- Base técnica: React, Vite, pnpm, TypeScript (`.tsx`) y SCSS (Sass).
- Organización: cada página vive en `src/pages/` con su componente `.tsx` y hoja `.scss`; los componentes reutilizables están en `src/components/`; el contenido de páginas se centraliza de forma tipada en `src/content/`.
- De momento existe solo el esqueleto; desarrollar el contenido y la estética de la web después de recibir el material correspondiente.

## Fuente de contenido
Añadir aquí las fuentes que se deben usar (documentos, enlaces, textos, etc.):

- Pendiente

## Contexto de marca
Mushin Dojo busca ser un lugar al que volver cuando todo se acelera: ayudar a deportistas a parar, recuperar perspectiva y reconectar con lo esencial, construyendo una base sólida para su rendimiento.

**Concepto:** «Recupera tu centro».

**Personalidad y voz:** serena, profesional, humana y consciente. Comunicar con calma, claridad y rigor; ser cercano y respetuoso, sin juzgar, sin presionar procesos, sin sobrecargar de tecnicismos ni prometer atajos. Mantener un tono sobrio y reflexivo.

## Identidad visual

### Tipografía
- La familia de marca es **Overused Grotesk** y es la única tipografía prevista para todos los soportes.
- Usar sus distintos pesos para crear jerarquía, sin introducir otras familias tipográficas.
- Jerarquía orientativa del manual: titulares en Semibold (Bold puede usarse para una palabra o número); titulares secundarios y CTA en Medium; texto corrido en Regular.
- El manual indica que es gratuita para uso comercial bajo licencia SIL Open Font License (según el manual, vigente a 8 de febrero de 2026). Incorporar los archivos de fuente y su licencia cuando estén disponibles.

### Colores
Paleta indicada en la página 20 del manual (valores HEX):
- Marfil: `#F5F2EB`
- Arena: `#BDB09A`
- Azul claro: `#CCDEED`
- Azul marino: `#142438`
- Negro: `#191919`

Usar las combinaciones de marca con contraste suficiente para mantener legibilidad. Los degradados, si se usan, deben ser suaves y controlados, aportando profundidad sin competir con el contenido.

### Logos
- La versión positiva es la aplicación preferente sobre fondos claros.
- Usar la versión negativa sobre fondos oscuros o fotografías oscuras cuando la positiva no tenga contraste suficiente.
- Mantener el área de respeto alrededor del logotipo despejada y respetar sus tamaños mínimos; evitar distorsionar, recolorear o aplicar versiones no contempladas en el manual.
- El símbolo puede usarse cuando el logotipo completo no sea necesario o no disponga de espacio suficiente.
- Elegir entre las variantes del manual según el soporte y el fondo; priorizar legibilidad y contraste.

### Fotografía y recursos gráficos
- Mostrar deporte y momentos de acción real con una mirada consciente, equilibrada y honesta. Se admiten desenfoques de movimiento para expresar velocidad y exigencia.
- Alternar con composiciones centradas y equilibradas, naturaleza y entornos serenos para transmitir calma, foco y presencia.
- Se permite blanco y negro y temática japonesa u oriental cuando encajen con el mensaje.
- La esfera representa «recupera tu centro» y puede servir como pausa visual, foco o separador, no solo como adorno.

## Recursos gráficos
- Logos: `public/assets/logos/`
- Imágenes: `public/assets/imagenes/`
- Fondos: `public/assets/fondos/`
- Referencias estéticas: `public/assets/referencias/`
- Tipografías y licencia, cuando se reciban: añadir en una carpeta de recursos apropiada y documentar sus archivos.

## Secciones o páginas
La primera versión incluye cuatro páginas:
- Inicio — introducción a Mushin Dojo.
- Quiénes somos — presentación del dojo y su enfoque.
- Por qué Mushin — filosofía y propuesta.
- Contacto — espacio para añadir email, ubicación y otros datos reales.

Los textos de los apartados informativos son provisionales (Lorem ipsum). Sustituirlos por contenido aprobado antes de publicar. Los campos entre corchetes de Contacto también están pendientes de datos reales.

## Notas adicionales
- Manual de marca de referencia recibido como `extraer_info.pdf` (39 páginas).
- Indicar aquí cualquier requisito adicional o decisión pendiente.
