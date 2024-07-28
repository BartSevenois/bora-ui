import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentImageProps {
  children?: ReactNode;
  image: string;
  className?: string;
  imageClass?: string;
}

const ContentImage: React.FC<ContentImageProps> = ({
  children,
  image,
  className,
  imageClass,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-32 gap-14">
      <div className="lg:w-[55%] flex items-center">
        <div>
          {children}
        </div>
      </div>
      <div className="lg:w-[45%] h-auto">
        <img
          className={cn("w-full object-cover h-[400px]", imageClass)}
          src={image}
        />
      </div>
    </div>
  );
};

export default ContentImage;
