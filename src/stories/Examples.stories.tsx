// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Container from "@/ui/content/Container";
import ContentImage from "@/ui/content/ContentImage/ContentImage";
import Typography from "@/ui/elements/Typography/Typography";

const meta = {
  title: "Examples/Blocks",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = React.FC;

export const Default: Story = () => {
  return (
    <Container className="py-20">
      <ContentImage image="./images/header-image.jpg">
        <Typography type="h1" className="text-blue-700 mb-8">
          Wat we voor je kunnen doen!
        </Typography>
        <Typography>
          Ipsum dolore esse nisi Lorem eu cillum consequat in ad aute aute do
          eiusmod amet. Tempor voluptate adipisicing nulla dolor magna sint
          reprehenderit et.
        </Typography>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 mt-10 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-zinc-200/80 p-3 rounded-full fill-blue-700"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path d="M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z" />
              </svg>
              <Typography type="h3" className="text-zinc-800">
                Help your business
              </Typography>
            </div>
            <Typography className="mt-5">
              Aute mollit ea culpa enim proident nisi cillum dolore duis esse
              quis commodo ipsum.
            </Typography>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-zinc-200/80 p-3 rounded-full fill-blue-700"
                width="60"
                height="60"
                viewBox="0 0 24 24"
              >
                <path d="M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z" />
              </svg>
              <Typography type="h3" className="text-zinc-800">
                Help your business
              </Typography>
            </div>
            <Typography className="mt-5">
              Aute mollit ea culpa enim proident nisi cillum dolore duis esse
              quis commodo ipsum.
            </Typography>
          </div>
        </div>
      </ContentImage>
    </Container>
  );
};
