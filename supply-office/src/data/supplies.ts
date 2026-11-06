import type { Supply, Stat } from "../types";

export const supplies: Supply[] = [
  { id: 1, name: "Bond Paper (Short)", category: "Paper", qty: 120, status: "In Stock" },
  { id: 2, name: "Bond Paper (Long)", category: "Paper", qty: 85, status: "In Stock" },
  { id: 3, name: "Ballpen (Black)", category: "Writing", qty: 8, status: "Low Stock" },
  { id: 4, name: "Printer Ink (Black)", category: "Printing", qty: 5, status: "Low Stock" },
  { id: 5, name: "Folder (Long)", category: "Filing", qty: 60, status: "In Stock" },
  { id: 6, name: "Stapler Wire", category: "Fasteners", qty: 0, status: "Out of Stock" },
  { id: 7, name: "Alcohol (500ml)", category: "Cleaning", qty: 0, status: "Out of Stock" },
  { id: 8, name: "Marker (Permanent)", category: "Writing", qty: 30, status: "In Stock" },
];

export const stats: Stat[] = [
  { id: 1, title: "Total Items", value: supplies.length, variant: "primary" },
  {
    id: 2,
    title: "Low Stock",
    value: supplies.filter((s) => s.status === "Low Stock").length,
    variant: "warning",
  },
  {
    id: 3,
    title: "Out of Stock",
    value: supplies.filter((s) => s.status === "Out of Stock").length,
    variant: "danger",
  },
  { id: 4, title: "Pending Requests", value: 4, variant: "success" },
];
