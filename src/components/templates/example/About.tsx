import React from "react";
import Container from "@/ui/content/Container";
import ContentImage from "@/ui/content/ContentImage/ContentImage";
import Typography from "@/ui/elements/Typography/Typography";

import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <Container className={cn(className)}>
      <ContentImage
        image="./images/about.jpg"
        className="py-20"
        imageClass="rounded-xl"
      >
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
      </ContentImage>
    </Container>
  );
};

export default About;
