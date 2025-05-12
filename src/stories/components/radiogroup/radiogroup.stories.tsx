import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./radiogroup";

const meta = {
  title: "components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    accentColor: "white",
    backgroundColor: "transparent",
    headerLabel: "default heading",
    bodyLabel: "default body",
    borderRadius: "md",
    headingTextSize: "xl",
    bodyTextSize: "md",
    layoutToggle: true,
    direction: true,
    ariaLabel: "Radio Group",
  },
  argTypes: {
    accentColor: {
      control: "color",
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
    borderRadius: {
      name: "Border Radius",
      description: "Controls the border radius via the Tailwind Class",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      defaultValue: "md",
    },
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
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
    layoutToggle: {
      name: "Layout Toggle",
      description: "Toggles the layout of the radio group",
      control: { type: "boolean" },
      defaultValue: true,
    },
    direction: {
      name: "Direction",
      description: "Controls the direction of the radio group",
      control: { type: "boolean" },
      defaultValue: true,
    },
    ariaLabel: {
      name: "Aria Label",
      description: "Controls the aria label of the radio group",
      control: { type: "text" },
      defaultValue: "Radio Group",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
export type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    accentColor: "white",
    headerLabel: "default heading",
    bodyLabel: "default body",
    borderRadius: "md",
    backgroundColor: "transparent",
    headingTextSize: "xl",
    bodyTextSize: "md",
    layoutToggle: true,
    direction: true,
    ariaLabel: "Radio Group",
  },
};
