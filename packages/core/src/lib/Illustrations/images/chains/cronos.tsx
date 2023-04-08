import React from 'react';
import { ILogoProps } from '../../types';

const cronos: React.FC<ILogoProps> = ({ width = '120', height = '160' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 160"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M60.0166 23L59.975 23.0249V23L10 51.7417V109.258L33.0648 122.515L59.975 138V137.975L60.0166 138L110 109.258V51.7583L60.0166 23ZM50.1448 115.29L24.8244 100.733V60.259L60.0166 40.0429V40.0594L95.1923 60.2839V100.741L60.0166 120.965L50.1448 115.298V115.29Z"
            />
            <path
                d="M59.9992 64.8326L73.6249 72.6788L83.3469 67.0862L59.9992 53.6475L36.6348 67.0862V93.9389L59.9992 107.353L83.3469 93.9389L73.6249 88.3297L59.9992 96.1759L46.3734 88.3297V72.6788L59.9992 64.8326Z"
            />
        </svg>
    );
};

export default cronos;
