import { render, screen, fireEvent } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";
import { ImageProps } from "next/image";

// Mock the useBreakpoint hook
jest.mock("@/client/hooks", () => ({
  useBreakpoint: () => "md", // This will make visibleCount = 5
}));

// Mock next/image since it's not available in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  default: ({ src, alt, width, height, priority, ...props }: ImageProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  ),
}));

describe("ImageCarousel", () => {
  const mockImages = [
    { id: "1", src: "/image1.jpg" },
    { id: "2", src: "/image2.jpg" },
    { id: "3", src: "/image3.jpg" },
    { id: "4", src: "/image4.jpg" },
    { id: "5", src: "/image5.jpg" },
    { id: "6", src: "/image6.jpg" }, // This one should be hidden initially
  ];

  it("renders correctly with images", () => {
    render(<ImageCarousel images={mockImages} />);

    // Check if container exists
    expect(screen.getByTestId("carousel-container")).toBeInTheDocument();

    // Check if navigation buttons are present
    expect(screen.getByTestId("prev-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();

    // Check if correct number of images are rendered (should be 5 in desktop)
    const items = screen.getAllByTestId(/carousel-item-/);
    expect(items).toHaveLength(5);
  });

  it("handles navigation correctly", () => {
    render(<ImageCarousel images={mockImages} />);

    // Initially, prev button should be disabled and next button enabled
    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    // Click next button
    fireEvent.click(nextButton);

    // Now prev button should be enabled
    expect(prevButton).not.toBeDisabled();
  });

  it("renders 'Image not found' for images without src", () => {
    const imagesWithMissingSrc = [
      { id: "1" }, // No src
      { id: "2", src: "/image2.jpg" },
    ];

    render(<ImageCarousel images={imagesWithMissingSrc} />);

    // Check if "Image not found" text is present
    expect(screen.getByTestId("image-not-found")).toBeInTheDocument();
  });

  it("handles keyboard navigation", () => {
    render(<ImageCarousel images={mockImages} />);

    const container = screen.getByTestId("carousel-container");

    // Initially at first slide
    const prevButton = screen.getByTestId("prev-button");
    expect(prevButton).toBeDisabled();

    // Press right arrow key
    fireEvent.keyDown(container, { key: "ArrowRight" });

    // Now we should be able to go back
    expect(prevButton).not.toBeDisabled();
  });
});
