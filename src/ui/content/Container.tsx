import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode,
  className?: string
}
const Container: React.FC<ContainerProps> = ({
  children,
  className
}) => {
  return(
    <div 
      className={cn(
        "flex justify-center px-10 w-full",
        className
      )}
    >
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Container;