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

interface SvgImageProps {
  text: string;
}

const SvgImage = ({ text }: SvgImageProps) => {
  const colors = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "teal",
    "pink",
    "indigo",
    "cyan",
    "magenta",
    "lime",
    "brown",
    "maroon",
    "navy",
    "olive",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const svgString = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" fill="${randomColor}" />
      <text x="50" y="55" font-size="20" text-anchor="middle" fill="white">
        ${text}
      </text>
    </svg>
  `;
  return svgString;
};

export const Default: Story = {
  args: {
    images: [
      {
        id: "1",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "1" }))}`,
      },
      {
        id: "2",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "2" }))}`,
      },
      {
        id: "3",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "3" }))}`,
      },
      {
        id: "4",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "4" }))}`,
      },
      {
        id: "6",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "6" }))}`,
      },
      {
        id: "7",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "7" }))}`,
      },
      {
        id: "8",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "8" }))}`,
      },
      {
        id: "10",
        src: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "10" }))}`,
      },
    ],
  },
};
