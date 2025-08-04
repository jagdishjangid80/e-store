"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = [
  { image: "/images/slider1.png" },
  { image: "/images/slider2.png" },
  { image: "/images/slider3.png" },
  { image: "/images/slider4.png" },
];

const Page = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full relative">
      {/* Custom Swiper Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: #BABABA !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #000 !important;
        }
      `}</style>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute z-10 top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute z-10 top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaArrowRight size={20} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[400px] md:h-[500px]"
        onInit={(swiper) => {
          // Attach refs after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-start text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
