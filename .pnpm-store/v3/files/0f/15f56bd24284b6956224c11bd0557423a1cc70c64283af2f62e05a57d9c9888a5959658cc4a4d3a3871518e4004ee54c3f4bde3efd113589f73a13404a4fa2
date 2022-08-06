"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var _recast = require("recast");

var _csf = require("@storybook/csf");

function exportMdx(root, options) {
  // eslint-disable-next-line no-underscore-dangle
  var path = root.__paths[0]; // FIXME: insert the title as markdown after all of the imports

  return path.node.program.body.map(function (n) {
    var _prettyPrint = (0, _recast.prettyPrint)(n, options),
        code = _prettyPrint.code;

    if (n.type === 'JSXElement') {
      return `${code}\n`;
    }

    return code;
  }).join('\n');
}

function parseIncludeExclude(prop) {
  var _prettyPrint2 = (0, _recast.prettyPrint)(prop, {}),
      code = _prettyPrint2.code; // eslint-disable-next-line no-eval


  return eval(code);
}
/**
 * Convert a component's module story file into an MDX file
 *
 * For example:
 *
 * ```
 * input { Button } from './Button';
 * export default {
 *   title: 'Button'
 * }
 * export const story = () => <Button label="The Button" />;
 * ```
 *
 * Becomes:
 *
 * ```
 * import { Meta, Story } from '@storybook/addon-docs';
 * input { Button } from './Button';
 *
 * <Meta title='Button' />
 *
 * <Story name='story'>
 *   <Button label="The Button" />
 * </Story>
 * ```
 */


function transformer(file, api) {
  var j = api.jscodeshift;
  var root = j(file.source); // FIXME: save out all the storyFn.story = { ... }

  var storyKeyToStory = {}; // save out includeStories / excludeStories

  var meta = {};

  function makeAttr(key, val) {
    return j.jsxAttribute(j.jsxIdentifier(key), val.type === 'Literal' ? val : j.jsxExpressionContainer(val));
  }

  function getStoryContents(node) {
    return node.type === 'ArrowFunctionExpression' && node.body.type === 'JSXElement' ? node.body : j.jsxExpressionContainer(node);
  }

  function getName(storyKey) {
    var story = storyKeyToStory[storyKey];

    if (story) {
      var name = story.properties.find(function (prop) {
        return prop.key.name === 'name';
      });

      if (name && name.value.type === 'Literal') {
        return name.value.value;
      }
    }

    return storyKey;
  }

  function getStoryAttrs(storyKey) {
    var attrs = [];
    var story = storyKeyToStory[storyKey];

    if (story) {
      story.properties.forEach(function (prop) {
        var key = prop.key,
            value = prop.value;

        if (key.name !== 'name') {
          attrs.push(makeAttr(key.name, value));
        }
      });
    }

    return attrs;
  } // 1. If the program does not have `export default { title: '....' }, skip it


  var defaultExportWithTitle = root.find(j.ExportDefaultDeclaration).filter(function (def) {
    return def.node.declaration.properties.map(function (p) {
      return p.key.name;
    }).includes('title');
  });

  if (defaultExportWithTitle.size() === 0) {
    return root.toSource();
  } // 2a. Add imports from '@storybook/addon-docs'


  root.find(j.ImportDeclaration).at(-1).insertAfter(j.emptyStatement()).insertAfter(j.importDeclaration([j.importSpecifier(j.identifier('Meta')), j.importSpecifier(j.identifier('Story'))], j.literal('@storybook/addon-docs'))); // 2b. Remove react import which is implicit

  root.find(j.ImportDeclaration).filter(function (decl) {
    return decl.node.source.value === 'react';
  }).remove(); // 3. Save out all the excluded stories

  defaultExportWithTitle.forEach(function (exp) {
    exp.node.declaration.properties.forEach(function (p) {
      if (['includeStories', 'excludeStories'].includes(p.key.name)) {
        meta[p.key.name] = parseIncludeExclude(p.value);
      }
    });
  }); // 4. Collect all the story exports in storyKeyToStory[key] = null;

  var namedExports = root.find(j.ExportNamedDeclaration);
  namedExports.forEach(function (exp) {
    var storyKey = exp.node.declaration.declarations[0].id.name;

    if ((0, _csf.isExportStory)(storyKey, meta)) {
      storyKeyToStory[storyKey] = null;
    }
  }); // 5. Collect all the storyKey.story in storyKeyToStory and also remove them

  var storyAssignments = root.find(j.AssignmentExpression).filter(function (exp) {
    var left = exp.node.left;
    return left.type === 'MemberExpression' && left.object.type === 'Identifier' && left.object.name in storyKeyToStory && left.property.type === 'Identifier' && left.property.name === 'story';
  });
  storyAssignments.forEach(function (exp) {
    var _exp$node = exp.node,
        left = _exp$node.left,
        right = _exp$node.right;
    storyKeyToStory[left.object.name] = right;
  });
  storyAssignments.remove(); // 6. Convert the default export to <Meta />

  defaultExportWithTitle.replaceWith(function (exp) {
    var jsxId = j.jsxIdentifier('Meta');
    var attrs = [];
    exp.node.declaration.properties.forEach(function (prop) {
      var key = prop.key,
          value = prop.value;

      if (!['includeStories', 'excludeStories'].includes(key.name)) {
        attrs.push(makeAttr(key.name, value));
      }
    });
    var opening = j.jsxOpeningElement(jsxId, attrs);
    opening.selfClosing = true;
    return j.jsxElement(opening);
  }); // 7. Convert all the named exports to <Story>...</Story>

  namedExports.replaceWith(function (exp) {
    var storyKey = exp.node.declaration.declarations[0].id.name;

    if (!(0, _csf.isExportStory)(storyKey, meta)) {
      return exp.node;
    }

    var jsxId = j.jsxIdentifier('Story');
    var name = getName(storyKey);
    var attributes = [makeAttr('name', j.literal(name)), ...getStoryAttrs(storyKey)];
    var opening = j.jsxOpeningElement(jsxId, attributes);
    var closing = j.jsxClosingElement(jsxId);
    var children = [getStoryContents(exp.node.declaration.declarations[0].init)];
    return j.jsxElement(opening, closing, children);
  });
  return exportMdx(root, {
    quote: 'single',
    trailingComma: 'true',
    tabWidth: 2
  });
}