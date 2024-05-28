import React from "react";

import AboutPage from "./(Info)/about/page";
import SkillsPage from "./(Info)/skills/page";
import ProjectsPage from "./(Info)/projects/page";
import GuestbookPage from "./(Info)/guestbook/page";
import ContactPage from "./(Info)/contact/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

const HomePage = () => {
  return (
    <section>
      <FloatingArrowBtn />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <GuestbookPage />
      <ContactPage />
    </section>
  );
};

export default HomePage;
