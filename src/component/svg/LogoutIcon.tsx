import React from "react";
import { IconProps } from "../Account/interfaces";

export const LogoutIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="logout">
      <path
        id="Vector"
        d="M15.5715 16.9996V19.8567C15.5715 20.2356 15.421 20.599 15.1531 20.8669C14.8852 21.1347 14.5218 21.2853 14.1429 21.2853H4.14293C3.76404 21.2853 3.40068 21.1347 3.13277 20.8669C2.86487 20.599 2.71436 20.2356 2.71436 19.8567V4.14244C2.71436 3.76355 2.86487 3.4002 3.13277 3.13229C3.40068 2.86438 3.76404 2.71387 4.14293 2.71387H14.1429C14.5218 2.71387 14.8852 2.86438 15.1531 3.13229C15.421 3.4002 15.5715 3.76355 15.5715 4.14244V6.99958"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M11.2856 12H21.2856"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M18.4287 9.14258L21.2859 11.9997L18.4287 14.8569"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
