import React from "react";
import { UiLinkProps } from 'next/link';

import { cn } from "@/lib/utils";

interface CustomComponentProps {
  children?: React.ReactNode;
}

interface LinkProps {
  label: string;
  LinkComponent?: React.ComponentType<UiLinkProps  & CustomComponentProps>
  href: string;
  className?: string;
};

const Link: React.FC<LinkProps> = ({
  label,
  LinkComponent,
  href,
  className
}) => { 

  const RenderLink: React.FC<{ children: React.ReactNode}> = ({
    children
  }) => (
    <>
      {
        LinkComponent ? 
          <LinkComponent href={href}>{children}</LinkComponent> :
          <a href={href}>{children}</a>
        
      }
    </>
  );

  return(  
    <RenderLink>
      <div className={cn(
        "text-zinc-700 font-semibold text-sm",
        className
      )}>
        {label}
      </div>
    </RenderLink>
  );
};

export default Link;