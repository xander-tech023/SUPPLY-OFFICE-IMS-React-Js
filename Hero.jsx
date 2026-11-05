export default function Hero({ title, subtitle }) {
  return (
    <header id="home" className="hero text-center text-lg-start">
      <div className="container py-5">
        <div className="row align-items-center py-lg-4">
          <div className="col-lg-7">
            <span className="badge rounded-pill text-bg-light mb-3">Central Bicol State University of Agriculture</span>
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead opacity-75">{subtitle}</p>
            <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
              <a href="#inventory" className="btn btn-light btn-lg">Browse Inventory</a>
              <a href="#features" className="btn btn-outline-light btn-lg">Learn More</a>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block text-center hero-emoji" aria-hidden="true">
            🗄️
          </div>
        </div>
      </div>
    </header>
  )
}
