import React from 'react';
import type { ILogoProps } from '../../types';

const ronin:React.FC<ILogoProps> = ({width = '120', height = '160'}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.8206 5.77502C25.2447 5.77502 26.4002 6.96096 26.4002 8.38948V16.7449V16.8258C26.3733 18.5239 24.6771 19.8977 22.9842 19.9247C24.6771 19.9516 26.3733 21.327 26.4002 23.025V23.1059V28.3348C26.4002 29.0895 26.0777 29.7903 25.5403 30.2754L19.0376 35.9625V24.2649C19.0376 22.8364 17.8821 21.6774 16.458 21.6774H12.6692V35.9625L6.19336 30.2215C5.62907 29.7364 5.3335 29.0356 5.3335 28.2809V8.36252C5.3335 6.93401 6.48894 5.77502 7.91309 5.77502H23.8206ZM19.0376 9.38674H12.6692V17.3379H16.458C17.8821 17.3379 19.0376 16.1789 19.0376 14.7504V9.38674Z"
                fill="url(#paint0_linear_19829_44335)"
            />
            <path
                d="M26.4002 16.8258L26.8002 16.8321V16.8258H26.4002ZM22.9842 19.9247L22.9778 19.5247V20.3246L22.9842 19.9247ZM26.4002 23.025H26.8002L26.8001 23.0187L26.4002 23.025ZM25.5403 30.2754L25.8037 30.5766L25.8083 30.5723L25.5403 30.2754ZM19.0376 35.9625H18.6376C18.6376 36.1195 18.7293 36.2619 18.8722 36.3268C19.0151 36.3916 19.1828 36.3669 19.3009 36.2636L19.0376 35.9625ZM12.6692 21.6774V21.2774C12.4483 21.2774 12.2692 21.4565 12.2692 21.6774H12.6692ZM12.6692 35.9625L12.4039 36.2618C12.5217 36.3663 12.6898 36.3919 12.8333 36.3273C12.9769 36.2627 13.0692 36.1199 13.0692 35.9625H12.6692ZM6.19336 30.2215L6.45874 29.9222L6.45413 29.9182L6.19336 30.2215ZM19.0376 9.38674H19.4376C19.4376 9.16583 19.2585 8.98674 19.0376 8.98674V9.38674ZM12.6692 9.38674V8.98674C12.4483 8.98674 12.2692 9.16583 12.2692 9.38674H12.6692ZM12.6692 17.3379H12.2692C12.2692 17.5588 12.4483 17.7379 12.6692 17.7379V17.3379ZM23.8206 6.17502C25.0173 6.17502 26.0002 7.1753 26.0002 8.38948H26.8002C26.8002 6.74662 25.4721 5.37502 23.8206 5.37502V6.17502ZM26.0002 8.38948V16.7449H26.8002V8.38948H26.0002ZM26.0002 16.7449V16.8258H26.8002V16.7449H26.0002ZM26.0002 16.8195C25.9889 17.5325 25.6263 18.1998 25.0535 18.7009C24.4799 19.2027 23.7221 19.5129 22.9778 19.5247L22.9906 20.3246C23.9392 20.3095 24.8759 19.9193 25.5803 19.3029C26.2856 18.6859 26.7845 17.8171 26.8001 16.8321L26.0002 16.8195ZM22.9842 20.3247H23.3446V19.5247H22.9842V20.3247ZM22.9778 20.3246C23.722 20.3365 24.4798 20.6469 25.0534 21.1492C25.6262 21.6506 25.9889 22.3183 26.0002 23.0314L26.8001 23.0187C26.7845 22.0337 26.2857 21.1647 25.5804 20.5472C24.876 19.9305 23.9393 19.5398 22.9906 19.5247L22.9778 20.3246ZM26.0002 23.025V23.1059H26.8002V23.025H26.0002ZM26.0002 23.1059V28.3348H26.8002V23.1059H26.0002ZM26.0002 28.3348C26.0002 28.9748 25.7268 29.5682 25.2723 29.9785L25.8083 30.5723C26.4286 30.0124 26.8002 29.2042 26.8002 28.3348H26.0002ZM25.277 29.9743L18.7742 35.6614L19.3009 36.2636L25.8036 30.5765L25.277 29.9743ZM19.4376 35.9625V24.2649H18.6376V35.9625H19.4376ZM19.4376 24.2649C19.4376 22.6166 18.1042 21.2774 16.458 21.2774V22.0774C17.6601 22.0774 18.6376 23.0561 18.6376 24.2649H19.4376ZM16.458 21.2774H12.6692V22.0774H16.458V21.2774ZM12.2692 21.6774V35.9625H13.0692V21.6774H12.2692ZM12.9346 35.6632L6.45871 29.9222L5.92801 30.5208L12.4039 36.2618L12.9346 35.6632ZM6.45413 29.9182C5.98607 29.5158 5.7335 28.9298 5.7335 28.2809H4.9335C4.9335 29.1414 5.27207 29.9569 5.93258 30.5248L6.45413 29.9182ZM5.7335 28.2809V8.36252H4.9335V28.2809H5.7335ZM5.7335 8.36252C5.7335 7.15377 6.711 6.17502 7.91309 6.17502V5.37502C6.26687 5.37502 4.9335 6.71425 4.9335 8.36252H5.7335ZM7.91309 6.17502H23.8206V5.37502H7.91309V6.17502ZM19.0376 8.98674H12.6692V9.78674H19.0376V8.98674ZM12.2692 9.38674V17.3379H13.0692V9.38674H12.2692ZM12.6692 17.7379H16.458V16.9379H12.6692V17.7379ZM16.458 17.7379C18.1042 17.7379 19.4376 16.3987 19.4376 14.7504H18.6376C18.6376 15.9592 17.6601 16.9379 16.458 16.9379V17.7379ZM19.4376 14.7504V9.38674H18.6376V14.7504H19.4376Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_19829_44335"
                    x1="8.26683"
                    y1="29.5313"
                    x2="27.3368"
                    y2="3.12604"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0.06" />
                    <stop offset="1" stop-color="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ronin;
