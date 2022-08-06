"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tscExecutor = exports.normalizeOptions = void 0;
const tslib_1 = require("tslib");
const assets_1 = require("@nrwl/workspace/src/utilities/assets");
const path_1 = require("path");
const check_dependencies_1 = require("../../utils/check-dependencies");
const compiler_helper_dependency_1 = require("../../utils/compiler-helper-dependency");
const copy_assets_handler_1 = require("../../utils/copy-assets-handler");
const compile_typescript_files_1 = require("../../utils/typescript/compile-typescript-files");
const update_package_json_1 = require("../../utils/update-package-json");
const watch_for_single_file_changes_1 = require("../../utils/watch-for-single-file-changes");
function normalizeOptions(options, contextRoot, sourceRoot, projectRoot) {
    const outputPath = (0, path_1.join)(contextRoot, options.outputPath);
    if (options.watch == null) {
        options.watch = false;
    }
    const files = (0, assets_1.assetGlobsToFiles)(options.assets, contextRoot, outputPath);
    return Object.assign(Object.assign({}, options), { root: contextRoot, sourceRoot,
        projectRoot,
        files,
        outputPath, tsConfig: (0, path_1.join)(contextRoot, options.tsConfig), mainOutputPath: (0, path_1.resolve)(outputPath, options.main.replace(`${projectRoot}/`, '').replace('.ts', '.js')) });
}
exports.normalizeOptions = normalizeOptions;
function tscExecutor(_options, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* tscExecutor_1() {
        const { sourceRoot, root } = context.workspace.projects[context.projectName];
        const options = normalizeOptions(_options, context.root, sourceRoot, root);
        const { projectRoot, tmpTsConfig, target, dependencies } = (0, check_dependencies_1.checkDependencies)(context, _options.tsConfig);
        if (tmpTsConfig) {
            options.tsConfig = tmpTsConfig;
        }
        const tsLibDependency = (0, compiler_helper_dependency_1.getHelperDependency)(compiler_helper_dependency_1.HelperDependency.tsc, options.tsConfig, dependencies);
        if (tsLibDependency) {
            dependencies.push(tsLibDependency);
        }
        const assetHandler = new copy_assets_handler_1.CopyAssetsHandler({
            projectDir: projectRoot,
            rootDir: context.root,
            outputDir: _options.outputPath,
            assets: _options.assets,
        });
        if (options.watch) {
            const disposeWatchAssetChanges = yield tslib_1.__await(assetHandler.watchAndProcessOnAssetChange());
            const disposePackageJsonChanged = yield tslib_1.__await((0, watch_for_single_file_changes_1.watchForSingleFileChanges)((0, path_1.join)(context.root, projectRoot), 'package.json', () => (0, update_package_json_1.updatePackageJson)(options, context, target, dependencies)));
            process.on('exit', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield disposeWatchAssetChanges();
                yield disposePackageJsonChanged();
            }));
            process.on('SIGTERM', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield disposeWatchAssetChanges();
                yield disposePackageJsonChanged();
            }));
        }
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, compile_typescript_files_1.compileTypeScriptFiles)(options, context, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield assetHandler.processAllAssetsOnce();
            (0, update_package_json_1.updatePackageJson)(options, context, target, dependencies);
        }))))));
    });
}
exports.tscExecutor = tscExecutor;
exports.default = tscExecutor;
//# sourceMappingURL=tsc.impl.js.map