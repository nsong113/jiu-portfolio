"use client";

import React, { useState } from "react";
import Link from "next/link";

import { projects } from "../../../data/projects/projectData";
import Image from "next/image";

const ProjectPage = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen py-24 selection:bg-selection_color"
    >
      <h2 className="text-center font-dohyeon text-blueLight_color text-xl md:text-3xl mb-10 selection:bg-selection_color">
        Projects
      </h2>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 "
          onClick={closeModal}
        >
          <div
            className="max-w-3xl w-full p-10 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="확대된 이미지"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <div className="space-y-20 ">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div
              className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-96 lg:shrink-0"
              onClick={() => handleImageClick(project.imageUrl.src)}
            >
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 rounded-full bg-selection_color px-3 py-1.5 font-medium text-gray-600 hover:bg-pink"
                  >
                    Github 바로가기
                  </Link>
                )}
                {project.serviceUrl === "" ? null : (
                  <Link
                    href={project.serviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 rounded-full bg-selection_color px-3 py-1.5 font-medium text-gray-600 hover:bg-pink"
                  >
                    서비스 바로가기
                  </Link>
                )}
                {project.docsUrl === "" ? null : (
                  <Link
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 rounded-full bg-selection_color px-3 py-1.5 font-medium text-gray-600 hover:bg-pink"
                  >
                    관련 기술 Blog 바로가기
                  </Link>
                )}
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 ">
                  {project.description}
                </p>
                <ul className="mt-6 ">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="mt-2 text-sm leading-6 text-gray-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 ">
                  {project.stacks.map((stack, i) => (
                    <li
                      key={i}
                      className="mt-2 text-sm leading-6 text-gray-600 inline-block mr-2"
                    >
                      <span className="bg-gray-200 px-2 py-1 rounded-full">
                        {stack}
                      </span>
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
