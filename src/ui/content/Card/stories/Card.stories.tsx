// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Card from './../Card';

const meta: Meta<typeof Card> = {
  title: "Content/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
   title: "Dolor fugiat culpa",
   description: "Dolor voluptate enim consectetur in deserunt esse laboris exercitation adipisicing do voluptate.",
   image: "./images/header-image.jpg"
  },
};