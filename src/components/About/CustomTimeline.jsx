/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { gsap } from "gsap";

const TimelineItem = ({ title, date, children }) => {
  useEffect(() => {
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.3 }
    );
  }, []);

  return (
    <div className="timeline-item mb-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-gray-500">{date}</span>
      <p className="mt-2">{children}</p>
    </div>
  );
};

const CustomTimeline = () => {
  return (
    <div className="flex flex-col items-center">
      <TimelineItem title="Bachelor's Degree" date="2019">
        Graduated from Calcutta University with a CGPA of 8.7.
      </TimelineItem>
      <TimelineItem title="Master's Degree" date="2024">
        Pursuing a Master&apos;s in Computer Applications at Maulana Azad National
        Institute of Technology, Bhopal, with a CGPA of 9.6.
      </TimelineItem>
      {/* Add more items as needed */}
    </div>
  );
};

export default CustomTimeline;
