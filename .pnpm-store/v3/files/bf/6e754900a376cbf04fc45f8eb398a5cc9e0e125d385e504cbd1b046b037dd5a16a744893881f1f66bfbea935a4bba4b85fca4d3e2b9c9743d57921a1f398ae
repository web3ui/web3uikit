"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const vite_1 = require("vite");
const envs_1 = require("./envs");
const vite_config_1 = require("./vite-config");
async function build(options) {
    const { presets } = options;
    const baseConfig = await (0, vite_config_1.commonConfig)(options, 'build');
    const config = {
        ...baseConfig,
        build: {
            outDir: options.outputDir,
            emptyOutDir: false,
            sourcemap: true,
        },
    };
    const finalConfig = await presets.apply('viteFinal', config, options);
    const envsRaw = await presets.apply('env');
    // Stringify env variables after getting `envPrefix` from the final config
    const envs = (0, envs_1.stringifyProcessEnvs)(envsRaw, finalConfig.envPrefix);
    // Update `define`
    finalConfig.define = {
        ...finalConfig.define,
        ...envs,
    };
    await (0, vite_1.build)(finalConfig);
}
exports.build = build;
//# sourceMappingURL=build.js.map