// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgNoData = ({
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
            d="M6.635 3.707a2.097 2.097 0 0 1 1.532-.679h5.778c.191 0 .375.082.51.226l4.334 4.637a.8.8 0 0 1 .211.546v9.273c0 .615-.228 1.204-.634 1.64a2.097 2.097 0 0 1-1.532.678H8.167a2.098 2.098 0 0 1-1.532-.679A2.403 2.403 0 0 1 6 17.71V5.347c0-.615.228-1.204.635-1.639Zm1.532.867a.7.7 0 0 0-.51.226.801.801 0 0 0-.212.546V17.71c0 .205.076.401.211.546a.7.7 0 0 0 .51.227h8.668a.699.699 0 0 0 .51-.227.801.801 0 0 0 .212-.546V8.757l-3.91-4.183h-5.48Z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.945 3.028c.399 0 .722.346.722.773v3.863h3.611c.399 0 .722.346.722.773 0 .427-.323.773-.722.773h-4.333c-.4 0-.723-.346-.723-.773V3.801c0-.427.324-.773.723-.773ZM5.345 2.228a.916.916 0 0 0-.19 1.281l13.22 17.838a.916.916 0 1 0 1.471-1.09L6.626 2.419a.916.916 0 0 0-1.281-.19Z"
        />
    </svg>
);

export default SvgNoData;
