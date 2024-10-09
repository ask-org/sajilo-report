import { TFigure } from "../../../../types/create-document";

const ImageRenderer = ({ figures }: { figures: TFigure[] }) => {
  return (
    <div className="text-center flex flex-col gap-2">
      {figures.map((figure, index) => {
        return (
          <figure key={index}>
            {figure.src ? (
              <>
                <img
                  src={URL.createObjectURL(figure.src)}
                  alt={figure.caption}
                  className="mx-auto"
                />
                <figcaption className="text-sm text-gray-500">
                  {figure.caption}
                </figcaption>
              </>
            ) : (
              <div className="bg-gray-200 h-40 w-80 flex justify-center items-center">
                Empty image detected
              </div>
            )}
          </figure>
        );
      })}
    </div>
  );
};

export default ImageRenderer;
