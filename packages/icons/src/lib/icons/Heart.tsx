// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgHeart = ({
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
        <path d="M12.001 19a.72.72 0 0 1-.496-.2l-6.179-6.118a4.483 4.483 0 0 1 0-6.366 4.593 4.593 0 0 1 6.43 0l.245.242.245-.242a4.578 4.578 0 0 1 6.437.014 4.464 4.464 0 0 1-.014 6.345l-6.178 6.117a.69.69 0 0 1-.497.201l.007.007ZM8.541 6.385c-.803 0-1.614.304-2.222.913a3.106 3.106 0 0 0 0 4.408L12 17.332l5.683-5.626a3.092 3.092 0 0 0 0-4.4 3.18 3.18 0 0 0-4.446 0l-.74.733a.714.714 0 0 1-.986 0l-.74-.734a3.15 3.15 0 0 0-2.224-.913l-.007-.007Z" />
    </svg>
);

export default SvgHeart;
