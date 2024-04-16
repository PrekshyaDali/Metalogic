import React from "react";

export default function BenifitsSlides() {
  const slides = [
    {
      img: "https://example.com/image1.jpg",
      title: "Slide 1",
      description: "This is the content of the first slide.",
    },
    {
      img: "https://example.com/image2.jpg",
      title: "Slide 2",
      description: "This is the content of the second slide.",
    },
    {
      img: "https://example.com/image3.jpg",
      title: "Slide 3",
      description: "This is the content of the third slide.",
    },
    {
      img: "https://example.com/image4.jpg",
      title: "Slide 4",
      description: "This is the content of the fourth slide.",
    },
  ];
  return <Carousel slides={slides} />;
}
