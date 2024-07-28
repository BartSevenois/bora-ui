import Container from "@/ui/content/Container";
import Grid from "@/ui/content/Grid/Grid";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

const Experts = () => {
  return (
    <Container className="sm:py-32 py-20">
      <Grid gap={100} lg={3} md={2}>
        <div className="flex flex-col gap-8 sm:col-span-2 lg:col-span-1">
          <Typography className="text-blue-500" weight="bold" size="xl">
            Meet With
          </Typography>
          <Typography type="h1" size="5xl">
            Expert Advisor
          </Typography>
          <Typography>
            Irure anim quis irure aliquip quis fugiat aute in dolore id. Culpa
            et velit culpa dolor pariatur non cillum in aliqua officia nostrud
            est. Cupidatat exercitation consequat officia do nulla officia duis
            eiusmod dolor laborum fugiat pariatur.
          </Typography>
          <Button label="View all" className="bg-blue-500 text-white w-fit" />
        </div>
        <div>
          <img className="w-full" src="./images/person-1.jpg" />
        </div>
        <div>
          <img className="w-full" src="./images/person-2.jpg" />
        </div>
      </Grid>
    </Container>
  );
};

export default Experts;
