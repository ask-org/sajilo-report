type PageProps = {
  children: React.ReactNode;
};
const Page = ({ children }: PageProps) => {
  return (
    <div
      className="mx-auto mt-10 bg-white shadow-lg"
      style={{
        width: "100%", // Full width for responsiveness
        maxWidth: "210mm", // Max width for A4 size
        height: "auto", // Auto height for aspect ratio
        aspectRatio: "210 / 297", // Maintain A4 aspect ratio
        padding: "5%", // Scalable padding
        border: "1px solid #ccc",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default Page;
