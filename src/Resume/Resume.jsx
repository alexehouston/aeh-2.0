import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFile,
  faFileCode,
  faBriefcase,
  faSchool,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

export default function Resume({ handleMouseEnter }) {
  return (
    <div id="resume" className="Resume mt-4 mb-5">
      <div className="row">
        <h4 className="col-6"><FontAwesomeIcon icon={faCode} /> Resume</h4>
        <h6 className="col-6 text-end">
          <a
            href="https://www.canva.com/design/DAFvlHNDnqk/5_XBPIUahiJ6q0zpApJrAg/view?utm_content=DAFvlHNDnqk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer"
            className="text-uppercase"
          >
            <FontAwesomeIcon icon={faFile} />{" "}
            <span data-text="View PDF" onMouseEnter={handleMouseEnter}>
              View PDF
            </span>
          </a>
        </h6>
      </div>
      <div className="row">
        <h6 className="mt-5">
          <FontAwesomeIcon icon={faFileCode} /> Technical Skills
        </h6>
      </div>
      <div className="row bg-white border border-black m-0 p-3 mt-2">
        <div className="d-flex flex-wrap justify-content-between fs-2">
          <Tooltip id="html" />
          <i
            className="devicon-html5-plain colored"
            data-tooltip-id="html"
            data-tooltip-content="HTML5"
          ></i>
          <Tooltip id="css" />
          <i
            className="devicon-css3-plain colored"
            data-tooltip-id="css"
            data-tooltip-content="CSS3"
          ></i>
          <Tooltip id="js" />
          <i
            className="devicon-javascript-plain colored"
            data-tooltip-id="js"
            data-tooltip-content="JavaScript"
          ></i>
          <Tooltip id="java" />
          <i
            className="devicon-java-plain colored"
            data-tooltip-id="java"
            data-tooltip-content="Java"
          ></i>
          <Tooltip id="jquery" />
          <i
            className="devicon-jquery-plain colored"
            data-tooltip-id="jquery"
            data-tooltip-content="JQuery"
          ></i>
          <Tooltip id="cplus" />
          <i
            className="devicon-cplusplus-plain colored"
            data-tooltip-id="cplus"
            data-tooltip-content="C++"
          ></i>
          <Tooltip id="type" />
          <i
            className="devicon-typescript-plain colored"
            data-tooltip-id="type"
            data-tooltip-content="TypeScript"
          ></i>
          <Tooltip id="python" />
          <i
            className="devicon-python-plain colored"
            data-tooltip-id="python"
            data-tooltip-content="Python"
          ></i>
          <Tooltip id="django" />
          <i
            className="devicon-django-plain colored"
            data-tooltip-id="django"
            data-tooltip-content="Django"
          ></i>
          <Tooltip id="node" />
          <i
            className="devicon-nodejs-plain colored"
            data-tooltip-id="node"
            data-tooltip-content="Node"
          ></i>
          <Tooltip id="express" />
          <i
            className="devicon-express-original colored"
            data-tooltip-id="express"
            data-tooltip-content="Express"
          ></i>
          <Tooltip id="react" />
          <i
            className="devicon-react-plain colored"
            data-tooltip-id="react"
            data-tooltip-content="React"
          ></i>
          <Tooltip id="mongo" />
          <i
            className="devicon-mongodb-plain colored"
            data-tooltip-id="mongo"
            data-tooltip-content="MongoDB"
          ></i>
          <Tooltip id="postgresql" />
          <i
            className="devicon-postgresql-plain colored"
            data-tooltip-id="postgresql"
            data-tooltip-content="PostgreSQL"
          ></i>
          <Tooltip id="aws" />
          <i
            className="devicon-amazonwebservices-plain colored"
            data-tooltip-id="aws"
            data-tooltip-content="AWS"
          ></i>
          <Tooltip id="git" />
          <i
            className="devicon-git-plain colored"
            data-tooltip-id="git"
            data-tooltip-content="Git"
          ></i>
          <Tooltip id="tortoise" />
          <i
            className="devicon-tortoisegit-plain colored"
            data-tooltip-id="tortoise"
            data-tooltip-content="TortoiseGit"
          ></i>
          <Tooltip id="gitlab" />
          <i
            className="devicon-gitlab-plain colored"
            data-tooltip-id="gitlab"
            data-tooltip-content="GitLab"
          ></i>
          <Tooltip id="vscode" />
          <i
            className="devicon-vscode-plain colored"
            data-tooltip-id="vscode"
            data-tooltip-content="VS Code"
          ></i>
          <Tooltip id="git" />
          <i
            className="devicon-git-plain colored"
            data-tooltip-id="git"
            data-tooltip-content="Git"
          ></i>
          <Tooltip id="figma" />
          <i
            className="devicon-figma-plain colored"
            data-tooltip-id="figma"
            data-tooltip-content="Figma"
          ></i>
          <Tooltip id="ai" />
          <i
            className="devicon-illustrator-plain colored"
            data-tooltip-id="ai"
            data-tooltip-content="Illustrator"
          ></i>
          <Tooltip id="ps" />
          <i
            className="devicon-photoshop-plain colored"
            data-tooltip-id="ps"
            data-tooltip-content="Photoshop"
          ></i>
        </div>
      </div>
      <div className="row">
        <h6 className="mt-5">
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </h6>
      </div>
      <div className="row m-0 mt-2">
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white right-margin">
            <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3 pb-4">
              <div className="col-7 col-lg-6 d-flex align-items-center">
                <img
                  className="resume-logo me-2"
                  src="/assets/experience/iir.png"
                  alt="Industrial Info Resources"
                />
                <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                  Web Developer
                  <br />
                  <a
                    href="https://www.industrialinfo.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="small semibold pt-1"
                  >
                    <span
                      className="opacity-50"
                      data-text="Industrial Info Resources"
                      onMouseEnter={handleMouseEnter}
                    >
                      Industrial Info Resources
                    </span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ps-2 small" />
                  </a>
                </h6>
              </div>
              <h6 className="dates col-5 col-lg-6 text-end m-0 opacity-50 pe-2">
                Apr 2023 - Present
              </h6>
            </div>
            <ul className="description description-block m-0 p-3 mt-0 mt-lg-2 mb-2">
              <li className="pb-2">
                +{" "}
                <small>
                  Collaborate with cross-functional teams to develop/maintain
                  website.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Assist in the implementation of web-based applications + 
                  projects.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Optimize website and code base in order to
                  improve site performance + loading speeds.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Debug + troubleshoot in order to identify + resolve various bugs/compatibility issues.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Conduct testing to ensure
                  intended functionality of web-based applications.
                </small>
              </li>
              <hr />
              <li>
                +{" "}
                <small>
                  Document + maintain code
                  repositories, ensuring proper version control.
                </small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white left-margin top-margin">
            <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3 pb-4">
              <div className="col-7 col-lg-8 d-flex align-items-center">
                <img
                  className="resume-logo me-2"
                  src="/assets/experience/act.png"
                  alt="ACT, Inc."
                />
                <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                  Team Lead / Academy Coordinator
                  <br />
                  <a
                    href="https://www.anhcotran.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="small semibold pt-1"
                  >
                    <span
                      className="opacity-50"
                      data-text="ACT, Inc."
                      onMouseEnter={handleMouseEnter}
                    >
                      ACT, Inc.
                    </span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ps-2 small" />
                  </a>
                </h6>
              </div>
              <h6 className="dates col-5 col-lg-4 text-end m-0 opacity-50 pe-2">
                Jul 2019 - Aug 2022
              </h6>
            </div>
            <ul className="description description-block m-0 p-3 mt-0 mt-lg-2 mb-2">
              <li className="pb-2">
                +{" "}
                <small>
                  Provided hair services to
                  a diverse clientele within fast-paced environments.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Led a team of stylists across the
                  globe, for various events + projects.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Traveled globally, teaching modern haircutting
                  techniques to professional stylists.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Collaborated closely with CEO on various projects, photoshoots + social media engagements.
                </small>
              </li>
              <hr />
              <li className="pb-0 pb-lg-2">
                +{" "}
                <small>
                  Supported CEO with strategic visioning as well as managing
                  day-to-day tasks.
                </small>
              </li>
              <hr className="transparent" />
              <li className="transparent">
                +{" "}
                <small>
                  &nbsp;
                </small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white right-margin mt-3">
            <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3 pb-4">
              <div className="col-7 col-lg-8 d-flex align-items-center">
                <img
                  className="resume-logo ms-1 me-3"
                  src="/assets/experience/fresh.png"
                  alt="Fresh, Inc."
                />
                <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                  Graphic Designer
                  <br />
                  <a
                    href="https://www.fresh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="small semibold pt-1"
                  >
                    <span
                      className="opacity-50"
                      data-text="Fresh, Inc."
                      onMouseEnter={handleMouseEnter}
                    >
                      Fresh, Inc.
                    </span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ps-2 small" />
                  </a>
                </h6>
              </div>
              <h6 className="dates col-5 col-lg-4 text-end m-0 opacity-50 pe-2">
                Sep 2016 - Aug 2018
              </h6>
            </div>
            <ul className="description m-0 p-3 mt-0 mt-lg-2 mb-3">
              <li className="pb-2">
                +{" "}
                <small>
                  Conceptualized + executed designs for
                  packaging, labels, + promotional materials, ensuring brand
                  consistency + adherence to industry regulations.
                </small>
              </li>
              <hr />
              <li className="pb-2">
                +{" "}
                <small>
                  Designed + implemented effective brand identity elements,
                  such as logos, business cards, + brand assets, reflecting
                  the brand&apos;s essence + positioning in the market.
                </small>
              </li>
              <hr />
              <li>
                +{" "}
                <small>
                  Contributed to the development + execution of product launch
                  campaigns, providing creative support + delivering designs
                  that drove product awareness + sales.
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <h6 className="mt-5">
          <FontAwesomeIcon icon={faSchool} /> Education
        </h6>
      </div>
      <div className="row m-0 mt-2">
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white right-margin">
            <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3 pb-4">
              <div className="col-7 d-flex align-items-center">
                <img
                  className="resume-logo me-2"
                  src="/assets/experience/ga.png"
                  alt="General Assembly"
                />
                <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                  Certificate in Software Engineering
                  <br />
                  <a
                    href="https://www.fresh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="small semibold pt-1"
                  >
                    <span
                      className="opacity-50"
                      data-text="General Assembly"
                      onMouseEnter={handleMouseEnter}
                    >
                      General Assembly
                    </span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ps-2 small" />
                  </a>
                </h6>
              </div>
              <h6 className="dates col-5 text-end m-0 opacity-50 pe-2">
                Sep 2022 - Dec 2022
              </h6>
            </div>
            <ul className="description m-0 p-3 mt-0 mt-lg-2">
              <li className="pb-2">
                +{" "}
                <small>
                  Completed 420+ hours of fully-immersive, expert-led
                  instruction on the tech industry&apos;s most in-demand skills.
                </small>
              </li>
              <hr />
              <li>
                +{" "}
                <small>
                  Developed five projects over the course of 12 weeks; all
                  displaying proficiency in full-stack web development.
                </small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white left-margin top-margin">
            <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3 pb-4">
              <div className="col-7 col-lg-7 d-flex align-items-center">
                <img
                  className="resume-logo me-2"
                  src="/assets/experience/fit.png"
                  alt="Fashion Institute of Technology"
                />
                <h6 className="m-0 d-flex align-items-start flex-column justify-content-center">
                  Bachelor&apos;s Degree
                  <br />
                  <a
                    href="https://www.fresh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="small semibold pt-1"
                  >
                    <span
                      className="opacity-50"
                      data-text="Fashion Institute of Technology"
                      onMouseEnter={handleMouseEnter}
                    >
                      Fashion Institute of Technology
                    </span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ps-2 small" />
                  </a>
                </h6>
              </div>
              <h6 className="dates col-5 col-lg-5 text-end m-0 opacity-50 pe-2">
                Aug 2014 - May 2017
              </h6>
            </div>
            <ul className="description m-0 p-3 mt-0 mt-lg-2">
              <li className="pb-2">
                +{" "}
                <small>
                  AAS degree in Advertising + Marketing Communications,
                  followed by a BFA degree in Graphic Design. <span className="transparent">-------------------------</span>
                </small>
              </li>
              <hr />
              <li>
                +{" "}
                <small>
                  Integrated knowledge from both marketing + graphic design
                  programs to develop a well-rounded skill set. <span className="transparent">-------------------------</span>
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Resume.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
};
