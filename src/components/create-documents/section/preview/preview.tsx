import { Tsection } from "../../../../types/create-document";
import Chapter from "./chapter";

type PreviewProps = {
  section: Tsection[];
};
const Preview = ({ section }: PreviewProps) => {
  return (
    <div>
      {section.map((data: Tsection, index: number) => {
        return (
          <div key={index}>
            <Chapter data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
