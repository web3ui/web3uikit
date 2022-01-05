import React from 'react';

const starIcon = (fill: string, size: number | string) => (
        <svg
                aria-hidden="true"
                data-testid="test-icon"
                fill="none"
                height={size}
                viewBox="0 0 24 24"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
        >
                <title>star icon</title>
                <path
                        d="M11.2039 2.5507C11.4545 1.81643 12.5455 1.81643 12.7961 2.5507L14.819 8.4784C14.9311 8.80677 15.2525 9.0291 15.6151 9.0291H22.1613C22.9722 9.0291 23.3094 10.0171 22.6533 10.4709L17.3573 14.1344C17.0639 14.3373 16.9412 14.6971 17.0532 15.0254L19.0761 20.9531C19.3267 21.6874 18.4441 22.298 17.788 21.8442L12.492 18.1807C12.1986 17.9777 11.8014 17.9777 11.508 18.1807L6.21197 21.8442C5.55595 22.298 4.67328 21.6874 4.92386 20.9531L6.94675 15.0254C7.05882 14.6971 6.93605 14.3373 6.64267 14.1344L1.34666 10.4709C0.690636 10.0171 1.02778 9.0291 1.83867 9.0291H8.38491C8.74755 9.0291 9.06894 8.80677 9.181 8.4784L11.2039 2.5507Z"
                        fill={fill}
                />
        </svg>
);
export default starIcon;
