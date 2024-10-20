import { useEffect, useState } from "react";
import Heading from "./heading"; // Adjust the import path based on your folder structure
import { TContentItem, Tsection } from "../../../../types/create-document";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section = ({ section, setSection }: SectionProps) => {
  const [content, setContent] = useState<TContentItem[]>(section.content);

  // Function to update the value of a specific content item
  const setValue = (index: number) => {
    return (value: string) => {
      const newContent = [...content];
      newContent[index].value = value;
      setContent(newContent);
    };
  };

  useEffect(() => {
    // Update the section content when the content state changes
    setSection((prev) => {
      const newSection = [...prev];
      newSection[prev.indexOf(section)].content = content;
      return newSection;
    });
  }, [content, section, setSection]);

  return (
    <div
      className={`mx-auto bg-white rounded-lg shadow-md my-4 p-6 max-w-2xl border border-gray-200`}
    >
      {/* Render content */}
      {content.map((contentItem, index) => {
        if (contentItem.type === "heading") {
          return (
            <Heading
              key={index}
              heading={contentItem.value}
              setHeading={setValue(index)} // Correctly pass the setter function
            />
          );
        }

        // You can expand this to handle other types (paragraph, figure, etc.) later
      })}
    </div>
  );
};

export default Section;
