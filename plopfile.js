const step1Template = `    
    {{name}} : {
        name:'{{name}}',
        color:'{{color}}',
    },
`;

const step2Template = `import React from 'react';
import { ILogoProps } from '../../types';

const {{ name }}: React.FC<ILogoProps> = ({width = '120', height = '160'}) => {
    return <></>;
};
export default {{ name }};
`;

const step3Template = `const {{name}}Logo: ILogoImport = {
    name: '{{name}}',
    component: lazy(() => import('./{{name}}')),
};
`;

const step4Template = `    {{name}}Logo,`;

const step5Template = (
    componentName,
) => `export const ${componentName} = BackgroundColoredTemplate.bind({});
${componentName}.args = {
    logo: '{{name}}',
};`;

const step6Template = (
    componentName,
) => `export const ${componentName} = Template.bind({});
${componentName}.args = {
    chain: '{{name}}',
    size: '48px',
};`;

const step7Template = (
    componentName,
) => `export const ${componentName} = Template.bind({});
${componentName}.args = {
    chain: '{{name}}',
    chainType: 'Network',
    bgColor: chainLogoData['{{name}}'].color,
    btnText: 'View Endpoints',
};`;

module.exports = (plop) => {
    plop.setGenerator('Component', {
        description: 'new core/web3 component generator',
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
    plop.setGenerator('ChainLogo', {
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
                //1. Add chain to logo.ts file in core package/interface
                {
                    type: 'append',
                    path: `${corePackagePath}/interfaces/logo.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: step1Template,
                },
                //2. add new tsx file to input svg => svg needs to be input manually
                {
                    type: 'add',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/{{name}}.tsx`,
                    template: step2Template,
                },
                //3. add new lazy import of chain
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/index.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN_1 */',
                    template: step3Template,
                },
                //4. export this above import
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/images/chains/index.ts`,
                    pattern: '/* PLOP_INJECT_CHAIN_2 */',
                    template: step4Template,
                },
                //5. add new illustration story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/Illustrations/Illustration.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: step5Template(componentName),
                },
                //6. add new crypto logo story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/CryptoLogos/CryptoLogos.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: step6Template(componentName),
                },
                //7. add new crypto card story
                {
                    type: 'append',
                    path: `${corePackagePath}/lib/CryptoCards/CryptoCards.stories.tsx`,
                    pattern: '/* PLOP_INJECT_CHAIN */',
                    template: step7Template(componentName),
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
