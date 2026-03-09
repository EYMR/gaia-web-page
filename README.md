# 🌿 Gaia Médico Tradicional

Sitio web oficial de **Gaia Médico Tradicional** — Medicina tradicional y holística para tu bienestar integral.

🌐 <a href="https://www.gaia-web-services.com.mx">www.gaia-web-services.com.mx</a>

## Tecnologías

- **Framework**: <a href="https://nextjs.org/">Next.js 15</a> con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 + Material UI (MUI)
- **Componentes**: Radix UI + shadcn/ui
- **Blog**: MDX con next-mdx-remote
- **Backend**: Firebase (Storage + Admin)
- **Deploy**: GitHub Pages con GitHub Actions

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Linting
npm run lint
```

## Estructura del proyecto

```
src/
├── app/                 # Rutas y páginas (App Router)
│   ├── about/           # Acerca de nosotros
│   ├── blog/            # Blog con MDX
│   ├── calendar/        # Agenda de consultas
│   ├── contact/         # Página de contacto
│   ├── faq/             # Preguntas frecuentes y legal
│   ├── products/        # Productos naturales
│   ├── services/        # Servicios ofrecidos
│   ├── testimonials/    # Testimonios de pacientes
│   └── treatments/      # Tratamientos disponibles
├── components/          # Componentes reutilizables
├── data/                # Datos estáticos
├── hooks/               # Custom hooks
└── lib/                 # Utilidades y configuración
```

## Deploy

El sitio se despliega automáticamente a GitHub Pages mediante GitHub Actions al hacer push a `main`.

### Configuración DNS (GoDaddy)

Para el dominio `gaia-web-services.com.mx`, configura estos registros:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | EYMR.github.io |

## Licencia

Todos los derechos reservados © Gaia Médico Tradicional
