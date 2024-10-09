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
