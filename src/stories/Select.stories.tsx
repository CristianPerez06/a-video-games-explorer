import type { Meta, StoryObj } from "@storybook/nextjs";
import { Select } from "@/client/components";

const MOCKED_GAMES = [
  { id: "1", name: "Grand Theft Auto San Andreas" },
  { id: "2", name: "Grand Theft Auto V" },
  { id: "3", name: "Grand Theft Auto IV" },
  { id: "4", name: "Grand Theft Auto III" },
  { id: "5", name: "Grand Theft Auto" },
  { id: "6", name: "Need for Speed" },
  { id: "7", name: "Call of Duty" },
  { id: "8", name: "Battlefield" },
  { id: "9", name: "FIFA" },
  { id: "10", name: "Need for Speed II" },
  { id: "11", name: "Call of Duty II" },
  { id: "12", name: "Battlefield II" },
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
