// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCat = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        style={
            isResponsive
                ? style
                : {
                      flex: 'none',
                      ...style,
                  }
        }
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#cat_svg__a)">
            <g clipPath="url(#cat_svg__b)">
                <path
                    d="m15.519 4.356 4.211-2.587c1.076-.664 2.46.115 2.46 1.373V15.24M8.607 4.356 4.384 1.769c-1.076-.664-2.46.115-2.46 1.373V15.24"
                    stroke="#BC68FF"
                    strokeWidth={1.735}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.374 22.425H9.751a7.824 7.824 0 0 1-7.828-7.828v-.72c0-5.574 5.425-10.129 10.128-10.129 4.704 0 10.128 4.555 10.128 10.128v.721a7.824 7.824 0 0 1-7.827 7.828h.022Z"
                    stroke="#9B22FF"
                    strokeWidth={1.868}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="m11.021 15.593 1.042.526 1.03-.526" fill="#9B22FF" />
                <path
                    d="m11.021 15.593 1.042.526 1.03-.526M12.063 16.326v1.407"
                    stroke="#BC68FF"
                    strokeWidth={1.735}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx={8.077} cy={11.977} r={1.391} fill="#9B22FF" />
                <circle cx={16.037} cy={11.977} r={1.391} fill="#9B22FF" />
            </g>
        </g>
        <defs>
            <clipPath id="cat_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
            <clipPath id="cat_svg__b">
                <path
                    fill="#fff"
                    transform="translate(.985 .59)"
                    d="M0 0h22.144v22.773H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgCat;
