import { IconProps } from "@/types/icon";

export const CiRestart = ({
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
        d='M17.0913 8.84016L16.5256 8.27447C14.0262 5.77512 9.97397 5.77512 7.47461 8.27447C4.97526 10.7738 4.97526 14.8261 7.47461 17.3254C9.97397 19.8248 14.0262 19.8248 16.5256 17.3254C17.979 15.872 18.5873 13.8934 18.3503 12.0004M17.0913 8.84016H13.6972M17.0913 8.84016V5.44604'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
