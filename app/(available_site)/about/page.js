import { landingData } from "@app/data/aboutData";
import Loading from "@app/loading";
import { AboutBrandWorks, FakeDashBoard } from "@components/AboutComponent";
import BasicWriteup from "@components/BasicWriteup";
import BlueButton from "@components/BlueButton";
import Landing from "@components/Landing";
import Partners from "@components/Partners";
import Image from "next/image";
import { Suspense } from "react";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  return (
    <main className="app">
      <div className="landing-page px-[5%] mt-20 flex items-center justify-center box-border">
        <Suspense fallback={<Loading />}>
          <div className="w-full flex flex-col items-center h-[870px] gap-5 font-inter rounded-3xl about_landing ">
            <BasicWriteup
              mainClass="w-[65%] gap-16 text-center "
              key={`AboutLandingBL_${uuidv4()}`}
              heading={true}
              headingClass={
                "text-[96px] font-bold leading-[104%] first-letter:uppercase"
              }
              headingText=<>
                Building the{" "}
                <span className="px-5 py-3 border_landing">future</span>{" "}
                with-technology <br />
                {"(<{...}>)"}
              </>
              desc={true}
              descClass={"text-3xl font-medium leading-[150%] px-5"}
              descText=<>
                Lorem ipsum dolor sit amet consectetur. Dolor vulputate in cras
                consectetur aliquet massa. Vulputate etiam mus feugiat eget.
                quisque dignissim vulputate turpis.
              </>
              buttonOne={false}
              buttonTwo={false}
            />
            <BlueButton />
          </div>
        </Suspense>
      </div>
      <div className="partners w-full flex flex-col gap-12 my-44 items-center px-[5.5%]">
        <Suspense fallback={<Loading />}>
          <Partners />
        </Suspense>
      </div>
      <div className="px-[5%] my-40 flex items-center justify-center">
        <Suspense fallback={<Loading />}>
          <div className="w-full flex flex-col items-center gap-2 font-inter">
            <BasicWriteup
              mainClass="w-[65%] gap-12 text-center"
              key={`AboutBW2_${uuidv4()}`}
              heading={false}
              headingClass={
                "text-[90px] font-bold leading-[100%] first-letter:uppercase"
              }
              headingText=<>Giving identities to businesses</>
              desc={true}
              descClass={"text-3xl font-medium leading-[150%] px-7"}
              descText=<>
                Lorem ipsum dolor sit amet consectetur. Dolor vulputate in cras
                consectetur aliquet massa. Vulputate etiam mus feugiat eget.
              </>
              buttonOne={false}
              buttonTwo={false}
            />
            <BlueButton />
          </div>
        </Suspense>
      </div>
      <div className="px-[5%] flex flex-col items-center justify-center gap-28 my-32">
        <Suspense fallback={<Loading />}>
          <AboutBrandWorks
            className="h-[750px] overflow-clip bg-neutral-800 rounded-[32px] border-2 border-white border-opacity-10"
            heading="We Create"
            firstPaneBottom=<>
              <div className="absolute -bottom-[15%] -left-[100px] scale-105">
                <div className="relative flex items-center justify-center">
                  <div className="size-[28px] bg-white bg-opacity-10 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute -right-[135px] top-[50%]" />
                  <div className="size-[20px] bg-white bg-opacity-10 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute -right-[183px] top-[70%]" />
                  <div className="size-[10px] bg-black bg-opacity-80 rounded-full shadow border-2 border-white  backdrop-blur-xl absolute -right-[185px] top-[37%]" />
                  <div className="size-[872px] opacity-10 rounded-full border-2 border-white absolute" />
                  <div className="size-[750px] opacity-10 rounded-full border-2 border-white absolute" />
                  <div className="size-[628px] opacity-10 rounded-full border-2 border-white absolute" />
                  <div className="size-[506px] opacity-10 rounded-full border-2 border-white absolute" />
                  <div className="w-[788px] h-[667px] opacity-30 bg-zinc-300 rounded-full blur-[300px] absolute" />
                  <div className="size-[384px] bg-white bg-opacity-10 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl" />
                </div>
              </div>
            </>
            rightPane=<>
              <div className="h-full flex-1 flex items-center justify-center z-10">
                <Image
                  src="/assets/images/Dashboard Final Design.png"
                  width={700}
                  height={700}
                  alt="Dashboard Design"
                  className=" size-full"
                />
              </div>
            </>
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <AboutBrandWorks
            className="h-[750px] overflow-clip bg-[#202020] rounded-[32px] border-2 font-inter border-white border-opacity-10"
            heading="We Brand"
            leftPaneClass="w-[45%]"
            firstPaneBottom=<></>
            rightPane=<>
              <div className="h-full w-[55%] flex items-center gap-8 justify-between px-[2%] ">
                <div
                  className="w-1/2 h-[90%] flex flex-col self-end bg-gradient-to-b from-[#212121] to-[#0094FF] to-[228.9%] rounded-[32px] p-[5%]  border-2 border-sky-500 overflow-clip"
                  style={{
                    boxShadow:
                      "0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="w-full h-[40%] flex flex-col gap-7 text-white text-base font-medium leading-[1.5]">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. A ut risus
                      habitant morbi tellus massa.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. A ut risus
                      habitant morbi tellus massa.
                    </p>
                  </div>
                  <div className="h-[60%] w-full flex items-center justify-center relative ">
                    <div className="size-[360px] aspect-[2/2] opacity-20 rounded-full border-2 border-[#0FC5FF] absolute" />
                    <div className="size-[300px] aspect-[2/2] opacity-20 rounded-full border-2 border-[#0FC5FF] absolute" />
                    <div className="size-[240px] aspect-[2/2] opacity-20 rounded-full border-2 border-[#0FC5FF] absolute" />
                    <div className="w-[203px] h-[182px] opacity-40 bg-[#0FC5FF] rounded-[5px] blur-[88px] absolute" />
                    <div className="size-[180px] aspect-[2/2] opacity-20 rounded-full border-2 border-[#0FC5FF] absolute" />
                    <div className="size-3.5 bg-white bg-opacity-10 opacity-80 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute right-2.5 top-[52.5%]" />
                    <div className="size-2 bg-white bg-opacity-10 opacity-80 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute -right-3 top-[62%]" />
                    <div className="size-1.5 bg-white bg-opacity-10 opacity-80 rounded-full shadow border-[1px] border-white  backdrop-blur-xl absolute -right-4 top-[42%]" />
                    <div className="size-2 bg-white bg-opacity-10 opacity-80 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute right-[42%] bottom-[22%]" />
                    <div className="size-3 bg-white bg-opacity-10 opacity-80 rounded-full shadow border-2 border-white border-opacity-20 backdrop-blur-xl absolute left-[42%] bottom-[12%]" />
                    <div className="flex items-center justify-center z-[4] size-full">
                      <Image
                        src="/assets/images/video player 2.svg"
                        alt="Video Player icon"
                        height={182}
                        width={223}
                        className="backdrop-blur-[0.5px] size-[150%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-full w-1/2 flex flex-col items-center gap-4">
                  <div
                    className="w-full h-1/2 flex flex-col gap-4 bg-gradient-to-b from-[#212121] to-[#0094FF] to-[228.9%] rounded-[32px]  border-2 border-sky-500 p-[7.5%]"
                    style={{
                      boxShadow:
                        "0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <p className="text-white text-base uppercase leading-none">
                      WE TAKE TIME TO
                    </p>
                    <h3 className="text-white text-[67px] font-normal font-inter leading-[97%] -tracking-[2px]">
                      Give <br />
                      <span className="bg-gradient-to-r from-[#0FC5FF] bg-clip-text text-transparent from-[13.64%] via-[#0CBCFF via-[46.53%] to-[#0FC5FF] to-[78.88%] font-bold">
                        the best identity
                      </span>
                    </h3>
                    <p className="text-white text-sm font-medium w-[95%]">
                      For you business to appear professional in the presence of
                      your audience.
                    </p>
                  </div>
                  <div className="w-[444px] h-[951.43px] bg-gradient-to-b from-neutral-800 to-sky-500 rounded-[32px] shadow shadow-inner border-2 border-sky-500" >
                  
                   </div>
                </div>
              </div>
            </>
          />
        </Suspense>
      </div>
    </main>
  );
};

export default About;
