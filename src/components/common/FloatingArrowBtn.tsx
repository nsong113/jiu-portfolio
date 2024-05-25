"use client";
import React from "react";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

const FloatingArrowBtn = () => {
  return (
    <div className="w-7 h-7 mx-auto pulse-animation fixed z-20 bottom-10 right-10 md:right-14 md:w-9 md:h-9">
      <Link href="/">
        <FaArrowAltCircleUp className="text-gray-300 w-7 h-7 bg-white rounded-full md:w-8 md:h-8" />
      </Link>
    </div>
  );
};

export default FloatingArrowBtn;
