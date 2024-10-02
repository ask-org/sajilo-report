// Implementation Detail: This will divide the screen into two parts, one for the editor and one for the preview.
// The editor part will contain the sections field which will have title and a paragraph field. the user can choose to add 'sub section' to the section which will again provide him with  a title and content.

import { useState } from "react";

type Tsection = {
  heading: string;
  sectionId: string;
  content: string;
  subSections?: Tsection[];
};

export default function CreateDocument() {
  const [section, setSection] = useState<Tsection[]>([]);

  return <div></div>;
}
