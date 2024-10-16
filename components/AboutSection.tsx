import React from "react";

const skills = [
  { skill: "Java" },
  { skill: "R" },
  { skill: "Python" },
  { skill: "Go" },
  { skill: "SQL/NoSQL" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React.js" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "ThunkAPI" },
  { skill: "REST API" },
  { skill: "PostgreSQL" },
  { skill: "Google Cloud Platform" },
  { skill: "MongoDB" },
  { skill: "Tableau" },
  { skill: "Firebase" },
  { skill: "GraphQL" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "Tailwind" },
  { skill: "Material UI" },
  { skill: "Bootstrap" },
  { skill: "Docker" },
  { skill: "Hive" },
];

export default function AboutSection() {
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
              <span className="font-bold text-teal-600">
                {"highly ambitious"}
              </span>
              ,
              <span className="font-bold text-teal-600">
                {" self-motivated"}
              </span>
              , and
              <span className="font-bold text-teal-600">{" driven"}</span>{" "}
              Software Engineer based in Singapore.
            </p>
            <br />
            <p>
              I am a{" "}
              <span className="font-bold text-teal-600">
                {"Final Year Information Systems"}
              </span>{" "}
              student from the National University of Singapore.
            </p>
            <br />
            <p>
              Dynamic software engineer with{" "}
              <span className="font-bold text-teal-600">
                {"over a year"}
              </span>{" "} of diverse technical
              experience, including{" "}
              <span className="font-bold text-teal-600">
                {"international exposure"}
              </span>{" "}, within Agile
              environments. Proven expertise in modern tech stacks, complemented
              by{" "}
              <span className="font-bold text-teal-600">
                {"4+ years"}
              </span>{" "}of developing impactful{" "}
              <span className="font-bold text-teal-600">
                {"open-source projects"}
              </span>{" "},
              showcasing collaboration and innovation. A highly motivated and
              curious individual, eager to leverage skills and contribute to
              cutting-edge solutions in a fast-paced, collaborative setting.
            </p>
            <br />
            <p>
              Every new opportunity is a chance for me to craft a future that{" "}
              <span className="font-bold text-teal-600">
                {"challenges the status quo."}
              </span>
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
