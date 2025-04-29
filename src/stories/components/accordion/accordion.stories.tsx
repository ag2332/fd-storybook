import type { Meta, StoryObj } from "@storybook/react";
import AccordionGroup from "./accordion-group";

const meta = {
  title: "components/Accordion",
  component: AccordionGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    border: false,
    borderRadius: "md",
    headingTextSize: "xl",
    bodyTextSize: "md",
    numberOfItems: 5,
    iconVisible: true,
    logoUrl: "https://www.svgrepo.com/show/80156/down-arrow.svg",
  },
  argTypes: {
    backgroundColor: {
      name: "Background Color",
      control: { type: "color" },
    },
    secondaryBackgroundColor: {
      name: "Secondary Background Color",
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
    headingTextSize: {
      name: "Heading Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      defaultValue: "xl",
    },
    bodyTextSize: {
      name: "Body Text Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      defaultValue: "md",
    },
    numberOfItems: {
      name: "Number of Accordions",
      control: { type: "select" },
      options: [1, 2, 3, 4, 5],
      defaultValue: 5,
    },
    iconVisible: {
      name: "Icon Visible",
      control: { type: "boolean" },
      defaultValue: true,
    },
    logoUrl: {
      name: "Logo Image URL",
      control: { type: "text" },
      defaultValue: "https://www.svgrepo.com/show/80156/down-arrow.svg",
    },
    items: {
      table: {
        disable: true,
      }
    }
  },
} satisfies Meta<typeof AccordionGroup>;

export default meta;
export type Story = StoryObj<typeof AccordionGroup>;

export const Primary: Story = {
  render: (args) => {

    const itemsToShow = [];
    for (let i = 0; i < (args.numberOfItems ?? 5); i++) {
      itemsToShow.push({
        headerLabel: `Header ${i+1}`,
        bodyLabel: `Body ${i+1}`,
      });
    }

    return <AccordionGroup {...args} items={itemsToShow} />;
  },
};