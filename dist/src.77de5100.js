// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app/utils.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
/**
 * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
 */

function LeibnizSeries(value) {
  var sum = 0;

  for (var i = 1; i < 2 * value; i++) {
    if (oddNumber(i)) {
      sum *= -1;
      sum += 1 / i;
    }
  }

  if (sum < 0) {
    sum *= -1;
  }

  return sum *= 4;
}

exports.LeibnizSeries = LeibnizSeries;
/**
 *  e^x = 1 + x + x^2/2! + x^3/3! + x^4/4! + x^5/5! +... + x^n/n!
 * @param x number
 * @param n number
 */

function exponentialSeries(x, n) {
  var result = 1;
  var e = 1;

  for (var i = 1; i <= n; i++) {
    result *= x / i; // the numerator constant (x) and the  denominator variable (i) will be multiplied

    e += result;
  }

  return e;
}

exports.exponentialSeries = exponentialSeries;
/**
 * 1+3+5....
 */

function sumOfOddNumbers(value) {
  var sum = 0;

  for (var i = 0; i <= value; i++) {
    if (oddNumber(i)) {
      sum += i;
    }
  }

  return sum;
}

exports.sumOfOddNumbers = sumOfOddNumbers;
/**
 * O(sqrt(n))
 * @param value number
 */

function isPrime(value) {
  if (value <= 1) return false;
  if (value <= 3) return true; // 2 or 3 => true

  if (value % 2 === 0 || value % 3 === 0) {
    // can be divided by 2 or 3 => false
    return false;
  }

  for (var i = 5; i * i <= value; i = i + 6) {
    //value >= 25 ?
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

exports.isPrime = isPrime;
/**
 * 1 + 1/2+ 1/3 + 1/4 ...
 */

function harmonicSeries(value) {
  var sum = 0;

  for (var i = 1; i <= value; i++) {
    sum += 1 / i;
  }

  return sum;
}

exports.harmonicSeries = harmonicSeries;
/**
 *
 * @param value number
 */

function primeFactors(value) {
  if (isPrime(value)) {
    return value + " is a prime number";
  }

  var original = value;
  var strResult = "";

  while (value % 2 === 0) {
    strResult += " * " + 2;
    value /= 2;
  } //since value is odd or prime by now


  for (var i = 3; i * i <= value; i = i + 2) {
    while (value % i === 0) {
      strResult += " * " + i;
      value /= i;
    }
  }

  strResult = (value !== 1 ? value + "" : "") + strResult + " = " + original;
  if (strResult.charAt(0) === "" || strResult.charAt(0) === " " || strResult.charAt(0) === "*") strResult = strResult.substr(2);
  return strResult;
}

exports.primeFactors = primeFactors;

function numberOfHandShake(n) {
  var sum = 0;

  for (var i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}

exports.numberOfHandShake = numberOfHandShake; //utils

function oddNumber(value) {
  if (!evenNumber(value)) {
    return true;
  }

  return false;
}

function evenNumber(value) {
  if (value % 2 === 0) {
    return true;
  }

  return false;
}

function addInputBox(inputText) {
  var inputBox = document.createElement("input");
  inputBox.className = "form-name";
  inputBox.setAttribute("id", "formName");
  inputBox.placeholder = inputText;
  return inputBox;
}

exports.addInputBox = addInputBox;

function addParagraph(elementId, desc) {
  var element = document.getElementById(elementId);
  element.innerText = desc;
  return element;
}

exports.addParagraph = addParagraph;

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

exports.removeAllChildren = removeAllChildren;
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

exports.__esModule = true;

var utils = __importStar(require("./app/utils"));

var harmonicSeriesBtn = document.getElementById("harmonic-series");
var leibnizSeriesBtn = document.getElementById("leibniz-series");
var sumOfOddsBtn = document.getElementById("sum-of-odds");
var isPrime = document.getElementById("is-prime");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
var cancel = document.getElementById("cancel");
var primeFactor = document.getElementById("prime-factor");
var modalForm = document.getElementById("input-form");
harmonicSeriesBtn.addEventListener("click", function () {
  displayModal(utils.harmonicSeries);
});
leibnizSeriesBtn.addEventListener("click", function () {
  displayModal(utils.LeibnizSeries);
});
isPrime.addEventListener("click", function () {
  displayModal(utils.isPrime);
});
primeFactor.addEventListener("click", function () {
  displayModal(utils.primeFactors);
});
sumOfOddsBtn.addEventListener("click", function () {
  displayModal(utils.sumOfOddNumbers);
});
close.addEventListener("click", function () {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});
cancel.addEventListener("click", function () {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});

function displayModal(callBack) {
  modal.style.display = "block";
  var calculate = document.getElementById("calculate");
  var inputBox = utils.addInputBox("This is an inputBox");
  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  var parentDiv = document.getElementById("formName").parentNode;
  modal.style.display = "block";
  var result = document.createElement("p");
  calculate.addEventListener("click", function () {
    result.innerText = callBack(+inputBox.value).toString();
  });
  parentDiv.insertBefore(result, inputBox);
}
},{"./app/utils":"app/utils.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52666" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map