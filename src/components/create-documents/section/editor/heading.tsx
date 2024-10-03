import React from "react";

interface HeadingProps {
  heading: string;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
}

const Heading: React.FC<HeadingProps> = ({ heading, setHeading }) => {
  return (
    <div>
      <label htmlFor="heading-input">Heading:</label>
      &nbsp;
      <input
        id="heading-input"
        type="text"
        value={heading}
        className="text-black"
        onChange={(e) => {
          setHeading(e.target.value);
        }}
        aria-label="Heading:"
      />
    </div>
  );
};

export default Heading;
