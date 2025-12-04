import Link from "next/link";
import { IconType } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
type ReviewType = {
  text: string;
  img: IconType;
  href: string;
};

const LocData: ReviewType[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowBack,
    href: "/",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowBack,
    href: "/",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowBack,
    href: "/",
  },
];

const FrontArrow = LocData[1].img;
const BackArrow = LocData[5].img;

const Location = () => {
  return (
    <>
      <Link
        href={LocData[0].href}
        className="max-w-[305px] min-h-[140px] flex absolute left-[-130px]"
      >
        <div className="flex gap-[43px] ">
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[0].text}
          </p>
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <FrontArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={LocData[1].href}
        className="max-w-[305px] min-h-[140px] absolute top-[180px] left-[-170px]"
      >
        <div className="flex gap-[43px] ">
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[1].text}
          </p>
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <FrontArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={LocData[2].href}
        className="max-w-[305px] min-h-[140px]  absolute top-[365px] left-[-130px]"
      >
        <div className="flex gap-[43px]">
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[2].text}
          </p>
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <FrontArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
        </div>
      </Link>

      <img
        src="/reviewLogo.png"
        alt=""
        className="max-w-[862px] max-h-[510px] object-contain"
      />

      <Link
        href={LocData[3].href}
        className="max-w-[305px] min-h-[140px] absolute right-[-130px] "
      >
        <div className="flex gap-[43px]">
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <BackArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[3].text}
          </p>
        </div>
      </Link>
      <Link
        href={LocData[4].href}
        className="max-w-[305px] min-h-[140px] absolute top-[180px] right-[-170px]"
      >
        <div className="flex gap-[43px]">
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <BackArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[4].text}
          </p>
        </div>
      </Link>
      <Link
        href={LocData[5].href}
        className="max-w-[305px] min-h-[140px] absolute top-[365px] right-[-130px]"
      >
        <div className="flex gap-[43px]">
          <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300">
            <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center">
              <BackArrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            </div>
          </div>
          <p className="font-semibold text-[18px] text-[#4E4B66] ">
            {LocData[5].text}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Location;
