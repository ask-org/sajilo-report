import React from "react";
import {
  TContentItem,
  TFigure,
  THeading,
  TParagraph,
} from "../../../../types/create-document";
import Heading from "./heading/heading";
import Figure from "./image/Figure";
import Paragraph from "./paragraphs/paragraph";
import { RxCross2 } from "react-icons/rx";

type TContentRenderer = {
  content: TContentItem[];
  onUpdate: (index: number, value: THeading | TParagraph | TFigure) => void;
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
    <div className="relative group">
      <button
        onClick={handleRemove}
        className="absolute top-0 right-0 p-1.5 rounded-full
                 opacity-0 group-hover:opacity-100
                 hover:bg-red-50 focus:bg-red-50
                 transition-all duration-200 ease-in-out"
        aria-label="Remove paragraph"
      >
        <RxCross2 className="w-4 h-4 text-red-500" />
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
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
