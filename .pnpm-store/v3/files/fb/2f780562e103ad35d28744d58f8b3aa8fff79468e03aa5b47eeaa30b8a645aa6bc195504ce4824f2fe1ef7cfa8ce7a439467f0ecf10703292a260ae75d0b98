"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatcher = exports.compileGlob = exports.recrawl = exports.crawl = void 0;
const tslib_1 = require("tslib");
const relative_1 = require("@cush/relative");
const fs = tslib_1.__importStar(require("fs"));
const glob_regex_1 = tslib_1.__importDefault(require("glob-regex"));
const slash_1 = tslib_1.__importDefault(require("slash"));
const path = tslib_1.__importStar(require("path"));
const fs_1 = require("./fs");
const { S_IFMT, S_IFLNK, S_IFDIR } = fs.constants;
const limitDepth = (limit) => (_, depth) => depth < limit;
const alwaysTrue = () => true;
const alwaysFalse = () => false;
/** Create a crawl function, and crawl the given root immediately */
const crawl = (root, opts = {}) => recrawl(opts)(root);
exports.crawl = crawl;
/** Create a crawl function */
function recrawl(opts = {}) {
    const only = createMatcher(opts.only) || alwaysTrue;
    const skip = createMatcher(opts.skip) || alwaysFalse;
    const fs = opts.adapter || fs_1.localFs;
    const enter = opts.enter || alwaysTrue;
    const filter = opts.filter || alwaysTrue;
    const follow = createFollower(opts);
    const maxDepth = typeof opts.depth == 'number'
        ? Math.max(0, opts.depth)
        : opts.deep === false
            ? 0
            : Infinity;
    return (root, arg) => {
        root = (0, slash_1.default)(path.resolve(root)) + '/';
        let each;
        let files;
        if (typeof arg == 'function') {
            each = arg;
        }
        else {
            files = arg || (follow ? {} : []);
            each = Array.isArray(files)
                ? file => files.push(file)
                : (file, link) => {
                    files[file] = link !== null ? link : true;
                };
        }
        let depth = 0;
        const crawl = (dir) => {
            for (const name of fs.readdir(root + dir)) {
                let file = dir + name;
                if (skip(file, name)) {
                    continue;
                }
                let mode;
                try {
                    mode = fs.stat(root + file).mode & S_IFMT;
                }
                catch (err) {
                    if (err.code == 'ENOENT') {
                        continue; // Ignore broken symlinks.
                    }
                    throw err;
                }
                if (mode == S_IFDIR) {
                    if (depth == maxDepth) {
                        continue;
                    }
                    if (enter(file, depth)) {
                        depth++;
                        try {
                            crawl(file + '/');
                        }
                        catch (err) {
                            if (err.code !== 'EACCES') {
                                throw err;
                            }
                        }
                        depth--;
                    }
                }
                else if (only(file, name) && filter(file, name)) {
                    let link = null;
                    if (follow) {
                        mode = fs.lstat(root + file).mode & S_IFMT;
                        if (mode === S_IFLNK)
                            link = follow(file, root);
                    }
                    if (opts.absolute) {
                        file = root + file;
                    }
                    each(file, link);
                }
            }
        };
        crawl('');
        return files;
    };
}
exports.recrawl = recrawl;
/** Tests true for absolute paths and globs starting with two asterisks. */
const globAllRE = /(?:\/|\*\*)/;
/** Merge regular expressions together. */
const matchAny = (patterns) => new RegExp(`^(?:${patterns.join('|')})$`);
/**
 * Compile a single Recrawl glob string into its "RegExp pattern" equivalent.
 *
 * Note: This is only useful for globs with "/" or "**" in them.
 */
function compileGlob(glob, root) {
    if (glob[0] == '/') {
        glob = glob.slice(1);
    }
    else if (glob[0] !== '*') {
        glob = '**/' + glob;
    }
    if (glob.endsWith('/')) {
        glob += '**';
    }
    if (root)
        glob = path.posix.join(root, glob);
    return glob_regex_1.default.replace(glob);
}
exports.compileGlob = compileGlob;
/**
 * Create a function that tests against an array of Recrawl glob strings by
 * compiling them into RegExp objects.
 */
function createMatcher(globs, root) {
    if (!globs || !globs.length) {
        return null;
    }
    const fileGlobs = [];
    const nameGlobs = [];
    globs.forEach(glob => {
        if (glob instanceof RegExp) {
            fileGlobs.push(glob.source);
        }
        else if (globAllRE.test(glob)) {
            fileGlobs.push(compileGlob(glob, root));
        }
        else {
            nameGlobs.push(glob_regex_1.default.replace(glob));
        }
    });
    const fileRE = fileGlobs.length ? matchAny(fileGlobs) : false;
    const nameRE = nameGlobs.length ? matchAny(nameGlobs) : false;
    return (file, name) => (nameRE && nameRE.test(name || path.basename(file))) ||
        (fileRE && fileRE.test(file));
}
exports.createMatcher = createMatcher;
// Create a function that follows symlinks.
function createFollower(opts) {
    const fs = opts.adapter || fs_1.localFs;
    const filter = opts.follow === true
        ? alwaysTrue
        : typeof opts.follow == 'number'
            ? limitDepth(opts.follow)
            : typeof opts.follow == 'function'
                ? opts.follow
                : null;
    // The "name" argument must be relative to the "root" argument.
    if (!filter)
        return null;
    return (name, root) => {
        let depth = 0;
        if (name === null || !filter(name, depth)) {
            return null;
        }
        let link = root + name;
        let mode;
        do {
            let target = (0, slash_1.default)(fs.readlink(link));
            if (path.isAbsolute(target)) {
                name = null;
                link = target;
            }
            // When "target" is relative, resolve it.
            else if (name !== null) {
                // The "relative" function expects ./ or ../
                if (!/^\.\.?\//.test(target[0])) {
                    target = './' + target;
                }
                // This code path is faster.
                name = (0, relative_1.relative)(name, target);
                link = root + name;
            }
            else {
                link = (0, slash_1.default)(path.resolve(path.dirname(link), target));
            }
            try {
                mode = fs.lstat(link).mode & S_IFMT;
                if (mode !== S_IFLNK)
                    break;
            }
            catch (_a) {
                break;
            }
        } while (filter(name == null ? link : name, ++depth));
        return name == null ? link : name;
    };
}
//# sourceMappingURL=recrawl.js.map