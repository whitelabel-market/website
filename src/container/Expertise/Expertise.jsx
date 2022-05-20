import React from "react";
import { Bar } from "../../components";

const Expertise = () => {
  const skills = [
    { title: "HTML + CSS", percentage: 90 },
    { title: "Javascript", percentage: 85 },
    { title: "React Native", percentage: 80 },
    { title: "SQL", percentage: 76 },
    { title: "C++", percentage: 78 },
  ];
  return (
    <div className="mt-20 grid gap-7 px-7 lg:grid-cols-2 lg:gap-14 lg:px-28">
      <div className="">
        <h2 className="mb-6 text-4xl dark:text-white lg:text-5xl">
          Our Expertise
        </h2>
        <p className="text-sm font-light dark:text-[#E8E8E8] lg:max-w-sm lg:text-base">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.
        </p>
      </div>
      {skills.map((skill, index) => {
        // index === 1 ? "" : "";
        if (index === 0) {
          return (
            <Bar
              key={index}
              title={skill.title}
              percentage={skill.percentage}
              className="lg:flex lg:flex-col lg:justify-end "
            />
          );
        } else {
          return (
            <Bar
              key={index}
              title={skill.title}
              percentage={skill.percentage}
            />
          );
        }
      })}
    </div>
  );
};

export default Expertise;
