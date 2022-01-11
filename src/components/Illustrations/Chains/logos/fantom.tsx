import React from 'react';
import { size } from '../../types';
import { getSize } from './helper';

const fantomLogo = (fillOutline: string, fillInline: string, size: size) => {
    const { height, width } = getSize(size);
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 71 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 20.1622L35.6 2.00006L69.2 20.1622V58.0001V95.8379L35.6 114L2 95.8379V58.0001V20.1622Z"
                fill={fillInline || 'url(#paint0_linear_9446_42661)'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.6979 1.32303C34.8848 0.681467 36.3152 0.681466 37.5021 1.32303L67.5531 17.5668C69.4918 18.6148 70.7 20.6412 70.7 22.8451V93.1549C70.7 95.3588 69.4918 97.3852 67.5531 98.4332L38.4531 114.163C36.6728 115.125 34.5272 115.125 32.7469 114.163L3.6469 98.4332C1.70817 97.3852 0.5 95.3588 0.5 93.1549V22.8451C0.5 20.6412 1.70818 18.6148 3.6469 17.5668L33.6979 1.32303ZM3.5 22.6781V55.3834L32.5423 38.3766L3.5 22.6781ZM34.1 40.941L4.96841 58L34.1 75.059V40.941ZM37.1 75.059L66.2316 58L37.1 40.941V75.059ZM35.6 36.6192L66.0455 20.1622L35.6 3.70512L5.15446 20.1622L35.6 36.6192ZM67.7 22.6781L38.6577 38.3766L67.7 55.3834V22.6781ZM67.7 60.6166L38.6319 77.6385C36.7594 78.735 34.4406 78.735 32.5681 77.6385L3.5 60.6166V92.5587C3.5 94.028 4.30545 95.3789 5.59793 96.0776L33.6979 111.267C34.8848 111.908 36.3152 111.908 37.5021 111.267L65.6021 96.0776C66.8945 95.3789 67.7 94.028 67.7 92.5587V60.6166Z"
                fill={fillOutline || 'black'}
            />
            <defs>
                <linearGradient
                    id="paint0_linear_9446_42661"
                    x1="18.5"
                    y1="90.5001"
                    x2="96.9904"
                    y2="49.3123"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.06" />
                    <stop offset="1" stopColor="white" stopOpacity="0.85" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default fantomLogo;
