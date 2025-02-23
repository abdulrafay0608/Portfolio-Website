import React from "react";
import Hero from "../../sections/Hero";
import SkillsMarquee from "../../../ui-components/SkillsMarquee";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Project from "../../sections/Project";
import Contact from "../../sections/Contact";

const Main = () => {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <About />
      <Skills />
      <Project />
      <SkillsMarquee />
      <Contact />
    </>
  );
};

export default Main;
