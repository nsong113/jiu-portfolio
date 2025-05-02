"use client";

import React from "react";

import SkillGrid from "@/components/skills/SkillGrid";
import { skills } from "../../../data/skills/skillData";

const SkillsPage = () => {
  return (
    <section id="skills" className="h-full py-24 selection:bg-selection_color">
      <h2 className="text-center font-dohyeon text-blueLight_color text-xl md:text-3xl mb-10 selection:bg-selection_color">
        Skills
      </h2>
      <SkillGrid skills={skills} />
    </section>
  );
};

export default SkillsPage;
