// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgBitBucket = ({
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
        <path d="M2.648 3a.636.636 0 0 0-.493.223.637.637 0 0 0-.147.52l2.72 16.53A.87.87 0 0 0 5.58 21h13.05c.152.003.3-.05.418-.148a.653.653 0 0 0 .223-.39l2.72-16.714a.645.645 0 0 0-.363-.689A.635.635 0 0 0 21.36 3H2.648Zm11.454 11.946H9.938L8.81 9.05h6.303l-1.01 5.895Z" />
    </svg>
);

export default SvgBitBucket;
