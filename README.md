# GlassTrack

GlassTrack is a learning project and the beginning of a practical tool for managing stained-glass supplies and projects. The long-term goal is to help track inventory, understand the cost of making a piece, and make better decisions about pricing and sales.

## Why this project?

The main purpose of GlassTrack is to learn modern React and TypeScript by building a real application a little at a time.

Rather than starting with a large architecture, each step will introduce concepts when the application needs them. That means practicing React components, props, state, forms, and rendering collections before adding more advanced features or infrastructure.

## Development approach

GlassTrack is being developed incrementally:

1. **Inventory foundation** — display sample glass inventory and build the basic application structure.
2. **Inventory interactions** — add glass items and update the displayed inventory.
3. **Browser persistence** — keep inventory between visits using local storage.
4. **Projects and material usage** — record projects and the materials used to make them.
5. **Costing and pricing** — calculate material costs and explore labor, overhead, fees, and profit.
6. **Backend and database** — introduce an ASP.NET Core API and SQL Server when browser-only storage is no longer sufficient.
7. **Sales and photos** — add capabilities such as tracking sales and storing photos when they become useful.

The order may evolve as the project grows. The guiding principle is to solve the current problem without building future complexity too early.

## Current status

The app is an early work in progress. It currently has:

- A React and TypeScript application built with Vite
- Navigation between Home, Inventory, and Add Glass pages
- A glass inventory list rendered from sample data

The Add Glass page and Home page are currently placeholders. Inventory is not yet editable or saved between visits, and there is no backend or database.

## Technology

- React 19
- TypeScript
- Vite
- React Router
- Bootstrap 5

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev

```

Run the production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Longer-term vision

Over time, GlassTrack may help manage:

- Glass inventory and other supplies
- Projects and materials consumed
- Finished pieces and their status, such as for sale, sold, gifted, or personal
- Material costs, labor, overhead, fees, and suggested prices
- Sales, revenue, and profitability
- Photos of inventory and completed work

These are future goals, not requirements for the first version. The immediate focus is learning React and TypeScript while building a useful inventory foundation.
