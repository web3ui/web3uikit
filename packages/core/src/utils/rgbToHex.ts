const rgbToHex = (rgb: string | undefined) => {
    if (typeof rgb == 'undefined') throw new Error();
    // Choose correct separator
    const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    // Turn "rgb(r,g,b)" into [r,g,b]
    const rgbArray = rgb.substr(4).split(')')[0].split(sep);

    let r = (+rgbArray[0]).toString(16);
    let g = (+rgbArray[1]).toString(16);
    let b = (+rgbArray[2]).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return '#' + r + g + b;
};

export default rgbToHex;
