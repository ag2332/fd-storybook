import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./modal";

const meta = {
  title: "components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  args: {
    width: "300",
    borderRadius: "md",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
    alwaysShow: false,
    children: "This is a modal",
  },
  argTypes: {
    children: {
      name: "Children",
      description: "Controls the content of the modal",
      control: { type: "text" },
      defaultValue: "This is a modal",
    },
    width: {
      name: "Width",
      description: "Controls the width of the popup",
      control: { type: "select" },
      options: ["100", "200", "300", "400", "500", "600"],
      defaultValue: "300"
    },
    borderRadius: {
      name: "Border Radius",
      description: "Controls the border radius via the Tailwind Class",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      defaultValue: "md",
    },
    overlayColor: {
      name: "Overylay Colour",
      control: { type: "color" },
    },
    backgroundColor: {
      name: "Background Colour",
      control: { type: "color" },
    },
    alwaysShow: {
      name: "Always Show",
      description: "If true, the modal will always be shown",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
export type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    width: "300",
    borderRadius: "md",
    overlayColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
    alwaysShow: false,
    children: "Welcome to your new dashboard! This space is designed to give you control and visibility over tasks, deadlines, and team collaboration. Customize your experience by adjusting settings, rearranging components, and adding integrations that suit your workflow. The platform is built for speed and reliability, whether you're managing small projects or large-scale operations. Dive in and explore the tools designed to streamline your process and keep everything running smoothly.",
  },
};