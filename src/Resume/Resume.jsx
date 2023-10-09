import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

export default function Resume() {
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
            <FontAwesomeIcon icon={faFile} /> View PDF
          </a>
        </h6>
      </div>
      <div className="row">
        <h6 className="mt-5">
          <FontAwesomeIcon icon={faFileCode} /> Technical Skills
        </h6>
      </div>
      <div className="row bg-white border border-black m-0 p-3 mt-2">
        <div className="d-flex justify-content-between fs-2">
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-java-plain colored"></i>
          <i className="devicon-jquery-plain colored"></i>
          <i className="devicon-cplusplus-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-django-plain colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-express-original colored"></i>
          <i className="devicon-react-plain colored"></i>
          <i className="devicon-mongodb-plain colored"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-amazonwebservices-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-tortoisegit-plain colored"></i>
          <i className="devicon-gitlab-plain colored"></i>
          <i className="devicon-vscode-plain colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-figma-plain colored"></i>
          <i className="devicon-illustrator-plain colored"></i>
          <i className="devicon-photoshop-plain colored"></i>
        </div>
      </div>
      <div className="row">
        <h6 className="mt-5">
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </h6>
      </div>
      <div className="row m-0 mt-2">
        <div className="col-12 col-lg-6 p-0">
          <div className="border border-dark bg-white me-2 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Junior Web Developer —{" "}
                <a
                  href="https://www.industrialinfo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u>Industrial Info Resources</u>
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
          <div className="border border-dark bg-white ms-2 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Team Lead / Academy On-Site Coordinator —{" "}
                <a
                  href="https://www.anhcotran.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u>ACT, Inc.</u>
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
          <div className="border border-dark bg-white me-2 mt-3 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Graphic Designer —{" "}
                <a
                  href="https://www.fresh.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u>Fresh</u>
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
          <div className="border border-dark bg-white me-2 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Certificate in Software Engineering —{" "}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u>General Assembly</u>
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
          <div className="border border-dark bg-white ms-2 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0">
                Bachelor&apos;s Degree —{" "}
                <a
                  href="https://www.fitnyc.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  <u>Fashion Institute of Technology</u>
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
