"use client";

import Image, { StaticImageData } from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BasicSwiperProps {
  images: StaticImageData[];
}

const BasicSwiper = ({ images }: BasicSwiperProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={images.length > 1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[603px] rounded-xl"
      >
        {images.map((imgSrc, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
              <Image src={imgSrc} alt={`slide ${i}`} fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8);
          background: transparent;
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #9295a6;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #26a17b;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BasicSwiper;
