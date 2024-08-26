import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import avatarImage from "../../assets/linux.png"; // Import the image

const Avatar = () => {
  const avatarRef = useRef(null);

  useEffect(() => {
    // Animate the image on component mount
    gsap.fromTo(
      avatarRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const avatarElement = avatarRef.current;

    // Initial animation
    gsap.fromTo(
      avatarElement,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Hover effect
    avatarElement.addEventListener("mouseenter", () => {
      gsap.to(avatarElement, { scale: 1.1, duration: 0.5 });
    });
    avatarElement.addEventListener("mouseleave", () => {
      gsap.to(avatarElement, { scale: 1, duration: 0.5 });
    });

    // Clean up event listeners
    return () => {
      avatarElement.removeEventListener("mouseenter", null);
      avatarElement.removeEventListener("mouseleave", null);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-8">
      <img
        ref={avatarRef}
        src={avatarImage}
        alt="Avatar"
        className="w-32 h-32 rounded-full"
      />
    </div>
  );
};

export default Avatar;
