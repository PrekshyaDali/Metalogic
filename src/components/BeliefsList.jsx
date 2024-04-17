import React from "react";
import BeliefsCard from "./BeliefsCard";

export default function BeliefsList() {
  const beliefs = [
    {
      img: "/img/continuous_learning.png",
      title: "Continuous Learning",
      description:
        "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.",
    },
    {
      img: "/beliefs/teamwork.png",
      title: "Team Work",
      description:
        "We believe that best solutions comes from diverse perspective and collaborative efforts. ",
    },
    {
      img: "/beliefs/innovation.png",
      title: "Innovation",
      description:
        "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
    },
    {
      img: "/beliefs/mentorship.png",
      title: "Mentorship",
      description:
        "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.",
    },
    {
      img: "beliefs/socialImpact.png",
      title: "Tangible Impact",
      description:
        "We're committed to delivering solutions that not only meet but exceed their expectations",
    },
    {
      img: "/beliefs/adaptibility.png",
      title: "Adaptability",
      description:
        "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10">
      {beliefs.map((belief, index) => (
        <BeliefsCard
          key={index}
          img={belief.img}
          title={belief.title}
          description={belief.description}
        />
      ))}
    </div>
  );
}
