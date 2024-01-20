import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Band = ({ bandClass, repeatTimes, writeUpData }) => {
  const repeat = repeatTimes || 5;
  const source = writeUpData.image.src || "/assets/images/splitter.svg";
  const altText = writeUpData.image.alt || "Splitter? Icon";
  const { width, height } = writeUpData.image || 45;

  return (
    <div className="flex items-center justify-center">
      <div className={`${bandClass}`}>
        <Image src={source} alt={altText} width={width} height={height} />
        {Array.from({ length: repeat }, (_, index) => (
          <h3
            key={`BRT_${uuidv4()}_${index}`}
            className={writeUpData.text.class}
          >
            {writeUpData.text.data || "Afripul Group"}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Band;
