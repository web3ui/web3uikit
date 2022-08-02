var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsetOp = exports.SetOp = exports.RemoveOp = exports.RelationOp = exports.Op = exports.IncrementOp = exports.AddUniqueOp = exports.AddOp = void 0;
exports.opFromJSON = opFromJSON;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function opFromJSON(json) {
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

        if (!Array.isArray(toAdd)) {
          return new RelationOp([], []);
        }

        return new RelationOp(toAdd, []);
      }

    case 'RemoveRelation':
      {
        var toRemove = (0, _decode.default)(json.objects);

        if (!Array.isArray(toRemove)) {
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
            _toAdd = _toAdd.concat((0, _decode.default)(json.ops[i].objects));
          } else if (json.ops[i].__op === 'RemoveRelation') {
            _toRemove = _toRemove.concat((0, _decode.default)(json.ops[i].objects));
          }
        }

        return new RelationOp(_toAdd, _toRemove);
      }

    default:
      return null;
  }
}

var Op = function () {
  function Op() {
    (0, _classCallCheck2.default)(this, Op);
  }

  (0, _createClass2.default)(Op, [{
    key: "applyTo",
    value: function () {}
  }, {
    key: "mergeWith",
    value: function () {}
  }, {
    key: "toJSON",
    value: function () {}
  }]);
  return Op;
}();

exports.Op = Op;

var SetOp = function (_Op) {
  (0, _inherits2.default)(SetOp, _Op);

  var _super = _createSuper(SetOp);

  function SetOp(value) {
    var _this;

    (0, _classCallCheck2.default)(this, SetOp);
    _this = _super.call(this);
    _this._value = value;
    return _this;
  }

  (0, _createClass2.default)(SetOp, [{
    key: "applyTo",
    value: function () {
      return this._value;
    }
  }, {
    key: "mergeWith",
    value: function () {
      return new SetOp(this._value);
    }
  }, {
    key: "toJSON",
    value: function (offline) {
      return (0, _encode.default)(this._value, false, true, undefined, offline);
    }
  }]);
  return SetOp;
}(Op);

exports.SetOp = SetOp;

var UnsetOp = function (_Op2) {
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
    value: function () {
      return new UnsetOp();
    }
  }, {
    key: "toJSON",
    value: function () {
      return {
        __op: 'Delete'
      };
    }
  }]);
  return UnsetOp;
}(Op);

exports.UnsetOp = UnsetOp;

var IncrementOp = function (_Op3) {
  (0, _inherits2.default)(IncrementOp, _Op3);

  var _super3 = _createSuper(IncrementOp);

  function IncrementOp(amount) {
    var _this2;

    (0, _classCallCheck2.default)(this, IncrementOp);
    _this2 = _super3.call(this);

    if (typeof amount !== 'number') {
      throw new TypeError('Increment Op must be initialized with a numeric amount.');
    }

    _this2._amount = amount;
    return _this2;
  }

  (0, _createClass2.default)(IncrementOp, [{
    key: "applyTo",
    value: function (value) {
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
    value: function (previous) {
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
    value: function () {
      return {
        __op: 'Increment',
        amount: this._amount
      };
    }
  }]);
  return IncrementOp;
}(Op);

exports.IncrementOp = IncrementOp;

var AddOp = function (_Op4) {
  (0, _inherits2.default)(AddOp, _Op4);

  var _super4 = _createSuper(AddOp);

  function AddOp(value) {
    var _this3;

    (0, _classCallCheck2.default)(this, AddOp);
    _this3 = _super4.call(this);
    _this3._value = Array.isArray(value) ? value : [value];
    return _this3;
  }

  (0, _createClass2.default)(AddOp, [{
    key: "applyTo",
    value: function (value) {
      if (value == null) {
        return this._value;
      }

      if (Array.isArray(value)) {
        return value.concat(this._value);
      }

      throw new Error('Cannot add elements to a non-array value');
    }
  }, {
    key: "mergeWith",
    value: function (previous) {
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
    value: function () {
      return {
        __op: 'Add',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return AddOp;
}(Op);

exports.AddOp = AddOp;

var AddUniqueOp = function (_Op5) {
  (0, _inherits2.default)(AddUniqueOp, _Op5);

  var _super5 = _createSuper(AddUniqueOp);

  function AddUniqueOp(value) {
    var _this4;

    (0, _classCallCheck2.default)(this, AddUniqueOp);
    _this4 = _super5.call(this);
    _this4._value = (0, _unique.default)(Array.isArray(value) ? value : [value]);
    return _this4;
  }

  (0, _createClass2.default)(AddUniqueOp, [{
    key: "applyTo",
    value: function (value) {
      if (value == null) {
        return this._value || [];
      }

      if (Array.isArray(value)) {
        var toAdd = [];

        this._value.forEach(function (v) {
          if (v instanceof _ParseObject.default) {
            if (!(0, _arrayContainsObject.default)(value, v)) {
              toAdd.push(v);
            }
          } else {
            if (value.indexOf(v) < 0) {
              toAdd.push(v);
            }
          }
        });

        return value.concat(toAdd);
      }

      throw new Error('Cannot add elements to a non-array value');
    }
  }, {
    key: "mergeWith",
    value: function (previous) {
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
    value: function () {
      return {
        __op: 'AddUnique',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return AddUniqueOp;
}(Op);

exports.AddUniqueOp = AddUniqueOp;

var RemoveOp = function (_Op6) {
  (0, _inherits2.default)(RemoveOp, _Op6);

  var _super6 = _createSuper(RemoveOp);

  function RemoveOp(value) {
    var _this5;

    (0, _classCallCheck2.default)(this, RemoveOp);
    _this5 = _super6.call(this);
    _this5._value = (0, _unique.default)(Array.isArray(value) ? value : [value]);
    return _this5;
  }

  (0, _createClass2.default)(RemoveOp, [{
    key: "applyTo",
    value: function (value) {
      if (value == null) {
        return [];
      }

      if (Array.isArray(value)) {
        var removed = value.concat([]);

        for (var i = 0; i < this._value.length; i++) {
          var index = removed.indexOf(this._value[i]);

          while (index > -1) {
            removed.splice(index, 1);
            index = removed.indexOf(this._value[i]);
          }

          if (this._value[i] instanceof _ParseObject.default && this._value[i].id) {
            for (var j = 0; j < removed.length; j++) {
              if (removed[j] instanceof _ParseObject.default && this._value[i].id === removed[j].id) {
                removed.splice(j, 1);
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
    value: function (previous) {
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
        var uniques = previous._value.concat([]);

        for (var i = 0; i < this._value.length; i++) {
          if (this._value[i] instanceof _ParseObject.default) {
            if (!(0, _arrayContainsObject.default)(uniques, this._value[i])) {
              uniques.push(this._value[i]);
            }
          } else {
            if (uniques.indexOf(this._value[i]) < 0) {
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
    value: function () {
      return {
        __op: 'Remove',
        objects: (0, _encode.default)(this._value, false, true)
      };
    }
  }]);
  return RemoveOp;
}(Op);

exports.RemoveOp = RemoveOp;

var RelationOp = function (_Op7) {
  (0, _inherits2.default)(RelationOp, _Op7);

  var _super7 = _createSuper(RelationOp);

  function RelationOp(adds, removes) {
    var _this6;

    (0, _classCallCheck2.default)(this, RelationOp);
    _this6 = _super7.call(this);
    _this6._targetClassName = null;

    if (Array.isArray(adds)) {
      _this6.relationsToAdd = (0, _unique.default)(adds.map(_this6._extractId, (0, _assertThisInitialized2.default)(_this6)));
    }

    if (Array.isArray(removes)) {
      _this6.relationsToRemove = (0, _unique.default)(removes.map(_this6._extractId, (0, _assertThisInitialized2.default)(_this6)));
    }

    return _this6;
  }

  (0, _createClass2.default)(RelationOp, [{
    key: "_extractId",
    value: function (obj) {
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
        throw new Error("Tried to create a Relation with 2 different object types: " + this._targetClassName + " and " + obj.className + ".");
      }

      return obj.id;
    }
  }, {
    key: "applyTo",
    value: function (value, object, key) {
      if (!value) {
        if (!object || !key) {
          throw new Error('Cannot apply a RelationOp without either a previous value, or an object and a key');
        }

        var parent = new _ParseObject.default(object.className);

        if (object.id && object.id.indexOf('local') === 0) {
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
              throw new Error("Related object must be a " + value.targetClassName + ", but a " + this._targetClassName + " was passed in.");
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
    value: function (previous) {
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
        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
          throw new Error("Related object must be of class " + previous._targetClassName + ", but " + (this._targetClassName || 'null') + " was passed in.");
        }

        var newAdd = previous.relationsToAdd.concat([]);
        this.relationsToRemove.forEach(function (r) {
          var index = newAdd.indexOf(r);

          if (index > -1) {
            newAdd.splice(index, 1);
          }
        });
        this.relationsToAdd.forEach(function (r) {
          var index = newAdd.indexOf(r);

          if (index < 0) {
            newAdd.push(r);
          }
        });
        var newRemove = previous.relationsToRemove.concat([]);
        this.relationsToAdd.forEach(function (r) {
          var index = newRemove.indexOf(r);

          if (index > -1) {
            newRemove.splice(index, 1);
          }
        });
        this.relationsToRemove.forEach(function (r) {
          var index = newRemove.indexOf(r);

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
    value: function () {
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
        pointers = this.relationsToAdd.map(idToPointer);
        adds = {
          __op: 'AddRelation',
          objects: pointers
        };
      }

      if (this.relationsToRemove.length > 0) {
        pointers = this.relationsToRemove.map(idToPointer);
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