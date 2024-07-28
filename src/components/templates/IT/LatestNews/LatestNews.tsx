import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Grid from "@/ui/content/Grid/Grid";
import Button from "@/ui/elements/buttons/Button/Button";

import Calendar from "@/ui/icons/lucide/Calendar";

const LatestNews = () => {
  return (
    <Container className="sm:py-32 py-20">
      <div className="flex flex-col gap-10 items-center">
        <Typography type="h1" size="5xl">
          Latest News
        </Typography>
        <Typography className="lg:w-1/2 md:w-3/4" alignment="center">
          Officia aute id nostrud occaecat duis. Sunt sint laboris fugiat eu
          dolor. Sunt laboris ea nisi est magna dolore exercitation deserunt
          cillum. Ex aliquip consequat quis aliquip et.
        </Typography>
      </div>
      <Grid className="mt-16" gap={60} md={2} xl={3}>
        <div className="bg-white shadow-md flex flex-col">
          <img src="./images/header-image.jpg" className="w-full h-[300px]" />
          <div className="p-6 px-10 flex pb-10 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar width={20} height={20} className="-mt-0.5" />
                <Typography weight="semi" className="text-sm">
                  Octobre 12, 2024
                </Typography>
              </div>

              <Typography type="h3">Mijn laatste artikel</Typography>
            </div>
            <div>
              <Typography className="mb-3">
                Ut labore Lorem ad reprehenderit reprehenderit tempor do
                consequat. Dolor culpa quis excepteur laboris proident ut Lorem
                non ipsum excepteur.
              </Typography>
            </div>
            <div>
              <Button
                label="Read More"
                className="bg-blue-500 text-white w-fit"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md flex flex-col">
          <img src="./images/header-image.jpg" className="w-full h-[300px]" />
          <div className="p-6 px-10 flex pb-10 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar width={20} height={20} className="-mt-0.5" />
                <Typography weight="semi" className="text-sm">
                  Octobre 12, 2024
                </Typography>
              </div>

              <Typography type="h3">Mijn laatste artikel</Typography>
            </div>
            <Typography className="mb-3">
              Ut labore Lorem ad reprehenderit reprehenderit tempor do
              consequat. Dolor culpa quis excepteur laboris proident ut Lorem
              non ipsum excepteur.
            </Typography>
            <Button
              label="Read More"
              className="bg-blue-500 text-white w-fit"
            />
          </div>
        </div>
        <div className="bg-white shadow-md flex flex-col">
          <img src="./images/header-image.jpg" className="w-full h-[300px]" />
          <div className="p-6 px-10 flex pb-10 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar width={20} height={20} className="-mt-0.5" />
                <Typography weight="semi" className="text-sm">
                  Octobre 12, 2024
                </Typography>
              </div>

              <Typography type="h3">Mijn laatste artikel</Typography>
            </div>
            <Typography className="mb-3">
              Ut labore Lorem ad reprehenderit reprehenderit tempor do
              consequat. Dolor culpa quis excepteur laboris proident ut Lorem
              non ipsum excepteur. Dolor culpa quis excepteur laboris proident
              ut Lorem non ipsum excepteur.
            </Typography>
            <Button
              label="Read More"
              className="bg-blue-500 text-white w-fit"
            />
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default LatestNews;
