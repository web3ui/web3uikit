"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyAssetsHandler = exports.defaultFileEventHandler = void 0;
const tslib_1 = require("tslib");
const minimatch = require("minimatch");
const path = require("path");
const fse = require("fs-extra");
const ignore_1 = require("ignore");
const fg = require("fast-glob");
const devkit_1 = require("@nrwl/devkit");
const defaultFileEventHandler = (events) => {
    const dirs = new Set(events.map((event) => path.dirname(event.dest)));
    dirs.forEach((d) => fse.ensureDirSync(d));
    events.forEach((event) => {
        if (event.type === 'create' || event.type === 'update') {
            fse.copyFileSync(event.src, event.dest);
        }
        else if (event.type === 'delete') {
            fse.removeSync(event.dest);
        }
        else {
            devkit_1.logger.error(`Unknown file event: ${event.type}`);
        }
    });
};
exports.defaultFileEventHandler = defaultFileEventHandler;
class CopyAssetsHandler {
    constructor(opts) {
        var _a;
        this.rootDir = opts.rootDir;
        this.projectDir = opts.projectDir;
        this.outputDir = opts.outputDir;
        this.callback = (_a = opts.callback) !== null && _a !== void 0 ? _a : exports.defaultFileEventHandler;
        // TODO(jack): Should handle nested .gitignore files
        this.ignore = (0, ignore_1.default)();
        const gitignore = path.join(opts.rootDir, '.gitignore');
        const nxignore = path.join(opts.rootDir, '.nxignore');
        if (fse.existsSync(gitignore))
            this.ignore.add(fse.readFileSync(gitignore).toString());
        if (fse.existsSync(nxignore))
            this.ignore.add(fse.readFileSync(nxignore).toString());
        this.assetGlobs = opts.assets.map((f) => {
            let isGlob = false;
            let pattern;
            // Input and output directories are normalized to be relative to root
            let input;
            let output;
            let ignore = null;
            if (typeof f === 'string') {
                pattern = f;
                input = path.relative(opts.rootDir, opts.projectDir);
                output = path.relative(opts.rootDir, opts.outputDir);
            }
            else {
                isGlob = true;
                pattern = path.join(f.input, f.glob);
                input = f.input;
                output = path.join(path.relative(opts.rootDir, opts.outputDir), f.output);
                if (f.ignore)
                    ignore = f.ignore.map((ig) => path.join(f.input, ig));
            }
            return {
                isGlob,
                input,
                pattern,
                ignore,
                output,
            };
        });
    }
    processAllAssetsOnce() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this.assetGlobs.map((ag) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let pattern;
                if (typeof ag === 'string') {
                    pattern = ag;
                }
                else {
                    pattern = ag.pattern;
                }
                // fast-glob only supports Unix paths
                const files = yield fg(pattern.replace(/\\/g, '/'), {
                    cwd: this.rootDir,
                    dot: true, // enable hidden files
                });
                this.callback(files.reduce((acc, src) => {
                    var _a;
                    if (!((_a = ag.ignore) === null || _a === void 0 ? void 0 : _a.some((ig) => minimatch(src, ig))) &&
                        !this.ignore.ignores(src)) {
                        const relPath = path.relative(ag.input, src);
                        const dest = relPath.startsWith('..') ? src : relPath;
                        acc.push({
                            type: 'create',
                            src: path.join(this.rootDir, src),
                            dest: path.join(this.rootDir, ag.output, dest),
                        });
                    }
                    return acc;
                }, []));
            })));
        });
    }
    watchAndProcessOnAssetChange() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const watcher = yield Promise.resolve().then(() => require('@parcel/watcher'));
            const subscription = yield watcher.subscribe(this.rootDir, (err, events) => {
                var _a;
                if (err) {
                    devkit_1.logger.error(`Watch error: ${(_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'Unknown'}`);
                }
                else {
                    this.processEvents(events);
                }
            });
            return () => subscription.unsubscribe();
        });
    }
    processEvents(events) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fileEvents = [];
            for (const event of events) {
                const pathFromRoot = path.relative(this.rootDir, event.path);
                for (const ag of this.assetGlobs) {
                    if (minimatch(pathFromRoot, ag.pattern) &&
                        !((_a = ag.ignore) === null || _a === void 0 ? void 0 : _a.some((ig) => minimatch(pathFromRoot, ig))) &&
                        !this.ignore.ignores(pathFromRoot)) {
                        const relPath = path.relative(ag.input, pathFromRoot);
                        const destPath = relPath.startsWith('..') ? pathFromRoot : relPath;
                        fileEvents.push({
                            type: event.type,
                            src: path.join(this.rootDir, pathFromRoot),
                            dest: path.join(this.rootDir, ag.output, destPath),
                        });
                        // Match first entry and skip the rest for this file.
                        break;
                    }
                }
            }
            if (fileEvents.length > 0)
                this.callback(fileEvents);
        });
    }
}
exports.CopyAssetsHandler = CopyAssetsHandler;
//# sourceMappingURL=copy-assets-handler.js.map