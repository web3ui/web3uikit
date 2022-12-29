// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgLockOpen = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 19 18"
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
            d="M1.886 6.625h1.262c.13-2.392.8-4.02 1.867-5.063C6.207.397 7.726.125 9 .125c1.273 0 2.793.272 3.984 1.437 1.067 1.043 1.739 2.67 1.868 5.063h1.28c1.035 0 1.874.84 1.874 1.875v7.625c0 1.035-.839 1.875-1.875 1.875H1.886A1.875 1.875 0 0 1 .01 16.125V8.5c0-1.036.84-1.875 1.875-1.875Zm3.014 0c.126-2.058.698-3.186 1.338-3.812.727-.71 1.708-.938 2.762-.938s2.034.228 2.761.938l1.223-1.251c1.067 1.043 1.739 2.67 1.868 5.063H4.9ZM1.76 8.5c0-.069.057-.125.126-.125H16.13c.07 0 .125.056.125.125v7.625a.125.125 0 0 1-.125.125H1.886a.125.125 0 0 1-.125-.125V8.5Zm8.115 3a.875.875 0 0 0-1.75 0v2a.875.875 0 0 0 1.75 0v-2Z"
        />
    </svg>
);

export default SvgLockOpen;
