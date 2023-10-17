import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

export default function Portfolio({ handleMouseEnter }) {
  return (
    <div id="portfolio" className="Portfolio border-bottom border-black pb-5">
      <h4 className="mb-4">
        <FontAwesomeIcon icon={faCode} className="opacity-50" /> Portfolio
      </h4>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-dark bg-white d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/squiz/gameplay.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-mongo rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  MongoDB
                </p>
                <p className="bg-express rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  Express.js
                </p>
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  React.js
                </p>
                <p className="bg-node rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  Node.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Squiz</h5>
              <p className="opacity-50">
                Squiz is a full MERN-stack single-page web application & quiz
                game created with React.js. Squiz tests your knowledge on
                software development and makes learning fun. This application
                was created as my final project during my time at{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                General Assembly.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/squiz"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  Repo
                </a>{" "}
                /{" "}
                <a
                  href="https://squiz.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin top-margin border border-dark bg-white d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/cr8tiveelements/cr8tiveelements.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Cr8tive Elements Hair Studio</h5>
              <p className="opacity-50">
                Here you can view the website of Cr8tive Elements Hair Studio in
                Scottsdale, Arizona. This website was created using React.js and
                provides the salon&apos; clients a place to browse past works
                and book appointments.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/cr8tivehair"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://cr8tiveelements.com"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/eliagal/eg-desktop.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Elia Gal</h5>
              <p className="opacity-50">
                Here you can view the personal website of hair stylist Elia Gal.
                This website was created using React.js and provides Elia&apos;s
                clients a place to browse past works and book appointments.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/elia-gal"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a href="https://eliagal.com" target="_blank" rel="noreferrer">
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/kphaircolor/kphaircolor.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">KP Hair Color</h5>
              <p className="opacity-50">
                Here you can view the personal website of hair colorist Kristen
                Pennington. This website was created using React.js and provides
                Kristen&apos;s clients a place to browse past works and book
                appointments.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/kphaircolor"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://kphaircolor.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/kpxaeh/desktop-home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">KP x AEH</h5>
              <p className="opacity-50">
                Here you can view the React.js application that houses the
                collaboration between hair stylists Alex Houston and Kristen
                Pennington. Clients are able to navigate to the site in order to
                book appointments.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/kpxaeh"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a href="https://kpxaeh.com/" target="_blank" rel="noreferrer">
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img
                src="/assets/danielsunghoonkim/dsk-desktop-home.gif"
                alt=""
              />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Daniel Sunghoon Kim</h5>
              <p className="opacity-50">
                Here you can view the personal website of hair stylist Daniel
                Sung Hoon Kim. This website was created using React.js and
                provides Daniel&apos;s clients a place to browse past works and
                book appointments.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/danielsunghoonkim"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://danielsunghoonkim.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/cineflix/home-screenshot.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  Django
                </p>
                <p className="bg-python rounded-pill text-center py-1 px-2 pb-2 mb-2 ms-1">
                  Python
                </p>
              </div>
              <h5 className="my-4">Cinéflix</h5>
              <p className="opacity-50">
                Cinéflix is a social media-based web application designed for
                bringing movie-lovers together to share their passion & opinions
                on cinema. This application was created during my time at{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                General Assembly.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/cineflix"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://cineflixapp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/hamstera/home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  Django
                </p>
                <p className="bg-python rounded-pill text-center py-1 px-2 pb-2 mb-2 ms-1">
                  Python
                </p>
              </div>
              <h5 className="my-4">Hamstera</h5>
              <p className="opacity-50">
                Hamstera is a Django-based web application designed to collect
                all of the cute hamsters from the Hamtaro animated series. This
                application was created during my time at{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                General Assembly.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/hamstera"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/pokebank/pokebank.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-node rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  Node.js
                </p>
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Pokébank</h5>
              <p className="opacity-50">
                Pokébank is a full-stack Node.js web page application where
                users can log & store their Pokémon-related data. This
                application was created during my time at{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                General Assembly.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/pokebank"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://poke-bank.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-dark bg-white mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-dark">
              <img src="/assets/concentration/concentration.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-js rounded-pill text-center py-1 px-2 pb-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Concentration</h5>
              <p className="opacity-50">
                Concentration is a Javascript-based browser game (with a Sailor
                Moon twist) in which cards are face down until all pairs of
                matching cards have been flipped. This application was created
                during my time at{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                General Assembly.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/concentration"
                  target="_blank"
                  rel="noreferrer"
                  data-text="repo"
                  onMouseEnter={handleMouseEnter}
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://alexehouston.github.io/concentration/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
};
