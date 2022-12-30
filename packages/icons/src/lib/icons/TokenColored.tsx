// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgTokenColored = ({
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
        <g
            clipPath="url(#token-colored_svg__a)"
            strokeWidth={1.7}
            strokeLinejoin="round"
        >
            <path
                d="M12.483 1.425a.532.532 0 0 1 .532 0L21.808 6.5c.165.095.266.271.266.461v10.154c0 .19-.101.365-.266.46l-8.793 5.077a.533.533 0 0 1-.532 0L3.69 17.577a.532.532 0 0 1-.266-.462V6.963c0-.19.102-.366.266-.46l8.793-5.077Z"
                stroke="#F0C800"
            />
            <path
                d="M12.293 7.54a.532.532 0 0 1 .913 0l2.535 4.225a.532.532 0 0 1 0 .548l-2.535 4.225a.532.532 0 0 1-.913 0l-2.535-4.225a.532.532 0 0 1 0-.548l2.535-4.225Z"
                stroke="#D69700"
            />
        </g>
        <defs>
            <clipPath id="token-colored_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgTokenColored;
