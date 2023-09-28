import { render } from "@testing-library/react";
import { Counter } from "../Counter";

test("render the textarea", () => {
  const { screen } = render(<Counter />);
  const textArea = screen.getByPlaceholderText("Type or paste your test");
  expect(textArea).toBeTruthy();
});
