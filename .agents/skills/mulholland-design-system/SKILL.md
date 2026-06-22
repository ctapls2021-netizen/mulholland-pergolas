---
name: mulholland-design-system
description: >
  Sistema de diseño oficial de Mulholland Brand (empresa de puertas y cercas de aluminio de lujo
  en Los Ángeles, CA). Úsalo cuando el usuario pida crear, modificar o diseñar nuevas landing pages,
  secciones o componentes para esta marca. Contiene colores, tipografía, espaciado, componentes y
  patrones de diseño usados en la landing principal de Gates & Fences.
---

# Mulholland Brand — Design System

Este skill contiene las reglas de diseño que DEBES seguir para cualquier nueva landing page o
sección creada para Mulholland Brand. Los valores son los reales extraídos del código de producción.

---

## Stack Tecnológico

- **Framework:** Astro (sitio estático)
- **CSS:** Vanilla CSS con `<style is:global>` por componente
- **Fuentes:** Google Fonts (declaradas vía @import en el componente Hero o en el layout)
- **Deploy:** Cloudflare Pages (conectado a GitHub automáticamente)
- **Repo:** GitHub → ctapls2021-netizen/mulholland-Gates-Fences

---

## Paleta de Colores

### Colores Primarios
| Token | Valor | Uso |
|---|---|---|
| brand-blue | #2C65B0 | Color principal. Fondos botones, barras, overlays cards, bordes activos. |
| brand-blue-dark | #22518C | Hover del azul principal. |
| brand-gold | #EAC848 | Acento dorado. Botones CTA alta conversión, cifras estadísticas. |
| brand-gold-dark | #D4B03A | Hover del dorado. |

### Colores de Texto
| Token | Valor | Uso |
|---|---|---|
| text-primary | #14110E | Títulos sobre fondo blanco. |
| text-secondary | #635C57 | Cuerpo, descripciones, texto de apoyo. |
| text-white | #FFFFFF | Texto sobre fondos oscuros o azules. |
| text-muted | #182C49 | Placeholders y texto en campos de formulario. |

### Colores de Fondo
| Token | Valor | Uso |
|---|---|---|
| bg-white | #FFFFFF | Fondo principal secciones. |
| bg-light | #F5F9FF | Fondo alternativo azul-grisáceo muy claro. |
| bg-header | rgba(255,255,255,0.94) | Header sticky con backdrop-filter: blur(5px). |

### Formulario Hero
| Token | Valor | Uso |
|---|---|---|
| form-gradient-top | #5E97D5 | Inicio gradiente card formulario. |
| form-gradient-bottom | #4467AB | Fin gradiente card formulario. |
| form-border | #C3C3C3 | Borde de inputs. |
| divider | #D9D9D9 | Separadores. |

---

## Tipografía

### Fuentes Cargadas
```
Raleway: 400, 700, 800
Inter: 400, 600, 700, 800
Poppins: 600, 700
Playfair Display: 500
```
URL: https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800&family=Inter:wght@400;600;700;800&family=Poppins:wght@600;700&family=Playfair+Display:wght@500&display=swap

### Roles de Fuente
| Fuente | Uso |
|---|---|
| Raleway | H1/H2/H3, subtítulos, botones CTA, textos de marca. PRINCIPAL. |
| Inter | Cuerpo, descripciones, navegación, teléfonos, datos. |
| Poppins | SOLO inputs del formulario Hero. |
| Playfair Display | SOLO cifras estadísticas grandes (ej: "30+"). |

### Escala Tipográfica

**H1 Hero Principal:**
font-family: Raleway; font-weight: 700;
font-size: clamp(40px, 4vw, 60px);
line-height: 1.05; letter-spacing: -1.5px; color: #FFFFFF;

**H2 Títulos de Sección (Desktop):**
font-family: Raleway; font-weight: 800;
font-size: 45px; line-height: 45px; letter-spacing: -0.9px; color: #14110E;
Mobile: font-size: 24px; line-height: 27px;

**H3 Subtítulos de Feature:**
font-family: Raleway; font-weight: 800;
font-size: 26px; line-height: 24px; color: #14110E;
Mobile: font-size: 17px; line-height: 15.7px;

**Eyebrow / Overline (encima del H2):**
font-family: Raleway; font-weight: 600;
font-size: 12px; letter-spacing: 2.64px; text-transform: uppercase; color: #2C65B0;

**Cuerpo / Descripción:**
font-family: Inter (o Raleway); font-weight: 400;
font-size: 16px; line-height: 26px; color: #635C57;
Mobile: font-size: 14px; line-height: 20px;

**Texto de card/overlay sobre imagen:**
Ciudad: Raleway 400, 12px, letter-spacing 1.2px, uppercase, #FFF
Nombre: Raleway 400, 20px, line-height 28px, #FFF

---

## Layout y Espaciado

### Contenedores
```
Hero / Header: max-width 1920px, padding-left 110px, padding-right 40px
Secciones de contenido: max-width ~1430px, padding 0 20px

Breakpoints de padding del hero-inner:
  1600px → padding-left: 60px
  1400px → padding-left: 40px
  1200px → flex-direction: column, padding: 120px 24px 60px
  768px  → padding: 0
```

### Header
```
Desktop: height 80px, padding-left 110px, padding-right 40px
Mobile:  height 52px, padding 14px 9px
```

### Referencia de Alineación
El padding-right: 40px del header es la REFERENCIA MAESTRA de alineación.
Todos los elementos del borde derecho en desktop deben alinearse con esos 40px.
Ejemplo: hero-inner tiene padding-right: 40px para que el formulario se alinee con el botón del header.

### Padding de Secciones
Secciones estándar: padding [vertical]px 20px
Mobile: igual, 20px lateral mínimo.
Sección con margen generoso: padding-top ~80px, padding-bottom variable.

### Gaps de Grillas
```
Gate Styles (3 cols): gap 53px desktop / 20px tablet / 10px col + 25px row mobile 2cols
Feature Grid: gap 40px desktop / 20px mobile
SoCal Living Grid: gap 15px
```

---

## Componentes Estándar

### Botón Primario (azul sólido)
background: #2C65B0; color: #FFFFFF;
font-family: Raleway; font-weight: 700; font-size: 17px; letter-spacing: 0.13em;
height: 48px; padding: 0 25px;
border: 1px solid #2C65B0; border-radius: 3px;
transition: background-color 0.2s ease;
Hover: background #22518C; border-color #22518C;

### Botón CTA Dorado (alta conversión — máximo impacto)
background: #EAC848; color: #182C49;
font-family: Poppins; font-weight: 700; font-size: 18px;
height: 50px; width: 100%; border: none;
Hover: background #D4B03A;
Mobile: font-size 14px; height 55px;

### Botón Outline (borde azul)
background: transparent; border: 1px solid #2C65B0; color: #14110E;
font-family: Inter; font-size: 17px; letter-spacing: 0.08em;
height: 48px; padding: 0 20px; border-radius: 3px 0 0 3px;
(Se usa en pareja con botón primario a la derecha, sin border-right)

### Botón Pill en Barra Azul
background: rgba(255,255,255,0.11); border-radius: 45px;
height: 56px; max-width: 715px;
Hover: rgba(255,255,255,0.2)

### Barra CTA Azul (banner intermedio de sección)
width: 100%; height: 105px (desktop) / 52px (mobile);
background: #2C65B0;
display flex; align-items center; justify-content center;

### Card de Imagen con Overlay Degradado
Contenedor: position relative; overflow hidden;
Hover en img: transform scale(1.03); transition 0.4s ease;
Overlay: position absolute; bottom 0; left 0; width 100%;
  padding: 40px 30px 25px 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);

### Card con Overlay Flotante (estilo Gate Styles)
Overlay sobresale 25px debajo de la imagen: bottom -25px;
box-shadow: 0 4px 15px rgba(0,0,0,0.15);
Parte blanca (icono): background #FFFFFF;
Parte azul (nombre): background #2C65B0; color #FFF; Raleway 500 17px;
Mobile: height 72px; bottom -15px; font-size 9.8px;

### Formulario Hero
background: linear-gradient(to bottom, #5E97D5 0%, #4467AB 100%);
padding: clamp(24px, 3vw, 44px) clamp(24px, 3vw, 48px);
min-height: 589px;
box-shadow: -8px 0 40px rgba(0,0,0,0.25);

Inputs: height 48px; border 1px solid #C3C3C3; background #FFF;
  font-family Poppins; font-weight 600; font-size 15px; color #182C49; padding 0 16px;

Título: Raleway 800, 36px/37px, #FFF, text-align center, margin-bottom 28px;

### Pill / Badge Eyebrow (Hero)
background: rgba(0,0,0,0.36); border: 1px solid #E5E2DE; border-radius: 30px;
height: 30px; padding: 0 14px;
Texto: Inter 500, 12px, letter-spacing 2.1px, uppercase, color #CCC6C0;
Punto: 6px x 6px, background #EAC848, border-radius 50%;

### Eyebrow en Caja Azul (estilo SoCal Living)
Contenedor: width 215px; height 50px; background #2C65B0;
  display flex; align-items center; justify-content center; gap 5px;
Texto dorado: Raleway 800 italic, 14px, letter-spacing 1px, #EAC848, uppercase;
Texto blanco: igual pero color #FFFFFF;
Mobile: 135px x 35px; font-size 12.7px; letter-spacing 1.86px;

---

## Sombras y Efectos

```
Card overlay flotante: box-shadow 0 4px 15px rgba(0,0,0,0.15)
Formulario Hero: box-shadow -8px 0 40px rgba(0,0,0,0.25)
Header: backdrop-filter blur(5px)
Divider azul: height 1px; background #2C65B0
Divider gris: height 1px; background #D9D9D9
```

---

## Breakpoints Responsivos

| Breakpoint | Descripción |
|---|---|
| max-width 1600px | Ajuste de padding del hero (60px) |
| max-width 1400px | Padding 40px, reducción de font-size |
| max-width 1200px | Layout cambia a columna. Tablet amplio. |
| max-width 1024px | Tablet. Grillas pasan a 2 cols o carrusel. |
| max-width 768px | Mobile. Layout completamente rediseñado. |
| min-width 769px and max-width 1200px | Tablet range específico. |

---

## Patrones de Sección

### Estructura HTML Estándar
```astro
<section class="xx-section">
  <div class="xx-container">
    <!-- Eyebrow -->
    <div class="xx-subtitle">TEXTO EYEBROW</div>
    <!-- Título -->
    <h2 class="xx-title">Título <span class="xx-title-blue">azul</span></h2>
    <!-- Descripción -->
    <p class="xx-text">...</p>
    <!-- Contenido: grilla, cards, carrusel -->
  </div>
</section>
```

### Reglas de Nomenclatura CSS
Prefixar con 2-3 letras del nombre de sección para evitar colisiones.
Ejemplos: .gs- (GateStyles), .adv- (Advantage), .sc- (SoCalLiving), .cta- (CTA).

### Sección sobre fondo blanco #FFFFFF
padding-top ~80px; max-width ~1430px centrado.

### Sección sobre fondo claro #F5F9FF
Misma estructura. Padding-bottom puede ser mayor si hay elementos que sobresalen.

### Sección con imagen de fondo (Hero)
background-image + cover; height 100vh;
NO usar overlay de color sobre el section — la oscuridad viene de la imagen.

---

## Reglas de Diseño — NO Negociables

1. Esquinas: SIEMPRE border-radius 3px en botones. NUNCA 8px+. Pill solo en barra CTA.
2. Dorado #EAC848: EXCLUSIVO para CTAs de máxima conversión y cifras. No usar en texto informativo.
3. Azul #2C65B0: Color de confianza/marca. Encabezados, fondos de barras, overlays, bordes activos.
4. Hovers: transition 0.2s ease. Nunca efectos bruscos. Preferir opacity y background-color.
5. Zoom en hover de cards: scale(1.03) con transition 0.4s ease.
6. Espaciado generoso: secciones desktop usan 80px+ de padding vertical.
7. Eyebrows: siempre text-transform uppercase con letter-spacing 2-3px.
8. Alineación: izquierda en desktop, centrado en mobile.
9. Referencia de layout: padding-right 40px del header = margen derecho maestro.
10. Roles de fuente: Raleway para marca/titulación, Inter para info/datos, Poppins SOLO en forms.

---

## Cómo Crear una Nueva Sección

1. Crear src/components/NombreSeccion.astro
2. Usar <style is:global> para los estilos
3. Prefixar todas las clases CSS con 2-3 letras del nombre
4. Seguir paleta de colores y tipografía de este skill
5. Incluir @media (max-width 768px) con rediseño mobile completo
6. Importar y agregar el componente en src/pages/index.astro

## Cómo Crear una Nueva Landing Page

1. Crear nueva carpeta/archivo en src/pages/
2. Reutilizar Header.astro y Footer.astro existentes
3. Crear Hero[Servicio].astro adaptando el formulario si es necesario
4. Todas las secciones deben respetar esta guía de diseño
5. Imágenes en /public/assets/images/[nombre-seccion]/
