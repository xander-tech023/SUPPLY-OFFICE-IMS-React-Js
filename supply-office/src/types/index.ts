export type SupplyStatus = "In Stock" | "Low Stock" | "Out of Stock";
export type DialogMode = "request" | "receive" | "review";

export interface SupplyRequest {
  id: number;
  item: string;
  office: string;
  quantity: number;
  unit: string;
  daysAgo: number;
}

export interface Supply {
  id: number;
  name: string;
  category: string;
  qty: number;
  unit: string;
  status: SupplyStatus;
  expiresInDays?: number;
}

export interface StockMovementEntry {
  day: string;
  received: number;
  issued: number;
}

export interface Transaction {
  reference: string;
  date: string;
  item: string;
  movement: string;
  kind: "received" | "issued";
  office: string;
  staff: string;
}
