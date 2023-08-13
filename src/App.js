import React from "react";
import Naav from "./components/naav/Naav";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import ScrollButton from "./components/scrollButton/ScrollButton";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <ScrollButton /> */}
    </>
  );
};

export default App;
