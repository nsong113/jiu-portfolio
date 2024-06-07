"use client";

import React, { useState } from "react";
import Link from "next/link";

import { projects } from "../../../data/projects/projectData";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen py-24 selection:bg-brown_color"
    >
      <h2 className="text-center font-dohyeon text-brown_color text-xl md:text-3xl mb-10 selection:bg-redbrown_color">
        Projects
      </h2>
      <div className="space-y-20 ">
        {projects.map((project, i) => (
          <article key={project.title} className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-80 lg:shrink-0">
              <Image
                src={project.imageUrl}
                width={400}
                height={400}
                alt="project main image"
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={project.startDate} className="text-gray-500">
                  {project.startDate} - {project.endDate}
                </time>

                {project.githubUrl === "" ? null : (
                  <Link
                    href={project.githubUrl}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Github 바로가기
                  </Link>
                )}
                {project.serviceUrl === "" ? null : (
                  <Link
                    href={project.serviceUrl}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    서비스 바로가기
                  </Link>
                )}
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={project.serviceUrl}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                <ul className="mt-10">
                  {project.points.map((point, i) => (
                    <li key={i} className="mt-2 text-sm leading-6 text-gray-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
