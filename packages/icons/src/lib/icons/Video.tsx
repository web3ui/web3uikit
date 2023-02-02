// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgVideo = ({
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
        <g clipPath="url(#video_svg__a)" fillRule="evenodd" clipRule="evenodd">
            <path d="M23.458 6.11A1 1 0 0 1 24 7v10a1 1 0 0 1-1.581.814l-7-5a1 1 0 0 1 0-1.628l7-5a1 1 0 0 1 1.039-.075ZM17.72 12 22 15.057V8.943L17.72 12Z" />
            <path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3ZM0 7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7Z" />
        </g>
    </svg>
);

export default SvgVideo;
