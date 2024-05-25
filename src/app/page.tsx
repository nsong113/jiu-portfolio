import React from "react";

import AboutPage from "./(Info)/about/page";
import ProjectsPage from "./(Info)/projects/page";
import ContactPage from "./(Info)/contact/page";
import SkillsPage from "./(Info)/skills/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

const HomePage = () => {
  return (
    <section>
      <FloatingArrowBtn />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </section>
  );
};

export default HomePage;
