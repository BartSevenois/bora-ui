import React from "react";

import { cn } from "@/lib/utils";

interface TwoColProps {
  children: React.ReactNode;
  className?: string;
}

const TwoCol: React.FC<TwoColProps> = ({
  children,
  className
}) => {

  return(
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-20",
      className
    )}>
      { children }
    </div>
  );

};

export default TwoCol;