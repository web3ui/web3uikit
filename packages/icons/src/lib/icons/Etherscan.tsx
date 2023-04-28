// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgEtherscan = ({
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
        fill="none"
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
            d="M6.456 11.535c0-.438.36-.798.798-.798H8.6c.438 0 .814.36.814.814v5.077c.157-.047.344-.094.564-.141a.687.687 0 0 0 .517-.659V9.53a.82.82 0 0 1 .814-.815h1.346c.439 0 .814.36.814.815v5.845l.658-.282a.669.669 0 0 0 .407-.627V7.493c0-.438.36-.815.799-.815h1.346c.438 0 .799.36.799.815v5.751c1.158-.846 2.348-1.864 3.288-3.087.282-.36.36-.83.204-1.269-1.723-4.951-7.14-7.584-12.087-5.86-4.947 1.724-7.577 7.145-5.855 12.096.188.564.438 1.097.736 1.614.234.408.673.642 1.143.595.25-.016.564-.047.954-.094a.666.666 0 0 0 .596-.674l-.001-5.03Z"
            fill="#21325B"
        />
        <path
            d="M6.424 19.683a9.485 9.485 0 0 0 13.26-2.099 9.582 9.582 0 0 0 1.816-5.593c0-.22-.016-.439-.031-.659-3.46 5.186-9.863 7.615-15.045 8.351Z"
            fill="#979695"
        />
    </svg>
);

export default SvgEtherscan;
