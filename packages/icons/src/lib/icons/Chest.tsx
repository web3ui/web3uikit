// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgChest = ({
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
        <g clipPath="url(#chest_svg__a)">
            <g clipPath="url(#chest_svg__b)" fill="#000">
                <path d="M18.975 13.598c-.39 0-.7.31-.7.7v2.86H5.725v-2.86c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v4.26h15.35v-4.26c0-.39-.31-.7-.7-.7Z" />
                <path d="M17.755 3.198H6.245a4.727 4.727 0 0 0-4.75 4.74V21.458h21.01V7.948c0-2.63-2.12-4.75-4.75-4.75Zm-14.86 4.74c0-1.85 1.5-3.35 3.35-3.34h11.51c1.85 0 3.35 1.5 3.35 3.35v2.03l-5.89.82a3.079 3.079 0 0 0-2.98-2.3h-.46c-1.43 0-2.63.98-2.98 2.29l-5.9-.82v-2.03Zm7.75 5.95s-.02 0-.02-.01a1.49 1.49 0 0 1-.53-1.14v-1.14c0-.93.75-1.68 1.68-1.68h.46c.89 0 1.63.7 1.68 1.59v1.24c0 .47-.21.88-.55 1.16-.27.23-.61.36-.98.36h-.75c-.37 0-.7-.13-.98-.36l-.01-.02Zm-7.75 6.18v-8.69l5.8.81v.54c0 .9.41 1.7 1.05 2.24.02.02.04.02.06.03.5.4 1.12.65 1.82.65h.75c.73 0 1.37-.27 1.88-.69.64-.53 1.04-1.32 1.04-2.23v-.52l5.8-.81v8.68h-18.2v-.01Z" />
            </g>
        </g>
        <defs>
            <clipPath id="chest_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
            <clipPath id="chest_svg__b">
                <path
                    fill="#fff"
                    transform="translate(1.495 3.198)"
                    d="M0 0h21.01v18.27H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgChest;
