import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SkillWheel from "./About/SkillWheel";
//import Avatar from "./About/Avatar";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 md:p-28"
    >
      <div className="md:w-1/2">
        {/* <Avatar /> */}
        <h1 ref={headingRef} className="font-bold text-4xl mb-6 underline">
          <em className="font-medium">The Journey of a Tech Enthusiast</em>
        </h1>
        <p ref={paragraphRef} className="font-thin text-2xl">
          I thrive on challenges and am passionate about turning ideas into
          reality. My love for technology began with a fascination for solving
          complex problems and has evolved into a passion for building
          innovative solutions. My expertise spans across languages like JAVA,
          JavaScript, Node.js, and React.js, allowing me to build robust,
          scalable applications. I&apos;ve solved over 200 problems on LeetCode
          and am active on various other problem-solving platforms, constantly
          honing my skills.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="md:w-[450px] md:h-[450px]">
          <SkillWheel />
        </div>
      </div>
    </div>
  );
};

export default About;
