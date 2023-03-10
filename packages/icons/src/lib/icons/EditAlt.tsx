// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgEditAlt = ({
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
            d="M5.586 7A2 2 0 0 1 7 6.414h4.667a.667.667 0 0 1 0 1.334H7a.667.667 0 0 0-.667.666v9.333a.667.667 0 0 0 .667.667h9.333a.667.667 0 0 0 .667-.667v-4.666a.667.667 0 0 1 1.333 0v4.666a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.414A2 2 0 0 1 5.586 7Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.667 6.333a.748.748 0 0 0-.529.22l-6.203 6.202-.352 1.41 1.41-.353 6.202-6.203a.747.747 0 0 0-.528-1.276Zm-1.472-.724a2.08 2.08 0 1 1 2.943 2.943l-6.333 6.334a.666.666 0 0 1-.31.175l-2.667.667a.667.667 0 0 1-.808-.809l.667-2.667a.667.667 0 0 1 .175-.31l6.333-6.333Z"
        />
    </svg>
);

export default SvgEditAlt;
