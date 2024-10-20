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
    <div className="grid grid-cols-12 h-screen">
      {/* Editor Section */}
      <div className="col-span-4 h-full overflow-y-auto bg-gray-100 p-4">
        <Editor section={section} setSection={setSection} />
      </div>

      {/* Preview Section */}
      <div className="col-span-8 overflow-y-auto pt-16 pr-24 pb-16 pl-32 h-full">
        <Preview section={section} />
      </div>
    </div>
  );
}
