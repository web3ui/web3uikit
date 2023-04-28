// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgSave = ({
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
            d="M5.7 4.8a.9.9 0 0 0-.9.9v12.6a.9.9 0 0 0 .9.9h.9v-6.3a.9.9 0 0 1 .9-.9h9a.9.9 0 0 1 .9.9v6.3h.9a.9.9 0 0 0 .9-.9V8.773L15.227 4.8H8.4v2.7h6.3a.9.9 0 1 1 0 1.8H7.5a.9.9 0 0 1-.9-.9V4.8h-.9Zm0-1.8A2.7 2.7 0 0 0 3 5.7v12.6A2.7 2.7 0 0 0 5.7 21h12.6a2.7 2.7 0 0 0 2.7-2.7V8.4a.9.9 0 0 0-.264-.636l-4.5-4.5A.9.9 0 0 0 15.6 3H5.7Zm9.9 16.2v-5.4H8.4v5.4h7.2Z"
        />
    </svg>
);

export default SvgSave;
