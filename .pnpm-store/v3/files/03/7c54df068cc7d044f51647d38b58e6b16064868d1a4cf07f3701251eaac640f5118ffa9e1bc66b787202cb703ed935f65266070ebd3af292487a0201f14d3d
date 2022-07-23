import type { Plugin } from 'vite';
import MagicString from 'magic-string';
import path from 'path';
import fs from 'fs';
import svelteDoc from 'sveltedoc-parser';
import type { SvelteParserOptions } from 'sveltedoc-parser';
import { logger } from '@storybook/node-logger';
import { preprocess } from 'svelte/compiler';

// Most of the code here should probably be exported by @storybook/svelte and reused here.
// See: https://github.com/storybookjs/storybook/blob/next/app/svelte/src/server/svelte-docgen-loader.ts

// From https://github.com/sveltejs/svelte/blob/8db3e8d0297e052556f0b6dde310ef6e197b8d18/src/compiler/compile/utils/get_name_from_filename.ts
// Copied because it is not exported from the compiler
function getNameFromFilename(filename: string) {
  if (!filename) return null;

  const parts = filename.split(/[/\\]/).map(encodeURI);

  if (parts.length > 1) {
    const index_match = parts[parts.length - 1].match(/^index(\.\w+)/);
    if (index_match) {
      parts.pop();
      parts[parts.length - 1] += index_match[1];
    }
  }

  const base = parts
    .pop()
    ?.replace(/%/g, 'u')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z_$0-9]+/g, '_')
    .replace(/^_/, '')
    .replace(/_$/, '')
    .replace(/^(\d)/, '_$1');

  if (!base) {
    throw new Error(`Could not derive component name from file ${filename}`);
  }

  return base[0].toUpperCase() + base.slice(1);
}

export function svelteDocgen(svelteOptions: Record<string, any>): Plugin {
  const cwd = process.cwd();
  const { preprocess: preprocessOptions, logDocgen = false } = svelteOptions;

  return {
    name: 'svelte-docgen',
    async transform(src: string, id: string) {
      if (/\.(svelte)$/.test(id)) {
        const resource = path.relative(cwd, id);

        let docOptions;
        if (preprocessOptions) {
          const src = fs.readFileSync(resource).toString();

          const { code: fileContent } = await preprocess(src, preprocessOptions, { filename: resource });

          docOptions = {
            fileContent,
          };
        } else {
          docOptions = { filename: resource };
        }

        // set SvelteDoc options
        const options: SvelteParserOptions = {
          ...docOptions,
          version: 3,
        };

        const s = new MagicString(src);

        try {
          const componentDoc = await svelteDoc.parse(options);
          // get filename for source content
          const file = path.basename(resource);

          componentDoc.name = path.basename(file);

          const componentName = getNameFromFilename(resource);
          s.append(`;${componentName}.__docgen = ${JSON.stringify(componentDoc)}`);
        } catch (error: any) {
          if (logDocgen) {
            logger.error(error);
          }
        }

        return {
          code: s.toString(),
          map: s.generateMap(),
        };
      }
    },
  };
}
