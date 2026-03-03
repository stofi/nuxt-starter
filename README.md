# Nuxt Starter

A modern starter template for building web applications with Nuxt 4.

## Tech Stack

- **Nuxt 4** - Vue.js framework with TypeScript
- **Nuxt UI v4** - Beautiful, accessible components with dark mode
- **oxlint + oxfmt** - Fast Rust-based linting and formatting
- **Vitest** - Unit testing with Nuxt test utils
- **pnpm** - Fast, disk space efficient package manager

## Features

- Dark mode support with toggle
- Nuxt UI components pre-configured
- Simple placeholder pages (Home, Settings)
- TypeScript configured and ready
- oxlint + oxfmt for fast linting and formatting
- Pre-commit hooks via simple-git-hooks + lint-staged
- Vitest sanity test to verify setup

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
├── tests/                 # Vitest tests
├── public/                # Static assets
├── nuxt.config.ts         # Nuxt configuration
└── vitest.config.ts       # Vitest configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint with oxlint
- `pnpm lint:fix` - Lint and auto-fix
- `pnpm format` - Format with oxfmt
- `pnpm format:check` - Check formatting
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode

## Requirements

- Node.js 18+
- pnpm 10+

## AI-Assisted Development

This template works well with Claude Code. For Nuxt-specific skills (components, routing, composables), use the [Nuxt skills](https://github.com/stofi/nuxt-starter/blob/main/.claude/skills/) in your Claude project.

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [oxlint](https://oxc.rs/docs/guide/usage/linter)
- [oxfmt](https://oxc.rs/docs/guide/usage/formatter)
