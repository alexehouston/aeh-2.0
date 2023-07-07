import "./Work.css";
import transition from "../../transition";

const Work = () => {
  return (
    <div className="Work animate__animated animate__fadeInUp">
      <h1>Work</h1>
    </div>
  );
};

const TransitionedWork = transition(Work);

export default TransitionedWork;