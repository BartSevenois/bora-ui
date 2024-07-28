import Container from "@/ui/content/Container";
import Typography from "@/ui/elements/Typography/Typography";
import Button from "@/ui/elements/buttons/Button/Button";

import Facebook from "@/ui/icons/lucide/Facebook";
import Instagram from "@/ui/icons/lucide/Instagram";
import Youtube from "@/ui/icons/lucide/Youtube";
import ChevronRight from "@/ui/icons/lucide/ChevronRight";

const Footer = () => {
  return (
    <Container className="bg-zinc-800 text-zinc-300 py-10">
      <div className="flex gap-4 flex-wrap">
        <div className="sm:w-[33%] w-full flex flex-col gap-5">
          <Typography className="text-white" weight="bold" size="4xl">
            IT Solutions
          </Typography>
          <Typography weight="semi" className="mb-3">
            Aliquip nostrud officia occaecat ea eu consectetur. Dolor aute
            fugiat occaecat et quis cupidatat dolor do veniam occaecat eiusmod
            aute ut.
          </Typography>
          <div className="flex gap-5">
            <div className="p-3 rounded-full bg-white">
              <Facebook width={25} height={25} className="stroke-blue-600" />
            </div>
            <div className="p-3 rounded-full bg-white">
              <Instagram width={25} height={25} className="stroke-blue-600" />
            </div>
            <div className="p-3 rounded-full bg-white">
              <Youtube width={25} height={25} className="stroke-blue-600" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Typography weight="bold" size="lg" className="text-white">
            Other pages
          </Typography>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Home</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">About</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Services</Typography>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Typography weight="bold" size="lg" className="text-white">
            Quick Links
          </Typography>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Privacy Policy</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Terms Of Service</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Disclaimer</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Credits</Typography>
          </div>
          <div className="flex items-center gap-2">
            <ChevronRight width={20} height={20} />
            <Typography weight="semi">Faq</Typography>
          </div>
        </div>
        <div className="sm:w-[33%] w-full justify-start flex flex-col gap-5">
          <Typography weight="bold" size="xl" className="text-white">
            Newsletter
          </Typography>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="bg-white py-2 px-5 w-full focus:outline-none focus:ring focus:ring-blue-500"
            />
            <Button label="Subscribe" className="bg-blue-500 text-white" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
