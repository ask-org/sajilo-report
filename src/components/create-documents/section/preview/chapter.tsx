import { Tsection } from "../../../../types/create-document";
import HeadingRender from "./heading-render";
import ParagraphRender from "./paragraph-render";

const Chapter = ({ data }: { data: Tsection }) => {
  return (
    <div className="flex flex-col gap-4">
      <HeadingRender heading={data.heading} />
      <ParagraphRender paragraph={data.paragraph ?? [""]} />
    </div>
  );
};

export default Chapter;
