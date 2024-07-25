import { screen, render, cleanup } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("should have the right message in the dom", () => {
    render(<Home />);
    const message = "Hello React Home";

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
