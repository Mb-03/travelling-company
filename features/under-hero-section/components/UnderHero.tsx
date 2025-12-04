"use client";

import Image from "next/image";

// Assuming your image is stored in the public directory: /public/plane-icon.png

const UnderHero = () => {
  return (
    <div className="flex justify-center gap-[137px] ">
      <div className="">
        <div className="flex gap-5">
          <Image
            src="/AirplaneTilt.svg"
            alt="AirPlane"
            width={37}
            height={37}
          />
          <h2 className="font-bold text-[32px] tracking-[1px] text-[#2A00A2]">
            23,973
          </h2>
        </div>
        <div className="flex pl-15 pt-[15px]  ">
          <span className="max-w-[245px] text-[#6E7191]">
            Travel to over 23 thousand locations around the world.
          </span>
        </div>
      </div>

      <div className="">
        <div className="flex gap-5">
          <Image
            src="/GlobeHemisphereEast.svg"
            alt="AirPlane"
            width={37}
            height={37}
          />
          <h2 className="font-bold text-[32px] tracking-[1px] text-[#2A00A2]">
            82,000
          </h2>
        </div>
        <div className="flex pl-15 pt-[15px]  ">
          <span className="max-w-[245px]  text-[#6E7191]">
            Read tens of thousands of reviews of destinations.
          </span>
        </div>
      </div>

      <div>
        <div className="flex gap-5">
          <Image src="/Bicycle.svg" alt="AirPlane" width={37} height={37} />

          <h2 className="font-bold text-[32px] tracking-[1px] text-[#2A00A2]">
            4,000,000
          </h2>
        </div>
        <div className="flex pl-15 pt-[15px]  ">
          <span className="max-w-[245px] text-[#6E7191]">
            Visited by millions of travellers every single day.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UnderHero;
