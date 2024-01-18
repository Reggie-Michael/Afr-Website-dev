"use client";
// import "{***}" from homeDa
import Landing from "@components/Landing";
// for other content except landing
import { Suspense } from "react";
import Loading from "@app/loading";
import Image from "next/image";
import Link from "next/link";
import Partners from "@components/Partners";
import { ServicesCard, TwinButton } from "@components/HomeComponent";
import {
  landingData,
  landingDataSv,
  twinButtonIconData,
  ourServicesData,
  testimonialWriteUpData,
} from "@app/data/homeData";
import BasicWriteup from "@components/BasicWriteup";
import TestimonialCardMini from "@components/TestimonialCardMini";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  return (
    <main className="app relative">
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
      <div className="partners w-full flex flex-col gap-12 my-24 items-center px-[5%]">
        <Suspense fallback={<Loading />}>
          <p className="text-center text-white text-opacity-80 text-xl font-medium font-montserrat leading-[34px] w-[30%]">
            Some of the companies that have trusted our working capabilities.
          </p>
          <Partners />
        </Suspense>
      </div>
      {/* Inputted Text  */}
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
      <div className="px-[5%] my-28 flex flex-col relative overflow-x-clip">
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
                    "size-[106px] rounded-full bg-yellow-400 -ml-4 z-[1] text-[#0A6597] text-3xl cursor-pointer hover:opacity-75"
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
      <div className="flex mt-56 mb-28 overflow-x-clip">
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
      <script src="/app .js"></script>
    </main>
  );
}
