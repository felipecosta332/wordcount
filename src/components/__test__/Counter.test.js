import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";

describe("Counter Component Test", () => {
  test("render the textarea", () => {
    render(<Counter />);
    const textArea = screen.getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });

  test("render the character result", () => {
    render(<Counter />);
    const charLength = screen.getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });

  test("render the word result", () => {
    render(<Counter />);
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeInTheDocument();
  });
});
