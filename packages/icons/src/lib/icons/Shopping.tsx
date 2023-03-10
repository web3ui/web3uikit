// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgShopping = ({
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
        <path d="M9 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.62 18c-1.41 0-2.64-1.01-2.92-2.42L5.03 7.24s-.01-.06-.02-.09L4.18 3H1c-.55 0-1-.45-1-1s.45-1 1-1h4c.48 0 .89.34.98.8L6.82 6H23a.992.992 0 0 1 .98 1.19l-1.6 8.39c-.29 1.43-1.52 2.45-3 2.42H9.62ZM7.22 8l1.44 7.19c.09.47.5.81.98.81h9.76c.47 0 .92-.33 1.02-.8L21.79 8H7.22Z" />
    </svg>
);

export default SvgShopping;
