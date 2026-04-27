# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio web para IsraMagic, mentalista. Stack: React 19 + TypeScript + Vite + Tailwind CSS v4. Sin backend ni base de datos — todo el contenido (shows, eventos) está hardcodeado en los propios componentes de página.

## Commands

```bash
npm run dev       # servidor de desarrollo (Vite, HMR)
npm run build     # tsc -b && vite build
npm run lint      # eslint
npm run preview   # previsualizar el build de producción
```

No hay tests configurados.

## Architecture

### Routing
`src/Router/AppRouter.tsx` define todas las rutas usando React Router v7. El layout global (Navbar siempre visible) está en `src/App.tsx`, que envuelve `<AppRouter>` dentro de `<BrowserRouter>`.

Rutas actuales: `/`, `/shows`, `/shows/:slug`, `/contacto`, `/eventos`, `/galeria`, `/sobre-mi`.

### Data layer
No hay API ni CMS. El contenido vive directamente en los archivos de página:

- **Shows**: el array `shows` en `src/pages/Shows.tsx` (listado) y el objeto `showsData` en `src/pages/ShowsDetailPage.tsx` (detalle por slug).
- **Eventos**: el array `eventos` en `src/pages/Eventos.tsx`.

Para añadir o modificar un show hay que editar ambos archivos (`Shows.tsx` y `ShowsDetailPage.tsx`).

### Imágenes
Servidas desde `/public/`. Se referencian como `/nombre.png` (sin `src/assets`). `ShowCard` acepta un objeto `{ mobile, tablet, desktop }` para servir imágenes responsivas via `<picture>`.

### Contact form
`src/pages/Contact.tsx` orquesta el envío con EmailJS (`@emailjs/browser`). Las credenciales se leen de variables de entorno:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

La lógica de formulario (Formik + Yup) está en `src/components/ContactForm.tsx`. Acepta un query param `?evento=` que preselecciona el tipo de evento.

### Styling
Tailwind CSS v4 con tema personalizado definido en `src/index.css` via `@theme`:

- Fondo: `dark-base` (`#0a0a0a`), cards: `dark-card` (`#111111`)
- Paleta dorada: `gold` (`#d4a74e`), `gold-light` (`#f5c96b`)
- Tipografía: `font-title` → Playfair Display, `font-body` → Inter

Clases de utilidad CSS globales definidas en `index.css`: `.glass`, `.glass-gold`, `.gold-glow`, `.title-shine`, `.card-hover`, `.spotlight`, y animaciones `.animate-fadeUp`, `.animate-glow`, `.animate-float`, etc.

El patrón de entrada animada en páginas usa un `useState(false)` + `setTimeout 100ms` para aplicar clases de transición Tailwind con `transitionDelay` por elemento.
