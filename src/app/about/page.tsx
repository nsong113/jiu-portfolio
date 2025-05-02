"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

import useTypeword from "@/hooks/useTypeword";

import ProfileImage from "../../../public/images/main/IMG_2618.jpg";
import { sentence } from "../../../data/about/aboutData";

const SlotMachine = dynamic(() => import("@/components/about/SlotMachine"));
const AboutContent = dynamic(() => import("@/components/about/AboutContent"));
const ScrollDown = dynamic(() => import("@/components/common/ScrollDown"));

const AboutPage = () => {
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const onBoardText: string = useTypeword("I find joy in what I do.", 45);
  const controls = useAnimation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialMessage(false);
      controls.start("visible");
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [controls]);

  useEffect(() => {
    if (!showInitialMessage) {
      controls.start("visible");
    }
  }, [showInitialMessage, controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  const messageItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.8,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {showInitialMessage && (
          <motion.div
            className="flex flex-col justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl text-center font-ghanachocolate text-stone-800 md:text-4xl">
              {onBoardText}
            </p>
            <motion.span
              className="text-lg text-center font-scoreRegular mt-6 text-stone-800 sm:text-base md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              프론트엔드 개발자 <span className="font-bold">송지우</span>
              입니다.
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      {!showInitialMessage && (
        <motion.section
          className="h-full"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <div
            id="about"
            className="relative flex items-center gap-6 flex-col pt-16 selection:bg-selection_color md:flex-row sm:flex-row"
          >
            <motion.div
              className="flex flex-col w-full justify-center items-center basis-5/12"
              variants={itemVariants}
            >
              <motion.p
                className="my-1 text-3xl text-center md:text-5xl font-ghanachocolate absolute top-8 left-7 flex flex-col gap-1 md:gap-2 text-stone-800 md:top-5 md:left-10 sm:top-10 sm:left-18"
                variants={messageItemVariants}
              >
                <span>I find joy in</span>
                <span> what I do.</span>
              </motion.p>
              <div
                className="w-60 h-72 sm:h-80 md:w-[22rem] overflow-hidden block rounded-xl md:h-auto"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              >
                <Image
                  src={ProfileImage}
                  alt="profile"
                  width={300}
                  height={400}
                  priority
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-row justify-between text-xs mt-4 text-stone-600 bg-blueLight_color_pale w-80 rounded-xl  selection:bg-stone-300 md:text-base">
                <Link
                  href="https://github.com/nsong113"
                  target="_blank"
                  className="hover:font-semibold w-1/3 text-center px-8 p-2 rounded-xl hover:bg-blueLight_color_hover transition-all duration-200"
                >
                  GitHub
                </Link>
                <Link
                  href="https://nsong113.tistory.com/119"
                  target="_blank"
                  className="hover:font-semibold w-1/3 text-center px-8 p-2 rounded-xl hover:bg-blueLight_color_hover transition-all duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="https://twilight-riverbed-f04.notion.site/Visual-Studio-Code-d61786c493b6406f936359b6c1bab052?pvs=4"
                  target="_blank"
                  className="hover:font-semibold w-1/3 text-center px-8 p-2 rounded-xl hover:bg-blueLight_color_hover transition-all duration-200"
                >
                  Notion
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-full md:w-2/3"
              variants={itemVariants}
            >
              <p className="font-dohyeon text-stone-600 text-lg mb-8md:text-2xl">
                About Me
              </p>
              <SlotMachine sentence={sentence} />
              <AboutContent />
              <p className="text-sm text-stone-500 mt-2">update。 2025.05.02</p>
            </motion.div>
          </div>
          <ScrollDown />
        </motion.section>
      )}
    </>
  );
};

export default AboutPage;
