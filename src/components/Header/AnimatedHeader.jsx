import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/logo.png";

const AnimatedHeader = () => {
  const textRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Animate the text reveal
    timeline.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1 }
    );

    // Animate the underline
    timeline.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left", duration: 0.5 },
      "-=0.5"
    );

    // Optional: Add scaling effect
    timeline.fromTo(
      textRef.current,
      { scale: 1 },
      { scale: 1.1, repeat: -1, yoyo: true, duration: 1 },
      "-=1"
    );
  }, []);

  return (
    <div className="relative inline-block">
      <img ref={textRef} src={logo} alt="" className="w-16" />
    </div>
  );
};

export default AnimatedHeader;
