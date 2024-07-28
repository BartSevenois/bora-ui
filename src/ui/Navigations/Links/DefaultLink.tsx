import React from "react";

interface DefaultLinkProps {
  label: string,
  link?: string
};

const DefaultLink: React.FC<DefaultLinkProps> = ({
  label,
  link
}) => {
  return (
    <a href={link} className="text-sm font-semibold leading-6 text-gray-900">
       {label}
    </a>
  );
};

export default DefaultLink;
