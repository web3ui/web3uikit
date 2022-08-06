var config = {
  IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.versions.electron,
  REQUEST_ATTEMPT_LIMIT: 5,
  REQUEST_BATCH_SIZE: 20,
  REQUEST_HEADERS: {},
  SERVER_URL: 'https://api.parse.com/1',
  SERVER_AUTH_TYPE: null,
  SERVER_AUTH_TOKEN: null,
  LIVEQUERY_SERVER_URL: null,
  ENCRYPTED_KEY: null,
  VERSION: "js" + "1.9.0",
  APPLICATION_ID: null,
  JAVASCRIPT_KEY: null,
  MASTER_KEY: null,
  USE_MASTER_KEY: false,
  PERFORM_USER_REWRITE: true,
  FORCE_REVOCABLE_SESSION: false,
  ENCRYPTED_USER: false,
  IDEMPOTENCY: false
};

function requireMethods(name, methods, controller) {
  methods.forEach(function (func) {
    if (typeof controller[func] !== 'function') {
      throw new Error(name + " must implement " + func + "()");
    }
  });
}

module.exports = {
  get: function (key) {
    if (config.hasOwnProperty(key)) {
      return config[key];
    }

    throw new Error("Configuration key not found: " + key);
  },
  set: function (key, value) {
    config[key] = value;
  },
  setAnalyticsController: function (controller) {
    requireMethods('AnalyticsController', ['track'], controller);
    config.AnalyticsController = controller;
  },
  getAnalyticsController: function () {
    return config.AnalyticsController;
  },
  setCloudController: function (controller) {
    requireMethods('CloudController', ['run', 'getJobsData', 'startJob'], controller);
    config.CloudController = controller;
  },
  getCloudController: function () {
    return config.CloudController;
  },
  setConfigController: function (controller) {
    requireMethods('ConfigController', ['current', 'get', 'save'], controller);
    config.ConfigController = controller;
  },
  getConfigController: function () {
    return config.ConfigController;
  },
  setCryptoController: function (controller) {
    requireMethods('CryptoController', ['encrypt', 'decrypt'], controller);
    config.CryptoController = controller;
  },
  getCryptoController: function () {
    return config.CryptoController;
  },
  setFileController: function (controller) {
    requireMethods('FileController', ['saveFile', 'saveBase64'], controller);
    config.FileController = controller;
  },
  getFileController: function () {
    return config.FileController;
  },
  setInstallationController: function (controller) {
    requireMethods('InstallationController', ['currentInstallationId'], controller);
    config.InstallationController = controller;
  },
  getInstallationController: function () {
    return config.InstallationController;
  },
  setObjectController: function (controller) {
    requireMethods('ObjectController', ['save', 'fetch', 'destroy'], controller);
    config.ObjectController = controller;
  },
  getObjectController: function () {
    return config.ObjectController;
  },
  setObjectStateController: function (controller) {
    requireMethods('ObjectStateController', ['getState', 'initializeState', 'removeState', 'getServerData', 'setServerData', 'getPendingOps', 'setPendingOp', 'pushPendingState', 'popPendingState', 'mergeFirstPendingState', 'getObjectCache', 'estimateAttribute', 'estimateAttributes', 'commitServerChanges', 'enqueueTask', 'clearAllState'], controller);
    config.ObjectStateController = controller;
  },
  getObjectStateController: function () {
    return config.ObjectStateController;
  },
  setPushController: function (controller) {
    requireMethods('PushController', ['send'], controller);
    config.PushController = controller;
  },
  getPushController: function () {
    return config.PushController;
  },
  setQueryController: function (controller) {
    requireMethods('QueryController', ['find', 'aggregate'], controller);
    config.QueryController = controller;
  },
  getQueryController: function () {
    return config.QueryController;
  },
  setRESTController: function (controller) {
    requireMethods('RESTController', ['request', 'ajax'], controller);
    config.RESTController = controller;
  },
  getRESTController: function () {
    return config.RESTController;
  },
  setSchemaController: function (controller) {
    requireMethods('SchemaController', ['get', 'create', 'update', 'delete', 'send', 'purge'], controller);
    config.SchemaController = controller;
  },
  getSchemaController: function () {
    return config.SchemaController;
  },
  setSessionController: function (controller) {
    requireMethods('SessionController', ['getSession'], controller);
    config.SessionController = controller;
  },
  getSessionController: function () {
    return config.SessionController;
  },
  setStorageController: function (controller) {
    if (controller.async) {
      requireMethods('An async StorageController', ['getItemAsync', 'setItemAsync', 'removeItemAsync', 'getAllKeysAsync'], controller);
    } else {
      requireMethods('A synchronous StorageController', ['getItem', 'setItem', 'removeItem', 'getAllKeys'], controller);
    }

    config.StorageController = controller;
  },
  setLocalDatastoreController: function (controller) {
    requireMethods('LocalDatastoreController', ['pinWithName', 'fromPinWithName', 'unPinWithName', 'getAllContents', 'clear'], controller);
    config.LocalDatastoreController = controller;
  },
  getLocalDatastoreController: function () {
    return config.LocalDatastoreController;
  },
  setLocalDatastore: function (store) {
    config.LocalDatastore = store;
  },
  getLocalDatastore: function () {
    return config.LocalDatastore;
  },
  getStorageController: function () {
    return config.StorageController;
  },
  setAsyncStorage: function (storage) {
    config.AsyncStorage = storage;
  },
  getAsyncStorage: function () {
    return config.AsyncStorage;
  },
  setWebSocketController: function (controller) {
    config.WebSocketController = controller;
  },
  getWebSocketController: function () {
    return config.WebSocketController;
  },
  setUserController: function (controller) {
    requireMethods('UserController', ['setCurrentUser', 'currentUser', 'currentUserAsync', 'signUp', 'logIn', 'become', 'logOut', 'me', 'requestPasswordReset', 'upgradeToRevocableSession', 'requestEmailVerification', 'verifyPassword', 'linkWith'], controller);
    config.UserController = controller;
  },
  getUserController: function () {
    return config.UserController;
  },
  setLiveQueryController: function (controller) {
    requireMethods('LiveQueryController', ['setDefaultLiveQueryClient', 'getDefaultLiveQueryClient', '_clearCachedDefaultClient'], controller);
    config.LiveQueryController = controller;
  },
  getLiveQueryController: function () {
    return config.LiveQueryController;
  },
  setHooksController: function (controller) {
    requireMethods('HooksController', ['create', 'get', 'update', 'remove'], controller);
    config.HooksController = controller;
  },
  getHooksController: function () {
    return config.HooksController;
  }
};