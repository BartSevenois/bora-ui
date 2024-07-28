import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../Button';
import React from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Elements/Button/Examples',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { label: "" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const Background: Story = {
  args: {
    label: 'Button',
    className: "bg-blue-700 text-white duration-300 hover:bg-blue-600 active:translate-y-1"
  },
};

export const HoverRing: Story = {
  args: {
    label: 'Button',
    className: "bg-blue-700 text-white duration-300 hover:bg-white hover:text-blue-700 hover:ring hover:ring-blue-700 active:translate-y-1"
  },
};
