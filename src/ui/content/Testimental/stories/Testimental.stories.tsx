// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Testimental from './../Testimental';

const meta: Meta<typeof Testimental> = {
  title: "Content/Testimental",
  component: Testimental,
};

export default meta;
type Story = StoryObj<typeof Testimental>;

export const Default: Story = {
  args: {
    text: "Eu ipsum dolore nulla consectetur dolore consectetur mollit sit incididunt voluptate et ea. Ex culpa voluptate nulla occaecat qui eu. Lorem cillum tempor ea sit non minim commodo consectetur labore occaecat. Est deserunt minim amet aliquip. Velit ex consequat dolor sint consequat et eu consectetur non nulla. Nostrud consequat eiusmod esse id occaecat amet cupidatat anim sit exercitation deserunt. Dolore mollit velit duis qui do tempor aliquip esse.",
    rating: 4.5,
    name: "Bart Sevenois",
    image: "./images/person-2.jpg"
  },
};