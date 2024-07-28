import React from "react";

import Navbar from "@/ui/Navigations/Navbar/Navbar";
import Link from "@/ui/elements/links/Link/Link";
import Menu from "@/ui/icons/lucide/Menu";

const Navigation = () => {
  return (
    <Navbar className="!shadow-none">
      <div className="font-bold flex-1 text-green-600">Flora Fijn</div>
      <div className="lg:flex gap-10 hidden">
        <Link className="hover:text-green-600 duration-300" href="/" label="Home" />
        <Link className="hover:text-green-600 duration-300" href="/" label="About" />
        <Link className="hover:text-green-600 duration-300" href="/" label="Services" />
        <Link className="hover:text-green-600 duration-300" href="/" label="Contact" />
        <Link className="hover:text-green-600 duration-300" href="/" label="FAQ" />
      </div>
      <div className="lg:hidden">
        <Menu className="lg:hidden" height={24} width={24} />
      </div>
    </Navbar>
  );
};

export default Navigation;
