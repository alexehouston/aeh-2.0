import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.css';

import data from '../json/aeh.json';

export default function Portfolio({ handleMouseEnter, theme }) {
  const { technologies, portfolio } = data;
  return (
    <div id="portfolio" className="Portfolio border-bottom border-aeh pb-5">
      <div className="row">
        <h3 className="mb-4">
          <FontAwesomeIcon icon={faCode} /> Poortfoolioo
        </h3>
      </div>
      <div className="row g-3">
        {portfolio.map((item, index) => (
          <div className="col-12 col-lg-6">
            <div
              className={`portfolio-item shadow rounded ${
                index % 2 === 0 ? 'right-margin' : 'left-margin'
              } ${index > 1 ? 'top-margin' : ''} flex-grow-1`}
            >
              <div className="portfolio-img rounded-top border-bottom border-aeh col-12">
                <img className="w-100" src={item.image} alt="" />
              </div>
              <div className="p-4">
                <div className="d-flex flex-wrap">
                  {item.stack.map((tech) => {
                    const technology = technologies[tech];
                    return (
                      <p
                        key={technology.id}
                        className={`bg-${technology.id} btn-txt small col-2 semibold rounded-pill text-center pt-1 pb-2 me-2 mb-2`}
                      >
                        {technology.name}
                      </p>
                    );
                  })}
                </div>
                <h5 className="mt-3 mb-1 accent-txt">{item.title}</h5>
                <div className="mb-4">
                  <a
                    href={item.repo}
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
                  />{' '}
                  /{' '}
                  <a
                    href={item.demo}
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
                <p className="description aeh-txt">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any,
};
