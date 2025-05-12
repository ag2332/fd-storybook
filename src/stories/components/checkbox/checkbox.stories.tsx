import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./checkbox";

const meta = {
  title: "components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  args: {
    accentColor: "white",
    backgroundColor: "transparent",
    headerLabel: "default heading",
    bodyLabel: "default body",
    headingTextSize: "xl",
    bodyTextSize: "md",
  },
  argTypes: {
    accentColor: {
      control: "color",
    },
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
    },
    headerLabel: {
      name: "Header Label",
      description: "Controls the header label of the radio group",
      control: { type: "text" },
      defaultValue: "default heading",
    },
    bodyLabel: {
      name: "Body Label",
      description: "Controls the body label of the radio group",
      control: { type: "text" },
      defaultValue: "default body",
    },
    headingTextSize: {
      name: "Heading Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
      defaultValue: "xl",
    },
    bodyTextSize: {
      name: "Body Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
export type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    accentColor: "white",
    headerLabel: "default heading",
    bodyLabel: "default body",
    headingTextSize: "xl",
    bodyTextSize: "md",
    backgroundColor: "transparent",
  },
};
