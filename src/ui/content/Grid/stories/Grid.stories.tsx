import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../Grid';
import Typography from '@/ui/elements/Typography/Typography';

const meta = {
  title: "Content/Grid",
  component: Grid,
  argTypes: {
    children: {
      control: "nothing"
    },
    gap: {
      control: 'text',
      table: {
        order: '1',
      },
    },
    cols: {
      control: 'inline-radio'
    },
    sm: {
      control: 'inline-radio'
    },
    md: {
      control: 'inline-radio'
    },
    lg: {
      control: 'inline-radio'
    },
    xl: {
      control: 'inline-radio'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;


const Child = () => (
  <>
    
      <div className="bg-blue-500 text-white p-5">Grid col</div>
      <div className="bg-blue-500 text-white p-5">Grid col</div>
      <div className="bg-blue-500 text-white p-5">Grid col</div>
    
  </>
)


export const Default: Story = {
  args: {
    children: <Child />
  }
}
