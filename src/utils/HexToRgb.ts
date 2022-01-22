const hexToRgb = (hex: string): string => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? ` ${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
              result[3],
              16,
          )} `
        : '66, 135, 245';
};

export default hexToRgb;
