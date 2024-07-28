import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

import BarChart3 from "@/ui/icons/lucide/BarChart3";

const InfoUnderHeader = () => {
  return (
    <Container className="-mt-20 z-10 relative sm:pb-52 pb-40">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-20 gap-10">
        <div className="p-10 bg-white shadow-md">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3
              className="bg-blue-500 p-3 rounded-full stroke-white"
              width={60}
              height={60}
            />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
          <div className="flex justify-center">
            <Button label="Read more" className="text-blue-500 uppercase" />
          </div>
        </div>
        <div className="p-10 bg-blue-500 shadow-md text-white lg:scale-110">
          <div className="flex justify-center mb-5 z-50">
            <BarChart3
              className="bg-white p-3 rounded-full stroke-blue-500"
              width={60}
              height={60}
            />
          </div>
          <Typography type="h3" alignment="center" className="mb-5">
            Sunt incididunt esse.
          </Typography>
          <Typography alignment="center" className="mb-5">
            Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat minim
            incididunt dolor. Esse qui officia ullamco et ad ullamco.
          </Typography>
          <div className="flex justify-center">
            <Button label="Read more" className="text-white uppercase" />
          </div>
        </div>
        <div className="flex justify-center lg:col-span-1 md:col-span-2">
          <div className="p-10 bg-white shadow-md">
            <div className="flex justify-center mb-5 z-50">
              <BarChart3
                className="bg-blue-500 p-3 rounded-full stroke-white"
                width={60}
                height={60}
              />
            </div>
            <Typography type="h3" alignment="center" className="mb-5">
              Sunt incididunt esse.
            </Typography>
            <Typography alignment="center" className="mb-5">
              Anim tempor elit sit sunt in ea ut. Deserunt cillum consequat
              minim incididunt dolor. Esse qui officia ullamco et ad ullamco.
            </Typography>
            <div className="flex justify-center">
              <Button label="Read more" className="text-blue-500 uppercase" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoUnderHeader;
