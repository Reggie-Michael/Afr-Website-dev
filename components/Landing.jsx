import React from "react";
import Navbar from "./Navbar";

const Landing = ({contentClass, paneOne, paneTwo, paneTwoContent }) => {
  return (
    <div className={`landingContent ${contentClass} `}>
        <>{paneOne}</>
        {paneTwo && <>{paneTwoContent}</>}
      </div>
  );
};

export default Landing;
