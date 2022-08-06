function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import prettier from 'prettier';
import { logger } from '@storybook/node-logger';
import { storyNameFromExport } from '@storybook/csf';
import { sanitizeName, jscodeshiftToPrettierParser } from '../lib/utils';
/**
 * Convert a legacy story API to component story format
 *
 * For example:
 *
 * ```
 * input { Button } from './Button';
 * storiesOf('Button', module).add('story', () => <Button label="The Button" />);
 * ```
 *
 * Becomes:
 *
 * ```
 * input { Button } from './Button';
 * export default {
 *   title: 'Button'
 * }
 * export const story = () => <Button label="The Button" />;
 *
 * NOTES: only support chained storiesOf() calls
 */

export default function transformer(file, api, options) {
  var LITERAL = ['ts', 'tsx'].includes(options.parser) ? 'StringLiteral' : 'Literal';
  var j = api.jscodeshift;
  var root = j(file.source);

  function extractDecorators(parameters) {
    if (!parameters) {
      return {};
    }

    if (!parameters.properties) {
      return {
        storyParams: parameters
      };
    }

    var storyDecorators = parameters.properties.find(function (p) {
      return p.key.name === 'decorators';
    });

    if (!storyDecorators) {
      return {
        storyParams: parameters
      };
    }

    storyDecorators = storyDecorators.value;

    var storyParams = _objectSpread({}, parameters);

    storyParams.properties = storyParams.properties.filter(function (p) {
      return p.key.name !== 'decorators';
    });

    if (storyParams.properties.length === 0) {
      return {
        storyDecorators: storyDecorators
      };
    }

    return {
      storyParams: storyParams,
      storyDecorators: storyDecorators
    };
  }

  function convertToModuleExports(path, originalExports) {
    var base = j(path);
    var statements = [];
    var extraExports = []; // .addDecorator

    var decorators = [];
    base.find(j.CallExpression).filter(function (call) {
      return call.node.callee.property && call.node.callee.property.name === 'addDecorator';
    }).forEach(function (add) {
      var decorator = add.node.arguments[0];
      decorators.push(decorator);
    });

    if (decorators.length > 0) {
      decorators.reverse();
      extraExports.push(j.property('init', j.identifier('decorators'), j.arrayExpression(decorators)));
    } // .addParameters


    var parameters = [];
    base.find(j.CallExpression).filter(function (call) {
      return call.node.callee.property && call.node.callee.property.name === 'addParameters';
    }).forEach(function (add) {
      // jscodeshift gives us the find results in reverse, but these args come in
      // order, so we double reverse here. ugh.
      var params = [...add.node.arguments[0].properties];
      params.reverse();
      params.forEach(function (prop) {
        return parameters.push(prop);
      });
    });

    if (parameters.length > 0) {
      parameters.reverse();
      extraExports.push(j.property('init', j.identifier('parameters'), j.objectExpression(parameters)));
    }

    if (originalExports.length > 0) {
      extraExports.push(j.property('init', j.identifier('excludeStories'), j.arrayExpression(originalExports.map(function (exp) {
        return j.literal(exp);
      }))));
    } // storiesOf(...)


    base.find(j.CallExpression).filter(function (call) {
      return call.node.callee.name === 'storiesOf';
    }).filter(function (call) {
      return call.node.arguments.length > 0 && call.node.arguments[0].type === LITERAL;
    }).forEach(function (storiesOf) {
      var title = storiesOf.node.arguments[0].value;
      statements.push(j.exportDefaultDeclaration(j.objectExpression([j.property('init', j.identifier('title'), j.literal(title)), ...extraExports])));
    }); // .add(...)

    var adds = [];
    base.find(j.CallExpression).filter(function (add) {
      return add.node.callee.property && add.node.callee.property.name === 'add';
    }).filter(function (add) {
      return add.node.arguments.length >= 2 && add.node.arguments[0].type === LITERAL;
    }).forEach(function (add) {
      return adds.push(add);
    });
    adds.reverse();
    adds.push(path);
    var identifiers = new Set();
    root.find(j.Identifier).forEach(function ({
      value: value
    }) {
      return identifiers.add(value.name);
    });
    adds.forEach(function (add) {
      var name = add.node.arguments[0].value;
      var key = sanitizeName(name);

      while (identifiers.has(key)) {
        key = `_${key}`;
      }

      identifiers.add(key);

      if (storyNameFromExport(key) === name) {
        name = null;
      }

      var val = add.node.arguments[1];
      statements.push(j.exportDeclaration(false, j.variableDeclaration('const', [j.variableDeclarator(j.identifier(key), val)])));
      var storyAnnotations = [];

      if (name) {
        storyAnnotations.push(j.property('init', j.identifier('name'), j.literal(name)));
      }

      if (add.node.arguments.length > 2) {
        var originalStoryParams = add.node.arguments[2];

        var _extractDecorators = extractDecorators(originalStoryParams),
            storyParams = _extractDecorators.storyParams,
            storyDecorators = _extractDecorators.storyDecorators;

        if (storyParams) {
          storyAnnotations.push(j.property('init', j.identifier('parameters'), storyParams));
        }

        if (storyDecorators) {
          storyAnnotations.push(j.property('init', j.identifier('decorators'), storyDecorators));
        }
      }

      if (storyAnnotations.length > 0) {
        statements.push(j.assignmentStatement('=', j.memberExpression(j.identifier(key), j.identifier('story')), j.objectExpression(storyAnnotations)));
      }
    });
    var stmt = path.parent.node.type === 'VariableDeclarator' ? path.parent.parent : path.parent;
    statements.reverse();
    statements.forEach(function (s) {
      return stmt.insertAfter(s);
    });
    j(stmt).remove();
  } // Save the original storiesOf


  var initialStoriesOf = root.find(j.CallExpression).filter(function (call) {
    return call.node.callee.name === 'storiesOf';
  });
  var defaultExports = root.find(j.ExportDefaultDeclaration); // If there's already a default export

  if (defaultExports.size() > 0) {
    if (initialStoriesOf.size() > 0) {
      logger.warn(`Found ${initialStoriesOf.size()} 'storiesOf' calls but existing default export, SKIPPING: '${file.path}'`);
    }

    return root.toSource();
  } // Exclude all the original named exports


  var originalExports = [];
  root.find(j.ExportNamedDeclaration).forEach(function (exp) {
    var _exp$node = exp.node,
        declaration = _exp$node.declaration,
        specifiers = _exp$node.specifiers;

    if (declaration) {
      var id = declaration.id,
          declarations = declaration.declarations;

      if (declarations) {
        declarations.forEach(function (decl) {
          var _decl$id = decl.id,
              name = _decl$id.name,
              properties = _decl$id.properties;

          if (name) {
            originalExports.push(name);
          } else if (properties) {
            properties.forEach(function (prop) {
              return originalExports.push(prop.key.name);
            });
          }
        });
      } else if (id) {
        originalExports.push(id.name);
      }
    } else if (specifiers) {
      specifiers.forEach(function (spec) {
        return originalExports.push(spec.exported.name);
      });
    }
  }); // each top-level add expression corresponds to the last "add" of the chain.
  // replace it with the entire export statements

  root.find(j.CallExpression).filter(function (add) {
    return add.node.callee.property && add.node.callee.property.name === 'add';
  }).filter(function (add) {
    return add.node.arguments.length >= 2 && add.node.arguments[0].type === LITERAL;
  }).filter(function (add) {
    return ['ExpressionStatement', 'VariableDeclarator'].includes(add.parentPath.node.type);
  }).forEach(function (path) {
    return convertToModuleExports(path, originalExports);
  }); // remove storiesOf import

  root.find(j.ImportSpecifier).filter(function (spec) {
    return spec.node.imported.name === 'storiesOf' && spec.parent.node.source.value.startsWith('@storybook/');
  }).forEach(function (spec) {
    var toRemove = spec.parent.node.specifiers.length > 1 ? spec : spec.parent;
    j(toRemove).remove();
  });
  var source = root.toSource({
    trailingComma: true,
    quote: 'single',
    tabWidth: 2
  });

  if (initialStoriesOf.size() > 1) {
    logger.warn(`Found ${initialStoriesOf.size()} 'storiesOf' calls, PLEASE FIX BY HAND: '${file.path}'`);
    return source;
  }

  var prettierConfig = prettier.resolveConfig.sync('.', {
    editorconfig: true
  }) || {
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    singleQuote: true
  };
  return prettier.format(source, _objectSpread(_objectSpread({}, prettierConfig), {}, {
    parser: jscodeshiftToPrettierParser(options.parser) || 'babel'
  }));
}