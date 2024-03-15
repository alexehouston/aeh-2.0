import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

export default function Portfolio({ handleMouseEnter, theme }) {
  return (
    <div id="portfolio" className="Portfolio border-bottom border-aeh pb-5">
      <h4 className="mb-4">
        <FontAwesomeIcon icon={faCode} /> Portfolio
      </h4>
      <div className="d-flex flex-wrap">
        <div className="portolio-item col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-aeh d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/squiz/gameplay.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-mongo btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  MongoDB
                </p>
                <p className="bg-express btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Express.js
                </p>
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-node btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Node.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Squiz</h5>
              <p className="description opacity-75 aeh-txt">
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
                  className="semibold"
                >
                  Repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://squiz.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  Demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin top-margin border border-aeh d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/cr8tiveelements/cr8tiveelements.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Cr8tive Elements Hair Studio</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://cr8tiveelements.com"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/eliagal/eg-desktop.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Elia Gal</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://eliagal.com"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/kphaircolor/kphaircolor.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">KP Hair Color</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://kphaircolor.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/kpxaeh/desktop-home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">KP x AEH</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://kpxaeh.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img
                src="/assets/danielsunghoonkim/dsk-desktop-home.gif"
                alt=""
              />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  React.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Daniel Sunghoon Kim</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://danielsunghoonkim.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/cineflix/home-screenshot.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Django
                </p>
                <p className="bg-python btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Python
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Cinéflix</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://cineflixapp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/hamstera/home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Django
                </p>
                <p className="bg-python btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Python
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Hamstera</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item right-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/pokebank/pokebank.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-node btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  Node.js
                </p>
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Pokébank</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://poke-bank.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item left-margin border border-aeh mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-aeh">
              <img src="/assets/concentration/concentration.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-md-6 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-js btn-txt rounded-pill semibold text-center py-2 px-2 me-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="mt-5 mb-4 accent-txt">Concentration</h5>
              <p className="description opacity-75">
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
                  className="semibold"
                >
                  repo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />{" "}
                /{" "}
                <a
                  href="https://alexehouston.github.io/concentration/"
                  target="_blank"
                  rel="noreferrer"
                  data-text="demo"
                  onMouseEnter={handleMouseEnter}
                  className="semibold"
                >
                  demo
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ps-2 small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any
};
