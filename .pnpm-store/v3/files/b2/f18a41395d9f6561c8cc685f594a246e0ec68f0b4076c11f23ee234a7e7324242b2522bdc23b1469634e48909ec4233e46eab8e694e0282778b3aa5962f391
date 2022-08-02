import type { Plugin } from "vite";
import * as docGen from "react-docgen-typescript";
import * as ts from "typescript";
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
export declare type Options = docGen.ParserOptions & LoaderOptions & TypescriptOptions & {
    /** Glob patterns to ignore */
    exclude?: string[];
    /** Glob patterns to include. defaults to ts|tsx */
    include?: string[];
};
export default function reactDocgenTypescript(config?: Options): Plugin;
export {};
