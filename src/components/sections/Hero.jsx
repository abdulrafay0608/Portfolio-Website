import React from "react";
import TypingAnimation from "../../ui-components/TypingAnimation";
import Tilt from "react-parallax-tilt";
import CustomButton from "../../ui-components/CustomButton";
import Badge from "../../ui-components/Badge";
import TaglineBadge from "../../ui-components/TaglineBadge";
import TextParagraph from "../../ui-components/TextParagraph";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="md:min-h-[90vh] max-w-screen-xl px-2 py-16 md:mx-auto md:px-8 md:flex items-center">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex-1 space-y-6 max-w-xl"
        >
          <Badge
            icon={"✨"}
            text="Welcome to My Portfolio"
            className="px-2 py-1.5"
          />
          <div>
            <h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold">
              Abdul Rafay
              <span className="absolute left-0 -bottom-1 w-1/2 h-1 bg-purple-500"></span>
            </h1>
          </div>

          <TypingAnimation />

          <TaglineBadge
            icon={"🚀"}
            text="Turning Ideas into Digital Reality"
            extraClasses="py-1 px-4"
          />
          <TextParagraph aos="">
            A dedicated developer specializing in MERN stack & Next.js. Focused
            on creating seamless user experiences with modern tech stack. Let's
            build something extraordinary together!
          </TextParagraph>
          <div className="flex flex-row gap-3 my-6">
            <CustomButton
              label="View Project"
              href={"#projects"}
              target={""}
              variant="filled"
              extraClasses="px-6 py-3 text-sm"
            />
            <CustomButton
              label="Resume"
              href={"/assets/abdulrafay.pdf"}
              variant="outlined"
              extraClasses="px-6 py-3 text-sm"
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex-none hidden md:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl"></div>
          <Tilt tiltAngleYInitial={250}>
            <img
              src="/assets/hero.png"
              className="relative z-10 max-w-2xl w-full transition-all"
              alt="Hero Section"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;
