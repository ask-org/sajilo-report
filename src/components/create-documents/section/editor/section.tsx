import { useEffect, useState } from "react";
import { useContentManager } from "../../../../hooks/useContentManger";
import { Tsection } from "../../../../types/create-document";
import { AddContentForm } from "./AddContentForm";
import { ContentRenderer } from "./contentRenderer";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

type TWrapperProps = {
  children: React.ReactNode;
  onRemove: () => void;
};

const Wrapper: React.FC<TWrapperProps> = ({ children, onRemove }) => {
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute z-50 top-0 right-0 p-1.5 rounded-full opacity-50 hover:opacity-100 hover:bg-red-50 focus:bg-red-50 transition-all duration-200 ease-in-out"
      >
        <RxCross2 className="w-4 h-4 text-red-500" />
      </button>
      {children}
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ section, setSection }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { content, updateContent, addContent, removeContent } =
    useContentManager(section, setSection);
  const [subSection, setSubSection] = useState<Tsection[]>([]);

  const handleRemove = () => {
    setSection((prev) => prev.filter((sec) => sec !== section));
  };

  const addSubSection = () => {
    setSubSection((prev) => [
      ...prev,
      {
        title: "New Subsection",
        content: [{ type: "heading", value: "New Subsection" }],
      },
    ]);
  };

  useEffect(() => {
    setSection((prev) => {
      const newSection = [...prev];
      newSection[prev.indexOf(section)].subsection = subSection || [];
      return newSection;
    });
  }, [section, setSection, subSection]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Wrapper onRemove={handleRemove}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            {/* Content Area */}
            <ContentRenderer
              content={content}
              onUpdate={updateContent}
              onRemove={removeContent}
            />

            {/* Subsection Area */}
            {subSection.map((subsec, index) => {
              return (
                <div className="pl-4" key={index}>
                  <Section section={subsec} setSection={setSubSection} />
                </div>
              );
            })}
            {/* subsection add button */}
            <div className="flex justify-end">
              <button
                onClick={() => addSubSection()}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <GoPlusCircle />
                subsection
              </button>
            </div>
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
      </Wrapper>
    </div>
  );
};

export default Section;
