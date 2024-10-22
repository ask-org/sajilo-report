import { useEffect, useState } from "react";
import Heading from "./heading"; // Adjust the import path based on your folder structure
import {
  TContentItem,
  TFigure,
  Tsection,
} from "../../../../types/create-document";
import Paragraph from "./paragraphs/paragraph";
import Button from "../../../../ui/Button";
import Figure from "./image/Figure";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section = ({ section, setSection }: SectionProps) => {
  const [content, setContent] = useState<TContentItem[]>(section.content);
  const [isAdding, setIsAdding] = useState(false); // State to toggle dropdown visibility
  const [newContentType, setNewContentType] = useState<string>(""); // State to store selected content type

  const setHeading = (index: number) => {
    return (value: string) => {
      const newContent = [...content];
      newContent[index].value = value;
      setContent(newContent);
    };
  };
  const setParagraph = (index: number) => {
    return (value: string) => {
      const newContent = [...content];
      newContent[index].value = value;
      setContent(newContent);
    };
  };

  const setFigure = (index: number) => {
    return (value: TFigure) => {
      const newContent = [...content];
      newContent[index].value = value;
      setContent(newContent);
    };
  };

  const addSection = (type: string) => {
    const emptyHeading: TContentItem = { type: "heading", value: "" };
    const emptyParagraph: TContentItem = { type: "paragraph", value: "" };
    const emptyFigure: TFigure = { src: "", caption: "" };
    if (type === "heading") {
      setContent((prev) => [...prev, emptyHeading]);
    } else if (type === "paragraph") {
      setContent((prev) => [...prev, emptyParagraph]);
    } else if (type === "figure") {
      setContent((prev) => [...prev, { type: "figure", value: emptyFigure }]);
    }

    // Reset the state after adding content
    setIsAdding(false);
    setNewContentType("");
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
              setHeading={setHeading(index)}
            />
          );
        }
        if (contentItem.type === "paragraph") {
          return (
            <Paragraph
              key={index}
              paragraph={contentItem.value}
              setParagraph={setParagraph(index)}
            />
          );
        }
        if (contentItem.type === "figure") {
          return (
            <Figure
              key={index}
              image={contentItem.value}
              setImage={setFigure(index)}
            />
          );
        }
      })}

      {/* Toggle visibility of dropdown */}
      {isAdding ? (
        <div className="flex flex-col my-4">
          <label htmlFor="content-type" className="mb-2">
            Select content type:
          </label>
          <select
            id="content-type"
            className="p-2 border border-gray-300 rounded"
            value={newContentType}
            onChange={(e) => setNewContentType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="heading">Heading</option>
            <option value="paragraph">Paragraph</option>
            <option value="figure">Figure</option>
          </select>

          <Button
            onClick={() => {
              if (newContentType) addSection(newContentType);
            }}
          >
            Add
          </Button>

          <Button onClick={() => setIsAdding(false)}>Cancel</Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsAdding(true)} // Show dropdown on click
        >
          Add New
        </Button>
      )}
    </div>
  );
};

export default Section;
