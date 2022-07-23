"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
/*
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

/*:: import type { AttributeMap, ObjectCache, OpsMap, State } from './ObjectStateMutations';*/

/*:: import type ParseFile from './ParseFile';*/

/*:: import type { FileSource } from './ParseFile';*/

/*:: import type { Op } from './ParseOp';*/

/*:: import type ParseObject from './ParseObject';*/

/*:: import type { QueryJSON } from './ParseQuery';*/

/*:: import type ParseUser from './ParseUser';*/

/*:: import type { AuthData } from './ParseUser';*/

/*:: import type { PushData } from './Push';*/

/*:: import type { RequestOptions, FullOptions } from './RESTController';*/

/*:: type AnalyticsController = {
  track: (name: string, dimensions: { [key: string]: string }) => Promise,
};*/

/*:: type CloudController = {
  run: (name: string, data: mixed, options: RequestOptions) => Promise,
  getJobsData: (options: RequestOptions) => Promise,
  startJob: (name: string, data: mixed, options: RequestOptions) => Promise,
};*/

/*:: type ConfigController = {
  current: () => Promise,
  get: () => Promise,
  save: (attrs: { [key: string]: any }) => Promise,
};*/

/*:: type CryptoController = {
  encrypt: (obj: any, secretKey: string) => string,
  decrypt: (encryptedText: string, secretKey: any) => string,
};*/

/*:: type FileController = {
  saveFile: (name: string, source: FileSource, options: FullOptions) => Promise,
  saveBase64: (name: string, source: FileSource, options: FullOptions) => Promise,
  download: (uri: string) => Promise,
};*/

/*:: type InstallationController = {
  currentInstallationId: () => Promise,
};*/

/*:: type ObjectController = {
  fetch: (
    object: ParseObject | Array<ParseObject>,
    forceFetch: boolean,
    options: RequestOptions
  ) => Promise,
  save: (object: ParseObject | Array<ParseObject | ParseFile>, options: RequestOptions) => Promise,
  destroy: (object: ParseObject | Array<ParseObject>, options: RequestOptions) => Promise,
};*/

/*:: type ObjectStateController = {
  getState: (obj: any) => ?State,
  initializeState: (obj: any, initial?: State) => State,
  removeState: (obj: any) => ?State,
  getServerData: (obj: any) => AttributeMap,
  setServerData: (obj: any, attributes: AttributeMap) => void,
  getPendingOps: (obj: any) => Array<OpsMap>,
  setPendingOp: (obj: any, attr: string, op: ?Op) => void,
  pushPendingState: (obj: any) => void,
  popPendingState: (obj: any) => OpsMap,
  mergeFirstPendingState: (obj: any) => void,
  getObjectCache: (obj: any) => ObjectCache,
  estimateAttribute: (obj: any, attr: string) => mixed,
  estimateAttributes: (obj: any) => AttributeMap,
  commitServerChanges: (obj: any, changes: AttributeMap) => void,
  enqueueTask: (obj: any, task: () => Promise) => Promise,
  clearAllState: () => void,
  duplicateState: (source: any, dest: any) => void,
};*/

/*:: type PushController = {
  send: (data: PushData) => Promise,
};*/

/*:: type QueryController = {
  find: (className: string, params: QueryJSON, options: RequestOptions) => Promise,
  aggregate: (className: string, params: any, options: RequestOptions) => Promise,
};*/

/*:: type RESTController = {
  request: (method: string, path: string, data: mixed, options: RequestOptions) => Promise,
  ajax: (method: string, url: string, data: any, headers?: any, options: FullOptions) => Promise,
};*/

/*:: type SchemaController = {
  purge: (className: string) => Promise,
  get: (className: string, options: RequestOptions) => Promise,
  delete: (className: string, options: RequestOptions) => Promise,
  create: (className: string, params: any, options: RequestOptions) => Promise,
  update: (className: string, params: any, options: RequestOptions) => Promise,
  send(className: string, method: string, params: any, options: RequestOptions): Promise,
};*/

/*:: type SessionController = {
  getSession: (token: RequestOptions) => Promise,
};*/

/*:: type StorageController =
  | {
      async: 0,
      getItem: (path: string) => ?string,
      setItem: (path: string, value: string) => void,
      removeItem: (path: string) => void,
      getItemAsync?: (path: string) => Promise,
      setItemAsync?: (path: string, value: string) => Promise,
      removeItemAsync?: (path: string) => Promise,
      clear: () => void,
    }
  | {
      async: 1,
      getItem?: (path: string) => ?string,
      setItem?: (path: string, value: string) => void,
      removeItem?: (path: string) => void,
      getItemAsync: (path: string) => Promise,
      setItemAsync: (path: string, value: string) => Promise,
      removeItemAsync: (path: string) => Promise,
      clear: () => void,
    };*/

/*:: type LocalDatastoreController = {
  fromPinWithName: (name: string) => ?any,
  pinWithName: (name: string, objects: any) => void,
  unPinWithName: (name: string) => void,
  getAllContents: () => ?any,
  clear: () => void,
};*/

/*:: type UserController = {
  setCurrentUser: (user: ParseUser) => Promise,
  currentUser: () => ?ParseUser,
  currentUserAsync: () => Promise,
  signUp: (user: ParseUser, attrs: AttributeMap, options: RequestOptions) => Promise,
  logIn: (user: ParseUser, options: RequestOptions) => Promise,
  become: (options: RequestOptions) => Promise,
  hydrate: (userJSON: AttributeMap) => Promise,
  logOut: (options: RequestOptions) => Promise,
  me: (options: RequestOptions) => Promise,
  requestPasswordReset: (email: string, options: RequestOptions) => Promise,
  updateUserOnDisk: (user: ParseUser) => Promise,
  upgradeToRevocableSession: (user: ParseUser, options: RequestOptions) => Promise,
  linkWith: (user: ParseUser, authData: AuthData) => Promise,
  removeUserFromDisk: () => Promise,
  verifyPassword: (username: string, password: string, options: RequestOptions) => Promise,
  requestEmailVerification: (email: string, options: RequestOptions) => Promise,
};*/

/*:: type HooksController = {
  get: (type: string, functionName?: string, triggerName?: string) => Promise,
  create: (hook: mixed) => Promise,
  delete: (hook: mixed) => Promise,
  update: (hook: mixed) => Promise,
  send: (method: string, path: string, body?: mixed) => Promise,
};*/

/*:: type WebSocketController = {
  onopen: () => void,
  onmessage: (message: any) => void,
  onclose: () => void,
  onerror: (error: any) => void,
  send: (data: any) => void,
  close: () => void,
};*/

/*:: type Config = {
  AnalyticsController?: AnalyticsController,
  CloudController?: CloudController,
  ConfigController?: ConfigController,
  FileController?: FileController,
  InstallationController?: InstallationController,
  ObjectController?: ObjectController,
  ObjectStateController?: ObjectStateController,
  PushController?: PushController,
  QueryController?: QueryController,
  RESTController?: RESTController,
  SchemaController?: SchemaController,
  SessionController?: SessionController,
  StorageController?: StorageController,
  LocalDatastoreController?: LocalDatastoreController,
  UserController?: UserController,
  HooksController?: HooksController,
  WebSocketController?: WebSocketController,
};*/


var config
/*: Config & { [key: string]: mixed }*/
= {
  // Defaults
  IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.versions.electron,
  REQUEST_ATTEMPT_LIMIT: 5,
  REQUEST_BATCH_SIZE: 20,
  REQUEST_HEADERS: {},
  SERVER_URL: 'https://api.parse.com/1',
  SERVER_AUTH_TYPE: null,
  SERVER_AUTH_TOKEN: null,
  LIVEQUERY_SERVER_URL: null,
  ENCRYPTED_KEY: null,
  VERSION: "js".concat("1.9.0"),
  APPLICATION_ID: null,
  JAVASCRIPT_KEY: null,
  MASTER_KEY: null,
  USE_MASTER_KEY: false,
  PERFORM_USER_REWRITE: true,
  FORCE_REVOCABLE_SESSION: false,
  ENCRYPTED_USER: false,
  IDEMPOTENCY: false
};

function requireMethods(name
/*: string*/
, methods
/*: Array<string>*/
, controller
/*: any*/
) {
  (0, _forEach.default)(methods).call(methods, function (func) {
    if (typeof controller[func] !== 'function') {
      var _context;

      throw new Error((0, _concat.default)(_context = "".concat(name, " must implement ")).call(_context, func, "()"));
    }
  });
}

module.exports = {
  get: function (key
  /*: string*/
  )
  /*: any*/
  {
    if (config.hasOwnProperty(key)) {
      return config[key];
    }

    throw new Error("Configuration key not found: ".concat(key));
  },
  set: function (key
  /*: string*/
  , value
  /*: any*/
  )
  /*: void*/
  {
    config[key] = value;
  },

  /* Specialized Controller Setters/Getters */
  setAnalyticsController: function (controller
  /*: AnalyticsController*/
  ) {
    requireMethods('AnalyticsController', ['track'], controller);
    config.AnalyticsController = controller;
  },
  getAnalyticsController: function ()
  /*: AnalyticsController*/
  {
    return config.AnalyticsController;
  },
  setCloudController: function (controller
  /*: CloudController*/
  ) {
    requireMethods('CloudController', ['run', 'getJobsData', 'startJob'], controller);
    config.CloudController = controller;
  },
  getCloudController: function ()
  /*: CloudController*/
  {
    return config.CloudController;
  },
  setConfigController: function (controller
  /*: ConfigController*/
  ) {
    requireMethods('ConfigController', ['current', 'get', 'save'], controller);
    config.ConfigController = controller;
  },
  getConfigController: function ()
  /*: ConfigController*/
  {
    return config.ConfigController;
  },
  setCryptoController: function (controller
  /*: CryptoController*/
  ) {
    requireMethods('CryptoController', ['encrypt', 'decrypt'], controller);
    config.CryptoController = controller;
  },
  getCryptoController: function ()
  /*: CryptoController*/
  {
    return config.CryptoController;
  },
  setFileController: function (controller
  /*: FileController*/
  ) {
    requireMethods('FileController', ['saveFile', 'saveBase64'], controller);
    config.FileController = controller;
  },
  getFileController: function ()
  /*: FileController*/
  {
    return config.FileController;
  },
  setInstallationController: function (controller
  /*: InstallationController*/
  ) {
    requireMethods('InstallationController', ['currentInstallationId'], controller);
    config.InstallationController = controller;
  },
  getInstallationController: function ()
  /*: InstallationController*/
  {
    return config.InstallationController;
  },
  setObjectController: function (controller
  /*: ObjectController*/
  ) {
    requireMethods('ObjectController', ['save', 'fetch', 'destroy'], controller);
    config.ObjectController = controller;
  },
  getObjectController: function ()
  /*: ObjectController*/
  {
    return config.ObjectController;
  },
  setObjectStateController: function (controller
  /*: ObjectStateController*/
  ) {
    requireMethods('ObjectStateController', ['getState', 'initializeState', 'removeState', 'getServerData', 'setServerData', 'getPendingOps', 'setPendingOp', 'pushPendingState', 'popPendingState', 'mergeFirstPendingState', 'getObjectCache', 'estimateAttribute', 'estimateAttributes', 'commitServerChanges', 'enqueueTask', 'clearAllState'], controller);
    config.ObjectStateController = controller;
  },
  getObjectStateController: function ()
  /*: ObjectStateController*/
  {
    return config.ObjectStateController;
  },
  setPushController: function (controller
  /*: PushController*/
  ) {
    requireMethods('PushController', ['send'], controller);
    config.PushController = controller;
  },
  getPushController: function ()
  /*: PushController*/
  {
    return config.PushController;
  },
  setQueryController: function (controller
  /*: QueryController*/
  ) {
    requireMethods('QueryController', ['find', 'aggregate'], controller);
    config.QueryController = controller;
  },
  getQueryController: function ()
  /*: QueryController*/
  {
    return config.QueryController;
  },
  setRESTController: function (controller
  /*: RESTController*/
  ) {
    requireMethods('RESTController', ['request', 'ajax'], controller);
    config.RESTController = controller;
  },
  getRESTController: function ()
  /*: RESTController*/
  {
    return config.RESTController;
  },
  setSchemaController: function (controller
  /*: SchemaController*/
  ) {
    requireMethods('SchemaController', ['get', 'create', 'update', 'delete', 'send', 'purge'], controller);
    config.SchemaController = controller;
  },
  getSchemaController: function ()
  /*: SchemaController*/
  {
    return config.SchemaController;
  },
  setSessionController: function (controller
  /*: SessionController*/
  ) {
    requireMethods('SessionController', ['getSession'], controller);
    config.SessionController = controller;
  },
  getSessionController: function ()
  /*: SessionController*/
  {
    return config.SessionController;
  },
  setStorageController: function (controller
  /*: StorageController*/
  ) {
    if (controller.async) {
      requireMethods('An async StorageController', ['getItemAsync', 'setItemAsync', 'removeItemAsync', 'getAllKeysAsync'], controller);
    } else {
      requireMethods('A synchronous StorageController', ['getItem', 'setItem', 'removeItem', 'getAllKeys'], controller);
    }

    config.StorageController = controller;
  },
  setLocalDatastoreController: function (controller
  /*: LocalDatastoreController*/
  ) {
    requireMethods('LocalDatastoreController', ['pinWithName', 'fromPinWithName', 'unPinWithName', 'getAllContents', 'clear'], controller);
    config.LocalDatastoreController = controller;
  },
  getLocalDatastoreController: function ()
  /*: LocalDatastoreController*/
  {
    return config.LocalDatastoreController;
  },
  setLocalDatastore: function (store
  /*: any*/
  ) {
    config.LocalDatastore = store;
  },
  getLocalDatastore: function () {
    return config.LocalDatastore;
  },
  getStorageController: function ()
  /*: StorageController*/
  {
    return config.StorageController;
  },
  setAsyncStorage: function (storage
  /*: any*/
  ) {
    config.AsyncStorage = storage;
  },
  getAsyncStorage: function () {
    return config.AsyncStorage;
  },
  setWebSocketController: function (controller
  /*: WebSocketController*/
  ) {
    config.WebSocketController = controller;
  },
  getWebSocketController: function ()
  /*: WebSocketController*/
  {
    return config.WebSocketController;
  },
  setUserController: function (controller
  /*: UserController*/
  ) {
    requireMethods('UserController', ['setCurrentUser', 'currentUser', 'currentUserAsync', 'signUp', 'logIn', 'become', 'logOut', 'me', 'requestPasswordReset', 'upgradeToRevocableSession', 'requestEmailVerification', 'verifyPassword', 'linkWith'], controller);
    config.UserController = controller;
  },
  getUserController: function ()
  /*: UserController*/
  {
    return config.UserController;
  },
  setLiveQueryController: function (controller
  /*: any*/
  ) {
    requireMethods('LiveQueryController', ['setDefaultLiveQueryClient', 'getDefaultLiveQueryClient', '_clearCachedDefaultClient'], controller);
    config.LiveQueryController = controller;
  },
  getLiveQueryController: function ()
  /*: any*/
  {
    return config.LiveQueryController;
  },
  setHooksController: function (controller
  /*: HooksController*/
  ) {
    requireMethods('HooksController', ['create', 'get', 'update', 'remove'], controller);
    config.HooksController = controller;
  },
  getHooksController: function ()
  /*: HooksController*/
  {
    return config.HooksController;
  }
};