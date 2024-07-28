"use client"
import React from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

import Container from "@/ui/content/Container";
import Button from "@/ui/elements/buttons/Button/Button";
import Typography from "@/ui/elements/Typography/Typography";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({
  className
}) => {
  const GoogleMaps = dynamic(() => import("@/components/IframeComponent"), { ssr: false})
  return (
    <Container className={cn(className, "bg-blue-700")}>
      <div className="grid grid-cols-2 gap-32">
        <div>
          <Typography type="h1" className="text-white">Contact us!</Typography>
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <div className="font-bold text-white">Name</div>
                <input
                  type="text"
                  className="bg-zinc-100 py-2 px-4 focus:outline-none focus:ring-4 ring-yellow-400 rounded-md duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-white">Email</div>
                <input
                  type="text"
                  className="bg-zinc-100 py-2 px-4 focus:outline-none focus:ring-4 ring-yellow-400 rounded-md duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="font-bold text-white">Bericht</div>
              <textarea
                rows={5}
                className="bg-zinc-100 py-2 px-4 focus:outline-none focus:ring-4 ring-yellow-400 rounded-md duration-300"
              />
            </div>
            <Button
              label="Send"
              className="mt-8 rounded-lg bg-white duration-300 text-blue-700 hover:bg-blue-700 hover:text-white hover:ring hover:ring-white active:translate-y-1"
            />
          </div>
        </div>
        <div>
          <div style={{ width: "100%" }} className="rounded-lg">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
