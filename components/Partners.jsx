import Image from "next/image";
import React from "react";

const Partners = () => {
  const partnersData = [
    { path: "disney", alt: "Disney", height: "68", width: "151" },
    { path: "Cotopaxi-Black", alt: "Cotopaxi", height: "53", width: "160" },
    { path: "Scouted-Logo-Black", alt: "Scouted", height: "45", width: "171" },
    { path: "disney", alt: "Disney", height: "68", width: "151" },
    { path: "Harman-Black", alt: "Harman", height: "93", width: "177" },
    { path: "Scouted-Logo-Black", alt: "Scouted", height: "45", width: "171" },
    {
      path: "Spikeball_Horizontal_Logo_Black",
      alt: "Spikeball",
      height: "38",
      width: "193",
    },
    {
      path: "Spikeball_Horizontal_Logo_Black",
      alt: "Spikeball",
      height: "38",
      width: "193",
    },
  ];

  const PartnerImage = ({ path, alt, height, width, className }) => {
    const source = `/assets/images/${path}.svg`;

    return (
      <Image
        src={source}
        width={width}
        height={height}
        alt={`${alt} Logo- Partner`}
        className={className}
      />
    );
  };
  return (
    <div className="w-full gap-3 grid grid-cols-8 place-items-center">
      {partnersData.map((item) => (
        <div className="partner-image-container" key={item.alt}>
          <PartnerImage {...item} className={"size-[80%]"} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
