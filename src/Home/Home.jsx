import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import "./Home.css";

export default function Home({ handleMouseEnter, theme }) {
  return (
    <section className="Home container p-4">
      <div className="row mx-auto my-5 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center border-bottom border-aeh">
        <div className="col-12 col-lg-6">
          <img className="w-100" src="/assets/aeh-ai.png" alt="" />
        </div>
        <div className="home-text col-12 col-md-9 col-lg-6 ps-0 text-center text-lg-start d-flex flex-column">
          <span className="lh-1 alex opacity-75">Alex E. Houston</span>
          <h1 className="lh-1 my-3">
            <span className="d-inline">Sooftware</span>
            <FontAwesomeIcon icon={faCode} className="fa-code fs-1 pb-2" />
            <br />
            Develooper
          </h1>
          <p className="home-bio mx-auto ms-lg-0 px-4 ps-lg-0 pe-lg-5">
            I'm a passionate Web Developer based in Houston, Texas. For me,
            coding is a canvas for art, and I thrive at the intersection of
            technology and creativity.
          </p>
          <p className="col-7 col-md-6 col-lg-5 mx-auto ms-lg-0 fs-5 bg-box shadow rounded-pill text-center stretch py-3 lh-1 mb-0 mt-2">
            <a href="#portfolio">
              Exploore <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </p>
        </div>
      </div>
      <Portfolio handleMouseEnter={handleMouseEnter} theme={theme} />
      <Resume handleMouseEnter={handleMouseEnter} theme={theme} />
    </section>
  );
}

Home.propTypes = {
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any
};
