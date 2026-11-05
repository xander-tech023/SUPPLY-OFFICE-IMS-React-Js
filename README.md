# Supply Office IMS – ReactJS Homepage

## Run
```
npm install
npm run dev
```
Build: `npm run build`

## Structure
- `src/App.jsx` – page composition, theme state
- `src/components/` – Navbar, Hero, StatCard, FeatureCard, InventorySection, InventoryRow, ItemModal, Faq, Footer
- `src/data/content.js` – sample data passed down as props
- `src/styles/index.css` – custom styles on top of Bootstrap

## Components & Props
| Component | Props |
|---|---|
| Navbar | brand, links, theme, onToggleTheme |
| Hero | title, subtitle |
| StatCard (reusable) | label, value, icon, tone |
| FeatureCard (reusable) | icon, title, text |
| InventorySection | items |
| InventoryRow (reusable) | item, onView |
| ItemModal | item, onClose |
| Faq | items |

## Interactive Features
1. Navigation toggle (mobile menu) – `useState`
2. Theme toggle (light/dark) – `useState` + `useEffect`
3. Search + category filter – controlled inputs
4. Item details modal – `useState`
5. FAQ accordion – `useState`
