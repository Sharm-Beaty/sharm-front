import { IconProps } from "@/types/icon";

export const CiLocation = ({
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
        d='M18.4284 9.14293C18.4284 13.4286 11.9999 18.4286 11.9999 18.4286C11.9999 18.4286 5.57129 13.4286 5.57129 9.14293C5.57129 5.6415 8.49843 2.71436 11.9999 2.71436C15.5013 2.71436 18.4284 5.6415 18.4284 9.14293Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.0003 11.2857C13.1838 11.2857 14.1431 10.3263 14.1431 9.14286C14.1431 7.95939 13.1838 7 12.0003 7C10.8168 7 9.85742 7.95939 9.85742 9.14286C9.85742 10.3263 10.8168 11.2857 12.0003 11.2857Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M17.8248 16.2858H19.1429L21.2858 21.2858H2.71436L4.85721 16.2858H6.17536'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
