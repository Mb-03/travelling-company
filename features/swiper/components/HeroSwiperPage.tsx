import { SwiperImages } from "../index";
import BasicSwiper from "./BasicSwiper";

const HeroSwiperPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="lg:flex-1">
          <h3 className="text-[rgba(188,164,255,1)] ml-1 font-poppins font-semibold text-[16px] leading-7 tracking-[0.75px] align-middle uppercase">
            PHOTO GALLERY
          </h3>
          <h2 className="text-[rgba(78,75,102,1)] max-w-[515px] mt-[35px] font-poppins font-bold text-[48px] leading-[50px] tracking-[1px]">
            View the wonderful places you can visit
          </h2>
        </div>

        <div className="lg:flex-1 flex justify-end">
          <p className="text-[rgba(0,0,0,1)] max-w-[395px] mt-[55px] pt-[30px] font-poppins font-normal text-[16px] leading-7 tracking-[0.75px] mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>
      </div>
      <BasicSwiper images={SwiperImages} />
    </div>
  );
};

export default HeroSwiperPage;
