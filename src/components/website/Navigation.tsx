import Navbar from "@/ui/Navigations/Navbar/Navbar";

import Link from "@/ui/elements/links/Link/Link";
import NextLink from "next/link";
import SubMenuLink from "@/ui/elements/links/SubMenuLink/SubMenuLink";

const Navigation = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Example template", href: "/example" },
    { label: "Sales template", href: "/sales-template" },
    { label: "Garden template", href: "/garden-template" },
  ];
  return (
    <>
      <Navbar>
        <div className="flex gap-10">
          {links.map((link) => (
            <Link
              LinkComponent={NextLink}
              label={link.label}
              href={link.href}
              className="pb-1 border-b-2 border-transparent duration-300 hover:border-purple-500 mt-2 hover:text-purple-600"
            />
          ))}
          <SubMenuLink
            className="text-zinc-700 pb-1 border-b-2 border-transparent duration-300 hover:border-purple-500 mt-2 hover:text-purple-600"
            label="Services"
            submenu={[{ label: "It consulting" }]}
            subLinkClass="py-1 rounded-none hover:bg-transparent hover:text-purple-500 duration-300"
            subMenuClass="rounded-none"
          />
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
