import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Nav({ handleMouseEnter }) {
  return (
    <div className="Nav">
      <div className="navbar m-0 px-4 py-2 border-bottom border-dark position-fixed top-0 bg-aeh">
        <div className="container-fluid p-0">
          <Link to="/" className="col-10">
            <img className="aeh-img" src="/assets/aeh.png" alt="" />
          </Link>
          <div className="d-flex col-lg-2 justify-content-between m-0">
            <a href="#portfolio"
              data-text="Portfolio"
              onMouseEnter={handleMouseEnter}
              className="col-4 text-end"
            >
              Portfolio
            </a>
            <Link
              to="/resume"
              data-text="Resume"
              onMouseEnter={handleMouseEnter}
              className="col-4 text-end"
            >
              Resume
            </Link>
            <Link
              to="/about"
              className="col-4 text-end"
              data-text="About"
              onMouseEnter={handleMouseEnter}
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar m-0 px-4 py-2 border-top border-dark position-fixed bottom-0 bg-aeh container-fluid">
        <div className="container-fluid p-0 py-1">
          <a href="mailto:alexehouston@gmail.com" className="col-lg-10">
            Get In Touch <FontAwesomeIcon icon={faEnvelope} className="ms-1" />
          </a>
          <div className="d-flex col-lg-1 justify-content-between m-0">
            <a
              href="https://github.com/alexehouston"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="text-black" icon={faGithub} />{" "}
              <span data-text="GitHub" onMouseEnter={handleMouseEnter}>
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/alexehouston/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedin" />{" "}
              <span data-text="LinkedIn" onMouseEnter={handleMouseEnter}>
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
};
