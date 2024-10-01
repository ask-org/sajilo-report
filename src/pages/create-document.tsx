import { useState } from "react";
import StartingModel from "../components/create-documents/model/startingModel";

export default function CreateDocument() {
  const [openModel, setOpenModel] = useState(true);

  return (
    <div>
      <h1 className="bg-red-300">Create Document</h1>
      {openModel && <StartingModel setOpenModel={setOpenModel} />}
    </div>
  );
}
