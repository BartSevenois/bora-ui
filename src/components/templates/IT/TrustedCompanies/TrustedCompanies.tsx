import Container from "@/ui/content/Container";
import Grid from "@/ui/content/Grid/Grid";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

import Check from "@/ui/icons/lucide/Check";

const TrustedCompanies = () => {
  return (
    <Container className="sm:py-32 py-20 pb-32 bg-zinc-50">
      <Grid md={2} gap={100}>
        <div className="flex flex-col gap-9">
          <Typography type="h1" size="5xl">
            25 Years Trusted <br /> With Big Companies
          </Typography>
          <Typography>
            Elit commodo mollit veniam aliqua quis elit ex incididunt veniam
            reprehenderit.Ut in esse esse sint commodo. Sunt cillum ut dolor
            irure elit velit occaecat Lorem. Sunt sint adipisicing consequat
            magna occaecat sit excepteur est et et est mollit esse consectetur.
          </Typography>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Check width={25} height={25} className="stroke-blue-700" />
              <Typography>
                Incididunt laborum amet magna officia magna occaecat culpa.
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <Check width={25} height={25} className="stroke-blue-700" />
              <Typography>
                Proident qui cillum commodo labore reprehenderit irure.
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <Check width={25} height={25} className="stroke-blue-700" />
              <Typography>Veniam in ex enim culpa occaecat.</Typography>
            </div>
            <div className="flex items-center gap-4">
              <Check width={25} height={25} className="stroke-blue-700" />
              <Typography>
                Laborum sit aliquip tempor mollit consectetur Lorem dolor
                aliquip ad dolore.
              </Typography>
            </div>
          </div>
          <Button className="bg-blue-500 w-fit text-white" label="Read more" />
        </div>
        <div className="relative">
          <img
            src="./images/about.jpg"
            className="object-cover w-full h-[550px]"
          />
          <div className="bg-white shadow-md absolute sm:w-2/3 sm:scale-100 scale-95 -mt-24 sm:mt-0 sm:-left-16 sm:-bottom-14 p-8 border-l-8 border-blue-500 italic">
            "Amet irure elit culpa in nisi quis occaecat. Labore esse
            adipisicing enim do et labore nostrud proident sit excepteur tempor
            culpa est."
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default TrustedCompanies;
