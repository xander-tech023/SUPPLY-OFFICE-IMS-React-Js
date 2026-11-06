export type SupplyStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface Supply {
  id: number;
  name: string;
  category: string;
  qty: number;
  status: SupplyStatus;
}

export interface Stat {
  id: number;
  title: string;
  value: number;
  variant: "primary" | "warning" | "danger" | "success";
}
