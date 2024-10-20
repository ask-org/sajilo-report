import { useEffect, useState } from "react";
import Heading from "./heading"; // Adjust the import path based on your folder structure
import Paragraphs from "./paragraphs/paragraphs"; // Adjust the import path based on your folder structure
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
  const [subSection, setSubSection] = useState<Tsection[]>(
    section.subSections ?? [],
  );

  // Automatically update the parent `setSection` whenever the component state changes
  useEffect(() => {
    setSection((prev) =>
      prev.map((s) =>
        s === section
          ? {
              ...s,
              heading,
              paragraph: paragraphs,
              figures: images,
              subSections: subSection,
            }
          : s,
      ),
    );
  }, [heading, paragraphs, images, subSection, section, setSection]);

  const addSubSection = () => {
    setSubSection((prev) => [
      ...prev,
      {
        heading: "",
        paragraph: [""],
        figures: [],
        subSections: [],
      },
    ]);
  };

  useEffect(() => {
    if (
      section.heading == heading &&
      section.paragraph == paragraphs &&
      section.figures == images &&
      section.subSections == subSection
    ) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [heading, paragraphs, section, images, subSection]);

  return (
    <div
      className={`mx-auto bg-white rounded-lg shadow-md my-4 p-6 max-w-2xl border ${
        correct ? "border-green-500" : "border-red-500"
      }`}
    >
      <Heading heading={heading} setHeading={setHeading} />
      <Paragraphs paragraphs={paragraphs} setParagraphs={setParagraphs} />
      <Images images={images} setImages={setImages} />
      {subSection.map((section) => (
        <Section section={section} setSection={setSubSection} />
      ))}
      <div className="flex justify-center mt-6">
        <Button onClick={addSubSection}>Sub sections?</Button>
      </div>
    </div>
  );
};

export default Section;
