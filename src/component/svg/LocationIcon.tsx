import React from "react";
import { IconProps } from "../Account/interfaces";

export const LocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="location">
      <path
        id="Vector"
        d="M18.4284 9.14244C18.4284 13.4282 11.9999 18.4282 11.9999 18.4282C11.9999 18.4282 5.57129 13.4282 5.57129 9.14244C5.57129 5.64101 8.49843 2.71387 11.9999 2.71387C15.5013 2.71387 18.4284 5.64101 18.4284 9.14244Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M12.0003 11.2857C13.1838 11.2857 14.1431 10.3263 14.1431 9.14286C14.1431 7.95939 13.1838 7 12.0003 7C10.8168 7 9.85742 7.95939 9.85742 9.14286C9.85742 10.3263 10.8168 11.2857 12.0003 11.2857Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M17.8248 16.2861H19.1429L21.2858 21.2861H2.71436L4.85721 16.2861H6.17536"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);
