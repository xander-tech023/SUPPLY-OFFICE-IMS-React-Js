interface HeroProps {
  title: string;
  description: string;
  onGetStarted: () => void;
}

function Hero({ title, description, onGetStarted }: HeroProps) {
  return (
    <header id="home" className="hero py-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead mt-3">{description}</p>
            <button className="btn btn-primary btn-lg mt-2" onClick={onGetStarted}>
              Login to request supplies
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
