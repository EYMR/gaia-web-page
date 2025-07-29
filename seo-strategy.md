# SEO Strategy for Gaia Medico Tradicional Website

## Global Metadata (Root Layout)

### Basic Metadata
- **Title Template**: "{pageTitle} | Gaia Medico Tradicional"
- **Default Title**: "Gaia Medico Tradicional"
- **Default Description**: "Medicina tradicional y holística para tu bienestar integral. Tratamientos naturales respaldados por siglos de sabiduría ancestral."
- **Viewport**: "width=device-width, initial-scale=1"
- **Charset**: "utf-8"
- **Language**: "es"
- **Theme Color**: "#16a34a" (green-600)
- **Robots**: "index, follow"
- **Canonical URL**: Dynamic based on current page

### Icons and Favicons
- Favicon (favicon.ico)
- Apple Touch Icon (apple-touch-icon.png)
- Icon sizes: 16x16, 32x32, 192x192, 512x512
- Web Manifest (site.webmanifest)

### Open Graph Default
- **og:type**: "website"
- **og:site_name**: "Gaia Medico Tradicional"
- **og:locale**: "es_MX"
- **og:image**: Default OG image (to be created)
- **og:image:width**: "1200"
- **og:image:height**: "630"

### Twitter Card Default
- **twitter:card**: "summary_large_image"
- **twitter:creator**: "@GaiaMedicoTradicional" (if applicable)

## Page-Specific Metadata

### Home Page (page.tsx)
- **Title**: "Gaia Medico Tradicional | Medicina Natural y Holística"
- **Description**: "Descubre el poder curativo de la naturaleza con nuestros tratamientos respaldados por siglos de sabiduría ancestral. Medicina tradicional para tu bienestar integral."
- **Keywords**: "medicina tradicional, medicina holística, tratamientos naturales, bienestar integral, Gaia"
- **og:type**: "website"

### About Page
- **Title**: "Sobre Nosotros | Gaia Medico Tradicional"
- **Description**: "Conoce nuestra historia, filosofía y compromiso con la medicina tradicional y holística. Más de 10 años de experiencia en tratamientos naturales."
- **Keywords**: "sobre Gaia, medicina tradicional, historia, filosofía, tratamientos naturales"

### Blog Page
- **Title**: "Blog de Medicina Tradicional | Gaia Medico Tradicional"
- **Description**: "Explora nuestros artículos sobre medicina tradicional, consejos de salud natural y las últimas investigaciones en terapias alternativas."
- **Keywords**: "blog medicina tradicional, artículos salud natural, terapias alternativas, consejos bienestar"

### Calendar Page
- **Title**: "Agenda tu Consulta | Gaia Medico Tradicional"
- **Description**: "Reserva una consulta con nuestros especialistas en medicina tradicional. Agenda tu cita para tratamientos naturales y holísticos."
- **Keywords**: "agendar consulta, cita medicina tradicional, reservar tratamiento, consulta holística"

### Contact Page
- **Title**: "Contacto | Gaia Medico Tradicional"
- **Description**: "Ponte en contacto con Gaia Medico Tradicional. Resolvemos tus dudas sobre nuestros tratamientos naturales y medicina holística."
- **Keywords**: "contacto, medicina tradicional, consultas, ubicación, teléfono"

### FAQ Page
- **Title**: "Preguntas Frecuentes | Gaia Medico Tradicional"
- **Description**: "Respuestas a las preguntas más frecuentes sobre medicina tradicional, tratamientos naturales y terapias holísticas en Gaia."
- **Keywords**: "FAQ medicina tradicional, preguntas frecuentes, dudas tratamientos naturales"

### Products Page
- **Title**: "Productos Naturales | Gaia Medico Tradicional"
- **Description**: "Descubre nuestra selección de productos naturales para tu bienestar. Remedios tradicionales, suplementos y más."
- **Keywords**: "productos naturales, remedios tradicionales, suplementos naturales, medicina holística"

### Services Page
- **Title**: "Servicios de Medicina Tradicional | Gaia Medico Tradicional"
- **Description**: "Conoce nuestros servicios de medicina tradicional y holística. Tratamientos naturales personalizados para tu bienestar integral."
- **Keywords**: "servicios medicina tradicional, tratamientos holísticos, terapias naturales"

### Testimonials Page
- **Title**: "Testimonios | Gaia Medico Tradicional"
- **Description**: "Lee las experiencias de nuestros pacientes con los tratamientos de medicina tradicional y holística en Gaia."
- **Keywords**: "testimonios medicina tradicional, opiniones pacientes, experiencias tratamientos naturales"

### Treatments Page
- **Title**: "Tratamientos de Medicina Tradicional | Gaia Medico Tradicional"
- **Description**: "Explora nuestros tratamientos de medicina tradicional y holística. Soluciones naturales para diversas condiciones de salud."
- **Keywords**: "tratamientos medicina tradicional, terapias naturales, medicina holística, acupuntura, herbolaria"

## Structured Data Implementation

### Organization Schema (Global)
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Gaia Medico Tradicional",
  "description": "Medicina tradicional y holística para tu bienestar integral",
  "url": "https://www.gaiamedicotradicional.com",
  "logo": "https://www.gaiamedicotradicional.com/logo.png",
  "telephone": "+524422799328",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[Postal Code]",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.facebook.com/GaiaMedicoTradicional",
    "https://www.instagram.com/gaiamedicotradicional"
  ]
}
```

### Product Schema (Products Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[Product Description]",
  "image": "[Product Image URL]",
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock"
  }
}
```

### Article Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Article Description]",
  "image": "[Article Featured Image]",
  "datePublished": "[Publication Date]",
  "dateModified": "[Last Modified Date]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Gaia Medico Tradicional",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.gaiamedicotradicional.com/logo.png"
    }
  }
}
```

### FAQ Schema (FAQ Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer]"
      }
    }
  ]
}
```

## Implementation Plan

1. Update root layout.tsx with enhanced global metadata
2. Create necessary icon assets and add to public directory
3. Implement page-specific metadata for each page
4. Add structured data to appropriate pages
5. Test and validate implementation