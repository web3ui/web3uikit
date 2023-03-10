// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgCoupon = ({
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
            d="M12.353.333c.343-.009.675.124.917.366l9.192 9.193c.588.587.95 1.378.983 2.215a3.026 3.026 0 0 1-.873 2.271l-7.827 7.827a3.026 3.026 0 0 1-2.271.874 3.338 3.338 0 0 1-2.216-.983l-9.192-9.193a1.25 1.25 0 0 1-.366-.917L.97 1.82A1.25 1.25 0 0 1 2.185.602L12.353.333Zm-.47 2.514-8.447.223-.223 8.445 8.813 8.813a.839.839 0 0 0 .549.253.527.527 0 0 0 .402-.143l7.827-7.828a.527.527 0 0 0 .144-.402.839.839 0 0 0-.253-.549l-8.813-8.812Z"
        />
        <path d="M7.97 7.42a1.5 1.5 0 1 1-2.122-2.122 1.5 1.5 0 0 1 2.121 2.121Z" />
    </svg>
);

export default SvgCoupon;
