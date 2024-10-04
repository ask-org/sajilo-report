const HeadingRender = ({ heading }: { heading: string }) => {
  const capitalize = (heading: string) => {
    return heading.toUpperCase();
  };

  return <div className="text-4xl text-center">{capitalize(heading)}</div>;
};

export default HeadingRender;
