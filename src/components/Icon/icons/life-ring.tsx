import React from 'react';

const lifeRingIcon = (fill: string, size: number | string) => (
  <svg
    aria-hidden="true"
    data-testid="test-icon"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>life ring icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.66925 6.90669C4.54685 8.30001 3.875 10.0715 3.875 12C3.875 13.9285 4.54685 15.7 5.66925 17.0933L8.27772 14.4848C7.80226 13.774 7.525 12.9194 7.525 12C7.525 11.0806 7.80226 10.226 8.27772 9.51515L5.66925 6.90669ZM6.90669 5.66925L9.51515 8.27772C10.226 7.80226 11.0806 7.525 12 7.525C12.9194 7.525 13.774 7.80226 14.4848 8.27772L17.0933 5.66925C15.7 4.54685 13.9285 3.875 12 3.875C10.0715 3.875 8.30001 4.54685 6.90669 5.66925ZM18.3307 6.90669L15.7223 9.51515C16.1977 10.226 16.475 11.0806 16.475 12C16.475 12.9194 16.1977 13.774 15.7223 14.4848L18.3307 17.0933C19.4532 15.7 20.125 13.9285 20.125 12C20.125 10.0715 19.4532 8.30001 18.3307 6.90669ZM17.0933 18.3307L14.4848 15.7223C13.774 16.1977 12.9194 16.475 12 16.475C11.0806 16.475 10.226 16.1977 9.51515 15.7223L6.90669 18.3307C8.30001 19.4532 10.0715 20.125 12 20.125C13.9285 20.125 15.7 19.4532 17.0933 18.3307ZM2.125 12C2.125 6.54619 6.54619 2.125 12 2.125C17.4538 2.125 21.875 6.54619 21.875 12C21.875 17.4538 17.4538 21.875 12 21.875C6.54619 21.875 2.125 17.4538 2.125 12ZM12 9.275C10.495 9.275 9.275 10.495 9.275 12C9.275 13.505 10.495 14.725 12 14.725C13.505 14.725 14.725 13.505 14.725 12C14.725 10.495 13.505 9.275 12 9.275Z"
      fill={fill}
    />
  </svg>
);
export default lifeRingIcon;
