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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ "./src/app/flip.ts":
/*!*************************!*\
  !*** ./src/app/flip.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * - The aim of this challenge is to flip the number using recursion
 * - Takes a number and returns it in reverse order
 * @param {number} x
 * @returns x
 */
function flip(x) {
    var len = getLength(x);
    return flipRecursion(x, len);
}
exports.flip = flip;
var flipRecursion = function (x, len) {
    return len === 0
        ? x
        : Math.pow(10, len - 1) * (x % 10) +
            flipRecursion(Math.floor(x / 10), len - 1);
};
/**
 * Takes a number x and return the length of the number
 * @param {number} x
 * @returns {number} - length of the given number
 */
var getLength = function (x) {
    return x === 0 ? 0 : 1 + getLength(Math.floor(x / 10));
};


/***/ }),

/***/ "./src/app/harmonicSeries.ts":
/*!***********************************!*\
  !*** ./src/app/harmonicSeries.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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

Object.defineProperty(exports, "__esModule", { value: true });
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
var flip_1 = __webpack_require__(/*! ./app/flip */ "./src/app/flip.ts");
//#################################################
//Handshake
var flipBtn = render.createButton("flip-number", "Flip The Number");
flipBtn.addEventListener("click", function () {
    var desc = "Give a number to flip it. Example 123 would be 321!";
    var numberOfInputBox = 1;
    render.displayModal(flip_1.flip, desc, numberOfInputBox);
});
//#################################################
//Handshake
var handshakeBtn = render.createButton("handshake", "HandShake");
handshakeBtn.addEventListener("click", function () {
    var desc = "A guy in a party shakes the hands of everyone once. How hand times does he shakes \n hands of peole in total";
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
var windowVar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvSldhbGxpc1BJLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvTGVpYm5pelNlcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2V4cG9fc2VyaWVzX3N1bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZsaXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oYXJtb25pY1Nlcmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21hcmllX2pvc2VfYmVydGluLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWVtb2l6ZWRGYWN0b3JpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9udW1iZXJPZkhhbmRTaGFrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29kZE51bWJlclN1bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ByaW1lRmFjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzhmMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVE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RDtBQUNuRCxvQkFBb0I7QUFDcEIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FDckMsYUFBYSxFQUNiLDBCQUEwQixDQUMzQixDQUFDO0FBQ0YsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNwQyxJQUFNLElBQUksR0FDUiwwRUFBMEUsQ0FBQztJQUM3RSxJQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUMzQixNQUFNLENBQUMsWUFBWSxDQUFDLG1DQUFpQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsbURBQW1EO0FBQ25ELGFBQWE7QUFDYixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQzVFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDaEMsSUFBTSxJQUFJLEdBQUcsc0RBQXNELENBQUM7SUFDcEUsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEhILGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXFxuICBjb2xvcjogd2hpdGU7IC8qIEFkZCBhIHRleHQgY29sb3IgKi9cXG4gIHBhZGRpbmc6IDE0cHggMjhweDsgLyogQWRkIHNvbWUgcGFkZGluZyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIGN1cnNvciBvbiBtb3VzZS1vdmVyICovXFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5ib2R5LFxcbiogKyAqIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDIwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW9kYWwtcGxhY2Vob2xkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgei1pbmRleDogMTtcXG59XFxuLm1vZGFsLWJvZHkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzZW07XFxuICBib3R0b206IDNlbTtcXG4gIHJpZ2h0OiAyMCU7XFxuICBsZWZ0OiAyMCU7XFxuICBwYWRkaW5nOiAyZW0gM2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC4zZW07XFxuICByaWdodDogMC4zZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWluZGVudDogMTBlbTtcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNsb3NlOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsaW5lLWhlaWdodDogMC41O1xcbiAgdG9wOiAwLjJlbTtcXG4gIGxlZnQ6IDAuMWVtO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcXDAwRDdcXFwiO1xcbiAgY29udGVudDogXFxcIlxcXFwyNzE1XFxcIjtcXG4gIGNvbG9yOiAjZjIzMjRjO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xcbn1cXG5cXG4udG9wLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYzYWE7XFxufVxcbi50b3AtYmFubmVyLWlubmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnRvcC1iYW5uZXItaW5uZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogI2YyMzI0YztcXG59XFxuXFxuI2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiAjZjIzMjRjO1xcbn1cXG4uZm9ybS1uYW1lLFxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnBhZ2UtZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDNlbTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcbi5wYWdlLWZvb3Rlcl9faW5uZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4jcmVzdWx0IHtcXG4gIGJhY2tncm91bmQ6ICNkZmYzYWE7XFxuICBjb2xvcjogZ3JlZW47XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBKb2huIFdhbGxpcyBTZXJpZXMnIFN1bW1hdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9QSSA9IDIqeygyLzEpKigyLzMpKig0LzMpKig0LzUpKig2LzUpKig2LzcpKn1cbi8vbG9vcFxuLy8gZXhwb3J0IGZ1bmN0aW9uIEpXYWxsaXNQSShrOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICBsZXQgcGk6IG51bWJlciA9IDE7XG4vLyAgIGxldCBpID0gMSxcbi8vICAgICB6ID0gMSwgLy9aYWVobGVyXG4vLyAgICAgbiA9IDI7IC8vTmVubmVyXG4vLyAgIHdoaWxlIChpIDw9IGspIHtcbi8vICAgICBwaSAqPSBuIC8gejtcbi8vICAgICBpZiAoaSAlIDIgPT09IDApIHtcbi8vICAgICAgIG4gKz0gMjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgeiArPSAyO1xuLy8gICAgIH1cbi8vICAgICBpKys7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHBpICogMjtcbi8vIH1cbmV4cG9ydCBjb25zdCBKV2FsbGlzUEkgPSAodmFsdWU6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIGxldCB6ID0gMSxcbiAgICBuID0gMjtcbiAgbGV0IHAgPSAxO1xuICBBcnJheS5mcm9tKEFycmF5KCt2YWx1ZSkua2V5cygpKVxuICAgIC5tYXAoeCA9PiB4ICsgMSlcbiAgICAubWFwKHggPT4ge1xuICAgICAgcCAqPSBuIC8gejtcbiAgICAgIGlmICh4ICUgMiA9PT0gMCkge1xuICAgICAgICBuICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB6ICs9IDI7XG4gICAgICB9XG4gICAgfSk7XG4gIHJldHVybiBwICogMjtcbn07XG4iLCJpbXBvcnQgeyBpc0V2ZW4sIGlzT2RkIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIExlaWJuaXogU2VyaWVzJ3Mgc3VtbWF0aW9uICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vKiogTGVpYm5peiBzZXJpZXMnIHN1bW1hdGlvbiB3aXRoIGxvb3BzXG4gKiDPgC80ID0gMS8xIC0gMS8zICsgMS81IC0gMSAvNyArIDEvOSDCsSAuLi5cbiAqL1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gTGVpYm5pelNlcmllcyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgbGV0IHN1bTogbnVtYmVyID0gMDtcbi8vICAgZm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IDIgKiB2YWx1ZTsgaSsrKSB7XG4vLyAgICAgaWYgKG9kZE51bWJlcihpKSkge1xuLy8gICAgICAgc3VtICo9IC0xO1xuLy8gICAgICAgc3VtICs9IDEgLyBpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGlmIChzdW0gPCAwKSB7XG4vLyAgICAgc3VtICo9IC0xO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIChzdW0gKj0gNCk7XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBMZWlibml6U2VyaWVzID0gKHZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gKFxuICAgIEFycmF5LmZyb20oQXJyYXkoK3ZhbHVlICogMikua2V5cygpKVxuICAgICAgLmZpbHRlcih4ID0+IGlzT2RkKHgpKVxuICAgICAgLnJlZHVjZSgoYTogbnVtYmVyLCBjOiBudW1iZXIsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgdiA9IGlzRXZlbihpKSA/IDEgOiAtMTtcbiAgICAgICAgcmV0dXJuIGEgKyB2IC8gYztcbiAgICAgIH0pICogNFxuICApO1xufTtcbiIsImltcG9ydCB7IG1lbW9pemVkRmFjdG9yaWFsIH0gZnJvbSBcIi4vbWVtb2l6ZWRGYWN0b3JpYWxcIjtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRXhwb25lbnRpYWwgU2VyaWVzJ3MgU3VtbWF0aW9uICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyAvKiogRXhwb25lbnRpYWwgU2VyaWVzIHdpdGggbG9vcHNcbi8vICAqICBlXnggPSAxICsgeCArICh4XjIpLzIhICsgKHheMykvMyEgKyggeF40KS80ISArICh4XjUpLzUhICsuLi4gKyAoeF5uKS9uIVxuLy8gICogQHBhcmFtIHggbnVtYmVyXG4vLyAgKiBAcGFyYW0gbiBudW1iZXJcbi8vICAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGV4cG9uZW50aWFsU2VyaWVzKHg6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgbGV0IHJlc3VsdDogbnVtYmVyID0gMTtcbi8vICAgbGV0IGU6IG51bWJlciA9IDE7XG4vLyAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPD0gbjsgaSsrKSB7XG4vLyAgICAgZSAqPSB4IC8gaTsgLy8gdGhlIG51bWVyYXRvciAgeCB3aWxsICAoY29uc3RhbnQpIGFuZCAgdGhlICBkZW5vbWluYXRvciAgaSAgd2lsbCBiZSAgaW5jcmVtZW50ZWQgYW5kIG11bHRpcGxpZWRcbi8vICAgICByZXN1bHQgKz0gZTtcbi8vICAgfVxuLy8gICByZXR1cm4gcmVzdWx0O1xuLy8gfVxuZXhwb3J0IGNvbnN0IGV4cG9uZW50aWFsU2VyaWVzID0gKHg6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIChcbiAgICAxICtcbiAgICB4ICtcbiAgICBBcnJheS5mcm9tKEFycmF5KG4gLSAxKS5rZXlzKCkpXG4gICAgICAubWFwKG4gPT4gbiArIDIpXG4gICAgICAubWFwKG4gPT4gZXhwbyh4LCBuKSAvIG1lbW9pemVkRmFjdG9yaWFsKG4pKVxuICAgICAgLnJlZHVjZSgoYSwgYykgPT4gYSArIGMpXG4gICk7XG59O1xuXG5jb25zdCBleHBvID0gKHgsIG4pOiBudW1iZXIgPT4gTWF0aC5wb3coeCwgbik7XG4iLCIvKipcbiAqIC0gVGhlIGFpbSBvZiB0aGlzIGNoYWxsZW5nZSBpcyB0byBmbGlwIHRoZSBudW1iZXIgdXNpbmcgcmVjdXJzaW9uXG4gKiAtIFRha2VzIGEgbnVtYmVyIGFuZCByZXR1cm5zIGl0IGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcmV0dXJucyB4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGlwKHg6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBsZW4gPSBnZXRMZW5ndGgoeCk7XG4gIHJldHVybiBmbGlwUmVjdXJzaW9uKHgsIGxlbik7XG59XG5cbmNvbnN0IGZsaXBSZWN1cnNpb24gPSAoeDogbnVtYmVyLCBsZW46IG51bWJlcik6IG51bWJlciA9PlxuICBsZW4gPT09IDBcbiAgICA/IHhcbiAgICA6IE1hdGgucG93KDEwLCBsZW4gLSAxKSAqICh4ICUgMTApICtcbiAgICAgIGZsaXBSZWN1cnNpb24oTWF0aC5mbG9vcih4IC8gMTApLCBsZW4gLSAxKTtcblxuLyoqXG4gKiBUYWtlcyBhIG51bWJlciB4IGFuZCByZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHJldHVybnMge251bWJlcn0gLSBsZW5ndGggb2YgdGhlIGdpdmVuIG51bWJlclxuICovXG5jb25zdCBnZXRMZW5ndGggPSAoeDogbnVtYmVyKTogbnVtYmVyID0+XG4gIHggPT09IDAgPyAwIDogMSArIGdldExlbmd0aChNYXRoLmZsb29yKHggLyAxMCkpO1xuIiwiZXhwb3J0IGNvbnN0IGhhcm1vbmljU2VyaWVzID0gKHZhbHVlOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgQXJyYXkuZnJvbShBcnJheSgrdmFsdWUpLmtleXMoKSkucmVkdWNlKChhLCBjKSA9PiBhICsgMSAvIChjICsgMSkpICsgMTtcbiIsIi8vIE1hcmllLUpvc2UgQmVydGluIG51bWJlciAvIFNhdHogMTUzXG5cbi8qKlxuICogKiBUaGUgbnVtYmVyIGdpdmVuIG51bWJlciBYIGlzIGRpdmlkYWJsZSBieSAzXG4gKiAqIFRoZSBmb2xsb3dpbmcgbnVtYmVyIE4gaXMgIHRoZSBzdW0gb2YgdGhlIGRpZ2l0cyBvZiB0aGUgZ2l2ZW4gbnVtYmVyIFggcG93ZXJlZCBieSAzXG4gKiAgdGhlIGdpdmVuIG51bWJlciBpcyAxNSwgMV4zICsgMV4zID0gMTI2LCAgMV4zICsgMl4zICsgNl4zID0gMjI1LCAuLi5cbiAqIEBwYXJhbSBudW1iZXJcbiAqIEByZXR1cm4gbnVtYmVyW11cbiAqL1xuZXhwb3J0IGNvbnN0IG1qYiA9ICh4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgbiA9ICt4O1xuXG4gIGlmIChtamJSZWN1cnNpb24obiwgW10pWzBdID09PSAwKSB7XG4gICAgcmV0dXJuIFwiVGhlIGlucHV0IHNob3VsZCBiZSBkaXZpZGFibGUgYnkgMy5cIjtcbiAgfVxuICByZXR1cm4gbWpiUmVjdXJzaW9uKG4sIFtdKS5qb2luKCk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1qYlJlY3Vyc2lvbih4OiBudW1iZXIsIGRpZ2l0czogYW55KTogbnVtYmVyW10ge1xuICBsZXQgc3RyaW5nWCA9IGAke3h9YC5zcGxpdChcIlwiKTtcbiAgaWYgKCt4ICUgMyAhPT0gMCkge1xuICAgIHJldHVybiBbMF07XG4gIH1cbiAgaWYgKHggPT09IDE1Mykge1xuICAgIGRpZ2l0cy5wdXNoKDE1Myk7XG4gICAgcmV0dXJuIGRpZ2l0cztcbiAgfVxuICBsZXQgbnVtYmVyQXJyYXlYOiBudW1iZXJbXSA9IHN0cmluZ1gubWFwKHggPT4gTWF0aC5wb3coK3gsIDMpKTtcbiAgbGV0IGs6IG51bWJlciA9IG51bWJlckFycmF5WC5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjKTtcbiAgZGlnaXRzLnB1c2goayk7XG4gIG1qYlJlY3Vyc2lvbihrLCBkaWdpdHMpO1xuICByZXR1cm4gZGlnaXRzO1xufVxuIiwiZXhwb3J0IGNvbnN0IG1lbW9pemVkID0gZm4gPT4ge1xuICBjb25zdCB0YWJsZSA9IHt9O1xuICByZXR1cm4gYXJnID0+IHRhYmxlW2FyZ10gfHwgZm4oYXJnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYWN0b3JpYWwgPSAobnVtOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgbnVtIDwgMiA/IDEgOiArbnVtICogZmFjdG9yaWFsKCtudW0gLSAxKTtcblxuZXhwb3J0IGNvbnN0IG1lbW9pemVkRmFjdG9yaWFsID0gbWVtb2l6ZWQoZmFjdG9yaWFsKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBudW1iZXJPZkhhbmRTaGFrZShuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgc3VtOiBudW1iZXIgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8ICtuOyBpKyspIHtcbiAgICBzdW0gKz0gaTtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuIiwiaW1wb3J0IHsgaXNFdmVuIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE9kZCBOdW1iZXJzJyBTdW1tYXRpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8qKiBTdW0gb2YgT2RkcyBOdW1iZXJzXG4gKiAxKzMrNS4uLi5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIHN1bU9mT2RkTnVtYmVycyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgbGV0IHN1bTogbnVtYmVyID0gMDtcbi8vICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8PSB2YWx1ZTsgaSsrKSB7XG4vLyAgICAgaWYgKG9kZE51bWJlcihpKSkge1xuLy8gICAgICAgc3VtICs9IGk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiBzdW07XG4vLyB9XG4vKipcbiAqICByZWN1cnNzaW9uXG4gKiBAcGFyYW0gdmFsdWUgbnVtYmVyXG4gKlxuXG5leHBvcnQgZnVuY3Rpb24gc3VtT2ZPZGROdW1iZXJzKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAwKSB7XG4gICAgcmV0dXJuIG47XG4gIH0gZWxzZSB7XG4gICAgaWYgKG4gJSAyICE9PSAwKSB7XG4gICAgICByZXR1cm4gbiArIHN1bU9mT2RkTnVtYmVycyhuIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdW1PZk9kZE51bWJlcnMobiAtIDEpO1xuICAgIH1cbiAgfVxufVxuKi9cblxuZXhwb3J0IGNvbnN0IHN1bU9mT2RkTnVtYmVycyA9ICh2YWx1ZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgbGV0IHJlcyA9IEFycmF5LmZyb20oQXJyYXkoK3ZhbHVlKS5rZXlzKCkpLm1hcCh4ID0+IHggKyAxKTtcbiAgcmV0dXJuIHJlcy5yZWR1Y2UoKGEsIGMpID0+IHtcbiAgICBsZXQgcmVzID0gIWlzRXZlbihjKSA/IGMgOiAwO1xuICAgIHJldHVybiBhICsgcmVzO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBpc1ByaW1lIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW1lRmFjdG9ycyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIGlmICghTnVtYmVyKHZhbHVlKSkgcmV0dXJuIFwiMFwiO1xuICBpZiAoaXNQcmltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9IGlzIGEgcHJpbWUgbnVtYmVyYDtcbiAgfVxuICBsZXQgb3JpZ2luYWw6IG51bWJlciA9IHZhbHVlO1xuICBsZXQgc3RyUmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xuICB3aGlsZSAodmFsdWUgJSAyID09PSAwKSB7XG4gICAgc3RyUmVzdWx0ICs9IFwiICogXCIgKyAyO1xuICAgIHZhbHVlIC89IDI7XG4gIH1cbiAgLy9zaW5jZSB2YWx1ZSBpcyBvZGQgb3IgcHJpbWUgYnkgbm93XG4gIGZvciAobGV0IGkgPSAzOyBpICogaSA8PSB2YWx1ZTsgaSA9IGkgKyAyKSB7XG4gICAgd2hpbGUgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgc3RyUmVzdWx0ICs9IFwiICogXCIgKyBpO1xuICAgICAgdmFsdWUgLz0gaTtcbiAgICB9XG4gIH1cbiAgc3RyUmVzdWx0ID0gKHZhbHVlICE9PSAxID8gdmFsdWUgKyBcIlwiIDogXCJcIikgKyBzdHJSZXN1bHQgKyBcIiA9IFwiICsgb3JpZ2luYWw7XG4gIGlmIChcbiAgICBzdHJSZXN1bHQuY2hhckF0KDApID09PSBcIlwiIHx8XG4gICAgc3RyUmVzdWx0LmNoYXJBdCgwKSA9PT0gXCIgXCIgfHxcbiAgICBzdHJSZXN1bHQuY2hhckF0KDApID09PSBcIipcIlxuICApXG4gICAgc3RyUmVzdWx0ID0gc3RyUmVzdWx0LnN1YnN0cigyKTtcbiAgcmV0dXJuIHN0clJlc3VsdDtcbn1cbiIsImNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybVwiKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xuXG5mdW5jdGlvbiBhZGRFbGVtZW50KFxuICBlbGVtZW50SWQ6IHN0cmluZyxcbiAgZWxlbWVudFR5cGU6IHN0cmluZyxcbiAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnRcbik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgY2hpbGQuY2xhc3NOYW1lID0gXCJmb3JtLW5hbWVcIjtcbiAgY2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudElkKTtcbiAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTXVsdGlwbGVFbGVtZW50KFxuICBudW1iZXJPZkVsZW1lbnRzOiBudW1iZXIsXG4gIGVsZW1lbnRUeXBlOiBzdHJpbmcsXG4gIGVsZW1lbnRJZCxcbiAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnRcbik6IEhUTUxFbGVtZW50IHtcbiAgbGV0IGh0bWxFbGVtZW50czogSFRNTEVsZW1lbnQgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHM7IGkrKykge1xuICAgIGxldCBpZCA9IGkgKyAxO1xuICAgIGh0bWxFbGVtZW50cyA9IGFkZEVsZW1lbnQoZWxlbWVudElkICsgaWQsIGVsZW1lbnRUeXBlLCBwYXJlbnRFbGVtZW50KTtcbiAgfVxuICByZXR1cm4gaHRtbEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJhZ3JhcGgoXG4gIGVsZW1lbnRJZDogc3RyaW5nLFxuICBkZXNjOiBzdHJpbmdcbik6IEhUTUxQYXJhZ3JhcGhFbGVtZW50IHtcbiAgbGV0IGVsZW1lbnQgPSA8SFRNTFBhcmFncmFwaEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgZWxlbWVudC5pbm5lclRleHQgPSBkZXNjO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElucHV0VmFsdWVzKG1vZGFsRm9ybSkge1xuICBsZXQgdmFsdWVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kYWxGb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1vZGFsRm9ybVtpXS5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICB2YWx1ZXMucHVzaChtb2RhbEZvcm1baV0udmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufVxuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHJlbW92ZUFsbENoaWxkcmVuKG1vZGFsRm9ybSk7XG59KTtcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHJlbW92ZUFsbENoaWxkcmVuKG1vZGFsRm9ybSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChjYWxsQmFjaywgZGVzYywgbnVtYmVySW5wdXRCb3gpIHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGxldCBDYWxjdWxhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0ZVwiKSxcbiAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmVzdWx0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzdWx0XCIpO1xuICBhZGRNdWx0aXBsZUVsZW1lbnQobnVtYmVySW5wdXRCb3gsIFwiSU5QVVRcIiwgXCJmb3JtTmFtZVwiLCBtb2RhbEZvcm0pO1xuICBhZGRQYXJhZ3JhcGgoXCJkZXNjcmlwdGlvblwiLCBcIiBIYXJtb25pYyBTZXJpZXMgXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjO1xuICBDYWxjdWxhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdmFsdWVzID0gZ2V0SW5wdXRWYWx1ZXMobW9kYWxGb3JtKTtcbiAgICBsZXQgdiA9IGNhbGxCYWNrKC4uLnZhbHVlcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgIHYgPSB2LmpvaW4oKTtcbiAgICB9XG4gICAgcmVzdWx0LmlubmVyVGV4dCA9IHY7XG4gIH0pO1xuICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQocmVzdWx0KTtcblxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihpZCwgdHh0KSB7XG4gIGxldCBiOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aWR9YCk7XG4gIGIuaW5uZXJIVE1MID0gdHh0O1xuXG4gIGxldCBkaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGIpO1xuICBsZXQgYnV0dG9uQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZCdXR0b25cIik7XG4gIGJ1dHRvbkNsYXNzLmFwcGVuZENoaWxkKGRpdik7XG4gIHJldHVybiBiO1xufVxuIiwiLy91dGlsc1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzRXZlbih2YWx1ZSkgPyBmYWxzZSA6IHRydWU7XG59XG5cbi8vXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICUgMiA9PT0gMDtcbn1cblxuLyoqXG4gKiBPKHNxcnQobikpXG4gKiBAcGFyYW0gdmFsdWUgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlIDw9IDEpIHJldHVybiBmYWxzZTtcbiAgaWYgKHZhbHVlIDw9IDMpIHJldHVybiB0cnVlOyAvLyAyIG9yIDMgPT4gdHJ1ZVxuXG4gIGlmICh2YWx1ZSAlIDIgPT09IDAgfHwgdmFsdWUgJSAzID09PSAwKSB7XG4gICAgLy8gY2FuIGJlIGRpdmlkZWQgYnkgMiBvciAzID0+IGZhbHNlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSA1OyBpICogaSA8PSB2YWx1ZTsgaSA9IGkgKyA2KSB7XG4gICAgLy92YWx1ZSA+PSAyNSA/XG4gICAgaWYgKHZhbHVlICUgaSA9PT0gMCB8fCB2YWx1ZSAlIChpICsgMikgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBwcmltZUZhY3RvcnMgfSBmcm9tIFwiLi9hcHAvcHJpbWVGYWN0b3JzXCI7XG5pbXBvcnQgeyBKV2FsbGlzUEkgfSBmcm9tIFwiLi9hcHAvSldhbGxpc1BJXCI7XG5pbXBvcnQgeyBoYXJtb25pY1NlcmllcyB9IGZyb20gXCIuL2FwcC9oYXJtb25pY1Nlcmllc1wiO1xuaW1wb3J0IHsgc3VtT2ZPZGROdW1iZXJzIH0gZnJvbSBcIi4vYXBwL29kZE51bWJlclN1bVwiO1xuaW1wb3J0IHsgZXhwb25lbnRpYWxTZXJpZXMgfSBmcm9tIFwiLi9hcHAvZXhwb19zZXJpZXNfc3VtXCI7XG5pbXBvcnQgeyBMZWlibml6U2VyaWVzIH0gZnJvbSBcIi4vYXBwL0xlaWJuaXpTZXJpZXNcIjtcbmltcG9ydCB7IG51bWJlck9mSGFuZFNoYWtlIH0gZnJvbSBcIi4vYXBwL251bWJlck9mSGFuZFNoYWtlXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBmdW5jcyBmcm9tIFwiLi9hcHAvdXRpbHNcIjtcbmltcG9ydCAqIGFzIHJlbmRlciBmcm9tIFwiLi9hcHAvcmVuZGVyXCI7XG5pbXBvcnQgeyBtamIgfSBmcm9tIFwiLi9hcHAvbWFyaWVfam9zZV9iZXJ0aW5cIjtcbmltcG9ydCB7IGZsaXAgfSBmcm9tIFwiLi9hcHAvZmxpcFwiO1xuXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vSGFuZHNoYWtlXG5jb25zdCBmbGlwQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImZsaXAtbnVtYmVyXCIsIFwiRmxpcCBUaGUgTnVtYmVyXCIpO1xuZmxpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBkZXNjID0gXCJHaXZlIGEgbnVtYmVyIHRvIGZsaXAgaXQuIEV4YW1wbGUgMTIzIHdvdWxkIGJlIDMyMSFcIjtcbiAgY29uc3QgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gIHJlbmRlci5kaXNwbGF5TW9kYWwoZmxpcCwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL0hhbmRzaGFrZVxuY29uc3QgaGFuZHNoYWtlQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImhhbmRzaGFrZVwiLCBcIkhhbmRTaGFrZVwiKTtcbmhhbmRzaGFrZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBkZXNjID1cbiAgICBcIkEgZ3V5IGluIGEgcGFydHkgc2hha2VzIHRoZSBoYW5kcyBvZiBldmVyeW9uZSBvbmNlLiBIb3cgaGFuZCB0aW1lcyBkb2VzIGhlIHNoYWtlcyBcXG4gaGFuZHMgb2YgcGVvbGUgaW4gdG90YWxcIjtcbiAgY29uc3QgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gIHJlbmRlci5kaXNwbGF5TW9kYWwobnVtYmVyT2ZIYW5kU2hha2UsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG5cbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9TYXR6IDE1M1xuY29uc3QgbWpiQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcIjE1M1wiLCBcIjE1M1wiKTtcbm1qYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBkZXNjID0gYCBUaGUgZ2l2ZW4gbnVtYmVyIGhhcyB0byBiZSBkaXZpZGFibGUgYnkgMywgdGhlIGZvbGxvd2luZyBudW1iZXIgd291bGQgYmUgdGhlIHN1bSBvZiBcXG4gaXRzIGRpZ2l0cyBcXG4gZXhhbXBsZSBmb3IgMzM6IFxcbiAgIDU0LDE4OSwxMjQyLDgxLDUxMywxNTMsMTUzIGA7XG4gIGNvbnN0IG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICByZW5kZXIuZGlzcGxheU1vZGFsKG1qYiwgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL0hhcm1vbmljIFNlcmllc1xuY29uc3QgaGFybW9uaWNTZXJpZXNCdG4gPSByZW5kZXIuY3JlYXRlQnV0dG9uKFxuICBcImhhcm1vbmljLXNlcmllc1wiLFxuICBcIkhhcm1vbmljIFNlcmllcyBTdW1cIlxuKTtcbmhhcm1vbmljU2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRlc2MgPSBcIjEgKyAxLzIrIDEvMyArIDEvNFwiO1xuICBjb25zdCBudW1iZXJPZklucHV0Qm94ID0gMTtcbiAgcmVuZGVyLmRpc3BsYXlNb2RhbChoYXJtb25pY1NlcmllcywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL0xlaWJuaXogU2VyaWVzXG5jb25zdCBsZWlibml6U2VyaWVzQnRuID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcbiAgXCJsZWlibml6LXNlcmllc1wiLFxuICBcIkxlaWJuaXogU2VyaWVzJ3MgU3VtXCJcbik7XG5sZWlibml6U2VyaWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRlc2MgPSBcIkxlaWJuaXogU2VyaWVzOiDPgC80ID0gMS8xIC0gMS8zICsgMS81IC0gMSAvNyArIDEvOSDCsSAuLi5cIjtcbiAgY29uc3QgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gIHJlbmRlci5kaXNwbGF5TW9kYWwoTGVpYm5pelNlcmllcywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcbmxldCB3aW5kb3dWYXI7XG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vU3VtIG9mIE9kZCBTZXJpZXNcbmNvbnN0IHN1bU9mT2Rkc0J0biA9IHJlbmRlci5jcmVhdGVCdXR0b24oXCJzdW0tb2Ytb2Rkc1wiLCBcIlN1bSBPZGQgTnVtYmVyc1wiKTtcbnN1bU9mT2Rkc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBkZXNjID0gXCJTdW1zIG9kZCBudW1iZXJzXCI7XG4gIGNvbnN0IG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICByZW5kZXIuZGlzcGxheU1vZGFsKHN1bU9mT2RkTnVtYmVycywgZGVzYywgbnVtYmVyT2ZJbnB1dEJveCk7XG59KTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vL0lzIFByaW1lXG5jb25zdCBpc1ByaW1lID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcImlzLXByaW1lXCIsIFwiSXNQcmltZVwiKTtcbmlzUHJpbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZGVzYyA9IFwiSXMgdGhlIGdpdmVuIG51bWJlciBhIHByaW1lIG51bWJlciA/XCI7XG4gIGNvbnN0IG51bWJlck9mSW5wdXRCb3ggPSAxO1xuICByZW5kZXIuZGlzcGxheU1vZGFsKGZ1bmNzLmlzUHJpbWUsIGRlc2MsIG51bWJlck9mSW5wdXRCb3gpO1xufSk7XG5cbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy9QcmltZSBGYWN0b3JcbmNvbnN0IHByaW1lRmFjdG9yID0gcmVuZGVyLmNyZWF0ZUJ1dHRvbihcInByaW1lLWZhY3RvclwiLCBcIlByaW1lIGZhY3RvcnNcIik7XG5wcmltZUZhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBkZXNjID0gXCJTaG93cyBwcmltZSBmYWN0b3Igb2YgYSBudW1iZXJcIjtcbiAgY29uc3QgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gIHJlbmRlci5kaXNwbGF5TW9kYWwocHJpbWVGYWN0b3JzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vZXhwb25lbnRpYWwgU2VyaWVzXG5jb25zdCBleHBvbmVudGlhbCA9IHJlbmRlci5jcmVhdGVCdXR0b24oXG4gIFwiZXhwb25lbnRpYWxcIixcbiAgXCJFeHBvbmVudGlhbCBzZXJpZXMncyBzdW1cIlxuKTtcbmV4cG9uZW50aWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRlc2MgPVxuICAgIFwiIGVeeCA9IDEgKyB4ICsgKHheMikvMiEgKyAoeF4zKS8zISArKCB4XjQpLzQhICsgKHheNSkvNSEgKy4uLiArICh4Xm4pL24hXCI7XG4gIGNvbnN0IG51bWJlck9mSW5wdXRCb3ggPSAyO1xuICByZW5kZXIuZGlzcGxheU1vZGFsKGV4cG9uZW50aWFsU2VyaWVzLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vSm9obiBXYWxsaXNcbmNvbnN0IEpXYWxsaXMgPSByZW5kZXIuY3JlYXRlQnV0dG9uKFwiam9obi13YWxsaXNcIiwgXCJQSTpKb2huIFdhbGxpcyBNZXRob2RcIik7XG5KV2FsbGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRlc2MgPSBcInBpLzIgPSAyLzEgKiAyLzMgKiA0LzMgKiA0LzUgKiA2LzUgKiA4LzcqIDgvOSArLCAuLiBcIjtcbiAgY29uc3QgbnVtYmVyT2ZJbnB1dEJveCA9IDE7XG4gIHJlbmRlci5kaXNwbGF5TW9kYWwoSldhbGxpc1BJLCBkZXNjLCBudW1iZXJPZklucHV0Qm94KTtcbn0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==