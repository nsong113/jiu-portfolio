"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuShuffle } from "react-icons/lu";

interface Props {
  sentence: string[];
}

export default function SlotMachine({ sentence }: Props) {
  const [count, setCount] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const textList = Array(5).fill(sentence).flat();

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurIndex((prev) => {
          return prev < textList.length - 1 - count ? prev + 1 : prev;
        });
      },
      10 * (curIndex + 1) * 0.7
    );
    return () => clearInterval(interval);
  }, [curIndex, count, textList.length]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: "-50%", opacity: 0 },
    animate: ({ isLast }) => ({
      scaleY: 1,
      y: 0,
      opacity: 1,
      filter: isLast ? undefined : "blur(1.5px)",
    }),
    exit: { scaleY: 0.3, y: "50%", opacity: 0 },
  };
  function handleClick() {
    setCurIndex(0);
    setCount((prev) => {
      return prev < sentence.length - 1 ? prev + 1 : 0;
    });
  }

  return (
    <div className="flex items-center sm:w-[420px] md:w-[500px] w-[470px] selection:bg-brown_color border-b">
      <span className="md:text-xl sm:text-base text-sm text-stone-600 mr-2">
        저는
      </span>
      <AnimatePresence mode="wait">
        {textList.map((text, i) => {
          if (i !== curIndex) return null;

          const isLast = i === textList.length - 1 - count;

          return (
            <motion.p
              key={`slot-${i}`}
              className="overflow-hidden text-blue_color md:text-xl text-sm sm:text-base text w-[280px] md:w-[350px] sm:w-[270px]"
              custom={{ isLast }}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: isLast ? 0.1 : 0.01,
                ease: isLast ? "easeInOut" : "linear",
              }}
            >
              {text}
            </motion.p>
          );
        })}
      </AnimatePresence>
      <motion.button
        className="ml-1 cursor-pointer md:text-base text-xs text-stone-600"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        <LuShuffle />
      </motion.button>
      <span className="md:text-xl sm:text-base text-sm text-stone-600 ml-2">
        입니다.
      </span>
    </div>
  );
}
