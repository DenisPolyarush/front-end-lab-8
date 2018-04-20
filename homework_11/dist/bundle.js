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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const addition = (num1, num2) => {
	return Number(num1) + Number(num2);
};
const subtraction = (num1, num2) => {
	return num1 - num2;
};
const multiplication = (num1, num2) => {
	return num1 * num2;
};
const division = (num1, num2) => {
	return num1 / num2;
};

/* harmony default export */ __webpack_exports__["default"] = ({
	addition: addition,
	subtraction: subtraction,
	multiplication: multiplication,
	division: division
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
let calc = document.createElement('div');

let btns = document.createElement('div');

let numOne = document.createElement('input');
numOne.setAttribute('type', 'number');
numOne.setAttribute('placeholder', 'Enter number one');

let numTwo = document.createElement('input');
numTwo.setAttribute('type', 'number');
numTwo.setAttribute('placeholder', 'Enter number two');

let btnAddition = document.createElement('button');
btnAddition.innerHTML = '+';

let btnSubtraction = document.createElement('button');
btnSubtraction.innerHTML = '-';

let btnMultiplication = document.createElement('button');
btnMultiplication.innerHTML = '*';

let btnDivision = document.createElement('button');
btnDivision.innerHTML = '/';

calc.appendChild(numOne);
calc.appendChild(numTwo);

btns.appendChild(btnAddition);
btns.appendChild(btnSubtraction);
btns.appendChild(btnMultiplication);
btns.appendChild(btnDivision);

calc.appendChild(btns);

let out = document.querySelector('#root');
out.appendChild(calc);

/* harmony default export */ __webpack_exports__["default"] = ({
  numOne: numOne,
  numTwo: numTwo,
  btnAddition: btnAddition,
  btnSubtraction: btnSubtraction,
  btnMultiplication: btnMultiplication,
  btnDivision: btnDivision
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module_js__ = __webpack_require__(1);



__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].btnAddition.addEventListener('click', () => {
	alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].addition(__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numTwo.value));
});

__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].btnSubtraction.addEventListener('click', () => {
	alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].subtraction(__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numTwo.value));
});

__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].btnMultiplication.addEventListener('click', () => {
	alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].multiplication(__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numTwo.value));
});

__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].btnDivision.addEventListener('click', () => {
	alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].division(__WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module_js__["default"].numTwo.value));
});

/***/ })
/******/ ]);