import path from 'path';
import { createFilter } from '@rollup/pluginutils';
import {
  parse,
  handlers as docgenHandlers,
  resolver as docgenResolver,
  importers as docgenImporters,
} from 'react-docgen';
import type { DocumentationObject } from 'react-docgen/lib/Documentation';
import MagicString from 'magic-string';
import type { Plugin } from 'vite';
import actualNameHandler from './docgen-handlers/actualNameHandler';

type DocObj = DocumentationObject & { actualName: string };

// TODO: None of these are able to be overridden, so `default` is aspirational here.
const defaultHandlers = Object.values(docgenHandlers).map((handler) => handler);
const defaultResolver = docgenResolver.findAllExportedComponentDefinitions;
const defaultImporter = docgenImporters.makeFsImporter();
const handlers = [...defaultHandlers, actualNameHandler];

type Options = {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
};

export function reactDocgen({ include = /\.(mjs|tsx?|jsx?)$/, exclude = [/node_modules\/.*/] }: Options = {}): Plugin {
  const cwd = process.cwd();
  const filter = createFilter(include, exclude);

  return {
    name: 'react-docgen',
    enforce: 'pre',
    async transform(src: string, id: string) {
      const relPath = path.relative(cwd, id);
      if (!filter(relPath)) return;

      try {
        // Since we're using `findAllExportedComponentDefinitions`, this will always be an array.
        const docgenResults = parse(src, defaultResolver, handlers, { importer: defaultImporter, filename: id }) as
          | DocObj[];
        const s = new MagicString(src);

        docgenResults.forEach((info) => {
          const { actualName, ...docgenInfo } = info;
          if (actualName) {
            const docNode = JSON.stringify(docgenInfo);
            s.append(`;${actualName}.__docgenInfo=${docNode}`);
          }
        });

        return {
          code: s.toString(),
          map: s.generateMap(),
        };
      } catch (e) {
        // Usually this is just an error from react-docgen that it couldn't find a component
        // Only uncomment for troubleshooting
        // console.error(e);
      }
    },
  };
}
