import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders with default props", () => {
    render(<Spinner />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("container", "light", "xs");
    expect(spinner).toHaveAttribute("role", "status");
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  it("renders with dark variant", () => {
    render(<Spinner variant="dark" />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveClass("dark");
  });

  it("renders with different sizes", () => {
    render(<Spinner size="xl" />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveClass("xl");
  });

  it("renders with custom aria-label", () => {
    render(<Spinner ariaLabel="Custom loading" />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toHaveAttribute("aria-label", "Custom loading");
  });
});
