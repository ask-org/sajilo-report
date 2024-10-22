import { useEffect, useState } from "react";
import { ImagePlus, X, Upload, Type } from "lucide-react";

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
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Image Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors duration-200
          ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : src
                ? "border-gray-200 bg-gray-50"
                : "border-gray-300 hover:border-gray-400 bg-white"
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
              className="w-full h-auto rounded-md shadow-sm"
            />
            <button
              onClick={removeFigure}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        ) : (
          // Upload Prompt
          <div className="text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gray-100 rounded-full">
                <ImagePlus className="w-6 h-6 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">
                  Drop an image here, or{" "}
                  <label className="text-blue-500 hover:text-blue-600 cursor-pointer">
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
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Type className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors duration-200"
          placeholder="Add a caption for this image..."
        />
      </div>
    </div>
  );
};

export default Figure;
