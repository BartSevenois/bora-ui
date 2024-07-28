// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Rating from './../Rating';

const meta: Meta<typeof Rating> = {
  title: "Data/Rating",
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
   number: 4
  },
};