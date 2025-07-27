import { SVGProps } from "react";

export const CustomArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0226 6.99693L6.68342 13.7175C6.68342 13.7128 5.33992 12.374 5.33992 12.374L9.76395 7.94999H0L4.64916e-06 6.04999H9.76395L5.33995 1.62597L6.68345 0.282471L13.0226 6.99693Z"
        fill="#1565D8"
      />
    </svg>
  );
};
