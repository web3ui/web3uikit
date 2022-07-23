import { stringifyEnvs } from '@storybook/core-common';

import type { EnvsRaw } from './types';
import type { UserConfig } from 'vite';

// Allowed env variables on the client
const allowedEnvVariables = [
  'STORYBOOK',
  // Vite `import.meta.env` default variables
  // @see https://github.com/vitejs/vite/blob/6b8d94dca2a1a8b4952e3e3fcd0aed1aedb94215/packages/vite/types/importMeta.d.ts#L68-L75
  'BASE_URL',
  'MODE',
  'DEV',
  'PROD',
  'SSR',
];

// Env variables starts with env prefix will be exposed to your client source code via `import.meta.env`
export const allowedEnvPrefix = ['VITE_', 'STORYBOOK_'];

/**
 * Customized version of stringifyProcessEnvs from @storybook/core-common which
 * uses import.meta.env instead of process.env and checks for allowed variables.
 */
export function stringifyProcessEnvs(raw: EnvsRaw, envPrefix: UserConfig['envPrefix']) {
  const updatedRaw: EnvsRaw = {};
  const envs = Object.entries(raw).reduce(
    (acc: EnvsRaw, [key, value]) => {
      // Only add allowed values OR values from array OR string started with allowed prefixes
      if (
        allowedEnvVariables.includes(key) ||
        (Array.isArray(envPrefix) && !!envPrefix.find((prefix) => key.startsWith(prefix))) ||
        (typeof envPrefix === 'string' && key.startsWith(envPrefix))
      ) {
        acc[`import.meta.env.${key}`] = JSON.stringify(value);
        updatedRaw[key] = value;
      }
      return acc;
    },
    {
      // Default fallback
      'process.env.XSTORYBOOK_EXAMPLE_APP': '""',
    }
  );
  // support destructuring like
  // const { foo } = import.meta.env;
  envs['import.meta.env'] = JSON.stringify(stringifyEnvs(updatedRaw));

  return envs;
}
