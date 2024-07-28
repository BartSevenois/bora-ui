import React from "react";

import Typography from "@/ui/elements/Typography/Typography";
import Rating from "@/ui/data/Rating/Rating";

interface TestimentalProps {
  rating: number;
  text: string;
  name: string;
  image: string;
};

const Testimental: React.FC<TestimentalProps> = ({
  rating=0,
  text,
  name,
  image
}) => {
  return (
    <div className="bg-white p-10 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <Icon />
        <Rating number={rating} />
      </div>
      <div className="mt-10">
        <Typography>
          {text}
        </Typography>
        <div className="flex gap-8 mt-10 items-center">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={image}
          />
          <div className="text-md font-bold">{name}</div>
        </div>
      </div>
    </div>
  );
};

const Icon = () => (
  <svg
    clip-rule="evenodd"
    width={50}
    height={50}
    className="fill-zinc-400"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
      fill-rule="nonzero"
    />
  </svg>
);

export default Testimental;
