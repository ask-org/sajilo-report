import { useEffect } from "react";
import { Tsection, TContentItem } from "../../../../types/create-document";
import HeadingRender from "./heading-render";
import ImageRenderer from "./image-renderer";
import ParagraphRender from "./paragraph-render";

const Chapter = ({ data }: { data: Tsection }) => {
  const { content }: { content: TContentItem[] } = data;
  useEffect(() => {
    console.log(content);
  }, [data, content]);
  return (
    <div className="flex flex-col gap-4">
      {content.map((contentItem, index) => {
        if (contentItem.type === "heading") {
          return <HeadingRender key={index} heading={contentItem.value} />;
        }
        if (contentItem.type === "paragraph") {
          return <ParagraphRender key={index} paragraph={contentItem.value} />;
        }
      })}
      {/*
    <HeadingRender heading={data.heading} />
      <ParagraphRender paragraph={data.paragraph ?? [""]} />
      <ImageRenderer figures={data.figures ?? []} />
      {data.subSections &&
        data.subSections?.length > 0 &&
        data.subSections.map((subSection, index) => (
          <Chapter key={index} data={subSection} />
        ))}
      */}
    </div>
  );
};

export default Chapter;
