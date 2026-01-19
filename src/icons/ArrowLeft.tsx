import React from 'react';

const ArrowLeft = (): React.ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect
        x="79"
        y="79"
        width="78"
        height="78"
        rx="39"
        transform="rotate(-180 79 79)"
        stroke="#252525"
        strokeWidth="2"
      />
      <path
        d="M44.1475 55.9697L28.2258 40.1164L44.146 24.262"
        stroke="#252525"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default ArrowLeft;
