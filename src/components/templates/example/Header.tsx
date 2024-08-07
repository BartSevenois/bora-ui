import ImageHeader from "@/ui/content/ImageHeader/ImageHeader";
import Button from "@/ui/elements/buttons/Button/Button";
import Typography from "@/ui/elements/Typography/Typography";

const Header = () => {
  return (
    <ImageHeader image="./images/header-image.jpg">
      <div className="flex justify-center h-full">
        <div className="flex items-center container h-full text-white">
          <div className="flex flex-col gap-7">
            <Typography type="h1" size="5xl">
              Aliqua sit est consectetur!
            </Typography>
            <Typography className="w-2/3 font-semibold" size="lg">
              Ut mollit irure laborum pariatur do tempor. Irure excepteur
              incididunt pariatur id elit proident tempor deserunt irure labore
              pariatur consequat ullamco.
            </Typography>
            <div>
              <Button
                className="bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-white hover:text-blue-700 hover:ring-4 hover:ring-blue-700 duration-300 active:translate-y-1"
                label="More info"
              />
            </div>
          </div>
        </div>
      </div>
    </ImageHeader>
  );
};

export default Header;
