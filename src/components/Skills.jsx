import { useEffect, useRef, useState } from "react";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import linux from "../assets/linux.png";
import reactImage from "../assets/structure.png";
import tail from "../assets/Tailwind.png";
import css from "../assets/technology.png";

// Array of image sources
const imageSources = [
  docker,
  git,
  html,
  java,
  js,
  linux,
  reactImage,
  tail,
  css,
];

const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && isVisible) {
        containerRef.current.scrollLeft =
          window.scrollY % containerRef.current.scrollWidth;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar"
          style={{
            whiteSpace: "nowrap",
            position: "relative",
            scrollBehavior: "smooth",
          }}
        >
          {imageSources.map((src, index) => (
            <div key={index} className="w-64 h-44 flex-shrink-0">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-1/2 h-1/2 object-contain rounded-3xl"
              />
            </div>
          ))}
          {imageSources.map((src, index) => (
            <div key={`copy-${index}`} className="w-64 h-44 flex-shrink-0">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-1/2 h-1/2 rounded-3xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
