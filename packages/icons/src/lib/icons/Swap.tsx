// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgSwap = ({
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
            d="M9.425 3.082a9.286 9.286 0 0 1 11.334 5.822.928.928 0 1 1-1.75.62A7.429 7.429 0 0 0 6.73 6.771l-2.6 2.443h3.227a.929.929 0 0 1 0 1.857H1.786a.929.929 0 0 1-.93-.928V4.57a.929.929 0 1 1 1.858 0v3.425l2.734-2.569a9.286 9.286 0 0 1 3.977-2.345Zm6.29 10.775c0-.513.415-.928.928-.928h5.572c.512 0 .928.415.928.928v5.572a.929.929 0 0 1-1.857 0v-3.425l-2.734 2.569a9.284 9.284 0 0 1-15.311-3.478.929.929 0 1 1 1.75-.619 7.428 7.428 0 0 0 12.258 2.773l.013-.012.008-.008 2.6-2.443h-3.227a.929.929 0 0 1-.929-.929Z"
        />
    </svg>
);

export default SvgSwap;
