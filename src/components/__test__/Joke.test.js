import { render, screen, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("Test Joke Component", () => {
  test("render joke text", async () => {
    render(<Joke />);
    const jokeHeadline = screen.getByTestId("jokeHeadline");
    await waitFor(() => expect(jokeHeadline.innerHTML).toBeTruthy());
  });
});
