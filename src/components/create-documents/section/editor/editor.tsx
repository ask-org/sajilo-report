import { useState } from "react";
import Section from "./section";
import { Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../pdf/PdfGenerator";

type EditorProps = {
  section: Tsection[];
  setSection: (sectionData: Tsection[]) => void;
};

const Editor = ({ section, setSection }: EditorProps) => {
  const [sectionData, setSectionData] = useState<Tsection[]>(section);

  const submit = () => {
    setSection(sectionData);
  };

  const blankData: Tsection = {
    content: [{ type: "heading", value: "New Section" }],
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
          setSectionData((prev: Tsection[]) => [...prev, blankData]);
        }}
      >
        Add Section
      </Button>
      <div className="mt-4 flex justify-end">
        <PDFDownloadLink
          document={<MyDocument sectionData={sectionData} />} // Passing sectionData
          fileName="document.pdf"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Downlaod PDF
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Editor;
