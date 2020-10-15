(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section >\n    <div class=\"w-full\" style=\"\n    margin-top: 31px;\n    margin-bottom: 31px;\n\">\n      <!-- Wide center column -->\n      <div class=\"flex justify-center\">\n        <!-- Coloumn 1-->\n        <div>\n          <img class=\"object-scale-down w-full\" src=\"./assets/img/login/banner_left.png\" />\n        </div>\n\n        <!-- Coloumn 2-->\n        <div class=\"flex flex-col items-center bg-white\" style=\"width: 41.6666%;\">\n          <div class=\"flex flex-col items-center w-full h-full\">\n            <div class=\"flex flex-2 text-gray-700 text-center bg-blue-bca\" style=\"height: 12px; width: 84px;\">\n            </div>\n            <!-- FORM LOGIN -->\n            <form class=\"flex flex-col mt-20 h-full\" style=\"width: 53.5%\">\n              <div class=\"flex justify-center\">\n                <div class=\"mb-5 pb-1  items-center text-center font-base text-gray-700\">\n                  <img *ngIf=\"changeImg\" class=\"w-full rounded-full align-middle border-none \"\n                    style=\"width: 72px; height: 72px;\" src=\"./assets/img/cs.png\" />\n                  <img *ngIf=\"!changeImg\" class=\"w-full rounded-full align-middle border-none\"\n                    style=\"width: 72px; height: 72px;\" src=\"data:image/png;base64,{{avatar}}\" />\n                </div>\n\n              </div>\n              <div class=\"text-center text-gray-bca font-weight-400 font-20\">\n                Selamat Datang,\n              </div>\n              <div class=\"text-center text-blue-bca font-weight-600 font-28\" ng-init=\"change\">\n                <span>{{change ? name : ''}}</span>\n              </div>\n              <div class=\"w-full\">\n                <div class=\"py-2 pt-10\">\n                  <div class=\"input-group\">\n                    <label for=\"username\" class=\"text-gray-bca-soft font-weight-600 font-14 \" style=\"padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;\">User Domain</label>\n                    <input id=\"username\" placeholder=\"input user domain\" type=\"text\" [value]=\"username\" class=\"block px-3 py-2 border-radius-4 w-full\n                    bg-white text-border-solid placeholder-c4\n                    focus:text-gray-55\n                    focus:text-userdomain-focus\n                    font-weight-400 font-16\" autocomplete=\"off\" (keyup)=\"onKey($event, 'username')\" required\n                    minlength=\"3\" maxlength=\"8\" pKeyFilter=\"alphanum\" style=\"height: 48px;\">\n\n\n                  </div>\n\n\n                  <!-- <p *ngIf=\"!isUsernameValid\" class=\"text-red-500 text-xs italic\">Your username can consist of letters\n                    and numbers only!</p> -->\n                </div>\n                <div class=\"py-2\" id=\"ifYes\" style=\"display:block\">\n                  <div>\n                    <span class=\"text-gray-bca-soft font-weight-600 font-14\" style=\"padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;\">Password</span>\n                    <div class=\"relative\">\n                      <input id=\"password\" placeholder=\"input password\" [type]=\"show ? 'text' : 'password'\" class=\"block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16\" style=\"height: 48px;\" (keyup)=\"onKey($event, 'password')\" required minlength=\"6\">\n                      <div\n                        class=\"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi\">\n                        <i [class]=\"show ? 'fa fa-eye' : 'fa fa-eye-slash'\" (mousedown)=\"showPassword()\"\n                          (mouseup)=\"hidePassword()\" style=\"height: 28px;\"></i>\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"py-4\">\n                    <span class=\"text-gray-bca-soft font-weight-600 font-14\" style=\"padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;\">Appli 1</span>\n                    <div class=\"relative\">\n                      <input id=\"appli1\" placeholder=\"input appli 1\" [type]=\"view ? 'text' : 'password'\" class=\"block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16\" style=\"height: 48px;\" (keyup)=\"onKey($event, 'appli1')\" required maxlength=\"8\">\n                      <div\n                        class=\"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi\">\n                        <i [class]=\"view ? 'fa fa-eye' : 'fa fa-eye-slash'\" (mousedown)=\"showAppli()\"\n                          (mouseup)=\"hideAppli()\" style=\"height: 28px;\"></i>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- Button -->\n\n                <div class=\"flex-col justify-center mt-4\">\n                  <q-button [disabled]=\"!isValidForm\" label=\"Sign In\" (click)=\"onSubmit()\"></q-button>\n                </div>\n\n              </div>\n\n              <div class=\"mx-auto -my-6 pb-1 pt-10 text-center\">\n                <span class=\"text-center  text-metode-verifikasi font-weight-400 font-14\">atau masuk dengan</span>\n              </div>\n              <!-- LINE -->\n              <div class=\"flex items-center w-full mt-2 mx-auto max-w-lg\">\n                <div class=\"w-1/2 px-3 pt-4  border-t\" style=\"border-color: #c4c4c4;\">\n\n                </div>\n                <div class=\"w-full px-3 pt-4\">\n\n                </div>\n                <div class=\"w-1/2 px-3 pt-4  border-t\" style=\"border-color: #c4c4c4;\">\n\n                </div>\n\n              </div>\n              <!-- END LINE -->\n              <div class=\"w-full\">\n                <button\n                  class=\"bg-transparant mt-4 text-blue-bca font-16 active:bg-gray-700 font-weight-600 uppercase px-6 py-3 rounded-full  mr-1 mb-1 w-full button-border-solid-da focus:outline-none\"\n                  type=\"button\" style=\"transition: all 0.15s ease 0s;\" (click)=\"onKlik()\" ng-init=\"toggle\">\n                  <!-- Finger Scan -->\n                  <span>{{toggle ? 'Password' : 'Finger Scan'}}</span>\n                </button>\n              </div>\n\n            </form>\n            <div class=\"flex-2 text-gray-700 text-center bg-blue-bca \" style=\"height: 12px; width: 53.5%\">\n            </div>\n\n            <!-- <div class=\"flex justify-center items-end h-full\">\n              <div class=\"flex-2 text-gray-700 text-center bg-blue-bca px-4 w-1/3 h-1\"\n                style=\"height: 12px; width: 320px;\"></div>\n            </div> -->\n          </div>\n\n          <!-- <div class=\"flex justify-center items-end h-full\">\n            <div class=\"flex-2 text-gray-700 text-center bg-blue-bca px-4 w-1/3 h-1\"\n              style=\"height: 12px; width: 320px;\"></div>\n          </div> -->\n\n        </div>\n        <!-- Coloumn 3-->\n        <div>\n          <img class=\"object-scale-down w-full\" src=\"./assets/img/login/banner_right.png\" />\n        </div>\n\n\n      </div>\n    </div>\n\n    <!-- <app-footer></app-footer> -->\n  </section>\n</main>\n");

/***/ }),

/***/ "./src/app/features/auth/login/login-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/auth/login/login-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/features/auth/login/login.component.ts");




const routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/features/auth/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
/* harmony import */ var src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");








const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_4__["Logger"]('LoginComponent');
let LoginComponent = class LoginComponent {
    constructor(router, authenticationService, confirmationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.confirmationService = confirmationService;
        this.username = "";
        this.password = "";
        this.appli1 = "";
        this.isUsernameValid = false;
        this.isPasswordValid = false;
        this.isAppliValid = false;
        this.isValidForm = false;
        this.userDomainKey = "userdomain";
        this.change = false;
        this.changeImg = true;
        this.loading = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.wait(5000);
            this.authenticationService.login(this.username, this.password, this.appli1).then(val => {
                if (this.authenticationService.isLoggedIn) {
                    console.log('login');
                    const redirect = '/';
                    if (this.authenticationService.isAuthenticated() === false) {
                        // this.spinnerService.hide();
                        console.log(this.authenticationService.isAuthenticated());
                    }
                    else {
                        // Redirect the user
                        this.router.navigate([redirect], { replaceUrl: true });
                        // this.spinnerService.hide();
                    }
                }
                else {
                    console.log('belum login');
                }
            });
        });
        this.show = false;
        this.toggle = false;
        this.view = false;
        if (src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_7__["StorageUtilService"].hasItem(this.userDomainKey)) {
            this.credentials = src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_7__["StorageUtilService"].getItem('userdomain');
            // console.log(this.credentials );
        }
    }
    onSubmit() {
        if (this.isValidForm && this.toggle === false) {
            this.authenticationService.login(this.username, this.password, this.appli1).then(val => {
                if (this.authenticationService.isLoggedIn) {
                    console.log('login');
                    const redirect = '/';
                    if (this.authenticationService.isAuthenticated() === false) {
                        // this.spinnerService.hide();
                        console.log(this.authenticationService.isAuthenticated());
                    }
                    else {
                        // Redirect the user
                        this.router.navigate([redirect], { replaceUrl: true });
                        // this.spinnerService.hide();
                    }
                }
                else {
                    console.log('belum login');
                }
            });
        }
        else if (this.isValidForm && this.toggle === true) {
            this.confirmationService.confirm({
                icon: './assets/img/gif/Scan-Finger-GEN2.gif',
                acceptIcon: null,
                rejectIcon: null,
                rejectVisible: false,
                acceptVisible: false,
                acceptLabel: 'YA',
                rejectLabel: 'BATAL',
                header: '',
                message: 'Scan jari anda pada perangkat',
                closable: true,
                accept: () => { },
            });
            this.loading();
        }
    }
    wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    onKlik() {
        if (document.getElementById('ifYes').style.display === 'block') {
            document.getElementById('ifYes').style.display = 'none';
            this.toggle = true;
        }
        else {
            document.getElementById('ifYes').style.display = 'block';
            this.toggle = false;
        }
        this.validateUsername();
        this.validateForm();
    }
    // click event function toggle
    showPassword() {
        this.show = true;
    }
    hidePassword() {
        this.show = false;
    }
    showAppli() {
        this.view = true;
    }
    hideAppli() {
        this.view = false;
    }
    ngOnInit() {
        // let data = this.encryptPass("123456");
        // alert(data);
        if (this.credentials !== undefined) {
            this.username = this.credentials.user_domain;
            this.name = this.credentials.user_name;
            this.isValidForm = true;
            if (this.credentials.avatar !== '') {
                this.avatar = this.credentials.avatar;
                this.changeImg = false;
                this.change = true;
            }
            else {
                this.changeImg = true;
                this.change = true;
            }
        }
        else {
            this.username = '';
            this.name = '';
        }
        this.onKlik();
    }
    validateUsername() {
        const pattern = RegExp(/^[\w-.]*$/);
        if (this.username.length >= 3) {
            this.isUsernameValid = true;
        }
        else {
            this.isUsernameValid = false;
        }
    }
    validatePassword() {
        const pattern = RegExp(/^[yz]*x[xyz]*$/);
        if (this.password.length >= 6) {
            this.isPasswordValid = true;
        }
        else {
            this.isPasswordValid = false;
        }
    }
    validateAppli() {
        const pattern = RegExp(/^[yz]*x[xyz]*$/);
        if (this.appli1.length >= 8) {
            this.isAppliValid = true;
        }
        else {
            this.isAppliValid = false;
        }
    }
    validateForm() {
        if (this.isUsernameValid && this.isPasswordValid && this.isAppliValid || this.isUsernameValid && document.getElementById('ifYes').style.display === 'none') {
            this.isValidForm = true;
        }
        else {
            this.isValidForm = false;
        }
    }
    onKey(event, type) {
        if (type === "username") {
            this.username = event.target.value;
            this.validateUsername();
            this.validateForm();
        }
        else if (type === "password") {
            this.password = event.target.value;
            this.validateUsername();
            this.validatePassword();
            this.validateForm();
        }
        else if (type === "appli1") {
            this.appli1 = event.target.value;
            this.validateUsername();
            this.validatePassword();
            this.validateAppli();
            this.validateForm();
        }
    }
    encryptPass(pass) {
        let strByte = pass
            .split("")
            .map((s) => s.charCodeAt(0));
        console.log(strByte);
        let sb = {
            str: "",
            toString: function () {
                return this.str;
            },
        };
        var encryptKey = parseInt(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].encryptKeyHexaString, 16);
        for (let i = 0; i < strByte.length; i++) {
            {
                console.log((strByte[i] & 255) ^ encryptKey);
                let v = (strByte[i] & 255) ^ encryptKey;
                if (v < 16) {
                    console.log(v);
                    /* append */ ((sb) => {
                        sb.str = sb.str.concat("0");
                        return sb;
                    })(sb);
                }
                /* append */ ((sb) => {
                    sb.str = sb.str.concat(v.toString(16));
                    return sb;
                })(sb);
            }
        }
        return sb.toString();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/login/login.component.html")).default,
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/features/auth/login/login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/auth/login/login.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/features/auth/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/features/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/button/button */ "./src/app/shared/button/button.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/fesm2015/primeng-keyfilter.js");





//import { NgxSpinnerModule } from 'ngx-spinner';




//import {SmartadminValidationModule} from '../../shared/forms/validation/smartadmin-validation.module';
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            //NgxSpinnerModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonCustomModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__["KeyFilterModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map