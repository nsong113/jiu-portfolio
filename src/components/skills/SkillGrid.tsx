"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

interface Props {
  skills: Skills[];
}

interface Skills {
  stack: string;
  skillList: string[];
}

const SkillCard = dynamic(() => import("./SkillCard"));

export default function SkillGrid({ skills }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ul
      ref={ref}
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8 mb-14"
    >
      {skills.map((skill, index) => (
        <motion.li
          key={skill.stack}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.2, duration: 0.8, ease: "easeInOut" }}
        >
          <SkillCard skill={skill} />
        </motion.li>
      ))}
    </ul>
  );
}
