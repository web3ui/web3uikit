import { createGlobalStyle } from 'styled-components';
import ArgentumSansBlack from './ArgentumSans-Black.woff';
import ArgentumSansBold from './ArgentumSans-Bold.woff';
import ArgentumSansLight from './ArgentumSans-Light.woff';
import ArgentumSansLightItalic from './ArgentumSans-LightItalic.woff';
import ArgentumSansMedium from './ArgentumSans-Medium.woff';
import ArgentumSansMediumItalic from './ArgentumSans-MediumItalic.woff';
import ArgentumSansRegular from './ArgentumSans-Regular.woff';
import ArgentumSansSemiBold from './ArgentumSans-SemiBold.woff';
import ArgentumSansSemiBoldItalic from './ArgentumSans-SemiBoldItalic.woff';

const FontStyles = createGlobalStyle`
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansBlack}) format('wof2');
    font-weight: 800;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansBold}) format('wof2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansLight}) format('wof2');
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansLightItalic}) format('wof2');
    font-weight: 200;
    font-style: italic;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansMedium}) format('wof2');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansMediumItalic}) format('wof2');
    font-weight: 500;
    font-style: italic;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansRegular}) format('wof2');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansSemiBold}) format('wof2');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: Argentum Sans;
    src: url(${ArgentumSansSemiBoldItalic}) format('wof2');
    font-weight: 600;
    font-style: italic;
}
`;

export default FontStyles;
