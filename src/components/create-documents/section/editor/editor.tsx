import { useEffect, useState } from "react";
import { Tsection } from "../../../../types/create-document";

type EditorProps = {
  section: Tsection[];
  setSection: React.Dispatch<React.SetStateAction<Tsection[]>>;
};
const Editor = ({ section, setSection }: EditorProps) => {
  // TODO: this feature is not implemented yet, and will come in play when we implement the template
  const [data, setData] = useState<Tsection[]>(section);

  useEffect(() => {
    if (data !== section) {
      setData(section);
    }
  }, [section, data]);

  // const onSubmit = () => {
  //   setSection(data);
  // };

  return (
    <div>
      {data.map((section, index) => {
        return <div> individual section </div>;
      })}
    </div>
  );
};

export default Editor;
