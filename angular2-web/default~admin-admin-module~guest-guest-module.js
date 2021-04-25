(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~guest-guest-module"],{

/***/ "./src/app/entities/account/account.route.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/account/account.route.ts ***!
  \***************************************************/
/*! exports provided: PersonalSettingResolve, accountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingResolve", function() { return PersonalSettingResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountRoutes", function() { return accountRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _personal_setting_personal_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-setting/personal-setting.component */ "./src/app/entities/account/personal-setting/personal-setting.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var PersonalSettingResolve = /** @class */ (function () {
    function PersonalSettingResolve(service) {
        this.service = service;
    }
    PersonalSettingResolve.prototype.resolve = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].design) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
        }
        return this.service.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (account) { return account.body; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
        }));
    };
    PersonalSettingResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], PersonalSettingResolve);
    return PersonalSettingResolve;
}());

var accountRoutes = [
    {
        path: 'profile',
        component: _personal_setting_personal_setting_component__WEBPACK_IMPORTED_MODULE_4__["PersonalSettingComponent"],
        resolve: {
            account: PersonalSettingResolve,
        },
        data: {
            authorities: ['can_change_profile', 'can_change_password'],
            pageTitle: 'Cài đặt tài khoản'
        },
    }
];


/***/ }),

/***/ "./src/app/entities/account/index.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/account/index.ts ***!
  \*******************************************/
/*! exports provided: PersonalSettingComponent, PersonalSettingResolve, accountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.route */ "./src/app/entities/account/account.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingResolve", function() { return _account_route__WEBPACK_IMPORTED_MODULE_0__["PersonalSettingResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountRoutes", function() { return _account_route__WEBPACK_IMPORTED_MODULE_0__["accountRoutes"]; });

/* harmony import */ var _personal_setting_personal_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-setting/personal-setting.component */ "./src/app/entities/account/personal-setting/personal-setting.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingComponent", function() { return _personal_setting_personal_setting_component__WEBPACK_IMPORTED_MODULE_1__["PersonalSettingComponent"]; });





/***/ }),

/***/ "./src/app/entities/account/personal-setting/personal-setting-bootstrap.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/entities/account/personal-setting/personal-setting-bootstrap.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">Cài đặt cá nhân</h1>\r\n\r\n  <div class=\"row-container row-center\">\r\n    <div class=\"col col-6\">\r\n      <form class=\"form-container\" name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"saveInfo()\" #editForm=\"ngForm\" *appHasAnyAuthority=\"'user_change_profile'\">\r\n        <mat-form-field>\r\n          <input matInput name=\"lastName\" placeholder=\"Họ\" [(ngModel)]=\"account.last_name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput name=\"fisrtName\" placeholder=\"Tên\" [(ngModel)]=\"account.first_name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput name=\"birthday\" [matDatepicker]=\"picker6\" placeholder=\"Ngày sinh\" [(ngModel)]=\"account.birthday\">\r\n          <mat-datepicker-toggle [for]=\"picker6\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker6></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput name=\"phone\" placeholder=\"Số điện thoại\" [(ngModel)]=\"account.phone\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput name=\"email\" placeholder=\"Email\" [(ngModel)]=\"account.email\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"form-button-row center\">\r\n          <button mat-flat-button color=\"primary\"><mat-icon>save</mat-icon> Lưu</button>\r\n        </div>\r\n      </form>\r\n\r\n      <form class=\"form-container\" name=\"passForm\" role=\"form\" novalidate (ngSubmit)=\"savePassword()\" #passForm=\"ngForm\" *appHasAnyAuthority=\"'user_change_password'\">\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" name=\"currentPassword\" placeholder=\"Mật khẩu hiện tại\" [(ngModel)]=\"passwordChange.current_password\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" name=\"newPassword\" placeholder=\"Mật khẩu\" [(ngModel)]=\"passwordChange.password\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"password\" name=\"confirmPassword\" placeholder=\"Xác nhận mật khẩu\" [(ngModel)]=\"passwordChange.password_confirmation\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"form-button-row center\">\r\n          <button mat-flat-button color=\"primary\" [disabled]=\"!passwordChange.current_password || !isConfirmPasswordMatched()\"><mat-icon>save</mat-icon> Đổi mật khẩu</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/entities/account/personal-setting/personal-setting.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/entities/account/personal-setting/personal-setting.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-title {\n  width: 332px;\n  color: #008DFF;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Segoe UI, sans-serif; }\n\n.input-setting {\n  border-radius: 5px;\n  height: 36px;\n  color: #333;\n  border: 1px solid #f1f1f1;\n  padding-left: 10px;\n  font-size: 16px;\n  width: 332px; }\n\n.div-input {\n  padding-top: 15px;\n  width: 332px; }\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cecece;\n  opacity: 1;\n  /* Firefox */ }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cecece;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #cecece; }\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #cecece; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvYWNjb3VudC9wZXJzb25hbC1zZXR0aW5nL0U6XFxqb2JzXFxhbmd1bGFyMi13ZWIvc3JjXFxhcHBcXGVudGl0aWVzXFxhY2NvdW50XFxwZXJzb25hbC1zZXR0aW5nXFxwZXJzb25hbC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQyxFQUFBOztBQUVyQztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdoQjtFQUFnQix5Q0FBQTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQUUsWUFBQSxFQUFhOztBQUY3QjtFQUFnQix5Q0FBQTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQUUsWUFBQSxFQUFhOztBQUczQjtFQUF5Qiw0QkFBQTtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQTBCLG1CQUFBO0VBQ3hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2FjY291bnQvcGVyc29uYWwtc2V0dGluZy9wZXJzb25hbC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXRpdGxlIHtcclxuICAgIHdpZHRoOiAzMzJweDtcclxuICAgIGNvbG9yOiAjMDA4REZGO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UgVUksIHNhbnMtc2VyaWY7XHJcbn1cclxuLmlucHV0LXNldHRpbmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDMzMnB4O1xyXG59XHJcblxyXG4uZGl2LWlucHV0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMzMnB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjogI2NlY2VjZTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBjb2xvcjogI2NlY2VjZTtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6ICNjZWNlY2U7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entities/account/personal-setting/personal-setting.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/entities/account/personal-setting/personal-setting.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonalSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingComponent", function() { return PersonalSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/entities/user/user.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PersonalSettingComponent = /** @class */ (function () {
    // top: TopbarComponent;
    function PersonalSettingComponent(accountService, userService, alertService, activatedRoute, titleService, principal, formBuilder) {
        this.accountService = accountService;
        this.userService = userService;
        this.alertService = alertService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.principal = principal;
        this.formBuilder = formBuilder;
        this.passwordChange = new _shared__WEBPACK_IMPORTED_MODULE_6__["PasswordChange"]();
        this.account = new _core__WEBPACK_IMPORTED_MODULE_5__["Account"]();
        this.uploadForm = this.formBuilder.group({
            name: [''],
            avatar: [null]
        });
    }
    PersonalSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var account = _a.account;
            if (account.birthday) {
                account.birthday = account.birthday != null ? moment__WEBPACK_IMPORTED_MODULE_8__(account.birthday).format('DD-MM-YYYY') : null;
            }
            if (account) {
                _this.account = account;
                _this.imgURL = _this.account.imageUrl;
            }
        });
        console.log(this.imgURL);
        if (this.imgURL == null) {
            this.imgURL = 'assets/images/img-user.png';
        }
    };
    PersonalSettingComponent.prototype.ngAfterViewInit = function () {
    };
    PersonalSettingComponent.prototype.preview = function (envent, files) {
        var _this = this;
        this.envent = envent;
        if (files.length === 0) {
            return;
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    PersonalSettingComponent.prototype.isCurrentPasswordRequired = function () {
        return (this.passwordChange.newPassword !== null && this.passwordChange.newPassword !== '');
    };
    PersonalSettingComponent.prototype.isNewPasswordRequired = function () {
        return this.passwordChange.currentPassword !== null && this.passwordChange.currentPassword !== '';
    };
    PersonalSettingComponent.prototype.isConfirmPasswordRequired = function () {
        return (this.passwordChange.currentPassword !== null && this.passwordChange.currentPassword !== '')
            || (this.passwordChange.newPassword !== null && this.passwordChange.newPassword !== '');
    };
    PersonalSettingComponent.prototype.isConfirmPasswordMatched = function () {
        return (this.passwordChange.newPassword !== undefined
            && this.passwordChange.newPassword !== null
            && this.passwordChange.newPassword !== '')
            && (this.passwordChange.newPassword === this.passwordChange.confirmPassword);
    };
    PersonalSettingComponent.prototype.onSaveSuccess = function (msg) {
        this.alertService.success(msg, null, null);
    };
    PersonalSettingComponent.prototype.onSaveError = function (msg) {
        this.alertService.error(msg, null, null);
    };
    PersonalSettingComponent.prototype.refresh = function () {
        window.location.reload();
    };
    PersonalSettingComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (_a) {
            var accountHttpResponse = _a[0];
            return setTimeout(function () {
                _this.isSaving = false;
                // this.onSaveSuccess('Success to save your\'re information!');
            }, 0);
        }, function (error) {
            return setTimeout(function () {
                _this.isSaving = false;
                // this.onSaveError(error.error.title);
            }, 0);
        });
    };
    // uploadFile(event) {
    //   const file = (event.target as HTMLInputElement).files[0];
    //   this.uploadForm.patchValue({
    //     avatar: this.imagePath
    //   });
    //   this.uploadForm.get('avatar').updateValueAndValidity()
    // }
    PersonalSettingComponent.prototype.updload_avatar = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.uploadForm = this.formBuilder.group({
            images: file
        });
        var formData = new FormData();
        formData.append('images', this.uploadForm.get('images').value);
        this.accountService.upload(formData, this.account.id).subscribe(function (res) {
            _this.account.imageUrl = 'http://s3.aquaman.aztrace.vn/upload/' + res;
        }, function (err) { return console.log(err); });
    };
    PersonalSettingComponent.prototype.saveInfo = function () {
        if (this.account.imageUrl !== this.imgURL && this.envent !== undefined) {
            console.log(this.envent);
            this.updload_avatar(this.envent);
        }
        this.isSaving = true;
    };
    PersonalSettingComponent.prototype.savePassword = function () {
    };
    PersonalSettingComponent.prototype.onSavePassSuccess = function (response) {
        this.isSavingPass = false;
        this.alertService.success('Success to save your\'re information!', null, 'right');
    };
    PersonalSettingComponent.prototype.onSavePassError = function () {
        this.isSavingPass = false;
    };
    PersonalSettingComponent.prototype.fetchData = function () {
        this.ngOnInit();
    };
    PersonalSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal-setting',
            template: __webpack_require__(/*! ./personal-setting-bootstrap.component.html */ "./src/app/entities/account/personal-setting/personal-setting-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./personal-setting.component.scss */ "./src/app/entities/account/personal-setting/personal-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiAlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _core__WEBPACK_IMPORTED_MODULE_5__["Principal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], PersonalSettingComponent);
    return PersonalSettingComponent;
}());



/***/ }),

/***/ "./src/app/entities/address/address.model.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/address/address.model.ts ***!
  \***************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(id, name, countryId, cityId, wardId, districtId, countryName, cityName, districtName, wardName) {
        this.id = id;
        this.name = name;
        this.countryId = countryId;
        this.cityId = cityId;
        this.wardId = wardId;
        this.districtId = districtId;
        this.countryName = countryName;
        this.cityName = cityName;
        this.districtName = districtName;
        this.wardName = wardName;
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.countryId = countryId ? countryId : null;
        this.cityId = cityId ? cityId : null;
        this.wardId = wardId ? wardId : null;
        this.districtId = districtId ? districtId : null;
        this.countryName = countryName ? countryName : null;
        this.cityName = cityName ? cityName : null;
        this.districtName = districtName ? districtName : null;
        this.wardName = wardName ? wardName : null;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/entities/address/address.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/address/address.service.ts ***!
  \*****************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddressService = /** @class */ (function () {
    function AddressService(http) {
        this.http = http;
        this.resourceUrl = '/api/addresses';
    }
    AddressService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    AddressService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    AddressService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    AddressService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    AddressService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    AddressService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    AddressService.prototype.options = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    AddressService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    AddressService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    AddressService.prototype.convertListServer = function (res) {
        return res;
    };
    AddressService.prototype.convertPageServer = function (res) {
        return res;
    };
    AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddressService);
    return AddressService;
}());



/***/ }),

/***/ "./src/app/entities/address/city.model.ts":
/*!************************************************!*\
  !*** ./src/app/entities/address/city.model.ts ***!
  \************************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City(id, name, countryId) {
        this.id = id;
        this.name = name;
        this.countryId = countryId;
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.countryId = countryId ? countryId : null;
    }
    return City;
}());



/***/ }),

/***/ "./src/app/entities/address/city.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/address/city.service.ts ***!
  \**************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
        this.resourceUrl = '/api/cities';
    }
    CityService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CityService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CityService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CityService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    CityService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    CityService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    CityService.prototype.options = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    CityService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    CityService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    CityService.prototype.convertListServer = function (res) {
        return res;
    };
    CityService.prototype.convertPageServer = function (res) {
        return res;
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/entities/address/country.model.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/address/country.model.ts ***!
  \***************************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country(id, name) {
        this.id = id;
        this.name = name;
        this.id = id ? id : null;
        this.name = name ? name : null;
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/entities/address/country.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/address/country.service.ts ***!
  \*****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.resourceUrl = '/api/countries';
    }
    CountryService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CountryService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CountryService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    CountryService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    CountryService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    CountryService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    CountryService.prototype.options = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    CountryService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    CountryService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    CountryService.prototype.convertListServer = function (res) {
        return res;
    };
    CountryService.prototype.convertPageServer = function (res) {
        return res;
    };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/entities/address/district.model.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/address/district.model.ts ***!
  \****************************************************/
/*! exports provided: District */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "District", function() { return District; });
var District = /** @class */ (function () {
    function District(id, name, cityId) {
        this.id = id;
        this.name = name;
        this.cityId = cityId;
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.cityId = cityId ? cityId : null;
    }
    return District;
}());



/***/ }),

/***/ "./src/app/entities/address/district.service.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/address/district.service.ts ***!
  \******************************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DistrictService = /** @class */ (function () {
    function DistrictService(http) {
        this.http = http;
        this.resourceUrl = '/api/districts';
    }
    DistrictService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    DistrictService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    DistrictService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    DistrictService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    DistrictService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    DistrictService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    DistrictService.prototype.options = function (cityId, req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    DistrictService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    DistrictService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    DistrictService.prototype.convertListServer = function (res) {
        return res;
    };
    DistrictService.prototype.convertPageServer = function (res) {
        return res;
    };
    DistrictService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DistrictService);
    return DistrictService;
}());



/***/ }),

/***/ "./src/app/entities/address/index.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/address/index.ts ***!
  \*******************************************/
/*! exports provided: Address, City, Country, District, Ward, AddressService, CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.model */ "./src/app/entities/address/address.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _address_model__WEBPACK_IMPORTED_MODULE_0__["Address"]; });

/* harmony import */ var _city_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.model */ "./src/app/entities/address/city.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "City", function() { return _city_model__WEBPACK_IMPORTED_MODULE_1__["City"]; });

/* harmony import */ var _country_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.model */ "./src/app/entities/address/country.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return _country_model__WEBPACK_IMPORTED_MODULE_2__["Country"]; });

/* harmony import */ var _district_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./district.model */ "./src/app/entities/address/district.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "District", function() { return _district_model__WEBPACK_IMPORTED_MODULE_3__["District"]; });

/* harmony import */ var _ward_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ward.model */ "./src/app/entities/address/ward.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ward", function() { return _ward_model__WEBPACK_IMPORTED_MODULE_4__["Ward"]; });

/* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address.service */ "./src/app/entities/address/address.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return _address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]; });

/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city.service */ "./src/app/entities/address/city.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return _city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"]; });

/* empty/unused harmony star reexport *//* empty/unused harmony star reexport *//* empty/unused harmony star reexport */











/***/ }),

/***/ "./src/app/entities/address/ward.model.ts":
/*!************************************************!*\
  !*** ./src/app/entities/address/ward.model.ts ***!
  \************************************************/
/*! exports provided: Ward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ward", function() { return Ward; });
var Ward = /** @class */ (function () {
    function Ward(id, name, districtId) {
        this.id = id;
        this.name = name;
        this.districtId = districtId;
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.districtId = districtId ? districtId : null;
    }
    return Ward;
}());



/***/ }),

/***/ "./src/app/entities/address/ward.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/address/ward.service.ts ***!
  \**************************************************/
/*! exports provided: WardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardService", function() { return WardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WardService = /** @class */ (function () {
    function WardService(http) {
        this.http = http;
        this.resourceUrl = '/api/wards';
    }
    WardService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    WardService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    WardService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    WardService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    WardService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    WardService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    WardService.prototype.options = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    WardService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    WardService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    WardService.prototype.convertListServer = function (res) {
        return res;
    };
    WardService.prototype.convertPageServer = function (res) {
        return res;
    };
    WardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WardService);
    return WardService;
}());



/***/ }),

/***/ "./src/app/entities/home/dashboard/dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/entities/home/dashboard/dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    <h1 id=\"user-list-heading\" class=\"mat-h1\">{{'global.dashboard'|translate}}</h1>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    \r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/entities/home/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/entities/home/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/*  */\n\n.style-button-block {\n  text-align: center; }\n\n.progress-inner {\n  padding: .5rem 0; }\n\n.progress-inner .value {\n    margin: 0; }\n\n.progress-inner .mat-progress-bar {\n    height: 10px; }\n\n.info-status {\n  margin-bottom: 1rem; }\n\n.info-status .line {\n    display: flex;\n    flex-wrap: nowrap; }\n\n.info-status .line .col-line {\n      padding: 5px 10px;\n      width: 1000px; }\n\n.info-status .line .col-line.pumping {\n        color: #097f0b;\n        font-size: 14px;\n        border-radius: 15px; }\n\n.info-status .line .col-line.connecting {\n        background: linear-gradient(90deg, #097f0b 0%, #09790b 35%, #00ff0c 100%);\n        color: #fff;\n        text-align: center;\n        font-size: 14px;\n        border-radius: 15px;\n        box-shadow: 1px 1px 1px 0px rgba(134, 134, 134, 0.8); }\n\n.info-status .line .col-line.connecting.un {\n          background: #c6c6c6;\n          color: #8a8a8a; }\n\n.list-pumps {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.list-pumps .item-pump {\n    width: 50%; }\n\n.list-pumps .item-pump .pump-inner {\n      padding: 10px; }\n\n.list-pumps .item-pump .pump-inner .pump-title {\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        font-size: 1rem;\n        padding: 10px;\n        background-color: #eee;\n        margin: 0; }\n\n.list-pumps .item-pump .pump-inner .pump-title.title-2 {\n          background-color: #2e7d32;\n          color: #fff;\n          font-weight: normal; }\n\n.list-pumps .item-pump .pump-inner .pump-info {\n        padding: 10px;\n        border: 1px solid #eee; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line {\n          display: flex;\n          flex-wrap: nowrap;\n          margin-bottom: 5px;\n          border: 1px solid #1565c0;\n          border-radius: 4px; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line {\n            padding: 3px 10px;\n            width: 1000px; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.left {\n              color: #fff;\n              background-color: #1565c0;\n              font-size: 0.8rem; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.right {\n              font-size: 0.8rem; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.right span {\n                display: block; }\n\n.list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.right span.desc {\n                  font-size: 12px; }\n\n.row-line {\n  display: flex;\n  flex-wrap: wrap; }\n\n.row-line .col-md-6 {\n    width: 100%; }\n\n@media (min-width: 960px) {\n  .row-line .col-md-6 {\n    width: 50%; }\n  .list-pumps {\n    display: flex;\n    justify-content: center; }\n    .list-pumps .item-pump {\n      width: 25%; }\n      .list-pumps .item-pump.col-md-4 {\n        width: 33.33%; }\n      .list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.left {\n        font-size: 1rem; }\n      .list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.right {\n        font-size: 1rem; }\n        .list-pumps .item-pump .pump-inner .pump-info .info-01 .line .col-line.right span.desc {\n          font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvaG9tZS9kYXNoYm9hcmQvRTpcXGpvYnNcXGFuZ3VsYXIyLXdlYi9zcmNcXGFwcFxcZW50aXRpZXNcXGhvbWVcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEIsS0FBQTs7QUFDQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQUdJLFNBQVMsRUFBQTs7QUFIYjtJQU1JLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFEckI7SUFHSSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBSnJCO01BTU0saUJBQWlCO01BQ2pCLGFBQWEsRUFBQTs7QUFQbkI7UUFTUSxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixFQUFBOztBQVgzQjtRQWNRLHlFQUF5RTtRQUN6RSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0RBQW9ELEVBQUE7O0FBbkI1RDtVQXFCVSxtQkFBbUI7VUFDbkIsY0FBYyxFQUFBOztBQU94QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUhqQjtJQUtJLFVBQVUsRUFBQTs7QUFMZDtNQU9NLGFBQWEsRUFBQTs7QUFQbkI7UUFTUSw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGVBQWU7UUFDZixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVMsRUFBQTs7QUFkakI7VUFnQlUseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCxtQkFBbUIsRUFBQTs7QUFsQjdCO1FBc0JRLGFBQWE7UUFDYixzQkFBc0IsRUFBQTs7QUF2QjlCO1VBMEJZLGFBQWE7VUFDYixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixrQkFBa0IsRUFBQTs7QUE5QjlCO1lBZ0NnQixpQkFBaUI7WUFDakIsYUFBYSxFQUFBOztBQWpDN0I7Y0FtQ2dCLFdBQVc7Y0FDWCx5QkFBeUI7Y0FDekIsaUJBQWlCLEVBQUE7O0FBckNqQztjQXdDZ0IsaUJBQWlCLEVBQUE7O0FBeENqQztnQkEwQ2tCLGNBQWMsRUFBQTs7QUExQ2hDO2tCQTRDb0IsZUFBZSxFQUFBOztBQVluQztFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBRmpCO0lBSUksV0FBVyxFQUFBOztBQUlmO0VBQ0U7SUFFSSxVQUFVLEVBQUE7RUFHZDtJQUNFLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtJQUZ6QjtNQUlJLFVBQVUsRUFBQTtNQUpkO1FBTU0sYUFBYSxFQUFBO01BTm5CO1FBY2dCLGVBQWUsRUFBQTtNQWQvQjtRQWlCZ0IsZUFBZSxFQUFBO1FBakIvQjtVQW9Cb0IsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZW50aXRpZXMvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiAgKi9cclxuLnN0eWxlLWJ1dHRvbi1ibG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaW5uZXIge1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgLnZhbHVlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8tc3RhdHVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIC5saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC5jb2wtbGluZSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAmLnB1bXBpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMDk3ZjBiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICYuY29ubmVjdGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDk3ZjBiIDAlLCAjMDk3OTBiIDM1JSwgIzAwZmYwYyAxMDAlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMHB4IHJnYmEoMTM0LCAxMzQsIDEzNCwgMC44KTtcclxuICAgICAgICAmLnVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgICAgICAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXN0LXB1bXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuaXRlbS1wdW1wIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAucHVtcC1pbm5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIC5wdW1wLXRpdGxlIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICYudGl0bGUtMiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHVtcC1pbmZvIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgLmluZm8tMDEge1xyXG4gICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTU2NWMwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIC5jb2wtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgJi5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVjMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAmLmRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJvdy1saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuY29sLW1kLTYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAucm93LWxpbmUge1xyXG4gICAgLmNvbC1tZC02IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxpc3QtcHVtcHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLml0ZW0tcHVtcCB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICYuY29sLW1kLTQge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgIH1cclxuICAgICAgLnB1bXAtaW5uZXIge1xyXG4gICAgICAgIC5wdW1wLWluZm8ge1xyXG4gICAgICAgICAgLmluZm8tMDEge1xyXG4gICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgLmNvbC1saW5lIHtcclxuICAgICAgICAgICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICYuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entities/home/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/entities/home/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, socketIoService, route, titleService) {
        this.breakpointObserver = breakpointObserver;
        this.socketIoService = socketIoService;
        this.route = route;
        this.titleService = titleService;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 },
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 },
            ];
        }));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var pageTitle = _a.pageTitle;
            _this.titleService.setTitle(pageTitle);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/entities/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/entities/home/dashboard/dashboard.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"]],
            declarations: [],
            entryComponents: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _core__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/entities/home/home.route.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/home/home.route.ts ***!
  \*********************************************/
/*! exports provided: homeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/entities/home/dashboard/dashboard.component.ts");

var homeRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        data: {
            authorities: ['device_dashboard'],
            pageTitle: 'Dashboard'
        },
    }
];


/***/ }),

/***/ "./src/app/entities/role/index.ts":
/*!****************************************!*\
  !*** ./src/app/entities/role/index.ts ***!
  \****************************************/
/*! exports provided: RoleService, RoleResolve, roleRoutes, rolePopupRoute, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.service */ "./src/app/entities/role/role.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return _role_service__WEBPACK_IMPORTED_MODULE_0__["RoleService"]; });

/* harmony import */ var _role_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.route */ "./src/app/entities/role/role.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleResolve", function() { return _role_route__WEBPACK_IMPORTED_MODULE_1__["RoleResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roleRoutes", function() { return _role_route__WEBPACK_IMPORTED_MODULE_1__["roleRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rolePopupRoute", function() { return _role_route__WEBPACK_IMPORTED_MODULE_1__["rolePopupRoute"]; });

/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ "./src/app/entities/role/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_2__["Role"]; });






/***/ }),

/***/ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(entity.id)\">\r\n  <h5 mat-dialog-content>Do you want to delete this data?</h5>\r\n  <div mat-dialog-actions class=\"d-flex justify-content-center\">\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">OK</button>\r\n    <button mat-raised-button mat-dialog-close>Cancel</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3JvbGUvcm9sZS1kZWxldGUtZGlhbG9nL3JvbGUtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RoleDeleteDialogComponent, RoleDeletePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDeleteDialogComponent", function() { return RoleDeleteDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDeletePopupComponent", function() { return RoleDeletePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.service */ "./src/app/entities/role/role.service.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RoleDeleteDialogComponent = /** @class */ (function () {
    function RoleDeleteDialogComponent(dialogRef, service, eventManager) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.eventManager = eventManager;
    }
    RoleDeleteDialogComponent.prototype.onKeyUp = function () {
        this.dialogRef.close();
    };
    RoleDeleteDialogComponent.prototype.ngOnInit = function () {
    };
    RoleDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.service.delete(login).subscribe(function () {
            _this.eventManager.broadcast({
                name: 'roleListModification',
                content: 'Deleted a role'
            });
            _this.dialogRef.close(true);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup.esc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RoleDeleteDialogComponent.prototype, "onKeyUp", null);
    RoleDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-delete-dialog',
            template: __webpack_require__(/*! ./role-delete-dialog.component.html */ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./role-delete-dialog.component.scss */ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]])
    ], RoleDeleteDialogComponent);
    return RoleDeleteDialogComponent;
}());

var RoleDeletePopupComponent = /** @class */ (function () {
    function RoleDeletePopupComponent(activatedRoute, router, dialog) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
    }
    RoleDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var entity = _a.entity;
            setTimeout(function () {
                _this.dialogRef = _this.dialog.open(RoleDeleteDialogComponent, {
                    disableClose: true,
                    width: '500px',
                });
                _this.dialogRef.componentInstance.entity = entity;
                _this.dialogRef.afterClosed().subscribe(function (result) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                }, function (reason) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                });
            }, 0);
        });
    };
    RoleDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.dialogRef = null;
    };
    RoleDeletePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-delete-popup',
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], RoleDeletePopupComponent);
    return RoleDeletePopupComponent;
}());



/***/ }),

/***/ "./src/app/entities/role/role-list/role-list-search.ts":
/*!*************************************************************!*\
  !*** ./src/app/entities/role/role-list/role-list-search.ts ***!
  \*************************************************************/
/*! exports provided: RoleListSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListSearch", function() { return RoleListSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");


var RoleListSearch = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListSearch, _super);
    function RoleListSearch(query) {
        var _this = _super.call(this) || this;
        _this.query = query;
        if (!query) {
            _this.query = '';
        }
        return _this;
    }
    RoleListSearch.prototype.valid = function () {
        return true;
    };
    RoleListSearch.prototype.addQueryParams = function () {
        this.setQueryParam('query', this.query || '');
    };
    return RoleListSearch;
}(_shared__WEBPACK_IMPORTED_MODULE_1__["CriteriaSearch"]));



/***/ }),

/***/ "./src/app/entities/role/role-list/role-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/entities/role/role-list/role-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    <h1 id=\"user-list-heading\" class=\"mat-h1\">{{'role.title'|translate}}</h1>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start none\" fxLayoutGap=\"4px\">\r\n      <form class=\"form-search\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <mat-form-field>\r\n          <input matInput type=\"search\" name=\"currentSearch\" [(ngModel)]=\"searchService.query\" [placeholder]=\"'global.enterSearchKey'|translate\">\r\n          <button mat-icon-button matSuffix aria-label=\"search\" [disabled]=\"!searchService.valid()\" (click)=\"search()\">\r\n            <mat-icon>search</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n        <button mat-mini-fab color=\"primary\" [routerLink]=\"['/role/new']\" *appHasAnyAuthority=\"'user_role_store'\"\r\n                class=\"float-right\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </form>\r\n    </div>\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" aria-describedby=\"user-list-heading\">\r\n      <!-- Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef> ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n      <!-- Column -->\r\n      <ng-container matColumnDef=\"label\">\r\n        <th mat-header-cell *matHeaderCellDef> {{'role.columns.label'|translate}} </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.label}} </td>\r\n      </ng-container>\r\n      <!--  Column -->\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef> {{'role.columns.description'|translate}} </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n      </ng-container>\r\n      <!--  Column -->\r\n\r\n      <!-- Control Column -->\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef>  </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div class=\"button-row\">\r\n            <button mat-icon-button  color=\"basic\" [routerLink]=\"['/role', element.id, 'edit']\" *appHasAnyAuthority=\"'user_role_update'\">\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">create</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button  color=\"warn\" [routerLink]=\"['/', { outlets: { popup: ['role', element.id, 'delete'] }}]\" *appHasAnyAuthority=\"'user_role_destroy'\">\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">delete_forever</mat-icon>\r\n            </button>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator [length]=\"searchService.getTotalCount()\"\r\n                    [pageSize]=\"searchService.getPageSize()\"\r\n                    [pageSizeOptions]=\"searchService.getPageOptions()\"\r\n                    showFirstLastButtons\r\n                    (page)=\"onPageChange($event)\"></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/entities/role/role-list/role-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/entities/role/role-list/role-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3JvbGUvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/entities/role/role-list/role-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/entities/role/role-list/role-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role_list_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-list-search */ "./src/app/entities/role/role-list/role-list-search.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role.service */ "./src/app/entities/role/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(service, activatedRoute, titleService, eventManager) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.eventManager = eventManager;
        this.displayedColumns = ['id', 'label', 'description', 'action'];
        this.searchService = new _role_list_search__WEBPACK_IMPORTED_MODULE_2__["RoleListSearch"]();
        this.dataSource = null;
    }
    RoleListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Role list');
        this.onRoleListModification();
        this.search();
    };
    RoleListComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    RoleListComponent.prototype.onRoleListModification = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('roleListModification', function () { return _this.search(); });
    };
    RoleListComponent.prototype.search = function () {
        this.getList();
    };
    RoleListComponent.prototype.getList = function () {
        var _this = this;
        var req = this.searchService.getParams();
        this.service.query(req).subscribe(function (response) {
            var result = response.body;
            if (result) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](result.data);
                _this.searchService.setResponse(result);
            }
        });
    };
    RoleListComponent.prototype.onPageChange = function (event) {
        this.searchService.setPage(event.pageIndex + 1);
        this.searchService.setPageSize(event.pageSize);
        this.search();
    };
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/entities/role/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.scss */ "./src/app/entities/role/role-list/role-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_6__["JhiEventManager"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/entities/role/role-update/role-update.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entities/role/role-update/role-update.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <mat-card>\r\n    <mat-card-title>\r\n      <h1 id=\"user-list-heading\" class=\"mat-h1\">Role Create</h1>\r\n    </mat-card-title>\r\n    <mat-card-actions>\r\n      <div style=\"padding-left: 8px;\">\r\n        <button mat-raised-button routerLink=\"/role\"><mat-icon>keyboard_backspace</mat-icon> Back</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\"><mat-icon>save</mat-icon> Save</button>\r\n      </div>\r\n    </mat-card-actions>\r\n    <mat-card-content>\r\n      <mat-grid-list [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\" gutterSize=\"10px\" [rowHeight]=\"gridHeight\">\r\n        <mat-grid-tile [rowspan]=\"rowSpanForm\">\r\n          <form class=\"form-container role-form\" name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\">\r\n            <h3>Role information</h3>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Role name\" name=\"label\" [(ngModel)]=\"role.label\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Role description\" name=\"description\" [(ngModel)]=\"role.description\" rows=\"3\"></textarea>\r\n            </mat-form-field>\r\n          </form>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [rowspan]=\"rowSpanTree\">\r\n          <div class=\"form-container\" #matTreeContainer>\r\n            <h3>Role permissions</h3>\r\n            <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n              <!-- This is the tree node template for leaf nodes -->\r\n              <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n                <!-- use a disabled button to provide padding for tree leaf -->\r\n                <button mat-icon-button disabled></button>\r\n                <mat-checkbox class=\"checklist-leaf-node\"\r\n                              [checked]=\"checklistSelection.isSelected(node)\"\r\n                              (change)=\"todoLeafItemSelectionToggle(node)\">{{node.name}}</mat-checkbox>\r\n              </mat-tree-node>\r\n              <!-- This is the tree node template for expandable nodes -->\r\n              <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\r\n                <button mat-icon-button matTreeNodeToggle (click)=\"onTreeClick($event, matTreeContainer)\"\r\n                        [attr.aria-label]=\"'toggle ' + node.name\">\r\n                  <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                    {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                  </mat-icon>\r\n                </button>\r\n                <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                              [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                              (change)=\"todoItemSelectionToggle(node)\">{{node.name}}</mat-checkbox>\r\n              </mat-tree-node>\r\n            </mat-tree>\r\n          </div>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entities/role/role-update/role-update.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/entities/role/role-update/role-update.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-grid-list .mat-grid-tile .role-form {\n  overflow: auto;\n  max-height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvcm9sZS9yb2xlLXVwZGF0ZS9FOlxcam9ic1xcYW5ndWxhcjItd2ViL3NyY1xcYXBwXFxlbnRpdGllc1xccm9sZVxccm9sZS11cGRhdGVcXHJvbGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50aXRpZXMvcm9sZS9yb2xlLXVwZGF0ZS9yb2xlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZ3JpZC1saXN0ICAubWF0LWdyaWQtdGlsZSAucm9sZS1mb3Jte1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entities/role/role-update/role-update.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entities/role/role-update/role-update.component.ts ***!
  \********************************************************************/
/*! exports provided: RoleUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleUpdateComponent", function() { return RoleUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../role */ "./src/app/entities/role/role.ts");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role.service */ "./src/app/entities/role/role.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RoleUpdateComponent = /** @class */ (function () {
    function RoleUpdateComponent(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true /* multiple */);
        this._transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
                id: node.id,
                selected: node.selected,
            };
        };
        this.getLevel = function (node) { return node.level; };
        this.hasChild = function (_, node) { return node.expandable; };
        this._breakpoint = function (width) {
            return (width <= 800) ? 1 : 2;
        };
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = [];
        this.role = new _role__WEBPACK_IMPORTED_MODULE_4__["Role"]();
    }
    RoleUpdateComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.breakpoint = this._breakpoint(window.innerWidth);
        this.resizeGrid();
        /** ---- ROLE SERVICES ---- */
        this.activatedRoute.data.subscribe(function (_a) {
            var entity = _a.entity;
            if (entity) {
                _this_1.role = entity;
            }
        });
        this.getTreeNodes();
    };
    RoleUpdateComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.resizeGrid();
        }, 1000);
    };
    RoleUpdateComponent.prototype.resizeGrid = function () {
        if (this.breakpoint === 1) {
            this.gridHeight = "300px";
            this.rowSpanTree = this.matTreeContainer.nativeElement.offsetHeight / 300;
            this.rowSpanForm = 1;
        }
        else {
            this.gridHeight = this.matTreeContainer.nativeElement.offsetHeight;
            this.rowSpanTree = 1;
            this.rowSpanForm = 1;
        }
    };
    RoleUpdateComponent.prototype.onResize = function (event) {
        this.breakpoint = this._breakpoint(event.target.innerWidth);
        this.resizeGrid();
    };
    RoleUpdateComponent.prototype.onTreeClick = function (event) {
        this.resizeGrid();
    };
    /** Whether all the descendants of the node are selected. */
    RoleUpdateComponent.prototype.descendantsAllSelected = function (node) {
        var _this_1 = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) {
            return _this_1.checklistSelection.isSelected(child);
        });
    };
    /** Whether part of the descendants are selected */
    RoleUpdateComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this_1 = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this_1.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    RoleUpdateComponent.prototype.todoItemSelectionToggle = function (node) {
        var _this_1 = this;
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        // Force update for the parent
        descendants.every(function (child) {
            return _this_1.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    RoleUpdateComponent.prototype.checkAllParentsSelection = function (node) {
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /* Get the parent node of a node */
    RoleUpdateComponent.prototype.getParentNode = function (node) {
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Check root node checked state and change it accordingly */
    RoleUpdateComponent.prototype.checkRootNodeSelection = function (node) {
        var _this_1 = this;
        var nodeSelected = this.checklistSelection.isSelected(node);
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this_1.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    RoleUpdateComponent.prototype.todoLeafItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /** ---------- ROLE SERVICES ----------- */
    RoleUpdateComponent.prototype.getTreeNodes = function () {
        var _this_1 = this;
        this.service.tree().subscribe(function (response) {
            var result = response.body;
            if (result) {
                var permissions_1 = _this_1.role.permissions;
                _this_1.dataSource.data = result.map(function (item) {
                    return {
                        name: item.description,
                        children: item.children.map(function (itemChild) {
                            return {
                                name: itemChild.text,
                                id: itemChild.id,
                                selected: permissions_1.includes(itemChild.id),
                            };
                        }),
                    };
                });
                _this_1.tree.treeControl.expandAll();
                _this_1.treeControl.dataNodes.forEach(function (node) {
                    if (node.selected) {
                        _this_1.checklistSelection.select(node);
                    }
                });
            }
        });
    };
    RoleUpdateComponent.prototype.save = function () {
        var _this_1 = this;
        this.role.permissions = this.checklistSelection.selected.filter(function (node) {
            return node.level === 1 && node.expandable === false;
        }).map(function (value) { return value.id; });
        if (this.role.id !== null) {
            this.service.update(this.role).subscribe(function () { return _this_1.onSaveSuccess(); }, function () { return _this_1.onSaveError(); });
        }
        else {
            this.service.create(this.role).subscribe(function () { return _this_1.onSaveSuccess(); }, function () { return _this_1.onSaveError(); });
        }
    };
    RoleUpdateComponent.prototype.onSaveSuccess = function () {
        this.router.navigate(['/role'], {});
    };
    RoleUpdateComponent.prototype.onSaveError = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleUpdateComponent.prototype, "tree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matTreeContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleUpdateComponent.prototype, "matTreeContainer", void 0);
    RoleUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-update',
            template: __webpack_require__(/*! ./role-update.component.html */ "./src/app/entities/role/role-update/role-update.component.html"),
            styles: [__webpack_require__(/*! ./role-update.component.scss */ "./src/app/entities/role/role-update/role-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], RoleUpdateComponent);
    return RoleUpdateComponent;
}());



/***/ }),

/***/ "./src/app/entities/role/role.route.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/role/role.route.ts ***!
  \*********************************************/
/*! exports provided: RoleResolve, roleRoutes, rolePopupRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleResolve", function() { return RoleResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleRoutes", function() { return roleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolePopupRoute", function() { return rolePopupRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role.service */ "./src/app/entities/role/role.service.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/entities/role/role-list/role-list.component.ts");
/* harmony import */ var _role_update_role_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role-update/role-update.component */ "./src/app/entities/role/role-update/role-update.component.ts");
/* harmony import */ var _role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-delete-dialog/role-delete-dialog.component */ "./src/app/entities/role/role-delete-dialog/role-delete-dialog.component.ts");








var RoleResolve = /** @class */ (function () {
    function RoleResolve(service) {
        this.service = service;
    }
    RoleResolve.prototype.resolve = function (route, state) {
        var id = route.paramMap.get('id');
        return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (role) { return role.body; }));
    };
    RoleResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], RoleResolve);
    return RoleResolve;
}());

var roleRoutes = [
    {
        path: 'role',
        component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"],
        resolve: {
            pagingParams: ng_jhipster__WEBPACK_IMPORTED_MODULE_2__["JhiResolvePagingParams"],
        },
        data: {
            authorities: ['user_role_index'],
            pageTitle: 'Role List',
            defaultSort: 'id,asc'
        },
    },
    {
        path: 'role/new',
        component: _role_update_role_update_component__WEBPACK_IMPORTED_MODULE_6__["RoleUpdateComponent"],
        resolve: {
            pagingParams: ng_jhipster__WEBPACK_IMPORTED_MODULE_2__["JhiResolvePagingParams"],
        },
        data: {
            authorities: ['user_role_store'],
            pageTitle: 'Role Create',
            defaultSort: 'id,asc'
        },
    },
    {
        path: 'role/:id/edit',
        component: _role_update_role_update_component__WEBPACK_IMPORTED_MODULE_6__["RoleUpdateComponent"],
        resolve: {
            entity: RoleResolve,
        },
        data: {
            authorities: ['user_role_update'],
            pageTitle: 'Role Update'
        },
    },
];
var rolePopupRoute = [
    {
        path: 'role/:id/delete',
        component: _role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RoleDeletePopupComponent"],
        resolve: {
            entity: RoleResolve
        },
        data: {
            authorities: ['user_role_destroy'],
            pageTitle: 'Role Delete'
        },
        outlet: 'popup'
    },
];


/***/ }),

/***/ "./src/app/entities/role/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/role/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.resourceUrl = '/api/roles';
    }
    RoleService.prototype.create = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    RoleService.prototype.update = function (entity) {
        var _this = this;
        var copy = this.convertEntityFromClient(entity);
        return this.http.put(this.resourceUrl + '/' + entity.id, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    RoleService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertEntityFromServer(res); }));
    };
    RoleService.prototype.query = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertPageServer(res); }));
    };
    RoleService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    RoleService.prototype.list = function (req) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl, { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    RoleService.prototype.options = function (req) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/option", { params: req, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _this.convertListServer(res); }));
    };
    RoleService.prototype.tree = function () {
        return this.http
            .get(this.resourceUrl + "/tree", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    RoleService.prototype.convertEntityFromClient = function (entity) {
        var res = Object.assign({}, entity, {});
        return res;
    };
    RoleService.prototype.convertEntityFromServer = function (res) {
        return res;
    };
    RoleService.prototype.convertListServer = function (res) {
        return res;
    };
    RoleService.prototype.convertPageServer = function (res) {
        return res;
    };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/entities/role/role.ts":
/*!***************************************!*\
  !*** ./src/app/entities/role/role.ts ***!
  \***************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role(id, label, description, permissions) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.permissions = permissions;
        this.id = id ? id : null;
        this.label = label ? label : null;
        this.description = description ? description : null;
        this.permissions = permissions ? permissions : [];
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/entities/user/index.ts":
/*!****************************************!*\
  !*** ./src/app/entities/user/index.ts ***!
  \****************************************/
/*! exports provided: UserResolve, UserManagementResolve, UserAuthoritiesResolve, userRoutes, UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.route */ "./src/app/entities/user/user.route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserResolve", function() { return _user_route__WEBPACK_IMPORTED_MODULE_0__["UserResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserManagementResolve", function() { return _user_route__WEBPACK_IMPORTED_MODULE_0__["UserManagementResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAuthoritiesResolve", function() { return _user_route__WEBPACK_IMPORTED_MODULE_0__["UserAuthoritiesResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return _user_route__WEBPACK_IMPORTED_MODULE_0__["userRoutes"]; });

/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/entities/user/user-list/user-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__["UserListComponent"]; });





/***/ }),

/***/ "./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\">\r\n  <h5 matDialogTitle>Do you want to delete this user?</h5>\r\n  <div matDialogActions class=\"d-flex justify-content-center\">\r\n    <button type=\"submit\" class=\"btn btn-sm btn-danger\">\r\n      <i class=\"far fa-trash-alt\" aria-hidden=\"true\"></i> Ok</button>\r\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\" matDialogClose>\r\n      <i class=\"far fa-times-circle\" aria-hidden=\"true\"></i> Cancel</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserDeleteDialogComponent, UserDeletePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteDialogComponent", function() { return UserDeleteDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePopupComponent", function() { return UserDeletePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/entities/user/user.service.ts");






var UserDeleteDialogComponent = /** @class */ (function () {
    function UserDeleteDialogComponent(dialogRef, userService, eventManager) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.eventManager = eventManager;
    }
    UserDeleteDialogComponent.prototype.onKeyUp = function () {
        this.dialogRef.close();
    };
    UserDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'userListModification',
                content: 'Deleted a user'
            });
            _this.dialogRef.close(true);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup.esc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UserDeleteDialogComponent.prototype, "onKeyUp", null);
    UserDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-delete-dialog',
            template: __webpack_require__(/*! ./user-delete-dialog.component.html */ "./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"]])
    ], UserDeleteDialogComponent);
    return UserDeleteDialogComponent;
}());

var UserDeletePopupComponent = /** @class */ (function () {
    function UserDeletePopupComponent(activatedRoute, router, dialog) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
    }
    UserDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var user = _a.user;
            setTimeout(function () {
                _this.dialogRef = _this.dialog.open(UserDeleteDialogComponent, {
                    disableClose: true,
                    width: '500px',
                });
                _this.dialogRef.componentInstance.user = user;
                _this.dialogRef.afterClosed().subscribe(function (result) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                }, function (reason) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                });
            }, 0);
        });
    };
    UserDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.dialogRef = null;
    };
    UserDeletePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-delete-popup',
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserDeletePopupComponent);
    return UserDeletePopupComponent;
}());



/***/ }),

/***/ "./src/app/entities/user/user-list/user-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/entities/user/user-list/user-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<mat-card>\r\n  <mat-card-title>\r\n    <h1 id=\"user-list-heading\" class=\"mat-h1\">{{'user.title'|translate}}</h1>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start none\" fxLayoutGap=\"4px\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"4px\" fxFlexFill>\r\n        <mat-form-field>\r\n          <input matInput [placeholder]=\"'global.enterSearchKey'|translate\">\r\n          <button mat-icon-button matSuffix aria-label=\"search\">\r\n            <mat-icon>search</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n        <button mat-flat-button color=\"primary\" [routerLink]=\"['./new']\"\r\n                *appHasAnyAuthority=\"['can_user', 'can_create_user']\"\r\n                class=\"float-right\"><mat-icon>supervised_user_circle</mat-icon> {{'user.createLabel'|translate}}</button>\r\n      </div>\r\n    </div>\r\n    <table mat-table [dataSource]=\"dataSource\" aria-describedby=\"user-list-heading\" class=\"mat-elevation-z8\">\r\n    \r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">{{'user.columns.status'|translate}}</th>\r\n        <td mat-cell *matCellDef=\"let element\"> <mat-checkbox class=\"example-margin\" [(ngModel)]=\"element.status\" disabled></mat-checkbox> </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">ID</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">{{'user.columns.fullName'|translate}}</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.last_name}} {{element.first_name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">Email</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"phone\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">{{'user.columns.phone'|translate}}</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"role\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\">{{'user.columns.role'|translate}}</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.role_name}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef scope=\"col\"></th>\r\n        <td mat-cell *matCellDef=\"let element\" fxLayoutGap=\"5px\">\r\n          <div class=\"group-button-row\">\r\n            <button mat-mini-fab color=\"primary\" aria-label=\"Sửa\" [routerLink]=\"['./delete', element.id]\"\r\n              *appHasAnyAuthority=\"['can_user', 'can_update_user']\">\r\n              <mat-icon>open_in_new</mat-icon>\r\n            </button>\r\n            <button mat-mini-fab color=\"warn\" aria-label=\"Xóa\" [routerLink]=\"['./edit', element.id]\"\r\n              *appHasAnyAuthority=\"['can_user', 'can_delete_user']\">\r\n              <mat-icon>remove_circle</mat-icon>\r\n            </button>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"element-row\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" [length]=\"total\" [pageSize]=\"pageSize\" showFirstLastButtons (page)=\"pageChanged($event)\" ></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/entities/user/user-list/user-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/entities/user/user-list/user-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/entities/user/user.service.ts");








var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialog, route, router, fb, eventManager, userService, titleService) {
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.eventManager = eventManager;
        this.userService = userService;
        this.titleService = titleService;
        this.displayedColumns = ['status', 'id', 'name', 'email', 'phone', 'role', 'action'];
        this.pageSize = 20;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var pageTitle = _a.pageTitle;
            _this.titleService.setTitle(pageTitle);
        });
        this.filterForm = this.fb.group({
            userName: null
        });
        this.filterForm.valueChanges.subscribe(function (formData) {
            var userName = formData.userName;
            var newQueryParams = {};
            newQueryParams.userName = userName;
            _this.router.navigate([], {
                relativeTo: _this.route,
                queryParams: newQueryParams,
                queryParamsHandling: 'merge',
            });
        });
        this.loadAll();
        this.changedUser();
    };
    UserListComponent.prototype.loadAll = function () {
        var _this = this;
        var page = this.route.snapshot.queryParamMap.get('page');
        var size = this.route.snapshot.queryParamMap.get('size');
        var userName = this.route.snapshot.queryParamMap.get('userName');
        var queries = {};
        if (page) {
            queries['page'] = +page + 1;
        }
        if (size) {
            queries['size'] = size;
        }
        if (userName) {
            queries['query'] = userName;
        }
        this.userService.query(queries).subscribe(function (users) {
            _this.total = users.body.total;
            _this.pageSize = users.body.per_page;
            _this.dataSource = users.body.data;
        });
    };
    UserListComponent.prototype.changedUser = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('userListModification', function () {
            _this.loadAll();
        });
    };
    UserListComponent.prototype.openEditDialog = function (user) {
        var queryParams = {
            id: user.id
        };
        this.router.navigate(['', { outlets: { popup: 'user/edit/' + user.id } }], {
            relativeTo: this.route, queryParams: queryParams,
            queryParamsHandling: 'preserve',
        });
    };
    UserListComponent.prototype.openDeleteDialog = function (user) {
        var queryParams = {
            id: user.id
        };
        this.router.navigate(['', { outlets: { popup: 'user/delete/' + user.id } }], {
            relativeTo: this.route, queryParams: queryParams,
            queryParamsHandling: 'preserve',
        });
    };
    UserListComponent.prototype.pageChanged = function (event) {
        var queryParams = {
            page: event.pageIndex,
            size: event.pageSize,
        };
        this.router.navigate([], {
            relativeTo: this.route, queryParams: queryParams,
            queryParamsHandling: 'merge',
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/entities/user/user-list/user-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiEventManager"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/entities/user/user-update/user-update.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entities/user/user-update/user-update.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title class=\"dialog-title\">{{title | translate}}</h3>\r\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\">\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"column\" class=\"mat-form mat-form-sm\">\r\n      <mat-form-field>\r\n        <input matInput [placeholder]=\"'user.form.login'|translate\" name=\"login\" [(ngModel)]=\"entity.login\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"entity.email\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput [placeholder]=\"'user.form.fullName'|translate\" name=\"name\" [(ngModel)]=\"entity.fullName\" required>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput [placeholder]=\"'user.form.telephone'|translate\" name=\"phone\" [(ngModel)]=\"entity.phone\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"date\" [placeholder]=\"'global.birthday'|translate\" name=\"birthday\" [(ngModel)]=\"entity.birthday\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select [placeholder]=\"'user.form.role'|translate\" name=\"roleName\" required>\r\n          <mat-option *ngFor=\"let item of roles$|async\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select [placeholder]=\"'user.form.country'|translate\" name=\"country\" required>\r\n          <mat-option *ngFor=\"let item of countries$|async\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select [placeholder]=\"'user.form.city'|translate\" name=\"city\" required>\r\n          <mat-option *ngFor=\"let item of cities$|async\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select [placeholder]=\"'user.form.district'|translate\" name=\"district\" required>\r\n          <mat-option *ngFor=\"let item of districts$|async\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select [placeholder]=\"'user.form.ward'|translate\" name=\"ward\" required>\r\n          <mat-option *ngFor=\"let item of wards$|async\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput [placeholder]=\"'user.form.address'|translate\" name=\"addressName\" [(ngModel)]=\"entity.addressName\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-raised-button mat-dialog-close (click)=\"clear()\">{{'global.cancel'|translate}}</button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"editForm.form.invalid\">\r\n      {{ 'entity.action.save' | translate }}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/entities/user/user-update/user-update.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entities/user/user-update/user-update.component.ts ***!
  \********************************************************************/
/*! exports provided: UserUpdateDialogComponent, UserUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateDialogComponent", function() { return UserUpdateDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdatePopupComponent", function() { return UserUpdatePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.model */ "./src/app/entities/user/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/entities/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../role */ "./src/app/entities/role/index.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../address */ "./src/app/entities/address/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _address_country_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../address/country.service */ "./src/app/entities/address/country.service.ts");
/* harmony import */ var _address_district_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../address/district.service */ "./src/app/entities/address/district.service.ts");
/* harmony import */ var _address_ward_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../address/ward.service */ "./src/app/entities/address/ward.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_15__);
















var UserUpdateDialogComponent = /** @class */ (function () {
    function UserUpdateDialogComponent(dialogRef, principal, service, roleService, addressService, countryService, cityService, districtService, wardService) {
        this.dialogRef = dialogRef;
        this.principal = principal;
        this.service = service;
        this.roleService = roleService;
        this.addressService = addressService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.districtService = districtService;
        this.wardService = wardService;
        this.title = 'user.createLabel';
        this.entity = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.roles$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        this.addresses$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        this.countries$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        this.cities$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        this.districts$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        this.wards$ = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
    }
    UserUpdateDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.roles$ = this.roleService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
        this.addresses$ = this.addressService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
        this.countries$ = this.countryService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
        if (this.entity.id !== null) {
            this.title = 'user.updateLabel';
        }
    };
    UserUpdateDialogComponent.prototype.clear = function () {
        this.dialogRef.close('cancel');
    };
    UserUpdateDialogComponent.prototype.save = function () {
        var _this = this;
        if (this.entity.id !== null) {
            this.service.update(this.entity).subscribe(function () { return _this.onSaveSuccess(); }, function () { return _this.onSaveError(); });
        }
        else {
            this.service.create(this.entity).subscribe(function () { return _this.onSaveSuccess(); }, function () { return _this.onSaveError(); });
        }
    };
    UserUpdateDialogComponent.prototype.onSaveSuccess = function () {
        this.dialogRef.close(true);
    };
    UserUpdateDialogComponent.prototype.onSaveError = function () {
    };
    /** Change option template for Selects */
    UserUpdateDialogComponent.prototype.optionLabel = function (item) { return item.name; };
    /**
    * Get cities by country id change event
    *
    * @param {*} countryId
    * @returns
    * @memberof EquipmentFormComponent
    */
    UserUpdateDialogComponent.prototype.onCountryChange = function (countryId) {
        this.entity.cityId = null;
        this.cities$ = null;
        this.entity.districtId = null;
        this.districts$ = null;
        this.entity.wardId = null;
        this.wards$ = null;
        if (!countryId || countryId === 'null') {
            return;
        }
        var req = {};
        req["countryId." + "equals" /* equals */] = countryId;
        req['size'] = 100;
        this.cities$ = this.cityService.list(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
    };
    /**
    * Get districts by city id change event
    *
    * @param {*} cityId
    * @returns
    * @memberof EquipmentFormComponent
    */
    UserUpdateDialogComponent.prototype.onCityChange = function (cityId) {
        this.entity.districtId = null;
        this.districts$ = null;
        this.entity.wardId = null;
        this.wards$ = null;
        if (!cityId || cityId === 'null') {
            return;
        }
        var req = {};
        req["cityId." + "equals" /* equals */] = cityId;
        req['size'] = 100;
        this.districts$ = this.districtService.list(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
    };
    /**
     * Get wards by district id change event
     *
     * @param {*} districtId
     * @returns
     * @memberof EquipmentFormComponent
     */
    UserUpdateDialogComponent.prototype.onDistrictChange = function (districtId) {
        this.entity.wardId = null;
        this.wards$ = null;
        if (!districtId || districtId === 'null') {
            return;
        }
        var req = {};
        req["districtId." + "equals" /* equals */] = districtId;
        req['size'] = 100;
        this.wards$ = this.wardService.list(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return res.body; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('allSelected'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"])
    ], UserUpdateDialogComponent.prototype, "allSelected", void 0);
    UserUpdateDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-update-dialog',
            template: __webpack_require__(/*! ./user-update.component.html */ "./src/app/entities/user/user-update/user-update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _core__WEBPACK_IMPORTED_MODULE_3__["Principal"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _role__WEBPACK_IMPORTED_MODULE_9__["RoleService"],
            _address__WEBPACK_IMPORTED_MODULE_10__["AddressService"],
            _address_country_service__WEBPACK_IMPORTED_MODULE_12__["CountryService"],
            _address__WEBPACK_IMPORTED_MODULE_10__["CityService"],
            _address_district_service__WEBPACK_IMPORTED_MODULE_13__["DistrictService"],
            _address_ward_service__WEBPACK_IMPORTED_MODULE_14__["WardService"]])
    ], UserUpdateDialogComponent);
    return UserUpdateDialogComponent;
}());

var UserUpdatePopupComponent = /** @class */ (function () {
    function UserUpdatePopupComponent(activatedRoute, router, alertService, dialog) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertService = alertService;
        this.dialog = dialog;
    }
    UserUpdatePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var entity = _a.entity;
            setTimeout(function () {
                _this.dialogRef = _this.dialog.open(UserUpdateDialogComponent, {
                    disableClose: true,
                    width: '500px',
                });
                _this.dialogRef.componentInstance.entity = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]().assign(entity);
                _this.dialogRef.afterClosed().subscribe(function (result) { return _this.previousState(result); }, function (reason) { return _this.previousState(reason); });
            });
        });
    };
    UserUpdatePopupComponent.prototype.onSuccess = function (res) {
    };
    UserUpdatePopupComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    UserUpdatePopupComponent.prototype.previousState = function (result) {
        var params = {};
        if (result && Object(util__WEBPACK_IMPORTED_MODULE_15__["isObject"])(result)) {
            Object.assign(params, result);
        }
        this.router.navigate(['.'], { relativeTo: this.activatedRoute.parent, queryParams: params, queryParamsHandling: 'merge' });
        this.dialogRef = null;
    };
    UserUpdatePopupComponent.prototype.ngOnDestroy = function () {
        this.dialogRef = null;
    };
    UserUpdatePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-update-popup',
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiAlertService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UserUpdatePopupComponent);
    return UserUpdatePopupComponent;
}());



/***/ }),

/***/ "./src/app/entities/user/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/user/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../address */ "./src/app/entities/address/index.ts");

var User = /** @class */ (function () {
    function User(id, login, code, firstName, lastName, fullName, address, addressId, addressName, countryId, cityId, districtId, wardId, birthday, phone, email, activated, langKey, role, scope, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password, userDetailId, avatar, roleId, gender) {
        this.id = id;
        this.login = login;
        this.code = code;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.address = address;
        this.addressId = addressId;
        this.addressName = addressName;
        this.countryId = countryId;
        this.cityId = cityId;
        this.districtId = districtId;
        this.wardId = wardId;
        this.birthday = birthday;
        this.phone = phone;
        this.email = email;
        this.activated = activated;
        this.langKey = langKey;
        this.role = role;
        this.scope = scope;
        this.authorities = authorities;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
        this.password = password;
        this.userDetailId = userDetailId;
        this.avatar = avatar;
        this.roleId = roleId;
        this.gender = gender;
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.code = code ? code : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.fullName = fullName ? fullName : null;
        this.address = address ? address : new _address__WEBPACK_IMPORTED_MODULE_0__["Address"]();
        this.addressId = addressId ? addressId : null;
        this.addressName = addressName ? addressName : null;
        this.countryId = countryId ? countryId : null;
        this.cityId = cityId ? cityId : null;
        this.districtId = districtId ? districtId : null;
        this.wardId = wardId ? wardId : null;
        this.birthday = birthday ? birthday : null;
        this.phone = phone ? phone : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
        this.userDetailId = userDetailId ? userDetailId : null;
        this.avatar = avatar ? avatar : null;
        this.roleId = roleId ? roleId : null;
        this.gender = gender ? gender : 1;
    }
    User.prototype.assign = function (props) {
        if (props) {
            for (var i in props) {
                if (typeof this[i] !== 'undefined') {
                    this[i] = props[i];
                }
            }
        }
        return this;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/entities/user/user.route.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/user/user.route.ts ***!
  \*********************************************/
/*! exports provided: UserResolve, UserManagementResolve, UserAuthoritiesResolve, userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolve", function() { return UserResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementResolve", function() { return UserManagementResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthoritiesResolve", function() { return UserAuthoritiesResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-jhipster */ "./node_modules/ng-jhipster/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ "./src/app/entities/user/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/entities/user/user.service.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/entities/user/user-list/user-list.component.ts");
/* harmony import */ var _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-update/user-update.component */ "./src/app/entities/user/user-update/user-update.component.ts");
/* harmony import */ var _user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-delete-dialog/user-delete-dialog.component */ "./src/app/entities/user/user-delete-dialog/user-delete-dialog.component.ts");










var UserResolve = /** @class */ (function () {
    function UserResolve(service) {
        this.service = service;
    }
    UserResolve.prototype.resolve = function (route, state) {
        var id = route.params['login'] ? route.params['login'] : null;
        if (id) {
            return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"]());
    };
    UserResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserResolve);
    return UserResolve;
}());

var UserManagementResolve = /** @class */ (function () {
    function UserManagementResolve(service) {
        this.service = service;
    }
    UserManagementResolve.prototype.resolve = function (route, state) {
        var id = route.params['login'] ? route.params['login'] : null;
        if (id) {
            return this.service.find(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user.body; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"]());
    };
    UserManagementResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserManagementResolve);
    return UserManagementResolve;
}());

var UserAuthoritiesResolve = /** @class */ (function () {
    function UserAuthoritiesResolve(service) {
        this.service = service;
    }
    UserAuthoritiesResolve.prototype.resolve = function (route, state) {
        return this.service.authorities();
    };
    UserAuthoritiesResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserAuthoritiesResolve);
    return UserAuthoritiesResolve;
}());

var userRoutes = [
    {
        path: 'user',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
        resolve: {
            pagingParams: ng_jhipster__WEBPACK_IMPORTED_MODULE_2__["JhiResolvePagingParams"],
        },
        data: {
            pageTitle: 'Account list',
            defaultSort: 'id,asc'
        },
        children: [
            {
                path: 'new',
                component: _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_8__["UserUpdatePopupComponent"],
                resolve: {
                    entity: UserResolve,
                },
                data: {
                    authorities: ['can_user', 'can_create_user'],
                    pageTitle: 'Create user'
                },
            },
            {
                path: 'edit/:login',
                component: _user_update_user_update_component__WEBPACK_IMPORTED_MODULE_8__["UserUpdatePopupComponent"],
                resolve: {
                    entity: UserResolve,
                },
                data: {
                    authorities: ['can_user', 'can_update_user'],
                    pageTitle: 'Update user'
                },
            },
            {
                path: 'delete/:login',
                component: _user_delete_dialog_user_delete_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserDeletePopupComponent"],
                resolve: {
                    entity: UserResolve
                },
                data: {
                    authorities: ['can_user', 'can_delete_user'],
                    pageTitle: 'Delete user'
                },
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/entities/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_constants_input_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/constants/input.constants */ "./src/app/shared/constants/input.constants.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/users';
        this.resourceSearchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/_search/users';
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        var copy = this.convertDateFromClient(user);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        var copy = this.convertDateFromClient(user);
        return this.http.put(this.resourceUrl + '/' + user.id, copy, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.find = function (login) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_6__["createRequestOption"])(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    UserService.prototype.search = function (req) {
        var options = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_6__["createRequestOption"])(req);
        return this.http.get(this.resourceSearchUrl, { params: options, observe: 'response' });
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    UserService.prototype.authorities = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/users/authorities');
    };
    UserService.prototype.convertDateFromClient = function (user) {
        var copy = Object.assign({}, user, {
            birthday: user.birthday != null && user.birthday.isValid() ? user.birthday.format(_shared_constants_input_constants__WEBPACK_IMPORTED_MODULE_5__["DATE_FORMAT"]) : null
        });
        return copy;
    };
    UserService.prototype.convertDateFromServer = function (res) {
        res.body.birthday = res.body.birthday != null ? moment__WEBPACK_IMPORTED_MODULE_4__(res.body.birthday) : null;
        return res;
    };
    UserService.prototype.convertDateArrayFromServer = function (res) {
        if (res.body.length > 0) {
            res.body.forEach(function (user) {
                user.birthday = user.birthday != null ? moment__WEBPACK_IMPORTED_MODULE_4__(user.birthday) : null;
            });
        }
        return res;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~guest-guest-module.js.map