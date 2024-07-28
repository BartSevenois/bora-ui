import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./ImageHeader.module.css";

interface ImageHeaderProps {
  children?: ReactNode;
  image: string;
  height?: string;
  className?: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({
  children,
  image,
  height,
  className
}) => {

  if (!height) height = "70vh";
  else if (typeof height === "number" || !Number.isNaN(Number(height))) {
    height = height + "px";
  }

  let cssVars: any = {
    "--height": height
  };

  return(
    <section 
      className={cn(
      "relative w-full z-0",
      styles["image-header"],
      className
      )}
      style={cssVars}
    >
      <img
        src={image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
};

export default ImageHeader;