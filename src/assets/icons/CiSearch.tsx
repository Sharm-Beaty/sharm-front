import { IconProps } from "@/types/icon";

export const CiSearch = ({
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
        d='M10.9866 19.0934C15.4638 19.0934 19.0933 15.4639 19.0933 10.9867C19.0933 6.5095 15.4638 2.88 10.9866 2.88C6.50938 2.88 2.87988 6.5095 2.87988 10.9867C2.87988 15.4639 6.50938 19.0934 10.9866 19.0934Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21.1195 21.1202L16.7114 16.7122'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
