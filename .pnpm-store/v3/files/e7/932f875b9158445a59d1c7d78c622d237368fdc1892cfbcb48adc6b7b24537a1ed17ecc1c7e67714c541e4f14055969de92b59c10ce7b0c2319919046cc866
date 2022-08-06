"use strict";
/**
 * The Nx Devkit is the underlying technology used to customize Nx to support
 * different technologies and custom use-cases. It contains many utility
 * functions for reading and writing files, updating configuration,
 * working with Abstract Syntax Trees(ASTs), and more.
 *
 * As with most things in Nx, the core of Nx Devkit is very simple.
 * It only uses language primitives and immutable objects
 * (the tree being the only exception).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRootPath = exports.workspaceRoot = exports.moveFilesToNewDirectory = exports.normalizePath = exports.joinPathFragments = exports.stripIndents = exports.convertNxExecutor = exports.convertNxGenerator = exports.offsetFromRoot = exports.ChangeType = exports.applyChangesToString = exports.getWorkspacePath = exports.getWorkspaceLayout = exports.names = exports.installPackagesTask = exports.removeDependenciesFromPackageJson = exports.addDependenciesToPackageJson = exports.writeJsonFile = exports.readJsonFile = exports.stripJsonComments = exports.serializeJson = exports.parseJson = exports.updateJson = exports.writeJson = exports.readJson = exports.ProjectGraphBuilder = exports.DependencyType = exports.readTargetOptions = exports.targetToTargetString = exports.parseTargetString = exports.visitNotIgnoredFiles = exports.updateTsConfigsToJs = exports.toJS = exports.isStandaloneProject = exports.getProjects = exports.updateWorkspaceConfiguration = exports.readWorkspaceConfiguration = exports.updateProjectConfiguration = exports.removeProjectConfiguration = exports.readProjectConfiguration = exports.addProjectConfiguration = exports.generateFiles = exports.formatFiles = exports.runExecutor = exports.getPackageManagerVersion = exports.detectPackageManager = exports.getPackageManagerCommand = exports.output = exports.logger = exports.Workspaces = void 0;
exports.cacheDir = exports.Hasher = exports.defaultTasksRunner = exports.getOutputsForTargetAndConfiguration = exports.workspaceLayout = exports.readNxJson = exports.readCachedProjectGraph = exports.createProjectGraphAsync = exports.reverse = void 0;
/**
 * @category Workspace
 */
var workspaces_1 = require("nx/src/config/workspaces");
Object.defineProperty(exports, "Workspaces", { enumerable: true, get: function () { return workspaces_1.Workspaces; } });
/**
 * @category Logger
 */
var logger_1 = require("nx/src/utils/logger");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_1.logger; } });
/**
 * @category Utils
 */
var output_1 = require("nx/src/utils/output");
Object.defineProperty(exports, "output", { enumerable: true, get: function () { return output_1.output; } });
/**
 * @category Package Manager
 */
var package_manager_1 = require("nx/src/utils/package-manager");
Object.defineProperty(exports, "getPackageManagerCommand", { enumerable: true, get: function () { return package_manager_1.getPackageManagerCommand; } });
Object.defineProperty(exports, "detectPackageManager", { enumerable: true, get: function () { return package_manager_1.detectPackageManager; } });
Object.defineProperty(exports, "getPackageManagerVersion", { enumerable: true, get: function () { return package_manager_1.getPackageManagerVersion; } });
/**
 * @category Commands
 */
var run_1 = require("nx/src/command-line/run");
Object.defineProperty(exports, "runExecutor", { enumerable: true, get: function () { return run_1.runExecutor; } });
/**
 * @category Generators
 */
var format_files_1 = require("./src/generators/format-files");
Object.defineProperty(exports, "formatFiles", { enumerable: true, get: function () { return format_files_1.formatFiles; } });
/**
 * @category Generators
 */
var generate_files_1 = require("./src/generators/generate-files");
Object.defineProperty(exports, "generateFiles", { enumerable: true, get: function () { return generate_files_1.generateFiles; } });
/**
 * @category Generators
 */
var project_configuration_1 = require("nx/src/generators/utils/project-configuration");
Object.defineProperty(exports, "addProjectConfiguration", { enumerable: true, get: function () { return project_configuration_1.addProjectConfiguration; } });
Object.defineProperty(exports, "readProjectConfiguration", { enumerable: true, get: function () { return project_configuration_1.readProjectConfiguration; } });
Object.defineProperty(exports, "removeProjectConfiguration", { enumerable: true, get: function () { return project_configuration_1.removeProjectConfiguration; } });
Object.defineProperty(exports, "updateProjectConfiguration", { enumerable: true, get: function () { return project_configuration_1.updateProjectConfiguration; } });
Object.defineProperty(exports, "readWorkspaceConfiguration", { enumerable: true, get: function () { return project_configuration_1.readWorkspaceConfiguration; } });
Object.defineProperty(exports, "updateWorkspaceConfiguration", { enumerable: true, get: function () { return project_configuration_1.updateWorkspaceConfiguration; } });
Object.defineProperty(exports, "getProjects", { enumerable: true, get: function () { return project_configuration_1.getProjects; } });
Object.defineProperty(exports, "isStandaloneProject", { enumerable: true, get: function () { return project_configuration_1.isStandaloneProject; } });
/**
 * @category Generators
 */
var to_js_1 = require("./src/generators/to-js");
Object.defineProperty(exports, "toJS", { enumerable: true, get: function () { return to_js_1.toJS; } });
/**
 * @category Generators
 */
var update_ts_configs_to_js_1 = require("./src/generators/update-ts-configs-to-js");
Object.defineProperty(exports, "updateTsConfigsToJs", { enumerable: true, get: function () { return update_ts_configs_to_js_1.updateTsConfigsToJs; } });
/**
 * @category Generators
 */
var visit_not_ignored_files_1 = require("./src/generators/visit-not-ignored-files");
Object.defineProperty(exports, "visitNotIgnoredFiles", { enumerable: true, get: function () { return visit_not_ignored_files_1.visitNotIgnoredFiles; } });
/**
 * @category Executors
 */
var parse_target_string_1 = require("./src/executors/parse-target-string");
Object.defineProperty(exports, "parseTargetString", { enumerable: true, get: function () { return parse_target_string_1.parseTargetString; } });
Object.defineProperty(exports, "targetToTargetString", { enumerable: true, get: function () { return parse_target_string_1.targetToTargetString; } });
/**
 * @category Executors
 */
var read_target_options_1 = require("./src/executors/read-target-options");
Object.defineProperty(exports, "readTargetOptions", { enumerable: true, get: function () { return read_target_options_1.readTargetOptions; } });
/**
 * @category Project Graph
 */
var project_graph_1 = require("nx/src/config/project-graph");
Object.defineProperty(exports, "DependencyType", { enumerable: true, get: function () { return project_graph_1.DependencyType; } });
/**
 * @category Project Graph
 */
var project_graph_builder_1 = require("nx/src/project-graph/project-graph-builder");
Object.defineProperty(exports, "ProjectGraphBuilder", { enumerable: true, get: function () { return project_graph_builder_1.ProjectGraphBuilder; } });
/**
 * @category Utils
 */
var json_1 = require("nx/src/generators/utils/json");
Object.defineProperty(exports, "readJson", { enumerable: true, get: function () { return json_1.readJson; } });
Object.defineProperty(exports, "writeJson", { enumerable: true, get: function () { return json_1.writeJson; } });
Object.defineProperty(exports, "updateJson", { enumerable: true, get: function () { return json_1.updateJson; } });
/**
 * @category Utils
 */
var json_2 = require("nx/src/utils/json");
Object.defineProperty(exports, "parseJson", { enumerable: true, get: function () { return json_2.parseJson; } });
Object.defineProperty(exports, "serializeJson", { enumerable: true, get: function () { return json_2.serializeJson; } });
Object.defineProperty(exports, "stripJsonComments", { enumerable: true, get: function () { return json_2.stripJsonComments; } });
/**
 * @category Utils
 */
var fileutils_1 = require("nx/src/utils/fileutils");
Object.defineProperty(exports, "readJsonFile", { enumerable: true, get: function () { return fileutils_1.readJsonFile; } });
Object.defineProperty(exports, "writeJsonFile", { enumerable: true, get: function () { return fileutils_1.writeJsonFile; } });
/**
 * @category Utils
 */
var package_json_1 = require("./src/utils/package-json");
Object.defineProperty(exports, "addDependenciesToPackageJson", { enumerable: true, get: function () { return package_json_1.addDependenciesToPackageJson; } });
Object.defineProperty(exports, "removeDependenciesFromPackageJson", { enumerable: true, get: function () { return package_json_1.removeDependenciesFromPackageJson; } });
/**
 * @category Utils
 */
var install_packages_task_1 = require("./src/tasks/install-packages-task");
Object.defineProperty(exports, "installPackagesTask", { enumerable: true, get: function () { return install_packages_task_1.installPackagesTask; } });
/**
 * @category Utils
 */
var names_1 = require("./src/utils/names");
Object.defineProperty(exports, "names", { enumerable: true, get: function () { return names_1.names; } });
/**
 * @category Utils
 */
var get_workspace_layout_1 = require("./src/utils/get-workspace-layout");
Object.defineProperty(exports, "getWorkspaceLayout", { enumerable: true, get: function () { return get_workspace_layout_1.getWorkspaceLayout; } });
Object.defineProperty(exports, "getWorkspacePath", { enumerable: true, get: function () { return get_workspace_layout_1.getWorkspacePath; } });
/**
 * @category Utils
 */
var string_change_1 = require("./src/utils/string-change");
Object.defineProperty(exports, "applyChangesToString", { enumerable: true, get: function () { return string_change_1.applyChangesToString; } });
Object.defineProperty(exports, "ChangeType", { enumerable: true, get: function () { return string_change_1.ChangeType; } });
/**
 * @category Utils
 */
var offset_from_root_1 = require("./src/utils/offset-from-root");
Object.defineProperty(exports, "offsetFromRoot", { enumerable: true, get: function () { return offset_from_root_1.offsetFromRoot; } });
/**
 * @category Utils
 */
var invoke_nx_generator_1 = require("./src/utils/invoke-nx-generator");
Object.defineProperty(exports, "convertNxGenerator", { enumerable: true, get: function () { return invoke_nx_generator_1.convertNxGenerator; } });
/**
 * @category Utils
 */
var convert_nx_executor_1 = require("./src/utils/convert-nx-executor");
Object.defineProperty(exports, "convertNxExecutor", { enumerable: true, get: function () { return convert_nx_executor_1.convertNxExecutor; } });
/**
 * @category Utils
 */
var strip_indents_1 = require("nx/src/utils/strip-indents");
Object.defineProperty(exports, "stripIndents", { enumerable: true, get: function () { return strip_indents_1.stripIndents; } });
/**
 * @category Utils
 */
var path_1 = require("nx/src/utils/path");
Object.defineProperty(exports, "joinPathFragments", { enumerable: true, get: function () { return path_1.joinPathFragments; } });
Object.defineProperty(exports, "normalizePath", { enumerable: true, get: function () { return path_1.normalizePath; } });
/**
 * @category Utils
 */
var move_dir_1 = require("./src/utils/move-dir");
Object.defineProperty(exports, "moveFilesToNewDirectory", { enumerable: true, get: function () { return move_dir_1.moveFilesToNewDirectory; } });
/**
 * @category Utils
 */
var app_root_1 = require("nx/src/utils/app-root");
Object.defineProperty(exports, "workspaceRoot", { enumerable: true, get: function () { return app_root_1.workspaceRoot; } });
Object.defineProperty(exports, "appRootPath", { enumerable: true, get: function () { return app_root_1.appRootPath; } });
/**
 * @category Utils
 */
var operators_1 = require("nx/src/project-graph/operators");
Object.defineProperty(exports, "reverse", { enumerable: true, get: function () { return operators_1.reverse; } });
/**
 * @category Utils
 */
var project_graph_2 = require("nx/src/project-graph/project-graph");
Object.defineProperty(exports, "createProjectGraphAsync", { enumerable: true, get: function () { return project_graph_2.createProjectGraphAsync; } });
Object.defineProperty(exports, "readCachedProjectGraph", { enumerable: true, get: function () { return project_graph_2.readCachedProjectGraph; } });
/**
 * @category Utils
 */
var file_utils_1 = require("nx/src/project-graph/file-utils");
Object.defineProperty(exports, "readNxJson", { enumerable: true, get: function () { return file_utils_1.readNxJson; } });
Object.defineProperty(exports, "workspaceLayout", { enumerable: true, get: function () { return file_utils_1.workspaceLayout; } });
/**
 * @category Utils
 */
var utils_1 = require("nx/src/tasks-runner/utils");
Object.defineProperty(exports, "getOutputsForTargetAndConfiguration", { enumerable: true, get: function () { return utils_1.getOutputsForTargetAndConfiguration; } });
/**
 * @category Utils
 */
var default_tasks_runner_1 = require("nx/src/tasks-runner/default-tasks-runner");
Object.defineProperty(exports, "defaultTasksRunner", { enumerable: true, get: function () { return default_tasks_runner_1.defaultTasksRunner; } });
/**
 * @category Utils
 */
var hasher_1 = require("nx/src/hasher/hasher");
Object.defineProperty(exports, "Hasher", { enumerable: true, get: function () { return hasher_1.Hasher; } });
/**
 * @category Utils
 */
var cache_directory_1 = require("nx/src/utils/cache-directory");
Object.defineProperty(exports, "cacheDir", { enumerable: true, get: function () { return cache_directory_1.cacheDir; } });
//# sourceMappingURL=index.js.map