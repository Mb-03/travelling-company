import { IconType } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";
import LocationLinks from "./LocationLinks";
type ReviewType = {
  text: string;
  img: IconType;
  href: string;
  reverse?: boolean;
  id: number;
  linkClassName: string;
};

const LocData: ReviewType[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    id: 1,
    linkClassName: "max-w-[305px] min-h-[140px] flex absolute left-[-130px]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    id: 2,
    linkClassName:
      "max-w-[305px] min-h-[140px] absolute top-[180px] left-[-170px]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    id: 3,
    linkClassName:
      "max-w-[305px] min-h-[140px]  absolute top-[365px] left-[-130px]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    reverse: true,
    id: 4,
    linkClassName: "max-w-[305px] min-h-[140px] absolute right-[-130px] ",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    reverse: true,
    id: 5,
    linkClassName:
      "max-w-[305px] min-h-[140px] absolute top-[180px] right-[-170px]",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur ds.",
    img: IoIosArrowForward,
    href: "/",
    reverse: true,
    id: 6,
    linkClassName:
      "max-w-[305px] min-h-[140px] absolute top-[365px] right-[-130px]",
  },
];

const Location = () => {
  return (
    <div>
      {LocData.map((Link, i) => (
        <LocationLinks
          key={i}
          text={Link.text}
          href={Link.href}
          img={Link.img}
          reverse={Link.reverse}
          linkClassName={Link.linkClassName}
        />
      ))}
      <img
        src="/reviewLogo.png"
        alt="Logo"
        className="max-w-[862px] max-h-[510px] object-contain"
      />
    </div>
  );
};

export default Location;
