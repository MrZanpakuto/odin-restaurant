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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const div = document.createElement('div');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n    const img = document.createElement('img');\n\n    main.id = 'main-contact';\n    div.className = 'contact';\n    mainContainer.id = 'main-container';\n\n    mainContainer.appendChild(main);\n    main.appendChild(div);\n    div.appendChild(p1);\n    div.appendChild(p2);\n    div.appendChild(img);\n\n    p1.innerText = '📞  (281) 330-8004';\n    p2.innerText = '🏠 Mike Jones Drive, Jonesville, MI';\n    img.src = '../src/images/contact.png';\n    img.alt = 'Sweet Treats Bakery';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/contact.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const container = document.createElement('div');\n    const img = document.createElement('img');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n    const p3 = document.createElement('p');\n\n    mainContainer.appendChild(main);\n    main.appendChild(container);\n    container.appendChild(p1);\n    container.appendChild(p2);\n    container.appendChild(img);\n    container.appendChild(p3);\n\n    mainContainer.id = 'main-container';\n    main.className ='main-menu';\n    p3.className = 'order';\n    container.className = 'home';\n    img.src = '../src/images/baker.png';\n    img.alt = 'Baker';\n\n    p1.innerText = 'Sweet Treats';\n    p2.innerText = 'Come get a piece of heaven!';\n    p3.innerText = 'Order Online or in-store!';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n// append components to div#content.\n// components = header, footer, assets, home, main, and contact js files.\n// same header and footer on home, main, and contact js files.\n// call header and footer functions after DOM is parsed.\n// create event listeners on click for menu, home, or contact tabs.\n// menu tab click generates menu content, home tab generates home content, and contact tab generates contact content. The content will be in the main section of each page. header and footer will be the same on each page.\n\n// import { ContextReplacementPlugin } from 'webpack'\n\n\n\n\n\n\n\nconst element = document.getElementById('content');\n\n// initial page load\nelement.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.header)());\nelement.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home)());\nelement.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n\n// add event listeners to tabs\nconst list = document.querySelectorAll('.btns');\n\nlist.forEach((element) => {\n    element.addEventListener('click', changeMain);\n    }\n);\n\nfunction changeMain(e) {\n    const main = document.getElementById('main-container');\n    const footer = document.querySelector('footer');    \n    const parentDiv = footer.parentNode;\n\n    if (main != null) {\n        main.remove();\n    }\n    \n    if (e.target.innerText == 'Home') { \n        parentDiv.insertBefore((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home)(), footer);\n    } else if (e.target.innerText == 'Menu') {\n        parentDiv.insertBefore((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)(), footer);\n        // console.log('Menu Section');\n    } else if (e.target.innerText == 'Contact') {\n        parentDiv.insertBefore((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)(), footer);\n        // console.log('Contact Section');\n    }\n}\n\n\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n    const mainContainer = document.createElement('div');\n    const main = document.createElement('main');\n    const container = document.createElement('div');\n\n    // create 6 div elements\n    for (let i= 0; i < 6; i++) {\n        const card = document.createElement('div');\n        const p = document.createElement('p');\n        const menuItemTitle = document.createElement('h2');\n        const img = document.createElement('img');\n        container.appendChild(card);\n        card.appendChild(img);\n        card.appendChild(menuItemTitle);\n        card.appendChild(p);\n\n        card.className = 'card';\n\n        if(i===0) {\n            menuItemTitle.innerText = 'Choco Taco';\n            p.innerText = 'Chocolate Syrup, Vanilla Ice Cream, Graham Cracker, Caramel';\n            img.src = '../src/images/taco.png';\n        } else if(i===1) {\n            menuItemTitle.innerText = 'Apple Towtow';\n            p.innerText = 'Apple, Sugar, Cinnamon, Salt, Flour';\n            img.src = '../src/images/pie.png';\n        } else if(i===2) {\n            menuItemTitle.innerText = 'Lemon Drop';\n            p.innerText = 'Lemon, Sugar, Flour, Cream, Salt';\n            img.src = '../src/images/tart.png';\n        } else if(i===3) {\n            menuItemTitle.innerText = 'Shortcake';\n            p.innerText = 'Strawberry, Sugar, Flour, Cream, Salt';\n            img.src = '../src/images/piece-of-cake.png';\n        } else if(i===4) {\n            menuItemTitle.innerText = 'Sundae Delight';\n            p.innerText = 'Vanilla Ice Cream, Chocolate Fudge, Sprinkles';\n            img.src = '../src/images/sundae.png';\n        } else {\n            menuItemTitle.innerText = 'Banana Dream';\n            p.innerText = 'Banana, Chocolate, Custard, Cream';\n            img.src = '../src/images/banana-split.png';\n        }\n    }\n\n    mainContainer.appendChild(main);\n    main.appendChild(container);\n    \n    // assign class names & id\n    mainContainer.id = 'main-container';\n    main.className = 'main-menu'; \n    container.className = 'menu';\n\n    return mainContainer;\n}\n\n//# sourceURL=webpack://package/./src/menu.js?");

/***/ }),

/***/ "./src/images/pancake.png":
/*!********************************!*\
  !*** ./src/images/pancake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e21c734dff481df9553.png\";\n\n//# sourceURL=webpack://package/./src/images/pancake.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;