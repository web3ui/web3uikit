import React from 'react';

const bookIcon = (fill: string, size: number | string) => (
  <svg
    aria-hidden="true"
    data-testid="test-icon"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>book icon</title>
    <path
      d="M7.49636 6.75C7.49636 6.90625 7.59011 7 7.74636 7H16.2517C16.3767 7 16.5017 6.90625 16.5017 6.75V5.75C16.5017 5.625 16.3767 5.5 16.2517 5.5H7.74636C7.59011 5.5 7.49636 5.625 7.49636 5.75V6.75ZM7.74636 10H16.2517C16.3767 10 16.5017 9.90625 16.5017 9.75V8.75C16.5017 8.625 16.3767 8.5 16.2517 8.5H7.74636C7.59011 8.5 7.49636 8.625 7.49636 8.75V9.75C7.49636 9.90625 7.59011 10 7.74636 10ZM19.5938 18.5C19.8125 18.4688 20 18.25 20 18V2.5C20 2.25 19.75 2 19.5 2H6.5C5.09375 2 4 3.125 4 4.5V19.5C4 20.9062 5.09375 22 6.5 22H19.5C19.75 22 20 21.7812 20 21.5V21C20 20.7812 19.8125 20.5625 19.5938 20.5312C19.4375 20.125 19.4375 18.9062 19.5938 18.5ZM18.3125 18.5C18.2188 19.0625 18.2188 19.9688 18.3125 20.5H6.5C5.9375 20.5 5.5 20.0625 5.5 19.5C5.5 18.9688 5.9375 18.5 6.5 18.5H18.3125ZM18.5 3.5V17H6.5C6.125 17 5.78125 17.0938 5.5 17.2188V4.5C5.5 3.96875 5.9375 3.5 6.5 3.5H18.5Z"
      fill={fill}
    />
  </svg>
);
export default bookIcon;
