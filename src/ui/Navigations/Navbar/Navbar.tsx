import React from "react";

import { cn } from "@/lib/utils";

import Container from "@/ui/content/Container";

interface Navbarprops {
  children?: React.ReactNode;
  className?: string;
};

const Navbar: React.FC<Navbarprops> = ({
  children,
  className
}) => {
  return(
    <Container className={cn(className, "shadow")}>
      <div className="flex items-center h-20">
        { children }
      </div>
    </Container>
  );
};

export default Navbar;