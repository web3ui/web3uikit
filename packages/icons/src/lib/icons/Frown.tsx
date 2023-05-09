// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgFrown = ({
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
            d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm7-3a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-5.526 5.191c.798-.58 2-1.191 3.526-1.191 1.525 0 2.728.61 3.526 1.191a6.944 6.944 0 0 1 1.17 1.08c.03.035.053.064.07.086l.022.027.007.01.003.003.001.002S16.8 15.4 16 16l.8-.6a1 1 0 0 1-1.597 1.204l-.005-.006a3.709 3.709 0 0 0-.194-.219 4.953 4.953 0 0 0-.655-.57C13.772 15.389 12.975 15 12 15c-.975 0-1.772.39-2.35.809a4.952 4.952 0 0 0-.815.748l-.034.041-.004.006.001-.002H8.8m0 0-.002.002A1 1 0 0 1 7.2 15.4l.8.6-.8-.6.002-.003.003-.004.007-.009.021-.027.07-.086a6.942 6.942 0 0 1 1.171-1.08"
        />
    </svg>
);

export default SvgFrown;
