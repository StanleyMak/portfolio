import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"

const projects = [
  {
    name: "Infinite Carpool",
    description:
    "Infinite Carpool is a web app that groups colleagues in to share car transportation to and fro work.",
    image: "/infiniteCarpool.mp4",
    github: "https://github.com/adityajirafe/InfiniteIteratorsLifeHack",
    link: "",
  },
  {
    name: "Novus Hotel",
    description: "Novus Hotel is a mock hotel owner client where we perform data engineering to improve their business decisions",
    image: "/novusHotel.mp4",
    github: "https://github.com/brandonmanggo/IS3107_G2",
    link: "",
  },
  {
    name: "DropAndGo",
    description:
      "DropAndGo is a web application for brick and mortar stores to open up small spaces for customers to leave their belongings temporarily for a price",
    image: "/dropAndGo.mp4",
    github: "https://github.com/seantanyurong/drop-and-go",
    link: "https://is3106-dropandgo.netlify.app/",
  },
  {
    name: "Libary Management System",
    description:
      "Library Management System is a web application that digitalises the process sof borrowing books at a library",
    image: "/lms.mp4",
    github: "https://github.com/StanleyMak/libraryManagementSystem",
    link: "",
  },
  {
    name: "Car Rental Management System",
    description:
      "Car Rental Management System is an application that manages rental of cars",
    image: "/crms.png",
    github: "https://github.com/StanleyMak/IS2103-Pair-Project",
    link: "",
  },
  {
    name: "Fit4Life",
    description:
      "Fit4Life is a web application that allows users to try on clothes virtually on their customisable 3D avatar",
    image: "/fit4Life.mp4",
    github: "https://github.com/rylzxc/Fit4Life-Test-",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      {project.image.includes("png") ? (
                        <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                      ) : (
                        <video 
                        autoPlay
                        loop
                        muted
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70">
                          <source src={project.image} type="video/mp4" />
                        </video>
                      )}
                      
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link ? (
                        <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      ) : (null)}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  )
}

export default ProjectsSection
