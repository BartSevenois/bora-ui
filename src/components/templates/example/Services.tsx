import React from "react";

import Container from "@/ui/content/Container";
import Grid from "@/ui/content/Grid/Grid";
import Card from "@/ui/content/Card/Card";
import Typography from "@/ui/elements/Typography/Typography";

import { cn } from "@/lib/utils";

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <Container className={cn("bg-blue-100 md:!pb-32 !pb-44", className)}>

      { /** Title */ }
      <Typography type="h1" alignment="center" className="mb-10">
        Pariatur ipsum aute consequat sint elit aliquip.
      </Typography>

      { /** Description / info */}
      <div className="flex justify-center mb-10">
        <Typography className="w-[80%]" alignment="center">
          Dolore duis eu dolore pariatur <b>amet nostrud commodo</b> magna magna
          sint aute do. Enim sit deserunt Lorem aliqua ut est{" "}
          <b>laboris eiusmod</b> in fugiat. Ea duis dolor ea{" "}
          <b>magna excepteur</b> eiusmod enim. Mollit mollit est non adipisicing
          qui pariatur cillum adipisicing. Lorem cillum laboris deserunt
          reprehenderit ad velit dolor.
        </Typography>
      </div>

      { /** Services */}
      <Grid>
        <Card
          image="./images/header-image.jpg"
          title="Service 1"
          description="Cupidatat sint velit anim id non sunt dolor qui. Amet nisi amet magna ullamco labore deserunt nostrud. Mollit ipsum aute culpa in incididunt officia adipisicing veniam consequat. Ex magna labore reprehenderit commodo occaecat elit voluptate culpa deserunt reprehenderit."
          className="bg-zinc-50"
        />
        <Card
          image="./images/header-image.jpg"
          title="Service 2"
          description="Deserunt deserunt ipsum aliquip sunt nisi non aliquip pariatur veniam dolore mollit eiusmod officia reprehenderit. Proident mollit voluptate duis reprehenderit ex. Labore id in consequat irure culpa elit mollit elit. Lorem velit deserunt veniam exercitation exercitation qui dolor proident proident id dolore ea."
        />
        <Card
          image="./images/header-image.jpg"
          title="Service 3"
          description="Anim reprehenderit nulla nostrud duis aliqua fugiat fugiat reprehenderit ipsum labore eu officia. Labore cupidatat velit sint et fugiat tempor amet. Duis cillum laborum in ea dolore voluptate mollit deserunt. Incididunt consectetur et consequat esse qui nulla ullamco id duis enim ad. Do est cupidatat velit id fugiat non eu velit culpa Lorem irure do laboris."
        />
      </Grid>
      
    </Container>
  );
};

export default Services;
