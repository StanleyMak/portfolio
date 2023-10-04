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
    "Infinite Carpool is a web app designed to help coworkers carpool to and from work by organizing shared rides",
    image: "/infiniteCarpool.mp4",
    github: "https://github.com/adityajirafe/InfiniteIteratorsLifeHack",
    link: "",
  },
  {
    name: "Novus Hotel",
    description: "Novus Hotel is a simulated client for a hotel owner, serving as a platform for data engineering to enhance their business decision-making",
    image: "/novusHotel.mp4",
    github: "https://github.com/brandonmanggo/IS3107_G2",
    link: "",
  },
  {
    name: "DropAndGo",
    description:
      "DropAndGo is a web app designed for physical stores to offer convenient storage solutions to customers who need a safe place to temporarily store their belongings for a fee",
    image: "/dropAndGo.mp4",
    github: "https://github.com/seantanyurong/drop-and-go",
    link: "https://is3106-dropandgo.netlify.app/",
  },
  {
    name: "Libary Management System",
    description:
      "Library Management System is a web application that streamlines and modernizes the book borrowing process in libraries",
    image: "/lms.mp4",
    github: "https://github.com/StanleyMak/libraryManagementSystem",
    link: "",
  },
  {
    name: "Car Rental Management System",
    description:
      "Car Rental Management System is an application designed to efficiently handle car rental services",
    image: "/crms.png",
    github: "https://github.com/StanleyMak/IS2103-Pair-Project",
    link: "",
  },
  {
    name: "Fit4Life",
    description:
      "Fit4Life is a web application that enables users to virtually try on clothing using a personalized 3D avatar",
    image: "/fit4Life.mp4",
    github: "https://github.com/rylzxc/Fit4Life-Test-",
    link: "",
  },
]

const ProjectsSection: React.FC<any> = () => {
  return (
    <section id="projects">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
    <div className="my-12 pb-12">

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
      </div>
    </section>
  )
}

export default ProjectsSection
