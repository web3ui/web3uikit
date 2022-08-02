"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteMdxTransclusion = void 0;
const vite_1 = require("vite");
const quick_lru_1 = __importDefault(require("@alloc/quick-lru"));
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const common_1 = require("../common");
const remarkTransclusion_1 = require("./remarkTransclusion");
const createMdxAstCompiler_1 = require("./createMdxAstCompiler");
const ImportMap_1 = require("./ImportMap");
/**
 * With transclusion enabled, an `.mdx` file can import other `.mdx` or `.md`
 * files without an import specifier.
 *
 *     import "../other.mdx"
 *
 * The file extension is required.
 *
 * The imported file is inlined into its importer, but the imported file can
 * still have its own Remark plugins.
 *
 */
function viteMdxTransclusion(globalMdxOptions, getMdxOptions) {
    /**
     * To recompile an importer when its transcluded files are changed,
     * we need to track the relationships between them.
     */
    let importMap;
    /**
     * To avoid redundant parsing and processing, we cache the MDX syntax trees
     * of transcluded files to serve as a fast path when an importer is recompiled.
     */
    let astCache;
    return {
        name: 'mdx:transclusion',
        configResolved({ root, logger }) {
            let watcher;
            this.configureServer = (server) => {
                watcher = server.watcher;
                importMap = new ImportMap_1.ImportMap();
                astCache = new quick_lru_1.default({
                    maxAge: 30 * 6e4,
                    maxSize: 100
                });
                // When a transcluded file changes, recompile its importers.
                // Also, clean up the import map when an importer is deleted.
                watcher.on('all', (event, filePath) => {
                    if (/\.mdx?$/.test(filePath)) {
                        if (event === 'unlink') {
                            importMap.deleteImporter(filePath);
                        }
                        const importers = importMap.importers.get(filePath);
                        if (importers) {
                            astCache.delete(filePath);
                            importers.forEach((importer) => {
                                watcher.emit('change', importer);
                            });
                        }
                    }
                });
            };
            this.buildStart = function () {
                globalMdxOptions.remarkPlugins.push(remarkTransclusion_1.remarkTransclusion({
                    astCache,
                    importMap,
                    resolve: (id, importer) => __awaiter(this, void 0, void 0, function* () {
                        const resolved = yield this.resolve(id, importer);
                        if (resolved) {
                            id = vite_1.normalizePath(resolved.id);
                            // Ensure files outside the Vite project root are watched.
                            if (watcher && path_1.isAbsolute(id) && !id.startsWith(root + '/')) {
                                watcher.add(id);
                            }
                            return id;
                        }
                        logger.warn(`Failed to resolve "${id}" imported by "${importer}"`);
                    }),
                    readFile: (filePath) => fs_1.default.promises.readFile(filePath, 'utf8'),
                    getCompiler: (filePath) => createMdxAstCompiler_1.createMdxAstCompiler(root, common_1.mergeArrays(globalMdxOptions.remarkPlugins, getMdxOptions === null || getMdxOptions === void 0 ? void 0 : getMdxOptions(filePath).remarkPlugins))
                }));
            };
        }
    };
}
exports.viteMdxTransclusion = viteMdxTransclusion;
//# sourceMappingURL=index.js.map