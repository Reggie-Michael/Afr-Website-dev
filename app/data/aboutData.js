// "use client";
import BasicWriteup from "@components/BasicWriteup";
// for other content except landing
import BasicLayout from "@components/Landing";
import Image from "next/image";
import BlueButton from "@components/BlueButton";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

export const teamData = {
  leftPane: {
    headingClass: ["text-[42px]", "font-bold", "font-inter", "leading-[48px]"],
    headingText: "What customers say about us.",
    descClass: ["text-xl", "font-medium", "font-inter", "leading-7"],
    descText: (
      <>
        Lorem ipsum dolor sit amet consectetur.Viverra ipsum ut at semper purus
        urna molestie in. Nisi enim volutpat id integer enim in..
      </>
    ),
    buttonOneClass: [
      "size-[55px] bg-white rounded-full border-2 border-white hover:opacity-80 hover:text-lg",
      "text-black text-xl font-medium font-inter",
    ],
    buttonOneProps: {
      title: "Prev",
      type: "button",
    },
    buttonOneText: (
      <>
        <FontAwesomeIcon
          icon={faAngleLeft}
          alt={"angle left icon"}
          className=""
          title="Prev"
        />
      </>
    ),
    buttonTwoClass: [
      "size-[55px] bg-white rounded-full border-2 border-white",
      "text-black text-xl font-medium font-inter hover:opacity-80 hover:text-lg",
    ],
    buttonTwoProps: {
      title: "Next",
      type: "button",
    },
    buttonTwoText: (
      <>
        <FontAwesomeIcon
          icon={faAngleRight}
          alt={"angle right icon"}
          className=""
          title="Next"
        />
      </>
    ),
  },
  card: [
    {
      rating: 5,
      name: "John Chika Okorie",
      position: "CEO",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/explorer-dynamic-premium.svg",
        alt: "Clock Icon",
        width: 190,
        height: 190,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Ojii Emmanuel",
      position: "Creative Director",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/huy-star-front-premium.svg",
        alt: "Golden Star Icon",
        width: 167,
        height: 167,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Prince Anumba",
      position: "Lead Software Engineer",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/eth-dynamic-premium.svg",
        alt: "2D Golden Coin Icon",
        width: 171,
        height: 171,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Modson Tande",
      position: "Lead Hardware Engineer",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/trophy-dynamic-premium.svg",
        alt: "2D Golden Trophy Icon",
        width: 165,
        height: 165,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Emmanuel Michael",
      position: "Software Engineer",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/headphone-dynamic-premium.svg",
        alt: "2D headset Icon",
        width: 175,
        height: 175,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Datit Nasir",
      position: "Marketer / Photographer",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/fav-folder-dynamic-premium.svg",
        alt: "2D Folder Icon",
        width: 177,
        height: 177,
        className: "",
      },
    },
    {
      rating: 5,
      name: "Egeleonuwa Michael",
      position: "Digital Marketer",
      img: {
        src: "/assets/images/Customer-Ralph.png",
        alt: "Customer Ralph",
        width: 40,
        height: 40,
        className: "size-[50px]",
      },
      placeImage: {
        mainClass: "",
        src: "/assets/images/huy-heart_front_premium.svg",
        alt: "2D Golden Heart Icon",
        width: 181,
        height: 181,
        className: "",
      },
    },
  ],
};
