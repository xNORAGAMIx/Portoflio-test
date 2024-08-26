import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ChartJS.register(ArcElement, Tooltip, Legend);

gsap.registerPlugin(ScrollTrigger);

const SkillWheel = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  const data = {
    labels: ["JavaScript", "React", "Node.js", "CSS", "Blockchain"],
    datasets: [
      {
        label: "Skills",
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 16, // Make the labels bigger
          },
          color: "#fff", // Change label color
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
        titleFont: {
          size: 16, // Make the tooltip title font bigger
        },
        bodyFont: {
          size: 14, // Make the tooltip body font bigger
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff", // Change tooltip title color
        bodyColor: "#fff", // Change tooltip body color
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      className="w-full h-full mt-8"
      style={{ height: "400px", width: "400px" }}
      ref={chartRef}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SkillWheel;
