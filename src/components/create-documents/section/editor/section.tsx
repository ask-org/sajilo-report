import { useEffect, useState } from "react";
import Heading from "./heading"; // Adjust the import path based on your folder structure
import Paragraphs from "./paragraphs"; // Adjust the import path based on your folder structure
import { TFigure, Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";
import Images from "./images";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section = ({ section, setSection }: SectionProps) => {
  const [correct, setCorrect] = useState<boolean>();
  const [heading, setHeading] = useState(section.heading);
  const [images, setImages] = useState<TFigure[]>(section.figures ?? []);
  const [paragraphs, setParagraphs] = useState<string[]>(
    section.paragraph ?? [""],
  );

  const onSubmit = () => {
    console.log({ heading, paragraphs, images });
    setSection((prev) =>
      prev.map((s) =>
        s === section
          ? { ...s, heading, paragraph: paragraphs, figures: images }
          : s,
      ),
    );
  };

  useEffect(() => {
    if (
      section.heading == heading &&
      section.paragraph == paragraphs &&
      section.figures == images
    ) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [heading, paragraphs, section, images]);

  return (
    <div
      className={`mx-auto bg-white rounded-lg shadow-md my-4 p-6 max-w-2xl border ${
        correct ? "border-green-500" : "border-red-500"
      }`}
    >
      <Heading heading={heading} setHeading={setHeading} />
      <Paragraphs paragraphs={paragraphs} setParagraphs={setParagraphs} />
      <Images images={images} setImages={setImages} />
      <div className="flex justify-center mt-6">
        <Button onClick={onSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default Section;
