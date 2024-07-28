import React from "react";

import { Icon } from "@/Types/General";

const ChevronRight: React.FC<Icon> = ({
  className,
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export default ChevronRight;
