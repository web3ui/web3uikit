import React from 'react';
import { ILogoProps } from '../../types';

const base: React.FC<ILogoProps> = ({ width = '120', height = '160' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 60 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(-19,-9)" stroke="none">
                <circle cx="50" cy="50" r="40" fill="#0052FF" />
            </g>
        </svg>
    );
};
export default base;
