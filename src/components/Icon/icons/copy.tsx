import React from 'react';

const copyIcon = (fill: string, size: number | string) => (
  <svg
    aria-hidden="true"
    data-testid="test-icon"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>copy icon</title>
    <path
      d="M13.306 14.501H8.29229C7.82031 14.501 7.44629 14.1256 7.44629 13.6717C7.44629 13.2177 7.82922 12.8424 8.29229 12.8424H13.3149C13.7868 12.8424 14.1609 13.2177 14.1609 13.6717C14.1609 14.1256 13.7779 14.501 13.306 14.501Z"
      fill={fill}
    />
    <path
      d="M13.306 11.1664H8.29229C7.82031 11.1664 7.44629 10.7911 7.44629 10.3371C7.44629 9.88316 7.82922 9.50778 8.29229 9.50778H13.3149C13.7868 9.50778 14.1609 9.88316 14.1609 10.3371C14.1609 10.7911 13.7779 11.1664 13.306 11.1664Z"
      fill={fill}
    />
    <path
      d="M13.306 17.8358H8.29229C7.82031 17.8358 7.44629 17.4605 7.44629 17.0065C7.44629 16.5526 7.82922 16.1772 8.29229 16.1772H13.3149C13.7868 16.1772 14.1609 16.5526 14.1609 17.0065C14.1609 17.4605 13.7779 17.8358 13.306 17.8358Z"
      fill={fill}
    />
    <path
      d="M14.9891 22H6.60924C5.1755 22 4 20.8477 4 19.4422V7.89265C4 6.47843 5.1755 5.33482 6.60924 5.33482H14.9891C16.4318 5.33482 17.5983 6.48715 17.5983 7.89265V19.4422C17.5983 20.8477 16.4318 22 14.9891 22ZM6.60924 7.00221C6.11055 7.00221 5.70091 7.40378 5.70091 7.89265V19.4422C5.70091 19.931 6.11055 20.3326 6.60924 20.3326H14.9891C15.4878 20.3326 15.8974 19.931 15.8974 19.4422V7.89265C15.8974 7.40378 15.4878 7.00221 14.9891 7.00221H6.60924Z"
      fill={fill}
    />
    <path
      d="M18.3907 18.6652H16.7522C16.2802 18.6652 15.9062 18.2898 15.9062 17.8358C15.9062 17.3819 16.2891 17.0065 16.7522 17.0065H18.3907C18.8894 17.0065 19.2991 16.6049 19.2991 16.1161V4.55783C19.2991 4.06896 18.8894 3.66739 18.3907 3.66739H10.0109C9.51217 3.66739 9.10253 4.06896 9.10253 4.55783V6.16411C9.10253 6.62679 8.7196 6.99344 8.25653 6.99344C7.79346 6.99344 7.40162 6.62679 7.40162 6.16411V4.55783C7.40162 3.15233 8.56821 2 10.0109 2H18.3907C19.8334 2 21 3.15233 21 4.55783V16.1073C21 17.5216 19.8245 18.6652 18.3907 18.6652Z"
      fill={fill}
    />
  </svg>
);
export default copyIcon;
