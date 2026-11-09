# UI/UX Documentation — CBSUA Supply Office IMS

## 1. Product overview

The CBSUA Supply Office Inventory Management System (IMS) is a single-page dashboard for monitoring campus supplies and recording basic stock activity. It is designed primarily for supply-office staff who need to review inventory health, identify urgent stock/expiry issues, process requests, and record receipts.

> **Current implementation scope:** The interface is a front-end demonstration. Inventory, requests, receipts, and transactions are held in React state and sample data; they are not persisted to or synchronized with a backend. Items such as suppliers, settings, help, and sign-out are navigation placeholders rather than fully implemented features.

## 2. User goals

- Quickly understand current inventory and pending work.
- Identify items that are low/out of stock or nearing expiry.
- Search and filter the supply catalog.
- Submit a supply request or record stock received.
- Review and approve pending campus requests.
- Trace recent stock movements and their associated offices/staff.

## 3. Information architecture

The product is a single scrolling page, initially focused on **Dashboard**. A fixed left-side workspace navigation is used on desktop and becomes a slide-out menu on smaller screens.

1. **Dashboard** — summary cards, weekly stock movement chart, attention alerts, and recent transactions.
2. **Inventory** — searchable and filterable available-supplies table.
3. **Stock Requests** — request-review dialog with approve actions and a pending-count badge.
4. **Issue Supplies** — opens the new-request dialog.
5. **Receive Stock** — opens the receipt dialog.
6. **Suppliers**, **Settings**, **Help?**, **Sign out** — currently show a “will be available in a future update” notice.

Header actions provide shortcuts to **New request**, **Receive stock**, and the light/dark theme toggle. Dashboard links scroll to inventory or transaction history.

## 4. Page and component specifications

### 4.1 Workspace navigation

- Display the CBSUA seal, campus, Supply Office identity, and IMS descriptor.
- Use a forest-green surface with high-contrast white text and icons.
- Indicate the active section with a translucent light background and stronger text weight.
- Show a count badge beside Stock Requests; keep it synchronized with the pending request count.
- On mobile, open the navigation from a menu button, provide a close button and dismissible backdrop, and close the menu after navigation.

### 4.2 Page header

- Present a breadcrumb-like “Supply Office / Homepage” label, Homepage title, and one-line purpose statement.
- Show the current date and the signed-in staff identity/avatar.
- Keep New request as a secondary outlined action and Receive stock as the primary green action.
- The theme control must expose an accessible label indicating the mode it will switch to.

### 4.3 Dashboard overview

Four summary cards report:

- Catalog items, with in-stock and out-of-stock detail.
- Pending requests.
- Low-stock alerts (items not marked In Stock).
- Items expiring within 45 days.

Use consistent card hierarchy: descriptive label, prominent numeric value, and concise contextual text. Values are computed from the current client-side catalog/request state.

### 4.4 Stock movement

- Show received and issued totals and a seven-day paired bar chart.
- Use a legend and day labels; keep the chart visually distinct from the attention panel.
- Provide a View history action that scrolls to the transaction table.
- Ensure chart values remain understandable without relying on color alone (for example, retain labels/legend and accessible text alternatives).

### 4.5 Needs your attention

- Surface out-of-stock supplies and an item expiring soon.
- Use semantic alert wording and distinguish alert types with both text and visual treatment—not color alone.
- Provide View inventory to scroll to the catalog.

### 4.6 Recent transactions

Use a horizontally scrollable table on narrow screens with columns for reference/date, item, movement, office/supplier, and recipient/staff. Distinguish received and issued movement badges, and provide an explicit empty state if no records exist.

### 4.7 Available supplies

- Provide a labeled search field matching supply name or category.
- Provide status filters: All, In Stock, Low Stock, Out of Stock.
- Display item, category, quantity/unit, and status in a semantic table.
- Show a helpful empty state when search and filter criteria return no rows.
- On small screens, retain access to all columns through horizontal scrolling.

### 4.8 Request, receipt, and review dialogs

**New request / Receive stock**
- Dialog title identifies the operation.
- Include a required supply selector and positive integer quantity field (minimum 1, step 1).
- Offer Cancel and an action-specific submit button.
- The demo updates in-memory state and shows a brief success notice. A receipt also updates the visible stock quantity/status and adds a transaction; a request adds a pending request.

**Stock request review**
- List each request with supply, office, quantity/unit, and submission age.
- Provide an Approve action per request and a Done action.
- If the list is empty, explain that all requests have been reviewed.

Dialogs are centered, constrained in width, use a dimmed backdrop, and may be dismissed by clicking outside or using the close control. The dialog container is marked as a modal dialog and labeled by its heading.

## 5. Key user flows

### Review and approve a request
1. Select Stock Requests from the workspace navigation or the footer review shortcut.
2. Review the request details in the dialog.
3. Select Approve. The request is removed from the pending list and the pending count updates.
4. A status notice confirms the action.

### Find a supply
1. Scroll to Inventory or choose View inventory.
2. Enter a name/category query and/or select a stock-status filter.
3. Review the filtered table or its no-results message.

### Submit a supply request
1. Select New request or Issue Supplies.
2. Select a supply and enter a quantity.
3. Submit the request.
4. A confirmation notice appears and the pending-request count increases.

### Record a receipt
1. Select Receive stock.
2. Choose a supply and enter the received quantity.
3. Record receipt.
4. The on-screen inventory quantity/status and transaction history update, and a confirmation notice appears.

## 6. Visual design system

### Color and theme

The interface uses a restrained institutional palette: forest green for navigation and primary actions, near-white/light gray surfaces, dark blue-gray text, and amber/red status colors. The existing CSS variables define the core surfaces, text, borders, and alert colors. Dark mode replaces the canvas, surface, table, text, border, and alert backgrounds with darker equivalents.

| Role | Light theme reference | Usage |
|---|---|---|
| Canvas | `#f8fafc` | Page background |
| Surface | `#ffffff` | Cards, tables, dialogs, controls |
| Ink | `#172538` | Primary text |
| Muted text | `#64748b` | Supporting labels and metadata |
| Border | `#e4e9ef` | Card, table, and input boundaries |
| Sage light | `#eaf3ed` | Positive/in-stock background |
| Amber | `#ffb91e` | Warning and expiry emphasis |
| Danger | `#ed626c` | Out-of-stock/error emphasis |

Forest-green variants are configured in the Tailwind theme and used for navigation/primary controls. Keep status meaning consistent across cards, badges, charts, and alerts.

### Typography and layout

- Base font stack: Inter, Segoe UI, Arial, sans-serif.
- Use clear heading levels, compact supporting text, and strong contrast between titles and metadata.
- Desktop content is aligned beside a fixed 292px sidebar and constrained to a wide central container.
- Use rounded cards, subtle borders/shadows, and consistent spacing to group related information.
- Dashboard summary cards use a two-column layout at small widths and expand to four columns on larger screens; the movement/attention panels become a two-column composition on wide screens.

## 7. Responsive behavior

- Support a minimum viewport width of 320px.
- At desktop widths, keep the sidebar fixed and the main content offset to its right.
- At smaller widths, hide the sidebar off-canvas and expose it with the menu control and backdrop.
- Allow header controls to wrap and keep the user identity compact on narrow screens.
- Tables remain usable through horizontal scrolling instead of forcing unreadably narrow columns.
- Keep dialog content within the viewport, with vertical scrolling available when necessary.

## 8. Accessibility and interaction requirements

The current UI already uses semantic headings, navigation labels, form labels, table markup, dialog roles/attributes, button accessible names for some icon controls, and a live `role="status"` notice. Preserve and extend these patterns:

- Ensure every control is keyboard operable and has a visible focus indicator.
- Move focus into an opened dialog, contain focus while it is open, close on Escape, and restore focus to the trigger when closed.
- Mark the mobile menu state with `aria-expanded` and associate the control with the menu.
- Give search, filters, quantity fields, and all icon-only controls accessible names.
- Do not use color as the only way to convey stock status, movement type, or alert severity.
- Announce dynamic success/error messages politely and ensure they remain visible long enough to read.
- Use sufficient text/control contrast in both themes and respect reduced-motion preferences for smooth scrolling/transitions.
- Keep table headers associated with their columns and provide clear labels for chart values.

These are documentation recommendations where not already implemented; they should not be read as confirmation that every behavior is currently present.

## 9. Content and feedback conventions

- Use direct, action-oriented labels: “New request,” “Receive stock,” “Record receipt,” and “Approve.”
- Confirm successful state changes with a concise notice that names the action/item/quantity where useful.
- Use explicit empty states rather than blank areas.
- Preserve consistent naming for stock statuses: In Stock, Low Stock, Out of Stock.
- Make clear that current data is a demo and changes are not persisted.

## 10. Known scope and future UX considerations

- Connect the UI to authenticated, persistent inventory/request/transaction services before using it as an operational system.
- Implement the placeholder Suppliers, Settings, Help, and Sign out destinations or remove/disable them until available.
- Clarify permission/role behavior for submitting, receiving, and approving requests.
- Add validation and recovery feedback for unavailable supplies, invalid quantities, and failed saves once a backend exists.
- Verify persistence and data integrity for receiving, issuance, approvals, and transaction references.
- Consider adding inventory sorting, pagination for larger catalogs, and filters for category/expiry if needed.

## 11. Source map

- `supply-office/src/App.tsx` — page composition and state/interaction orchestration.
- `supply-office/src/components/Navbar.tsx` — navigation, header actions, mobile menu, theme control.
- `supply-office/src/components/Hero.tsx` — dashboard metrics, movement visualization, alerts, transaction history.
- `supply-office/src/components/SupplyList.tsx` — catalog search, status filters, and inventory table.
- `supply-office/src/components/LoginModal.tsx` — request/receipt forms and request review dialog (component name notwithstanding, this is not an authentication form).
- `supply-office/src/components/StatCard.tsx` — reusable dashboard metric card.
- `supply-office/src/components/Footer.tsx` — footer and request-review shortcut.
- `supply-office/src/data/supplies.ts` — sample supply and transaction data.
- `supply-office/src/App.css` and `supply-office/tailwind.config.js` — global styles, tokens, and utility theme.

## 12. Running the application

From the application directory:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```
