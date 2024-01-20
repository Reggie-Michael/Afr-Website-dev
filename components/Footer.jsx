"use client";
import Image from "next/image";
import React from "react";
import BasicWriteup from "./BasicWriteup";
import { v4 as uuidv4 } from "uuid";
import BlueButton from "./BlueButton";
import NewsletterSubscribeForm from "./NewsletterSubscribeForm";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterImage1, FooterImage2 } from "./FooterImage";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-[5%] my-28 flex flex-col relative overflow-x-clip">
      {/* Styling  */}
      <div className="w-full flex -mb-2 bg-transparent ">
        {/* <div className="before w-[30%] h-[200px] bg-[#202020] border-b-[200px] border-b-[#202020] border-r-[100px] border-r-[#0d1013] rounded-tl-3xl rounded-tr-[150px] rounded-br-[20px]"></div> */}
        <div className="relative w-[35%]  bg-[#202020] h-[120px]  rounded-tl-3xl rounded-tr-2xl border-white border-[2px] border-opacity-10 border-r-0 mb-1 border-b-0  ">
          <div className="absolute w-[120%] h-full left-[15px] -top-0.5 bg-[#202020] rounded-t-3xl skew-x-[20deg] border-white border-[2px] border-opacity-10 border-l-0 border-b-0 "></div>
        </div>
      </div>
      {/* ...Content  */}
      <div className="w-full  bg-[#202020] flex flex-col rounded-b-3xl rounded-tr-3xl  pb-[5rem] z-10 gap-28 border-white border-[2px] border-opacity-10">
        <div className="flex justify-between items-start -mt-11 pr-[5%] gap-4 h-[240px]">
          <div className="w-[47.1%] pl-[5%] bg-[#202020] overflow-x-clip rounded-tr-[4rem] h-full">
            <h2 className="text-[86px] w-[110%] rounded-tr-3xl font-bold font-inter leading-[90px] backdrop-opacity-5 bg-[#202020] -tracking-[2px]">
              Let’s build together.
            </h2>
          </div>
          <div className="flex self-end items-center w-[50%] h-full ">
            <div className="w-[80%] text-white text-opacity-80 text-[19px] font-medium font-inter leading-[30px] mt-2">
              Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi
              tellus massa. Viverra ornare tortor dictum integer elementum
              laoreet proin amet. Quis nisl pellentesque egestas vel nibh
              vulputate.
            </div>
          </div>
        </div>
        <div className="px-[5%] flex items-center justify-center mb-32">
          <div className=" h-[520px] bg-[#2E2E2E] rounded-[32px] border-2 border-white border-opacity-10">
            <div className="wrap size-full flex justify-between">
              <div className="w-[45%] p-[5%] h-full gap-5 flex flex-col justify-between font-inter">
                <h4 className="text-[#838383] text-lg font-normal leading-[34px] tracking-[5.50px] uppercase">
                  Contact Us
                </h4>
                <BasicWriteup
                  key={`FooterBW_${uuidv4()}`}
                  mainClass="ml-0.5 gap-7"
                  heading={false}
                  headingClass="text-[48px] font-bold font-inter leading-[110%]"
                  headingText={`{ Let’s build the future together }`}
                  desc={true}
                  descClass={
                    "text-base text-white text-opacity-80 font-medium font-inter leading-7"
                  }
                  descText="Lorem ipsum dolor sit amet consectetur. A ut risus habitant morbi tellus massa. Viverra ornare tortor dictum integer elementum laoreet proin amet. "
                  buttonOne={false}
                  buttonTwo={false}
                />
                <BlueButton
                  content={"Start building +"}
                  className={"h-100px"}
                />
              </div>
              <div className="flex wrap h-full w-[53%] bg-[#F24E1E] rounded-3xl border-[1px] items-center justify-center border-opacity-10 border-white overflow-hidden relative">
                <Image
                  src="/assets/images/Notification_box.svg"
                  width={404}
                  height={404}
                  alt={"Notification Envelope Icon"}
                  className="size-[130%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[5%]">
          <div className="w-full flex gap-3 justify-between font-inter">
            <div className="flex w-[55%]">
              <div className="w-[65%] flex flex-col gap-3">
                <div className="h-[200px] flex flex-col gap-7">
                  <p className="opacity-70 w-[90%] text-white text-sm font-normal font-inter leading-tight">
                    Receive the most recent news and updates directly in your
                    email inbox!
                  </p>
                  <NewsletterSubscribeForm className="w-[95%] h-[50px]" />
                </div>
                <div className="w-4/5 flex flex-col gap-8">
                  <div className="flex gap-2">
                    <Link
                      href="/"
                      title="X -- formerly Twitter"
                      className="bg-[#2387C0] size-[45px] text-xl bg-opacity-10 text-opacity-70 text-white flex items-center justify-center rounded-full hover:opacity-80 hover:shadow hover:shadow-[#2386c04a]"
                    >
                      <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                    <Link
                      href="/"
                      title="Instagram Page"
                      className="bg-[#2387C0] size-[45px] text-xl bg-opacity-10 text-opacity-70 text-white flex items-center justify-center rounded-full hover:opacity-80 hover:shadow hover:shadow-[#2386c04a]"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link
                      href="/"
                      title="Facebook Page"
                      className="bg-[#2387C0] size-[45px] text-xl bg-opacity-10 text-opacity-70 text-white flex items-center justify-center rounded-full hover:opacity-80 hover:shadow hover:shadow-[#2386c04a]"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link
                      href="/"
                      title="LinkedIn Page"
                      className="bg-[#2387C0] size-[45px] text-xl bg-opacity-10 text-opacity-70 text-white flex items-center justify-center rounded-full hover:opacity-80 hover:shadow hover:shadow-[#2386c04a]"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </div>
                  <div className="opacity-60 text-white text-xs font-normal font-inter leading-[18px]">
                    &copy; {currentYear} Afripul Group. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 w-[40%] gap-5 ">
              <div className="flex flex-col gap-4 py-2">
                <h3 className="text-white uppercase text-lg font-semibold leading-tight mb-1">
                  COMPANY
                </h3>
                <Link
                  href="/about"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Our Works
                </Link>
                <Link
                  href="/blog"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Blog
                </Link>
              </div>
              <div className="flex flex-col gap-4 py-2">
                <h3 className="text-white uppercase text-lg font-semibold leading-tight mb-1">
                  FOLLOW
                </h3>
                <Link
                  title="Follow us on Instagram"
                  href="/"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Insta
                </Link>
                <Link
                  title="Follow us on LinkedIn"
                  href="/"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  LinkedIn
                </Link>
                <Link
                  title="Follow us on Facebook"
                  href="/"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Facebook
                </Link>
                <Link
                  title="Subscribe and Like us on Youtube"
                  href="/"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  Youtube
                </Link>
              </div>
              <div className="flex flex-col gap-4 py-2">
                <h3 className="text-white uppercase text-lg font-semibold leading-tight mb-1">
                  Contact
                </h3>
                <Link
                  title="Call us with this"
                  href="/"
                  className="text-white h-[30px] flex items-center capitalize text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  00123456789
                </Link>
                <Link
                  title="Email us with this"
                  href="/"
                  className="text-white h-[30px] flex items-center lowercase text-base font-normal leading-normal transition hover:opacity-80 hover:text-[15.5px] hover:pl-2 ease-in-out duration-300"
                >
                  afripul@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterImage1 className="absolute bottom-[400px] -left-1 footer_image_1 z-30" />
      <FooterImage2 className="absolute -bottom-7 -right-[1%] footer_image_2 z-30" />
    </footer>
  );
};

export default Footer;
