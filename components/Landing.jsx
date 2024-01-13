import React from "react";
import Navbar from "./Navbar";

const Landing = ({contentClass, paneOne, paneTwo, paneTwoContent }) => {
  return (
    <div className={contentClass && contentClass + "landingContent"}>
        <>{paneOne}</>
        {paneTwo && <>{paneTwoContent}</>}
      </div>
  );
};

export default Landing;
