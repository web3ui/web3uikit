module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['google'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['src/**/*.{ts,tsx}'],
        },
    ],
    ignorePatterns: ['dist/*.js'],
    plugins: ['@typescript-eslint'],
    rules: {
        'object-curly-spacing': 'off',
        'valid-jsdoc': 'off',
        'require-jsdoc': 'off',
        // https://github.com/prettier/prettier/issues/3806
        'operator-linebreak': 'off',
        'max-len': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'indent': 'off',
        'quotes': ['error', 'single', { avoidEscape: true }],
    },
};
