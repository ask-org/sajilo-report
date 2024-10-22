import { useEffect, useState } from "react";
import { TContentItem, TFigure, Tsection } from "../types/create-document";

export const useContentManager = (
  section: Tsection,
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>,
) => {
  const [content, setContent] = useState<TContentItem[]>(section.content);

  useEffect(() => {
    setSection((prev) => {
      const newSection = [...prev];
      newSection[prev.indexOf(section)].content = content;
      return newSection;
    });
  }, [content, section, setSection]);

  const updateContent = (index: number, value: string | TFigure) => {
    const newContent = [...content];
    newContent[index].value = value;
    setContent(newContent);
  };

  const addContent = (type: string) => {
    const newContentMap: Record<string, TContentItem> = {
      heading: { type: "heading", value: "" },
      paragraph: { type: "paragraph", value: "" },
      figure: { type: "figure", value: { src: "", caption: "" } },
    };

    const newItem = newContentMap[type];
    if (newItem) {
      setContent((prev) => [...prev, newItem]);
    }
  };

  const removeContent = (index: number) => {
    setContent((prev) => {
      const newContent = [...prev];
      newContent.splice(index, 1);
      return newContent;
    });
  };

  return { content, updateContent, addContent, removeContent };
};
