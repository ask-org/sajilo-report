import { TFigure } from "../../../../types/create-document";

const ImageRenderer = ({ figures }: { figures: TFigure[] }) => {
  return (
    <div className="text-center">
      {figures.map((figure, index) => {
        return (
          <figure key={index}>
            <img
              src={URL.createObjectURL(figure.src)}
              alt={`figure ${index}`}
            />
            <figcaption>{figure.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default ImageRenderer;
