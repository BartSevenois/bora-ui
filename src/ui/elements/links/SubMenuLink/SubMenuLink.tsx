"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SubMenuProps {
  label: string;
  submenu?: NavItem[];
  className?: string;
  subMenuClass?: string;
  subLinkClass?: string; 
}

interface NavItem {
  label: string;
  link?: string;
}

const SubMenuLink: React.FC<SubMenuProps> = ({
  label,
  submenu,
  className,
  subLinkClass,
  subMenuClass
}) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm font-semibold"
        aria-expanded="false"
      >
        {label}
        <svg
          className="h-5 w-5 flex-none"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={[
          "pt-3 -left-8 top-full z-10 min-w-[200px] max-w-md duration-500 transition-all absolute",
          activeDropdown ? "visible opacity-100" : "opacity-0 invisible",
        ].join(" ")}
      >
        <div className={cn(
          "overflow-hidden bg-white shadow-md ring-1 ring-gray-900/5",
          subMenuClass
        )}>
          <div className="flex flex-col gap-3 p-5">
            {submenu &&
              submenu.map((link) => (
                <div className={cn(
                  "group relative flex items-center text-sm leading-6 font-semibold text-gray-900",
                  subLinkClass
                )}>
                  <div className="flex-auto">
                    <a
                      href="#"
                      className="block whitespace-nowrap"
                    >
                      {link.label}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuLink;
