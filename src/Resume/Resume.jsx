import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

export default function Resume({ handleMouseEnter }) {
  return (
    <div id="resume" className="Resume my-4">
      <div className="row">
        <h4 className="col-6">+ Resume</h4>
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
          <div className="border border-dark bg-white right-margin p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Junior Web Developer —{" "}
                <a
                  href="https://www.industrialinfo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u
                    data-text="Industrial Info Resources"
                    onMouseEnter={handleMouseEnter}
                  >
                    Industrial Info Resources
                  </u>
                  <img
                    className="ms-2"
                    src="/assets/experience/iir.png"
                    alt="Industrial Info Resources"
                    width="30"
                  />
                </a>
              </h6>
              <h6 className="m-0 opacity-50">May 2023 - Present</h6>
            </div>
            <ul className="m-0 p-0 mt-5">
              <li className="pb-2">
                +{" "}
                <small>
                  Collaborate with cross-functional teams to develop/maintain
                  responsive websites.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Ensure optimal user experience across multiple devices and
                  browsers.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Assist in the implementation of front-end web development
                  projects, including HTML, CSS, Java and JavaScript.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Support website optimization efforts by optimizing code to
                  improve site performance and loading speed.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Assist in the debugging and troubleshooting of website issues,
                  identifying and resolving bugs /compatibility issues.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Conduct testing and quality assurance to ensure proper
                  functionality and responsiveness of websites.
                </small>
              </li>
              <li>
                +{" "}
                <small>
                  Assist in the documentation and maintenance of code
                  repositories, ensuring proper version control.
                </small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white left-margin top-margin p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Team Lead / Academy On-Site Coordinator —{" "}
                <a
                  href="https://www.anhcotran.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u data-text="ACT, Inc." onMouseEnter={handleMouseEnter}>
                    ACT, Inc.
                  </u>
                  <img
                    className="ms-2"
                    src="/assets/experience/act.png"
                    alt="ACT, Inc."
                    width="20"
                  />
                </a>
              </h6>
              <h6 className="m-0 opacity-50">Jul 2019 - Aug 2022</h6>
            </div>
            <ul className="m-0 p-0 mt-5">
              <li className="pb-2">
                +{" "}
                <small>
                  Provided exceptional haircutting and styling services to
                  diverse clientele within fast-paced environments.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Led a team of stylists, both on-site and remotely across the
                  globe, for various events and projects.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Traveled globally to assist in teaching modern haircutting
                  techniques and styles to professional stylists.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Collaborated closely with the CEO, who also served as the
                  creative director of a major haircare brand.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Supported the CEO with their strategic vision and managing
                  day-to-day tasks.
                </small>
              </li>
              <li className="pb-2">&nbsp;</li>
              <li>&nbsp;</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white right-margin mt-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Graphic Designer —{" "}
                <a
                  href="https://www.fresh.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u data-text="Fresh" onMouseEnter={handleMouseEnter}>
                    Fresh
                  </u>
                  <img
                    className="ms-2"
                    src="/assets/experience/fresh.png"
                    alt="Fresh, Inc."
                    width="40"
                  />
                </a>
              </h6>
              <h6 className="m-0 opacity-50">Sep 2016 - Aug 2018</h6>
            </div>
            <ul className="m-0 p-0 mt-5">
              <li className="pb-2">
                +{" "}
                <small>
                  Conceptualized and executed visually captivating designs for
                  packaging, labels, and promotional materials, ensuring brand
                  consistency and adherence to industry regulations.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Conceptualized and executed visually captivating designs for
                  packaging, labels, and promotional materials, ensuring brand
                  consistency and adherence to industry regulations.
                </small>
              </li>
              <li className="pb-2">
                +{" "}
                <small>
                  Designed and implemented effective brand identity elements,
                  such as logos, business cards, and brand assets, reflecting
                  the brand&apos;s essence and positioning in the market.
                </small>
              </li>
              <li>
                +{" "}
                <small>
                  Contributed to the development and execution of product launch
                  campaigns, providing creative support and delivering designs
                  that drove product awareness and sales.
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
          <div className="border border-dark bg-white right-margin p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Certificate in Software Engineering —{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u
                    data-text="General Assembly"
                    onMouseEnter={handleMouseEnter}
                  >
                    General Assembly
                  </u>
                  <img
                    className="ms-2"
                    src="/assets/experience/ga.png"
                    alt="General Assembly"
                    width="25"
                  />
                </a>
              </h6>
              <h6 className="m-0 opacity-50">Sep 2022 - Dec 2022</h6>
            </div>
            <ul className="m-0 p-0 mt-5">
              <li className="pb-2">
                +{" "}
                <small>
                  Completed 420+ hours of fully-immersive, expert-led
                  instruction on the tech industry&apos;s most in-demand skills.
                </small>
              </li>
              <li>
                +{" "}
                <small>
                  Developed five projects over the course of 12 weeks; all
                  displaying proficiency in full-stack web development.
                </small>
              </li>
              <li>&nbsp;</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white left-margin top-margin p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Bachelor&apos;s Degree —{" "}
                <a
                  href="https://www.fitnyc.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u
                    data-text="Fashion Institute of Technology"
                    onMouseEnter={handleMouseEnter}
                  >
                    Fashion Institute of Technology
                  </u>
                  <img
                    className="ms-2"
                    src="/assets/experience/fit.png"
                    alt="Fashion Institute of Technology"
                    width="25"
                  />
                </a>
              </h6>
              <h6 className="m-0 opacity-50">Jul 2019 - Aug 2022</h6>
            </div>
            <ul className="m-0 p-0 mt-5">
              <li className="pb-2">
                +{" "}
                <small>
                  AAS degree in Advertising and Marketing Communications,
                  followed by a BFA degree in Graphic Design.
                </small>
              </li>
              <li>
                +{" "}
                <small>
                  Integrated foundational knowledge gained during both degree
                  programs, specializing in advertising, marketing
                  communications, and graphic design to develop a well-rounded
                  skill set.
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
