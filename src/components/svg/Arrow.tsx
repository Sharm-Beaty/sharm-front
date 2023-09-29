type Props = {
  className?: string;
  size?: number;
  color?: string;
};

export const Arrow = ({
  className = "arrow-svg",
  size = 4,
  color = "#363636",
}: Props) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width={size + 4}
    height={size}
    viewBox='0 0 7 4'
    fill='none'
  >
    <path
      d='M0.5 0.5L3.5 3.5L6.5 0.5'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
