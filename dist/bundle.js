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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/log.ts");


const CheckPass = (req, res) => {
    const { pass, whoami } = req.query;
    _components_friend_schema__WEBPACK_IMPORTED_MODULE_0__["FriendModel"].findOne({ friend_id: whoami })
        .then((friend) => {
        if (friend.hash === pass) {
            res.status(202).send('Success');
        }
        else {
            res.status(500).send('Inncorrect password');
        }
    })
        .catch((err) => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].info('Error while trying to log in' + err);
        res.status(500).send('Error Logging in');
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
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`IouController| id: ${id}`);
        if (!id) {
            throw new Error('get IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].get(id);
    },
    getAll: () => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose('IouController getAll');
        return _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].getAll();
    },
    add: ({ to_id, from_id, amount, reason }) => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`IouController add| to_id: ${to_id} from_id: ${from_id} amount: ${amount}`);
        if (!to_id || !from_id) {
            throw new Error('add IOU malformed');
        }
        return _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].add(to_id, from_id, amount, reason);
    },
    ioWho: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`IouController ioWho| friendId: ${friendId}`);
        // calculate how much I own each friend
        const iowho = yield _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].ioWho(friendId);
        const whoome = yield _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].whoome(friendId);
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
    split: (payerId, amount, nonPayers, reason) => {
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose(`IouController split| payerId:${payerId} amount:${amount} nonPayer:${nonPayers}`);
        const numOfPeople = nonPayers.length + 1;
        const splitAmount = amount / numOfPeople;
        nonPayers.forEach((nonPayerId) => {
            _model__WEBPACK_IMPORTED_MODULE_0__["IouModel"].add(payerId, nonPayerId, splitAmount, reason);
        });
        return true;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (iouController);


/***/ }),

/***/ "./src/components/iou/model.ts":
/*!*************************************!*\
  !*** ./src/components/iou/model.ts ***!
  \*************************************/
/*! exports provided: IouModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouModel", function() { return IouModel; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../log */ "./src/log.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const iouSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    to_id: String,
    from_id: String,
    amount: Number,
    reason: String,
    time: String,
});
const mongoModel = mongoose__WEBPACK_IMPORTED_MODULE_1__["model"]('Ious', iouSchema);
const IouModel = {
    get: (id) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting iou id ${id} from model`);
        return mongoModel.findById(id);
    }),
    getAll: () => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose('Getting all ious from model');
        return mongoModel.find();
    }),
    add: (toId, fromId, amount, reason) => {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Adding IOU of ${amount} to ${toId} from ${fromId} to model`);
        const iou = new mongoModel({
            to_id: toId,
            from_id: fromId,
            amount,
            reason,
            time: (new Date()).getTime(),
        });
        return iou.save();
    },
    ioWho: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting friend ${friendId}s iowho`);
        return mongoModel.find({
            from_id: friendId,
        });
    }),
    whoome: (friendId) => __awaiter(undefined, void 0, void 0, function* () {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].verbose(`Getting friend ${friendId}s whoome`);
        return mongoModel.find({
            to_id: friendId,
        });
    }),
};


/***/ }),

/***/ "./src/components/iou/schema.ts":
/*!**************************************!*\
  !*** ./src/components/iou/schema.ts ***!
  \**************************************/
/*! exports provided: IouType, IouResolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouType", function() { return IouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IouResolvers", function() { return IouResolvers; });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/components/iou/controller.ts");
/* harmony import */ var _friend_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../friend/controller */ "./src/components/friend/controller.ts");


const IouType = `
  type IouType {
    id: String!,
    to_id: String!,
    to: FriendType,
    from: FriendType,
    from_id: String!,
    amount: Float!,
    reason: String!,
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
      amount: Float!,
      reason: String!,
    ): IouType,

    splitCost(
      payerId: String!,
      amount: Float!,
      nonPayers: [String]!,
      reason: String!,
    ): Boolean
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
        splitCost: (_, args) => _controller__WEBPACK_IMPORTED_MODULE_0__["default"].split(args.payerId, args.amount, args.nonPayers, args.reason),
    },
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY2hvcmUvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hvcmUvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9yZS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnJpZW5kL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyaWVuZC9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW91L21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lvdS9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1lcmdlLWdyYXBocWwtc2NoZW1hc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZ5RDtBQUNqQztBQUV4QixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQVEsRUFBRTtJQUNuQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbkMscUVBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDdkMsSUFBSSxDQUFDLENBQUMs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QUcsQ0FBQyxXQUFXLEVBQUUsNkVBQWUsQ0FBQztJQUNuQyxXQUFXLEVBQUUsVUFBVTtDQUN4QixDQUFDLENBQUMsQ0FBQztBQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0IscURBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxQ0gsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgRnJpZW5kTW9kZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvZnJpZW5kL3NjaGVtYSc7XG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nJztcblxuY29uc3QgQ2hlY2tQYXNzID0gKHJlcSwgcmVzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgcGFzcywgd2hvYW1pIH0gPSByZXEucXVlcnk7XG4gIEZyaWVuZE1vZGVsLmZpbmRPbmUoeyBmcmllbmRfaWQ6IHdob2FtaSB9KVxuICAgIC50aGVuKChmcmllbmQpID0+IHtcbiAgICAgIGlmIChmcmllbmQuaGFzaCA9PT0gcGFzcykge1xuICAgICAgICByZXMuc3RhdHVzKDIwMikuc2VuZCgnU3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0lubmNvcnJlY3QgcGFzc3dvcmQnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBsb2cuaW5mbygnRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIGxvZyBpbicgKyBlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0Vycm9yIExvZ2dpbmcgaW4nKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrUGFzcztcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCBCYXNlQ2hvcmVNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IElCYXNlQ2hvcmUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmNvbnN0IEJhc2VDaG9yZUNvbnRyb2xsZXIgPSB7XG5cbiAgZ2V0OiAoeyBiYXNlX2Nob3JlX2lkOiBiYXNlQ2hvcmVJZCB9LCBwcm9wID0gbnVsbCk6IFByb21pc2U8SUJhc2VDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGJhc2UgY2hvcmUgaWQgJHtiYXNlQ2hvcmVJZH0gZnJvbSBjb250cm9sbGVyYCk7XG4gICAgaWYgKCFiYXNlQ2hvcmVJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIEJhc2VDaG9yZU1vZGVsLmdldChiYXNlQ2hvcmVJZCwgcHJvcCk7XG4gIH0sXG5cbiAgZ2V0QWxsOiAoKTogUHJvbWlzZTxJQmFzZUNob3JlW10+ID0+IHtcbiAgICBsb2cudmVyYm9zZSgnR2V0dGluZyBhbGwgYmFzZSBjaG9yZXMgZnJvbSBjb250cm9sbGVyJyk7XG4gICAgcmV0dXJuIEJhc2VDaG9yZU1vZGVsLmdldEFsbCgpO1xuICB9LFxuXG4gIGFkZDogKHsgbmFtZSwgcG9pbnRzLCBmcmllbmR9KTogUHJvbWlzZTxJQmFzZUNob3JlPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYENyZWF0aW5nIGJhc2UgY2hvcmUgd2l0aCBuYW1lOiAke25hbWV9LCBwb2ludHM6ICR7cG9pbnRzfSwgY3JlYXRvcjogJHtmcmllbmR9YCk7XG4gICAgaWYgKCFuYW1lIHx8ICFwb2ludHMgfHwgIWZyaWVuZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIEJhc2VDaG9yZU1vZGVsLmFkZChuYW1lLCBwb2ludHMsIGZyaWVuZCk7XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDaG9yZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgeyBCYXNlQ2hvcmVNb2RlbCBhcyBNb2RlbCwgSUJhc2VDaG9yZSB9IGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgQmFzZUNob3JlTW9kZWwgPSB7XG5cbiAgZ2V0OiBhc3luYyAoYmFzZUNob3JlSWQ6IHN0cmluZywgcHJvcDogc3RyaW5nKTogUHJvbWlzZTxJQmFzZUNob3JlPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgYmFzZSBjaG9yZSBpZCAke2Jhc2VDaG9yZUlkfSBmcm9tIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkKGJhc2VDaG9yZUlkLCBwcm9wKVxuICAgICAgLnRoZW4oKGJhc2VDaG9yZSkgPT4ge1xuICAgICAgICBpZiAocHJvcCkgcmV0dXJuIGJhc2VDaG9yZVtwcm9wXTtcbiAgICAgICAgcmV0dXJuIGJhc2VDaG9yZTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldEFsbDogYXN5bmMgKCk6IFByb21pc2U8SUJhc2VDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGJhc2UgY2hvcmVzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxuXG4gIGFkZDogKG5hbWU6IHN0cmluZywgcG9pbnRzOiBudW1iZXIsIGZyaWVuZDogc3RyaW5nKTogUHJvbWlzZTxJQmFzZUNob3JlPiA9PiB7XG4gICAgY29uc3QgYmFzZUNob3JlID0gbmV3IE1vZGVsKHtcbiAgICAgIG5hbWUsXG4gICAgICBwb2ludHMsXG4gICAgICBjcmVhdG9yX2lkOiBmcmllbmQsXG4gICAgICBjcmVhdGVkX2RhdGU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgfSk7XG4gICAgcmV0dXJuIGJhc2VDaG9yZS5zYXZlKCk7XG4gIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDaG9yZU1vZGVsO1xuIiwiaW1wb3J0IEJhc2VDaG9yZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IEJhc2VDaG9yZVR5cGUgPSBgXG4gIHR5cGUgQmFzZUNob3JlVHlwZSB7XG4gICAgaWQ6IFN0cmluZyEsXG4gICAgbmFtZTogU3RyaW5nISxcbiAgICBjcmVhdG9yX2lkOiBTdHJpbmcsXG4gICAgcG9pbnRzOiBJbnQhLFxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgYmFzZUNob3JlczogW0Jhc2VDaG9yZVR5cGVdLFxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgYWRkQmFzZUNob3JlKFxuICAgICAgbmFtZTogU3RyaW5nISxcbiAgICAgIHBvaW50czogSW50ISxcbiAgICAgIGZyaWVuZDogU3RyaW5nISxcbiAgICApIDogQmFzZUNob3JlVHlwZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQmFzZUNob3JlUmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIGJhc2VDaG9yZXM6ICgpID0+IEJhc2VDaG9yZUNvbnRyb2xsZXIuZ2V0QWxsKCksXG4gIH0sXG4gIE11dGF0aW9uOiB7XG4gICAgYWRkQmFzZUNob3JlOiAoXywgYXJncykgPT4gQmFzZUNob3JlQ29udHJvbGxlci5hZGQoYXJncyksXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ2hvcmUgZXh0ZW5kcyBtb25nby5Eb2N1bWVudCB7XG4gIGNyZWF0ZWRfZGF0ZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvaW50czogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNlQ2hvcmVTY2hlbWEgPSBuZXcgbW9uZ28uU2NoZW1hKHtcbiAgICBjcmVhdGVkX2RhdGU6IE51bWJlcixcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgcG9pbnRzOiBOdW1iZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IEJhc2VDaG9yZU1vZGVsOiBtb25nby5Nb2RlbDxJQmFzZUNob3JlPiA9IG1vbmdvLm1vZGVsPElCYXNlQ2hvcmU+KCdiYXNlLWNob3JlcycsIGJhc2VDaG9yZVNjaGVtYSk7XG4iLCJpbXBvcnQgQ2hvcmVNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBGcmllbmRDb250cm9sbGVyIGZyb20gJy4uL2ZyaWVuZC9jb250cm9sbGVyJztcbmltcG9ydCB7IElGcmllbmQgfSBmcm9tICcuLi9mcmllbmQvc2NoZW1hJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCB7IElDaG9yZSB9IGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgQ2hvcmVDb250cm9sbGVyID0ge1xuXG4gIGdldDogYXN5bmMgKHsgaWQgfSk6IFByb21pc2U8SUNob3JlPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgY2hvcmUgaWQgJHtpZH0gZnJvbSBjb250cm9sbGVyYCk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRDaG9yZSBNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIENob3JlTW9kZWwuZ2V0KGlkKTtcbiAgfSxcblxuICBnZXRBbGw6ICgpOiBQcm9taXNlPElDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGNob3JlcyBmcm9tIGNvbnRyb2xsZXInKTtcbiAgICByZXR1cm4gQ2hvcmVNb2RlbC5nZXRBbGwoKTtcbiAgfSxcblxuICBnZXRGcmllbmRDaG9yZXM6ICh7IGZyaWVuZF9pZCB9KTogUHJvbWlzZTxJQ2hvcmVbXT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBHZXR0aW5nIGNob3JlcyBmb3IgZnJpZW5kIGlkICR7ZnJpZW5kX2lkfSBmcm9tIGNvbnRyb2xsZXJgKTtcbiAgICBpZiAoIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRGcmllbmRDaG9yZXMgTWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBDaG9yZU1vZGVsLmdldEZyaWVuZENob3JlcyhmcmllbmRfaWQpO1xuICB9LFxuXG4gIGFkZDogYXN5bmMgKHsgYmFzZV9jaG9yZV9pZCwgZnJpZW5kX2lkfSkgPT4ge1xuICAgIGlmICghYmFzZV9jaG9yZV9pZCAmJiAhZnJpZW5kX2lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCcpO1xuICAgIH1cbiAgICBjb25zdCBmcmllbmRzOiBJRnJpZW5kW10gPSBhd2FpdCBGcmllbmRDb250cm9sbGVyLmdldEFsbCgpO1xuXG4gICAgY29uc3QgZnJpZW5kUG9pbnRzOiBudW1iZXJbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gQ2hvcmVNb2RlbC5jYWxjRnJpZW5kUG9pbnRzKGZyaWVuZC5mcmllbmRfaWQpKSxcbiAgICApO1xuXG4gICAgZnJpZW5kcy5mb3JFYWNoKChmcmllbmQsIGluZGV4KSA9PiB7XG4gICAgICBmcmllbmQucG9pbnRzID0gZnJpZW5kUG9pbnRzW2luZGV4XTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvZXJJZCA9IGZyaWVuZHMucmVkdWNlKChiZXN0LCBmcmllbmQpID0+IHtcbiAgICAgIHJldHVybiBmcmllbmQucG9pbnRzIDw9IGJlc3QucG9pbnRzID8gZnJpZW5kIDogYmVzdDtcbiAgICB9KS5mcmllbmRfaWQ7XG5cbiAgICByZXR1cm4gYXdhaXQgQ2hvcmVNb2RlbC5hZGQoeyBiYXNlX2Nob3JlX2lkLCBkb2VyX2lkOiBkb2VySWQsIGNyZWF0b3JfaWQ6IGZyaWVuZF9pZCB9KTtcbiAgfSxcblxuICBjaGFuZ2VTdGF0dXM6ICh7IGlkLCBzdGF0dXMgfSkgPT4ge1xuICAgIGxvZy52ZXJib3NlKGBDaGFuaW5nIGNob3JlIHN0YXR1cyB0byAke3N0YXR1c30gb24gaWQgJHtpZH1gKTtcbiAgICBpZiAoIWlkIHx8ICFzdGF0dXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGkgPSBbJ2Fzc2lnbmVkJywgJ2NvbXBsZXRlZCcsICd2ZXJpZmllZCddO1xuXG4gICAgaWYgKHN0YXRpLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RhdHVzIGlzIEludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIENob3JlTW9kZWwuY2hhbmdlU3RhdHVzKGlkLCBzdGF0dXMpO1xuXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaG9yZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUNob3JlQ29udHJvbGxlciBmcm9tICcuLi9iYXNlLWNob3JlL2NvbnRyb2xsZXInO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi9sb2cnO1xuaW1wb3J0IHsgQ2hvcmVNb2RlbCBhcyBNb2RlbCwgSUNob3JlIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5jb25zdCBDaG9yZU1vZGVsID0ge1xuICBnZXQ6IGFzeW5jIChpZCk6IFByb21pc2U8SUNob3JlPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgY2hvcmUgJHtpZH0gaW4gbW9kZWxgKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZEJ5SWQoaWQpO1xuICB9LFxuXG4gIGdldEFsbDogYXN5bmMgKCk6IFByb21pc2U8SUNob3JlW10+ID0+IHtcbiAgICBsb2cudmVyYm9zZSgnR2V0dGluZyBhbGwgY2hvcmVzIGZyb20gbW9kZWwnKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCgpO1xuICB9LFxuXG4gIGdldEZyaWVuZENob3JlczogYXN5bmMgKGZyaWVuZElkOiBzdHJpbmcpOiBQcm9taXNlPElDaG9yZVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgYWxsIGZyaWVuZElkICR7ZnJpZW5kSWR9IGZyb20gbW9kZWxgKTtcbiAgICByZXR1cm4gTW9kZWwuZmluZCh7XG4gICAgICBkb2VyX2lkOiBmcmllbmRJZCxcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGFzeW5jICh7IGJhc2VfY2hvcmVfaWQsIGRvZXJfaWQsIGNyZWF0b3JfaWQgfSk6IFByb21pc2U8SUNob3JlPiA9PiB7XG4gICAgY29uc3QgY2hvcmUgPSBuZXcgTW9kZWwoe1xuICAgICAgZG9lcl9pZCxcbiAgICAgIGNyZWF0b3JfaWQsXG4gICAgICBiYXNlX2Nob3JlX2lkLFxuICAgICAgc3RhdHVzOiAnYXNzaWduZWQnLFxuICAgICAgYXNzaWduZWRfZGF0ZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBjaG9yZS5zYXZlKCk7XG4gIH0sXG5cbiAgY2hhbmdlU3RhdHVzOiBhc3luYyAoaWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpOiBQcm9taXNlPElDaG9yZT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBDaGFuZ2luZyBjaG9yZSBpZCAke2lkfSBzdGF0dXMgdG8gJHtzdGF0dXN9IGluIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7IHN0YXR1cyB9KTtcbiAgfSxcblxuICBjYWxjRnJpZW5kUG9pbnRzOiBhc3luYyAoZnJpZW5kSWQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG4gICAgY29uc3QgY2hvcmVzOiBJQ2hvcmVbXSA9IGF3YWl0IE1vZGVsLmZpbmQoKTtcbiAgICBjb25zdCBiYXNlQ2hvcmVzID0gYXdhaXQgQmFzZUNob3JlQ29udHJvbGxlci5nZXRBbGwoKTtcbiAgICBjb25zdCBteUNob3JlczogSUNob3JlW10gPSBjaG9yZXMuZmlsdGVyKChjaG9yZSkgPT4gY2hvcmUuZG9lcl9pZCA9PT0gZnJpZW5kSWQpO1xuICAgIGNvbnN0IGNob3JlQ291bnQgPSBteUNob3Jlcy5yZWR1Y2UoKHJlY29yZCwgY2hvcmUpID0+IHtcbiAgICAgIGlmICghcmVjb3JkW2Nob3JlLmJhc2VfY2hvcmVfaWRdKSByZWNvcmRbY2hvcmUuYmFzZV9jaG9yZV9pZF0gPSAwO1xuICAgICAgcmVjb3JkW2Nob3JlLmJhc2VfY2hvcmVfaWRdKys7XG4gICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IHBvaW50czogbnVtYmVyID0gYmFzZUNob3Jlcy5yZWR1Y2UoKHB0cywgYkNob3JlKSA9PiB7XG4gICAgICBjb25zdCBjb3VudCA9IGNob3JlQ291bnRbYkNob3JlLl9pZF0gPyBjaG9yZUNvdW50W2JDaG9yZS5faWRdIDogMDtcbiAgICAgIHJldHVybiBwdHMgKyBjb3VudCAqIGJDaG9yZS5wb2ludHM7XG4gICAgfSwgMCk7XG5cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvcmVNb2RlbDtcbiIsImltcG9ydCBDaG9yZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBCYXNlQ2hvcmVDb250cm9sbGVyIGZyb20gJy4uL2Jhc2UtY2hvcmUvY29udHJvbGxlcic7XG5pbXBvcnQgRnJpZW5kQ29udHJvbGxlciBmcm9tICcuLi9mcmllbmQvY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBtb25nbyBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBDaG9yZVR5cGUgPSBgXG4gIHR5cGUgQ2hvcmVUeXBlIHtcbiAgICBpZDogU3RyaW5nISxcbiAgICBzdGF0dXM6IFN0cmluZyxcbiAgICBkb2VyX2lkOiBTdHJpbmcsXG4gICAgY2hvcmVfaWQ6IFN0cmluZyxcbiAgICBjcmVhdG9yX2lkOiBTdHJpbmcsXG4gICAgYmFzZV9jaG9yZV9pZDogU3RyaW5nISxcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgcG9pbnRzOiBJbnQsXG4gICAgZG9lcjogRnJpZW5kVHlwZSxcbiAgICBjcmVhdG9yOiBGcmllbmRUeXBlXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBjaG9yZShpZDogU3RyaW5nISk6IENob3JlVHlwZSxcbiAgICBjaG9yZXM6IFtDaG9yZVR5cGVdXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjaGFuZ2VTdGF0dXMgKFxuICAgICAgaWQ6IFN0cmluZyEsXG4gICAgICBzdGF0dXM6IFN0cmluZyFcbiAgICApOiBDaG9yZVR5cGUsXG5cbiAgICBhZGRDaG9yZShcbiAgICAgIGJhc2VfY2hvcmVfaWQ6IFN0cmluZyEsXG4gICAgICBmcmllbmRfaWQ6IFN0cmluZ1xuICAgICk6IENob3JlVHlwZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hvcmVSZXNvbHZlcnMgPSB7XG4gIENob3JlVHlwZToge1xuICAgIG5hbWU6IChvYmopID0+IEJhc2VDaG9yZUNvbnRyb2xsZXIuZ2V0KG9iaiwgJ25hbWUnKSxcbiAgICBwb2ludHM6IChvYmopID0+IEJhc2VDaG9yZUNvbnRyb2xsZXIuZ2V0KG9iaiwgJ3BvaW50cycpLFxuICAgIGRvZXI6IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuZ2V0KHtmcmllbmRfaWQ6IG9iai5kb2VyX2lkfSksXG4gICAgY3JlYXRvcjogKG9iaikgPT4gRnJpZW5kQ29udHJvbGxlci5nZXQoe2ZyaWVuZF9pZDogb2JqLmNyZWF0b3JfaWR9KSxcbiAgfSxcbiAgUXVlcnk6IHtcbiAgICBjaG9yZTogKF8sIGFyZ3MpID0+IENob3JlQ29udHJvbGxlci5nZXQoYXJncyksXG4gICAgY2hvcmVzOiAoKSA9PiBDaG9yZUNvbnRyb2xsZXIuZ2V0QWxsKCksXG4gIH0sXG4gIE11dGF0aW9uOiB7XG4gICAgY2hhbmdlU3RhdHVzOiAoXywgYXJncykgPT4gQ2hvcmVDb250cm9sbGVyLmNoYW5nZVN0YXR1cyhhcmdzKSxcbiAgICBhZGRDaG9yZTogKF8sIGFyZ3MpID0+IENob3JlQ29udHJvbGxlci5hZGQoYXJncylcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNob3JlIGV4dGVuZHMgbW9uZ28uRG9jdW1lbnQge1xuICBkb2VyX2lkOiBzdHJpbmc7XG4gIGNyZWF0b3JfaWQ6IHN0cmluZztcbiAgYmFzZV9jaG9yZV9pZDogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgYXNzaWduZWRfZGF0YTogbnVtYmVyO1xufVxuXG5leHBvcnQgbGV0IENob3JlU2NoZW1hOiBtb25nby5TY2hlbWEgPSBuZXcgbW9uZ28uU2NoZW1hKHtcbiAgZG9lcl9pZDogU3RyaW5nLFxuICBjcmVhdG9yX2lkOiBTdHJpbmcsXG4gIGJhc2VfY2hvcmVfaWQ6IFN0cmluZyxcbiAgc3RhdHVzOiBTdHJpbmcsXG4gIGFzc2lnbmVkX2RhdGU6IE51bWJlcixcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2hvcmVNb2RlbDogbW9uZ28uTW9kZWw8SUNob3JlPiA9IG1vbmdvLm1vZGVsPElDaG9yZT4oJ0Nob3JlcycsIENob3JlU2NoZW1hKTtcbiIsImltcG9ydCBGcmllbmRNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBDaG9yZU1vZGVsIGZyb20gJy4uL2Nob3JlL21vZGVsJztcbmltcG9ydCB7IElGcmllbmQgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5cbmNvbnN0IEZyaWVuZENvbnRyb2xsZXIgPSB7XG4gIGdldDogKHsgZnJpZW5kX2lkIH0pOiBQcm9taXNlPElGcmllbmQ+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBmcmllbmQgJHtmcmllbmRfaWR9IGZyb20gY29udHJvbGxlcmApO1xuICAgIGlmICghZnJpZW5kX2lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dldEZyaWVuZCBNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIEZyaWVuZE1vZGVsLmdldChmcmllbmRfaWQpO1xuICB9LFxuXG4gIGdldEFsbDogKCk6IFByb21pc2U8SUZyaWVuZFtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGZyaWVuZHMgZnJvbSBjb250cm9sbGVyJyk7XG4gICAgcmV0dXJuIEZyaWVuZE1vZGVsLmdldEFsbCgpO1xuICB9LFxuXG4gIGNhbGNQb2ludHM6IGFzeW5jICh7IGZyaWVuZF9pZCB9KTogUHJvbWlzZTxudW1iZXI+ID0+IHtcbiAgICBpZiAoIWZyaWVuZF9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQnKTtcbiAgICB9XG4gICAgY29uc3QgcG9pbnRzID0gYXdhaXQgQ2hvcmVNb2RlbC5jYWxjRnJpZW5kUG9pbnRzKGZyaWVuZF9pZCk7XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5pbXBvcnQgeyBGcmllbmRNb2RlbCBhcyBNb2RlbCwgSUZyaWVuZCB9IGZyb20gJy4vc2NoZW1hJztcblxuY29uc3QgRnJpZW5kTW9kZWwgPSB7XG4gIGdldDogYXN5bmMgKGZyaWVuZElkKTogUHJvbWlzZTxJRnJpZW5kPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgZnJpZW5kICR7ZnJpZW5kSWR9IGluIG1vZGVsYCk7XG4gICAgcmV0dXJuIE1vZGVsLmZpbmRPbmUoeyBmcmllbmRfaWQ6IGZyaWVuZElkIH0pO1xuICB9LFxuXG4gIGdldEFsbDogYXN5bmMgKCk6IFByb21pc2U8SUZyaWVuZFtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0dldHRpbmcgYWxsIGZyaWVuZHMgZnJvbSBtb2RlbCcpO1xuICAgIHJldHVybiBNb2RlbC5maW5kKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRNb2RlbDtcbiIsImltcG9ydCBGcmllbmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgQ2hvcmVDb250cm9sbGVyIGZyb20gJy4uL2Nob3JlL2NvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgbW9uZ28gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGlvdUNvbnRyb2xsZXIgZnJvbSAnLi4vaW91L2NvbnRyb2xsZXInO1xuXG5leHBvcnQgY29uc3QgRnJpZW5kVHlwZSA9IGBcbiAgdHlwZSBGcmllbmRUeXBlIHtcbiAgICBuYW1lOiBTdHJpbmchLFxuICAgIGNvbG9yOiBTdHJpbmchLFxuICAgIGhhc2g6IFN0cmluZyEsXG4gICAgZnJpZW5kX2lkOiBTdHJpbmchLFxuICAgIHBvaW50czogSW50LFxuICAgIGNob3JlczogW0Nob3JlVHlwZV0sXG4gICAgaW93aG86IFtJb3VUeXBlXVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgZnJpZW5kIChmcmllbmRfaWQ6IFN0cmluZyk6IEZyaWVuZFR5cGUsXG4gICAgZnJpZW5kczogW0ZyaWVuZFR5cGVdXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGcmllbmRSZXNvbHZlcnMgPSB7XG4gIEZyaWVuZFR5cGU6IHtcbiAgICBwb2ludHM6IChvYmopID0+IEZyaWVuZENvbnRyb2xsZXIuY2FsY1BvaW50cyhvYmopLFxuICAgIGNob3JlczogKG9iaikgPT4gQ2hvcmVDb250cm9sbGVyLmdldEZyaWVuZENob3JlcyhvYmopLFxuICAgIGlvd2hvOiAob2JqKSA9PiBpb3VDb250cm9sbGVyLmlvV2hvKG9iai5mcmllbmRfaWQpLFxuICB9LFxuXG4gIFF1ZXJ5OiB7XG4gICAgZnJpZW5kOiAoXywgYXJncykgPT4gRnJpZW5kQ29udHJvbGxlci5nZXQoYXJncyksXG4gICAgZnJpZW5kczogKCkgPT4gRnJpZW5kQ29udHJvbGxlci5nZXRBbGwoKSxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZyaWVuZCBleHRlbmRzIG1vbmdvLkRvY3VtZW50IHtcbiBuYW1lOiBzdHJpbmc7XG4gY29sb3I6IHN0cmluZztcbiBoYXNoOiBzdHJpbmc7XG4gZnJpZW5kX2lkOiBzdHJpbmc7XG4gcG9pbnRzPzogbnVtYmVyO1xufVxuXG5jb25zdCBGcmllbmRTY2hlbWEgPSBuZXcgbW9uZ28uU2NoZW1hKHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBoYXNoOiBTdHJpbmcsXG4gICAgZnJpZW5kX2lkOiBTdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZyaWVuZE1vZGVsOiBtb25nby5Nb2RlbDxJRnJpZW5kPiA9IG1vbmdvLm1vZGVsPElGcmllbmQ+KCdGcmllbmRzJywgRnJpZW5kU2NoZW1hKTtcbiIsImltcG9ydCB7IElvdU1vZGVsLCBJSW91IH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgbG9nIGZyb20gJy4uLy4uL2xvZyc7XG5cbmNvbnN0IGlvdUNvbnRyb2xsZXIgPSB7XG4gIGdldDogKHsgaWQgfSk6IFByb21pc2U8SUlvdT4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBJb3VDb250cm9sbGVyfCBpZDogJHtpZH1gKTtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBJT1UgbWFsZm9ybWVkJyk7XG4gICAgfVxuICAgIHJldHVybiBJb3VNb2RlbC5nZXQoaWQpO1xuICB9LFxuXG4gIGdldEFsbDogKCk6IFByb21pc2U8SUlvdVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoJ0lvdUNvbnRyb2xsZXIgZ2V0QWxsJyk7XG4gICAgcmV0dXJuIElvdU1vZGVsLmdldEFsbCgpO1xuICB9LFxuXG4gIGFkZDogKHsgdG9faWQsIGZyb21faWQsIGFtb3VudCwgcmVhc29uIH0pOiBQcm9taXNlPElJb3U+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgSW91Q29udHJvbGxlciBhZGR8IHRvX2lkOiAke3RvX2lkfSBmcm9tX2lkOiAke2Zyb21faWR9IGFtb3VudDogJHthbW91bnR9YCk7XG4gICAgaWYgKCF0b19pZCB8fCAhZnJvbV9pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZGQgSU9VIG1hbGZvcm1lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gSW91TW9kZWwuYWRkKHRvX2lkLCBmcm9tX2lkLCBhbW91bnQsIHJlYXNvbik7XG4gIH0sXG5cbiAgaW9XaG86IGFzeW5jIChmcmllbmRJZDogc3RyaW5nKTogUHJvbWlzZTxJSW91W10+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgSW91Q29udHJvbGxlciBpb1dob3wgZnJpZW5kSWQ6ICR7ZnJpZW5kSWR9YCk7XG4gICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIEkgb3duIGVhY2ggZnJpZW5kXG4gICAgY29uc3QgaW93aG8gPSBhd2FpdCBJb3VNb2RlbC5pb1dobyhmcmllbmRJZCk7XG4gICAgY29uc3Qgd2hvb21lID0gYXdhaXQgSW91TW9kZWwud2hvb21lKGZyaWVuZElkKTtcbiAgICBjb25zdCBteUlvdXNSZWR1Y2VkID0ge307XG4gICAgaW93aG8uZm9yRWFjaCgoaW91KSA9PiB7IC8vIGV2ZXJ5b25lIHdobyB5b3Ugb3dlXG4gICAgICBpZiAobXlJb3VzUmVkdWNlZFtpb3UudG9faWRdKSB7XG4gICAgICAgIG15SW91c1JlZHVjZWRbaW91LnRvX2lkXSArPSBpb3UuYW1vdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXlJb3VzUmVkdWNlZFtpb3UudG9faWRdID0gaW91LmFtb3VudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aG9vbWUuZm9yRWFjaCgoaW91KSA9PiB7IC8vIGV2ZXJ5b25lIHlvdSBvd2VcbiAgICAgIGlmIChteUlvdXNSZWR1Y2VkW2lvdS5mcm9tX2lkXSkge1xuICAgICAgICBteUlvdXNSZWR1Y2VkW2lvdS5mcm9tX2lkXSAtPSBpb3UuYW1vdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXlJb3VzUmVkdWNlZFtpb3UuZnJvbV9pZF0gPSAtaW91LmFtb3VudDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld0lvdXMgPSBPYmplY3Qua2V5cyhteUlvdXNSZWR1Y2VkKS5tYXAoKHRvSWQpID0+IHtcbiAgICAgIGNvbnN0IGlvdSA9IHtcbiAgICAgICAgdG9faWQ6IHRvSWQsXG4gICAgICAgIGZyb21faWQ6IGZyaWVuZElkLFxuICAgICAgICBhbW91bnQ6IG15SW91c1JlZHVjZWRbdG9JZF0sXG4gICAgICB9IGFzIElJb3U7XG4gICAgICByZXR1cm4gaW91O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld0lvdXM7XG4gIH0sXG5cbiAgc3BsaXQ6IChwYXllcklkOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyLCBub25QYXllcnM6IHN0cmluZ1tdLCByZWFzb246IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGxvZy52ZXJib3NlKGBJb3VDb250cm9sbGVyIHNwbGl0fCBwYXllcklkOiR7cGF5ZXJJZH0gYW1vdW50OiR7YW1vdW50fSBub25QYXllcjoke25vblBheWVyc31gKTtcbiAgICBjb25zdCBudW1PZlBlb3BsZSA9IG5vblBheWVycy5sZW5ndGggKyAxO1xuICAgIGNvbnN0IHNwbGl0QW1vdW50ID0gYW1vdW50IC8gbnVtT2ZQZW9wbGU7XG4gICAgbm9uUGF5ZXJzLmZvckVhY2goKG5vblBheWVySWQpID0+IHtcbiAgICAgIElvdU1vZGVsLmFkZChwYXllcklkLCBub25QYXllcklkLCBzcGxpdEFtb3VudCwgcmVhc29uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW91Q29udHJvbGxlcjtcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCAqIGFzIG1vbmdvIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJSW91IGV4dGVuZHMgbW9uZ28uRG9jdW1lbnQge1xuICB0b19pZDogc3RyaW5nO1xuICBmcm9tX2lkOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICByZWFzb246IHN0cmluZztcbiAgdGltZTogc3RyaW5nO1xufVxuXG5jb25zdCBpb3VTY2hlbWEgPSBuZXcgbW9uZ28uU2NoZW1hKHtcbiAgdG9faWQ6IFN0cmluZyxcbiAgZnJvbV9pZDogU3RyaW5nLFxuICBhbW91bnQ6IE51bWJlcixcbiAgcmVhc29uOiBTdHJpbmcsXG4gIHRpbWU6IFN0cmluZyxcbn0pO1xuXG5jb25zdCBtb25nb01vZGVsOiBtb25nby5Nb2RlbDxJSW91PiA9IG1vbmdvLm1vZGVsPElJb3U+KCdJb3VzJywgaW91U2NoZW1hKTtcblxuZXhwb3J0IGNvbnN0IElvdU1vZGVsID0ge1xuXG4gIGdldDogYXN5bmMgKGlkKTogUHJvbWlzZTxJSW91PiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgaW91IGlkICR7aWR9IGZyb20gbW9kZWxgKTtcbiAgICByZXR1cm4gbW9uZ29Nb2RlbC5maW5kQnlJZChpZCk7XG4gIH0sXG5cbiAgZ2V0QWxsOiBhc3luYyAoKTogUHJvbWlzZTxJSW91W10+ID0+IHtcbiAgICBsb2cudmVyYm9zZSgnR2V0dGluZyBhbGwgaW91cyBmcm9tIG1vZGVsJyk7XG4gICAgcmV0dXJuIG1vbmdvTW9kZWwuZmluZCgpO1xuICB9LFxuXG4gIGFkZDogKHRvSWQsIGZyb21JZCwgYW1vdW50LCByZWFzb24pOiBQcm9taXNlPElJb3U+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgQWRkaW5nIElPVSBvZiAke2Ftb3VudH0gdG8gJHt0b0lkfSBmcm9tICR7ZnJvbUlkfSB0byBtb2RlbGApO1xuICAgIGNvbnN0IGlvdSA9IG5ldyBtb25nb01vZGVsKHtcbiAgICAgIHRvX2lkOiB0b0lkLFxuICAgICAgZnJvbV9pZDogZnJvbUlkLFxuICAgICAgYW1vdW50LFxuICAgICAgcmVhc29uLFxuICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSxcbiAgICB9KTtcbiAgICByZXR1cm4gaW91LnNhdmUoKTtcbiAgfSxcblxuICBpb1dobzogYXN5bmMgKGZyaWVuZElkKTogUHJvbWlzZTxJSW91W10+ID0+IHtcbiAgICBsb2cudmVyYm9zZShgR2V0dGluZyBmcmllbmQgJHtmcmllbmRJZH1zIGlvd2hvYCk7XG4gICAgcmV0dXJuIG1vbmdvTW9kZWwuZmluZCh7XG4gICAgICBmcm9tX2lkOiBmcmllbmRJZCxcbiAgICB9KTtcbiAgfSxcblxuICB3aG9vbWU6IGFzeW5jIChmcmllbmRJZCk6IFByb21pc2U8SUlvdVtdPiA9PiB7XG4gICAgbG9nLnZlcmJvc2UoYEdldHRpbmcgZnJpZW5kICR7ZnJpZW5kSWR9cyB3aG9vbWVgKTtcbiAgICByZXR1cm4gbW9uZ29Nb2RlbC5maW5kKHtcbiAgICAgIHRvX2lkOiBmcmllbmRJZCxcbiAgICB9KTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgaW91Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IEZyaWVuZENvbnRyb2xsZXIgZnJvbSAnLi4vZnJpZW5kL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgY29uc3QgSW91VHlwZSA9IGBcbiAgdHlwZSBJb3VUeXBlIHtcbiAgICBpZDogU3RyaW5nISxcbiAgICB0b19pZDogU3RyaW5nISxcbiAgICB0bzogRnJpZW5kVHlwZSxcbiAgICBmcm9tOiBGcmllbmRUeXBlLFxuICAgIGZyb21faWQ6IFN0cmluZyEsXG4gICAgYW1vdW50OiBGbG9hdCEsXG4gICAgcmVhc29uOiBTdHJpbmchLFxuICAgIHRpbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgaW91KGlkOiBTdHJpbmchKTogSW91VHlwZSxcbiAgICBpb3VzOiBbSW91VHlwZV1cbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGFkZElvdShcbiAgICAgIHRvX2lkOiBTdHJpbmchLFxuICAgICAgZnJvbV9pZDogU3RyaW5nISxcbiAgICAgIGFtb3VudDogRmxvYXQhLFxuICAgICAgcmVhc29uOiBTdHJpbmchLFxuICAgICk6IElvdVR5cGUsXG5cbiAgICBzcGxpdENvc3QoXG4gICAgICBwYXllcklkOiBTdHJpbmchLFxuICAgICAgYW1vdW50OiBGbG9hdCEsXG4gICAgICBub25QYXllcnM6IFtTdHJpbmddISxcbiAgICAgIHJlYXNvbjogU3RyaW5nISxcbiAgICApOiBCb29sZWFuXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJb3VSZXNvbHZlcnMgPSB7XG4gIElvdVR5cGU6IHtcbiAgICB0bzogKG9iaikgPT4gRnJpZW5kQ29udHJvbGxlci5nZXQoeyBmcmllbmRfaWQ6IG9iai50b19pZCB9KSxcbiAgICBmcm9tOiAob2JqKSA9PiBGcmllbmRDb250cm9sbGVyLmdldCh7IGZyaWVuZF9pZDogb2JqLmZyb21faWQgfSksXG4gIH0sXG4gIFF1ZXJ5OiB7XG4gICAgaW91OiAoXywgYXJncykgPT4gaW91Q29udHJvbGxlci5nZXQoYXJncyksXG4gICAgaW91czogKCkgPT4gaW91Q29udHJvbGxlci5nZXRBbGwoKSxcbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICBhZGRJb3U6IChfLCBhcmdzKSA9PiBpb3VDb250cm9sbGVyLmFkZChhcmdzKSxcbiAgICBzcGxpdENvc3Q6IChfLCBhcmdzKSA9PiBpb3VDb250cm9sbGVyLnNwbGl0KGFyZ3MucGF5ZXJJZCwgYXJncy5hbW91bnQsIGFyZ3Mubm9uUGF5ZXJzLCBhcmdzLnJlYXNvbiksXG4gIH0sXG59O1xuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBjb25zb2xlT3B0aW9ucyA9IHtcbiAgbmFtZTogJ2xvZzEnLFxuICBsZXZlbDogJ2RlYnVnJyxcbiAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAganNvbjogZmFsc2UsXG4gIGNvbG9yaXplOiB0cnVlLFxuICBwcmV0dHlQcmludDogKCBvYmplY3QgKSA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XG4gIH0sXG59O1xuXG5jb25zdCBsb2dnZXIgPSBsb2cuY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6ICdkZWJ1ZycsXG4gIGZvcm1hdDogbG9nLmZvcm1hdC5zaW1wbGUoKSxcbiAgdHJhbnNwb3J0czogW1xuICAgIG5ldyBsb2cudHJhbnNwb3J0cy5Db25zb2xlKGNvbnNvbGVPcHRpb25zKSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCJpbXBvcnQgKiBhcyBtb25nbyBmcm9tICdtb25nb29zZSc7XG5jb25zdCB1cmkgPSAnbW9uZ29kYitzcnY6Ly9UeWxlcl9UcmFjeTp0eWxlcjEyM0BjbHVzdGVyMC1wejdlYS5tb25nb2RiLm5ldC9sb3VuZ2U2MjEnO1xubW9uZ28uY29ubmVjdCh1cmkpO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZ3JhcGhxbEV4cHJlc3MsIGdyYXBoaXFsRXhwcmVzcyB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuaW1wb3J0IENoZWNrUGFzcyBmcm9tICcuL2F1dGgnO1xuaW1wb3J0ICcuL21vbmdvJztcbmltcG9ydCB7IEJhc2VDaG9yZVR5cGUsIEJhc2VDaG9yZVJlc29sdmVycyB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLWNob3JlL3NjaGVtYSc7XG5pbXBvcnQgeyBDaG9yZVR5cGUsIENob3JlUmVzb2x2ZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nob3JlL3NjaGVtYSc7XG5pbXBvcnQgeyBGcmllbmRUeXBlLCBGcmllbmRSZXNvbHZlcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvZnJpZW5kL3NjaGVtYSc7XG5pbXBvcnQgeyBJb3VUeXBlLCBJb3VSZXNvbHZlcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW91L3NjaGVtYSc7XG5pbXBvcnQgeyBtZXJnZVR5cGVzLCBtZXJnZVJlc29sdmVycyB9IGZyb20gJ21lcmdlLWdyYXBocWwtc2NoZW1hcyc7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgUE9SVDogc3RyaW5nO1xuICB9LFxufTtcbmRlY2xhcmUgdmFyIF9fZGlybmFtZTogc3RyaW5nO1xuXG5leHBvcnQgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcHVibGljRGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMTMzNztcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljRGlyKSk7XG5cbmNvbnN0IHR5cGVzID0gbWVyZ2VUeXBlcyhbQmFzZUNob3JlVHlwZSwgQ2hvcmVUeXBlLCBGcmllbmRUeXBlLCBJb3VUeXBlXSk7XG5jb25zdCByZXNvbHZlcnMgPSBtZXJnZVJlc29sdmVycyhbQmFzZUNob3JlUmVzb2x2ZXJzLCBDaG9yZVJlc29sdmVycywgRnJpZW5kUmVzb2x2ZXJzLCBJb3VSZXNvbHZlcnMgXSk7XG5cbmNvbnN0IHNjaGVtYSA9IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcbiAgcmVzb2x2ZXJzLFxuICB0eXBlRGVmczogdHlwZXMsXG59KTtcblxuYXBwLnVzZSgnL2dyYXBocWwnLCBib2R5UGFyc2VyLmpzb24oKSwgY29ycygpLCBncmFwaHFsRXhwcmVzcyh7IHNjaGVtYSB9KSk7XG5hcHAudXNlKCcvZ3JhcGhpcWwnLCBncmFwaGlxbEV4cHJlc3Moe1xuICBlbmRwb2ludFVSTDogJy9ncmFwaHFsJyxcbn0pKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG5cbmFwcC5nZXQoJy9sb2dpbicsIChyZXEsIHJlcykgPT4ge1xuICBDaGVja1Bhc3MocmVxLCByZXMpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVyZ2UtZ3JhcGhxbC1zY2hlbWFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9