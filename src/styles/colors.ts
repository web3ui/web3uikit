const color = {
    blue: '#2E7DAF',
    blueCloud: '#EEF6FB',
    blueDark: '#041836',
    blueDark2: '#112F5C',
    blueLight: '#F2F6FF',
    blueSky: '#9ECCEA',
    blueSkyDark: '#51A5DA',
    blueSkyLight: '#E8EAED',
    green: '#21BF96',
    greenDark: '#0FA67F',
    greenForestLight: '#EBF9F5',
    greenLight: '#7AD9C0',
    grey: '#68738D',
    greyDark: '#333333',
    greyIcons: '#B0B5BF',
    greyLight: '#C5CDD9',
    paleBlue2: '#C1D8E7',
    pink: '#DA51BE',
    pinkLight: '#FDF0FA',
    purple: '#8851DA',
    purpleLight: '#F3EEFB',
    red: '#EB5757',
    redLight: '#FDF0F0',
    white: '#FFFFFF',
    yellow: '#ECA609',
    yellowLight: '#FEF9EE',
};

export const getShade = (shade: 'light' | 'dark', percent: number) =>
    `rgba(
    ${shade === 'light' ? '255, 255, 255,' : '0, 0, 0,'}
    ${String(percent / 100)}
  )`;

export default color;
