import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faFile,
  faFileCode,
  faBriefcase,
  faSchool,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import data from '../json/aeh.json';
import './Resume.css';

export default function Resume({ handleMouseEnter, theme }) {
  const { technologies, resume, education } = data;
  const techArray = Object.values(technologies);

  return (
    <div id="resume" className="Resume mt-4 mb-5">
      <div className="row">
        <div className="col-7 px-0">
          <h3>
            <FontAwesomeIcon icon={faCode} className="fs-4" /> Ressume
          </h3>
        </div>
        <div className="col-5">
          <h6 className="text-end">
            <a
              href="https://www.canva.com/design/DAFvlHNDnqk/5_XBPIUahiJ6q0zpApJrAg/view?utm_content=DAFvlHNDnqk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              rel="noreferrer"
              className="text-uppercase"
            >
              <FontAwesomeIcon icon={faFile} />{' '}
              <span
                className="bb small"
                data-text="View PDF"
                onMouseEnter={handleMouseEnter}
              >
                View PDF
              </span>
            </a>
          </h6>
        </div>
      </div>
      <div className="row bg-box rounded shadow m-0 p-3 mt-4">
        <div className="d-flex flex-wrap justify-content-between fs-2">
          {techArray.map((tech) => (
            <React.Fragment key={tech.id}>
              <Tooltip id={tech.id} />
              <i
                className={`devicon-${tech.icon}-${
                  tech.icon === 'express' ? 'original' : 'plain'
                } colored`}
                data-tooltip-id={tech.id}
                data-tooltip-content={tech.name}
              ></i>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="row">
        <h6 className="stretch mt-5">
          <FontAwesomeIcon icon={faBriefcase} /> Experieence
        </h6>
      </div>
      <div className="row mt-1 g-3">
        {resume.map((resume, index) => (
          <div key={index} className="col-12 col-lg-6 d-flex">
            <div
              className={`portfolio-item shadow rounded ${
                index % 2 === 0 ? 'right-margin' : 'left-margin'
              } ${index > 1 ? 'top-margin' : ''} flex-grow-1`}
            >
              <div className="d-flex justify-content-between align-items-center border-bottom border-aeh p-3 pb-4">
                <div className="col-9 col-lg-8 d-flex align-items-center">
                  <img
                    style={{
                      backgroundColor:
                        theme === 'dark' ? 'white' : 'transparent',
                      borderRadius: theme === 'dark' ? '20%' : '0%',
                    }}
                    className="resume-logo me-3"
                    src={resume.logo}
                    alt={resume.company}
                  />
                  <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                    <span className="stretch">{resume.title}</span>
                    <br />
                    <a
                      href={resume.link}
                      target="_blank"
                      rel="noreferrer"
                      className="small semibold pt-1"
                    >
                      <span
                        className="opacity-50"
                        data-text={resume.company}
                        onMouseEnter={handleMouseEnter}
                      >
                        {resume.company}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ps-2 small"
                      />
                    </a>
                  </h6>
                </div>
                <h6 className="dates accent-txt semibold col-3 col-lg-4 text-end m-0 pe-2">
                  {resume.timeframe}
                </h6>
              </div>
              <ul className="m-0 p-4 mt-0 mt-lg-2 mb-2">
                {resume.description.map((desc, i) => (
                  <React.Fragment key={i}>
                    <li>{desc}</li>
                    {i < resume.description.length - 1 && <hr />}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <h6 className="stretch mt-5">
          <FontAwesomeIcon icon={faSchool} /> Eduucatioon
        </h6>
      </div>
      <div className="row mt-1 g-3 pb-5 d-flex flex-wrap">
        {education.map((education, index) => (
          <div key={index} className="col-12 col-lg-6 d-flex">
            <div
              className={`portfolio-item shadow rounded ${
                index % 2 === 0 ? 'right-margin' : 'left-margin'
              } ${index > 1 ? 'top-margin' : ''} flex-grow-1`}
            >
              <div className="d-flex justify-content-between align-items-center border-bottom border-aeh p-4">
                <div className="col-9 d-flex align-items-center">
                  <img
                    style={{
                      backgroundColor:
                        theme === 'dark' ? 'white' : 'transparent',
                      borderRadius: theme === 'dark' ? '20%' : '0%',
                    }}
                    className="resume-logo me-3"
                    src={education.logo}
                    alt={education.school}
                  />
                  <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                    <span className="stretch">{education.achievement}</span>
                    <br />
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noreferrer"
                      className="small semibold pt-1"
                    >
                      <span
                        className="opacity-50"
                        data-text={education.school}
                        onMouseEnter={handleMouseEnter}
                      >
                        {education.school}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ps-2 small"
                      />
                    </a>
                  </h6>
                </div>
                <h6 className="dates accent-txt semibold col-3 text-end m-0 pe-2">
                  {education.timeframe}
                </h6>
              </div>
              <ul className="m-0 p-4 mt-0 mt-lg-2">
                {education.description.map((desc, i) => (
                  <React.Fragment key={i}>
                    <li>{desc}</li>
                    {i < education.description.length - 1 && <hr />}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Resume.propTypes = {
  handleMouseEnter: PropTypes.any,
  theme: PropTypes.any,
};
