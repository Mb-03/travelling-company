"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-60 pl-[135px] ">
      <div className="relative">
        <div>
          <h2 className="text-[64px] leading-[66px] font text-[#4E4B66] max-w-[669px] tracking-[1px]">
            Plan your next big trip overseas.
          </h2>
        </div>
        <div className="flex gap-[25px] pt-[25px]">
          <button className="w-[243px] h-16 rounded-[40px] bg-[#5F2EEA] border-none">
            BEGIN PLANS
          </button>
          <button className="max-w-[243px] h-16 rounded-[40px] bg-white border-2 border-[#5F2EEA] text-[#5F2EEA]">
            REVIEW PLANS
          </button>
        </div>
      </div>

      <div className="absolute left-[454px] top-0 ">
        <Image
          src="/Boarding.svg"
          alt="Boarding Icon"
          width={1409}
          height={634}
        />
      </div>
    </div>
  );
};

export default Hero;
