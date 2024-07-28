import Container from "@/ui/content/Container";
import TwoCol from "@/ui/content/TwoCol/TwoCol";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

import Crown from "@/ui/icons/lucide/HandHeart";
import HandHeart from "@/ui/icons/lucide/Crown";

const About = () => {
  return (
    <Container className="py-20 bg-zinc-50">
      <TwoCol>
        <div className="-mt-40">
          <img
            className="object-cover h-[400px] w-full"
            src="./images/about.jpg"
          />
          <div className="flex mt-10 gap-10 md:justify-center sm:flex-row flex-col">
            <div className="flex gap-10 items-center">
              <Crown width={47} height={47} className="stroke-blue-600" />
              <div className="flex flex-col gap-2">
                <Typography className="text-zinc-800" size="5xl" weight="bold">
                  12
                </Typography>
                <Typography weight="semi">Years of experience</Typography>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <HandHeart width={50} height={50} className="stroke-blue-600" />
              <div className="flex flex-col gap-2">
                <Typography className="text-zinc-800" size="5xl" weight="bold">
                  84
                </Typography>
                <Typography weight="semi">Customers served</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <Typography className="text-blue-500" weight="bold" size="xl">
            About us
          </Typography>
          <Typography type="h1" size="5xl">
            Discover the world of <br /> IT Solutions!
          </Typography>
          <Typography>
            Reprehenderit aute deserunt sit laborum reprehenderit sit et dolore
            nostrud consequat in deserunt.Reprehenderit elit cupidatat nulla
            sint laboris id officia velit eiusmod culpa commodo deserunt veniam
            enim.Laborum reprehenderit culpa veniam eu veniam excepteur eiusmod
            adipisicing.
          </Typography>
          <Button label="Read more" className="bg-blue-500 text-white w-fit" />
        </div>
      </TwoCol>
    </Container>
  );
};

export default About;
