const newlineRegex = /(\r?\n)/g;
/** @internal */
export function escapeForWithinString(str, quoteKind) {
    return escapeChar(str, quoteKind).replace(newlineRegex, "\\$1");
}
/** @internal */
export function escapeChar(str, char) {
    if (char.length !== 1) {
        throw new Error(`Specified char must be one character long.`);
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            result += "\\";
        }
        result += str[i];
    }
    return result;
}
/** @internal */
export function getStringFromStrOrFunc(strOrFunc) {
    return strOrFunc instanceof Function ? strOrFunc() : strOrFunc;
}
