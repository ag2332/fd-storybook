import type { Meta, StoryObj } from '@storybook/react';
import { fn } from "@storybook/test"
import Button from './button';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    onClick: fn(),
    primary: true
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'small', 'medium', 'large', 'transparent']
    },
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    ariaLabel: "Primary button",
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    ariaLabel: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    variant: 'medium',
    ariaLabel: "Medium button",
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    ariaLabel: "Large button",
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    ariaLabel: "Transparent button",
  }
}