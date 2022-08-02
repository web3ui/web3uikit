"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyProcessEnvs = exports.allowedEnvPrefix = void 0;
const core_common_1 = require("@storybook/core-common");
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
exports.allowedEnvPrefix = ['VITE_', 'STORYBOOK_'];
/**
 * Customized version of stringifyProcessEnvs from @storybook/core-common which
 * uses import.meta.env instead of process.env and checks for allowed variables.
 */
function stringifyProcessEnvs(raw, envPrefix) {
    const updatedRaw = {};
    const envs = Object.entries(raw).reduce((acc, [key, value]) => {
        // Only add allowed values OR values from array OR string started with allowed prefixes
        if (allowedEnvVariables.includes(key) ||
            (Array.isArray(envPrefix) && !!envPrefix.find((prefix) => key.startsWith(prefix))) ||
            (typeof envPrefix === 'string' && key.startsWith(envPrefix))) {
            acc[`import.meta.env.${key}`] = JSON.stringify(value);
            updatedRaw[key] = value;
        }
        return acc;
    }, {
        // Default fallback
        'process.env.XSTORYBOOK_EXAMPLE_APP': '""',
    });
    // support destructuring like
    // const { foo } = import.meta.env;
    envs['import.meta.env'] = JSON.stringify((0, core_common_1.stringifyEnvs)(updatedRaw));
    return envs;
}
exports.stringifyProcessEnvs = stringifyProcessEnvs;
//# sourceMappingURL=envs.js.map