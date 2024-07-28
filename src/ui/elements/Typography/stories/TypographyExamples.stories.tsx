import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography';

const meta = {
  title: "Elements/Typography/Examples",
  component: Typography
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const BlueHeading: Story = {
  args: {
    children: 'This is an example!',
    type: "h1",
    className: "text-blue-600"
  },
};