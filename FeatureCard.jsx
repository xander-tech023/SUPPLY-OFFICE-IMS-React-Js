export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="card feature-card h-100 text-center">
      <div className="card-body p-4">
        <div className="feature-icon mb-3">{icon}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  )
}
