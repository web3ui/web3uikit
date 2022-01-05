import React from 'react';

const linkIcon = (fill: string, size: number | string) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>link icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6376 4.38641C13.5682 3.48675 14.8147 2.98893 16.1085 3.00019C17.4023 3.01144 18.6399 3.53086 19.5547 4.44658C20.4696 5.36229 20.9886 6.60104 20.9998 7.89601C21.0111 9.19098 20.5137 10.4386 19.6149 11.3701L19.6048 11.3803L17.1377 13.8496C16.6375 14.3505 16.0355 14.7378 15.3725 14.9853C14.7096 15.2329 14.0012 15.3348 13.2955 15.2842C12.5897 15.2336 11.9031 15.0317 11.2821 14.6921C10.6612 14.3526 10.1205 13.8833 9.69665 13.3162C9.42459 12.9522 9.49889 12.4363 9.8626 12.164C10.2263 11.8917 10.7417 11.9661 11.0137 12.3301C11.2963 12.7082 11.6568 13.021 12.0707 13.2474C12.4847 13.4738 12.9424 13.6084 13.413 13.6421C13.8835 13.6758 14.3557 13.6079 14.7977 13.4429C15.2396 13.2778 15.641 13.0196 15.9745 12.6857L18.4365 10.2215C19.0327 9.60101 19.3625 8.77137 19.3551 7.91031C19.3476 7.047 19.0016 6.22117 18.3917 5.61069C17.7818 5.00021 16.9567 4.65393 16.0942 4.64643C15.2335 4.63895 14.4043 4.96936 13.7843 5.56667L12.3742 6.96984C12.0521 7.29037 11.5314 7.28885 11.2112 6.96645C10.891 6.64405 10.8925 6.12286 11.2146 5.80234L12.6291 4.39475L12.6376 4.38641Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.62745 9.01466C9.2904 8.76713 9.99878 8.66521 10.7045 8.7158C11.4103 8.76639 12.0969 8.96831 12.7179 9.30787C13.3388 9.64743 13.8795 10.1167 14.3034 10.6838C14.5754 11.0478 14.5011 11.5637 14.1374 11.836C13.7737 12.1083 13.2583 12.0339 12.9863 11.6699C12.7037 11.2918 12.3432 10.979 11.9293 10.7526C11.5153 10.5262 11.0576 10.3916 10.587 10.3579C10.1165 10.3242 9.64428 10.3921 9.20232 10.5571C8.76036 10.7222 8.35902 10.9804 8.02553 11.3143L5.56355 13.7785C4.96728 14.399 4.63745 15.2286 4.64493 16.0897C4.65242 16.953 4.99839 17.7788 5.60831 18.3893C6.21823 18.9998 7.0433 19.3461 7.90582 19.3536C8.76609 19.3611 9.59496 19.0309 10.2149 18.4341L11.6159 17.0318C11.937 16.7104 12.4577 16.7104 12.7789 17.0318C13.1001 17.3533 13.1001 17.8745 12.7789 18.196L11.3726 19.6036L11.3624 19.6136C10.4318 20.5133 9.18532 21.0111 7.89153 20.9998C6.59775 20.9886 5.36013 20.4691 4.44526 19.5534C3.53038 18.6377 3.01143 17.399 3.00019 16.104C2.98894 14.809 3.4863 13.5614 4.38515 12.63L4.39516 12.6197L6.86226 10.1504C6.8623 10.1504 6.86223 10.1504 6.86226 10.1504C7.36248 9.64957 7.96455 9.26216 8.62745 9.01466Z"
            fill={fill}
        />
    </svg>
);
export default linkIcon;
