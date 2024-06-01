import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faEnvelope,
  faCode,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Nav.css';

export default function Nav({ handleMouseEnter, theme, setTheme }) {
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="Nav">
      <div className="navbar fixed-top mt-3 px-3">
        <div className="container py-2 px-4 bg-nav border border-aeh rounded-pill">
          <div className="col-6 mx-auto ps-md-2 ps-lg-2 d-flex justify-content-center justify-content-lg-start align-items-center">
            <h4 className="mb-0 py-2">aaeehh</h4>
            {theme === 'dark' ? (
              <FontAwesomeIcon
                className="theme-toggler ms-3 ms-lg-4 fs-6 align-middle"
                icon={faSun}
                onClick={switchTheme}
              />
            ) : (
              <FontAwesomeIcon
                className="theme-toggler ms-3 ms-lg-4 fs-6 align-middle"
                icon={faMoon}
                onClick={switchTheme}
              />
            )}
          </div>
          <div className="col-6 pe-2 d-none d-lg-flex justify-content-end fs-5">
            <a href="#portfolio">
              <FontAwesomeIcon icon={faCode} />
              <span
                className="ps-2"
                data-text="Portfolio"
                onMouseEnter={handleMouseEnter}
              >
                Portfolio
              </span>
            </a>
            <a href="#resume" className="ms-5">
              <FontAwesomeIcon icon={faFolder} />
              <span
                className="ps-2"
                data-text="Resume"
                onMouseEnter={handleMouseEnter}
              >
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar fixed-bottom mb-3 px-3">
        <div className="container p-4 bg-nav border border-aeh rounded-pill fs-4 lh-1">
          <div className="col-6 ps-2">
            <a href="mailto:alexehouston@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  color: 'var(--aeh-text)',
                }}
              />
            </a>
          </div>
          <div className="col-6  pe-2 d-flex justify-content-end">
            <a
              href="https://github.com/alexehouston"
              target="_blank"
              rel="noreferrer"
              className="text-end"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  color: theme === 'dark' ? 'var(--aeh-text)' : 'black',
                }}
              />{' '}
            </a>
            <a
              href="https://www.linkedin.com/in/alexehouston/"
              target="_blank"
              rel="noreferrer"
              className="text-end ms-4"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  color: theme === 'dark' ? 'var(--aeh-text)' : '#0076b3',
                }}
              />{' '}
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
  setTheme: PropTypes.any,
};
