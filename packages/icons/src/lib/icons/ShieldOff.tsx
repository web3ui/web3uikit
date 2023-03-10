// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgShieldOff = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 17"
        fill="currentColor"
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
        <g
            clipPath="url(#shield-off_svg__a)"
            fillRule="evenodd"
            clipRule="evenodd"
        >
            <path d="M7.767 1.646a.667.667 0 0 1 .467 0l5.334 2c.26.098.432.346.432.624v4.671a5.266 5.266 0 0 1-.237 1.527.667.667 0 1 1-1.273-.395 3.93 3.93 0 0 0 .177-1.138V4.732L8 2.982l-1.873.7a.667.667 0 0 1-.467-1.25l2.107-.786ZM3.779 3.86a.667.667 0 0 1-.394.856l-.052.019v4.202c0 1.703 1.146 3.2 2.44 4.332a13.796 13.796 0 0 0 2.226 1.576 12.86 12.86 0 0 0 3.252-2.607.667.667 0 0 1 .991.892 14.192 14.192 0 0 1-3.93 3.064.667.667 0 0 1-.61.006L8 15.604l-.298.596h-.003l-.004-.003-.014-.007a14.043 14.043 0 0 1-.868-.5 15.126 15.126 0 0 1-1.919-1.418C3.521 13.071 2 11.235 2 8.937V4.271c0-.28.174-.529.435-.626l.487-.18a.667.667 0 0 1 .857.394Z" />
            <path d="M.195 1.133c.26-.26.683-.26.943 0l14.667 14.666a.667.667 0 1 1-.943.943L.195 2.076a.667.667 0 0 1 0-.943Z" />
        </g>
        <defs>
            <clipPath id="shield-off_svg__a">
                <path transform="translate(0 .938)" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgShieldOff;
