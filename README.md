# Portafolio académico de Pablo Salazar-Mendez

Sitio personal construido con React, TypeScript, Vite y CSS. La versión pública
está en [pablomics.vercel.app](https://pablomics.vercel.app) y se actualiza
automáticamente desde la rama `main` de este repositorio.

El contenido editorial está separado de los componentes:

- la información general se edita en
  [`src/data/portfolio.ts`](src/data/portfolio.ts);
- los artículos se editan exclusivamente en
  [`src/data/blogs.ts`](src/data/blogs.ts);
- los componentes de [`src/components/`](src/components/) se encargan de la
  presentación y del comportamiento.

## Mapa rápido de edición

| Parte de la página | Archivo que se edita | Propiedad o variable | Qué se puede cambiar | Ejemplo |
| ------------------ | -------------------- | -------------------- | -------------------- | ------- |
| Presentación principal y Hero | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `person` e `interfaceCopy.hero` | Encabezado, introducción, etiquetas y llamada a la acción | `headline: 'Nuevo encabezado'` |
| Nombre y datos personales | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `person` | Nombre, iniciales, rol, institución, ubicación y correo | `location: 'Morelos, Mexico'` |
| Descripción | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `person.introduction` y `person.shortBio` | Biografía larga y resumen | `shortBio: 'Texto breve'` |
| Navegación | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `navigation` | Nombre y destino de cada sección | `{ label: 'Blog', href: '#blog', id: 'blog' }` |
| Enlaces sociales | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `socials` | GitHub, Bluesky y otros enlaces existentes | `href: 'https://github.com/usuario'` |
| Correo | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `person.email` y enlace `kind: 'email'` | Dirección visible y enlace `mailto:` | `mailto:nombre@dominio.mx` |
| Enlace del CV | [`src/data/portfolio.ts`](src/data/portfolio.ts) | Elemento con `kind: 'cv'` en `socials` | URL de descarga o lectura del CV | `href: 'https://…/cv.pdf'` |
| Fotografía | [`src/assets/pablo-salazar.jpg`](src/assets/pablo-salazar.jpg) | Archivo de imagen; `portraitAlt` en `person` | Foto principal y texto alternativo | Reemplazar el JPG conservando el nombre |
| Métricas | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `metrics` | Valor y etiqueta de cada métrica | `{ value: '02', label: '…' }` |
| Research Focus | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `focusAreas` y `sectionCopy.focus` | Áreas, títulos, descripciones y textos de interfaz | `title: 'Network biology'` |
| Current Questions | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `currentQuestions` | Preguntas, contexto, métodos y visual | `visual: 'network'` |
| Research Path | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `researchPath` | Institución, rol, grupo, mentor, lugar, fechas, estado y enlace | `current: true` |
| Fechas de investigación | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `researchPath[].period` y `startYear` | Periodo visible y año de la cronología | `period: 'Jan 2025 — Present'` |
| Toolkit | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `toolkit` y `sectionCopy.toolkit` | Grupos, herramientas y textos de sección | `{ group: 'Languages', items: ['Python'] }` |
| Education | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `education` y `sectionCopy.education` | Carrera, institución, lugar, fechas, estado y enlace | `current: false` |
| Blog | [`src/data/blogs.ts`](src/data/blogs.ts) | `blogs` | Tarjetas, artículos, borradores y contenido completo | `published: true` |
| Contact | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `contactCopy`, `person` y `socials` | Título, invitación, pie, correo y enlaces | `prompt: '…'` |
| Textos de interfaz | [`src/data/portfolio.ts`](src/data/portfolio.ts) | `interfaceCopy` | Botones, estados vacíos y textos del artículo | `backLabel: 'Back to the blog'` |
| SEO | [`index.html`](index.html) | `title`, `description`, `og:*`, `twitter:*` y `canonical` | Texto para buscadores y vistas previas | `<meta name="description" …>` |
| Colores y estilos | [`src/styles.css`](src/styles.css) | Variables dentro de `@layer tokens` | Paleta, tipografías, radios, sombras y espaciado | `--coral: #…` |
| Diseño responsive | [`src/styles.css`](src/styles.css) | `@layer responsive` | Reglas para tablet y teléfono | `@media (max-width: 560px)` |
| Modo claro y oscuro | [`src/styles.css`](src/styles.css) | `:root` y `:root[data-theme='dark']` | Colores de ambos temas | `--paper: #…` |

## Editar la presentación, el Hero y los datos personales

Abre [`src/data/portfolio.ts`](src/data/portfolio.ts) y busca `person`.

- `name`: nombre completo.
- `initials`: iniciales usadas en la marca y el contacto.
- `brandLines`: líneas cortas que aparecen junto a la marca.
- `role`: rol académico.
- `institution`: institución principal.
- `location`: ubicación.
- `email`: dirección de contacto.
- `portraitAlt`: descripción accesible de la fotografía.
- `eyebrow`: texto pequeño sobre el encabezado.
- `headline`: título principal.
- `introduction`: presentación larga.
- `shortBio`: resumen del pie del Hero.

Los textos decorativos y botones del Hero están en `interfaceCopy.hero`.
Las métricas se encuentran en `metrics`; cada objeto tiene `value` y `label`.

No cambies fechas, instituciones, grupos, mentores o datos académicos sin una
fuente confiable.

## Navegación, enlaces, correo y CV

La navegación está en `navigation`. Cada elemento necesita:

```ts
{ label: 'Blog', href: '#blog', id: 'blog' }
```

`href` e `id` deben apuntar a la misma sección. Los enlaces personales están en
`socials`:

- `kind: 'github'` identifica GitHub;
- `kind: 'email'` debe usar una URL que comience con `mailto:`;
- `kind: 'bluesky'` identifica Bluesky;
- `kind: 'cv'` controla el botón del CV.

Si cambia el correo, actualiza tanto `person.email` como el elemento de
`socials` con `kind: 'email'`.

## Cambiar la fotografía

Reemplaza
[`src/assets/pablo-salazar.jpg`](src/assets/pablo-salazar.jpg) conservando el
nombre y la extensión. Usa una imagen JPG optimizada, con orientación vertical
o cuadrada. Después actualiza `person.portraitAlt` si la descripción de la foto
ya no corresponde.

No edites el `import` de la imagen salvo que también cambies el nombre del
archivo.

## Research Focus

Los tres bloques superiores se editan en `focusAreas`. Cada uno contiene:

- `code`: número corto;
- `title`: nombre del área;
- `description`: explicación.

El título y la descripción generales se encuentran en `sectionCopy.focus`.

## Current Questions

Esta sección se modifica en src/data/portfolio.ts, dentro de currentQuestions.

Cada objeto representa una pestaña:

- `id`: identificador único, sin espacios;
- `index`: número visible;
- `eyebrow`: nombre corto;
- `title`: título principal;
- `description`: contexto, laboratorio o resumen;
- `workLabel`: etiqueta del bloque destacado;
- `question`: pregunta o explicación principal;
- `methods`: lista de métodos y temas;
- `visual`: solamente `'sequence'` o `'network'`.

Si el arreglo queda vacío temporalmente, el sitio muestra un estado vacío y no
se rompe. Sus textos se editan en `sectionCopy.focus.emptyTitle` y
`sectionCopy.focus.emptyDescription`.

## Research Path y fechas

Abre [`src/data/portfolio.ts`](src/data/portfolio.ts), busca `researchPath` y
edita el objeto de la experiencia correspondiente:

- institución: `organization`;
- nombre corto: `shortName`;
- rol: `role`;
- grupo: `group`;
- mentor: `mentor`;
- ubicación: `location`;
- fecha completa: `period`;
- año que aparece en la línea: `startYear`;
- estado actual o finalizado: `current: true` o `current: false`;
- enlace externo: `href` (opcional).

Ejemplo:

```ts
{
  organization: 'Nombre de la institución',
  shortName: 'SIGLAS',
  location: 'Ciudad, País',
  role: 'Research intern',
  group: 'Nombre del grupo',
  mentor: 'Nombre del mentor',
  period: 'Jan 2026 — Present',
  startYear: '2026',
  current: true,
  href: 'https://sitio-oficial.example',
}
```

`period` es texto visible; el sitio no calcula fechas. Revisa que `current` y
`period` sean coherentes.

## Toolkit

Busca `toolkit` en [`src/data/portfolio.ts`](src/data/portfolio.ts). Cada grupo
tiene:

```ts
{
  group: 'Languages',
  items: ['Python', 'Julia'],
}
```

Los títulos del bloque se editan en `sectionCopy.toolkit`.

## Education

Busca `education`. Cada entrada admite:

- `degree`: nombre del programa;
- `institution`: institución;
- `location`: lugar;
- `period`: fechas visibles;
- `current`: `true` si está en curso;
- `href`: página oficial del programa.

Los textos “Current degree” y “Previous studies” están en
`sectionCopy.education`.

## Blog: crear y publicar un artículo

Todos los artículos viven exclusivamente en
[`src/data/blogs.ts`](src/data/blogs.ts). No es necesario crear un componente,
una ruta ni un archivo nuevo por artículo.

Cada artículo admite:

- `slug`: parte única de la URL;
- `title`: título;
- `summary`: resumen de la tarjeta y descripción del navegador;
- `category`: `Research`, `Methods`, `Code` o `Fieldwork`;
- `publishedAt`: fecha `AAAA-MM-DD`;
- `displayDate`: fecha visible;
- `readTime`: tiempo de lectura;
- `introduction`: introducción;
- `sections`: secciones del artículo;
- `paragraphs`: párrafos;
- `highlights`: lista destacada;
- `quote`: cita;
- `callout`: bloque destacado con `title` opcional y `content`;
- `code`: lenguaje y contenido de un bloque de código;
- `featured`: tarjeta destacada;
- `published`: estado publicado o borrador.

### Publicar paso a paso

1. Abre [`src/data/blogs.ts`](src/data/blogs.ts) y copia la plantilla comentada
   que aparece antes de `export const blogs`.
2. Pega la copia dentro de `blogs: BlogPost[] = [ ... ]` y elige un `slug`
   único, en minúsculas, con guiones y sin espacios.
3. Escribe `title`, `summary`, `introduction` y las entradas de `sections`.
   Cada `id` de sección debe ser único dentro del artículo.
4. Mantén `published: false` mientras trabajas. Cámbialo a `true` solo cuando
   el artículo esté listo.
5. Guarda el archivo y crea el commit desde GitHub o VS Code.
6. Espera a que GitHub Actions y Vercel terminen. Un indicador verde significa
   que la validación y el deployment finalizaron correctamente.
7. Abre `https://pablomics.vercel.app/blog/tu-slug` y revisa el artículo.
8. Si falla, comprueba comas, comillas, llaves, `slug`, fecha, categoría,
   identificadores repetidos y el valor de `published`.

Ejemplo mínimo:

```ts
export const blogs: BlogPost[] = [
  {
    slug: 'mi-primer-articulo',
    title: 'Mi primer artículo',
    summary: 'Resumen breve.',
    introduction: 'Párrafo de apertura.',
    publishedAt: '2026-08-15',
    displayDate: 'August 15, 2026',
    readTime: '5 min read',
    category: 'Research',
    featured: true,
    published: false,
    sections: [
      {
        id: 'introduccion',
        title: 'Introducción',
        paragraphs: ['Primer párrafo.', 'Segundo párrafo.'],
        highlights: ['Punto importante'],
        callout: {
          title: 'Resultado clave',
          content: 'Texto que debe resaltarse.',
        },
        quote: 'Una cita opcional.',
        code: {
          language: 'Julia',
          content: 'result = analyze(data)',
        },
      },
    ],
  },
]
```

Con `published: false`, el artículo no aparece en la cuadrícula ni se abre como
artículo público. La vista de diseño
`/blog/design-preview?preview=1` está separada de `blogs` y no se publica en la
lista.

## Contact

Los textos de contacto están en `contactCopy`. El nombre, rol e institución se
reutilizan desde `person`, y los botones desde `socials`. Esto evita mantener
copias distintas del mismo dato.

## SEO

Edita [`index.html`](index.html) para cambiar:

- `<title>`;
- `meta[name='description']`;
- `og:title`, `og:description`, `og:url` y `og:image`;
- `twitter:title`, `twitter:description` y `twitter:image`;
- el enlace `canonical`.

El dominio canónico es `https://pablomics.vercel.app`. Si se agrega un dominio
propio en el futuro, hay que actualizar esos valores, además de
[`public/sitemap.xml`](public/sitemap.xml) y
[`public/robots.txt`](public/robots.txt).

## Colores, responsive y modo claro/oscuro

Los estilos viven en [`src/styles.css`](src/styles.css).

- `@layer tokens`: variables de color, tipografía, sombras, radios y anchos.
- `:root`: tema claro.
- `:root[data-theme='dark']`: tema oscuro.
- `@layer responsive`: ajustes para tablet y teléfono.
- `@media (prefers-reduced-motion: reduce)`: accesibilidad de movimiento.

No cambies nombres de clases sin actualizar también los componentes. Después de
un cambio visual, revisa como mínimo:

- escritorio horizontal: alrededor de `1440 × 900`;
- tablet horizontal: alrededor de `1024 × 768`;
- teléfono vertical: alrededor de `390 × 844`;
- pantalla grande: alrededor de `1920 × 1080`;
- modo claro y modo oscuro.

## Editar desde la interfaz web de GitHub

1. Abre el archivo desde la tabla de este README.
2. Pulsa el icono de lápiz **Edit this file**.
3. Cambia solamente el valor necesario.
4. Pulsa **Commit changes**.
5. Escribe un mensaje breve que describa el cambio.
6. Para una publicación directa, confirma el commit en `main`.
7. Revisa la pestaña **Actions** y el deployment de Vercel.

Para reemplazar la fotografía, abre la carpeta
[`src/assets/`](src/assets/), usa **Add file → Upload files** y sube el nuevo
archivo con el mismo nombre.

## Editar desde VS Code

Requisitos: Git, Node.js 24 y npm.

```bash
git clone https://github.com/M1gu3hb/pablomics-.git
cd pablomics-
npm ci
npm run dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173`.

Antes de publicar:

```bash
npm run check
```

Ese comando ejecuta lint, pruebas y build. También pueden ejecutarse por
separado:

```bash
npm run lint
npm run test
npm run build
```

Para enviar el cambio:

```bash
git status
git add ruta/del/archivo
git commit -m "Describe el cambio"
git push origin main
```

Usa `npm ci` para una instalación exactamente igual a `package-lock.json`. Usa
`npm install` solamente cuando necesites cambiar dependencias.

## Publicación automática GitHub → Vercel

El proyecto de Vercel está conectado a `M1gu3hb/pablomics-` y usa `main` como
rama de producción:

1. un commit llega a `main`;
2. GitHub Actions valida instalación, lint, pruebas y build;
3. Vercel crea y compila su deployment automáticamente en paralelo;
4. si el build termina correctamente, `pablomics.vercel.app` apunta a la nueva
   versión;
5. si el build falla, la versión anterior continúa activa.

No es necesario ejecutar un despliegue manual ni subir la carpeta `dist/`.
GitHub Actions sirve como una comprobación adicional: no sustituye el build
propio de Vercel.

Vercel solamente publicará cambios que compilen correctamente. Un error de
TypeScript, sintaxis o estructura de datos puede hacer fallar el deployment,
mientras la producción anterior permanece disponible.

## Cómo interpretar un deployment fallido

1. Abre la pestaña **Actions** del repositorio y el job rojo.
2. Identifica el primer paso que falló: `Lint`, `Test` o `Build`.
3. Si GitHub Actions pasó, abre el deployment en Vercel y consulta **Build
   Logs**.
4. Busca la primera línea marcada como error; las líneas posteriores suelen ser
   consecuencias.
5. Corrige el archivo señalado, ejecuta `npm run check` y crea otro commit.

Errores frecuentes:

- falta una coma o una comilla;
- una llave o un corchete no está cerrado;
- se escribió una categoría de Blog no permitida;
- se cambió el nombre de una propiedad;
- `package.json` y `package-lock.json` no coinciden;
- se cambió una ruta de archivo sin actualizar el `import`.

## Si Vercel conserva la versión anterior

1. Confirma que el commit está en `main`, no solamente en otra rama.
2. Revisa si el deployment nuevo está `Queued`, `Building`, `Ready` o `Error`.
3. Si está `Error`, la versión anterior seguirá activa por seguridad.
4. Si está `Ready`, recarga con `Ctrl + Shift + R` o usa una ventana privada.
5. Comprueba que estás abriendo `https://pablomics.vercel.app`.
6. Si no existe un deployment para el commit, revisa la conexión Git del
   proyecto en Vercel sin desconectarla ni crear otro proyecto.

## Comprobar que GitHub y Vercel usan el mismo commit

1. En GitHub, abre el commit más reciente de `main` y copia su SHA.
2. En Vercel, abre el deployment de producción más reciente.
3. Busca **Source** o **Git Commit**.
4. Verifica que el SHA sea idéntico.
5. Comprueba que el deployment esté `Ready` y tenga asignado
   `pablomics.vercel.app`.

## Revertir un cambio desde GitHub

La opción más segura es crear un commit que revierta el cambio:

1. abre **Commits** en GitHub;
2. selecciona el commit incorrecto;
3. usa **Revert** si GitHub muestra esa opción;
4. revisa el cambio propuesto y confírmalo;
5. espera la validación y el deployment.

Desde VS Code:

```bash
git pull
git revert SHA_DEL_COMMIT
git push origin main
```

No uses `git reset --hard` ni reescribas el historial de `main`.

## Archivos que no deben modificarse sin conocimiento técnico

- [`src/App.tsx`](src/App.tsx) y
  [`src/components/`](src/components/): rutas, presentación y comportamiento.
- [`src/styles.css`](src/styles.css): sistema visual completo.
- [`vite.config.ts`](vite.config.ts): proceso de build y recursos.
- [`vercel.json`](vercel.json): rutas directas y encabezados de producción.
- [`tsconfig.json`](tsconfig.json),
  [`tsconfig.app.json`](tsconfig.app.json) y
  [`tsconfig.node.json`](tsconfig.node.json): reglas de TypeScript.
- [`eslint.config.js`](eslint.config.js): reglas de lint.
- [`package.json`](package.json) y
  [`package-lock.json`](package-lock.json): scripts y dependencias.
- [`.github/workflows/validate.yml`](.github/workflows/validate.yml):
  validación automática.

Para cambios editoriales normales, basta con
[`src/data/portfolio.ts`](src/data/portfolio.ts),
[`src/data/blogs.ts`](src/data/blogs.ts), la fotografía e
[`index.html`](index.html) para SEO.

## Estructura principal

```text
.
├── .github/workflows/validate.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/pablo-salazar.jpg
│   ├── components/
│   ├── data/
│   │   ├── blogs.ts
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── tests/content-states.test.tsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.ts
```

## Lista de comprobación antes de publicar

- [ ] Solo se modificó información confirmada.
- [ ] Los enlaces, correo y CV abren correctamente.
- [ ] Los `slug` e identificadores del Blog son únicos.
- [ ] Los borradores mantienen `published: false`.
- [ ] `npm run check` termina sin errores.
- [ ] La portada funciona en escritorio, tablet y teléfono.
- [ ] Los modos claro y oscuro siguen siendo legibles.
- [ ] El commit está en `main`.
- [ ] GitHub Actions está en verde.
- [ ] El deployment de Vercel está `Ready`.
- [ ] El SHA de Vercel coincide con el commit de GitHub.
