import type { Meta, StoryObj } from "@storybook/nextjs";
import { ImageCarousel } from "@/client/components";

const meta = {
  title: "ImageCarousel",
  component: ImageCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { id: 1, alt: "Image 1" },
      { id: 2, alt: "Image 2" },
      { id: 3, alt: "Image 3" },
      { id: 4, alt: "Image 4" },
      { id: 5, alt: "Image 5" },
      { id: 6, alt: "Image 6" },
      { id: 7, alt: "Image 7" },
      { id: 8, alt: "Image 8" },
      { id: 9, alt: "Image 9" },
      { id: 10, alt: "Image 10" },
    ],
  },
};
