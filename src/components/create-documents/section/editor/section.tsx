import { useState } from "react";
import { useContentManager } from "../../../../hooks/useContentManger";
import { Tsection } from "../../../../types/create-document";
import { AddContentForm } from "./AddContentForm";
import { ContentRenderer } from "./contentRenderer";
import { GoPlusCircle } from "react-icons/go";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section: React.FC<SectionProps> = ({ section, setSection }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { content, updateContent, addContent } = useContentManager(
    section,
    setSection,
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Content Area */}
        <div className="p-6">
          <ContentRenderer content={content} onUpdate={updateContent} />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Actions Area */}
        <div className="px-6 py-4 bg-gray-50">
          {isAdding ? (
            <div className="space-y-4">
              <AddContentForm
                onAdd={(type) => {
                  addContent(type);
                  setIsAdding(false);
                }}
                onCancel={() => setIsAdding(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <GoPlusCircle />
              Add Content
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
