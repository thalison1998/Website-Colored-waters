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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, events, callback) {\n  var attEventAdd = 'data-on';\n  var html = document.documentElement;\n\n  var checkOutside = function checkOutside(e) {\n    if (!element.contains(e.target)) {\n      element.removeAttribute(attEventAdd);\n      callback();\n      events.forEach(function (event) {\n        html.removeEventListener(event, checkOutside);\n      });\n    }\n  };\n\n  if (!element.hasAttribute(attEventAdd)) {\n    element.setAttribute(attEventAdd, '');\n    events.forEach(function (event) {\n      setTimeout(function () {\n        return html.addEventListener(event, checkOutside);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/clickOut.js?");

/***/ }),

/***/ "./assets/js/modules/dropDown.js":
/*!***************************************!*\
  !*** ./assets/js/modules/dropDown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction dropdownMenu(listDrop) {\n  var dropMenu = document.querySelectorAll(listDrop);\n  var events = [\"click\", \"touchstart\"];\n\n  var activeDropDown = function activeDropDown(e) {\n    if (e.cancelable) e.preventDefault();\n    var element = e.currentTarget;\n    element.classList.add(\"on\");\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, events, function () {\n      element.classList.remove(\"on\");\n    });\n  };\n\n  var init = function init() {\n    if (dropMenu) {\n      dropMenu.forEach(function (item) {\n        events.forEach(function (event) {\n          item.addEventListener(event, activeDropDown);\n        });\n      });\n    }\n  };\n\n  return Object.freeze({\n    init: init\n  });\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/dropDown.js?");

/***/ }),

/***/ "./assets/js/modules/hideAndShowText.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/hideAndShowText.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showAndHiddenText)\n/* harmony export */ });\nfunction showAndHiddenText(element) {\n  var elementSelect = element || '.info-slide';\n  var text = document.querySelectorAll(elementSelect);\n\n  var textChange = function textChange(index) {\n    text.forEach(function (texts) {\n      texts.classList.remove(\"on\");\n    });\n    text[index].classList.add(\"on\");\n  };\n\n  return {\n    textChange: textChange\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/hideAndShowText.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction menuMobile(btn, menu) {\n  var btnMobile = document.querySelector(btn);\n  var menuMob = document.querySelector(menu);\n  var classSelect = \"on\";\n  var events = [\"click\", \"touchstart\"];\n\n  var activeMenuMobile = function activeMenuMobile(e) {\n    if (e.cancelable) e.preventDefault();\n    btnMobile.classList.add(classSelect);\n    menuMob.classList.add(classSelect);\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuMob, events, function () {\n      btnMobile.classList.remove(classSelect);\n      menuMob.classList.remove(classSelect);\n    });\n  };\n\n  var init = function init() {\n    if (!!events && !!btnMobile) {\n      events.forEach(function (event) {\n        btnMobile.addEventListener(event, activeMenuMobile);\n      });\n    }\n  };\n\n  return Object.freeze({\n    init: init\n  });\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/slide.js":
/*!************************************!*\
  !*** ./assets/js/modules/slide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _hideAndShowText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideAndShowText */ \"./assets/js/modules/hideAndShowText.js\");\n\n\nfunction slide() {\n  var imgSlide = document.querySelectorAll(\".img-slide\");\n  var slideContainer = document.querySelector(\".container-slide\");\n  var btnNext = document.querySelector(\".next\");\n  var btnPrev = document.querySelector(\".prev\");\n  var events = [\"click\", \"touchstart\"];\n\n  var slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imgSlide);\n\n  var imgLength = imgSlide.length;\n  var btnControl;\n  var currentIndex = 0;\n  var timerInterval;\n\n  var controlSlide = function controlSlide() {\n    var containerControl = document.createElement(\"div\");\n    containerControl.classList.add(\"control-slide\");\n    slideArray.forEach(function (li, index) {\n      containerControl.innerHTML += \"<button data-control=\\\"\".concat(index, \"\\\">\\n      </button>\");\n    });\n    slideContainer.append(containerControl);\n  };\n\n  controlSlide();\n\n  var controlEvents = function controlEvents(index) {\n    btnControl = slideContainer.querySelectorAll(\"[data-control]\");\n    btnControl.forEach(function (item) {\n      return item.classList.remove(\"on\");\n    });\n    btnControl[index].classList.add(\"on\");\n  };\n\n  var changeSlide = function changeSlide() {\n    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    imgSlide.forEach(function (item) {\n      return item.classList.remove(\"on\");\n    });\n    imgSlide[index].classList.add(\"on\");\n    currentIndex = index;\n    var textShow = (0,_hideAndShowText__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    textShow.textChange(index);\n    controlEvents(index);\n    return index;\n  };\n\n  var changeControlSlide = function changeControlSlide() {\n    btnControl = slideContainer.querySelectorAll(\"[data-control]\");\n    btnControl.forEach(function (link) {\n      link.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        var indexSelect = e.target.dataset.control;\n        currentIndex = indexSelect;\n        changeSlide(indexSelect);\n      });\n    });\n  };\n\n  changeControlSlide(); // controlado que realiza a mudança do slide //\n  // avanço e retrocesso do slide//\n\n  var startNext = function startNext() {\n    ++currentIndex;\n\n    if (currentIndex >= imgLength) {\n      currentIndex = 0;\n    }\n\n    changeSlide(currentIndex);\n  };\n\n  var next = function next(e) {\n    e.preventDefault();\n    startNext();\n  };\n\n  var prev = function prev(e) {\n    e.preventDefault();\n    --currentIndex;\n\n    if (currentIndex < 0) {\n      currentIndex = imgLength - 1;\n    }\n\n    changeSlide(currentIndex);\n  }; // troca de slide por tempo //\n\n\n  var timer = function timer() {\n    var timerx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    timerInterval = setInterval(function () {\n      startNext();\n      controlEvents(currentIndex);\n    }, timerx);\n  };\n\n  var slideStop = function slideStop() {\n    clearInterval(timerInterval);\n  };\n\n  var slideReturn = function slideReturn() {\n    return timer();\n  };\n\n  var btnEvents = function btnEvents() {\n    events.forEach(function (event) {\n      btnNext.addEventListener(event, next);\n      btnPrev.addEventListener(event, prev);\n    });\n  };\n\n  var enterAndLeaveEvent = function enterAndLeaveEvent() {\n    slideContainer.addEventListener(\"mouseenter\", slideStop);\n    slideContainer.addEventListener(\"mouseleave\", slideReturn);\n  };\n\n  var init = function init() {\n    enterAndLeaveEvent();\n    btnEvents();\n    timer();\n  };\n\n  return {\n    init: init,\n    changeSlide: changeSlide\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/slide.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropDown */ \"./assets/js/modules/dropDown.js\");\n/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-mobile */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide */ \"./assets/js/modules/slide.js\");\n\n\n\nvar dropMenuInit = (0,_modules_dropDown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-dropmenu]');\ndropMenuInit.init();\nvar menuMobInit = (0,_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('[data-btnmobile]', '[data-navigationmobile]');\nmenuMobInit.init();\nvar change = (0,_modules_slide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nchange.init(2000);\nchange.changeSlide(0);\n\n//# sourceURL=webpack://colored-waters/./assets/js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://colored-waters/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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