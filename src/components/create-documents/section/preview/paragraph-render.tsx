type ParagraphRendererProps = {
  paragraph: string;
};
const ParagraphRender = ({ paragraph }: ParagraphRendererProps) => {
  // Split the paragraph into lines and map each line to a div
  const lines = paragraph.split("\n");

  return (
    <div className={`prose max-w-none`}>
      {lines.map((line, index) => (
        <div
          key={index}
          className={`leading-relaxed text-gray-700 ${line.trim() === "" ? "h-4" : ""}`}
        >
          {line.trim() === "" ? "\u00A0" : line}
        </div>
      ))}
    </div>
  );
};

export default ParagraphRender;
