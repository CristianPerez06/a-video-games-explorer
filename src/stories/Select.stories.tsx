import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "@/client/components";

const MOCKED_GAMES = [
  { id: 1, name: "Grand Theft Auto San Andreas", image: "/gta-san.jpg" },
  { id: 2, name: "Grand Theft Auto V", image: "/gta-v.jpg" },
  { id: 3, name: "Grand Theft Auto IV", image: "/gta-iv.jpg" },
  { id: 4, name: "Grand Theft Auto III", image: "/gta-iii.jpg" },
  { id: 5, name: "Grand Theft Auto", image: "/gta-original.jpg" },
  { id: 6, name: "Another Game", image: "/another.jpg" },
  { id: 7, name: "Another Game", image: "/another.jpg" },
  { id: 8, name: "Another Game", image: "/another.jpg" },
  { id: 9, name: "Another Game", image: "/another.jpg" },
  { id: 10, name: "Another Game", image: "/another.jpg" },
  { id: 11, name: "Another Game", image: "/another.jpg" },
  { id: 12, name: "Another Game", image: "/another.jpg" },
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
