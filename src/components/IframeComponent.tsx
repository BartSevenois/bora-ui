import React from 'react';

const IframeComponent: React.FC = () => {
  return (
    <iframe
      width="100%"
      height="400"
      className="rounded-xl shadow-md shadow-zinc-400"
      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.gps.ie/">gps trackers</a>
    </iframe>
  );
};

export default IframeComponent;
