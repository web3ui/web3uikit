function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "core-js/modules/es.promise.js";
import { logger } from '@storybook/node-logger';
export async function createDefaultWebpackConfig(storybookBaseConfig, options) {
  var _storybookBaseConfig$;

  if (options.presetsList.some(function (preset) {
    return /@storybook(\/|\\)preset-create-react-app/.test(typeof preset === 'string' ? preset : preset.name);
  })) {
    return storybookBaseConfig;
  }

  var hasPostcssAddon = options.presetsList.some(function (preset) {
    return /@storybook(\/|\\)addon-postcss/.test(typeof preset === 'string' ? preset : preset.name);
  });
  var cssLoaders = {};

  if (!hasPostcssAddon) {
    logger.info(`=> Using implicit CSS loaders`);
    cssLoaders = {
      test: /\.css$/,
      sideEffects: true,
      use: [// TODO: Decide if we want to keep style-loader & css-loader in core
      // Trying to apply style-loader or css-loader to files that already have been
      // processed by them causes webpack to crash, so no one else can add similar
      // loader configurations to the `.css` extension.
      require.resolve('style-loader'), {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      }]
    };
  }

  var isProd = storybookBaseConfig.mode !== 'development';
  var coreOptions = await options.presets.apply('core');
  var builderOptions = coreOptions.builder.options;
  var cacheConfig = builderOptions !== null && builderOptions !== void 0 && builderOptions.fsCache ? {
    cache: {
      type: 'filesystem'
    }
  } : {};
  var lazyCompilationConfig = builderOptions !== null && builderOptions !== void 0 && builderOptions.lazyCompilation && !isProd ? {
    lazyCompilation: {
      entries: false
    }
  } : {};
  return _objectSpread(_objectSpread(_objectSpread({}, storybookBaseConfig), {}, {
    module: _objectSpread(_objectSpread({}, storybookBaseConfig.module), {}, {
      rules: [...storybookBaseConfig.module.rules, cssLoaders, {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: isProd ? 'static/media/[name].[contenthash:8][ext]' : 'static/media/[path][name][ext]'
        }
      }, {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        },
        generator: {
          filename: isProd ? 'static/media/[name].[contenthash:8][ext]' : 'static/media/[path][name][ext]'
        }
      }]
    }),
    resolve: _objectSpread(_objectSpread({}, storybookBaseConfig.resolve), {}, {
      fallback: _objectSpread(_objectSpread({}, (_storybookBaseConfig$ = storybookBaseConfig.resolve) === null || _storybookBaseConfig$ === void 0 ? void 0 : _storybookBaseConfig$.fallback), {}, {
        crypto: false,
        assert: false
      })
    })
  }, cacheConfig), {}, {
    experiments: _objectSpread(_objectSpread({}, storybookBaseConfig.experiments), lazyCompilationConfig)
  });
}