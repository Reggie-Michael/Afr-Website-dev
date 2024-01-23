import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export const AboutBrandWorks = ({
  className,
  heading,
  desc,
  leftPaneClass,
  firstPaneBottom,
  rightPane,
}) => {
  return (
    <div className={`w-full pl-[5%] pt-[4%] flex gap-3 ${className}`}>
      <div
        className={`flex flex-col h-full w-[35%] justify-between  font-inter relative ${leftPaneClass}`}
      >
        <div className="flex flex-col gap-8 z-10">
          <h2 className=" text-white text-[60px] font-bold capitalize leading-[64px] mb-2">
            {heading || "We Market"}
          </h2>
          <p className="text-white text-opacity-60 text-xl font-medium leading-7 w-[90%]">
            {desc || (
              <>
                Lorem ipsum dolor sit amet consectetur. A ut risus habitant
                morbi tellus massa. Viverra ornare tortor dictum integer
                elementum laoreet proin amet.
              </>
            )}
          </p>
          <Link
            href="/portfolio"
            className="flex w-fit gap-3 text-lg font-bold items-center hover:opacity-70 hover:gap-8"
          >
            See our works
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <>{firstPaneBottom}</>
      </div>
      <>
        {rightPane || (
          <>
            <div className="w-"></div>
          </>
        )}
      </>
    </div>
  );
};

export const TeamCardMini = ({ rating, name, position, img, placeImage }) => {
  const starRating = rating || 5;
  return (
    <div className="p-10 flex flex-col w-[470.95px] h-[758px] justify-between gap-2 bg-gradient-to-tr from-[#20202064] to-[#2f2f2f51] rounded-xl border-2 border-white border-opacity-10 backdrop-blur-[18px] relative">
      <div className="flex w-full h-[70%] rounded-[32px] border-2 border-white border-opacity-10 overflow-clip">
        <Image
          src={img?.src || "/assets/images/Singer.png"}
          alt={img?.alt || "Singer"}
          width={img?.width || 482}
          height={img?.height || 522}
          className={`size-full aspect-square object-cover ${img?.className}`}
        />
      </div>
      <div className="flex h-[20%] flex-col gap-5 ">
        <div className="flex gap-3">
          {Array.from({ length: starRating }, (_, index) => (
            <Image
              key={`TeamStar${uuidv4()}_${index}`}
              src="/assets/images/rating.svg"
              alt="Star"
              width={24}
              height={24}
              className=""
            />
          ))}
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-2 h-full justify-between font-public-sans">
            <h3 className="text-slate-50 text-xl font-semibold leading-normal mb-1">
              {name || "John Doe"}
            </h3>
            <h5 className="text-slate-400 text-lg font-normal leading-tight">
              {position || "Staff"}
            </h5>
          </div>
          <div className="flex gap-2 items-center h-fit mt-1">
            <div className="flex items-start font-public-sans">
              <Image
                src="/assets/images/Verified Icon_blue.svg"
                alt="Verified Icon"
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <p className="text-slate-400 text-sm font-normal leading-tight">
              Verified
            </p>
          </div>
        </div>
      </div>
      <div className={`absolute -bottom-[10%] -right-2 scale-95 ${placeImage?.mainClass}`}>
        <Image
          src={placeImage?.src || ""}
          alt={placeImage?.alt || "Staff"}
          height={placeImage?.height || 0}
          width={placeImage?.width || 0}
          className={placeImage?.className || ""}
        />
      </div>
    </div>
  );
};
