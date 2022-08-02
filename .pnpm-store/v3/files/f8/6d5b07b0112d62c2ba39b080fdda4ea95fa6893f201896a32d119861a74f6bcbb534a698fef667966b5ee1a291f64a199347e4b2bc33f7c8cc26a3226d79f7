export function mockCoreJs() {
  return {
    name: 'mock-core-js',
    resolveId(id: string) {
      if (id.includes('node_modules/core-js')) {
        return id;
      }
      return undefined;
    },
    load(id: string) {
      if (id.includes('node_modules/core-js')) {
        return '';
      }
      return undefined;
    },
  };
}
