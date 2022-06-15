const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
`;
const importStatements = `
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
`;
const template = (variables, { tpl }) => {
    return tpl`
${comments}
${importStatements}

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;
