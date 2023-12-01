import { IconProps } from "@/types/icon";

export const CiUser = ({
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
        d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 21H12H20V20.2418C19.9858 19.1758 19.6285 18.1299 18.9613 17.2021C18.2941 16.2741 17.3388 15.4944 16.1848 14.9357C15.0307 14.3769 13.7154 14.0575 12.3618 14.007C12.2411 14.0025 12.1205 14.0002 12 14C11.8795 14.0002 11.7589 14.0025 11.6382 14.007C10.2846 14.0575 8.96933 14.3769 7.81524 14.9357C6.66116 15.4944 5.7059 16.2741 5.0387 17.2021C4.37151 18.1299 4.01415 19.1758 4 20.2418V21Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
