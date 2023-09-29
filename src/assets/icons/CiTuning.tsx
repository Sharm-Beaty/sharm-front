import { IconProps } from "@/types/icon";

export const CiTuning = ({
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
        d='M10 9.99998C11.1046 9.99998 12 10.8954 12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 9.99998 10 9.99998Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M14 3.99998C12.8954 3.99998 12 4.89541 12 5.99998C12 7.10455 12.8954 7.99998 14 7.99998C15.1046 7.99998 16 7.10455 16 5.99998C16 4.89541 15.1046 3.99998 14 3.99998Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M14 16C12.8954 16 12 16.8954 12 18C12 19.1046 12.8954 20 14 20C15.1046 20 16 19.1046 16 18C16 16.8954 15.1046 16 14 16Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <path
        d='M12 11.9834L20 11.9834'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M12 5.9834L4.00003 5.9834'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M12 17.9834L4.00003 17.9834'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M4 11.9834H8.00014'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M20 5.9834H15.9999'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M20 17.9834H15.9999'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
