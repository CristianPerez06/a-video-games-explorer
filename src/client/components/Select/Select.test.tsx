import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

const mockItems = [
  { id: "1", name: "Game 1" },
  { id: "2", name: "Game 2" },
  { id: "3", name: "Game 3" },
];

describe("Select Component", () => {
  const mockOnSearch = jest.fn();
  const mockOnItemSelected = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(
      <Select
        items={[]}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    expect(screen.getByTestId("select-container")).toBeInTheDocument();
    expect(screen.getByTestId("select-input")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(
      <Select
        items={[]}
        isLoading={true}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(screen.getByTestId("select-loading")).toBeInTheDocument();
  });

  it("shows clear button when text is entered", () => {
    render(
      <Select
        items={[]}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(screen.getByTestId("select-clear-button")).toBeInTheDocument();
  });

  it("calls onSearch when typing", () => {
    render(
      <Select
        items={[]}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });

  it("displays items and allows selection", () => {
    render(
      <Select
        items={mockItems}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "game" } });

    mockItems.forEach((item) => {
      const listItem = screen.getByTestId(`select-item-${item.id}`);
      expect(listItem).toBeInTheDocument();
    });

    // Click on the item content div instead of the li element
    const firstItem = screen.getByTestId(`select-item-${mockItems[0].id}`);
    const firstItemContent = firstItem.querySelector("div");
    fireEvent.click(firstItemContent!);

    expect(mockOnItemSelected).toHaveBeenCalledWith(mockItems[0]);
  });

  it("shows no results message when no items match", () => {
    render(
      <Select
        items={[]}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "game" } });

    expect(screen.getByTestId("select-no-results")).toBeInTheDocument();
  });

  it("clears input when clear button is clicked", () => {
    render(
      <Select
        items={[]}
        onSearch={mockOnSearch}
        onItemSelected={mockOnItemSelected}
      />
    );

    const input = screen.getByTestId("select-input");
    fireEvent.change(input, { target: { value: "test" } });

    const clearButton = screen.getByTestId("select-clear-button");
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
  });
});
