// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgToolboxAlt = ({
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
            d="M9.025 5.48c-.08.112-.168.32-.168.728v1.129h6.296a.92.92 0 0 1 0-.023V6.208c0-.404-.087-.611-.168-.724-.078-.11-.21-.21-.458-.29-.26-.084-.601-.13-1.045-.15a24.283 24.283 0 0 0-1.152-.015H11.654c-.41-.001-.78-.002-1.127.013-.444.02-.786.065-1.045.148-.248.08-.378.18-.457.29Zm7.628 1.857V6.208c0-.615-.133-1.158-.449-1.598-.317-.443-.76-.697-1.218-.845-.448-.144-.946-.197-1.434-.22-.394-.018-.82-.017-1.243-.016a114.31 114.31 0 0 1-.63 0 26.35 26.35 0 0 0-1.219.015c-.488.021-.986.074-1.435.217-.459.147-.901.4-1.22.845-.315.44-.448.985-.448 1.602v1.129H2.703c-1.135 0-2.056.92-2.056 2.056v7.494c0 1.136.921 2.056 2.056 2.056h18.596c1.135 0 2.056-.92 2.056-2.056V9.393c0-1.135-.92-2.056-2.056-2.056h-4.645Zm-13.95 1.5a.556.556 0 0 0-.557.556v2.033H5.78v-.335a.75.75 0 0 1 1.5 0v.335h9.41v-.335a.75.75 0 0 1 1.5 0v.335h3.664V9.393a.556.556 0 0 0-.556-.556H2.702Zm19.15 4.089H18.19v.837a.75.75 0 0 1-1.5 0v-.837H7.28v.837a.75.75 0 0 1-1.5 0v-.837H2.146v3.961c0 .308.25.556.556.556h18.596a.556.556 0 0 0 .556-.556v-3.961Z"
        />
    </svg>
);

export default SvgToolboxAlt;
