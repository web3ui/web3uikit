import React from 'react';
import { ILogoProps } from '../../types';

const ethereum: React.FC<ILogoProps> = ({ width = '120', height = '160' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_30_8567)">
                <g clip-path="url(#clip1_30_8567)">
                    <path
                        d="M59.4844 14.2109L59.5026 63.2303L100.185 81.7291L59.4844 14.2109Z"
                        fill="white"
                        fillOpacity="0.65"
                    />
                    <path
                        d="M59.4802 14.2256L18.7969 81.7291L59.4802 63.2371V14.2256Z"
                        fill="white"
                    />
                    <path
                        d="M59.4778 113.48L58.9766 114.091V145.311L59.4778 146.774L100.185 89.4443L59.4778 113.48Z"
                        fill="white"
                        fillOpacity="0.65"
                    />
                    <path
                        d="M59.4802 146.774V113.48L18.7969 89.4443L59.4802 146.774Z"
                        fill="white"
                    />
                    <path
                        d="M59.4922 105.772L100.174 81.7244L59.4922 63.2324V105.772Z"
                        fill="white"
                        fillOpacity="0.45"
                    />
                    <path
                        d="M18.7969 81.7244L59.4802 105.772V63.2324L18.7969 81.7244Z"
                        fill="white"
                        fillOpacity="0.65"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_30_8567">
                    <rect width="120" height="160" fill="white" />
                </clipPath>
                <clipPath id="clip1_30_8567">
                    <rect
                        width="132.549"
                        height="132.549"
                        fill="white"
                        transform="translate(-6.77539 14.2256)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ethereum;
