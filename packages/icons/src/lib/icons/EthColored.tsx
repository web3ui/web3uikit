// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgEthColored = ({
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
        <path
            d="M12.003.809 5.29 11.536l6.714 3.821V.81Z"
            stroke="#85B3DB"
            strokeWidth={1.6}
            strokeMiterlimit={2.927}
            strokeLinejoin="round"
        />
        <path
            d="M12 .809v14.542l6.712-3.82L12 .81Z"
            stroke="#5B8DB9"
            strokeWidth={1.6}
            strokeMiterlimit={2.927}
            strokeLinejoin="round"
        />
        <path
            d="M12.003 23.191v-5.2L5.29 14.239l6.714 8.953Z"
            stroke="#85B3DB"
            strokeWidth={1.6}
            strokeMiterlimit={2.927}
            strokeLinejoin="round"
        />
        <path
            d="M12 17.984v5.197l6.712-8.949L12 17.984Z"
            stroke="#5B8DB9"
            strokeWidth={1.6}
            strokeMiterlimit={2.927}
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgEthColored;
