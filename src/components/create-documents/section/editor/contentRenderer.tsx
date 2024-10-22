import { TContentItem, TFigure } from "../../../../types/create-document";
import Heading from "./heading";
import Figure from "./image/Figure";
import Paragraph from "./paragraphs/paragraph";

type TContentRenderer = {
  content: TContentItem[];
  onUpdate: (index: number, value: any) => void;
};

export const ContentRenderer: React.FC<TContentRenderer> = ({
  content,
  onUpdate,
}) => {
  return (
    <div>
      {content.map((contentItem, index) => {
        switch (contentItem.type) {
          case "heading":
            return (
              <Heading
                key={index}
                heading={contentItem.value}
                setHeading={(value: string) => onUpdate(index, value)}
              />
            );
          case "paragraph":
            return (
              <Paragraph
                key={index}
                paragraph={contentItem.value}
                setParagraph={(value: string) => onUpdate(index, value)}
              />
            );

          case "figure":
            return (
              <Figure
                key={index}
                image={contentItem.value}
                setImage={(value: TFigure) => onUpdate(index, value)}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
