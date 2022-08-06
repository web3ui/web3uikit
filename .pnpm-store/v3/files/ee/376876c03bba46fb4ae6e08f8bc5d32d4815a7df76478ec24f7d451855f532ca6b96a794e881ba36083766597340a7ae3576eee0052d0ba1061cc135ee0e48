"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClass = exports.addMethod = exports.addParameterToConstructor = exports.replaceNodeValue = exports.getImport = exports.addGlobal = exports.insertImport = exports.removeChange = exports.replaceChange = exports.insertChange = void 0;
const ts = require("typescript");
const typescript_1 = require("./typescript");
const find_nodes_1 = require("./typescript/find-nodes");
function nodesByPosition(first, second) {
    return first.getStart() - second.getStart();
}
function updateTsSourceFile(host, sourceFile, filePath) {
    const newFileContents = host.read(filePath).toString('utf-8');
    return sourceFile.update(newFileContents, {
        newLength: newFileContents.length,
        span: {
            length: sourceFile.text.length,
            start: 0,
        },
    });
}
function insertChange(host, sourceFile, filePath, insertPosition, contentToInsert) {
    const content = host.read(filePath).toString();
    const prefix = content.substring(0, insertPosition);
    const suffix = content.substring(insertPosition);
    host.write(filePath, `${prefix}${contentToInsert}${suffix}`);
    return updateTsSourceFile(host, sourceFile, filePath);
}
exports.insertChange = insertChange;
function replaceChange(host, sourceFile, filePath, insertPosition, contentToInsert, oldContent) {
    const content = host.read(filePath, 'utf-8');
    const prefix = content.substring(0, insertPosition);
    const suffix = content.substring(insertPosition + oldContent.length);
    const text = content.substring(insertPosition, insertPosition + oldContent.length);
    if (text !== oldContent) {
        throw new Error(`Invalid replace: "${text}" != "${oldContent}".`);
    }
    host.write(filePath, `${prefix}${contentToInsert}${suffix}`);
    return updateTsSourceFile(host, sourceFile, filePath);
}
exports.replaceChange = replaceChange;
function removeChange(host, sourceFile, filePath, removePosition, contentToRemove) {
    const content = host.read(filePath).toString();
    const prefix = content.substring(0, removePosition);
    const suffix = content.substring(removePosition + contentToRemove.length);
    host.write(filePath, `${prefix}${suffix}`);
    return updateTsSourceFile(host, sourceFile, filePath);
}
exports.removeChange = removeChange;
function insertImport(host, source, fileToEdit, symbolName, fileName, isDefault = false) {
    const rootNode = source;
    const allImports = (0, find_nodes_1.findNodes)(rootNode, ts.SyntaxKind.ImportDeclaration);
    // get nodes that map to import statements from the file fileName
    const relevantImports = allImports.filter((node) => {
        // StringLiteral of the ImportDeclaration is the import file (fileName in this case).
        const importFiles = node
            .getChildren()
            .filter((child) => child.kind === ts.SyntaxKind.StringLiteral)
            .map((n) => n.text);
        return importFiles.filter((file) => file === fileName).length === 1;
    });
    if (relevantImports.length > 0) {
        let importsAsterisk = false;
        // imports from import file
        const imports = [];
        relevantImports.forEach((n) => {
            Array.prototype.push.apply(imports, (0, find_nodes_1.findNodes)(n, ts.SyntaxKind.Identifier));
            if ((0, find_nodes_1.findNodes)(n, ts.SyntaxKind.AsteriskToken).length > 0) {
                importsAsterisk = true;
            }
        });
        // if imports * from fileName, don't add symbolName
        if (importsAsterisk) {
            return source;
        }
        const importTextNodes = imports.filter((n) => n.text === symbolName);
        // insert import if it's not there
        if (importTextNodes.length === 0) {
            const fallbackPos = (0, find_nodes_1.findNodes)(relevantImports[0], ts.SyntaxKind.CloseBraceToken)[0].getStart() ||
                (0, find_nodes_1.findNodes)(relevantImports[0], ts.SyntaxKind.FromKeyword)[0].getStart();
            return insertAfterLastOccurrence(host, source, imports, `, ${symbolName}`, fileToEdit, fallbackPos);
        }
        return source;
    }
    // no such import declaration exists
    const useStrict = (0, find_nodes_1.findNodes)(rootNode, ts.SyntaxKind.StringLiteral).filter((n) => n.text === 'use strict');
    let fallbackPos = 0;
    if (useStrict.length > 0) {
        fallbackPos = useStrict[0].end;
    }
    const open = isDefault ? '' : '{ ';
    const close = isDefault ? '' : ' }';
    // if there are no imports or 'use strict' statement, insert import at beginning of file
    const insertAtBeginning = allImports.length === 0 && useStrict.length === 0;
    const separator = insertAtBeginning ? '' : ';\n';
    const toInsert = `${separator}import ${open}${symbolName}${close}` +
        ` from '${fileName}'${insertAtBeginning ? ';\n' : ''}`;
    return insertAfterLastOccurrence(host, source, allImports, toInsert, fileToEdit, fallbackPos, ts.SyntaxKind.StringLiteral);
}
exports.insertImport = insertImport;
function insertAfterLastOccurrence(host, sourceFile, nodes, toInsert, pathToFile, fallbackPos, syntaxKind) {
    // sort() has a side effect, so make a copy so that we won't overwrite the parent's object.
    let lastItem = [...nodes].sort(nodesByPosition).pop();
    if (!lastItem) {
        throw new Error();
    }
    if (syntaxKind) {
        lastItem = (0, find_nodes_1.findNodes)(lastItem, syntaxKind).sort(nodesByPosition).pop();
    }
    if (!lastItem && fallbackPos == undefined) {
        throw new Error(`tried to insert ${toInsert} as first occurrence with no fallback position`);
    }
    const lastItemPosition = lastItem ? lastItem.getEnd() : fallbackPos;
    return insertChange(host, sourceFile, pathToFile, lastItemPosition, toInsert);
}
function addGlobal(host, source, modulePath, statement) {
    const allImports = (0, find_nodes_1.findNodes)(source, ts.SyntaxKind.ImportDeclaration);
    if (allImports.length > 0) {
        const lastImport = allImports[allImports.length - 1];
        return insertChange(host, source, modulePath, lastImport.end + 1, `\n${statement}\n`);
    }
    else {
        return insertChange(host, source, modulePath, 0, `${statement}\n`);
    }
}
exports.addGlobal = addGlobal;
function getImport(source, predicate) {
    const allImports = (0, find_nodes_1.findNodes)(source, ts.SyntaxKind.ImportDeclaration);
    const matching = allImports.filter((i) => predicate(i.moduleSpecifier.getText()));
    return matching.map((i) => {
        const moduleSpec = i.moduleSpecifier
            .getText()
            .substring(1, i.moduleSpecifier.getText().length - 1);
        const t = i.importClause.namedBindings.getText();
        const bindings = t
            .replace('{', '')
            .replace('}', '')
            .split(',')
            .map((q) => q.trim());
        return { moduleSpec, bindings };
    });
}
exports.getImport = getImport;
function replaceNodeValue(host, sourceFile, modulePath, node, content) {
    return replaceChange(host, sourceFile, modulePath, node.getStart(node.getSourceFile()), content, node.getText());
}
exports.replaceNodeValue = replaceNodeValue;
function addParameterToConstructor(tree, source, modulePath, opts) {
    const clazz = findClass(source, opts.className);
    const constructor = clazz.members.filter((m) => m.kind === ts.SyntaxKind.Constructor)[0];
    if (constructor) {
        throw new Error('Should be tested'); // TODO: check this
    }
    return addMethod(tree, source, modulePath, {
        className: opts.className,
        methodHeader: `constructor(${opts.param})`,
    });
}
exports.addParameterToConstructor = addParameterToConstructor;
function addMethod(tree, source, modulePath, opts) {
    const clazz = findClass(source, opts.className);
    const body = opts.body
        ? `
${opts.methodHeader} {
${opts.body}
}
`
        : `
${opts.methodHeader} {}
`;
    return insertChange(tree, source, modulePath, clazz.end - 1, body);
}
exports.addMethod = addMethod;
function findClass(source, className, silent = false) {
    const nodes = (0, typescript_1.getSourceNodes)(source);
    const clazz = nodes.filter((n) => n.kind === ts.SyntaxKind.ClassDeclaration &&
        n.name.text === className)[0];
    if (!clazz && !silent) {
        throw new Error(`Cannot find class '${className}'.`);
    }
    return clazz;
}
exports.findClass = findClass;
//# sourceMappingURL=ast-utils.js.map