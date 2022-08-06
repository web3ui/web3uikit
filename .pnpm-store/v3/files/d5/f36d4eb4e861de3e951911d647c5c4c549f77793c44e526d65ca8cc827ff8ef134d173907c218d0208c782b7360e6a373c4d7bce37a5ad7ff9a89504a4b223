import type { Plugin } from "vite";
import * as docGen from "react-docgen-typescript";
import * as ts from "typescript";
import glob from "glob-promise";
import * as path from "path";
import { generateDocgenCodeBlock } from "./generateDocgenCodeBlock";
import type { PropFilter } from "react-docgen-typescript/lib/parser";

/** Get the contents of the tsconfig in the system */
function getTSConfigFile(tsconfigPath: string): Partial<ts.ParsedCommandLine> {
  try {
    const basePath = path.dirname(tsconfigPath);
    const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

    return ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      basePath,
      {},
      tsconfigPath
    );
  } catch (error) {
    return {};
  }
}

/** Create a glob matching function. */
function matchGlob(globs: string[] = []) {
  const matchers = globs.map((g) => glob(g, { dot: true }));

  return async (filename: string) => {
    const matches: string[] = (await Promise.all(matchers))[0] || [];
    return Boolean(
      filename &&
        matches.find(
          (match) =>
            path.normalize(filename) === path.join(process.cwd(), match)
        )
    );
  };
}

const defaultPropFilter: PropFilter = (prop) => {
  return !prop.parent?.fileName.includes("node_modules");
};

interface LoaderOptions {
  /**
   * Specify the docgen collection name to use. All docgen information will
   * be collected into this global object. Set to null to disable.
   *
   * @default STORYBOOK_REACT_CLASSES
   * @see https://github.com/gongreg/react-storybook-addon-docgen
   **/
  docgenCollectionName?: string | null;

  /**
   * Automatically set the component's display name. If you want to set display
   * names yourself or are using another plugin to do this, you should disable
   * this option.
   *
   * ```
   * class MyComponent extends React.Component {
   * ...
   * }
   *
   * MyComponent.displayName = "MyComponent";
   * ```
   *
   * @default true
   */
  setDisplayName?: boolean;

  /**
   * Specify the name of the property for docgen info prop type.
   *
   * @default "type"
   */
  typePropName?: string;
}

interface TypescriptOptions {
  /**
   * Specify the location of the tsconfig.json to use. Can not be used with
   * compilerOptions.
   **/
  tsconfigPath?: string;
  /** Specify TypeScript compiler options. Can not be used with tsconfigPath. */
  compilerOptions?: ts.CompilerOptions;
}

export type Options = docGen.ParserOptions &
  LoaderOptions &
  TypescriptOptions & {
    /** Glob patterns to ignore */
    exclude?: string[];
    /** Glob patterns to include. defaults to ts|tsx */
    include?: string[];
  };

function getOptions(options: Options) {
  const {
    tsconfigPath = "./tsconfig.json",
    compilerOptions: userCompilerOptions,
    docgenCollectionName = "STORYBOOK_REACT_CLASSES",
    setDisplayName = true,
    typePropName = "type",
    propFilter = defaultPropFilter,
    ...docgenOptions
  } = options;

  let compilerOptions = {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.Latest,
  };

  if (userCompilerOptions) {
    compilerOptions = {
      ...compilerOptions,
      ...userCompilerOptions,
    };
  } else {
    const { options: tsOptions } = getTSConfigFile(tsconfigPath);
    compilerOptions = { ...compilerOptions, ...tsOptions };
  }

  return {
    docgenOptions: {
      propFilter,
      ...docgenOptions,
    },
    generateOptions: {
      docgenCollectionName,
      setDisplayName,
      typePropName,
    },
    compilerOptions,
  };
}

export default function reactDocgenTypescript(config: Options = {}): Plugin {
  const { docgenOptions, compilerOptions, generateOptions } =
    getOptions(config);

  const docGenParser = docGen.withCompilerOptions(
    compilerOptions,
    docgenOptions
  );
  const { exclude = ["**/**.stories.tsx"], include = ["**/**.tsx"] } =
    docgenOptions;
  const isExcluded = matchGlob(exclude);
  const isIncluded = matchGlob(include);

  const files = include
    .map((filePath) =>
      glob.sync(
        path.isAbsolute(filePath)
          ? filePath
          : path.join(process.cwd(), filePath)
      )
    )
    .reduce((carry, files) => carry.concat(files), []);
  const tsProgram = ts.createProgram(files, compilerOptions);

  return {
    name: "vite:react-docgen-typescript",
    async transform(src, id) {
      if (!(await isExcluded(id)) && (await isIncluded(id))) {
        const componentDocs = docGenParser.parseWithProgramProvider(
          id,
          () => tsProgram
        );

        if (!componentDocs.length) {
          return null;
        }

        return generateDocgenCodeBlock({
          filename: id,
          source: src,
          componentDocs,
          ...generateOptions,
        });

      }
    },
  };
}
