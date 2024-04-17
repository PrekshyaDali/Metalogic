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

  const handleSwiperInstance = (swiper) => {
    if (
      !swiper ||
      !swiper.navigation ||
      !swiper.navigation.$prevEl ||
      !swiper.navigation.$nextEl
    ) {
      return;
    }

    // Apply custom styles to the navigation buttons
    swiper.navigation.$el.classList.add("swiper-buttons-container");
    const prevButton = swiper.navigation.$prevEl;
    const nextButton = swiper.navigation.$nextEl;

    // Apply custom styles to the navigation buttons
    if (prevButton) {
      prevButton.classList.add("swiper-button", "swiper-button-prev");
    }
    if (nextButton) {
      nextButton.classList.add("swiper-button", "swiper-button-next");
    }
  };

  if (!isSwiperReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={3}
        navigation
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass:
            "swiper-pagination-bullet rounded-full w-3 h-3 bg-gray-400 mr-2",
          bulletActiveClass: "bg-blue-500",
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        scrollbar={{
          draggable: true,
          el: ".swiper-scrollbar",
        }}
        onSwiper={handleSwiperInstance}
        onSlideChange={() => console.log("slide change")}
        className="overflow-hidden relative"
      >
        {props.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md p-5 h-44 w-72 flex flex-col space-y-5 mb-8 rounded-2xl opacity-65">
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
        <div className="swiper-pagination absolute bottom-0 left-0 right-0 z-10 flex justify-center mt-4"></div>
        <div className="swiper-buttons-container bg-blue-300 absolute bottom-4 left-0 right-0 flex justify-center"></div>
      </Swiper>
    </div>
  );
}
