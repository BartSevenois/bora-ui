import ImageHeader from "@/ui/content/ImageHeader/ImageHeader";
import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

const Header = () => {
  return (
    <ImageHeader image="./images/header-image.jpg" height="80vh">
      <Container className="h-full">
        <div className="flex items-center h-full">
          <div className="bg-zinc-800/60 lg:w-[45%] text-white p-7 px-10 flex flex-col gap-5 -mt-20">
            <Typography type="h1" className="sm:text-5xl">
              Financial And <br /> Marketing Advisory
            </Typography>
            <Typography>
              Minim minim adipisicing ad ex. Occaecat ut sint exercitation ut
              veniam culpa aliqua labore dolore culpa in elit labore.
            </Typography>
            <Button
              label="Contact us"
              className="bg-blue-500 text-white w-fit"
            />
          </div>
        </div>
      </Container>
    </ImageHeader>
  );
};

export default Header;
