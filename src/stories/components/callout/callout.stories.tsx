import type { Meta, StoryObj } from '@storybook/react';
import Callout from './callout';

const meta = {
  title: 'components/Callout',
  component: Callout,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Heads up! We've noticed something that needs your attention. It's not urgent, but taking a moment to review the details will help keep everything running smoothly. Whether it's a quick fix or just a heads-up, you're in control. If you need help, we're here to guide you every step of the way. Let's keep things on track!",
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'warning', 'error']
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
export type Story = StoryObj<typeof Callout>;

const ButtonProps = {label: "Button Text"};

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
    ariaLabel: "Primary callout text",
    ...ButtonProps,
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
    ariaLabel: "Information callout text",
    ...ButtonProps,
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
    ariaLabel: "Success callout text",
    ...ButtonProps,
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
    ariaLabel: "Warning callout text",
    ...ButtonProps,
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    variant: 'error',
    ariaLabel: "Error callout text",
    ...ButtonProps,
  },
};