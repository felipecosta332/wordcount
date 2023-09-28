import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("change textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");
    userEvent.type(textArea, "felipe");
    expect(charLength.innerHTML).toBe("Character: 6");
    expect(wordLength.innerHTML).toBe("Word: 1");
  });

  test("clear textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getAllByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");
    userEvent.type(textArea, "felipe");
    expect(charLength.innerHTML).toBe("Character: 6");
    expect(wordLength.innerHTML).toBe("Word: 1");
    fireEvent.click(clearBtn[0]);
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
