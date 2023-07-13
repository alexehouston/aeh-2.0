import "./Work.css";
import transition from "../../transition";

const Work = () => {
  return (
    <div className="Work animate__animated animate__fadeInUp">
      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <img src="/assets/squiz/gameplay.gif" alt="" />
          </div>
          <div className="img-wrapper faster">
              <img src="/assets/eliagal/eg-desktop-home.gif" alt="" />
          </div>
          <div className="img-wrapper slower vertical">
              <img src="/assets/kphaircolor/kp-desktop-home.png" alt="" />
          </div>
          <div className="img-wrapper slower slower-down">
            <img src="/assets/kpxaeh/desktop-home.png" alt="" />
          </div>
          <div className="img-wrapper">
              <img src="/assets/danielsunghoonkim/dsk-desktop-home.gif" alt="" />
          </div>
          <div className="img-wrapper slower">
              <img src="/assets/cineflix/home-screenshot.gif" alt="" />
          </div>
          <div className="img-wrapper faster1">
              <img src="/assets/hamstera/home.png" alt="" />
          </div>
          <div className="img-wrapper slower slower2">
            <img src="/assets/pokebank/home.png" alt="" />
          </div>
          <div className="img-wrapper">
            <img src="/assets/concentration/after-screen.png" alt="" />
          </div>
          {/* <div className="img-wrapper slower">
            <img src="/assets/" alt="" />
          </div>
          <div className="img-wrapper slower last">
            <img src="/assets/" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const TransitionedWork = transition(Work);

export default TransitionedWork;