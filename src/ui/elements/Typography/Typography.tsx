import React from 'react';

import { cn } from '@/lib/utils';

type TypographyProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | "p";
  children: React.ReactNode;
  className?: string;
  size?: "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md";
  weight?: "bold" | "semi";
  alignment?: "center" | "left" | "right";
};

const sizes = {
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  "xl": "text-xl",
  "lg": "text-lg",
  "md": "text-md"
} as const;

const Typography: React.FC<TypographyProps> = ({
  type = "p",
  children,
  size,
  className,
  weight,
  alignment="left"
}) => {

  if (!type) type = "p";

  const sizeType = {
    h1: "4xl",
    h2: "3xl",
    h3: "2xl",
    h4: "xl",
    p: "md"
  } as const;
  
  const Heading = type;

  const weightTypes = {
    bold: "font-bold",
    semi: "font-semibold"
  } as const;

  const alignmentTypes = {
    left: "text-left",
    right: "text-right",
    center: "text-center"
  } as const;

  return (
    <Heading
      className={cn(
        size ? sizes[size] : sizes[sizeType[type]],
        !["p"].includes(type) && "font-bold",
        weight && weightTypes[weight],
        alignment && alignmentTypes[alignment],
        className
      )}
    >
      {children}
    </Heading>
  );
};

export default Typography;