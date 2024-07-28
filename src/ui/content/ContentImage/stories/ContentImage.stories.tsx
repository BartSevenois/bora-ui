import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ContentImage from '../ContentImage';
import Typography from '@/ui/elements/Typography/Typography';

const meta = {
  title: "Content/ContentImage",
  component: ContentImage
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const Default: Story = {
  args: {
    image: "./images/about.jpg",
    children: (
      <div className="">
        <Typography type="h1" className="mb-10">
          In quis ea ex excepteur voluptate
        </Typography>

        <Typography>
          Officia deserunt ipsum in anim velit ipsum officia non cupidatat est
          ipsum laboris mollit pariatur. Do eu sunt enim dolor pariatur sit
          est culpa. Nostrud ut sint cillum enim non dolore irure ad sint
          labore incididunt dolor dolor velit.
        </Typography>
      </div>
    )
  }
}


