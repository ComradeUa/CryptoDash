# CryptoDash Board

CryptoDash Board is a modern cryptocurrency dashboard built with React, TypeScript, and Vite. It provides real-time data, search, and visualization for the most popular cryptocurrencies using the CoinGecko API.

## Features

- 🔥 Fast and modern UI (Vite + React + Tailwind CSS)
- 📈 Live cryptocurrency prices, market cap, and 24h changes
- 🔍 Search bar for quick filtering
- ⭐ Favorites management
- 📊 Price charts and coin details
- Skeletons and loading states for smooth UX

## Project Structure

```
src/
  api/           # API requests (CoinGecko)
  components/    # Main UI blocks and widgets
   ui/          # Atomic and reusable UI elements (Button, Input, Table, etc.)
  hooks/         # Custom React hooks
  lib/           # Utilities
  pages/         # Page-level components (Home, Favorites, CoinDetails)
  types/         # TypeScript types
  App.tsx        # Main app component
  main.tsx       # Entry point
```

## Getting Started

1. **Install dependencies:**
  ```sh
  yarn install
  # or
  npm install
  ```

2. **Start the development server:**
  ```sh
  yarn dev
  # or
  npm run dev
  ```

3. **Open in browser:**
  Visit [http://localhost:5173](http://localhost:5173)

## API

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data. Demo API key is used by default.

## Customization

- UI components are based on [shadcn/ui](https://ui.shadcn.com/)
- Easily extend or replace components in `src/components/ui`
- Add new pages in `src/pages`

## Scripts

- `yarn dev` — start development server
- `yarn build` — build for production
- `yarn preview` — preview production build

## License

MIT
