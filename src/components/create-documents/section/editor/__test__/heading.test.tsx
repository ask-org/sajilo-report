import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import Heading from "../heading";

interface HeadingWrapperProps {
  onStateChange: (newState: string) => void;
}

export const HeadingWrapper: React.FC<HeadingWrapperProps> = ({
  onStateChange,
}) => {
  const [data, setData] = useState<string>("hello there");
  const handleChange = (value: string) => {
    setData(value);
    onStateChange(value);
  };
  return <Heading heading={data} setHeading={handleChange} />;
};

describe("Heading Component", () => {
  it("should keep track of data state updates", () => {
    let currentState = "hello there";
    const handleStateChange = (newState: string) => {
      currentState = newState;
    };
    render(<HeadingWrapper onStateChange={handleStateChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new heading" } });
    expect(currentState).toBe("new heading");
    expect(input).toHaveValue("new heading");
  });
});
