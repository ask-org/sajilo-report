import React from "react";
import {
  TContentItem,
  TFigure,
  THeading,
  TList,
  TParagraph,
} from "../../../../types/create-document";
import Heading from "./heading/heading";
import Figure from "./image/Figure";
import Paragraph from "./paragraphs/paragraph";
import { RxCross2 } from "react-icons/rx";
import ListComponent from "./list/list";

type TContentRenderer = {
  content: TContentItem[];
  onUpdate: (
    index: number,
    value: THeading | TParagraph | TFigure | TList,
  ) => void;
  onRemove: (index: number) => void;
};

type TWrapperProps = {
  children: React.ReactNode;
  index: number;
  onRemove: (index: number) => void;
};

const Wrapper: React.FC<TWrapperProps> = ({ children, index, onRemove }) => {
  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleRemove();
        }}
        className="absolute right-0 top-0 z-50 rounded-full p-1.5 opacity-50 transition-all duration-200 ease-in-out hover:bg-red-50 hover:opacity-100 focus:bg-red-50"
      >
        <RxCross2 className="h-4 w-4 text-red-500" />
      </button>
      {children}
    </div>
  );
};

export const ContentRenderer: React.FC<TContentRenderer> = ({
  content,
  onUpdate,
  onRemove,
}) => {
  return (
    <div className="space-y-4">
      {content.map((contentItem, index) => {
        const key = `content-item-${index}`;

        switch (contentItem.type) {
          case "heading":
            return (
              <Wrapper key={key} index={index} onRemove={onRemove}>
                <Heading
                  heading={contentItem.value}
                  setHeading={(value: string) => onUpdate(index, value)}
                />
              </Wrapper>
            );
          case "paragraph":
            return (
              <Wrapper key={key} index={index} onRemove={onRemove}>
                <Paragraph
                  paragraph={contentItem.value}
                  setParagraph={(value: string) => onUpdate(index, value)}
                />
              </Wrapper>
            );
          case "figure":
            return (
              <Wrapper key={key} index={index} onRemove={onRemove}>
                <Figure
                  image={contentItem.value}
                  setImage={(value: TFigure) => onUpdate(index, value)}
                />
              </Wrapper>
            );
          case "list":
            return (
              <Wrapper key={key} index={index} onRemove={onRemove}>
                <ListComponent
                  list={contentItem.value}
                  setList={(value: TList) => onUpdate(index, value)}
                />
              </Wrapper>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
