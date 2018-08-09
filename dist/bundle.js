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

const CheckPass = (req, res) => {
    const { pass, whoami } = req.query;
    _components_friend_schema__WEBPACK_IMPORTED_MODULE_0__["FriendModel"].findOne({ friend_id: whoami })
        .then((friend) => {
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


const BaseChoreController = {
    get: ({ base_chore_id: baseChoreId }, prop = null) => {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting base chore id ${baseChoreId} from controller`);
        if (!baseChoreId) {
            throw new Error('Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_1__["default"].get(baseChoreId, prop);
    },
    getAll: () => {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all base chores from controller');
        return _model__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
    },
    add: ({ name, points, friend }) => {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Creating base chore with name: ${name}, points: ${points}, creator: ${friend}`);
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


const BaseChoreModel = {
    get: (baseChoreId, prop) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting base chore id ${baseChoreId} from model`);
        return _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"].findById(baseChoreId, prop)
            .then((baseChore) => {
            if (prop)
                return baseChore[prop];
            return baseChore;
        });
    }),
    getAll: () => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all base chores from model');
        return _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"].find();
    }),
    add: (name, points, friend) => {
        const baseChore = new _schema__WEBPACK_IMPORTED_MODULE_1__["BaseChoreModel"]({
            name,
            points,
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


const BaseChoreType = `
  type BaseChoreType {
    id: String!,
    name: String!,
    creator_id: String,
    points: Int!,
  }

  type Query {
    baseChores: [BaseChoreType],
  }

  type Mutation {
    addBaseChore(
      name: String!,
      points: Int!,
      friend: String!,
    ) : BaseChoreType
  }
`;
const BaseChoreResolvers = {
    Query: {
        baseChores: () => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(),
    },
    Mutation: {
        addBaseChore: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args),
    },
};
const baseChoreSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    created_date: Number,
    name: String,
    points: Number,
});
const BaseChoreModel = mongoose__WEBPACK_IMPORTED_MODULE_1__["model"]('base-chores', baseChoreSchema);


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



const ChoreController = {
    get: ({ id }) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose(`Getting chore id ${id} from controller`);
        if (!id) {
            throw new Error('getChore Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    }),
    getAll: () => {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose('Getting all chores from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    getFriendChores: ({ friend_id }) => {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose(`Getting chores for friend id ${friend_id} from controller`);
        if (!friend_id) {
            throw new Error('getFriendChores Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getFriendChores(friend_id);
    },
    add: ({ base_chore_id, friend_id }) => __awaiter(undefined, void 0, void 0, function* () {
        if (!base_chore_id && !friend_id) {
            throw new Error('Malformed');
        }
        const friends = yield _friend_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();
        const friendPoints = yield Promise.all(friends.map((friend) => _model__WEBPACK_IMPORTED_MODULE_0__["default"].calcFriendPoints(friend.friend_id)));
        friends.forEach((friend, index) => {
            friend.points = friendPoints[index];
        });
        const doerId = friends.reduce((best, friend) => {
            return friend.points <= best.points ? friend : best;
        }).friend_id;
        return yield _model__WEBPACK_IMPORTED_MODULE_0__["default"].add({ base_chore_id, doer_id: doerId, creator_id: friend_id });
    }),
    changeStatus: ({ id, status }) => {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose(`Chaning chore status to ${status} on id ${id}`);
        if (!id || !status) {
            throw new Error('Malformed');
        }
        const stati = ['assigned', 'completed', 'verified'];
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



const ChoreModel = {
    get: (id) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`Getting chore ${id} in model`);
        return _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].findById(id);
    }),
    getAll: () => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all chores from model');
        return _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find();
    }),
    getFriendChores: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`Getting all friendId ${friendId} from model`);
        return _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find({
            doer_id: friendId,
        });
    }),
    add: ({ base_chore_id, doer_id, creator_id }) => __awaiter(undefined, void 0, void 0, function* () {
        const chore = new _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"]({
            doer_id,
            creator_id,
            base_chore_id,
            status: 'assigned',
            assigned_date: (new Date()).getTime(),
        });
        return chore.save();
    }),
    changeStatus: (id, status) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`Changing chore id ${id} status to ${status} in model`);
        return _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].findByIdAndUpdate(id, { status });
    }),
    calcFriendPoints: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        const chores = yield _schema__WEBPACK_IMPORTED_MODULE_2__["ChoreModel"].find();
        const baseChores = yield _base_chore_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
        const myChores = chores.filter((chore) => chore.doer_id === friendId);
        const choreCount = myChores.reduce((record, chore) => {
            if (!record[chore.base_chore_id])
                record[chore.base_chore_id] = 0;
            record[chore.base_chore_id]++;
            return record;
        }, {});
        const points = baseChores.reduce((pts, bChore) => {
            const count = choreCount[bChore._id] ? choreCount[bChore._id] : 0;
            return pts + count * bChore.points;
        }, 0);
        return points;
    }),
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




const ChoreType = `
  type ChoreType {
    id: String!,
    status: String,
    doer_id: String,
    chore_id: String,
    creator_id: String,
    base_chore_id: String!,
    name: String,
    points: Int,
    doer: FriendType,
    creator: FriendType
  }

  type Query {
    chore(id: String!): ChoreType,
    chores: [ChoreType]
  }

  type Mutation {
    changeStatus (
      id: String!,
      status: String!
    ): ChoreType,

    addChore(
      base_chore_id: String!,
      friend_id: String
    ): ChoreType
  }
`;
const ChoreResolvers = {
    ChoreType: {
        name: (obj) => _base_chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get(obj, 'name'),
        points: (obj) => _base_chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get(obj, 'points'),
        doer: (obj) => _friend_controller__WEBPACK_IMPORTED_MODULE_2__["default"].get({ friend_id: obj.doer_id }),
        creator: (obj) => _friend_controller__WEBPACK_IMPORTED_MODULE_2__["default"].get({ friend_id: obj.creator_id }),
    },
    Query: {
        chore: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args),
        chores: () => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(),
    },
    Mutation: {
        changeStatus: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus(args),
        addChore: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args)
    },
};
let ChoreSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
    doer_id: String,
    creator_id: String,
    base_chore_id: String,
    status: String,
    assigned_date: Number,
});
const ChoreModel = mongoose__WEBPACK_IMPORTED_MODULE_3__["model"]('Chores', ChoreSchema);


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



const FriendController = {
    get: ({ friend_id }) => {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose(`Getting friend ${friend_id} from controller`);
        if (!friend_id) {
            throw new Error('GetFriend Malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(friend_id);
    },
    getAll: () => {
        _log__WEBPACK_IMPORTED_MODULE_2__["default"].verbose('Getting all friends from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    calcPoints: ({ friend_id }) => __awaiter(undefined, void 0, void 0, function* () {
        if (!friend_id) {
            throw new Error('Malformed');
        }
        const points = yield _chore_model__WEBPACK_IMPORTED_MODULE_1__["default"].calcFriendPoints(friend_id);
        return points;
    }),
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


const FriendModel = {
    get: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting friend ${friendId} in model`);
        return _schema__WEBPACK_IMPORTED_MODULE_1__["FriendModel"].findOne({ friend_id: friendId });
    }),
    getAll: () => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all friends from model');
        return _schema__WEBPACK_IMPORTED_MODULE_1__["FriendModel"].find();
    }),
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
/* harmony import */ var _iou_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../iou/controller */ "./src/components/iou/controller.ts");




const FriendType = `
  type FriendType {
    name: String!,
    color: String!,
    hash: String!,
    friend_id: String!,
    points: Int,
    chores: [ChoreType],
    iowho: [IouType]
  }

  type Query {
    friend (friend_id: String): FriendType,
    friends: [FriendType]
  }
`;
const FriendResolvers = {
    FriendType: {
        points: (obj) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].calcPoints(obj),
        chores: (obj) => _chore_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getFriendChores(obj),
        iowho: (obj) => _iou_controller__WEBPACK_IMPORTED_MODULE_3__["default"].ioWho(obj.friend_id),
    },
    Query: {
        friend: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args),
        friends: () => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(),
    },
};
const FriendSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
    name: String,
    color: String,
    hash: String,
    friend_id: String,
});
const FriendModel = mongoose__WEBPACK_IMPORTED_MODULE_2__["model"]('Friends', FriendSchema);


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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const iouController = {
    get: ({ id }) => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`Getting iou id ${id} from controller`);
        if (!id) {
            throw new Error('get IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    },
    getAll: () => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all ious from controller');
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getAll();
    },
    add: ({ to_id, from_id, amount }) => {
        if (!to_id || !from_id) {
            throw new Error('add IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["default"].add(to_id, from_id, amount);
    },
    ioWho: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        // calculate how much I own each friend
        const iowho = yield _model__WEBPACK_IMPORTED_MODULE_0__["default"].ioWho(friendId);
        const whoome = yield _model__WEBPACK_IMPORTED_MODULE_0__["default"].whoome(friendId);
        const myIousReduced = {};
        iowho.forEach((iou) => {
            if (myIousReduced[iou.to_id]) {
                myIousReduced[iou.to_id] += iou.amount;
            }
            else {
                myIousReduced[iou.to_id] = iou.amount;
            }
        });
        whoome.forEach((iou) => {
            if (myIousReduced[iou.from_id]) {
                myIousReduced[iou.from_id] -= iou.amount;
            }
            else {
                myIousReduced[iou.from_id] = -iou.amount;
            }
        });
        const newIous = Object.keys(myIousReduced).map((toId) => {
            const iou = {
                to_id: toId,
                from_id: friendId,
                amount: myIousReduced[toId],
            };
            return iou;
        });
        return newIous;
    }),
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


const iouModel = {
    get: (id) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`Getting iou id ${id} from model`);
        return _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].findById(id);
    }),
    getAll: () => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('Getting all ious from model');
        return _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].find();
    }),
    add: (toId, fromId, amount) => {
        const iou = new _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"]({
            to_id: toId,
            from_id: fromId,
            amount,
            assigned_date: (new Date()).getTime(),
        });
        return iou.save();
    },
    ioWho: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        return _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].find({
            from_id: friendId,
        });
    }),
    whoome: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        return _schema__WEBPACK_IMPORTED_MODULE_0__["IouModel"].find({
            to_id: friendId,
        });
    }),
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
/* harmony import */ var _friend_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../friend/controller */ "./src/components/friend/controller.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



const IouType = `
  type IouType {
    id: String!,
    to_id: String!,
    to: FriendType,
    from: FriendType,
    from_id: String!,
    amount: Float!,
    time: String
  }

  type Query {
    iou(id: String!): IouType,
    ious: [IouType]
  }

  type Mutation {
    addIou(
      to_id: String!,
      from_id: String!,
      amount: Float!
    ): IouType
  }
`;
const IouResolvers = {
    IouType: {
        to: (obj) => _friend_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get({ friend_id: obj.to_id }),
        from: (obj) => _friend_controller__WEBPACK_IMPORTED_MODULE_1__["default"].get({ friend_id: obj.from_id }),
    },
    Query: {
        iou: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].get(args),
        ious: () => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(),
    },
    Mutation: {
        addIou: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].add(args),
    },
};
const iouSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
    to_id: String,
    from_id: String,
    amount: Number,
    time: String,
});
const IouModel = mongoose__WEBPACK_IMPORTED_MODULE_2__["model"]('Ious', iouSchema);


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

const consoleOptions = {
    name: 'log1',
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    prettyPrint: (object) => {
        return JSON.stringify(object);
    },
};
const logger = winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"]({
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

const uri = 'mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621';
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













const app = express__WEBPACK_IMPORTED_MODULE_0__();
const publicDir = path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, 'public');
const port = process.env.PORT || 1337;
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](publicDir));
const types = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__["mergeTypes"])([_components_base_chore_schema__WEBPACK_IMPORTED_MODULE_8__["BaseChoreType"], _components_chore_schema__WEBPACK_IMPORTED_MODULE_9__["ChoreType"], _components_friend_schema__WEBPACK_IMPORTED_MODULE_10__["FriendType"], _components_iou_schema__WEBPACK_IMPORTED_MODULE_11__["IouType"]]);
const resolvers = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__["mergeResolvers"])([_components_base_chore_schema__WEBPACK_IMPORTED_MODULE_8__["BaseChoreResolvers"], _components_chore_schema__WEBPACK_IMPORTED_MODULE_9__["ChoreResolvers"], _components_friend_schema__WEBPACK_IMPORTED_MODULE_10__["FriendResolvers"], _components_iou_schema__WEBPACK_IMPORTED_MODULE_11__["IouResolvers"]]);
const schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_5__["makeExecutableSchema"])({
    resolvers,
    typeDefs: types,
});
app.use('/graphql', body_parser__WEBPACK_IMPORTED_MODULE_2__["json"](), cors__WEBPACK_IMPORTED_MODULE_1___default()(), Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["graphqlExpress"])({ schema }));
app.use('/graphiql', Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_4__["graphiqlExpress"])({
    endpointURL: '/graphql',
}));
app.listen(port);
app.get('/login', (req, res) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY2hvcmUvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hvcmUvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyaWVuZC9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lvdS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1lcmdlLWdyYXBocWwtc2NoZW1hc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRnlEO0FBRXpELE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBUSxFQUFFO0lBQ25DLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNuQyxxRUFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUN2QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVB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SUFDN0IscURBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxQ0gsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgRnJpZW5kTW9kZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvZnJpZW5kL3NjaGVtYSc7XG5cbmNvbnN0IENoZWNrUGFzcyA9IChyZXEsIHJlcyk6IHZvaWQgPT4ge1xuICBjb25zdCB7IHBhc3MsIHdob2FtaSB9ID0gcmVxLnF1ZXJ5O1xuICBGcmllbmRNb2RlbC5maW5kT25lKHsgZnJpZW5kX2lkOiB3aG9hbWkgfSlcbiAgICAudGhlbigoZnJpZW5kKSA9PiB7XG4gICAgICBpZiAoZnJpZW5kLmhhc2ggPT09IHBhc3MpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDIpLnNlbmQoJ1N1Y2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1dyb25nIHBhc3N3b3JkJyk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja1Bhc3M7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgQmFzZUNob3JlTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBJQmFzZUNob3JlIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5jb25zdCBCYXNlQ2hvcmVDb250cm9sbGVyID0ge1xuXG4gIGdldDogKHsgYmFzZV9jaG9yZV9pZDogYmFzZUNob3JlSWQgfSwgcHJvcCA9IG51bGwpOiBQcm9taXNlPElCYXNlQ2hvcmU+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBiYXNlIGNob3JlIGlkICR7YmFzZUNob3JlSWR9IGZyb20gY29udHJvbGxlcmApO1xuICAgIGlmICghYmFzZUNob3JlSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5nZXQoYmFzZUNob3JlSWQsIHByb3ApO1xuICB9LFxuXG4gIGdldEFsbDogKCk6IFByb21pc2U8SUJhc2VDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGJhc2UgY2hvcmVzIGZyb20gY29udHJvbGxlcicpO1xuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBhZGQ6ICh7IG5hbWUsIHBvaW50cywgZnJpZW5kfSk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBDcmVhdGluZyBiYXNlIGNob3JlIHdpdGggbmFtZTogJHtuYW1lfSwgcG9pbnRzOiAke3BvaW50c30sIGNyZWF0b3I6ICR7ZnJpZW5kfWApO1xuICAgIGlmICghbmFtZSB8fCAhcG9pbnRzIHx8ICFmcmllbmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ2hvcmVNb2RlbC5hZGQobmFtZSwgcG9pbnRzLCBmcmllbmQpO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ2hvcmVDb250cm9sbGVyO1xuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgQmFzZUNob3JlTW9kZWwgYXMgTW9kZWwsIElCYXNlQ2hvcmUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IEJhc2VDaG9yZU1vZGVsID0ge1xuXG4gIGdldDogYXN5bmMgKGJhc2VDaG9yZUlkOiBzdHJpbmcsIHByb3A6IHN0cmluZyk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGJhc2UgY2hvcmUgaWQgJHtiYXNlQ2hvcmVJZH0gZnJvbSBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kQnlJZChiYXNlQ2hvcmVJZCwgcHJvcClcbiAgICAgIC50aGVuKChiYXNlQ2hvcmUpID0+IHtcbiAgICAgICAgaWYgKHByb3ApIHJldHVybiBiYXNlQ2hvcmVbcHJvcF07XG4gICAgICAgIHJldHVybiBiYXNlQ2hvcmU7XG4gICAgICB9KTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElCYXNlQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBiYXNlIGNob3JlcyBmcm9tIG1vZGVsJyk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoKTtcbiAgfSxcblxuICBhZGQ6IChuYW1lOiBzdHJpbmcsIHBvaW50czogbnVtYmVyLCBmcmllbmQ6IHN0cmluZyk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGNvbnN0IGJhc2VDaG9yZSA9IG5ldyBNb2RlbCh7XG4gICAgICBuYW1lLFxuICAgICAgcG9pbnRzLFxuICAgICAgY3JlYXRvcl9pZDogZnJpZW5kLFxuICAgICAgY3JlYXRlZF9kYXRlOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuICAgIH0pO1xuICAgIHJldHVybiBiYXNlQ2hvcmUuc2F2ZSgpO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ2hvcmVNb2RlbDtcbiIsImltcG9ydCBCYXNlQ2hvcmVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBtb25nbyBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBCYXNlQ2hvcmVUeXBlID0gYFxuICB0eXBlIEJhc2VDaG9yZVR5cGUge1xuICAgIGlkOiBTdHJpbmchLFxuICAgIG5hbWU6IFN0cmluZyEsXG4gICAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICAgIHBvaW50czogSW50ISxcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGJhc2VDaG9yZXM6IFtCYXNlQ2hvcmVUeXBlXSxcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZEJhc2VDaG9yZShcbiAgICAgIG5hbWU6IFN0cmluZyEsXG4gICAgICBwb2ludHM6IEludCEsXG4gICAgICBmcmllbmQ6IFN0cmluZyEsXG4gICAgKSA6IEJhc2VDaG9yZVR5cGVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJhc2VDaG9yZVJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBiYXNlQ2hvcmVzOiAoKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldEFsbCgpLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGFkZEJhc2VDaG9yZTogKF8sIGFyZ3MpID0+IEJhc2VDaG9yZUNvbnRyb2xsZXIuYWRkKGFyZ3MpLFxuICB9LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZUNob3JlIGV4dGVuZHMgbW9uZ28uRG9jdW1lbnQge1xuICBjcmVhdGVkX2RhdGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwb2ludHM6IG51bWJlcjtcbn1cblxuY29uc3QgYmFzZUNob3JlU2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gICAgY3JlYXRlZF9kYXRlOiBOdW1iZXIsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHBvaW50czogTnVtYmVyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlQ2hvcmVNb2RlbDogbW9uZ28uTW9kZWw8SUJhc2VDaG9yZT4gPSBtb25nby5tb2RlbDxJQmFzZUNob3JlPignYmFzZS1jaG9yZXMnLCBiYXNlQ2hvcmVTY2hlbWEpO1xuIiwiaW1wb3J0IENob3JlTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuLi9mcmllbmQvY29udHJvbGxlcic7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSAnLi4vZnJpZW5kL3NjaGVtYSc7XG5pbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgeyBJQ2hvcmUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IENob3JlQ29udHJvbGxlciA9IHtcblxuICBnZXQ6IGFzeW5jICh7IGlkIH0pOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGNob3JlIGlkICR7aWR9IGZyb20gY29udHJvbGxlcmApO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2hvcmUgTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBDaG9yZU1vZGVsLmdldChpZCk7XG4gIH0sXG5cbiAgZ2V0QWxsOiAoKTogUHJvbWlzZTxJQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBjaG9yZXMgZnJvbSBjb250cm9sbGVyJyk7XG4gICAgcmV0dXJuIENob3JlTW9kZWwuZ2V0QWxsKCk7XG4gIH0sXG5cbiAgZ2V0RnJpZW5kQ2hvcmVzOiAoeyBmcmllbmRfaWQgfSk6IFByb21pc2U8SUNob3JlW10+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBjaG9yZXMgZm9yIGZyaWVuZCBpZCAke2ZyaWVuZF9pZH0gZnJvbSBjb250cm9sbGVyYCk7XG4gICAgaWYgKCFmcmllbmRfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0RnJpZW5kQ2hvcmVzIE1hbGZvcm1lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gQ2hvcmVNb2RlbC5nZXRGcmllbmRDaG9yZXMoZnJpZW5kX2lkKTtcbiAgfSxcblxuICBhZGQ6IGFzeW5jICh7IGJhc2VfY2hvcmVfaWQsIGZyaWVuZF9pZH0pID0+IHtcbiAgICBpZiAoIWJhc2VfY2hvcmVfaWQgJiYgIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZnJpZW5kczogSUZyaWVuZFtdID0gYXdhaXQgRnJpZW5kQ29udHJvbGxlci5nZXRBbGwoKTtcblxuICAgIGNvbnN0IGZyaWVuZFBvaW50czogbnVtYmVyW10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGZyaWVuZHMubWFwKChmcmllbmQpID0+IENob3JlTW9kZWwuY2FsY0ZyaWVuZFBvaW50cyhmcmllbmQuZnJpZW5kX2lkKSksXG4gICAgKTtcblxuICAgIGZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kLCBpbmRleCkgPT4ge1xuICAgICAgZnJpZW5kLnBvaW50cyA9IGZyaWVuZFBvaW50c1tpbmRleF07XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb2VySWQgPSBmcmllbmRzLnJlZHVjZSgoYmVzdCwgZnJpZW5kKSA9PiB7XG4gICAgICByZXR1cm4gZnJpZW5kLnBvaW50cyA8PSBiZXN0LnBvaW50cyA/IGZyaWVuZCA6IGJlc3Q7XG4gICAgfSkuZnJpZW5kX2lkO1xuXG4gICAgcmV0dXJuIGF3YWl0IENob3JlTW9kZWwuYWRkKHsgYmFzZV9jaG9yZV9pZCwgZG9lcl9pZDogZG9lcklkLCBjcmVhdG9yX2lkOiBmcmllbmRfaWQgfSk7XG4gIH0sXG5cbiAgY2hhbmdlU3RhdHVzOiAoeyBpZCwgc3RhdHVzIH0pID0+IHtcbiAgICBsb2cudmVyYm9zZShgQ2hhbmluZyBjaG9yZSBzdGF0dXMgdG8gJHtzdGF0dXN9IG9uIGlkICR7aWR9YCk7XG4gICAgaWYgKCFpZCB8fCAhc3RhdHVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRpID0gWydhc3NpZ25lZCcsICdjb21wbGV0ZWQnLCAndmVyaWZpZWQnXTtcblxuICAgIGlmIChzdGF0aS5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXR1cyBpcyBJbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiBDaG9yZU1vZGVsLmNoYW5nZVN0YXR1cyhpZCwgc3RhdHVzKTtcblxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvcmVDb250cm9sbGVyO1xuIiwiaW1wb3J0IEJhc2VDaG9yZUNvbnRyb2xsZXIgZnJvbSAnLi4vYmFzZS1jaG9yZS9jb250cm9sbGVyJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCB7IENob3JlTW9kZWwgYXMgTW9kZWwsIElDaG9yZSB9IGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgQ2hvcmVNb2RlbCA9IHtcbiAgZ2V0OiBhc3luYyAoaWQpOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGNob3JlICR7aWR9IGluIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGNob3JlcyBmcm9tIG1vZGVsJyk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoKTtcbiAgfSxcblxuICBnZXRGcmllbmRDaG9yZXM6IGFzeW5jIChmcmllbmRJZDogc3RyaW5nKTogUHJvbWlzZTxJQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGFsbCBmcmllbmRJZCAke2ZyaWVuZElkfSBmcm9tIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoe1xuICAgICAgZG9lcl9pZDogZnJpZW5kSWQsXG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkOiBhc3luYyAoeyBiYXNlX2Nob3JlX2lkLCBkb2VyX2lkLCBjcmVhdG9yX2lkIH0pOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGNvbnN0IGNob3JlID0gbmV3IE1vZGVsKHtcbiAgICAgIGRvZXJfaWQsXG4gICAgICBjcmVhdG9yX2lkLFxuICAgICAgYmFzZV9jaG9yZV9pZCxcbiAgICAgIHN0YXR1czogJ2Fzc2lnbmVkJyxcbiAgICAgIGFzc2lnbmVkX2RhdGU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hvcmUuc2F2ZSgpO1xuICB9LFxuXG4gIGNoYW5nZVN0YXR1czogYXN5bmMgKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKTogUHJvbWlzZTxJQ2hvcmU+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgQ2hhbmdpbmcgY2hvcmUgaWQgJHtpZH0gc3RhdHVzIHRvICR7c3RhdHVzfSBpbiBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyBzdGF0dXMgfSk7XG4gIH0sXG5cbiAgY2FsY0ZyaWVuZFBvaW50czogYXN5bmMgKGZyaWVuZElkOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4gPT4ge1xuICAgIGNvbnN0IGNob3JlczogSUNob3JlW10gPSBhd2FpdCBNb2RlbC5maW5kKCk7XG4gICAgY29uc3QgYmFzZUNob3JlcyA9IGF3YWl0IEJhc2VDaG9yZUNvbnRyb2xsZXIuZ2V0QWxsKCk7XG4gICAgY29uc3QgbXlDaG9yZXM6IElDaG9yZVtdID0gY2hvcmVzLmZpbHRlcigoY2hvcmUpID0+IGNob3JlLmRvZXJfaWQgPT09IGZyaWVuZElkKTtcbiAgICBjb25zdCBjaG9yZUNvdW50ID0gbXlDaG9yZXMucmVkdWNlKChyZWNvcmQsIGNob3JlKSA9PiB7XG4gICAgICBpZiAoIXJlY29yZFtjaG9yZS5iYXNlX2Nob3JlX2lkXSkgcmVjb3JkW2Nob3JlLmJhc2VfY2hvcmVfaWRdID0gMDtcbiAgICAgIHJlY29yZFtjaG9yZS5iYXNlX2Nob3JlX2lkXSsrO1xuICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCBwb2ludHM6IG51bWJlciA9IGJhc2VDaG9yZXMucmVkdWNlKChwdHMsIGJDaG9yZSkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBjaG9yZUNvdW50W2JDaG9yZS5faWRdID8gY2hvcmVDb3VudFtiQ2hvcmUuX2lkXSA6IDA7XG4gICAgICByZXR1cm4gcHRzICsgY291bnQgKiBiQ2hvcmUucG9pbnRzO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENob3JlTW9kZWw7XG4iLCJpbXBvcnQgQ2hvcmVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgQmFzZUNob3JlQ29udHJvbGxlciBmcm9tICcuLi9iYXNlLWNob3JlL2NvbnRyb2xsZXInO1xuaW1wb3J0IEZyaWVuZENvbnRyb2xsZXIgZnJvbSAnLi4vZnJpZW5kL2NvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgQ2hvcmVUeXBlID0gYFxuICB0eXBlIENob3JlVHlwZSB7XG4gICAgaWQ6IFN0cmluZyEsXG4gICAgc3RhdHVzOiBTdHJpbmcsXG4gICAgZG9lcl9pZDogU3RyaW5nLFxuICAgIGNob3JlX2lkOiBTdHJpbmcsXG4gICAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICAgIGJhc2VfY2hvcmVfaWQ6IFN0cmluZyEsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIHBvaW50czogSW50LFxuICAgIGRvZXI6IEZyaWVuZFR5cGUsXG4gICAgY3JlYXRvcjogRnJpZW5kVHlwZVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgY2hvcmUoaWQ6IFN0cmluZyEpOiBDaG9yZVR5cGUsXG4gICAgY2hvcmVzOiBbQ2hvcmVUeXBlXVxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY2hhbmdlU3RhdHVzIChcbiAgICAgIGlkOiBTdHJpbmchLFxuICAgICAgc3RhdHVzOiBTdHJpbmchXG4gICAgKTogQ2hvcmVUeXBlLFxuXG4gICAgYWRkQ2hvcmUoXG4gICAgICBiYXNlX2Nob3JlX2lkOiBTdHJpbmchLFxuICAgICAgZnJpZW5kX2lkOiBTdHJpbmdcbiAgICApOiBDaG9yZVR5cGVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENob3JlUmVzb2x2ZXJzID0ge1xuICBDaG9yZVR5cGU6IHtcbiAgICBuYW1lOiAob2JqKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldChvYmosICduYW1lJyksXG4gICAgcG9pbnRzOiAob2JqKSA9PiBCYXNlQ2hvcmVDb250cm9sbGVyLmdldChvYmosICdwb2ludHMnKSxcbiAgICBkb2VyOiAob2JqKSA9PiBGcmllbmRDb250cm9sbGVyLmdldCh7ZnJpZW5kX2lkOiBvYmouZG9lcl9pZH0pLFxuICAgIGNyZWF0b3I6IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0KHtmcmllbmRfaWQ6IG9iai5jcmVhdG9yX2lkfSksXG4gIH0sXG4gIFF1ZXJ5OiB7XG4gICAgY2hvcmU6IChfLCBhcmdzKSA9PiBDaG9yZUNvbnRyb2xsZXIuZ2V0KGFyZ3MpLFxuICAgIGNob3JlczogKCkgPT4gQ2hvcmVDb250cm9sbGVyLmdldEFsbCgpLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGNoYW5nZVN0YXR1czogKF8sIGFyZ3MpID0+IENob3JlQ29udHJvbGxlci5jaGFuZ2VTdGF0dXMoYXJncyksXG4gICAgYWRkQ2hvcmU6IChfLCBhcmdzKSA9PiBDaG9yZUNvbnRyb2xsZXIuYWRkKGFyZ3MpXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDaG9yZSBleHRlbmRzIG1vbmdvLkRvY3VtZW50IHtcbiAgZG9lcl9pZDogc3RyaW5nO1xuICBjcmVhdG9yX2lkOiBzdHJpbmc7XG4gIGJhc2VfY2hvcmVfaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGFzc2lnbmVkX2RhdGE6IG51bWJlcjtcbn1cblxuZXhwb3J0IGxldCBDaG9yZVNjaGVtYTogbW9uZ28uU2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gIGRvZXJfaWQ6IFN0cmluZyxcbiAgY3JlYXRvcl9pZDogU3RyaW5nLFxuICBiYXNlX2Nob3JlX2lkOiBTdHJpbmcsXG4gIHN0YXR1czogU3RyaW5nLFxuICBhc3NpZ25lZF9kYXRlOiBOdW1iZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IENob3JlTW9kZWw6IG1vbmdvLk1vZGVsPElDaG9yZT4gPSBtb25nby5tb2RlbDxJQ2hvcmU+KCdDaG9yZXMnLCBDaG9yZVNjaGVtYSk7XG4iLCJpbXBvcnQgRnJpZW5kTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgQ2hvcmVNb2RlbCBmcm9tICcuLi9jaG9yZS9tb2RlbCc7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuXG5jb25zdCBGcmllbmRDb250cm9sbGVyID0ge1xuICBnZXQ6ICh7IGZyaWVuZF9pZCB9KTogUHJvbWlzZTxJRnJpZW5kPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgZnJpZW5kICR7ZnJpZW5kX2lkfSBmcm9tIGNvbnRyb2xsZXJgKTtcbiAgICBpZiAoIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZXRGcmllbmQgTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBGcmllbmRNb2RlbC5nZXQoZnJpZW5kX2lkKTtcbiAgfSxcblxuICBnZXRBbGw6ICgpOiBQcm9taXNlPElGcmllbmRbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBmcmllbmRzIGZyb20gY29udHJvbGxlcicpO1xuICAgIHJldHVybiBGcmllbmRNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBjYWxjUG9pbnRzOiBhc3luYyAoeyBmcmllbmRfaWQgfSk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG4gICAgaWYgKCFmcmllbmRfaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBvaW50cyA9IGF3YWl0IENob3JlTW9kZWwuY2FsY0ZyaWVuZFBvaW50cyhmcmllbmRfaWQpO1xuICAgIHJldHVybiBwb2ludHM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRDb250cm9sbGVyO1xuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgRnJpZW5kTW9kZWwgYXMgTW9kZWwsIElGcmllbmQgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IEZyaWVuZE1vZGVsID0ge1xuICBnZXQ6IGFzeW5jIChmcmllbmRJZCk6IFByb21pc2U8SUZyaWVuZD4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGZyaWVuZCAke2ZyaWVuZElkfSBpbiBtb2RlbGApO1xuICAgIHJldHVybiBNb2RlbC5maW5kT25lKHsgZnJpZW5kX2lkOiBmcmllbmRJZCB9KTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElGcmllbmRbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBmcmllbmRzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kTW9kZWw7XG4iLCJpbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IENob3JlQ29udHJvbGxlciBmcm9tICcuLi9jaG9yZS9jb250cm9sbGVyJztcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBpb3VDb250cm9sbGVyIGZyb20gJy4uL2lvdS9jb250cm9sbGVyJztcblxuZXhwb3J0IGNvbnN0IEZyaWVuZFR5cGUgPSBgXG4gIHR5cGUgRnJpZW5kVHlwZSB7XG4gICAgbmFtZTogU3RyaW5nISxcbiAgICBjb2xvcjogU3RyaW5nISxcbiAgICBoYXNoOiBTdHJpbmchLFxuICAgIGZyaWVuZF9pZDogU3RyaW5nISxcbiAgICBwb2ludHM6IEludCxcbiAgICBjaG9yZXM6IFtDaG9yZVR5cGVdLFxuICAgIGlvd2hvOiBbSW91VHlwZV1cbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGZyaWVuZCAoZnJpZW5kX2lkOiBTdHJpbmcpOiBGcmllbmRUeXBlLFxuICAgIGZyaWVuZHM6IFtGcmllbmRUeXBlXVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRnJpZW5kUmVzb2x2ZXJzID0ge1xuICBGcmllbmRUeXBlOiB7XG4gICAgcG9pbnRzOiAob2JqKSA9PiBGcmllbmRDb250cm9sbGVyLmNhbGNQb2ludHMob2JqKSxcbiAgICBjaG9yZXM6IChvYmopID0+IENob3JlQ29udHJvbGxlci5nZXRGcmllbmRDaG9yZXMob2JqKSxcbiAgICBpb3dobzogKG9iaikgPT4gaW91Q29udHJvbGxlci5pb1dobyhvYmouZnJpZW5kX2lkKSxcbiAgfSxcblxuICBRdWVyeToge1xuICAgIGZyaWVuZDogKF8sIGFyZ3MpID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0KGFyZ3MpLFxuICAgIGZyaWVuZHM6ICgpID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0QWxsKCksXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGcmllbmQgZXh0ZW5kcyBtb25nby5Eb2N1bWVudCB7XG4gbmFtZTogc3RyaW5nO1xuIGNvbG9yOiBzdHJpbmc7XG4gaGFzaDogc3RyaW5nO1xuIGZyaWVuZF9pZDogc3RyaW5nO1xuIHBvaW50cz86IG51bWJlcjtcbn1cblxuY29uc3QgRnJpZW5kU2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgaGFzaDogU3RyaW5nLFxuICAgIGZyaWVuZF9pZDogU3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBGcmllbmRNb2RlbDogbW9uZ28uTW9kZWw8SUZyaWVuZD4gPSBtb25nby5tb2RlbDxJRnJpZW5kPignRnJpZW5kcycsIEZyaWVuZFNjaGVtYSk7XG4iLCJpbXBvcnQgeyBJSW91IH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGlvdU1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgRU5HSU5FX01FVEhPRF9BTEwgfSBmcm9tICdjb25zdGFudHMnO1xuXG5jb25zdCBpb3VDb250cm9sbGVyID0ge1xuICBnZXQ6ICh7IGlkIH0pOiBQcm9taXNlPElJb3U+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBpb3UgaWQgJHtpZH0gZnJvbSBjb250cm9sbGVyYCk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgSU9VIG1hbGZvcm1lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gaW91TW9kZWwuZ2V0KGlkKTtcbiAgfSxcblxuICBnZXRBbGw6ICgpOiBQcm9taXNlPElJb3VbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBpb3VzIGZyb20gY29udHJvbGxlcicpO1xuICAgIHJldHVybiBpb3VNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBhZGQ6ICh7IHRvX2lkLCBmcm9tX2lkLCBhbW91bnQgfSk6IFByb21pc2U8SUlvdT4gPT4ge1xuICAgIGlmICghdG9faWQgfHwgIWZyb21faWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWRkIElPVSBtYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlvdU1vZGVsLmFkZCh0b19pZCwgZnJvbV9pZCwgYW1vdW50KTtcbiAgfSxcblxuICBpb1dobzogYXN5bmMgKGZyaWVuZElkOiBzdHJpbmcpOiBQcm9taXNlPElJb3VbXT4gPT4ge1xuICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCBJIG93biBlYWNoIGZyaWVuZFxuICAgIGNvbnN0IGlvd2hvID0gYXdhaXQgaW91TW9kZWwuaW9XaG8oZnJpZW5kSWQpO1xuICAgIGNvbnN0IHdob29tZSA9IGF3YWl0IGlvdU1vZGVsLndob29tZShmcmllbmRJZCk7XG4gICAgY29uc3QgbXlJb3VzUmVkdWNlZCA9IHt9O1xuICAgIGlvd2hvLmZvckVhY2goKGlvdSkgPT4geyAvLyBldmVyeW9uZSB3aG8geW91IG93ZVxuICAgICAgaWYgKG15SW91c1JlZHVjZWRbaW91LnRvX2lkXSkge1xuICAgICAgICBteUlvdXNSZWR1Y2VkW2lvdS50b19pZF0gKz0gaW91LmFtb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG15SW91c1JlZHVjZWRbaW91LnRvX2lkXSA9IGlvdS5hbW91bnQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2hvb21lLmZvckVhY2goKGlvdSkgPT4geyAvLyBldmVyeW9uZSB5b3Ugb3dlXG4gICAgICBpZiAobXlJb3VzUmVkdWNlZFtpb3UuZnJvbV9pZF0pIHtcbiAgICAgICAgbXlJb3VzUmVkdWNlZFtpb3UuZnJvbV9pZF0gLT0gaW91LmFtb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG15SW91c1JlZHVjZWRbaW91LmZyb21faWRdID0gLWlvdS5hbW91bnQ7XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbmV3SW91cyA9IE9iamVjdC5rZXlzKG15SW91c1JlZHVjZWQpLm1hcCgodG9JZCkgPT4ge1xuICAgICAgY29uc3QgaW91ID0ge1xuICAgICAgICB0b19pZDogdG9JZCxcbiAgICAgICAgZnJvbV9pZDogZnJpZW5kSWQsXG4gICAgICAgIGFtb3VudDogbXlJb3VzUmVkdWNlZFt0b0lkXSxcbiAgICAgIH0gYXMgSUlvdTtcbiAgICAgIHJldHVybiBpb3U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3SW91cztcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW91Q29udHJvbGxlcjtcbiIsImltcG9ydCB7IElvdU1vZGVsIGFzIE1vZGVsLCBJSW91IH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuXG5jb25zdCBpb3VNb2RlbCA9IHtcblxuICBnZXQ6IGFzeW5jIChpZCk6IFByb21pc2U8SUlvdT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGlvdSBpZCAke2lkfSBmcm9tIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfSxcblxuICBnZXRBbGw6IGFzeW5jICgpOiBQcm9taXNlPElJb3VbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKCdHZXR0aW5nIGFsbCBpb3VzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxuXG4gIGFkZDogKHRvSWQsIGZyb21JZCwgYW1vdW50KTogUHJvbWlzZTxJSW91PiA9PiB7XG4gICAgY29uc3QgaW91ID0gbmV3IE1vZGVsKHtcbiAgICAgIHRvX2lkOiB0b0lkLFxuICAgICAgZnJvbV9pZDogZnJvbUlkLFxuICAgICAgYW1vdW50LFxuICAgICAgYXNzaWduZWRfZGF0ZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICB9KTtcbiAgICByZXR1cm4gaW91LnNhdmUoKTtcbiAgfSxcblxuICBpb1dobzogYXN5bmMgKGZyaWVuZElkKTogUHJvbWlzZTxJSW91W10+ID0+IHtcbiAgICByZXR1cm4gTW9kZWwuZmluZCh7XG4gICAgICBmcm9tX2lkOiBmcmllbmRJZCxcbiAgICB9KTtcbiAgfSxcblxuICB3aG9vbWU6IGFzeW5jIChmcmllbmRJZCk6IFByb21pc2U8SUlvdVtdPiA9PiB7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmQoe1xuICAgICAgdG9faWQ6IGZyaWVuZElkLFxuICAgIH0pO1xuICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpb3VNb2RlbDtcbiIsImltcG9ydCBpb3VDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuLi9mcmllbmQvY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBtb25nbyBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBJb3VUeXBlID0gYFxuICB0eXBlIElvdVR5cGUge1xuICAgIGlkOiBTdHJpbmchLFxuICAgIHRvX2lkOiBTdHJpbmchLFxuICAgIHRvOiBGcmllbmRUeXBlLFxuICAgIGZyb206IEZyaWVuZFR5cGUsXG4gICAgZnJvbV9pZDogU3RyaW5nISxcbiAgICBhbW91bnQ6IEZsb2F0ISxcbiAgICB0aW1lOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGlvdShpZDogU3RyaW5nISk6IElvdVR5cGUsXG4gICAgaW91czogW0lvdVR5cGVdXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBhZGRJb3UoXG4gICAgICB0b19pZDogU3RyaW5nISxcbiAgICAgIGZyb21faWQ6IFN0cmluZyEsXG4gICAgICBhbW91bnQ6IEZsb2F0IVxuICAgICk6IElvdVR5cGVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElvdVJlc29sdmVycyA9IHtcbiAgSW91VHlwZToge1xuICAgIHRvOiAob2JqKSA9PiBGcmllbmRDb250cm9sbGVyLmdldCh7IGZyaWVuZF9pZDogb2JqLnRvX2lkIH0pLFxuICAgIGZyb206IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0KHsgZnJpZW5kX2lkOiBvYmouZnJvbV9pZCB9KSxcbiAgfSxcbiAgUXVlcnk6IHtcbiAgICBpb3U6IChfLCBhcmdzKSA9PiBpb3VDb250cm9sbGVyLmdldChhcmdzKSxcbiAgICBpb3VzOiAoKSA9PiBpb3VDb250cm9sbGVyLmdldEFsbCgpLFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGFkZElvdTogKF8sIGFyZ3MpID0+IGlvdUNvbnRyb2xsZXIuYWRkKGFyZ3MpLFxuICB9LFxufTtcblxuY29uc3QgaW91U2NoZW1hID0gbmV3IG1vbmdvLlNjaGVtYSh7XG4gIHRvX2lkOiBTdHJpbmcsXG4gIGZyb21faWQ6IFN0cmluZyxcbiAgYW1vdW50OiBOdW1iZXIsXG4gIHRpbWU6IFN0cmluZyxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJb3UgZXh0ZW5kcyBtb25nby5Eb2N1bWVudCB7XG4gIHRvX2lkOiBzdHJpbmc7XG4gIGZyb21faWQ6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHRpbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IElvdU1vZGVsOiBtb25nby5Nb2RlbDxJSW91PiA9IG1vbmdvLm1vZGVsPElJb3U+KCdJb3VzJywgaW91U2NoZW1hKTtcbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tICd3aW5zdG9uJztcblxuY29uc3QgY29uc29sZU9wdGlvbnMgPSB7XG4gIG5hbWU6ICdsb2cxJyxcbiAgbGV2ZWw6ICdkZWJ1ZycsXG4gIGhhbmRsZUV4Y2VwdGlvbnM6IHRydWUsXG4gIGpzb246IGZhbHNlLFxuICBjb2xvcml6ZTogdHJ1ZSxcbiAgcHJldHR5UHJpbnQ6ICggb2JqZWN0ICkgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICB9LFxufTtcblxuY29uc3QgbG9nZ2VyID0gbG9nLmNyZWF0ZUxvZ2dlcih7XG4gIGxldmVsOiAnZGVidWcnLFxuICBmb3JtYXQ6IGxvZy5mb3JtYXQuc2ltcGxlKCksXG4gIHRyYW5zcG9ydHM6IFtcbiAgICBuZXcgbG9nLnRyYW5zcG9ydHMuQ29uc29sZShjb25zb2xlT3B0aW9ucyksXG4gIF0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIiwiaW1wb3J0ICogYXMgbW9uZ28gZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgdXJpID0gJ21vbmdvZGIrc3J2Oi8vVHlsZXJfVHJhY3k6dHlsZXIxMjNAY2x1c3RlcjAtcHo3ZWEubW9uZ29kYi5uZXQvbG91bmdlNjIxJztcbm1vbmdvLmNvbm5lY3QodXJpKTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGdyYXBocWxFeHByZXNzLCBncmFwaGlxbEV4cHJlc3MgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcbmltcG9ydCBDaGVja1Bhc3MgZnJvbSAnLi9hdXRoJztcbmltcG9ydCAnLi9tb25nbyc7XG5pbXBvcnQgeyBCYXNlQ2hvcmVUeXBlLCBCYXNlQ2hvcmVSZXNvbHZlcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9zY2hlbWEnO1xuaW1wb3J0IHsgQ2hvcmVUeXBlLCBDaG9yZVJlc29sdmVycyB9IGZyb20gJy4vY29tcG9uZW50cy9jaG9yZS9zY2hlbWEnO1xuaW1wb3J0IHsgRnJpZW5kVHlwZSwgRnJpZW5kUmVzb2x2ZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZyaWVuZC9zY2hlbWEnO1xuaW1wb3J0IHsgSW91VHlwZSwgSW91UmVzb2x2ZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2lvdS9zY2hlbWEnO1xuaW1wb3J0IHsgbWVyZ2VUeXBlcywgbWVyZ2VSZXNvbHZlcnMgfSBmcm9tICdtZXJnZS1ncmFwaHFsLXNjaGVtYXMnO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gIGVudjoge1xuICAgIFBPUlQ6IHN0cmluZztcbiAgfSxcbn07XG5kZWNsYXJlIHZhciBfX2Rpcm5hbWU6IHN0cmluZztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHB1YmxpY0RpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDEzMzc7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHB1YmxpY0RpcikpO1xuXG5jb25zdCB0eXBlcyA9IG1lcmdlVHlwZXMoW0Jhc2VDaG9yZVR5cGUsIENob3JlVHlwZSwgRnJpZW5kVHlwZSwgSW91VHlwZV0pO1xuY29uc3QgcmVzb2x2ZXJzID0gbWVyZ2VSZXNvbHZlcnMoW0Jhc2VDaG9yZVJlc29sdmVycywgQ2hvcmVSZXNvbHZlcnMsIEZyaWVuZFJlc29sdmVycywgSW91UmVzb2x2ZXJzIF0pO1xuXG5jb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG4gIHJlc29sdmVycyxcbiAgdHlwZURlZnM6IHR5cGVzLFxufSk7XG5cbmFwcC51c2UoJy9ncmFwaHFsJywgYm9keVBhcnNlci5qc29uKCksIGNvcnMoKSwgZ3JhcGhxbEV4cHJlc3MoeyBzY2hlbWEgfSkpO1xuYXBwLnVzZSgnL2dyYXBoaXFsJywgZ3JhcGhpcWxFeHByZXNzKHtcbiAgZW5kcG9pbnRVUkw6ICcvZ3JhcGhxbCcsXG59KSk7XG5hcHAubGlzdGVuKHBvcnQpO1xuXG5hcHAuZ2V0KCcvbG9naW4nLCAocmVxLCByZXMpID0+IHtcbiAgQ2hlY2tQYXNzKHJlcSwgcmVzKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1lcmdlLWdyYXBocWwtc2NoZW1hc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==