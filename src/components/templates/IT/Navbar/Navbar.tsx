import Container from "@/ui/content/Container";
import Button from "@/ui/elements/buttons/Button/Button";
import Menu from "@/ui/icons/lucide/Menu";

const Navbar = () => {
  return (
    <div className="bg-white h-20 w-full flex items-center">
      <Container className="">
        <div className="flex justify-between items-center h-full">
          <div className="font-bold text-2xl text-blue-600 flex-1">
            IT Solutions
          </div>
          <div className="lg:flex gap-10 font-semibold hidden">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-5 items-center ">
              <Button label="Contact us" className="bg-blue-500 text-white" />
              <Menu className="stroke-zinc-700 lg:hidden" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
