import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import "./Home.css";

export default function Home({ handleMouseEnter, theme }) {
  return (
    <div className="Home p-4">
      <div className="home-inner mb-5 d-flex justify-content-center align-items-center border-bottom border-aeh">
        <div className="col-12 col-lg-6">
          {theme === 'dark' ? <img className="aeh-ai" src="/assets/aeh-ai-2-dark.png" alt="" /> : <img className="aeh-ai" src="/assets/aeh-ai-2.png" alt="" />}
        </div>
        <div className="home-text col-12 col-md-9 col-lg-6 p-0 text-start d-flex flex-column">
          <span className="lh-1 alex opacity-50 ps-2">Alex E. Houston</span>
          <h1 className="lh-1">
            <span className="d-inline">Software</span>
            <FontAwesomeIcon icon={faCode} className="fa-code fs-1 pb-2" />
            <br />
            Developer
          </h1>
          <p className="intro-text w-75 my-4 pe-lg-5 ps-1">
            I&apos;m a passionate Web Developer based in Houston, Texas. For me,
            coding is a canvas for art, and I thrive at the intersection of
            technology and creativity. Explore my portfolio and join me on
            GitHub as we embark on an exciting journey of innovation.
          </p>
          <p className={`col-6 col-md-3 col-lg-3 rounded-pill text-center py-2 mb-0 ${theme === 'dark' ? 'explore-btn-dark' : 'explore-btn'}`}>
            <a href="#portfolio">
              Explore <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </p>
        </div>
      </div>
      <Portfolio handleMouseEnter={handleMouseEnter} theme={theme} />
      <Resume handleMouseEnter={handleMouseEnter} theme={theme} />
    </div>
  );
}

Home.propTypes = {
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any
};
