import { useEffect, useState } from "react";
import Button from "../../../../../ui/Button";

type ParagraphProps = {
  index: number;
  paragraphs: string[];
  setParagraphs: (value: string[]) => void;
};

const Paragraph = ({ index, paragraphs, setParagraphs }: ParagraphProps) => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    setData(paragraphs[index]);
  }, [paragraphs, index]);

  const changeData = (value: string) => {
    setData(value);
    updatedData(value); // Pass value directly to avoid stale data
  };

  function updatedData(value: string) {
    const newParagraph = [...paragraphs];
    newParagraph[index] = value; // Update with the latest value
    setParagraphs(newParagraph);
  }

  function removeParagraph(index: number) {
    const newParagraph = [...paragraphs];
    newParagraph.splice(index, 1); // Remove paragraph by index
    setParagraphs(newParagraph);
  }

  return (
    <div key={index} className="flex items-start space-x-2 mb-3">
      <textarea
        value={data}
        onChange={(e) => {
          changeData(e.target.value);
        }}
        aria-label={`Paragraph ${index + 1}:`}
        className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        rows={4}
        placeholder={`Enter paragraph ${index + 1}...`}
      />
      <Button
        onClick={() => removeParagraph(index)}
        aria-label={`Remove paragraph ${index + 1}`}
      >
        X
      </Button>
    </div>
  );
};

export default Paragraph;
