/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "button {\n  background-color: #4caf50;\n  font-size: 1em;\n  border: none; /* Remove borders */\n  color: white; /* Add a text color */\n  padding: 14px 28px; /* Add some padding */\n  cursor: pointer; /* Add a pointer cursor on mouse-over */\n}\nbody,\n* + * {\n  margin-top: 1em;\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 200vh;\n  margin: 0;\n}\n\n.modal-placeholder {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n.modal-body {\n  position: fixed;\n  top: 3em;\n  bottom: 3em;\n  right: 20%;\n  left: 20%;\n  padding: 2em 3em;\n  background-color: #fff;\n  overflow: auto;\n  z-index: 2;\n  border-radius: 4px;\n}\n.close {\n  position: absolute;\n  top: 0.3em;\n  right: 0.3em;\n  cursor: pointer;\n  text-indent: 10em;\n  width: 1em;\n  height: 1em;\n  border: 0;\n  padding: 0.3em;\n  background-color: #fff;\n}\n\n.close::after {\n  position: absolute;\n  line-height: 0.5;\n  top: 0.2em;\n  left: 0.1em;\n  text-indent: 0;\n  content: \"\\00D7\";\n  content: \"\\2715\";\n  color: #f2324c;\n}\n\n#modal {\n  display: none;\n}\n\n.buttons {\n  margin-left: 1.5em;\n}\n\n.top-banner {\n  padding: 1em 0;\n  background-color: #dff3aa;\n}\n.top-banner-inner {\n  width: 90%;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0;\n}\n.top-banner-inner > p {\n  font-size: 2em;\n  margin: 0;\n  color: #4caf50;\n  color: #f2324c;\n}\n\n#cancel {\n  background: #f2324c;\n}\n.form-name,\nselect {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.page-footer {\n  margin-top: 3em;\n  padding: 1em 0;\n  background-color: var(--light-gray);\n  color: var(--gray);\n}\n.page-footer__inner {\n  margin: 0 auto;\n  max-width: 1080px;\n  text-align: center;\n  font-size: 0.8rem;\n}\n#result {\n  background: #dff3aa;\n  color: green;\n  padding: 2em;\n  border: 1px solid green;\n  border-radius: 0.2em;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/JWallisPI.ts":
/*!******************************!*\
  !*** ./src/app/JWallisPI.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
//########################################## John Wallis Series' Summation ################################
//PI = 2*{(2/1)*(2/3)*(4/3)*(4/5)*(6/5)*(6/7)*}
//loop
// export function JWallisPI(k: number): number {
//   let pi: number = 1;
//   let i = 1,
//     z = 1, //Zaehler
//     n = 2; //Nenner
//   while (i <= k) {
//     pi *= n / z;
//     if (i % 2 === 0) {
//       n += 2;
//     } else {
//       z += 2;
//     }
//     i++;
//   }
//   return pi * 2;
// }
exports.JWallisPI = function (value) {
    var z = 1, n = 2;
    var p = 1;
    Array.from(Array(+value).keys())
        .map(function (x) { return x + 1; })
        .map(function (x) {
        p *= n / z;
        if (x % 2 === 0) {
            n += 2;
        }
        else {
            z += 2;
        }
    });
    return p * 2;
};


/***/ }),

/***/ "./src/app/LeibnizSeries.ts":
/*!**********************************!*\
  !*** ./src/app/LeibnizSeries.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
//########################################## Leibniz Series's summation ###################################
/** Leibniz series' summation with loops
 * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
 */
// export function LeibnizSeries(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 1; i < 2 * value; i++) {
//     if (oddNumber(i)) {
//       sum *= -1;
//       sum += 1 / i;
//     }
//   }
//   if (sum < 0) {
//     sum *= -1;
//   }
//   return (sum *= 4);
// }
exports.LeibnizSeries = function (value) {
    return (Array.from(Array(+value * 2).keys())
        .filter(function (x) { return utils_1.isOdd(x); })
        .reduce(function (a, c, i) {
        var v = utils_1.isEven(i) ? 1 : -1;
        return a + v / c;
    }) * 4);
};


/***/ }),

/***/ "./src/app/expo_series_sum.ts":
/*!************************************!*\
  !*** ./src/app/expo_series_sum.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var memoizedFactorial_1 = __webpack_require__(/*! ./memoizedFactorial */ "./src/app/memoizedFactorial.ts");
//########################################## Exponential Series's Summation ################################
// /** Exponential Series with loops
//  *  e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!
//  * @param x number
//  * @param n number
//  */
// export function exponentialSeries(x: number, n: number): number {
//   let result: number = 1;
//   let e: number = 1;
//   for (let i: number = 1; i <= n; i++) {
//     e *= x / i; // the numerator  x will  (constant) and  the  denominator  i  will be  incremented and multiplied
//     result += e;
//   }
//   return result;
// }
exports.exponentialSeries = function (x, n) {
    return (1 +
        x +
        Array.from(Array(n - 1).keys())
            .map(function (n) { return n + 2; })
            .map(function (n) { return expo(x, n) / memoizedFactorial_1.memoizedFactorial(n); })
            .reduce(function (a, c) { return a + c; }));
};
var expo = function (x, n) { return Math.pow(x, n); };


/***/ }),

/***/ "./src/app/harmonicSeries.ts":
/*!***********************************!*\
  !*** ./src/app/harmonicSeries.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.harmonicSeries = function (value) {
    return Array.from(Array(+value).keys()).reduce(function (a, c) { return a + 1 / (c + 1); }) + 1;
};


/***/ }),

/***/ "./src/app/marie_jose_bertin.ts":
/*!**************************************!*\
  !*** ./src/app/marie_jose_bertin.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Marie-Jose Bertin number / Satz 153
exports.__esModule = true;
/**
 * * The number given number X is dividable by 3
 * * The following number N is  the sum of the digits of the given number X powered by 3
 *  the given number is 15, 1^3 + 1^3 = 126,  1^3 + 2^3 + 6^3 = 225, ...
 * @param number
 * @return number[]
 */
exports.mjb = function (x) {
    var n = +x;
    if (mjbRecursion(n, [])[0] === 0) {
        return "The input should be dividable by 3.";
    }
    return mjbRecursion(n, []).join();
};
function mjbRecursion(x, digits) {
    var stringX = ("" + x).split("");
    if (+x % 3 !== 0) {
        return [0];
    }
    if (x === 153) {
        digits.push(153);
        return digits;
    }
    var numberArrayX = stringX.map(function (x) { return Math.pow(+x, 3); });
    var k = numberArrayX.reduce(function (a, c) { return a + c; });
    digits.push(k);
    mjbRecursion(k, digits);
    return digits;
}
exports.mjbRecursion = mjbRecursion;


/***/ }),

/***/ "./src/app/memoizedFactorial.ts":
/*!**************************************!*\
  !*** ./src/app/memoizedFactorial.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.memoized = function (fn) {
    var table = {};
    return function (arg) { return table[arg] || fn(arg); };
};
exports.factorial = function (num) {
    return num < 2 ? 1 : +num * exports.factorial(+num - 1);
};
exports.memoizedFactorial = exports.memoized(exports.factorial);


/***/ }),

/***/ "./src/app/numberOfHandShake.ts":
/*!**************************************!*\
  !*** ./src/app/numberOfHandShake.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function numberOfHandShake(n) {
    var sum = 0;
    for (var i = 0; i < +n; i++) {
        sum += i;
    }
    return sum;
}
exports.numberOfHandShake = numberOfHandShake;


/***/ }),

/***/ "./src/app/oddNumberSum.ts":
/*!*********************************!*\
  !*** ./src/app/oddNumberSum.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
//########################################## Odd Numbers' Summation ################################
/** Sum of Odds Numbers
 * 1+3+5....
 */
// export function sumOfOddNumbers(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 0; i <= value; i++) {
//     if (oddNumber(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
/**
 *  recurssion
 * @param value number
 *

export function sumOfOddNumbers(n: number): number {
  if (n === 0) {
    return n;
  } else {
    if (n % 2 !== 0) {
      return n + sumOfOddNumbers(n - 1);
    } else {
      return sumOfOddNumbers(n - 1);
    }
  }
}
*/
exports.sumOfOddNumbers = function (value) {
    var res = Array.from(Array(+value).keys()).map(function (x) { return x + 1; });
    return res.reduce(function (a, c) {
        var res = !utils_1.isEven(c) ? c : 0;
        return a + res;
    });
};


/***/ }),

/***/ "./src/app/primeFactors.ts":
/*!*********************************!*\
  !*** ./src/app/primeFactors.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
/**
 *
 * @param value number
 */
function primeFactors(value) {
    value = +value;
    if (!Number(value))
        return "0";
    if (utils_1.isPrime(value)) {
        return value + " is a prime number";
    }
    var original = value;
    var strResult = "";
    while (value % 2 === 0) {
        strResult += " * " + 2;
        value /= 2;
    }
    //since value is odd or prime by now
    for (var i = 3; i * i <= value; i = i + 2) {
        while (value % i === 0) {
            strResult += " * " + i;
            value /= i;
        }
    }
    strResult = (value !== 1 ? value + "" : "") + strResult + " = " + original;
    if (strResult.charAt(0) === "" ||
        strResult.charAt(0) === " " ||
        strResult.charAt(0) === "*")
        strResult = strResult.substr(2);
    return strResult;
}
exports.primeFactors = primeFactors;


/***/ }),

/***/ "./src/app/render.ts":
/*!***************************!*\
  !*** ./src/app/render.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var modalForm = document.getElementById("input-form");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
var cancel = document.getElementById("cancel");
function addElement(elementId, elementType, parentElement) {
    var child = document.createElement(elementType);
    child.className = "form-name";
    child.setAttribute("id", elementId);
    parentElement.appendChild(child);
    return parentElement;
}
function addMultipleElement(numberOfElements, elementType, elementId, parentElement) {
    var htmlElements = null;
    for (var i = 0; i < numberOfElements; i++) {
        var id = i + 1;
        htmlElements = addElement(elementId + id, elementType, parentElement);
    }
    return htmlElements;
}
exports.addMultipleElement = addMultipleElement;
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.removeAllChildren = removeAllChildren;
function addParagraph(elementId, desc) {
    var element = document.getElementById(elementId);
    element.innerText = desc;
    return element;
}
exports.addParagraph = addParagraph;
function getInputValues(modalForm) {
    var values = [];
    for (var i = 0; i < modalForm.length; i++) {
        if (modalForm[i].nodeName === "INPUT") {
            values.push(modalForm[i].value);
        }
    }
    return values;
}
exports.getInputValues = getInputValues;
close.addEventListener("click", function () {
    modal.style.display = "none";
    removeAllChildren(modalForm);
});
cancel.addEventListener("click", function () {
    modal.style.display = "none";
    removeAllChildren(modalForm);
});
function displayModal(callBack, desc, numberInputBox) {
    var description = document.getElementById("description");
    var CalculateBtn = document.getElementById("calculate"), result = document.createElement("p");
    result.setAttribute("id", "result");
    addMultipleElement(numberInputBox, "INPUT", "formName", modalForm);
    addParagraph("description", " Harmonic Series ");
    description.innerText = desc;
    CalculateBtn.addEventListener("click", function () {
        var values = getInputValues(modalForm);
        var v = callBack.apply(void 0, values);
        if (Array.isArray(v)) {
            v = v.join();
        }
        result.innerText = v;
    });
    modalForm.appendChild(result);
    modal.style.display = "block";
}
exports.displayModal = displayModal;
function createButton(id, txt) {
    var b = document.createElement("button");
    b.setAttribute("id", "" + id);
    b.innerHTML = txt;
    var div = document.createElement("div");
    div.appendChild(b);
    var buttonClass = document.getElementById("fButton");
    buttonClass.appendChild(div);
    return b;
}
exports.createButton = createButton;


/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
//utils
function isOdd(value) {
    return isEven(value) ? false : true;
}
exports.isOdd = isOdd;
//
function isEven(value) {
    return value % 2 === 0;
}
exports.isEven = isEven;
/**
 * O(sqrt(n))
 * @param value number
 */
function isPrime(value) {
    if (value <= 1)
        return false;
    if (value <= 3)
        return true; // 2 or 3 => true
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var primeFactors_1 = __webpack_require__(/*! ./app/primeFactors */ "./src/app/primeFactors.ts");
var JWallisPI_1 = __webpack_require__(/*! ./app/JWallisPI */ "./src/app/JWallisPI.ts");
var harmonicSeries_1 = __webpack_require__(/*! ./app/harmonicSeries */ "./src/app/harmonicSeries.ts");
var oddNumberSum_1 = __webpack_require__(/*! ./app/oddNumberSum */ "./src/app/oddNumberSum.ts");
var expo_series_sum_1 = __webpack_require__(/*! ./app/expo_series_sum */ "./src/app/expo_series_sum.ts");
var LeibnizSeries_1 = __webpack_require__(/*! ./app/LeibnizSeries */ "./src/app/LeibnizSeries.ts");
var numberOfHandShake_1 = __webpack_require__(/*! ./app/numberOfHandShake */ "./src/app/numberOfHandShake.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
var funcs = __webpack_require__(/*! ./app/utils */ "./src/app/utils.ts");
var render = __webpack_require__(/*! ./app/render */ "./src/app/render.ts");
var marie_jose_bertin_1 = __webpack_require__(/*! ./app/marie_jose_bertin */ "./src/app/marie_jose_bertin.ts");
var handshakeBtn = render.createButton("handshake", "HandShake");
var mjbBtn = render.createButton("154", "154");
var numberOfInputBox = 0;
var harmonicSeriesBtn = render.createButton("harmonic-series", "Harmonic Series Sum");
var leibnizSeriesBtn = render.createButton("leibniz-series", "Leibniz Series's Sum");
var sumOfOddsBtn = render.createButton("sum-of-odds", "Sum Odd Numbers");
var isPrime = render.createButton("is-prime", "Is it Prime Number");
var primeFactor = render.createButton("prime-factor", "Prime factors");
var exponential = render.createButton("exponential", "Exponential series's sum");
var JWallis = render.createButton("john-wallis", "PI with John Wallis");
harmonicSeriesBtn.addEventListener("click", function () {
    var desc = "1 + 1/2+ 1/3 + 1/4";
    numberOfInputBox = 1;
    render.displayModal(harmonicSeries_1.harmonicSeries, desc, numberOfInputBox);
});
handshakeBtn.addEventListener("click", function () {
    var desc = "This is a desc";
    numberOfInputBox = 1;
    render.displayModal(numberOfHandShake_1.numberOfHandShake, desc, numberOfInputBox);
});
leibnizSeriesBtn.addEventListener("click", function () {
    var desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
    numberOfInputBox = 1;
    render.displayModal(LeibnizSeries_1.LeibnizSeries, desc, numberOfInputBox);
});
isPrime.addEventListener("click", function () {
    var desc = "Is the given number a prime number ?";
    numberOfInputBox = 1;
    render.displayModal(funcs.isPrime, desc, numberOfInputBox);
});
primeFactor.addEventListener("click", function () {
    var desc = "Shows prime factor of a number";
    numberOfInputBox = 1;
    render.displayModal(primeFactors_1.primeFactors, desc, numberOfInputBox);
});
sumOfOddsBtn.addEventListener("click", function () {
    var desc = "Sums odd numbers";
    numberOfInputBox = 1;
    render.displayModal(oddNumberSum_1.sumOfOddNumbers, desc, numberOfInputBox);
});
JWallis.addEventListener("click", function () {
    var desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
    numberOfInputBox = 1;
    render.displayModal(JWallisPI_1.JWallisPI, desc, numberOfInputBox);
});
mjbBtn.addEventListener("click", function () {
    var desc = " The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 ";
    numberOfInputBox = 1;
    render.displayModal(marie_jose_bertin_1.mjb, desc, numberOfInputBox);
});
exponential.addEventListener("click", function () {
    var desc = " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
    numberOfInputBox = 2;
    render.displayModal(expo_series_sum_1.exponentialSeries, desc, numberOfInputBox);
});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvSldhbGxpc1BJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvTGVpYm5pelNlcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2V4cG9fc2VyaWVzX3N1bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hhcm1vbmljU2VyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFyaWVfam9zZV9iZXJ0aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tZW1vaXplZEZhY3RvcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL251bWJlck9mSGFuZFNoYWtlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvb2RkTnVtYmVyU3VtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpbWVGYWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FB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OztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXFxuICBjb2xvcjogd2hpdGU7IC8qIEFkZCBhIHRleHQgY29sb3IgKi9cXG4gIHBhZGRpbmc6IDE0cHggMjhweDsgLyogQWRkIHNvbWUgcGFkZGluZyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIGN1cnNvciBvbiBtb3VzZS1vdmVyICovXFxufVxcbmJvZHksXFxuKiArICoge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMjAwdmg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tb2RhbC1wbGFjZWhvbGRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubW9kYWwtYm9keSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDNlbTtcXG4gIGJvdHRvbTogM2VtO1xcbiAgcmlnaHQ6IDIwJTtcXG4gIGxlZnQ6IDIwJTtcXG4gIHBhZGRpbmc6IDJlbSAzZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiAyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjNlbTtcXG4gIHJpZ2h0OiAwLjNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtaW5kZW50OiAxMGVtO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2xvc2U6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjU7XFxuICB0b3A6IDAuMmVtO1xcbiAgbGVmdDogMC4xZW07XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBEN1xcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTVcXFwiO1xcbiAgY29sb3I6ICNmMjMyNGM7XFxufVxcblxcbiNtb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogMS41ZW07XFxufVxcblxcbi50b3AtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjNhYTtcXG59XFxuLnRvcC1iYW5uZXItaW5uZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4udG9wLWJhbm5lci1pbm5lciA+IHAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzRjYWY1MDtcXG4gIGNvbG9yOiAjZjIzMjRjO1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6ICNmMjMyNGM7XFxufVxcbi5mb3JtLW5hbWUsXFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucGFnZS1mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuLnBhZ2UtZm9vdGVyX19pbm5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbiNyZXN1bHQge1xcbiAgYmFja2dyb3VuZDogI2RmZjNhYTtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEpvaG4gV2FsbGlzIFNlcmllcycgU3VtbWF0aW9uICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL1BJID0gMip7KDIvMSkqKDIvMykqKDQvMykqKDQvNSkqKDYvNSkqKDYvNykqfVxuLy9sb29wXG4vLyBleHBvcnQgZnVuY3Rpb24gSldhbGxpc1BJKGs6IG51bWJlcik6IG51bWJlciB7XG4vLyAgIGxldCBwaTogbnVtYmVyID0gMTtcbi8vICAgbGV0IGkgPSAxLFxuLy8gICAgIHogPSAxLCAvL1phZWhsZXJcbi8vICAgICBuID0gMjsgLy9OZW5uZXJcbi8vICAgd2hpbGUgKGkgPD0gaykge1xuLy8gICAgIHBpICo9IG4gLyB6O1xuLy8gICAgIGlmIChpICUgMiA9PT0gMCkge1xuLy8gICAgICAgbiArPSAyO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICB6ICs9IDI7XG4vLyAgICAgfVxuLy8gICAgIGkrKztcbi8vICAgfVxuLy8gICByZXR1cm4gcGkgKiAyO1xuLy8gfVxuZXhwb3J0cy5KV2FsbGlzUEkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgeiA9IDEsIG4gPSAyO1xuICAgIHZhciBwID0gMTtcbiAgICBBcnJheS5mcm9tKEFycmF5KCt2YWx1ZSkua2V5cygpKVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICsgMTsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICBwICo9IG4gLyB6O1xuICAgICAgICBpZiAoeCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIG4gKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHogKz0gMjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwICogMjtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTGVpYm5peiBTZXJpZXMncyBzdW1tYXRpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8qKiBMZWlibml6IHNlcmllcycgc3VtbWF0aW9uIHdpdGggbG9vcHNcbiAqIM+ALzQgPSAxLzEgLSAxLzMgKyAxLzUgLSAxIC83ICsgMS85IMKxIC4uLlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gTGVpYm5pelNlcmllcyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgbGV0IHN1bTogbnVtYmVyID0gMDtcbi8vICAgZm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IDIgKiB2YWx1ZTsgaSsrKSB7XG4vLyAgICAgaWYgKG9kZE51bWJlcihpKSkge1xuLy8gICAgICAgc3VtICo9IC0xO1xuLy8gICAgICAgc3VtICs9IDEgLyBpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpZiAoc3VtIDwgMCkge1xuLy8gICAgIHN1bSAqPSAtMTtcbi8vICAgfVxuLy8gICByZXR1cm4gKHN1bSAqPSA0KTtcbi8vIH1cbmV4cG9ydHMuTGVpYm5pelNlcmllcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAoQXJyYXkuZnJvbShBcnJheSgrdmFsdWUgKiAyKS5rZXlzKCkpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHV0aWxzXzEuaXNPZGQoeCk7IH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMsIGkpIHtcbiAgICAgICAgdmFyIHYgPSB1dGlsc18xLmlzRXZlbihpKSA/IDEgOiAtMTtcbiAgICAgICAgcmV0dXJuIGEgKyB2IC8gYztcbiAgICB9KSAqIDQpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBtZW1vaXplZEZhY3RvcmlhbF8xID0gcmVxdWlyZShcIi4vbWVtb2l6ZWRGYWN0b3JpYWxcIik7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFeHBvbmVudGlhbCBTZXJpZXMncyBTdW1tYXRpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIC8qKiBFeHBvbmVudGlhbCBTZXJpZXMgd2l0aCBsb29wc1xuLy8gICogIGVeeCA9IDEgKyB4ICsgKHheMikvMiEgKyAoeF4zKS8zISArKCB4XjQpLzQhICsgKHheNSkvNSEgKy4uLiArICh4Xm4pL24hXG4vLyAgKiBAcGFyYW0geCBudW1iZXJcbi8vICAqIEBwYXJhbSBuIG51bWJlclxuLy8gICovXG4vLyBleHBvcnQgZnVuY3Rpb24gZXhwb25lbnRpYWxTZXJpZXMoeDogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICBsZXQgcmVzdWx0OiBudW1iZXIgPSAxO1xuLy8gICBsZXQgZTogbnVtYmVyID0gMTtcbi8vICAgZm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8PSBuOyBpKyspIHtcbi8vICAgICBlICo9IHggLyBpOyAvLyB0aGUgbnVtZXJhdG9yICB4IHdpbGwgIChjb25zdGFudCkgYW5kICB0aGUgIGRlbm9taW5hdG9yICBpICB3aWxsIGJlICBpbmNyZW1lbnRlZCBhbmQgbXVsdGlwbGllZFxuLy8gICAgIHJlc3VsdCArPSBlO1xuLy8gICB9XG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG5leHBvcnRzLmV4cG9uZW50aWFsU2VyaWVzID0gZnVuY3Rpb24gKHgsIG4pIHtcbiAgICByZXR1cm4gKDEgK1xuICAgICAgICB4ICtcbiAgICAgICAgQXJyYXkuZnJvbShBcnJheShuIC0gMSkua2V5cygpKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gbiArIDI7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiBleHBvKHgsIG4pIC8gbWVtb2l6ZWRGYWN0b3JpYWxfMS5tZW1vaXplZEZhY3RvcmlhbChuKTsgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpIHsgcmV0dXJuIGEgKyBjOyB9KSk7XG59O1xudmFyIGV4cG8gPSBmdW5jdGlvbiAoeCwgbikgeyByZXR1cm4gTWF0aC5wb3coeCwgbik7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmhhcm1vbmljU2VyaWVzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoK3ZhbHVlKS5rZXlzKCkpLnJlZHVjZShmdW5jdGlvbiAoYSwgYykgeyByZXR1cm4gYSArIDEgLyAoYyArIDEpOyB9KSArIDE7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBNYXJpZS1Kb3NlIEJlcnRpbiBudW1iZXIgLyBTYXR6IDE1M1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogKiBUaGUgbnVtYmVyIGdpdmVuIG51bWJlciBYIGlzIGRpdmlkYWJsZSBieSAzXG4gKiAqIFRoZSBmb2xsb3dpbmcgbnVtYmVyIE4gaXMgIHRoZSBzdW0gb2YgdGhlIGRpZ2l0cyBvZiB0aGUgZ2l2ZW4gbnVtYmVyIFggcG93ZXJlZCBieSAzXG4gKiAgdGhlIGdpdmVuIG51bWJlciBpcyAxNSwgMV4zICsgMV4zID0gMTI2LCAgMV4zICsgMl4zICsgNl4zID0gMjI1LCAuLi5cbiAqIEBwYXJhbSBudW1iZXJcbiAqIEByZXR1cm4gbnVtYmVyW11cbiAqL1xuZXhwb3J0cy5tamIgPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciBuID0gK3g7XG4gICAgaWYgKG1qYlJlY3Vyc2lvbihuLCBbXSlbMF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiVGhlIGlucHV0IHNob3VsZCBiZSBkaXZpZGFibGUgYnkgMy5cIjtcbiAgICB9XG4gICAgcmV0dXJuIG1qYlJlY3Vyc2lvbihuLCBbXSkuam9pbigpO1xufTtcbmZ1bmN0aW9uIG1qYlJlY3Vyc2lvbih4LCBkaWdpdHMpIHtcbiAgICB2YXIgc3RyaW5nWCA9IChcIlwiICsgeCkuc3BsaXQoXCJcIik7XG4gICAgaWYgKCt4ICUgMyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gWzBdO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMTUzKSB7XG4gICAgICAgIGRpZ2l0cy5wdXNoKDE1Myk7XG4gICAgICAgIHJldHVybiBkaWdpdHM7XG4gICAgfVxuICAgIHZhciBudW1iZXJBcnJheVggPSBzdHJpbmdYLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gTWF0aC5wb3coK3gsIDMpOyB9KTtcbiAgICB2YXIgayA9IG51bWJlckFycmF5WC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpIHsgcmV0dXJuIGEgKyBjOyB9KTtcbiAgICBkaWdpdHMucHVzaChrKTtcbiAgICBtamJSZWN1cnNpb24oaywgZGlnaXRzKTtcbiAgICByZXR1cm4gZGlnaXRzO1xufVxuZXhwb3J0cy5tamJSZWN1cnNpb24gPSBtamJSZWN1cnNpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm1lbW9pemVkID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhYmxlID0ge307XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHRhYmxlW2FyZ10gfHwgZm4oYXJnKTsgfTtcbn07XG5leHBvcnRzLmZhY3RvcmlhbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gbnVtIDwgMiA/IDEgOiArbnVtICogZXhwb3J0cy5mYWN0b3JpYWwoK251bSAtIDEpO1xufTtcbmV4cG9ydHMubWVtb2l6ZWRGYWN0b3JpYWwgPSBleHBvcnRzLm1lbW9pemVkKGV4cG9ydHMuZmFjdG9yaWFsKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIG51bWJlck9mSGFuZFNoYWtlKG4pIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICtuOyBpKyspIHtcbiAgICAgICAgc3VtICs9IGk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5leHBvcnRzLm51bWJlck9mSGFuZFNoYWtlID0gbnVtYmVyT2ZIYW5kU2hha2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgT2RkIE51bWJlcnMnIFN1bW1hdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLyoqIFN1bSBvZiBPZGRzIE51bWJlcnNcbiAqIDErMys1Li4uLlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gc3VtT2ZPZGROdW1iZXJzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICBsZXQgc3VtOiBudW1iZXIgPSAwO1xuLy8gICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHZhbHVlOyBpKyspIHtcbi8vICAgICBpZiAob2RkTnVtYmVyKGkpKSB7XG4vLyAgICAgICBzdW0gKz0gaTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIHN1bTtcbi8vIH1cbi8qKlxuICogIHJlY3Vyc3Npb25cbiAqIEBwYXJhbSB2YWx1ZSBudW1iZXJcbiAqXG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1PZk9kZE51bWJlcnMobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gbjtcbiAgfSBlbHNlIHtcbiAgICBpZiAobiAlIDIgIT09IDApIHtcbiAgICAgIHJldHVybiBuICsgc3VtT2ZPZGROdW1iZXJzKG4gLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1bU9mT2RkTnVtYmVycyhuIC0gMSk7XG4gICAgfVxuICB9XG59XG4qL1xuZXhwb3J0cy5zdW1PZk9kZE51bWJlcnMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmVzID0gQXJyYXkuZnJvbShBcnJheSgrdmFsdWUpLmtleXMoKSkubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICsgMTsgfSk7XG4gICAgcmV0dXJuIHJlcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGMpIHtcbiAgICAgICAgdmFyIHJlcyA9ICF1dGlsc18xLmlzRXZlbihjKSA/IGMgOiAwO1xuICAgICAgICByZXR1cm4gYSArIHJlcztcbiAgICB9KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuLyoqXG4gKlxuICogQHBhcmFtIHZhbHVlIG51bWJlclxuICovXG5mdW5jdGlvbiBwcmltZUZhY3RvcnModmFsdWUpIHtcbiAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICBpZiAoIU51bWJlcih2YWx1ZSkpXG4gICAgICAgIHJldHVybiBcIjBcIjtcbiAgICBpZiAodXRpbHNfMS5pc1ByaW1lKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiBpcyBhIHByaW1lIG51bWJlclwiO1xuICAgIH1cbiAgICB2YXIgb3JpZ2luYWwgPSB2YWx1ZTtcbiAgICB2YXIgc3RyUmVzdWx0ID0gXCJcIjtcbiAgICB3aGlsZSAodmFsdWUgJSAyID09PSAwKSB7XG4gICAgICAgIHN0clJlc3VsdCArPSBcIiAqIFwiICsgMjtcbiAgICAgICAgdmFsdWUgLz0gMjtcbiAgICB9XG4gICAgLy9zaW5jZSB2YWx1ZSBpcyBvZGQgb3IgcHJpbWUgYnkgbm93XG4gICAgZm9yICh2YXIgaSA9IDM7IGkgKiBpIDw9IHZhbHVlOyBpID0gaSArIDIpIHtcbiAgICAgICAgd2hpbGUgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgICAgICAgc3RyUmVzdWx0ICs9IFwiICogXCIgKyBpO1xuICAgICAgICAgICAgdmFsdWUgLz0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHJSZXN1bHQgPSAodmFsdWUgIT09IDEgPyB2YWx1ZSArIFwiXCIgOiBcIlwiKSArIHN0clJlc3VsdCArIFwiID0gXCIgKyBvcmlnaW5hbDtcbiAgICBpZiAoc3RyUmVzdWx0LmNoYXJBdCgwKSA9PT0gXCJcIiB8fFxuICAgICAgICBzdHJSZXN1bHQuY2hhckF0KDApID09PSBcIiBcIiB8fFxuICAgICAgICBzdHJSZXN1bHQuY2hhckF0KDApID09PSBcIipcIilcbiAgICAgICAgc3RyUmVzdWx0ID0gc3RyUmVzdWx0LnN1YnN0cigyKTtcbiAgICByZXR1cm4gc3RyUmVzdWx0O1xufVxuZXhwb3J0cy5wcmltZUZhY3RvcnMgPSBwcmltZUZhY3RvcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbW9kYWxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtXCIpO1xudmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbnZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG52YXIgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIik7XG5mdW5jdGlvbiBhZGRFbGVtZW50KGVsZW1lbnRJZCwgZWxlbWVudFR5cGUsIHBhcmVudEVsZW1lbnQpIHtcbiAgICB2YXIgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBjaGlsZC5jbGFzc05hbWUgPSBcImZvcm0tbmFtZVwiO1xuICAgIGNoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnRJZCk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBhZGRNdWx0aXBsZUVsZW1lbnQobnVtYmVyT2ZFbGVtZW50cywgZWxlbWVudFR5cGUsIGVsZW1lbnRJZCwgcGFyZW50RWxlbWVudCkge1xuICAgIHZhciBodG1sRWxlbWVudHMgPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50czsgaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IGkgKyAxO1xuICAgICAgICBodG1sRWxlbWVudHMgPSBhZGRFbGVtZW50KGVsZW1lbnRJZCArIGlkLCBlbGVtZW50VHlwZSwgcGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBodG1sRWxlbWVudHM7XG59XG5leHBvcnRzLmFkZE11bHRpcGxlRWxlbWVudCA9IGFkZE11bHRpcGxlRWxlbWVudDtcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZUFsbENoaWxkcmVuID0gcmVtb3ZlQWxsQ2hpbGRyZW47XG5mdW5jdGlvbiBhZGRQYXJhZ3JhcGgoZWxlbWVudElkLCBkZXNjKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gZGVzYztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydHMuYWRkUGFyYWdyYXBoID0gYWRkUGFyYWdyYXBoO1xuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZXMobW9kYWxGb3JtKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxGb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtb2RhbEZvcm1baV0ubm9kZU5hbWUgPT09IFwiSU5QVVRcIikge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2gobW9kYWxGb3JtW2ldLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZXhwb3J0cy5nZXRJbnB1dFZhbHVlcyA9IGdldElucHV0VmFsdWVzO1xuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obW9kYWxGb3JtKTtcbn0pO1xuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKG1vZGFsRm9ybSk7XG59KTtcbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbChjYWxsQmFjaywgZGVzYywgbnVtYmVySW5wdXRCb3gpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIHZhciBDYWxjdWxhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0ZVwiKSwgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcmVzdWx0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzdWx0XCIpO1xuICAgIGFkZE11bHRpcGxlRWxlbWVudChudW1iZXJJbnB1dEJveCwgXCJJTlBVVFwiLCBcImZvcm1OYW1lXCIsIG1vZGFsRm9ybSk7XG4gICAgYWRkUGFyYWdyYXBoKFwiZGVzY3JpcHRpb25cIiwgXCIgSGFybW9uaWMgU2VyaWVzIFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjO1xuICAgIENhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gZ2V0SW5wdXRWYWx1ZXMobW9kYWxGb3JtKTtcbiAgICAgICAgdmFyIHYgPSBjYWxsQmFjay5hcHBseSh2b2lkIDAsIHZhbHVlcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICB2ID0gdi5qb2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlubmVyVGV4dCA9IHY7XG4gICAgfSk7XG4gICAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKHJlc3VsdCk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cbmV4cG9ydHMuZGlzcGxheU1vZGFsID0gZGlzcGxheU1vZGFsO1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGlkLCB0eHQpIHtcbiAgICB2YXIgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiICsgaWQpO1xuICAgIGIuaW5uZXJIVE1MID0gdHh0O1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChiKTtcbiAgICB2YXIgYnV0dG9uQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZCdXR0b25cIik7XG4gICAgYnV0dG9uQ2xhc3MuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICByZXR1cm4gYjtcbn1cbmV4cG9ydHMuY3JlYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy91dGlsc1xuZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNFdmVuKHZhbHVlKSA/IGZhbHNlIDogdHJ1ZTtcbn1cbmV4cG9ydHMuaXNPZGQgPSBpc09kZDtcbi8vXG5mdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJSAyID09PSAwO1xufVxuZXhwb3J0cy5pc0V2ZW4gPSBpc0V2ZW47XG4vKipcbiAqIE8oc3FydChuKSlcbiAqIEBwYXJhbSB2YWx1ZSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8PSAxKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHZhbHVlIDw9IDMpXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyAyIG9yIDMgPT4gdHJ1ZVxuICAgIGlmICh2YWx1ZSAlIDIgPT09IDAgfHwgdmFsdWUgJSAzID09PSAwKSB7XG4gICAgICAgIC8vIGNhbiBiZSBkaXZpZGVkIGJ5IDIgb3IgMyA9PiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSA1OyBpICogaSA8PSB2YWx1ZTsgaSA9IGkgKyA2KSB7XG4gICAgICAgIC8vdmFsdWUgPj0gMjUgP1xuICAgICAgICBpZiAodmFsdWUgJSBpID09PSAwIHx8IHZhbHVlICUgKGkgKyAyKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1ByaW1lID0gaXNQcmltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBwcmltZUZhY3RvcnNfMSA9IHJlcXVpcmUoXCIuL2FwcC9wcmltZUZhY3RvcnNcIik7XG52YXIgSldhbGxpc1BJXzEgPSByZXF1aXJlKFwiLi9hcHAvSldhbGxpc1BJXCIpO1xudmFyIGhhcm1vbmljU2VyaWVzXzEgPSByZXF1aXJlKFwiLi9hcHAvaGFybW9uaWNTZXJpZXNcIik7XG52YXIgb2RkTnVtYmVyU3VtXzEgPSByZXF1aXJlKFwiLi9hcHAvb2RkTnVtYmVyU3VtXCIpO1xudmFyIGV4cG9fc2VyaWVzX3N1bV8xID0gcmVxdWlyZShcIi4vYXBwL2V4cG9fc2VyaWVzX3N1bVwiKTtcbnZhciBMZWlibml6U2VyaWVzXzEgPSByZXF1aXJlKFwiLi9hcHAvTGVpYm5pelNlcmllc1wiKTtcbnZhciBudW1iZXJPZkhhbmRTaGFrZV8xID0gcmVxdWlyZShcIi4vYXBwL251bWJlck9mSGFuZFNoYWtlXCIpO1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xudmFyIGZ1bmNzID0gcmVxdWlyZShcIi4vYXBwL3V0aWxzXCIpO1xudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL2FwcC9yZW5kZXJcIik7XG52YXIgbWFyaWVfam9zZV9iZXJ0aW5fMSA9IHJlcXVpcmUoXCIuL2FwcC9tYXJpZV9qb3NlX2JlcnRpblwiKTtcbnZhciBoYW5kc2hha2VCdG4gPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwiaGFuZHNoYWtlXCIsIFwiSGFuZFNoYWtlXCIpO1xudmFyIG1qYkJ0biA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCIxNTRcIiwgXCIxNTRcIik7XG52YXIgbnVtYmVyT2ZJbnB1dEJveCA9IDA7XG52YXIgaGFybW9uaWNTZXJpZXNCdG4gPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwiaGFybW9uaWMtc2VyaWVzXCIsIFwiSGFybW9uaWMgU2VyaWVzIFN1bVwiKTtcbnZhciBsZWlibml6U2VyaWVzQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImxlaWJuaXotc2VyaWVzXCIsIFwiTGVpYm5peiBTZXJpZXMncyBTdW1cIik7XG52YXIgc3VtT2ZPZGRzQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcInN1bS1vZi1vZGRzXCIsIFwiU3VtIE9kZCBOdW1iZXJzXCIpO1xudmFyIGlzUHJpbWUgPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwiaXMtcHJpbWVcIiwgXCJJcyBpdCBQcmltZSBOdW1iZXJcIik7XG52YXIgcHJpbWVGYWN0b3IgPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwicHJpbWUtZmFjdG9yXCIsIFwiUHJpbWUgZmFjdG9yc1wiKTtcbnZhciBleHBvbmVudGlhbCA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCJleHBvbmVudGlhbFwiLCBcIkV4cG9uZW50aWFsIHNlcmllcydzIHN1bVwiKTtcbnZhciBKV2FsbGlzID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImpvaG4td2FsbGlzXCIsIFwiUEkgd2l0aCBKb2huIFdhbGxpc1wiKTtcbmhhcm1vbmljU2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIjEgKyAxLzIrIDEvMyArIDEvNFwiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoaGFybW9uaWNTZXJpZXNfMS5oYXJtb25pY1NlcmllcywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbmhhbmRzaGFrZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXNjID0gXCJUaGlzIGlzIGEgZGVzY1wiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwobnVtYmVyT2ZIYW5kU2hha2VfMS5udW1iZXJPZkhhbmRTaGFrZSwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbmxlaWJuaXpTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiTGVpYm5peiBTZXJpZXM6IM+ALzQgPSAxLzEgLSAxLzMgKyAxLzUgLSAxIC83ICsgMS85IMKxIC4uLlwiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoTGVpYm5pelNlcmllc18xLkxlaWJuaXpTZXJpZXMsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG5pc1ByaW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIklzIHRoZSBnaXZlbiBudW1iZXIgYSBwcmltZSBudW1iZXIgP1wiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoZnVuY3MuaXNQcmltZSwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbnByaW1lRmFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIlNob3dzIHByaW1lIGZhY3RvciBvZiBhIG51bWJlclwiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwocHJpbWVGYWN0b3JzXzEucHJpbWVGYWN0b3JzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuc3VtT2ZPZGRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIlN1bXMgb2RkIG51bWJlcnNcIjtcbiAgICBudW1iZXJPZklucHV0Qm94ID0gMTtcbiAgICByZW5kZXIuZGlzcGxheU1vZGFsKG9kZE51bWJlclN1bV8xLnN1bU9mT2RkTnVtYmVycywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbkpXYWxsaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwicGkvMiA9IDIvMSAqIDIvMyAqIDQvMyAqIDQvNSAqIDYvNSAqIDgvNyogOC85ICssIC4uIFwiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoSldhbGxpc1BJXzEuSldhbGxpc1BJLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xubWpiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIiBUaGUgZ2l2ZW4gbnVtYmVyIGhhcyB0byBiZSBkaXZpZGFibGUgYnkgMywgdGhlIGZvbGxvd2luZyBudW1iZXIgd291bGQgYmUgdGhlIHN1bSBvZiBcXG4gaXRzIGRpZ2l0cyBcXG4gZXhhbXBsZSBmb3IgMzM6IFxcbiAgIDU0LDE4OSwxMjQyLDgxLDUxMywxNTMsMTUzIFwiO1xuICAgIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwobWFyaWVfam9zZV9iZXJ0aW5fMS5tamIsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG5leHBvbmVudGlhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXNjID0gXCIgZV54ID0gMSArIHggKyAoeF4yKS8yISArICh4XjMpLzMhICsoIHheNCkvNCEgKyAoeF41KS81ISArLi4uICsgKHhebikvbiFcIjtcbiAgICBudW1iZXJPZklucHV0Qm94ID0gMjtcbiAgICByZW5kZXIuZGlzcGxheU1vZGFsKGV4cG9fc2VyaWVzX3N1bV8xLmV4cG9uZW50aWFsU2VyaWVzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==