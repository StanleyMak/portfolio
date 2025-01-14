import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";

const experiences = [
  {
    name: "TikTok/ByteDance",
    description:
      "Software Engineer at renowned short video social media platform company",
    image: "/tiktok.jpeg",
    link: "https://www.tiktok.com/about?lang=en",
    skills: [
      "Go",
      "Python Flask",
      "Hive",
      "Business Intelligence",
      "CRON",
      "REST APIs",
    ],
  },
  {
    name: "Urban Sharing",
    description:
      "Full-stack Developer at Norway's leading bicycle-sharing software firm",
    image: "/urbanSharing.jpeg",
    link: "https://urbansharing.com/",
    skills: [
      "TypeScript",
      "MVC Framework",
      "Express",
      "GraphQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    name: "KABAM Robotics",
    description: "Software Engineer at a cutting-edge robotics software firm",
    image: "/kabam.png",
    link: "https://kabam.ai/",
    skills: ["JavaScript", "MUI", "Python", "Docker"],
  },
  {
    name: "Teaching Assistant",
    subtitle: "(Enterprise Systems Interface Design and Development)",
    description:
      "Graded a class of 35 for full-stack projects at the National University of Singapore",
    image: "/nusComputing.png",
    link: "https://nusmods.com/courses/IS3106/enterprise-systems-interface-design-and-development",
    skills: ["Frontend", "Backend", "Java"],
  },
  {
    name: "Teaching Assistant",
    subtitle: "(Data Management and Visualisation)",
    description:
      "Teaching Assistant for a class of 35 at the National University of Singapore",
    image: "/bt2102.jpeg",
    link: "https://nusmods.com/courses/BT2102/data-management-and-visualisation",
    skills: ["Databases", "Data Visualisation", "SQL"],
  },
  {
    name: "Teaching Assistant",
    subtitle: "(Programming Methodology)",
    description:
      "Teaching Assistant for a class of 15 at the National University of Singapore",
    image: "/cs1010j.jpeg",
    link: "https://nusmods.com/courses/CS1010J/programming-methodology",
    skills: ["Java", "Data Structures", "Algorithms"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 md:pb-48">
        {experiences.map((experience, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={experience.link}>
                      <Image
                        src={experience.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">
                      {experience.name}
                    </h1>
                    <h1 className="text-2xl font-bold mb-6">
                      {experience.subtitle}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {experience.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 mb-2 justify-center md:justify-start">
                      <Link href={experience.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {experience.skills?.map((item, idx) => {
                        return (
                          <p
                            key={idx}
                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
