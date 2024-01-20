"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sanitizePathname = (pathname) => pathname.replace(/[^a-zA-Z0-9/-]/g, "-");

const getImageData = (path) => {
  const defaultImage = {
    src: "",
    height: 1,
    width: 1,
    alt: "",
    className: "",
  };

  switch (path) {
    case "home":
      return {
        one: {
          src: "/assets/images/Magnifying glass.svg",
          height: 618,
          width: 618,
          alt: "Magnifying Glass icon",
          className: "size-[550px]",
        },
        two: {
          src: "/assets/images/Ring band.svg",
          height: 519,
          width: 519,
          alt: "Ring band icon",
          className: "size-[440px]",
        },
      };
    case "about":
      return {
        one: {
          src: "/assets/images/Camcoder icon.svg",
          height: 355,
          width: 355,
          alt: "Camcoder icon",
          className: "size-[325px]",
        },
        two: {
          src: "/assets/images/target-dynamic-color.svg",
          height: 319,
          width: 319,
          alt: "Target icon",
          className: "size-[266px]",
        },
      };
    case "services":
      return {
        one: {
          src: "/assets/images/Rubik cube.svg",
          height: 550,
          width: 294,
          alt: "2 X 2 Rubik Cube icon",
          className: "w-[250px] h-[510px]",
        },
        two: {
          src: "/assets/images/Dish.svg",
          height: 393,
          width: 442,
          alt: "Throwing Dish icon",
          className: "w-[380px] h-[340px] ",
        },
      };
    default:
      return {
        one: defaultImage,
        two: defaultImage,
      };
  }
};

const getPathAndImageData = () => {
  const pathname = usePathname();
  const sanitizedPathname = sanitizePathname(pathname);
  const pathValue =
    sanitizedPathname === "/"
      ? "home"
      : sanitizedPathname.split("/")[1].toLowerCase();
  const imageData = getImageData(pathValue);
  return { pathValue, imageData };
};

export const FooterImage1 = ({ className }) => {
  const { pathValue, imageData } = getPathAndImageData();
  console.log(pathValue);
  return (
    <div className={className}>
      <Image key={imageData.one.src} {...imageData.one} />
    </div>
  );
};

export const FooterImage2 = ({ className }) => {
  const { pathValue, imageData } = getPathAndImageData();
  return (
    <div className={className}>
      <Image key={imageData.two.src} {...imageData.two} />
    </div>
  );
};
