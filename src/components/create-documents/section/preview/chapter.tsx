import { Tsection } from "../../../../types/create-document";
import HeadingRender from "./heading-render";
import ParagraphRender from "./paragraph-render";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import Button from "../../../../ui/Button";

const Chapter = ({ data }: { data: Tsection }) => {
  const contentRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    const options = {
      margin: [1, 1.5, 1, 1], // Top, Left, Bottom, Right margins in inches
      filename: "document.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="">
      <Button onClick={handleDownloadPDF}>Download PDF</Button>
      <div
        className="flex flex-col gap-4 h-full pb-1 focus:outline-none pdf-content"
        ref={contentRef}
        contentEditable="true"
        // style={{
        //   padding: "20px",
        //   minHeight: "400px",
        //   marginTop: "20px",
        // }}
      >
        <HeadingRender heading={data.heading} />
        <ParagraphRender paragraph={data.paragraph ?? [""]} />
      </div>
    </div>
  );
};

export default Chapter;
