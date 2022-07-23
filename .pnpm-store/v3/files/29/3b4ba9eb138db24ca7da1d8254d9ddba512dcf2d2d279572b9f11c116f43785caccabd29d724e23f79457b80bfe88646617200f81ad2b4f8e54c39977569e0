import { parse } from 'es-module-lexer';

export const injectExportOrderPlugin = {
  name: 'storybook-vite-inject-export-order-plugin',
  // This should only run after the typescript has been transpiled
  enforce: 'post',
  async transform(code: string, id: string) {
    if (!/\.stories\.([tj])sx?$/.test(id) && !/(stories|story).mdx$/.test(id)) {
      return;
    }
    // TODO: Maybe convert `injectExportOrderPlugin` to function that returns object,
    //  and run `await init;` once and then call `parse()` without `await`,
    //  instead of calling `await parse()` every time.
    const [, exports] = await parse(code);

    if (exports.includes('__namedExportsOrder')) {
      // user has defined named exports already
      return;
    }

    const orderedExports = exports.filter((e) => e !== 'default');

    return {
      code: `${code};\nexport const __namedExportsOrder = ${JSON.stringify(orderedExports)};`,
      map: null,
    };
  },
};
