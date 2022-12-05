// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgShare = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 25"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#share_svg__a)">
            <path d="M19.975 13.297h-6c-.55 0-1-.45-1-1s.45-1 1-1h5v-5c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1Z" />
            <path d="M7.645 20.698c-.16 0-.33-.04-.48-.12-2.53-1.39-4.04-3.75-4.14-6.49-.1-2.81 1.29-5.49 3.62-7 5.29-3.42 10.07.36 14.05 4.52a.996.996 0 1 1-1.44 1.38c-4.15-4.32-7.7-6.69-11.53-4.22-1.71 1.11-2.77 3.17-2.7 5.25.07 2.04 1.17 3.75 3.1 4.8.48.27.66.87.4 1.36-.18.33-.52.52-.88.52Z" />
        </g>
        <defs>
            <clipPath id="share_svg__a">
                <path
                    fill="#fff"
                    transform="translate(3.025 5.297)"
                    d="M0 0h17.95v15.4H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgShare;
