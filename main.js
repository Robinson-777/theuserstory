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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"title-center\" style=\"color: rgb(22, 127, 146);font-size: bold;font-size: 35px\">{{header}}</span>\n</mat-toolbar>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  <!-- userId Column -->\n  <ng-container matColumnDef=\"userId\">\n    <th mat-header-cell style=\"width:5%;\" *matHeaderCellDef mat-sort-header> UserId </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <span class=\"badge\">{{element.userId}}</span>\n      <img style=\"height: 40px;width: 40px\" src=\"https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/Edit-Male-User.png\"\n        alt=\"Userimg\"> </td>\n  </ng-container>\n\n  <!-- id Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell style=\"width:5%;\" fxFlex=\"50px\" *matHeaderCellDef mat-sort-header> Id </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <span class=\"badge\" style=\"margin-top:-15px;\"> {{element.id}}</span>\n    </td>\n  </ng-container>\n\n  <!-- title Column -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell style=\"width:20%;\" *matHeaderCellDef mat-sort-header> Title </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <b style=\" color: #024457;\">{{element.title}} </b>\n    </td>\n  </ng-container>\n\n  <!-- body Column -->\n  <ng-container matColumnDef=\"body\">\n    <th mat-header-cell style=\"width:60%;\" *matHeaderCellDef mat-sort-header> Story </th>\n    <td mat-cell *matCellDef=\"let element\" class=\"story\">\n      <span> {{element.body}} </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-toolbar *ngIf=\"!dataSource.data.length\">\n  <span class=\"title-center\" style=\"color:orangered;font-size: bold;font-size: 35px\">No Data Found</span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 98%;\n  margin: 0 auto; }\n\n:host th.mat-sort-header-sorted {\n  color: black; }\n\n:host .title-center {\n  margin: 0 auto; }\n\n:host .mat-table .mat-row:nth-child(even) {\n  background-color: #eaf0f5; }\n\n:host .mat-header-row {\n  background-color: #167f92; }\n\n:host .mat-header-cell {\n  font-weight: bold;\n  font-size: 15px;\n  color: #fff; }\n\n:host ::ng-deep .mat-sort-header-arrow {\n  color: yellow !important; }\n\n:host .badge {\n  padding: 5px;\n  position: absolute;\n  background: #167F92;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: bold;\n  margin-left: -5px;\n  margin-top: 5px; }\n\n:host .story {\n  color: #024457;\n  padding: 10px 24px 10px 10px;\n  line-height: 28px;\n  font-size: 15px; }\n\n:host td.mat-cell,\n:host td.mat-footer-cell,\n:host th.mat-header-cell {\n  border: 1px solid #D9E4E6;\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        var _this = this;
        this.service = service;
        this.header = 'The User Story';
        this.displayedColumns = ['userId', 'id', 'title', 'body'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.toggleView = false;
        this.service.fnPageSourcedata().then(function (data) {
            if (data && data.length > 0) {
                _this.dataSource.data = data;
                // this.cpyDataSource = data.slice();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.dataSource.sort = this.sort;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sorting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.WebApiUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    AppService.prototype.fnPageSourcedata = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.WebApiUrl)
                .subscribe(function (response) {
                if (response) {
                    resolve(response);
                }
            }, reject);
        });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());

// {
//   providedIn: 'root'
// }
// http://jsonplaceholder.typicode.com/posts


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

module.exports = __webpack_require__(/*! C:\Users\RobinsonM\Desktop\accianlabs\theuserstory\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map