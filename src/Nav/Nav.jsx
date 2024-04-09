import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faEnvelope,
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

export default function Nav({ handleMouseEnter, theme, setTheme }) {

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="Nav">
      <div className="navbar fixed-top m-0 px-4 py-2 border-bottom border-aeh bg-aeh">
        <div className="container-fluid p-0">
          <div className="col-4 col-lg-10 d-flex align-items-center">
            {theme === 'dark' ? <img className="aeh-img" src="/assets/aeh-small-dark.png" alt="" /> : <img className="aeh-img" src="/assets/aeh-small.png" alt="" />}
            {theme === 'dark' ? <FontAwesomeIcon className="theme-toggler ms-3 ms-lg-4 fs-6 align-middle" icon={faSun} onClick={switchTheme} /> : <FontAwesomeIcon className="theme-toggler ms-3 ms-lg-4 fs-6 align-middle" icon={faMoon} onClick={switchTheme} /> }
          </div>
          <div className="col-7 col-lg-2 m-0 d-flex justify-content-end semibold fs-6 lh-1">
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
      <div className="navbar fixed-bottom m-0 px-4 py-3 border-top border-aeh bg-aeh vw-100 semibold">
        <div className="container-fluid p-0">
          <a href="mailto:alexehouston@gmail.com" className="col-6 col-lg-10">
            <span data-text="Get In Touch" onMouseEnter={handleMouseEnter}>Get In Touch</span> <FontAwesomeIcon icon={faEnvelope} className="ms-1" />
          </a>
          <div className="col-6 col-md-3 col-lg-2 d-flex justify-content-end fs-6 lh-1">
            <a
              href="https://github.com/alexehouston"
              target="_blank"
              rel="noreferrer"
              className="text-end"
            >
              <FontAwesomeIcon icon={faGithub} style={{color: theme === 'dark' ? 'var(--aeh-accent)' : 'black'}} />{" "}
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
              <FontAwesomeIcon icon={faLinkedin} style={{color: theme === 'dark' ? 'var(--aeh-accent)' : '#0076b3'}} />{" "}
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
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any,
  setTheme: PropTypes.any
};
