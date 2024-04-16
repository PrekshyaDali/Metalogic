import { useEffect, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Carousel(props) {
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSwiperReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isSwiperReady) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={2}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {props.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-md p-5 h-44 w-72 flex flex-col space-y-5 rounded-2xl opacity-65">
            <div>
              <img src={slide.img} alt="" />
            </div>
            <div>
              <h2 className="text-xl">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
