import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom styles for arrows
const arrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  cursor: "pointer",
  color: "#000",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0 10px",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "50%",
};

// Custom NextArrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyles, right: "15px" }} onClick={onClick}>
      &#10095;
    </div>
  );
};

// Custom PrevArrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={{ ...arrowStyles, left: "15px", zIndex: 2 }} onClick={onClick}>
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.5)",
        }}
      >
        &#10094;
      </div>
    </div>
  );
};

export default function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {props.slides.map((slide, index) => (
        <div className="px-3" key={index}>
          {" "}
          <div className="bg-white shadow-md p-5 h-fit md:h-56 max-w-full w-fit flex flex-col space-y-5 mb-8 rounded-2xl opacity-65 hover:scale-105 transition-transform duration-300">
            <div>
              <img src={slide.img} alt="" />
            </div>
            <div>
              <h2 className="text-xl">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
