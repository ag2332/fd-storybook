import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./dropdown";

const meta = {
  title: "components/Dropdown",
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  args: {
    backgroundColor: "black",
    borderRadius: "md",
  },
  argTypes: {
    backgroundColor: {
      description: "Controls the background color of the modal",
      control: { type: "color" },
      defaultValue: "red",
    },
    borderRadius: {
      description: "Controls the border radius of the modal",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
export type Story = StoryObj<typeof DropDown>;

export const Primary: Story = {
};