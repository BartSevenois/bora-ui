import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from './../Card';
import Grid from '../../Grid/Grid';

const meta: Meta<typeof Card> = {
  title: "Content/Card/Examples",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card> | React.FC;

export const CardGrid: Story = () => {
  return(
    <Grid md={2} lg={3}>
      <Card
        title="Dolor fugiat culpa"
        description="Dolor voluptate enim consectetur in deserunt esse laboris exercitation adipisicing do voluptate."
        image="./images/header-image.jpg"
      />
      <Card
        title="Dolor fugiat culpa"
        description="Dolor voluptate enim consectetur in deserunt esse laboris exercitation adipisicing do voluptate."
        image="./images/header-image.jpg"
      />
      <Card
        title="Dolor fugiat culpa"
        description="Dolor voluptate enim consectetur in deserunt esse laboris exercitation adipisicing do voluptate."
        image="./images/header-image.jpg"
      />
    </Grid>
  )
}
