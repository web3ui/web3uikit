"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertStatement = void 0;
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("typescript");
/**
 * Insert a statement after the last import statement in a file
 */
function insertStatement(tree, path, statement) {
    const contents = tree.read(path, 'utf-8');
    const sourceFile = (0, typescript_1.createSourceFile)(path, contents, typescript_1.ScriptTarget.ESNext);
    const importStatements = sourceFile.statements.filter(typescript_1.isImportDeclaration);
    const index = importStatements.length > 0
        ? importStatements[importStatements.length - 1].getEnd()
        : 0;
    if (importStatements.length > 0) {
        statement = `\n${statement}`;
    }
    const newContents = (0, devkit_1.applyChangesToString)(contents, [
        {
            type: devkit_1.ChangeType.Insert,
            index,
            text: statement,
        },
    ]);
    tree.write(path, newContents);
}
exports.insertStatement = insertStatement;
//# sourceMappingURL=insert-statement.js.map