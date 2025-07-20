import type { Meta, StoryObj } from "@storybook/nextjs";
import { Toast } from "@/client/components";

const meta = {
  title: "Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "This is a success toast notification",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "This is an error toast notification",
  },
};
