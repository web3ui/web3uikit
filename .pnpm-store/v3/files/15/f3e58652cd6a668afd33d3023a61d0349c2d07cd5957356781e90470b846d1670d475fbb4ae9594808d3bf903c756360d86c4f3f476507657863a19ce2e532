"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImportStatementToJestConfig = exports.removePropertyFromJestConfig = exports.addPropertyToJestConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const functions_1 = require("./functions");
/**
 * Add a property to the jest config
 * @param host
 * @param path - path to the jest config file
 * @param propertyName - Property to update. Can be dot delimited to access deeply nested properties
 * @param value
 * @param options - set `valueAsString` option to true if the `value` being passed represents a string of the code that should be associated with the `propertyName`
 */
function addPropertyToJestConfig(host, path, propertyName, value, options = { valueAsString: false }) {
    if (!host.exists(path)) {
        throw new Error(`Cannot find '${path}' in your workspace.`);
    }
    try {
        const configObject = (0, functions_1.jestConfigObjectAst)(host.read(path, 'utf-8'));
        const properties = propertyName.split('.');
        (0, functions_1.addOrUpdateProperty)(host, configObject, properties, options.valueAsString ? value : JSON.stringify(value), path);
    }
    catch (e) {
        devkit_1.logger.info(`NX Please manually update ${path}`);
        devkit_1.logger.warn(`Could not automatically add the following property to ${path}:`);
        devkit_1.logger.warn(`${propertyName}: ${JSON.stringify(value)}`);
        devkit_1.logger.warn(`Error: ${e.message}`);
    }
}
exports.addPropertyToJestConfig = addPropertyToJestConfig;
/**
 * Remove a property value from the jest config
 * @param host
 * @param path
 * @param propertyName - Property to remove. Can be dot delimited to access deeply nested properties
 */
function removePropertyFromJestConfig(host, path, propertyName) {
    if (!host.exists(path)) {
        throw new Error(`Cannot find '${path}' in your workspace.`);
    }
    try {
        const configObject = (0, functions_1.jestConfigObjectAst)(host.read(path, 'utf-8'));
        const propertyAssignment = (0, functions_1.removeProperty)(configObject, propertyName.split('.'));
        if (propertyAssignment) {
            const file = host.read(path, 'utf-8');
            const commaNeeded = file[propertyAssignment.end] === ',';
            const updatedFile = (0, devkit_1.applyChangesToString)(file, [
                {
                    type: devkit_1.ChangeType.Delete,
                    start: propertyAssignment.getStart(),
                    length: `${propertyAssignment.getText()}${commaNeeded ? ',' : ''}`
                        .length,
                },
            ]);
            host.write(path, updatedFile);
            return;
        }
    }
    catch (e) {
        devkit_1.logger.info(`NX Please manually update ${path}`);
        devkit_1.logger.warn(`Could not automatically remove the '${propertyName}' property from ${path}:`);
    }
}
exports.removePropertyFromJestConfig = removePropertyFromJestConfig;
function addImportStatementToJestConfig(host, path, importStatement) {
    const currentContents = host.read(path, 'utf-8');
    const newContents = `${importStatement}
  
${currentContents}`;
    host.write(path, newContents);
}
exports.addImportStatementToJestConfig = addImportStatementToJestConfig;
//# sourceMappingURL=update-config.js.map