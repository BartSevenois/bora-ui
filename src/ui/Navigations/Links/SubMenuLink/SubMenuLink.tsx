"use client";

import React, { useState } from "react";

interface SubMenuProps {
  label: string;
  submenu?: NavItem[];
}

interface NavItem {
  label: string;
  link?: string;
}

const SubMenuLink: React.FC<SubMenuProps> = ({ label, submenu }) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded="false"
      >
        {label}
        <svg
          className="h-5 w-5 flex-none text-gray-400"
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
        <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-900/5">
          <div className="p-4">
            {submenu &&
              submenu.map((link) => (
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <a
                      href="#"
                      className="block font-semibold text-gray-900 whitespace-nowrap"
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
