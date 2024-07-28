import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

const meta: Meta<typeof Link> = {
  title: "Elements/Links/Link",
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

export const Default: Story = {
  args: {
    label: "Link",
    href: "#"
  },
};