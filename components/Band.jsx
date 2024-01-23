import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Band = ({ className, repeatTimes, writeUpData }) => {
  const repeat = repeatTimes || 5;
  const source = writeUpData?.image.src || "/assets/images/splitter.svg";
  const altText = writeUpData?.image.alt || "Splitter? Icon";
  const { width, height } = writeUpData?.image || 45;

  return (
    <div className="">
      <div className={`flex items-center justify-center ${className}`}>
        {Array.from({ length: repeat }, (_, index) => (
          <div className="flex gap-10" key={`BRT_${uuidv4()}_${index}`}>
            <Image
              src={source}
              alt={altText}
              width={width || 45}
              height={height || 45}
            />
            <h3 className={writeUpData?.text.class}>
              {writeUpData?.text.data || "AfripulGroup"}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
