import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {

  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;