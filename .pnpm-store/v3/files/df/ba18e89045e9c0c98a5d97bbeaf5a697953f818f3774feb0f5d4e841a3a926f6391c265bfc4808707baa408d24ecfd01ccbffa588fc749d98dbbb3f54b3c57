"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.UnsetOp = exports.SetOp = exports.RemoveOp = exports.RelationOp = exports.Op = exports.IncrementOp = exports.AddUniqueOp = exports.AddOp = void 0;
exports.opFromJSON = opFromJSON;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _splice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/splice"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _arrayContainsObject = _interopRequireDefault(require("./arrayContainsObject"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

var _unique = _interopRequireDefault(require("./unique"));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function opFromJSON(json
/*: { [key: string]: any }*/
)
/*: ?Op*/
{
  if (!json || !json.__op) {
    return null;
  }

  switch (json.__op) {
    case 'Delete':
      return new UnsetOp();

    case 'Increment':
      return new IncrementOp(json.amount);

    case 'Add':
      return new AddOp((0, _decode.default)(json.objects));

    case 'AddUnique':
      return new AddUniqueOp((0, _decode.default)(json.objects));

    case 'Remove':
      return new RemoveOp((0, _decode.default)(json.objects));

    case 'AddRelation':
      {
        var toAdd = (0, _decode.default)(json.objects);

        if (!(0, _isArray.default)(toAdd)) {
          return new RelationOp([], []);
        }

        return new RelationOp(toAdd, []);
      }

    case 'RemoveRelation':
      {
        var toRemove = (0, _decode.default)(json.objects);

        if (!(0, _isArray.default)(toRemove)) {
          return new RelationOp([], []);
        }

        return new RelationOp([], toRemove);
      }

    case 'Batch':
      {
        var _toAdd = [];
        var _toRemove = [];

        for (var i = 0; i < json.ops.length; i++) {
          if (json.ops[i].__op === 'AddRelation') {
            _toAdd = (0, _concat.default)(_toAdd).call(_toAdd, (0, _decode.default)(json.ops[i].objects));
          } else if (json.ops[i].__op === 'RemoveRelation') {
            _toRemove = (0, _concat.default)(_toRemove).call(_toRemove, (0, _decode.default)(json.ops[i].objects));
          }
        }

        return new RelationOp(_toAdd, _toRemove);
      }

    default:
      return null;
  }
}

var Op = /*#__PURE__*/function () {
  function Op() {
    (0, _classCallCheck2.default)(this, Op);
  }

  (0, _createClass2.default)(Op, [{
    key: "applyTo",
    value: // Empty parent class
    function ()
    /*: mixed*/
    {}
    /* eslint-disable-line no-unused-vars */

  }, {
    key: "mergeWith",
    value: function ()
    /*: ?Op*/
    {}
    /* eslint-disable-line no-unused-vars */

  }, {
    key: "toJSON",
    value: function ()
    /*: mixed*/
    {}
  }]);
  return Op;
}();

exports.Op = Op;

var SetOp = /*#__PURE__*/function (_Op) {
  (0, _inherits2.default)(SetOp, _Op);

  var _super = _createSuper(SetOp);

  function SetOp(value
  /*: mixed*/
  ) {
    var _this;

    (0, _classCallCheck2.default)(this, SetOp);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_value", void 0);
    _this._value = value;
    return _this;
  }

  (0, _createClass2.default)(SetOp, [{
    key: "applyTo",
    value: function ()
    /*: mixed*/
    {
      return this._value;
    }
  }, {
    key: "mergeWith",
    value: function ()
    /*: SetOp*/
    {
      return new SetOp(this._value);
    }
  }, {
    key: "toJSON",
    value: function (offline
    /*:: ?: boolean*/
    ) {
      return (0, _encode.default)(this._value, false, true, undefined, offline);
    }
  }]);
  return SetOp;
}(Op);

exports.SetOp = SetOp;

var UnsetOp = /*#__PURE__*/function (_Op2) {
  (0, _inherits2.default)(UnsetOp, _Op2);

  var _super2 = _createSuper(UnsetOp);

  function UnsetOp() {
    (0, _classCallCheck2.default)(this, UnsetOp);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(UnsetOp, [{
    key: "applyTo",
    value: function () {
      return undefined;
    }
  }, {
    key: "mergeWith",
    value: function ()
    /*: UnsetOp*/
    {
      return new UnsetOp();
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op: string }*/
    {
      return {
        __op: 'Delete'
      };
    }
  }]);
  return UnsetOp;
}(Op);

exports.UnsetOp = UnsetOp;

var IncrementOp = /*#__PURE__*/function (_Op3) {
  (0, _inherits2.default)(IncrementOp, _Op3);

  var _super3 = _createSuper(IncrementOp);

  function IncrementOp(amount
  /*: number*/
  ) {
    var _this2;

    (0, _classCallCheck2.default)(this, IncrementOp);
    _this2 = _super3.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "_amount", void 0);

    if (typeof amount !== 'number') {
      throw new TypeError('Increment Op must be initialized with a numeric amount.');
    }

    _this2._amount = amount;
    return _this2;
  }

  (0, _createClass2.default)(IncrementOp, [{
    key: "applyTo",
    value: function (value
    /*: ?mixed*/
    )
    /*: number*/
    {
      if (typeof value === 'undefined') {
        return this._amount;
      }

      if (typeof value !== 'number') {
        throw new TypeError('Cannot increment a non-numeric value.');
      }

      return this._amount + value;
    }
  }, {
    key: "mergeWith",
    value: function (previous
    /*: Op*/
    )
    /*: Op*/
    {
      if (!previous) {
        return this;
      }

      if (previous instanceof SetOp) {
        return new SetOp(this.applyTo(previous._value));
      }

      if (previous instanceof UnsetOp) {
        return new SetOp(this._amount);
      }

      if (previous instanceof IncrementOp) {
        return new IncrementOp(this.applyTo(previous._amount));
      }

      throw new Error('Cannot merge Increment Op with the previous Op');
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op: string, amount: number }*/
    {
      return {
        __op: 'Increment',
        amount: this._amount
      };
    }
  }]);
  return IncrementOp;
}(Op);

exports.IncrementOp = IncrementOp;

var AddOp = /*#__PURE__*/function (_Op4) {
  (0, _inherits2.default)(AddOp, _Op4);

  var _super4 = _createSuper(AddOp);

  function AddOp(value
  /*: mixed | Array<mixed>*/
  ) {
    var _this3;

    (0, _classCallCheck2.default)(this, AddOp);
    _this3 = _super4.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this3), "_value", void 0);
    _this3._value = (0, _isArray.default)(value) ? value : [value];
    return _this3;
  }

  (0, _createClass2.default)(AddOp, [{
    key: "applyTo",
    value: function (value
    /*: mixed*/
    )
    /*: Array<mixed>*/
    {
      if (value == null) {
        return this._value;
      }

      if ((0, _isArray.default)(value)) {
        return (0, _concat.default)(value).call(value, this._value);
      }

      throw new Error('Cannot add elements to a non-array value');
    }
  }, {
    key: "mergeWith",
    value: function (previous
    /*: Op*/
    )
    /*: Op*/
    {
      if (!previous) {
        return this;
      }

      if (previous instanceof SetOp) {
        return new SetOp(this.applyTo(previous._value));
      }

      if (previous instanceof UnsetOp) {
        return new SetOp(this._value);
      }

      if (previous instanceof AddOp) {
        return new AddOp(this.applyTo(previous._value));
      }

      throw new Error('Cannot merge Add Op with the previous Op');
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op: string, objects: mixed }*/
    {
      return {
        __op: 'Add',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return AddOp;
}(Op);

exports.AddOp = AddOp;

var AddUniqueOp = /*#__PURE__*/function (_Op5) {
  (0, _inherits2.default)(AddUniqueOp, _Op5);

  var _super5 = _createSuper(AddUniqueOp);

  function AddUniqueOp(value
  /*: mixed | Array<mixed>*/
  ) {
    var _this4;

    (0, _classCallCheck2.default)(this, AddUniqueOp);
    _this4 = _super5.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "_value", void 0);
    _this4._value = (0, _unique.default)((0, _isArray.default)(value) ? value : [value]);
    return _this4;
  }

  (0, _createClass2.default)(AddUniqueOp, [{
    key: "applyTo",
    value: function (value
    /*: mixed | Array<mixed>*/
    )
    /*: Array<mixed>*/
    {
      if (value == null) {
        return this._value || [];
      }

      if ((0, _isArray.default)(value)) {
        var _context;

        var toAdd = [];
        (0, _forEach.default)(_context = this._value).call(_context, function (v) {
          if (v instanceof _ParseObject.default) {
            if (!(0, _arrayContainsObject.default)(value, v)) {
              toAdd.push(v);
            }
          } else {
            if ((0, _indexOf.default)(value).call(value, v) < 0) {
              toAdd.push(v);
            }
          }
        });
        return (0, _concat.default)(value).call(value, toAdd);
      }

      throw new Error('Cannot add elements to a non-array value');
    }
  }, {
    key: "mergeWith",
    value: function (previous
    /*: Op*/
    )
    /*: Op*/
    {
      if (!previous) {
        return this;
      }

      if (previous instanceof SetOp) {
        return new SetOp(this.applyTo(previous._value));
      }

      if (previous instanceof UnsetOp) {
        return new SetOp(this._value);
      }

      if (previous instanceof AddUniqueOp) {
        return new AddUniqueOp(this.applyTo(previous._value));
      }

      throw new Error('Cannot merge AddUnique Op with the previous Op');
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op: string, objects: mixed }*/
    {
      return {
        __op: 'AddUnique',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return AddUniqueOp;
}(Op);

exports.AddUniqueOp = AddUniqueOp;

var RemoveOp = /*#__PURE__*/function (_Op6) {
  (0, _inherits2.default)(RemoveOp, _Op6);

  var _super6 = _createSuper(RemoveOp);

  function RemoveOp(value
  /*: mixed | Array<mixed>*/
  ) {
    var _this5;

    (0, _classCallCheck2.default)(this, RemoveOp);
    _this5 = _super6.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this5), "_value", void 0);
    _this5._value = (0, _unique.default)((0, _isArray.default)(value) ? value : [value]);
    return _this5;
  }

  (0, _createClass2.default)(RemoveOp, [{
    key: "applyTo",
    value: function (value
    /*: mixed | Array<mixed>*/
    )
    /*: Array<mixed>*/
    {
      if (value == null) {
        return [];
      }

      if ((0, _isArray.default)(value)) {
        // var i = value.indexOf(this._value);
        var removed = (0, _concat.default)(value).call(value, []);

        for (var i = 0; i < this._value.length; i++) {
          var index = (0, _indexOf.default)(removed).call(removed, this._value[i]);

          while (index > -1) {
            (0, _splice.default)(removed).call(removed, index, 1);
            index = (0, _indexOf.default)(removed).call(removed, this._value[i]);
          }

          if (this._value[i] instanceof _ParseObject.default && this._value[i].id) {
            for (var j = 0; j < removed.length; j++) {
              if (removed[j] instanceof _ParseObject.default && this._value[i].id === removed[j].id) {
                (0, _splice.default)(removed).call(removed, j, 1);
                j--;
              }
            }
          }
        }

        return removed;
      }

      throw new Error('Cannot remove elements from a non-array value');
    }
  }, {
    key: "mergeWith",
    value: function (previous
    /*: Op*/
    )
    /*: Op*/
    {
      if (!previous) {
        return this;
      }

      if (previous instanceof SetOp) {
        return new SetOp(this.applyTo(previous._value));
      }

      if (previous instanceof UnsetOp) {
        return new UnsetOp();
      }

      if (previous instanceof RemoveOp) {
        var _context2;

        var uniques = (0, _concat.default)(_context2 = previous._value).call(_context2, []);

        for (var i = 0; i < this._value.length; i++) {
          if (this._value[i] instanceof _ParseObject.default) {
            if (!(0, _arrayContainsObject.default)(uniques, this._value[i])) {
              uniques.push(this._value[i]);
            }
          } else {
            if ((0, _indexOf.default)(uniques).call(uniques, this._value[i]) < 0) {
              uniques.push(this._value[i]);
            }
          }
        }

        return new RemoveOp(uniques);
      }

      throw new Error('Cannot merge Remove Op with the previous Op');
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op: string, objects: mixed }*/
    {
      return {
        __op: 'Remove',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return RemoveOp;
}(Op);

exports.RemoveOp = RemoveOp;

var RelationOp = /*#__PURE__*/function (_Op7) {
  (0, _inherits2.default)(RelationOp, _Op7);

  var _super7 = _createSuper(RelationOp);

  function RelationOp(adds
  /*: Array<ParseObject | string>*/
  , removes
  /*: Array<ParseObject | string>*/
  ) {
    var _this6;

    (0, _classCallCheck2.default)(this, RelationOp);
    _this6 = _super7.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this6), "_targetClassName", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this6), "relationsToAdd", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this6), "relationsToRemove", void 0);
    _this6._targetClassName = null;

    if ((0, _isArray.default)(adds)) {
      _this6.relationsToAdd = (0, _unique.default)((0, _map.default)(adds).call(adds, _this6._extractId, (0, _assertThisInitialized2.default)(_this6)));
    }

    if ((0, _isArray.default)(removes)) {
      _this6.relationsToRemove = (0, _unique.default)((0, _map.default)(removes).call(removes, _this6._extractId, (0, _assertThisInitialized2.default)(_this6)));
    }

    return _this6;
  }

  (0, _createClass2.default)(RelationOp, [{
    key: "_extractId",
    value: function (obj
    /*: string | ParseObject*/
    )
    /*: string*/
    {
      if (typeof obj === 'string') {
        return obj;
      }

      if (!obj.id) {
        throw new Error('You cannot add or remove an unsaved Parse Object from a relation');
      }

      if (!this._targetClassName) {
        this._targetClassName = obj.className;
      }

      if (this._targetClassName !== obj.className) {
        var _context3;

        throw new Error((0, _concat.default)(_context3 = "Tried to create a Relation with 2 different object types: ".concat(this._targetClassName, " and ")).call(_context3, obj.className, "."));
      }

      return obj.id;
    }
  }, {
    key: "applyTo",
    value: function (value
    /*: mixed*/
    , object
    /*:: ?: { className: string, id: ?string }*/
    , key
    /*:: ?: string*/
    )
    /*: ?ParseRelation*/
    {
      if (!value) {
        var _context4;

        if (!object || !key) {
          throw new Error('Cannot apply a RelationOp without either a previous value, or an object and a key');
        }

        var parent = new _ParseObject.default(object.className);

        if (object.id && (0, _indexOf.default)(_context4 = object.id).call(_context4, 'local') === 0) {
          parent._localId = object.id;
        } else if (object.id) {
          parent.id = object.id;
        }

        var relation = new _ParseRelation.default(parent, key);
        relation.targetClassName = this._targetClassName;
        return relation;
      }

      if (value instanceof _ParseRelation.default) {
        if (this._targetClassName) {
          if (value.targetClassName) {
            if (this._targetClassName !== value.targetClassName) {
              var _context5;

              throw new Error((0, _concat.default)(_context5 = "Related object must be a ".concat(value.targetClassName, ", but a ")).call(_context5, this._targetClassName, " was passed in."));
            }
          } else {
            value.targetClassName = this._targetClassName;
          }
        }

        return value;
      }

      throw new Error('Relation cannot be applied to a non-relation field');
    }
  }, {
    key: "mergeWith",
    value: function (previous
    /*: Op*/
    )
    /*: Op*/
    {
      if (!previous) {
        return this;
      }

      if (previous instanceof UnsetOp) {
        throw new Error('You cannot modify a relation after deleting it.');
      }

      if (previous instanceof SetOp && previous._value instanceof _ParseRelation.default) {
        return this;
      }

      if (previous instanceof RelationOp) {
        var _context7, _context8, _context9, _context10, _context11, _context12;

        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
          var _context6;

          throw new Error((0, _concat.default)(_context6 = "Related object must be of class ".concat(previous._targetClassName, ", but ")).call(_context6, this._targetClassName || 'null', " was passed in."));
        }

        var newAdd = (0, _concat.default)(_context7 = previous.relationsToAdd).call(_context7, []);
        (0, _forEach.default)(_context8 = this.relationsToRemove).call(_context8, function (r) {
          var index = (0, _indexOf.default)(newAdd).call(newAdd, r);

          if (index > -1) {
            (0, _splice.default)(newAdd).call(newAdd, index, 1);
          }
        });
        (0, _forEach.default)(_context9 = this.relationsToAdd).call(_context9, function (r) {
          var index = (0, _indexOf.default)(newAdd).call(newAdd, r);

          if (index < 0) {
            newAdd.push(r);
          }
        });
        var newRemove = (0, _concat.default)(_context10 = previous.relationsToRemove).call(_context10, []);
        (0, _forEach.default)(_context11 = this.relationsToAdd).call(_context11, function (r) {
          var index = (0, _indexOf.default)(newRemove).call(newRemove, r);

          if (index > -1) {
            (0, _splice.default)(newRemove).call(newRemove, index, 1);
          }
        });
        (0, _forEach.default)(_context12 = this.relationsToRemove).call(_context12, function (r) {
          var index = (0, _indexOf.default)(newRemove).call(newRemove, r);

          if (index < 0) {
            newRemove.push(r);
          }
        });
        var newRelation = new RelationOp(newAdd, newRemove);
        newRelation._targetClassName = this._targetClassName;
        return newRelation;
      }

      throw new Error('Cannot merge Relation Op with the previous Op');
    }
  }, {
    key: "toJSON",
    value: function ()
    /*: { __op?: string, objects?: mixed, ops?: mixed }*/
    {
      var _this7 = this;

      var idToPointer = function (id) {
        return {
          __type: 'Pointer',
          className: _this7._targetClassName,
          objectId: id
        };
      };

      var adds = null;
      var removes = null;
      var pointers = null;

      if (this.relationsToAdd.length > 0) {
        var _context13;

        pointers = (0, _map.default)(_context13 = this.relationsToAdd).call(_context13, idToPointer);
        adds = {
          __op: 'AddRelation',
          objects: pointers
        };
      }

      if (this.relationsToRemove.length > 0) {
        var _context14;

        pointers = (0, _map.default)(_context14 = this.relationsToRemove).call(_context14, idToPointer);
        removes = {
          __op: 'RemoveRelation',
          objects: pointers
        };
      }

      if (adds && removes) {
        return {
          __op: 'Batch',
          ops: [adds, removes]
        };
      }

      return adds || removes || {};
    }
  }]);
  return RelationOp;
}(Op);

exports.RelationOp = RelationOp;