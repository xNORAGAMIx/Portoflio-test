import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedHeader from "./Header/AnimatedHeader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linkRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  const handleHover = (index, scale) => {
    gsap.to(linkRefs.current[index], {
      scale: scale,
      rotate: scale === 1 ? 0 : 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center p-6 lg:py-6 lg:px-32">
        <div>
          <AnimatedHeader />
        </div>
        <div>
          <ul className="hidden md:flex space-x-6 font-semibold text-2xl">
            {["Home", "About", "Projects", "Contact"].map((text, index) => (
              <li key={text}>
                <a
                  href={`#${text.toLowerCase()}`}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="transition-transform transform hover:scale-105 focus:scale-105 relative group"
                  onMouseEnter={() => handleHover(index, 1.1)}
                  onMouseLeave={() => handleHover(index, 1)}
                >
                  {text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-white group-focus:bg-white transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden sticky top-0 bg-slate-300 shadow-md rounded-lg p-6 m-2 w-auto">
          <ul className="flex flex-col space-y-2">
            {["Home", "About", "Projects", "Contact"].map((text) => (
              <li key={text}>
                <a
                  href={`#${text.toLowerCase()}`}
                  className="transition-transform transform hover:scale-105 focus:scale-105"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
