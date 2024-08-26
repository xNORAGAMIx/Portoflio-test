import { useState } from "react";
import ProjectCard from "./ProjectCard";
import img from "../../assets/hshs.jpg";
import next from "../../assets/next.png";
import back from "../../assets/back.png";

const projects = [
  {
    name: "Green Community Hub",
    image: img,
    githubLink: "https://github.com/username/green-community-hub",
    liveLink: "https://green-community-hub.com",
  },
  {
    name: "Campus Ride-Sharing",
    image: img,
    githubLink: "https://github.com/username/campus-ride-sharing",
    liveLink: "https://campus-ride-sharing.com",
  },
  {
    name: "Usage Tracker",
    image: img,
    githubLink: "https://github.com/username/usage-tracker",
    liveLink: "https://usage-tracker.com",
  },
  {
    name: "Portfolio Website",
    image: img,
    githubLink: "https://github.com/username/portfolio-website",
    liveLink: "https://portfolio-website.com",
  },
  // Add more projects as needed
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
  };

  const prevProjects = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + projects.length) % projects.length
    );
  };

  const currentProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div id="projects">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12  font-bold">
        Projects
      </h1>
      <div className="flex justify-evenly items-center">
        <button onClick={prevProjects} className="mr-2 px-4 py-2 rounded">
          <img
            src={back}
            alt=""
            className="w-12 rounded-full hover:shadow-[0_0_15px_4px_rgba(0,0,0,0.5)] "
          />
        </button>
        <button onClick={nextProjects} className="mr-2 px-4 py-2 rounded">
          <img
            src={next}
            alt=""
            className="w-12 rounded-full hover:shadow-[0_0_15px_4px_rgba(0,0,0,0.5)]"
          />
        </button>
      </div>
      <div className="relative flex justify-center items-center space-x-4 p-4 sm:p-6 rounded-lg shadow-md">
        {/* Display Projects */}
        <div className="flex space-x-12 overflow-x-auto p-4 lg:p-20 w-full">
          {currentProjects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 lg:w-1/3 ${
                index > 0 ? "hidden sm:block" : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
