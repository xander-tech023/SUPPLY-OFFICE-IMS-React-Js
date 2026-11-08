# CBSUA Supply Office Homepage

This project is a **single-page homepage**. It opens on the **Dashboard** section and keeps the CBSUA green palette and sample inventory. Inventory search, requests, and receiving actions remain within the homepage; there are no separate website pages. It is built with React, TypeScript, Vite, and Tailwind CSS.

## Project structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatCard.tsx
│   ├── SupplyList.tsx
│   ├── LoginModal.tsx
│   └── Footer.tsx
├── data/
│   └── supplies.ts
├── types/
│   └── index.ts
├── assets/
│   └── logo.png
├── App.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`Navbar` contains the responsive campus navigation, page heading, theme control, and request/receipt actions. `Hero` is the dashboard homepage: it composes reusable `StatCard` components, stock movement, alerts, and recent transactions. `SupplyList` provides search and stock-status filters. `LoginModal` handles request, stock receipt, and request review actions. `Footer` displays the pending-request reminder.

The mobile menu, theme toggle, catalog search/filters, request submission, stock receipt, and request approval use React state. Data is sample client-side data and is not connected to a backend.
