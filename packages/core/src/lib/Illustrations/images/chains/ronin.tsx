import React from 'react';
import { ILogoProps } from '../../types';

const ronin: React.FC<ILogoProps> = ({ width = '120', height = '160' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 160"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.3265 24C94.6671 24 99 28.5179 99 33.9598V65.7902V66.0982C98.8992 72.567 92.5383 77.8008 86.1901 77.9034C92.5383 78.0061 98.8992 83.2455 99 89.7143V90.0223V109.942C99 112.817 97.7908 115.487 95.7755 117.335L71.3903 139V94.4375C71.3903 88.9955 67.0574 84.5804 61.7168 84.5804H47.5089V139L23.2245 117.129C21.1084 115.281 20 112.612 20 109.737V33.8571C20 28.4152 24.3329 24 29.6735 24H89.3265ZM71.3903 37.7589H47.5089V68.0491H61.7168C67.0574 68.0491 71.3903 63.6339 71.3903 58.192V37.7589Z"
            />
        </svg>
    );
};

export default ronin;
