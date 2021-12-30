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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// index.js\n\n\nconsole.log('Index.js loaded!');\n\nwindow.onload = function() {\n\n    let users = [];\n\n    document.getElementById('signup-form').addEventListener('submit', event => {\n        event.preventDefault()\n        console.log('Submit clicked!')\n\n        const user = {\n            username: this.name,\n            fullname: this.fullname,\n            email: this.email,\n            course: this.course\n        };\n\n        user.username = document.getElementById('username').value;\n        user.fullname = document.getElementById('fullname').value;\n        user.email = document.getElementById('email').value;\n        user.course = document.getElementById('course').value;\n\n        users.push(user)\n        console.log(users)\n    })\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;