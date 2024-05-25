"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const linkIsActive = (route: string) => activeLink === route;

  const navTitle = ["about", "skills", "projects", "guestbook", "contact"];

  const handleLinkClick = (route: string) => {
    setActiveLink(route);
    setToggleHeader(false);
    const section = document.getElementById(route.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-col justify-between items-center mx-auto w-full px-8 top-0 backdrop-blur-sm sticky z-30 pb-[3px] selection:bg-blueLight_color lg:h-[10vh] md:flex-row  md:h-[10vh] sm:h-[10vh]">
      <div className="w-full justify-between flex md:flex-col md:justify-between ">
        <Link href="/">
          <span className="text-2xl font-light font-shrik text-blue_color pl-2">
            JiuZiu
          </span>
        </Link>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setToggleHeader(!toggleHeader)}
        >
          {toggleHeader ? "close" : "open"}
        </button>
      </div>
      <nav
        className={`absolute top-[5vh] transition-all duration-300 left-0 w-full ease-in-out md:static md:opacity-100  md:w-fit  ${
          toggleHeader
            ? "top-[2vh] opacity-100 md:top-0 pointer-events-auto"
            : "top-[-200vh] opacity-0  pointer-events-none lg:pointer-events-auto md:pointer-events-auto"
        } font-dohyeon text-gray-600 `}
      >
        <ul
          className={`flex flex-col gap-4 py-5 text-base text-center md:flex-row md:gap-7 md:text-lg bg-none ${
            toggleHeader ? "bg-white opacity-90" : ""
          } md:bg-transparent`}
        >
          {navTitle.map((route) => (
            <li key={route}>
              <a
                href={`#${route}`}
                className={
                  linkIsActive(`#${route}`)
                    ? "text-blue_color"
                    : "hover:text-blue_color"
                }
                onClick={() => handleLinkClick(`#${route}`)}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
