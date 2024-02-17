import React from "react";
import { IconProps } from "../Account/interfaces";

export const ClarityIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="clarity">
      <path
        id="Vector 1"
        d="M2.5 16.882V7.11803C2.5 6.73926 2.714 6.393 3.05279 6.22361L12.0528 1.72361C12.3343 1.58284 12.6657 1.58284 12.9472 1.72361L20.9472 5.72361C21.286 5.893 21.5 6.23926 21.5 6.61803V16.382C21.5 16.7607 21.286 17.107 20.9472 17.2764L11.9472 21.7764C11.6657 21.9172 11.3343 21.9172 11.0528 21.7764L3.05279 17.7764C2.714 17.607 2.5 17.2607 2.5 16.882Z"
        stroke-width="1.5"
      />
      <path
        id="Vector 2"
        d="M2.5 6.5L11.5 11M11.5 11V22M11.5 11L16.5 8.5M21.5 6L16.5 8.5M16.5 8.5L8 4"
        stroke-width="1.5"
      />
    </g>
  </svg>
);
