(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mygames_mygames_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mygames/mygames.component */ "./src/app/mygames/mygames.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'game/:id/:context',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    },
    {
        path: 'mygames/:id',
        component: _mygames_mygames_component__WEBPACK_IMPORTED_MODULE_2__["MyGamesComponent"]
    },
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mygames_mygames_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mygames/mygames.component */ "./src/app/mygames/mygames.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generic_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generic-filter.pipe */ "./src/app/generic-filter.pipe.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mygames/toolbar.component */ "./src/app/mygames/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mygames_mygames_component__WEBPACK_IMPORTED_MODULE_3__["MyGamesComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileDialog"],
                _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["CreateGameDialog"],
                _generic_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["GenericFilterPipe"],
                _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"]
            ],
            providers: [{ provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"], useFactory: getAuthServiceConfigs }],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
            entryComponents: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileDialog"], _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["CreateGameDialog"]]
        })
    ], AppModule);
    return AppModule;
}());

// Configs
function getAuthServiceConfigs() {
    var config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]('462871257136-hedggfdor0mchtgschjj2fuv4dfphamk.apps.googleusercontent.com')
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-detail */ "./src/app/game-detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.gameList = null;
        this.gameData = new _game_detail__WEBPACK_IMPORTED_MODULE_1__["GameData"]();
        this.userList = [];
    }
    DataService.prototype.getGameDetails = function (userID) {
        this.gameList = [];
        if (userID === 'kavitha') {
            return this.gameList;
        }
        this.gameList.push({
            active: false,
            gameID: 'ID113',
            players: ['kavi5712', 'Priya', 'Bank'],
            active_since: new Date('2018-08-10')
        });
        this.gameList.push({
            active: false,
            gameID: 'ID123',
            players: ['kavitha', 'Priya', 'kavi5712', 'Bank'],
            active_since: new Date('2018-03-10')
        });
        this.gameList.push({
            active: false,
            gameID: 'ID143',
            players: ['kavitha', 'Priya', 'kavi5712', 'kavin', 'Bank'],
            active_since: new Date('2018-02-15')
        });
        return this.gameList;
    };
    DataService.prototype.getBoard = function (gameID) {
        this.gameData.gameInfo = {
            active: false,
            gameID: 'ID123',
            players: ['kavitha', 'Priya', 'kavi5712', 'Bank'],
            active_since: new Date('2018-03-10')
        };
        this.gameData.players = [{
                playerID: 'kavi5712',
                balance: 200
            },
            {
                playerID: 'Priya',
                balance: 250
            },
            {
                playerID: 'Bank',
                balance: 2500
            }
        ];
        this.gameData.banker = 'kavi5712';
        this.gameData.logs = [{
                from: 'Bank',
                to: 'Priya',
                amount: 1500,
                timestamp: new Date('2018-08-09')
            },
            {
                from: 'Bank',
                to: 'kavi5712',
                amount: 1500,
                timestamp: new Date('2018-08-09')
            }];
        return this.gameData;
    };
    DataService.prototype.checkAvailability = function (userID) {
        var response = new Promise(function (resolve, reject) {
            if ((userID === '') || (userID === undefined)) {
                reject('UserID cannot be empty');
            }
            else {
                resolve(true);
            }
        });
        return response;
    };
    DataService.prototype.createProfile = function (userID) {
        var _this = this;
        var response = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.userList.push(userID);
                resolve(true);
            }, 2000);
        });
        return response;
    };
    DataService.prototype.findUserID = function (userData) {
        return null;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/game-detail.ts":
/*!********************************!*\
  !*** ./src/app/game-detail.ts ***!
  \********************************/
/*! exports provided: GameData, Transaction, Player, GameInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInfo", function() { return GameInfo; });
var GameData = /** @class */ (function () {
    function GameData() {
    }
    return GameData;
}());

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());

var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());

var GameInfo = /** @class */ (function () {
    function GameInfo() {
    }
    return GameInfo;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group>\n\t<mat-tab *ngFor='let player of gameDetail.players | genericFilter: player:\"playerID\":thisPlayer:true' (click)= \"switchContextTo(thisPlayer)\" label={{player.playerID}}>\t\n\t\t<h4>Balance: {{player.balance}}</h4>\t\t\n\t</mat-tab>\n\t<mat-tab *ngFor='let player of gameDetail.players | genericFilter: player:\"playerID\":\"Bank\":true'  (click)= \"switchContextTo('Bank')\" label={{player.playerID}}>\t\n\t\t<h4>Balance: {{player.balance}}</h4>\t\t\n\t</mat-tab>\n</mat-tab-group>  \n\n<mat-card>\n\t\t<mat-card-header>\n\t\t\t\t<mat-card-title><b>Transfer</b></mat-card-title>\n\t\t</mat-card-header>\n\t\t<mat-card-content >\n\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t<mat-tab *ngFor='let player of gameDetail.players | genericFilter : \"player\":context:false' label={{player.playerID}}>\t\n\t\t\t\t\t\t\t\t<h4 >{{player.balance}}</h4>\t\t\n\t\t\t\t\t\t</mat-tab>\n\t\t\t\t</mat-tab-group> \n\t\t</mat-card-content>\t\t\t\t\t\t\n</mat-card>\t\n<mat-card>\n<mat-card-header>\n\t\t<mat-card-title><b>Transactions</b></mat-card-title>\n</mat-card-header>\n<mat-card-content>\t\t\t\t\t\t\t\t\t\n\t<ul *ngFor='let log of gameDetail.logs' >\t\n\t\t<p>{{log.timestamp.toLocaleString()}} : {{log.to}} received {{log.amount}} from {{log.from}}</p>\n\t</ul>\t\t\t\t\n</mat-card-content>\t\n</mat-card>\t\t\t"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (obj) {
            _this.pathObj = obj;
            _this.gameID = _this.pathObj.params.id;
            _this.gameDetail = _this.dataService.getBoard(_this.gameID);
            _this.thisPlayer = _this.pathObj.params.context;
            if (_this.gameDetail.banker === _this.thisPlayer) {
                _this.context = _this.thisPlayer;
            }
            else {
                _this.context = null;
            }
        });
    };
    GameComponent.prototype.switchContextTo = function (toContext) {
        this.context = toContext;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")],
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/generic-filter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/generic-filter.pipe.ts ***!
  \****************************************/
/*! exports provided: GenericFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericFilterPipe", function() { return GenericFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenericFilterPipe = /** @class */ (function () {
    function GenericFilterPipe() {
    }
    GenericFilterPipe.prototype.transform = function (allObject, param, key, match) {
        if (match === void 0) { match = true; }
        if (match === true) {
            return allObject.filter(function (obj) { return obj[param] === key; });
        }
        else {
            return allObject.filter(function (obj) { return obj[param] !== key; });
        }
    };
    GenericFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'genericFilter'
        })
    ], GenericFilterPipe);
    return GenericFilterPipe;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(socialAuthService) {
        this.socialAuthService = socialAuthService;
        this.socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
    }
    LoginService.prototype.authenticate = function () {
        return this.socialAuthService.signIn(this.socialPlatformProvider);
    };
    LoginService.prototype.getUser = function () {
        return this.socialAuthService.authState;
    };
    LoginService.prototype.logout = function () {
        this.socialAuthService.signOut().then(function (logoutdata) {
            console.log('Signing out..');
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.payments {\t\n    position: relative;\n    right:50%;\n    left: 30%;\n    top: 50.97%;\n    bottom: 45.43%;   \n    height: 3.6%;\twidth: 41.87%;\tcolor: #11BA78;\tfont-family: \"Arial Rounded MT Bold\";\tfont-size: 16px;\tletter-spacing: 10px;\tline-height: 24px;}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class='mat-app-background'>\n<div class='payments'>\n  PAYMENTS\n</div>\n<button mat-raised-button color=\"primary\" (click) = 'googleLogin()'>Google Login</button>\n<button mat-raised-button color=\"primary\" (click) = 'fbLogin()' >FB Login</button>\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as oauth from 'oauth';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        console.log('googlelogin');
        var response = this.loginService.authenticate().then(function (response) {
            _this.router.navigate(['mygames', response.name], { replaceUrl: true });
        });
    };
    LoginComponent.prototype.fbLogin = function () {
        console.log('fblogin');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    height: 100%;\t\n    width: 100%;\n    position: absolute;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(loginService, router, dataService, ngZone) {
        this.loginService = loginService;
        this.router = router;
        this.dataService = dataService;
        this.ngZone = ngZone;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().subscribe(function (userData) {
            if (userData != null) {
                var userID_1 = _this.dataService.findUserID(userData);
                if (userID_1 != null) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['mygames', userID_1], { replaceUrl: true });
                    });
                }
                else {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['profile'], { replaceUrl: true });
                    });
                }
            }
            else {
                _this.ngZone.run(function () {
                    _this.router.navigate(['login'], { replaceUrl: true });
                });
            }
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mygames/create-game-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mygames/create-game-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 mat-dialog-title class='dialog_container'><mat-icon (click)=closeDialog()>close</mat-icon>Create new game</h1>\n    <div mat-dialog-content class='dialog_container'>\n        <p style=\"font-size : 14px;\">Game name</p>\n        <input placeholder= 'Fools day game' matInput [(ngModel)] = \"game_name\"/>\n    </div>\n    <span *ngIf=\"registering == 'nostart'\" mat-dialog-actions class='dialog_container'>\n            <button mat-raised-button color='primary' (click)=\"register(game_name)\">LET'S ROLL</button>\n            <span *ngIf='reason'>{{reason}}</span>\n    </span>\n    <span *ngIf=\"registering == 'start'\" mat-dialog-actions class='spinner'>\n            <mat-progress-spinner diameter='40'\n            color=\"accent\"\n            mode=\"indeterminate\">\n            </mat-progress-spinner>\n    </span>\n   \n</div> \n"

/***/ }),

/***/ "./src/app/mygames/create-join-game.component.css":
/*!********************************************************!*\
  !*** ./src/app/mygames/create-join-game.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mygames/mygames.component.css":
/*!***********************************************!*\
  !*** ./src/app/mygames/mygames.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nogame-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#monopoly-man{\n    margin-top: 30%;\n    margin-bottom: 5%;\n}\n\n.nogame{\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 24px;\n    text-align: center;\n    color: #AAAAAA;\n    padding: 1.5%;\n}\n\n#player_gist{\n    color: #AAAAAA;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 21px;\n}\n\n#game_id{\n    color: #EEEEEE;\t\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 30px;\n}"

/***/ }),

/***/ "./src/app/mygames/mygames.component.html":
/*!************************************************!*\
  !*** ./src/app/mygames/mygames.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toolbar context = \"MY GAMES\" > </toolbar>\n<mat-tab-group >\n\t<mat-tab label=\"Active\">\n\t\t<div class='nogame-container' *ngIf='(gameList|genericFilter:\"active\":true).length == 0'> \n\t\t\t\t<img id=\"monopoly-man\" src='../../assets/images/pictures/monopoly-man.png'/>\n\t\t\t\t<span class='nogame'>Start playing by tapping</span>\n\t\t\t\t<img src='../../assets/images/icons/add_new.png'/>\n\t\t\t\t<span class='nogame'>icon on top</span>\n\t\t</div>\n\t\t<mat-list>\n\t\t\t\t<mat-list-item *ngFor='let gameInfo of gameList|genericFilter:\"active\":true' routerLink='/game/{{gameInfo.gameID}}/{{thisPlayer}}'>\n\t\t\t\t\t<h4 mat-line id='game_id'>{{gameInfo.gameID}}</h4>\n\t\t\t\t\t<p mat-line id='player_gist'> \n\t\t\t\t\t\t<img style = 'margin-right: 1.5%;\n\t\t\t\t\t\tmargin-top: 1%;' src='../../assets/images/icons/player_icon.png'/>  You and \n\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length > 3\"> {{gameInfo.players.length - 2}} friends </span>\n\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length <= 3\">{{getPlayerGist(gameInfo.players)}}</span>\n\t\t\t\t\t\t<span style='float:right;' id='created_on'>{{gameInfo.active_since | date}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t</mat-list-item>\n\t\t</mat-list>\n\t</mat-tab>\n\t<mat-tab label=\"Completed\">\n\t\t\t<div class='nogame-container' *ngIf='(gameList|genericFilter:\"active\":false).length == 0'> \n\t\t\t\t\t<img id=\"monopoly-man\" src='../../assets/images/pictures/monopoly-man.png'/>\n\t\t\t\t\t<span class='nogame'>Start playing by tapping</span>\n\t\t\t\t\t<img src='../../assets/images/icons/add_new.png'/>\n\t\t\t\t\t<span class='nogame'>icon on top</span>\n\t\t\t</div>\n\t\t\t<mat-list>\n\t\t\t\t\t<mat-list-item *ngFor='let gameInfo of gameList|genericFilter:\"active\":false' routerLink='/game/{{gameInfo.gameID}}/{{thisPlayer}}'>\n\t\t\t\t\t\t<h4 mat-line id='game_id'>{{gameInfo.gameID}}</h4>\n\t\t\t\t\t\t<p mat-line id='player_gist'> \n\t\t\t\t\t\t\t<img style = 'margin-right: 1.5%;\n\t\t\t\t\t\t\tmargin-top: 1%;' src='../../assets/images/icons/player_icon.png'/> You and \n\t\t\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length > 3\"> {{gameInfo.players.length - 2}} friends </span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length <= 3\">{{getPlayerGist(gameInfo.players)}}</span>\n\t\t\t\t\t\t\t\t<span style='float:right;' id='created_on'>{{gameInfo.active_since | date}}</span> </p>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t</mat-list-item>\n\t\t\t</mat-list>\n\t</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/mygames/mygames.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mygames/mygames.component.ts ***!
  \**********************************************/
/*! exports provided: MyGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGamesComponent", function() { return MyGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyGamesComponent = /** @class */ (function () {
    function MyGamesComponent(dataService, route, loginService) {
        this.dataService = dataService;
        this.route = route;
        this.loginService = loginService;
    }
    MyGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userID = params.id;
            _this.gameList = _this.dataService.getGameDetails(userID);
            _this.loginService.getUser().subscribe(function (userData) { _this.userData = userData; });
            console.log(_this.gameList);
            _this.thisPlayer = userID;
        });
    };
    MyGamesComponent.prototype.getPlayerGist = function (playerList) {
        var _this = this;
        return playerList.filter(function (player) { return ((player !== _this.thisPlayer) && (player !== 'Bank')); });
    };
    MyGamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-games',
            template: __webpack_require__(/*! ./mygames.component.html */ "./src/app/mygames/mygames.component.html"),
            styles: [__webpack_require__(/*! ./mygames.component.css */ "./src/app/mygames/mygames.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], MyGamesComponent);
    return MyGamesComponent;
}());



/***/ }),

/***/ "./src/app/mygames/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/mygames/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #232C3D;\n    position: relative;\n    z-index: 2;\n    box-shadow: 0 2px 4px 0 #212431;\n}\n\n.context {\n    color:#11BA78;\n}\n\n.mat-menu-item{\n    color:#CCCCCC;\n    font-size: 16px;\n    font-weight: 600;\n\tline-height: 24px;\n}\n\n.profile_pic {\n    width: 30px;\n    border-radius: 50%;   \n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;    \n  }  "

/***/ }),

/***/ "./src/app/mygames/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/mygames/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='toolbar'>\n    <img class='profile_pic' [src]='profile_path'/>\n    <span class='context'>{{context}}</span>\n    <span [matMenuTriggerFor]=\"menu\" ><img class='add_new' src='../../assets/images/icons/add_new.png'/></span>\n</mat-toolbar>\n<mat-menu #menu=\"matMenu\">\n        <button (click) = 'createGame()' mat-menu-item>Create new game </button>\n        <mat-divider> </mat-divider>\n        <button (click) = 'joinGame()' mat-menu-item>Join existing game</button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/mygames/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mygames/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent, CreateGameDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameDialog", function() { return CreateGameDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(loginService, dialog) {
        this.loginService = loginService;
        this.dialog = dialog;
        this.profile_path = '../../assets/images/pictures/0.jpg';
        this.createGameOptions = {
            width: '80%',
            height: '40%',
            hasBackdrop: false,
            disableClose: true
        };
        this.context = '';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().subscribe(function (userData) { return _this.userData = userData; });
        this.profile_path = this.userData.image;
    };
    ToolbarComponent.prototype.createGame = function () {
        this.dialog.open(CreateGameDialog, this.createGameOptions);
    };
    ToolbarComponent.prototype.joinGame = function () {
        console.log('You joined');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "context", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/mygames/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/mygames/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());

var CreateGameDialog = /** @class */ (function () {
    function CreateGameDialog() {
        this.reason = '';
        this.registering = 'nostart';
    }
    CreateGameDialog.prototype.register = function (game_name) {
        console.log(game_name);
    };
    CreateGameDialog.prototype.ngOnInit = function () {
    };
    CreateGameDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-game-dialog',
            template: __webpack_require__(/*! ./create-game-dialog.component.html */ "./src/app/mygames/create-game-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-join-game.component.css */ "./src/app/mygames/create-join-game.component.css")]
        })
    ], CreateGameDialog);
    return CreateGameDialog;
}());



/***/ }),

/***/ "./src/app/profile/profile-dialog.css":
/*!********************************************!*\
  !*** ./src/app/profile/profile-dialog.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_pic {\n    width: 80%;\n    border-radius: 50%;   \n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;    \n  }  \n\n.dialog_container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}  \n\n.spinner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}"

/***/ }),

/***/ "./src/app/profile/profile-dialog.html":
/*!*********************************************!*\
  !*** ./src/app/profile/profile-dialog.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <h1 mat-dialog-title class='dialog_container'>Give yourself a cool player name</h1>\n    <div mat-dialog-content class='dialog_container'>\n        <span><img class='profile_pic' [src]='profile_path'/></span>  \n        <h3>{{userData.name}}</h3>\n        <p style=\"font-size : 14px;\">Player name should be 4 -12 characters long; no special characters and spaces allowed. </p>\n        <input placeholder= 'CoolJack' matInput [(ngModel)] = \"userID\"/>\n    </div>\n    <span *ngIf=\"registering == 'nostart'\" mat-dialog-actions class='dialog_container'>\n            <button mat-raised-button color='primary' (click)=\"register(userID)\" cdkFocusInitial>CONTINUE</button>\n            <span *ngIf='reason'>{{reason}}</span>\n    </span>\n    <span *ngIf=\"registering == 'start'\" mat-dialog-actions class='spinner'>\n            <mat-progress-spinner diameter='40'\n            color=\"accent\"\n            mode=\"indeterminate\">\n            </mat-progress-spinner>\n    </span>\n   \n</div> \n"

/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\t\n   color: #11BA78;\tfont-family: \"Arial Rounded MT Bold\";\tfont-size: 16px;\tletter-spacing: 10px;\tline-height: 24px;}\n\n  "

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class='welcome'>Welcome to Monopoly Payments</div>\n</body>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent, ProfileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDialog", function() { return ProfileDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dialog) {
        this.dialog = dialog;
        this.userID = null;
        this.dialogRef = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var dialogOptions = {
                width: '80%',
                height: '70%',
                hasBackdrop: false,
                disableClose: true,
            };
            _this.dialogRef = _this.dialog.open(ProfileDialog, dialogOptions);
        }, 20);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

var ProfileDialog = /** @class */ (function () {
    function ProfileDialog(dialogRef, dataService, router, loginService, ngZone) {
        this.dialogRef = dialogRef;
        this.dataService = dataService;
        this.router = router;
        this.loginService = loginService;
        this.ngZone = ngZone;
        this.reason = '';
        this.registering = 'nostart';
        this.format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        this.profile_path = '../../assets/images/pictures/0.jpg';
        this.userData = null;
    }
    ProfileDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().subscribe(function (userData) {
            _this.userData = userData;
            _this.profile_path = userData.image;
        });
    };
    ProfileDialog.prototype.register = function (userID) {
        var _this = this;
        if ((userID === '') || (userID === undefined)) {
            this.reason = 'User ID cannot be empty';
        }
        else if ((userID.length < 4) || (userID.length > 12)) {
            this.reason = 'Length must be between 4 - 12';
        }
        else if (this.format.test(userID)) {
            this.reason = 'Space & special characters not allowed';
        }
        else {
            this.dataService.checkAvailability(userID).then(function (valid) {
                if (valid) {
                    _this.registering = 'start';
                    _this.dataService.createProfile(userID).then(function (response) {
                        _this.dialogRef.close();
                        _this.ngZone.run(function () {
                            _this.router.navigate(['mygames', userID], { replaceUrl: true });
                        });
                    });
                }
            }).catch(function (err) { return _this.reason = err; });
        }
    };
    ProfileDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-dialog',
            template: __webpack_require__(/*! ./profile-dialog.html */ "./src/app/profile/profile-dialog.html"),
            styles: [__webpack_require__(/*! ./profile-dialog.css */ "./src/app/profile/profile-dialog.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ProfileDialog);
    return ProfileDialog;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/quadrisk-kannann/Quadrisk/monopoly-payments/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map