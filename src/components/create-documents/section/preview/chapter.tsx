import HeadingRender from "./heading-render";
import ImageRenderer from "./image-renderer";
import ParagraphRender from "./paragraph-render";

const Chapter = ({ data }: { data: Tsection }) => {
  return (
    <div className="flex flex-col gap-4">
      <HeadingRender heading={data.heading} />
      <ParagraphRender paragraph={data.paragraph ?? [""]} />
      <ImageRenderer figures={data.figures ?? []} />
      {/* Map over subSections if they exist */}
      {data.subSections &&
        data.subSections?.length > 0 &&
        data.subSections.map((subSection, index) => (
          <Chapter key={index} data={subSection} />
        ))}
    </div>
  );
};

export default Chapter;

export type THeading = string;
export type TParagraph = string[];
export type TFigure = { src: File | null; caption: string };
export type TTable = {
  row: number;
  column: number;
  data: string[][];
};

export type Tsection = {
  heading: THeading;
  paragraph?: TParagraph;
  figures?: TFigure[];
  table?: TTable;
  subSections?: Tsection[] | null;
};
