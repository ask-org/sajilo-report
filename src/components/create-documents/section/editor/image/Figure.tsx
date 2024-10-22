import { useEffect, useState } from "react";
import { TFigure } from "../../../../../types/create-document";
import Button from "../../../../../ui/Button";

type ImageProps = {
  image: TFigure;
  setImage: (value: TFigure) => void;
};

const Figure = ({ image, setImage }: ImageProps) => {
  const [src, setSrc] = useState<string | null>(image.src);
  const [caption, setCaption] = useState<string>(image.caption);

  // Update the parent state only when the `src` or `caption` changes
  const handleImageUpdate = () => {
    if (src !== image.src || caption !== image.caption) {
      setImage({ src, caption });
    }
  };

  // Debounce or delay updating the parent state to prevent rapid calls
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleImageUpdate();
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounce);
  }, [src, caption, handleImageUpdate]); // Update only when `src` or `caption` changes

  function removeFigure() {
    setSrc(null); // Handle the removal of the figure
    setCaption(""); // Reset caption when image is removed
    setImage({ src: null, caption: "" });
  }

  return (
    <div className="flex flex-col rounded-lg mx-auto gap-2">
      <div className="flex flex-col space-y-2 gap-2">
        <div className="flex flex-col items-start w-full border border-gray-300 rounded-md p-2 gap-1">
          {/* File input for uploading image */}
          <div className="flex w-full gap-2">
            <input
              type="file"
              onChange={(e) => setSrc(URL.createObjectURL(e.target.files![0]))}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <Button onClick={removeFigure}> X </Button>
          </div>
          {/* Text input for caption */}
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Enter caption...`}
          />
        </div>
      </div>
    </div>
  );
};

export default Figure;
