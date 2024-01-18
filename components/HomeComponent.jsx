import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const HomeComponent = () => {
  return <div>HomeComponent</div>;
};

// **Twin Button Start** //

export const TwinButton = ({
  button,
  buttonOneClass,
  buttonOneBody,
  buttonTwo,
  buttonTwoClass,
  buttonTwoPath,
}) => {
  const [isButtonTwoHovered, setIsButtonTwoHovered] = useState(false);

  const handleButtonTwoHover = () => {
    setIsButtonTwoHovered(true);
  };

  const handleButtonTwoLeave = () => {
    setIsButtonTwoHovered(false);
  };

  const PlaceIcon = ({ path, alt, height, width, className }) => {
    const source = `/assets/images/${path}.svg`;

    return (
      <Image
        src={source}
        width={width}
        height={height}
        alt={alt}
        className={`${className} ${isButtonTwoHovered ? "absolute" : ""}`}
      />
    );
  };

  return (
    <div className="flex">
      {button ? (
        <button key={`TwinButtonButton_${uuidv4()}`} className={buttonOneClass}>
          <PlaceIcon
            key={`TwinButtonIcon_${uuidv4()}`}
            {...buttonOneBody}
          />
        </button>
      ) : (
        <div className={`${buttonOneClass}`}>
          <PlaceIcon
            key={`TwinButtonIcon_${uuidv4()}`}
            {...buttonOneBody}
          />
        </div>
      )}
      {buttonTwo ? (
        <button
          key={`TwinButtonButton_${uuidv4()}`}
          className={`flex items-center justify-center ${buttonTwoClass}`}
          onMouseEnter={handleButtonTwoHover}
          onMouseLeave={handleButtonTwoLeave}
        >
          <FontAwesomeIcon
            key={`TwinButtonIcon_${uuidv4()}`}
            icon={faArrowRight}
            alt={"arrow up rotated"}
            className="-rotate-45"
          />
        </button>
      ) : (
        <Link
          key={`TwinButtonLink_${uuidv4()}`}
          href={buttonTwoPath}
          className={`flex items-center justify-center ${buttonTwoClass}`}
          onMouseEnter={handleButtonTwoHover}
          onMouseLeave={handleButtonTwoLeave}
        >
          <FontAwesomeIcon
            key={`TwinButtonIcon_${uuidv4()}`}
            icon={faArrowRight}
            alt={"arrow up rotated"}
            className="-rotate-45"
          />
        </Link>
      )}
    </div>
  );
};

TwinButton.propTypes = {
  button: PropTypes.bool,
  buttonOneClass: PropTypes.string,
  buttonOneBody: PropTypes.shape({
    path: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
  }),
  buttonTwo: PropTypes.bool,
  buttonTwoClass: PropTypes.string,
  buttonTwoPath: PropTypes.string,
};

export const ServicesCard = ({ heading, desc, icon, path }) => {
  const { buttonOneClass, buttonOneBody } = icon;
  return (
    <div className=" h-[285px] bg-[#2E2E2E] rounded-[32px] border-2 border-white border-opacity-10 text-white font-inter p-[7.5%] flex gap-14 ">
      <div className="group">
        <TwinButton
          key={`ServiceCardTB_${uuidv4()}`}
          button={false}
          buttonOneClass={`${buttonOneClass}`}
          buttonOneBody={{ ...buttonOneBody }}
          buttonTwo={false}
          buttonTwoClass={
            // "size-[106px] rounded-full  text-3xl cursor-pointer hover:opacity-75"
            "size-[60px] rounded-full border-2 border-white text-3xl cursor-pointer hover:opacity-75 hover:shadow hover:shadow-white hover:border-opacity-60"
          }
          buttonTwoPath={`/services/${path}`}
        />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className=" text-xl font-bold leading-normal">
          {heading || "{ Web Design & Development }"}
        </h3>
        <p className=" text-white text-opacity-80 text-lg font-normal font-inter leading-[27px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.shape({
    buttonOneClass: PropTypes.string,
    buttonOneBody: PropTypes.shape({
      path: PropTypes.string,
      alt: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
      className: PropTypes.string,
    }),
  }),
};
// **Twin Button End** //
