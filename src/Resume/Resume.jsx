import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
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
          >
            VIEW PDF <FontAwesomeIcon icon={faFile} />
          </a>
        </h6>
      </div>
    </div>
  );
}
