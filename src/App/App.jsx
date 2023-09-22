import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import About from "../About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "animate.css";
import "./App.css";

export default function App() {
  const location = useLocation();

  const velocity = 50;
  const shuffle = (o) => {
    for (
      let j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const shuffleText = (element, originalText) => {
    const elementTextArray = [...originalText];
    let randomText = [];

    const repeatShuffle = (times, index) => {
      if (index === times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(() => {
        randomText = shuffle([...elementTextArray]);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  const handleMouseEnter = (e) => {
    const element = e.target;
    const originalText = element.getAttribute("data-text");
    shuffleText(element, originalText);
  };

  return (
    <div className="App">
      <Nav handleMouseEnter={handleMouseEnter} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home handleMouseEnter={handleMouseEnter} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
