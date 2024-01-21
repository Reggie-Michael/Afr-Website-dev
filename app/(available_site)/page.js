"use client";
// import "{***}" from homeDa
import Landing from "@components/Landing";
// for other content except landing
import { Suspense } from "react";
import Loading from "@app/loading";
import Image from "next/image";
import Link from "next/link";
import Partners from "@components/Partners";
import {
  PortfolioCard,
  ServicesCard,
  TwinButton,
} from "@components/HomeComponent";
import {
  landingData,
  landingDataSv,
  twinButtonIconData,
  ourServicesData,
  testimonialWriteUpData,
  worksData,
  yesUsData,
} from "@app/data/homeData";
import BasicWriteup from "@components/BasicWriteup";
import TestimonialCardMini from "@components/TestimonialCardMini";
import { v4 as uuidv4 } from "uuid";
import Script from "next/script";
import { FooterImage1, FooterImage2 } from "@components/FooterImage";

export default function Home() {
  return (
    <main className="app">
      {/* Landing Page  */}
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
      {/* Our Partners  */}
      <div className="partners w-full flex flex-col gap-14 my-28 items-center px-[5%]">
        <Suspense fallback={<Loading />}>
          <p className="text-center text-white text-opacity-80 text-xl font-medium font-montserrat leading-[34px] w-[30%]">
            Some of the companies that have trusted our working capabilities.
          </p>
          <Partners />
        </Suspense>
      </div>
      {/* Inputted Text  */}
      <div className="flex gap-7 font-inter px-[5%] my-44">
        <Suspense fallback={<Loading />}>
          <div className="w-3/5  text-[54px] font-bold leading-[64px]">
            Lorem ipsum dolor sit amet consectetur. Amet tincidunt ut aliquam
            commodo in arcu enim. Sem metus auctor ultrices risus consectetur
            mauris.
          </div>
          <div className="flex flex-col w-2/5 gap-14">
            <div className=" text-opacity-80 text-white text-xl font-medium leading-8">
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
                buttonOneBody={twinButtonIconData.redirect}
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
      {/* Our Services  */}
      <div className="px-[5%] my-36 flex flex-col relative overflow-x-clip">
        <Suspense fallback={<Loading />}>
          {/* Styling  */}
          <div className="w-full flex -mb-2 bg-transparent ">
            {/* <div className="before w-[30%] h-[200px] bg-[#202020] border-b-[200px] border-b-[#202020] border-r-[100px] border-r-[#0d1013] rounded-tl-3xl rounded-tr-[150px] rounded-br-[20px]"></div> */}
            <div className="relative w-[30%]  bg-[#202020] h-[120px]  rounded-tl-3xl rounded-tr-2xl border-white border-[2px] border-opacity-10 border-r-0 mb-1 border-b-0  ">
              <div className="absolute w-[120%] h-full left-[15px] -top-0.5 bg-[#202020] rounded-t-3xl skew-x-[20deg] border-white border-[2px] border-opacity-10 border-l-0 border-b-0 "></div>
            </div>
          </div>
          {/* ...Content  */}
          <div className="w-full  bg-[#202020] flex flex-col rounded-b-3xl rounded-tr-3xl  pb-[5rem] z-10 gap-24 border-white border-[2px] border-opacity-10">
            <div className="flex justify-between items-start -mt-12 pr-[5%]">
              <div className="w-[40.25%] pl-[5%] bg-[#202020] overflow-x-clip rounded-tr-[4rem]">
                <h2 className="text-[86px] w-[110%] rounded-tr-3xl font-bold font-inter leading-[90px] backdrop-opacity-5 bg-[#202020]">
                  Our <br />
                  Services.
                </h2>
              </div>
              <div className="self-end group ">
                <TwinButton
                  button={false}
                  buttonOneClass={
                    "size-[106px] bg-sky-500 rounded-full flex items-center justify-center group-hover:opacity-85 hover:opacity-95 relative"
                  }
                  buttonOneBody={twinButtonIconData.ourServices}
                  buttonTwo={false}
                  buttonTwoClass={
                    "size-[106px] rounded-full bg-yellow-400 -ml-4 z-[1] text-[#0A6597] text-4xl cursor-pointer hover:opacity-75"
                  }
                  buttonTwoPath="/services"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 w-full px-[4%]">
              {ourServicesData.map((service, index) => (
                <ServicesCard
                  key={`HomeServiceData_${uuidv4()}_${index}`}
                  icon={service.icon}
                  {...service}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-[15%] -right-4 z-30">
            <Image
              src="/assets/images/bulb.svg"
              width={404}
              height={404}
              alt={"Bulb? Icon"}
              className=" delay-0 rotate-0 animate-bulb"
            />
          </div>
        </Suspense>
      </div>
      {/* Testimonials */}
      <div className="flex mt-56 mb-28 overflow-x-clip testimonials">
        <div className="flex w-fit gap-5 ">
          <Suspense fallback={<Loading />}>
            <div className="w-[600px] pl-[7.5%] pr-[5%]">
              <BasicWriteup
                heading={false}
                headingClass={testimonialWriteUpData.leftPane.headingClass.join(
                  " "
                )}
                headingText=<>{testimonialWriteUpData.leftPane.headingText}</>
                desc={true}
                descClass={testimonialWriteUpData.leftPane.descClass.join(" ")}
                descText=<>{testimonialWriteUpData.leftPane.descText}</>
                buttonOne={true}
                buttonOneClass={testimonialWriteUpData.leftPane.buttonOneClass.join(
                  " "
                )}
                buttonOneProps={testimonialWriteUpData.leftPane.buttonOneProps}
                buttonOneText=<>
                  {testimonialWriteUpData.leftPane.buttonOneText}
                </>
                buttonTwo={true}
                buttonTwoClass={testimonialWriteUpData.leftPane.buttonTwoClass.join(
                  " "
                )}
                buttonTwoProps={testimonialWriteUpData.leftPane.buttonTwoProps}
                buttonTwoText=<>
                  {testimonialWriteUpData.leftPane.buttonTwoText}
                </>
              />
            </div>
            <div className="flex gap-5">
              {testimonialWriteUpData.card.map((testimonial, index) => (
                <TestimonialCardMini
                  key={`HomeTestimonialCard_${uuidv4()}_${index}`}
                  rating="3.5"
                  img={testimonial.img}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
      {/* Our Works  */}
      <div className="px-[5%] mt-40 mb-12 flex flex-col relative overflow-x-clip">
        <Suspense fallback={<Loading />}>
          <div className="w-full  bg-[#202020] flex flex-col rounded-3xl  p-[5%] z-10 gap-24 border-white border-[2px] border-opacity-10">
            <div className="flex justify-between items-start font-inter">
              <h2 className="text-[96px] font-bold leading-[110px]">
                Our <br />
                Works.
              </h2>
              <div className="flex self-end items-center justify-between group w-[60%] h-full">
                <div className="w-[72%] text-white text-opacity-80 text-[19px] font-medium font-inter leading-[30px] group-hover:opacity-85 hover:opacity-95">
                  Lorem ipsum dolor sit amet consectetur. A ut risus habitant
                  morbi tellus massa. Viverra ornare tortor dictum integer
                  elementum laoreet proin amet. Quis nisl pellentesque egestas
                  vel nibh vulputate.
                </div>
                <Link
                  href="/portfolio"
                  className="bg-[#0093FF] size-[110px] rounded-full border-2 hover:opacity-85 break-words flex items-center justify-center text-white text-opacity-80 border-[#0095fff1] text-[19px] font-medium p-9 leading-[1.6]"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className=" h-[624px] bg-[#2E2E2E] rounded-[32px] border-2 border-white border-opacity-10">
              {worksData.data.map((works, index) => (
                <PortfolioCard
                  key={`PortfolioCard_${uuidv4()}_${index}`}
                  mainClass={worksData.mainClass}
                  works={works}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Suspense>
      </div>
      {/* Why Us?  */}
      <div className="px-[5%] flex flex-col relative overflow-x-clip">
        <Suspense fallback={<Loading />}>
          <div className="w-full  bg-[#202020] flex flex-col rounded-3xl  p-[5%] z-10 gap-24 border-white border-[2px] border-opacity-10">
            <div className="flex justify-between items-start font-inter">
              <h2 className="text-[90px] font-bold leading-[110px] w-[60%]">
                Why you should choose us
              </h2>
              <div className="flex items-center justify-end ">
                <TwinButton
                  key={`YesUsTB_${uuidv4()}`}
                  button={false}
                  buttonOneClass={
                    "size-[120px] bg-[#2B2D5A] rounded-full flex items-center justify-center hover:opacity-85 relative group"
                  }
                  buttonOneBody={yesUsData.headingIcon.first}
                  buttonTwo={true}
                  buttonTwoClass={
                    "size-[120px] rounded-full bg-[#0094FF] -ml-4 z-[1] hover:opacity-85 group "
                  }
                  buttonTwoPath="0"
                  buttonTwoBody={yesUsData.headingIcon.second}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 relative gap-4">
              {/* First  */}
              <div className="h-[1146px] p-[4%] bg-gradient-to-b flex flex-col items-center justify-between from-zinc-800 to-zinc-800 rounded-[32px] border-2 border-white border-opacity-10">
                <div className="p-[5%] font-inter w-full flex flex-col gap-7">
                  <div className="size-[80px] bg-[#0093FF] text-[#0093FF] text-4xl bg-opacity-20 flex items-center justify-center rounded-full hover:opacity-85">
                    <h3 className=" font-bold font-inter">01</h3>
                  </div>
                  <BasicWriteup
                    key={`YesUsHeadindBW_${uuidv4()}`}
                    heading={false}
                    headingClass={
                      "text-white text-5xl font-bold leading-[70px] mb-0"
                    }
                    headingText="Creativity at the Core:"
                    desc={true}
                    descClass={
                      "text-xl font-medium leading-[42.50px] text-white text-opacity-80"
                    }
                    descWrap={true}
                    descText=<>
                      <div className="flex flex-col gap-6">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Auctor mi
                          feugiat et placerat volutpat dictumst. At aliquam
                          viverra turpis sollicitudin orci odio massa facilisi
                          quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Auctor mi
                          feugiat et placerat volutpat dictumst.
                        </p>
                      </div>
                    </>
                    buttonOne={false}
                    buttonTwo={false}
                  />
                </div>
                <div className="p-[3%] relative w-full flex items-center justify-center h-[44%]">
                  <div className=" h-[260px] w-full opacity-60 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#0094FF] border-opacity-40"></div>
                  <div className=" h-[220px] w-[90%] opacity-60 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#0094FF] border-opacity-40"></div>
                  <div className=" h-[180px] w-[80%] opacity-80 absolute bg-gradient-to-b from-[#1E1E1E] from-[0%] to-[#3C3C3C] to-[100%] rounded-[32px] border-2 border-[#0094FF] border-opacity-40"></div>
                  <div className="h-[150px] w-[70%] blur-xl opacity-60 absolute bg-[#0094FF] mix-blend-screen "></div>
                  <div className="flex flex-col gap-5 z-10  items-center justify-center w-[78%]">
                    <div className="h-[130px] w-[90%] relative opacity-80 text-opacity-20 flex flex-col items-center justify-center rounded-[32px] border-2 border-[#0095ff6e] border-t-[#45454598] bg-gradient-to-t from-[#070707] from-[0%] to-[#3C3C3C] to-[100%] border-opacity-25 ">
                      <div className="flex items-end justify-center absolute h-1/2 -top-1 w-[102%] bg-[#28272aec] backdrop-blur-[1px]  border-x-2 rounded-t-[36px] border-x-white border-opacity-5 "></div>

                      <h4 className="text-white text-[28px] font-medium leading-[129.688%] z-10 opacity-45">
                        #We are the best
                      </h4>
                    </div>
                    <div
                      className="h-[130px] w-full flex flex-col gap-1 justify-center items-center font-inter rounded-[32px] border-2 border-[#0094FF] bg-gradient-to-b from-[#212121] from-[0%] to-[#0094FF] to-[228.9%]"
                      style={{
                        boxShadow:
                          "0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <h4 className="text-white text-[28px] font-medium leading-[129.688%] ">
                        #We are the best
                      </h4>
                      <div className="flex gap-3 items-center justify-center">
                        <div className="size-2 rounded-full bg-white bg-opacity-70"></div>
                        <p className="text-white text-opacity-60 text-base font-medium font-inter">
                          Over 300 customers satisfied
                        </p>
                      </div>
                    </div>
                    <div className="h-[130px] w-[90%] relative opacity-80 text-opacity-20 flex flex-col items-center justify-center rounded-[32px] border-2 border-[#0095ff6e] border-b-[#3C3C3C] bg-gradient-to-t from-[#070707] from-[0%] to-[#3C3C3C] to-[100%] border-opacity-25 border-t-opacity-40 ">
                      <h4 className="text-white text-[28px] font-medium leading-[129.688%] z-10 opacity-45">
                        #We are the best
                      </h4>
                      <div className="flex items-end justify-center absolute h-1/2 -bottom-1 w-[102%] bg-[#28272ae6] backdrop-blur-[1px]  border-x-2 rounded-b-[36px]  border-x-white border-opacity-5 "></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second  */}
              <div className=" h-[1146px] flex flex-col gap-10 ">
                <div className="w-full h-[80%] bg-[#2F2F2F] flex flex-col gap-2 rounded-[32px] border-2 border-white border-opacity-10">
                  <div className=" h-2/5 flex flex-col gap-5 items-center justify-center bg-[#303234]  rounded-[32px] border-b-2 border-white border-opacity-10">
                    <div className="w-4/5 flex p-4 justify-between rounded-2xl items-center styled-shadow">
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-lg "></div>
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-xl  flex items-center justify-center">
                        <Image
                          src="/assets/images/Union.svg"
                          alt="angle right"
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                    <div className="w-4/5 flex p-4 justify-between rounded-2xl items-center styled-shadow">
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-lg "></div>
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-xl  flex items-center justify-center">
                        <Image
                          src="/assets/images/Union.svg"
                          alt="angle right"
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                    <div className="w-4/5 flex p-4 justify-between rounded-2xl items-center styled-shadow">
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-lg "></div>
                      <div className="size-6 bg-[#303234] rounded-full shadow-[#434343] border-opacity-15 border-2 border-[#747474] shadow-xl  flex items-center justify-center">
                        <Image
                          src="/assets/images/Union.svg"
                          alt="angle right"
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-[7.5%] font-inter w-full flex flex-col gap-7">
                    <div className="size-[80px] bg-[#0093FF] text-[#0093FF] text-4xl bg-opacity-20 flex items-center justify-center rounded-full hover:opacity-85">
                      <h3 className=" font-bold font-inter">02</h3>
                    </div>
                    <BasicWriteup
                      key={`YesUsHeadindBW2_${uuidv4()}`}
                      heading={false}
                      headingClass={
                        "text-white text-5xl font-bold leading-[60px] mb-0"
                      }
                      headingText="Creativity at the Core:"
                      desc={true}
                      descClass={
                        "text-xl font-medium leading-[42.50px] text-white text-opacity-80"
                      }
                      descWrap={true}
                      descText=<>
                        <div className="flex flex-col gap-6">
                          <p>
                            Lorem ipsum dolor sit amet consectetur. Auctor mi
                            feugiat et placerat volutpat dictumst. At aliquam
                            viverra turpis sollicitudin orci odio massa.
                          </p>
                        </div>
                      </>
                      buttonOne={false}
                      buttonTwo={false}
                    />
                  </div>
                </div>
                <div className=" h-[311px] p-[2%] flex flex-col relative items-center gap-4 justify-center bg-gradient-to-l from-[#214363] from-[-29.61%] to-[#0F213A] to-[51.66%] rounded-[32px] border-2 border-sky-700">
                  <p className="text-white text-lg font-medium font-inter leading-tight w-4/5">
                    We are here to
                  </p>
                  <h3 className="text-white text-[76px] font-normal font-inter leading-[97%] -tracking-[2px]">
                    Create change <br />
                    <span className="change-w-design font-bold">
                      with design.
                    </span>
                  </h3>
                  <div className="absolute flex top-[55px] -right-[50px]">
                    <Image
                      src="/assets/images/Screw-Clip.svg"
                      alt="Clip With screw icon"
                      width={260}
                      height={230}
                      className=""
                    />
                  </div>
                </div>
              </div>
              {/* Third  */}
              <div className="col-span-2 relative px-[5%] flex gap-14 row-start-2 h-[570px] bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-[32px] border-2 border-white border-opacity-10">
                <div className="absolute flex items-center justify-center -left-[200px] -top-[190px] z-30">
                  <Image
                    src="/assets/images/bonut.svg"
                    alt="Ribbon? icon"
                    height={380}
                    width={380}
                  />
                </div>
                <div className="h-full font-inter w-1/2 flex flex-col gap-7">
                  <div className="size-[80px] mt-[10%] bg-[#0093FF] text-[#0093FF] text-4xl bg-opacity-20 flex items-center justify-center rounded-full hover:opacity-85">
                    <h3 className="font-bold font-inter">03</h3>
                  </div>
                  <BasicWriteup
                    key={`YesUsHeadindBW_${uuidv4()}`}
                    heading={false}
                    headingClass={
                      "text-white text-5xl font-bold leading-[70px] mb-0"
                    }
                    headingText="Creativity at the Core:"
                    desc={true}
                    descClass={
                      "text-xl font-medium leading-[42.50px] text-white text-opacity-80"
                    }
                    descWrap={true}
                    descText=<>
                      <div className="flex flex-col gap-6">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Auctor mi
                          feugiat et placerat volutpat dictumst. At aliquam
                          viverra turpis sollicitudin orci odio massa.Lorem
                          ipsum dolor sit amet consectetur. Auctor mi feugiat et
                          placerat volutpat dictumst.
                        </p>
                      </div>
                    </>
                    buttonOne={false}
                    buttonTwo={false}
                  />
                </div>
                <div className="relative h-full w-1/2 flex items-center justify-center overflow-y-clip">
                  <div className="size-[600px] opacity-40 absolute bg-gradient-to-b from-stone-900 to-neutral-700 rounded-full border-2 border-sky-500 border-opacity-60"></div>
                  <div className="size-[520px] opacity-40 absolute bg-gradient-to-b from-stone-900 to-neutral-700 rounded-full border-2 border-sky-500 border-opacity-60"></div>
                  <div className="size-[420px] opacity-40 absolute bg-gradient-to-b from-stone-900 to-neutral-700 rounded-full border-2 border-sky-500 border-opacity-60"></div>
                  <div className="size-[330px] blur-2xl opacity-60 absolute bg-[#0094FF] rounded-full mix-blend-screen "></div>
                  <div
                    className="size-[320px]  z-10 flex flex-col gap-7 justify-center items-center font-inter rounded-full border-2 border-[#0094FF] bg-gradient-to-b from-[#1E1E1E] from-[35.67%] to-[#0094FF] to-[161.15%]"
                    style={{
                      boxShadow:
                        "0px 4px 19.4px 9px rgba(0, 0, 0, 0.15), 0px 0px 1.3px 10px rgba(0, 23, 39, 0.28) inset",
                    }}
                  >
                    <h3 className="text-white text-7xl font-bold leading-[41.50px]">
                      #36
                    </h3>
                    <div className="text-center text-white text-xl font-medium leading-[25px]">
                      Satisfied <br />
                      Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
      {/* 
     
      {/* <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        onLoad={() => {
          console.log("ready");
        }}
      ></Script> */}
      {/* <FooterImage1 className="absolute bottom-[200px] -left-[5%] z-30" />
      <FooterImage2 className="absolute -bottom-[200px] -right-[1%] z-30" /> */}
      <Script id="jqueryMin" src="/js/jquery-3.7.1.min.js" />
      <Script id="externalScript" src="/js/index.js" />
    </main>
  );
}
