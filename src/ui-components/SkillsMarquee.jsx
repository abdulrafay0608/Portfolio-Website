import React from "react";
import Marquee from "react-fast-marquee";
import Badge from "./Badge";
import { skills } from "../utils/utils.constant";

const SkillsMarquee = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 md:my-10">
      <Marquee
        autoFill
        speed={80}
        direction={"left"}
        pauseOnHover
        gradient
        gradientColor="#020618"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:mx-3 flex items-center justify-center md:px-8 md:py-3 px-4 py-1.5"
          >
            <span className="text-5xl">{skill.icon}</span>
          </div>
        ))}
      </Marquee>
      <div className="mt-8">
        <Marquee
          autoFill
          speed={80}
          direction={"right"}
          pauseOnHover
          gradient
          gradientColor="#020618"
        >
          {skills.map((skill, index) => (
            <Badge
              key={index}
              text={skill.name}
              className="mx-1.5 md:mx-2 px-6 py-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsMarquee;
