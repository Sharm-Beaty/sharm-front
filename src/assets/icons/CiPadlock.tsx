import { IconProps } from "@/types/icon";

export const CiPadlock = ({
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
        d='M17.8462 9.69226H5.53846C4.6888 9.69226 4 10.3811 4 11.2307V20.4615C4 21.3112 4.6888 22 5.53846 22H17.8462C18.6958 22 19.3846 21.3112 19.3846 20.4615V11.2307C19.3846 10.3811 18.6958 9.69226 17.8462 9.69226Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.3807 9.61905V7.33333C16.3807 5.91884 15.8791 4.56229 14.986 3.5621C14.093 2.5619 12.8818 2 11.6188 2C10.3559 2 9.14469 2.5619 8.25167 3.5621C7.35863 4.56229 6.85693 5.91884 6.85693 7.33333V9.61905'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.6926 16.6154C12.1174 16.6154 12.4618 16.271 12.4618 15.8461C12.4618 15.4213 12.1174 15.0769 11.6926 15.0769C11.2677 15.0769 10.9233 15.4213 10.9233 15.8461C10.9233 16.271 11.2677 16.6154 11.6926 16.6154Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
