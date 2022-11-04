module.exports = (plop) => {
    plop.setGenerator('New Component', {
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
                        name:
                            "No, I'm a PRO Mage, leave the files with min code needed for start",
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
    plop.setGenerator('New Chain Logo', {
        description: 'new chain logo generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '🧙 : What is the chain name?',
            },
            {
                type: 'input',
                name: 'color',
                message:
                    '🧙 : What is the background color for your chain? (Optional)',
            },
        ],
        actions: (data) => {
            /* PLOP_INJECT_CHAIN */
            const corePackagePath = 'packages/core/src';
            const componentName = plop.getHelper('titleCase')(data.name);
            return [
                //Add chain to logo.ts file in core package/interface
                {
                    type: 'append',
                    path: `${corePackagePath}/interfaces/logo.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: `     {{name}} : {\n        name:'{{name}}',\n      color:'{{color}}'\n     },`,
                },
                // add new tsx file to input svg => svg needs to be input manually
                {
                    type: 'add',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/{{name}}.tsx`,
                    template: `import React from 'react';\nimport { ILogoProps } from '../../types';\n\nconst {{ name }}:React.FC<ILogoProps> = ({width = '120', height = '160'}) => {\n    return (<></>);\n};\nexport default {{ name }};`,
                },
                // add new lazy import of chain
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/index.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN_1 */',
                    template: `const {{name}}Logo: ILogoImport = {\n    name: '{{name}}',\n    component: lazy(() => import('./{{name}}')),\n};`,
                },
                // export this above import
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/index.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN_2 */',
                    template: `    {{name}}Logo,`,
                },
                // add new illustration story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/Illustration.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: `export const ${componentName} = BackgroundColoredTemplate.bind({});\n${componentName}.args = {\n    logo: '{{name}}',\n};`,
                },
                // add new crypto logo story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/CryptoLogos/CryptoLogos.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: `export const ${componentName} = Template.bind({});\n${componentName}.args = {\n    chain: '{{name}}',\n    size: '48px'\n};`,
                },
                // add new crypto card story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/CryptoCards/CryptoCards.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: `export const ${componentName} = Template.bind({});\n${componentName}.args = {\n    chain: '{{name}}',\n    chainType: 'Network',\n    bgColor: chainLogoData['{{name}}'].color,\n    btnText: 'View Endpoints',\n};`,
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
