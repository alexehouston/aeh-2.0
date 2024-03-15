import { Routes, Route, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="App" data-theme={theme}>
      <Nav handleMouseEnter={handleMouseEnter} theme={theme} setTheme={setTheme} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home handleMouseEnter={handleMouseEnter} theme={theme} />} />
      </Routes>
    </div>
  );
}
