import { IconProps } from "@/types/icon";

export const CiFacebook = ({
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
        d='M18 3.5H15.2727C14.0672 3.5 12.911 3.97889 12.0586 4.83133C11.2062 5.68377 10.7273 6.83992 10.7273 8.04545V10.7727H8V14.4091H10.7273V21.6818H14.3636V14.4091H17.0909L18 10.7727H14.3636V8.04545C14.3636 7.80435 14.4594 7.57312 14.6299 7.40263C14.8004 7.23214 15.0316 7.13636 15.2727 7.13636H18V3.5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
