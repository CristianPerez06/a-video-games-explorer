import type { Meta, StoryObj } from "@storybook/nextjs";
import { Star } from "lucide-react";
import { Chip } from "@/app/components";

const meta = {
  title: "Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Star size={13} />,
    title: "Rating",
    description: "8.9",
  },
};
