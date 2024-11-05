import { useEffect } from "react";
import { Tsection, TContentItem } from "../../../../types/create-document";
import HeadingRender from "./heading-render";
import ParagraphRender from "./paragraph-render";
import ImageRenderer from "./image-renderer";
import ListRenderer from "./list-render";

const Chapter = ({ id, data }: { id: string; data: Tsection }) => {
  const {
    content,
    subsection,
  }: { content: TContentItem[]; subsection?: Tsection[] } = data;

  useEffect(() => {
    console.log(content);
  }, [data, content]);

  const idType = id.split(".").length;

  const headingType = idType === 1 ? "h1" : idType === 2 ? "h2" : "h3";
<<<<<<< HEAD
=======

  console.log(data,"hello hello")
>>>>>>> main_backup

  return (
    <div className="flex flex-col gap-4">
      {content.map((contentItem, index) => {
        if (contentItem.type === "heading") {
          return (
            <HeadingRender
              key={index}
              heading={contentItem.value}
              headingType={headingType}
            />
          );
        }
        if (contentItem.type === "paragraph") {
          return <ParagraphRender key={index} paragraph={contentItem.value} />;
        }
        if (contentItem.type === "figure") {
          return <ImageRenderer key={index} figure={contentItem.value} />;
        }
        if (contentItem.type === "list") {
          return <ListRenderer key={index} list={contentItem.value} />;
        }
      })}
      {subsection &&
        subsection.map((section, index) => {
          return <Chapter key={index} data={section} id={`${id}.${index}`} />;
        })}
    </div>
  );
};

export default Chapter;
