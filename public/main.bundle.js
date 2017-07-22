webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\ninput{\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  font-size: 16px;\r\n  padding: 4px 10px;\r\n  margin-bottom: 15px;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc;\r\n  transition: border-bottom .3s;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput:focus{\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\nbutton[type=\"submit\"]{\r\n  background: #78bdf1;\r\n  border: none;\r\n  color: white;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  padding: 5px 10px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  cursor: pointer;\r\n  opacity: .9;\r\n}\r\nbutton[type=\"submit\"]:hover{\r\n  opacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add Pin</h2>\n\n<form (submit)=\"onAddPin()\">\n  <input (input)=\"onChange()\" placeholder=\"Image Link\" type=\"text\" name=\"imageLink\" [(ngModel)]=\"imageLink\">\n  <input placeholder=\"Description\" type=\"text\" name=\"description\" [(ngModel)]=\"description\">\n\n  <button type=\"submit\">Add Pin</button>\n</form>\n\n<br>\n\n<h3>Result:</h3>\n<app-pin [pin]=\"{imageLink: imageLinkChecked, description: description, postedBy: 'Me'}\"></app-pin>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pin_service__ = __webpack_require__("../../../../../src/app/pin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = (function () {
    function AddComponent(pinService, router) {
        this.pinService = pinService;
        this.router = router;
        this.imageLink = "";
        this.imageLinkChecked = "http://www.ohgizmo.com/wp-content/uploads/2008/03/broken_image_necklace.jpg";
        this.description = "";
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onAddPin = function () {
        var _this = this;
        if (this.imageLink !== "" && this.description !== "") {
            this.pinService.addPin(this.imageLinkChecked, this.description).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(["/added"]);
                }
            });
        }
    };
    AddComponent.prototype.onChange = function () {
        var _this = this;
        this.imageExists(this.imageLink, function (exists) {
            if (exists) {
                _this.imageLinkChecked = _this.imageLink;
            }
            else {
                _this.imageLinkChecked = "http://www.ohgizmo.com/wp-content/uploads/2008/03/broken_image_necklace.jpg";
            }
        });
    };
    AddComponent.prototype.imageExists = function (url, callback) {
        var img = new Image();
        img.onload = function () { return callback(true); };
        img.onerror = function () { return callback(false); };
        img.src = url;
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddComponent);

var _a, _b;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"limited-width\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.checkLogin().subscribe(function (data) {
            if (data.success) {
                _this.authService.setLoggedIn(true, data);
            }
            else {
                _this.authService.setLoggedIn(false);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pin_service__ = __webpack_require__("../../../../../src/app/pin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__ = __webpack_require__("../../../../angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pin_pin_component__ = __webpack_require__("../../../../../src/app/pin/pin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_10__overview_overview_component__["a" /* OverviewComponent */] },
    { path: "add", component: __WEBPACK_IMPORTED_MODULE_11__add_add_component__["a" /* AddComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_10__overview_overview_component__["a" /* OverviewComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pin_pin_component__["a" /* PinComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__["a" /* MasonryModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__pin_service__["a" /* PinService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedIn = false;
        this.name = "";
    }
    AuthService.prototype.checkLogin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.get("/auth/status", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.setLoggedIn = function (bool, data) {
        this.loggedIn = bool;
        this.name = bool ? data.name : "";
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.get("/auth/logout", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width{\r\n  width: 100%;\r\n  height: 55px;\r\n  background: #727cff;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.5);\r\n}\r\n\r\n.navbar{\r\n  padding: 15px 30px;\r\n}\r\n\r\n.title{\r\n  float: left;\r\n}\r\n\r\n.title a{\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,.5);\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n.nav{\r\n  float: right;\r\n  margin-top: -5px;\r\n}\r\n\r\n.nav img{\r\n  height: 35px;\r\n  width: 140px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px rgba(0,0,0,.3);\r\n}\r\n.nav img:hover{\r\n  box-shadow: .4px .4px .4px rgba(0,0,0,.3);\r\n}\r\n\r\ni.fa{\r\n  color: white;\r\n  position: relative;\r\n  top: 8px;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n}\r\n\r\na, a:hover, a:active, a:visited{\r\n  text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\n  <div class=\"limited-width navbar\">\n    <div class=\"title\">\n      <a routerLink=\"/\">Pinterest Clone</a>\n    </div>\n\n    <div class=\"nav\">\n      <!-- Login button -->\n      <a *ngIf=\"!authService.isLoggedIn()\" href=\"/auth/twitter\">\n        <img src=\"assets/twitter.png\" alt=\"Log in with twitter\">\n      </a>\n\n      <!-- Link to \"My pins\" -->\n      <i *ngIf=\"authService.isLoggedIn()\" class=\"fa fa-user-circle\" (click)=\"onFilter()\"></i>\n      \n      <!-- Link to AddComponent -->\n      <a routerLink=\"/add\">\n        <i *ngIf=\"authService.isLoggedIn()\" class=\"fa fa-plus-square\"></i>\n      </a>\n\n      <!-- Logout link -->\n      <i *ngIf=\"authService.isLoggedIn()\" (click)=\"onLogout()\" class=\"fa fa-sign-out logout\"></i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pin_service__ = __webpack_require__("../../../../../src/app/pin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, pinService) {
        this.authService = authService;
        this.pinService = pinService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            if (data.success) {
                _this.authService.setLoggedIn(false);
            }
        });
    };
    NavbarComponent.prototype.onFilter = function () {
        this.pinService.filterPinsEvent.next(this.authService.name);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__pin_service__["a" /* PinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__pin_service__["a" /* PinService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav{\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.nav .all{\r\n  color: #444;\r\n  cursor: pointer;\r\n}\r\n.nav .all:hover{\r\n  color: black;\r\n}\r\n\r\n.nav .filter{\r\n  color: #111;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n  <span class=\"all\" (click)=\"filterByUser()\">All pins</span>\r\n  <span class=\"filter\"> {{ filter }} </span>\r\n</div>\r\n\r\n<div #grid>\r\n  <app-pin [id]=\"pin._id\" [attr.data-groups]=\"pin.postedBy\" class=\"pin\" *ngFor=\"let pin of pinService.pins.reverse()\" (userClick)=\"filterByUser($event)\" [pin]=\"pin\"></app-pin> \r\n</div>\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pin_service__ = __webpack_require__("../../../../../src/app/pin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shufflejs__ = __webpack_require__("../../../../shufflejs/dist/shuffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shufflejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shufflejs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = (function () {
    function OverviewComponent(pinService, router) {
        this.pinService = pinService;
        this.router = router;
        this.filter = "";
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get pins
        if (this.pinService.pins.length == 0 || this.router.url == "/added") {
            this.pinService.pins = [];
            this.pinService.getAllPins().subscribe(function (data) {
                if (data.success) {
                    _this.pinService.pins = data.pins;
                }
            });
        }
        // Inelegant solution to avoid adding all pins once loaded
        var x = setInterval(function () {
            if (_this.pinService.pins.length > 0) {
                _this.shuffle = new __WEBPACK_IMPORTED_MODULE_3_shufflejs__(_this.grid.nativeElement, {
                    itemSelector: ".pin",
                    delimeter: ","
                });
                _this.pinService.overviewReady = true;
                // Subscribe to navbar emitted event
                _this.pinService.filterPinsEvent.subscribe(function (user) {
                    _this.filterByUser(user);
                });
                // Subscribe to delete pin event
                _this.pinService.removePinEvent.subscribe(function (id) {
                    var el = document.getElementById(id);
                    _this.shuffle.remove([el]);
                });
                clearInterval(x);
            }
        }, 10);
    };
    OverviewComponent.prototype.filterByUser = function (user) {
        this.filter = user ? "/ " + user : "";
        this.shuffle.filter(user || "");
    };
    return OverviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* ViewChild */])("grid"),
    __metadata("design:type", Object)
], OverviewComponent.prototype, "grid", void 0);
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OverviewComponent);

var _a, _b;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/pin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PinService = (function () {
    function PinService(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.filterPinsEvent = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.removePinEvent = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.overviewReady = false;
        this.pins = [];
        this.filterPinsEvent.subscribe(function (data) {
            if (_this.router.url === "/add") {
                _this.overviewReady = false;
                _this.router.navigate(["/"]);
                var x_1 = setInterval(function () {
                    if (_this.overviewReady) {
                        _this.filterPinsEvent.next(data);
                        clearInterval(x_1);
                    }
                }, 10);
            }
        });
    }
    PinService.prototype.getAllPins = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.get("/api/pins", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinService.prototype.addPin = function (imageLink, description) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var body = {
            imageLink: imageLink,
            description: description
        };
        return this.http.post("/api/pin", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PinService.prototype.removePin = function (pin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.delete("/api/pin/" + pin._id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return PinService;
}());
PinService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PinService);

var _a, _b, _c;
//# sourceMappingURL=pin.service.js.map

/***/ }),

/***/ "../../../../../src/app/pin/pin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n  float: left;\r\n  background: rgba(114,124,255,.2);\r\n  width: 250px;\r\n  box-shadow: 2px 2px 4px rgba(114,124,255,.5), 0 0 .5px 1px rgba(114,124,255,.5);\r\n  font-family: sans-serif;\r\n  margin: 10px;\r\n}\r\n\r\n.img-container img{\r\n  width: 250px;\r\n}\r\n\r\n.description-container{\r\n  padding: 8px 10px;\r\n  text-align: center;\r\n}\r\n.description{\r\n  color: #333;\r\n}\r\n\r\n.user-container{\r\n  padding-top: 2px;\r\n  padding-right: 5px;\r\n  background: #727cff;\r\n  height: 15px;\r\n}\r\n.user{\r\n  float: right;\r\n  font-size: 10px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.remove{\r\n  font-size: 10px;\r\n  color: white;\r\n  margin-left: 6px;\r\n  position: relative;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pin/pin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"img-container\">\n    <img [src]=\"pin.imageLink\" alt=\"\">\n  </div>\n  \n  <div class=\"description-container\">\n    <span class=\"description\">\n      {{ pin.description}}\n    </span>\n  </div>\n  \n  <div class=\"user-container\">\n    <i *ngIf=\"authService.name == pin.postedBy\" (click)=\"onRemovePin()\" class=\"fa fa-trash remove\"></i>\n    <span (click)=\"onUserClicked()\" class=\"user\">@{{ pin.postedBy }}</span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pin/pin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pin_service__ = __webpack_require__("../../../../../src/app/pin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PinComponent = (function () {
    function PinComponent(pinService, authService) {
        this.pinService = pinService;
        this.authService = authService;
        this.userClick = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
    }
    PinComponent.prototype.ngOnInit = function () {
    };
    PinComponent.prototype.onUserClicked = function () {
        this.userClick.emit(this.pin.postedBy);
    };
    PinComponent.prototype.onRemovePin = function () {
        var _this = this;
        this.pinService.removePin(this.pin).subscribe(function (data) {
            if (data.success) {
                _this.pinService.removePinEvent.next(_this.pin._id);
            }
        });
    };
    return PinComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], PinComponent.prototype, "pin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], PinComponent.prototype, "userClick", void 0);
PinComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* Component */])({
        selector: 'app-pin',
        template: __webpack_require__("../../../../../src/app/pin/pin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pin/pin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pin_service__["a" /* PinService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], PinComponent);

var _a, _b, _c;
//# sourceMappingURL=pin.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map