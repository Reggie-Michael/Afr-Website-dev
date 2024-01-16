import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
  buttonOneText,
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
      <img
        src={source}
        width={width}
        height={height}
        alt={alt}
        className={`${className} ${isButtonTwoHovered ? 'absolute' : ''}`}
      />
    );
  };

  return (
    <div className="flex">
      {button ? (
        <button className={buttonOneClass}>
          <PlaceIcon
            key={buttonOneBody.path}
            
            {...buttonOneBody}
          />
        </button>
      ) : (
        <div className={`${buttonOneClass}`}>
          <PlaceIcon key={buttonOneBody.path} {...buttonOneBody} />
        </div>
      )}
      {buttonTwo ? (
        <button
          className={`flex items-center justify-center ${buttonTwoClass}`}
          onMouseEnter={handleButtonTwoHover}
          onMouseLeave={handleButtonTwoLeave}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            alt={"arrow up rotated"}
            className="-rotate-45"
          />
        </button>
      ) : (
        <Link
          href={buttonTwoPath}
          className={`flex items-center justify-center ${buttonTwoClass}`}
          onMouseEnter={handleButtonTwoHover}
          onMouseLeave={handleButtonTwoLeave}
        >
          <FontAwesomeIcon
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

// **Twin Button End** //
