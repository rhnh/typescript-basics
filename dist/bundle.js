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
exports.push([module.i, "button {\n  background-color: #4caf50;\n  font-size: 1em;\n  border: none; /* Remove borders */\n  color: white; /* Add a text color */\n  padding: 14px 28px; /* Add some padding */\n  cursor: pointer; /* Add a pointer cursor on mouse-over */\n  width: 20%;\n  margin: auto;\n}\nbody,\n* + * {\n  margin-top: 1em;\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 200vh;\n  margin: 0;\n}\n\n.modal-placeholder {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n.modal-body {\n  position: fixed;\n  top: 3em;\n  bottom: 3em;\n  right: 20%;\n  left: 20%;\n  padding: 2em 3em;\n  background-color: #fff;\n  overflow: auto;\n  z-index: 2;\n  border-radius: 4px;\n}\n.close {\n  position: absolute;\n  top: 0.3em;\n  right: 0.3em;\n  cursor: pointer;\n  text-indent: 10em;\n  width: 1em;\n  height: 1em;\n  border: 0;\n  padding: 0.3em;\n  background-color: #fff;\n}\n\n.close::after {\n  position: absolute;\n  line-height: 0.5;\n  top: 0.2em;\n  left: 0.1em;\n  text-indent: 0;\n  content: \"\\00D7\";\n  content: \"\\2715\";\n  color: #f2324c;\n}\n\n#modal {\n  display: none;\n}\n\n.buttons {\n  margin-left: 1.5em;\n}\n\n.top-banner {\n  padding: 1em 0;\n  background-color: #dff3aa;\n}\n.top-banner-inner {\n  width: 90%;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0;\n}\n.top-banner-inner > p {\n  font-size: 2em;\n  margin: 0;\n  color: #4caf50;\n  color: #f2324c;\n}\n\n#cancel {\n  background: #f2324c;\n}\n.form-name,\nselect {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.page-footer {\n  margin-top: 3em;\n  padding: 1em 0;\n  background-color: var(--light-gray);\n  color: var(--gray);\n}\n.page-footer__inner {\n  margin: 0 auto;\n  max-width: 1080px;\n  text-align: center;\n  font-size: 0.8rem;\n}\n#result {\n  background: #dff3aa;\n  color: green;\n  padding: 2em;\n  border: 1px solid green;\n  border-radius: 0.2em;\n}\n", ""]);


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
//#################################################
//Handshake
var handshakeBtn = render.createButton("handshake", "HandShake");
handshakeBtn.addEventListener("click", function () {
    var desc = "This is a desc";
    var numberOfInputBox = 1;
    render.displayModal(numberOfHandShake_1.numberOfHandShake, desc, numberOfInputBox);
});
//#################################################
//Satz 153
var mjbBtn = render.createButton("153", "153");
mjbBtn.addEventListener("click", function () {
    var desc = " The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 ";
    var numberOfInputBox = 1;
    render.displayModal(marie_jose_bertin_1.mjb, desc, numberOfInputBox);
});
//#################################################
//Harmonic Series
var harmonicSeriesBtn = render.createButton("harmonic-series", "Harmonic Series Sum");
harmonicSeriesBtn.addEventListener("click", function () {
    var desc = "1 + 1/2+ 1/3 + 1/4";
    var numberOfInputBox = 1;
    render.displayModal(harmonicSeries_1.harmonicSeries, desc, numberOfInputBox);
});
//#################################################
//Leibniz Series
var leibnizSeriesBtn = render.createButton("leibniz-series", "Leibniz Series's Sum");
leibnizSeriesBtn.addEventListener("click", function () {
    var desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
    var numberOfInputBox = 1;
    render.displayModal(LeibnizSeries_1.LeibnizSeries, desc, numberOfInputBox);
});
//#################################################
//Sum of Odd Series
var sumOfOddsBtn = render.createButton("sum-of-odds", "Sum Odd Numbers");
sumOfOddsBtn.addEventListener("click", function () {
    var desc = "Sums odd numbers";
    var numberOfInputBox = 1;
    render.displayModal(oddNumberSum_1.sumOfOddNumbers, desc, numberOfInputBox);
});
//#################################################
//Is Prime
var isPrime = render.createButton("is-prime", "IsPrime");
isPrime.addEventListener("click", function () {
    var desc = "Is the given number a prime number ?";
    var numberOfInputBox = 1;
    render.displayModal(funcs.isPrime, desc, numberOfInputBox);
});
//#################################################
//Prime Factor
var primeFactor = render.createButton("prime-factor", "Prime factors");
primeFactor.addEventListener("click", function () {
    var desc = "Shows prime factor of a number";
    var numberOfInputBox = 1;
    render.displayModal(primeFactors_1.primeFactors, desc, numberOfInputBox);
});
//#################################################
//exponential Series
var exponential = render.createButton("exponential", "Exponential series's sum");
exponential.addEventListener("click", function () {
    var desc = " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
    var numberOfInputBox = 2;
    render.displayModal(expo_series_sum_1.exponentialSeries, desc, numberOfInputBox);
});
//#################################################
//John Wallis
var JWallis = render.createButton("john-wallis", "PI:John Wallis Method");
JWallis.addEventListener("click", function () {
    var desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
    var numberOfInputBox = 1;
    render.displayModal(JWallisPI_1.JWallisPI, desc, numberOfInputBox);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvSldhbGxpc1BJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvTGVpYm5pelNlcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2V4cG9fc2VyaWVzX3N1bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hhcm1vbmljU2VyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFyaWVfam9zZV9iZXJ0aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tZW1vaXplZEZhY3RvcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL251bWJlck9mSGFuZFNoYWtlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvb2RkTnVtYmVyU3VtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpbWVGYWN0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFF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a0hBQXNEOztBQUU1RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBBZGQgYSB0ZXh0IGNvbG9yICovXFxuICBwYWRkaW5nOiAxNHB4IDI4cHg7IC8qIEFkZCBzb21lIHBhZGRpbmcgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBjdXJzb3Igb24gbW91c2Utb3ZlciAqL1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuYm9keSxcXG4qICsgKiB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAyMDB2aDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1vZGFsLXBsYWNlaG9sZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5tb2RhbC1ib2R5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogM2VtO1xcbiAgYm90dG9tOiAzZW07XFxuICByaWdodDogMjAlO1xcbiAgbGVmdDogMjAlO1xcbiAgcGFkZGluZzogMmVtIDNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuM2VtO1xcbiAgcmlnaHQ6IDAuM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1pbmRlbnQ6IDEwZW07XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5jbG9zZTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGluZS1oZWlnaHQ6IDAuNTtcXG4gIHRvcDogMC4yZW07XFxuICBsZWZ0OiAwLjFlbTtcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgY29udGVudDogXFxcIlxcXFwwMEQ3XFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxNVxcXCI7XFxuICBjb2xvcjogI2YyMzI0YztcXG59XFxuXFxuI21vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcXG59XFxuXFxuLnRvcC1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmM2FhO1xcbn1cXG4udG9wLWJhbm5lci1pbm5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi50b3AtYmFubmVyLWlubmVyID4gcCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6ICNmMjMyNGM7XFxufVxcblxcbiNjYW5jZWwge1xcbiAgYmFja2dyb3VuZDogI2YyMzI0YztcXG59XFxuLmZvcm0tbmFtZSxcXG5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5wYWdlLWZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAzZW07XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xcbn1cXG4ucGFnZS1mb290ZXJfX2lubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuI3Jlc3VsdCB7XFxuICBiYWNrZ3JvdW5kOiAjZGZmM2FhO1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgSm9obiBXYWxsaXMgU2VyaWVzJyBTdW1tYXRpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vUEkgPSAyKnsoMi8xKSooMi8zKSooNC8zKSooNC81KSooNi81KSooNi83KSp9XG4vL2xvb3Bcbi8vIGV4cG9ydCBmdW5jdGlvbiBKV2FsbGlzUEkoazogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgbGV0IHBpOiBudW1iZXIgPSAxO1xuLy8gICBsZXQgaSA9IDEsXG4vLyAgICAgeiA9IDEsIC8vWmFlaGxlclxuLy8gICAgIG4gPSAyOyAvL05lbm5lclxuLy8gICB3aGlsZSAoaSA8PSBrKSB7XG4vLyAgICAgcGkgKj0gbiAvIHo7XG4vLyAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4vLyAgICAgICBuICs9IDI7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHogKz0gMjtcbi8vICAgICB9XG4vLyAgICAgaSsrO1xuLy8gICB9XG4vLyAgIHJldHVybiBwaSAqIDI7XG4vLyB9XG5leHBvcnRzLkpXYWxsaXNQSSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciB6ID0gMSwgbiA9IDI7XG4gICAgdmFyIHAgPSAxO1xuICAgIEFycmF5LmZyb20oQXJyYXkoK3ZhbHVlKS5rZXlzKCkpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggKyAxOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHAgKj0gbiAvIHo7XG4gICAgICAgIGlmICh4ICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeiArPSAyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHAgKiAyO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBMZWlibml6IFNlcmllcydzIHN1bW1hdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLyoqIExlaWJuaXogc2VyaWVzJyBzdW1tYXRpb24gd2l0aCBsb29wc1xuICogz4AvNCA9IDEvMSAtIDEvMyArIDEvNSAtIDEgLzcgKyAxLzkgwrEgLi4uXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBMZWlibml6U2VyaWVzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICBsZXQgc3VtOiBudW1iZXIgPSAwO1xuLy8gICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgMiAqIHZhbHVlOyBpKyspIHtcbi8vICAgICBpZiAob2RkTnVtYmVyKGkpKSB7XG4vLyAgICAgICBzdW0gKj0gLTE7XG4vLyAgICAgICBzdW0gKz0gMSAvIGk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlmIChzdW0gPCAwKSB7XG4vLyAgICAgc3VtICo9IC0xO1xuLy8gICB9XG4vLyAgIHJldHVybiAoc3VtICo9IDQpO1xuLy8gfVxuZXhwb3J0cy5MZWlibml6U2VyaWVzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChBcnJheS5mcm9tKEFycmF5KCt2YWx1ZSAqIDIpLmtleXMoKSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gdXRpbHNfMS5pc09kZCh4KTsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYywgaSkge1xuICAgICAgICB2YXIgdiA9IHV0aWxzXzEuaXNFdmVuKGkpID8gMSA6IC0xO1xuICAgICAgICByZXR1cm4gYSArIHYgLyBjO1xuICAgIH0pICogNCk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1lbW9pemVkRmFjdG9yaWFsXzEgPSByZXF1aXJlKFwiLi9tZW1vaXplZEZhY3RvcmlhbFwiKTtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEV4cG9uZW50aWFsIFNlcmllcydzIFN1bW1hdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gLyoqIEV4cG9uZW50aWFsIFNlcmllcyB3aXRoIGxvb3BzXG4vLyAgKiAgZV54ID0gMSArIHggKyAoeF4yKS8yISArICh4XjMpLzMhICsoIHheNCkvNCEgKyAoeF41KS81ISArLi4uICsgKHhebikvbiFcbi8vICAqIEBwYXJhbSB4IG51bWJlclxuLy8gICogQHBhcmFtIG4gbnVtYmVyXG4vLyAgKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBleHBvbmVudGlhbFNlcmllcyh4OiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciB7XG4vLyAgIGxldCByZXN1bHQ6IG51bWJlciA9IDE7XG4vLyAgIGxldCBlOiBudW1iZXIgPSAxO1xuLy8gICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDw9IG47IGkrKykge1xuLy8gICAgIGUgKj0geCAvIGk7IC8vIHRoZSBudW1lcmF0b3IgIHggd2lsbCAgKGNvbnN0YW50KSBhbmQgIHRoZSAgZGVub21pbmF0b3IgIGkgIHdpbGwgYmUgIGluY3JlbWVudGVkIGFuZCBtdWx0aXBsaWVkXG4vLyAgICAgcmVzdWx0ICs9IGU7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHJlc3VsdDtcbi8vIH1cbmV4cG9ydHMuZXhwb25lbnRpYWxTZXJpZXMgPSBmdW5jdGlvbiAoeCwgbikge1xuICAgIHJldHVybiAoMSArXG4gICAgICAgIHggK1xuICAgICAgICBBcnJheS5mcm9tKEFycmF5KG4gLSAxKS5rZXlzKCkpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICsgMjsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIGV4cG8oeCwgbikgLyBtZW1vaXplZEZhY3RvcmlhbF8xLm1lbW9pemVkRmFjdG9yaWFsKG4pOyB9KVxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYykgeyByZXR1cm4gYSArIGM7IH0pKTtcbn07XG52YXIgZXhwbyA9IGZ1bmN0aW9uICh4LCBuKSB7IHJldHVybiBNYXRoLnBvdyh4LCBuKTsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaGFybW9uaWNTZXJpZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheSgrdmFsdWUpLmtleXMoKSkucmVkdWNlKGZ1bmN0aW9uIChhLCBjKSB7IHJldHVybiBhICsgMSAvIChjICsgMSk7IH0pICsgMTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIE1hcmllLUpvc2UgQmVydGluIG51bWJlciAvIFNhdHogMTUzXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLyoqXG4gKiAqIFRoZSBudW1iZXIgZ2l2ZW4gbnVtYmVyIFggaXMgZGl2aWRhYmxlIGJ5IDNcbiAqICogVGhlIGZvbGxvd2luZyBudW1iZXIgTiBpcyAgdGhlIHN1bSBvZiB0aGUgZGlnaXRzIG9mIHRoZSBnaXZlbiBudW1iZXIgWCBwb3dlcmVkIGJ5IDNcbiAqICB0aGUgZ2l2ZW4gbnVtYmVyIGlzIDE1LCAxXjMgKyAxXjMgPSAxMjYsICAxXjMgKyAyXjMgKyA2XjMgPSAyMjUsIC4uLlxuICogQHBhcmFtIG51bWJlclxuICogQHJldHVybiBudW1iZXJbXVxuICovXG5leHBvcnRzLm1qYiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIG4gPSAreDtcbiAgICBpZiAobWpiUmVjdXJzaW9uKG4sIFtdKVswXSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gXCJUaGUgaW5wdXQgc2hvdWxkIGJlIGRpdmlkYWJsZSBieSAzLlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWpiUmVjdXJzaW9uKG4sIFtdKS5qb2luKCk7XG59O1xuZnVuY3Rpb24gbWpiUmVjdXJzaW9uKHgsIGRpZ2l0cykge1xuICAgIHZhciBzdHJpbmdYID0gKFwiXCIgKyB4KS5zcGxpdChcIlwiKTtcbiAgICBpZiAoK3ggJSAzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBbMF07XG4gICAgfVxuICAgIGlmICh4ID09PSAxNTMpIHtcbiAgICAgICAgZGlnaXRzLnB1c2goMTUzKTtcbiAgICAgICAgcmV0dXJuIGRpZ2l0cztcbiAgICB9XG4gICAgdmFyIG51bWJlckFycmF5WCA9IHN0cmluZ1gubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBNYXRoLnBvdygreCwgMyk7IH0pO1xuICAgIHZhciBrID0gbnVtYmVyQXJyYXlYLnJlZHVjZShmdW5jdGlvbiAoYSwgYykgeyByZXR1cm4gYSArIGM7IH0pO1xuICAgIGRpZ2l0cy5wdXNoKGspO1xuICAgIG1qYlJlY3Vyc2lvbihrLCBkaWdpdHMpO1xuICAgIHJldHVybiBkaWdpdHM7XG59XG5leHBvcnRzLm1qYlJlY3Vyc2lvbiA9IG1qYlJlY3Vyc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubWVtb2l6ZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFibGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gdGFibGVbYXJnXSB8fCBmbihhcmcpOyB9O1xufTtcbmV4cG9ydHMuZmFjdG9yaWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiBudW0gPCAyID8gMSA6ICtudW0gKiBleHBvcnRzLmZhY3RvcmlhbCgrbnVtIC0gMSk7XG59O1xuZXhwb3J0cy5tZW1vaXplZEZhY3RvcmlhbCA9IGV4cG9ydHMubWVtb2l6ZWQoZXhwb3J0cy5mYWN0b3JpYWwpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gbnVtYmVyT2ZIYW5kU2hha2Uobikge1xuICAgIHZhciBzdW0gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgK247IGkrKykge1xuICAgICAgICBzdW0gKz0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cbmV4cG9ydHMubnVtYmVyT2ZIYW5kU2hha2UgPSBudW1iZXJPZkhhbmRTaGFrZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBPZGQgTnVtYmVycycgU3VtbWF0aW9uICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vKiogU3VtIG9mIE9kZHMgTnVtYmVyc1xuICogMSszKzUuLi4uXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdW1PZk9kZE51bWJlcnModmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4vLyAgIGxldCBzdW06IG51bWJlciA9IDA7XG4vLyAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPD0gdmFsdWU7IGkrKykge1xuLy8gICAgIGlmIChvZGROdW1iZXIoaSkpIHtcbi8vICAgICAgIHN1bSArPSBpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4gc3VtO1xuLy8gfVxuLyoqXG4gKiAgcmVjdXJzc2lvblxuICogQHBhcmFtIHZhbHVlIG51bWJlclxuICpcblxuZXhwb3J0IGZ1bmN0aW9uIHN1bU9mT2RkTnVtYmVycyhuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiBuO1xuICB9IGVsc2Uge1xuICAgIGlmIChuICUgMiAhPT0gMCkge1xuICAgICAgcmV0dXJuIG4gKyBzdW1PZk9kZE51bWJlcnMobiAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VtT2ZPZGROdW1iZXJzKG4gLSAxKTtcbiAgICB9XG4gIH1cbn1cbiovXG5leHBvcnRzLnN1bU9mT2RkTnVtYmVycyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZXMgPSBBcnJheS5mcm9tKEFycmF5KCt2YWx1ZSkua2V5cygpKS5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggKyAxOyB9KTtcbiAgICByZXR1cm4gcmVzLnJlZHVjZShmdW5jdGlvbiAoYSwgYykge1xuICAgICAgICB2YXIgcmVzID0gIXV0aWxzXzEuaXNFdmVuKGMpID8gYyA6IDA7XG4gICAgICAgIHJldHVybiBhICsgcmVzO1xuICAgIH0pO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG4vKipcbiAqXG4gKiBAcGFyYW0gdmFsdWUgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHByaW1lRmFjdG9ycyh2YWx1ZSkge1xuICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgIGlmICghTnVtYmVyKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgIGlmICh1dGlsc18xLmlzUHJpbWUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSArIFwiIGlzIGEgcHJpbWUgbnVtYmVyXCI7XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbCA9IHZhbHVlO1xuICAgIHZhciBzdHJSZXN1bHQgPSBcIlwiO1xuICAgIHdoaWxlICh2YWx1ZSAlIDIgPT09IDApIHtcbiAgICAgICAgc3RyUmVzdWx0ICs9IFwiICogXCIgKyAyO1xuICAgICAgICB2YWx1ZSAvPSAyO1xuICAgIH1cbiAgICAvL3NpbmNlIHZhbHVlIGlzIG9kZCBvciBwcmltZSBieSBub3dcbiAgICBmb3IgKHZhciBpID0gMzsgaSAqIGkgPD0gdmFsdWU7IGkgPSBpICsgMikge1xuICAgICAgICB3aGlsZSAodmFsdWUgJSBpID09PSAwKSB7XG4gICAgICAgICAgICBzdHJSZXN1bHQgKz0gXCIgKiBcIiArIGk7XG4gICAgICAgICAgICB2YWx1ZSAvPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0clJlc3VsdCA9ICh2YWx1ZSAhPT0gMSA/IHZhbHVlICsgXCJcIiA6IFwiXCIpICsgc3RyUmVzdWx0ICsgXCIgPSBcIiArIG9yaWdpbmFsO1xuICAgIGlmIChzdHJSZXN1bHQuY2hhckF0KDApID09PSBcIlwiIHx8XG4gICAgICAgIHN0clJlc3VsdC5jaGFyQXQoMCkgPT09IFwiIFwiIHx8XG4gICAgICAgIHN0clJlc3VsdC5jaGFyQXQoMCkgPT09IFwiKlwiKVxuICAgICAgICBzdHJSZXN1bHQgPSBzdHJSZXN1bHQuc3Vic3RyKDIpO1xuICAgIHJldHVybiBzdHJSZXN1bHQ7XG59XG5leHBvcnRzLnByaW1lRmFjdG9ycyA9IHByaW1lRmFjdG9ycztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBtb2RhbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm1cIik7XG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xudmFyIGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbnZhciBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKTtcbmZ1bmN0aW9uIGFkZEVsZW1lbnQoZWxlbWVudElkLCBlbGVtZW50VHlwZSwgcGFyZW50RWxlbWVudCkge1xuICAgIHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGNoaWxkLmNsYXNzTmFtZSA9IFwiZm9ybS1uYW1lXCI7XG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudElkKTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGFkZE11bHRpcGxlRWxlbWVudChudW1iZXJPZkVsZW1lbnRzLCBlbGVtZW50VHlwZSwgZWxlbWVudElkLCBwYXJlbnRFbGVtZW50KSB7XG4gICAgdmFyIGh0bWxFbGVtZW50cyA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgdmFyIGlkID0gaSArIDE7XG4gICAgICAgIGh0bWxFbGVtZW50cyA9IGFkZEVsZW1lbnQoZWxlbWVudElkICsgaWQsIGVsZW1lbnRUeXBlLCBwYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxFbGVtZW50cztcbn1cbmV4cG9ydHMuYWRkTXVsdGlwbGVFbGVtZW50ID0gYWRkTXVsdGlwbGVFbGVtZW50O1xuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydHMucmVtb3ZlQWxsQ2hpbGRyZW4gPSByZW1vdmVBbGxDaGlsZHJlbjtcbmZ1bmN0aW9uIGFkZFBhcmFncmFwaChlbGVtZW50SWQsIGRlc2MpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBkZXNjO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0cy5hZGRQYXJhZ3JhcGggPSBhZGRQYXJhZ3JhcGg7XG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlcyhtb2RhbEZvcm0pIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbEZvcm0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1vZGFsRm9ybVtpXS5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChtb2RhbEZvcm1baV0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5leHBvcnRzLmdldElucHV0VmFsdWVzID0gZ2V0SW5wdXRWYWx1ZXM7XG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtb2RhbEZvcm0pO1xufSk7XG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obW9kYWxGb3JtKTtcbn0pO1xuZnVuY3Rpb24gZGlzcGxheU1vZGFsKGNhbGxCYWNrLCBkZXNjLCBudW1iZXJJbnB1dEJveCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgdmFyIENhbGN1bGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRlXCIpLCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXN1bHRcIik7XG4gICAgYWRkTXVsdGlwbGVFbGVtZW50KG51bWJlcklucHV0Qm94LCBcIklOUFVUXCIsIFwiZm9ybU5hbWVcIiwgbW9kYWxGb3JtKTtcbiAgICBhZGRQYXJhZ3JhcGgoXCJkZXNjcmlwdGlvblwiLCBcIiBIYXJtb25pYyBTZXJpZXMgXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2M7XG4gICAgQ2FsY3VsYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBnZXRJbnB1dFZhbHVlcyhtb2RhbEZvcm0pO1xuICAgICAgICB2YXIgdiA9IGNhbGxCYWNrLmFwcGx5KHZvaWQgMCwgdmFsdWVzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgICAgIHYgPSB2LmpvaW4oKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaW5uZXJUZXh0ID0gdjtcbiAgICB9KTtcbiAgICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQocmVzdWx0KTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuZXhwb3J0cy5kaXNwbGF5TW9kYWwgPSBkaXNwbGF5TW9kYWw7XG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oaWQsIHR4dCkge1xuICAgIHZhciBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIgKyBpZCk7XG4gICAgYi5pbm5lckhUTUwgPSB0eHQ7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGIpO1xuICAgIHZhciBidXR0b25DbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZkJ1dHRvblwiKTtcbiAgICBidXR0b25DbGFzcy5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBiO1xufVxuZXhwb3J0cy5jcmVhdGVCdXR0b24gPSBjcmVhdGVCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vL3V0aWxzXG5mdW5jdGlvbiBpc09kZCh2YWx1ZSkge1xuICAgIHJldHVybiBpc0V2ZW4odmFsdWUpID8gZmFsc2UgOiB0cnVlO1xufVxuZXhwb3J0cy5pc09kZCA9IGlzT2RkO1xuLy9cbmZ1bmN0aW9uIGlzRXZlbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAlIDIgPT09IDA7XG59XG5leHBvcnRzLmlzRXZlbiA9IGlzRXZlbjtcbi8qKlxuICogTyhzcXJ0KG4pKVxuICogQHBhcmFtIHZhbHVlIG51bWJlclxuICovXG5mdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIDw9IDEpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAodmFsdWUgPD0gMylcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIDIgb3IgMyA9PiB0cnVlXG4gICAgaWYgKHZhbHVlICUgMiA9PT0gMCB8fCB2YWx1ZSAlIDMgPT09IDApIHtcbiAgICAgICAgLy8gY2FuIGJlIGRpdmlkZWQgYnkgMiBvciAzID0+IGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDU7IGkgKiBpIDw9IHZhbHVlOyBpID0gaSArIDYpIHtcbiAgICAgICAgLy92YWx1ZSA+PSAyNSA/XG4gICAgICAgIGlmICh2YWx1ZSAlIGkgPT09IDAgfHwgdmFsdWUgJSAoaSArIDIpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzUHJpbWUgPSBpc1ByaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHByaW1lRmFjdG9yc18xID0gcmVxdWlyZShcIi4vYXBwL3ByaW1lRmFjdG9yc1wiKTtcbnZhciBKV2FsbGlzUElfMSA9IHJlcXVpcmUoXCIuL2FwcC9KV2FsbGlzUElcIik7XG52YXIgaGFybW9uaWNTZXJpZXNfMSA9IHJlcXVpcmUoXCIuL2FwcC9oYXJtb25pY1Nlcmllc1wiKTtcbnZhciBvZGROdW1iZXJTdW1fMSA9IHJlcXVpcmUoXCIuL2FwcC9vZGROdW1iZXJTdW1cIik7XG52YXIgZXhwb19zZXJpZXNfc3VtXzEgPSByZXF1aXJlKFwiLi9hcHAvZXhwb19zZXJpZXNfc3VtXCIpO1xudmFyIExlaWJuaXpTZXJpZXNfMSA9IHJlcXVpcmUoXCIuL2FwcC9MZWlibml6U2VyaWVzXCIpO1xudmFyIG51bWJlck9mSGFuZFNoYWtlXzEgPSByZXF1aXJlKFwiLi9hcHAvbnVtYmVyT2ZIYW5kU2hha2VcIik7XG5yZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XG52YXIgZnVuY3MgPSByZXF1aXJlKFwiLi9hcHAvdXRpbHNcIik7XG52YXIgcmVuZGVyID0gcmVxdWlyZShcIi4vYXBwL3JlbmRlclwiKTtcbnZhciBtYXJpZV9qb3NlX2JlcnRpbl8xID0gcmVxdWlyZShcIi4vYXBwL21hcmllX2pvc2VfYmVydGluXCIpO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL0hhbmRzaGFrZVxudmFyIGhhbmRzaGFrZUJ0biA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCJoYW5kc2hha2VcIiwgXCJIYW5kU2hha2VcIik7XG5oYW5kc2hha2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiVGhpcyBpcyBhIGRlc2NcIjtcbiAgICB2YXIgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gICAgcmVuZGVyLmRpc3BsYXlNb2RhbChudW1iZXJPZkhhbmRTaGFrZV8xLm51bWJlck9mSGFuZFNoYWtlLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL1NhdHogMTUzXG52YXIgbWpiQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcIjE1M1wiLCBcIjE1M1wiKTtcbm1qYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXNjID0gXCIgVGhlIGdpdmVuIG51bWJlciBoYXMgdG8gYmUgZGl2aWRhYmxlIGJ5IDMsIHRoZSBmb2xsb3dpbmcgbnVtYmVyIHdvdWxkIGJlIHRoZSBzdW0gb2YgXFxuIGl0cyBkaWdpdHMgXFxuIGV4YW1wbGUgZm9yIDMzOiBcXG4gICA1NCwxODksMTI0Miw4MSw1MTMsMTUzLDE1MyBcIjtcbiAgICB2YXIgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gICAgcmVuZGVyLmRpc3BsYXlNb2RhbChtYXJpZV9qb3NlX2JlcnRpbl8xLm1qYiwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9IYXJtb25pYyBTZXJpZXNcbnZhciBoYXJtb25pY1Nlcmllc0J0biA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCJoYXJtb25pYy1zZXJpZXNcIiwgXCJIYXJtb25pYyBTZXJpZXMgU3VtXCIpO1xuaGFybW9uaWNTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiMSArIDEvMisgMS8zICsgMS80XCI7XG4gICAgdmFyIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoaGFybW9uaWNTZXJpZXNfMS5oYXJtb25pY1NlcmllcywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9MZWlibml6IFNlcmllc1xudmFyIGxlaWJuaXpTZXJpZXNCdG4gPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwibGVpYm5pei1zZXJpZXNcIiwgXCJMZWlibml6IFNlcmllcydzIFN1bVwiKTtcbmxlaWJuaXpTZXJpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiTGVpYm5peiBTZXJpZXM6IM+ALzQgPSAxLzEgLSAxLzMgKyAxLzUgLSAxIC83ICsgMS85IMKxIC4uLlwiO1xuICAgIHZhciBudW1iZXJPZklucHV0Qm94ID0gMTtcbiAgICByZW5kZXIuZGlzcGxheU1vZGFsKExlaWJuaXpTZXJpZXNfMS5MZWlibml6U2VyaWVzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL1N1bSBvZiBPZGQgU2VyaWVzXG52YXIgc3VtT2ZPZGRzQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcInN1bS1vZi1vZGRzXCIsIFwiU3VtIE9kZCBOdW1iZXJzXCIpO1xuc3VtT2ZPZGRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlc2MgPSBcIlN1bXMgb2RkIG51bWJlcnNcIjtcbiAgICB2YXIgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gICAgcmVuZGVyLmRpc3BsYXlNb2RhbChvZGROdW1iZXJTdW1fMS5zdW1PZk9kZE51bWJlcnMsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vSXMgUHJpbWVcbnZhciBpc1ByaW1lID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImlzLXByaW1lXCIsIFwiSXNQcmltZVwiKTtcbmlzUHJpbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiSXMgdGhlIGdpdmVuIG51bWJlciBhIHByaW1lIG51bWJlciA/XCI7XG4gICAgdmFyIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoZnVuY3MuaXNQcmltZSwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9QcmltZSBGYWN0b3JcbnZhciBwcmltZUZhY3RvciA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCJwcmltZS1mYWN0b3JcIiwgXCJQcmltZSBmYWN0b3JzXCIpO1xucHJpbWVGYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiU2hvd3MgcHJpbWUgZmFjdG9yIG9mIGEgbnVtYmVyXCI7XG4gICAgdmFyIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwocHJpbWVGYWN0b3JzXzEucHJpbWVGYWN0b3JzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL2V4cG9uZW50aWFsIFNlcmllc1xudmFyIGV4cG9uZW50aWFsID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImV4cG9uZW50aWFsXCIsIFwiRXhwb25lbnRpYWwgc2VyaWVzJ3Mgc3VtXCIpO1xuZXhwb25lbnRpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVzYyA9IFwiIGVeeCA9IDEgKyB4ICsgKHheMikvMiEgKyAoeF4zKS8zISArKCB4XjQpLzQhICsgKHheNSkvNSEgKy4uLiArICh4Xm4pL24hXCI7XG4gICAgdmFyIG51bWJlck9mSW5wdXRCb3ggPSAyO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoZXhwb19zZXJpZXNfc3VtXzEuZXhwb25lbnRpYWxTZXJpZXMsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vSm9obiBXYWxsaXNcbnZhciBKV2FsbGlzID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImpvaG4td2FsbGlzXCIsIFwiUEk6Sm9obiBXYWxsaXMgTWV0aG9kXCIpO1xuSldhbGxpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXNjID0gXCJwaS8yID0gMi8xICogMi8zICogNC8zICogNC81ICogNi81ICogOC83KiA4LzkgKywgLi4gXCI7XG4gICAgdmFyIG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICAgIHJlbmRlci5kaXNwbGF5TW9kYWwoSldhbGxpc1BJXzEuSldhbGxpc1BJLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==