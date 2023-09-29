import { IconProps } from "@/types/icon";

export const CiSort = ({
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
        d='M20 8L4 8'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M17.6001 12L6.4001 12'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M15.2002 16H8.8002'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};
