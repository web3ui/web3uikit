"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViteServer = void 0;
const vite_1 = require("vite");
const envs_1 = require("./envs");
const optimizeDeps_1 = require("./optimizeDeps");
const vite_config_1 = require("./vite-config");
async function createViteServer(options, devServer) {
    const { port, presets } = options;
    const baseConfig = await (0, vite_config_1.commonConfig)(options, 'development');
    const defaultConfig = {
        ...baseConfig,
        server: {
            middlewareMode: true,
            hmr: {
                port,
                server: devServer,
            },
            fs: {
                strict: true,
            },
        },
        optimizeDeps: await (0, optimizeDeps_1.getOptimizeDeps)(baseConfig, options),
    };
    const finalConfig = await presets.apply('viteFinal', defaultConfig, options);
    const envsRaw = await presets.apply('env');
    // Stringify env variables after getting `envPrefix` from the final config
    const envs = (0, envs_1.stringifyProcessEnvs)(envsRaw, finalConfig.envPrefix);
    // Update `define`
    finalConfig.define = {
        ...finalConfig.define,
        ...envs,
    };
    return (0, vite_1.createServer)(finalConfig);
}
exports.createViteServer = createViteServer;
//# sourceMappingURL=vite-server.js.map