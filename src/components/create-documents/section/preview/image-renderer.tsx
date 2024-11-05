import { TFigure } from "../../../../types/create-document";

const ImageRenderer = ({ figure }: { figure: TFigure }) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <figure>
        {figure.src ? (
          <>
            <img src={figure.src} alt={figure.caption} className="mx-auto" />
            <figcaption className="text-sm text-gray-500">
              {figure.caption}
            </figcaption>
          </>
        ) : (
          <div className="flex h-40 w-80 items-center justify-center bg-gray-200">
            Empty image detected
          </div>
        )}
      </figure>
    </div>
  );
};

export default ImageRenderer;
