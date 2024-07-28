import ImageHeader from "@/ui/content/ImageHeader/ImageHeader";
import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

const CtaContact = () => {
  return (
    <ImageHeader
      image="./images/header-image.jpg"
      height="450"
      className="!h-[650px] sm:!h-[450px]"
    >
      <Container className="h-full">
        <div className="flex text-white items-center justify-center h-full">
          <div className="flex flex-col gap-8">
            <Typography type="h1" size="5xl" alignment="center">
              Bring A New Experience <br />
              To Your Investment
            </Typography>
            <div className="flex justify-center">
              <Typography className="sm:w-[60%]" alignment="center">
                Mollit aute fugiat officia magna elit est. Culpa do commodo
                irure enim cupidatat id nisi consectetur. Ipsum officia aliqua
                nulla non tempor eiusmod consequat proident incididunt sunt sit
                nulla amet.
              </Typography>
            </div>
            <div className="flex justify-center">
              <Button label="Contact us" className="w-fit bg-blue-500" />
            </div>
          </div>
        </div>
      </Container>
    </ImageHeader>
  );
};

export default CtaContact;
