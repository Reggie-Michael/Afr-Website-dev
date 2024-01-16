const BasicWriteup = ({
  heading,
  headingClass,
  headingText,
  desc,
  descClass,
  descText,
  buttonOne,
  buttonOneClass,
  buttonOneText,
  buttonTwo,
  buttonTwoClass,
  buttonTwoText,
}) => {
  return (
    <div className="flex flex-col gap-10">
      {heading ? <h1 className={headingClass + " mb-2"}>{headingText}</h1> : <h2 className={headingClass + " mb-1"}>{headingText}</h2>}
      {desc && <p className={descClass}>{descText}</p>}
      <div className="button flex gap-4">
        {buttonOne && <button className={buttonOneClass}>{buttonOneText}</button>}
        {buttonTwo && <button className={buttonTwoClass}>{buttonTwoText}</button>}
      </div>
    </div>
  );
};

export default BasicWriteup;
