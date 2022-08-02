"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertImport = void 0;
const insert_statement_1 = require("./insert-statement");
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("typescript");
function insertImport(tree, path, name, modulePath) {
    const contents = tree.read(path, 'utf-8');
    const sourceFile = (0, typescript_1.createSourceFile)(path, contents, typescript_1.ScriptTarget.ESNext);
    const importStatements = sourceFile.statements.filter(typescript_1.isImportDeclaration);
    const existingImport = importStatements.find((statement) => (0, typescript_1.isStringLiteral)(statement.moduleSpecifier) &&
        statement.moduleSpecifier
            .getText(sourceFile)
            .replace(/['"`]/g, '')
            .trim() === modulePath &&
        statement.importClause.namedBindings &&
        (0, typescript_1.isNamedImports)(statement.importClause.namedBindings));
    if (!existingImport) {
        (0, insert_statement_1.insertStatement)(tree, path, `import { ${name} } from '${modulePath}';`);
        return;
    }
    // TODO: Also check if the namedImport already exists
    const namedImports = existingImport.importClause
        .namedBindings;
    const index = namedImports.getEnd() - 1;
    let text;
    if (namedImports.elements.hasTrailingComma) {
        text = `${name},`;
    }
    else {
        text = `,${name}`;
    }
    const newContents = (0, devkit_1.applyChangesToString)(contents, [
        {
            type: devkit_1.ChangeType.Insert,
            index,
            text,
        },
    ]);
    tree.write(path, newContents);
}
exports.insertImport = insertImport;
//# sourceMappingURL=insert-import.js.map