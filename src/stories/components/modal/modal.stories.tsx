import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./modal";

const meta = {
  title: "components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
  },
} satisfies Meta<typeof Modal>;

export default meta;
export type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
  },
};