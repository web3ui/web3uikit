import load from '@loadable/component';

// @ts-ignore does not provide TypeScript definitions

const loadable = (loader, opts) => new Proxy({}, {
  get: (target, componentName) => {
    if (typeof componentName === 'string') {
      return load(() => loader().then(x => x[componentName]), opts);
    }
  }
});

export { loadable };
