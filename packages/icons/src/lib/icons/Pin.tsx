// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgPin = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        role="img"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.875c-1.61 0-3.163.672-4.316 1.885s-1.809 2.869-1.809 4.604c0 2.528 1.563 4.979 3.275 6.88a23.284 23.284 0 0 0 2.85 2.66 23.282 23.282 0 0 0 2.85-2.66c1.712-1.901 3.275-4.352 3.275-6.88 0-1.735-.655-3.39-1.81-4.604C15.164 4.547 13.61 3.875 12 3.875zM12 21l-.503.716-.002-.002-.006-.003-.018-.013-.065-.047a22.262 22.262 0 0 1-1.062-.837 25.003 25.003 0 0 1-2.494-2.399c-1.788-1.985-3.725-4.852-3.725-8.051 0-2.171.82-4.262 2.291-5.81C7.89 3.004 9.896 2.125 12 2.125c2.103 0 4.11.88 5.584 2.429 1.471 1.548 2.291 3.639 2.291 5.81 0 3.199-1.937 6.066-3.725 8.051a25.001 25.001 0 0 1-3.32 3.06c-.1.076-.18.135-.236.176l-.065.047-.018.013-.006.003-.002.002L12 21zm0 0 .502.716a.876.876 0 0 1-1.005 0L12 21z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.875a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25zM8.625 10.5a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0z"
        />
    </svg>
);

export default SvgPin;
