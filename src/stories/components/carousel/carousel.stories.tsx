import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./carousel";

const meta = {
  title: "components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Carousel>;

export default meta;
export type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {
  },
};