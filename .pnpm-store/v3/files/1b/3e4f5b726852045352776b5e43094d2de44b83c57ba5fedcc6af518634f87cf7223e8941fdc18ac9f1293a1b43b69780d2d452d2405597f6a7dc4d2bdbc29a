"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extract = extract;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fsExtra = require("fs-extra");

var _puppeteerCore = _interopRequireDefault(require("puppeteer-core"));

var _express = _interopRequireDefault(require("express"));

var _getPort = _interopRequireDefault(require("get-port"));

var _nodeLogger = require("@storybook/node-logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const read = async url => {
  const browser = await usePuppeteerBrowser();
  const page = await browser.newPage();
  await page.goto(url); // we don't know whether we are running against a new or old storybook
  // FIXME: add tests for both

  await page.waitForFunction(`
    (window.__STORYBOOK_PREVIEW__ && window.__STORYBOOK_PREVIEW__.extract && window.__STORYBOOK_PREVIEW__.extract()) ||
    (window.__STORYBOOK_STORY_STORE__ && window.__STORYBOOK_STORY_STORE__.extract && window.__STORYBOOK_STORY_STORE__.extract())
  `);
  const data = JSON.parse(await page.evaluate(async () => {
    // eslint-disable-next-line no-undef
    return JSON.stringify(window.__STORYBOOK_STORY_STORE__.getStoriesJsonData(), null, 2);
  }));
  setImmediate(() => {
    browser.close();
  });
  return data;
};

const useLocation = async input => {
  // check for input's existence
  await (0, _fsExtra.stat)(_path.default.resolve(input));

  if (input.match(/^http/)) {
    return [input, async () => {}];
  }

  const app = (0, _express.default)();
  app.use(_express.default.static(input));
  const port = await (0, _getPort.default)();
  return new Promise(resolve => {
    const server = app.listen(port, () => {
      const result = `http://localhost:${port}/iframe.html`;

      _nodeLogger.logger.info(`connecting to: ${result}`);

      resolve([result, server.close.bind(server)]);
    });
  });
};

const usePuppeteerBrowser = async () => {
  const args = ['--no-sandbox ', '--disable-setuid-sandbox'];

  try {
    return await _puppeteerCore.default.launch({
      args,
      executablePath: process.env.SB_CHROMIUM_PATH
    });
  } catch (e) {
    // it's not installed
    _nodeLogger.logger.info('installing puppeteer...');

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line global-require
      require('child_process').exec(`node ${require.resolve(_path.default.join('puppeteer-core', 'install.js'))}`, error => error ? reject(error) : resolve(_puppeteerCore.default.launch({
        args
      })));
    });
  }
};

async function extract(input, targetPath) {
  if (input && targetPath) {
    const [location, exit] = await useLocation(input);
    const data = await read(location);
    await (0, _fsExtra.writeFile)(targetPath, JSON.stringify(data, null, 2));
    await exit();
  } else {
    throw new Error('Extract: please specify a path where your built-storybook is (can be a public url) and a target directory');
  }
}