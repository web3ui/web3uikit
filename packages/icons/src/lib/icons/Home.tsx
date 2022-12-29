// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgHome = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 19"
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
            d="M8.447.19a.895.895 0 0 1 1.106 0l8.1 6.345c.219.172.347.436.347.716v9.03c0 .721-.285 1.413-.79 1.923A2.69 2.69 0 0 1 15.3 19h-3.61a.903.903 0 0 1-.9-.906v-6.062a.25.25 0 0 0-.25-.25h-3.1a.25.25 0 0 0-.25.25v6.062c0 .5-.403.906-.9.906H2.7a2.69 2.69 0 0 1-1.91-.796A2.729 2.729 0 0 1 0 16.28v-9.03c0-.28.128-.544.347-.716l8.1-6.344ZM1.8 7.695v8.587c0 .24.095.47.264.64.168.17.397.266.636.266h2.69v-6.31c0-.502.403-.907.9-.907h5.4c.497 0 .9.405.9.906v6.311h2.71a.897.897 0 0 0 .636-.265.91.91 0 0 0 .264-.641V7.694L9 2.054l-7.2 5.64Z"
        />
    </svg>
);

export default SvgHome;
