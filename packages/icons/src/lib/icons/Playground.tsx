// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgPlayground = ({
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
        <path d="M21.67 6.63c-.02-.07-.03-.14-.07-.21a.897.897 0 0 0-.24-.27c-.24-.31-.51-.58-.86-.78l-7-4.01c-.93-.53-2.08-.53-3 0l-7 4c-.35.2-.62.48-.86.79-.09.07-.18.16-.24.27-.04.07-.05.14-.07.22-.2.41-.33.85-.33 1.32v8c0 1.07.58 2.06 1.5 2.6l7 4c.32.18.66.28 1.01.34.15.09.31.15.49.15s.34-.06.49-.15c.35-.06.69-.15 1.01-.33l7-4c.92-.53 1.5-1.53 1.5-2.59V7.96c0-.47-.13-.92-.34-1.33h.01ZM11.5 3.09c.15-.09.33-.13.5-.13.17 0 .35.05.51.14l6.46 3.69-2.36 1.36H7.4L5.04 6.79 11.5 3.1v-.01Zm2.15 9.07-.65.98-1 1.5-1-1.5-.66-.99L9 10.14h6l-1.34 2.02h-.01ZM4.5 16.81a1 1 0 0 1-.5-.86V8.49l2.43 1.4L11 16.75v3.78l-6.5-3.71v-.01Zm15.5-.87c0 .36-.19.69-.5.86L13 20.52v-3.79l4.56-6.85L20 8.47v7.47Z" />
    </svg>
);

export default SvgPlayground;
