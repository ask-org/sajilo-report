import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Paragraphs from "../paragraphs"; // Make sure to use the correct import path

describe("Paragraphs Component", () => {
  it("renders the initial paragraphs correctly", () => {
    const mockSetParagraphs = vi.fn(); // Use vi.fn() for mock functions in Vitest
    const initialParagraphs = ["First paragraph", "Second paragraph"];

    render(
      <Paragraphs
        paragraphs={initialParagraphs}
        setParagraphs={mockSetParagraphs}
      />,
    );

    // Check if the input elements with the correct values are in the document
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2); // Two initial paragraphs
    expect(inputs[0]).toHaveValue("First paragraph");
    expect(inputs[1]).toHaveValue("Second paragraph");
  });

  it("adds a new paragraph when 'Add new paragraph' button is clicked", () => {
    const mockSetParagraphs = vi.fn(); // Use vi.fn() for mock functions in Vitest
    const initialParagraphs = ["First paragraph"];

    render(
      <Paragraphs
        paragraphs={initialParagraphs}
        setParagraphs={mockSetParagraphs}
      />,
    );

    // Find the 'Add new paragraph' button and click it
    const addButton = screen.getByText("Add New Paragraph");
    fireEvent.click(addButton);

    // Ensure the setParagraphs function is called with the new paragraph added
    expect(mockSetParagraphs).toHaveBeenCalledWith([...initialParagraphs, ""]);
  });

  it("removes a paragraph when 'x' button is clicked", () => {
    const mockSetParagraphs = vi.fn(); // Use vi.fn() for mock functions in Vitest
    const initialParagraphs = ["First paragraph", "Second paragraph"];

    render(
      <Paragraphs
        paragraphs={initialParagraphs}
        setParagraphs={mockSetParagraphs}
      />,
    );

    // Find the 'Remove' button for the first paragraph and click it
    const removeButtons = screen.getAllByText("X");
    fireEvent.click(removeButtons[0]);

    // Ensure the setParagraphs function is called with the first paragraph removed
    expect(mockSetParagraphs).toHaveBeenCalledWith(["Second paragraph"]);
  });

  it("updates a paragraph when typing into an input", () => {
    const mockSetParagraphs = vi.fn(); // Use vi.fn() for mock functions in Vitest
    const initialParagraphs = ["First paragraph"];

    render(
      <Paragraphs
        paragraphs={initialParagraphs}
        setParagraphs={mockSetParagraphs}
      />,
    );

    // Get the input for the first paragraph and simulate typing
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated paragraph" } });

    // Ensure the setParagraphs function is called with the updated paragraph
    expect(mockSetParagraphs).toHaveBeenCalledWith(["Updated paragraph"]);
  });
});
