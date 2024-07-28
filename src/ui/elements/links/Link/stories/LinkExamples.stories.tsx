import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

const meta: Meta<typeof Link> = {
  title: "Elements/Links/Link/Examples",
  component: Link,
  decorators: [
    (Story) => (
      <div className="w-fit">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const HoverBorderBottom: Story = {
  args: {
    label: "Hover border bottem",
    href: "#",
    className: "pb-1 border-b-2 border-transparent duration-300 hover:border-purple-500 hover:text-purple-600"
  },
};

export const HoverBackground: Story = {
  args: {
    label: "Hover background",
    href: "#",
    className: "px-4 py-2 hover:bg-purple-500 hover:text-white duration-300 rounded-full"
  },
};