"use client";

import Image, { StaticImageData } from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface BasicSwiperProps {
  images: StaticImageData[];
}

const BasicSwiper = ({ images }: BasicSwiperProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={32}
        slidesPerView={2}
        loop={true}
        modules={[Navigation]}
      >
        {images.map((imgSrc, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center border rounded-xl">
              <Image
                src={imgSrc}
                alt={`slide ${i}`}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      BasicSwiper
    </div>
  );
};

export default BasicSwiper;
