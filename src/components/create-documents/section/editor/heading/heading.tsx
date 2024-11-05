import React from "react";

interface HeadingProps {
  heading: string;
  setHeading: (value: string) => void;
}

const Heading: React.FC<HeadingProps> = ({ heading, setHeading }) => {
  return (
    <div className="mb-4 flex flex-col space-y-2">
      <input
        id="heading-input"
        type="text"
        value={heading}
        className="rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          setHeading(e.target.value);
        }}
        aria-label="Heading:"
        placeholder="Enter your heading here..."
      />
    </div>
  );
};

export default Heading;
