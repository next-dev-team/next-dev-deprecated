/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5906:
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_1468__) {

	module.exports = __nested_webpack_require_1468__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_1587__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __nested_webpack_require_1587__(2);
	
	Object.defineProperty(exports, 'combineChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.combineChunks;
	  }
	});
	Object.defineProperty(exports, 'fillInChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.fillInChunks;
	  }
	});
	Object.defineProperty(exports, 'findAll', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findAll;
	  }
	});
	Object.defineProperty(exports, 'findChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findChunks;
	  }
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	/**
	 * Creates an array of chunk objects representing both higlightable and non highlightable pieces of text that match each search word.
	 * @return Array of "chunks" (where a Chunk is { start:number, end:number, highlight:boolean })
	 */
	var findAll = exports.findAll = function findAll(_ref) {
	  var autoEscape = _ref.autoEscape,
	      _ref$caseSensitive = _ref.caseSensitive,
	      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
	      _ref$findChunks = _ref.findChunks,
	      findChunks = _ref$findChunks === undefined ? defaultFindChunks : _ref$findChunks,
	      sanitize = _ref.sanitize,
	      searchWords = _ref.searchWords,
	      textToHighlight = _ref.textToHighlight;
	  return fillInChunks({
	    chunksToHighlight: combineChunks({
	      chunks: findChunks({
	        autoEscape: autoEscape,
	        caseSensitive: caseSensitive,
	        sanitize: sanitize,
	        searchWords: searchWords,
	        textToHighlight: textToHighlight
	      })
	    }),
	    totalLength: textToHighlight ? textToHighlight.length : 0
	  });
	};
	
	/**
	 * Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
	 * @return {start:number, end:number}[]
	 */
	
	
	var combineChunks = exports.combineChunks = function combineChunks(_ref2) {
	  var chunks = _ref2.chunks;
	
	  chunks = chunks.sort(function (first, second) {
	    return first.start - second.start;
	  }).reduce(function (processedChunks, nextChunk) {
	    // First chunk just goes straight in the array...
	    if (processedChunks.length === 0) {
	      return [nextChunk];
	    } else {
	      // ... subsequent chunks get checked to see if they overlap...
	      var prevChunk = processedChunks.pop();
	      if (nextChunk.start <= prevChunk.end) {
	        // It may be the case that prevChunk completely surrounds nextChunk, so take the
	        // largest of the end indeces.
	        var endIndex = Math.max(prevChunk.end, nextChunk.end);
	        processedChunks.push({ highlight: false, start: prevChunk.start, end: endIndex });
	      } else {
	        processedChunks.push(prevChunk, nextChunk);
	      }
	      return processedChunks;
	    }
	  }, []);
	
	  return chunks;
	};
	
	/**
	 * Examine text for any matches.
	 * If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
	 * @return {start:number, end:number}[]
	 */
	var defaultFindChunks = function defaultFindChunks(_ref3) {
	  var autoEscape = _ref3.autoEscape,
	      caseSensitive = _ref3.caseSensitive,
	      _ref3$sanitize = _ref3.sanitize,
	      sanitize = _ref3$sanitize === undefined ? defaultSanitize : _ref3$sanitize,
	      searchWords = _ref3.searchWords,
	      textToHighlight = _ref3.textToHighlight;
	
	  textToHighlight = sanitize(textToHighlight);
	
	  return searchWords.filter(function (searchWord) {
	    return searchWord;
	  }) // Remove empty words
	  .reduce(function (chunks, searchWord) {
	    searchWord = sanitize(searchWord);
	
	    if (autoEscape) {
	      searchWord = escapeRegExpFn(searchWord);
	    }
	
	    var regex = new RegExp(searchWord, caseSensitive ? 'g' : 'gi');
	
	    var match = void 0;
	    while (match = regex.exec(textToHighlight)) {
	      var _start = match.index;
	      var _end = regex.lastIndex;
	      // We do not return zero-length matches
	      if (_end > _start) {
	        chunks.push({ highlight: false, start: _start, end: _end });
	      }
	
	      // Prevent browsers like Firefox from getting stuck in an infinite loop
	      // See http://www.regexguru.com/2008/04/watch-out-for-zero-length-matches/
	      if (match.index === regex.lastIndex) {
	        regex.lastIndex++;
	      }
	    }
	
	    return chunks;
	  }, []);
	};
	// Allow the findChunks to be overridden in findAll,
	// but for backwards compatibility we export as the old name
	exports.findChunks = defaultFindChunks;
	
	/**
	 * Given a set of chunks to highlight, create an additional set of chunks
	 * to represent the bits of text between the highlighted text.
	 * @param chunksToHighlight {start:number, end:number}[]
	 * @param totalLength number
	 * @return {start:number, end:number, highlight:boolean}[]
	 */
	
	var fillInChunks = exports.fillInChunks = function fillInChunks(_ref4) {
	  var chunksToHighlight = _ref4.chunksToHighlight,
	      totalLength = _ref4.totalLength;
	
	  var allChunks = [];
	  var append = function append(start, end, highlight) {
	    if (end - start > 0) {
	      allChunks.push({
	        start: start,
	        end: end,
	        highlight: highlight
	      });
	    }
	  };
	
	  if (chunksToHighlight.length === 0) {
	    append(0, totalLength, false);
	  } else {
	    var lastIndex = 0;
	    chunksToHighlight.forEach(function (chunk) {
	      append(lastIndex, chunk.start, false);
	      append(chunk.start, chunk.end, true);
	      lastIndex = chunk.end;
	    });
	    append(lastIndex, totalLength, false);
	  }
	  return allChunks;
	};
	
	function defaultSanitize(string) {
	  return string;
	}
	
	function escapeRegExpFn(string) {
	  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var highlight_words_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5906);
/* harmony import */ var highlight_words_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_words_core__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


var TAB_QUERY_KEY = 'tab';

function createMetadataSection(rawTitle, title, link, texts, tocIndex) {
  var allowEmptyParas = tocIndex !== undefined;
  var paragraphs = texts.reduce(function (acc, text) {
    if (text.tocIndex === tocIndex) {
      acc[text.paraId] = (acc[text.paraId] || '').concat(text.value);
    }

    return acc;
  }, []).filter(Boolean);
  return Boolean(paragraphs.length) || allowEmptyParas ? {
    rawTitle: rawTitle,
    title: title,
    link: link,
    paragraphs: texts.reduce(function (acc, text) {
      if (text.tocIndex === tocIndex) {
        var _text$paraId, _acc$_text$paraId;

        (_acc$_text$paraId = acc[_text$paraId = text.paraId]) !== null && _acc$_text$paraId !== void 0 ? _acc$_text$paraId : acc[_text$paraId] = '';
        acc[text.paraId] += text.value;
      }

      return acc;
    }, []).filter(Boolean)
  } : null;
}

function generateRouteTitle(fm) {
  return [fm.title, fm.subtitle].filter(Boolean).join(' ');
}

function generateSearchMetadata(routes, demos, nav) {
  var metadata = []; // generate demos mapping by route.id

  var demosMapping = Object.values(demos).reduce(function (acc, demo) {
    if (demo.asset) {
      var _demo$routeId, _acc$_demo$routeId;

      (_acc$_demo$routeId = acc[_demo$routeId = demo.routeId]) !== null && _acc$_demo$routeId !== void 0 ? _acc$_demo$routeId : acc[_demo$routeId] = [];
      acc[demo.routeId].push(demo);
    }

    return acc;
  }, {});
  Object.values(routes).forEach(function (route) {
    // only process content route
    if ('meta' in route && !('isLayout' in route)) {
      var _demosMapping$route$i;

      var routeMeta = route.meta;
      var routeAbsPath = route.path.replace(/^([^/])/, '/$1') || '/';
      var routeNav = nav.find(function (item) {
        return routeAbsPath === item.link || routeAbsPath.startsWith("".concat(item.activePath, "/"));
      });
      var demoIds = (demosMapping[route.id] || []).map(function (demo) {
        var _demo$asset;

        return (_demo$asset = demo.asset) === null || _demo$asset === void 0 ? void 0 : _demo$asset.id;
      });
      var orphanSection = createMetadataSection('', generateRouteTitle(routeMeta.frontmatter), routeAbsPath, routeMeta.texts);
      var tocSections = routeMeta.toc.reduce(function (acc, toc, i) {
        // exclude demo id, to avoid duplicate
        if (!demoIds.includes(toc.id) && toc.depth > 1) {
          acc.push(createMetadataSection(toc.title, "".concat(generateRouteTitle(routeMeta.frontmatter), " - ").concat(toc.title), "".concat(routeAbsPath, "#").concat(toc.id), routeMeta.texts, i));
        }

        return acc;
      }, []);
      var tabSections = (routeMeta.tabs || []).reduce(function (acc, _ref) {
        var key = _ref.key,
            meta = _ref.meta; // collect orphan section that not in toc

        var tabOrphanSection = createMetadataSection('', "".concat(generateRouteTitle(routeMeta.frontmatter), " - ").concat(meta.frontmatter.title), "".concat(routeAbsPath, "?").concat(TAB_QUERY_KEY, "=").concat(key), meta.texts);
        if (tabOrphanSection) acc.push(tabOrphanSection); // collect sections by toc

        acc.push.apply(acc, _toConsumableArray(meta.toc.map(function (toc, i) {
          return createMetadataSection(toc.title, "".concat(generateRouteTitle(routeMeta.frontmatter), " - ").concat(meta.frontmatter.title, " - ").concat(toc.title), "".concat(routeAbsPath, "?").concat(TAB_QUERY_KEY, "=").concat(key, "#").concat(toc.id), meta.texts, i);
        })));
        return acc;
      }, []);
      metadata.push({
        navTitle: routeNav === null || routeNav === void 0 ? void 0 : routeNav.title,
        navOrder: routeNav ? nav.indexOf(routeNav) : Infinity,
        title: generateRouteTitle(routeMeta.frontmatter),
        link: routeAbsPath,
        sections: [].concat(_toConsumableArray(orphanSection ? [orphanSection] : []), _toConsumableArray(tocSections), _toConsumableArray(tabSections)),
        demos: ((_demosMapping$route$i = demosMapping[route.id]) === null || _demosMapping$route$i === void 0 ? void 0 : _demosMapping$route$i.map(function (demo) {
          return {
            link: "".concat(routeAbsPath, "#").concat(demo.asset.id),
            rawTitle: demo.asset.title || '',
            title: demo.asset.title || generateRouteTitle(routeMeta.frontmatter),
            description: demo.asset.description || '',
            keywords: demo.asset.keywords || []
          };
        })) || []
      });
    }
  });
  return metadata;
}

function generateHighlightTexts() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var keywords = arguments.length > 1 ? arguments[1] : undefined;
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var chunks = (0,highlight_words_core__WEBPACK_IMPORTED_MODULE_0__.findAll)({
    textToHighlight: str,
    searchWords: keywords,
    autoEscape: true
  }); // save matched keywords

  var matchedMapping = {};
  return [chunks.map(function (_ref2, i) {
    var start = _ref2.start,
        end = _ref2.end,
        highlight = _ref2.highlight;
    var highlightText = {
      text: str.slice(start, end)
    }; // omit long str before the first highlighted text

    if (i === 0 && !highlight && chunks.length > 1 && highlightText.text.length > 20) {
      highlightText.text = "...".concat(highlightText.text.slice(-20));
    } // mark highlight


    if (highlight) {
      highlightText.highlighted = true;
      matchedMapping[keywords.find(function (k) {
        return highlightText.text.includes(k);
      })] = priority;
    }

    return highlightText;
  }), matchedMapping];
}

function generateSearchResult(metadata, keywordsStr) {
  var keywords = keywordsStr.split(' ');
  var matchReg = new RegExp(keywordsStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(' ', '|'), 'gi');
  var resultMapping = {}; // traverse metadata from all routes

  metadata.forEach(function (data) {
    var hints = []; // find content & section hints

    data.sections.forEach(function (sec) {
      // find matched keywords in paragraph
      var _iterator = _createForOfIteratorHelper(sec.paragraphs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;

          if (matchReg.test(p)) {
            var _generateHighlightTex3 = generateHighlightTexts(sec.title, keywords, 10),
                _generateHighlightTex4 = _slicedToArray(_generateHighlightTex3, 2),
                _highlightTitleTexts = _generateHighlightTex4[0],
                _titleMatchMapping = _generateHighlightTex4[1];

            var _generateHighlightTex5 = generateHighlightTexts(p, keywords),
                _generateHighlightTex6 = _slicedToArray(_generateHighlightTex5, 2),
                highlightTexts = _generateHighlightTex6[0],
                matchMapping = _generateHighlightTex6[1];

            hints.push({
              type: 'content',
              link: sec.link,
              priority: Object.values(_objectSpread(_objectSpread({}, matchMapping), _titleMatchMapping)).reduce(function (acc, p) {
                return acc + p;
              }, 0),
              highlightTitleTexts: _highlightTitleTexts,
              highlightTexts: highlightTexts
            }); // match at most once in the same section

            return;
          }
        } // find matched keywords in section title

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (matchReg.test(sec.rawTitle)) {
        var _generateHighlightTex = generateHighlightTexts(sec.title, keywords, 10),
            _generateHighlightTex2 = _slicedToArray(_generateHighlightTex, 2),
            highlightTitleTexts = _generateHighlightTex2[0],
            titleMatchMapping = _generateHighlightTex2[1];

        hints.push({
          type: 'title',
          link: sec.link,
          priority: Object.values(titleMatchMapping).reduce(function (acc, p) {
            return acc + p;
          }, 0),
          highlightTitleTexts: highlightTitleTexts,
          highlightTexts: generateHighlightTexts(sec.paragraphs[0] || '', keywords)[0]
        });
      }
    }); // find demo hints

    data.demos.forEach(function (demo) {
      if (matchReg.test(demo.rawTitle) || matchReg.test(demo.description)) {
        var _generateHighlightTex7 = generateHighlightTexts(demo.title, keywords, 10),
            _generateHighlightTex8 = _slicedToArray(_generateHighlightTex7, 2),
            highlightTitleTexts = _generateHighlightTex8[0],
            titleMatchMapping = _generateHighlightTex8[1];

        var _generateHighlightTex9 = generateHighlightTexts(demo.description, keywords),
            _generateHighlightTex10 = _slicedToArray(_generateHighlightTex9, 2),
            highlightTexts = _generateHighlightTex10[0],
            matchMapping = _generateHighlightTex10[1];

        hints.push({
          type: 'demo',
          link: demo.link,
          priority: Object.values(_objectSpread(_objectSpread({}, matchMapping), titleMatchMapping)).reduce(function (acc, p) {
            return acc + p;
          }, 0),
          highlightTitleTexts: highlightTitleTexts,
          highlightTexts: highlightTexts
        });
      }
    }); // find page hints

    if (matchReg.test(data.title)) {
      var _data$sections$;

      var _generateHighlightTex11 = generateHighlightTexts(data.title, keywords, 100),
          _generateHighlightTex12 = _slicedToArray(_generateHighlightTex11, 2),
          highlightTitleTexts = _generateHighlightTex12[0],
          titleMatchMapping = _generateHighlightTex12[1];

      hints.push({
        type: 'page',
        link: data.link,
        priority: Object.values(titleMatchMapping).reduce(function (acc, p) {
          return acc + p;
        }, 0),
        highlightTitleTexts: highlightTitleTexts,
        highlightTexts: generateHighlightTexts(((_data$sections$ = data.sections[0]) === null || _data$sections$ === void 0 ? void 0 : _data$sections$.paragraphs[0]) || '', keywords)[0]
      });
    } // create nav result if there has any hint


    if (hints.length) {
      var _resultMapping$key, _resultMapping$key$hi;

      var key = data.navTitle || '$ROOT';
      (_resultMapping$key = resultMapping[key]) !== null && _resultMapping$key !== void 0 ? _resultMapping$key : resultMapping[key] = {
        title: data.navTitle,
        priority: data.navOrder * 1000,
        hints: []
      };

      (_resultMapping$key$hi = resultMapping[key].hints).push.apply(_resultMapping$key$hi, hints);
    }
  }); // sort hints

  Object.values(resultMapping).forEach(function (_ref3) {
    var hints = _ref3.hints;
    hints.sort(function (prev, next) {
      return next.priority - prev.priority;
    });
  });
  return Object.values(resultMapping).sort(function (prev, next) {
    return next.priority - prev.priority;
  });
}

var metadata;

self.onmessage = function (_ref4) {
  var data = _ref4.data;

  switch (data.action) {
    case 'generate-metadata':
      metadata = generateSearchMetadata(data.args.routes, data.args.demos, data.args.nav);
      break;

    case 'get-search-result':
      self.postMessage(generateSearchResult(metadata, data.args.keywords));
      break;

    default:
  }
};
})();

module.exports = __webpack_exports__;
/******/ })()
;