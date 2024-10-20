import { Tsection } from "../../../../types/create-document";
import Chapter from "./chapter";
import Page from "./page";

type PreviewProps = {
  section: Tsection[];
};
const Preview = ({ section }: PreviewProps) => {
  return (
    <div className="w-full">
      <Page>
        <div className="">
          {section.map((data: Tsection, index: number) => {
            return (
              <div key={index}>
                <Chapter data={data} />
              </div>
            );
          })}
        </div>
      </Page>
    </div>
  );
};

export default Preview;
