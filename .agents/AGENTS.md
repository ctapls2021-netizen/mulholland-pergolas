# Guía de Flujo de Trabajo para Nuevas Landing Pages

Este documento registra el proceso técnico para crear, compilar, configurar y publicar nuevas landing pages de Mulholland Brand utilizando la arquitectura actual (Astro + Cloudflare Pages + Cloudflare Workers para el subdominio `lp.mulhollandbrand.com`).

---

## 1. Arquitectura de Red (Cómo funciona)
El subdominio `lp.mulhollandbrand.com` apunta originalmente al servidor de WordPress del cliente. Para servir las landings de Astro de forma transparente bajo la misma URL sin interferir con WordPress:
1. **Cloudflare Pages** hospeda los archivos compilados de la landing page (ej. `mulholland-gates-fences-dxm.pages.dev`).
2. Un **Cloudflare Worker** intercepta el tráfico en las rutas de las landings específicas (ej. `/gates-and-fences*`).
3. Si la solicitud es un recurso estático (CSS, JS, imágenes), la Worker le quita el prefijo de la ruta y lo busca en la raíz de Cloudflare Pages.
4. Si es la página web (HTML), la Worker la carga directamente desde su subcarpeta correspondiente.

---

## 2. Paso a Paso para Crear y Subir una Nueva Landing Page

### Paso 2.1: Crear la nueva página en Astro
1. Crea el nuevo archivo `.astro` en la carpeta `src/pages/` del proyecto.
   * *Ejemplo*: `src/pages/wood-fences.astro`.
2. Utiliza el layout común `<Layout title="...">` para envolver la página (esto garantiza que cargue el script de Google Tag Manager automáticamente).

### Paso 2.2: Prefijar las rutas de recursos locales
Asegúrate de que todas las imágenes o recursos estáticos que referencies en el HTML tengan la ruta correcta:
* Si usas rutas absolutas, deben empezar con el prefijo de la subcarpeta para que la Worker pueda interceptarlas.
  * *Correcto*: `<img src="/gates-and-fences/assets/images/..."/>`
  * *Incorrecto*: `<img src="/assets/images/..."/>` (esto intentaría cargar desde WordPress y daría error 404).

*Nota: Astro automáticamente se encarga de compilar y prefijar los archivos CSS/JS gracias a la configuración `base: '/gates-and-fences'` en `astro.config.mjs`.*

### Paso 2.3: Compilar y Subir a GitHub
1. Ejecuta la compilación local para verificar que no haya errores:
   ```bash
   npm run build
   ```
2. Haz commit y push de tus cambios a la rama principal de GitHub:
   ```bash
   git add .
   git commit -m "feat: add new landing page wood-fences"
   git push
   ```
3. Cloudflare Pages compilará automáticamente el proyecto y la nueva página estará disponible internamente en:
   `https://mulholland-gates-fences-dxm.pages.dev/gates-and-fences/wood-fences/`

---

## 3. Configuración en el Panel de Cloudflare

### Paso 3.1: Añadir la nueva ruta al Worker
1. En el panel de Cloudflare, ve a **Workers y Pages** -> selecciona tu Worker (`lp-gates-fences`).
2. Ve a **Desencadenadores (Triggers)** -> **Rutas de Workers (Custom Routes)**.
3. Haz clic en **Añadir ruta** y añade la ruta de la nueva landing page:
   * **Ruta**: `lp.mulhollandbrand.com/wood-fences*` (con el asterisco al final).
   * **Zona**: `mulhollandbrand.com`.

### Paso 3.2: Actualizar el código del Worker
1. En el Worker, haz clic en **Editar código**.
2. En la lista `landingsActivas`, agrega la nueva ruta de la landing. El código de la Worker se verá así:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Lista de subcarpetas activas para las landings de Astro
    const landingsActivas = [
      '/gates-and-fences',
      '/wood-fences' // <-- Simplemente agrega las nuevas aquí
    ];
    
    const rutaCoincidente = landingsActivas.find(ruta => url.pathname.startsWith(ruta));
    
    if (rutaCoincidente) {
      url.hostname = 'mulholland-gates-fences-dxm.pages.dev';
      
      const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname);
      const isHtml = url.pathname.endsWith('.html');
      
      if (hasExtension && !isHtml) {
        url.pathname = url.pathname.replace(rutaCoincidente, '');
      }
      
      const headers = new Headers(request.headers);
      headers.set('host', 'mulholland-gates-fences-dxm.pages.dev');
      
      return fetch(new Request(url, {
        headers: headers,
        method: request.method,
        body: request.body,
        redirect: 'follow'
      }));
    }
    
    return fetch(request);
  }
}
```
3. Guarda e implementa.

---

## 4. Google Tag Manager y Webhooks integrados
* **GTM**: Ya está configurado en `src/layouts/Layout.astro` e inyecta la etiqueta `GTM-MSS2VZ5` de manera automática en todas las páginas que lo utilicen.
* **Webhook de Formularios**: El script de interceptación de formularios está en `Layout.astro` y envía todos los campos de cualquier formulario de clase `.hero-form` o `.cta-form` al webhook `https://hooks.zapier.com/hooks/catch/441644/42fuufs/`, incluyendo de manera automática la URL completa (con UTMs) y el título de la página.
