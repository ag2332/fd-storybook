import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./radiogroup";

const meta = {
  title: "components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
export type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
  },
};