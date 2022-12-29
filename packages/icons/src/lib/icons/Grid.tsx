// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgGrid = ({
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
            d="M3 3.797c0-.44.357-.797.797-.797h6.38c.44 0 .798.357.798.797v6.38c0 .44-.357.798-.798.798h-6.38A.798.798 0 0 1 3 10.177v-6.38zm1.595.798V9.38H9.38V4.595H4.595zm8.43-.798c0-.44.357-.797.798-.797h6.38c.44 0 .797.357.797.797v6.38c0 .44-.357.798-.797.798h-6.38a.798.798 0 0 1-.798-.798v-6.38zm1.595.798V9.38h4.785V4.595H14.62zm-1.595 9.228c0-.44.357-.798.798-.798h6.38c.44 0 .797.357.797.798v6.38c0 .44-.357.797-.797.797h-6.38a.797.797 0 0 1-.798-.797v-6.38zm1.595.797v4.785h4.785V14.62H14.62zM3 13.823c0-.44.357-.798.797-.798h6.38c.44 0 .798.357.798.798v6.38c0 .44-.357.797-.798.797h-6.38A.797.797 0 0 1 3 20.203v-6.38zm1.595.797v4.785H9.38V14.62H4.595z"
        />
    </svg>
);

export default SvgGrid;
