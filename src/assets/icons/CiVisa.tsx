import { IconProps } from "@/types/icon";

export const CiVisa = ({
  className,
  size = 22,
  color = "#828282",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size * 1.55}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_357_786)'>
        <path
          d='M27.4306 11.9722H25.5139C25.6435 11.6296 25.9491 10.8009 26.4306 9.48611L26.4722 9.36111C26.5093 9.26852 26.5556 9.14815 26.6111 9C26.6667 8.85185 26.7083 8.73148 26.7361 8.63889L26.9028 9.40278L27.4306 11.9722ZM7.375 11.0694L6.56944 6.97222C6.46759 6.47222 6.12037 6.22222 5.52778 6.22222H1.80556L1.77778 6.40278C4.65741 7.13426 6.52315 8.68981 7.375 11.0694ZM9.86111 6.22222L7.61111 12.3056L7.375 11.0694C7.13426 10.4213 6.74074 9.82176 6.19444 9.27083C5.64815 8.71991 5.04167 8.31019 4.375 8.04167L6.25 15.125H8.68056L12.3056 6.22222H9.86111ZM11.7917 15.1389H14.0972L15.5417 6.22222H13.2361L11.7917 15.1389ZM22.4583 6.44444C21.8194 6.19444 21.1296 6.06944 20.3889 6.06944C19.25 6.06944 18.3194 6.34259 17.5972 6.88889C16.875 7.43519 16.5093 8.14352 16.5 9.01389C16.4907 9.95833 17.162 10.7639 18.5139 11.4306C18.9583 11.6435 19.2685 11.8333 19.4444 12C19.6204 12.1667 19.7083 12.3472 19.7083 12.5417C19.7083 12.8194 19.5694 13.0324 19.2917 13.1806C19.0139 13.3287 18.6944 13.4028 18.3333 13.4028C17.537 13.4028 16.8148 13.25 16.1667 12.9444L15.8611 12.7917L15.5417 14.7917C16.2269 15.1065 17.0833 15.2639 18.1111 15.2639C19.3148 15.2731 20.2801 15 21.0069 14.4444C21.7338 13.8889 22.1065 13.1481 22.125 12.2222C22.125 11.2407 21.4769 10.4352 20.1806 9.80556C19.7269 9.57407 19.3981 9.37963 19.1944 9.22222C18.9907 9.06481 18.8889 8.88889 18.8889 8.69444C18.8889 8.49074 19.0023 8.3125 19.2292 8.15972C19.456 8.00694 19.7824 7.93056 20.2083 7.93056C20.8565 7.9213 21.4306 8.03241 21.9306 8.26389L22.1389 8.375L22.4583 6.44444ZM28.3611 6.22222H26.5833C25.9815 6.22222 25.5787 6.47222 25.375 6.97222L21.9583 15.1389H24.375L24.8611 13.8056H27.8056C27.8519 14.0093 27.9444 14.4537 28.0833 15.1389H30.2222L28.3611 6.22222ZM32 1.77778V19.5556C32 20.037 31.8241 20.4537 31.4722 20.8056C31.1204 21.1574 30.7037 21.3333 30.2222 21.3333H1.77778C1.2963 21.3333 0.87963 21.1574 0.527778 20.8056C0.175926 20.4537 0 20.037 0 19.5556V1.77778C0 1.2963 0.175926 0.87963 0.527778 0.527778C0.87963 0.175926 1.2963 0 1.77778 0H30.2222C30.7037 0 31.1204 0.175926 31.4722 0.527778C31.8241 0.87963 32 1.2963 32 1.77778Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_357_786'>
          <rect
            width={size * 1.5}
            height={size}
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
