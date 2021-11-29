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

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_ID\": () => (/* binding */ DEFAULT_ID),\n/* harmony export */   \"Loader\": () => (/* binding */ Loader)\n/* harmony export */ });\n// do not edit .js files directly - edit src/index.jst\n\n\n\nvar fastDeepEqual = function equal(a, b) {\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n\n    for (i = length; i-- !== 0;) {\n      var key = keys[i];\n\n      if (!equal(a[key], b[key])) return false;\n    }\n\n    return true;\n  }\n\n  // true if both NaN, false otherwise\n  return a!==a && b!==b;\n};\n\n/**\r\n * Copyright 2019 Google LLC. All Rights Reserved.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at.\r\n *\r\n *      Http://www.apache.org/licenses/LICENSE-2.0.\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nconst DEFAULT_ID = \"__googleMapsScriptId\";\r\n/**\r\n * [[Loader]] makes it easier to add Google Maps JavaScript API to your application\r\n * dynamically using\r\n * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).\r\n * It works by dynamically creating and appending a script node to the the\r\n * document head and wrapping the callback function so as to return a promise.\r\n *\r\n * ```\r\n * const loader = new Loader({\r\n *   apiKey: \"\",\r\n *   version: \"weekly\",\r\n *   libraries: [\"places\"]\r\n * });\r\n *\r\n * loader.load().then((google) => {\r\n *   const map = new google.maps.Map(...)\r\n * })\r\n * ```\r\n */\r\nclass Loader {\r\n    /**\r\n     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set\r\n     * using this library, instead the defaults are set by the Google Maps\r\n     * JavaScript API server.\r\n     *\r\n     * ```\r\n     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});\r\n     * ```\r\n     */\r\n    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = \"https://maps.googleapis.com/maps/api/js\", }) {\r\n        this.CALLBACK = \"__googleMapsCallback\";\r\n        this.callbacks = [];\r\n        this.done = false;\r\n        this.loading = false;\r\n        this.errors = [];\r\n        this.version = version;\r\n        this.apiKey = apiKey;\r\n        this.channel = channel;\r\n        this.client = client;\r\n        this.id = id || DEFAULT_ID; // Do not allow empty string\r\n        this.libraries = libraries;\r\n        this.language = language;\r\n        this.region = region;\r\n        this.mapIds = mapIds;\r\n        this.nonce = nonce;\r\n        this.retries = retries;\r\n        this.url = url;\r\n        if (Loader.instance) {\r\n            if (!fastDeepEqual(this.options, Loader.instance.options)) {\r\n                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);\r\n            }\r\n            return Loader.instance;\r\n        }\r\n        Loader.instance = this;\r\n    }\r\n    get options() {\r\n        return {\r\n            version: this.version,\r\n            apiKey: this.apiKey,\r\n            channel: this.channel,\r\n            client: this.client,\r\n            id: this.id,\r\n            libraries: this.libraries,\r\n            language: this.language,\r\n            region: this.region,\r\n            mapIds: this.mapIds,\r\n            nonce: this.nonce,\r\n            url: this.url,\r\n        };\r\n    }\r\n    get failed() {\r\n        return this.done && !this.loading && this.errors.length >= this.retries + 1;\r\n    }\r\n    /**\r\n     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].\r\n     *\r\n     * @ignore\r\n     */\r\n    createUrl() {\r\n        let url = this.url;\r\n        url += `?callback=${this.CALLBACK}`;\r\n        if (this.apiKey) {\r\n            url += `&key=${this.apiKey}`;\r\n        }\r\n        if (this.channel) {\r\n            url += `&channel=${this.channel}`;\r\n        }\r\n        if (this.client) {\r\n            url += `&client=${this.client}`;\r\n        }\r\n        if (this.libraries.length > 0) {\r\n            url += `&libraries=${this.libraries.join(\",\")}`;\r\n        }\r\n        if (this.language) {\r\n            url += `&language=${this.language}`;\r\n        }\r\n        if (this.region) {\r\n            url += `&region=${this.region}`;\r\n        }\r\n        if (this.version) {\r\n            url += `&v=${this.version}`;\r\n        }\r\n        if (this.mapIds) {\r\n            url += `&map_ids=${this.mapIds.join(\",\")}`;\r\n        }\r\n        return url;\r\n    }\r\n    deleteScript() {\r\n        const script = document.getElementById(this.id);\r\n        if (script) {\r\n            script.remove();\r\n        }\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     */\r\n    load() {\r\n        return this.loadPromise();\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     *\r\n     * @ignore\r\n     */\r\n    loadPromise() {\r\n        return new Promise((resolve, reject) => {\r\n            this.loadCallback((err) => {\r\n                if (!err) {\r\n                    resolve(window.google);\r\n                }\r\n                else {\r\n                    reject(err.error);\r\n                }\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script with a callback.\r\n     */\r\n    loadCallback(fn) {\r\n        this.callbacks.push(fn);\r\n        this.execute();\r\n    }\r\n    /**\r\n     * Set the script on document.\r\n     */\r\n    setScript() {\r\n        if (document.getElementById(this.id)) {\r\n            // TODO wrap onerror callback for cases where the script was loaded elsewhere\r\n            this.callback();\r\n            return;\r\n        }\r\n        const url = this.createUrl();\r\n        const script = document.createElement(\"script\");\r\n        script.id = this.id;\r\n        script.type = \"text/javascript\";\r\n        script.src = url;\r\n        script.onerror = this.loadErrorCallback.bind(this);\r\n        script.defer = true;\r\n        script.async = true;\r\n        if (this.nonce) {\r\n            script.nonce = this.nonce;\r\n        }\r\n        document.head.appendChild(script);\r\n    }\r\n    /**\r\n     * Reset the loader state.\r\n     */\r\n    reset() {\r\n        this.deleteScript();\r\n        this.done = false;\r\n        this.loading = false;\r\n        this.errors = [];\r\n        this.onerrorEvent = null;\r\n    }\r\n    resetIfRetryingFailed() {\r\n        if (this.failed) {\r\n            this.reset();\r\n        }\r\n    }\r\n    loadErrorCallback(e) {\r\n        this.errors.push(e);\r\n        if (this.errors.length <= this.retries) {\r\n            const delay = this.errors.length * Math.pow(2, this.errors.length);\r\n            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);\r\n            setTimeout(() => {\r\n                this.deleteScript();\r\n                this.setScript();\r\n            }, delay);\r\n        }\r\n        else {\r\n            this.onerrorEvent = e;\r\n            this.callback();\r\n        }\r\n    }\r\n    setCallback() {\r\n        window.__googleMapsCallback = this.callback.bind(this);\r\n    }\r\n    callback() {\r\n        this.done = true;\r\n        this.loading = false;\r\n        this.callbacks.forEach((cb) => {\r\n            cb(this.onerrorEvent);\r\n        });\r\n        this.callbacks = [];\r\n    }\r\n    execute() {\r\n        this.resetIfRetryingFailed();\r\n        if (this.done) {\r\n            this.callback();\r\n        }\r\n        else {\r\n            // short circuit and warn if google.maps is already loaded\r\n            if (window.google && window.google.maps && window.google.maps.version) {\r\n                console.warn(\"Google Maps already loaded outside @googlemaps/js-api-loader.\" +\r\n                    \"This may result in undesirable behavior as options and script parameters may not match.\");\r\n                this.callback();\r\n                return;\r\n            }\r\n            if (this.loading) ;\r\n            else {\r\n                this.loading = true;\r\n                this.setCallback();\r\n                this.setScript();\r\n            }\r\n        }\r\n    }\r\n}\n\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://colored-waters/./node_modules/@googlemaps/js-api-loader/dist/index.esm.js?");

/***/ }),

/***/ "./assets/js/modules/apiMap.js":
/*!*************************************!*\
  !*** ./assets/js/modules/apiMap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ apiMap)\n/* harmony export */ });\n/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ \"./node_modules/@googlemaps/js-api-loader/dist/index.esm.js\");\n\nfunction apiMap() {\n  var loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({\n    apiKey: \"AIzaSyCF2qXSLUZsS0BebdOB8mSziQWLk6HEyzA\",\n    version: \"weekly\"\n  });\n  loader.load().then(function () {\n    var coloredLocation = {\n      lat: -22.893315,\n      lng: -43.1943485\n    };\n    var map = new google.maps.Map(document.querySelector(\"#map\"), {\n      center: coloredLocation,\n      zoom: 15\n    });\n    var marker = new google.maps.Marker({\n      position: coloredLocation,\n      map: map\n    });\n  });\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/apiMap.js?");

/***/ }),

/***/ "./assets/js/modules/clickOut.js":
/*!***************************************!*\
  !*** ./assets/js/modules/clickOut.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOut)\n/* harmony export */ });\nfunction clickOut(element, events, callback) {\n  var attEventAdd = 'data-on';\n  var html = document.documentElement;\n\n  var checkOutside = function checkOutside(e) {\n    if (!element.contains(e.target)) {\n      element.removeAttribute(attEventAdd);\n      callback();\n      events.forEach(function (event) {\n        html.removeEventListener(event, checkOutside);\n      });\n    }\n  };\n\n  if (!element.hasAttribute(attEventAdd)) {\n    element.setAttribute(attEventAdd, '');\n    events.forEach(function (event) {\n      setTimeout(function () {\n        return html.addEventListener(event, checkOutside);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/clickOut.js?");

/***/ }),

/***/ "./assets/js/modules/debounce.js":
/*!***************************************!*\
  !*** ./assets/js/modules/debounce.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(func, wait) {\n  var timer = null;\n  return function () {\n    clearTimeout(timer);\n    timer = setTimeout(func, wait);\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/debounce.js?");

/***/ }),

/***/ "./assets/js/modules/dropDown.js":
/*!***************************************!*\
  !*** ./assets/js/modules/dropDown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction dropdownMenu(listDrop) {\n  var dropMenu = document.querySelectorAll(listDrop);\n  var events = [\"click\", \"touchstart\"];\n\n  var activeDropDown = function activeDropDown(e) {\n    if (e.cancelable) e.preventDefault();\n    var element = e.currentTarget;\n    element.classList.add(\"on\");\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, events, function () {\n      element.classList.remove(\"on\");\n    });\n  };\n\n  var init = function init() {\n    if (dropMenu) {\n      dropMenu.forEach(function (item) {\n        events.forEach(function (event) {\n          item.addEventListener(event, activeDropDown);\n        });\n      });\n    }\n  };\n\n  return {\n    init: init\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/dropDown.js?");

/***/ }),

/***/ "./assets/js/modules/hideAndShow.js":
/*!******************************************!*\
  !*** ./assets/js/modules/hideAndShow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showAndHidden)\n/* harmony export */ });\nfunction showAndHidden(element) {\n  var text = document.querySelectorAll(element);\n\n  var change = function change(index) {\n    text.forEach(function (texts) {\n      texts.classList.remove(\"on\");\n    });\n    text[index].classList.add(\"on\");\n  };\n\n  return {\n    change: change\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/hideAndShow.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clickOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickOut */ \"./assets/js/modules/clickOut.js\");\n\nfunction menuMobile(btn, menu) {\n  var btnMobile = document.querySelector(btn);\n  var menuMob = document.querySelector(menu);\n  var classSelect = \"on\";\n  var events = [\"click\", \"touchstart\"];\n\n  var activeMenuMobile = function activeMenuMobile(e) {\n    if (e.cancelable) e.preventDefault();\n    btnMobile.classList.add(classSelect);\n    menuMob.classList.add(classSelect);\n    (0,_clickOut__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuMob, events, function () {\n      btnMobile.classList.remove(classSelect);\n      menuMob.classList.remove(classSelect);\n    });\n  };\n\n  var init = function init() {\n    if (!!events && !!btnMobile) {\n      events.forEach(function (event) {\n        btnMobile.addEventListener(event, activeMenuMobile);\n      });\n    }\n  };\n\n  return {\n    init: init\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/scrollDownUntilAppears.js":
/*!*****************************************************!*\
  !*** ./assets/js/modules/scrollDownUntilAppears.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollDownUntilAppears)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ \"./assets/js/modules/debounce.js\");\n\n\nfunction scrollDownUntilAppears(elementSection) {\n  var allSections = document.querySelectorAll(elementSection);\n  var windowMetade = window.innerHeight * 0.7;\n  allSections[0].classList.add(\"on\");\n\n  var distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(allSections);\n\n  var takeTheDistance = function takeTheDistance() {\n    var elementDistance = distance.map(function (section) {\n      var offSet = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offSet - windowMetade)\n      };\n    });\n    return elementDistance;\n  };\n\n  var checkDistance = function checkDistance() {\n    var elementDistance = takeTheDistance();\n    elementDistance.forEach(function (item) {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('on');\n      } else if (item.element.classList.contains('on')) {\n        item.element.classList.remove('on');\n      }\n    });\n  };\n\n  var init = function init() {\n    if (allSections) {\n      var awaitTemp = (0,_debounce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(checkDistance, 300);\n      window.addEventListener('scroll', awaitTemp);\n    }\n  };\n\n  return {\n    init: init\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/scrollDownUntilAppears.js?");

/***/ }),

/***/ "./assets/js/modules/selectWhatAppears.js":
/*!************************************************!*\
  !*** ./assets/js/modules/selectWhatAppears.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectWhatAppears)\n/* harmony export */ });\n/* harmony import */ var _hideAndShow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideAndShow */ \"./assets/js/modules/hideAndShow.js\");\n\nfunction selectWhatAppears(element) {\n  var select = document.querySelectorAll(element);\n  var events = [\"click\", \"touchstart\"];\n  var stars = document.querySelector(\".wrapper-stars-info\");\n  stars.classList.add(\"on\");\n  select[0].classList.add(\"on\");\n\n  var init = function init() {\n    select.forEach(function (item, index) {\n      events.forEach(function (event) {\n        item.addEventListener(event, function (e) {\n          if (e.cancelable) {\n            e.preventDefault();\n          }\n\n          var selectStars = (0,_hideAndShow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".wrapper-stars-info\");\n          selectStars.change(index);\n          var selectIcone = (0,_hideAndShow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n          selectIcone.change(index);\n        });\n      });\n    });\n  };\n\n  return {\n    init: init\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/selectWhatAppears.js?");

/***/ }),

/***/ "./assets/js/modules/signaling.js":
/*!****************************************!*\
  !*** ./assets/js/modules/signaling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signaling)\n/* harmony export */ });\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ \"./assets/js/modules/debounce.js\");\n\nfunction signaling() {\n  var containerOpinions = document.querySelector(\".container-opinions\");\n  var wrapperOpinions = document.querySelectorAll(\".wrapper-opinions\");\n  var arrowLeft = document.querySelector(\".arrow-left\");\n  var arrowRight = document.querySelector(\".arrow-right\");\n\n  var arrowIndication = function arrowIndication(distance, fixed, classe, arrow) {\n    if (distance <= fixed) arrow.classList.add(classe);else if (distance >= fixed) arrow.classList.remove(classe);\n  };\n\n  var handleMove = function handleMove() {\n    var leftFixed = 200;\n    leftFixed -= leftFixed * 2;\n    var windowSize = window.innerWidth + 50;\n    var endWrapper = wrapperOpinions[wrapperOpinions.length - 1];\n    var startWrapper = wrapperOpinions[0];\n    var lefDistance = startWrapper.getBoundingClientRect().left;\n    var rigthDistance = endWrapper.getBoundingClientRect().right;\n    arrowIndication(rigthDistance, windowSize, \"off\", arrowRight);\n    arrowIndication(lefDistance, leftFixed, \"on\", arrowLeft);\n  };\n\n  var init = function init() {\n    containerOpinions.addEventListener(\"touchmove\", (0,_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(handleMove, 300));\n  };\n\n  return {\n    init: init\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/signaling.js?");

/***/ }),

/***/ "./assets/js/modules/slide.js":
/*!************************************!*\
  !*** ./assets/js/modules/slide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ slide)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _hideAndShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideAndShow */ \"./assets/js/modules/hideAndShow.js\");\n\n\nfunction slide(timerx) {\n  var imgSlide = document.querySelectorAll('.img-slide');\n  var slideContainer = document.querySelector('.container-slide');\n  var btnNext = document.querySelector('.next');\n  var btnPrev = document.querySelector('.prev');\n  var events = ['click', 'touchstart'];\n\n  var slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imgSlide);\n\n  var imgLength = imgSlide.length;\n  var btnControl;\n  var currentIndex = 0;\n  var timerInterval;\n\n  var controlSlide = function controlSlide() {\n    var containerControl = document.createElement('div');\n    containerControl.classList.add('control-slide');\n    slideArray.forEach(function (li, index) {\n      containerControl.innerHTML += \"<button data-control=\\\"\".concat(index, \"\\\" aria-label=\\\"control index\").concat(index, \"\\\">\\n      </button>\");\n    });\n    slideContainer.append(containerControl);\n  };\n\n  controlSlide();\n\n  var controlEvents = function controlEvents(index) {\n    btnControl = slideContainer.querySelectorAll('[data-control]');\n    btnControl.forEach(function (item) {\n      return item.classList.remove('on');\n    });\n    btnControl[index].classList.add('on');\n  };\n\n  var changeSlide = function changeSlide() {\n    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    imgSlide.forEach(function (item) {\n      return item.classList.remove('on');\n    });\n    imgSlide[index].classList.add('on');\n    currentIndex = index;\n    var textShow = (0,_hideAndShow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.info-slide');\n    textShow.change(index);\n    controlEvents(index);\n    return index;\n  };\n\n  var changeControlSlide = function changeControlSlide() {\n    btnControl = slideContainer.querySelectorAll('[data-control]');\n    btnControl.forEach(function (link) {\n      link.addEventListener('click', function (e) {\n        e.preventDefault();\n        var indexSelect = e.target.dataset.control;\n        currentIndex = indexSelect;\n        changeSlide(indexSelect);\n      });\n    });\n  }; // controlado que realiza a mudança do slide //\n  // avanço e retrocesso do slide//\n\n\n  var startNext = function startNext() {\n    ++currentIndex;\n\n    if (currentIndex >= imgLength) {\n      currentIndex = 0;\n    }\n\n    changeSlide(currentIndex);\n  };\n\n  var next = function next(e) {\n    e.preventDefault();\n    startNext();\n  };\n\n  var prev = function prev(e) {\n    e.preventDefault();\n    --currentIndex;\n\n    if (currentIndex < 0) {\n      currentIndex = imgLength - 1;\n    }\n\n    changeSlide(currentIndex);\n  }; // troca de slide por tempo //\n\n\n  var timer = function timer() {\n    timerInterval = setInterval(function () {\n      startNext();\n      controlEvents(currentIndex);\n    }, timerx);\n  };\n\n  var slideStop = function slideStop() {\n    clearInterval(timerInterval);\n  };\n\n  var slideReturn = function slideReturn() {\n    return timer();\n  };\n\n  var btnEvents = function btnEvents() {\n    events.forEach(function (event) {\n      btnNext.addEventListener(event, next);\n      btnPrev.addEventListener(event, prev);\n    });\n  };\n\n  var enterAndLeaveEvent = function enterAndLeaveEvent() {\n    slideContainer.addEventListener('mouseenter', slideStop);\n    slideContainer.addEventListener('mouseleave', slideReturn);\n  };\n\n  var init = function init() {\n    enterAndLeaveEvent();\n    btnEvents();\n    timer();\n    changeControlSlide();\n  };\n\n  return {\n    init: init,\n    changeSlide: changeSlide\n  };\n}\n\n//# sourceURL=webpack://colored-waters/./assets/js/modules/slide.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropDown */ \"./assets/js/modules/dropDown.js\");\n/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-mobile */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide */ \"./assets/js/modules/slide.js\");\n/* harmony import */ var _modules_selectWhatAppears__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/selectWhatAppears */ \"./assets/js/modules/selectWhatAppears.js\");\n/* harmony import */ var _modules_signaling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/signaling */ \"./assets/js/modules/signaling.js\");\n/* harmony import */ var _modules_apiMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/apiMap */ \"./assets/js/modules/apiMap.js\");\n/* harmony import */ var _modules_scrollDownUntilAppears__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollDownUntilAppears */ \"./assets/js/modules/scrollDownUntilAppears.js\");\n\n\n\n\n\n\n\nvar dropMenuInit = (0,_modules_dropDown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-dropmenu]');\ndropMenuInit.init();\nvar menuMobInit = (0,_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('[data-btnmobile]', '[data-navigationmobile]');\nmenuMobInit.init();\nvar change = (0,_modules_slide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3000);\nchange.init();\nchange.changeSlide(0);\nvar selectStars = (0,_modules_selectWhatAppears__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.menu-item img');\nselectStars.init();\nvar arrowDirection = (0,_modules_signaling__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\narrowDirection.init();\nvar initAppears = (0,_modules_scrollDownUntilAppears__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('[data-appear]');\ninitAppears.init();\n(0,_modules_apiMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://colored-waters/./assets/js/script.js?");

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