# Avanrobotic Website

Corporate website for **Avanrobotic (艾凡机器人)** — autonomous mobile robots (AGV/AMR), warehouse automation, and digital twin simulation consulting.

Built as a multi-page static site with Vite for local development and production builds. Styling uses Tailwind CSS; pages support Chinese and English via client-side i18n.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, product overview, demo video modal |
| About | `about.html` | Company story, leadership, deployment video |
| Products | `product.html` | AGV/AMR lineup, specs, consulting & simulation section |
| Contact | `contact.html` | Inquiry form and contact details |

## Features

- Bilingual UI (中文 / English) with language preference stored in `localStorage`
- Full-screen video backgrounds and inline demo players
- Digital twin simulation demo on the Products page (`resource/simulation.mp4`)
- Responsive layout with mobile navigation

## Project structure

```
├── index.html          # Home
├── about.html          # Company
├── product.html        # Products & consulting
├── contact.html        # Contact
├── resource/           # Images, videos, and other media
├── src/
│   └── index.css       # Tailwind + global styles
├── public/             # Static assets served as-is
├── vite.config.ts      # Vite multi-page build config
└── package.json
```

## Media assets

Place media files in the `resource/` directory. Files referenced by the site include:

| Asset | Used on |
|-------|---------|
| `logo.PNG` | All pages |
| `background.mp4` | Home, Products, Contact backgrounds |
| `avanrobot.mp4` | Home & Products demo modal |
| `avan-agv600.jpg` | Products — AvanRA-600-A |
| `simulation.mp4` | Products — consulting simulation demo |
| `truss-robots1.mp4` | About background |
| `truss-robot2.mp4` | About deployment video |

Large binary assets may be kept out of git; ensure they are present locally or on the deployment host before running or publishing the site.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

Output is written to `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Contact

- **Phone:** 1 408 218 9305
- **Email:** contact@avanrobotic.com
- **Address:** 6664 Menzies Place, Chino Hills, CA 91709
