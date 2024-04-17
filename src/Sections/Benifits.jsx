import React from "react";
import BenifitsCard from "../components/BenifitsCard";

import Carousel from "../components/Carousel";

export default function () {
  const slides = [
    {
      img: "/benifits/flexibility.png",
      title: "Flexibility at work",
      description:
        "Do your best work at a time and place that fits us and your work-life balance",
    },
    {
      img: "/benifits/badge.png",
      title: "Take Ownership",
      description:
        "Take responsibility to solve customer challenges by acting as your own boss.",
    },
    {
      img: "/benifits/growth.png",
      title: "Unlimited Growth",
      description:
        "With no inner circle… absolutely everyone has the same opportunity to thrive.",
    },
    {
      img: "/benifits/makeyouselfheard.png",
      title: "Make Yourself Heard",
      description:
        "We encourage diverse perspectives - making it count in achieving our collective goals.",
    },
    {
      img: "/benifits/team-spirit.png",
      title: "Team Spirit",
      description:
        "Come together, work as one – this is at the heart of how we work, achieve results and collaborate.",
    },
    {
      img: "/benifits/inclusivity.png",
      title: "Inclusivity at Work",
      description:
        "We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions",
    },
    {
      img: "/benifits/transparent_environment.png",
      title: "Transparent Environment",
      description:
        "Build confidence in a culture of trust and open communication - with each other and our clients.",
    },
    {
      img: "/benifits/passion.png",
      title: "Transparent Environment",
      description:
        "We encourage you to strive, push the limits and achieve your dreams by being best you can be.",
    },

    // Add more slide objects as needed
  ];

  return (
    <div className="bg-white h-[80vh] px-40 flex flex-col space-y-8 justify-center items-center border-2">
      <div>
        <h3 className="text-red-500">Benifits</h3>
        <h2>Life at Metalogic</h2>
      </div>
      <div className = "w-full">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
