// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgToolbox = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 25"
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
            d="M14.482 1.274a.67.67 0 0 1 .097.63l-1.232 3.448 1.032.367 1.233-3.45a.67.67 0 0 1 1.09-.262c1.192 1.124 2.076 3.084 1.426 4.896a4.498 4.498 0 0 1-3.823 2.963l-.93 2.604a.67.67 0 0 1-1.261-.45l1.08-3.03a.67.67 0 0 1 .64-.444 3.164 3.164 0 0 0 3.033-2.096c.296-.825.096-1.796-.394-2.61L15.415 6.8a.67.67 0 0 1-.855.406l-2.295-.816a.67.67 0 0 1-.406-.857l1.062-2.97c-.93.312-1.733.933-2.023 1.755l-.001.004a3.142 3.142 0 0 0 1.028 3.532.67.67 0 0 1 .207.775l-1.55 3.866a.67.67 0 1 1-1.243-.5l1.374-3.427C9.517 7.383 9.024 5.576 9.635 3.872c.644-1.828 2.643-2.75 4.267-2.862a.67.67 0 0 1 .58.264ZM8.646 9.191a.67.67 0 0 1-.305.897l-2.863 1.41 6.135 3.087 6.074-3.057-.66-.294a.67.67 0 0 1 .545-1.224l1.952.868a.67.67 0 0 1 .398.613v7.7a.67.67 0 0 1-.369.598l-7.639 3.845a.67.67 0 0 1-.602 0l-7.64-3.845a.67.67 0 0 1-.368-.598v-7.7a.67.67 0 0 1 .374-.602l4.071-2.003a.67.67 0 0 1 .897.305Zm9.936 3.387-6.299 3.17v6.2l6.3-3.17v-6.2Zm-7.64 9.37v-6.2l-6.298-3.17v6.2l6.299 3.17Z"
        />
    </svg>
);

export default SvgToolbox;
