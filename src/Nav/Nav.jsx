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
        ></div>
      </div>
    </div>
  );
}
