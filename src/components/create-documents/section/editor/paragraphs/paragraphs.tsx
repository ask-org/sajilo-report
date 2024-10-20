import React from "react";
import Button from "../../../../../ui/Button";
import Paragraph from "./paragraph";

interface ParagraphsProps {
  paragraphs: string[];
  setParagraphs: (value: string[]) => void;
}

const Paragraphs: React.FC<ParagraphsProps> = ({
  paragraphs,
  setParagraphs,
}) => {
  const addNewParagraph = () => {
    setParagraphs([...paragraphs, ""]);
  };

  return (
    <div className="flex flex-col rounded-lg  mx-auto">
      <label
        htmlFor="heading-input"
        className="text-lg font-semibold text-gray-700 mb-2"
      >
        Paragraphs:
      </label>
      {paragraphs.map((_, index) => (
        <Paragraph
          index={index}
          key={index}
          paragraphs={paragraphs}
          setParagraphs={setParagraphs}
        />
      ))}
      <div>
        <Button onClick={addNewParagraph}>Add New Paragraph</Button>
      </div>
    </div>
  );
};

export default Paragraphs;
