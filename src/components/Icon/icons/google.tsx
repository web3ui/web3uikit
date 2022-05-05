import React from 'react';

const googleIcon = (
    _fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        style={style}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.64 12.2004C20.64 11.5634 20.583 10.9494 20.476 10.3604H12V13.8414H16.844C16.635 14.9664 16.001 15.9194 15.048 16.5584V18.8164H17.956C19.658 17.2494 20.64 14.9424 20.64 12.2014V12.2004Z"
            fill={'#4285F4'}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.003 21C14.433 21 16.47 20.194 17.959 18.82L15.05 16.56C14.244 17.1 13.214 17.42 12.003 17.42C9.65896 17.42 7.67496 15.836 6.96696 13.709H3.95996V16.041C5.43996 18.983 8.48496 21 12.003 21Z"
            fill={'#34A853'}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.964 13.712C6.784 13.172 6.682 12.595 6.682 12.002C6.682 11.409 6.784 10.832 6.964 10.292V7.95996H3.957C3.347 9.17496 3 10.55 3 12.002C3 13.454 3.348 14.829 3.957 16.044L6.964 13.712Z"
            fill={'#FBBC05'}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.003 6.58C13.324 6.58 14.511 7.034 15.443 7.925L18.025 5.345C16.464 3.891 14.428 3 12.002 3C8.48496 3 5.43996 5.017 3.95996 7.958L6.96696 10.29C7.67496 8.163 9.65896 6.58 12.003 6.58Z"
            fill={'#EA4335'}
        />
    </svg>
);
export default googleIcon;
