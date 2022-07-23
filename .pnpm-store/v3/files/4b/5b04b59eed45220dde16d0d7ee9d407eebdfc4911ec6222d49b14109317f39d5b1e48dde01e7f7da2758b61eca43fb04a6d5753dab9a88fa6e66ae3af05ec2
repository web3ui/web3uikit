"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var _mdx = _interopRequireDefault(require("@mdx-js/mdx"));

var _prettier = _interopRequireDefault(require("prettier"));

var _utils = require("../lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import recast from 'recast';

/**
 * Convert a component's MDX file into module story format
 */
function transformer(file, api) {
  var j = api.jscodeshift;

  var code = _mdx.default.sync(file.source, {});

  var root = j(code);

  function parseJsxAttributes(attributes) {
    var result = {};
    attributes.forEach(function (attr) {
      var key = attr.name.name;
      var val = attr.value.type === 'JSXExpressionContainer' ? attr.value.expression : attr.value;
      result[key] = val;
    });
    return result;
  }

  function genObjectExpression(attrs) {
    return j.objectExpression(Object.entries(attrs).map(function ([key, val]) {
      return j.property('init', j.identifier(key), val);
    }));
  }

  function convertToStories(path) {
    var base = j(path);
    var meta = {};
    var includeStories = [];
    var storyStatements = []; // get rid of all mdxType junk

    base.find(j.JSXAttribute).filter(function (attr) {
      return attr.node.name.name === 'mdxType';
    }).remove(); // parse <Meta title="..." />

    base.find(j.JSXElement).filter(function (elt) {
      return elt.node.openingElement.name.name === 'Meta';
    }).forEach(function (elt) {
      var attrs = parseJsxAttributes(elt.node.openingElement.attributes);
      Object.assign(meta, attrs);
    }); // parse <Story name="..." />

    base.find(j.JSXElement).filter(function (elt) {
      return elt.node.openingElement.name.name === 'Story';
    }).forEach(function (elt) {
      var attrs = parseJsxAttributes(elt.node.openingElement.attributes);

      if (attrs.name) {
        var storyKey = (0, _utils.sanitizeName)(attrs.name.value);
        includeStories.push(storyKey);

        if (storyKey === attrs.name.value) {
          delete attrs.name;
        }

        var body = elt.node.children.find(function (n) {
          return n.type !== 'JSXText';
        }) || j.literal(elt.node.children[0].value);

        if (body.type === 'JSXExpressionContainer') {
          body = body.expression;
        }

        storyStatements.push(j.exportDeclaration(false, j.variableDeclaration('const', [j.variableDeclarator(j.identifier(storyKey), body.type === 'ArrowFunctionExpression' ? body : j.arrowFunctionExpression([], body))])));

        if (Object.keys(attrs).length > 0) {
          storyStatements.push(j.assignmentStatement('=', j.memberExpression(j.identifier(storyKey), j.identifier('story')), genObjectExpression(attrs)));
        }

        storyStatements.push(j.emptyStatement());
      }
    });

    if (root.find(j.ExportNamedDeclaration).size() > 0) {
      meta.includeStories = j.arrayExpression(includeStories.map(function (key) {
        return j.literal(key);
      }));
    }

    var statements = [j.exportDefaultDeclaration(genObjectExpression(meta)), j.emptyStatement(), ...storyStatements];
    var lastStatement = root.find(j.Statement).at(-1);
    statements.reverse().forEach(function (stmt) {
      lastStatement.insertAfter(stmt);
    });
    base.remove();
  }

  root.find(j.ExportDefaultDeclaration).forEach(convertToStories); // strip out Story/Meta import and MDX junk
  //   /* @jsx mdx */

  root.find(j.ImportDeclaration).at(0).replaceWith(function (exp) {
    return j.importDeclaration(exp.node.specifiers, exp.node.source);
  }); //  import { Story, Meta } from '@storybook/addon-docs';

  root.find(j.ImportDeclaration).filter(function (exp) {
    return exp.node.source.value === '@storybook/addon-docs';
  }).remove(); //   const makeShortcode = ...
  //   const layoutProps = {};
  //   const MDXLayout = 'wrapper';

  var MDX_DECLS = ['makeShortcode', 'layoutProps', 'MDXLayout'];
  root.find(j.VariableDeclaration).filter(function (decl) {
    return decl.node.declarations.length === 1 && MDX_DECLS.includes(decl.node.declarations[0].id.name);
  }).remove(); //   const Source = makeShortcode('Source');

  root.find(j.VariableDeclarator).filter(function (expr) {
    return expr.node.init.type === 'CallExpression' && expr.node.init.callee.type === 'Identifier' && expr.node.init.callee.name === 'makeShortcode';
  }).remove(); //   MDXContent.isMDXComponent = true;

  root.find(j.AssignmentExpression).filter(function (expr) {
    return expr.node.left.type === 'MemberExpression' && expr.node.left.object.type === 'Identifier' && expr.node.left.object.name === 'MDXContent';
  }).remove(); // Add back `import React from 'react';` which is implicit in MDX

  var react = root.find(j.ImportDeclaration).filter(function (decl) {
    return decl.node.source.value === 'react';
  });

  if (react.size() === 0) {
    root.find(j.Statement).at(0).insertBefore(j.importDeclaration([j.importDefaultSpecifier(j.identifier('React'))], j.literal('react')));
  }

  var source = root.toSource({
    trailingComma: true,
    quote: 'single',
    tabWidth: 2
  });
  return _prettier.default.format(source, {
    parser: 'babel',
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    singleQuote: true
  });
}