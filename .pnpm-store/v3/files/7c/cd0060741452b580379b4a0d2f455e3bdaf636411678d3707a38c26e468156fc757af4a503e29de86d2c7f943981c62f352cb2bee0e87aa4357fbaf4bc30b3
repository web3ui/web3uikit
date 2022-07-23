"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
function serializePositional(positional, flag) {
    switch (flag) {
        // Strings.
        case 's':
            return positional;
        // Digits.
        case 'd':
        case 'i':
            return Number(positional);
        // JSON.
        case 'j':
            return JSON.stringify(positional);
        // Objects.
        case 'o': {
            // Preserve stings to prevent extra quotes around them.
            if (typeof positional === 'string') {
                return positional;
            }
            var json = JSON.stringify(positional);
            // If the positional isn't serializable, return it as-is.
            if (json === '{}' || json === '[]' || /^\[object .+?\]$/.test(json)) {
                return positional;
            }
            return json;
        }
    }
}
function format(message) {
    var positionals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positionals[_i - 1] = arguments[_i];
    }
    if (positionals.length === 0) {
        return message;
    }
    var positionalIndex = 0;
    var formattedMessage = message.replace(POSITIONALS_EXP, function (match, isEscaped, _, flag) {
        var positional = positionals[positionalIndex];
        var value = serializePositional(positional, flag);
        if (!isEscaped) {
            positionalIndex++;
            return value;
        }
        return match;
    });
    // Append unresolved positionals to string as-is.
    if (positionalIndex < positionals.length) {
        formattedMessage += " " + positionals.slice(positionalIndex).join(' ');
    }
    formattedMessage = formattedMessage.replace(/%{2,2}/g, '%');
    return formattedMessage;
}
exports.format = format;
