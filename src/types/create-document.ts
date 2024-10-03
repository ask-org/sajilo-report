export type THeading = string;
export type TParagraph = string[];
export type TImage = string[];
export type TTable = {
  row: number;
  column: number;
  data: string[][];
};

export type Tsection = {
  heading: THeading;
  paragraph?: TParagraph;
  image?: TImage;
  table?: TTable;
  subSections?: Tsection[];
};
