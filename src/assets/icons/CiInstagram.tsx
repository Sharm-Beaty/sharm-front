import { IconProps } from "@/types/icon";

export const CiInstagram = ({
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
        d='M16.5381 3.59253H7.51271C5.02041 3.59253 3 5.61294 3 8.10524V17.1307C3 19.623 5.02041 21.6434 7.51271 21.6434H16.5381C19.0304 21.6434 21.0508 19.623 21.0508 17.1307V8.10524C21.0508 5.61294 19.0304 3.59253 16.5381 3.59253Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.6354 12.0497C15.7468 12.8009 15.6185 13.568 15.2687 14.242C14.919 14.916 14.3656 15.4626 13.6874 15.804C13.0091 16.1454 12.2404 16.2642 11.4907 16.1436C10.741 16.023 10.0484 15.669 9.5115 15.1321C8.97456 14.5951 8.62059 13.9025 8.49996 13.1528C8.37932 12.4031 8.49815 11.6345 8.83955 10.9562C9.18094 10.2779 9.72752 9.72455 10.4015 9.37482C11.0756 9.02509 11.8427 8.89679 12.5938 9.00817C13.36 9.12179 14.0693 9.47881 14.617 10.0265C15.1647 10.5742 15.5218 11.2835 15.6354 12.0497Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.9893 7.65405H16.9983'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
