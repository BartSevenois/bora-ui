import Container from "@/ui/content/Container";
import Facebook from "@/ui/icons/lucide/Facebook";
import Instagram from "@/ui/icons/lucide/Instagram";
import Youtube from "@/ui/icons/lucide/Youtube";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-12 sm:flex items-center w-full text-white hidden">
      <Container>
        <div className="flex justify-between h-full items-center">
          <div className="flex gap-20">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-white"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              <div className="font-semibold">04 78 45 02 12</div>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=""
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div className="font-semibold">it.solutions@gmail.com</div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <Facebook width={24} height={24} />
              <Instagram width={24} height={24} />
              <Youtube width={24} height={24} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
