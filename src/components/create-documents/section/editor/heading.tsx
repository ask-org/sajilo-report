import React from "react";

interface HeadingProps {
  heading: string;
  setHeading: (value: string) => void;
}

const Heading: React.FC<HeadingProps> = ({ heading, setHeading }) => {
  return (
    <div>
      <label htmlFor="heading-input">Heading:</label>
      <input
        id="heading-input"
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        aria-label="Heading:"
      />
    </div>
  );
};

export default Heading;
