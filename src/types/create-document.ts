export type THeading = string;
export type TParagraph = string;
export type TFigure = { src: File | null; caption: string };
export type TTable = {
  row: number;
  column: number;
  data: string[][];
};

export type TContentItem =
  | { type: "heading"; value: THeading }
  | { type: "paragraph"; value: TParagraph }
  | { type: "figure"; value: TFigure }
  | { type: "table"; value: TTable };

export type Tsection = {
  content: TContentItem[];
  subection?: Tsection[];
};
