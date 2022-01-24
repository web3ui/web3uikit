export const n6 = new Intl.NumberFormat('en-us', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
});
export const n4 = new Intl.NumberFormat('en-us', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
});

export const c2 = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */
export const getEllipsisTxt = (str: string, n = 6) => {
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return '';
};
