export default function Footer({ name }) {
  return (
    <footer className="py-4 text-center app-footer">
      <div className="container small">
        © {new Date().getFullYear()} {name} · College of Information Technology · CBSUA Sipocot
      </div>
    </footer>
  )
}
