"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _ParseOp = require("./ParseOp");

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

/**
 * Creates a new Relation for the given parent object and key. This
 * constructor should rarely be used directly, but rather created by
 * Parse.Object.relation.
 *
 * <p>
 * A class that is used to access all of the children of a many-to-many
 * relationship.  Each instance of Parse.Relation is associated with a
 * particular parent object and key.
 * </p>
 *
 * @alias Parse.Relation
 */


var ParseRelation = /*#__PURE__*/function () {
  /**
   * @param {Parse.Object} parent The parent of this relation.
   * @param {string} key The key for this relation on the parent.
   */
  function ParseRelation(parent
  /*: ?ParseObject*/
  , key
  /*: ?string*/
  ) {
    (0, _classCallCheck2.default)(this, ParseRelation);
    (0, _defineProperty2.default)(this, "parent", void 0);
    (0, _defineProperty2.default)(this, "key", void 0);
    (0, _defineProperty2.default)(this, "targetClassName", void 0);
    this.parent = parent;
    this.key = key;
    this.targetClassName = null;
  }
  /*
   * Makes sure that this relation has the right parent and key.
   */


  (0, _createClass2.default)(ParseRelation, [{
    key: "_ensureParentAndKey",
    value: function (parent
    /*: ParseObject*/
    , key
    /*: string*/
    ) {
      this.key = this.key || key;

      if (this.key !== key) {
        throw new Error('Internal Error. Relation retrieved from two different keys.');
      }

      if (this.parent) {
        if (this.parent.className !== parent.className) {
          throw new Error('Internal Error. Relation retrieved from two different Objects.');
        }

        if (this.parent.id) {
          if (this.parent.id !== parent.id) {
            throw new Error('Internal Error. Relation retrieved from two different Objects.');
          }
        } else if (parent.id) {
          this.parent = parent;
        }
      } else {
        this.parent = parent;
      }
    }
    /**
     * Adds a Parse.Object or an array of Parse.Objects to the relation.
     *
     * @param {(Parse.Object|Array)} objects The item or items to add.
     * @returns {Parse.Object} The parent of the relation.
     */

  }, {
    key: "add",
    value: function (objects
    /*: ParseObject | Array<ParseObject | string>*/
    )
    /*: ParseObject*/
    {
      if (!(0, _isArray.default)(objects)) {
        objects = [objects];
      }

      var change = new _ParseOp.RelationOp(objects, []);
      var parent = this.parent;

      if (!parent) {
        throw new Error('Cannot add to a Relation without a parent');
      }

      if (objects.length === 0) {
        return parent;
      }

      parent.set(this.key, change);
      this.targetClassName = change._targetClassName;
      return parent;
    }
    /**
     * Removes a Parse.Object or an array of Parse.Objects from this relation.
     *
     * @param {(Parse.Object|Array)} objects The item or items to remove.
     */

  }, {
    key: "remove",
    value: function (objects
    /*: ParseObject | Array<ParseObject | string>*/
    ) {
      if (!(0, _isArray.default)(objects)) {
        objects = [objects];
      }

      var change = new _ParseOp.RelationOp([], objects);

      if (!this.parent) {
        throw new Error('Cannot remove from a Relation without a parent');
      }

      if (objects.length === 0) {
        return;
      }

      this.parent.set(this.key, change);
      this.targetClassName = change._targetClassName;
    }
    /**
     * Returns a JSON version of the object suitable for saving to disk.
     *
     * @returns {object} JSON representation of Relation
     */

  }, {
    key: "toJSON",
    value: function ()
    /*: { __type: 'Relation', className: ?string }*/
    {
      return {
        __type: 'Relation',
        className: this.targetClassName
      };
    }
    /**
     * Returns a Parse.Query that is limited to objects in this
     * relation.
     *
     * @returns {Parse.Query} Relation Query
     */

  }, {
    key: "query",
    value: function query()
    /*: ParseQuery*/
    {
      var query;
      var parent = this.parent;

      if (!parent) {
        throw new Error('Cannot construct a query for a Relation without a parent');
      }

      if (!this.targetClassName) {
        query = new _ParseQuery.default(parent.className);
        query._extraOptions.redirectClassNameForKey = this.key;
      } else {
        query = new _ParseQuery.default(this.targetClassName);
      }

      query._addCondition('$relatedTo', 'object', {
        __type: 'Pointer',
        className: parent.className,
        objectId: parent.id
      });

      query._addCondition('$relatedTo', 'key', this.key);

      return query;
    }
  }]);
  return ParseRelation;
}();

var _default = ParseRelation;
exports.default = _default;