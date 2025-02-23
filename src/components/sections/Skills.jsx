import React from "react";
import { skills } from "../../utils/utils.constant";
import SectionHeading from "../../ui-components/SectionHeading";
import TaglineBadge from "../../ui-components/TaglineBadge";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="relative max-w-screen-lg min-h-screen mx-auto px-4">
        <div className="text-center">
          <div>
            <SectionHeading title="Skills" />
          </div>
          <TaglineBadge
            text="Turning Ideas into Digital Reality"
            extraClasses="py-1 px-4"
          />
        </div>
        <div className="relative grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 mt-12">
          {skills.map((skill) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              key={skill.name}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl mb-2">{skill.icon}</span>
              <span className="text-xs md:text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
