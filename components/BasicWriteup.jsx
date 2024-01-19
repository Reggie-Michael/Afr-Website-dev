const BasicWriteup = ({
  mainClass,
  heading,
  headingClass,
  headingText,
  desc,
  descWrap,
  descClass,
  descText,
  buttonOne,
  buttonOneClass,
  buttonOneProps,
  buttonOneText,
  buttonTwo,
  buttonTwoClass,
  buttonTwoProps,
  buttonTwoText,
}) => {
  return (
    <div className={`flex flex-col gap-10 ${mainClass && mainClass}`}>
      {heading ? (
        <h1 className={headingClass + " mb-2"}>{headingText}</h1>
      ) : (
        <h2 className={headingClass + " mb-1"}>{headingText}</h2>
      )}
      {desc && !descWrap ? (
        <p className={descClass}>{descText}</p>
      ) : (
        <div className={descClass}>{descText}</div>
      )}
      <div className="button flex gap-4">
        {buttonOne && (
          <button className={buttonOneClass} {...buttonOneProps}>
            {buttonOneText}
          </button>
        )}
        {buttonTwo && (
          <button className={buttonTwoClass} {...buttonTwoProps}>
            {buttonTwoText}
          </button>
        )}
      </div>
    </div>
  );
};

export default BasicWriteup;
