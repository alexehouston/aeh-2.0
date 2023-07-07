import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="Nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">AaaeeHh</Link>
          </div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Hhome
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                Resumee
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/work"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Woork
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Abbouut
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="description"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>
                Sooftware{" "}
                <span className="text-neon">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <br />
                Deveelooper
              </span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexehouston/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/alexehouston/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:alexehouston@gmail.com"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.5s" : "0s",
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
