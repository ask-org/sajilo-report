import { useState } from "react";
import { useContentManager } from "../../../../hooks/useContentManger";
import { Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";
import { AddContentForm } from "./AddContentForm";
import { ContentRenderer } from "./contentRenderer";

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
    <div className="mx-auto bg-white rounded-lg shadow-md my-4 p-6 max-w-2xl border border-gray-200">
      <ContentRenderer content={content} onUpdate={updateContent} />

      {isAdding ? (
        <AddContentForm
          onAdd={(type) => {
            addContent(type);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      ) : (
        <Button onClick={() => setIsAdding(true)}>Add New</Button>
      )}
    </div>
  );
};

export default Section;
