import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Resume from "../Resume/Resume";
import Work from "../Work/Work";
import About from "../About/About";
import 'animate.css';
import "./App.css";

export default function App() {

  const location = useLocation();

  return (
    <>
      <Nav />
        <Routes location={location} key={location.pathname}>
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}
