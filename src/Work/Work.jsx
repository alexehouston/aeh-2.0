import "./Work.css";

export default function Work() {
  return (
    <div className="Work animate__animated animate__fadeInUp">
      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <div className="img-text">
              <p className="img-title">Squiz</p>
              <p className="img-description">MERN-Stack Web Application</p>
            </div>
            <img src="/assets/squiz/gameplay.gif" alt="Squiz" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/squiz">repo</a> |{" "}
              <a href="https://squiz.herokuapp.com/">demo</a>
            </div>
          </div>
          <div className="img-wrapper faster">
            <div className="img-text">
              <p className="img-title">Elia Gal</p>
              <p className="img-description">React.JS Web Application</p>
            </div>
            <img src="/assets/eliagal/eg-desktop-home.gif" alt="Elia Gal" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/elia-gal">repo</a> |{" "}
              <a href="https://eliagal.com">demo</a>
            </div>
          </div>
          <div className="img-wrapper slower vertical">
            <div className="img-text">
              <p className="img-title">KP Hair Color</p>
              <p className="img-description">React.JS Web Application</p>
            </div>
            <img
              src="/assets/kphaircolor/kp-desktop-home.png"
              alt="KP Hair Color"
            />
            <div className="img-links">
              <a href="https://github.com/alexehouston/kphaircolor">repo</a> |{" "}
              <a href="https://kphaircolor.netlify.app/">demo</a>
            </div>
          </div>
          <div className="img-wrapper slower slower-down">
            <div className="img-text">
              <p className="img-title">KP x AEH</p>
              <p className="img-description">React.JS Web Application</p>
            </div>
            <img src="/assets/kpxaeh/desktop-home.png" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/kpxaeh">repo</a> |{" "}
              <a href="https://kpxaeh.com/">demo</a>
            </div>
          </div>
          <div className="img-wrapper">
            <div className="img-text">
              <p className="img-title">Daniel Sunghoon Kim</p>
              <p className="img-description">React.JS Web Application</p>
            </div>
            <img src="/assets/danielsunghoonkim/dsk-desktop-home.gif" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/danielsunghoonkim">
                repo
              </a>{" "}
              | <a href="https://danielsunghoonkim.com/">demo</a>
            </div>
          </div>
          <div className="img-wrapper slower">
            <div className="img-text">
              <p className="img-title">Cinéflix</p>
              <p className="img-description">Django Web Application</p>
            </div>
            <img src="/assets/cineflix/home-screenshot.gif" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/cineflix">repo</a> |{" "}
              <a href="https://cineflixapp.herokuapp.com/">demo</a>
            </div>
          </div>
          <div className="img-wrapper faster1">
            <div className="img-text">
              <p className="img-title">Hamstera</p>
              <p className="img-description">Django Web Application</p>
            </div>
            <img src="/assets/hamstera/home.png" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/hamstera">repo</a>
            </div>
          </div>
          <div className="img-wrapper slower slower2">
            <div className="img-text">
              <p className="img-title">Pokébank</p>
              <p className="img-description">Node.JS Web Application</p>
            </div>
            <img src="/assets/pokebank/home.png" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/pokebank">repo</a> |{" "}
              <a href="https://poke-bank.herokuapp.com/">demo</a>
            </div>
          </div>
          <div className="img-wrapper">
            <div className="img-text">
              <p className="img-title">Concentration</p>
              <p className="img-description">JavaScript Game</p>
            </div>
            <img src="/assets/concentration/after-screen.png" alt="" />
            <div className="img-links">
              <a href="https://github.com/alexehouston/concentration">repo</a> |{" "}
              <a href="https://alexehouston.github.io/concentration/">demo</a>
            </div>
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
}
