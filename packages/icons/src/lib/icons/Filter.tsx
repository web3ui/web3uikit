// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgFilter = ({
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
        <path d="M14.312 19.94a.91.91 0 0 1-.272.784.933.933 0 0 1-1.018.204.932.932 0 0 1-.303-.204l-3.76-3.787a.934.934 0 0 1-.271-.784V11.32l-4.49-5.79a.95.95 0 0 1 .16-1.321.973.973 0 0 1 .58-.208h13.124a.946.946 0 0 1 .74 1.53l-4.49 5.788v8.622ZM5.876 5.416l3.997 4.976a1 1 0 0 1 .22.627v5.134l2.929 2.956v-8.098a1 1 0 0 1 .212-.615l3.89-4.98H5.876Z" />
    </svg>
);

export default SvgFilter;
