/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/WorkoutTracker.js":
/*!**********************************!*\
  !*** ./src/js/WorkoutTracker.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _trackerElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trackerElements.js */ "./src/js/trackerElements.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var WorkoutTracker = /*#__PURE__*/function () {
  function WorkoutTracker(tracker) {
    _classCallCheck(this, WorkoutTracker);

    this.tracker = tracker;
    this.setTable();
    this.workoutEntries = [];
    this.getEntriesDataFromStorage();
    this.addBtn = this.setAddBtn();
    this.clickAddBtn();
    this.tableWorkoutEntries = this.setTableWorkoutEntries();
    this.updateWorkoutTable();
  }

  _createClass(WorkoutTracker, [{
    key: "setEntriesDataToStorage",
    value: function setEntriesDataToStorage() {
      localStorage.setItem(WorkoutTracker.entriesKey, JSON.stringify(this.workoutEntries));
    }
  }, {
    key: "getEntriesDataFromStorage",
    value: function getEntriesDataFromStorage() {
      this.workoutEntries = JSON.parse(localStorage.getItem(WorkoutTracker.entriesKey) || "[]");
    }
  }, {
    key: "setTable",
    value: function setTable() {
      this.tracker.insertAdjacentHTML("afterbegin", _trackerElements_js__WEBPACK_IMPORTED_MODULE_1__.workoutTable);
    }
  }, {
    key: "setAddBtn",
    value: function setAddBtn() {
      var addBtn = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.tracker, ".add-workout-btn");
      if (addBtn) return addBtn;
    }
  }, {
    key: "clickAddBtn",
    value: function clickAddBtn() {
      var _this = this;

      this.addBtn.addEventListener("click", function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, "0");
        var day = date.getDay().toString().padStart(2, "0");

        _this.addInititalWorkoutEntry({
          date: "".concat(year, "/").concat(month, "/").concat(day),
          activity: "weight-lifting",
          duration: 45
        });
      });
    }
  }, {
    key: "addInititalWorkoutEntry",
    value: function addInititalWorkoutEntry(data) {
      this.workoutEntries.push(data);
      this.setEntriesDataToStorage();
      this.updateWorkoutTable();
    }
  }, {
    key: "setTableWorkoutEntries",
    value: function setTableWorkoutEntries() {
      var tableWorkoutEntries = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.tracker, ".workout-entries");
      if (tableWorkoutEntries) return tableWorkoutEntries;
    }
  }, {
    key: "updateWorkoutTable",
    value: function updateWorkoutTable() {
      var _this2 = this;

      var addWorkout = function addWorkout(workoutEntryData) {
        var template = document.createElement("template");
        var workout = null;
        template.innerHTML = _trackerElements_js__WEBPACK_IMPORTED_MODULE_1__.workoutRow.trim();
        workout = template.content.firstElementChild;

        _this2.setInputValue(workout, workoutEntryData);

        _this2.updateWorkoutData(workout, workoutEntryData);

        _this2.tableWorkoutEntries.appendChild(workout);
      };

      this.tableWorkoutEntries.querySelectorAll(".workout-row").forEach(function (row) {
        return row.remove();
      });
      this.workoutEntries.forEach(function (entryData) {
        return addWorkout(entryData);
      });
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(workout, workoutEntryData) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-date").value = workoutEntryData.date;
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-activity").value = workoutEntryData.activity;
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-duration").value = workoutEntryData.duration;
    }
  }, {
    key: "updateWorkoutData",
    value: function updateWorkoutData(workout, data) {
      var _this3 = this;

      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-date").addEventListener("change", function (_ref) {
        var target = _ref.target;
        data.date = target.value;

        _this3.setEntriesDataToStorage();
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-activity").addEventListener("change", function (_ref2) {
        var target = _ref2.target;
        data.activity = target.value;

        _this3.setEntriesDataToStorage();
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".workout-duration").addEventListener("change", function (_ref3) {
        var target = _ref3.target;
        data.duration = target.value;

        _this3.setEntriesDataToStorage();
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workout, ".delete-btn").addEventListener("click", function () {
        return _this3.deleteWorkoutEntry(data);
      });
    }
  }, {
    key: "deleteWorkoutEntry",
    value: function deleteWorkoutEntry(dataToDelete) {
      var copyOfEntries = this.workoutEntries.filter(function (entry) {
        return entry !== dataToDelete;
      });
      this.workoutEntries = copyOfEntries;
      this.setEntriesDataToStorage();
      this.updateWorkoutTable();
    }
  }]);

  return WorkoutTracker;
}();

_defineProperty(WorkoutTracker, "entriesKey", "workout-entries");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkoutTracker);

/***/ }),

/***/ "./src/js/trackerElements.js":
/*!***********************************!*\
  !*** ./src/js/trackerElements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "workoutRow": () => (/* binding */ workoutRow),
/* harmony export */   "workoutTable": () => (/* binding */ workoutTable)
/* harmony export */ });
var workoutTable = "\n    <table class=\"workout\">\n        <thead>\n            <tr>\n                <th>date</th>\n                <th>workout</th>\n                <th>duration</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody class=\"workout-entries\"></tbody>\n        <tbody>\n            <tr class=\"workout-row add-row\">\n                <td colspan=\"4\">\n                    <span class=\"add-workout-btn\">add</span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n";
var workoutRow = "\n    <tr class=\"workout-row\">\n        <td>\n            <input type=\"date\" class=\"workout-date\">\n        </td>\n        <td>\n            <select class=\"workout-activity\">\n                <option value=\"weight-lifting\">Weight Lifting</option>\n                <option value=\"running\">Running</option>\n                <option value=\"cycling\">Cycling</option>\n                <option value=\"treadmill\">Treadmill</option>\n                <option value=\"swimming\">Swimming</option>\n                <option value=\"hiking\">Hiking</option>\n            </select>\n        </td>\n        <td>\n            <input type=\"number\" class=\"workout-duration\">\n            <span class=\"duration-text\">minutes</span>\n        </td>\n        <td>\n            <button type=\"button\" class=\"delete-btn\">&times;</button>\n        </td>\n    </tr>\n";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: #ffefba;\n}\n\n.tracker {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  height: 100%;\n}\n\n.workout {\n  font-size: 14px;\n  border-collapse: collapse;\n  width: 40rem;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.workout th {\n  padding: 1rem 0.75rem;\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #d9f5d9;\n  background-color: #a1f7a1;\n  text-shadow: -3px 5px 4px #84be84, 0 -2px 1px #fff;\n}\n.workout td {\n  padding: 0.75rem;\n}\n\n.workout-entries,\n.workout-row {\n  background: #ffffff;\n}\n\n.workout-entries,\n.workout-row:nth-child(odd) {\n  background: #faf9f9;\n}\n\n.workout-activity,\n.workout-date,\n.workout-duration {\n  display: inline-block;\n  box-sizing: border-box;\n  color: #84be84;\n  font-size: 1rem;\n  height: 2.5rem;\n  padding: 0.5rem 0;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\n.workout-duration {\n  width: 5rem;\n  text-align: right;\n}\n\n.duration-text {\n  color: #84be84;\n}\n\n.delete-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  color: #dc281e;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-left: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;\n  cursor: pointer;\n}\n.delete-btn:hover {\n  background: #dc281e;\n  color: #ffffff;\n}\n\n.add-row {\n  background: #ffffff !important;\n}\n.add-row td {\n  text-align: right;\n}\n.add-row .add-workout-btn {\n  display: inline-block;\n  padding: 0.5rem 0.8rem;\n  color: #dafcda;\n  background-color: #a1f7a1;\n  text-shadow: -3px 5px 5px #84be84, 0 -2px 1px #fff;\n  font-weight: 900;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;\n}\n.add-row .add-workout-btn:hover {\n  background: #ffffff;\n  color: #bbb0a1;\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEE;EACE,aAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AACJ;;AAEE;EACE,eAAA;EACA,yBAAA;EACA,YAAA;EACA,4CAAA;AACJ;AACI;EACE,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,kDAAA;AACN;AAEI;EACE,gBAAA;AAAN;;AAIE;;EAEE,mBAAA;AADJ;;AAIE;;EAEE,mBAAA;AADJ;;AAIE;;;EAGE,qBAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;AADJ;;AAIE;EACE,WAAA;EACA,iBAAA;AADJ;;AAIE;EACE,cAAA;AADJ;;AAIE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,2CAAA;EACA,eAAA;AADJ;AAGI;EACE,mBAAA;EACA,cAAA;AADN;;AAKE;EACE,8BAAA;AAFJ;AAII;EACE,iBAAA;AAFN;AAKI;EACE,qBAAA;EACA,sBAAA;EACA,cAAA;EACA,yBAAA;EACA,kDAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,4CAAA;AAHN;AAKM;EACE,mBAAA;EACA,cAAA;AAHR","sourcesContent":["body {\r\n    background: #ffefba;\r\n  }\r\n  \r\n  .tracker {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    height: 100%;\r\n  }\r\n  \r\n  .workout {\r\n    font-size: 14px;\r\n    border-collapse: collapse;\r\n    width: 40rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n  \r\n    & th {\r\n      padding: 1rem .75rem;\r\n      font-size: 1.3rem;\r\n      text-align: center;\r\n      font-weight: 700;\r\n      text-transform: uppercase;\r\n      letter-spacing: 1px;\r\n      color: #d9f5d9;\r\n      background-color: #a1f7a1;\r\n      text-shadow: -3px 5px 4px #84be84, 0 -2px 1px #fff;\r\n    }\r\n  \r\n    & td {\r\n      padding: 0.75rem;\r\n    }\r\n  }\r\n  \r\n  .workout-entries,\r\n  .workout-row {\r\n    background: #ffffff;\r\n  }\r\n  \r\n  .workout-entries,\r\n  .workout-row:nth-child(odd) {\r\n    background: #faf9f9;\r\n  }\r\n  \r\n  .workout-activity,\r\n  .workout-date,\r\n  .workout-duration {\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    color: #84be84;\r\n    font-size: 1rem;\r\n    height: 2.5rem;\r\n    padding: 0.5rem 0;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .workout-duration {\r\n    width: 5rem;\r\n    text-align: right;\r\n  }\r\n  \r\n  .duration-text {\r\n    color: #84be84;\r\n  }\r\n  \r\n  .delete-btn {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #ffffff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    color: #dc281e;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    margin-left: 0.5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;\r\n    cursor: pointer;\r\n  \r\n    &:hover {\r\n      background: #dc281e;\r\n      color: #ffffff;\r\n    }\r\n  }\r\n  \r\n  .add-row {\r\n    background: #ffffff !important;\r\n  \r\n    & td {\r\n      text-align: right;\r\n    }\r\n  \r\n    .add-workout-btn {\r\n      display: inline-block;\r\n      padding: .5rem .8rem;\r\n      color: #dafcda;\r\n      background-color: #a1f7a1;\r\n      text-shadow: -3px 5px 5px #84be84, 0 -2px 1px #fff;\r\n      font-weight: 900;\r\n      font-size: 1.2rem;\r\n      text-transform: uppercase;\r\n      letter-spacing: 1px;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;\r\n  \r\n      &:hover {\r\n        background: #ffffff;\r\n        color: #bbb0a1;\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _WorkoutTracker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkoutTracker.js */ "./src/js/WorkoutTracker.js");


var selector = document.querySelector(".tracker");
var tracker = new _WorkoutTracker_js__WEBPACK_IMPORTED_MODULE_1__["default"](selector);
window.tracker = tracker;
})();

/******/ })()
;
//# sourceMappingURL=bundle.d80d96bc45dd174a0dbb.js.map