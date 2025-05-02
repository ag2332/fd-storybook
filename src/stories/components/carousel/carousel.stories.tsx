import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./carousel";

const meta = {
  title: "components/Carousel",
  component: Carousel,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Carousel Content",
    borderRadius: "md",
    backgroundColor: "red",
    color: "white",
    width: "300",
    border: false,
    removeSelectorBG: false,
    alwaysShowSelector: true,
    alwaysShowButtons: true,
  },
  argTypes: {
    children: {
        name: "Carousel Content",
        description: "The content of the carousel item",
        control: { type: "text" },
    },
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
    },
    color: {
        name: "Text Color",
      control: { type: "color" },
    },
    border: {
      name: "Border",
      defaultValue: "false",
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
      description: "Controls the width of the carousel",
      control: { type: "select" },
      options: ["100", "200", "300", "400", "500", "600"],
      defaultValue: "300",
    },
    removeSelectorBG: {
      name: "Remove Selector Background",
      description: "If true, the selector background will be removed",
      control: { type: "boolean" },
    },
    alwaysShowSelector: {
      name: "Always Show Selector",
      description: "If true, the carousel selector will always be shown",
      control: { type: "boolean" },
    },
    alwaysShowButtons: {
      name: "Always Show Buttons",
      description: "If true, the carousel buttons will always be shown",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
export type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {
    children: "Carousel Content",
    borderRadius: "md",
    backgroundColor: "red",
    color: "white",
    width: "300",
    border: false,
    alwaysShowSelector: true,
    alwaysShowButtons: true,
  },
};