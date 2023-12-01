import { IconProps } from "@/types/icon";

export const CiTwitterX = ({ className, size = 24 }: IconProps) => {
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
        d='M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1298L10.9158 14.933L4.94984 21.75H1.63984L9.36984 12.915L1.21484 2.25H8.03984L12.7528 8.481L18.2028 2.25H18.2048ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z'
        fill='black'
      />
    </svg>
  );
};
