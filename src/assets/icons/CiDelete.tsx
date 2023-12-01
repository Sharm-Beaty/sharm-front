import { IconProps } from "@/types/icon";

export const CiDelete = ({
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
        d='M8.25 5.75C8.25 4.75544 8.64509 3.80161 9.34835 3.09835C10.0516 2.39509 11.0054 2 12 2C12.9946 2 13.9484 2.39509 14.6517 3.09835C15.3549 3.80161 15.75 4.75544 15.75 5.75M8.25 5.75H15.75M8.25 5.75H4.5M15.75 5.75H19.5M4.5 5.75H2M4.5 5.75V19.5C4.5 20.163 4.76339 20.7989 5.23223 21.2678C5.70107 21.7366 6.33696 22 7 22H17C17.663 22 18.2989 21.7366 18.7678 21.2678C19.2366 20.7989 19.5 20.163 19.5 19.5V5.75M19.5 5.75H22'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
