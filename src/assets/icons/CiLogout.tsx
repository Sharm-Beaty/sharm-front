import { IconProps } from "@/types/icon";

export const CiLogout = ({
  className,
  size = 24,
  color = "#828282",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.5715 17.0001V19.8572C15.5715 20.2361 15.421 20.5995 15.1531 20.8674C14.8852 21.1352 14.5218 21.2858 14.1429 21.2858H4.14293C3.76404 21.2858 3.40068 21.1352 3.13277 20.8674C2.86487 20.5995 2.71436 20.2361 2.71436 19.8572V4.14293C2.71436 3.76404 2.86487 3.40068 3.13277 3.13277C3.40068 2.86487 3.76404 2.71436 4.14293 2.71436H14.1429C14.5218 2.71436 14.8852 2.86487 15.1531 3.13277C15.421 3.40068 15.5715 3.76404 15.5715 4.14293V7.00007'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.2856 12H21.2856'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.4287 9.14282L21.2859 12L18.4287 14.8571'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
