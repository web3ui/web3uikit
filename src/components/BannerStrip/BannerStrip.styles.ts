import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import { BannerStripProps } from './types';

const getBackgroundColor = (type: string) => {
    switch (type) {
        case 'success':
            return color.green;
        case 'warning':
            return color.yellow;
        case 'error':
            return color.red;
        default:
            return color.blue;
    }
};

const SectionStyled = styled.section<Pick<BannerStripProps, 'type' | 'height'>>`
    ${fonts.text};
    align-items: center;
    color: ${color.white};
    display: flex;
    height: 40px;
    justify-content: center;
    left: 0;
    max-width: 100%;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10001;
    background-color: ${(p) => p.type && getBackgroundColor(p.type)};
    height: ${({ height }) => height};

    button {
        padding: 0 8px;
        margin: 2px 6px;
        border: 0;
    }

    strong {
        margin: 0 8px;
        padding: 2px 8px;
        line-height: 16px;
    }
`;

export default { SectionStyled };
