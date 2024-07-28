"use client";

import React, { useState } from "react";

import SubMenuLink from "../Links/SubMenuLink/SubMenuLink";
import SubMenuIconLink from "../Links/SubMenuIconLink";
import Drawer from "@/ui/Drawers/Drawer";
import DefaultLink from "../Links/DefaultLink";

interface NavItem {
  label: string;
  link?: string;
  submenu?: NavItem[];
}

interface NavMenuProps {
  items?: NavItem[];
}

const NavigationBar: React.FC<NavMenuProps> = ({ items }) => {

  const [showPhoneMenu, setPhoneMenu] = useState<boolean>(false);

  return (
    <header className="bg-white fixed z-50 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        { /** Logo */}
        <div className="flex lg:flex-1 items-center gap-3">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="./images/logo.png"
            />
            
          </a>
          <span className="font-semibold text-blue-800">Technova</span>
        </div>

        { /** Hamburger icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setPhoneMenu(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        { /** Navigation links */ }
        <div className="hidden lg:flex lg:gap-x-12">

          
          
          {
            items && items.map(item => (
                item.submenu ? <SubMenuLink label={item.label} submenu={item.submenu} /> :  
                <DefaultLink label={item.label} link={item.link} />
            ))
          }

          <SubMenuIconLink />

        </div>

        { /** Log in button */ }
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>

      </nav>

      {/* Mobile menu, show/hide based on menu open state. */}
      <Drawer show={showPhoneMenu} onHide={() => setPhoneMenu(false)} />
    </header>
  );
};

export default NavigationBar;
