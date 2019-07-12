import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/">
          <a href="#">
            <img
              src="/static/img/logo.png"
              alt="Landing_base"
              className="img-fluid logo"
            />
          </a>
        </Link>
        <br />
        <Link href="/politica-de-privacidade">
          <a href="#">Política de privacidade</a>
        </Link>
      </div>
    </footer>
  );
}
