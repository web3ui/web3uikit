import React from "react";

const bellIcon = (fill: string, size: number | string) => (
        <svg
                aria-hidden="true"
                data-testid="test-icon"
                fill="none"
                height={size}
                viewBox="0 0 24 24"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
        >
                <title>bell icon</title>
                <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C11.3173 2 10.7862 2.55664 10.7862 3.1875V4C7.97938 4.59375 5.43473 6.86133 5.43473 9.71875C5.43473 13.541 4.03131 15.6914 3.31063 16.4707C3.08305 16.6934 2.96926 16.9902 3.00719 17.25C3.00719 17.8809 3.46235 18.4375 4.22096 18.4375H19.779C20.5376 18.4375 20.9928 17.8809 20.9928 17.25C21.0307 16.9902 20.917 16.6934 20.6894 16.4707C19.9687 15.6914 18.5653 13.541 18.5653 9.71875C18.5653 6.86133 16.0206 4.59375 13.2138 4V3.1875C13.2138 2.55664 12.6827 2 12 2ZM5.54834 16.6562C6.34488 15.6543 7.21728 12.9102 7.25521 9.75586V9.71875C7.26607 7.25551 9.53656 5.56879 11.9998 5.5625C14.4631 5.56879 16.7336 7.25551 16.7444 9.71875V9.75586C16.7824 12.9102 17.6548 15.6543 18.4513 16.6562H5.54834Z"
                        fill={fill}
                />
                <path
                        d="M12 22C13.3276 22 14.3896 20.9609 14.3896 19.625H9.57246C9.57246 20.9609 10.6345 22 12 22Z"
                        fill={fill}
                />
        </svg>
);
export default bellIcon;
