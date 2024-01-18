"use client";
import BasicWriteup from "@components/BasicWriteup";
// for other content except landing
import BasicLayout from "@components/Landing";
import Image from "next/image";
import BlueButton from "@components/BlueButton";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";


const writeUpData = {
  headingClass: [
    "text-transparent",
    "text-[76px]",
    "font-semibold",
    "font-montserrat",
    "leading-[92px]",
    "heading_gradient",
  ],
  headingText: (
    <>
      Building the <br />
      Future with Tech.
    </>
  ),
  descClass: [
    "text-white",
    "text-opacity-75",
    "text-xl",
    "font-medium",
    "font-montserrat",
    "leading-[34px]",
  ],
  descText: (
    <>
      Afripul group is a company founded under the passion for a better Africa.
      At Afripul group, we create, brand and market
    </>
  ),
  buttonOneClass: [
    "w-[239px] h-[70px] bg-gradient-to-r from-green-600 to-emerald-500 rounded-[43px] hover:opacity-90 hover:ring-2  hover:ring-green-400 hover:to-green-700 hover:from-emerald-500",
    " text-white text-2xl font-medium font-poppins",
  ],
  buttonOneText: "Contact us",
  buttonTwoClass: [
    "w-[239px] h-[70px] bg-none flex items-center gap-3  hover:text-opacity-70 hover:ring-2 hover:ring-green-400 rounded-[43px] px-2 hover:bg-emerald-400 hover:bg-opacity-50 group",
    " text-white text-xl font-medium font-poppins",
  ],
  buttonTwoText: (
    <>
      <div className="w-[52px] h-[52px] bg-gray-900 rounded-[86px] border-2 border-slate-500 backdrop-blur-[18px] flex items-center justify-center group-hover:bg-transparent">
        <Image
          src={"/assets/images/polygon 1.svg"}
          width={10}
          height={10}
          alt="play icon"
          className="object-contain size-2/5 object-right"
        />
      </div>
      <div className="text-white text-xl font-medium">Watch Video</div>
    </>
  ),
};

export const landingData = {
  contentClass: [
    "flex h-[90%] px-[5%] gap-5 box-border home_landing mt-14 mb-10",
  ],
  paneOne: (
    <>
      <div className="w-[782px] h-full bg-gradient-to-b from-sky-400 to-sky-500 rounded-[32px] shadow-inner perspective">
        <Image
          src={"/assets/images/sphere.svg"}
          width={964}
          height={964}
          alt="Sphere"
          className="object-contain  object-center rotate_3d backface-hidden"
        />
      </div>
    </>
  ),
  paneTwo: true,
  paneTwoContent: (
    <>
      <div className="flex flex-col w-[60%] justify-around bg-neutral-800 rounded-[32px] border-2 border-white border-opacity-10 py-5 px-12 relative">
        <h1 className=" text-white text-[95px] font-bold font-inter m-0">
          Building the future with-technology <br />
          {"(<{...}>)"}
        </h1>
        <hr className="border-white border-opacity-20" />
        <div className="flex justify-between items-center">
          <BlueButton
            key={`LandingBB_${uuidv4()}`}
            content={"Start Building +"}
            className={"font-inter"}
          />
          <div className="text-white text-xl font-medium font-poppins flex gap-1 items-center">
            <Image
              src={"/assets/images/ic_outline-gpp-good.svg"}
              width={36}
              height={36}
              alt="guaranteed icon"
              // className="object-contain object-right"
            />
            Impossibility does not exist.
          </div>
        </div>
        <div className="absolute right-[7%] top-[43%]">
          <Image
            src={"/assets/images/video-camera-dynamic-03 2.svg"}
            width={258}
            height={258}
            alt="colored camera icon"
            // className="object-contain object-right"
          />
        </div>
      </div>
    </>
  ),
};

const basicLayoutSv_1 = {
  contentClass: [
    "flex p-[4%] bg-neutral-800 w-[1100px] font-inter rounded-[32px] relative",
  ],
  paneOne: (
    <>
      <div className="w-[65%]">
        <BasicWriteup
          key={`LandingBL_${uuidv4()}`}
          heading={false}
          headingClass={"text-[50px] font-bold leading-[54px]"}
          headingText="Building the future with-technology"
          desc={true}
          descClass={"text-xl font-medium leading-normal"}
          descText={`Lorem ipsum dolor sit amet consectetur.
                Viverra ipsum ut at semper purus urna 
                molestie in. Nisi enim volutpat id integer enim in..
              `}
          buttonOne={false}
          buttonTwo={false}
        />
      </div>
      <div className="absolute right-2 bottom-0">
        <Image
          src={"/assets/images/thumb-up-dynamic-color.svg"}
          width={306}
          height={356}
          alt="guaranteed icon"
          // className="object-contain object-right"
        />
      </div>
    </>
  ),
};

export const landingDataSv = {
  contentClass: ["flex px-[5%] gap-5 box-border mt-14 mb-10"],
  paneOne: (
    <>
      <BasicLayout
        key={`BasicLayoutSV_${uuidv4()}`}
        contentClass={basicLayoutSv_1.contentClass.join(" ")}
        paneOne=<>{basicLayoutSv_1.paneOne}</>
        paneTwo={false}
      />
    </>
  ),
  paneTwo: (
    <>
      <div className="w-[45%] h-[454px] bg-gradient-to-l from-cyan-900 to-slate-800 rounded-[32px] border-2 border-sky-700 font-inter p-[3%] flex flex-col gap-5">
        <div className="text-base font-medium leading-none">Our works are</div>
        <div className="flex max-h-[80%]">
          <h2 className="text-[85px] font-normal leading-[90px]">
            High <br />
            <span className="bg-gradient-to-[76deg] box-decoration-clone from-[#096396] from-[13.64%] via-[#73D5DB] via-[46.53%] to-[#5A429C] to-[78.88%] font-bold bg-clip-text bg_clip_text">
              Quality <br />
              Render
            </span>
          </h2>
          <div className="flex items-center justify-center overflow-clip ">
            <Image
              src={"/assets/images/Lightning.svg"}
              width={356}
              height={356}
              alt="glowed Lightning"
              className="object-cover object-[70%_bottom] size-[450px] lightening"
            />
          </div>
        </div>
        <div className="text-xl font-medium leading-tight">
          Lorem ipsum dolor sit amet consectetur +
        </div>
      </div>
    </>
  ),
};
export const twinButtonIconData = {
  redirect: {
    path: "Rocket",
    alt: "rocket icon",
    width: 86,
    height: 86,
    className: "-right-[40%] -top-[55%] object-center object-contain",
  },
  ourServices: {
    path: "Note",
    alt: "Note 3d icon",
    width: 87,
    height: 87,
    className: "object-center object-cover size-[110px]",
  },
};
export const ourServicesData = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi tellus massa. Viverra ornare tortor dictum integer elementum laoreet proin amet.",
    icon: {
      buttonOneClass:
        "size-[60px] bg-sky-500 rounded-full flex items-center justify-center group-hover:brightness-125 overflow-clip relative",
      buttonOneBody: {
        path: "Rocket",
        alt: "rocket icon",
        width: 53,
        height: 53,
        className: "-right-[40%] -top-[55%] object-center object-contain",
      },
    },
    path: "#webDevelopment",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi tellus massa. Viverra ornare tortor dictum integer elementum laoreet proin amet.",
    icon: {
      buttonOneClass:
        "size-[60px] bg-[#FFBF00] rounded-full flex items-center justify-center group-hover:brightness-125 overflow-clip relative",
      buttonOneBody: {
        path: "Camera 3d",
        alt: "Tool with screw icon",
        width: 68,
        height: 68,
        className:
          " group-hover:scale-105 object-center object-cover size-[75px]",
      },
    },
    path: "#webDevelopment",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi tellus massa. Viverra ornare tortor dictum integer elementum laoreet proin amet.",
    icon: {
      buttonOneClass:
        "size-[60px] bg-[#F24E1E]  rounded-full flex items-center justify-center group-hover:brightness-125 overflow-clip relative",
      buttonOneBody: {
        path: "Cursor 3d icon",
        alt: "cursor 3d icon",
        width: 53,
        height: 53,
        className:
          "group-hover:scale-80 -left-[40%] -top-[50%]  object-center object-cover size-[95px]",
      },
    },
    path: "#webDevelopment",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi tellus massa. Viverra ornare tortor dictum integer elementum laoreet proin amet.",
    icon: {
      buttonOneClass:
        "size-[60px] bg-[#00FF79] rounded-full flex items-center justify-center group-hover:brightness-125 overflow-clip relative",
      buttonOneBody: {
        path: "Text-T",
        alt: "Text-T icon",
        width: 53,
        height: 53,
        className:
          "group-hover:size-[83px] object-center object-cover size-[80px]",
      },
    },
    path: "#webDevelopment",
  },
  // Add more objects for additional services
];

export const testimonialWriteUpData = {
  leftPane: {
    headingClass: ["text-[42px]", "font-bold", "font-inter", "leading-[48px]"],
    headingText: "What customers say about us.",
    descClass: ["text-xl", "font-medium", "font-inter", "leading-7"],
    descText: (
      <>
        Lorem ipsum dolor sit amet consectetur.Viverra ipsum ut at semper purus
        urna molestie in. Nisi enim volutpat id integer enim in..
      </>
    ),
    buttonOneClass: [
      "size-[55px] rounded-full border-2 border-white hover:shadow hover:shadow-white hover:border-opacity-60 hover:text-lg",
      "text-white text-xl font-medium font-inter",
    ],
    buttonOneProps: {
      title: "Prev",
    },
    buttonOneText: (
      <>
        <FontAwesomeIcon
          icon={faAngleLeft}
          alt={"angle left icon"}
          className=""
          title="Prev"
        />
      </>
    ),
    buttonTwoClass: [
      "size-[55px] rounded-full border-2 border-white",
      "text-white text-xl font-medium font-inter hover:shadow hover:shadow-white hover:border-opacity-60 hover:text-lg",
    ],
    buttonTwoProps: {
      title: "Next",
    },
    buttonTwoText: (
      <>
        <FontAwesomeIcon
          icon={faAngleRight}
          alt={"angle right icon"}
          className=""
          title="Next"
        />
      </>
    ),
  },
  card: [
    {
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
      },
    },
    {
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
      },
    },
    {
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
      },
    },
  ],
};
