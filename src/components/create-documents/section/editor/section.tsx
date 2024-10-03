import { useEffect, useState } from "react";
import Heading from "./heading"; // Adjust the import path based on your folder structure
import Paragraphs from "./paragraphs"; // Adjust the import path based on your folder structure
import { Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";

type SectionProps = {
  section: Tsection;
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};

const Section = ({ section, setSection }: SectionProps) => {
  const [correct, setCorrect] = useState<boolean>();
  const [heading, setHeading] = useState(section.heading);
  const [paragraphs, setParagraphs] = useState<string[]>(
    section.paragraph ?? [""],
  );

  const onSubmit = () => {
    console.log({ heading, paragraphs });
    setSection((prev) =>
      prev.map((s) =>
        s === section ? { ...s, heading, paragraph: paragraphs } : s,
      ),
    );
  };

  useEffect(() => {
    if (section.heading == heading && section.paragraph == paragraphs) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [heading, paragraphs, section]);

  return (
    <div
      className={`mx-auto bg-white rounded-lg shadow-md my-4 p-6 max-w-2xl border ${
        correct ? "border-green-500" : "border-red-500"
      }`}
    >
      <Heading heading={heading} setHeading={setHeading} />
      <Paragraphs paragraphs={paragraphs} setParagraphs={setParagraphs} />
      <div className="flex justify-center mt-6">
        <Button onClick={onSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default Section;
