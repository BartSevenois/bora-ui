import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../Navbar';
import Link from '@/ui/elements/links/Link/Link';
import Menu from '@/ui/icons/lucide/Menu';

const meta: Meta<typeof Navbar> = {
  title: "Navigations/Navbar",
  component: Navbar
};

export default meta;
type Story = StoryObj<typeof meta> | React.FC;

export const Default: Story = {
  args: {
    children:  (
      <>
        <div className="font-bold mr-20 flex-1 lg:flex-none">LOGO</div>
        <div className="lg:flex gap-10 hidden">
          <Link  label="Home" href="/" />
          <Link  label="About" href="/" />
          <Link  label="Services" href="/" />
          <Link  label="Contact" href="/" />
          <Link  label="FAQ" href="/" />
        </div>
        <div className="lg:flex-1 lg:flex justify-end items-center">
          <div className="text-sm font-semibold hidden lg:block">Log in</div>
          <Menu width={24} height={24} className="lg:hidden" />
        </div>
      </>
    )
  },
};

export const LinksMiddle: Story = {
  args: {
    children:  (
      <>
        <div className="flex-1 font-bold">LOGO</div>
        <div className="lg:flex gap-10 hidden">
          <Link  label="Home" href="/" />
          <Link  label="About" href="/" />
          <Link  label="Services" href="/" />
          <Link  label="Contact" href="/" />
          <Link  label="FAQ" href="/" />
        </div>
        <div className="lg:flex-1 lg:flex justify-end items-center">
          <div className="text-sm font-semibold hidden lg:block">Log in</div>
          <Menu width={24} height={24} className="lg:hidden" />
        </div>
      </>
    )
  },
};

export const LogoMiddle: Story = {
  args: {
    children:  (
      <>
        <div className="lg:flex lg:flex-1 gap-10 hidden">
          <Link  label="Home" href="/" />
          <Link  label="About" href="/" />
          <Link  label="Services" href="/" />
          <Link  label="Contact" href="/" />
          <Link  label="FAQ" href="/" />
        </div>
        <div className="font-bold">LOGO</div>
        
        <div className="flex-1 flex justify-end items-center">
          <div className="text-sm font-semibold hidden lg:block">Log in</div>
          <Menu width={24} height={24} className="lg:hidden" />
        </div>
      </>
    )
  },
};

export const LinksRight: Story = {
  args: {
    children:  (
      <>
        <div className="font-bold flex-1">LOGO</div>
        <div className="lg:flex gap-10 hidden">
          <Link  label="Home" href="/" />
          <Link  label="About" href="/" />
          <Link  label="Services" href="/" />
          <Link  label="Contact" href="/" />
          <Link  label="FAQ" href="/" />
        </div>
        <div className="lg:hidden">
          <Menu width={24} height={24} className="lg:hidden" />
        </div>
      </>
    )
  },
};