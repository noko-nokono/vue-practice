# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a practice repository containing two separate frontend projects:

- **react/**: React 18 + TypeScript + Vite application
- **vue-3/**: Vue 3 + TypeScript + Vite application

Both projects share similar page structures (Home, Counter, Todo, DataFetch) and use the same package manager (pnpm).

## Common Development Commands

### For React project (react/):
```bash
cd react
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production (includes TypeScript compilation)
pnpm preview    # Preview production build
```

### For Vue 3 project (vue-3/):
```bash
cd vue-3
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Architecture Overview

### React Project
- Uses React Router DOM for routing
- TypeScript configuration with strict mode
- Vite build tool with React plugin
- Path alias: `@` maps to `./src`
- Component structure: `src/components/` and `src/pages/`

### Vue 3 Project
- Uses Vue Router for routing
- Composition API with `<script setup>` syntax
- TypeScript support with Vue 3
- Vite build tool with Vue plugin and dev tools
- Path alias: `@` maps to `./src`
- Component structure: `src/components/` and `src/page/`
- Optimized build configuration with manual chunking

## Key Files

- **React**: `react/src/App.tsx` - Main application component with routing
- **Vue**: `vue-3/src/App.vue` - Root component using RouterView
- Both projects use Vite for build tooling with custom configurations

## Development Notes

- Both projects use pnpm as the package manager
- TypeScript is configured for both projects
- No testing framework is currently configured
- No linting tools are set up in either project