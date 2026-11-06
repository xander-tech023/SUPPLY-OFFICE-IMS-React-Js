import type { Stat } from "../types";

type StatCardProps = Pick<Stat, "title" | "value" | "variant">;

// Reusable component: rendered once per item in the stats array
function StatCard({ title, value, variant }: StatCardProps) {
  return (
    <div className={`card h-100 border-0 border-start border-4 border-${variant} shadow-sm`}>
      <div className="card-body">
        <div className="text-body-secondary small">{title}</div>
        <div className="fs-1 fw-bold">{value}</div>
      </div>
    </div>
  );
}

export default StatCard;
