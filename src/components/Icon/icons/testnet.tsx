import React from "react";

const testnetIcon = (fill: string, size: number | string) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>testnet icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.97641 3.0467C5.13171 3.01598 5.29167 3 5.45455 3H5.86364C6.31551 3 6.68182 3.36631 6.68182 3.81818C6.68182 4.27005 6.31551 4.63636 5.86364 4.63636H5.45455C5.39886 4.63636 5.34525 4.64181 5.29397 4.65195C4.85069 4.73965 4.42026 4.45139 4.33256 4.00811C4.24487 3.56483 4.53313 3.1344 4.97641 3.0467ZM7.5 3.81818C7.5 3.36631 7.86631 3 8.31818 3H9.13636C9.58823 3 9.95455 3.36631 9.95455 3.81818C9.95455 4.27005 9.58823 4.63636 9.13636 4.63636H8.31818C7.86631 4.63636 7.5 4.27005 7.5 3.81818ZM10.7727 3.81818C10.7727 3.36631 11.139 3 11.5909 3H12.4091C12.861 3 13.2273 3.36631 13.2273 3.81818C13.2273 4.27005 12.861 4.63636 12.4091 4.63636H11.5909C11.139 4.63636 10.7727 4.27005 10.7727 3.81818ZM14.0455 3.81818C14.0455 3.36631 14.4118 3 14.8636 3H15.6818C16.1337 3 16.5 3.36631 16.5 3.81818C16.5 4.27005 16.1337 4.63636 15.6818 4.63636H14.8636C14.4118 4.63636 14.0455 4.27005 14.0455 3.81818ZM17.3182 3.81818C17.3182 3.36631 17.6845 3 18.1364 3H18.5455C18.7083 3 18.8683 3.01598 19.0236 3.0467C19.4669 3.1344 19.7551 3.56483 19.6674 4.00811C19.5797 4.45139 19.1493 4.73965 18.706 4.65195C18.6548 4.64181 18.6011 4.63636 18.5455 4.63636H18.1364C17.6845 4.63636 17.3182 4.27005 17.3182 3.81818ZM19.9919 4.33256C20.4352 4.24487 20.8656 4.53313 20.9533 4.97641C20.984 5.13171 21 5.29167 21 5.45455V5.86364C21 6.31551 20.6337 6.68182 20.1818 6.68182C19.7299 6.68182 19.3636 6.31551 19.3636 5.86364V5.45455C19.3636 5.39886 19.3582 5.34525 19.348 5.29397C19.2604 4.85069 19.5486 4.42026 19.9919 4.33256ZM4.00811 4.33256C4.45139 4.42026 4.73965 4.85069 4.65195 5.29397C4.64181 5.34525 4.63636 5.39886 4.63636 5.45455V5.86364C4.63636 6.31551 4.27005 6.68182 3.81818 6.68182C3.36631 6.68182 3 6.31551 3 5.86364V5.45455C3 5.29167 3.01598 5.13171 3.0467 4.97641C3.1344 4.53313 3.56483 4.24487 4.00811 4.33256ZM3.81818 7.5C4.27005 7.5 4.63636 7.86631 4.63636 8.31818V8.72727C4.63636 8.78296 4.64181 8.83657 4.65195 8.88785C4.73965 9.33112 4.45139 9.76156 4.00811 9.84926C3.56483 9.93695 3.1344 9.64869 3.0467 9.20541C3.01598 9.05011 3 8.89015 3 8.72727V8.31818C3 7.86631 3.36631 7.5 3.81818 7.5ZM20.1818 7.5C20.6337 7.5 21 7.86631 21 8.31818V8.72727C21 8.89015 20.984 9.05011 20.9533 9.20541C20.8656 9.64869 20.4352 9.93695 19.9919 9.84925C19.5486 9.76156 19.2604 9.33112 19.348 8.88785C19.3582 8.83657 19.3636 8.78296 19.3636 8.72727V8.31818C19.3636 7.86631 19.7299 7.5 20.1818 7.5ZM4.33256 10.1737C4.42026 9.73043 4.85069 9.44217 5.29397 9.52986C5.34525 9.54001 5.39886 9.54545 5.45455 9.54545H5.86364C6.31551 9.54545 6.68182 9.91177 6.68182 10.3636C6.68182 10.8155 6.31551 11.1818 5.86364 11.1818H5.45455C5.29167 11.1818 5.13171 11.1658 4.97641 11.1351C4.53313 11.0474 4.24487 10.617 4.33256 10.1737ZM19.6674 10.1737C19.7551 10.617 19.4669 11.0474 19.0236 11.1351C18.8683 11.1658 18.7083 11.1818 18.5455 11.1818H18.1364C17.6845 11.1818 17.3182 10.8155 17.3182 10.3636C17.3182 9.91177 17.6845 9.54545 18.1364 9.54545H18.5455C18.6011 9.54545 18.6548 9.54001 18.706 9.52986C19.1493 9.44217 19.5797 9.73043 19.6674 10.1737ZM7.5 10.3636C7.5 9.91177 7.86631 9.54545 8.31818 9.54545H9.13636C9.58823 9.54545 9.95455 9.91177 9.95455 10.3636C9.95455 10.8155 9.58823 11.1818 9.13636 11.1818H8.31818C7.86631 11.1818 7.5 10.8155 7.5 10.3636ZM10.7727 10.3636C10.7727 9.91177 11.139 9.54545 11.5909 9.54545H12.4091C12.861 9.54545 13.2273 9.91177 13.2273 10.3636C13.2273 10.8155 12.861 11.1818 12.4091 11.1818H11.5909C11.139 11.1818 10.7727 10.8155 10.7727 10.3636ZM14.0455 10.3636C14.0455 9.91177 14.4118 9.54545 14.8636 9.54545H15.6818C16.1337 9.54545 16.5 9.91177 16.5 10.3636C16.5 10.8155 16.1337 11.1818 15.6818 11.1818H14.8636C14.4118 11.1818 14.0455 10.8155 14.0455 10.3636Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.97641 12.8649C5.13171 12.8342 5.29167 12.8182 5.45455 12.8182H5.86364C6.31551 12.8182 6.68182 13.1845 6.68182 13.6364C6.68182 14.0882 6.31551 14.4545 5.86364 14.4545H5.45455C5.39886 14.4545 5.34525 14.46 5.29397 14.4701C4.85069 14.5578 4.42026 14.2696 4.33256 13.8263C4.24487 13.383 4.53313 12.9526 4.97641 12.8649ZM7.5 13.6364C7.5 13.1845 7.86631 12.8182 8.31818 12.8182H9.13636C9.58823 12.8182 9.95455 13.1845 9.95455 13.6364C9.95455 14.0882 9.58823 14.4545 9.13636 14.4545H8.31818C7.86631 14.4545 7.5 14.0882 7.5 13.6364ZM10.7727 13.6364C10.7727 13.1845 11.139 12.8182 11.5909 12.8182H12.4091C12.861 12.8182 13.2273 13.1845 13.2273 13.6364C13.2273 14.0882 12.861 14.4545 12.4091 14.4545H11.5909C11.139 14.4545 10.7727 14.0882 10.7727 13.6364ZM14.0455 13.6364C14.0455 13.1845 14.4118 12.8182 14.8636 12.8182H15.6818C16.1337 12.8182 16.5 13.1845 16.5 13.6364C16.5 14.0882 16.1337 14.4545 15.6818 14.4545H14.8636C14.4118 14.4545 14.0455 14.0882 14.0455 13.6364ZM17.3182 13.6364C17.3182 13.1845 17.6845 12.8182 18.1364 12.8182H18.5455C18.7083 12.8182 18.8683 12.8342 19.0236 12.8649C19.4669 12.9526 19.7551 13.383 19.6674 13.8263C19.5797 14.2696 19.1493 14.5578 18.706 14.4701C18.6548 14.46 18.6011 14.4545 18.5455 14.4545H18.1364C17.6845 14.4545 17.3182 14.0882 17.3182 13.6364ZM19.9919 14.1507C20.4352 14.0631 20.8656 14.3513 20.9533 14.7946C20.984 14.9499 21 15.1098 21 15.2727V15.6818C21 16.1337 20.6337 16.5 20.1818 16.5C19.7299 16.5 19.3636 16.1337 19.3636 15.6818V15.2727C19.3636 15.217 19.3582 15.1634 19.348 15.1122C19.2604 14.6689 19.5486 14.2384 19.9919 14.1507ZM4.00811 14.1507C4.45139 14.2384 4.73965 14.6689 4.65195 15.1122C4.64181 15.1634 4.63636 15.217 4.63636 15.2727V15.6818C4.63636 16.1337 4.27005 16.5 3.81818 16.5C3.36631 16.5 3 16.1337 3 15.6818V15.2727C3 15.1098 3.01598 14.9499 3.0467 14.7946C3.1344 14.3513 3.56483 14.0631 4.00811 14.1507ZM3.81818 17.3182C4.27005 17.3182 4.63636 17.6845 4.63636 18.1364V18.5455C4.63636 18.6011 4.64181 18.6548 4.65195 18.706C4.73965 19.1493 4.45139 19.5797 4.00811 19.6674C3.56483 19.7551 3.1344 19.4669 3.0467 19.0236C3.01598 18.8683 3 18.7083 3 18.5455V18.1364C3 17.6845 3.36631 17.3182 3.81818 17.3182ZM20.1818 17.3182C20.6337 17.3182 21 17.6845 21 18.1364V18.5455C21 18.7083 20.984 18.8683 20.9533 19.0236C20.8656 19.4669 20.4352 19.7551 19.9919 19.6674C19.5486 19.5797 19.2604 19.1493 19.348 18.706C19.3582 18.6548 19.3636 18.6011 19.3636 18.5455V18.1364C19.3636 17.6845 19.7299 17.3182 20.1818 17.3182ZM4.33256 19.9919C4.42026 19.5486 4.85069 19.2604 5.29397 19.348C5.34525 19.3582 5.39886 19.3636 5.45455 19.3636H5.86364C6.31551 19.3636 6.68182 19.7299 6.68182 20.1818C6.68182 20.6337 6.31551 21 5.86364 21H5.45455C5.29167 21 5.13171 20.984 4.97641 20.9533C4.53313 20.8656 4.24487 20.4352 4.33256 19.9919ZM19.6674 19.9919C19.7551 20.4352 19.4669 20.8656 19.0236 20.9533C18.8683 20.984 18.7083 21 18.5455 21H18.1364C17.6845 21 17.3182 20.6337 17.3182 20.1818C17.3182 19.7299 17.6845 19.3636 18.1364 19.3636H18.5455C18.6011 19.3636 18.6548 19.3582 18.706 19.348C19.1493 19.2604 19.5797 19.5486 19.6674 19.9919ZM7.5 20.1818C7.5 19.7299 7.86631 19.3636 8.31818 19.3636H9.13636C9.58823 19.3636 9.95455 19.7299 9.95455 20.1818C9.95455 20.6337 9.58823 21 9.13636 21H8.31818C7.86631 21 7.5 20.6337 7.5 20.1818ZM10.7727 20.1818C10.7727 19.7299 11.139 19.3636 11.5909 19.3636H12.4091C12.861 19.3636 13.2273 19.7299 13.2273 20.1818C13.2273 20.6337 12.861 21 12.4091 21H11.5909C11.139 21 10.7727 20.6337 10.7727 20.1818ZM14.0455 20.1818C14.0455 19.7299 14.4118 19.3636 14.8636 19.3636H15.6818C16.1337 19.3636 16.5 19.7299 16.5 20.1818C16.5 20.6337 16.1337 21 15.6818 21H14.8636C14.4118 21 14.0455 20.6337 14.0455 20.1818Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.27273 7.09091C6.27273 6.63904 6.63904 6.27273 7.09091 6.27273H7.09909C7.55096 6.27273 7.91727 6.63904 7.91727 7.09091C7.91727 7.54278 7.55096 7.90909 7.09909 7.90909H7.09091C6.63904 7.90909 6.27273 7.54278 6.27273 7.09091Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.54545 7.09091C9.54545 6.63904 9.91177 6.27273 10.3636 6.27273H10.3718C10.8237 6.27273 11.19 6.63904 11.19 7.09091C11.19 7.54278 10.8237 7.90909 10.3718 7.90909H10.3636C9.91177 7.90909 9.54545 7.54278 9.54545 7.09091Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.27273 16.9091C6.27273 16.4572 6.63904 16.0909 7.09091 16.0909H7.09909C7.55096 16.0909 7.91727 16.4572 7.91727 16.9091C7.91727 17.361 7.55096 17.7273 7.09909 17.7273H7.09091C6.63904 17.7273 6.27273 17.361 6.27273 16.9091Z"
            fill={fill}
        />
    </svg>
);
export default testnetIcon;
