import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="Nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Aleex Houustoon</div>
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
              <a
                href="#"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Hhome
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                Resumee
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                Woork
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Abbouut
              </a>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>Houston, TX</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.5s" : "0s",
                    }}
                  >
                    Email
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
