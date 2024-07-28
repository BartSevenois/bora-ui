import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

const Cta = () => {
  return(
    <Container className="md:-mt-14 -mt-24 absolute w-full">
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 md:flex-row xl:w-[60%] lg:w-[80%] w-[100%] bg-blue-700 items-center py-8 px-12 justify-between rounded-lg shadow-md">
            <Typography type="h1" size="3xl" className="text-white text-center md:text-left">
              Make your whish come true!
            </Typography>
            <Button label="Contact us" className="bg-white text-blue-700 rounded-md duration-300 hover:text-white hover:bg-blue-700 hover:ring hover:ring-white active:translate-y-1"/>
          </div>
        </div>
      </Container>
  );
};

export default Cta;