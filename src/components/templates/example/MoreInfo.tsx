import { cn } from "@/lib/utils";

import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";


const MoreInfo = () => {
  return (
    <Container className={cn("md:!pt-32 pb-20 !pt-44")}>
      <Typography type="h1" alignment="center" className="mb-10">
        Pariatur ipsum aute consequat sint elit aliquip.
      </Typography>
      <div className="flex justify-center">
        <Typography alignment="center" className="w-[80%]">
          Dolore duis eu dolore pariatur <b>amet nostrud commodo</b> magna magna
          sint aute do. Enim sit deserunt Lorem aliqua ut est{" "}
          <b>laboris eiusmod</b> in fugiat. Ea duis dolor ea{" "}
          <b>magna excepteur</b> eiusmod enim. Mollit mollit est non adipisicing
          qui pariatur cillum adipisicing. Lorem cillum laboris deserunt
          reprehenderit ad velit dolor.
        </Typography>
      </div>
    </Container>
  );
};

export default MoreInfo;
