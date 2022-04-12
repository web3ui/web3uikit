/* eslint-disable linebreak-style */
import React from 'react';

const btcIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24.003"
        style={style}
    >
        <title>btc icon</title>
        <g id="Layer1" transform="translate(0 -0.001)">
            <g id="1" transform="translate(0 0.001)">
                <path
                    id="Path1"
                    data-name="Path1"
                    d="M23.641,14.905A12,12,0,1,1,14.9.36a12,12,0,0,1,8.739,14.545h0Z"
                    transform="translate(0 -0.001)"
                    fill={fill || '#F7931A'}
                />
                <path
                    id="Path2"
                    data-name="Path2"
                    d="M1006.912,718.858c.239-1.6-.976-2.455-2.638-3.027l.539-2.162-1.316-.328-.525,2.106c-.346-.086-.7-.168-1.054-.248l.529-2.119-1.315-.328-.539,2.162c-.286-.065-.567-.13-.84-.2l0-.007-1.815-.453-.35,1.406s.976.224.956.238a.7.7,0,0,1,.613.766l-.614,2.463a1.086,1.086,0,0,1,.137.044l-.139-.034-.86,3.451a.479.479,0,0,1-.6.313c.013.019-.956-.239-.956-.239l-.653,1.507,1.712.427c.318.08.631.164.938.242l-.544,2.187,1.314.328.539-2.164c.359.1.708.188,1.049.272l-.537,2.154,1.316.328.544-2.183c2.244.425,3.931.253,4.641-1.777a2.31,2.31,0,0,0-1.209-3.192,2.1,2.1,0,0,0,1.68-1.933h0Zm-3.006,4.217c-.407,1.635-3.158.751-4.05.529l.723-2.9c.892.223,3.752.664,3.327,2.368Zm.407-4.241c-.371,1.487-2.661.732-3.4.546l.655-2.628c.743.185,3.135.531,2.748,2.082Z"
                    transform="translate(-989.626 -708.566)"
                    fill="#fff"
                />
            </g>
        </g>
    </svg>
);
export default btcIcon;
