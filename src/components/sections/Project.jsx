import React from "react";
import Tilt from "react-parallax-tilt";
import CustomButton from "../../ui-components/CustomButton";
import SectionHeading from "../../ui-components/SectionHeading";
import Badge from "../../ui-components/Badge";
import TextParagraph from "../../ui-components/TextParagraph";
import { projects } from "../../utils/utils.constant";

const Project = () => {
  return (
    <section id="projects" className="my-8">
      <div className="relative max-w-screen-xl mx-auto px-4 py-16">
        <SectionHeading title="Featured Projects" />
        <div className="space-y-12 max-w-screen-lg mx-auto my-8">
          {projects.map((pro, i) => (
            <Tilt key={i} tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.02}>
              <div
                data-aos="fade-up"
                className="min-h-[50vh] flex flex-col md:flex-row items-center gap-8 p-6 border border-slate-800 shadow-2xl hover:shadow-slate-800 dark:bg-gray-800 rounded-2xl transition-all hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 && "order-1"}`}>
                  <Tilt tiltAngleYInitial={i % 2 === 0 ? 250 : -250}>
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="h-[200px] md:h-[300px] overflow-hidden mix-blend-luminosity object-cover object-top w-full max-w-md rounded-2xl shadow-2xl transition-all"
                    />
                  </Tilt>
                </div>
                {/* Text Section */}
                <div className={`md:w-1/2 space-y-4`}>
                  <SectionHeading title={pro.title} />
                  <TextParagraph>{pro.description}</TextParagraph>
                  <div className="flex flex-wrap gap-2">
                    {pro.technologies.map((tech, j) => (
                      <div key={j}>
                        <Badge text={tech} className="px-2 py-1" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-3 mt-8">
                    <CustomButton
                      label="View Project"
                      href={pro.liveDemo}
                      variant="filled"
                      extraClasses="px-3 py-1.5 text-xs"
                    />
                    <CustomButton
                      label="View Code"
                      href={pro.codeLink}
                      variant="outlined"
                      extraClasses="px-3 py-1.5 text-xs"
                    />
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
