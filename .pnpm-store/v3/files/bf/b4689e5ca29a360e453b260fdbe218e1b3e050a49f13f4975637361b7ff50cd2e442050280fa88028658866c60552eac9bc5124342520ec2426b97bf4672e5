/**
 * Copied from https://github.com/storybookjs/react-docgen-typescript-plugin/blob/74bb959f468fd6dee7cbc7c8b68cc01e4bcb343c/src/generateDocgenCodeBlock.ts
 * But refactored to remove deprecated functions.
 **/

import path from "path";
import * as ts from "typescript";
import type { ComponentDoc, PropItem } from "react-docgen-typescript";
import MagicString, { SourceMap } from "magic-string";

export interface GeneratorOptions {
  filename: string;
  source: string;
  componentDocs: ComponentDoc[];
  docgenCollectionName: string | null;
  setDisplayName: boolean;
  typePropName: string;
}

function createLiteral(
  value: string | number | boolean
): ts.StringLiteral | ts.NumericLiteral | ts.BooleanLiteral {
  switch (typeof value) {
    case "string":
      return ts.factory.createStringLiteral(value);
    case "number":
      return ts.factory.createNumericLiteral(value);
    case "boolean":
      return Boolean(value)
        ? ts.factory.createTrue()
        : ts.factory.createFalse();
  }
}

/**
 * Inserts a ts-ignore comment above the supplied statement.
 *
 * It is used to work around type errors related to fields like __docgenInfo not
 * being defined on types. It also prevents compile errors related to attempting
 * to assign to nonexistent components, which can happen due to incorrect
 * detection of component names when using the parser.
 * ```
 * // @ts-ignore
 * ```
 * @param statement
 */
function insertTsIgnoreBeforeStatement(statement: ts.Statement): ts.Statement {
  ts.setSyntheticLeadingComments(statement, [
    {
      text: " @ts-ignore", // Leading space is important here
      kind: ts.SyntaxKind.SingleLineCommentTrivia,
      pos: -1,
      end: -1,
    },
  ]);
  return statement;
}

/**
 * Set component display name.
 *
 * ```
 * SimpleComponent.displayName = "SimpleComponent";
 * ```
 */
function setDisplayName(d: ComponentDoc): ts.Statement {
  return insertTsIgnoreBeforeStatement(
    ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier(d.displayName),
          ts.factory.createIdentifier("displayName")
        ),
        ts.SyntaxKind.EqualsToken,
        ts.factory.createStringLiteral(d.displayName)
      )
    )
  );
}

/**
 * Set a component prop description.
 * ```
 * SimpleComponent.__docgenInfo.props.someProp = {
 *   defaultValue: "blue",
 *   description: "Prop description.",
 *   name: "someProp",
 *   required: true,
 *   type: "'blue' | 'green'",
 * }
 * ```
 *
 * @param propName Prop name
 * @param prop Prop definition from `ComponentDoc.props`
 * @param options Generator options.
 */
function createPropDefinition(
  propName: string,
  prop: PropItem,
  options: GeneratorOptions
) {
  /**
   * Set default prop value.
   *
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.defaultValue = null;
   * SimpleComponent.__docgenInfo.props.someProp.defaultValue = {
   *   value: "blue",
   * };
   * ```
   *
   * @param defaultValue Default prop value or null if not set.
   */
  const setDefaultValue = (defaultValue: { value: unknown } | null) =>
    ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral("defaultValue"),
      // Use a more extensive check on defaultValue. Sometimes the parser
      // returns an empty object.
      defaultValue?.value !== undefined &&
        (typeof defaultValue.value === "string" ||
          typeof defaultValue.value === "number" ||
          typeof defaultValue.value === "boolean")
        ? ts.factory.createObjectLiteralExpression([
            ts.factory.createPropertyAssignment(
              ts.factory.createIdentifier("value"),
              createLiteral(defaultValue.value)
            ),
          ])
        : ts.factory.createNull()
    );

  /** Set a property with a string value */
  const setStringLiteralField = (fieldName: string, fieldValue: string) =>
    ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral(fieldName),
      ts.factory.createStringLiteral(fieldValue)
    );

  /**
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.description = "Prop description.";
   * ```
   * @param description Prop description.
   */
  const setDescription = (description: string) =>
    setStringLiteralField("description", description);

  /**
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.name = "someProp";
   * ```
   * @param name Prop name.
   */
  const setName = (name: string) => setStringLiteralField("name", name);

  /**
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.required = true;
   * ```
   * @param required Whether prop is required or not.
   */
  const setRequired = (required: boolean) =>
    ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral("required"),
      required ? ts.factory.createTrue() : ts.factory.createFalse()
    );

  /**
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.type = {
   *  name: "enum",
   *  value: [ { value: "\"blue\"" }, { value: "\"green\""} ]
   * }
   * ```
   * @param [typeValue] Prop value (for enums)
   */
  const setValue = (typeValue?: any[]) =>
    Array.isArray(typeValue) &&
    typeValue.every((value) => typeof value.value === "string")
      ? ts.factory.createPropertyAssignment(
          ts.factory.createStringLiteral("value"),
          ts.factory.createArrayLiteralExpression(
            typeValue.map((value) =>
              ts.factory.createObjectLiteralExpression([
                setStringLiteralField("value", value.value),
              ])
            )
          )
        )
      : undefined;

  /**
   * ```
   * SimpleComponent.__docgenInfo.props.someProp.type = { name: "'blue' | 'green'"}
   * ```
   * @param typeName Prop type name.
   * @param [typeValue] Prop value (for enums)
   */
  const setType = (typeName: string, typeValue?: any[]) => {
    const objectFields = [setStringLiteralField("name", typeName)];
    const valueField = setValue(typeValue);

    if (valueField) {
      objectFields.push(valueField);
    }

    return ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral(options.typePropName),
      ts.factory.createObjectLiteralExpression(objectFields)
    );
  };

  return ts.factory.createPropertyAssignment(
    ts.factory.createStringLiteral(propName),
    ts.factory.createObjectLiteralExpression([
      setDefaultValue(prop.defaultValue),
      setDescription(prop.description),
      setName(prop.name),
      setRequired(prop.required),
      setType(prop.type.name, prop.type.value),
    ])
  );
}

/**
 * Adds a component's docgen info to the global docgen collection.
 *
 * ```
 * if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
 *   STORYBOOK_REACT_CLASSES["src/.../SimpleComponent.tsx"] = {
 *     name: "SimpleComponent",
 *     docgenInfo: SimpleComponent.__docgenInfo,
 *     path: "src/.../SimpleComponent.tsx",
 *   };
 * }
 * ```
 *
 * @param d Component doc.
 * @param docgenCollectionName Global docgen collection variable name.
 * @param relativeFilename Relative file path of the component source file.
 */
function insertDocgenIntoGlobalCollection(
  d: ComponentDoc,
  docgenCollectionName: string,
  relativeFilename: string
): ts.Statement {
  return insertTsIgnoreBeforeStatement(
    ts.factory.createIfStatement(
      ts.factory.createBinaryExpression(
        ts.factory.createTypeOfExpression(
          ts.factory.createIdentifier(docgenCollectionName)
        ),
        ts.SyntaxKind.ExclamationEqualsEqualsToken,
        ts.factory.createStringLiteral("undefined")
      ),
      insertTsIgnoreBeforeStatement(
        ts.factory.createExpressionStatement(
          ts.factory.createBinaryExpression(
            ts.factory.createElementAccessExpression(
              ts.factory.createIdentifier(docgenCollectionName),
              ts.factory.createStringLiteral(
                `${relativeFilename}#${d.displayName}`
              )
            ),
            ts.SyntaxKind.EqualsToken,
            ts.factory.createObjectLiteralExpression([
              ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier("docgenInfo"),
                ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier(d.displayName),
                  ts.factory.createIdentifier("__docgenInfo")
                )
              ),
              ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier("name"),
                ts.factory.createStringLiteral(d.displayName)
              ),
              ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier("path"),
                ts.factory.createStringLiteral(
                  `${relativeFilename}#${d.displayName}`
                )
              ),
            ])
          )
        )
      )
    )
  );
}

/**
 * Sets the field `__docgenInfo` for the component specified by the component
 * doc with the docgen information.
 *
 * ```
 * SimpleComponent.__docgenInfo = {
 *   description: ...,
 *   displayName: ...,
 *   props: ...,
 * }
 * ```
 *
 * @param d Component doc.
 * @param options Generator options.
 */
function setComponentDocGen(
  d: ComponentDoc,
  options: GeneratorOptions
): ts.Statement {
  return insertTsIgnoreBeforeStatement(
    ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        // SimpleComponent.__docgenInfo
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier(d.displayName),
          ts.factory.createIdentifier("__docgenInfo")
        ),
        ts.SyntaxKind.EqualsToken,
        ts.factory.createObjectLiteralExpression([
          // SimpleComponent.__docgenInfo.description
          ts.factory.createPropertyAssignment(
            ts.factory.createStringLiteral("description"),
            ts.factory.createStringLiteral(d.description)
          ),
          // SimpleComponent.__docgenInfo.displayName
          ts.factory.createPropertyAssignment(
            ts.factory.createStringLiteral("displayName"),
            ts.factory.createStringLiteral(d.displayName)
          ),
          // SimpleComponent.__docgenInfo.props
          ts.factory.createPropertyAssignment(
            ts.factory.createStringLiteral("props"),
            ts.factory.createObjectLiteralExpression(
              Object.entries(d.props).map(([propName, prop]) =>
                createPropDefinition(propName, prop, options)
              )
            )
          ),
        ])
      )
    )
  );
}

export function generateDocgenCodeBlock(options: GeneratorOptions): {
  code: string;
  map: SourceMap;
} {
  const sourceFile = ts.createSourceFile(
    options.filename,
    options.source,
    ts.ScriptTarget.ESNext
  );

  const relativeFilename = path
    .relative("./", path.resolve("./", options.filename))
    .replace(/\\/g, "/");

  const wrapInTryStatement = (statements: ts.Statement[]): ts.TryStatement =>
    ts.factory.createTryStatement(
      ts.factory.createBlock(statements, true),
      ts.factory.createCatchClause(
        ts.factory.createVariableDeclaration(
          ts.factory.createIdentifier("__react_docgen_typescript_loader_error")
        ),
        ts.factory.createBlock([])
      ),
      undefined
    );

  const codeBlocks = options.componentDocs.map((d) =>
    wrapInTryStatement(
      [
        options.setDisplayName ? setDisplayName(d) : null,
        setComponentDocGen(d, options),
        options.docgenCollectionName === null ||
        options.docgenCollectionName === undefined
          ? null
          : insertDocgenIntoGlobalCollection(
              d,
              options.docgenCollectionName,
              relativeFilename
            ),
      ].filter((s) => s !== null) as ts.Statement[]
    )
  );

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const printNode = (sourceNode: ts.Node) =>
    printer.printNode(ts.EmitHint.Unspecified, sourceNode, sourceFile);

  const s = new MagicString(options.source);

  codeBlocks.forEach((node) => {
    s.append(printNode(node));
  });

  return {
    code: s.toString(),
    map: s.generateMap(),
  };
}
