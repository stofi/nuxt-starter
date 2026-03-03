# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a starter template for building web applications with Nuxt 4.

**Key Technologies:**
- Nuxt 4 (Vue.js framework)
- Nuxt UI v4 (component library with dark mode)
- TypeScript throughout
- pnpm as package manager
- oxlint + oxfmt for linting and formatting
- Vitest + @nuxt/test-utils for testing

## Critical Architecture Details

### CSS and Styling

- Global CSS import in `nuxt.config.ts`: `css: ['~/assets/css/main.css']`
- The `main.css` file imports Tailwind and Nuxt UI: `@import "tailwindcss"` and `@import "@nuxt/ui"`
- Nuxt UI components are auto-imported (no manual imports needed)
- Use Nuxt UI color system: `primary`, `secondary`, `success`, `warning`, `error`, `info`, `neutral`

### Component Availability

Check available Nuxt UI components in `.nuxt/components.d.ts` before using them. Not all expected components exist (e.g., `UToggle` doesn't exist, use `USwitch` instead).

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Lint code
pnpm lint

# Lint and auto-fix
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Run tests
pnpm test

# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview
```

## Configuration Files

- `nuxt.config.ts` - Modules: `@nuxt/ui`
- `vitest.config.ts` - Vitest config using `@nuxt/test-utils` nuxt environment
- `app/app.config.ts` - Nuxt UI theme customization (currently empty)

## Common Patterns

### Adding a New Page

1. Create file in `app/pages/` (e.g., `app/pages/profile.vue`)
2. Add navigation link to `app/layouts/default.vue`
3. Use Nuxt UI components (`UCard`, `UButton`, `UInput`, etc.)

### Adding a Test

Create test files under `tests/` mirroring the app structure. Use `mountSuspended` for page/component tests:

```ts
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MyPage from '~/pages/my-page.vue'

it('mounts', async () => {
  const wrapper = await mountSuspended(MyPage)
  expect(wrapper.html()).toBeTruthy()
})
```

### Clearing Build Cache

If you encounter hydration mismatches or stale build issues:
```bash
rm -rf .nuxt .output
```
The dev server will auto-regenerate on next start.

## Notes

- TypeScript is configured with Nuxt's auto-generated types in `.nuxt/`
- Dark mode is enabled by default via Nuxt UI's color mode system
- Pre-commit hooks run oxlint and oxfmt on staged files via simple-git-hooks + lint-staged
