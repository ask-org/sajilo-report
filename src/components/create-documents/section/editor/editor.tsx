import { useState } from "react";
import Section from "./section";
import { Tsection } from "../../../../types/create-document";
import Button from "../../../../ui/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../../../utils/pdf-generator/PdfGenerator";

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
      <div className="flex justify-end mt-4">
        <PDFDownloadLink
          document={<MyDocument sectionData={sectionData} />} // Passing sectionData
          fileName="document.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Editor;
