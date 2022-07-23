"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestConfigObject = exports.jestConfigObjectAst = exports.removeProperty = exports.addOrUpdateProperty = exports.getJsonObject = void 0;
const ts = require("typescript");
const workspace_1 = require("@nrwl/workspace");
const devkit_1 = require("@nrwl/devkit");
function createInsertChange(path, value, position, precedingCommaNeeded) {
    return new workspace_1.InsertChange(path, position, `${precedingCommaNeeded ? ',' : ''}${value}`);
}
function findPropertyAssignment(object, propertyName) {
    return object.properties.find((prop) => {
        const propNameText = prop.name.getText();
        if (propNameText.match(/^["'].+["']$/g)) {
            return JSON.parse(propNameText.replace(/'/g, '"')) === propertyName;
        }
        return propNameText === propertyName;
    });
}
function getJsonObject(object) {
    const value = (0, devkit_1.stripJsonComments)(object);
    // react babel-jest has __dirname in the config.
    // Put a temp variable in the anon function so that it doesnt fail.
    // Migration script has a catch handler to give instructions on how to update the jest config if this fails.
    return Function(`
  "use strict";
  let __dirname = '';
  return (${value});
 `)();
}
exports.getJsonObject = getJsonObject;
function addOrUpdateProperty(object, properties, value, path) {
    const propertyName = properties.shift();
    const propertyAssignment = findPropertyAssignment(object, propertyName);
    if (propertyAssignment) {
        if (propertyAssignment.initializer.kind === ts.SyntaxKind.StringLiteral ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.NumericLiteral ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.FalseKeyword ||
            propertyAssignment.initializer.kind === ts.SyntaxKind.TrueKeyword) {
            return [
                new workspace_1.ReplaceChange(path, propertyAssignment.initializer.pos, propertyAssignment.initializer.getFullText(), value),
            ];
        }
        if (propertyAssignment.initializer.kind ===
            ts.SyntaxKind.ArrayLiteralExpression) {
            const arrayLiteral = propertyAssignment.initializer;
            if (arrayLiteral.elements.some((element) => {
                return element.getText().replace(/'/g, '"') === value;
            })) {
                return [];
            }
            if (arrayLiteral.elements.length === 0) {
                return [
                    new workspace_1.InsertChange(path, arrayLiteral.elements.end, value),
                ];
            }
            else {
                return [
                    createInsertChange(path, value, arrayLiteral.elements.end, arrayLiteral.elements.length !== 0 &&
                        !arrayLiteral.elements.hasTrailingComma),
                ];
            }
        }
        else if (propertyAssignment.initializer.kind ===
            ts.SyntaxKind.ObjectLiteralExpression) {
            return addOrUpdateProperty(propertyAssignment.initializer, properties, value, path);
        }
    }
    else {
        if (propertyName === undefined) {
            throw new Error(`Please use dot delimited paths to update an existing object. Eg. object.property `);
        }
        return [
            createInsertChange(path, `${JSON.stringify(propertyName)}: ${value}`, object.properties.end, object.properties.length !== 0 && !object.properties.hasTrailingComma),
        ];
    }
}
exports.addOrUpdateProperty = addOrUpdateProperty;
function removeProperty(object, properties) {
    const propertyName = properties.shift();
    const propertyAssignment = findPropertyAssignment(object, propertyName);
    if (propertyAssignment) {
        if (properties.length > 0 &&
            propertyAssignment.initializer.kind ===
                ts.SyntaxKind.ObjectLiteralExpression) {
            return removeProperty(propertyAssignment.initializer, properties);
        }
        return propertyAssignment;
    }
    else {
        return null;
    }
}
exports.removeProperty = removeProperty;
/**
 * Should be used to get the jest config object.
 *
 * @param host
 * @param path
 */
function jestConfigObjectAst(host, path) {
    const fileContent = host.read(path).toString('utf-8');
    const sourceFile = ts.createSourceFile('jest.config.js', fileContent, ts.ScriptTarget.Latest, true);
    const expressions = (0, workspace_1.findNodes)(sourceFile, ts.SyntaxKind.BinaryExpression);
    const moduleExports = expressions.find((node) => node.left.getText() === 'module.exports' &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsToken);
    if (!moduleExports) {
        throw new Error(`
       The provided jest config file does not have the expected 'module.exports' expression. 
       See https://jestjs.io/docs/en/configuration for more details.`);
    }
    if (!ts.isObjectLiteralExpression(moduleExports.right)) {
        throw new Error(`The 'module.exports' expression is not an object literal.`);
    }
    return moduleExports.right;
}
exports.jestConfigObjectAst = jestConfigObjectAst;
/**
 * Returns the jest config object
 * @param host
 * @param path
 */
function jestConfigObject(host, path) {
    const jestConfigAst = jestConfigObjectAst(host, path);
    return getJsonObject(jestConfigAst.getText());
}
exports.jestConfigObject = jestConfigObject;
//# sourceMappingURL=functions.js.map