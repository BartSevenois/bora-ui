import React from "react";
import Star from "@/ui/icons/Star";
import HalfStar from "@/ui/icons/HalfStar";
import EmptyStar from "@/ui/icons/EmptyStar";

import { cn } from "@/lib/utils";

interface RatingProps {
  number: number;
  starClass?: string;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  number,
  starClass,
  className
}) => {

  const renderStar = (index: number) => {
    if (number >= index + 1) {
      return <Star className={cn(starClass ? starClass : "fill-yellow-300")} />;
    } else if (number >= index + 0.5) {
      return <HalfStar className={cn(starClass ? starClass : "fill-yellow-300")} />;
    } else {
      return <EmptyStar className={cn(starClass ? starClass : "fill-yellow-300")} />;
    }
  };

  return (
    <div className={cn("flex gap-0.5", className)}>
      {Array.from({ length: 5 }, (_, index) => renderStar(index))}
    </div>
  );
};

export default Rating;
