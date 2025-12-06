import { SwiperImages } from "../index";
import BasicSwiper from "./BasicSwiper";

const HeroSwiperPage = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h3 className="text-[rgba(188,164,255,1)] ml-1 font-poppins font-semibold text-[16px] leading-7 tracking-[0.75px] align-middle uppercase ">
          PHOTO GALLERY
        </h3>
        <h2 className="text-[rgba(78,75,102,1)] w-[515] h-[108] mt-[35] font-poppins font-bold text-[48px] leading-[50px] tracking-[1px]">
          View the wonderful places you can visit
        </h2>
      </div>

      <div>
        <p className="text-[rgba(0,0,0,1)]  w-[395px] h-[110px] mt-[55] pt-[30] font-poppins font-normal text-[16px] leading-7 tracking-[0.75px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur
        </p>

        {/* <BasicSwiper images={SwiperImages} /> */}
      </div>
    </div>
  );
};

export default HeroSwiperPage;
