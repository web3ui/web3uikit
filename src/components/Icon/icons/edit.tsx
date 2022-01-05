import React from "react";

const editIcon = (fill: string, size: number | string) => (
        <svg
                aria-hidden="true"
                data-testid="test-icon"
                fill="none"
                height={size}
                viewBox="0 0 24 24"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
        >
                <title>edit icon</title>
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.125 20C11.125 19.5168 11.5168 19.125 12 19.125H21C21.4833 19.125 21.875 19.5168 21.875 20C21.875 20.4833 21.4833 20.875 21 20.875H12C11.5168 20.875 11.125 20.4833 11.125 20Z"
                        fill={fill}
                />
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 3.75369C17.6695 3.75369 17.3525 3.885 17.1187 4.11873L4.79011 16.4474L4.20259 18.7974L6.55268 18.2099L18.8813 5.88129C18.997 5.76556 19.0888 5.62817 19.1515 5.47696C19.2141 5.32575 19.2463 5.16368 19.2463 5.00001C19.2463 4.83634 19.2141 4.67428 19.1515 4.52307C19.0888 4.37186 18.997 4.23446 18.8813 4.11873C18.7656 4.003 18.6282 3.9112 18.477 3.84856C18.3258 3.78593 18.1637 3.75369 18 3.75369ZM15.8813 2.88129C16.4432 2.31938 17.2053 2.00369 18 2.00369C18.3935 2.00369 18.7831 2.08119 19.1467 2.23177C19.5102 2.38235 19.8405 2.60306 20.1187 2.88129C20.397 3.15953 20.6177 3.48984 20.7683 3.85337C20.9188 4.2169 20.9963 4.60653 20.9963 5.00001C20.9963 5.3935 20.9188 5.78313 20.7683 6.14666C20.6177 6.51019 20.397 6.8405 20.1187 7.11873L7.61874 19.6187C7.5066 19.7309 7.36609 19.8104 7.21224 19.8489L3.21224 20.8489C2.91406 20.9234 2.59863 20.8361 2.3813 20.6187C2.16397 20.4014 2.0766 20.086 2.15114 19.7878L3.15114 15.7878C3.18961 15.6339 3.26916 15.4934 3.3813 15.3813L15.8813 2.88129Z"
                        fill={fill}
                />
        </svg>
);
export default editIcon;
