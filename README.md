# Nuxt Starter

A modern starter template for building web applications with Nuxt 4.

## Tech Stack

- **Nuxt 4** - Vue.js framework with TypeScript
- **Nuxt UI v4** - Beautiful, accessible components with dark mode
- **ESLint** - Code linting with Nuxt module
- **pnpm** - Fast, disk space efficient package manager

## Features

- 🌙 Dark mode support with toggle
- 🎨 Nuxt UI components pre-configured
- 📦 Simple placeholder pages (Home, Settings)
- 🔧 TypeScript configured and ready
- ✅ ESLint for code quality

## Setup

Install dependencies with pnpm:

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Building for Production

Generate a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Generate a static site:

```bash
pnpm generate
```

## Project Structure

```
nuxt-starter/
├── app/
│   ├── assets/css/        # Global styles
│   ├── layouts/           # Layout components
│   ├── pages/             # Route pages (index, settings)
│   └── app.vue            # Root component
├── public/                # Static assets
└── nuxt.config.ts         # Nuxt configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint code with ESLint

## Requirements

- Node.js 18+
- pnpm 10+

## Notes

- No testing framework included by design (add as needed)

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
