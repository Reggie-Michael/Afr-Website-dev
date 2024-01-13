import BasicWriteup from "@components/BasicWriteup";
import Landing from "@components/Landing";
import Image from "next/image";

export default function Home() {
  const writeUpData = {
    headingClass: [
      "text-transparent",
      "text-[85px]",
      "font-semibold",
      "font-montserrat",
      "leading-[102px]",
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
      "text-2xl",
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
      "w-[269px] h-[79px] bg-gradient-to-r from-green-600 to-emerald-500 rounded-[43px] hover:opacity-90 hover:ring-2  hover:ring-green-400 hover:to-green-700 hover:from-emerald-500",
      " text-white text-2xl font-medium font-poppins",
    ],
    buttonOneText: "Contact us",
    buttonTwoClass: [
      "w-[269px] h-[79px] bg-none flex items-center gap-3  hover:text-opacity-70 hover:ring-2 hover:ring-green-400 rounded-[43px] px-2 hover:bg-emerald-400 hover:bg-opacity-50 group",
      " text-white text-2xl font-medium font-poppins",
    ],
    buttonTwoText: (
      <>
        <div className="w-[62px] h-[62px] bg-gray-900 rounded-[86px] border-2 border-slate-500 backdrop-blur-[18px] flex items-center justify-center group-hover:bg-transparent">
          <Image
            src={"/assets/images/polygon 1.svg"}
            width={10}
            height={10}
            alt="play icon"
            className="object-contain size-2/5 object-right"
          />
        </div>
        <div className="text-white text-2xl font-medium">Watch Video</div>
      </>
    ),
  };

  const landingData = {
   
    contentClass: ["flex h-[90%] px-[7.5%] box-border home_landing relative"],
    paneOne: (
      <>
        <div className="left flex flex-col gap-14 w-3/5 mt-14">
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
          <div className="text-white text-2xl font-medium font-poppins flex gap-1">
            <Image
              src={"/assets/images/ic_outline-gpp-good.svg"}
              width={36}
              height={35}
              alt="guaranteed icon"
              // className="object-contain object-right"
            />
            Impossibility does not exist.
          </div>
        </div>
      </>
    ),
    paneTwo: false,
  };
  return (
    <main className="app">
      <Landing
        contentClass={landingData.contentClass.join(" ")}
        paneOne=<>{landingData.paneOne}</>
        paneTwo={landingData.paneTwo}
      />
    </main>
  );
}
