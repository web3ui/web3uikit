"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var getContainingStatement = function (n) {
  if (n.node.type.endsWith('Statement')) {
    return n;
  }

  return getContainingStatement(n.parent);
};
/**
 * Hoist CSF .story annotations
 *
 * For example:
 *
 * ```
 * export const Basic = () => <Button />
 * Basic.story = {
 *   name: 'foo',
 *   parameters: { ... },
 *   decorators = [ ... ],
 * };
 * ```
 *
 * Becomes:
 *
 * ```
 * export const Basic = () => <Button />
 * Basic.storyName = 'foo';
 * Basic.parameters = { ... };
 * Basic.decorators = [ ... ];
 * ```
 */


function transformer(file, api) {
  var j = api.jscodeshift;
  var root = j(file.source);

  var renameKey = function (exp) {
    return exp.type === 'Identifier' && exp.name === 'name' ? j.identifier('storyName') : exp;
  }; // 1. If the program does not have `export default { title: '....' }, skip it


  var defaultExportWithTitle = root.find(j.ExportDefaultDeclaration).filter(function (def) {
    return def.node.declaration.type === 'ObjectExpression' && def.node.declaration.properties.map(function (p) {
      return p.key.name;
    }).includes('title');
  });

  if (defaultExportWithTitle.size() === 0) {
    return root.toSource();
  } // 2. Replace each Foo.story = { x: xVal } with Foo.x = xVal;


  var storyAssignments = root.find(j.AssignmentExpression).filter(function (exp) {
    var _exp$node = exp.node,
        left = _exp$node.left,
        right = _exp$node.right;
    return left.type === 'MemberExpression' && left.object.type === 'Identifier' && left.property.type === 'Identifier' && left.property.name === 'story' && right.type === 'ObjectExpression';
  });
  storyAssignments.forEach(function (exp) {
    var _exp$node2 = exp.node,
        left = _exp$node2.left,
        right = _exp$node2.right;
    right.properties.forEach(function (prop) {
      var stmt = getContainingStatement(exp);
      stmt.insertBefore(j.assignmentStatement('=', j.memberExpression(left.object, renameKey(prop.key)), prop.value));
    });
  }); // 3. Remove the .story annotations

  storyAssignments.remove(); // 4. Replace each Foo.story.x with Foo.x;

  var storyOverrides = root.find(j.AssignmentExpression).filter(function (exp) {
    var left = exp.node.left;
    return left.type === 'MemberExpression' && left.object.type === 'MemberExpression' && left.object.property.type === 'Identifier' && left.object.property.name === 'story' && left.property.type === 'Identifier' // ?? ANNOTATION_FIELDS.includes(right.property.name)
    ;
  });
  storyOverrides.replaceWith(function (exp) {
    var _exp$node3 = exp.node,
        left = _exp$node3.left,
        right = _exp$node3.right;
    return j.assignmentExpression('=', j.memberExpression(left.object.object, renameKey(left.property)), right);
  }); // 4. Render the updated tree

  return root.toSource({
    quote: 'single'
  });
}