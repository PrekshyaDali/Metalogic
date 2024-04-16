import React from "react";
import BenifitsCard from "../components/BenifitsCard";

import Carousel from "../components/Carousel";

export default function () {
  const slides = [
    {
      img: "/img/badge.png",
      title: "Flexibility at work",
      description: "This is the content of the first slide.",
    },
    {
      img: "/img/badge.png",
      title: "Take Ownership",
      description: "This is the content of the second slide.",
    },
    {
      img: "/img/badge.png",
      title: "Unlimited Growth",
      description: "This is the content of the third slide.",
    },
    {},
    // Add more slide objects as needed
  ];

  return (
    <div className="bg-white h-[80vh] px-40 flex flex-col space-y-8 justify-center items-center">
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
