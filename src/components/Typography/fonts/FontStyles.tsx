import { createGlobalStyle } from 'styled-components';
// import RobotoWoff from './fonts/roboto-condensed-v19-latin-regular.woff';
// import RobotoWoff2 from './fonts/roboto-condensed-v19-latin-regular.woff2';

const FontStyles = createGlobalStyle`

/* @font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
} */

@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-Black.otf) format('opentype');
    font-weight: 800;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-Bold.otf) format('opentype');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-Light.otf) format('opentype');
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: local('Argentum Sans'), local('ArgentumSans'),
        url(./ArgentumSans-LightItalic.otf) format('opentype');
    font-weight: 200;
    font-style: italic;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-Medium.otf) format('opentype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-MediumItalic.otf) format('opentype');
    font-weight: 500;
    font-style: italic;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-Regular.otf) format('opentype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-SemiBold.otf) format('opentype');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Argentum Sans';
    src: url(./ArgentumSans-SemiBoldItalic.otf) format('opentype');
    font-weight: 600;
    font-style: italic;
}

`;

export default FontStyles;
