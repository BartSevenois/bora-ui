import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  className?: string;
  size?: "md" | "lg";
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  label,
  className="bg-zinc-200 text-zinc-700",
  size="md",
  onClick,
  ...props
}) => {

  
  const sizeTypes = {
    md: "py-3 px-8",
    lg: "px-8 py-4"
  } as const;
  
  return(
    <button
      onClick={onClick}
      className={cn(
        "font-bold duration-300",
        sizeTypes[size],
        className
      )}
      {...props}
    >{label}</button>
  );
};

export default Button;