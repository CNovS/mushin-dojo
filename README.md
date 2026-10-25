# Mushin Dojo

Web informativa estática de Mushin Dojo, construida con React, Vite, TypeScript (`.tsx`) y SCSS. La primera versión incluye Inicio, Quiénes somos, Por qué Mushin y Contacto; la navegación usa rutas hash para funcionar en alojamiento estático sin configuración adicional del servidor.

## Requisitos
- Node.js
- pnpm

## Desarrollo

```bash
pnpm install
pnpm dev
```

`pnpm typecheck` comprueba los tipos y `pnpm build` ejecuta el chequeo antes de generar el sitio.

## Organización

- `src/pages/`: una carpeta por página, con su componente `.tsx` y estilos `.scss`.
- `src/components/`: piezas reutilizables tipadas y sus estilos.
- `src/content/`: contenido tipado que alimenta las páginas editoriales.
- `src/styles/`: variables de marca y estilos globales.
- `public/assets/`: logos, fotografías, fondos y referencias visuales.

## Carpetas de recursos
Los recursos gráficos se guardan en `public/assets/`, organizados por tipo. Consulta `INSTRUCCIONES.md` para las pautas de marca y las siguientes iteraciones. Los textos actuales son de ejemplo y los datos de contacto están pendientes.
