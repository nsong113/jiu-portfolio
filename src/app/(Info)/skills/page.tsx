"use client";

import React from "react";

import SkillGrid from "@/components/skills/SkillGrid";
import { skills } from "../../../../data/skills/skillData";

const SkillsPage = () => {
  return (
    <section id="skills" className="h-full py-24 selection:bg-brown_color">
      <h2 className="text-center font-dohyeon text-brown_color text-xl md:text-3xl mb-10 selection:bg-redbrown_color">
        Skills
      </h2>
      <SkillGrid skills={skills} />
    </section>
  );
};

export default SkillsPage;
