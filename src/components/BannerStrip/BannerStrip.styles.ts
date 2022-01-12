import { css } from 'styled-components';
import color from '../../styles/colors';

const section = css`
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

    strong {
        margin: 0 8px;
        padding: 2px 8px;
        line-height: 16px;
    }
`;

const button = css`
    background-color: inherit;
    border-radius: 25px;
    border: 2px solid ${color.white};
    color: ${color.white};
    font-size: 14px;
    font-weight: 600;
    margin: 0 12px;
    padding: 2px 8px;
    white-space: nowrap;
`;

const bannerStripStyles = {
    button,
    section,
};

export default bannerStripStyles;
