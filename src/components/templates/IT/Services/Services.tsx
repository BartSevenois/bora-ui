import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

import BarChart3 from "@/ui/icons/lucide/BarChart3";

const Services = () => {
  return (
    <Container className="sm:py-32 py-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-7">
          <Typography className="text-blue-500" weight="bold" size="xl">
            Our services
          </Typography>
          <Typography type="h1" size="5xl">
            What we offer
          </Typography>
          <Typography>
            Reprehenderit aute deserunt sit laborum reprehenderit sit et dolore
            nostrud consequat in deserunt.Reprehenderit elit cupidatat nulla
            sint.
          </Typography>
          <Button label="Read more" className="bg-blue-500 text-white w-fit" />
        </div>
        <div className="bg-zinc-50 shadow-md border-b-8 border-blue-500 p-6 pt-8">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3 className=" stroke-blue-500" width={60} height={60} />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
        </div>
        <div className="bg-zinc-50 shadow-md border-b-8 border-blue-500 p-6 pt-8">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3 className=" stroke-blue-500" width={60} height={60} />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
        </div>
        <div className="bg-zinc-50 shadow-md border-b-8 border-blue-500 p-6 pt-8">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3 className=" stroke-blue-500" width={60} height={60} />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
        </div>
        <div className="bg-zinc-50 shadow-md border-b-8 border-blue-500 p-6 pt-8">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3 className=" stroke-blue-500" width={60} height={60} />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
        </div>
        <div className="bg-zinc-50 shadow-md border-b-8 border-blue-500 p-6 pt-8">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3 className=" stroke-blue-500" width={60} height={60} />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Services;
