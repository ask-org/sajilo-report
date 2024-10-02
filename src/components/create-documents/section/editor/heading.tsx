import { ChangeEvent } from "react";

type HeadingProps = {
  heading: string;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

const Heading = ({ heading, setHeading }: HeadingProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };
  return (
    <>
      <label htmlFor={heading}>Heading:</label>
      <input id={heading} type="text" onChange={onChange} value={heading} />
    </>
  );
};

export default Heading;
