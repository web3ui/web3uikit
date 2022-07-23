function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
import prettier from 'prettier';
import * as t from '@babel/types';
import { formatCsf, loadCsf } from '@storybook/csf-tools';
import { jscodeshiftToPrettierParser } from '../lib/utils';
var logger = console;

var _rename = function (annotation) {
  return annotation === 'storyName' ? 'name' : annotation;
};

var getTemplateBindVariable = function (init) {
  return t.isCallExpression(init) && t.isMemberExpression(init.callee) && t.isIdentifier(init.callee.object) && t.isIdentifier(init.callee.property) && init.callee.property.name === 'bind' && (init.arguments.length === 0 || init.arguments.length === 1 && t.isObjectExpression(init.arguments[0]) && init.arguments[0].properties.length === 0) ? init.callee.object.name : null;
}; // export const A = ...
// A.parameters = { ... }; <===


var isStoryAnnotation = function (stmt, objectExports) {
  return t.isExpressionStatement(stmt) && t.isAssignmentExpression(stmt.expression) && t.isMemberExpression(stmt.expression.left) && t.isIdentifier(stmt.expression.left.object) && objectExports[stmt.expression.left.object.name];
};

var isTemplateDeclaration = function (stmt, templates) {
  return t.isVariableDeclaration(stmt) && stmt.declarations.length === 1 && t.isIdentifier(stmt.declarations[0].id) && templates[stmt.declarations[0].id.name];
};

var getNewExport = function (stmt, objectExports) {
  if (t.isExportNamedDeclaration(stmt) && t.isVariableDeclaration(stmt.declaration) && stmt.declaration.declarations.length === 1) {
    var decl = stmt.declaration.declarations[0];

    if (t.isVariableDeclarator(decl) && t.isIdentifier(decl.id)) {
      return objectExports[decl.id.name];
    }
  }

  return null;
}; // Remove render function when it matches the global render function in react
// export default { component: Cat };
// export const A = (args) => <Cat {...args} />;


var isReactGlobalRenderFn = function (csf, storyFn) {
  var _csf$_meta;

  if ((_csf$_meta = csf._meta) !== null && _csf$_meta !== void 0 && _csf$_meta.component && t.isArrowFunctionExpression(storyFn) && storyFn.params.length === 1 && t.isJSXElement(storyFn.body)) {
    var openingElement = storyFn.body.openingElement;

    if (openingElement.selfClosing && t.isJSXIdentifier(openingElement.name) && openingElement.attributes.length === 1) {
      var attr = openingElement.attributes[0];
      var param = storyFn.params[0];

      if (t.isJSXSpreadAttribute(attr) && t.isIdentifier(attr.argument) && t.isIdentifier(param) && param.name === attr.argument.name && csf._meta.component === openingElement.name.name) {
        return true;
      }
    }
  }

  return false;
}; // A simple CSF story is a no-arg story without any extra annotations (params, args, etc.)


var isSimpleCSFStory = function (init, annotations) {
  return annotations.length === 0 && t.isArrowFunctionExpression(init) && init.params.length === 0;
};

function transform({
  source: source
}, api, options) {
  var makeTitle = function (userTitle) {
    return userTitle || 'FIXME';
  };

  var csf = loadCsf(source, {
    makeTitle: makeTitle
  });

  try {
    csf.parse();
  } catch (err) {
    logger.log(`Error ${err}, skipping`);
    return source;
  }

  var objectExports = {};
  Object.entries(csf._storyExports).forEach(function ([key, decl]) {
    var annotations = Object.entries(csf._storyAnnotations[key]).map(function ([annotation, val]) {
      return t.objectProperty(t.identifier(_rename(annotation)), val);
    });

    if (t.isVariableDeclarator(decl)) {
      var init = decl.init,
          id = decl.id; // only replace arrow function expressions && template
      // ignore no-arg stories without annotations

      var template = getTemplateBindVariable(init);

      if (!t.isArrowFunctionExpression(init) && !template || isSimpleCSFStory(init, annotations)) {
        return;
      } // Remove the render function when we can hoist the template
      // const Template = (args) => <Cat {...args} />;
      // export const A = Template.bind({});


      var storyFn = template && csf._templates[template];
      if (!storyFn) storyFn = init;
      var keyId = t.identifier(key); // @ts-ignore

      var typeAnnotation = id.typeAnnotation;

      if (typeAnnotation) {
        keyId.typeAnnotation = typeAnnotation;
      }

      var renderAnnotation = isReactGlobalRenderFn(csf, storyFn) ? [] : [t.objectProperty(t.identifier('render'), storyFn)];
      objectExports[key] = t.exportNamedDeclaration(t.variableDeclaration('const', [t.variableDeclarator(keyId, t.objectExpression([...renderAnnotation, ...annotations]))]));
    }
  });

  var updatedBody = csf._ast.program.body.reduce(function (acc, stmt) {
    // remove story annotations & template declarations
    if (isStoryAnnotation(stmt, objectExports) || isTemplateDeclaration(stmt, csf._templates)) {
      return acc;
    } // replace story exports with new object exports


    var newExport = getNewExport(stmt, objectExports);

    if (newExport) {
      acc.push(newExport);
      return acc;
    } // include unknown statements


    acc.push(stmt);
    return acc;
  }, []);

  csf._ast.program.body = updatedBody;
  var output = formatCsf(csf);
  var prettierConfig = prettier.resolveConfig.sync('.', {
    editorconfig: true
  }) || {
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    singleQuote: true
  };
  return prettier.format(output, _objectSpread(_objectSpread({}, prettierConfig), {}, {
    parser: jscodeshiftToPrettierParser(options === null || options === void 0 ? void 0 : options.parser)
  }));
}

export default transform;