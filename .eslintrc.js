module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "unused-imports"],
	env: {
		node: true,
		browser: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	rules: {
		"react/prop-types": 0,
		"react-hooks/exhaustive-deps": 0,
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"unused-imports/no-unused-imports": 2,
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
		"react/no-unescaped-entities": 0,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
