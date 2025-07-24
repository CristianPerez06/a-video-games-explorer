import { render, screen } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip", () => {
  const defaultProps = {
    icon: <span>🎮</span>,
    title: "Genre",
    description: "Action",
  };

  it("renders all elements correctly", () => {
    render(<Chip {...defaultProps} />);

    expect(screen.getByTestId("chip")).toBeInTheDocument();
    expect(screen.getByTestId("chip-icon")).toBeInTheDocument();
    expect(screen.getByTestId("chip-title")).toBeInTheDocument();
    expect(screen.getByTestId("chip-description")).toBeInTheDocument();
  });

  it("displays the correct title and description", () => {
    render(<Chip {...defaultProps} />);

    expect(screen.getByTestId("chip-title")).toHaveTextContent("Genre:");
    expect(screen.getByTestId("chip-description")).toHaveTextContent("Action");
  });

  it("uses custom aria-label when provided", () => {
    const customAriaLabel = "Custom Label";
    render(<Chip {...defaultProps} ariaLabel={customAriaLabel} />);

    expect(screen.getByTestId("chip")).toHaveAttribute(
      "aria-label",
      customAriaLabel
    );
  });

  it("uses default aria-label when not provided", () => {
    render(<Chip {...defaultProps} />);

    expect(screen.getByTestId("chip")).toHaveAttribute(
      "aria-label",
      "Genre: Action"
    );
  });
});
