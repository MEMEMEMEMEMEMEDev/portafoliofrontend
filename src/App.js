import React from "react";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Nav from "./components/Nav/Nav";

import "./App.scss";
import "./styles/normalize.css";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
