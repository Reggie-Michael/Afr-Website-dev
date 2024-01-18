import React from "react";
import appIcons from "../public/assets/icons/manifest.json";
import { v4 as uuidv4 } from "uuid";

const MetaLink = () => {
  return (
    <>
      {/* Loop through the icons array and create <link> elements */}
      {appIcons.icons.map((icon, index) => (
        <link
          key={`${index.padStart(3, 0)} ${uuidv4()}`}
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
