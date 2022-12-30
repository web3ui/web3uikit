// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgSolana = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
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
        <path d="M5.25 15.956a.655.655 0 0 1 .462-.191h15.96c.292 0 .438.352.231.558l-3.152 3.15a.654.654 0 0 1-.463.192H2.328a.327.327 0 0 1-.231-.558l3.152-3.151zm0-11.765A.673.673 0 0 1 5.711 4h15.96c.292 0 .438.352.231.558l-3.152 3.15a.654.654 0 0 1-.463.192H2.328a.327.327 0 0 1-.231-.558l3.152-3.151zm13.5 5.995a.663.663 0 0 0-.462-.186H2.328c-.292 0-.438.343-.231.544l3.152 3.07a.667.667 0 0 0 .463.186h15.96c.292 0 .438-.343.231-.544l-3.152-3.07z" />
    </svg>
);

export default SvgSolana;
