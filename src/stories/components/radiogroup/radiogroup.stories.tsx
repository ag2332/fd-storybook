import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./radiogroup";

const meta = {
  title: "components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    headerLabel: "default heading",
    bodyLabel: "default body",
    borderRadius: "md",
    backgroundColor: "red",
    headingTextSize: "xl",
    bodyTextSize: "md",
    direction: true,
    ariaLabel: "Radio Group",
    className: "",
  },
  argTypes: {
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
    className: {
      name: "Class Name",
      description: "Enter your CSS class to edit the Radio Group",
      control: { type: "object" },
      defaultValue: "",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
export type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    headerLabel: "default heading",
    bodyLabel: "default body",
    borderRadius: "md",
    backgroundColor: "red",
    headingTextSize: "xl",
    bodyTextSize: "md",
    direction: true,
    ariaLabel: "Radio Group",
    className: "cursor-pointer my-5 p-4 shadow-lg w-72 z-50 transition-colors duration-200",
  },
};
