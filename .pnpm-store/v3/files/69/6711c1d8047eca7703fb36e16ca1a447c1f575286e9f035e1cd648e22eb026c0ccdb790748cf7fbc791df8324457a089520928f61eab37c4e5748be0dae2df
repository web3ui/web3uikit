var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParseOp = require("./ParseOp");

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var ParseRelation = function () {
  function ParseRelation(parent, key) {
    (0, _classCallCheck2.default)(this, ParseRelation);
    this.parent = parent;
    this.key = key;
    this.targetClassName = null;
  }

  (0, _createClass2.default)(ParseRelation, [{
    key: "_ensureParentAndKey",
    value: function (parent, key) {
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
  }, {
    key: "add",
    value: function (objects) {
      if (!Array.isArray(objects)) {
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
  }, {
    key: "remove",
    value: function (objects) {
      if (!Array.isArray(objects)) {
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
  }, {
    key: "toJSON",
    value: function () {
      return {
        __type: 'Relation',
        className: this.targetClassName
      };
    }
  }, {
    key: "query",
    value: function query() {
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