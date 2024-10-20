const HeadingRender = ({ heading }: { heading: string }) => {
  const capitalize = (heading: string) => {
    return heading.toUpperCase();
  };

  return <h1 className="text-center">{capitalize(heading)}</h1>;
};

export default HeadingRender;
