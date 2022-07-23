"use strict";
// noinspection JSUnusedGlobalSymbols
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewPresets = exports.corePresets = exports.build = exports.start = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const transform_iframe_html_1 = require("./transform-iframe-html");
const vite_server_1 = require("./vite-server");
const build_1 = require("./build");
function iframeMiddleware(options, server) {
    return async (req, res, next) => {
        if (!req.url.match(/^\/iframe\.html($|\?)/)) {
            next();
            return;
        }
        // We need to handle `html-proxy` params for style tag HMR https://github.com/storybookjs/builder-vite/issues/266#issuecomment-1055677865
        // e.g. /iframe.html?html-proxy&index=0.css
        if (req.query['html-proxy'] !== undefined) {
            next();
            return;
        }
        const indexHtml = fs.readFileSync(path.resolve(__dirname, '..', 'input', 'iframe.html'), 'utf-8');
        const generated = await (0, transform_iframe_html_1.transformIframeHtml)(indexHtml, options);
        const transformed = await server.transformIndexHtml('/iframe.html', generated);
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(transformed);
    };
}
const start = async ({ startTime, options, router, server: devServer }) => {
    const server = await (0, vite_server_1.createViteServer)(options, devServer);
    // Just mock this endpoint (which is really Webpack-specific) so we don't get spammed with 404 in browser devtools
    // TODO: we should either show some sort of progress from Vite, or just try to disable the whole Loader in the Manager UI.
    router.get('/progress', (req, res) => {
        res.header('Cache-Control', 'no-cache');
        res.header('Content-Type', 'text/event-stream');
    });
    router.use(await iframeMiddleware(options, server));
    router.use(server.middlewares);
    async function bail(e) {
        try {
            return await server.close();
        }
        catch (err) {
            console.warn('unable to close vite server');
        }
        throw e;
    }
    return {
        bail,
        stats: null,
        totalTime: process.hrtime(startTime),
    };
};
exports.start = start;
const build = async ({ options }) => {
    return (0, build_1.build)(options);
};
exports.build = build;
exports.corePresets = [];
exports.previewPresets = [];
//# sourceMappingURL=index.js.map