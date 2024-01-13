import BasicWriteup from "@components/BasicWriteup";
import Landing from "@components/Landing";
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
      "flex h-[90%] px-[7.5%] gap-5 box-border home_landing relative mt-14 mb-10",
    ],
    paneOne: (
      <>
        <div className="left flex flex-col gap-14 w-[58%] mt-14">
          <BasicWriteup
            heading={true}
            headingClass={writeUpData.headingClass.join(" ")}
            headingText=<>{writeUpData.headingText}</>
            desc={true}
            descClass={writeUpData.descClass.join(" ")}
            descText=<>{writeUpData.descText}</>
            buttonOne={true}
            buttonOneClass={writeUpData.buttonOneClass.join(" ")}
            buttonOneText=<>{writeUpData.buttonOneText}</>
            buttonTwo={true}
            buttonTwoClass={writeUpData.buttonTwoClass.join(" ")}
            buttonTwoText=<>{writeUpData.buttonTwoText}</>
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
      </>
    ),
    paneTwo: true,
    paneTwoContent: (
      <>
        <div className="right w-auto grid gap-9 grid-cols-2">
          <div className="relative">
            <div className="arrow-curve absolute -top-[240px] -z-[10] -left-[335px] rotate-[14deg]">
              <Image
                src={"/assets/images/Sign 1.svg"}
                width={1800}
                height={1200}
                alt="arrow curve"
                className="object-cover size-[700px]"
              />
            </div>
            <div className="w-[249px] h-[100px] text-white text-sm font-normal font-poppins leading-relaxed">
              Let’s Build products that Can Be accessible by anyone and also
              relevant anywhere in our world.
            </div>
            <div className="flex flex-col ml-7 relative items-center gap-5 pt-5 w-[260px] h-[283px] bg-gradient-to-tr from-[#0F171F33] from-[5.65%] to-[#5F85B17D] to-[94.35%] rounded-xl shadow_special backdrop-blur-[18px]">
              <Image
                src={"/assets/images/front-picture.png"}
                width={72}
                height={72}
                alt="A person"
                className="rounded-full"
              />
              <h2 className=" text-center text-white text-xl font-semibold font-poppins">
                Bagus Lindu
              </h2>
              <h5 className=" text-center text-white text-opacity-70 text-sm font-medium font-poppins">
                South Africa
              </h5>
              <p className="w-[220px] text-center text-white text-opacity-70 text-xs font-normal font-poppins">
                I am a professional designer, dedicated to delivering
                exceptional creations.
              </p>
              <div className="w-[75px] h-[75px] bg-gradient-to-tr from-gray-900 to-slate-500 rounded-full border-2 border-white backdrop-blur-[18px] flex items-center justify-center absolute -bottom-[14%] hover:opacity-95 ">
                <Image
                  src={"/assets/images/location-pin.svg"}
                  width={33}
                  height={33}
                  alt="location pin icon"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <div className="w-[228px] h-[303px] bg-gradient-to-tr from-[#0F171F33] from-[5.65%] to-[#5F85B17D] to-[94.35%] rounded-xl shadow_special backdrop-blur-[18px] flex flex-col items-center justify-center pt-5">
              <div className="w-[195px] h-2/3 text-white text-opacity-80 text-[15px] font-normal font-poppins leading-snug">
                Let’s Build products that will solve problems in our communities
                and make Africa and the world a better place.
              </div>
              <Image
                src={"/assets/images/Scoop.svg"}
                width={180}
                height={129}
                alt="Scoop Icon"
                className="object-contain size-2/3 scale-150"
              />
            </div>
            <div className="w-[370px] h-[172px] bg-gradient-to-tr from-[#0F171F33] from-[5.65%] to-[#5F85B17D] to-[94.35%] rounded-xl shadow_special backdrop-blur-[18px] flex p-2 justify-around items-center">
              <div className="w-[151px] h-16 flex-col justify-start items-start gap-2.5 inline-flex">
                <h3 className="text-center text-white text-[32px] font-semibold font-poppins leading-[25px]">
                  6,147
                </h3>
                <h4 className="text-center text-white text-base font-normal font-poppins leading-[25px]">
                  Are using your App
                </h4>
                <p className="text-center text-white text-opacity-70 text-xs font-normal font-poppins leading-[25px]">
                  40% of Targets met
                </p>
              </div>
              <div className="rounded-full size-[131px] p-1 flex items-center justify-center bg-gradient-to-r from-gray-600 from-40% via-41% to-white to-100%">
                <div className="flex flex-col items-center justify-center size-full rounded-full bg-gradient-to-tr from-gray-900 to-slate-500 backdrop-blur-[200px]">
                  <h3 className="text-white text-[32px] font-semibold font-poppins leading-[25px]">
                    40
                    <span className="text-[20px]">%</span>
                  </h3>
                  <p className="text-center text-white text-opacity-70 text-[11px] font-normal font-poppins leading-[25px]">
                    Activity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  };
  return (
    <main className="app relative">
      {/* <div className="animate_dot size-6 bg-white rounded-full absolute right-[31.5%]  animate-ping"></div>

      <div className="animate_dot1 size-6 bg-white rounded-full absolute right-[19.5%]  top-[50%] animate-ping delay-200"></div>

      <div className="animate_dot2 size-6 bg-white rounded-full absolute left-[27.5%]  top-[30%] animate-ping delay-400"></div>

      <div className="animate_dot3 size-6 bg-white rounded-full absolute right-[30.5%]  top-[30%] animate-ping delay-400"></div>

      <div className="animate_dot4 size-6 bg-white rounded-full absolute left-[9.5%]  top-[80%] animate-ping z-20 delay-600"></div>

      <div className="animate_dot5 size-6 bg-white rounded-full absolute right-[0.5%]  top-[60%] animate-ping z-20 delay-800"></div>

      <div className="animate_dot6 size-6 bg-white rounded-full absolute left-[0.5%]  top-[-30%] animate-ping z-20 delay-800"></div> */}

      <Suspense fallback={<Loading />}>
        <Landing
          contentClass={landingData.contentClass.join(" ")}
          paneOne=<>{landingData.paneOne}</>
          paneTwo={landingData.paneTwo}
          paneTwoContent={landingData.paneTwoContent}
        />
      </Suspense>
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
      </Suspense>
      </main>
  );
}

