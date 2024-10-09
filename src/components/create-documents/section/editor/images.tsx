import React from "react";
import Button from "../../../../ui/Button";
import { TFigure } from "../../../../types/create-document";

interface ImagesProps {
  images: TFigure[];
  setImages: (value: TFigure[]) => void;
}

const Images: React.FC<ImagesProps> = ({ images, setImages }) => {
  // Adds a new placeholder image (with an empty caption)
  const addNewImage = () => {
    const newImage: TFigure = { src: {} as File, caption: "" }; // Empty image placeholder
    setImages([...images, newImage]);
  };

  // Removes an image at the given index
  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1); // Remove image at index
    setImages(newImages);
  };

  // Updates the image file and caption at the given index
  const updateImage = (index: number, file: File | null) => {
    if (file) {
      const newImages = [...images];
      newImages[index] = { ...newImages[index], src: file }; // Update the file (src)
      setImages(newImages);
    }
  };

  // Updates the image caption at the given index
  const updateCaption = (index: number, caption: string) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], caption }; // Update caption
    setImages(newImages);
  };

  return (
    <div className="flex flex-col rounded-lg mx-auto">
      <label
        htmlFor="image-input"
        className="text-lg font-semibold text-gray-700 mb-2"
      >
        Images:
      </label>
      {images.map((image, index) => (
        <div key={index} className="flex items-start space-x-2 mb-3">
          {/* File input for uploading image */}
          <input
            type="file"
            onChange={(e) =>
              updateImage(index, e.target.files ? e.target.files[0] : null)
            }
            aria-label={`Image File ${index + 1}:`}
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Text input for caption */}
          <input
            type="text"
            value={image.caption}
            onChange={(e) => updateCaption(index, e.target.value)}
            aria-label={`Image Caption ${index + 1}:`}
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Enter caption ${index + 1}...`}
          />
          {/* Button to remove image */}
          <Button
            onClick={() => removeImage(index)}
            aria-label={`Remove image ${index + 1}`}
          >
            X
          </Button>
        </div>
      ))}
      {/* Button to add a new image */}
      <Button onClick={addNewImage} aria-label="Add New Image">
        Add Image
      </Button>
    </div>
  );
};

export default Images;

export type TFigure = { src: File; caption: string };
