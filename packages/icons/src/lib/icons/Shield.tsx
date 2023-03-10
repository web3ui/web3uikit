// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgShield = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 17"
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
        <g clipPath="url(#shield_svg__a)">
            <g clipPath="url(#shield_svg__b)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.766 1.646a.667.667 0 0 1 .468 0l5.333 2c.26.098.433.346.433.624v4.667c0 2.298-1.521 4.133-2.894 5.335a15.126 15.126 0 0 1-2.787 1.917l-.014.007-.004.003h-.002L8 15.603l-.299.597-.002-.001-.004-.003-.014-.007a4.554 4.554 0 0 1-.233-.125 15.126 15.126 0 0 1-2.554-1.792C3.521 13.07 2 11.235 2 8.937V4.27c0-.278.172-.526.433-.624l5.333-2ZM8 15.603l-.299.597a.668.668 0 0 0 .597 0L8 15.604Zm0-.758a13.8 13.8 0 0 0 2.228-1.577c1.293-1.131 2.439-2.629 2.439-4.331V4.732L8 2.982l-4.667 1.75v4.205c0 1.702 1.146 3.2 2.44 4.332A13.796 13.796 0 0 0 8 14.845Z"
                />
            </g>
        </g>
        <defs>
            <clipPath id="shield_svg__a">
                <path transform="translate(0 .938)" d="M0 0h16v16H0z" />
            </clipPath>
            <clipPath id="shield_svg__b">
                <path transform="translate(0 .938)" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgShield;
