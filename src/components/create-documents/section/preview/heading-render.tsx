const HeadingRender = ({
  heading,
  headingType,
}: {
  heading: string;
  headingType: string;
}) => {
  // Determine heading size and styles based on heading type
  const getHeadingStyles = (type: string) => {
    switch (type) {
      case "h1":
        return "text-center text-4xl font-bold text-gray-900 mb-6 tracking-tight";
      case "h2":
        return "text-2xl font-semibold text-gray-800 mb-4 tracking-normal";
      case "h3":
        return "text-x font-medium text-gray-700 mb-3";
      default:
        return "text-xl font-medium text-gray-700 mb-2";
    }
  };

  // Create heading element dynamically
  const HeadingTag = headingType as keyof JSX.IntrinsicElements;

  const capitalize = (heading: string) => {
    return heading.toUpperCase();
  };

  return (
    <div className="relative">
      <HeadingTag
        className={`${getHeadingStyles(headingType)} relative z-10 transition-colors duration-200 hover:text-blue-600`}
      >
        {headingType === "h1" ? capitalize(heading) : heading}
      </HeadingTag>
    </div>
  );
};

export default HeadingRender;
