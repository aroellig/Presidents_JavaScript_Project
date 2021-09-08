/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("\n   \n\n   const switcher = document.querySelector('.btn');\n   \n   switcher.addEventListener('click', function() {\n       document.body.classList.toggle('dark-theme')\n   \n       var className = document.body.className;\n       if(className == \"light-theme\") {\n           this.textContent = \"Dark\";\n       }\n       else {\n        this.textContent = \"Light\";\n       }\n   \n       console.log('current class name: ' + className);\n   \n   });\n\nconst width = 900;\nconst height = 600;\n\n const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);\n\n d3.json(\"https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json\")\n .then(data => {\n\n })\n\n d3.selectAll(\"p\").style(\"color\", \"blue\");\n\n//# sourceURL=webpack://JavaScriptProject/./src/index.js?");

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