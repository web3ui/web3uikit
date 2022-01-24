import React from 'react';
import styled from 'styled-components';
import { tagStyles } from './Tag.styles';
import { TagProps } from '.';
import type { Tone } from './types';

const getTheme = (theme: string, active?: boolean) => {
    switch (theme) {
        case 'status':
            return active ? tagStyles.activeStatus : tagStyles.inactiveStatus;
        case 'discount':
            return tagStyles.discount;
        default:
            return tagStyles.regular;
    }
};

const getColors = (color?: string, tone?: Tone) => {
    switch (color) {
        case 'green':
            return tone === 'light'
                ? tagStyles.coloredGreen
                : tagStyles.coloredGreenDark;
        case 'red':
            return tone === 'light'
                ? tagStyles.coloredRed
                : tagStyles.coloredRedDark;
        case 'yellow':
            return tone === 'light'
                ? tagStyles.coloredYellow
                : tagStyles.coloredYellowDark;
        case 'blue':
            return tone === 'light'
                ? tagStyles.coloredBlue
                : tagStyles.coloredBlueDark;
        case 'purple':
            return tone === 'light'
                ? tagStyles.coloredPurple
                : tagStyles.coloredPurpleDark;
        case 'pink':
            return tone === 'light'
                ? tagStyles.coloredPink
                : tagStyles.coloredPinkDark;
        case 'grey':
            return tone === 'light'
                ? tagStyles.coloredGrey
                : tagStyles.coloredGrayDark;
        default:
            return tagStyles.coloredGrey;
    }
};

const TagStyled = styled.div<Pick<TagProps, 'active' | 'tone'>>`
    ${tagStyles.initialStyles}
    ${(p) => getTheme(p.theme, p.active)}
    ${(p) => p.theme !== 'status' && p.color && getColors(p.color, p.tone)}
`;

const Tag: React.FC<TagProps> = ({
    id = String(Date.now()),
    text = 'Tag',
    color,
    active = false,
    theme = 'regular',
    tone = 'light',
}: TagProps) => {
    return (
        <TagStyled
            data-testid="test-tag-id"
            id={id}
            theme={theme}
            color={color}
            active={active}
            tone={tone}
        >
            {theme === 'status' && active && (
                <svg
                    data-testid="test-tag-active-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM9.22651 3.10297L9.85809 3.73455C9.96793 3.84439 9.96793 4.06407 9.85809 4.20137L7.48281 6.5492L5.10752 8.89703C4.97022 9.03432 4.778 9.03432 4.6407 8.89703L2.14184 6.37071C2.032 6.26087 2.032 6.04119 2.14184 5.90389L2.77342 5.29977C2.91072 5.16247 3.10294 5.16247 3.24024 5.29977L4.88784 6.94737L8.75969 3.10297C8.89699 2.96568 9.11667 2.96568 9.22651 3.10297Z"
                        fill="#0FA67F"
                    />
                </svg>
            )}
            <span data-testid="test-tag-text">{text}</span>
        </TagStyled>
    );
};

export default Tag;
