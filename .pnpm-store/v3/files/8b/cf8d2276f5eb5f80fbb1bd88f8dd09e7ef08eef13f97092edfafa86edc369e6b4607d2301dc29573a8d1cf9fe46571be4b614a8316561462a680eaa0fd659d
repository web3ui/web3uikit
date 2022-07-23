"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const child_process_1 = require("child_process");
const rxjs_1 = require("rxjs");
function exec(cmd, args = []) {
    return new rxjs_1.Observable((subscriber) => {
        const process = (0, child_process_1.execFile)(cmd, args, (error, stdout, stderr) => {
            if (error) {
                subscriber.error(new Error(stderr));
                return;
            }
            subscriber.next(stdout);
            subscriber.complete();
        });
        const _removeEvents = _listenExitEvent(() => subscriber.complete());
        return () => {
            _killProcess(process);
            _removeEvents();
        };
    });
}
exports.exec = exec;
function _killProcess(process) {
    if (process.stdout) {
        process.stdout.removeAllListeners();
    }
    if (process.stderr) {
        process.stderr.removeAllListeners();
    }
    process.removeAllListeners();
    process.kill('SIGKILL');
}
function _listenExitEvent(fn, events = ['SIGINT', 'SIGBREAK']) {
    events.forEach((name) => process.on(name, fn));
    process.on('exit', fn);
    return () => {
        events.forEach((name) => process.off(name, fn));
        process.off('exit', fn);
    };
}
//# sourceMappingURL=exec.js.map