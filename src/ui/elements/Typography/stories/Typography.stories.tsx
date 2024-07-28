import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography';

const meta = {
  title: "Elements/Typography",
  component: Typography
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const Default: Story = {
  args: {
    children: 'Default typography',
  },
};

export const Types: Story = () => {
  return(
    <div className="flex flex-col gap-4">
      <Typography type="h1">Heading 1 (h1)</Typography>
      <Typography type="h2">Heading 2 (h2)</Typography>
      <Typography type="h3">Heading 3 (h3)</Typography>
      <Typography type="h4">Heading 4 (h4)</Typography>
    </div>
  );
};

export const Sizes: Story = () => {
  return(
    <div className="flex flex-col gap-4">
      
      <Typography size="md">Default (md)</Typography>
      <Typography size="lg">Large (lg)</Typography>
      <Typography size="xl">Extra large (xl)</Typography>
      <Typography size="2xl">Extra large 2 (2xl)</Typography>
      <Typography size="3xl">Extra large 3 (3xl)</Typography>
      <Typography size="4xl">Extra large 4 (4xl)</Typography>
      <Typography size="5xl">Extra large 5 (5xl)</Typography>
    </div>
  );
};

export const Alignments: Story = () => {
  return(
    <div className="flex flex-col gap-4">
      <Typography>Left (default)</Typography>
      <Typography alignment="center">Center</Typography>
      <Typography alignment="right">Right</Typography>
    </div>
  );
};

export const Weights: Story = () => {
  return(
    <div className="flex gap-4">
      <Typography>Default</Typography>
      <Typography weight="semi">Semi bold (semi)</Typography>
      <Typography weight="bold">Bold</Typography>
    </div>
  );
};