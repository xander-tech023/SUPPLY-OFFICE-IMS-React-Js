interface StatCardProps {
  title: string;
  value: number;
  foot: string;
}

function StatCard({ title, value, foot }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-shadow duration-200 hover:shadow-md sm:p-6">
      <h2 className="text-sm font-medium leading-5 text-muted">{title}</h2>
      <p className="mt-3 text-3xl font-bold leading-none tracking-tight text-ink sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm leading-5 text-muted">{foot}</p>
    </article>
  );
}

export default StatCard;
