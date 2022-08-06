"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsetOp = exports.SetOp = exports.RemoveOp = exports.RelationOp = exports.Op = exports.IncrementOp = exports.AddUniqueOp = exports.AddOp = void 0;
exports.opFromJSON = opFromJSON;

var _arrayContainsObject = _interopRequireDefault(require("./arrayContainsObject"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseRelation = _interopRequireDefault(require("./ParseRelation"));

var _unique = _interopRequireDefault(require("./unique"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
        const toAdd = (0, _decode.default)(json.objects);

        if (!Array.isArray(toAdd)) {
          return new RelationOp([], []);
        }

        return new RelationOp(toAdd, []);
      }

    case 'RemoveRelation':
      {
        const toRemove = (0, _decode.default)(json.objects);

        if (!Array.isArray(toRemove)) {
          return new RelationOp([], []);
        }

        return new RelationOp([], toRemove);
      }

    case 'Batch':
      {
        let toAdd = [];
        let toRemove = [];

        for (let i = 0; i < json.ops.length; i++) {
          if (json.ops[i].__op === 'AddRelation') {
            toAdd = toAdd.concat((0, _decode.default)(json.ops[i].objects));
          } else if (json.ops[i].__op === 'RemoveRelation') {
            toRemove = toRemove.concat((0, _decode.default)(json.ops[i].objects));
          }
        }

        return new RelationOp(toAdd, toRemove);
      }

    default:
      return null;
  }
}

class Op {
  // Empty parent class
  applyTo()
  /*: mixed*/
  {}
  /* eslint-disable-line no-unused-vars */


  mergeWith()
  /*: ?Op*/
  {}
  /* eslint-disable-line no-unused-vars */


  toJSON()
  /*: mixed*/
  {}

}

exports.Op = Op;

class SetOp extends Op {
  constructor(value
  /*: mixed*/
  ) {
    super();

    _defineProperty(this, "_value", void 0);

    this._value = value;
  }

  applyTo()
  /*: mixed*/
  {
    return this._value;
  }

  mergeWith()
  /*: SetOp*/
  {
    return new SetOp(this._value);
  }

  toJSON(offline
  /*:: ?: boolean*/
  ) {
    return (0, _encode.default)(this._value, false, true, undefined, offline);
  }

}

exports.SetOp = SetOp;

class UnsetOp extends Op {
  applyTo() {
    return undefined;
  }

  mergeWith()
  /*: UnsetOp*/
  {
    return new UnsetOp();
  }

  toJSON()
  /*: { __op: string }*/
  {
    return {
      __op: 'Delete'
    };
  }

}

exports.UnsetOp = UnsetOp;

class IncrementOp extends Op {
  constructor(amount
  /*: number*/
  ) {
    super();

    _defineProperty(this, "_amount", void 0);

    if (typeof amount !== 'number') {
      throw new TypeError('Increment Op must be initialized with a numeric amount.');
    }

    this._amount = amount;
  }

  applyTo(value
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

  mergeWith(previous
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

  toJSON()
  /*: { __op: string, amount: number }*/
  {
    return {
      __op: 'Increment',
      amount: this._amount
    };
  }

}

exports.IncrementOp = IncrementOp;

class AddOp extends Op {
  constructor(value
  /*: mixed | Array<mixed>*/
  ) {
    super();

    _defineProperty(this, "_value", void 0);

    this._value = Array.isArray(value) ? value : [value];
  }

  applyTo(value
  /*: mixed*/
  )
  /*: Array<mixed>*/
  {
    if (value == null) {
      return this._value;
    }

    if (Array.isArray(value)) {
      return value.concat(this._value);
    }

    throw new Error('Cannot add elements to a non-array value');
  }

  mergeWith(previous
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

  toJSON()
  /*: { __op: string, objects: mixed }*/
  {
    return {
      __op: 'Add',
      objects: (0, _encode.default)(this._value, false, true)
    };
  }

}

exports.AddOp = AddOp;

class AddUniqueOp extends Op {
  constructor(value
  /*: mixed | Array<mixed>*/
  ) {
    super();

    _defineProperty(this, "_value", void 0);

    this._value = (0, _unique.default)(Array.isArray(value) ? value : [value]);
  }

  applyTo(value
  /*: mixed | Array<mixed>*/
  )
  /*: Array<mixed>*/
  {
    if (value == null) {
      return this._value || [];
    }

    if (Array.isArray(value)) {
      const toAdd = [];

      this._value.forEach(v => {
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

  mergeWith(previous
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

  toJSON()
  /*: { __op: string, objects: mixed }*/
  {
    return {
      __op: 'AddUnique',
      objects: (0, _encode.default)(this._value, false, true)
    };
  }

}

exports.AddUniqueOp = AddUniqueOp;

class RemoveOp extends Op {
  constructor(value
  /*: mixed | Array<mixed>*/
  ) {
    super();

    _defineProperty(this, "_value", void 0);

    this._value = (0, _unique.default)(Array.isArray(value) ? value : [value]);
  }

  applyTo(value
  /*: mixed | Array<mixed>*/
  )
  /*: Array<mixed>*/
  {
    if (value == null) {
      return [];
    }

    if (Array.isArray(value)) {
      // var i = value.indexOf(this._value);
      const removed = value.concat([]);

      for (let i = 0; i < this._value.length; i++) {
        let index = removed.indexOf(this._value[i]);

        while (index > -1) {
          removed.splice(index, 1);
          index = removed.indexOf(this._value[i]);
        }

        if (this._value[i] instanceof _ParseObject.default && this._value[i].id) {
          for (let j = 0; j < removed.length; j++) {
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

  mergeWith(previous
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
      const uniques = previous._value.concat([]);

      for (let i = 0; i < this._value.length; i++) {
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

  toJSON()
  /*: { __op: string, objects: mixed }*/
  {
    return {
      __op: 'Remove',
      objects: (0, _encode.default)(this._value, false, true)
    };
  }

}

exports.RemoveOp = RemoveOp;

class RelationOp extends Op {
  constructor(adds
  /*: Array<ParseObject | string>*/
  , removes
  /*: Array<ParseObject | string>*/
  ) {
    super();

    _defineProperty(this, "_targetClassName", void 0);

    _defineProperty(this, "relationsToAdd", void 0);

    _defineProperty(this, "relationsToRemove", void 0);

    this._targetClassName = null;

    if (Array.isArray(adds)) {
      this.relationsToAdd = (0, _unique.default)(adds.map(this._extractId, this));
    }

    if (Array.isArray(removes)) {
      this.relationsToRemove = (0, _unique.default)(removes.map(this._extractId, this));
    }
  }

  _extractId(obj
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
      throw new Error(`Tried to create a Relation with 2 different object types: ${this._targetClassName} and ${obj.className}.`);
    }

    return obj.id;
  }

  applyTo(value
  /*: mixed*/
  , object
  /*:: ?: { className: string, id: ?string }*/
  , key
  /*:: ?: string*/
  )
  /*: ?ParseRelation*/
  {
    if (!value) {
      if (!object || !key) {
        throw new Error('Cannot apply a RelationOp without either a previous value, or an object and a key');
      }

      const parent = new _ParseObject.default(object.className);

      if (object.id && object.id.indexOf('local') === 0) {
        parent._localId = object.id;
      } else if (object.id) {
        parent.id = object.id;
      }

      const relation = new _ParseRelation.default(parent, key);
      relation.targetClassName = this._targetClassName;
      return relation;
    }

    if (value instanceof _ParseRelation.default) {
      if (this._targetClassName) {
        if (value.targetClassName) {
          if (this._targetClassName !== value.targetClassName) {
            throw new Error(`Related object must be a ${value.targetClassName}, but a ${this._targetClassName} was passed in.`);
          }
        } else {
          value.targetClassName = this._targetClassName;
        }
      }

      return value;
    }

    throw new Error('Relation cannot be applied to a non-relation field');
  }

  mergeWith(previous
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
      if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
        throw new Error(`Related object must be of class ${previous._targetClassName}, but ${this._targetClassName || 'null'} was passed in.`);
      }

      const newAdd = previous.relationsToAdd.concat([]);
      this.relationsToRemove.forEach(r => {
        const index = newAdd.indexOf(r);

        if (index > -1) {
          newAdd.splice(index, 1);
        }
      });
      this.relationsToAdd.forEach(r => {
        const index = newAdd.indexOf(r);

        if (index < 0) {
          newAdd.push(r);
        }
      });
      const newRemove = previous.relationsToRemove.concat([]);
      this.relationsToAdd.forEach(r => {
        const index = newRemove.indexOf(r);

        if (index > -1) {
          newRemove.splice(index, 1);
        }
      });
      this.relationsToRemove.forEach(r => {
        const index = newRemove.indexOf(r);

        if (index < 0) {
          newRemove.push(r);
        }
      });
      const newRelation = new RelationOp(newAdd, newRemove);
      newRelation._targetClassName = this._targetClassName;
      return newRelation;
    }

    throw new Error('Cannot merge Relation Op with the previous Op');
  }

  toJSON()
  /*: { __op?: string, objects?: mixed, ops?: mixed }*/
  {
    const idToPointer = id => {
      return {
        __type: 'Pointer',
        className: this._targetClassName,
        objectId: id
      };
    };

    let adds = null;
    let removes = null;
    let pointers = null;

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

}

exports.RelationOp = RelationOp;