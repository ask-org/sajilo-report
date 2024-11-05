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
    <div className="mx-auto flex flex-col rounded-lg">
      <label
        htmlFor="heading-input"
        className="mb-2 text-lg font-semibold text-gray-700"
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
