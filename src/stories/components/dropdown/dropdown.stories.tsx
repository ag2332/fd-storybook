import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./dropdown";

const meta = {
  title: "components/Dropdown",
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  args: {
    headerLabel: "dropdown",
    numberOfItems: 5,
    backgroundColor: "black",
    borderRadius: "md",
  },
  argTypes: {
    headerLabel: {
      description: "Controls the content of the dropdown",
      control: { type: "text" },
      defaultValue: "dropdown",
    },
    backgroundColor: {
      description: "Controls the background color of the modal",
      control: { type: "color" },
      defaultValue: "red",
    },
    borderRadius: {
      description: "Controls the border radius of the modal",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    numberOfItems: {
      name: "Number of dropdowns",
      control: { type: "select" },
      options: [1, 2, 3, 4, 5],
      defaultValue: 5,
    },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
export type Story = StoryObj<typeof DropDown>;

export const Primary: Story = {
  render: (args) => {

    const itemsToShow = [];
    for (let i = 0; i < (args.numberOfItems ?? 5); i++) {
      itemsToShow.push({
        headerLabel: `dropdown ${i+1}`,
      });
    }

    return <DropDown {...args} items={itemsToShow} />;
  },
};