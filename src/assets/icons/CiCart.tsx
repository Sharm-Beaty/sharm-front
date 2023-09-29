import { IconProps } from "@/types/icon";

export const CiCart = ({
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
        d='M9.51268 21.2073C9.97058 21.2073 10.3418 20.8361 10.3418 20.3782C10.3418 19.9203 9.97058 19.5491 9.51268 19.5491C9.05479 19.5491 8.68359 19.9203 8.68359 20.3782C8.68359 20.8361 9.05479 21.2073 9.51268 21.2073Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.6328 21.2073C19.0907 21.2073 19.4619 20.8361 19.4619 20.3782C19.4619 19.9203 19.0907 19.5491 18.6328 19.5491C18.1749 19.5491 17.8037 19.9203 17.8037 20.3782C17.8037 20.8361 18.1749 21.2073 18.6328 21.2073Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.87988 3.79639H6.19625L8.41821 14.8979C8.49403 15.2796 8.70168 15.6225 9.00483 15.8665C9.30798 16.1106 9.6873 16.2402 10.0764 16.2328H18.1352C18.5243 16.2402 18.9036 16.1106 19.2067 15.8665C19.5099 15.6225 19.7175 15.2796 19.7933 14.8979L21.1199 7.94184H7.02534'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
