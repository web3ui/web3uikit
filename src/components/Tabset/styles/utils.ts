import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import type { TabsetColor, TabsetSize, TabsetVariant } from '../components';
import { solid } from './solid';
import { pill } from './pill';
import { outline } from './outline';
import { light } from './themes/light';
import { unstyled } from './unstyled';

export const getColor = (c: TabsetColor) => {
    switch (c) {
        case 'blue': return colors.blueSkyDark;
        case 'green': return colors.green;
        case 'red': return colors.red;
        case 'yellow': return colors.yellow;
    }
}

export const getDarkColor = (c: TabsetColor) => {
    switch (c) {
        case 'blue': return colors.blue;
        case 'green': return colors.greenDark;
        case 'red': return colors.redDark;
        case 'yellow': return colors.yellowDark;
    }
}

export const getLightColor = (c: TabsetColor) => {
    switch (c) {
        case 'blue': return colors.blueSkyLight;
        case 'green': return colors.greenForestLight;
        case 'red': return colors.redLight;
        case 'yellow': return colors.yellowLight;
    }
}

export const getFontSize = (s: TabsetSize) => {
    switch (s) {
        case 'large': return fonts.h4;
        case 'medium': return fonts.h5;
        case 'small': return fonts.textSmall;
    }
}

export const getVariant = (v: TabsetVariant) => {
    switch (v) {
        case 'light': return light;
        case 'outline': return outline;
        case 'pill': return pill;
        case 'solid': return solid;
        case 'unstyled': return unstyled;
    }
}
