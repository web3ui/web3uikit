// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgUser = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
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
        <path d="M15.576 13.875c-1.165 0-1.688.625-3.576.625-1.929 0-2.45-.625-3.616-.625C5.41 13.875 3 16.258 3 19.148v.977C3 21.18 3.844 22 4.929 22H19.07c1.046 0 1.93-.82 1.93-1.875v-.977c0-2.89-2.45-5.273-5.424-5.273zm3.495 6.25H4.93v-.977c0-1.875 1.526-3.398 3.455-3.398.603 0 1.527.625 3.616.625 2.05 0 2.973-.625 3.576-.625 1.928 0 3.495 1.523 3.495 3.398v.977zM12 13.25c3.174 0 5.786-2.5 5.786-5.625C17.786 4.539 15.174 2 12 2 8.786 2 6.214 4.54 6.214 7.625c0 3.125 2.572 5.625 5.786 5.625zm0-9.375c2.09 0 3.857 1.719 3.857 3.75 0 2.07-1.768 3.75-3.857 3.75-2.13 0-3.857-1.68-3.857-3.75 0-2.031 1.728-3.75 3.857-3.75z" />
    </svg>
);

export default SvgUser;
