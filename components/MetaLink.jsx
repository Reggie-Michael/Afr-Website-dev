import React from "react";
import appIcons from "../public/assets/icons/manifest.json";

const MetaLink = () => {
  return (
    <>
      {/* Loop through the icons array and create <link> elements */}
      {appIcons.icons.map((icon, index) => (
        <link
          key={index}
          rel="icon"
          type={icon.type}
          sizes={icon.sizes}
          href={icon.src}
          density={icon.density}
        />
      ))}
    </>
  );
};



export default MetaLink;
