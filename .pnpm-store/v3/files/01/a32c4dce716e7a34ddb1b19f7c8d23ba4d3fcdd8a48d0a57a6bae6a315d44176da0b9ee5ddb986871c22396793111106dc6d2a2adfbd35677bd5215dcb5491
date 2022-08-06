import { lazy } from 'react';

const lazily = loader => new Proxy({}, {
  get: (target, componentName) => {
    if (typeof componentName === 'string') {
      return lazy(() => loader(componentName).then(x => ({
        default: x[componentName]
      })));
    }
  }
});

export { lazily };
