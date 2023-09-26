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
      <div className="navbar m-0 ps-4 pe-5 py-1 border-bottom border-dark position-fixed top-0 bg-aeh vw-100">
        <div className="container-fluid p-0">
          <a href="/" className="col-4 col-lg-10">
            <img className="aeh-img" src="/assets/aeh-small.png" alt="" />
          </a>
          <div className="d-flex col-7 col-lg-2 m-0 d-flex justify-content-end">
            <a href="#portfolio" className="col-4 text-end">
              <span data-text="Portfolio" onMouseEnter={handleMouseEnter}>
                Portfolio
              </span>
              <FontAwesomeIcon icon={faFolder} className="ps-1" />
            </a>
            <a href="#resume" className="col-4 text-end">
              <span data-text="Resume" onMouseEnter={handleMouseEnter}>
                Resume
              </span>
              <FontAwesomeIcon icon={faFile} className="ps-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar m-0 px-4 py-1 border-top border-dark position-fixed bottom-0 bg-aeh vw-100">
        <div className="container-fluid p-0">
          <a href="mailto:alexehouston@gmail.com" className="col-6 col-lg-10">
            Get In Touch <FontAwesomeIcon icon={faEnvelope} className="ms-1" />
          </a>
          <div className="d-flex col-6 col-lg-2 justify-content-between m-0">
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
      {/* <div className="navbar m-0 px-4 py-2 border-top border-dark position-fixed bottom-0 bg-aeh container-fluid">
        <div className="p-0 py-1">
          <a href="mailto:alexehouston@gmail.com" className="col-4 col-lg-10">
            Get In Touch <FontAwesomeIcon icon={faEnvelope} className="ms-1" />
          </a>
          <div className="d-flex col-8 col-lg-1 justify-content-between m-0">
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
      </div> */}
    </div>
  );
}

Nav.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
};
