import React from "react";

const FastMarqueeLabel = ({ label }) => {
  return (
    <h3 className="flex items-center gap-4 font-montreal text-xl text-white">
      <svg
        overflow="visible"
        width="18px"
        height="18px"
        viewBox="0 0 84 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-4"
        strokeWidth="0.5"
      >
        <path
          strokeLinejoin="miter"
          fill="var(--token-33242885-2de0-48b8-9e8b-67d386aa89c8, rgb(255, 255, 255))"
          d="M24.0802 79.5199L10.8802 69.92L29.8402 45.4399L0.200195 36.44L5.2402 20.9599L34.4002 31.2799L33.6802 0.199951H50.0002L49.2802 31.2799L78.3202 20.9599L83.3602 36.44L53.8402 45.4399L72.5602 69.92L59.3602 79.5199L41.8402 54.0799L24.0802 79.5199Z"
        ></path>
      </svg>
      {!label ? "Default text" : label}
    </h3>
  );
};

export default FastMarqueeLabel;
