import { parse } from 'vue-docgen-api';
import type { Plugin } from 'vite';
import MagicString from 'magic-string';

export function vueDocgen(): Plugin {
  return {
    name: 'vue-docgen',

    async transform(src: string, id: string) {
      if (/\.(vue)$/.test(id)) {
        const metaData = await parse(id);
        const metaSource = JSON.stringify(metaData);
        const s = new MagicString(src);
        s.append(`;_sfc_main.__docgenInfo = ${metaSource}`);

        return {
          code: s.toString(),
          map: s.generateMap(),
        };
      }
    },
  };
}
