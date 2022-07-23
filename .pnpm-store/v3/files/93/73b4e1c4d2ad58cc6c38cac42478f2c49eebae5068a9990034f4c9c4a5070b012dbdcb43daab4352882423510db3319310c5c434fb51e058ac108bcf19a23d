declare const _default: {
    env: {
        browser: boolean;
        node: boolean;
    };
    parser: string;
    parserOptions: {
        ecmaVersion: number;
        sourceType: string;
    };
    plugins: string[];
    extends: string[];
    rules: {
        '@typescript-eslint/explicit-member-accessibility': string;
        '@typescript-eslint/explicit-module-boundary-types': string;
        '@typescript-eslint/explicit-function-return-type': string;
        '@typescript-eslint/no-parameter-properties': string;
        /**
         * Until ESM usage in Node matures, using require in e.g. JS config files
         * is by far the more common thing to do, so disabling this to avoid users
         * having to frequently use "eslint-disable-next-line" in their configs.
         */
        '@typescript-eslint/no-var-requires': string;
    };
};
/**
 * This configuration is intended to be applied to ALL .js and .jsx files
 * within an Nx workspace.
 *
 * It should therefore NOT contain any rules or plugins which are specific
 * to one ecosystem, such as React, Angular, Node etc.
 *
 * We use @typescript-eslint/parser rather than the built in JS parser
 * because that is what Nx ESLint configs have always done and we don't
 * want to change too much all at once.
 *
 * TODO: Evaluate switching to the built-in JS parser (espree) in Nx v11,
 * it should yield a performance improvement but could introduce subtle
 * breaking changes - we should also look to replace all the @typescript-eslint
 * related plugins and rules below.
 */
export default _default;
