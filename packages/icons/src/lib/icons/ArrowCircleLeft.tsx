// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgArrowCircleLeft = ({
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
        <path d="M12 4.636a7.364 7.364 0 1 0 0 14.728 7.364 7.364 0 0 0 0-14.728zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9.579-3.851c.32.32.32.837 0 1.157l-1.877 1.876h4.57a.818.818 0 1 1 0 1.636h-4.57l1.877 1.876a.818.818 0 1 1-1.158 1.157L8.15 12.578a.818.818 0 0 1 0-1.156l3.273-3.273a.818.818 0 0 1 1.156 0z" />
    </svg>
);

export default SvgArrowCircleLeft;
