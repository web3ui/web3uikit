// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgToken = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
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
        <g
            clipPath="url(#token_svg__a)"
            stroke="#CACFD3"
            strokeWidth={1.7}
            strokeLinejoin="round"
        >
            <path d="M12.695 1.632a.532.532 0 0 1 .532 0L22.02 6.71c.165.095.267.27.267.46v10.154c0 .19-.102.366-.267.46l-8.793 5.077a.533.533 0 0 1-.532 0l-8.793-5.076a.532.532 0 0 1-.266-.461V7.17c0-.19.102-.366.266-.461l8.793-5.077Z" />
            <path d="M12.505 7.748a.532.532 0 0 1 .913 0l2.535 4.224a.532.532 0 0 1 0 .548l-2.535 4.225a.532.532 0 0 1-.913 0L9.97 12.52a.532.532 0 0 1 0-.547l2.535-4.225Z" />
        </g>
        <defs>
            <clipPath id="token_svg__a">
                <path
                    fill="#fff"
                    transform="translate(.212 .207)"
                    d="M0 0h24v24H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgToken;
