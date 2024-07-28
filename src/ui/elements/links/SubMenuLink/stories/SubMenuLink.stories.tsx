import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SubMenuLink from '../SubMenuLink';
import Typography from '@/ui/elements/Typography/Typography';

const meta: Meta<typeof SubMenuLink> = {
  title: "Elements/Links/SubMenuLink",
  component: SubMenuLink,
  decorators: [
    (Story) => (
      <div className="h-36">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <div className="flex justify-center">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const Default: Story = {
  args: {
    label: "Sub menu",
    submenu: [
      {
        label: "Sub menu 1",
        link: "/"
      },
      {
        label: "Sub menu 2",
        link: "/"
      }
    ]
  }
}


export const HoverBorderBottom: Story = {
  args: {
    label: "Sub menu",

    submenu: [{
      "label": "Sub menu 1",
      "link": "/"
    }, {
      "label": "Sub menu 2",
      "link": "/"
    }],

    className: "text-zinc-700 pb-1 border-b-2 border-transparent duration-300 hover:border-purple-500 mt-2 hover:text-purple-600",
    subLinkClass: "py-1 rounded-none hover:bg-transparent hover:text-purple-500 duration-300"
  }
};


