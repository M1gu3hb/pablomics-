# Pablo Salazar-Mendez — Academic Portfolio

Portafolio académico construido con React, TypeScript y CSS. El contenido está
separado del diseño para que Pablo pueda actualizar el sitio directamente desde
GitHub sin tener que modificar los componentes.

## Dónde se edita cada sección

| Sección de la página | Archivo | Propiedad que debes buscar |
|---|---|---|
| Menú superior | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `navigation` |
| Nombre, presentación y textos principales | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `person` |
| GitHub, correo, Bluesky y CV | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `socials` |
| Estadísticas del inicio | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `metrics` |
| Títulos y descripciones de las secciones | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `sectionCopy` |
| Research Focus | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `focusAreas` |
| Current Questions | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `currentQuestions` |
| Research Path y sus fechas | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `researchPath` |
| Working Toolkit | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `toolkit` |
| Education | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `education` |
| Blog y artículos completos | [`src/data/blogs.ts`](src/data/blogs.ts) | `blogs` |
| Textos de contacto | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `contactCopy` |
| Fotografía principal | [`src/assets/pablo-salazar.jpg`](src/assets/pablo-salazar.jpg) | Reemplaza el archivo conservando el nombre |
| Favicon | [`public/favicon.svg`](public/favicon.svg) | Reemplaza o edita el SVG |
| Descripción para Google y redes | [`index.html`](index.html) | `description`, `og:*` y `title` |
| Colores, tamaños y diseño | [`src/styles.css`](src/styles.css) | Variables dentro de `@layer tokens` |

## Edición rápida desde GitHub

1. Abre el archivo indicado en la tabla.
2. Pulsa el icono de lápiz **Edit this file**.
3. Cambia solamente el texto entre comillas o los elementos del arreglo.
4. Pulsa **Commit changes**.
5. Guarda directamente en `main` para publicar, o crea una rama para revisar
   primero un Preview Deployment.

No cambies nombres como `person`, `researchPath`, `title` o `period`: son las
claves que usa la página para ordenar el contenido.

## Current Questions

La sección **Current Questions** se modifica en:

[`src/data/portfolio.ts`](src/data/portfolio.ts)

Busca:

```ts
currentQuestions: [
```

Cada objeto representa una pestaña. Puedes editar:

- `eyebrow`: nombre corto de la línea de investigación;
- `title`: título principal;
- `description`: laboratorio, contexto o resumen;
- `workLabel`: etiqueta que aparece sobre el texto destacado;
- `question`: pregunta o descripción larga del trabajo;
- `methods`: etiquetas de métodos y tecnologías;
- `visual`: usa únicamente `'sequence'` o `'network'`.

## Research Path y fechas

La cronología se modifica en:

[`src/data/portfolio.ts`](src/data/portfolio.ts)

Busca:

```ts
researchPath: [
```

Para cada experiencia:

- `period` controla la fecha completa visible;
- `startYear` controla el año colocado sobre la línea cronológica;
- `current: true` la muestra como actual;
- `current: false` la muestra como finalizada;
- `href` es opcional y enlaza al laboratorio.

Las fechas actuales fueron contrastadas con el CV:

- LIIGH: `Jun 2026 — Present`;
- CCG: `Jan 2025 — Present`;
- IBT: `Sep 2025 — May 2026`;
- School of Chemistry: `Jan 2023 — Aug 2023`.

## Crear y publicar un blog

Todos los blogs viven exclusivamente en:

[`src/data/blogs.ts`](src/data/blogs.ts)

Dentro del archivo hay una plantilla completa lista para copiar. Cada artículo
crea:

- una tarjeta en la sección Blog;
- una página individual en `/blog/slug-del-articulo`;
- índice de contenidos;
- párrafos, listas, citas y bloques de código;
- título y descripción propios para el navegador.

Reglas importantes:

- `slug` debe usar minúsculas y guiones, sin espacios;
- `publishedAt` usa el formato `AAAA-MM-DD`;
- `published: false` mantiene el artículo como borrador privado;
- `published: true` lo publica;
- solo un artículo debería tener `featured: true`;
- cada `id` de sección debe ser único dentro del artículo.

Las categorías admitidas son `Research`, `Methods`, `Code` y `Fieldwork`. Si
`blogs` está vacío, la página muestra un estado editorial limpio sin inventar
artículos.

El diseño completo de lectura puede revisarse en
[`/blog/design-preview?preview=1`](https://pablomics.vercel.app/blog/design-preview?preview=1).
Es una página de demostración no listada y nunca aparece como artículo público.

## Cambiar la fotografía

Reemplaza:

[`src/assets/pablo-salazar.jpg`](src/assets/pablo-salazar.jpg)

Conserva exactamente el mismo nombre. Para cambiar el nombre del archivo o el
texto alternativo de accesibilidad, edita `portrait` y `portraitAlt` dentro de
[`src/data/portfolio.ts`](src/data/portfolio.ts).

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

## Publicación automática

GitHub está conectado a Vercel:

- cada commit enviado a `main` crea un deployment de producción;
- cada rama o pull request genera un Preview Deployment;
- no se necesitan secretos ni variables de entorno;
- no subas manualmente `dist/`: Vercel ejecuta el build desde el código fuente.

## Estructura principal

```text
src/
├── assets/
│   └── pablo-salazar.jpg
├── components/
│   ├── Blog.tsx
│   └── BlogPost.tsx
├── data/
│   ├── blogs.ts
│   └── portfolio.ts
├── App.tsx
├── main.tsx
└── styles.css
public/
└── favicon.svg
```
