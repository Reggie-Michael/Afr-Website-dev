import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

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
      <div className={`flex flex-col h-full w-[35%] justify-between  font-inter relative ${leftPaneClass}`}>
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

export const FakeDashBoard = () => {
  <div className="relative bg-white bg-opacity-5 rounded-3xl border-2 border-white border-opacity-10 backdrop-blur-2xl flex-col justify-start items-start inline-flex">
    <div className="w-[1100px] h-32 px-10 py-2.5 bg-white bg-opacity-10 border-b border-white border-opacity-20 backdrop-blur-xl justify-end items-center gap-10 inline-flex">
      <div className="p-4 bg-white bg-opacity-10 rounded-2xl shadow backdrop-blur-xl flex-col justify-start items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
              Profile Settings
            </div>
          </div>
          <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
              View Profile
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 px-[2.75px] py-[3.12px] justify-center items-center flex">
              <div className="w-[18.50px] h-[17.77px] relative">
                <div className="w-[8.47px] h-[8.47px] left-[2.53px] top-0 absolute rounded-full border border-white" />
              </div>
            </div>
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
              Explore Creators
            </div>
          </div>
          <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 px-[2.75px] py-[3.62px] justify-center items-center flex" />
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
              Manage Membership
            </div>
          </div>
          <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 pr-[2.84px] justify-start items-center flex">
              <div className="w-[26.32px] h-[26.32px] relative"></div>
            </div>
            <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
              Invite Creators
            </div>
          </div>
        </div>
        <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
            Logout
          </div>
        </div>
      </div>
      <div className="w-8 h-8 px-[3.67px] py-[3.70px] justify-center items-center flex">
        <div className="w-[24.67px] h-[24.60px] relative"></div>
      </div>
      <div className="w-8 h-8 pl-[5.60px] pr-[5.33px] pt-[2.67px] pb-[3.67px] justify-center items-center flex">
        <div className="w-[21.07px] h-[25.67px] relative">
          <div className="w-2 h-2 left-[13.07px] top-0 absolute bg-sky-500 rounded-full" />
        </div>
      </div>
      <div className="w-12 h-12 relative rounded-3xl" />
    </div>
    <div className="w-[340px] px-6 py-10 bg-white bg-opacity-10 shadow border-r border-white border-opacity-20 backdrop-blur-xl flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-12 h-12 relative bg-white rounded-lg" />
      <div className="h-6 pl-[3px] pr-[5px] py-1 bg-white rounded-xl justify-center items-center inline-flex">
        <div className="w-4 self-stretch px-[3.33px] origin-top-left -rotate-90 justify-center items-center inline-flex" />
      </div>
      <div className="w-[292px] grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
        <div className="w-[292px] p-3 bg-black bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="grow shrink basis-0 text-white text-base font-semibold font-['Inter'] leading-normal">
            Dashboard
          </div>
        </div>
        <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 px-[2.75px] py-[3.12px] justify-center items-center flex">
            <div className="w-[18.50px] h-[17.77px] relative">
              <div className="w-[8.47px] h-[8.47px] left-[2.53px] top-0 absolute rounded-full border border-white" />
            </div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
            Audience
          </div>
        </div>
        <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 px-[4.33px] py-[2.75px] justify-center items-center flex">
            <div className="w-[15.35px] h-[18.50px] relative"></div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
            Posts
          </div>
          <div className="w-6 h-6 px-px opacity-0 justify-center items-center flex">
            <div className="w-[22px] h-6 relative">
              <div className="w-[22px] h-[22px] left-0 top-[1.50px] absolute bg-sky-500 rounded" />
              <div className="left-[5.50px] top-0 absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                4
              </div>
            </div>
          </div>
          <div className="w-6 h-6 px-px justify-center items-center flex">
            <div className="w-[22px] h-6 relative">
              <div className="w-[22px] h-[22px] left-0 top-[1.50px] absolute bg-sky-500 rounded" />
              <div className="left-[5.50px] top-0 absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 pl-[3.68px] pr-[3.67px] py-[2.75px] justify-center items-center flex">
            <div className="w-[16.65px] h-[18.50px] relative"></div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
            Schedules
          </div>
          <div className="w-6 h-6 p-[2.75px] justify-center items-center flex">
            <div className="w-[18.50px] h-[18.50px] relative"></div>
          </div>
          <div className="w-6 h-6 px-px justify-center items-center flex">
            <div className="w-[22px] h-6 relative">
              <div className="w-[22px] h-[22px] left-0 top-[1.50px] absolute bg-blue-500 rounded" />
              <div className="left-[5.50px] top-0 absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                8
              </div>
            </div>
          </div>
        </div>
        <div className="w-[292px] p-3 bg-black bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 px-[2.72px] py-[2.75px] justify-center items-center flex">
            <div className="w-[18.56px] h-[18.50px] relative">
              <div className="w-[15.51px] h-[15.51px] left-0 top-[18.50px] absolute rounded-full border border-white" />
              <div className="w-[15.51px] h-[15.51px] left-[3.05px] top-[15.51px] absolute rounded-full border border-white" />
            </div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-semibold font-['Inter'] leading-normal">
            Income
          </div>
          <div className="w-6 h-6 px-[5px] opacity-0 justify-center items-center flex" />
          <div className="w-6 h-6 px-[5px] justify-center items-center flex" />
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="w-10 h-12 relative" />
            <div className="w-10 h-12 relative" />
            <div className="w-10 h-12 relative" />
            <div className="w-10 h-12 relative" />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch p-3 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
                Earning
              </div>
            </div>
            <div className="self-stretch p-3 bg-black bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-semibold font-['Inter'] leading-normal">
                Refunds
              </div>
              <div className="w-6 h-6 px-[5px] opacity-0 justify-center items-center flex" />
              <div className="w-6 h-6 px-[5px] justify-center items-center flex" />
            </div>
            <div className="self-stretch p-3 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
                Declines
              </div>
            </div>
            <div className="self-stretch p-3 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
                Payouts
              </div>
            </div>
          </div>
        </div>
        <div className="w-[292px] p-3 rounded-lg justify-start items-center gap-3 inline-flex">
          <div className="w-6 h-6 p-[2.75px] justify-center items-center flex">
            <div className="w-[18.50px] h-[18.50px] relative"></div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
            Promote
          </div>
          <div className="w-6 h-6 px-[5px] opacity-0 justify-center items-center flex" />
          <div className="w-6 h-6 px-[5px] justify-center items-center flex" />
        </div>
      </div>
      <div className="self-stretch h-[236px] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[172px] px-6 py-8 rounded-2xl border border-white flex-col justify-center items-center gap-4 flex">
          <div className="p-3 bg-blue-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 p-[5px] justify-center items-center flex">
              <div className="w-3.5 h-3.5 relative"></div>
            </div>
          </div>
          <div className="self-stretch h-11 flex-col justify-start items-center flex">
            <div className="self-stretch text-center text-white text-base font-semibold font-['Inter'] leading-normal">
              Upload new image
            </div>
            <div className="self-stretch text-center text-white text-xs font-normal font-['Inter'] leading-tight">
              Drag and drop
            </div>
          </div>
        </div>
        <div className="self-stretch p-1 bg-black bg-opacity-20 rounded-2xl justify-start items-start inline-flex">
          <div className="w-[142px] h-10 px-2.5 bg-white rounded-xl" />
          <div className="grow shrink basis-0 h-10 p-2 rounded-xl justify-center items-center gap-2 flex">
            <div className="w-6 h-6 p-px justify-center items-center flex">
              <div className="w-[22px] h-[22px] relative">
                <div className="w-3 h-3 left-[5px] top-[5px] absolute rounded-full border border-black" />
              </div>
            </div>
            <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
              Light
            </div>
          </div>
          <div className="w-[142px] h-10 px-2.5 opacity-0 bg-white rounded-xl" />
          <div className="grow shrink basis-0 h-10 p-2 rounded-xl justify-center items-center gap-2 flex">
            <div className="w-6 h-6 pl-[3px] pr-[3.58px] pt-1 pb-[2.71px] justify-center items-center flex" />
            <div className="text-white text-base font-semibold font-['Inter'] leading-normal">
              Dark
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-8 inline-flex">
      <div className="flex-col justify-start items-start gap-8 flex">
        <div className="text-white text-[40px] font-semibold font-['Inter'] leading-[48px]">
          Dashboard
        </div>
        <div className="h-[272px] p-6 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-start gap-8 flex">
          <div className="justify-start items-center gap-8 inline-flex">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
              <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[400px] h-3 bg-white bg-opacity-10 rounded" />
            <div className="w-[400px] h-3 bg-white bg-opacity-10 rounded" />
            <div className="w-[400px] h-3 bg-white bg-opacity-10 rounded" />
            <div className="w-40 h-3 bg-white bg-opacity-10 rounded" />
          </div>
          <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
        </div>
      </div>
      <div className="self-stretch h-[312px] flex-col justify-start items-start gap-4 flex">
        <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
          Apps in your plan
        </div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="grow shrink basis-0 p-6 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
                <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
          </div>
          <div className="grow shrink basis-0 p-6 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
                <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
          </div>
          <div className="grow shrink basis-0 p-6 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
                <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
              </div>
            </div>
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
              <div className="self-stretch h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="text-white text-xl font-semibold font-['Inter'] leading-normal">
          Installed
        </div>
        <div className="h-72 p-6 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
              <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
              <div className="w-3 h-3 bg-white bg-opacity-10 rounded-lg" />
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full" />
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
              <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
              <div className="w-3 h-3 bg-white bg-opacity-10 rounded-lg" />
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full" />
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-8 inline-flex">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full" />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
              <div className="w-[100px] h-3 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
              <div className="w-3 h-3 bg-white bg-opacity-10 rounded-lg" />
              <div className="w-40 h-5 bg-white bg-opacity-10 rounded" />
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="w-[120px] h-10 bg-white bg-opacity-10 rounded-3xl" />
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
