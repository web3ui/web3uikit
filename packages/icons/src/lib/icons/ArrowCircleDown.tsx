// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgArrowCircleDown = ({
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
        <path d="M19.364 12a7.364 7.364 0 1 0-14.728 0 7.364 7.364 0 0 0 14.728 0zM12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm2.694 8.421a.818.818 0 1 1 1.157 1.158l-3.273 3.272a.818.818 0 0 1-1.156 0l-3.273-3.273a.818.818 0 1 1 1.157-1.156l1.876 1.875v-4.57a.818.818 0 1 1 1.636 0v4.57l1.876-1.876z" />
    </svg>
);

export default SvgArrowCircleDown;
