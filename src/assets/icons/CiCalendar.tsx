import { IconProps } from "@/types/icon";

export const CiCalendar = ({
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
        d='M4.14293 4.85718C3.76404 4.85718 3.40068 5.00769 3.13277 5.27559C2.86487 5.54351 2.71436 5.90686 2.71436 6.28575V19.8572C2.71436 20.236 2.86487 20.5995 3.13277 20.8673C3.40068 21.1352 3.76404 21.2857 4.14293 21.2857H19.8572C20.2361 21.2857 20.5995 21.1352 20.8674 20.8673C21.1352 20.5995 21.2858 20.236 21.2858 19.8572V6.28575C21.2858 5.90686 21.1352 5.54351 20.8674 5.27559C20.5995 5.00769 20.2361 4.85718 19.8572 4.85718H17.0001'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.71436 9.85718H21.2858'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7 2.71436V7.00007'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M17 2.71436V7.00007'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7 4.85718H14.1429'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
