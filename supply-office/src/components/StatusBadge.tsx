import type { SupplyStatus } from "../types";

interface StatusBadgeProps {
  status: SupplyStatus;
}

const colors: Record<SupplyStatus, string> = {
  "In Stock": "success",
  "Low Stock": "warning",
  "Out of Stock": "danger",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`badge text-bg-${colors[status]}`}>{status}</span>;
}

export default StatusBadge;
