// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgOff = ({
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
        <path d="M11.615 12h.77c.307 0 .615-.417.615-.833V2.833c-.077-.416-.308-.833-.615-.833h-.77c-.384 0-.615.417-.615.833v8.23c0 .52.23.937.615.937z" />
        <path d="M9 3.512A9 9 0 1 0 21 12a9.004 9.004 0 0 0-6-8.488v2.162a7 7 0 1 1-6 0V3.512z" />
    </svg>
);

export default SvgOff;
