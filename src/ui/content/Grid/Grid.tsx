import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { gridCols, smGridCols, mdGridCols, lgGridCols, xlGridCols, gapTypes } from "./styles";

import styles from "./Grid.module.css";

type ColType = 1 | 2 | 3 | 4 | 5;

interface GridProps {
  children?: ReactNode;
  className?: string; 
  cols?: ColType;
  sm?: ColType;
  md?: ColType;
  lg?: ColType;
  xl?: ColType;
  gap?: number | string;
}

const Grid: React.FC<GridProps> = ({
  gap="md",
  children,
  cols,
  sm,
  md,
  lg,
  xl,
  className
}) => {

  if (!cols && !sm && !md && !lg && !xl) cols = 3;
  else if (!cols) cols = 1;

  if (gap === "sm" || gap === "md" || gap === "lg" || gap === "xl") gap = gapTypes[gap];
  else if (!gap) gap = "30px";
  else if (typeof gap === "number" || !Number.isNaN(Number(gap))) gap = gap + "px";

  let cssVars = {
    "--gap": gap
  } as any;

  return(
    <div
      style={cssVars}
      className={cn(
        "grid",
        gridCols[cols],
        sm && smGridCols[sm],
        md && mdGridCols[md],
        lg && lgGridCols[lg],
        xl && xlGridCols[xl],
        styles.grid,
        className
      )}
    >
      { children }
    </div>
  );

}

export default Grid;