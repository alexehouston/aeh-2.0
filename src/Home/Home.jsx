import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import "./Home.css";

export default function Home({ handleMouseEnter }) {
  return (
    <div className="Home p-4">
      <div className="home-inner mb-5 d-flex justify-content-center align-items-center border-bottom border-dark">
        <div className="col-12 col-lg-6">
          <img className="aeh-ai" src="/assets/aeh-ai-2.png" alt="" />
        </div>
        <div className="home-text col-12 col-md-9 col-lg-6 p-0 text-start d-flex flex-column">
          <h1 className="lh-1">
            <span className="fs-4 opacity-50">Alex E. Houston</span>
            <br />
            Software <FontAwesomeIcon icon={faCode} className="fs-1 opacity-50" />
            <br />
            Developer
            <br />
            + Artist
          </h1>
          <p className="w-75 my-4">
            I&apos;m a passionate Web Developer based in Houston, Texas. For me, coding is a canvas for art, and I thrive at
            the intersection of technology and creativity. Explore my portfolio
            and join me on GitHub as we embark on an exciting journey of
            innovation.
          </p>
          <p className="border border-black col-6 col-md-3 col-lg-3 rounded-pill text-center py-2 mb-0">
            <a href="#portfolio">Explore <FontAwesomeIcon icon={faChevronDown} /></a>
          </p>
        </div>
      </div>
      <Portfolio handleMouseEnter={handleMouseEnter} />
      <Resume handleMouseEnter={handleMouseEnter} />
    </div>
  );
}

Home.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
};
