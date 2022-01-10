import {getSize} from "./helper";
import {size} from "../../types";
import React from "react";

const arbitrum = (fillOutline: string, fillInline: string, fillInlineRight: string, fillInlineLeft: string, size: size) => {
    const { height, width } = getSize(size);
    return (
        <svg
            width={height}
            height={width}
            viewBox="0 0 102 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path opacity="0.3"
                  d="M0.0927734 81.6817V85.6594L11.1229 92.0422L15.4793 94.5398L28.5487 102.033L44.1206 111.006C44.6767 111.283 45.1402 111.561 45.5109 111.746C46.0671 112.116 46.5305 112.301 46.6232 112.393C47.7355 112.948 49.3112 113.226 50.7943 113.226C52.0919 113.226 53.3896 112.948 54.5946 112.486L97.1394 87.8795C99.5493 86.0294 101.032 83.1618 101.125 80.0166V33.0242C101.032 29.6015 99.0858 26.4564 96.2124 24.6063L55.2434 1.11006C52.37 -0.370019 48.7551 -0.370019 45.8817 1.11006C45.5109 1.29507 6.02494 24.1437 6.02494 24.1437C5.4688 24.4213 4.91266 24.6988 4.44921 25.0688C1.85389 26.9189 0.278154 29.879 0.0927734 33.0242L0.0927734 81.6817Z"
                  fill={fillInline || "url(#paint0_linear_173_19031)"}
            />
            <path d="M50.5161 2.77514C51.7211 2.77514 52.9261 3.05266 53.9457 3.51518L94.822 26.9189C96.9539 28.3065 98.2515 30.5266 98.4369 33.0242V79.9241C98.3442 82.1442 97.3247 84.1793 95.6562 85.4744L53.4822 109.896C52.648 110.173 51.7211 110.358 50.8869 110.358C49.8673 110.358 48.6623 110.173 48.0135 109.803C47.8281 109.711 47.55 109.526 46.9939 109.248C46.6231 109.063 46.1597 108.786 45.6962 108.508L30.1243 99.5351L17.055 92.0422L12.6986 89.5446L2.87339 84.0868V81.6817V33.1167C2.96608 30.8041 4.17106 28.6765 6.11755 27.3814C6.48831 27.1039 6.85907 26.9189 7.22983 26.7339L7.32252 26.6414L7.41521 26.5489C20.6699 18.871 45.7889 4.34772 47.1793 3.60768C48.1989 3.05266 49.3112 2.77514 50.5161 2.77514ZM50.5161 0C48.8477 0 47.272 0.370019 45.7889 1.11006C45.4182 1.29507 5.93217 24.1437 5.93217 24.1437C5.37603 24.4213 4.81989 24.6988 4.35644 25.0688C1.76111 26.9189 0.18538 29.879 0 33.0242V81.6817V85.6594L11.0301 92.0422L15.3866 94.5398L28.4559 102.033L44.0278 111.006C44.584 111.283 45.0474 111.561 45.4182 111.746C45.9743 112.116 46.4378 112.301 46.5305 112.393C47.6427 112.948 49.2185 113.226 50.7015 113.226C51.9992 113.226 53.2968 112.948 54.5018 112.486L97.1393 87.8795C99.5492 86.0294 101.032 83.1618 101.125 80.0166V33.0242C101.032 29.6015 99.0858 26.4564 96.2124 24.6063L55.2433 1.11006C53.853 0.370019 52.1846 0 50.5161 0Z"
                  fill={fillOutline || "black"}
            />
            <path
                opacity="0.7"
                d="M52.7406 73.3563L68.4052 97.8701L82.8649 89.5446L62.3804 57.168L52.7406 73.3563Z"
                fill={fillInlineRight || "url(#paint5_linear_173_19031)"}
            />
            <path
                opacity="0.7"
                d="M96.027 79.6466V72.9863L73.596 38.0195L65.2539 52.1727L86.9434 87.1395L94.8221 82.6068C95.5636 81.9592 96.027 81.0342 96.1197 80.1091L96.027 79.6466Z"
                fill={fillInlineRight || "url(#paint5_linear_173_19031)"}
            />
            <path d="M11.4935 90.0072L47.0865 33.1168L41.8032 32.9318C36.4272 32.8393 30.6804 34.2269 28.0851 38.5746L7.13709 70.9512L1.57568 79.4617V85.012"
                  fill={fillInlineLeft || "url(#paint5_linear_173_19031)"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.2359 38.0461C30.1281 33.221 36.3738 31.8382 41.8204 31.9319L41.8293 31.9321L48.8534 32.178L12.3413 90.5376L10.6458 89.4768L45.3196 34.0555L41.7772 33.9315C36.4807 33.842 31.2451 35.2318 28.9437 39.0871L28.9345 39.1026L7.97668 71.4944L7.9742 71.4983L2.57568 79.7594V85.0119H0.575684V79.1639L6.2975 70.408L6.29998 70.4042L27.2359 38.0461Z"
                fill="url(#paint5_linear_173_19031)"
            />
            <path
                d="M28.5487 102.033L32.0709 96.02L69.2396 33.1167L54.5946 33.2092L16.4062 94.5399"
                fill={fillInlineLeft || "url(#paint5_linear_173_19031)"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70.9985 32.1056L32.9336 96.5254L32.9317 96.5287L29.4114 102.538L27.6857 101.527L31.2079 95.5145L31.2098 95.5113L67.4805 34.1279L55.152 34.2058L17.255 95.0685L15.5573 94.0113L54.0369 32.2128L70.9985 32.1056Z"
                fill="url(#paint7_linear_173_19031)"
            />
            <defs>
                <linearGradient id="paint0_linear_173_19031" x1="0.0927802" y1="56.6129" x2="101.145" y2="56.6129" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint1_linear_173_19031" x1="50.5625" y1="0" x2="50.5625" y2="113.226" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.2"/>
                    <stop offset="0.348958" stopColor="white"/>
                </linearGradient>
                <linearGradient id="paint2_linear_173_19031" x1="52.7842" y1="77.5166" x2="82.8902" y2="77.5166" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint3_linear_173_19031" x1="65.255" y1="62.6105" x2="96.0563" y2="62.6105" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint4_linear_173_19031" x1="1.55918" y1="61.4857" x2="47.0717" y2="61.4857" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint5_linear_173_19031" x1="24.3311" y1="32.9275" x2="24.3311" y2="90.0072" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint6_linear_173_19031" x1="16.4314" y1="67.5737" x2="69.2591" y2="67.5737" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint7_linear_173_19031" x1="42.8227" y1="33.1168" x2="42.8227" y2="102.033" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default  arbitrum;