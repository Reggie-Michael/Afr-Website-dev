"use client";
import BasicWriteup from "@components/BasicWriteup";
import Landing from "@components/Landing";
// for other content except landing
import BasicLayout from "@components/Landing";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Suspense } from "react";
import Loading from "@app/loading";
import Link from "next/link";
import BlueButton from "@components/BlueButton";
import Partners from "@components/Partners";
import { TwinButton } from "@components/HomeComponent";

export default function Home() {
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
        Afripul group is a company founded under the passion for a better
        Africa. At Afripul group, we create, brand and market
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

  const landingData = {
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
            <BlueButton content={"Start Building +"} className={"font-inter"} />
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

  const landingDataSv = {
    contentClass: ["flex px-[5%] gap-5 box-border mt-14 mb-10"],
    paneOne: (
      <>
        <BasicLayout
          contentClass={basicLayoutSv_1.contentClass.join(" ")}
          paneOne=<>{basicLayoutSv_1.paneOne}</>
          paneTwo={false}
        />
      </>
    ),
    paneTwo: (
      <>
        <div className="w-[45%] h-[454px] bg-gradient-to-l from-cyan-900 to-slate-800 rounded-[32px] border-2 border-sky-700 font-inter p-[3%] flex flex-col gap-5">
          <div className="text-base font-medium leading-none">
            Our works are
          </div>
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
  const twinButtonIconData = {
    services: {
      path: "Rocket",
      alt: "rocket icon",
      width: "86",
      height: "86",
      className:
        "-right-[40%] -top-[55%] object-center object-contain",
    },
  };
  return (
    <main className="app relative">
      <div className="landing-page flex flex-col box-border">
        <div className="fv h-[710px]">
          <Suspense fallback={<Loading />}>
            <Landing
              contentClass={landingData.contentClass.join(" ")}
              paneOne=<>{landingData.paneOne}</>
              paneTwo={landingData.paneTwo}
              paneTwoContent={landingData.paneTwoContent}
            />
          </Suspense>
        </div>
        <div className="sv w-full">
          <Suspense fallback={<Loading />}>
            <Landing
              contentClass={landingDataSv.contentClass}
              paneOne=<>{landingDataSv.paneOne}</>
              paneTwo={true}
              paneTwoContent={landingDataSv.paneTwo}
            />
          </Suspense>
        </div>
      </div>
      <div className="partners w-full flex flex-col gap-12 my-24 items-center px-[5%]">
        <Suspense fallback={<Loading />}>
          <p className="text-center text-white text-opacity-80 text-xl font-medium font-montserrat leading-[34px] w-[30%]">
            Some of the companies that have trusted our working capabilities.
          </p>
          <Partners />
        </Suspense>
      </div>
      <div className="flex gap-7 font-inter px-[5%] my-36">
        <Suspense fallback={<Loading />}>
          <div className="w-3/5  text-[40px] font-bold leading-[50px]">
            Lorem ipsum dolor sit amet consectetur. Amet tincidunt ut aliquam
            commodo in arcu enim. Sem metus auctor ultrices risus consectetur
            mauris.
          </div>
          <div className="flex flex-col w-2/5 gap-14">
            <div className="h-[311px]text-opacity-80 text-lg font-medium leading-7">
              Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi
              tellus massa. Viverra ornare tortor dictum integer elementum
              laoreet proin amet. Quis nisl pellentesque egestas vel nibh
              vulputate. Nisi egestas ac tristique sagittis nam.Nisi egestas ac
              tristique sagittis nam.
            </div>

            <div className="self-end group">
              <TwinButton
                button={false}
                buttonOneClass={
                  "size-[85px] bg-sky-500 rounded-full flex items-center justify-center group-hover:brightness-125 overflow-clip relative"
                }
                buttonOneBody={twinButtonIconData.services}
                buttonTwo={false}
                buttonTwoClass={
                  "size-[85px] rounded-full border-2 border-white text-3xl cursor-pointer hover:opacity-75 hover:shadow hover:shadow-white hover:border-opacity-60"
                }
                buttonTwoPath="/services"
              />
            </div>
          </div>
        </Suspense>
      </div>
      {/* 
      <Suspense fallback={<p>Loading Links</p>}>
        <div className="absolute py-6 px-4 bg-black text-white z-30 right-0 top-1/3 flex flex-col gap-7 text-xl">
          <Link href="/" title="Facebook Page" className="hover:opacity-80">
            <FontAwesomeIcon icon={faFacebook}/>
          </Link>
          <Link href="/" title="X -- formerly Twitter" className="hover:opacity-80">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link href="/" title="Instagram Page" className="hover:opacity-80">
            <FontAwesomeIcon icon={faInstagram}/>
          </Link>
        </div>
      </Suspense> */}
    </main>
  );
}
