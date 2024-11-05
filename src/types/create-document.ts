export type THeading = string;
export type TParagraph = string;
export type TFigure = { src: string | null; caption: string };
export type TTable = {
  row: number;
  column: number;
  data: string[][];
};

export type TList = {
  type: "ordered" | "unordered";
  items: { type: "heading"; value: string[] } & {
    type: "paragraph";
    value: string[];
  } & { type: "list"; value: TList[] }[];
};

export type TContentItem =
  | { type: "heading"; value: THeading }
  | { type: "paragraph"; value: TParagraph }
  | { type: "figure"; value: TFigure }
  | { type: "table"; value: TTable };

export type Tsection = {
  content: TContentItem[];
  subsection?: Tsection[];
};
