import "./Resume.css";
import transition from "../../transition";

const Resume = () => {
  return (
    <div className="Resume animate__animated animate__fadeInUp">
        <iframe title="AEH Resume" loading="lazy" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFZeV2oghI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
    </div>
  );
};

const TransitionedResume = transition(Resume);

export default TransitionedResume;
