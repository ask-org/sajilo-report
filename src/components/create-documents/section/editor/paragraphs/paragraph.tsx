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
    <div className="group relative w-full max-w-2xl mx-auto my-4">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          className="w-full px-2 py-2.5 min-h-[120px] border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-base leading-relaxed transition-all duration-200 ease-in-out resize-none whitespace-pre-wrap"
          placeholder="Start typing your paragraph..."
          style={{ lineHeight: "1.6" }}
        />
      </div>

      {/* Character count */}
      <div className="absolute right-3 bottom-2 text-xs text-gray-400">
        {paragraph.length} characters
      </div>
    </div>
  );
};

export default ParagraphEditor;
