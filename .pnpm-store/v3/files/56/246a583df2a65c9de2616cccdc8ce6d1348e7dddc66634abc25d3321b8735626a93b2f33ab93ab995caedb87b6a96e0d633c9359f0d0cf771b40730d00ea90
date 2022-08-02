"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

/**
 * Adds a `component` parameter for each storiesOf(...) call.
 *
 * For example:
 *
 * input { Button } from './Button';
 * storiesOf('Button', module).add('story', () => <Button label="The Button" />);
 *
 * Becomes:
 *
 * input { Button } from './Button';
 * storiesOf('Button', module)
 *   .addParameters({ component: Button })
 *   .add('story', () => <Button label="The Button" />);
 *
 * Heuristics:
 * - The storiesOf "kind" name must be Button
 * - Button must be imported in the file
 */
function transformer(file, api) {
  var j = api.jscodeshift;
  var root = j(file.source); //  Create a dictionary whose keys are all the named imports in the file.
  //  For instance:
  //
  //  import foo from 'foo';
  //  import { bar, baz } from 'zoo';
  //
  //  => { foo: true, bar: true, baz: true }

  var importMap = {};
  root.find(j.ImportDeclaration).forEach(function (imp) {
    return imp.node.specifiers.forEach(function (spec) {
      importMap[spec.local.name] = true;
    });
  });

  function getLeafName(string) {
    var parts = string.split(/\/|\.|\|/);
    return parts[parts.length - 1];
  }

  function addComponentParameter(call) {
    var node = call.node;
    var leafName = getLeafName(node.arguments[0].value);
    return j.callExpression(j.memberExpression(node, j.identifier('addParameters')), [j.objectExpression([j.property('init', j.identifier('component'), j.identifier(leafName))])]);
  }

  var storiesOfCalls = root.find(j.CallExpression).filter(function (call) {
    return call.node.callee.name === 'storiesOf';
  }).filter(function (call) {
    return call.node.arguments.length > 0 && call.node.arguments[0].type === 'Literal';
  }).filter(function (call) {
    var leafName = getLeafName(call.node.arguments[0].value);
    return importMap[leafName];
  }).replaceWith(addComponentParameter);
  return root.toSource();
}