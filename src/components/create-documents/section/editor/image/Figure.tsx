import { useEffect, useState } from "react";
import { ImagePlus, X, Type } from "lucide-react";

type TFigure = {
  src: string | null;
  caption: string;
};

type ImageProps = {
  image: TFigure;
  setImage: (value: TFigure) => void;
};

const Figure = ({ image, setImage }: ImageProps) => {
  const [src, setSrc] = useState<string | null>(image.src);
  const [caption, setCaption] = useState<string>(image.caption);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleImageUpdate = () => {
      if (src !== image.src || caption !== image.caption) {
        setImage({ src, caption });
      }
    };
    const delayDebounce = setTimeout(handleImageUpdate, 300);
    return () => clearTimeout(delayDebounce);
  }, [src, caption, image.src, image.caption, setImage]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSrc(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFigure = () => {
    setSrc(null);
    setCaption("");
    setImage({ src: null, caption: "" });
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Image Upload Area */}
      <div
        className={`relative rounded-lg border-2 border-dashed p-6 transition-colors duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : src
              ? "border-gray-200 bg-gray-50"
              : "border-gray-300 bg-white hover:border-gray-400"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {src ? (
          // Image Preview
          <div className="relative">
            <img
              src={src}
              alt={caption || "Uploaded image"}
              className="h-auto w-full rounded-md shadow-sm"
            />
            <button
              onClick={removeFigure}
              className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-md transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        ) : (
          // Upload Prompt
          <div className="text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-gray-100 p-3">
                <ImagePlus className="h-6 w-6 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">
                  Drop an image here, or{" "}
                  <label className="cursor-pointer text-blue-500 hover:text-blue-600">
                    browse
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files?.[0] &&
                        setSrc(URL.createObjectURL(e.target.files[0]))
                      }
                    />
                  </label>
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (max. 2MB)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption Input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <Type className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-4 text-sm shadow-sm transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a caption for this image..."
        />
      </div>
    </div>
  );
};

export default Figure;
