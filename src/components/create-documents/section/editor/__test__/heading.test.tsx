import { render, screen, fireEvent } from "@testing-library/react";
import Heading from "../heading";
import { useState } from "react";

// Wrapper component to provide state for testing
const HeadingWrapper = () => {
  const [data, setData] = useState("hello there");
  return <Heading heading={data} setHeading={setData} />;
};

describe("Heading Component", () => {
  it("renders label and input correctly", () => {
    render(<HeadingWrapper />);

    // Check if the label is in the document
    const label = screen.getByLabelText("Heading:");
    expect(label).toBeInTheDocument();

    // Check if the input has the correct initial value
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("hello there");
  });

  it("updates input value on change", () => {
    render(<HeadingWrapper />);

    // Get the input field
    const input = screen.getByRole("textbox");

    // Simulate user typing a new heading
    fireEvent.change(input, { target: { value: "new heading" } });

    // Check if the input value has changed
    expect(input).toHaveValue("new heading");
  });
});
