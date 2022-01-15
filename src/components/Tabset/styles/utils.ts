import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import * as themes from './themes';
import type { TabsetColor, TabsetSize, TabsetVariant } from '../app';

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
        case 'light': return themes.light;
        case 'outline': return themes.outline;
        case 'pill': return themes.pill;
        case 'solid': return themes.solid;
        case 'unstyled': return themes.unstyled;
    }
}
