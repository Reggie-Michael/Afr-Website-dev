// "use client";
import { landingData, teamData } from "@app/data/aboutData";
import Loading from "@app/loading";
import { AboutBrandWorks, TeamCardMini } from "@components/AboutComponent";
import BasicWriteup from "@components/BasicWriteup";
import BlueButton from "@components/BlueButton";
import Landing from "@components/Landing";
import Partners from "@components/Partners";
import TestimonialCardMini from "@components/TestimonialCardMini";
import Image from "next/image";
import { Suspense } from "react";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  return (
    <main className="app mb-48">
      {/* Landing Page  */}
      <div className="landing-page px-[5%] mt-20 flex items-center justify-center box-border">
        <Suspense fallback={<Loading />}>
          <div className="w-full flex flex-col items-center h-[870px] gap-5 font-inter rounded-3xl about_landing ">
            <div className="w-full relative flex items-center justify-center">
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
                  Lorem ipsum dolor sit amet consectetur. Dolor vulputate in
                  cras consectetur aliquet massa. Vulputate etiam mus feugiat
                  eget. quisque dignissim vulputate turpis.
                </>
                buttonOne={false}
                buttonTwo={false}
              />
              <div className="absolute right-[19%] top-[24%]">
                <Image
                  src="/assets/images/Cursor.svg"
                  alt="Cursor"
                  width={97}
                  height={97}
                  className="size-[82px] rotate-[115deg]"
                />
              </div>
            </div>
            <BlueButton />
          </div>
        </Suspense>
      </div>
      {/* Our Partners  */}
      <div className="partners w-full flex flex-col gap-12 my-44 items-center px-[5.5%]">
        <Suspense fallback={<Loading />}>
          <Partners />
        </Suspense>
      </div>
      {/* Inputted Text  */}
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
      {/* Our Believe  */}
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
            leftPaneClass="w-[45%] pb-[2%]"
            firstPaneBottom=<>
              <div className="w-4/5 h-[45%] self-end relative px-[7.5%] py-[3%] flex flex-col justify-between  bg-white bg-opacity-5 rounded-3xl border-2 border-sky-500 backdrop-blur-2xl items-center">
                <div className="h-[60%] w-full flex flex-col gap-3 font-inter">
                  <h4 className="w-[57%] text-slate-50 text-xl font-bold  leading-[126%]">
                    Customers comments to our Services
                  </h4>
                  <p className="w-full text-slate-50 text-[15px] font-normal leading-[1.75]">
                    I was ready to delete my account, but the customer service
                    team reached out and helped me with my issues. I'm glad I
                    gave them a chance and now I'm having a much better
                    experience on the platform.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <div className="flex hover:opacity-85">
                    <Image
                      src="/assets/images/Customer-Ralph.png"
                      alt="Customer Ralph"
                      width={40}
                      height={40}
                      className="size-[42px]"
                    />
                  </div>
                  <div className="flex flex-col h-full justify-between font-public-sans">
                    <h4 className="text-slate-50 text-sm font-semibold m-0">
                      Ralph Edwards
                    </h4>
                    <div className="text-slate-400 text-[13px] font-normal">
                      April 22, 2022
                    </div>
                  </div>
                  <div className="flex gap-1 pt-0.5">
                    <div className="flex items-start ">
                      <Image
                        src="/assets/images/Verified Icon.svg"
                        alt="Verified Icon"
                        width={14}
                        height={14}
                        className="object-bottom"
                      />
                    </div>
                    <p className="text-slate-400 text-xs font-normal font-public-sans leading-tight">
                      Verified Customer
                    </p>
                  </div>
                </div>
                <div className="absolute -right-[17px] -top-[50px]">
                  <Image
                    src="/assets/images/Cursor.svg"
                    alt="Cursor"
                    width={97}
                    height={97}
                    className="size-[82px]"
                  />
                </div>
              </div>
            </>
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
                <div className="h-full w-1/2 ">
                  <div
                    className="w-full h-[60%] flex flex-col gap-6 bg-gradient-to-b from-[#212121] to-[#0094FF] to-[228.9%] rounded-[32px]  border-2 border-sky-500 p-[8%] mb-9"
                    style={{
                      boxShadow:
                        "0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <p className="text-white text-base uppercase leading-none mt-4">
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
                  <div
                    className="w-full h-[951.43px] bg-gradient-to-b from-[#212121] to-[#0094FF] rounded-[32px] flex flex-col gap-8  p-[7.5%] border-2 border-sky-500"
                    style={{
                      boxShadow:
                        "0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="flex gap-2 w-full">
                      <div className="size-3.5 bg-red-500 rounded-full shadow blur-[0.7px]" />
                      <div className="size-3.5 bg-amber-400 rounded-full shadow blur-[0.7px]" />
                      <div className="size-3.5 bg-lime-500 rounded-full shadow blur-[0.7px]" />
                    </div>
                    <div className="flex gap-4 w-full">
                      <Image
                        src="/assets/images/Intersect.svg"
                        alt="Profile Picture"
                        height={40}
                        width={40}
                        className="blur-[0.5px]"
                      />
                      <div className="font-poppins text-white font-semibold">
                        <h5 className="text-[11px] mb-1">Hello!</h5>
                        <h4 className="text-[13px]">Nagendra. Bathala</h4>
                      </div>
                    </div>
                    <hr />
                    <h4 className=" text-white text-xs font-semibold font-poppins">
                      Menu
                    </h4>
                    <ul className=" text-white text-[13px] font-medium font-poppins">
                      <li className="flex items-center gap-2">
                        <Image
                          src="/assets/images/bxs_grid-alt.svg"
                          alt="bxs:grid-alt"
                          height={25}
                          width={25}
                          className=""
                        />
                        Dashboard
                      </li>
                      <li className="flex items-center gap-2">
                        <Image
                          src="/assets/images/bxs_grid-alt.svg"
                          alt="bxs:grid-alt"
                          height={25}
                          width={25}
                          className=""
                        />
                        Dashboard
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <AboutBrandWorks
            className="h-[750px]  bg-[#202020] rounded-[32px] border-2 font-inter border-white border-opacity-10 overflow-clip"
            heading="We Brand"
            leftPaneClass="w-[37%] pr-[3%] gap-14 z-40"
            firstPaneBottom=<>
              <div className="w-[808px] h-[450px] opacity-20 bg-[#00FF79] rounded-full blur-[100px] absolute -left-[230px] -bottom-[10%]" />

              <div
                className="w-full h-[430px] flex items-center justify-center -mb-[2%] bg-neutral-700 border-2 border-emerald-500 backdrop-blur-2xl relative "
                style={{
                  background: "url(/assets/images/Stars.png) top no-repeat",
                  backgroundBlendMode: "screen",
                  backgroundColor: "#363636",
                }}
              >
                <div className="absolute z-40 -right-[100px] ">
                  <Image
                    src="/assets/images/Magic Stick.svg"
                    alt="Magic stick"
                    width={45}
                    height={450}
                    className=" w-[190px] -rotate-6"
                  />
                </div>
                <div className="p-[3%] relative w-full flex items-center justify-center h-[44%]">
                  <div className=" h-[220px] w-[90%] opacity-40 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#00FF79] border-opacity-40"></div>
                  <div className=" h-[180px] w-[80%] opacity-60 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#00FF79] border-opacity-40"></div>
                  <div className=" h-[120px] w-[70%] opacity-80 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#00FF79] border-opacity-40"></div>
                  <div className="h-[90px] w-[60%] blur-xl opacity-60 absolute bg-[#00FF79] mix-blend-screen "></div>
                  <div className="flex flex-col gap-3.5 z-10  items-center justify-center w-[68%] font-inter ">
                    <div className="w-[95%] h-[47px] flex items-center justify-center bg-gradient-to-b from-[#070707] to-[#3C3C3C] rounded-[32px]  circle before:rounded-[32px] before:bg-gradient-to-t before:from-[#00FF79] before:from-[0%] before:opacity-40 before:to-[#00ff7735] before:to-[80%]">
                      <div className="absolute -top-3 w-[103%] h-2/5 bg-[#3C3C3C] mix-blend-screen blur-md opacity-90"></div>
                      <h4 className="text-white text-base text-opacity-60 font-medium leading-[41.50px]">
                        #we are the best
                      </h4>
                    </div>
                    <div className="w-[95%] h-[47px] flex items-center justify-center bg-gradient-to-b from-[#070707] to-[#3C3C3C] rounded-[32px] border-2 border-[#00FF79]">
                      <h4 className="text-white text-base text-opacity-60 font-medium leading-[41.50px]">
                        #we create the impossible
                      </h4>
                    </div>

                    <div
                      className="w-[95%] h-[69px] flex items-center justify-center bg-gradient-to-b from-[#212121] to-[#00FF79] to-[228.9%] rounded-[32px] border-2 border-[#00FF79]"
                      style={{
                        boxShadow:
                          "0px 0px 1.3px 8px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <h4 className="text-white text-xl font-medium leading-[41.50px]">
                        #We make magic
                      </h4>
                    </div>

                    <div className="w-[95%] h-[47px] flex items-center justify-center bg-gradient-to-b from-[#070707] to-[#3C3C3C] rounded-[32px] border-2 border-[#00FF79]">
                      <h4 className="text-white text-base text-opacity-60 font-medium leading-[41.50px]">
                        #we create the impossible
                      </h4>
                    </div>
                    <div className="w-[95%] h-[47px] flex items-center justify-center bg-gradient-to-b from-[#070707] to-[#3C3C3C] rounded-[32px]  circle before:rounded-[32px] before:bg-gradient-to-b before:from-[#00FF79] before:from-[0%] before:to-[#00ff7735] before:to-[80%]  before:opacity-40">
                      <div className="absolute -bottom-3 w-[103%] h-2/5 bg-[#070707] mix-blend-screen blur-md opacity-50"></div>
                      <h4 className="text-white text-base text-opacity-60 font-medium leading-[41.50px]">
                        #we are the best
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
            rightPane=<>
              <div
                className="h-full flex-1 flex items-center justify-center z-10 bg-no-repeat border-l-2 border-l-[#00FF79]"
                style={{
                  background: "url('/assets/images/Design 1.png')",
                  backgroundSize: "cover",
                }}
              ></div>
            </>
          />
        </Suspense>
      </div>
      {/* Our Identity  */}
      <div className=" identity px-[5%] my-40 flex flex-col items-center justify-center gap-14 ">
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
          </div>
          <div className="grid grid-rows-2 grid-cols-12 gap-7 w-full">
            <div className="col-span-8 h-[454px] bg-neutral-800 flex gap-5 items-center rounded-[32px] border-2 border-white border-opacity-10 p-[5%]">
              <div className="flex flex-col gap-7 w-[60%] h-full font-inter">
                <h2 className=" text-white text-[60px] font-bold capitalize leading-[64px] mb-2">
                  Who we are
                </h2>
                <p className="text-white text-[23px] font-medium leading-9">
                  Lorem ipsum dolor sit amet consectetur. Orci tristique nibh
                  tristique pharetra. Lobortis accumsan sollicitudin
                  pellentesque hac iaculis diam mattis et. Eget sit nunc in
                  posuere integer est hac. Dignissim aliquam ornare scelerisque
                  vel pulvinar faucibus.
                </p>
              </div>
              <div className="flex items-center justify-center h-full w-[40%] relative">
                <Image
                  src="/assets/images/thumb-up-dynamic.svg"
                  alt="Thumbs up icon"
                  height={388}
                  width={388}
                  className="size-full bg-transparent z-10"
                />
                <Image
                  src="/assets/images/thumb-up-dynamic.svg"
                  alt="Thumbs up icon"
                  height={388}
                  width={388}
                  className="size-full absolute blur-3xl"
                />
              </div>
            </div>
            <div className="col-span-4 h-[454px] flex gap-5 items-center  bg-zinc-800 rounded-[32px] border-2 border-[#0093FF] p-[5%]">
              <Image
                src="/assets/images/Paint tool.svg"
                alt="Paint brush and color board icon"
                height={422}
                width={422}
                className="size-full bg-transparent z-10"
              />
            </div>
            <div className="col-span-5 h-[454px] flex gap-5 items-center  bg-zinc-800 rounded-[32px] border-2 border-[#95590D] p-[5%]">
              <Image
                src="/assets/images/huy-star-front-premium.svg"
                alt="Golden Star icon"
                height={377}
                width={377}
                className="size-full bg-transparent z-10"
              />
            </div>
            <div className="col-span-7 h-[454px] bg-neutral-800 flex gap-5 items-center rounded-[32px] border-2 border-white border-opacity-10 p-[5%] relative overflow-clip">
              <div className="absolute bg-yellow-400 rounded-full size-36 z-10 left-5 blur-[130px] opacity-45 -bottom-[12%]" />

              <div className="flex items-center justify-center h-full w-[27%] relative">
                <Image
                  src="/assets/images/Rocket.svg"
                  alt="Rocket icon"
                  height={388}
                  width={388}
                  className="size-full scale-[1.7] bg-transparent z-10"
                />
              </div>
              <div className="flex flex-col gap-7 w-[75%] justify-center h-full font-inter">
                <h2 className=" text-white text-[53px] font-bold capitalize leading-[64px] mb-2">
                  What motivates us ?
                </h2>
                <p className="text-white text-[23px] font-medium leading-9">
                  Lorem ipsum dolor sit amet consectetur. Orci tristique nibh
                  tristique pharetra. Lobortis accumsan sollicitudin
                  pellentesque hac iaculis diam mattis et. Eget sit nunc in
                  posuere integer est hac. Dignissim aliquam ornare scelerisque
                  vel pulvinar faucibus.
                </p>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
      {/* Our Teams  */}
      <div className="flex my-56 mb-80 pl-[5%] pr-[2%] overflow-x-clip">
        <div className="flex w-fit gap-24 items-center">
          <Suspense fallback={<Loading />}>
            <div className=" w-[450px] px-[2%]">
              <BasicWriteup
                mainClass="font-inter gap-10"
                heading={false}
                headingClass="text-white text-[42px] font-bold leading-[1.02] mb-[0]"
                headingText="Our creative Team"
                desc={true}
                descClass="text-white text-xl font-medium leading-9 mb-4"
                descText=<>
                  Lorem ipsum dolor sit amet consectetur.Viverra ipsum ut at
                  semper purus urna molestie in. Nisi enim volutpat id integer
                  enim in..
                </>
                buttonOne={true}
                buttonOneClass={teamData.leftPane.buttonOneClass.join(" ")}
                buttonOneProps={teamData.leftPane.buttonOneProps}
                buttonOneText=<>{teamData.leftPane.buttonOneText}</>
                buttonTwo={true}
                buttonTwoClass={teamData.leftPane.buttonTwoClass.join(" ")}
                buttonTwoProps={teamData.leftPane.buttonTwoProps}
                buttonTwoText=<>{teamData.leftPane.buttonTwoText}</>
              />
            </div>
            <div className="flex gap-5">
              {teamData.card.map((staff, index) => (
                <TeamCardMini
                  key={`AboutTeamCardMini_${uuidv4()}_${index}`}
                  rating={staff.rating}
                  name={staff.name}
                  position={staff.position}
                  placeImage={staff.placeImage}
                  // img={testimonial.img}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default About;
