import React from "react";

import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import GuestbookPage from "./guestbook/page";
import ContactPage from "./contact/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

const HomePage = () => {
  return (
    <section>
      <FloatingArrowBtn />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      {/* <GuestbookPage />
      <ContactPage /> */}
    </section>
  );
};

export default HomePage;
