module.exports = (plop) => {
    plop.setGenerator('create-new-component', {
        description: 'new component generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '🧙 : What is the component name?',
                pattern: 'properCase',
            },
            {
                type: 'list',
                name: 'subDirectory',
                message: '🧙 : What subdirectory is the component in?',
                choices: [
                    { name: '1.Core', value: 'core' },
                    { name: '2.Web3', value: 'web3' },
                ],
            },
            {
                type: 'list',
                name: 'category',
                message:
                    '🧙 : What category is the component in? (displayed in StoryBook)',
                choices: [
                    '1.Web3-Parse',
                    '2.Forms',
                    '3.Layout',
                    '4.UI',
                    '5.Popup',
                    '6.Graphic',
                ],
            },
            {
                type: 'list',
                name: 'isBlank',
                message:
                    "🧙 : Do you want examples and annotations in the generated component's files?",
                choices: [
                    {
                        name: 'Yes, I want examples and annotations inside',
                        value: false,
                    },
                    {
                        name: "No, I'm a PRO Mage, leave the files with min code needed for start",
                        value: true,
                    },
                ],
            },
        ],
        actions: (data) => {
            data.name = plop.getHelper('properCase')(data.name);
            const basePath = `.plop/plop-templates/${
                data.isBlank ? 'with-no-code-examples' : 'with-code-examples'
            }/`;
            return [
                {
                    type: 'addMany',
                    destination:
                        'packages/{{ subDirectory }}/src/lib/{{ name }}',
                    base: basePath,
                    templateFiles: `${basePath}/**`,
                },
                {
                    type: 'append',
                    path: 'packages/{{ subDirectory }}/src/lib/index.ts',
                    pattern: '/* PLOP_INJECT_EXPORT */',
                    template: "export * from './{{ name }}';",
                },
            ];
        },
    });
    plop.setHelper('getInterface', (name) => `I${name}Props`);
    plop.setHelper('getSubDirectoryPath', (subDirectory) => {
        if (subDirectory) return `/${subDirectory}`;
    });
    plop.setHelper('getPackage', (name, subDirectory) => {
        if (subDirectory === 'web3') return `@web3uikit/core`;
        else return `../${name}`;
    });
};
