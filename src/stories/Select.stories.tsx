import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "@/client/components";

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

const MOCKED_GAMES = [
  {
    id: "1",
    name: "Grand Theft Auto San Andreas",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "1" }))}`,
  },
  {
    id: "2",
    name: "Grand Theft Auto V",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "2" }))}`,
  },
  {
    id: "3",
    name: "Grand Theft Auto IV",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "3" }))}`,
  },
  {
    id: "4",
    name: "Grand Theft Auto III",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "4" }))}`,
  },
  {
    id: "5",
    name: "Grand Theft Auto",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "5" }))}`,
  },
  {
    id: "6",
    name: "Need for Speed",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "6" }))}`,
  },
  {
    id: "7",
    name: "Call of Duty",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "7" }))}`,
  },
  {
    id: "8",
    name: "Battlefield",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "8" }))}`,
  },
  {
    id: "9",
    name: "FIFA",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "9" }))}`,
  },
  {
    id: "10",
    name: "Need for Speed II",
    image: `data:image/svg+xml;base64,${btoa(SvgImage({ text: "10" }))}`,
  },
];

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "16px",
        paddingBottom: "16px",
      }}
    >
      <div style={{ paddingLeft: "4px", paddingRight: "4px" }}>{children}</div>
    </div>
  );
};

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: MOCKED_GAMES,
    onSearch: () => {},
    onItemSelected: () => {},
  },
};

export const Empty: Story = {
  args: {
    items: [],
    onSearch: () => {},
    onItemSelected: () => {},
  },
};

export const Loading: Story = {
  args: {
    items: [],
    isLoading: true,
    onSearch: () => {},
    onItemSelected: () => {},
  },
};
