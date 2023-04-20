/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/stars.png */ \"./src/images/stars.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/macarons.png */ \"./src/images/macarons.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    height: 100vh;\\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    height: 100%;\\n}\\n\\nheader {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 100%;\\n    box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 15%);\\n    /* position: sticky;\\n    top: 0; */\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: contain;\\n    background-position: 50% 50%;\\n}\\n\\n#logo-placeholder,\\nnav {\\n    width: 40%;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n#logo-placeholder {\\n    height: 70%;\\n    padding: 0.5rem 0;\\n    align-items: center;\\n}\\n\\nnav {\\n    height: 30%;\\n}\\n\\nul {\\n    display: flex;\\n    justify-content: center;\\n    gap: 1rem;\\n    margin: 0;\\n    padding: 0;\\n    flex-basis: 100%;\\n}\\n\\nnav > ul > li {\\n    width: 33%;\\n    list-style: none;\\n    border: 1px solid black;\\n    border-radius: 5px 5px 0px 0px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: black;\\n    color: #fff;\\n}\\n\\n#logo-placeholder > img {\\n    width: 60px;\\n    height: 60px;\\n}\\n\\n#main-container {\\n    width: 100%;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: 15%;\\n    padding: 3rem 0;\\n\\n    display: flex;\\n    justify-content: center;\\n}\\n\\nfooter {\\n    border: 1px solid black;\\n    height: 10%;\\n    background-color: black;\\n    width: 100%;\\n}\\n\\nfooter > ul {\\n    display: flex;\\n    justify-content: space-evenly;\\n}\\n\\nfooter > ul > a {\\n    color: #fff;\\n    text-decoration: none;\\n    font-weight: 500;\\n}\\n\\n\\nfooter > ul > a > li {\\n    list-style: none;\\n}\\n\\nli:hover {\\n    cursor: pointer;\\n    color: bisque\\n}\\n\\n.order:hover {\\n    cursor: pointer;\\n    font-size: 2rem;\\n    font-weight: 900;\\n}\\n\\n/* menu styles */\\n.main-menu {\\n    max-width: 700px;\\n    border: 1px solid rgb(28, 29, 77);\\n    background-color: rgba(0, 0, 0, 0.60);\\n}\\n\\n\\n#main-contact {\\n    height: 100%;\\n    max-width: 700px;\\n    border: 1px solid rgb(28, 29, 77);\\n    background-color: rgba(0, 0, 0, 0.60);\\n}\\n\\n.menu {\\n    height: 100%;\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    justify-content: center;\\n    gap: 2rem;  \\n    padding: 2rem;\\n}\\n.card {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 300px;\\n    border: 1px solid black;\\n    padding: 2rem;\\n}\\n\\n.card:hover {\\n    background-color: bisque;\\n    cursor: pointer;\\n}\\n\\n.card > p {\\n    text-align: center;\\n    margin: 0;\\n    line-height: 1.2;\\n}\\n\\n.card > h2 {\\n    margin: 0;\\n    padding: 1rem;\\n}\\n\\n.card > img {\\n    height: 50%;\\n    width: 50%;\\n}\\n\\n/* home style */\\n\\n.home {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    height: 65vh;\\n}\\n\\n.home > img {\\n    width: 25%;\\n    margin: 1rem 0;\\n}\\n\\n.home > p {\\n    padding: 0.5rem 0;\\n    margin: 0;\\n    font-size: 1.5rem;\\n    color: #fff;\\n    font-weight: 700;\\n}\\n\\n/* contact info */\\n\\n.contact {\\n    height: 65vh;\\n    width: 500px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.contact > p {\\n    padding: 0 1rem;\\n    color: #fff;\\n    font-weight: 700;\\n    font-size: 1rem;\\n}\\n\\n.contact > img {\\n    width: 100%;\\n    height: 75%;\\n    padding: 1rem;\\n}\\n\\n.contact > p:hover {\\n    cursor: pointer;\\n    color: bisque\\n}\\n\\n/* mobile */\\n\\n@media (max-width: 700px) {\\n\\n    nav {\\n        width: 350px;\\n    }\\n\\n    #main-container {\\n        padding: 1rem 0;\\n    }\\n\\n    .main-menu {\\n        width: 325px;\\n    }\\n\\n    .menu {\\n        grid-template-columns: 1fr;\\n        padding: 1rem;\\n    }\\n\\n    .home {\\n        height: 70vh;\\n    }\\n\\n    .card {\\n        height: 275px;\\n        width: 275px;\\n    }\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://package/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://package/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://package/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://package/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://package/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://package/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerIcon\": () => (/* binding */ headerIcon)\n/* harmony export */ });\n/* harmony import */ var _images_pancake_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pancake.png */ \"./src/images/pancake.png\");\n\n\nfunction headerIcon() {\n    const myIcon = new Image();\n    \n    // set image attributes\n    myIcon.src = _images_pancake_png__WEBPACK_IMPORTED_MODULE_0__;\n    myIcon.width = '30';\n    myIcon.height = '30';\n    myIcon.alt ='Pancakes with Strawberry on top';\n    return myIcon;   \n}\n\n\n//# sourceURL=webpack://package/./src/assets.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact.png */ \"./src/images/contact.png\");\n\n\nfunction contact() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const div = document.createElement('div');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n    const img = document.createElement('img');\n\n    main.id = 'main-contact';\n    div.className = 'contact';\n    mainContainer.id = 'main-container';\n    mainContainer.className = 'home-contact-bkg';\n\n    mainContainer.appendChild(main);\n    main.appendChild(div);\n    div.appendChild(p1);\n    div.appendChild(p2);\n    div.appendChild(img);\n\n    p1.innerText = '📞  (281) 330-8004';\n    p2.innerText = '🏠 Mike Jones Drive, Jonesville, MI';\n    img.src = _images_contact_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = 'Sweet Treats Bakery';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n    // create elements\n    const footer = document.createElement('footer');\n    const ul = document.createElement('ul');\n    const list_item1 = document.createElement('li');\n    const list_item2 = document.createElement('li');\n    const link1 = document.createElement('a');\n    const link2 = document.createElement('a');\n    \n//  append elements \n    footer.appendChild(ul);\n    ul.appendChild(link1);\n    ul.appendChild(link2);\n    link1.appendChild(list_item1);\n    link2.appendChild(list_item2);\n \n\n    // set anchor & list attributes\n    link1.href = 'https://github.com/MrZanpakuto';\n    link1.title ='github';\n    list_item1.textContent = 'Copyright © 2023 MrZanpakuto';\n    link2.href = 'https://www.flaticon.com';\n    link2.title ='icons';\n    list_item2.textContent = 'Icon Images from Flaticon.com';\n\n    return footer\n}\n\n//# sourceURL=webpack://package/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/assets.js\");\n\n\nfunction header() {\n    //create elements for header section\n    const header = document.createElement('header');\n    const div = document.createElement('div');\n    const nav = document.createElement('nav');\n    const ul = document.createElement('ul');\n    const list_item1 = document.createElement('li');\n    const list_item2 = document.createElement('li');\n    const list_item3 = document.createElement('li');\n    // const iconContainer = document.getElementById('logo-placeholder');\n\n    // append elements\n    header.appendChild(div);\n    header.appendChild(nav);\n \n    nav.appendChild(ul);\n    ul.appendChild(list_item1);\n    ul.appendChild(list_item2);\n    ul.appendChild(list_item3);\n    div.appendChild((0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.headerIcon)());\n\n    // add content/links to elements\n    list_item1.innerText = 'Home';\n    list_item2.innerText = 'Menu';\n    list_item3.innerText = 'Contact';\n    \n    // add selectors for style\n    div.id = 'logo-placeholder';\n    list_item1.className ='btns';\n    list_item2.className ='btns';\n    list_item3.className ='btns';\n\n    return header;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://package/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_baker_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/baker.png */ \"./src/images/baker.png\");\n\n\nfunction home() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const container = document.createElement('div');\n    const img = document.createElement('img');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n    const p3 = document.createElement('p');\n\n    mainContainer.appendChild(main);\n    main.appendChild(container);\n    container.appendChild(p1);\n    container.appendChild(p2);\n    container.appendChild(img);\n    container.appendChild(p3);\n\n    mainContainer.id = 'main-container';\n    mainContainer.className = 'home-contact-bkg';\n    main.className ='main-menu';\n    p3.className = 'order';\n    container.className = 'home';\n    img.src = _images_baker_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = 'Baker';\n\n    p1.innerText = 'Sweet Treats';\n    p2.innerText = 'Come get a piece of heaven!';\n    p3.innerText = 'Order Online or in-store!';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// append components to div#content.\n// components = header, footer, assets, home, main, and contact js files.\n// same header and footer on home, main, and contact js files.\n// call header and footer functions after DOM is parsed.\n// create event listeners on click for menu, home, or contact tabs.\n// menu tab click generates menu content, home tab generates home content, and contact tab generates contact content. The content will be in the main section of each page. header and footer will be the same on each page.\n\n// import { ContextReplacementPlugin } from 'webpack'\n\n\n\n\n\n\n\nconst element = document.getElementById('content');\n\n// initial page load\nelement.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.header)());\nelement.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home)());\nelement.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n\n// add event listeners to tabs\nconst list = document.querySelectorAll('.btns');\n\nlist.forEach((element) => {\n    element.addEventListener('click', changeMain);\n    }\n);\n\nfunction changeMain(e) {\n    const main = document.getElementById('main-container');\n    const footer = document.querySelector('footer');    \n    const parentDiv = footer.parentNode;\n\n    if (main != null) {\n        main.remove();\n    }\n    \n    if (e.target.innerText == 'Home') { \n        parentDiv.insertBefore((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home)(), footer);\n    } else if (e.target.innerText == 'Menu') {\n        parentDiv.insertBefore((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)(), footer);\n        // console.log('Menu Section');\n    } else if (e.target.innerText == 'Contact') {\n        parentDiv.insertBefore((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)(), footer);\n        // console.log('Contact Section');\n    }\n}\n\n\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_taco_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/taco.png */ \"./src/images/taco.png\");\n/* harmony import */ var _images_pie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pie.png */ \"./src/images/pie.png\");\n/* harmony import */ var _images_tart_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tart.png */ \"./src/images/tart.png\");\n/* harmony import */ var _images_piece_of_cake_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/piece-of-cake.png */ \"./src/images/piece-of-cake.png\");\n/* harmony import */ var _images_sundae_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sundae.png */ \"./src/images/sundae.png\");\n/* harmony import */ var _images_banana_split_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/banana-split.png */ \"./src/images/banana-split.png\");\n\n\n\n\n\n\n\nfunction menu() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const container = document.createElement('div');\n\n    // create 6 div elements\n    for (let i= 0; i < 6; i++) {\n        const card = document.createElement('div');\n        const p = document.createElement('p');\n        const menuItemTitle = document.createElement('h2');\n        const img = document.createElement('img');\n        container.appendChild(card);\n        card.appendChild(img);\n        card.appendChild(menuItemTitle);\n        card.appendChild(p);\n\n        card.className = 'card';\n\n        if(i===0) {\n            menuItemTitle.innerText = 'Choco Taco';\n            p.innerText = 'Chocolate Syrup, Vanilla Ice Cream, Graham Cracker, Caramel';\n            img.src = _images_taco_png__WEBPACK_IMPORTED_MODULE_0__;\n        } else if(i===1) {\n            menuItemTitle.innerText = 'Apple Towtow';\n            p.innerText = 'Apple, Sugar, Cinnamon, Salt, Flour';\n            img.src = _images_pie_png__WEBPACK_IMPORTED_MODULE_1__;\n        } else if(i===2) {\n            menuItemTitle.innerText = 'Lemon Drop';\n            p.innerText = 'Lemon, Sugar, Flour, Cream, Salt';\n            img.src = _images_tart_png__WEBPACK_IMPORTED_MODULE_2__;\n        } else if(i===3) {\n            menuItemTitle.innerText = 'Shortcake';\n            p.innerText = 'Strawberry, Sugar, Flour, Cream, Salt';\n            img.src = _images_piece_of_cake_png__WEBPACK_IMPORTED_MODULE_3__;\n        } else if(i===4) {\n            menuItemTitle.innerText = 'Sundae Delight';\n            p.innerText = 'Vanilla Ice Cream, Chocolate Fudge, Sprinkles';\n            img.src = _images_sundae_png__WEBPACK_IMPORTED_MODULE_4__;\n        } else {\n            menuItemTitle.innerText = 'Banana Dream';\n            p.innerText = 'Banana, Chocolate, Custard, Cream';\n            img.src = _images_banana_split_png__WEBPACK_IMPORTED_MODULE_5__;\n        }\n    }\n\n    mainContainer.appendChild(main);\n    main.appendChild(container);\n    \n    // assign class names & id\n    mainContainer.id = 'main-container';\n    main.className = 'main-menu'; \n    container.className = 'menu';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/menu.js?");

/***/ }),

/***/ "./src/images/baker.png":
/*!******************************!*\
  !*** ./src/images/baker.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a58f7d944c76b3cab8b6.png\";\n\n//# sourceURL=webpack://package/./src/images/baker.png?");

/***/ }),

/***/ "./src/images/banana-split.png":
/*!*************************************!*\
  !*** ./src/images/banana-split.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90632fc7ed3644b79cf0.png\";\n\n//# sourceURL=webpack://package/./src/images/banana-split.png?");

/***/ }),

/***/ "./src/images/contact.png":
/*!********************************!*\
  !*** ./src/images/contact.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4931b3b73a2ee255edb3.png\";\n\n//# sourceURL=webpack://package/./src/images/contact.png?");

/***/ }),

/***/ "./src/images/macarons.png":
/*!*********************************!*\
  !*** ./src/images/macarons.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d7008df8ca5841fd705.png\";\n\n//# sourceURL=webpack://package/./src/images/macarons.png?");

/***/ }),

/***/ "./src/images/pancake.png":
/*!********************************!*\
  !*** ./src/images/pancake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e21c734dff481df9553.png\";\n\n//# sourceURL=webpack://package/./src/images/pancake.png?");

/***/ }),

/***/ "./src/images/pie.png":
/*!****************************!*\
  !*** ./src/images/pie.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"572dfe2c68e5df48b9c9.png\";\n\n//# sourceURL=webpack://package/./src/images/pie.png?");

/***/ }),

/***/ "./src/images/piece-of-cake.png":
/*!**************************************!*\
  !*** ./src/images/piece-of-cake.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f792e998adb32fafd7d8.png\";\n\n//# sourceURL=webpack://package/./src/images/piece-of-cake.png?");

/***/ }),

/***/ "./src/images/stars.png":
/*!******************************!*\
  !*** ./src/images/stars.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5c19841d1faa52beacf.png\";\n\n//# sourceURL=webpack://package/./src/images/stars.png?");

/***/ }),

/***/ "./src/images/sundae.png":
/*!*******************************!*\
  !*** ./src/images/sundae.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b279e0a26e146fbe79b1.png\";\n\n//# sourceURL=webpack://package/./src/images/sundae.png?");

/***/ }),

/***/ "./src/images/taco.png":
/*!*****************************!*\
  !*** ./src/images/taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48f1acb797229536062d.png\";\n\n//# sourceURL=webpack://package/./src/images/taco.png?");

/***/ }),

/***/ "./src/images/tart.png":
/*!*****************************!*\
  !*** ./src/images/tart.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8012a9fc3473011dce8.png\";\n\n//# sourceURL=webpack://package/./src/images/tart.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;