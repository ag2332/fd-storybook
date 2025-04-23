import type { Meta, StoryObj } from "@storybook/react";
import PopUp from "./popup";

const meta = {
  title: "components/PopUp",
  component: PopUp,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    title: {
      name: "Title",
    },
    ariaLabel: {
      name: "Aria Label",
    },
    label: {
      name: "Body",
    },
    position: {
      name: "Position",
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    borderRadius: {
      name: "Border Radius",
      description: "Controls the border radius via the Tailwind Class",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      defaultValue: "md",
    },
    width: {
      name: "Width",
      description: "Controls the width of the popup",
      control: { type: "select" },
      options: ["100", "200", "300", "400", "500", "600"],
      defaultValue: "300"
    },
    headingTextSize: {
      name: "Heading Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
      defaultValue: "xl"
    },
    bodyTextSize: {
      name: "Body Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      defaultValue: "md"
    },
    border: {
      name: "Border",
      defaultValue: "false",
    },
    alwaysShow: {
      name: "Always Show",
      defaultValue: "false",
    },
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
    },
    color: {
      name: "Text Color",
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof PopUp>;

export default meta;
export type Story = StoryObj<typeof PopUp>;

export const Primary: Story = {
  args: {
    title: "Pop Up",
    ariaLabel: "Primary pop-up text",
    label:
      "A standard popup used for general top or neutral actions. It draws attention without urgency, ideal for guiding users or confirming basic tasks within the application flow.",
    position: "top",
    borderRadius: "md",
    width: "300",
    headingTextSize: "xl",
    bodyTextSize: "md",
    border: false,
    alwaysShow: false,
  },
};