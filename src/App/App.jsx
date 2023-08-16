import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Work from "../Work/Work";
import About from "../About/About";
import "animate.css";
import "./App.css";

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>

      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <video id="bgVideo" src={`${darkMode ? "/assets/background-dark.mp4" : "/assets/background-light.mp4"}`} autoPlay loop playsInline muted></video>
    </div>
  );
}
