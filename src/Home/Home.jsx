// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../Portfolio/Portfolio";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home p-4">
      <div className="mb-5 d-flex justify-content-center align-items-center border-bottom border-dark">
        <div className="col-6">
          <img className="aeh-ai w-100" src="/assets/aeh-ai-2.png" alt="" />
        </div>
        <div className="col-6 ms-5 p-0 text-start d-flex flex-column align-items-start">
          <h1 className="lh-1">
            Software <FontAwesomeIcon icon={faCode} className="fs-1 opacity-50" />
            <br />
            Developer
          </h1>
          <p className="w-75">
            I&apos;m a passionate Web Developer based in Houston, Texas. For me, coding is a canvas for art, and I thrive at
            the intersection of technology and creativity. Explore my portfolio
            and join me on GitHub as we embark on an exciting journey of
            innovation.
          </p>
          <p className="border border-black col-3 rounded-pill text-center pb-1 pt-2 mb-0">
            Scroll Down <FontAwesomeIcon icon={faChevronDown} />
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  );
}

// Home.propTypes = {
//   handleMouseEnter: PropTypes.func.isRequired,
// };
