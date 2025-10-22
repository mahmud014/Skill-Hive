import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesPromise = fetch("/Hero.json").then((res) => res.json());

const Hero = () => {
  const slides = use(slidesPromise);

  return (
    <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center text-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-white px-6 md:px-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl">{slide.desc}</p>
                <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
