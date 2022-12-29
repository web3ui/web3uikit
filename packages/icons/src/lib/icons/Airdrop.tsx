// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgAirdrop = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 25 25"
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
        <g
            clipPath="url(#airdrop_svg__a)"
            stroke="#A8AFB7"
            strokeWidth={1.717}
            strokeMiterlimit={10}
        >
            <path d="M19.163 9.048c0 3.92-7.091 7.091-7.091 7.091S4.98 12.967 4.98 9.048c0-3.92 3.182-7.091 7.102-7.091a7.087 7.087 0 0 1 7.091 7.09h-.01Z" />
            <path d="M15.425 9.048c0 3.92-3.343 7.091-3.343 7.091s-3.344-3.172-3.344-7.091c0-3.92 1.495-7.091 3.344-7.091 1.848 0 3.343 3.171 3.343 7.09ZM14.425 16.907H9.729a.879.879 0 0 0-.879.879v3.363c0 .486.394.88.88.88h4.697a.879.879 0 0 0 .878-.88v-3.363a.879.879 0 0 0-.879-.88Z" />
            <path d="M19.163 9.048c-1.202-.95-2.455-.839-3.748 0-2.323-.98-4.555-1.03-6.687 0-1.252-.91-2.505-1.101-3.748 0" />
        </g>
        <defs>
            <clipPath id="airdrop_svg__a">
                <path
                    fill="#fff"
                    transform="translate(4.132 1.098)"
                    d="M0 0h15.889v21.789H0z"
                />
            </clipPath>
        </defs>
    </svg>
);

export default SvgAirdrop;
