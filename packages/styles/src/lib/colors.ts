const color = {
    aero10: '#F0F8FF',
    aero20: '#DCEEFE',
    aero30: '#BBDBF7',
    aero50: '#5B8DB9',
    aero80: '#213853',
    aero90: '#081825',
    aero100: '#001018',
    blue05: '#E8EAED',
    blue10: '#DCEFFD',
    blue20: '#99D3FF',
    blue30: '#52ABFF',
    blue40: '#0F7FFF',
    blue50: '#005AC2',
    blue60: '#003470',
    blue70: '#041836',
    blueGray50: '#68738D',
    fuchsia10: '#FCF0FB',
    fuchsia40: '#E156D0',
    gray20: '#F8F8F8',
    gray30: '#CACFD3',
    gray40: '#A8AFB7',
    gray60: '#4F5760',
    lavender40: '#8F7DFF',
    lime10: '#F6FFCC',
    mint05: '#E8FCF9',
    mint10: '#D1FFF0',
    mint20: '#A1FFE0',
    mint30: '#33FFCC',
    mint40: '#00D1AE',
    mint50: '#00AD96',
    mint53: '#009D88',
    mint60: '#00856F',
    mint80: '#003F3B',
    navy10: '#E9F2FA',
    navy20: '#BCD7F0',
    navy30: '#9EC7EA',
    navy40: '#0B72C4',
    navy80: '#00006B',
    purple10: '#F3EEFB',
    purple20: '#E9C4FF',
    purple50: '#9B22FF',
    purple60: '#6012A1',
    purple80: '#1F1446',
    red10: '#FDF0F0',
    red30: '#FF6969',
    red40: '#E95557',
    red50: '#FF0000',
    red60: '#AE0000',
    sky40: '#01C0F4',
    turquoise40: '#01CBD2',
    white: '#FFFFFF',
    white10: '#F5F5F5',
    yellow10: '#FEFAED',
    yellow20: '#F9EDBA',
    yellow40: '#F0C800',
    yellow50: '#EBBB00',
    yellow60: '#D69700',
} as const;

export const gradientColors = {
    beauBlue:
        'radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ECF5FC 0.52%, #CEE4F3 100%)',
    blue: 'linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 30.39%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #145559 33.25%, #414FA7 98.24%)',
    goldShiny:
        'linear-gradient(113.54deg, rgba(199, 148, 37, 0.6) 14.91%, rgba(204, 147, 23, 0.6) 14.92%, rgba(181, 147, 24, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(219, 200, 26, 0) 55.76%), linear-gradient(147.17deg, #DBBB14 48.73%, #B38311 98.22%)',
    lightBlue:
        'linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #427ACB 41.37%, #45FFFF 98.29%)',
    lightGrey:
        'linear-gradient(90deg,rgba(221, 221, 221, 0),rgba(232, 232, 232, 0.6),rgba(221, 221, 221, 0))',
    purpleToPink:
        'linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 25.92%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)',
};

export const getShade = (shade: 'light' | 'dark', percent: number) =>
    `rgba(
    ${shade === 'light' ? '255, 255, 255,' : '0, 0, 0,'}
    ${String(percent / 100)}
  )`;

export const colorPercentage = (color: string, percentage: string | number) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return `rgba(${r},${g},${b},${Number(percentage) / 100})`;
};

export const legacyColor = {
    beauBlue: '#CEE4F3',
    black: '#000000',
    blue: '#2E7DAF',
    blueCloud: '#EEF6FB',
    blueCloudDark: '#3092CF',
    blueCultured: '#EBEFF9',
    blueDark: '#041836',
    blueDark2: '#112F5C',
    blueDark3: '#0B72C4',
    blueLight: '#F2F6FF',
    blueLight2: '#E5EDFF',
    blueLight3: '#E6EDFF',
    blueLight4: '#57A5FF',
    blueLight5: '#DCEEFE',
    blueLight6: '#E9F2FA',
    blueLight7: '#F0F8FF',
    blueSky: '#9ECCEA',
    blueSkyDark: '#51A5DA',
    blueSkyLight: '#E8EAED',
    green: '#21BF96',
    greenDark: '#0FA67F',
    greenForestDark: '#3BC49D',
    greenForestLight: '#EBF9F5',
    greenLight: '#7AD9C0',
    greenMint: '#33FFCC',
    grey: '#68738D',
    greyDark: '#333333',
    greyDisabled: '#D7DAE0',
    greyIcons: '#B0B5BF',
    greyLight: '#C5CDD9',
    paleBlue2: '#C1D8E7',
    paleCerulean: '#9EC7EA',
    pink: '#DA51BE',
    pinkDark: '#E01FB3',
    pinkLight: '#FDF0FA',
    purple: '#8851DA',
    purpleDark: '#6D30CF',
    purpleLight: '#F3EEFB',
    red: '#EB5757',
    redDark: '#E01F1F',
    redLight: '#FDF0F0',
    white: '#FFFFFF',
    yellow: '#ECA609',
    yellowDark: '#F1A90E',
    yellowLight: '#FEF9EE',
    yellowHover: '#FAE7BC',
} as const;

export const colorTheme = {
    light: {
        default00: color.white,
        default10: color.gray30,
        default20: color.blueGray50,
        default30: color.gray40,
        default40: color.gray30,
        destructive20: color.red60,
        destructive30: color.red40,
        destructive40: color.red50,
        destructive50: color.red30,
        fuchsia40: color.fuchsia40,
        lavender40: color.lavender40,
        positive10: color.navy80,
        positive20: color.blue50,
        positive30: color.mint50,
        positive40: color.mint40,
        positive50: color.mint30,
        positive60: color.aero10,
        primary00: color.gray20,
        primary10: color.gray30,
        primary15: color.blueGray50,
        primary20: color.blue40,
        primary30: color.blue50,
        primary40: color.blue50,
        primary50: color.blue60,
        primary60: color.aero20,
        primary70: color.white,
        primary80: color.navy80,
        purple10: color.purple10,
        purple20: color.purple20,
        purple50: color.purple50,
        sky40: color.sky40,
        turquoise40: color.turquoise40,
        warning40: color.yellow40,
        warning50: color.yellow50,
        warning60: color.yellow60,
    },

    dark: {
        default00: color.white10,
        default10: color.gray60,
        default20: color.blueGray50,
        default30: color.gray40,
        default40: color.gray30,
        destructive20: color.red60,
        destructive30: color.red40,
        destructive40: color.red50,
        destructive50: color.red30,
        fuchsia40: color.fuchsia40,
        lavender40: color.lavender40,
        positive10: color.mint80,
        positive20: color.mint60,
        positive30: color.mint50,
        positive40: color.mint40,
        positive50: color.mint30,
        positive60: color.mint20,
        primary00: color.aero100,
        primary10: color.aero90,
        primary15: color.aero30,
        primary20: color.blue60,
        primary30: color.blue30,
        primary40: color.blue40,
        primary50: color.blue50,
        primary60: color.blue20,
        primary70: color.white10,
        primary80: color.navy80,
        purple10: color.purple80,
        purple20: color.purple60,
        purple50: color.purple50,
        sky40: color.sky40,
        turquoise40: color.turquoise40,
        warning40: color.yellow20,
        warning50: color.yellow40,
        warning60: color.yellow10,
    },
} as const;

export type TThemeName = keyof typeof colorTheme;
export type TColorTheme = {
    [K in TThemeName]: (typeof colorTheme)[K];
}[TThemeName];

export default color;
