// Reusable card: all content arrives through props
export default function StatCard({ label, value, icon, tone = 'primary' }) {
  return (
    <div className={`card stat-card h-100 border-start border-4 border-${tone}`}>
      <div className="card-body d-flex align-items-center gap-3">
        <div className="stat-icon">{icon}</div>
        <div>
          <div className="fs-3 fw-bold lh-1">{value}</div>
          <div className="text-secondary small">{label}</div>
        </div>
      </div>
    </div>
  )
}
