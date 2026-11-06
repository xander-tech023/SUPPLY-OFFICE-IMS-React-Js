import type { Supply, StockMovementEntry, Transaction } from "../types";

export const supplies: Supply[] = [
  { id: 1, name: "Bond paper, A4", category: "Paper", qty: 42, unit: "reams", status: "In Stock" },
  { id: 2, name: "Toner cartridge", category: "Printing", qty: 0, unit: "cartridges", status: "Out of Stock" },
  { id: 3, name: "Ethyl alcohol, 500 mL", category: "Cleaning", qty: 36, unit: "bottles", status: "In Stock", expiresInDays: 26 },
  { id: 4, name: "Whiteboard marker", category: "Writing", qty: 0, unit: "pieces", status: "Out of Stock" },
  { id: 5, name: "Ballpoint pen, black", category: "Writing", qty: 120, unit: "pieces", status: "In Stock" },
  { id: 6, name: "Document folder", category: "Filing", qty: 48, unit: "pieces", status: "In Stock" },
];

export const transactions: Transaction[] = [
  {
    reference: "ISS-2026-001",
    date: "Nov 6 · 10:30",
    item: "Toner cartridge",
    movement: "Issued -1",
    kind: "issued",
    office: "Registrar's Office",
    staff: "Renjene D.S. Rivera",
  },
];

export const weeklyMovement: StockMovementEntry[] = [
  { day: "Oct 31", received: 0, issued: 0 },
  { day: "Nov 1", received: 0, issued: 0 },
  { day: "Nov 2", received: 0, issued: 0 },
  { day: "Nov 3", received: 0, issued: 0 },
  { day: "Nov 4", received: 0, issued: 0 },
  { day: "Nov 5", received: 0, issued: 0 },
  { day: "Nov 6", received: 0, issued: 1 },
];
