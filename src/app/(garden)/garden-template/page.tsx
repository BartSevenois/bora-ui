import Container from "@/ui/content/Container";
import Grid from "@/ui/content/Grid/Grid";
import Typography from "@/ui/elements/Typography/Typography";
import TwoCol from "@/ui/content/TwoCol/TwoCol";
import Button from "@/ui/elements/buttons/Button/Button";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Container className="py-10 lg:pb-20">
        <TwoCol className="gap-14">
          <img
            className="object-contain w-full md:order-1 order-2"
            src="./images/garden-header.png"
          />

          <div className="flex items-center order-1 md:order-2">
            <div>
              <Typography className="text-green-500 font-semibold mb-3">
                Welcome to Flora Fijn
              </Typography>
              <Typography type="h1" size="5xl">
                Gardening and landscape
              </Typography>
              <Typography className="mt-5 text-zinc-800">
                Nulla consectetur enim excepteur labore pariatur qui ipsum
                aliqua. Veniam in aliquip quis exercitation exercitation quis
                aute in in magna eu.
              </Typography>
              <div className="flex gap-4 mt-5">
                <Button
                  label="Our services"
                  className="bg-green-400/90 text-white rounded-md"
                />
                <Button label="Get free quote" className="rounded-md bg-zinc-200" />
              </div>
            </div>
          </div>
        </TwoCol>
      </Container>
      <Container className="pb-40">
        <Grid gap={"lg"} md={2} lg={3}>
          <div className="bg-green-50 rounden-lg shadow-md p-5 h-fit">
            <div className="flex items-center gap-4 text-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide text-green-700/70 lucide-trees"
              >
                <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
                <path d="M7 16v6" />
                <path d="M13 19v3" />
                <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
              </svg>
              <Typography weight="semi" size="xl">
                Design & Planting
              </Typography>
            </div>

            <Typography className="mt-5">
              Consequat mollit elit nisi magna incididunt dolor laborum.
              Excepteur deserunt anim non id occaecat excepteur adipisicing
              consequat ullamco.
            </Typography>
          </div>
          <div className="bg-green-50 rounden-lg shadow-md py-10 px-10 h-fit -mt-5">
            <div className="flex items-center gap-4 text-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide text-green-700/70 lucide-pocket-knife"
              >
                <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
                <path d="M18 6h.01" />
                <path d="M6 18h.01" />
                <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
                <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
              </svg>
              <Typography weight="semi" size="xl">
                Maintaining garden
              </Typography>
            </div>

            <Typography className="mt-5">
              Consequat mollit elit nisi magna incididunt dolor laborum.
              Excepteur deserunt anim non id occaecat excepteur adipisicing
              consequat ullamco.
            </Typography>
          </div>
          <div className="bg-green-50 rounden-lg shadow-md p-5 h-fit">
            <div className="flex items-center gap-4 text-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide text-green-700/70 lucide-droplets"
              >
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
              </svg>
              <Typography weight="semi" size="xl">
                Watering garden
              </Typography>
            </div>

            <Typography className="mt-5">
              Consequat mollit elit nisi magna incididunt dolor laborum.
              Excepteur deserunt anim non id occaecat excepteur adipisicing
              consequat ullamco.
            </Typography>
          </div>
        </Grid>
      </Container>
      <Container className="bg-zinc-50 py-24 relative">
      <div className="absolute h-52 w-52 bg-green-300/60 -top-36 rounded-full -right-24 z-20">
      
      </div>
        <div className="absolute h-52 w-52 bg-green-100 -top-28 rounded-full left-5 z-20">
      
        </div>
        <div className="absolute h-52 w-52 bg-green-200 z-10 -top-16 rounded-full -left-24">
      
        </div>
        <Grid md={2} gap={150} className="z-30 relative">
          <div className="flex items-end">
            <div>
              <Typography className="text-green-500 font-semibold mb-3">
                About us
              </Typography>
              <Typography type="h1" size="5xl">
                Our story <br /> over the years
              </Typography>
              <Typography className="mt-10">
                Consequat aute enim culpa pariatur reprehenderit occaecat Lorem.
                Fugiat officia aliqua dolor irure anim cillum reprehenderit
                reprehenderit aliquip exercitation cillum eiusmod. Quis eu nulla
                qui nulla. Aute ullamco ullamco reprehenderit aliqua eu duis
                exercitation quis ullamco officia in deserunt. In nostrud esse
                aliqua eu do laborum. Consectetur pariatur irure magna nisi
                eiusmod fugiat amet quis quis occaecat nisi.
              </Typography>
            </div>
          </div>
          <div>
            <img src="./images/garden-about.jpg" className="rounded-xl" />
          </div>
        </Grid>
      </Container>
    </main>
  );
}
