// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCloud = ({
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
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m7.247 10.16-.79.136c-1.583.271-2.79 1.716-2.79 3.454 0 1.933 1.492 3.5 3.333 3.5h10.833c1.381 0 2.5-1.175 2.5-2.625 0-1.312-.918-2.402-2.116-2.595l-1.097-.176-.268-1.13C16.309 8.44 14.34 6.75 12 6.75c-1.869 0-3.5 1.076-4.36 2.678l-.393.732Zm11.222.14C17.746 7.257 15.124 5 12 5 9.505 5 7.33 6.439 6.188 8.569 3.813 8.976 2 11.14 2 13.75 2 16.65 4.239 19 7 19h10.833C20.135 19 22 17.041 22 14.625c0-2.19-1.532-4.003-3.531-4.324Z"
        />
    </svg>
);

export default SvgCloud;
