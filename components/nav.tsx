import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link href="/">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/img/logo.png"
            alt="Landing_base"
            className="img-fluid"
          />
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
