import React from "react"

const skills = [
  { skill: "Java" },
  { skill: "R" },
  { skill: "Python" },
  { skill: "SQL/NoSQL" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "PostgreSQL" },
  { skill: "Google Cloud Platform" },
  { skill: "MongoDB" },
  { skill: "Tableau" },
  { skill: "Firebase" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "Tailwind" },
  { skill: "Material UI" },
  { skill: "Bootstrap" },
]

const AboutSection: React.FC<any> = () => {
  return (
    <section id="about">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="my-12 pb-12 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Stanley and I am a{" "}
              <span className="font-bold text-teal-600">{"highly ambitious"}</span>,
              <span className="font-bold text-teal-600">{" self-motivated"}</span>, and
              <span className="font-bold text-teal-600">{" driven"}</span> Software Engineer
              based in Singapore.
            </p>
            <br />
            <p>
              I am a{" "}
              <span className="font-bold text-teal-600">{"Penultimate Information Systems"}</span>
              {" "}student from the National University of Singapore.
            </p>
            <br />
            <p>
              I am fueled by an unwavering passion for technology and a thirst
              to constantly{" "} 
              <span className="font-bold text-teal-600">{"redefine the boundaries"}</span>
              {" "}of what is achievable. I am not just eager,
              but enthusiastic about the uncharted territories that lie ahead in my career.
            </p>
            <br />
            <p>
            Every new opportunity is a chance for me to craft a future that{" "}
            <span className="font-bold text-teal-600">{"challenges the status quo."}</span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
