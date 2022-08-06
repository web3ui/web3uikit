"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchCounter = void 0;
const tslib_1 = require("tslib");
const os_1 = require("os");
function wait() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((res) => {
            setTimeout(() => res(), 1000);
        });
    });
}
function counter(opts) {
    return tslib_1.__asyncGenerator(this, arguments, function* counter_1() {
        for (let i = 0; i < opts.to; ++i) {
            console.log(i);
            yield yield tslib_1.__await({ success: false });
            yield tslib_1.__await(wait());
        }
        yield yield tslib_1.__await({ success: opts.result });
    });
}
exports.default = counter;
function batchCounter(taskGraph, inputs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = {};
        const results = yield Promise.all(taskGraph.roots
            .map((rootTaskId) => [rootTaskId, inputs[rootTaskId]])
            .map(([taskId, options]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let terminalOutput = '';
            for (let i = 0; i < options.to; ++i) {
                console.log(i);
                terminalOutput += i + os_1.EOL;
                yield wait();
            }
            return [taskId, options.result, terminalOutput];
        })));
        for (const [taskId, taskResult, terminalOutput] of results) {
            result[taskId] = {
                success: taskResult,
                terminalOutput,
            };
        }
        return result;
    });
}
exports.batchCounter = batchCounter;
//# sourceMappingURL=counter.impl.js.map