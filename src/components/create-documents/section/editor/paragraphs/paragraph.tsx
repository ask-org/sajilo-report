import Button from "../../../../../ui/Button";

type ParagraphProps = {
  paragraph: string;
  setParagraph: (value: string) => void;
};

const Paragraph = ({ paragraph, setParagraph }: ParagraphProps) => {
  function removeParagraph() {
    throw new Error("Function not implemented. ");
  }
  return (
    <div className="flex items-start space-x-2 mb-3">
      <textarea
        value={paragraph}
        onChange={(e) => {
          setParagraph(e.target.value);
        }}
        className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        rows={4}
        placeholder={`Enter paragraph..`}
      />
      <Button onClick={() => removeParagraph()}>X</Button>
    </div>
  );
};

export default Paragraph;
