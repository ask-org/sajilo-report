import { useState } from "react";
import Section from "./section";
import { Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";

type EditorProps = {
  section: Tsection[];
  setSection: (sectionData: Tsection[]) => void;
};

const Editor = ({ section, setSection }: EditorProps) => {
  const [sectionData, setSectionData] = useState<Tsection[]>(section);

  const submit = () => {
    console.log(sectionData);
    setSection(sectionData);
  };

  return (
    <div className="mx-2">
      <div className="flex justify-end">
        <Button onClick={submit}>Sync</Button>
      </div>
      {sectionData.map((sec, index) => (
        <Section key={index} section={sec} setSection={setSectionData} />
      ))}
      <Button
        onClick={() => {
          setSectionData((prev: Tsection[]) => [...prev, { heading: "" }]);
        }}
      >
        Add Section
      </Button>
    </div>
  );
};

export default Editor;
