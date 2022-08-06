"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCoreJs = void 0;
function mockCoreJs() {
    return {
        name: 'mock-core-js',
        resolveId(id) {
            if (id.includes('node_modules/core-js')) {
                return id;
            }
            return undefined;
        },
        load(id) {
            if (id.includes('node_modules/core-js')) {
                return '';
            }
            return undefined;
        },
    };
}
exports.mockCoreJs = mockCoreJs;
//# sourceMappingURL=mock-core-js.js.map