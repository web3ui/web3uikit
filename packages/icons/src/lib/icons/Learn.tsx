// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgLearn = ({
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
            d="M11.233 3.179a1.735 1.735 0 0 1 1.534 0L22.989 8.2A1.83 1.83 0 0 1 24 9.847a1.83 1.83 0 0 1-1.01 1.648l-10.223 5.021a1.735 1.735 0 0 1-1.534 0L1.011 11.495A1.83 1.83 0 0 1 0 9.847 1.83 1.83 0 0 1 1.01 8.2L11.234 3.18ZM12 4.826l10.222 5.021L12 14.87 1.778 9.847 12 4.826Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.093 19.073a.916.916 0 0 1-.305.485c-4.01 3.305-10.272 3.313-14.258-.328a.92.92 0 0 1-.284-.518l-1.238-6.96 1.748-.328 1.182 6.642c3.25 2.761 8.222 2.774 11.509.25l1.74-6.955 1.722.455-1.816 7.257Z"
        />
    </svg>
);

export default SvgLearn;
