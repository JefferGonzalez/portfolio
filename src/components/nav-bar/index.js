import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [t] = useTranslation("global");

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/"); //for class name active
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          target="_blank"
          href="https://github.com/JefferGonzalez/"
          rel="noopener noreferrer"
        >
          {t("header.hi")}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-bar"
          aria-controls="nav-bar"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="nav-bar"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "" ? "nav-link active" : "nav-link"
                }
                to="/"
                onClick={handleNavCollapse}
              >
                {t("header.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/projects"
                onClick={handleNavCollapse}
              >
                {t("header.projects")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "skills" ? "nav-link active" : "nav-link"
                }
                to="/skills"
                onClick={handleNavCollapse}
              >
                {t("header.skills")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "experience"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/experience"
                onClick={handleNavCollapse}
              >
                {t("header.experience")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "education"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/education"
                onClick={handleNavCollapse}
              >
                {t("header.education")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  splitLocation[1] === "contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/contact"
                onClick={handleNavCollapse}
              >
                {t("header.contact")}
              </Link>
            </li>
          </ul>
          <span className="navbar-text">{t("header.welcome")}</span>
        </div>
      </div>
    </nav>
  );
}
