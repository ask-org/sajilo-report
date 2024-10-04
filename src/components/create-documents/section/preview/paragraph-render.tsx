const ParagraphRender = ({ paragraph }: { paragraph: string[] }) => {
  return (
    <div className="text-justify">
      {paragraph.map((p, index) =>
        p === "" ? <br key={index} /> : <p key={index}>{p}</p>,
      )}
    </div>
  );
};

export default ParagraphRender;
