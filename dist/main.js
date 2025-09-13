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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css - cleaned & grouped */\n\n/* ====== Base ====== */\nbody {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: rgb(17, 247, 189);\n  color: #222;\n  box-sizing: border-box;\n}\n\n/* ====== Header ====== */\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 5px;\n  width: calc(96%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 10px solid gray;\n  background: #651585;\n  color: wheat;\n  padding: 0 20px;\n  height: 120px;\n  z-index: 3000;\n}\n\nheader h1 {\n  margin: 0 auto;\n  font-size: 1.4rem;\n}\n\n#add-todo-btn {\n  margin-right: 30px;\n  padding: 8px 12px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  background: #4caf50;\n  color: #fff;\n}\n\n/* ====== Sidebar / Projects ====== */\n#sidebar {\n  position: fixed;\n  left: 0;\n  top: 140px;\n  width: 200px;\n  height: 100%;\n  background: #651585;\n  color: wheat;\n  border-left: 10px solid gray;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n#sidebar h2 {\n  margin-top: 0;\n}\n\n#project-list {\n  list-style: none;\n  padding: 0;\n  margin: 8px 0;\n}\n\n#project-list li {\n  margin: 8px 0;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n#project-list li:hover {\n  background: #ddd;\n  padding-left: 9px;\n  color: black;\n}\n\n#project-list li.active-project {\n  font-weight: bold;\n  background-color: #d0ebff;\n  color: black;\n}\n\n/* ====== Modal ======\n   Note: your JS sets id=\"todo-modal\" and class=\"modal\" and toggles a \"show\" class.\n   We support both #todo-modal and .modal selectors. */\n#todo-modal,\n.modal {\n  position: fixed;\n  top: 300px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10000;\n  background: #e2dcdc;\n  padding: 20px;\n  border-radius: 8px;\n  width: 300px;\n  max-width: 90%;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  display: none; /* hidden by default; JS toggles .show or sets style.display */\n  box-sizing: border-box;\n  max-height: 550px;  /* prevent very tall cards */\n  overflow-y: auto;   /* scroll if content overflows */\n}\n\n#todo-modal.show,\n.modal.show {\n  display: block;\n}\n\n.modal-content h3 {\n  margin: 0 0 12px 0;\n  text-align: center;\n}\n\n.modal-content label {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n\n.modal-content input,\n.modal-content textarea,\n.modal-content select {\n  width: 100%;\n  padding: 6px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.modal-content button {\n  padding: 8px 14px;\n  margin-right: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.modal-content button[type=\"submit\"] {\n  background-color: #4caf50;\n  color: white;\n}\n\n.modal-content #cancel-btn {\n  background-color: #f44336;\n  color: white;\n}\n\n/* ====== Main TODO area ====== */\n#todo-list {\n  margin: 20px;\n  box-sizing: border-box;\n}\n\n/* Project header */\n.project-header,\n#todo-list h1 {\n  margin-top: 175px;   /* clears fixed header height */\n  margin-left: 250px;  /* clears fixed sidebar width + gap */\n  font-size: 2rem;\n  margin-bottom: 20px;\n  font-weight: bold;\n  color: #333;\n}\n\n/* Cards wrapper */\n#cards-container {\n  margin-top: 30px;\n  margin-left: 250px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n/* ====== Card ====== */\n.todo-card {\n  width: 200px;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 18px;\n  padding: 16px;\n  box-sizing: border-box;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n  position: relative;\n}\n\n.todo-card h3 {\n  margin: 0 0 8px 0;\n  font-size: 1.15rem;\n}\n\n.todo-due,\n.todo-priority {\n  font-size: 0.95rem;\n  color: #444;\n  margin: 3px 0;\n}\n\n/* Actions */\n.todo-actions {\n  margin-top: 10px;\n  display: flex;\n  gap: 8px;\n}\n\n.edit-btn,\n.delete-btn {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.edit-btn { background: #2196f3; }\n.delete-btn { background: #dc3545; }\n\n/* ====== Checklist inside card ====== */\n.checklist {\n  list-style: none;\n  padding: 0;\n  margin: 10px 0;\n}\n\n.checklist-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 5px 0;\n  font-size: 0.95rem;\n}\n\n/* ====== Tooltip ====== */\n.tooltip-container {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 100%;\n  background: #ccc;\n  color: black;\n  padding: 8px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  white-space: pre-line;\n  z-index: 2500;\n  width: 180px;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.tooltip-container:hover .tooltip {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* ====== Misc ====== */\n#checklist-preview {\n  list-style: none;\n  padding-left: 0;\n  margin-top: 8px;\n}\n\n#checklist-preview li {\n  font-size: 14px;\n  padding: 2px 0;\n}\n\n/* ====== Time + Date inline group ====== */\n.todo-datetime {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 0.9rem;\n  color: #444;\n  margin-top: 6px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-todo/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-interface.js */ \"./src/user-interface.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// src/index.js\n\n\n\n\n// Initialize UI\n(0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();\n(0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.renderSidebar)();\n\n// ✅ if projects exist, show first one\nif (_project_js__WEBPACK_IMPORTED_MODULE_1__.projects.length > 0) {\n  (0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.renderProjectList)();\n  (0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.renderTodosList)((0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)());\n}\n\n\n//# sourceURL=webpack://my-todo/./src/index.js?\n}");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n// src/project.js\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.todos = [];\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n  }\n}\n\nlet projects = [];\n\n// ✅ Load from localStorage and revive class instances\nif (localStorage.getItem(\"projects\")) {\n  try {\n    const savedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    projects = savedProjects.map((p) => {\n      const project = new Project(p.name);\n      // revive todos as Todo instances\n      project.todos = p.todos.map(\n        (todo) =>\n          new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n            todo.title,\n            todo.description,\n            todo.dueDate,\n            todo.time,\n            todo.priority,\n            todo.notes,\n            todo.checklist || []\n          )\n      );\n      return project;\n    });\n  } catch (err) {\n    console.error(\"Error loading projects from localStorage:\", err);\n    projects = []; // fallback to empty array if parse fails\n  }\n}\n\n\n//# sourceURL=webpack://my-todo/./src/project.js?\n}");

/***/ }),

/***/ "./src/renderModal.js":
/*!****************************!*\
  !*** ./src/renderModal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTodoModal: () => (/* binding */ renderTodoModal)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _user_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-interface.js */ \"./src/user-interface.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n// src/renderModal.js\n\n\n\n\n\nfunction renderTodoModal(currentProject, todo = null, index = null) {\n  let modal = document.getElementById(\"todo-modal\");\n  if (!modal) {\n    modal = document.createElement(\"div\");\n    modal.id = \"todo-modal\";\n    modal.className = \"modal\";\n    document.body.appendChild(modal);\n  }\n\n  // ✅ Project dropdown\n  const projectOptions = _project_js__WEBPACK_IMPORTED_MODULE_3__.projects\n    .map(\n      (p) => `\n        <option value=\"${p.name}\" ${currentProject && currentProject.name === p.name ? \"selected\" : \"\"}>\n          ${p.name}\n        </option>`\n    )\n    .join(\"\");\n\n  modal.innerHTML = `\n    <div class=\"modal-content\">\n      <h3>${todo ? \"Edit Todo\" : \"New Todo\"}</h3>\n      <form id=\"todo-form\">\n        <label>Project:\n          <select id=\"todo-project\">${projectOptions}</select>\n        </label>\n        <label>Title:\n          <input type=\"text\" id=\"todo-title\" value=\"${todo ? todo.title : \"\"}\" required>\n        </label>\n        <label>Description:\n          <textarea id=\"todo-desc\">${todo ? todo.description : \"\"}</textarea>\n        </label>\n        <label>Due Date:\n          <input type=\"date\" id=\"todo-date\" value=\"${todo ? todo.dueDate : \"\"}\">\n        </label>\n        <label>Time:\n          <input type=\"time\" id=\"todo-time\" value=\"${todo ? todo.time || \"\" : \"\"}\">\n        </label>\n        <label>Priority:\n          <select id=\"todo-priority\">\n            <option value=\"Low\" ${todo?.priority === \"Low\" ? \"selected\" : \"\"}>Low</option>\n            <option value=\"Medium\" ${todo?.priority === \"Medium\" ? \"selected\" : \"\"}>Medium</option>\n            <option value=\"High\" ${todo?.priority === \"High\" ? \"selected\" : \"\"}>High</option>\n          </select>\n        </label>\n        <label>Notes:\n          <textarea id=\"todo-notes\">${todo ? todo.notes : \"\"}</textarea>\n        </label>\n        <label>Checklist (comma-separated):\n          <input type=\"text\" id=\"todo-checklist\" value=\"${todo ? todo.checklist.map(item => item.task).join(\", \") : \"\"}\">\n        </label>\n        <button type=\"submit\">Save</button>\n        <button type=\"button\" id=\"cancel-btn\">Cancel</button>\n      </form>\n    </div>\n  `;\n\n  modal.style.display = \"block\";\n\n  document.getElementById(\"cancel-btn\").addEventListener(\"click\", () => {\n    modal.style.display = \"none\";\n  });\n\n  document.getElementById(\"todo-form\").addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    const checklistInput = document.getElementById(\"todo-checklist\").value;\n    const checklistArray = checklistInput\n      .split(\",\")\n      .map((task) => task.trim())\n      .filter((task) => task.length > 0)\n      .map((task) => ({ task, done: false }));\n\n    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\n      document.getElementById(\"todo-title\").value,\n      document.getElementById(\"todo-desc\").value,\n      document.getElementById(\"todo-date\").value,\n      document.getElementById(\"todo-time\").value,\n      document.getElementById(\"todo-priority\").value,\n      document.getElementById(\"todo-notes\").value,\n      checklistArray\n    );\n\n    // ✅ Use selected project from dropdown\n    const selectedProjectName = document.getElementById(\"todo-project\").value;\nlet targetProject = _project_js__WEBPACK_IMPORTED_MODULE_3__.projects.find((p) => p.name === selectedProjectName);\n\n// ✅ fallback to activeProject if not found\nif (!targetProject) {\n  targetProject = (0,_user_interface_js__WEBPACK_IMPORTED_MODULE_2__.getActiveProject)();\n}\n\nif (!targetProject) {\n  alert(\"No project available! Please create a project first.\");\n  modal.style.display = \"none\";\n  return;\n}\n\nif (todo && index !== null) {\n  targetProject.todos[index] = newTodo;\n} else {\n  targetProject.addTodo(newTodo);\n}\n\n(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();\nmodal.style.display = \"none\";\n(0,_user_interface_js__WEBPACK_IMPORTED_MODULE_2__.renderTodosList)(targetProject);\n\n  });\n}\n\n\n//# sourceURL=webpack://my-todo/./src/renderModal.js?\n}");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n// src/storage.js\n\n\nfunction saveProjects() {\n  localStorage.setItem(\"projects\", JSON.stringify(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects));\n}\n\n\n//# sourceURL=webpack://my-todo/./src/storage.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-todo/./src/styles.css?\n}");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n// src/todo.js\nclass Todo {\n  constructor(title, description, dueDate, time, priority, notes, checklist = []) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.time = time;\n    this.priority = priority;\n    this.notes = notes;\n    this.checklist = checklist; // [{task, done}]\n  }\n}\n\n\n//# sourceURL=webpack://my-todo/./src/todo.js?\n}");

/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader),\n/* harmony export */   renderProjectList: () => (/* binding */ renderProjectList),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar),\n/* harmony export */   renderTodosList: () => (/* binding */ renderTodosList)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _renderModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderModal.js */ \"./src/renderModal.js\");\n// src/user-interface.js\n\n\n\n\nlet activeProject = null;\n\nfunction renderHeader() {\n  const header = document.querySelector(\"header\");\n  header.innerHTML = `\n    <h1>Todo App</h1>\n    <button id=\"add-todo-btn\">+ Add New Todo</button>\n  `;\n  document.getElementById(\"add-todo-btn\").addEventListener(\"click\", () => {\n    (0,_renderModal_js__WEBPACK_IMPORTED_MODULE_2__.renderTodoModal)(activeProject); // ✅ pass current project\n  });\n}\n\nfunction renderSidebar() {\n  const sidebar = document.getElementById(\"sidebar\");\n  sidebar.innerHTML = `\n    <h2>Projects</h2>\n    <ul id=\"project-list\"></ul>\n    <button id=\"add-project-btn\">+ Project</button>\n  `;\n  renderProjectList();\n\n  document.getElementById(\"add-project-btn\").addEventListener(\"click\", () => {\n    const name = prompt(\"Enter new project name:\");\n    if (!name) return;\n\n    if (!_project_js__WEBPACK_IMPORTED_MODULE_0__.projects.some((p) => p.name === name)) {\n      const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n      _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();\n      setActiveProject(newProject); // ✅ activate\n      renderProjectList();\n      renderTodosList(newProject);\n    }\n  });\n}\n\nfunction renderProjectList() {\n  const list = document.getElementById(\"project-list\");\n  list.innerHTML = \"\";\n\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\n    const li = document.createElement(\"li\");\n    li.textContent = project.name;\n\n    if (activeProject && activeProject.name === project.name) {\n      li.classList.add(\"active-project\"); // ✅ highlight\n    }\n\n    li.addEventListener(\"click\", () => {\n      setActiveProject(project);\n      renderProjectList();\n      renderTodosList(project);\n    });\n\n    list.appendChild(li);\n  });\n\n  // ✅ default highlight first if none\n  if (!activeProject && _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.length > 0) {\n    setActiveProject(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[0]);\n    renderProjectList();\n    renderTodosList(activeProject);\n  }\n}\n\nfunction renderTodosList(project) {\n  const cardsContainer = document.getElementById(\"cards-container\");\n  const projectTitle = document.getElementById(\"project-title\");\n\n  cardsContainer.innerHTML = \"\";\n  if (!project) {\n    projectTitle.textContent = \"Select a Project\";\n    return;\n  }\n\n  // ✅ update main header with project name\n  projectTitle.textContent = project.name;\n\n  project.todos\n  .filter(todo => todo) // skip null/undefined\n  .forEach((todo, index) => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"todo-card\", \"tooltip-container\");\n\n    card.innerHTML = `\n      <h3>${todo.title}</h3>\n      <p><strong>Due:</strong> ${todo.dueDate || \"No date\"} ${todo.time ? \"at \" + todo.time : \"\"}</p>\n      <p><strong>Priority:</strong> ${todo.priority}</p>\n      <ul>\n        ${todo.checklist\n          .map(\n            (item, i) => `\n              <li>\n                <input type=\"checkbox\" ${item.done ? \"checked\" : \"\"} data-todo=\"${index}\" data-check=\"${i}\">\n                ${item.task}\n              </li>`\n          )\n          .join(\"\")}\n      </ul>\n      <button class=\"edit-btn\" data-edit=\"${index}\">Edit</button>\n      <button class=\"delete-btn\" data-delete=\"${index}\">Delete</button>\n      <!-- ✅ Tooltip: ONLY description + notes -->\n      <div class=\"tooltip\">\n        ${todo.description || \"No description\"}<br><br>${todo.notes || \"No notes\"}\n      </div>\n    `;\n    cardsContainer.appendChild(card);\n\n     // ✅ Add event listeners after adding card\n    card.querySelector(\".edit-btn\").addEventListener(\"click\", () => {\n      (0,_renderModal_js__WEBPACK_IMPORTED_MODULE_2__.renderTodoModal)(project, todo, index); // open modal with current todo\n    });\n\n    card.querySelector(\".delete-btn\").addEventListener(\"click\", () => {\n      project.todos.splice(index, 1); // remove todo\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();\n      renderTodosList(project); // re-render list\n    });\n\n\n  });\n}\n\nfunction setActiveProject(project) {\n  activeProject = project;\n}\n\nfunction getActiveProject() {\n  return activeProject;\n}\n\n\n//# sourceURL=webpack://my-todo/./src/user-interface.js?\n}");

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