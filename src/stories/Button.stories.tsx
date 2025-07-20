import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import { Button } from "@/client/components";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Gaming Haven Z",
  },
};

export const Disabled: Story = {
  args: {
    label: "Gaming Haven Z",
    isDisabled: true,
  },
};
