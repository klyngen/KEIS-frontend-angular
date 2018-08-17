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

/***/ "./src/app/Models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/Models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
var Alert = /** @class */ (function () {
    function Alert(classType, title, description) {
        this.title = title;
        this.description = description;
        this.classType = classType;
    }
    Alert.prototype.formatDescription = function () {
        var issueText = '## ' + this.classType + '\n';
        issueText = issueText.concat('## Triggering event: \n');
        issueText = issueText.concat('## operative system (optional)\n');
        issueText = issueText.concat('## KEIS backend version: \n');
        issueText = issueText.concat('\n\n' + this.description);
        return encodeURIComponent(issueText);
    };
    Alert.prototype.formatTitle = function () {
        return encodeURI(this.title);
    };
    Alert.prototype.createIssueUrl = function (url) {
        console.log(url);
        if (url === null) {
            url = '';
        }
        url = url.concat('?title=' + this.formatTitle());
        url = url.concat('&assignee=klyngen');
        url = url.concat('&body=' + this.formatDescription());
        return url;
    };
    return Alert;
}());



/***/ }),

/***/ "./src/app/alert-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/alert-service.service.ts ***!
  \******************************************/
/*! exports provided: AlertServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertServiceService", function() { return AlertServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServiceService = /** @class */ (function () {
    function AlertServiceService() {
        // Observer pattern implementation
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AlertServiceService.prototype.getObserver = function () {
        return this.subject.asObservable();
    };
    AlertServiceService.prototype.clear = function () {
        this.subject.next();
    };
    AlertServiceService.prototype.addAlert = function (alert) {
        this.subject.next(alert);
    };
    AlertServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertServiceService);
    return AlertServiceService;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div ngbDropdown>\n  <a ngbDropdownToggle class=\"nav-item nav-link\">Toggle\n    <ng-container *ngIf=\"newMessages\">\n      <span class=\"badge badge-light unread\">{{alerts.length}}</span>\n    </ng-container>\n\n    <ng-container *ngIf=\"!newMessages\">\n      <span class=\"badge badge-danger read\">{{alerts.length}}</span>\n    </ng-container>\n    \n    <ng-container *ngIf=\"!newMessages\">\n        <span class=\"badge badge-info read\">{{messages.length}}</span>\n    </ng-container>\n  </a>\n  <div ngbDropdownMenu>\n    <a href=\"{{item.createIssueUrl(issueUrl)}}\" *ngFor=\"let item of alerts let i = index\" class=\"dropdown-item\">\n\n      <span class=\"badge badge-{{item.classType}}\">{{item.classType}}</span>{{item.title}}\n\n    </a>\n    <button *ngFor=\"let item of messages let i = index\" class=\"dropdown-item\">\n\n        <span class=\"badge badge-{{item.classType}}\">{{item.classType}}</span>{{item.title}}\n        <span class=\"cross-out\" (click)=\"removeMessage(i)\"><fa name=\"times\"></fa></span>\n\n    </button>\n    <div class=\"dropdown-divider\"></div>\n    <button (click)=\"eraseAlerts()\" class=\"dropdown-item\">Clear alerts <fa name=\"eraser\"></fa></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/alert */ "./src/app/Models/alert.ts");
/* harmony import */ var _alert_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert-service.service */ "./src/app/alert-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Issues base url
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.issueUrl = 'https://github.com/klyngen/KEIS/issues/new';
        this.alerts = [];
        this.messages = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getObserver().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            _this.pushAlert(alert);
        });
    };
    AlertComponent.prototype.pushAlert = function (alert) {
        switch (alert.classType) {
            case 'danger':
                this.alerts.push(alert);
                break;
            case 'warning':
                this.alerts.push(alert);
                break;
            default:
                this.messages.push(alert);
                break;
        }
    };
    AlertComponent.prototype.eraseAlerts = function () {
        this.alerts = [];
        // TODO reflect on service
        this.alertService.clear();
    };
    AlertComponent.prototype.readMessages = function () {
        this.newMessages = '';
    };
    AlertComponent.prototype.removeAlert = function (index) {
        try {
            this.alerts.splice(index, 1);
        }
        catch (e) {
            // Should this be its own alert :o?
            this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]('danger', 'Message error', 'An error ocurred when trying to erase messages. Following exception' + e));
        }
    };
    AlertComponent.prototype.removeMessage = function (index) {
        try {
            this.messages.splice(index, 1);
        }
        catch (e) {
            // Should this be its own alert :o?
            this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_1__["Alert"]('danger', 'Message error', 'An error ocurred when trying to erase messages. Following exception' + e));
        }
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[alert]',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_alert_service_service__WEBPACK_IMPORTED_MODULE_2__["AlertServiceService"]])
    ], AlertComponent);
    return AlertComponent;
}());



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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/equipment/equipment.component.ts");
/* harmony import */ var _rent_rent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rent/rent.component */ "./src/app/rent/rent.component.ts");
/* harmony import */ var _timelog_stats_timelog_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timelog-stats/timelog-stats.component */ "./src/app/timelog-stats/timelog-stats.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { title: 'Dashboard', subtitle: 'Keis Equipment Indexing System', icon: 'tachometer' } },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], data: { title: 'Users', subtitle: 'User management', icon: 'users' } },
    { path: 'equipment', component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentComponent"], data: { title: 'Equipment', subtitle: 'Equipment management', icon: 'wrench' } },
    { path: 'rent', component: _rent_rent_component__WEBPACK_IMPORTED_MODULE_5__["RentComponent"], data: { title: 'Rent', subtitle: 'Rent management', icon: 'exchange' } },
    { path: 'timeexport', component: _timelog_stats_timelog_stats_component__WEBPACK_IMPORTED_MODULE_6__["TimelogStatsComponent"], data: { title: 'Time loggs', subtitle: 'Rent management', icon: 'table' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n    min-height: 100%;\n    padding-bottom: 100px;\n}\n\n\n.side-divider {\n    border-left-style: solid;\n    padding: 25px;\n    border-left-width: 2px;\n    border-color: rgba(0, 0, 0, 0.6);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n<footer>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'KEIS';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _rent_rent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rent/rent.component */ "./src/app/rent/rent.component.ts");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/equipment/equipment.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dynamic-table/dynamic-table.component */ "./src/app/dynamic-table/dynamic-table.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./equipment/edit-equipment/edit-equipment.component */ "./src/app/equipment/edit-equipment/edit-equipment.component.ts");
/* harmony import */ var _small_drop_down_input_drop_down_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./small/drop-down-input/drop-down-input.component */ "./src/app/small/drop-down-input/drop-down-input.component.ts");
/* harmony import */ var _equipment_delete_equipment_delete_equipment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./equipment/delete-equipment/delete-equipment.component */ "./src/app/equipment/delete-equipment/delete-equipment.component.ts");
/* harmony import */ var _equipment_equipment_status_equipment_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./equipment/equipment-status/equipment-status.component */ "./src/app/equipment/equipment-status/equipment-status.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _equipment_instance_add_instance_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./equipment/instance-add/instance-add.component */ "./src/app/equipment/instance-add/instance-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _equipment_delete_all_instances_delete_all_instances_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./equipment/delete-all-instances/delete-all-instances.component */ "./src/app/equipment/delete-all-instances/delete-all-instances.component.ts");
/* harmony import */ var _equipment_delete_instance_delete_instance_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./equipment/delete-instance/delete-instance.component */ "./src/app/equipment/delete-instance/delete-instance.component.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");
/* harmony import */ var _users_users_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./users/users/delete-user/delete-user.component */ "./src/app/users/users/delete-user/delete-user.component.ts");
/* harmony import */ var _users_user_rent_user_rent_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./users/user-rent/user-rent.component */ "./src/app/users/user-rent/user-rent.component.ts");
/* harmony import */ var _rent_add_rent_add_rent_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rent/add-rent/add-rent.component */ "./src/app/rent/add-rent/add-rent.component.ts");
/* harmony import */ var _rent_delete_rent_delete_rent_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rent/delete-rent/delete-rent.component */ "./src/app/rent/delete-rent/delete-rent.component.ts");
/* harmony import */ var _rent_rent_stats_rent_stats_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rent/rent-stats/rent-stats.component */ "./src/app/rent/rent-stats/rent-stats.component.ts");
/* harmony import */ var _timelog_timelog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./timelog/timelog.component */ "./src/app/timelog/timelog.component.ts");
/* harmony import */ var _timelog_stats_stats_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./timelog/stats/stats.component */ "./src/app/timelog/stats/stats.component.ts");
/* harmony import */ var _timelog_end_time_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timelog/end-time.directive */ "./src/app/timelog/end-time.directive.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _timelog_stats_timelog_stats_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./timelog-stats/timelog-stats.component */ "./src/app/timelog-stats/timelog-stats.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _rent_rent_component__WEBPACK_IMPORTED_MODULE_11__["RentComponent"],
                _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_12__["EquipmentComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_15__["DynamicTableComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
                _equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_17__["EditEquipmentComponent"],
                _small_drop_down_input_drop_down_input_component__WEBPACK_IMPORTED_MODULE_18__["DropDownInputComponent"],
                _equipment_delete_equipment_delete_equipment_component__WEBPACK_IMPORTED_MODULE_19__["DeleteEquipmentComponent"],
                _equipment_equipment_status_equipment_status_component__WEBPACK_IMPORTED_MODULE_20__["EquipmentStatusComponent"],
                _equipment_instance_add_instance_add_component__WEBPACK_IMPORTED_MODULE_23__["InstanceAddComponent"],
                _equipment_delete_all_instances_delete_all_instances_component__WEBPACK_IMPORTED_MODULE_25__["DeleteAllInstancesComponent"],
                _equipment_delete_instance_delete_instance_component__WEBPACK_IMPORTED_MODULE_26__["DeleteInstanceComponent"],
                _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__["AddUserComponent"],
                _users_users_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_28__["DeleteUserComponent"],
                _users_user_rent_user_rent_component__WEBPACK_IMPORTED_MODULE_29__["UserRentComponent"],
                _rent_add_rent_add_rent_component__WEBPACK_IMPORTED_MODULE_30__["AddRentComponent"],
                _rent_delete_rent_delete_rent_component__WEBPACK_IMPORTED_MODULE_31__["DeleteRentComponent"],
                _rent_rent_stats_rent_stats_component__WEBPACK_IMPORTED_MODULE_32__["RentStatsComponent"],
                _timelog_timelog_component__WEBPACK_IMPORTED_MODULE_33__["TimelogComponent"],
                _timelog_stats_stats_component__WEBPACK_IMPORTED_MODULE_34__["StatsComponent"],
                _timelog_end_time_directive__WEBPACK_IMPORTED_MODULE_35__["EndTimeDirective"],
                _timelog_stats_timelog_stats_component__WEBPACK_IMPORTED_MODULE_37__["TimelogStatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlNativeDateTimeModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n    background-color: white;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid titletron\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <img class=\"mx-auto logo\" style=\"width: 90%\" src=\"assets/icon.png\" alt=\"\">\n        </div>\n\n        <div class=\"col-md-10\">\n          <h1 class=\"display-4\"><fa name=\"dashboard\"></fa> Dashboard</h1>\n          <p class=\"lead\">\n            <b>Welcome to KEIS!</b>  <br> The free and open Equipment management tool. \n            Have a nice day managing you equipment.\n            <br>  Best regards from Klyngen.\n          </p>\n        </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"container\">\n  <timelog></timelog>\n\n  <hr/>\n\n  <div class=\"row\">\n    <div class=\"col-md-5 rentData\">\n      <h2>Statistics</h2>\n      <rent-stats></rent-stats>\n    </div>\n\n    <div class=\"col-md-7\">\n      <h2>Quick settings</h2>\n      <add-rent></add-rent>\n      <delete-rent></delete-rent>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-table/dynamic-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dynamic-table/dynamic-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    max-width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/dynamic-table/dynamic-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/dynamic-table/dynamic-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!_data.length\">\n    <h3>No data. Check messages or add equipment</h3>\n</ng-container>\n<table id=\"dtTable\" class=\"table table-striped hover\" [dtOptions]=\"dtOptions\" datatable [dtTrigger]=\"dtTrigger\">\n</table>\n"

/***/ }),

/***/ "./src/app/dynamic-table/dynamic-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-table/dynamic-table.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function() { return DynamicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicTableComponent = /** @class */ (function () {
    function DynamicTableComponent() {
        this._data = [];
        this._tempData = [];
        this._header = [];
        this._init = false;
        this.dta = [];
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dtOptions = {};
    }
    DynamicTableComponent.prototype.ngAfterViewInit = function () {
        this.dtOptions.data = this.dta;
    };
    DynamicTableComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    Object.defineProperty(DynamicTableComponent.prototype, "observeData", {
        set: function (subject) {
            var _this = this;
            this.dta = [];
            subject.asObservable().subscribe(function (item) {
                _this._data = item;
                if (_this.dta.length === 0) {
                    _this._header = item[0].createHeader();
                    _this.dtOptions.columns = item[0].createDatatableHeader();
                }
                if (_this.dtElement.dtInstance === undefined) {
                    _this.dtTrigger.next();
                }
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    if (item !== undefined) {
                        _this.dtOptions.columns = item[0].createDatatableHeader();
                        _this.dta.splice(0, _this.dta.length);
                        dtInstance.destroy();
                        console.log(item);
                        item.forEach(function (sitem) {
                            dtInstance.row.add(sitem.createDataRow(_this._header));
                            _this.dta.push(sitem.createDataRow(_this._header));
                        });
                    }
                    console.log('stuff');
                    _this.dtTrigger.next();
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    DynamicTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            dom: 'Bfrtip',
            buttons: [
                'columnsToggle',
                'colvis',
                'copy',
                'print',
                'excel',
            ],
            rowCallback: function (row, data, index) {
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    var id = data[0];
                    _this._data.forEach(function (item) {
                        if (item.getValue('id') === id) {
                            _this.clicked.emit(item);
                            return;
                        }
                    });
                });
            },
        };
        this._init = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DynamicTableComponent.prototype, "clicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], DynamicTableComponent.prototype, "dtElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]])
    ], DynamicTableComponent.prototype, "observeData", null);
    DynamicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-table',
            template: __webpack_require__(/*! ./dynamic-table.component.html */ "./src/app/dynamic-table/dynamic-table.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-table.component.css */ "./src/app/dynamic-table/dynamic-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicTableComponent);
    return DynamicTableComponent;
}());



/***/ }),

/***/ "./src/app/equipment/delete-all-instances/delete-all-instances.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/equipment/delete-all-instances/delete-all-instances.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-all-instances {\n    margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/equipment/delete-all-instances/delete-all-instances.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/equipment/delete-all-instances/delete-all-instances.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-all-instances side-divider\">\n    <h3>Delete all instances</h3>\n    <div class=\"alert alert-warning\">\n        <b>Warning</b> This action will destroy your inventory for the selected equipment. This is a poorly made web-application. <b>No undo button here.</b>\n    </div>\n    <button (click)=\"openModal(content)\" class=\"btn btn-danger btn-block\">Delete</button>\n\n\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Do you really want to do this?</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>\n                There will be no more modals. The confirmation-button will delete all instances\n            </p>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-danger btn-block\" (click)=\"delete()\">Confirm</button>\n        </div>\n    </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/delete-all-instances/delete-all-instances.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/equipment/delete-all-instances/delete-all-instances.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeleteAllInstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllInstancesComponent", function() { return DeleteAllInstancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../httpClient/equipment */ "./src/app/httpClient/equipment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteAllInstancesComponent = /** @class */ (function () {
    function DeleteAllInstancesComponent(modalService, httpClient) {
        this.modalService = modalService;
        this.httpClient = httpClient;
    }
    Object.defineProperty(DeleteAllInstancesComponent.prototype, "equipment", {
        set: function (equipment) {
            this._equipment = equipment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteAllInstancesComponent.prototype, "trigger", {
        set: function (subject) {
            this._subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    DeleteAllInstancesComponent.prototype.ngOnInit = function () {
    };
    DeleteAllInstancesComponent.prototype.openModal = function (content) {
        this.reference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    DeleteAllInstancesComponent.prototype.delete = function () {
        var _this = this;
        if (this.reference !== undefined) {
            this.reference.close();
            if (this._equipment !== undefined) {
                this._equipment.getValue('instances').forEach(function (item) {
                    _this.httpClient.deleteInstance('bbsh', item.value[4].value);
                });
            }
            this._subject.next();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]),
        __metadata("design:paramtypes", [_httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]])
    ], DeleteAllInstancesComponent.prototype, "equipment", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]])
    ], DeleteAllInstancesComponent.prototype, "trigger", null);
    DeleteAllInstancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-all-instances',
            template: __webpack_require__(/*! ./delete-all-instances.component.html */ "./src/app/equipment/delete-all-instances/delete-all-instances.component.html"),
            styles: [__webpack_require__(/*! ./delete-all-instances.component.css */ "./src/app/equipment/delete-all-instances/delete-all-instances.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _keis_api_service__WEBPACK_IMPORTED_MODULE_2__["KeisAPIService"]])
    ], DeleteAllInstancesComponent);
    return DeleteAllInstancesComponent;
}());



/***/ }),

/***/ "./src/app/equipment/delete-equipment/delete-equipment.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/equipment/delete-equipment/delete-equipment.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-equipment {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/equipment/delete-equipment/delete-equipment.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/equipment/delete-equipment/delete-equipment.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-equipment side-divider\">\n    <h3>Delete equipment</h3>\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Do you really want to delete this equipment?</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>\n                This action is permanent\n            </p>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-danger btn-block\" (click)=\"delete()\">Confirm</button>\n        </div>\n    </ng-template>\n    <button class=\"btn btn-danger btn-block\" [disabled]=\"canDelete()\" (click)=\"openModal(content)\">Delete</button>\n    <div [hidden]=\"!canDelete()\" class=\"alert alert-info\">\n        Equipment cannot be deleted with instances. Delete theese instances first.\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/delete-equipment/delete-equipment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/equipment/delete-equipment/delete-equipment.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeleteEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEquipmentComponent", function() { return DeleteEquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../httpClient/equipment */ "./src/app/httpClient/equipment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteEquipmentComponent = /** @class */ (function () {
    function DeleteEquipmentComponent(modalService) {
        this.modalService = modalService;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DeleteEquipmentComponent.prototype, "refresh", {
        set: function (subject) {
            this.subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteEquipmentComponent.prototype, "equipment", {
        set: function (equipment) {
            this._equipment = equipment;
        },
        enumerable: true,
        configurable: true
    });
    DeleteEquipmentComponent.prototype.ngOnInit = function () {
    };
    DeleteEquipmentComponent.prototype.openModal = function (content) {
        this.reference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    DeleteEquipmentComponent.prototype.delete = function () {
        console.log('delete pressed', this._deletable);
        if (this.reference !== undefined) {
            this.reference.close();
        }
        if (this._deletable) {
            console.log('ordering delete');
            this.clicked.emit('du måsta flytta på deg');
        }
    };
    DeleteEquipmentComponent.prototype.canDelete = function () {
        if (this._equipment !== undefined) {
            var arr = this._equipment.getValue('instances');
            if (arr.length !== 0) {
                this._deletable = false;
                return true;
            }
            this._deletable = true;
            return false;
        }
        this._deletable = false;
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]])
    ], DeleteEquipmentComponent.prototype, "refresh", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeleteEquipmentComponent.prototype, "clicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]),
        __metadata("design:paramtypes", [_httpClient_equipment__WEBPACK_IMPORTED_MODULE_3__["Equipment"]])
    ], DeleteEquipmentComponent.prototype, "equipment", null);
    DeleteEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-equipment',
            template: __webpack_require__(/*! ./delete-equipment.component.html */ "./src/app/equipment/delete-equipment/delete-equipment.component.html"),
            styles: [__webpack_require__(/*! ./delete-equipment.component.css */ "./src/app/equipment/delete-equipment/delete-equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DeleteEquipmentComponent);
    return DeleteEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/equipment/delete-instance/delete-instance.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/equipment/delete-instance/delete-instance.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.delete-instance {\n    margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/equipment/delete-instance/delete-instance.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/equipment/delete-instance/delete-instance.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-instance side-divider\">\n    <h3>Delete instance</h3>\n\n    <div class=\"form-group\">\n        <label for=\"\">RFID</label>\n        <input (keyup)=\"verify(rfid)\" class=\"form-control\" placeholder=\"RFID-code\" required #rfid=\"ngModel\" [(ngModel)]=\"_rfid\" name=\"\" type=\"text\" value=\"\"/>\n    </div>\n\n    <button (click)=\"delete()\" [disabled]=\"!verifiedRFID\" class=\"btn btn-danger btn-block\">Delete</button>\n    <div [hidden]=\"!verifiedRFID\" class=\"alert alert-success\">\n        The RFID exists and the press of the delete button will set the RFID free\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/delete-instance/delete-instance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/equipment/delete-instance/delete-instance.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteInstanceComponent", function() { return DeleteInstanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteInstanceComponent = /** @class */ (function () {
    function DeleteInstanceComponent(httpClient) {
        this.httpClient = httpClient;
        this.verifiedRFID = false;
        this.verificationFlake = httpClient.snowflake();
    }
    Object.defineProperty(DeleteInstanceComponent.prototype, "trigger", {
        set: function (subject) {
            this.subject = subject;
        },
        enumerable: true,
        configurable: true
    });
    DeleteInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.verificationFlake) {
                _this.verifiedRFID = !item.data;
            }
            else if (item.correlationId === _this.deleteFlake) {
                _this._rfid = '';
                _this.verifiedRFID = true;
                if (_this.subject !== undefined) {
                    _this.subject.next();
                }
            }
        });
    };
    DeleteInstanceComponent.prototype.verify = function (data) {
        if (data.valid) {
            this.httpClient.verifyRFID(this.verificationFlake, data.model);
        }
    };
    DeleteInstanceComponent.prototype.delete = function () {
        if (this._rfid.length > 0) {
            this.httpClient.deleteInstance(this.deleteFlake, this._rfid);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]])
    ], DeleteInstanceComponent.prototype, "trigger", null);
    DeleteInstanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-instance',
            template: __webpack_require__(/*! ./delete-instance.component.html */ "./src/app/equipment/delete-instance/delete-instance.component.html"),
            styles: [__webpack_require__(/*! ./delete-instance.component.css */ "./src/app/equipment/delete-instance/delete-instance.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], DeleteInstanceComponent);
    return DeleteInstanceComponent;
}());



/***/ }),

/***/ "./src/app/equipment/edit-equipment/edit-equipment.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/equipment/edit-equipment/edit-equipment.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unloaded {\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n  background-color: #ccc;\n}\n\n"

/***/ }),

/***/ "./src/app/equipment/edit-equipment/edit-equipment.component.html":
/*!************************************************************************!*\
  !*** ./src/app/equipment/edit-equipment/edit-equipment.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-equipment side-divider\">\n\n\n  <ng-container *ngIf=\"!loaded\">\n    <p class=\"lead\">\n      <fa name=\"mouse-pointer\"></fa> Click on an element in the table to edit the equipment\n    </p>\n  </ng-container>\n\n\n  <ng-container *ngIf=\"loaded\">\n\n  </ng-container>\n\n  <div class=\"blurrable\" [ngClass]=\"{'unloaded': !loaded}\">\n\n      <ng-container *ngIf=\"_new\">\n          <h3>New equipment</h3>\n      </ng-container>\n\n      <ng-container *ngIf=\"!_new\">\n          <h3>Edit equipment</h3>\n      </ng-container>\n\n    <div class=\"form-group\">\n      <label for=\"\">Model</label>\n      <input #model (keyup)=\"setModel(model.value)\" class=\"form-control\" name=\"\" type=\"text\" value=\"{{_model}}\" placeholder=\"Model...\" />\n    </div>\n\n    <div class=\"form-group\">\n      <drop-down-input [alternatives]=\"_brandAlternatives\" [(value)]=\"_brand\" placeholder=\"Brand...\" label=\"Brand\"></drop-down-input>\n    </div>\n\n    <div class=\"form-group\">\n      <drop-down-input [alternatives]=\"_typeAlternatives\" [(value)]=\"_type\" label=\"Type\" placeholder=\"Type...\"></drop-down-input>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"\">Description</label>\n      <textarea #description (keyup)=\"setDescription(description.value)\" class=\"form-control\" [(value)]=\"_description\" id=\"\" name=\"\" rows=\"3\">\n      </textarea>\n    </div>\n\n    <button (click)=\"cancel()\" class=\"btn btn-danger\"><fa name=\"times\"></fa> Cancel</button>\n        <button (click)=\"save()\" class=\"btn btn-success pull-right\"><fa name=\"floppy-o\"></fa> Save</button>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/equipment/edit-equipment/edit-equipment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/equipment/edit-equipment/edit-equipment.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEquipmentComponent", function() { return EditEquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpClient_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../httpClient/equipment */ "./src/app/httpClient/equipment.ts");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditEquipmentComponent = /** @class */ (function () {
    function EditEquipmentComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.loaded = false;
        this._new = false;
        this._brandAlternatives = [];
        this._typeAlternatives = [];
        this.newEquipmentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.receivedEquipment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.brandFlake = this.apiService.snowflake();
        this.typeFlake = this.apiService.snowflake();
        this.newFlake = this.apiService.snowflake();
        this.putFlake = this.apiService.snowflake();
        // Define actions for various api-results
        this.apiService.getObserver().subscribe(function (data) {
            if (data.correlationId === _this.brandFlake) {
                _this._brandAlternatives = data.data;
            }
            if (data.correlationId === _this.typeFlake) {
                _this._typeAlternatives = data.data;
            }
            if (data.correlationId === _this.newFlake) {
                _this.receivedEquipment.emit(data.data);
            }
            if (data.correlationId === _this.putFlake) {
                _this.refreshEquipment.next();
            }
        });
        this.apiService.getBrandsAndTypes(this.brandFlake, '/brand');
        this.apiService.getBrandsAndTypes(this.typeFlake, '/type');
    }
    Object.defineProperty(EditEquipmentComponent.prototype, "newEquipment", {
        set: function (data) {
            if (data) {
                this.reset();
                this.loaded = true;
                this._new = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditEquipmentComponent.prototype, "refresh", {
        set: function (subject) {
            this.refreshEquipment = subject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditEquipmentComponent.prototype, "data", {
        set: function (data) {
            if (data !== null) {
                this.newEquipmentChange.emit(false);
                this.reset();
                this._data = data;
                this._new = false;
                this.loaded = true;
                this.parseEquipment();
            }
        },
        enumerable: true,
        configurable: true
    });
    EditEquipmentComponent.prototype.parseEquipment = function () {
        this._brand = this._data.getValue('Brand');
        this._type = this._data.getValue('Type');
        this._model = this._data.getValue('Model');
        this._description = this._data.getValue('Description');
    };
    EditEquipmentComponent.prototype.reset = function () {
        this._description = '';
        this._model = '';
        this._brand = '';
        this._type = '';
        this._data = null;
        this.loaded = false;
    };
    EditEquipmentComponent.prototype.ngOnInit = function () {
    };
    EditEquipmentComponent.prototype.cancel = function () {
        this.reset();
    };
    EditEquipmentComponent.prototype.save = function () {
        var equipment = new _httpClient_equipment__WEBPACK_IMPORTED_MODULE_1__["Equipment"]();
        equipment.setValuePair('Model', this._model);
        equipment.setValuePair('Brand', this._brand);
        equipment.setValuePair('Type', this._type);
        equipment.setValuePair('Description', this._description);
        if (this._new) {
            this.apiService.addEquipment(this.newFlake, equipment);
            return;
        }
        // Should in theory put the correct data
        this.apiService.updateEquipment(this.putFlake, equipment, this._data.getValue('id'));
    };
    EditEquipmentComponent.prototype.setModel = function (value) {
        this._model = value;
    };
    EditEquipmentComponent.prototype.setDescription = function (value) {
        this._description = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditEquipmentComponent.prototype, "newEquipment", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]])
    ], EditEquipmentComponent.prototype, "refresh", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditEquipmentComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditEquipmentComponent.prototype, "newEquipmentChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditEquipmentComponent.prototype, "receivedEquipment", void 0);
    EditEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-equipment',
            template: __webpack_require__(/*! ./edit-equipment.component.html */ "./src/app/equipment/edit-equipment/edit-equipment.component.html"),
            styles: [__webpack_require__(/*! ./edit-equipment.component.css */ "./src/app/equipment/edit-equipment/edit-equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_2__["KeisAPIService"]])
    ], EditEquipmentComponent);
    return EditEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/equipment/equipment-status/equipment-status.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/equipment/equipment-status/equipment-status.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".equipment-status {\n    margin-top: 20px;\n    height: 350px;\n}\n"

/***/ }),

/***/ "./src/app/equipment/equipment-status/equipment-status.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/equipment/equipment-status/equipment-status.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"equipment-status side-divider\">\n    <h3>Inventory quality <span class=\"badge badge-{{status}}\">{{average}}</span></h3>\n\n    <ngx-charts-bar-horizontal [showDataLabel]=\"true\"\n                               [view]=\"[elementWidth(), _height]\"\n                               [results]=\"_data\"\n                               [showXAxisLabel]=\"true\"\n                               [showYAxisLabel]=\"true\"\n                               [xAxisLabel]=\"instances\"\n                               [yAxisLabel]=\"condition\"\n                               [yAxis]=\"true\"\n                               [xAxis]=\"true\">\n        \n    </ngx-charts-bar-horizontal>\n</div>\n\n"

/***/ }),

/***/ "./src/app/equipment/equipment-status/equipment-status.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/equipment/equipment-status/equipment-status.component.ts ***!
  \**************************************************************************/
/*! exports provided: EquipmentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentStatusComponent", function() { return EquipmentStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpClient_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../httpClient/equipment */ "./src/app/httpClient/equipment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentStatusComponent = /** @class */ (function () {
    function EquipmentStatusComponent() {
        this._data = [];
        this._height = 350;
        this.status = 'success';
        this.average = 10.0;
    }
    Object.defineProperty(EquipmentStatusComponent.prototype, "data", {
        set: function (data) {
            //this._data = data;
            var average = 0;
            var temp = this.createBaseStats();
            if (data !== undefined) {
                if (data.getValue('instances') !== null) {
                    data.getValue('instances').forEach(function (item) {
                        temp[item.value[1].value].value += 1;
                        average += item.value[1].value;
                    });
                    for (var i = 0; i < temp.length; i++) {
                        if (temp[i].value === 0) {
                            temp.splice(i, 1);
                            i = 0;
                        }
                    }
                    this.average = average / data.getValue('instances').length;
                    this.createStatus(this.average);
                }
                this._data = temp;
                this._height = (100 + (temp.length * 20));
            }
        },
        enumerable: true,
        configurable: true
    });
    EquipmentStatusComponent.prototype.createStatus = function (average) {
        if (average > 7) {
            this.status = 'success';
        }
        else if (average > 4) {
            this.status = 'warning';
        }
        else {
            this.status = 'danger';
        }
    };
    EquipmentStatusComponent.prototype.elementWidth = function () {
        return $('.equipment-status').width();
    };
    EquipmentStatusComponent.prototype.createBaseStats = function () {
        var stats = [];
        for (var i = 0; i <= 10; i++) {
            stats[i] = { name: i, value: 0 };
        }
        return stats;
    };
    EquipmentStatusComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_equipment__WEBPACK_IMPORTED_MODULE_1__["Equipment"]),
        __metadata("design:paramtypes", [_httpClient_equipment__WEBPACK_IMPORTED_MODULE_1__["Equipment"]])
    ], EquipmentStatusComponent.prototype, "data", null);
    EquipmentStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'equipment-status',
            template: __webpack_require__(/*! ./equipment-status.component.html */ "./src/app/equipment/equipment-status/equipment-status.component.html"),
            styles: [__webpack_require__(/*! ./equipment-status.component.css */ "./src/app/equipment/equipment-status/equipment-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipmentStatusComponent);
    return EquipmentStatusComponent;
}());



/***/ }),

/***/ "./src/app/equipment/equipment.component.css":
/*!***************************************************!*\
  !*** ./src/app/equipment/equipment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.new-button {\n    margin-bottom: 30px;\n}\n\n.side-divider {\n    border-left-style: solid;\n    padding: 25px;\n    border-left-width: 2px;\n    border-color: rgba(0, 0, 0, 0.6);\n}\n\n.jumbotron.jumbotron-fluid.titletron {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   width%3D%22100mm%22   height%3D%22100mm%22   viewBox%3D%220 0 100 100%22   version%3D%221.1%22   id%3D%22svg2111%22   inkscape%3Aversion%3D%220.92.3 (2405546%2C 2018-03-11)%22   sodipodi%3Adocname%3D%22bluedrop.svg%22%3E  %3Cdefs     id%3D%22defs2105%22%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       id%3D%22linearGradient2662%22%3E      %3Cstop         style%3D%22stop-color%3A%23505deb%3Bstop-opacity%3A1%22         offset%3D%220%22         id%3D%22stop2658%22 %2F%3E      %3Cstop         style%3D%22stop-color%3A%23ffffff%3Bstop-opacity%3A1%22         offset%3D%221%22         id%3D%22stop2660%22 %2F%3E    %3C%2FlinearGradient%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       xlink%3Ahref%3D%22%23linearGradient2662%22       id%3D%22linearGradient2670%22       x1%3D%22246.44048%22       y1%3D%22117.08334%22       x2%3D%22246.071%22       y2%3D%22530.15985%22       gradientUnits%3D%22userSpaceOnUse%22       gradientTransform%3D%22matrix(0.20090632%2C0%2C0%2C0.50186569%2C0%2C147.56369)%22 %2F%3E  %3C%2Fdefs%3E  %3Csodipodi%3Anamedview     id%3D%22base%22     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221.0%22     inkscape%3Apageopacity%3D%220.0%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Azoom%3D%220.7%22     inkscape%3Acx%3D%22-31.354557%22     inkscape%3Acy%3D%22264.74454%22     inkscape%3Adocument-units%3D%22mm%22     inkscape%3Acurrent-layer%3D%22layer1%22     showgrid%3D%22false%22     inkscape%3Ashowpageshadow%3D%22false%22     inkscape%3Awindow-width%3D%221863%22     inkscape%3Awindow-height%3D%221025%22     inkscape%3Awindow-x%3D%2257%22     inkscape%3Awindow-y%3D%2227%22     inkscape%3Awindow-maximized%3D%221%22 %2F%3E  %3Cmetadata     id%3D%22metadata2108%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cg     inkscape%3Alabel%3D%22Layer 1%22     inkscape%3Agroupmode%3D%22layer%22     id%3D%22layer1%22     transform%3D%22translate(0%2C-197)%22%3E    %3Crect       style%3D%22opacity%3A1%3Bfill%3Aurl(%23linearGradient2670)%3Bfill-opacity%3A1%3Bstroke%3Anone%3Bstroke-width%3A0.27879506%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22       id%3D%22rect2656%22       width%3D%22100.54165%22       height%3D%22101.67561%22       x%3D%220%22       y%3D%22196.08037%22 %2F%3E    %3Crect       style%3D%22opacity%3A1%3Bfill%3A%236c9acd%3Bfill-opacity%3A1%3Bstroke%3Anone%3Bstroke-width%3A0.87799996%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22       id%3D%22rect2748%22       width%3D%221.5119048%22       height%3D%220.37797621%22       x%3D%22201.46132%22       y%3D%22137.11607%22 %2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n}"

/***/ }),

/***/ "./src/app/equipment/equipment.component.html":
/*!****************************************************!*\
  !*** ./src/app/equipment/equipment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid titletron\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"><fa name=\"wrench\"></fa> Equipment</h1>\n    <p class=\"lead\">\n      Add, delete and modify equipment and intances\n    </p>\n  </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <!-- Table column -->\n        <div class=\"col-md-8\">\n            <div class=\"table-column\">\n                <button (click)=\"newEquipment()\" class=\"btn btn-primary btn-block new-button\"><fa name=\"plus\"></fa> New Equipment</button>\n                <dynamic-table [observeData]=\"_tableData\" class=\"equipment-table\" (clicked)=\"rowClicked($event)\" ></dynamic-table>\n            </div>\n        </div>\n\n        <!-- Info column -->\n        <div class=\"col-md-4\">\n            <div class=\"edit-column\" style=\"height: 65vh; overflow-y: scroll\">\n                <edit-equipment [refresh]=\"refreshTrigger\" (receivedEquipment)=\"addElement($event)\" [(newEquipment)]=\"_new\" [data]=\"selected\"></edit-equipment>\n                <ng-container *ngIf=\"selected\">\n                    <delete-equipment [equipment]=\"_singleData\" (clicked)=\"delete()\" [refresh]=\"refreshTrigger\"></delete-equipment>\n                    <instance-add (submit)=\"newInstance($event)\"></instance-add>\n                    <equipment-status [data]=\"_singleData\"></equipment-status>\n                    <delete-instance [trigger]=\"refreshTrigger\"></delete-instance>\n                    <delete-all-instances [trigger]=\"refreshTrigger\" [equipment]=\"_singleData\"></delete-all-instances>\n                </ng-container>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/equipment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/equipment/equipment.component.ts ***!
  \**************************************************/
/*! exports provided: EquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function() { return EquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _httpClient_json_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpClient/json-element */ "./src/app/httpClient/json-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.refreshTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.equipment = [];
        this.selected = null;
        this._new = false;
        this._push = null;
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.refreshTrigger.asObservable().subscribe(function (item) {
            _this.httpClient.getAllEquipment(_this.equipmentFlake);
            _this.httpClient.getSingleEquipment(_this.singleEquipmentFlake, _this.selected.getValue('id'));
        });
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.equipmentFlake = this.httpClient.snowflake();
        this.singleEquipmentFlake = this.httpClient.snowflake();
        this.instanceFlake = this.httpClient.snowflake();
        this.deleteEquipmentFlake = this.httpClient.snowflake();
        this.httpClient.getObserver().subscribe(function (data) {
            if (data.correlationId === _this.equipmentFlake) {
                _this.equipment = data.data;
                _this._tableData.next(data.data);
            }
            if (data.correlationId === _this.singleEquipmentFlake) {
                _this._singleData = data.data;
            }
            if (data.correlationId === _this.instanceFlake) {
                _this._singleData.getValue('instances').push(new _httpClient_json_element__WEBPACK_IMPORTED_MODULE_3__["JsonElement"](data.data.getValue('id'), data.data));
                _this.httpClient.getSingleEquipment(_this.singleEquipmentFlake, _this.selected.getValue('id'));
            }
            if (data.correlationId === _this.deleteEquipmentFlake) {
                _this.selected = null;
                _this._new = true;
                _this.httpClient.getAllEquipment(_this.equipmentFlake);
            }
        });
        this.httpClient.getAllEquipment(this.equipmentFlake);
    };
    EquipmentComponent.prototype.rowClicked = function (equipment) {
        this.selected = equipment;
        this.httpClient.getSingleEquipment(this.singleEquipmentFlake, equipment.getValue('id'));
    };
    EquipmentComponent.prototype.newEquipment = function () {
        this._new = true;
    };
    EquipmentComponent.prototype.addElement = function (data) {
        this._tableData.next(this.equipment.concat(data));
    };
    EquipmentComponent.prototype.delete = function () {
        if (this.selected !== undefined) {
            this.httpClient.deleteEquipment(this.deleteEquipmentFlake, this.selected.getValue('id'));
        }
    };
    EquipmentComponent.prototype.editHeight = function () {
        if (this.selected !== null) {
            return $('.table-column').height();
        }
        return 1000;
    };
    EquipmentComponent.prototype.newInstance = function (element) {
        element.setValuePair('equipment', this._singleData.getValue('id'));
        this.httpClient.addInstance(this.instanceFlake, element);
    };
    EquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'equipment',
            template: __webpack_require__(/*! ./equipment.component.html */ "./src/app/equipment/equipment.component.html"),
            styles: [__webpack_require__(/*! ./equipment.component.css */ "./src/app/equipment/equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/equipment/instance-add/instance-add.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/equipment/instance-add/instance-add.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".instance-add {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/equipment/instance-add/instance-add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/equipment/instance-add/instance-add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"instance-add side-divider\">\n    <h3>Add an Instance</h3>\n    <div  class=\"form-group\">\n        <label for=\"rfid\">RFID or label <fa name=\"question-circle\" ngbPopover=\"10 is a new flawless device. Above 5 is normal wear and tear that does not harm the usage of the device. Benieth 5, is a device with major flaws\" popoverTitle=\"Condition guidelines\"></fa></label>\n        <input (change)=\"validateRFID(rfid)\" #rfid=\"ngModel\" required [(ngModel)]=\"_rfid\" id=\"rfid\" class=\"form-control\" name=\"rfid\" type=\"text\" value=\"\"/>\n        <div  [hidden]=\"rfid.valid || rfid.pristine\" class=\"alert alert-danger\"  >\n            RFID is required\n        </div>\n\n        <div [hidden]=\"rfidValid\" class=\"alert alert-warning\">\n            This RFID is already in use\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"condition\">Condition <span class=\"badge badge-primary\">{{_condition}}</span></label>\n        <input [(ngModel)]=\"_condition\" min=\"1\" max=\"10\" class=\"form-control\" id=\"condition\" name=\"condition\" type=\"range\" value=\"\"/>\n\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"date\">Purchase time</label>\n        <input required [(ngModel)]=\"_date\" class=\"form-control\" id=\"date\" name=\"purchaseTime\" type=\"date\" value=\"\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" [disabled]=\"!verified()\" (click)=\"submission()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/equipment/instance-add/instance-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/equipment/instance-add/instance-add.component.ts ***!
  \******************************************************************/
/*! exports provided: InstanceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceAddComponent", function() { return InstanceAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstanceAddComponent = /** @class */ (function () {
    function InstanceAddComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._condition = 5;
        this.rfidValid = true;
        this.rfidFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (data) {
            if (data.correlationId === _this.rfidFlake) {
                if (data.data) {
                    _this.rfidValid = true;
                    return;
                }
                _this.rfidValid = false;
            }
        });
    }
    InstanceAddComponent.prototype.ngOnInit = function () {
    };
    InstanceAddComponent.prototype.validateRFID = function (data) {
        this.httpClient.verifyRFID(this.rfidFlake, data.model);
    };
    InstanceAddComponent.prototype.verified = function () {
        if (this.rfidValid && this._date !== undefined && this._rfid !== undefined) {
            console.log("verified");
            return true;
        }
        return false;
    };
    InstanceAddComponent.prototype.submission = function () {
        if (this.verified()) {
            var tableElement = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__["TableElement"]();
            tableElement.setValuePair('RFID', this._rfid);
            tableElement.setValuePair('purchasetime', this._date);
            tableElement.setValuePair('condition', this._condition);
            this.submit.emit(tableElement);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InstanceAddComponent.prototype, "submit", void 0);
    InstanceAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'instance-add',
            template: __webpack_require__(/*! ./instance-add.component.html */ "./src/app/equipment/instance-add/instance-add.component.html"),
            styles: [__webpack_require__(/*! ./instance-add.component.css */ "./src/app/equipment/instance-add/instance-add.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], InstanceAddComponent);
    return InstanceAddComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    margin-top: 75px;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n\n    <div class=\"navbar-text\">\n        <a href=\"https://www.github.com/klyngen/keis/issues\" class=\"justify-content-right\"><i class=\"fa fa-heart\"></i> to hear about any issues</a>\n    </div>\n    <div class=\"navbar-expand m-auto navbar-text\">\n        <a href=\"https://www.github.com/klyngen/keis\">Please feel free to contribute <i class=\"fa fa-github\"></i></a>\n    </div>\n    <div class=\"navbar-text navbar-right\">\n        Hope you enjoy the software. Best regards from Klyngen\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/httpClient/equipment.ts":
/*!*****************************************!*\
  !*** ./src/app/httpClient/equipment.ts ***!
  \*****************************************/
/*! exports provided: Equipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipment", function() { return Equipment; });
/* harmony import */ var _table_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-element */ "./src/app/httpClient/table-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Equipment = /** @class */ (function (_super) {
    __extends(Equipment, _super);
    function Equipment(data) {
        var _this = _super.call(this, data) || this;
        _this.blackList = [
            'created_at',
            'updated_at'
        ];
        _this.nameMapping = {};
        _this.nameMapping['brands'] = 'Brand';
        _this.nameMapping['types'] = 'Type';
        _this.nameMapping['model'] = 'Model';
        _this.nameMapping['rented'] = 'Rented';
        _this.priority['id'] = 0;
        _this.priority['brand'] = 1;
        _this.priority['model'] = 2;
        return _this;
    }
    return Equipment;
}(_table_element__WEBPACK_IMPORTED_MODULE_0__["TableElement"]));



/***/ }),

/***/ "./src/app/httpClient/json-element.ts":
/*!********************************************!*\
  !*** ./src/app/httpClient/json-element.ts ***!
  \********************************************/
/*! exports provided: JsonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonElement", function() { return JsonElement; });
var JsonElement = /** @class */ (function () {
    function JsonElement(key, value) {
        this.key = key;
        this.value = value;
    }
    return JsonElement;
}());



/***/ }),

/***/ "./src/app/httpClient/rent.ts":
/*!************************************!*\
  !*** ./src/app/httpClient/rent.ts ***!
  \************************************/
/*! exports provided: Rent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rent", function() { return Rent; });
/* harmony import */ var _table_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-element */ "./src/app/httpClient/table-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Rent = /** @class */ (function (_super) {
    __extends(Rent, _super);
    function Rent(data) {
        var _this = _super.call(this, data) || this;
        _this.blackList = [
            'created_at',
            'updated_at',
            'equipment',
            'instance',
            'user',
            'id',
            'available',
            'rented',
            'total',
            'users',
            'rfid',
            'Description',
            'purchasetime',
            'instances',
            'stop'
        ];
        _this.nameMapping = {};
        _this.nameMapping['model'] = 'Model';
        _this.nameMapping['brands'] = 'Brand';
        _this.nameMapping['types'] = 'Type';
        _this.nameMapping['condition'] = 'Condition';
        _this.nameMapping['name'] = 'Name';
        _this.nameMapping['studentNumber'] = 'Studentnumber';
        _this.nameMapping['email'] = 'Email';
        return _this;
    }
    return Rent;
}(_table_element__WEBPACK_IMPORTED_MODULE_0__["TableElement"]));



/***/ }),

/***/ "./src/app/httpClient/table-element.ts":
/*!*********************************************!*\
  !*** ./src/app/httpClient/table-element.ts ***!
  \*********************************************/
/*! exports provided: TableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableElement", function() { return TableElement; });
/* harmony import */ var _json_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-element */ "./src/app/httpClient/json-element.ts");

var TableElement = /** @class */ (function () {
    function TableElement(data) {
        this.data = [];
        this.nameMapping = {};
        this.priority = {};
        this.blackList = ['success'];
        this.data = data === undefined ? [] : data;
    }
    /**
     * Checks is a parameter is blacklisted
     * @param key - key of an item
     */
    TableElement.prototype.isBlackListed = function (key) {
        var blacklisted = false;
        this.blackList.forEach(function (item) {
            if (item === key) {
                blacklisted = true;
                return; // Break
            }
        });
        return blacklisted;
    };
    /**
     * Creates the header row for a table
     * NB: SHOULD BE A RECURCIVE FUNCTION
     */
    TableElement.prototype.createHeader = function (array) {
        var _this = this;
        var dta = array !== undefined ? array : this.data;
        var header = [];
        dta.sort(function (n1, n2) {
            var priority1 = _this.priority[n1.key] === undefined ? 100 : _this.priority[n1.key];
            var priority2 = _this.priority[n2.key] === undefined ? 100 : _this.priority[n2.key];
            return priority1 - priority2;
        });
        dta.forEach(function (item) {
            if (Array.isArray(item.value)) {
                header = header.concat(_this.createHeader(item.value));
            }
            if (!_this.isBlackListed(item.key)) {
                // See if there is a mapping
                var alternative = _this.nameMapping[item.key];
                if (alternative !== undefined) {
                    header.push(alternative);
                }
                else {
                    header.push(item.key);
                }
            }
        });
        return header;
    };
    TableElement.prototype.fetchKey = function (value) {
        for (var key in this.nameMapping) {
            if (this.nameMapping[key] === value) {
                return key;
            }
        }
        return value;
    };
    TableElement.prototype.createDataRow = function (header) {
        var _this = this;
        var data = [];
        header.forEach(function (item) {
            var head = _this.fetchKey(item);
            var res = _this.getValue(head);
            data.push(res);
        });
        return data;
    };
    TableElement.prototype.setValuePair = function (key, value) {
        this.data.push(new _json_element__WEBPACK_IMPORTED_MODULE_0__["JsonElement"](this.fetchKey(key), value));
    };
    TableElement.prototype.setValue = function (key, value) {
        var resKey = this.fetchKey(key);
        this.data.forEach(function (item) {
            if (item.key === resKey) {
                item.value = value;
            }
        });
    };
    TableElement.prototype.getValue = function (key, data) {
        var _this = this;
        var dta = data !== undefined ? data : this.data;
        var resKey = this.fetchKey(key);
        var res = null;
        dta.forEach(function (item) {
            if (Array.isArray(item.value)) {
                var temp = _this.getValue(key, item.value);
                if (temp !== null) {
                    res = temp;
                    return;
                }
            }
            if ((item.key === resKey) && (res === null)) {
                res = item.value;
                return;
            }
        });
        return res;
    };
    TableElement.prototype.createObject = function () {
        var data = {};
        this.data.forEach(function (item) {
            data[item.key] = item.value;
        });
        return data;
    };
    TableElement.prototype.createDatatableHeader = function () {
        var header = this.createHeader();
        var res = [];
        header.forEach(function (item) {
            res.push({ 'title': item });
        });
        return res;
    };
    return TableElement;
}());



/***/ }),

/***/ "./src/app/httpClient/time-log.ts":
/*!****************************************!*\
  !*** ./src/app/httpClient/time-log.ts ***!
  \****************************************/
/*! exports provided: TimeLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLog", function() { return TimeLog; });
/* harmony import */ var _table_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-element */ "./src/app/httpClient/table-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TimeLog = /** @class */ (function (_super) {
    __extends(TimeLog, _super);
    function TimeLog(data) {
        var _this = _super.call(this, data) || this;
        _this.blackList = ['created_at', 'updated_at', 'id', 'user', 'stop'];
        _this.nameMapping = {};
        _this.nameMapping['hours'] = "Hours";
        _this.nameMapping['name'] = 'Name';
        _this.nameMapping['rfid'] = 'RFID';
        return _this;
        // Lets gather data by user!!!
    }
    return TimeLog;
}(_table_element__WEBPACK_IMPORTED_MODULE_0__["TableElement"]));



/***/ }),

/***/ "./src/app/httpClient/user.ts":
/*!************************************!*\
  !*** ./src/app/httpClient/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _table_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-element */ "./src/app/httpClient/table-element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data) {
        var _this = _super.call(this, data) || this;
        _this.nameMapping = {};
        _this.blackList = [
            'created_at',
            'updated_at'
        ];
        _this.nameMapping['name'] = 'Name';
        _this.nameMapping['email'] = 'Email';
        _this.nameMapping['studentNumber'] = 'Student number';
        return _this;
        // Name Mapping
    }
    return User;
}(_table_element__WEBPACK_IMPORTED_MODULE_0__["TableElement"]));



/***/ }),

/***/ "./src/app/httpClient/utils.ts":
/*!*************************************!*\
  !*** ./src/app/httpClient/utils.ts ***!
  \*************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment */ "./src/app/httpClient/equipment.ts");
/* harmony import */ var _json_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-element */ "./src/app/httpClient/json-element.ts");
/* harmony import */ var _table_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-element */ "./src/app/httpClient/table-element.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/httpClient/user.ts");
/* harmony import */ var _rent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rent */ "./src/app/httpClient/rent.ts");
/* harmony import */ var _time_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-log */ "./src/app/httpClient/time-log.ts");






var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * convert objects into a nicer format
     * @param data - dictionary
     * @return - Array of JsonElement
     */
    Utils.object2JsonElement = function (data) {
        var _this = this;
        var elements = [];
        if (typeof data === 'object') {
            var _loop_1 = function (key) {
                // There is some nested elements
                if (typeof data[key] === 'object') {
                    elements.push(new _json_element__WEBPACK_IMPORTED_MODULE_1__["JsonElement"](key, this_1.object2JsonElement(data[key])));
                }
                else if (Array.isArray(data[key])) {
                    console.log("is arrya");
                    var tempArray_1 = [];
                    data[key].forEach(function (item) {
                        tempArray_1.push(_this.object2JsonElement(item));
                    });
                    elements.push(new _json_element__WEBPACK_IMPORTED_MODULE_1__["JsonElement"](key, tempArray_1));
                }
                else {
                    elements.push(new _json_element__WEBPACK_IMPORTED_MODULE_1__["JsonElement"](key, data[key]));
                }
            };
            var this_1 = this;
            // Add all keyes to the array
            for (var key in data) {
                _loop_1(key);
            }
        }
        return elements;
    };
    Utils.object2Equipment = function (data) {
        var _this = this;
        var equipment = [];
        // Is there several equipment?
        if (Array.isArray(data)) {
            data.forEach(function (item) {
                equipment.push(new _equipment__WEBPACK_IMPORTED_MODULE_0__["Equipment"](_this.object2JsonElement(item)));
            });
            return equipment;
        }
        // If only single equipment
        equipment.push(new _equipment__WEBPACK_IMPORTED_MODULE_0__["Equipment"](this.object2JsonElement(data)));
        return equipment;
    };
    /** Creates a general tableElement
      * @param data - Object dictionary
      */
    Utils.object2TableElement = function (data) {
        var _this = this;
        if (Array.isArray(data)) {
            var elements_1 = [];
            data.forEach(function (item) {
                elements_1.push(new _table_element__WEBPACK_IMPORTED_MODULE_2__["TableElement"](_this.object2JsonElement(item)));
            });
            return elements_1;
        }
        return [new _table_element__WEBPACK_IMPORTED_MODULE_2__["TableElement"](this.object2JsonElement(data))];
    };
    Utils.object2User = function (data) {
        var _this = this;
        var user = [];
        // Is there several equipment?
        if (Array.isArray(data)) {
            data.forEach(function (item) {
                user.push(new _user__WEBPACK_IMPORTED_MODULE_3__["User"](_this.object2JsonElement(item)));
            });
            return user;
        }
        // If only single equipment
        user.push(new _user__WEBPACK_IMPORTED_MODULE_3__["User"](this.object2JsonElement(data)));
        return user;
    };
    Utils.object2Rent = function (data) {
        var elements = this.object2TableElement(data);
        var result = [];
        if (Array.isArray(elements)) {
            elements.forEach(function (item) {
                result.push(new _rent__WEBPACK_IMPORTED_MODULE_4__["Rent"](item.data));
            });
        }
        return result;
    };
    Utils.object2Timelog = function (data) {
        var elements = this.object2TableElement(data);
        var result = [];
        if (Array.isArray(elements)) {
            elements.forEach(function (item) {
                result.push(new _time_log__WEBPACK_IMPORTED_MODULE_5__["TimeLog"](item.data));
            });
        }
        return result;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/keis-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/keis-api.service.ts ***!
  \*************************************/
/*! exports provided: KeisAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeisAPIService", function() { return KeisAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _alert_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-service.service */ "./src/app/alert-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Models_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/alert */ "./src/app/Models/alert.ts");
/* harmony import */ var _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./httpClient/utils */ "./src/app/httpClient/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var baseUrl = 'http://localhost/backend/index.php/api';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
var KeisAPIService = /** @class */ (function () {
    function KeisAPIService(httpClient, alertService) {
        this.httpClient = httpClient;
        this.alertService = alertService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    // Combines the baseUrl with an uri
    // Makes sure there a correct slash
    KeisAPIService.prototype.makeUrl = function (uri) {
        var url = baseUrl;
        if (!url.endsWith('/')) {
            url.concat('/');
        }
        return url.concat(uri);
    };
    KeisAPIService.prototype.getObserver = function () {
        return this.subject.asObservable();
    };
    /**
     *  Notifies all the subscribers
     */
    KeisAPIService.prototype.notifySubjects = function (data, correlationId) {
        this.subject.next({ data: data, correlationId: correlationId });
    };
    /**
       * Returns true if there is an error present
       *
       */
    KeisAPIService.prototype.handleServerErrors = function (data) {
        if (data['error'] !== undefined) {
            this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'server side error', data['error']));
            return true;
        }
        return false;
    };
    KeisAPIService.prototype.getAllEquipment = function (snowflake) {
        var _this = this;
        this.httpClient.get(baseUrl + '/equipment').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2Equipment(item['data']);
            }
            return null;
        })).subscribe(function (data) {
            if (data !== null) {
                _this.notifySubjects(data, snowflake);
            }
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('warning', 'unable to fetch equipment', 'might be cauced by bad configuration '
                + error));
        });
    };
    /**
     *
     * Returns the a single instance of an equipment
     */
    KeisAPIService.prototype.getSingleEquipment = function (snowflake, id) {
        var _this = this;
        this.httpClient.get(baseUrl + '/equipment/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2Equipment(item['data'])[0];
            }
        })).subscribe(function (success) {
            _this.notifySubjects(success, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'cannot fetch some data', 'error: ' + error.error + '\n message: ' + error.message));
        });
    };
    /**
     *  Post data to an API. This function is private while this is the raw implementation
     */
    KeisAPIService.prototype.postData = function (snowflake, uri, data) {
        var _this = this;
        this.httpClient.post(baseUrl + uri, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2TableElement(item);
            }
            return null;
        })).subscribe(function (success) {
            _this.notifySubjects(success, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'unable to post data to ' + baseUrl + uri, 'the keis backend might not be running \n Backend reply: '
                + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.addInstance = function (snowflake, data) {
        this.postData(snowflake, '/instance', data.createObject());
    };
    KeisAPIService.prototype.putData = function (snowflake, uri, data) {
        var _this = this;
        this.httpClient.put(baseUrl + uri, data).subscribe(function (success) {
            _this.notifySubjects(success, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'could not put data', 'the given url: ' + baseUrl + uri + '\n' + error.message + '\nKEIS reply: '));
        });
    };
    KeisAPIService.prototype.updateEquipment = function (snowflake, data, id) {
        this.putData(snowflake, '/equipment/' + id, data.createObject());
    };
    KeisAPIService.prototype.addEquipment = function (snowflake, data) {
        this.postData(snowflake, '/equipment', data.createObject());
    };
    KeisAPIService.prototype.deleteEquipment = function (snowflake, id) {
        var _this = this;
        this.httpClient.delete(baseUrl + '/equipment/' + id).subscribe(function (item) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('info', 'Equipment deleted', ''));
            _this.notifySubjects(true, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'Error deleting equipment', 'Error: ' + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.deleteInstance = function (snowflake, rfid) {
        var _this = this;
        this.httpClient.request('delete', baseUrl + '/instance', { body: { 'RFID': rfid } }).subscribe(function (item) {
            _this.notifySubjects(true, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'Could not delete instance', 'Error: ' + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.getBrandsAndTypes = function (snowflake, uri) {
        var _this = this;
        this.httpClient.get(baseUrl + uri).subscribe(function (data) {
            if (!_this.handleServerErrors(data)) {
                var elements_1 = [];
                if (Array.isArray(data['data'])) {
                    data['data'].forEach(function (item) {
                        elements_1.push(item['name']);
                    });
                    _this.notifySubjects(elements_1, snowflake);
                }
            }
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('warning', 'unable to fetch brand data', 'this is a client side implementation issue'));
        });
    };
    KeisAPIService.prototype.snowflake = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 15; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    KeisAPIService.prototype.verifyRFID = function (snowflake, rfid) {
        var _this = this;
        this.httpClient.post(baseUrl + '/rfid', { 'rfid': rfid }).subscribe(function (item) {
            if (item['success']) {
                _this.notifySubjects(true, snowflake);
                return;
            }
            _this.notifySubjects(false, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('warning', 'could not verify RFID', 'submission of equipment will still work'));
        });
    };
    // USER RELATED
    KeisAPIService.prototype.createUser = function (snowflake, data) {
        this.postData(snowflake, '/user', data.createObject());
    };
    KeisAPIService.prototype.updateUser = function (snowflake, id, data) {
        this.putData(snowflake, '/user/' + id, data.createObject());
    };
    KeisAPIService.prototype.deleteUser = function (snowflake, id) {
        var _this = this;
        this.httpClient.request('delete', baseUrl + '/user/' + id).subscribe(function (item) {
            if (!_this.handleServerErrors(item)) {
                _this.notifySubjects(item, snowflake);
            }
        });
    };
    KeisAPIService.prototype.userSearch = function (snowflake, id) {
        var _this = this;
        this.httpClient.get(baseUrl + '/user/search/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                console.log(item);
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2User(item['data']);
            }
        })).subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'error fetching users', 'Error message: ' + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.getAllUsers = function (snowflake) {
        var _this = this;
        this.httpClient.get(baseUrl + '/user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2User(item['data']);
            }
        })).subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'error fetching users', 'Error message: ' + JSON.stringify(error)));
        });
    };
    // RENT RELATED
    KeisAPIService.prototype.createRent = function (snowflake, data) {
        this.postData(snowflake, '/rent', data.createObject());
    };
    KeisAPIService.prototype.getAllRent = function (snowflake) {
        var _this = this;
        this.httpClient.get(baseUrl + '/rent').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2Rent(item['data']);
            }
        })).subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'Unable to fetch rent', 'ErrorString: ' + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.deliverRent = function (snowflake, data) {
        this.postData(snowflake, '/rent/deliver', data.createObject());
    };
    KeisAPIService.prototype.getUserRent = function (snowflake, id) {
        var _this = this;
        this.httpClient.get(baseUrl + '/user/activerent/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                console.log(item);
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2Rent(item['data']);
            }
        })).subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'Could not get user rent', 'Error' + JSON.stringify(error)));
        });
    };
    KeisAPIService.prototype.getRentStatistics = function (snowflake) {
        var _this = this;
        this.httpClient.get(baseUrl + '/stats').subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('warning', 'unable to fetch stats', JSON.stringify(error)));
        });
    };
    // INSTANCE FUNCTION
    KeisAPIService.prototype.getInstance = function (snowflake, id) {
        this.postData(snowflake, '/instance/rfid', { 'RFID': id });
    };
    // TIME LOGG FUNCTIONALITY
    /**
     * Gets one logentry. Usefull for verifying entries
     * @param snowflake - the flakes
     * @param id - id of the logentry
     */
    KeisAPIService.prototype.getLogEntry = function (snowflake, id) {
        var _this = this;
        this.httpClient.get(baseUrl + '/timeLog/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            if (!_this.handleServerErrors(item)) {
                return _httpClient_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].object2TableElement(item['data']);
            }
        })).subscribe(function (item) {
            _this.notifySubjects(item, snowflake);
        }, function (error) {
            _this.alertService.addAlert(new _Models_alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 'Cannot verify timelog', JSON.stringify(error)));
        });
    };
    /**
     * Creates a logentry with thebasic post function
     * @param snowflake - flaky flake
     * @param rfid - string
     */
    KeisAPIService.prototype.createLogEntry = function (snowflake, rfid) {
        this.postData(snowflake, '/timeLog', { 'rfid': rfid });
    };
    /**
     * Updates logEntries
     * @param snowflake - the flaka
     * @param data - TableElement
     */
    KeisAPIService.prototype.updateLogEntry = function (snowflake, data) {
        this.putData(snowflake, '/timeLog', data.createObject());
    };
    KeisAPIService.prototype.getLogStats = function (snowflake, data) {
        this.postData(snowflake, '/timeLog/get', data.createObject());
    };
    KeisAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _alert_service_service__WEBPACK_IMPORTED_MODULE_2__["AlertServiceService"]])
    ], KeisAPIService);
    return KeisAPIService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar-dark.mb-5 {\n  margin-bottom: 0px;\n}\n\nnav.navbar.navbar-dark.bg-dark.mb-5 {\n\n  margin-bottom: 0px!important;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-5\">\n    <a class=\"navbar-brand\" href=\"/\"><b>K</b>EIS <b>E</b>quipment <b>I</b>ndexing <b>S</b>ystem</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar = !toggleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse mr-auto\" [ngbCollapse]=\"!toggleNavbar\">\n        <div class=\"navbar-nav\">\n            <ng-container *ngFor=\"let item of router.config\">\n                <ng-container *ngIf=\"item.data\">\n                    <a class=\"nav-item nav-link\"  routerLinkActive=\"active\" routerLink=\"/{{item.path}}\"> <fa name=\"{{item.data.icon}}\"></fa> {{item.data.title}}</a>\n                </ng-container>\n            </ng-container>\n            <div alert></div>\n        </div>\n    </div>\n    <div class=\"navbar-expand ml-auto navbar-nav\">\n        <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" href=\"https://github.com/klyngen/keis\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n            </a>\n            <a class=\"nav-item nav-link\" href=\"https://twitter.com/beeman_nl\" target=\"_blank\">\n                <i class=\"fa fa-twitter\"></i>\n            </a>\n            <a class=\"nav-item nav-link\" href=\"https://medium.com/@beeman\" target=\"_blank\">\n                <i class=\"fa fa-medium\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, route) {
        this.router = router;
        this.route = route;
        this.toggleNavbar = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/rent/add-rent/add-rent.component.css":
/*!******************************************************!*\
  !*** ./src/app/rent/add-rent/add-rent.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-rent {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/rent/add-rent/add-rent.component.html":
/*!*******************************************************!*\
  !*** ./src/app/rent/add-rent/add-rent.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-rent side-divider\">\n    <h3>Add new rent</h3>\n\n    <div class=\"form-group\">\n        <label>RFID</label>\n        <input required class=\"form-control\" (keyup)=\"rfidVerify(rfid.model)\" #rfid=\"ngModel\" [(ngModel)]=\"_rfid\" name=\"rfid\" type=\"text\" value=\"\"/>\n    </div>\n\n    <div [hidden]=\"_verifiedRfid || !_rfid\" class=\"alert alert-warning\">\n        <b>Warning: </b> field must be an existing RFID. The given RFID does not exist in KEIS.\n    </div>\n\n    <div class=\"form-group\">\n        <label>Student Number</label>\n        <input required class=\"form-control\" #number=\"ngModel\" (keyup)=\"numberVerify(number.model)\" [(ngModel)]=\"_number\" name=\"number\" type=\"text\" value=\"\"/>\n    </div>\n\n    <div [hidden]=\"_verifiedNumber || !_number\" class=\"alert alert-warning\">\n        <b>Warning: </b> field must be an existing user id. The given user does not exist in KEIS.\n    </div>\n\n    <div [hidden]=\"!verRented()\" class=\"alert alert-warning\">\n        <b>Already rented:</b> The magic leprechauns in the pc says the equipment is already rented to someone.\n        Please deliver the equipment before proceeding.\n    </div>\n    <button [disabled]=\"!verified()\" (click)=\"submit()\" class=\"btn btn-primary btn-block\"><fa name=\"floppy-o\"></fa> Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/rent/add-rent/add-rent.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/rent/add-rent/add-rent.component.ts ***!
  \*****************************************************/
/*! exports provided: AddRentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRentComponent", function() { return AddRentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRentComponent = /** @class */ (function () {
    function AddRentComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._rfid = '';
        this._number = '';
        this._verifiedRfid = false;
        this._verifiedNumber = false;
        this._isRented = false;
        this.numberFlake = httpClient.snowflake();
        this.rfidFlake = httpClient.snowflake();
        this.rentFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.numberFlake) {
                item.data.forEach(function (sitem) {
                    if (sitem.getValue('studentNumber') === _this._number) {
                        _this._verifiedNumber = true;
                        return;
                    }
                });
            }
            if (item.correlationId === _this.rfidFlake) {
                if (item.data[0].getValue('data') !== null) {
                    _this._isRented = item.data[0].getValue('data')[5].value;
                    _this._verifiedRfid = true;
                    _this._instanceId = item.data[0].getValue('data')[0].value;
                }
            }
            if (item.correlationId === _this.rentFlake) {
                if (_this._refreshTrigger !== undefined) {
                    _this._refreshTrigger.next();
                }
            }
        });
    }
    Object.defineProperty(AddRentComponent.prototype, "refreshTrigger", {
        set: function (subject) { this._refreshTrigger = subject; },
        enumerable: true,
        configurable: true
    });
    AddRentComponent.prototype.verRented = function () {
        return (this._isRented && this._rfid.length > 0);
    };
    AddRentComponent.prototype.rfidVerify = function (data) {
        this._verifiedRfid = false;
        this.httpClient.getInstance(this.rfidFlake, data);
    };
    AddRentComponent.prototype.numberVerify = function (data) {
        this._verifiedNumber = false;
        this.httpClient.userSearch(this.numberFlake, data);
    };
    AddRentComponent.prototype.submit = function () {
        if (this._verifiedNumber && this._verifiedRfid) {
            // Do stuff
            if (this._rfid === undefined || this._instanceId === undefined) {
                return; // break
            }
            var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_3__["TableElement"]();
            element.setValuePair('instance', this._instanceId);
            element.setValuePair('studentNumber', this._number);
            this.httpClient.createRent(this.rentFlake, element);
        }
    };
    AddRentComponent.prototype.verified = function () {
        if (this._verifiedRfid && this._verifiedNumber && !this._isRented) {
            return true;
        }
        return false;
    };
    AddRentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]])
    ], AddRentComponent.prototype, "refreshTrigger", null);
    AddRentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-rent',
            template: __webpack_require__(/*! ./add-rent.component.html */ "./src/app/rent/add-rent/add-rent.component.html"),
            styles: [__webpack_require__(/*! ./add-rent.component.css */ "./src/app/rent/add-rent/add-rent.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], AddRentComponent);
    return AddRentComponent;
}());



/***/ }),

/***/ "./src/app/rent/delete-rent/delete-rent.component.css":
/*!************************************************************!*\
  !*** ./src/app/rent/delete-rent/delete-rent.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deliver-rent {\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/rent/delete-rent/delete-rent.component.html":
/*!*************************************************************!*\
  !*** ./src/app/rent/delete-rent/delete-rent.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"deliver-rent side-divider\">\n  <h3>Deliver rent</h3>\n  <div class=\"form-group\">\n    <label>RFID</label>\n    <input (keyup)=\"verifyRfid(rfid.model)\" required #rfid=\"ngModel\" [(ngModel)]=\"_rfid\" class=\"form-control\" type=\"text\">\n  </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"condition\">Condition <span class=\"badge badge-primary\">{{_condition}}</span></label>\n        <input [(ngModel)]=\"_condition\" min=\"1\" max=\"10\" class=\"form-control\" id=\"condition\" name=\"condition\" type=\"range\" value=\"\"/>\n    </div>\n\n    <div [hidden]=\"equipmentExists()\" class=\"alert alert-warning\">\n      <b>Cannot find the RFID:</b> I do not think this equipment exists.\n    </div>\n\n    <div [hidden]=\"rented()\" class=\"alert alert-warning\">\n      <b>Not rented: </b> this equipment is not rented to anyone.\n    </div>\n\n    <button [disabled]=\"!verify()\" (click)=\"submit()\" class=\"btn btn-primary btn-block\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/rent/delete-rent/delete-rent.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/rent/delete-rent/delete-rent.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteRentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRentComponent", function() { return DeleteRentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteRentComponent = /** @class */ (function () {
    function DeleteRentComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._condition = 5;
        this._rfid = '';
        this._verifiedRfid = false;
        this._dataFlake = httpClient.snowflake();
        this._deliverFlake = httpClient.snowflake();
        this.httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this._dataFlake) {
                if (item.data[0].getValue('data') !== null) {
                    _this._isRented = item.data[0].getValue('data')[5].value;
                    _this._verifiedRfid = true;
                    _this._condition = item.data[0].getValue('data')[1].value;
                }
                else {
                    _this._verifiedRfid = false;
                }
            }
            if (item.correlationId === _this._deliverFlake) {
                _this._subject.next();
            }
        });
    }
    Object.defineProperty(DeleteRentComponent.prototype, "refreshTrigger", {
        set: function (subject) { this._subject = subject; },
        enumerable: true,
        configurable: true
    });
    DeleteRentComponent.prototype.ngOnInit = function () {
    };
    DeleteRentComponent.prototype.verifyRfid = function (data) {
        this.httpClient.getInstance(this._dataFlake, data);
    };
    DeleteRentComponent.prototype.equipmentExists = function () {
        return (this._rfid.length > 0 && this._verifiedRfid);
    };
    DeleteRentComponent.prototype.rented = function () {
        return (this._isRented > 0 && this._rfid.length > 0);
    };
    DeleteRentComponent.prototype.verify = function () {
        return (this.rented() && !this.equipmentExists);
    };
    DeleteRentComponent.prototype.submit = function () {
        if (this._verifiedRfid) {
            var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__["TableElement"]();
            element.setValuePair('RFID', this._rfid);
            element.setValuePair('condition', this._condition);
            this.httpClient.deliverRent(this._deliverFlake, element);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]])
    ], DeleteRentComponent.prototype, "refreshTrigger", null);
    DeleteRentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-rent',
            template: __webpack_require__(/*! ./delete-rent.component.html */ "./src/app/rent/delete-rent/delete-rent.component.html"),
            styles: [__webpack_require__(/*! ./delete-rent.component.css */ "./src/app/rent/delete-rent/delete-rent.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], DeleteRentComponent);
    return DeleteRentComponent;
}());



/***/ }),

/***/ "./src/app/rent/rent-stats/rent-stats.component.css":
/*!**********************************************************!*\
  !*** ./src/app/rent/rent-stats/rent-stats.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rent/rent-stats/rent-stats.component.html":
/*!***********************************************************!*\
  !*** ./src/app/rent/rent-stats/rent-stats.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rent-stats\">\n  <h3>Rent statistics</h3>\n  <ngx-charts-pie-chart\n    [view]=\"[_size, _size]\"\n    [results]=\"_data\"\n    [legend]=\"true\">\n\n  </ngx-charts-pie-chart>\n</div>"

/***/ }),

/***/ "./src/app/rent/rent-stats/rent-stats.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/rent/rent-stats/rent-stats.component.ts ***!
  \*********************************************************/
/*! exports provided: RentStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentStatsComponent", function() { return RentStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentStatsComponent = /** @class */ (function () {
    function RentStatsComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._size = 500;
        this._data = [{ 'name': 'test', 'value': 50 }, { 'name': 'to', 'value': 20 }];
        this._fetchFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            if (_this._fetchFlake === item.correlationId) {
                var temp = [];
                for (var key in item.data) {
                    temp.push({ name: key.charAt(0).toUpperCase() + key.slice(1), value: item.data[key] });
                }
                _this._data = temp;
            }
        });
    }
    RentStatsComponent.prototype.ngOnInit = function () {
        this._size = $('.rentData').width();
        this.httpClient.getRentStatistics(this._fetchFlake);
    };
    RentStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rent-stats',
            template: __webpack_require__(/*! ./rent-stats.component.html */ "./src/app/rent/rent-stats/rent-stats.component.html"),
            styles: [__webpack_require__(/*! ./rent-stats.component.css */ "./src/app/rent/rent-stats/rent-stats.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], RentStatsComponent);
    return RentStatsComponent;
}());



/***/ }),

/***/ "./src/app/rent/rent.component.css":
/*!*****************************************!*\
  !*** ./src/app/rent/rent.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron.jumbotron-fluid.titletron {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   width%3D%22100mm%22   height%3D%22200mm%22   viewBox%3D%220 0 100 200%22   version%3D%221.1%22   id%3D%22svg2111%22   inkscape%3Aversion%3D%220.92.3 (2405546%2C 2018-03-11)%22   sodipodi%3Adocname%3D%22reddrop.svg%22%3E  %3Cdefs     id%3D%22defs2105%22%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       id%3D%22linearGradient2662%22%3E      %3Cstop         style%3D%22stop-color%3A%23ff5142%3Bstop-opacity%3A1%22         offset%3D%220%22         id%3D%22stop2658%22 %2F%3E      %3Cstop         style%3D%22stop-color%3A%235454a4%3Bstop-opacity%3A0%3B%22         offset%3D%221%22         id%3D%22stop2660%22 %2F%3E    %3C%2FlinearGradient%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       xlink%3Ahref%3D%22%23linearGradient2662%22       id%3D%22linearGradient2670%22       x1%3D%22246.44048%22       y1%3D%22117.08334%22       x2%3D%22247.95236%22       y2%3D%22919.14886%22       gradientUnits%3D%22userSpaceOnUse%22       gradientTransform%3D%22matrix(0.20090632%2C0%2C0%2C1%2C0%2C-1.5119048)%22 %2F%3E  %3C%2Fdefs%3E  %3Csodipodi%3Anamedview     id%3D%22base%22     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221.0%22     inkscape%3Apageopacity%3D%220.0%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Azoom%3D%220.35%22     inkscape%3Acx%3D%2244.721421%22     inkscape%3Acy%3D%22438.76534%22     inkscape%3Adocument-units%3D%22mm%22     inkscape%3Acurrent-layer%3D%22layer1%22     showgrid%3D%22false%22     inkscape%3Ashowpageshadow%3D%22false%22     inkscape%3Awindow-width%3D%221863%22     inkscape%3Awindow-height%3D%221025%22     inkscape%3Awindow-x%3D%2257%22     inkscape%3Awindow-y%3D%2227%22     inkscape%3Awindow-maximized%3D%221%22 %2F%3E  %3Cmetadata     id%3D%22metadata2108%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cg     inkscape%3Alabel%3D%22Layer 1%22     inkscape%3Agroupmode%3D%22layer%22     id%3D%22layer1%22     transform%3D%22translate(0%2C-97)%22%3E    %3Crect       style%3D%22opacity%3A1%3Bfill%3Aurl(%23linearGradient2670)%3Bfill-opacity%3A1%3Bstroke%3Anone%3Bstroke-width%3A0.3935422%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22       id%3D%22rect2656%22       width%3D%22100.54165%22       height%3D%22202.59525%22       x%3D%220%22       y%3D%2295.160721%22 %2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n}"

/***/ }),

/***/ "./src/app/rent/rent.component.html":
/*!******************************************!*\
  !*** ./src/app/rent/rent.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid titletron\">\n    <div class=\"container\">\n        <h1 class=\"display-4\"><fa name=\"exchange\"></fa> Rent</h1>\n        <p class=\"lead\">\n            This is the place for handling the rents\n        </p>\n    </div>\n\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <dynamic-table [observeData]=\"_dataSubject\" (clicked)=\"clicked($event)\" ></dynamic-table>\n            \n        </div>\n\n        <div class=\"col-md-4  rentData\">\n            <div [ngClass]=\"{'unloaded': !loaded}\">\n                <add-rent [refreshTrigger]=\"_refreshTrigger\"></add-rent>\n                <delete-rent [refreshTrigger]=\"_refreshTrigger\"></delete-rent>\n                <rent-stats></rent-stats>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rent/rent.component.ts":
/*!****************************************!*\
  !*** ./src/app/rent/rent.component.ts ***!
  \****************************************/
/*! exports provided: RentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentComponent", function() { return RentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keis-api.service */ "./src/app/keis-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentComponent = /** @class */ (function () {
    function RentComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaded = true;
        this._refreshTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rentFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.rentFlake) {
                console.log(item.data);
                if (item.data) {
                    _this._dataSubject.next(item.data);
                }
            }
        });
        this._refreshTrigger.asObservable().subscribe(function (item) {
            httpClient.getAllRent(_this.rentFlake);
            console.log("yay");
        });
    }
    RentComponent.prototype.ngOnInit = function () {
        this.httpClient.getAllRent(this.rentFlake);
    };
    RentComponent.prototype.clicked = function (event) {
        console.log(event);
    };
    RentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rent',
            template: __webpack_require__(/*! ./rent.component.html */ "./src/app/rent/rent.component.html"),
            styles: [__webpack_require__(/*! ./rent.component.css */ "./src/app/rent/rent.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_2__["KeisAPIService"]])
    ], RentComponent);
    return RentComponent;
}());



/***/ }),

/***/ "./src/app/small/drop-down-input/drop-down-input.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/small/drop-down-input/drop-down-input.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/small/drop-down-input/drop-down-input.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/small/drop-down-input/drop-down-input.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<label >{{_label}}</label>\n<div class=\"input-group\">\n  <input value=\"{{_value}}\" placeholder=\"{{_placeholder}}\" (change)=\"valueChanged($event)\" class=\"form-control\" name=\"\" type=\"text\" />\n  <div ngbDropdown>\n    <button ngbDropdownToggle class=\"form-control btn btn-outline-primary\">{{_label}}</button>\n    <div ngbDropdownMenu>\n        <ng-container *ngFor=\"let item of _alternatives\">\n            <button (click)=\"select(item)\" class=\"dropdown-item\">{{item}}</button>\n        </ng-container>\n      <ng-container *ngIf=\"!_alternatives.length\">\n          <button disabled class=\"dropdown-item\">No alternatives</button>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/small/drop-down-input/drop-down-input.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/small/drop-down-input/drop-down-input.component.ts ***!
  \********************************************************************/
/*! exports provided: DropDownInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownInputComponent", function() { return DropDownInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropDownInputComponent = /** @class */ (function () {
    function DropDownInputComponent(config) {
        this._alternatives = [];
        this._value = '';
        this._placeholder = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        config.placement = 'bottom-right';
    }
    Object.defineProperty(DropDownInputComponent.prototype, "label", {
        set: function (label) {
            this._label = label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownInputComponent.prototype, "alternatives", {
        set: function (alternatives) {
            this._alternatives = alternatives;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownInputComponent.prototype, "placeholder", {
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownInputComponent.prototype, "value", {
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    DropDownInputComponent.prototype.select = function (item) {
        this._value = item;
        this.valueChange.emit(item);
    };
    DropDownInputComponent.prototype.valueChanged = function (value) {
        this.valueChange.emit(value.target.value);
    };
    DropDownInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropDownInputComponent.prototype, "label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DropDownInputComponent.prototype, "alternatives", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropDownInputComponent.prototype, "placeholder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropDownInputComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropDownInputComponent.prototype, "valueChange", void 0);
    DropDownInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drop-down-input',
            template: __webpack_require__(/*! ./drop-down-input.component.html */ "./src/app/small/drop-down-input/drop-down-input.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-input.component.css */ "./src/app/small/drop-down-input/drop-down-input.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])
    ], DropDownInputComponent);
    return DropDownInputComponent;
}());



/***/ }),

/***/ "./src/app/timelog-stats/timelog-stats.component.css":
/*!***********************************************************!*\
  !*** ./src/app/timelog-stats/timelog-stats.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.jumbotron.jumbotron-fluid.titletron {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   width%3D%22100mm%22   height%3D%22200mm%22   viewBox%3D%220 0 100 200%22   version%3D%221.1%22   id%3D%22svg2111%22   inkscape%3Aversion%3D%220.92.3 (2405546%2C 2018-03-11)%22   sodipodi%3Adocname%3D%22orangedrop.svg%22%3E  %3Cdefs     id%3D%22defs2105%22%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       id%3D%22linearGradient2662%22%3E      %3Cstop         style%3D%22stop-color%3A%23ffaa35%3Bstop-opacity%3A1%22         offset%3D%220%22         id%3D%22stop2658%22 %2F%3E      %3Cstop         style%3D%22stop-color%3A%23ffffff%3Bstop-opacity%3A1%22         offset%3D%221%22         id%3D%22stop2660%22 %2F%3E    %3C%2FlinearGradient%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       xlink%3Ahref%3D%22%23linearGradient2662%22       id%3D%22linearGradient2670%22       x1%3D%22246.44048%22       y1%3D%22117.08334%22       x2%3D%22246.071%22       y2%3D%22530.15985%22       gradientUnits%3D%22userSpaceOnUse%22       gradientTransform%3D%22matrix(0.20090632%2C0%2C0%2C1%2C0%2C-1.5119048)%22 %2F%3E  %3C%2Fdefs%3E  %3Csodipodi%3Anamedview     id%3D%22base%22     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221.0%22     inkscape%3Apageopacity%3D%220.0%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Azoom%3D%221.979899%22     inkscape%3Acx%3D%22174.5071%22     inkscape%3Acy%3D%22488.62411%22     inkscape%3Adocument-units%3D%22mm%22     inkscape%3Acurrent-layer%3D%22layer1%22     showgrid%3D%22false%22     inkscape%3Ashowpageshadow%3D%22false%22     inkscape%3Awindow-width%3D%221863%22     inkscape%3Awindow-height%3D%221025%22     inkscape%3Awindow-x%3D%2257%22     inkscape%3Awindow-y%3D%2227%22     inkscape%3Awindow-maximized%3D%221%22 %2F%3E  %3Cmetadata     id%3D%22metadata2108%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cg     inkscape%3Alabel%3D%22Layer 1%22     inkscape%3Agroupmode%3D%22layer%22     id%3D%22layer1%22     transform%3D%22translate(0%2C-97)%22%3E    %3Crect       style%3D%22opacity%3A1%3Bfill%3Aurl(%23linearGradient2670)%3Bfill-opacity%3A1%3Bstroke%3Anone%3Bstroke-width%3A0.3935422%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22       id%3D%22rect2656%22       width%3D%22100.54165%22       height%3D%22202.59525%22       x%3D%220%22       y%3D%2295.160721%22 %2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n"

/***/ }),

/***/ "./src/app/timelog-stats/timelog-stats.component.html":
/*!************************************************************!*\
  !*** ./src/app/timelog-stats/timelog-stats.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid titletron\">\n    <div class=\"container\">\n        <h1 class=\"display-4\"><fa name=\"table\"></fa> Time reports</h1>\n        <p class=\"lead\">\n            Create and export time reports\n        </p>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <h3>Choose you timespan</h3>\n\n        <div class=\"form-group\">\n            <label for=\"\">From</label>\n            <input (change)=\"verify()\" [(ngModel)]=\"_from\" class=\"form-control\" name=\"\" type=\"date\" value=\"\"/>\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"\">To</label>\n            <input (change)=\"verify()\" [(ngModel)]=\"_to\" class=\"form-control\" name=\"\" type=\"date\" value=\"\"/>\n        </div>\n\n\n    <hr/>\n\n    <dynamic-table [observeData]=\"_tableData\"></dynamic-table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/timelog-stats/timelog-stats.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/timelog-stats/timelog-stats.component.ts ***!
  \**********************************************************/
/*! exports provided: TimelogStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogStatsComponent", function() { return TimelogStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _httpClient_time_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../httpClient/time-log */ "./src/app/httpClient/time-log.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as FileSaver from 'file-saver';
var TimelogStatsComponent = /** @class */ (function () {
    function TimelogStatsComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._processed = [];
        this._chartData = [];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.fetchFlake = httpClient.snowflake();
        this.httpClient.getObserver().subscribe(function (item) {
            // A hell of a function
            if (item.correlationId === _this.fetchFlake) {
                console.log(item.data[0].getValue('data'));
                var data_1 = [];
                item.data[0].getValue('data').forEach(function (sitem) {
                    data_1.push(new _httpClient_time_log__WEBPACK_IMPORTED_MODULE_4__["TimeLog"](sitem.value));
                });
                console.log(data_1);
                var processed_1 = [];
                var done_1 = [];
                data_1.forEach(function (sitem) {
                    var snumber = sitem.getValue('studentNumber');
                    sitem.setValuePair('times', 1);
                    var alreadyProcessed = false;
                    done_1.forEach(function (finished) {
                        if (finished === snumber) {
                            alreadyProcessed = true;
                        }
                    });
                    if (!alreadyProcessed) {
                        data_1.forEach(function (ssitem) {
                            var ssnumber = ssitem.getValue('studentNumber');
                            if (snumber === ssnumber) {
                                sitem.setValue('hours', sitem.getValue('hours') +
                                    ssitem.getValue('hours'));
                                sitem.setValue('times', sitem.getValue('times') + 1);
                            }
                        });
                        done_1.push(snumber);
                        processed_1.push(sitem);
                    }
                });
                _this._tableData.next(processed_1);
                _this._processed = processed_1;
            }
        });
    }
    TimelogStatsComponent.prototype.ngOnInit = function () {
    };
    TimelogStatsComponent.prototype.verify = function () {
        if (this._to !== undefined && this._from !== undefined) {
            var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_2__["TableElement"]();
            element.setValuePair('beginning', this._from);
            element.setValuePair('end', this._to);
            this.httpClient.getLogStats(this.fetchFlake, element);
        }
    };
    TimelogStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'timelog-stats',
            template: __webpack_require__(/*! ./timelog-stats.component.html */ "./src/app/timelog-stats/timelog-stats.component.html"),
            styles: [__webpack_require__(/*! ./timelog-stats.component.css */ "./src/app/timelog-stats/timelog-stats.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_3__["KeisAPIService"]])
    ], TimelogStatsComponent);
    return TimelogStatsComponent;
}());



/***/ }),

/***/ "./src/app/timelog/end-time.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/timelog/end-time.directive.ts ***!
  \***********************************************/
/*! exports provided: EndTimeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndTimeDirective", function() { return EndTimeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EndTimeDirective = /** @class */ (function () {
    function EndTimeDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    EndTimeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[endTime]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], EndTimeDirective);
    return EndTimeDirective;
}());



/***/ }),

/***/ "./src/app/timelog/stats/stats.component.css":
/*!***************************************************!*\
  !*** ./src/app/timelog/stats/stats.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timelog/stats/stats.component.html":
/*!****************************************************!*\
  !*** ./src/app/timelog/stats/stats.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stats works!\n</p>\n"

/***/ }),

/***/ "./src/app/timelog/stats/stats.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timelog/stats/stats.component.ts ***!
  \**************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/timelog/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/timelog/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/timelog/timelog.component.css":
/*!***********************************************!*\
  !*** ./src/app/timelog/timelog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group.big-group {\n    width: 100%;\n}\n\n.btn.big-btn {\n    width: 50%;\n    height: 150px;\n}\n\n.timelog {\n    margin-top: 50px;\n    margin-bottom: 50px;\n}"

/***/ }),

/***/ "./src/app/timelog/timelog.component.html":
/*!************************************************!*\
  !*** ./src/app/timelog/timelog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timelog\">\n  <h3>Time to logg some time</h3>\n    <div class=\"btn-group big-group\">\n        <button (click)=\"openModal(checkin, '#openField')\"  class=\"btn\n                         btn-outline-success btn-lg big-btn\"> <h3> <fa name=\"sign-in\"></fa> Check in</h3> </button>\n        <button (click)=\"openModal(checkout, '#closeField')\" class=\"btn\n                         btn-outline-danger btn-lg big-btn\"><h3> <fa name=\"sign-out\"></fa> Check out</h3></button>\n    </div>\n\n\n</div>\n\n\n    <ng-template #checkin let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Swipe card to check in</h4>\n\n\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); closedModal()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n          <img [hidden]=\"_checkedIn\" style=\"width:60%; margin: 10px;\" class=\"mx-auto d-block\" src=\"assets/nfc.png\" alt=\"\">\n          <h1 [hidden]=\"!_checkedIn\" style=\"text-align: center\"> <fa name=\"chceck\"></fa></h1>\n          <div class=\"alert alert-success\" [hidden]=\"!_checkedIn\" style=\"text-align: center\"> Checked inn successfully </div>\n            <div class=\"alert alert-danger\" [hidden]=\"!_alreadyChecked\"> <b>Danger:</b> Already checked in. Please check out first</div>\n          <div endTime></div>\n\n        </div>\n\n        <div class=\"modal-footer\">\n            <input [(ngModel)]=\"_rfid\" (keyup)=\"checkInPress()\" id=\"openField\"  type=\"text\" class=\"form-control\">\n        </div>\n    </ng-template>\n    \n  \n\n\n    <ng-template #checkout let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Swipe card to check out</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click'); closedModal()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div [hidden]=\"_overClock\">\n                <img style=\"width:60%; margin: 10px;\" class=\"mx-auto d-block\" src=\"assets/nfc.png\" alt=\"\">\n            </div>\n\n            <div [hidden]=\"!_overClock\">\n                <div class=\"alert alert-info\">\n                    <b>Info:</b> I suspect you forgot to log out some time ago. Please tell me when you left the lab\n                </div>\n            <owl-date-time-inline class=\"mx-auto\" [(ngModel)]=\"_date\" #dt></owl-date-time-inline>\n            </div>\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <input [(ngModel)]=\"_rfid\" (keyup)=\"checkOutPress()\" id=\"closeField\" type=\"text\" class=\"form-control\">\n            <button (click)=\"postWithTime()\" [hidden]=\"!_overClock\" class=\"btn btn-primary btn-block\">Submit</button>\n        </div>\n    </ng-template>\n"

/***/ }),

/***/ "./src/app/timelog/timelog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/timelog/timelog.component.ts ***!
  \**********************************************/
/*! exports provided: TimelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogComponent", function() { return TimelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _end_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end-time.directive */ "./src/app/timelog/end-time.directive.ts");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelogComponent = /** @class */ (function () {
    function TimelogComponent(httpClient, modalService) {
        var _this = this;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this._checkedIn = false;
        this._alreadyChecked = false;
        this._overClock = false;
        this._date = null;
        this.waiting = false;
        this.confirmFlake = httpClient.snowflake();
        this.updateFlake = httpClient.snowflake();
        this.createFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            switch (item.correlationId) {
                case _this.createFlake:
                    if (item.data[0].getValue('success') === 'true') {
                        // The check in was successfull
                        _this._checkedIn = true;
                        setTimeout(function () {
                            // Reset the status
                            _this._checkedIn = false;
                            _this._alreadyChecked = false;
                            // Close the modal
                            _this.reference.close();
                            _this._rfid = '';
                        }, 1000);
                    }
                    else if (item.data[0].getValue('success') === 'false') {
                        // Already checked in
                        _this._alreadyChecked = true;
                        _this._overClock = true;
                    }
                    break;
                case _this.confirmFlake:
                    console.log(item.data);
                    break;
                case _this.updateFlake:
                    console.log(item.data);
                    var error = item.data.error;
                    if (error !== null) {
                        if (error === "false") {
                            _this._overClock = true;
                            return;
                        }
                        else {
                        }
                    }
                    else {
                        _this._overClock = false;
                        _this.reference.close();
                        _this._rfid = '';
                        _this._date = null;
                    }
                    _this._rfid = '';
                    _this.reference.close();
                    break;
                default:
                    console.log(item.data);
                    break;
            }
        });
    }
    TimelogComponent.prototype.ngOnInit = function () {
    };
    TimelogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.queryList.map(function (timeLogger) {
            return timeLogger.viewContainerRef.createEmbeddedView(_this.timeTemplateRef);
        });
    };
    TimelogComponent.prototype.checkIn = function () {
    };
    TimelogComponent.prototype.postWithTime = function () {
        this._overClock = false;
        this.waiting = false;
        var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_4__["TableElement"]();
        element.setValuePair('stop', this._date);
        console.log(this._date);
        element.setValuePair('rfid', this._rfid);
        this.httpClient.updateLogEntry(this.updateFlake, element);
    };
    TimelogComponent.prototype.waitAndCheckOut = function () {
        var _this = this;
        this.waiting = true;
        setTimeout(function () {
            console.log('checkout function runned');
            var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_4__["TableElement"]();
            element.setValuePair('rfid', _this._rfid);
            _this.httpClient.updateLogEntry(_this.updateFlake, element);
            _this.waiting = false;
        }, 1000);
    };
    TimelogComponent.prototype.press = function () {
    };
    TimelogComponent.prototype.funcyFunc = function () {
    };
    TimelogComponent.prototype.waitAndCheckIn = function () {
        var _this = this;
        this.waiting = true;
        setTimeout(function () {
            _this.httpClient.createLogEntry(_this.createFlake, _this._rfid);
            _this.waiting = false;
        }, 1000);
    };
    TimelogComponent.prototype.checkInPress = function () {
        if (!this.waiting) {
            this.waitAndCheckIn();
        }
    };
    TimelogComponent.prototype.checkOutPress = function () {
        if (!this.waiting) {
            this.waitAndCheckOut();
        }
    };
    TimelogComponent.prototype.openModal = function (content, innput) {
        this.reference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        $(innput).focus();
    };
    TimelogComponent.prototype.verifyRFID = function (data) {
        this.httpClient.getLogEntry(this.confirmFlake, this._rfid);
    };
    TimelogComponent.prototype.closedModal = function () {
        this._rfid = '';
        this._date = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('timePlate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TimelogComponent.prototype, "timeTemplateRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_end_time_directive__WEBPACK_IMPORTED_MODULE_3__["EndTimeDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TimelogComponent.prototype, "queryList", void 0);
    TimelogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'timelog',
            template: __webpack_require__(/*! ./timelog.component.html */ "./src/app/timelog/timelog.component.html"),
            styles: [__webpack_require__(/*! ./timelog.component.css */ "./src/app/timelog/timelog.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], TimelogComponent);
    return TimelogComponent;
}());



/***/ }),

/***/ "./src/app/users/add-user/add-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-user side-divider\">\n    <ng-container *ngIf=\"_newUser\">\n        <h3>New user</h3>\n    </ng-container>\n\n    <ng-container *ngIf=\"!_newUser\">\n        <h3>Update user</h3>\n    </ng-container>\n\n    <div class=\"form-group\">\n        <label for=\"\">Studentnumber</label>\n        <input (keyup)=\"verifyNumber(number.model)\" name=\"studentnumber\" [(ngModel)]=\"_studentNumber\" #number=\"ngModel\" required class=\"form-control\"  type=\"text\" value=\"\"/>\n    </div>\n    <div [hidden]=\"!_userExist\" class=\"alert alert-danger\">\n        <b>Number in use</b> this number is already in use\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">Email</label>\n        <input name=\"email\" [(ngModel)]=\"_email\" #email=\"ngModel\" required class=\"form-control\" type=\"email\" value=\"\"/>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input name=\"name\" [(ngModel)]=\"_name\" #name=\"ngModel\" required class=\"form-control\" type=\"text\" value=\"\"/>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"\">RFID(optional)</label>\n        <input #studentRFID=\"ngModel\" [(ngModel)]=\"_studentRfid\" type=\"text\" class=\"form-control\">\n    </div>\n\n    <div [hidden]=\"verify()\" class=\"alert alert-info\">\n        <b>Info</b> all fields has to be filled to be able to submit\n    </div>\n    <button [disabled]=\"!verify()\" (click)=\"submit()\" class=\"btn btn-primary btn-block\"><fa name=\"floppy-o\"></fa> Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpClient_table_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../httpClient/table-element */ "./src/app/httpClient/table-element.ts");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(httpClient) {
        this.httpClient = httpClient;
        // User data
        this._studentNumber = '';
        this._studentRfid = '';
        this._email = '';
        this._name = '';
        this._newUser = false;
        this._loaded = false;
        this._userExist = false;
        this.newElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addFlake = httpClient.snowflake();
        this.updateFlake = httpClient.snowflake();
        this.searchFlake = httpClient.snowflake();
    }
    Object.defineProperty(AddUserComponent.prototype, "data", {
        set: function (element) {
            if (element !== undefined) {
                this._data = element;
                this._name = element.getValue('name');
                this._email = element.getValue('email');
                this._studentNumber = element.getValue('studentNumber');
                this._newUser = false;
                this._loaded = true;
                return;
            }
            this._loaded = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddUserComponent.prototype, "updateTrigger", {
        set: function (subject) { this._updateTrigger = subject; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddUserComponent.prototype, "newTrigger", {
        set: function (subject) {
            var _this = this;
            subject.asObservable().subscribe(function (item) {
                _this._email = '';
                _this._name = '';
                _this._studentNumber = '';
                _this._newUser = true;
                _this._loaded = true;
            });
        },
        enumerable: true,
        configurable: true
    });
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.addFlake) {
                //this.newElement.emit(item.data);
                if (_this._updateTrigger) {
                    _this._updateTrigger.next();
                }
            }
            else if (item.correlationId === _this.updateFlake) {
                if (_this._updateTrigger) {
                    _this._updateTrigger.next();
                }
            }
            else if (item.correlationId === _this.searchFlake) {
                if (item.data.length > 0) {
                    _this._userExist = false;
                    item.data.forEach(function (it) {
                        if (it.getValue('studentNumber') === _this._studentNumber) {
                            _this._userExist = true;
                            return;
                        }
                    });
                }
                else {
                    _this._userExist = false;
                }
            }
        });
    };
    AddUserComponent.prototype.verify = function () {
        // Do the network call
        if (this._name.length > 0 && this._email.length > 0 && this._studentNumber.length > 0 && ((!this._userExist && this._newUser) || (!this._newUser))) {
            return true;
        }
        return false;
    };
    AddUserComponent.prototype.verifyNumber = function (data) {
        this.httpClient.userSearch(this.searchFlake, data);
    };
    AddUserComponent.prototype.submit = function () {
        if (this.verify()) {
            var element = new _httpClient_table_element__WEBPACK_IMPORTED_MODULE_1__["TableElement"]();
            element.setValuePair('name', this._name);
            element.setValuePair('email', this._email);
            element.setValuePair('studentNumber', this._studentNumber);
            if (this._studentRfid.length > 0) {
                element.setValuePair('rfid', this._studentRfid);
            }
            if (this._newUser) {
                this.httpClient.createUser(this.addFlake, element);
                return;
            }
            if (!this._userExist) {
                this.httpClient.updateUser(this.updateFlake, this._data.getValue('id'), element);
                return;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "newElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_table_element__WEBPACK_IMPORTED_MODULE_1__["TableElement"]),
        __metadata("design:paramtypes", [_httpClient_table_element__WEBPACK_IMPORTED_MODULE_1__["TableElement"]])
    ], AddUserComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]])
    ], AddUserComponent.prototype, "updateTrigger", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]])
    ], AddUserComponent.prototype, "newTrigger", null);
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/users/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_2__["KeisAPIService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/users/user-rent/user-rent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-rent/user-rent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-rent {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/users/user-rent/user-rent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/user-rent/user-rent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-rent side-divider\">\n    <h3>User active rent</h3>\n\n    <!-- Loop some shit -->\n    <ul class=\"list-group\">\n        <li *ngFor=\"let item of _data\" class=\"list-group-item\">\n            <b>{{item.getValue('brands')}}</b> {{item.getValue('model')}}\n        </li>\n    </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/users/user-rent/user-rent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-rent/user-rent.component.ts ***!
  \********************************************************/
/*! exports provided: UserRentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRentComponent", function() { return UserRentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var _httpClient_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../httpClient/user */ "./src/app/httpClient/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRentComponent = /** @class */ (function () {
    function UserRentComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.rentFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.rentFlake) {
                console.log(item.data);
                _this._data = item.data;
            }
        });
    }
    Object.defineProperty(UserRentComponent.prototype, "user", {
        set: function (user) {
            this._user = user;
            if (this._user !== undefined) {
                console.log(this._user.getValue('id'));
                this.httpClient.getUserRent(this.rentFlake, this._user.getValue('id'));
            }
        },
        enumerable: true,
        configurable: true
    });
    UserRentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_user__WEBPACK_IMPORTED_MODULE_2__["User"]),
        __metadata("design:paramtypes", [_httpClient_user__WEBPACK_IMPORTED_MODULE_2__["User"]])
    ], UserRentComponent.prototype, "user", null);
    UserRentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-rent',
            template: __webpack_require__(/*! ./user-rent.component.html */ "./src/app/users/user-rent/user-rent.component.html"),
            styles: [__webpack_require__(/*! ./user-rent.component.css */ "./src/app/users/user-rent/user-rent.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], UserRentComponent);
    return UserRentComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.new-button {\n    margin-bottom: 30px;\n}\n\n.jumbotron.jumbotron-fluid.titletron {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg   xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22   xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22   xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22   xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22   xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22   xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22   xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22   width%3D%22100mm%22   height%3D%22200mm%22   viewBox%3D%220 0 100 200%22   version%3D%221.1%22   id%3D%22svg2111%22   inkscape%3Aversion%3D%220.92.3 (2405546%2C 2018-03-11)%22   sodipodi%3Adocname%3D%22greendrop.svg%22%3E  %3Cdefs     id%3D%22defs2105%22%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       id%3D%22linearGradient2662%22%3E      %3Cstop         style%3D%22stop-color%3A%2355a154%3Bstop-opacity%3A1%22         offset%3D%220%22         id%3D%22stop2658%22 %2F%3E      %3Cstop         style%3D%22stop-color%3A%235454a4%3Bstop-opacity%3A0%3B%22         offset%3D%221%22         id%3D%22stop2660%22 %2F%3E    %3C%2FlinearGradient%3E    %3ClinearGradient       inkscape%3Acollect%3D%22always%22       xlink%3Ahref%3D%22%23linearGradient2662%22       id%3D%22linearGradient2670%22       x1%3D%22246.44048%22       y1%3D%22117.08334%22       x2%3D%22247.95236%22       y2%3D%22919.14886%22       gradientUnits%3D%22userSpaceOnUse%22       gradientTransform%3D%22matrix(0.20090632%2C0%2C0%2C1%2C0%2C-1.5119048)%22 %2F%3E  %3C%2Fdefs%3E  %3Csodipodi%3Anamedview     id%3D%22base%22     pagecolor%3D%22%23ffffff%22     bordercolor%3D%22%23666666%22     borderopacity%3D%221.0%22     inkscape%3Apageopacity%3D%220.0%22     inkscape%3Apageshadow%3D%222%22     inkscape%3Azoom%3D%220.35%22     inkscape%3Acx%3D%2244.721421%22     inkscape%3Acy%3D%22438.76534%22     inkscape%3Adocument-units%3D%22mm%22     inkscape%3Acurrent-layer%3D%22layer1%22     showgrid%3D%22false%22     inkscape%3Ashowpageshadow%3D%22false%22     inkscape%3Awindow-width%3D%221863%22     inkscape%3Awindow-height%3D%221025%22     inkscape%3Awindow-x%3D%2257%22     inkscape%3Awindow-y%3D%2227%22     inkscape%3Awindow-maximized%3D%221%22 %2F%3E  %3Cmetadata     id%3D%22metadata2108%22%3E    %3Crdf%3ARDF%3E      %3Ccc%3AWork         rdf%3Aabout%3D%22%22%3E        %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E        %3Cdc%3Atype           rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22 %2F%3E        %3Cdc%3Atitle%3E%3C%2Fdc%3Atitle%3E      %3C%2Fcc%3AWork%3E    %3C%2Frdf%3ARDF%3E  %3C%2Fmetadata%3E  %3Cg     inkscape%3Alabel%3D%22Layer 1%22     inkscape%3Agroupmode%3D%22layer%22     id%3D%22layer1%22     transform%3D%22translate(0%2C-97)%22%3E    %3Crect       style%3D%22opacity%3A1%3Bfill%3Aurl(%23linearGradient2670)%3Bfill-opacity%3A1%3Bstroke%3Anone%3Bstroke-width%3A0.3935422%3Bstroke-miterlimit%3A4%3Bstroke-dasharray%3Anone%3Bstroke-opacity%3A1%22       id%3D%22rect2656%22       width%3D%22100.54165%22       height%3D%22202.59525%22       x%3D%220%22       y%3D%2295.160721%22 %2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n}"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid titletron\">\n    <div class=\"container\">\n        <h1 class=\"display-4\"><fa name=\"users\"></fa> Users</h1>\n        <p class=\"lead\">\n            Add delete and modify users\n        </p>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <button (click)=\"newButton()\" class=\"btn btn-primary btn-block new-button\"><fa name=\"plus\"></fa> New user</button>\n            <dynamic-table [observeData]=\"_dataSubject\" (clicked)=\"clicked($event)\" ></dynamic-table>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"user-management\" [ngClass]=\"{'unloaded': !loaded}\">\n                <add-user [updateTrigger]=\"_refreshObserver\" [newTrigger]=\"_addSubject\" (newElement)=\"newElement()\" [data]=\"_selected\"></add-user>\n                <ng-container *ngIf=\"_selected\">\n                    <delete-user [data]=\"_selected\" [refreshTrigger]=\"_refreshObserver\"></delete-user>\n                    <user-rent [user]=\"_selected\"></user-rent>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._users = [];
        this._addSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._refreshObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._tableReload = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaded = false;
        this.fetchFlake = httpClient.snowflake();
        this.httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.fetchFlake) {
                _this._users = null;
                _this._users = item.data;
                //this._tableReload.next();
                _this._dataSubject.next(item.data);
            }
        });
        this._refreshObserver.asObservable().subscribe(function (item) {
            httpClient.getAllUsers(_this.fetchFlake);
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.httpClient.getAllUsers(this.fetchFlake);
    };
    UsersComponent.prototype.clicked = function (event) {
        this._selected = event;
        this.loaded = true;
    };
    UsersComponent.prototype.newButton = function () {
        this._addSubject.next();
        this.loaded = true;
    };
    UsersComponent.prototype.newElement = function () {
        this.httpClient.getAllUsers(this.fetchFlake);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users/delete-user/delete-user.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/users/users/delete-user/delete-user.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-delete {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/users/users/delete-user/delete-user.component.html":
/*!********************************************************************!*\
  !*** ./src/app/users/users/delete-user/delete-user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-delete side-divider\">\n    <h3>Delete user</h3>\n    <button class=\"btn btn-danger btn-block\" (click)=\"openModal(content)\">Delete</button>\n</div>\n\n<!-- Modal code for confirmation -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Do you really want to do this?</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>\n            Clicking confirm will delete the user\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-danger btn-block\" (click)=\"delete()\">Confirm</button>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/users/users/delete-user/delete-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/users/users/delete-user/delete-user.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _keis_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../keis-api.service */ "./src/app/keis-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _httpClient_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../httpClient/user */ "./src/app/httpClient/user.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteUserComponent = /** @class */ (function () {
    function DeleteUserComponent(httpClient, modalService) {
        var _this = this;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.deleteFlake = httpClient.snowflake();
        httpClient.getObserver().subscribe(function (item) {
            if (item.correlationId === _this.deleteFlake) {
                console.log('Delete response');
                _this.notify();
            }
        });
    }
    Object.defineProperty(DeleteUserComponent.prototype, "refreshTrigger", {
        set: function (sub) { this._subject = sub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteUserComponent.prototype, "data", {
        set: function (data) { this._data = data; },
        enumerable: true,
        configurable: true
    });
    DeleteUserComponent.prototype.notify = function () {
        if (this._subject !== undefined) {
            this._subject.next();
        }
    };
    DeleteUserComponent.prototype.ngOnInit = function () {
    };
    DeleteUserComponent.prototype.openModal = function (content) {
        this.reference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    DeleteUserComponent.prototype.delete = function () {
        if (this._data === undefined) {
            return;
        }
        if (this.reference !== undefined) {
            this.reference.close();
        }
        this.httpClient.deleteUser(this.deleteFlake, this._data.getValue('id'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]),
        __metadata("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]])
    ], DeleteUserComponent.prototype, "refreshTrigger", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _httpClient_user__WEBPACK_IMPORTED_MODULE_3__["User"]),
        __metadata("design:paramtypes", [_httpClient_user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], DeleteUserComponent.prototype, "data", null);
    DeleteUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-user',
            template: __webpack_require__(/*! ./delete-user.component.html */ "./src/app/users/users/delete-user/delete-user.component.html"),
            styles: [__webpack_require__(/*! ./delete-user.component.css */ "./src/app/users/users/delete-user/delete-user.component.css")]
        }),
        __metadata("design:paramtypes", [_keis_api_service__WEBPACK_IMPORTED_MODULE_1__["KeisAPIService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], DeleteUserComponent);
    return DeleteUserComponent;
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

module.exports = __webpack_require__(/*! /home/martinklingenberg/Utvikling/KEIS-frontend-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map