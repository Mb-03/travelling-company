import Link from "next/link";
import { IconType } from "react-icons";

type LocationLinksProps = {
  text: string;
  href: string;
  img: IconType;
  reverse?: boolean;
  linkClassName: string;
};

const LocationLinks = ({
  text,
  href,
  img,
  reverse,
  linkClassName,
}: LocationLinksProps) => {
  const Arrow = img;
  return (
    <Link href={href} className={linkClassName}>
      <div className={`flex gap-[43px] ${reverse && "flex-row-reverse"} `}>
        <p className="font-semibold text-[18px] text-[#4E4B66] ">{text}</p>
        <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-full border-[8px] border-[#5F2EEA]/10 hover:scale-125 ease-in-out transition-all duration-300 ">
          <div className="w-[52px] h-[52px] rounded-full border-[2px] border-[#5F2EEA] flex justify-center items-center ">
            {reverse ? (
              <Arrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] rotate-180 " />
            ) : (
              <Arrow className="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px] text-[#602eea] " />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationLinks;
