import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./checkbox";

const meta = {
  title: "components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  args: {
    accentColor: "black",
  },
  argTypes: {
    accentColor: {
        control: "color",
    }
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
export type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    accentColor: "black",
  },
};