import { render, screen } from "@testing-library/react";
import Autocomplete from "./autocomplete";

describe("Tests for autocomplete", () => {
  test("Component mounts successfully", () => {
    render(<Autocomplete />);
    expect(screen.getByTestId("autocomplete")).toBeInTheDocument();
  });
});
