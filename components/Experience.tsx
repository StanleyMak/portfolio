import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const experiences = [
  {
    name: "Urban Sharing",
    description:
    "Full-stack Developer at Norway's leading bicycle-sharing software firm",
    image: "/urbanSharing.jpeg",
    link: "https://urbansharing.com/",
  },
  {
    name: "KABAM Robotics",
    description: "Software Engineer at a cutting-edge robotics software firm",
    image: "/kabam.png",
    link: "https://kabam.ai/",
  },
  {
    name: "Teaching Assistant (Data Management and Visualisation)",
    description: "Teaching Assistant for a class of 35 at the National University of Singapore",
    image: "/bt2102.jpeg",
    link: "https://nusmods.com/courses/BT2102/data-management-and-visualisation",
  },
  {
    name: "Teaching Assistant (Programming Methodology)",
    description: "Teaching Assistant for a class of 15 at the National University of Singapore",
    image: "/cs1010j.jpeg",
    link: "https://nusmods.com/courses/CS1010J/programming-methodology",
  },
]

const Experience = () => {
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
                    <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {experience.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={experience.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Experience
