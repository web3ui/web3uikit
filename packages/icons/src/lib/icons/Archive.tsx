// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgArchive = ({
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
        <path d="M4.522 4.549A1 1 0 0 1 5.415 4h13.17a1 1 0 0 1 .893.548l1.414 2.795a1 1 0 0 1 .108.451v11.317a.883.883 0 0 1-.264.629.906.906 0 0 1-.636.26H3.9a.906.906 0 0 1-.636-.26A.883.883 0 0 1 3 19.11V7.798a1 1 0 0 1 .108-.452L4.522 4.55ZM19.2 9.333H4.8v8.89h14.4v-8.89Zm-.212-1.777-.9-1.778H5.913l-.9 1.778h13.975ZM12.9 13.778h2.7L12 17.333l-3.6-3.555h2.7v-3.556h1.8v3.556Z" />
    </svg>
);

export default SvgArchive;
