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

const bannerStripStyles = {
    section,
};

export default bannerStripStyles;
