// components/Paragraph/ParagraphEditor.tsx
import { useEffect, useRef } from "react";

type ParagraphProps = {
  paragraph: string;
  setParagraph: (value: string) => void;
};

const ParagraphEditor = ({ paragraph, setParagraph }: ParagraphProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as content grows
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [paragraph]);

  return (
    <div className="group relative mx-auto my-4 w-full max-w-2xl">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          className="min-h-[120px] w-full resize-none whitespace-pre-wrap rounded-lg border border-gray-200 bg-white px-2 py-2.5 text-base leading-relaxed text-gray-900 shadow-sm transition-all duration-200 ease-in-out focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="Start typing your paragraph..."
          style={{ lineHeight: "1.6" }}
        />
      </div>

      {/* Character count */}
      <div className="absolute bottom-2 right-3 text-xs text-gray-400">
        {paragraph.length} characters
      </div>
    </div>
  );
};

export default ParagraphEditor;
