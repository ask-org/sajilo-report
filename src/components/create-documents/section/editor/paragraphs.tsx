import React from "react";
import Button from "../../../../ui/Button";

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

  const removeParagraph = (index: number) => {
    const newParagraphs = [...paragraphs];
    newParagraphs.splice(index, 1);
    setParagraphs(newParagraphs);
  };

  const updateParagraph = (index: number, value: string) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  return (
    <div className="flex flex-col rounded-lg  mx-auto">
      <label
        htmlFor="heading-input"
        className="text-lg font-semibold text-gray-700 mb-2"
      >
        Paragraphs:
      </label>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="flex items-start space-x-2 mb-3">
          <textarea
            value={paragraph}
            onChange={(e) => {
              updateParagraph(index, e.target.value);
            }}
            aria-label={`Paragraph ${index + 1}:`}
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows={8}
            placeholder={`Enter paragraph ${index + 1}...`}
          />
          <Button
            onClick={() => removeParagraph(index)}
            aria-label={`Remove paragraph ${index + 1}`}
          >
            X
          </Button>
        </div>
      ))}
      <div>
        <Button onClick={addNewParagraph}>Add New Paragraph</Button>
      </div>
    </div>
  );
};

export default Paragraphs;
