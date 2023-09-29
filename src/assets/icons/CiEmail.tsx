import { IconProps } from "@/types/icon";

export const CiEmail = ({
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
        d='M4 5H20C21.1 5 22 5.84375 22 6.875V18.125C22 19.1563 21.1 20 20 20H4C2.9 20 2 19.1563 2 18.125V6.875C2 5.84375 2.9 5 4 5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 6.87488L12 13.4374L2 6.87488'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
