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

/***/ "./assets/js/modules/clickOut.js":
/*!***************************************!*\
  !*** ./assets/js/modules/clickOut.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, events, callback) {\n  var attEventAdd = \"data-on\";\n  var html = document.documentElement;\n\n  var checkOutside = function checkOutside(e) {\n    if (!element.contains(e.target)) {\n      element.removeAttribute(attEventAdd);\n      callback();\n      events.forEach(function (event) {\n        html.removeEventListener(event, checkOutside);\n      });\n    }\n  };\n\n  if (!element.hasAttribute(attEventAdd)) {\n    element.setAttribute(attEventAdd, \"\");\n    events.forEach(function (event) {\n      setTimeout(function () {\n        return html.addEventListener(event, checkOutside);\n      });\n    });\n  }\n}\n;\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/clickOut.js?");

/***/ }),

/***/ "./assets/js/modules/dropDown.js":
/*!***************************************!*\
  !*** ./assets/js/modules/dropDown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction dropdownMenu(listDrop) {\n  var dropMenu = document.querySelectorAll(listDrop);\n  var events = [\"click\", \"touchstart\"];\n\n  var activeDropDown = function activeDropDown(e) {\n    var element = e.currentTarget;\n    element.classList.add(\"on\");\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, events, function () {\n      element.classList.remove(\"on\");\n    });\n  };\n\n  var init = function init() {\n    if (!!dropMenu) {\n      dropMenu.forEach(function (item) {\n        events.forEach(function (event) {\n          item.addEventListener(event, activeDropDown);\n        });\n      });\n    }\n  };\n\n  return Object.freeze({\n    init: init\n  });\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/dropDown.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction menuMobile(btn, menu) {\n  var btnMobile = document.querySelector(btn);\n  var menuMob = document.querySelector(menu);\n  var classSelect = \"on\";\n  var events = [\"click\", \"touchstart\"];\n\n  var activeMenuMobile = function activeMenuMobile(e) {\n    e.preventDefault();\n    btnMobile.classList.add(classSelect);\n    menuMob.classList.add(classSelect);\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuMob, events, function () {\n      btnMobile.classList.remove(classSelect);\n      menuMob.classList.remove(classSelect);\n    });\n  };\n\n  var init = function init() {\n    if (!!events && !!btnMobile) events.forEach(function (event) {\n      btnMobile.addEventListener(event, activeMenuMobile);\n    });\n  };\n\n  return Object.freeze({\n    init: init\n  });\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropDown */ \"./assets/js/modules/dropDown.js\");\n/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-mobile */ \"./assets/js/modules/menu-mobile.js\");\n\n\nvar menuMob = (0,_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('[data-btnmobile]', '[data-navigationmobile]');\nmenuMob.init();\nvar dropMenu = (0,_modules_dropDown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"[data-dropmenu]\");\ndropMenu.init();\n\n//# sourceURL=webpack://colored-waters/./assets/js/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;