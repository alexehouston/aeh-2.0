import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className="Portfolio border-bottom border-black pb-5">
      <h4 className="mb-4">
        <FontAwesomeIcon icon={faCode} className="opacity-50" /> Portfolio
      </h4>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white me-2 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/squiz/gameplay.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-mongo rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  MongoDB
                </p>
                <p className="bg-express rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  Express.js
                </p>
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  React.js
                </p>
                <p className="bg-node rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  Node.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Squiz</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/squiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>{" "}
                /{" "}
                <a
                  href="https://squiz.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white ms-2 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/cr8tiveelements/cr8tiveelements.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Cr8tive Elements Hair Studio</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/cr8tivehair"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a href="https://cr8tiveelements.com" target="_blank" rel="noreferrer">
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white me-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/eliagal/eg-desktop.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Elia Gal</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/elia-gal"
                  target="_blank"
                  rel="noreferrer"
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
          <div className="portfolio-item border border-dark bg-white ms-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/kphaircolor/kphaircolor.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">KP Hair Color</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/kphaircolor"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://kphaircolor.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white me-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/kpxaeh/desktop-home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">KP x AEH</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/kpxaeh"
                  target="_blank"
                  rel="noreferrer"
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
          <div className="portfolio-item border border-dark bg-white ms-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img
                src="/assets/danielsunghoonkim/dsk-desktop-home.gif"
                alt=""
              />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-react rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  React.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Daniel Sunghoon Kim</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/danielsunghoonkim"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://danielsunghoonkim.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white me-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/cineflix/home-screenshot.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  Django
                </p>
                <p className="bg-python rounded-pill text-center py-2 pb-1 px-2 mb-2 ms-1">
                  Python
                </p>
              </div>
              <h5 className="my-4">Cinéflix</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/cineflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://cineflixapp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white ms-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/hamstera/home.png" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-django rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  Django
                </p>
                <p className="bg-python rounded-pill text-center py-2 pb-1 px-2 mb-2 ms-1">
                  Python
                </p>
              </div>
              <h5 className="my-4">Hamstera</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/hamstera"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white me-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/pokebank/pokebank.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-node rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  Node.js
                </p>
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 ms-1 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Pokébank</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/pokebank"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://poke-bank.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="portfolio-item border border-dark bg-white ms-2 mt-3 d-flex align-items-center">
            <div className="portfolio-img col-6 border-end border-dark">
              <img src="/assets/concentration/concentration.gif" alt="" />
            </div>
            <div className="item-inner col-12 col-lg-6 px-4">
              <div className="technology d-flex flex-wrap">
                <p className="bg-js rounded-pill text-center py-2 pb-1 px-2 mb-2">
                  JavaScript
                </p>
              </div>
              <h5 className="my-4">Concentration</h5>
              <p className="opacity-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptatem, nihil laudantium illum dolorum obcaecati,
                voluptatibus veniam nesciunt quas minima facilis. Unde porro
                libero repudiandae.
              </p>
              <hr />
              <div>
                <a
                  href="https://github.com/alexehouston/concentration"
                  target="_blank"
                  rel="noreferrer"
                >
                  repo
                </a>{" "}
                /{" "}
                <a
                  href="https://alexehouston.github.io/concentration/"
                  target="_blank"
                  rel="noreferrer"
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
