import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  useEffect(() => {
    let currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) {
      setActiveLink("Home");
    } else if (currentUrl.endsWith("/about")) {
      setActiveLink("About");
    }
  }, [setActiveLink]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "Home" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("Home")}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "About" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("About")}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
