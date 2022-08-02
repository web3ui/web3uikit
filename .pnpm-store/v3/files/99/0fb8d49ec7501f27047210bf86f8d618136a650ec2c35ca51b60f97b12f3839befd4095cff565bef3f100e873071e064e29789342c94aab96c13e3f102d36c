Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.continueWhile = continueWhile;
exports.resolvingPromise = resolvingPromise;
exports.when = when;

function resolvingPromise() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}

function when(promises) {
  var objects;
  var arrayArgument = Array.isArray(promises);

  if (arrayArgument) {
    objects = promises;
  } else {
    objects = arguments;
  }

  var total = objects.length;
  var hadError = false;
  var results = [];
  var returnValue = arrayArgument ? [results] : results;
  var errors = [];
  results.length = objects.length;
  errors.length = objects.length;

  if (total === 0) {
    return Promise.resolve(returnValue);
  }

  var promise = new resolvingPromise();

  var resolveOne = function () {
    total--;

    if (total <= 0) {
      if (hadError) {
        promise.reject(errors);
      } else {
        promise.resolve(returnValue);
      }
    }
  };

  var chain = function (object, index) {
    if (object && typeof object.then === 'function') {
      object.then(function (result) {
        results[index] = result;
        resolveOne();
      }, function (error) {
        errors[index] = error;
        hadError = true;
        resolveOne();
      });
    } else {
      results[index] = object;
      resolveOne();
    }
  };

  for (var i = 0; i < objects.length; i++) {
    chain(objects[i], i);
  }

  return promise;
}

function continueWhile(test, emitter) {
  if (test()) {
    return emitter().then(function () {
      return continueWhile(test, emitter);
    });
  }

  return Promise.resolve();
}