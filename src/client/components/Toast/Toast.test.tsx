import { render, screen } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast", () => {
  it("renders a success toast with title", () => {
    render(<Toast variant="success" title="Success Message" />);

    const toast = screen.getByTestId("toast");
    const title = screen.getByTestId("toast-title");
    const icon = screen.getByTestId("toast-icon");
    const description = screen.queryByTestId("toast-description");

    expect(toast).toHaveAttribute("role", "status");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(title).toHaveTextContent("Success Message");
    expect(icon).toBeInTheDocument();
    expect(description).not.toBeInTheDocument();
  });

  it("renders an error toast with title and description", () => {
    render(
      <Toast
        variant="error"
        title="Error Message"
        description="Something went wrong"
      />
    );

    const toast = screen.getByTestId("toast");
    const title = screen.getByTestId("toast-title");
    const description = screen.getByTestId("toast-description");

    expect(toast).toHaveAttribute("role", "alert");
    expect(toast).toHaveAttribute("aria-live", "assertive");
    expect(title).toHaveTextContent("Error Message");
    expect(description).toHaveTextContent("Something went wrong");
  });
});
