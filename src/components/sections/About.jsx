import React from "react";
import CustomButton from "../../ui-components/CustomButton";
import SectionHeading from "../../ui-components/SectionHeading";
import TextParagraph from "../../ui-components/TextParagraph";
import { BackgroundSVG, DottedSVG } from "../../ui-components/SVG";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-screen-xl min-h-screen px-2 py-16 md:mx-auto md:px-8 md:flex items-center "
    >
      <BackgroundSVG />
      <div
        data-aos="zoom-in-left"
        className="relative flex justify-center md:justify-end md:order-2 max-w-xl"
      >
        <DottedSVG />
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={2}>
          <img
            src="/assets/image.webp"
            alt="Abdul Rafay"
            className="w-96 h-auto rounded-xl object-cover mix-blend-luminosity hover:mix-blend-normal hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </Tilt>
      </div>
      {/* Text Section */}
      <div className="space-y-6 md:order-1 flex-1 md:mt-0 mt-16">
        <SectionHeading title="About Me" />
        <TextParagraph>
          Hi there! 👋 I’m Abdul Rafay, a MERN Stack developer with a passion
          for crafting dynamic, responsive web applications that truly make an
          impact. My journey into web development began with a natural curiosity
          about how websites work, which led me to formal training at Saylani
          Mass IT Training. There, I built a strong foundation in HTML, CSS,
          JavaScript, and modern frameworks like React and Next.js.
        </TextParagraph>
        <TextParagraph>
          As I continued to learn and grow, I embraced challenging projects that
          honed my skills. During my recent internship, I developed key HRMS
          modules—including an automated payroll system and biometric attendance
          integration—to streamline complex business processes. In my freelance
          work, I designed a CRM and ticketing system with role-based access
          control, significantly boosting customer support efficiency.
        </TextParagraph>
        <TextParagraph>
          I thrive on turning complex challenges into intuitive, user-friendly
          solutions. Eager to stay at the forefront of technology, I’m excited
          to collaborate on innovative projects that push the boundaries of
          what’s possible.
        </TextParagraph>

        <div className="my-12" data-aos="fade-up" data-aos-duration="1500">
          <CustomButton
            label="Contact Me"
            href={"#contact"}
            variant="outlined"
            extraClasses="px-6 py-3 text-sm "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
