import React from "react";

interface HeadingProps {
  heading: string;
  setHeading: (value: string) => void;
}

const Heading: React.FC<HeadingProps> = ({ heading, setHeading }) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label
        htmlFor="heading-input"
        className="text-lg font-semibold text-gray-700"
      >
        Heading:
      </label>
      <input
        id="heading-input"
        type="text"
        value={heading}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
