# Pablo Salazar-Mendez — Academic Portfolio

Portafolio académico construido con React, TypeScript y CSS. El sitio está
organizado para que el contenido pueda actualizarse sin tocar los componentes
visuales.

## La edición rápida

Todo el contenido visible está en un solo archivo:

```text
src/data/portfolio.ts
```

Desde ahí puedes cambiar:

- presentación, correo, ubicación y enlaces;
- estadísticas;
- áreas de interés y proyectos;
- experiencia de investigación;
- herramientas y habilidades;
- educación;
- notas o publicaciones.

La fotografía principal está en:

```text
src/assets/pablo-salazar.jpg
```

Puedes reemplazarla conservando el mismo nombre. Para cambiar nombre, ruta o
texto alternativo, edita la propiedad `portrait` dentro de
`src/data/portfolio.ts`.

## Agregar una nota

Busca `notes: []` en `src/data/portfolio.ts` y agrega objetos como este:

```ts
notes: [
  {
    title: 'Título de la nota',
    summary: 'Resumen breve que aparecerá en la tarjeta.',
    date: '2026-08-15',
    category: 'Research',
    href: 'https://enlace-a-la-nota.com',
  },
],
```

Las categorías admitidas son `Research`, `Code` y `Field note`. Si `notes`
permanece vacío, el sitio muestra un estado editorial limpio sin inventar
artículos.

## Agregar o corregir enlaces

Los enlaces externos están en el arreglo `socials`. El perfil de Google Scholar
no se incluyó porque la página anterior apuntaba al inicio genérico de Scholar,
no a un perfil real. Agrégalo únicamente cuando tengas la URL completa.

## Desarrollo local

Necesitas Node.js 22 o posterior.

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm run check
```

Build de producción:

```bash
npm run build
```

## Publicación

Vercel detecta Vite automáticamente. Una vez conectado este repositorio, cada
cambio enviado a `main` genera un nuevo despliegue de producción. No se
necesitan secretos ni variables de entorno para este sitio.

### Flujo recomendado: GitHub → Vercel

Para cambios pequeños de contenido:

1. Edita `src/data/portfolio.ts` desde GitHub.
2. Guarda el cambio directamente en `main`.
3. Vercel construye y publica automáticamente la nueva versión.

Para cambios visuales o de código:

1. Crea una rama nueva.
2. Abre un pull request hacia `main`.
3. Revisa el Preview Deployment que Vercel agrega al pull request.
4. Fusiona el pull request solo cuando la vista previa esté correcta.

No subas manualmente la carpeta `dist/`. Vercel ejecuta el build desde el
código fuente del repositorio.

## Estructura

```text
src/
├── assets/
│   └── pablo-salazar.jpg
├── components/       # módulos visuales e interactivos
├── data/
│   └── portfolio.ts  # contenido editable
├── App.tsx
├── main.tsx
└── styles.css        # sistema visual completo
public/
└── favicon.svg
```
