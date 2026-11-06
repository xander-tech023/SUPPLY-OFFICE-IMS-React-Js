interface StatCardProps {
  title: string;
  value: number;
  foot: string;
}

function StatCard({ title, value, foot }: StatCardProps) {
  return (
    <article className="rounded-[20px] border border-line bg-surface px-5 py-5 shadow-card sm:px-5 sm:py-5">
      <h2 className="text-sm font-medium text-muted">{title}</h2>
      <p className="mt-2 text-[32px] font-bold leading-none tracking-tight text-ink">{value}</p>
      <p className="mt-2 text-xs text-muted">{foot}</p>
    </article>
  );
}

export default StatCard;
