import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Typography from "./../../elements/Typography/Typography";

interface CardProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  image?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  className,
  image
}) => {

  return(
    <div className={cn("shadow-md bg-white", className)}>
      {
        image && <img className="object-cover w-full h-[250px]" src={image}/>
      }
      {
        (title || description)  && 
        <div className="p-8">
          { title && <Typography type="h3">{title}</Typography> }
          { description && <Typography className="mt-5">{description}</Typography> }
        </div>
      }
      {children}
    </div>
  );
};

export default Card;