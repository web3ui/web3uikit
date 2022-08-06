"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeOverridesIntoCommandLine = void 0;
function serializeOverridesIntoCommandLine(args) {
    const r = args['_'] ? [...args['_']] : [];
    Object.keys(args).forEach((a) => {
        if (a !== '_') {
            r.push(typeof args[a] === 'string' && args[a].includes(' ')
                ? `--${a}="${args[a].replace(/"/g, '"')}"`
                : `--${a}=${args[a]}`);
        }
    });
    return r;
}
exports.serializeOverridesIntoCommandLine = serializeOverridesIntoCommandLine;
//# sourceMappingURL=serialize-overrides-into-command-line.js.map