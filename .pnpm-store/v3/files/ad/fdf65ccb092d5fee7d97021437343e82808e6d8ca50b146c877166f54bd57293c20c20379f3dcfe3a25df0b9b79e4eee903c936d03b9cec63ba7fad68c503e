"use strict";

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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
 * Provides a local datastore which can be used to store and retrieve <code>Parse.Object</code>. <br />
 * To enable this functionality, call <code>Parse.enableLocalDatastore()</code>.
 *
 * Pin object to add to local datastore
 *
 * <pre>await object.pin();</pre>
 * <pre>await object.pinWithName('pinName');</pre>
 *
 * Query pinned objects
 *
 * <pre>query.fromLocalDatastore();</pre>
 * <pre>query.fromPin();</pre>
 * <pre>query.fromPinWithName();</pre>
 *
 * <pre>const localObjects = await query.find();</pre>
 *
 * @class Parse.LocalDatastore
 * @static
 */


const LocalDatastore = {
  isEnabled: false,
  isSyncing: false,

  fromPinWithName(name
  /*: string*/
  )
  /*: Promise<Array<Object>>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.fromPinWithName(name);
  },

  pinWithName(name
  /*: string*/
  , value
  /*: any*/
  )
  /*: Promise<void>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.pinWithName(name, value);
  },

  unPinWithName(name
  /*: string*/
  )
  /*: Promise<void>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.unPinWithName(name);
  },

  _getAllContents()
  /*: Promise<Object>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getAllContents();
  },

  // Use for testing
  _getRawStorage()
  /*: Promise<Object>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.getRawStorage();
  },

  _clear()
  /*: Promise<void>*/
  {
    const controller = _CoreManager.default.getLocalDatastoreController();

    return controller.clear();
  },

  // Pin the object and children recursively
  // Saves the object and children key to Pin Name
  async _handlePinAllWithName(name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  )
  /*: Promise<void>*/
  {
    const pinName = this.getPinName(name);
    const toPinPromises = [];
    const objectKeys = [];

    for (const parent of objects) {
      const children = this._getChildren(parent);

      const parentKey = this.getKeyForObject(parent);

      const json = parent._toFullJSON(undefined, true);

      if (parent._localId) {
        json._localId = parent._localId;
      }

      children[parentKey] = json;

      for (const objectKey in children) {
        objectKeys.push(objectKey);
        toPinPromises.push(this.pinWithName(objectKey, [children[objectKey]]));
      }
    }

    const fromPinPromise = this.fromPinWithName(pinName);
    const [pinned] = await Promise.all([fromPinPromise, toPinPromises]);
    const toPin = [...new Set([...(pinned || []), ...objectKeys])];
    return this.pinWithName(pinName, toPin);
  },

  // Removes object and children keys from pin name
  // Keeps the object and children pinned
  async _handleUnPinAllWithName(name
  /*: string*/
  , objects
  /*: Array<ParseObject>*/
  ) {
    const localDatastore = await this._getAllContents();
    const pinName = this.getPinName(name);
    const promises = [];
    let objectKeys = [];

    for (const parent of objects) {
      const children = this._getChildren(parent);

      const parentKey = this.getKeyForObject(parent);
      objectKeys.push(parentKey, ...Object.keys(children));
    }

    objectKeys = [...new Set(objectKeys)];
    let pinned = localDatastore[pinName] || [];
    pinned = pinned.filter(item => !objectKeys.includes(item));

    if (pinned.length === 0) {
      promises.push(this.unPinWithName(pinName));
      delete localDatastore[pinName];
    } else {
      promises.push(this.pinWithName(pinName, pinned));
      localDatastore[pinName] = pinned;
    }

    for (const objectKey of objectKeys) {
      let hasReference = false;

      for (const key in localDatastore) {
        if (key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX)) {
          const pinnedObjects = localDatastore[key] || [];

          if (pinnedObjects.includes(objectKey)) {
            hasReference = true;
            break;
          }
        }
      }

      if (!hasReference) {
        promises.push(this.unPinWithName(objectKey));
      }
    }

    return Promise.all(promises);
  },

  // Retrieve all pointer fields from object recursively
  _getChildren(object
  /*: ParseObject*/
  ) {
    const encountered = {};

    const json = object._toFullJSON(undefined, true);

    for (const key in json) {
      if (json[key] && json[key].__type && json[key].__type === 'Object') {
        this._traverse(json[key], encountered);
      }
    }

    return encountered;
  },

  _traverse(object
  /*: any*/
  , encountered
  /*: any*/
  ) {
    if (!object.objectId) {
      return;
    }

    const objectKey = this.getKeyForObject(object);

    if (encountered[objectKey]) {
      return;
    }

    encountered[objectKey] = object;

    for (const key in object) {
      let json = object[key];

      if (!object[key]) {
        json = object;
      }

      if (json.__type && json.__type === 'Object') {
        this._traverse(json, encountered);
      }
    }
  },

  // Transform keys in pin name to objects
  async _serializeObjectsFromPinName(name
  /*: string*/
  ) {
    const localDatastore = await this._getAllContents();
    const allObjects = [];

    for (const key in localDatastore) {
      if (key.startsWith(_LocalDatastoreUtils.OBJECT_PREFIX)) {
        allObjects.push(localDatastore[key][0]);
      }
    }

    if (!name) {
      return allObjects;
    }

    const pinName = this.getPinName(name);
    const pinned = localDatastore[pinName];

    if (!Array.isArray(pinned)) {
      return [];
    }

    const promises = pinned.map(objectKey => this.fromPinWithName(objectKey));
    let objects = await Promise.all(promises);
    objects = [].concat(...objects);
    return objects.filter(object => object != null);
  },

  // Replaces object pointers with pinned pointers
  // The object pointers may contain old data
  // Uses Breadth First Search Algorithm
  async _serializeObject(objectKey
  /*: string*/
  , localDatastore
  /*: any*/
  ) {
    let LDS = localDatastore;

    if (!LDS) {
      LDS = await this._getAllContents();
    }

    if (!LDS[objectKey] || LDS[objectKey].length === 0) {
      return null;
    }

    const root = LDS[objectKey][0];
    const queue = [];
    const meta = {};
    let uniqueId = 0;
    meta[uniqueId] = root;
    queue.push(uniqueId);

    while (queue.length !== 0) {
      const nodeId = queue.shift();
      const subTreeRoot = meta[nodeId];

      for (const field in subTreeRoot) {
        const value = subTreeRoot[field];

        if (value.__type && value.__type === 'Object') {
          const key = this.getKeyForObject(value);

          if (LDS[key] && LDS[key].length > 0) {
            const pointer = LDS[key][0];
            uniqueId++;
            meta[uniqueId] = pointer;
            subTreeRoot[field] = pointer;
            queue.push(uniqueId);
          }
        }
      }
    }

    return root;
  },

  // Called when an object is save / fetched
  // Update object pin value
  async _updateObjectIfPinned(object
  /*: ParseObject*/
  )
  /*: Promise<void>*/
  {
    if (!this.isEnabled) {
      return;
    }

    const objectKey = this.getKeyForObject(object);
    const pinned = await this.fromPinWithName(objectKey);

    if (!pinned || pinned.length === 0) {
      return;
    }

    return this.pinWithName(objectKey, [object._toFullJSON()]);
  },

  // Called when object is destroyed
  // Unpin object and remove all references from pin names
  // TODO: Destroy children?
  async _destroyObjectIfPinned(object
  /*: ParseObject*/
  ) {
    if (!this.isEnabled) {
      return;
    }

    const localDatastore = await this._getAllContents();
    const objectKey = this.getKeyForObject(object);
    const pin = localDatastore[objectKey];

    if (!pin) {
      return;
    }

    const promises = [this.unPinWithName(objectKey)];
    delete localDatastore[objectKey];

    for (const key in localDatastore) {
      if (key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX)) {
        let pinned = localDatastore[key] || [];

        if (pinned.includes(objectKey)) {
          pinned = pinned.filter(item => item !== objectKey);

          if (pinned.length === 0) {
            promises.push(this.unPinWithName(key));
            delete localDatastore[key];
          } else {
            promises.push(this.pinWithName(key, pinned));
            localDatastore[key] = pinned;
          }
        }
      }
    }

    return Promise.all(promises);
  },

  // Update pin and references of the unsaved object
  async _updateLocalIdForObject(localId
  /*: string*/
  , object
  /*: ParseObject*/
  ) {
    if (!this.isEnabled) {
      return;
    }

    const localKey = `${_LocalDatastoreUtils.OBJECT_PREFIX}${object.className}_${localId}`;
    const objectKey = this.getKeyForObject(object);
    const unsaved = await this.fromPinWithName(localKey);

    if (!unsaved || unsaved.length === 0) {
      return;
    }

    const promises = [this.unPinWithName(localKey), this.pinWithName(objectKey, unsaved)];
    const localDatastore = await this._getAllContents();

    for (const key in localDatastore) {
      if (key === _LocalDatastoreUtils.DEFAULT_PIN || key.startsWith(_LocalDatastoreUtils.PIN_PREFIX)) {
        let pinned = localDatastore[key] || [];

        if (pinned.includes(localKey)) {
          pinned = pinned.filter(item => item !== localKey);
          pinned.push(objectKey);
          promises.push(this.pinWithName(key, pinned));
          localDatastore[key] = pinned;
        }
      }
    }

    return Promise.all(promises);
  },

  /**
   * Updates Local Datastore from Server
   *
   * <pre>
   * await Parse.LocalDatastore.updateFromServer();
   * </pre>
   *
   * @function updateFromServer
   * @name Parse.LocalDatastore.updateFromServer
   * @static
   */
  async updateFromServer() {
    if (!this.checkIfEnabled() || this.isSyncing) {
      return;
    }

    const localDatastore = await this._getAllContents();
    const keys = [];

    for (const key in localDatastore) {
      if (key.startsWith(_LocalDatastoreUtils.OBJECT_PREFIX)) {
        keys.push(key);
      }
    }

    if (keys.length === 0) {
      return;
    }

    this.isSyncing = true;
    const pointersHash = {};

    for (const key of keys) {
      // Ignore the OBJECT_PREFIX
      let [,, className, objectId] = key.split('_'); // User key is split into [ 'Parse', 'LDS', '', 'User', 'objectId' ]

      if (key.split('_').length === 5 && key.split('_')[3] === 'User') {
        className = '_User';
        objectId = key.split('_')[4];
      }

      if (objectId.startsWith('local')) {
        continue;
      }

      if (!(className in pointersHash)) {
        pointersHash[className] = new Set();
      }

      pointersHash[className].add(objectId);
    }

    const queryPromises = Object.keys(pointersHash).map(className => {
      const objectIds = Array.from(pointersHash[className]);
      const query = new _ParseQuery.default(className);
      query.limit(objectIds.length);

      if (objectIds.length === 1) {
        query.equalTo('objectId', objectIds[0]);
      } else {
        query.containedIn('objectId', objectIds);
      }

      return query.find();
    });

    try {
      const responses = await Promise.all(queryPromises);
      const objects = [].concat.apply([], responses);
      const pinPromises = objects.map(object => {
        const objectKey = this.getKeyForObject(object);
        return this.pinWithName(objectKey, object._toFullJSON());
      });
      await Promise.all(pinPromises);
      this.isSyncing = false;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error syncing LocalDatastore: ', error);
      this.isSyncing = false;
    }
  },

  getKeyForObject(object
  /*: any*/
  ) {
    const objectId = object.objectId || object._getId();

    return `${_LocalDatastoreUtils.OBJECT_PREFIX}${object.className}_${objectId}`;
  },

  getPinName(pinName
  /*: ?string*/
  ) {
    if (!pinName || pinName === _LocalDatastoreUtils.DEFAULT_PIN) {
      return _LocalDatastoreUtils.DEFAULT_PIN;
    }

    return _LocalDatastoreUtils.PIN_PREFIX + pinName;
  },

  checkIfEnabled() {
    if (!this.isEnabled) {
      // eslint-disable-next-line no-console
      console.error('Parse.enableLocalDatastore() must be called first');
    }

    return this.isEnabled;
  }

};
module.exports = LocalDatastore;

_CoreManager.default.setLocalDatastoreController(require('./LocalDatastoreController'));

_CoreManager.default.setLocalDatastore(LocalDatastore);