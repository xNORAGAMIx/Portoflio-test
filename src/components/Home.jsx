import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import coder from "../assets/coder.jpeg";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const headingText = "Hello, I'm";
    const subheadingText = "Manas Das";
    const avatarElement = imageRef.current

    gsap.fromTo(
      headingRef.current,
      { text: "" },
      {
        text: headingText,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.fromTo(
            subheadingRef.current,
            { text: "" },
            { text: subheadingText, duration: 1.5, ease: "power2.out" }
          );
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 2.5, ease: "power2.out" }
    );

    avatarElement.addEventListener("mouseenter", () => {
      gsap.to(avatarElement, { scale: 1.1, duration: 0.5 });
    });
    avatarElement.addEventListener("mouseleave", () => {
      gsap.to(avatarElement, { scale: 1, duration: 0.5 });
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-28 space-y-8 md:space-y-0"
    >
      <div className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
        <h1
          ref={headingRef}
          className="font-semibold text-2xl md:text-3xl"
        ></h1>
        <h1 ref={subheadingRef} className="font-bold text-4xl md:text-5xl"></h1>
        <p ref={paragraphRef} className="font-thin text-xl md:text-2xl">
          <em className="font-medium">
            A Passionate Developer with a Flair for Problem Solving!
          </em>
          <br />
          My journey has been marked by a relentless pursuit of knowledge, from
          diving deep into algorithms to mastering the art of creating
          efficient, user-centric applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 items-center">
          <a
            ref={(el) => (buttonRefs.current[0] = el)}
            className="font-bold border-2 p-3 md:p-4 text-lg md:text-xl rounded-lg transition-all duration-300 ease-in-out
             hover:bg-black hover:text-white hover:border-black focus:opacity-70
             hover:shadow-[0_0_15px_4px_rgba(0,0,0,0.5)]"
            href=""
          >
            About Me
          </a>
          <a
            ref={(el) => (buttonRefs.current[1] = el)}
            className="font-bold border-2 p-3 md:p-4 text-lg md:text-xl  rounded-lg transition-all duration-300 ease-in-out
             hover:bg-black hover:text-white hover:border-black focus:opacity-70
             hover:shadow-[0_0_15px_4px_rgba(0,0,0,0.5)]"
            href=""
          >
            Projects
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          ref={imageRef}
          src={coder}
          alt="Profile"
          className="object-cover w-64 h-64 md:w-96 md:h-96 rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
