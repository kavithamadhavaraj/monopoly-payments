(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["CreateGameDialog"],
                _generic_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["GenericFilterPipe"],
                _mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production === 'true' ? true : false })
            ],
            providers: [
                { provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"], useFactory: getAuthServiceConfigs },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_10__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
            entryComponents: [_mygames_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["CreateGameDialog"]]
        })
    ], AppModule);
    return AppModule;
}());

// Configs
function getAuthServiceConfigs() {
    var config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].google_client_id)
        },
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].facebook_client_id)
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
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
    DataService.prototype.checkProfileAvailability = function (requested_userID) {
        var url = "/api/profile/availablity?userID=" + requested_userID;
        return this.http.get(url);
    };
    DataService.prototype.checkGameAvailability = function (gameName) {
        var response = new Promise(function (resolve, reject) {
            if ((gameName === '') || (gameName === undefined)) {
                reject('Game name cannot be empty');
            }
            else {
                resolve(true);
            }
        });
        return response;
    };
    DataService.prototype.createProfile = function (userID, userData) {
        var url = "/api/profile/create?userID=" + userID;
        return this.http.post(url, userData);
    };
    DataService.prototype.createGame = function (gameName) {
        var response = new Promise(function (resolve, reject) {
            setTimeout(function () {
                // this.userList.push(gameName);
                resolve(true);
            }, 2000);
        });
        return response;
    };
    DataService.prototype.findUserID = function (userData) {
        var url = "/api/profile/find?email=" + encodeURIComponent(userData.email);
        return this.http.get(url);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
        this.googleProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        this.facebookProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID;
        this.socialPlatformProvider = null;
    }
    LoginService.prototype.authenticate = function (provider) {
        if (provider === 'google') {
            this.socialPlatformProvider = this.googleProvider;
        }
        else if (provider === 'facebook') {
            this.socialPlatformProvider = this.facebookProvider;
        }
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

module.exports = "body{\n    background-image: url('transparent_background.png');\n}\n.flex_container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n}\nimg{\n    height: 20%;\n    width: 50%;\n    margin: 35%;\n}\nbutton{\n    margin: 4%;\n    height: 6.6%;\n    width: 90%;\n    border-radius: 4px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);\n    color: #FFFFFF;\n    font-size: 16px;\tfont-weight: 600;\t\n}\n#redbutton{\n    background-color: #EA4335;\n}\n#bluebutton{\n    background-color: #4267B2;\n}\nmat-icon{\n    float:left;\n    padding:2%;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class='flex_container'>\n<img src='../../assets/images/logo.png'/>\n<button mat-raised-button id='redbutton' (click) = 'googleLogin()'>\n        <mat-icon svgIcon='google-icon' style='transform: scale(1.3);'></mat-icon> SIGN IN USING GOOGLE\n</button>\n<button mat-raised-button id='bluebutton' (click) = 'fbLogin()' >\n        <mat-icon svgIcon='facebook-icon' style='transform: scale(1.3);'></mat-icon> SIGN IN USING FACEBOOK\n</button>\n</div>\n</body>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function LoginComponent(router, iconRegistry, loginService, sanitizer) {
        this.router = router;
        this.iconRegistry = iconRegistry;
        this.loginService = loginService;
        this.sanitizer = sanitizer;
        this.iconRegistry.addSvgIcon('google-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/google.svg'));
        this.iconRegistry.addSvgIcon('facebook-icon', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/fb.svg'));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        console.log('googlelogin');
        this.loginService.authenticate('google').then(function (response) {
            _this.router.navigate(['mygames', response.name], { replaceUrl: true });
        });
    };
    LoginComponent.prototype.fbLogin = function () {
        var _this = this;
        console.log('fblogin');
        this.loginService.authenticate('facebook').then(function (response) {
            _this.router.navigate(['mygames', response.name], { replaceUrl: true });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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
        console.log("Main");
        this.loginService.getUser().subscribe(function (userData) {
            if (userData != null) {
                var userID_1 = _this.dataService.findUserID(userData);
                console.log(userID_1);
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

/***/ "./src/app/mygames/create-game-dialog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/mygames/create-game-dialog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 5px;\n}\n\n.mat-error{\n    color: #f44336;\tfont-size: 12px;\tfont-style: italic;\tline-height: 18px;\n}\n\n.mat-hint{\n    color: #11BA78;\tfont-size: 12px;\tfont-style: italic;\tline-height: 18px;\n}\n\n.placeholder{\n    color:#CCCCCC;\n    font-weight: 600;\tline-height: 21px;\n}\n\nh1.mat-dialog-title{\n    padding-left: 5%;\n    padding-right: 5%;\n    color: #FFFFFF;\tfont-family: Barlow;\tfont-size: 16px;\tfont-weight: 600;\tline-height: 30px;\t\n}\n\n#register{\n    border-radius: 4px;\n    width:100%;\n    margin-top: 10%;\n}\n\n.flex_container{\n    display: flex;\n    flex-direction: column;\n    color: #cccccc;\t   \n    overflow: visible;    \n}\n\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{\n    margin-bottom: 28%;\n}\n\nmat-icon{\n    float:left;\n    padding:2%;\n    position: relative;\n    left: -10%;\n}"

/***/ }),

/***/ "./src/app/mygames/create-game-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mygames/create-game-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title ><mat-icon (click)=closeDialog() svgIcon='white-close' style='transform: scale(0.7);'></mat-icon>Create new game</h1>\n<div mat-dialog-content class='flex_container'>\n    <mat-form-field>\n        <input tabindex=\"0\" matInput #input minlength='4' maxlength=\"20\" [formControl]=\"gameName\">\n        <mat-placeholder class='placeholder'>Game name</mat-placeholder>\n        <span matSuffix>{{input.value?.length || 0}}/20</span>\n        <mat-error *ngIf=\"gameName.invalid\">\n            <img style=\"position:absolute;\" src='../../assets/icons/error.png'/>\n            <div style=\"margin-left:10%;\">{{getErrorMessage()}}</div>\n        </mat-error>\n        <mat-hint *ngIf=\"!gameName.invalid && available\"> \n            <img style=\"position:absolute;\" src='../../assets/icons/success.png'/>\n            <div style=\"margin-left:18%;  width: 100%;\">Game name available!</div>\n        </mat-hint>\n    </mat-form-field> \n</div>\n<span *ngIf=\"registering == 'start'\" mat-dialog-actions class='spinner flex_container'>\n        <mat-progress-spinner diameter='40' color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n</span>\n<span *ngIf=\"registering == 'nostart'\" mat-dialog-actions class='flex_container'>\n        <button mat-raised-button id='register' color='primary' [disabled]='!gameName.valid' (click)= \"register(input.value)\"> LET'S ROLL </button>           \n</span>\n\n\n"

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

module.exports = "<toolbar context = \"MY GAMES\" > </toolbar>\n<mat-tab-group >\n\t<mat-tab label=\"Active\">\n\t\t<div class='nogame-container' *ngIf='(gameList|genericFilter:\"active\":true).length == 0'> \n\t\t\t\t<img id=\"monopoly-man\" src='../../assets/images/monopoly-man.png'/>\n\t\t\t\t<span class='nogame'>Start playing by tapping</span>\n\t\t\t\t<img src='../../assets/icons/add_new.png'/>\n\t\t\t\t<span class='nogame'>icon on top</span>\n\t\t</div>\n\t\t<mat-list>\n\t\t\t\t<mat-list-item *ngFor='let gameInfo of gameList|genericFilter:\"active\":true' routerLink='/game/{{gameInfo.gameID}}/{{thisPlayer}}'>\n\t\t\t\t\t<h4 mat-line id='game_id'>{{gameInfo.gameID}}</h4>\n\t\t\t\t\t<p mat-line id='player_gist'> \n\t\t\t\t\t\t<img style = 'margin-right: 1.5%;\n\t\t\t\t\t\tmargin-top: 1%;' src='../../assets/icons/player_icon.png'/>  You and \n\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length > 3\"> {{gameInfo.players.length - 2}} friends </span>\n\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length <= 3\">{{getPlayerGist(gameInfo.players)}}</span>\n\t\t\t\t\t\t<span style='float:right;' id='created_on'>{{gameInfo.active_since | date}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t</mat-list-item>\n\t\t</mat-list>\n\t</mat-tab>\n\t<mat-tab label=\"Completed\">\n\t\t\t<div class='nogame-container' *ngIf='(gameList|genericFilter:\"active\":false).length == 0'> \n\t\t\t\t\t<img id=\"monopoly-man\" src='../../assets/images/monopoly-man.png'/>\n\t\t\t\t\t<span class='nogame'>Start playing by tapping</span>\n\t\t\t\t\t<img src='../../assets/icons/add_new.png'/>\n\t\t\t\t\t<span class='nogame'>icon on top</span>\n\t\t\t</div>\n\t\t\t<mat-list>\n\t\t\t\t\t<mat-list-item *ngFor='let gameInfo of gameList|genericFilter:\"active\":false' routerLink='/game/{{gameInfo.gameID}}/{{thisPlayer}}'>\n\t\t\t\t\t\t<h4 mat-line id='game_id'>{{gameInfo.gameID}}</h4>\n\t\t\t\t\t\t<p mat-line id='player_gist'> \n\t\t\t\t\t\t\t<img style = 'margin-right: 1.5%;\n\t\t\t\t\t\t\tmargin-top: 1%;' src='../../assets/icons/player_icon.png'/> You and \n\t\t\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length > 3\"> {{gameInfo.players.length - 2}} friends </span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"gameInfo.players.length <= 3\">{{getPlayerGist(gameInfo.players)}}</span>\n\t\t\t\t\t\t\t\t<span style='float:right;' id='created_on'>{{gameInfo.active_since | date}}</span> </p>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t</mat-list-item>\n\t\t\t</mat-list>\n\t</mat-tab>\n</mat-tab-group>\n"

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

module.exports = ".toolbar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #232C3D;\n    position: relative;\n    z-index: 2;\n    box-shadow: 0 2px 4px 0 #212431;\n}\n\n.context {\n    color:#11BA78;\n}\n\n.mat-menu-item{\n    color:#CCCCCC;\n    font-size: 14px;\n    font-weight: 600;\n\tline-height: 24px;\n}\n\n.profile_pic {\n    width: 30px;\n    border-radius: 50%;   \n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;    \n  }  "

/***/ }),

/***/ "./src/app/mygames/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/mygames/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='toolbar'>\n    <img class='profile_pic' [src]='profile_path'/>\n    <span class='context'>{{context}}</span>\n    <span [matMenuTriggerFor]=\"menu\" ><img class='add_new' src='../../assets/icons/add_new.png'/></span>\n</mat-toolbar>\n<mat-menu #menu=\"matMenu\">\n        <button (click) = 'createGame()' mat-menu-item>Create new game </button>\n        <mat-divider> </mat-divider>\n        <button (click) = 'joinGame()' mat-menu-item>Join existing game</button>\n</mat-menu>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
        this.profile_path = '../../assets/images/0.jpg';
        this.createGameOptions = {
            hasBackdrop: true,
            disableClose: true,
            closeOnNavigation: true,
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
    function CreateGameDialog(dialogRef, ngZone, dataService, router, iconRegistry, sanitizer) {
        this.dialogRef = dialogRef;
        this.ngZone = ngZone;
        this.dataService = dataService;
        this.router = router;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.valid = false;
        this.registering = 'nostart';
        this.available = false;
        this.gameName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[A-Z\\a-z\\d]+$')]);
        this.iconRegistry.addSvgIcon('white-close', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/close-white.svg'));
        this.iconRegistry.addSvgIcon('dice', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/dice.svg'));
    }
    CreateGameDialog.prototype.ngOnInit = function () {
    };
    CreateGameDialog.prototype.getErrorMessage = function () {
        if (this.gameName.valid === true) {
            this.valid = true;
        }
        return this.gameName.hasError('required') ? 'Game name cannot be empty' :
            this.gameName.hasError('minlength') ? 'Game name must be at least 4 characters long' :
                this.gameName.hasError('pattern') ? 'Space & special characters not allowed' :
                    this.gameName.hasError('unavailable') ? 'Game name not available' :
                        this.gameName.hasError('tryagain') ? 'Server error occured. Try again.' :
                            null;
    };
    CreateGameDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    CreateGameDialog.prototype.register = function (gameName) {
        var _this = this;
        console.log(this.registering);
        this.gameName.markAsTouched();
        if (this.getErrorMessage() == null) {
            this.dataService.checkGameAvailability(gameName).then(function (available) {
                _this.available = available;
                if (_this.available === true) {
                    _this.registering = 'start';
                    _this.dataService.createGame(gameName).then(function (response) {
                        console.log(response);
                        _this.dialogRef.close();
                    });
                }
                else {
                    _this.gameName.setErrors({ 'unavailable': true });
                }
            }).catch(function (err) { return _this.gameName.setErrors({ 'tryagain': true }); });
        }
    };
    CreateGameDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-game-dialog',
            template: __webpack_require__(/*! ./create-game-dialog.component.html */ "./src/app/mygames/create-game-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-game-dialog.component.css */ "./src/app/mygames/create-game-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], CreateGameDialog);
    return CreateGameDialog;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-image: url('transparent_background.png');\n}\n\n.welcome {\t\n   margin-top: 10%;\n   margin-bottom: 5%;\n   color: #11BA78;\tfont-family: Barlow;\n   font-size: 20px;\tfont-weight: 600;\tline-height: 30px;\ttext-align: center;}\n\n.profile_pic {\n    width: 80%;\n    border-radius: 50%;   \n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;  \n    margin-top: 8%;\n  }\n\n.flex_container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    color: #cccccc;\t   \n    overflow :'auto';\n}\n\n.card_container{\n    background-color: #232C3D;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);\n   \tborder-radius: 4px;\n    margin-left:10%;\n    margin-right:10%;\n    margin-top:5%;\n    /* Makes the card scrollable on smaller sized screens */\n    overflow: auto;\n\n}\n\nh1.flex_container.mat-card-title{\n    padding-top: 10%;\n    padding-left: 5%;\n    padding-right: 5%;\n    color: #FFFFFF;\tfont-family: Barlow;\tfont-size: 16px;\tfont-weight: 600;\tline-height: 24px;\ttext-align: center;   \n}\n\nh3{\n    margin-top: 0%\n}\n\n.spinner{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 30px;\n}\n\n#register{\n    border-radius: 4px;\n    width:68%;\n    margin-top:15%;\n}\n\n.mat-error{\n    margin-top:5%;\n    color: #f44336;\tfont-size: 12px;\tfont-style: italic;\tline-height: 18px;\n}\n\n.mat-hint{\n    margin-top:5%;\n    color: #11BA78;\tfont-size: 12px;\tfont-style: italic;\tline-height: 18px;\n}\n\n.placeholder{\n    color:#CCCCCC;\n    font-weight: 600;\tline-height: 21px;\n}\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class='welcome'>Welcome to Monopoly Payments</div>\n  <mat-card class='card_container'>\n    <h1 mat-card-title class='flex_container'>Give yourself a cool player name</h1>\n    <div mat-card-content class='flex_container'>\n        <span><img class='profile_pic' [src]='profile_path'/></span>  \n        <h3>{{userData.name}}</h3>\n        <mat-form-field>\n            <input tabindex=\"0\" matInput #input minlength='4' maxlength=\"15\" [formControl]=\"userID\">\n            <mat-placeholder class='placeholder'>Player name</mat-placeholder>\n            <span matSuffix>{{input.value?.length || 0}}/15</span>\n            <mat-error *ngIf=\"userID.invalid\">\n                <img style=\"position:absolute;\" src='../../assets/icons/error.png'/>\n                <div style=\"margin-left:10%;\">{{getErrorMessage()}}</div>\n            </mat-error>\n            <mat-hint *ngIf=\"!userID.invalid && available\"> \n              <img style=\"position:absolute;\" src='../../assets/icons/success.png'/>\n              <div style=\"margin-left:18%;  width: 100%;\">Player name available!</div>\n            </mat-hint>\n        </mat-form-field> \n    </div>\n    <span *ngIf=\"registering == 'nostart'\" mat-card-actions class='flex_container'>\n        <button id='register' mat-raised-button color='primary' [disabled]='!userID.valid' (click)=\"register(input.value)\">CONTINUE</button>\n    </span>\n    <span *ngIf=\"registering == 'start'\" mat-card-actions class='spinner'>\n            <mat-progress-spinner diameter='40'\n            color=\"accent\"\n            mode=\"indeterminate\">\n            </mat-progress-spinner>\n    </span>\n    </mat-card >\n</body>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function ProfileComponent(router, ngZone, loginService, dataService) {
        this.router = router;
        this.ngZone = ngZone;
        this.loginService = loginService;
        this.dataService = dataService;
        this.profile_path = '../../assets/images/0.jpg';
        this.userData = null;
        this.registering = 'nostart';
        this.valid = false;
        this.available = false;
        this.userID = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[A-Z\\a-z\\d]+$')]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().subscribe(function (userData) {
            _this.userData = userData;
            _this.profile_path = userData.image;
        });
    };
    ProfileComponent.prototype.getErrorMessage = function () {
        if (this.userID.valid === true) {
            this.valid = true;
        }
        return this.userID.hasError('required') ? 'Player name cannot be empty' :
            this.userID.hasError('minlength') ? 'Player name must be at least 4 characters long' :
                this.userID.hasError('pattern') ? 'Space & special characters not allowed' :
                    this.userID.hasError('unavailable') ? 'Player name not available' :
                        this.userID.hasError('tryagain') ? 'Server error occured. Try again.' :
                            null;
    };
    ProfileComponent.prototype.register = function (userID) {
        var _this = this;
        this.userID.markAsTouched();
        if (this.getErrorMessage() == null) {
            this.dataService.checkProfileAvailability(userID).subscribe(function (available) {
                _this.available = available;
                if (_this.available === true) {
                    _this.registering = 'start';
                    _this.dataService.createProfile(userID, _this.userData).subscribe(function (response) {
                        if (response._id != null) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['mygames', userID], { replaceUrl: true });
                            });
                        }
                    });
                }
                else {
                    _this.userID.setErrors({ 'unavailable': true });
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
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
    production: 'false',
    google_client_id: '462871257136-hedggfdor0mchtgschjj2fuv4dfphamk.apps.googleusercontent.com',
    facebook_client_id: '261162644517129'
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production === 'true') {
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