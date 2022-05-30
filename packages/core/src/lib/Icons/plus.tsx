import { FC } from 'react';

export const Plus: FC<{ fill?: string }> = ({ fill = 'white' }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 0H7V12H5V0Z" fill={fill} />
    <path d="M12 5V7L0 7L1.19209e-07 5L12 5Z" fill={fill} />
  </svg>
);
