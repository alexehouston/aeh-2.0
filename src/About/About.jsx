import "./About.css";
import transition from "../../transition";

const About = () => {
  return (
    <div className="About animate__animated animate__fadeInUp">
      <h1>About</h1>
    </div>
  );
};

const TransitionedAbout = transition(About);

export default TransitionedAbout;