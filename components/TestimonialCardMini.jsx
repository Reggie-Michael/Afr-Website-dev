"use client";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const TestimonialCardMini = ({ rating, text, name, date, img }) => {
  const uniqueKey = "Star " + uuidv4();

  const RatingComponent = () => {
    // Convert rating to string and remove leading/trailing spaces
    const ratingStringified = rating.toString().trim();

    // Check if half star exists (rating has a decimal point)
    const halfStarExist = ratingStringified.length > 1;

    // Extract integer part of the rating (before the decimal point)
    const ratingInteger =
      typeof rating === "string" ? parseInt(rating.slice(0, 1)) : rating;

    // Calculate the number of empty stars to display
    const ratingLeft = () => {
      if (!halfStarExist) {
        return 5 - ratingInteger;
      } else {
        if (ratingStringified.slice(-1) !== "5") {
          return 5 - ratingInteger;
        } else {
          return 5 - (ratingInteger + 1);
        }
      }
    };

    // Generate JSX for full stars based on the integer part of the rating
    const fullStar = Array.from({ length: ratingInteger }, (_, index) => (
      <FontAwesomeIcon
        key={`${uniqueKey}_${index}`}
        icon={faStar}
        alt={"angle left icon"}
        className={`text-[#FDEEBE] oneOff${index + 1}`}
      />
    ));

    // Check if a half star should be displayed
    const displayHalfStar = () => {
      if (!halfStarExist) {
        return false;
      } else {
        return ratingStringified.slice(-1) === "5";
      }
    };

    // Generate JSX for a single half star if necessary
    const halfStar = displayHalfStar() && (
      <FontAwesomeIcon
        key={`${uniqueKey}_${ratingInteger}`}
        icon={faStarHalfStroke}
        alt={"angle left icon"}
        className={`text-[#FDEEBE] oneOff${ratingInteger + 1}`}
      />
    );

    // Generate JSX for empty stars based on the remaining space
    const emptyStar = Array.from({ length: ratingLeft() }, (_, index) => (
      <FontAwesomeIcon
        key={`${uniqueKey}_${ratingInteger + index}`}
        icon={farStar}
        alt={"angle left icon"}
        className={`text-[#FDEEBE] oneOff${ratingInteger + (index + 1)}`}
      />
    ));

    // Return the JSX representing the entire rating component
    return (
      <div className="text-xl gap-1.5 flex">
        {fullStar}
        {halfStar}
        {emptyStar}
      </div>
    );
  };

  return (
    <div className="p-10 flex flex-col w-[470.95px] h-[400px] bg-gradient-to-tr from-[#20202064] to-[#2f2f2f51] rounded-xl border-2 border-white border-opacity-10 backdrop-blur-[18px]">
      <div className="flex flex-col gap-5 h-[80%]">
        <RatingComponent  />
        <div className=" text-slate-50 text-base font-normal font-public-sans leading-normal">
          {text ||
            `I was ready to delete my account, but the customer service team
          reached out and helped me with my issues. I'm glad I gave them a
          chance and now I'm having a much better experience on the platform.`}
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex hover:opacity-85">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={img.className}
          />
          <div className="flex-col gap-2">
            <h4 className="text-slate-50 text-base font-semibold font-public-sans leading-normal">
              {name || "Ralph Edwards"}
            </h4>
            <div className="text-slate-400 text-sm font-normal font-public-sans leading-tight">
              {date || "April 22, 2022"}
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/images/Verified Icon.svg"
              alt="Verified Icon"
              width={16}
              height={16}
              className=""
            />
            <p className="text-slate-400 text-sm font-normal font-public-sans leading-tight">
              Verified Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardMini;
