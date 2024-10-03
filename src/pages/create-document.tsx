import { useState } from "react";
import Editor from "../components/create-documents/section/editor/editor";
import Preview from "../components/create-documents/section/preview/preview";
import { Tsection } from "../types/create-document";

export default function CreateDocument() {
  const [section, setSection] = useState<Tsection[]>([
    {
      heading: "Abstract",
      paragraph: ["This is the first paragraph "],
    },
  ]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <Editor section={section} setSection={setSection} />
      </div>
      <div className="col-span-8">
        <Preview />
      </div>
    </div>
  );
}
