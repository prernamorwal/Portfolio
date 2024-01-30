import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profiles from "./components/Profiles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/stylesheet.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <Navbar />
      <div>
        <Home />
        <About />
        <Profiles />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
