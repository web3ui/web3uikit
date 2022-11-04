import React from 'react';
import { ILogoProps } from '../../types';

const avalanche: React.FC<ILogoProps> = ({ width = '120', height = '160' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0,0,120,160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.8478 120H17.5256C13.8846 120 12.0917 120 10.9884 119.313C9.80234 118.544 9.08518 117.281 9.00243 115.88C8.94727 114.589 9.82993 113.024 11.6228 109.865L54.3766 34.8295C56.197 31.6436 57.1073 30.0506 58.2658 29.4738C59.507 28.8421 60.9965 28.8421 62.2653 29.4738C63.4238 30.0506 64.334 31.6436 66.1545 34.8295L74.9535 50.1004L75.0087 50.1828C76.9671 53.5885 77.9601 55.3463 78.4014 57.159C78.8703 59.1365 78.8703 61.2513 78.4014 63.2289C77.9601 65.069 76.9671 66.7994 74.9811 70.2875L52.5285 109.81L52.4733 109.92C50.4874 113.381 49.4944 115.111 48.1152 116.429C46.5981 117.858 44.7777 118.929 42.7917 119.506C40.9712 120 38.93 120 34.8478 120ZM78.5945 120H103.419C107.088 120 108.908 120 110.012 119.286C111.198 118.517 111.942 117.226 111.998 115.825C112.053 114.589 111.17 113.079 109.46 110.112C109.405 110.003 109.35 109.92 109.267 109.81L96.8269 88.6344L96.689 88.3872C94.9512 85.4484 94.0686 83.9653 92.9377 83.3885C91.6964 82.7568 90.2069 82.7568 88.9657 83.3885C87.8348 83.9653 86.897 85.5308 85.0765 88.6619L72.7193 109.838L72.6641 109.92C70.8436 113.024 69.9334 114.589 70.0161 115.88C70.0989 117.281 70.8161 118.572 72.0021 119.341C73.0779 120 74.9259 120 78.5945 120Z"
                fill="url(#paint0_linear_173_19026)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.7082 30.5928C60.7863 30.1338 59.7139 30.1394 58.8327 30.5878L58.8229 30.5928C58.5343 30.7365 58.165 31.0625 57.5979 31.8836C57.0357 32.6975 56.3838 33.8362 55.4625 35.4485C55.4623 35.4489 55.4621 35.4493 55.4619 35.4497L12.7099 110.482C11.803 112.08 11.1652 113.208 10.7543 114.097C10.345 114.983 10.2386 115.475 10.2509 115.817C10.3136 116.822 10.8226 117.712 11.6581 118.258C11.9541 118.439 12.4365 118.588 13.4081 118.668C14.3858 118.749 15.683 118.75 17.5256 118.75H34.8477C38.9933 118.75 40.835 118.74 42.4534 118.302C44.2324 117.784 45.8761 116.82 47.2546 115.523C48.4675 114.362 49.3627 112.829 51.3719 109.328L51.4258 109.221L73.8942 69.67L73.8948 69.669C75.9193 66.1133 76.7957 64.5637 77.1857 62.9381C77.6087 61.1523 77.6089 59.2375 77.1861 57.4516C76.7975 55.8578 75.9221 54.2792 73.9463 50.8428L73.8914 50.7608L65.0714 35.4536L65.0692 35.4497C64.1476 33.8368 63.4955 32.6977 62.9331 31.8836C62.366 31.0625 61.9968 30.7365 61.7082 30.5928ZM57.7036 28.3573C59.304 27.5448 61.2083 27.5512 62.8224 28.3548C63.6923 28.7879 64.3574 29.5467 64.9902 30.4628C65.6206 31.3755 66.325 32.6083 67.2097 34.1567L67.2376 34.2055L67.2398 34.2094L76.0156 49.4399L76.0711 49.5227L76.0923 49.5596C78.017 52.9068 79.1229 54.8384 79.6159 56.8633L79.6177 56.8706C80.1315 59.0377 80.1315 61.3501 79.6177 63.5173L79.6169 63.5204C79.1391 65.5126 78.0813 67.3699 76.2422 70.5989C76.1847 70.6999 76.1264 70.8022 76.0674 70.906L53.6312 110.4L53.5748 110.512L53.4457 110.737C51.5665 114.012 50.4896 115.889 48.9789 117.333L48.972 117.34C47.3198 118.895 45.3277 120.071 43.1403 120.706L43.1298 120.709L43.1193 120.712C41.1368 121.25 38.9408 121.25 35.0693 121.25H17.4668C15.6962 121.25 14.2954 121.25 13.2027 121.16C12.1019 121.069 11.136 120.878 10.3279 120.375L10.3181 120.368L10.3084 120.362C8.7809 119.372 7.86023 117.742 7.7546 115.954L7.754 115.944L7.75356 115.934C7.71303 114.985 8.02218 114.05 8.48489 113.049C8.94978 112.043 9.64971 110.809 10.5357 109.248L10.5367 109.246L53.2905 34.2107L53.3214 34.1567C54.2061 32.6083 54.9105 31.3755 55.5409 30.4628C56.1724 29.5485 56.8363 28.7908 57.7036 28.3573ZM88.3987 82.2745C89.9962 81.4615 91.9072 81.4615 93.5046 82.2745L93.5056 82.275C94.3401 82.7006 94.9856 83.4121 95.6026 84.2752C96.2207 85.1397 96.9071 86.3002 97.7649 87.751L97.7729 87.7645L97.9116 88.0131L110.311 109.119C110.396 109.236 110.478 109.36 110.558 109.515L110.64 109.657C111.438 111.041 112.084 112.16 112.52 113.083C112.971 114.034 113.287 114.948 113.246 115.878C113.174 117.691 112.211 119.35 110.692 120.335L110.691 120.335C109.877 120.862 108.895 121.062 107.783 121.156C106.678 121.25 105.263 121.25 103.48 121.25H78.5389C76.7517 121.25 75.3325 121.25 74.2287 121.164C73.1263 121.078 72.1484 120.896 71.349 120.407L71.3354 120.398L71.3221 120.39C69.7878 119.395 68.8745 117.735 68.7685 115.957C68.7073 114.99 69.0255 114.041 69.4964 113.046C69.9704 112.043 70.6868 110.821 71.5859 109.288L71.6047 109.256L71.6591 109.174L83.9959 88.0336C84.8971 86.4835 85.6166 85.256 86.2584 84.3465C86.8946 83.4452 87.5554 82.7046 88.3978 82.275L88.3987 82.2745ZM89.5336 84.5021C89.2451 84.6492 88.8715 84.9798 88.3009 85.7882C87.736 86.5885 87.0763 87.7092 86.1571 89.2902L86.1561 89.2919L73.7794 110.501L73.7235 110.585C72.8121 112.139 72.1692 113.241 71.7565 114.114C71.3382 114.999 71.2429 115.477 71.2636 115.8L71.264 115.806C71.324 116.823 71.8392 117.739 72.6677 118.283C72.946 118.449 73.4305 118.594 74.4233 118.671C75.4181 118.749 76.7393 118.75 78.5945 118.75H103.419C105.276 118.75 106.585 118.749 107.572 118.665C108.562 118.581 109.043 118.424 109.332 118.237C110.184 117.684 110.71 116.763 110.749 115.776L110.749 115.77C110.762 115.465 110.665 115.006 110.261 114.153C109.868 113.323 109.268 112.282 108.427 110.824L108.359 110.706L108.343 110.673C108.333 110.655 108.326 110.638 108.268 110.562L108.225 110.505L95.7421 89.2556L95.605 89.01C94.7293 87.5291 94.1076 86.4827 93.5689 85.7291C93.0274 84.9717 92.6661 84.6532 92.3697 84.5021C91.4852 84.0523 90.4181 84.0523 89.5336 84.5021Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_173_19026"
                    x1="33.3469"
                    y1="120"
                    x2="70.5292"
                    y2="48.9727"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.06" />
                    <stop offset="1" stopColor="white" stopOpacity="0.85" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default avalanche;
