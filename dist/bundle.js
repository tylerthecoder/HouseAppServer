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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/auth.ts":
/*!*********************!*\
  !*** ./src/auth.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_friend_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/friend/schema */ "./src/components/friend/schema.ts");

var CheckPass = function (req, res) {
    var _a = req.query, pass = _a.pass, whoami = _a.whoami;
    _components_friend_schema__WEBPACK_IMPORTED_MODULE_0__["FriendModel"].findOne({ friend_d: whoami })
        .then(function (friend) {
        if (friend.hash === pass) {
            res.status(202).send('Sucess');
        }
        else {
            res.status(500).send('Wrong password');
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (CheckPass);


/***/ }),

/***/ "./src/components/base-chore/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/base-chore/controller.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/components/base-chore/model.ts");


var BaseChoreController = {
    get: function (_a, prop) {
        var baseChoreId = _a.base_chore_id;
        if (prop === void 0) { prop = null; }
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose("Getting base chore id " + baseChoreId + " from controller");
        if (!baseChoreId) {
            throw new Error('Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_1__["default"].get(baseChoreId, prop);
    },
    getAll: function () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all base chores from controller');
        return _model__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
    },
    add: function (_a) {
        var name = _a.name, points = _a.points, friend = _a.friend;
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose("Creating base chore with name: " + name + ", points: " + points + ", creator: " + friend);
        if (!name || !points || !friend) {
            throw new Error('Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_1__["default"].add(name, points, friend);
    },
};
/* harmony default export */ __webpack_exports__["default"] = (BaseChoreController);


/***/ }),

/***/ "./src/components/base-chore/model.ts":
/*!********************************************!*\
  !*** ./src/components/base-chore/model.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/components/base-chore/schema.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;


var BaseChoreModel = {
    get: function (baseChoreId, prop) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose("Getting base chore id " + baseChoreId + " from model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"].findById(baseChoreId, prop)
                    .then(function (baseChore) {
                    if (prop)
                        return baseChore[prop];
                    return baseChore;
                })];
        });
    }); },
    getAll: function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all base chores from model');
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"].find()];
        });
    }); },
    add: function (name, points, friend) {
        var baseChore = new _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"]({
            name: name,
            points: points,
            creator_id: friend,
            created_date: (new Date()).getTime(),
        });
        return baseChore.save();
    },
};
/* harmony default export */ __webpack_exports__["default"] = (BaseChoreModel);


/***/ }),

/***/ "./src/components/base-chore/schema.ts":
/*!*********************************************!*\
  !*** ./src/components/base-chore/schema.ts ***!
  \*********************************************/
/*! exports provided: BaseChoreType, BaseChoreResolvers, BaseChoreModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChoreType", function() { return BaseChoreType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChoreResolvers", function() { return BaseChoreResolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChoreModel", function() { return BaseChoreModel; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/components/base-chore/controller.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


var BaseChoreType = "\n  type BaseChoreType {\n    id: String!,\n    name: String!,\n    creator_id: String,\n    points: Int!,\n  }\n\n  type Query {\n    baseChores: [BaseChoreType],\n  }\n\n  type Mutation {\n    addBaseChore(\n      name: String!,\n      points: Int!,\n      friend: String!,\n    ) : BaseChoreType\n  }\n";
var BaseChoreResolvers = {
    Query: {
        baseChores: function () { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); },
    },
    Mutation: {
        addBaseChore: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args); },
    },
};
var baseChoreSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    created_date: Number,
    name: String,
    points: Number,
});
var BaseChoreModel = mongoose__WEBPACK_IMPORTED_MODULE_1__["model"]('base-chores', baseChoreSchema);


/***/ }),

/***/ "./src/components/chore/controller.ts":
/*!********************************************!*\
  !*** ./src/components/chore/controller.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/components/chore/model.ts");
/* harmony import */ var _friend_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../friend/controller */ "./src/components/friend/controller.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;



var ChoreController = {
    get: function (_a) {
        var id = _a.id;
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose("Getting chore id " + id + " from controller");
                if (!id) {
                    throw new Error('getChore Malformed');
                }
                return [2 /*return*/, _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(id)];
            });
        });
    },
    getAll: function () {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose('Getting all chores from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    getFriendChores: function (_a) {
        var friend_id = _a.friend_id;
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose("Getting chores for friend id " + friend_id + " from controller");
        if (!friend_id) {
            throw new Error('getFriendChores Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getFriendChores(friend_id);
    },
    add: function (_a) {
        var base_chore_id = _a.base_chore_id, friend_id = _a.friend_id;
        return __awaiter(_this, void 0, void 0, function () {
            var friends, friendPoints, doerId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!base_chore_id && !friend_id) {
                            throw new Error('Malformed');
                        }
                        return [4 /*yield*/, _friend_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getAll()];
                    case 1:
                        friends = _b.sent();
                        return [4 /*yield*/, Promise.all(friends.map(function (friend) { return _model__WEBPACK_IMPORTED_MODULE_0__["default"].calcFriendPoints(friend.friend_id); }))];
                    case 2:
                        friendPoints = _b.sent();
                        friends.forEach(function (friend, index) {
                            friend.points = friendPoints[index];
                        });
                        doerId = friends.reduce(function (best, friend) {
                            return friend.points <= best.points ? friend : best;
                        }).friend_id;
                        return [4 /*yield*/, _model__WEBPACK_IMPORTED_MODULE_0__["default"].add({ base_chore_id: base_chore_id, doer_id: doerId, creator_id: friend_id })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    changeStatus: function (_a) {
        var id = _a.id, status = _a.status;
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose("Chaning chore status to " + status + " on id " + id);
        if (!id || !status) {
            throw new Error('Malformed');
        }
        var stati = ['assigned', 'completed', 'verified'];
        if (stati.indexOf(status) === -1) {
            throw new Error('Status is Invalid');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(id, status);
    },
};
/* harmony default export */ __webpack_exports__["default"] = (ChoreController);


/***/ }),

/***/ "./src/components/chore/model.ts":
/*!***************************************!*\
  !*** ./src/components/chore/model.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_chore_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-chore/controller */ "./src/components/base-chore/controller.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./src/components/chore/schema.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;



var ChoreModel = {
    get: function (id) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("Getting chore " + id + " in model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].findById(id)];
        });
    }); },
    getAll: function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all chores from model');
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find()];
        });
    }); },
    getFriendChores: function (friendId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("Getting all friendId " + friendId + " from model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find({
                    doer_id: friendId,
                })];
        });
    }); },
    add: function (_a) {
        var base_chore_id = _a.base_chore_id, doer_id = _a.doer_id, creator_id = _a.creator_id;
        return __awaiter(_this, void 0, void 0, function () {
            var chore;
            return __generator(this, function (_b) {
                chore = new _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"]({
                    doer_id: doer_id,
                    creator_id: creator_id,
                    base_chore_id: base_chore_id,
                    status: 'assigned',
                    assigned_date: (new Date()).getTime(),
                });
                return [2 /*return*/, chore.save()];
            });
        });
    },
    changeStatus: function (id, status) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("Changing chore id " + id + " status to " + status + " in model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].findByIdAndUpdate(id, { status: status })];
        });
    }); },
    calcFriendPoints: function (friendId) { return __awaiter(_this, void 0, void 0, function () {
        var chores, baseChores, myChores, choreCount, points;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find()];
                case 1:
                    chores = _a.sent();
                    return [4 /*yield*/, _base_chore_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll()];
                case 2:
                    baseChores = _a.sent();
                    myChores = chores.filter(function (chore) { return chore.doer_id === friendId; });
                    choreCount = myChores.reduce(function (record, chore) {
                        if (!record[chore.base_chore_id])
                            record[chore.base_chore_id] = 0;
                        record[chore.base_chore_id]++;
                        return record;
                    }, {});
                    points = baseChores.reduce(function (pts, bChore) {
                        var count = choreCount[bChore._id] ? choreCount[bChore._id] : 0;
                        return pts + count * bChore.points;
                    }, 0);
                    return [2 /*return*/, points];
            }
        });
    }); },
};
/* harmony default export */ __webpack_exports__["default"] = (ChoreModel);


/***/ }),

/***/ "./src/components/chore/schema.ts":
/*!****************************************!*\
  !*** ./src/components/chore/schema.ts ***!
  \****************************************/
/*! exports provided: ChoreType, ChoreResolvers, ChoreSchema, ChoreModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoreType", function() { return ChoreType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoreResolvers", function() { return ChoreResolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoreSchema", function() { return ChoreSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoreModel", function() { return ChoreModel; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/components/chore/controller.ts");
/* harmony import */ var _base_chore_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-chore/controller */ "./src/components/base-chore/controller.ts");
/* harmony import */ var _friend_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friend/controller */ "./src/components/friend/controller.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




var ChoreType = "\n  type ChoreType {\n    id: String!,\n    status: String,\n    doer_id: String,\n    chore_id: String,\n    creator_id: String,\n    base_chore_id: String!,\n    name: String,\n    points: Int,\n    doer: FriendType,\n    creator: FriendType\n  }\n\n  type Query {\n    chore(id: String!): ChoreType,\n    chores: [ChoreType]\n  }\n\n  type Mutation {\n    changeStatus (\n      id: String!,\n      status: String!\n    ): ChoreType,\n\n    addChore(\n      base_chore_id: String!,\n      friend_id: String\n    ): ChoreType\n  }\n";
var ChoreResolvers = {
    ChoreType: {
        name: function (obj) { return _base_chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get(obj, 'name'); },
        points: function (obj) { return _base_chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get(obj, 'points'); },
        doer: function (obj) { return _friend_controller__WEBPACK_IMPORTED_MODULE_2__["default"].get({ friend_id: obj.doer_id }); },
        creator: function (obj) { return _friend_controller__WEBPACK_IMPORTED_MODULE_2__["default"].get({ friend_id: obj.creator_id }); },
    },
    Query: {
        chore: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args); },
        chores: function () { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); },
    },
    Mutation: {
        changeStatus: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(args); },
        addChore: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args); }
    },
};
var ChoreSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
    doer_id: String,
    creator_id: String,
    base_chore_id: String,
    status: String,
    assigned_date: Number,
});
var ChoreModel = mongoose__WEBPACK_IMPORTED_MODULE_3__["model"]('Chores', ChoreSchema);


/***/ }),

/***/ "./src/components/friend/controller.ts":
/*!*********************************************!*\
  !*** ./src/components/friend/controller.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/components/friend/model.ts");
/* harmony import */ var _chore_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chore/model */ "./src/components/chore/model.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;



var FriendController = {
    get: function (_a) {
        var friend_id = _a.friend_id;
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose("Getting friend " + friend_id + " from controller");
        if (!friend_id) {
            throw new Error('GetFriend Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(friend_id);
    },
    getAll: function () {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose('Getting all friends from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    calcPoints: function (_a) {
        var friend_id = _a.friend_id;
        return __awaiter(_this, void 0, void 0, function () {
            var points;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!friend_id) {
                            throw new Error('Malformed');
                        }
                        return [4 /*yield*/, _chore_model__WEBPACK_IMPORTED_MODULE_1__["default"].calcFriendPoints(friend_id)];
                    case 1:
                        points = _b.sent();
                        return [2 /*return*/, points];
                }
            });
        });
    },
};
/* harmony default export */ __webpack_exports__["default"] = (FriendController);


/***/ }),

/***/ "./src/components/friend/model.ts":
/*!****************************************!*\
  !*** ./src/components/friend/model.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/components/friend/schema.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;


var FriendModel = {
    get: function (friendId) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose("Getting friend " + friendId + " in model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_1__["FriendModel"].findOne({ friend_id: friendId })];
        });
    }); },
    getAll: function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all friends from model');
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_1__["FriendModel"].find()];
        });
    }); },
};
/* harmony default export */ __webpack_exports__["default"] = (FriendModel);


/***/ }),

/***/ "./src/components/friend/schema.ts":
/*!*****************************************!*\
  !*** ./src/components/friend/schema.ts ***!
  \*****************************************/
/*! exports provided: FriendType, FriendResolvers, FriendModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendType", function() { return FriendType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendResolvers", function() { return FriendResolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendModel", function() { return FriendModel; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/components/friend/controller.ts");
/* harmony import */ var _chore_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chore/controller */ "./src/components/chore/controller.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



var FriendType = "\n  type FriendType {\n    name: String!,\n    color: String!,\n    hash: String!,\n    friend_id: String!,\n    points: Int,\n    chores: [ChoreType],\n  }\n\n  type Query {\n    friend (friend_id: String): FriendType,\n    friends: [FriendType]\n  }\n";
var FriendResolvers = {
    FriendType: {
        points: function (obj) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].calcPoints(obj); },
        chores: function (obj) { return _chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getFriendChores(obj); },
    },
    Query: {
        friend: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args); },
        friends: function () { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); },
    },
};
var FriendSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
    name: String,
    color: String,
    hash: String,
    friend_id: String,
});
var FriendModel = mongoose__WEBPACK_IMPORTED_MODULE_2__["model"]('Friends', FriendSchema);


/***/ }),

/***/ "./src/components/iou/controller.ts":
/*!******************************************!*\
  !*** ./src/components/iou/controller.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/components/iou/model.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../log */ "./src/log.ts");


var iouController = {
    get: function (_a) {
        var id = _a.id;
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("Getting iou id " + id + " from controller");
        if (!id) {
            throw new Error('get IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    },
    getAll: function () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all ious from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    add: function (_a) {
        var toFriend_id = _a.toFriend_id, fromFriend_id = _a.fromFriend_id, amount = _a.amount;
        if (!toFriend_id || !fromFriend_id) {
            throw new Error('add IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].add(toFriend_id, fromFriend_id, amount);
    },
    ioWho: function (friendId) {
        // calculate how much I own each friend
    },
};
/* harmony default export */ __webpack_exports__["default"] = (iouController);


/***/ }),

/***/ "./src/components/iou/model.ts":
/*!*************************************!*\
  !*** ./src/components/iou/model.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/components/iou/schema.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;


var iouModel = {
    get: function (id) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("Getting iou id " + id + " from model");
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].findById(id)];
        });
    }); },
    getAll: function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all ious from model');
            return [2 /*return*/, _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].find()];
        });
    }); },
    add: function (toId, fromId, amount) {
        var iou = new _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"]({
            to_id: toId,
            from_id: fromId,
            amount: amount,
            assigned_date: (new Date()).getTime(),
        });
        return iou.save();
    },
    ioWho: function (friendId) {
        var aggragation = [
            { $match: { from_id: friendId } },
        ];
        return _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].aggregate(aggragation);
    },
};
/* harmony default export */ __webpack_exports__["default"] = (iouModel);


/***/ }),

/***/ "./src/components/iou/schema.ts":
/*!**************************************!*\
  !*** ./src/components/iou/schema.ts ***!
  \**************************************/
/*! exports provided: IouType, IouResolvers, IouModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouType", function() { return IouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouResolvers", function() { return IouResolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouModel", function() { return IouModel; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/components/iou/controller.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


var IouType = "\n  type IouType {\n    id: String!,\n    to_id: String!,\n    from_id: String!,\n    amount: Float!,\n    time: String\n  }\n\n  type Query {\n    iou(id: String!): IouType,\n    ious: [IouType]\n  }\n\n  type Mutation {\n    addIou(\n      to_id: String!,\n      from_id: String!,\n      amount: Float!\n    ): IouType\n  }\n";
var IouResolvers = {
    IouType: {},
    Query: {
        iou: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args); },
        ious: function () { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); },
    },
    Mutation: {
        addIou: function (_, args) { return _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args); },
    },
};
var iouSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    to_id: String,
    from_id: String,
    amount: Number,
    time: String,
});
var IouModel = mongoose__WEBPACK_IMPORTED_MODULE_1__["model"]('Ious', iouSchema);


/***/ }),

/***/ "./src/log.ts":
/*!********************!*\
  !*** ./src/log.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

var consoleOptions = {
    name: 'log1',
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    prettyPrint: function (object) {
        console.log('ejrkljds');
        return JSON.stringify(object);
    },
};
var logger = winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"]({
    level: 'debug',
    format: winston__WEBPACK_IMPORTED_MODULE_0__["format"].simple(),
    transports: [
        new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console(consoleOptions),
    ],
});
/* harmony default export */ __webpack_exports__["default"] = (logger);


/***/ }),

/***/ "./src/mongo.ts":
/*!**********************!*\
  !*** ./src/mongo.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var uri = 'mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621';
mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"](uri);


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ "./src/auth.ts");
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mongo */ "./src/mongo.ts");
/* harmony import */ var _components_base_chore_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/base-chore/schema */ "./src/components/base-chore/schema.ts");
/* harmony import */ var _components_chore_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chore/schema */ "./src/components/chore/schema.ts");
/* harmony import */ var _components_friend_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/friend/schema */ "./src/components/friend/schema.ts");
/* harmony import */ var _components_iou_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/iou/schema */ "./src/components/iou/schema.ts");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__);













var app = express__WEBPACK_IMPORTED_MODULE_0__();
var publicDir = path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, 'public');
var port = process.env.PORT || 1337;
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](publicDir));
var types = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__["mergeTypes"])([_components_base_chore_schema__WEBPACK_IMPORTED_MODULE_8__["BaseChoreType"], _components_chore_schema__WEBPACK_IMPORTED_MODULE_9__["ChoreType"], _components_friend_schema__WEBPACK_IMPORTED_MODULE_10__["FriendType"], _components_iou_schema__WEBPACK_IMPORTED_MODULE_11__["IouType"]]);
var resolvers = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__["mergeResolvers"])([_components_base_chore_schema__WEBPACK_IMPORTED_MODULE_8__["BaseChoreResolvers"], _components_chore_schema__WEBPACK_IMPORTED_MODULE_9__["ChoreResolvers"], _components_friend_schema__WEBPACK_IMPORTED_MODULE_10__["FriendResolvers"], _components_iou_schema__WEBPACK_IMPORTED_MODULE_11__["IouResolvers"]]);
var schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_5__["makeExecutableSchema"])({
    resolvers: resolvers,
    typeDefs: types,
});
app.use('/graphql', body_parser__WEBPACK_IMPORTED_MODULE_2__["json"](), cors__WEBPACK_IMPORTED_MODULE_1___default()(), Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["graphqlExpress"])({ schema: schema }));
app.use('/graphiql', Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["graphiqlExpress"])({
    endpointURL: '/graphql',
}));
app.listen(port);
app.get('/login', function (req, res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_6__["default"])(req, res);
});

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY2hvcmUvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hvcmUvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyaWVuZC9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lvdS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1lcmdlLWdyYXBocWwtc2NoZW1hc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRnlEO0FBRXpELElBQU0sU0FBUyxHQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDbkIsa0JBQTRCLEVBQTFCLGNBQUksRUFBRSxrQkFBTSxDQUFlO0lBQ25DLHFFQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3RDLElBQUksQ0FBQyxVQUFDLE1BQU07UUFDWCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFB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QUFFdkcsSUFBTSxNQUFNLEdBQUcsMEVBQW9CLENBQUM7SUFDbEMsU0FBUztJQUNULFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGdEQUFlLEVBQUUsRUFBRSwyQ0FBSSxFQUFFLEVBQUUsNEVBQWMsQ0FBQyxFQUFFLE1BQU0sVUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSw2RUFBZSxDQUFDO0lBQ25DLFdBQVcsRUFBRSxVQUFVO0NBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3pCLHFEQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUNILGtEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCB7IEZyaWVuZE1vZGVsIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZyaWVuZC9zY2hlbWEnO1xuXG5jb25zdCBDaGVja1Bhc3MgPSAocmVxLCByZXMpOiB2b2lkID0+IHtcbiAgY29uc3QgeyBwYXNzLCB3aG9hbWkgfSA9IHJlcS5xdWVyeTtcbiAgRnJpZW5kTW9kZWwuZmluZE9uZSh7IGZyaWVuZF9kOiB3aG9hbWkgfSlcbiAgICAudGhlbigoZnJpZW5kKSA9PiB7XG4gICAgICBpZiAoZnJpZW5kLmhhc2ggPT09IHBhc3MpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDIpLnNlbmQoJ1N1Y2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1dyb25nIHBhc3N3b3JkJyk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja1Bhc3M7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgQmFzZUNob3JlTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBJQmFzZUNob3JlIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5jb25zdCBCYXNlQ2hvcmVDb250cm9sbGVyID0ge1xuXG4gIGdldDogKHsgYmFzZV9jaG9yZV9pZDogYmFzZUNob3JlSWQgfSwgcHJvcCA9IG51bGwpOiBQcm9taXNlPElCYXNlQ2hvcmU+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBiYXNlIGNob3JlIGlkICR7YmFzZUNob3JlSWR9IGZyb20gY29udHJvbGxlcmApO1xuICAgIGlmICghYmFzZUNob3JlSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5nZXQoYmFzZUNob3JlSWQsIHByb3ApO1xuICB9LFxuXG4gIGdldEFsbDogKCk6IFByb21pc2U8SUJhc2VDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGJhc2UgY2hvcmVzIGZyb20gY29udHJvbGxlcicpO1xuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBhZGQ6ICh7IG5hbWUsIHBvaW50cywgZnJpZW5kfSk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBDcmVhdGluZyBiYXNlIGNob3JlIHdpdGggbmFtZTogJHtuYW1lfSwgcG9pbnRzOiAke3BvaW50c30sIGNyZWF0b3I6ICR7ZnJpZW5kfWApO1xuICAgIGlmICghbmFtZSB8fCAhcG9pbnRzIHx8ICFmcmllbmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5hZGQobmFtZSwgcG9pbnRzLCBmcmllbmQpO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ2hvcmVDb250cm9sbGVyO1xuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgQmFzZUNob3JlTW9kZWwgYXMgTW9kZWwsIElCYXNlQ2hvcmUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IEJhc2VDaG9yZU1vZGVsID0ge1xuXG4gIGdldDogYXN5bmMgKGJhc2VDaG9yZUlkOiBzdHJpbmcsIHByb3A6IHN0cmluZyk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGJhc2UgY2hvcmUgaWQgJHtiYXNlQ2hvcmVJZH0gZnJvbSBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kQnlJZChiYXNlQ2hvcmVJZCwgcHJvcClcbiAgICAgIC50aGVuKChiYXNlQ2hvcmUpID0+IHtcbiAgICAgICAgaWYgKHByb3ApIHJldHVybiBiYXNlQ2hvcmVbcHJvcF07XG4gICAgICAgIHJldHVybiBiYXNlQ2hvcmU7XG4gICAgICB9KTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElCYXNlQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBiYXNlIGNob3JlcyBmcm9tIG1vZGVsJyk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoKTtcbiAgfSxcblxuICBhZGQ6IChuYW1lOiBzdHJpbmcsIHBvaW50czogbnVtYmVyLCBmcmllbmQ6IHN0cmluZyk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGNvbnN0IGJhc2VDaG9yZSA9IG5ldyBNb2RlbCh7XG4gICAgICBuYW1lLFxuICAgICAgcG9pbnRzLFxuICAgICAgY3JlYXRvcl9pZDogZnJpZW5kLFxuICAgICAgY3JlYXRlZF9kYXRlOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuICAgIH0pO1xuICAgIHJldHVybiBiYXNlQ2hvcmUuc2F2ZSgpO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ2hvcmVNb2RlbDtcbiIsImltcG9ydCBCYXNlQ2hvcmVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBtb25nbyBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBCYXNlQ2hvcmVUeXBlID0gYFxuICB0eXBlIEJhc2VDaG9yZVR5cGUge1xuICAgIGlkOiBTdHJpbmchLFxuICAgIG5hbWU6IFN0cmluZyEsXG4gICAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICAgIHBvaW50czogSW50ISxcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGJhc2VDaG9yZXM6IFtCYXNlQ2hvcmVUeXBlXSxcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZEJhc2VDaG9yZShcbiAgICAgIG5hbWU6IFN0cmluZyEsXG4gICAgICBwb2ludHM6IEludCEsXG4gICAgICBmcmllbmQ6IFN0cmluZyEsXG4gICAgKSA6IEJhc2VDaG9yZVR5cGVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhc2VDaG9yZVJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBiYXNlQ2hvcmVzOiAoKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldEFsbCgpLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGFkZEJhc2VDaG9yZTogKF8sIGFyZ3MpID0+IEJhc2VDaG9yZUNvbnRyb2xsZXIuYWRkKGFyZ3MpLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNob3JlIGV4dGVuZHMgbW9uZ28uRG9jdW1lbnQge1xuICBjcmVhdGVkX2RhdGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwb2ludHM6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzZUNob3JlU2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gICAgY3JlYXRlZF9kYXRlOiBOdW1iZXIsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHBvaW50czogTnVtYmVyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlQ2hvcmVNb2RlbDogbW9uZ28uTW9kZWw8SUJhc2VDaG9yZT4gPSBtb25nby5tb2RlbDxJQmFzZUNob3JlPignYmFzZS1jaG9yZXMnLCBiYXNlQ2hvcmVTY2hlbWEpO1xuIiwiaW1wb3J0IENob3JlTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuLi9mcmllbmQvY29udHJvbGxlcic7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSAnLi4vZnJpZW5kL3NjaGVtYSc7XG5pbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgeyBJQ2hvcmUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IENob3JlQ29udHJvbGxlciA9IHtcblxuICBnZXQ6IGFzeW5jICh7IGlkIH0pOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGNob3JlIGlkICR7aWR9IGZyb20gY29udHJvbGxlcmApO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2hvcmUgTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBDaG9yZU1vZGVsLmdldChpZCk7XG4gIH0sXG5cbiAgZ2V0QWxsOiAoKTogUHJvbWlzZTxJQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBjaG9yZXMgZnJvbSBjb250cm9sbGVyJyk7XG4gICAgcmV0dXJuIENob3JlTW9kZWwuZ2V0QWxsKCk7XG4gIH0sXG5cbiAgZ2V0RnJpZW5kQ2hvcmVzOiAoeyBmcmllbmRfaWQgfSk6IFByb21pc2U8SUNob3JlW10+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBjaG9yZXMgZm9yIGZyaWVuZCBpZCAke2ZyaWVuZF9pZH0gZnJvbSBjb250cm9sbGVyYCk7XG4gICAgaWYgKCFmcmllbmRfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0RnJpZW5kQ2hvcmVzIE1hbGZvcm1lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gQ2hvcmVNb2RlbC5nZXRGcmllbmRDaG9yZXMoZnJpZW5kX2lkKTtcbiAgfSxcblxuICBhZGQ6IGFzeW5jICh7IGJhc2VfY2hvcmVfaWQsIGZyaWVuZF9pZH0pID0+IHtcbiAgICBpZiAoIWJhc2VfY2hvcmVfaWQgJiYgIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZnJpZW5kczogSUZyaWVuZFtdID0gYXdhaXQgRnJpZW5kQ29udHJvbGxlci5nZXRBbGwoKTtcblxuICAgIGNvbnN0IGZyaWVuZFBvaW50czogbnVtYmVyW10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGZyaWVuZHMubWFwKChmcmllbmQpID0+IENob3JlTW9kZWwuY2FsY0ZyaWVuZFBvaW50cyhmcmllbmQuZnJpZW5kX2lkKSksXG4gICAgKTtcblxuICAgIGZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kLCBpbmRleCkgPT4ge1xuICAgICAgZnJpZW5kLnBvaW50cyA9IGZyaWVuZFBvaW50c1tpbmRleF07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb2VySWQgPSBmcmllbmRzLnJlZHVjZSgoYmVzdCwgZnJpZW5kKSA9PiB7XG4gICAgICByZXR1cm4gZnJpZW5kLnBvaW50cyA8PSBiZXN0LnBvaW50cyA/IGZyaWVuZCA6IGJlc3Q7XG4gICAgfSkuZnJpZW5kX2lkO1xuXG4gICAgcmV0dXJuIGF3YWl0IENob3JlTW9kZWwuYWRkKHsgYmFzZV9jaG9yZV9pZCwgZG9lcl9pZDogZG9lcklkLCBjcmVhdG9yX2lkOiBmcmllbmRfaWQgfSk7XG4gIH0sXG5cbiAgY2hhbmdlU3RhdHVzOiAoeyBpZCwgc3RhdHVzIH0pID0+IHtcbiAgICBsb2cudmVyYm9zZShgQ2hhbmluZyBjaG9yZSBzdGF0dXMgdG8gJHtzdGF0dXN9IG9uIGlkICR7aWR9YCk7XG4gICAgaWYgKCFpZCB8fCAhc3RhdHVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRpID0gWydhc3NpZ25lZCcsICdjb21wbGV0ZWQnLCAndmVyaWZpZWQnXTtcblxuICAgIGlmIChzdGF0aS5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXR1cyBpcyBJbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiBDaG9yZU1vZGVsLmNoYW5nZVN0YXR1cyhpZCwgc3RhdHVzKTtcblxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvcmVDb250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDaG9yZUNvbnRyb2xsZXIgZnJvbSAnLi4vYmFzZS1jaG9yZS9jb250cm9sbGVyJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCB7IENob3JlTW9kZWwgYXMgTW9kZWwsIElDaG9yZSB9IGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgQ2hvcmVNb2RlbCA9IHtcbiAgZ2V0OiBhc3luYyAoaWQpOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGNob3JlICR7aWR9IGluIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGNob3JlcyBmcm9tIG1vZGVsJyk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoKTtcbiAgfSxcblxuICBnZXRGcmllbmRDaG9yZXM6IGFzeW5jIChmcmllbmRJZDogc3RyaW5nKTogUHJvbWlzZTxJQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGFsbCBmcmllbmRJZCAke2ZyaWVuZElkfSBmcm9tIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoe1xuICAgICAgZG9lcl9pZDogZnJpZW5kSWQsXG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkOiBhc3luYyAoeyBiYXNlX2Nob3JlX2lkLCBkb2VyX2lkLCBjcmVhdG9yX2lkIH0pOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGNvbnN0IGNob3JlID0gbmV3IE1vZGVsKHtcbiAgICAgIGRvZXJfaWQsXG4gICAgICBjcmVhdG9yX2lkLFxuICAgICAgYmFzZV9jaG9yZV9pZCxcbiAgICAgIHN0YXR1czogJ2Fzc2lnbmVkJyxcbiAgICAgIGFzc2lnbmVkX2RhdGU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hvcmUuc2F2ZSgpO1xuICB9LFxuXG4gIGNoYW5nZVN0YXR1czogYXN5bmMgKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKTogUHJvbWlzZTxJQ2hvcmU+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgQ2hhbmdpbmcgY2hvcmUgaWQgJHtpZH0gc3RhdHVzIHRvICR7c3RhdHVzfSBpbiBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyBzdGF0dXMgfSk7XG4gIH0sXG5cbiAgY2FsY0ZyaWVuZFBvaW50czogYXN5bmMgKGZyaWVuZElkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4gPT4ge1xuICAgIGNvbnN0IGNob3JlczogSUNob3JlW10gPSBhd2FpdCBNb2RlbC5maW5kKCk7XG4gICAgY29uc3QgYmFzZUNob3JlcyA9IGF3YWl0IEJhc2VDaG9yZUNvbnRyb2xsZXIuZ2V0QWxsKCk7XG4gICAgY29uc3QgbXlDaG9yZXM6IElDaG9yZVtdID0gY2hvcmVzLmZpbHRlcigoY2hvcmUpID0+IGNob3JlLmRvZXJfaWQgPT09IGZyaWVuZElkKTtcbiAgICBjb25zdCBjaG9yZUNvdW50ID0gbXlDaG9yZXMucmVkdWNlKChyZWNvcmQsIGNob3JlKSA9PiB7XG4gICAgICBpZiAoIXJlY29yZFtjaG9yZS5iYXNlX2Nob3JlX2lkXSkgcmVjb3JkW2Nob3JlLmJhc2VfY2hvcmVfaWRdID0gMDtcbiAgICAgIHJlY29yZFtjaG9yZS5iYXNlX2Nob3JlX2lkXSsrO1xuICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCBwb2ludHM6IG51bWJlciA9IGJhc2VDaG9yZXMucmVkdWNlKChwdHMsIGJDaG9yZSkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBjaG9yZUNvdW50W2JDaG9yZS5faWRdID8gY2hvcmVDb3VudFtiQ2hvcmUuX2lkXSA6IDA7XG4gICAgICByZXR1cm4gcHRzICsgY291bnQgKiBiQ2hvcmUucG9pbnRzO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENob3JlTW9kZWw7XG4iLCJpbXBvcnQgQ2hvcmVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgQmFzZUNob3JlQ29udHJvbGxlciBmcm9tICcuLi9iYXNlLWNob3JlL2NvbnRyb2xsZXInO1xuaW1wb3J0IEZyaWVuZENvbnRyb2xsZXIgZnJvbSAnLi4vZnJpZW5kL2NvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgQ2hvcmVUeXBlID0gYFxuICB0eXBlIENob3JlVHlwZSB7XG4gICAgaWQ6IFN0cmluZyEsXG4gICAgc3RhdHVzOiBTdHJpbmcsXG4gICAgZG9lcl9pZDogU3RyaW5nLFxuICAgIGNob3JlX2lkOiBTdHJpbmcsXG4gICAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICAgIGJhc2VfY2hvcmVfaWQ6IFN0cmluZyEsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHBvaW50czogSW50LFxuICAgIGRvZXI6IEZyaWVuZFR5cGUsXG4gICAgY3JlYXRvcjogRnJpZW5kVHlwZVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgY2hvcmUoaWQ6IFN0cmluZyEpOiBDaG9yZVR5cGUsXG4gICAgY2hvcmVzOiBbQ2hvcmVUeXBlXVxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY2hhbmdlU3RhdHVzIChcbiAgICAgIGlkOiBTdHJpbmchLFxuICAgICAgc3RhdHVzOiBTdHJpbmchXG4gICAgKTogQ2hvcmVUeXBlLFxuXG4gICAgYWRkQ2hvcmUoXG4gICAgICBiYXNlX2Nob3JlX2lkOiBTdHJpbmchLFxuICAgICAgZnJpZW5kX2lkOiBTdHJpbmdcbiAgICApOiBDaG9yZVR5cGVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENob3JlUmVzb2x2ZXJzID0ge1xuICBDaG9yZVR5cGU6IHtcbiAgICBuYW1lOiAob2JqKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldChvYmosICduYW1lJyksXG4gICAgcG9pbnRzOiAob2JqKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldChvYmosICdwb2ludHMnKSxcbiAgICBkb2VyOiAob2JqKSA9PiBGcmllbmRDb250cm9sbGVyLmdldCh7ZnJpZW5kX2lkOiBvYmouZG9lcl9pZH0pLFxuICAgIGNyZWF0b3I6IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0KHtmcmllbmRfaWQ6IG9iai5jcmVhdG9yX2lkfSksXG4gIH0sXG4gIFF1ZXJ5OiB7XG4gICAgY2hvcmU6IChfLCBhcmdzKSA9PiBDaG9yZUNvbnRyb2xsZXIuZ2V0KGFyZ3MpLFxuICAgIGNob3JlczogKCkgPT4gQ2hvcmVDb250cm9sbGVyLmdldEFsbCgpLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGNoYW5nZVN0YXR1czogKF8sIGFyZ3MpID0+IENob3JlQ29udHJvbGxlci5jaGFuZ2VTdGF0dXMoYXJncyksXG4gICAgYWRkQ2hvcmU6IChfLCBhcmdzKSA9PiBDaG9yZUNvbnRyb2xsZXIuYWRkKGFyZ3MpXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaG9yZSBleHRlbmRzIG1vbmdvLkRvY3VtZW50IHtcbiAgZG9lcl9pZDogc3RyaW5nO1xuICBjcmVhdG9yX2lkOiBzdHJpbmc7XG4gIGJhc2VfY2hvcmVfaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGFzc2lnbmVkX2RhdGE6IG51bWJlcjtcbn1cblxuZXhwb3J0IGxldCBDaG9yZVNjaGVtYTogbW9uZ28uU2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gIGRvZXJfaWQ6IFN0cmluZyxcbiAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICBiYXNlX2Nob3JlX2lkOiBTdHJpbmcsXG4gIHN0YXR1czogU3RyaW5nLFxuICBhc3NpZ25lZF9kYXRlOiBOdW1iZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENob3JlTW9kZWw6IG1vbmdvLk1vZGVsPElDaG9yZT4gPSBtb25nby5tb2RlbDxJQ2hvcmU+KCdDaG9yZXMnLCBDaG9yZVNjaGVtYSk7XG4iLCJpbXBvcnQgRnJpZW5kTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgQ2hvcmVNb2RlbCBmcm9tICcuLi9jaG9yZS9tb2RlbCc7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuXG5jb25zdCBGcmllbmRDb250cm9sbGVyID0ge1xuICBnZXQ6ICh7IGZyaWVuZF9pZCB9KTogUHJvbWlzZTxJRnJpZW5kPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgZnJpZW5kICR7ZnJpZW5kX2lkfSBmcm9tIGNvbnRyb2xsZXJgKTtcbiAgICBpZiAoIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZXRGcmllbmQgTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBGcmllbmRNb2RlbC5nZXQoZnJpZW5kX2lkKTtcbiAgfSxcblxuICBnZXRBbGw6ICgpOiBQcm9taXNlPElGcmllbmRbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBmcmllbmRzIGZyb20gY29udHJvbGxlcicpO1xuICAgIHJldHVybiBGcmllbmRNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBjYWxjUG9pbnRzOiBhc3luYyAoeyBmcmllbmRfaWQgfSk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG4gICAgaWYgKCFmcmllbmRfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBvaW50cyA9IGF3YWl0IENob3JlTW9kZWwuY2FsY0ZyaWVuZFBvaW50cyhmcmllbmRfaWQpO1xuICAgIHJldHVybiBwb2ludHM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRDb250cm9sbGVyO1xuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgRnJpZW5kTW9kZWwgYXMgTW9kZWwsIElGcmllbmQgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IEZyaWVuZE1vZGVsID0ge1xuICBnZXQ6IGFzeW5jIChmcmllbmRJZCk6IFByb21pc2U8SUZyaWVuZD4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGZyaWVuZCAke2ZyaWVuZElkfSBpbiBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kT25lKHsgZnJpZW5kX2lkOiBmcmllbmRJZCB9KTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElGcmllbmRbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBmcmllbmRzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kTW9kZWw7XG4iLCJpbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IENob3JlQ29udHJvbGxlciBmcm9tICcuLi9jaG9yZS9jb250cm9sbGVyJztcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IEZyaWVuZFR5cGUgPSBgXG4gIHR5cGUgRnJpZW5kVHlwZSB7XG4gICAgbmFtZTogU3RyaW5nISxcbiAgICBjb2xvcjogU3RyaW5nISxcbiAgICBoYXNoOiBTdHJpbmchLFxuICAgIGZyaWVuZF9pZDogU3RyaW5nISxcbiAgICBwb2ludHM6IEludCxcbiAgICBjaG9yZXM6IFtDaG9yZVR5cGVdLFxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgZnJpZW5kIChmcmllbmRfaWQ6IFN0cmluZyk6IEZyaWVuZFR5cGUsXG4gICAgZnJpZW5kczogW0ZyaWVuZFR5cGVdXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGcmllbmRSZXNvbHZlcnMgPSB7XG4gIEZyaWVuZFR5cGU6IHtcbiAgICBwb2ludHM6IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuY2FsY1BvaW50cyhvYmopLFxuICAgIGNob3JlczogKG9iaikgPT4gQ2hvcmVDb250cm9sbGVyLmdldEZyaWVuZENob3JlcyhvYmopLFxuICB9LFxuXG4gIFF1ZXJ5OiB7XG4gICAgZnJpZW5kOiAoXywgYXJncykgPT4gRnJpZW5kQ29udHJvbGxlci5nZXQoYXJncyksXG4gICAgZnJpZW5kczogKCkgPT4gRnJpZW5kQ29udHJvbGxlci5nZXRBbGwoKSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZyaWVuZCBleHRlbmRzIG1vbmdvLkRvY3VtZW50IHtcbiBuYW1lOiBzdHJpbmc7XG4gY29sb3I6IHN0cmluZztcbiBoYXNoOiBzdHJpbmc7XG4gZnJpZW5kX2lkOiBzdHJpbmc7XG4gcG9pbnRzPzogbnVtYmVyO1xufVxuXG5jb25zdCBGcmllbmRTY2hlbWEgPSBuZXcgbW9uZ28uU2NoZW1hKHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBoYXNoOiBTdHJpbmcsXG4gICAgZnJpZW5kX2lkOiBTdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZyaWVuZE1vZGVsOiBtb25nby5Nb2RlbDxJRnJpZW5kPiA9IG1vbmdvLm1vZGVsPElGcmllbmQ+KCdGcmllbmRzJywgRnJpZW5kU2NoZW1hKTtcbiIsImltcG9ydCB7IElJb3UgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgaW91TW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5cbmNvbnN0IGlvdUNvbnRyb2xsZXIgPSB7XG4gIGdldDogKHsgaWQgfSk6IFByb21pc2U8SUlvdT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGlvdSBpZCAke2lkfSBmcm9tIGNvbnRyb2xsZXJgKTtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBJT1UgbWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBpb3VNb2RlbC5nZXQoaWQpO1xuICB9LFxuXG4gIGdldEFsbDogKCk6IFByb21pc2U8SUlvdVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGlvdXMgZnJvbSBjb250cm9sbGVyJyk7XG4gICAgcmV0dXJuIGlvdU1vZGVsLmdldEFsbCgpO1xuICB9LFxuXG4gIGFkZDogKHsgdG9GcmllbmRfaWQsIGZyb21GcmllbmRfaWQsIGFtb3VudCB9KTogUHJvbWlzZTxJSW91PiA9PiB7XG4gICAgaWYgKCF0b0ZyaWVuZF9pZCB8fCAhZnJvbUZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZGQgSU9VIG1hbGZvcm1lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gaW91TW9kZWwuYWRkKHRvRnJpZW5kX2lkLCBmcm9tRnJpZW5kX2lkLCBhbW91bnQpO1xuICB9LFxuXG4gIGlvV2hvOiAoZnJpZW5kSWQpID0+IHtcbiAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggSSBvd24gZWFjaCBmcmllbmRcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW91Q29udHJvbGxlcjtcbiIsImltcG9ydCB7IElvdU1vZGVsIGFzIE1vZGVsLCBJSW91IH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuXG5jb25zdCBpb3VNb2RlbCA9IHtcblxuICBnZXQ6IGFzeW5jIChpZCk6IFByb21pc2U8SUlvdT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGlvdSBpZCAke2lkfSBmcm9tIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElJb3VbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBpb3VzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxuXG4gIGFkZDogKHRvSWQsIGZyb21JZCwgYW1vdW50KTogUHJvbWlzZTxJSW91PiA9PiB7XG4gICAgY29uc3QgaW91ID0gbmV3IE1vZGVsKHtcbiAgICAgIHRvX2lkOiB0b0lkLFxuICAgICAgZnJvbV9pZDogZnJvbUlkLFxuICAgICAgYW1vdW50LFxuICAgICAgYXNzaWduZWRfZGF0ZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICB9KTtcbiAgICByZXR1cm4gaW91LnNhdmUoKTtcbiAgfSxcblxuICBpb1dobzogKGZyaWVuZElkKSA9PiB7XG4gICAgY29uc3QgYWdncmFnYXRpb24gPSBbXG4gICAgICB7ICRtYXRjaDogeyBmcm9tX2lkOiBmcmllbmRJZCB9IH0sXG4gICAgXTtcbiAgICByZXR1cm4gTW9kZWwuYWdncmVnYXRlKGFnZ3JhZ2F0aW9uKTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW91TW9kZWw7XG4iLCJpbXBvcnQgaW91Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgSW91VHlwZSA9IGBcbiAgdHlwZSBJb3VUeXBlIHtcbiAgICBpZDogU3RyaW5nISxcbiAgICB0b19pZDogU3RyaW5nISxcbiAgICBmcm9tX2lkOiBTdHJpbmchLFxuICAgIGFtb3VudDogRmxvYXQhLFxuICAgIHRpbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgaW91KGlkOiBTdHJpbmchKTogSW91VHlwZSxcbiAgICBpb3VzOiBbSW91VHlwZV1cbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZElvdShcbiAgICAgIHRvX2lkOiBTdHJpbmchLFxuICAgICAgZnJvbV9pZDogU3RyaW5nISxcbiAgICAgIGFtb3VudDogRmxvYXQhXG4gICAgKTogSW91VHlwZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW91UmVzb2x2ZXJzID0ge1xuICBJb3VUeXBlOiB7XG4gIH0sXG4gIFF1ZXJ5OiB7XG4gICAgaW91OiAoXywgYXJncykgPT4gaW91Q29udHJvbGxlci5nZXQoYXJncyksXG4gICAgaW91czogKCkgPT4gaW91Q29udHJvbGxlci5nZXRBbGwoKSxcbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICBhZGRJb3U6IChfLCBhcmdzKSA9PiBpb3VDb250cm9sbGVyLmFkZChhcmdzKSxcbiAgfSxcbn07XG5cbmNvbnN0IGlvdVNjaGVtYSA9IG5ldyBtb25nby5TY2hlbWEoe1xuICB0b19pZDogU3RyaW5nLFxuICBmcm9tX2lkOiBTdHJpbmcsXG4gIGFtb3VudDogTnVtYmVyLFxuICB0aW1lOiBTdHJpbmcsXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBJSW91IGV4dGVuZHMgbW9uZ28uRG9jdW1lbnQge1xuICB0b19pZDogc3RyaW5nO1xuICBmcm9tX2lkOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBJb3VNb2RlbDogbW9uZ28uTW9kZWw8SUlvdT4gPSBtb25nby5tb2RlbDxJSW91PignSW91cycsIGlvdVNjaGVtYSk7XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IGNvbnNvbGVPcHRpb25zID0ge1xuICBuYW1lOiAnbG9nMScsXG4gIGxldmVsOiAnZGVidWcnLFxuICBoYW5kbGVFeGNlcHRpb25zOiB0cnVlLFxuICBqc29uOiBmYWxzZSxcbiAgY29sb3JpemU6IHRydWUsXG4gIHByZXR0eVByaW50OiAoIG9iamVjdCApID0+IHtcbiAgICBjb25zb2xlLmxvZygnZWpya2xqZHMnKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgfSxcbn07XG5cbmNvbnN0IGxvZ2dlciA9IGxvZy5jcmVhdGVMb2dnZXIoe1xuICBsZXZlbDogJ2RlYnVnJyxcbiAgZm9ybWF0OiBsb2cuZm9ybWF0LnNpbXBsZSgpLFxuICB0cmFuc3BvcnRzOiBbXG4gICAgbmV3IGxvZy50cmFuc3BvcnRzLkNvbnNvbGUoY29uc29sZU9wdGlvbnMpLFxuICBdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiIsImltcG9ydCAqIGFzIG1vbmdvIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHVyaSA9ICdtb25nb2RiK3NydjovL1R5bGVyX1RyYWN5OnR5bGVyMTIzQGNsdXN0ZXIwLXB6N2VhLm1vbmdvZGIubmV0L2xvdW5nZTYyMSc7XG5tb25nby5jb25uZWN0KHVyaSk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBncmFwaHFsRXhwcmVzcywgZ3JhcGhpcWxFeHByZXNzIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgQ2hlY2tQYXNzIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgJy4vbW9uZ28nO1xuaW1wb3J0IHsgQmFzZUNob3JlVHlwZSwgQmFzZUNob3JlUmVzb2x2ZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtY2hvcmUvc2NoZW1hJztcbmltcG9ydCB7IENob3JlVHlwZSwgQ2hvcmVSZXNvbHZlcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hvcmUvc2NoZW1hJztcbmltcG9ydCB7IEZyaWVuZFR5cGUsIEZyaWVuZFJlc29sdmVycyB9IGZyb20gJy4vY29tcG9uZW50cy9mcmllbmQvc2NoZW1hJztcbmltcG9ydCB7IElvdVR5cGUsIElvdVJlc29sdmVycyB9IGZyb20gJy4vY29tcG9uZW50cy9pb3Uvc2NoZW1hJztcbmltcG9ydCB7IG1lcmdlVHlwZXMsIG1lcmdlUmVzb2x2ZXJzIH0gZnJvbSAnbWVyZ2UtZ3JhcGhxbC1zY2hlbWFzJztcblxuZGVjbGFyZSB2YXIgcHJvY2Vzczoge1xuICBlbnY6IHtcbiAgICBQT1JUOiBzdHJpbmc7XG4gIH0sXG59O1xuZGVjbGFyZSB2YXIgX19kaXJuYW1lOiBzdHJpbmc7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwdWJsaWNEaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJyk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAxMzM3O1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwdWJsaWNEaXIpKTtcblxuY29uc3QgdHlwZXMgPSBtZXJnZVR5cGVzKFtCYXNlQ2hvcmVUeXBlLCBDaG9yZVR5cGUsIEZyaWVuZFR5cGUsIElvdVR5cGVdKTtcbmNvbnN0IHJlc29sdmVycyA9IG1lcmdlUmVzb2x2ZXJzKFtCYXNlQ2hvcmVSZXNvbHZlcnMsIENob3JlUmVzb2x2ZXJzLCBGcmllbmRSZXNvbHZlcnMsIElvdVJlc29sdmVycyBdKTtcblxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuICByZXNvbHZlcnMsXG4gIHR5cGVEZWZzOiB0eXBlcyxcbn0pO1xuXG5hcHAudXNlKCcvZ3JhcGhxbCcsIGJvZHlQYXJzZXIuanNvbigpLCBjb3JzKCksIGdyYXBocWxFeHByZXNzKHsgc2NoZW1hIH0pKTtcbmFwcC51c2UoJy9ncmFwaGlxbCcsIGdyYXBoaXFsRXhwcmVzcyh7XG4gIGVuZHBvaW50VVJMOiAnL2dyYXBocWwnLFxufSkpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuYXBwLmdldCgnL2xvZ2luJywgKHJlcSwgcmVzKSA9PiB7XG4gIENoZWNrUGFzcyhyZXEsIHJlcyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZXJnZS1ncmFwaHFsLXNjaGVtYXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=