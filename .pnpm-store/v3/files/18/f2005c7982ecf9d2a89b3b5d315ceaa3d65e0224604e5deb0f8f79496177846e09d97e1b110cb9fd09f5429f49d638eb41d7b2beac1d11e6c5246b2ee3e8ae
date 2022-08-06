"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installPackagesTask = void 0;
const child_process_1 = require("child_process");
const path_1 = require("path");
const package_manager_1 = require("nx/src/utils/package-manager");
const path_2 = require("nx/src/utils/path");
/**
 * Runs `npm install` or `yarn install`. It will skip running the install if
 * `package.json` hasn't changed at all or it hasn't changed since the last invocation.
 *
 * @param tree - the file system tree
 * @param alwaysRun - always run the command even if `package.json` hasn't changed.
 */
function installPackagesTask(tree, alwaysRun = false, cwd = '', packageManager = (0, package_manager_1.detectPackageManager)(cwd)) {
    if (!tree
        .listChanges()
        .find((f) => f.path === (0, path_2.joinPathFragments)(cwd, 'package.json')) &&
        !alwaysRun) {
        return;
    }
    const packageJsonValue = tree.read((0, path_2.joinPathFragments)(cwd, 'package.json'), 'utf-8');
    let storedPackageJsonValue = global['__packageJsonInstallCache__'];
    // Don't install again if install was already executed with package.json
    if (storedPackageJsonValue != packageJsonValue || alwaysRun) {
        global['__packageJsonInstallCache__'] = packageJsonValue;
        const pmc = (0, package_manager_1.getPackageManagerCommand)(packageManager);
        (0, child_process_1.execSync)(pmc.install, {
            cwd: (0, path_1.join)(tree.root, cwd),
            stdio: [0, 1, 2],
        });
    }
}
exports.installPackagesTask = installPackagesTask;
//# sourceMappingURL=install-packages-task.js.map