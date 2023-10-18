import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Nav({ handleMouseEnter }) {
  return (
    <div className="Nav">
      <div className="navbar m-0 px-4 py-1 border-bottom border-dark position-fixed top-0 bg-aeh vw-100">
        <div className="container-fluid p-0">
          <a href="/" className="col-4 col-lg-10">
            <img className="aeh-img" src="/assets/aeh-small.png" alt="" />
          </a>
          <div className="d-flex col-7 col-lg-2 m-0 d-flex justify-content-end semibold">
            <a href="#portfolio" className="text-end">
              <FontAwesomeIcon icon={faFolder} className="pe-1" />
              <span data-text="Portfolio" onMouseEnter={handleMouseEnter}>
                Portfolio
              </span>
            </a>
            <a href="#resume" className="text-end ms-4">
              <FontAwesomeIcon icon={faFile} className="pe-1" />
              <span data-text="Resume" onMouseEnter={handleMouseEnter}>
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar m-0 px-4 py-3 border-top border-dark position-fixed bottom-0 bg-aeh vw-100 semibold">
        <div className="container-fluid p-0">
          <a href="mailto:alexehouston@gmail.com" className="col-6 col-lg-10">
            <span data-text="Get In Touch" onMouseEnter={handleMouseEnter}>Get In Touch</span> <FontAwesomeIcon icon={faEnvelope} className="ms-1" />
          </a>
          <div className="d-flex col-6 col-md-3 col-lg-2 justify-content-end">
            <a
              href="https://github.com/alexehouston"
              target="_blank"
              rel="noreferrer"
              className="text-end"
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
              className="text-end ms-4"
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
