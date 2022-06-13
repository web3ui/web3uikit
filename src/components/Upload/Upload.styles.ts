// importing styled to make components and css to make themes
import styled from 'styled-components';

// importing centralized styles
import resetCSS from '../../styles/reset';
// import color from '../../styles/colors';
// import fonts from '../../styles/fonts';

// import our types to conditionally render CSS
import type { UploadProps } from './types';

// pick the props that you will use for conditional CSS
type TStyleProps = Pick<UploadProps, 'pressed'>;

// //////////////////
// Theme CSS
// CSS Props should be sorted alphabetically
// //////////////////

const DivStyled = styled.div<TStyleProps>`
    ${resetCSS};
    width: 100%;
    background: ${(p) =>
        p.pressed
            ? 'radial-gradient(102.8% 102.8% at 3.14% -9.06%, #D3FFF8 0%, #D2FDF7 4.74%, #C8E9EF 50.11%, #C2DDE9 83.07%, #C0D8E7 100%)'
            : 'transparent'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 8px;
    border: 2px dashed #9eccea;
    border-radius: 13px;
    &:hover {
        background: ${(p) =>
            !p.pressed
                ? 'radial-gradient(102.8% 102.8% at 3.14% -9.06%, #E9FFFC 0%, #E8FEFB 4.74%, #E4F4F7 50.11%, #E1EEF4 83.07%, #E0ECF3 100%)'
                : 'radial-gradient(102.8% 102.8% at 3.14% -9.06%, #D3FFF8 0%, #D2FDF7 4.74%, #C8E9EF 50.11%, #C2DDE9 83.07%, #C0D8E7 100%)'};
    }
`;

// CSS ORDERING
// 1 - Imported styles (font, colors, etc)
// 2 - Normal styles (margin, padding, etc)
// 3 - Child elements (span, svg, etc)
// 4 - Pseudo elements (before & after)
// 5 - Modifier styles (hover, active etc)
// 6 - State changed styles ${(p) => (p.prop ? green : red)};
// each should be sorted alphabetically as best as possible

export default {
    DivStyled,
};
