interface FooterProps {
  office: string;
  school: string;
}

function Footer({ office, school }: FooterProps) {
  return (
    <footer id="about" className="border-top py-4 bg-body-tertiary">
      <div className="container text-center text-body-secondary">
        <div className="fw-semibold">{office}</div>
        <div>{school}</div>
        <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
