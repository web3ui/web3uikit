import { getNameFromFilename } from '@storybook/addon-svelte-csf/dist/cjs/parser/svelte-stories-loader';
import { readFileSync } from 'fs';
import { extractStories } from '@storybook/addon-svelte-csf/dist/cjs/parser/extract-stories';
const parser = require.resolve('@storybook/addon-svelte-csf/dist/esm/parser/collect-stories').replace(/[/\\]/g, '/');
import type { Options } from '@sveltejs/vite-plugin-svelte';
import * as svelte from 'svelte/compiler';

export default function csfPlugin(svelteOptions?: Options) {
  return {
    name: 'storybook-addon-svelte-csf',
    enforce: 'post',
    async transform(code: string, id: string) {
      if (/\.stories\.svelte$/.test(id)) {
        const component = getNameFromFilename(id);
        let source = readFileSync(id).toString();
        if (svelteOptions && svelteOptions.preprocess) {
          source = (await svelte.preprocess(source, svelteOptions.preprocess, { filename: id })).code;
        }
        const all = extractStories(source);
        const { stories } = all;
        const storyDef = Object.entries<any>(stories)
          .filter(([, def]) => !def.template)
          .map(([id]) => `export const ${id} = __storiesMetaData.stories[${JSON.stringify(id)}];`)
          .join('\n');

        const codeWithoutDefaultExport = code.replace('export default ', '// export default ');

        const namedExportsOrder = Object.entries<any>(stories)
          .filter(([, def]) => !def.template)
          .map(([id]) => id);

        const output = [
          codeWithoutDefaultExport,
          `import parser from '${parser}';`,
          `const __storiesMetaData = parser(${component}, ${JSON.stringify(all)});`,
          'export default __storiesMetaData.meta;',
          `export const __namedExportsOrder = ${JSON.stringify(namedExportsOrder)};`,
          storyDef,
        ].join('\n');
        return {
          code: output,
        };
      }
    },
  };
}
