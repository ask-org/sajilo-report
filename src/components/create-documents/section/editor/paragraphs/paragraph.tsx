// components/Paragraph/ParagraphEditor.tsx
import { useState, useEffect, useRef } from "react";
import { Type } from "lucide-react";
import { RxCross2 } from "react-icons/rx";

type ParagraphProps = {
  paragraph: string;
  setParagraph: (value: string) => void;
};

const ParagraphEditor = ({ paragraph, setParagraph }: ParagraphProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onRemove = () => {
    setParagraph("");
  };

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
      <div className="absolute left-3 top-3">
        <Type
          className={`w-4 h-4 transition-colors duration-200 ${
            isFocused ? "text-blue-500" : "text-gray-400"
          }`}
        />
      </div>

      <div className="relative">
        <textarea
          ref={textareaRef}
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-6 py-2.5 min-h-[120px] border border-gray-200 rounded-lg
                   shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   bg-white text-gray-900 text-base leading-relaxed
                   transition-all duration-200 ease-in-out
                   resize-none whitespace-pre-wrap"
          placeholder="Start typing your paragraph..."
          style={{
            lineHeight: "1.6",
          }}
        />

        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-0 right-0 p-1.5 rounded-full
                     opacity-0 group-hover:opacity-100
                     hover:bg-red-50 focus:bg-red-50
                     transition-all duration-200 ease-in-out"
            aria-label="Remove paragraph"
          >
            <RxCross2 className="w-4 h-4 text-red-500" />
          </button>
        )}
      </div>

      {/* Character count */}
      <div className="absolute right-3 bottom-2 text-xs text-gray-400">
        {paragraph.length} characters
      </div>
    </div>
  );
};

export default ParagraphEditor;
