"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTargetFromScript = void 0;
function buildTargetFromScript(script, nx) {
    var _a;
    const nxTargetConfiguration = ((_a = nx === null || nx === void 0 ? void 0 : nx.targets) === null || _a === void 0 ? void 0 : _a[script]) || {};
    return Object.assign(Object.assign({}, nxTargetConfiguration), { executor: 'nx:run-script', options: Object.assign(Object.assign({}, (nxTargetConfiguration.options || {})), { script }) });
}
exports.buildTargetFromScript = buildTargetFromScript;
//# sourceMappingURL=package-json.js.map