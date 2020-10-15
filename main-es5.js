var __generator = (this && this.__generator) || function (thisArg, body) {
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$": 
        /*!**************************************************!*\
          !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./af": "./node_modules/moment/locale/af.js",
                "./af.js": "./node_modules/moment/locale/af.js",
                "./ar": "./node_modules/moment/locale/ar.js",
                "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
                "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
                "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
                "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
                "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
                "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
                "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
                "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
                "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
                "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
                "./ar.js": "./node_modules/moment/locale/ar.js",
                "./az": "./node_modules/moment/locale/az.js",
                "./az.js": "./node_modules/moment/locale/az.js",
                "./be": "./node_modules/moment/locale/be.js",
                "./be.js": "./node_modules/moment/locale/be.js",
                "./bg": "./node_modules/moment/locale/bg.js",
                "./bg.js": "./node_modules/moment/locale/bg.js",
                "./bm": "./node_modules/moment/locale/bm.js",
                "./bm.js": "./node_modules/moment/locale/bm.js",
                "./bn": "./node_modules/moment/locale/bn.js",
                "./bn.js": "./node_modules/moment/locale/bn.js",
                "./bo": "./node_modules/moment/locale/bo.js",
                "./bo.js": "./node_modules/moment/locale/bo.js",
                "./br": "./node_modules/moment/locale/br.js",
                "./br.js": "./node_modules/moment/locale/br.js",
                "./bs": "./node_modules/moment/locale/bs.js",
                "./bs.js": "./node_modules/moment/locale/bs.js",
                "./ca": "./node_modules/moment/locale/ca.js",
                "./ca.js": "./node_modules/moment/locale/ca.js",
                "./cs": "./node_modules/moment/locale/cs.js",
                "./cs.js": "./node_modules/moment/locale/cs.js",
                "./cv": "./node_modules/moment/locale/cv.js",
                "./cv.js": "./node_modules/moment/locale/cv.js",
                "./cy": "./node_modules/moment/locale/cy.js",
                "./cy.js": "./node_modules/moment/locale/cy.js",
                "./da": "./node_modules/moment/locale/da.js",
                "./da.js": "./node_modules/moment/locale/da.js",
                "./de": "./node_modules/moment/locale/de.js",
                "./de-at": "./node_modules/moment/locale/de-at.js",
                "./de-at.js": "./node_modules/moment/locale/de-at.js",
                "./de-ch": "./node_modules/moment/locale/de-ch.js",
                "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
                "./de.js": "./node_modules/moment/locale/de.js",
                "./dv": "./node_modules/moment/locale/dv.js",
                "./dv.js": "./node_modules/moment/locale/dv.js",
                "./el": "./node_modules/moment/locale/el.js",
                "./el.js": "./node_modules/moment/locale/el.js",
                "./en-au": "./node_modules/moment/locale/en-au.js",
                "./en-au.js": "./node_modules/moment/locale/en-au.js",
                "./en-ca": "./node_modules/moment/locale/en-ca.js",
                "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
                "./en-gb": "./node_modules/moment/locale/en-gb.js",
                "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
                "./en-ie": "./node_modules/moment/locale/en-ie.js",
                "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
                "./en-il": "./node_modules/moment/locale/en-il.js",
                "./en-il.js": "./node_modules/moment/locale/en-il.js",
                "./en-in": "./node_modules/moment/locale/en-in.js",
                "./en-in.js": "./node_modules/moment/locale/en-in.js",
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./en-sg": "./node_modules/moment/locale/en-sg.js",
                "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
                "./es-us": "./node_modules/moment/locale/es-us.js",
                "./es-us.js": "./node_modules/moment/locale/es-us.js",
                "./es.js": "./node_modules/moment/locale/es.js",
                "./et": "./node_modules/moment/locale/et.js",
                "./et.js": "./node_modules/moment/locale/et.js",
                "./eu": "./node_modules/moment/locale/eu.js",
                "./eu.js": "./node_modules/moment/locale/eu.js",
                "./fa": "./node_modules/moment/locale/fa.js",
                "./fa.js": "./node_modules/moment/locale/fa.js",
                "./fi": "./node_modules/moment/locale/fi.js",
                "./fi.js": "./node_modules/moment/locale/fi.js",
                "./fil": "./node_modules/moment/locale/fil.js",
                "./fil.js": "./node_modules/moment/locale/fil.js",
                "./fo": "./node_modules/moment/locale/fo.js",
                "./fo.js": "./node_modules/moment/locale/fo.js",
                "./fr": "./node_modules/moment/locale/fr.js",
                "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
                "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
                "./fr.js": "./node_modules/moment/locale/fr.js",
                "./fy": "./node_modules/moment/locale/fy.js",
                "./fy.js": "./node_modules/moment/locale/fy.js",
                "./ga": "./node_modules/moment/locale/ga.js",
                "./ga.js": "./node_modules/moment/locale/ga.js",
                "./gd": "./node_modules/moment/locale/gd.js",
                "./gd.js": "./node_modules/moment/locale/gd.js",
                "./gl": "./node_modules/moment/locale/gl.js",
                "./gl.js": "./node_modules/moment/locale/gl.js",
                "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
                "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
                "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
                "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
                "./gu": "./node_modules/moment/locale/gu.js",
                "./gu.js": "./node_modules/moment/locale/gu.js",
                "./he": "./node_modules/moment/locale/he.js",
                "./he.js": "./node_modules/moment/locale/he.js",
                "./hi": "./node_modules/moment/locale/hi.js",
                "./hi.js": "./node_modules/moment/locale/hi.js",
                "./hr": "./node_modules/moment/locale/hr.js",
                "./hr.js": "./node_modules/moment/locale/hr.js",
                "./hu": "./node_modules/moment/locale/hu.js",
                "./hu.js": "./node_modules/moment/locale/hu.js",
                "./hy-am": "./node_modules/moment/locale/hy-am.js",
                "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
                "./id": "./node_modules/moment/locale/id.js",
                "./id.js": "./node_modules/moment/locale/id.js",
                "./is": "./node_modules/moment/locale/is.js",
                "./is.js": "./node_modules/moment/locale/is.js",
                "./it": "./node_modules/moment/locale/it.js",
                "./it-ch": "./node_modules/moment/locale/it-ch.js",
                "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
                "./it.js": "./node_modules/moment/locale/it.js",
                "./ja": "./node_modules/moment/locale/ja.js",
                "./ja.js": "./node_modules/moment/locale/ja.js",
                "./jv": "./node_modules/moment/locale/jv.js",
                "./jv.js": "./node_modules/moment/locale/jv.js",
                "./ka": "./node_modules/moment/locale/ka.js",
                "./ka.js": "./node_modules/moment/locale/ka.js",
                "./kk": "./node_modules/moment/locale/kk.js",
                "./kk.js": "./node_modules/moment/locale/kk.js",
                "./km": "./node_modules/moment/locale/km.js",
                "./km.js": "./node_modules/moment/locale/km.js",
                "./kn": "./node_modules/moment/locale/kn.js",
                "./kn.js": "./node_modules/moment/locale/kn.js",
                "./ko": "./node_modules/moment/locale/ko.js",
                "./ko.js": "./node_modules/moment/locale/ko.js",
                "./ku": "./node_modules/moment/locale/ku.js",
                "./ku.js": "./node_modules/moment/locale/ku.js",
                "./ky": "./node_modules/moment/locale/ky.js",
                "./ky.js": "./node_modules/moment/locale/ky.js",
                "./lb": "./node_modules/moment/locale/lb.js",
                "./lb.js": "./node_modules/moment/locale/lb.js",
                "./lo": "./node_modules/moment/locale/lo.js",
                "./lo.js": "./node_modules/moment/locale/lo.js",
                "./lt": "./node_modules/moment/locale/lt.js",
                "./lt.js": "./node_modules/moment/locale/lt.js",
                "./lv": "./node_modules/moment/locale/lv.js",
                "./lv.js": "./node_modules/moment/locale/lv.js",
                "./me": "./node_modules/moment/locale/me.js",
                "./me.js": "./node_modules/moment/locale/me.js",
                "./mi": "./node_modules/moment/locale/mi.js",
                "./mi.js": "./node_modules/moment/locale/mi.js",
                "./mk": "./node_modules/moment/locale/mk.js",
                "./mk.js": "./node_modules/moment/locale/mk.js",
                "./ml": "./node_modules/moment/locale/ml.js",
                "./ml.js": "./node_modules/moment/locale/ml.js",
                "./mn": "./node_modules/moment/locale/mn.js",
                "./mn.js": "./node_modules/moment/locale/mn.js",
                "./mr": "./node_modules/moment/locale/mr.js",
                "./mr.js": "./node_modules/moment/locale/mr.js",
                "./ms": "./node_modules/moment/locale/ms.js",
                "./ms-my": "./node_modules/moment/locale/ms-my.js",
                "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
                "./ms.js": "./node_modules/moment/locale/ms.js",
                "./mt": "./node_modules/moment/locale/mt.js",
                "./mt.js": "./node_modules/moment/locale/mt.js",
                "./my": "./node_modules/moment/locale/my.js",
                "./my.js": "./node_modules/moment/locale/my.js",
                "./nb": "./node_modules/moment/locale/nb.js",
                "./nb.js": "./node_modules/moment/locale/nb.js",
                "./ne": "./node_modules/moment/locale/ne.js",
                "./ne.js": "./node_modules/moment/locale/ne.js",
                "./nl": "./node_modules/moment/locale/nl.js",
                "./nl-be": "./node_modules/moment/locale/nl-be.js",
                "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
                "./nl.js": "./node_modules/moment/locale/nl.js",
                "./nn": "./node_modules/moment/locale/nn.js",
                "./nn.js": "./node_modules/moment/locale/nn.js",
                "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
                "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
                "./pa-in": "./node_modules/moment/locale/pa-in.js",
                "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
                "./pl": "./node_modules/moment/locale/pl.js",
                "./pl.js": "./node_modules/moment/locale/pl.js",
                "./pt": "./node_modules/moment/locale/pt.js",
                "./pt-br": "./node_modules/moment/locale/pt-br.js",
                "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
                "./pt.js": "./node_modules/moment/locale/pt.js",
                "./ro": "./node_modules/moment/locale/ro.js",
                "./ro.js": "./node_modules/moment/locale/ro.js",
                "./ru": "./node_modules/moment/locale/ru.js",
                "./ru.js": "./node_modules/moment/locale/ru.js",
                "./sd": "./node_modules/moment/locale/sd.js",
                "./sd.js": "./node_modules/moment/locale/sd.js",
                "./se": "./node_modules/moment/locale/se.js",
                "./se.js": "./node_modules/moment/locale/se.js",
                "./si": "./node_modules/moment/locale/si.js",
                "./si.js": "./node_modules/moment/locale/si.js",
                "./sk": "./node_modules/moment/locale/sk.js",
                "./sk.js": "./node_modules/moment/locale/sk.js",
                "./sl": "./node_modules/moment/locale/sl.js",
                "./sl.js": "./node_modules/moment/locale/sl.js",
                "./sq": "./node_modules/moment/locale/sq.js",
                "./sq.js": "./node_modules/moment/locale/sq.js",
                "./sr": "./node_modules/moment/locale/sr.js",
                "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr.js": "./node_modules/moment/locale/sr.js",
                "./ss": "./node_modules/moment/locale/ss.js",
                "./ss.js": "./node_modules/moment/locale/ss.js",
                "./sv": "./node_modules/moment/locale/sv.js",
                "./sv.js": "./node_modules/moment/locale/sv.js",
                "./sw": "./node_modules/moment/locale/sw.js",
                "./sw.js": "./node_modules/moment/locale/sw.js",
                "./ta": "./node_modules/moment/locale/ta.js",
                "./ta.js": "./node_modules/moment/locale/ta.js",
                "./te": "./node_modules/moment/locale/te.js",
                "./te.js": "./node_modules/moment/locale/te.js",
                "./tet": "./node_modules/moment/locale/tet.js",
                "./tet.js": "./node_modules/moment/locale/tet.js",
                "./tg": "./node_modules/moment/locale/tg.js",
                "./tg.js": "./node_modules/moment/locale/tg.js",
                "./th": "./node_modules/moment/locale/th.js",
                "./th.js": "./node_modules/moment/locale/th.js",
                "./tk": "./node_modules/moment/locale/tk.js",
                "./tk.js": "./node_modules/moment/locale/tk.js",
                "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
                "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
                "./tlh": "./node_modules/moment/locale/tlh.js",
                "./tlh.js": "./node_modules/moment/locale/tlh.js",
                "./tr": "./node_modules/moment/locale/tr.js",
                "./tr.js": "./node_modules/moment/locale/tr.js",
                "./tzl": "./node_modules/moment/locale/tzl.js",
                "./tzl.js": "./node_modules/moment/locale/tzl.js",
                "./tzm": "./node_modules/moment/locale/tzm.js",
                "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm.js": "./node_modules/moment/locale/tzm.js",
                "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
                "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
                "./uk": "./node_modules/moment/locale/uk.js",
                "./uk.js": "./node_modules/moment/locale/uk.js",
                "./ur": "./node_modules/moment/locale/ur.js",
                "./ur.js": "./node_modules/moment/locale/ur.js",
                "./uz": "./node_modules/moment/locale/uz.js",
                "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
                "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
                "./uz.js": "./node_modules/moment/locale/uz.js",
                "./vi": "./node_modules/moment/locale/vi.js",
                "./vi.js": "./node_modules/moment/locale/vi.js",
                "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
                "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
                "./yo": "./node_modules/moment/locale/yo.js",
                "./yo.js": "./node_modules/moment/locale/yo.js",
                "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
                "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
                "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
                "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
                "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
                "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
                "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
                "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cekin-nasabah/cekin-nasabah.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/cekin-nasabah/cekin-nasabah.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex container mx-auto sm:px-4 pt-2 pb-8\" style=\"height: 700px;\">\n\n  <p-dialog [(visible)]=\"display1\" [modal]=\"true\" [style]=\"{width: '400px',height: '308px'}\" [baseZIndex]=\"10000\"\n    [draggable]=\"false\" [resizable]=\"true\" [closable]=\"false\">\n\n    <!-- dialog verifikasi passpor BCA -->\n    <p-header class=\"flex flex-col items-center\">\n      <!-- M0001 -->\n      <!-- error code -->\n    </p-header>\n    <div class=\"flex flex-col items-left whitespace-no-wrap\">\n\n\n      <p class=\"text-md text-black-bca-soft pb-10 pt-1 text-center\" style=\"font-weight: 600;\"> Proses Verifikasi Nasabah\n      </p>\n      <label class=\"w-2/3\">\n        <div class=\"text-left px-4\" style=\"float:left\">\n          <img *ngIf=\"swipePaspor\" src='./assets/img/GIF_loading.gif' style=\"width: 37.33px; height: 37.33px;\" />\n          <img *ngIf=\"!swipePaspor\" src='./assets/img/icon/check-green.png' style=\"width: 24.8px;height: 19.2px;\" />\n        </div>\n        <div class=\"text-md font-14 pb-5 pt-1\">\n          Swipe Kartu Paspor BCA Nasabah...\n        </div>\n      </label>\n      <label class=\"w-2/3 \" [ngClass]=\"{\n      'transparant-3': swipePaspor\n    }\">\n        <div class=\"text-left px-4\" style=\"float:left\">\n          <img *ngIf=\"pinInput\" src='./assets/img/GIF_loading.gif' style=\"width: 37.33px; height: 37.33px;\" />\n          <img *ngIf=\"!pinInput\" src='./assets/img/icon/check-green.png' style=\"width: 24.8px;height: 19.2px;\" />\n        </div>\n        <div class=\"text-md font-14 pb-5 pt-1\">\n          Nasabah input PIN...\n\n        </div>\n      </label>\n    </div>\n    <p-footer class=\"flex justify-center\" style=\"margin-bottom: 20px;\">\n      <button class=\"outline-none focus:outline-none  bg-red text-white font-bold py-2 px-8 rounded-full\" type=\"button\"\n        style=\"transition: all 0.15s ease 0s; width: 160px;\" (click)=\"display1 = false\">\n        BATAL\n      </button>\n    </p-footer>\n  </p-dialog>\n\n  <o-dialog [(visible)]=\"displaySearchBy\" (onHide)=\"onHideDialogSearch($event)\" [modal]=\"true\" [style]=\"styleSearchBy\"\n    [draggable]=\"false\" [resizable]=\"true\" [closable]=\"true\">\n    <p-header class=\"flex flex-col items-center\">\n      <p class=\"font-16 body-text\" style=\"font-weight: 600;padding-bottom: 17px;padding-left: 300px;margin-top: 12px;\">\n        Search Nasabah </p>\n    </p-header>\n    <ng-container *ngIf=\"selectSearch !== '4'\">\n      <div id=\"body\"\n        style=\"position:fixed;z-index: 20000;/* width: 100%; */padding-left: 48px;padding-right: 48px;/* margin-bottom: 40px; */\">\n        <div class=\"flex\">\n          <div class=\"flex flex-col\">\n            <span class=\"text-gray-bca-soft font-weight-600 font-14\" style=\"margin-bottom:4px\">Cari berdasarkan</span>\n            <div class=\"flex flex-row\">\n              <o-dropdown [options]=\"listSearch\" [style]=\"{width:'260px', height: '48px'}\" [(ngModel)]=\"selectSearch\"\n                (onShow)=\"onShowSearch($event)\" (onHide)=\"onHideSearch($event)\" (onChange)=\"onChangeSearch($event)\"\n                [dropdownIcon]=\"dropdownIcon\"></o-dropdown>\n\n              <input  id=\"txtCari\" [placeholder]=\"txtCariPlaceholder\" type=\"text\" [(ngModel)]=\"txtCari\"  (keyup)=\"onKey($event, 'txtCari')\"  class=\"text-md px-2 py-1 w-full bg-white placeholder-gray-600 focus:placeholder-gray-500 focus:bg-white focus:text-gray-55 focus:outline-none font-weight-400 font-16\" autocomplete=\"off\" required [minlength]=\"maxLength\" [maxlength]=\"maxLength\" type=\"text\" [pKeyFilter]=\"txtCariPkeyFilter\"\n                style=\"width: 260px;margin-left: 20px;border: 1px solid #C4C4C4;border-radius: 4px;\">\n              <button type=\"button\"\n                class=\"secondary-blue text-white font-16 font-bold outline-none focus:outline-none border rounded-full  w-120 H-40\"\n                style=\"margin-left: 20px;\" [ngClass]=\"{\n              'secondary-blue': isValidFormSearch,\n              'disable-button cursor-not-allowed': !isValidFormSearch}\" [disabled]=\"isValidFormSearch\"\n                (click)=\"searchBy()\">CARI</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"selectSearch == '4'\">\n      <div id=\"body\"\n       class=\"flex justify-center\"\n        style=\"z-index: 20000\">\n        <div class=\"flex\" style=\"height: 400px\">\n          <div class=\"flex flex-col\">\n            <span class=\"text-gray-bca-soft font-weight-600 font-14\" style=\"margin-bottom:4px\">Cari berdasarkan</span>\n            <div class=\"flex flex-col\">\n              <o-dropdown [options]=\"listSearch\" [style]=\"{width:'448px', height: '48px'}\" [(ngModel)]=\"selectSearch\"\n                (onShow)=\"onShowSearch($event)\" (onHide)=\"onHideSearch($event)\" (onChange)=\"onChangeSearch($event)\"\n                [dropdownIcon]=\"dropdownIcon\"></o-dropdown>\n\n              <input id=\"txtCari\" [placeholder]=\"txtCariPlaceholder\" type=\"text\" [value]=\"txtCari\" [(ngModel)]=\"txtCari\" (keyup)=\"onKey($event, 'txtCari')\"  class=\"text-md px-2 py-1 w-full\n          bg-white placeholder-gray-600\n          focus:placeholder-gray-500\n          focus:bg-white\n          focus:text-gray-55\n          focus:outline-none\n          font-weight-400 font-16\" autocomplete=\"off\" (keyup)=\"onKey($event, 'username')\" required  [maxlength]=\"maxLength\" type=\"text\" [pKeyFilter]=\"txtCariPkeyFilter\"\n                style=\"width: 448px; margin-top:12px; margin-bottom:12px; height: 48px;border: 1px solid #C4C4C4;border-radius: 4px;\">\n              <div class=\"flex flex-row\">\n                <my-date-picker name=\"tglLahir\" [placeholder]=\"placeholderTglLahir\" [options]=\"tglLahirOptions\"\n                [(ngModel)]=\"tglLahir\" (dateChanged)=\"onDateChanged($event)\" required></my-date-picker>\n\n                <o-dropdown [style]=\"{width:'260px', height: '48px', 'margin-left': '20px'}\" [options]=\"listJenkel\" [style]=\"{width:'448px', height: '48px'}\" [(ngModel)]=\"selectSearchJenkel\"\n                (onShow)=\"onShowSearchJenkel($event)\" (onHide)=\"onHideSearchJenkel($event)\"  (onChange)=\"onChangeSearchJenkel($event)\"\n                [dropdownIcon]=\"dropdownIconJenkel\"></o-dropdown>\n              </div>\n\n              <div class=\"flex justify-center\" style=\"margin-top: 28px;\">\n                <button type=\"button\"\n                class=\"secondary-blue text-white font-16 font-bold outline-none focus:outline-none border rounded-full  w-120 H-40\"\n                style=\"margin-left: 20px;\" [ngClass]=\"{\n            'secondary-blue': isValidFormSearch,\n            'disable-button cursor-not-allowed': !isValidFormSearch}\" [disabled]=\"isValidFormSearch\"\n                (click)=\"searchBy()\">CARI</button>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n\n    <div style=\"height: 150px;margin-top: 90px;\" *ngIf='showTable'>\n      Henry Dewa\n    </div>\n    <p-footer class=\"flex justify-center\" style=\"margin-top: 100px;\">\n\n    </p-footer>\n  </o-dialog>\n\n  <div class=\"flex container pt-2 pb-8\">\n    <!-- Konten Kiri-->\n    <div class=\"flex-grow w-1/4 mb-6 lg:mb-0  flex flex-row \">\n      <div class=\"flex flex-col bg-white overflow-hidden\">\n        <div class=\"flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n          <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n            <img class=\"flex\" src=\"./assets/img/icon/back-color.png\" />\n            <span class=\"ml-4 font-16 text-blue-bca font-weight-600\"> Kembali</span>\n          </div>\n        </div>\n\n        <div class=\"flex-grow flex px-2 py-8 text-grey-darker items-center  -mx-4\">\n          <div class=\"w-full xl:w-full px-4 flex items-center\">\n            <span class=\"text-xl text-blue-bca font-bold\"></span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- End Konten Kiri-->\n\n    <!-- Konten Kanan-->\n    <div class=\"w-full px-4  flex flex-grow flex-col\">\n\n      <div class=\"flex w-full pb-10 lg:mb-0 lg:w-full px-4 py-4  justify-center \">\n        <label class=\"font-28 font-bold text-blue-bca\">Pilih sarana verifikasi nasabah</label>\n      </div>\n      <div class=\"flex justify-center\">\n        <div class=\"flex flex-row\" id=\"{{ item.value }}\" *ngFor=\"let item of listCekin\">\n          <ng-container>\n            <div\n              class=\"produk-background-blue border-produk border-t border-b rounded-lg sm:border  mr-5 h-256 w-256 relative\">\n              <div class=\"flex justify-center h-256 w-256\">\n                <div class=\"text-center px-6 py-4\">\n                  <div class=\"py-0\">\n                    <div class=\"mb-4\">\n                      <p class=\"font-16 text-gray-55 mb-4\">{{ item.label }}</p>\n                    </div>\n                    <div class=\"flex mb-2 justify-center\">\n                      <img src=\"./assets/img/check-in/{{ item.image }}\" />\n                    </div>\n\n                    <div class=\"absolute inset-x-0 bottom-0 pb-2 px-4 py-2\">\n                      <button type=\"button\"\n                        class=\"secondary-blue font-16 font-bold outline-none focus:outline-none text-white border rounded-full px-6 py-2 w-164 H-40 uppercase\"\n                        (click)=\"methodCekin(item.value)\">PILIH</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n\n\n    </div>\n    <!-- End Konten Kanan-->\n  </div>\n</div>\n\n\n<!-- dialog DTOTT finger -->\n<o-dialog [(visible)]=\"displayFinger\" [modal]=\"true\" [style]=\"{width: '332px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"true\" [closable]=\"true\">\n\n  <p-header class=\"flex flex-col items-center\"></p-header>\n  <div class=\"flex flex-col items-left whitespace-no-wrap\">\n    <p class=\"text-md text-gray-55 -pb-1 pt-1 text-center font-weight-600 font-16\"> Override Transaksi </p>\n    <p class=\"text-md text-gray-55 pb-5 pt-1 text-center font-weight-400 font-16\"> Nasabah DTTOT </p>\n    <label class=\"mx-4\" style=\"width: 268px; height: 48px;\">\n      <div class=\"font-weight-600 font-14 text-gray-bca-soft\">\n        User Domain\n      </div>\n      <input class=\"form-input-nasabah mt-1 block w-full placeholder-gray-500 body-text\" type=\"text\"\n        placeholder=\"\" maxlength=\"40\">\n    </label>\n    <div class=\"flex justify-center mt-16\">\n      <button\n        class=\"outline-none focus:outline-none  secondary-blue hover:secondary-blue text-white font-bold py-2 px-8 rounded-full\"\n        type=\"button\" style=\"width: 132px; height: 36px;\" (click)=\"display1 = false\">\n        LANJUT\n      </button>\n    </div>\n    <div class=\"flex justify-center mt-4\">\n      <p class=\"text-secondary-bca font-16 font-weight-700\" style=\"cursor:pointer\">METODE LAIN</p>\n    </div>\n  </div>\n  <p-footer class=\"flex justify-center\"></p-footer>\n</o-dialog>\n\n<!-- dialog DTOTT pass -->\n<o-dialog [(visible)]=\"displayPass\" [modal]=\"true\" [style]=\"{width: '332px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"true\" [closable]=\"true\">\n\n  <p-header class=\"flex flex-col items-center\"></p-header>\n  <div class=\"flex flex-col items-left whitespace-no-wrap\">\n    <p class=\"text-md text-gray-55 -pb-1 pt-1 text-center font-weight-600 font-16\"> Override Transaksi </p>\n    <p class=\"text-md text-gray-55 pb-5 pt-1 text-center font-weight-400 font-16\"> Nasabah DTTOT </p>\n    <label class=\"mx-4\" style=\"width: 268px; height: 48px;\">\n      <div class=\"font-weight-600 font-14 text-gray-bca-soft\">\n        User Domain\n      </div>\n      <input class=\"form-input-nasabah mt-1 block w-full placeholder-gray-500 body-text\" type=\"text\"\n        placeholder=\"\" maxlength=\"40\">\n    </label>\n    <label class=\"mx-4 mt-6\" style=\"width: 268px; height: 48px;\">\n      <div class=\"font-weight-600 font-14 text-gray-bca-soft\">\n        Password\n      </div>\n      <input class=\"form-input-nasabah mt-1 block w-full placeholder-gray-500 body-text\" type=\"text\"\n        placeholder=\"\" maxlength=\"40\">\n    </label>\n    <label class=\"mx-4 mt-6\" style=\"width: 268px; height: 48px;\">\n      <div class=\"font-weight-600 font-14 text-gray-bca-soft\">\n        Appli 1\n      </div>\n      <input class=\"form-input-nasabah mt-1 block w-full placeholder-gray-500 body-text\" type=\"text\"\n        placeholder=\"\" maxlength=\"40\">\n    </label>\n    <div class=\"flex justify-center mt-16\">\n      <button\n        class=\"outline-none focus:outline-none  secondary-blue hover:secondary-blue text-white font-bold py-2 px-8 rounded-full\"\n        type=\"button\" style=\"width: 132px; height: 36px;\" (click)=\"display1 = false\">\n        LANJUT\n      </button>\n    </div>\n    <div class=\"flex justify-center mt-4\">\n      <p class=\"text-secondary-bca font-16 font-weight-700\" style=\"cursor:pointer\">METODE LAIN</p>\n    </div>\n  </div>\n  <p-footer class=\"flex justify-center\"></p-footer>\n</o-dialog>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/dashboard.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/dashboard.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- component -->\n\n<div class=\"flex-grow container mx-auto sm:px-4 pt-0 pb-64\">\n  <!-- Header-->\n  <div class=\"bg-white border-t border-b sm:border-l sm:border-r sm:rounded mb-6\" style=\"box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.15);\">\n    <div class=\"lg:flex\">\n      <div class=\"text-left py-8 pl-6\" style=\"width: 55%;\">\n        <div class=\"\">\n          <div class=\"text-grey-darker mb-2\">\n            <span class=\"font-28 font-bold text-blue-bca align-top\">Verifikasi Nasabah</span>\n          </div>\n          <div class=\"font-20 tracking-wide text-metode-verifikasi pb-2\">\n            Pilih metode verifikasi nasabah\n          </div>\n          <div>\n            <button type=\"button\"\n              class=\"font-bold secondary-blue text-white uppercase px-4 py-1 rounded-full   mr-1 mb-1 w-1/4 border-gray-300 border\"\n              style=\"font-size: 14px;width: 96px;height: 36px;\">KTP-EL</button>\n            <button type=\"button\"\n              class=\"font-bold secondary-blue text-white uppercase px-4 py-1 rounded-full mr-1 mb-1 w-1/3 border-gray-300 border\"\n              style=\"font-size: 14px;width: 136px; height: 36px;\">PASPOR BCA</button>\n            <button type=\"button\"\n              class=\"font-bold secondary-blue text-white uppercase px-4 py-1 rounded-full   mr-1 mb-1 w-1/4 border-gray-300 border\"\n              style=\"font-size: 14px;width: 136px; height: 36px;\">SEARCH BY</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-full text-center py-8\"\n        style=\"background-image: url(./assets/img/dashboard_banner.png); background-size: 100%; background-repeat: no-repeat;height: 225px;\">\n      </div>\n    </div>\n  </div>\n  <!-- Content -->\n  <div class=\"flex flex-wrap -mx-4\">\n    <div class=\"w-full pb-10 lg:mb-0 lg:w-full px-4 py-4 flex flex-col justify-center items-center\">\n      <label class=\"font-28 font-bold text-blue-bca\">Info Produk</label>\n      <label class=\"text-gray-55 font-20\">Penjelasan, Komparasi hingga Pembukaan Produk</label>\n      <div class=\"flex items-center justify-center w-full mt-5\">\n        <!-- Toggle Button -->\n        <label for=\"toogleA\" class=\"flex items-center cursor-pointer\">\n          <!-- toggle -->\n          <div class=\"relative\">\n            <!-- input -->\n            <input id=\"toogleA\" type=\"checkbox\" class=\"hidden\" [(ngModel)]=\"isKomparasi\"\n              (change)=\"checkKomparasi(isKomparasi?'A':'B')\" />\n            <!-- line -->\n            <div class=\"toggle__line  rounded-full shadow-inner\" style=\"width: 37.4px; height: 15.4px;\"></div>\n            <!-- dot -->\n            <div class=\"toggle__dot absolute bg-white rounded-full shadow inset-y-0 left-0\"\n              style=\"width: 22px; height: 22px;\"></div>\n          </div>\n          <!-- label -->\n          <div class=\"ml-3 text-gray-55 font-16 font-weight-600\">\n            Bandingkan produk\n          </div>\n        </label>\n      </div>\n\n\n    </div>\n    <!-- Konten Kiri-->\n    <div class=\"w-full mb-6 lg:mb-0 lg:w-1/4 px-4 flex flex-col\">\n      <div class=\"flex flex-col bg-white border-r overflow-hidden mt-10\" style=\"\n      border-right-color: #999999;\n  \">\n\n        <div class=\"flex-grow flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n          <div class=\"w-full xl:w-full px-4 flex items-center\">\n            <span class=\"font-14 text-gray-bca-soft\">Kategori Produk</span>\n          </div>\n        </div>\n        <div *ngFor=\"let produk of listInfoProduk\"\n          class=\"flex-grow flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n          <div *ngIf=\"produk.kategori.toLowerCase() === 'simpanan' \">\n            <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\"\n              (click)=\"onChangeKategori(produk.kategori)\">\n              <span class=\"font-20 text-blue-bca\" style=\"font-weight: 600;\">{{ produk.kategori }}</span>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"flex-grow flex px-2 py-8 text-grey-darker items-center  -mx-4\">\n          <div class=\"w-full xl:w-full px-4 flex items-center\">\n            <span class=\"text-xl text-blue-bca font-bold\"></span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- Konten Kanan-->\n    <div class=\"w-full lg:w-2/3 px-4\">\n      <!-- List PRODUK-->\n     \n      <div class=\"flex flex-row\" id=\"{{ produk.kategori }}\" *ngFor=\"let produk of listInfoProduk\">\n\n        <ng-container *ngIf=\"selectedKategori == produk.kategori\">\n          <div *ngFor=\"let item of produk.products\"\n            class=\"produk-background-blue border-produk border-t border-b sm:rounded sm:border  mr-5 h-256 w-256 relative\"\n            [ngClass]=\"{\n              'border-produk-select': checked(item.id)\n            }\">\n            <div class=\"flex justify-center h-256 w-256\">\n              <div class=\"text-center px-6 py-4\">\n                <div class=\"py-0\">\n                  <div class=\"\">\n                    <p class=\"font-16 text-gray-55\">{{ item.namaProduk }}</p>\n                  </div>\n                  <div class=\"flex justify-center\">\n                    <img src=\"data:image/png;base64,{{ item.image }}\" style=\"width: 146px; height: 146px\" />\n                  </div>\n\n                  <div class=\"absolute inset-x-0 bottom-0  px-4 py-2\" style=\"padding-bottom: 20px;\">\n\n                    <input type=\"checkbox\" class=\"form-checkbox  text-blue-600 cursor-pointer\" [ngClass]=\"{\n                      'checkbox-checked': checked(item.id)\n                    }\" name=\"chk_komparasi\" id=\"chk1\" *ngIf=\"isKomparasi\" [checked]=\"checked(item.id)\"\n                      (change)=\"onChange($event.target.checked, item.id )\">\n\n                    <button type=\"button\"\n                      class=\"secondary-blue font-16 font-bold outline-none focus:outline-none text-white border rounded-full px-6 py-2 w-164 H-40\"\n                      *ngIf=\"!isKomparasi\" (click)=\"showDialogPilih(item.id)\">PILIH</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n\n\n\n      <!-- LIHAT PRODUK SIMPANAN LAINNYA  -->\n      <div class=\"flex justify-center pt-5 font-md\">\n        <div id=\"divLihatProduk\" *ngIf=\"!isKomparasi\">\n          <p class=\"text-secondary-bca font-16 font-bold cursor-pointer\" (click)=\"showDialog()\">LIHAT PRODUK SIMPANAN\n            LAINNYA\n          </p>\n        </div>\n        <div id=\"divBandingkan\" *ngIf=\"isKomparasi\" style=\"padding-top: 23px\">\n          <!-- <q-button class=\"secondary-blue\" [disabled]=\"!btnBandingkanValid\" label=\"BANDINGKAN\" (click)=\"showDialog()\"></q-button> -->\n          <button type=\"button\"\n            class=\"text-white font-16 font-bold outline-none focus:outline-none border rounded-full px-6 py-2 w-164 H-40\"\n            [ngClass]=\"{\n            'secondary-blue': btnBandingkanValid,\n            'disable-button cursor-not-allowed': !btnBandingkanValid\n          }\" (click)=\"showDialog()\" [disabled]=\"!btnBandingkanValid\">BANDINGKAN</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<o-dialog [(visible)]=\"display\" [modal]=\"true\" [style]=\"{width: '400px' , height: '222px'}\" [baseZIndex]=\"10000\"\n  [draggable]=\"false\" [resizable]=\"false\">\n\n  <p-header class=\"flex flex-col items-center\">\n    <p class=\"font-16 body-text\" style=\"font-weight: 600;padding-bottom: 17px;padding-left: 139px;margin-top: 12px; letter-spacing: 0.02em;\"> Nama Nasabah </p>\n   </p-header>\n  <div class=\"flex flex-col items-center\" >\n   \n    <label style=\"width: 320px;height: 48px;\">\n      <input class=\"form-input-nasabah mt-1 block w-full placeholder-gray-500 body-text\" id=\"nama_nasabah\" [(ngModel)]=\"namaNasabah\" type=\"text\"\n        placeholder=\"input nama nasabah\" maxlength=\"40\">\n    </label>\n  </div>\n  <p-footer class=\"flex justify-center\" style=\"padding-bottom: 24px\">\n    <button\n      class=\"bg-transparent outline-none focus:outline-none  text-secondary-bca font-16 font-bold  w-132 H-40 border-2 border-secondary-blue  rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s;\" (click)=\"display = false\">\n      KEMBALI\n    </button>\n    <button type=\"button\"\n      class=\"secondary-blue text-white font-16 font-bold outline-none focus:outline-none border rounded-full  w-132 H-40\"\n      [ngClass]=\"{\n        'secondary-blue': namaNasabah,\n        'disable-button cursor-not-allowed': !namaNasabah}\"\n      (click)=\"actionNext()\" [disabled]=\"namaNasabah == ''\">LANJUT</button>\n\n    <!-- <button\n      class=\"outline-none focus:outline-none  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s;\" (click)=\"actionNext()\">\n      LANJUT\n    </button> -->\n  </p-footer>\n</o-dialog>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-channel/detail-channel.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-channel/detail-channel.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full lg:mb-0 lg:w-full px-32 flex justify-center\">\n  <div class=\"Blue-BDS-Web-G2 whitespace-no-wrap rounded-b-lg\" style=\"height: 52px\">\n    <div class=\"flex justify-center\">\n      <div class=\"text-white mx-4 my-3 font-16 font-weight-400\">\n        {{labelText}}\n      </div>\n      <div class=\"text-white my-1 border-r-2\"></div>\n      <img src='./assets/img/close_white.png' style=\"width: 24px; height: 24px; cursor:pointer\" class=\"mx-2 my-3\"\n        (click)=\"backToDash()\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"flex container mx-auto sm:px-4 pt-16 pb-8\">\n  <!-- Konten Kiri-->\n  <div class=\"flex-grow w-1/4 mb-6 lg:mb-0 px-4 flex flex-row border-r\">\n    <div class=\"flex flex-col bg-white overflow-hidden\">\n      <div class=\"flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n          <img class=\"flex\" src=\"./assets/img/icon/arrow-back.png\" />\n          <span class=\"ml-4 font-16 text-gray-bca-soft font-weight-600\" (click)=\"onClickBack()\"> Kembali</span>\n        </div>\n      </div>\n\n      <div class=\"flex-grow flex px-2 py-8 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center\">\n          <span class=\"text-xl text-blue-bca font-bold\"></span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Konten Kanan-->\n  <div class=\"w-full px-4  flex flex-grow flex-row\">\n\n    <div *ngIf=\"listItem\">\n      <div class=\"flex mb-4\">\n        <div class=\"flex flex-row mb-2 justify-center\">\n          <img src=\"data:image/png;base64,{{ listItem.image }}\" style=\"width: 160px; height: 100.57px\" />\n\n        </div>\n        <div class=\"flex flex-col ml-4\">\n          <span class=\"font-20 mt-5 body-text\"> Info Produk </span>\n          <span class=\"font-28 font-bold text-blue-bca\"> {{ listItem.namaProduk }} </span>\n        </div>\n      </div>\n      <div class=\"w-full\">\n        <!-- TAB -->\n        <my-tabs>\n          <my-tab [tabTitle]=\"'Detail Produk'\">\n            <p-accordion [multiple]=\"true\">\n              <p-accordionTab header=\"Keuntungan\" [selected]=\"true\">\n                <!-- m-bca -->\n                <div class=\"grid grid-cols-3\" *ngIf=\"listItem.id === 4\">\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0 || i == 2\">\n                        <img src=\"./assets/img/channel/mobile/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" />\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 1 || i == 3\">\n                        <img src=\"./assets/img/channel/mobile/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" />\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- sms bca -->\n                <div class=\"grid grid-row-3\" *ngIf=\"listItem.id === 5\">\n\n                  <div class=\"flex flex-row\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0 || i == 1 || i == 2\">\n                        <img src=\"./assets/img/channel/sms/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" />\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- klik bca -->\n                <div class=\"grid grid-row-3\" *ngIf=\"listItem.id === 6\">\n                  <div class=\"flex flex-row\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0 || i == 1 || i == 2\">\n                        <img src=\"./assets/img/channel/klik/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" />\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </p-accordionTab>\n              <!-- mobile -->\n              <p-accordionTab header=\"Biaya Umum\" [selected]=\"true\" *ngIf=\"listItem.id === 4\">\n                <div class=\"w-full\" style=\"padding-left: 73px;\">\n                  <table class=\"table-auto\">\n                    <thead>\n                      <tr>\n                        <td class=\"w-12 font-weight-600 font-14 body-text pb-2\">Jenis Tranasaksi</td>\n                        <td style=\"width: 20%;\" colspan=\"2\"\n                          class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">\n                          Indosat Ooredoo</td>\n                        <td class=\"w-64\" colspan=\"1\" class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">\n                          XL</td>\n                        <td class=\"w-64\" colspan=\"3\" class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">\n                          Telkomsel</td>\n\n                      </tr>\n                      <tr>\n                        <td class=\"w-12 text-center font-weight-600 body-text\"></td>\n                        <td class=\"w-16 text-center font-weight-600 body-text\">Prabayar</td>\n                        <td class=\"w-16 text-center font-weight-600 body-text\">Pascabayar</td>\n                        <td class=\"text-center font-weight-600 body-text\"></td>\n                        <td class=\"w-24 text-center font-weight-600 body-text\">KartuHALO</td>\n                        <td class=\"w-16 text-center font-weight-600 body-text\">simPATI</td>\n                        <td class=\"text-center font-weight-600 body-text\">AS</td>\n                      </tr>\n\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let biaya of listItem.biayaUmum.biaya_umum; let i = index\">\n                        <td class=\"w-1/4 pb-1 body-text font-14 font-weight-400\">{{ biaya.jenis_transaksi}}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.indosat_oredoo_prabayar}}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.indosat_oredoo_pascabayar }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.xl }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.telkomsel_kartuhalo }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.telkomsel_simpati }}</td>\n                        <td class=\"pb-1 body-text font-14 font-weight-400\">{{ biaya.telkomsel_as }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab header=\"Limit Transaksi m-BCA\" [selected]=\"true\" *ngIf=\"listItem.id === 4\">\n                <div class=\"w-full\" style=\"padding-left: 73px;\">\n                  <table class=\"table-auto\">\n                    <thead>\n                      <tr>\n                        <th class=\"tg-0pky\" style=\"width: 35%;\"></th>\n                        <th class=\"tg-0pky pl-8\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Blue-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                        <th class=\"tg-0pky pl-8\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Gold-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                        <th class=\"tg-0pky pl-8\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Platinum-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                        <th class=\"tg-0pky pl-8\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/BCA_Dollar.png\" style=\"width: 72px; height: 46px;\"/></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Keterangan</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Blue</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Gold</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2 pr-4\">Platinum</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2 pr-6\">BCA Dollar</td>\n                      </tr>\n                      <tr *ngFor=\"let limit of listItem.limitMbca.limit_mbca; let i = index\">\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\"> {{ limit.keterangan }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ limit.blue }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ limit.gold }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ limit.platinum }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ limit.bca_dollar }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <div *ngFor=\"let limit of listItem.limitMbca.keterangan_limit; let i = index\">\n                    <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ limit.keterangan }}</td>\n                  </div>\n                </div>\n              </p-accordionTab>\n              <!-- klik -->\n              <p-accordionTab header=\"Limit dan Biaya\" [selected]=\"true\" *ngIf=\"listItem.id === 5\">\n                <div class=\"w-full\" style=\"padding-left: 32px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <!-- finansial -->\n                      <div>\n                        <tr>\n                          <td class=\"w-2/5  font-weight-600 font-14 pb-1 pt-2\">Limit Transaksi Finansial</td>\n                          <td class=\"w-3/5  font-weight-600 font-14 pb-1\">Nominal</td>\n                        </tr>\n                        <tr *ngFor=\"let biaya of listItem.limitBiaya.limit_finansial.limit_finansial; let i = index\">\n                          <td class=\"w-2/5  pb-1 font-14 font-weight-400 body-text\">{{ biaya.limit_transaksi_finansial }}</td>\n                          <td class=\"w-3/5  pb-1 font-14 font-weight-400 body-text\">{{ biaya.nominal }}</td>\n                        </tr>\n                      </div>\n                      <div *ngFor=\"let biaya of listItem.limitBiaya.limit_finansial.info_limit_finansial; let i = index\">\n                        <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ biaya.keterangan }}</td>\n                      </div>\n\n                      <!-- ecommerce -->\n                      <div>\n                        <tr>\n                          <td class=\"w-2/3  font-weight-600 font-14 pb-1 pt-4\">Limit pembayaran e-Commerce</td>\n                          <td class=\"w-1/3  font-weight-600 font-14 pb-1\">Nominal</td>\n                        </tr>\n                        <tr *ngFor=\"let biaya of listItem.limitBiaya.limit_ecommerce; let i = index\">\n                          <td class=\"w-2/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.limit_pembayaran_ecommerce }}</td>\n                          <td class=\"w-1/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.nominal }}</td>\n                        </tr>\n                      </div>\n\n                      <!-- tagihan -->\n                      <div>\n                        <tr>\n                          <td class=\"w-2/3  font-weight-600 font-14 pb-1 pt-4 whitespace-no-wrap\">Biaya untuk transaksi pembayaran tagihan</td>\n                          <td class=\"w-1/3  font-weight-600 font-14 pb-1\">Nominal</td>\n                        </tr>\n                        <tr *ngFor=\"let biaya of listItem.limitBiaya.biaya_tagihan.biaya_tagihan; let i = index\">\n                          <td class=\"w-2/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.biaya_untuk_transaksi_pembayaran_tagihan }}</td>\n                          <td class=\"w-1/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.nominal }}</td>\n                        </tr>\n                      </div>\n                      <div *ngFor=\"let biaya of listItem.limitBiaya.biaya_tagihan.keterangan_biaya_tagihan; let i = index\">\n                        <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ biaya.keterangan }}</td>\n                      </div>\n\n                      <!-- transfer -->\n                      <div>\n                        <tr>\n                          <td class=\"w-2/3  font-weight-600 font-14 pb-1 pt-4 whitespace-no-wrap\">Biaya Transaksi transfer antar bank</td>\n                          <td class=\"w-1/3  font-weight-600 font-14 pb-1\">Nominal</td>\n                        </tr>\n                        <tr *ngFor=\"let biaya of listItem.limitBiaya.biaya_transfer.biaya_transfer; let i = index\">\n                          <td class=\"w-2/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.biaya_transaksi_transfer_antar_bank }}</td>\n                          <td class=\"w-1/3  pb-1 font-14 font-weight-400 body-text\">{{ biaya.nominal }}</td>\n                        </tr>\n                      </div>\n                      <div *ngFor=\"let biaya of listItem.limitBiaya.biaya_transfer.keterangan_transfer; let i = index\">\n                        <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ biaya.keterangan }}</td>\n                      </div>\n\n                      <!-- key -->\n                      <div>\n                        <tr>\n                          <td class=\"w-1/4  font-weight-600 font-14 pb-1 pt-4\">Biaya KeyBCA</td>\n                        </tr>\n                        <tr *ngFor=\"let biaya of listItem.limitBiaya.biaya_keybca; let i = index\">\n                          <td class=\"w-1/6 body-text font-14 pb-1 px-2 py-2\">{{ biaya.keterangan }}</td>\n                        </tr>\n                      </div>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab header=\"Syarat & Ketentuan\" [selected]=\"true\" *ngIf=\"listItem.id === 5\">\n                <div class=\"w-full\" style=\"padding-left: 32px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"font-weight-600 font-14 pb-1\">Persyaratan memiliki akun</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.syaratKetentuan.syarat_akun; let i = index\">\n                        <td class=\"pl-2 pb-1 font-14 font-weight-400 body-text\">{{ syarat.persyaratan_memiliki_akun }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"font-weight-600 font-14 pb-1 pt-4\">Persyaratan dokumen untuk registrasi akun Klik BCA</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.syaratKetentuan.syarat_dokumen; let i = index\">\n                        <td class=\"pl-2 pb-1 font-14 font-weight-400 body-text\">{{ syarat.persyaratan_dokumen_untuk_registrasi_akun_klik_bca }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab header=\"Syarat & Ketentuan\" [selected]=\"true\" *ngIf=\"listItem.id === 5\">\n                <div class=\"w-full\" style=\"padding-left: 37px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Tata cara registrasi akun KlikBCA dan/atau permintaan KeyBCA di Cabang</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.informasiLainya.tc_registrasi_cabang; let i = index\">\n                        <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Tata cara registrasi akun KlikBCA di ATM BCA</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.informasiLainya.tc_registrasi_atm; let i = index\">\n                        <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Tata cara menggunakan KlikBCA</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.informasiLainya.tc_pengunaan; let i = index\">\n                        <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Perlu Diketahui</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.informasiLainya.tc_perlu_diketahui; let i = index\">\n                        <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <!-- sms -->\n              <p-accordionTab header=\"Tarif Layanan\" [selected]=\"true\" *ngIf=\"listItem.id === 6\">\n                <div class=\"w-full\" style=\"padding-left: 73px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-1/2 font-weight-600 font-14 pb-1 px-2 py-2\">Tarif layanan SMS</td>\n                      </tr>\n                      <tr *ngFor=\"let tarif of listItem.tarifLayanan.tarif_layanan_sms; let i = index\">\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\"> {{ tarif.layanan }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ tarif.tarif }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"w-1/2 font-weight-400 font-14 pb-1 pt-4 px-2 py-2 body-text\">Kerjasama Indosat Ooredoo (GSM)</td>\n                      </tr>\n                      <tr *ngFor=\"let tarif of listItem.tarifLayanan.tarif_layanan_indosat_ooredo; let i = index\">\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\"> {{ tarif.layanan }}</td>\n                        <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ tarif.tarif }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <div *ngFor=\"let tarif of listItem.tarifLayanan.keterangan_tarif_layanan; let i = index\">\n                    <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ tarif.keterangan }}</td>\n                  </div>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab header=\"Biaya SMS BCA\" [selected]=\"true\" *ngIf=\"listItem.id === 6\">\n                <div class=\"w-full\" style=\"padding-left: 73px; padding-right: 85px;\">\n                  <table class=\"table-auto\">\n                    <thead>\n                      <tr>\n                        <td style=\"width: 10%;\" class=\"w-12 font-weight-600 font-14 body-text pb-2\">Sistem</td>\n                        <td style=\"width: 10%;\" class=\"w-12 font-weight-600 font-14 body-text pb-2\">Operator</td>\n                        <td style=\"width: 10%;\" class=\"w-12 font-weight-600 font-14 body-text pb-2 text-center\">\n                          Produk</td>\n                        <td class=\"w-32\" colspan=\"3\" class=\"w-32 font-weight-600 font-14 body-text pb-2 text-center\">\n                          Biaya Transaksi Selain Isi Ulang Pulsa</td>\n                        <td class=\"w-32\" colspan=\"3\" class=\"w-32 font-weight-600 font-14 body-text pb-2 text-center\">\n                          Biaya Transaksi Isi Ulang Pulsa</td>\n\n                      </tr>\n                      <tr class=\"border-b-2 border-solid-ca\">\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\"></td>\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\"></td>\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\"></td>\n                        <td class=\"w-1/6 text-center pl-12 font-weight-600 body-text\">A</td>\n                        <td class=\"w-1/6 text-center pl-2 font-weight-600 body-text\">B</td>\n                        <td class=\"w-1/6 text-center pl-2 font-weight-600 body-text\">C</td>\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\">A</td>\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\">B</td>\n                        <td class=\"w-1/6 text-center font-weight-600 body-text\">C</td>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let biaya of listItem.biayaSmsBca.biaya_sms_bca; let i = index\" class=\"border-b-2 border-solid-ca\">\n                        <td class=\" pb-1 body-text font-14 font-weight-400\">{{ biaya.sistem }}</td>\n                        <td class=\" pb-1 body-text font-14 font-weight-400\">{{ biaya.nama }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.produk }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_selain_isi_ulang_pulsa_a }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_selain_isi_ulang_pulsa_b }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_selain_isi_ulang_pulsa_c }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_isi_ulang_pulsa_a }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_isi_ulang_pulsa_b }}</td>\n                        <td class=\"w-1/6 pb-1 body-text font-14 font-weight-400\">{{ biaya.biaya_transaksi_isi_ulang_pulsa_c }}</td>\n                      </tr>\n                    </tbody>\n\n                  </table>\n                  <div *ngFor=\"let biaya of listItem.biayaSmsBca.keterangan_biaya_sms; let i = index\">\n                    <td class=\"text-keterangan font-weight-400 font-12 pb-1 px-2 py-2\">{{ biaya.keterangan }}</td>\n                  </div>\n                </div>\n              </p-accordionTab>\n            </p-accordion>\n          </my-tab>\n        </my-tabs>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-produk/detail-produk.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-produk/detail-produk.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"flex justify-center\">\n  <p-button [label]=\"labelText + ' |'\" icon=\"pi pi-times\" iconPos=\"right\" (click)=\"backToDash()\"></p-button>\n</div> -->\n\n<div class=\"w-full lg:mb-0 lg:w-full px-32 flex justify-center\">\n  <div class=\"Blue-BDS-Web-G2 whitespace-no-wrap rounded-b-lg\" style=\"height: 52px\">\n    <div class=\"flex justify-center\">\n      <div class=\"text-white mx-4 my-3 font-16 font-weight-400\">\n        {{labelText}}\n       \n      </div>\n      <div class=\"text-white my-1 border-r-2\"></div>\n      <img src='./assets/img/close_white.png' style=\"width: 24px; height: 24px; cursor:pointer\" class=\"mx-2 my-3\"\n        (click)=\"backToDash()\" />\n    </div>\n  </div>\n</div>\n\n<div class=\"flex container mx-auto sm:px-4 pt-16 pb-8\">\n  <!-- Konten Kiri-->\n  <div class=\"flex-grow w-1/4 mb-6 lg:mb-0 px-4 flex flex-row border-r \">\n    <div class=\"flex flex-col bg-white overflow-hidden\">\n      <div class=\"flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n          <img class=\"flex\" src=\"./assets/img/icon/arrow-back.png\" />\n          <span class=\"ml-4 text-kembali\"> Kembali</span>\n        </div>\n        \n      </div>\n\n      <div *ngFor=\"let produk of listInfoProduk\">\n        <div *ngIf=\"produk.kategori.toLowerCase() === 'simpanan' \">\n          <div class=\"flex px-2 py-2 text-grey-darker items-center -mx-4 cursor-pointer\" id=\"{{ produk.kategori }}\">\n            <div class=\"w-full xl:w-full px-4 flex items-center \">\n              <img class=\"flex\" src=\"./assets/img/icon/arrow-down.png\" />\n              <span class=\"ml-2 font-16 form-check-label font-weight-600\">{{ produk.kategori }}</span>\n            </div>\n          </div>\n          <ng-container>\n            <div id=\"{{ produk.kategori }}\">\n              <div *ngFor=\"let item of produk.products\">\n                <div class=\"flex text-grey-darker items-center\">\n                  <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n                    <div class=\" inset-x-0 bottom-0 pb-2 px-4 py-2\">\n                      <input type=\"checkbox\" class=\"form-checkbox h-5 w-5 text-blue-600 cursor-pointer\"\n                        name=\"chk_komparasi\" id=\"chk_{{ item.namaProduk }}\"\n                        [checked]=\"(listItem.id === item.id) ? true : checked(item.id)\"\n                        (change)=\"onChange($event.target.checked, item.id )\">\n                      <label class=\"font-14 label-for-check font-weight-600 pl-2\"\n                        for=\"chk_{{ item.namaProduk }}\">{{ item.namaProduk }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n\n        </div>\n        \n      </div>\n\n\n\n      <!-- <ngx-treeview [items]=\"items\" [config]=\"config\" (selectedChange)=\"values = $event\">\n      </ngx-treeview>\n\n      <div class=\"flex px-2 py-2 text-grey-darker items-center\">\n        Selected Product: {{values}}\n      </div> -->\n\n      <div class=\"flex-grow flex px-2 py-8 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center\">\n          <span class=\"text-xl text-blue-bca font-bold\"></span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-- END Konten Kiri-->\n  <!-- Konten Kanan-->\n  <div class=\"w-full px-4  flex flex-grow flex-row\">\n\n    <div class=\"w-full\" *ngIf=\"!isEmptyObject(listItem)\">\n      <div class=\"flex mb-4\">\n        <div class=\"flex flex-row mb-2 justify-center\">\n          <img src=\"data:image/png;base64,{{ listItem.image }}\" style=\"width: 133px; height: 133px\" />\n\n        </div>\n        <div class=\"flex flex-col ml-4\">\n          <span class=\"font-20 body-text\"> Info Produk </span>\n          <span class=\"font-28 font-bold text-blue-bca\"> {{ listItem.namaProduk }} </span>\n          <button type=\"button\"\n            class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full w-200 h-36 mt-4\">PEMBUKAAN\n            PRODUK</button>\n        </div>\n      </div>\n      <div class=\"w-full\">\n        <!-- TAB -->\n        <my-tabs>\n          <my-tab [tabTitle]=\"'Detail Produk'\">\n            <p-accordion [multiple]=\"true\">\n              <p-accordionTab header=\"Keuntungan\" [selected]=\"true\">\n                <!-- tahapan -->\n                <div class=\"grid grid-cols-3\" *ngIf=\"listItem.id === 1\">\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0 || i == 3\">\n                        <img src=\"./assets/img/icon/{{ listItem.namaProduk | lowercase }}/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                        \n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 1 || i == 4\">\n                        <img src=\"./assets/img/icon/{{ listItem.namaProduk | lowercase }}/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 2 || i == 5\">\n                        <img src=\"./assets/img/icon/{{ listItem.namaProduk | lowercase }}/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- tahapan gold -->\n                <div class=\"grid grid-cols-3\" *ngIf=\"listItem.id === 2\">\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0 || i == 3 || i == 6\">\n                        <img src=\"./assets/img/icon/tahapan_gold/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 1 || i == 4 || i == 7\">\n                        <img src=\"./assets/img/icon/tahapan_gold/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 2 || i == 5\">\n                        <img src=\"./assets/img/icon/tahapan_gold/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" appTooltip=\"{{ keuntungan.keterangan }}\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.fitur }} </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- tahapan gold -->\n                <div class=\"grid grid-cols-3\" *ngIf=\"listItem.id === 3\">\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 0\">\n                        <img src=\"./assets/img/icon/tabunganku/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\"/>\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"flex flex-col\">\n                    <div *ngFor=\"let keuntungan of listItem.keuntungan; let i = index\">\n                      <div class=\"flex mb-5 ml-5 mt-5 items-center\" *ngIf=\"i == 1 \">\n                        <img src=\"./assets/img/icon/tabunganku/{{ i }}.png\" class=\"mr-5\"\n                          style=\"width: 64px; height: 64px;\" />\n                        <span class=\"font-16 body-text font-weight-400\"> {{ keuntungan.keterangan }} </span>\n                      </div>\n                    </div>\n                  </div>\n\n                \n                </div>\n\n              </p-accordionTab>\n              <p-accordionTab *ngIf=\"listItem.id === 1 || listItem.id === 2\" header=\"Biaya Umum\" [selected]=\"true\">\n                <div class=\"w-full\" style=\"padding-left: 151px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-2/5  font-weight-600 font-14 pb-1\">Keterangan</td>\n                        <td class=\"w-1/6  font-weight-600 font-14 pb-1\">Besarnya</td>\n                      </tr>\n                      <tr *ngFor=\"let biaya of listItem.biayaUmum.biaya_umum; let i = index\">\n                        <td class=\"w-1/6  pb-1 body-text font-14 font-weight-400\">{{ biaya.keterangan }}</td>\n                        <td class=\"w-1/6  pb-1 body-text font-14 font-weight-400\">{{ biaya.besarnya }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n\n              <!-- TabunganKu -->\n              <p-accordionTab *ngIf=\"listItem.id === 3 \" header=\"Limit dan Biaya\" [selected]=\"true\">\n                <div class=\"w-full\" style=\"padding-left: 151px;\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-2/5  font-weight-600 font-14 pb-1\">Keterangan</td>\n                        <td class=\"w-1/6  font-weight-600 font-14 pb-1\">Besarnya</td>\n                      </tr>\n                      <tr *ngFor=\"let biaya of listItem.limitBiaya.limit_biaya; let i = index\">\n                        <td class=\"w-1/6  pb-1 body-text font-14 font-weight-400\">{{ biaya.keterangan }}</td>\n                        <td class=\"w-1/6  pb-1 body-text font-14 font-weight-400\">{{ biaya.besarnya }}</td>\n                      </tr>\n                      <tr>\n                        <td>&nbsp;</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of listItem.limitBiaya.keterangan_limit; let i = index\">\n                        <td class=\"w-1/6 text-keterangan font-12\" style=\"font-weight: 400;\">{{ syarat.keterangan }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n\n              <p-accordionTab *ngIf=\"listItem.id === 1 || listItem.id === 2\" header=\"Limit & Biaya Kartu\" [selected]=\"true\">\n                <my-tab-cards>\n                  <my-tab-card [tabTitle]=\"'Paspor BCA Master Card'\">\n                    <div class=\"w-4/5 border-t-2 shadow-t px-2 py-2\" style=\"border-color: #C4C4C4\">\n                      <table class=\"tg\" style=\"width: 100%;\">\n                        <thead>\n                          <tr>\n                            <th class=\"tg-0pky\" style=\"width: 50%;\"></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Blue-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Gold-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/MC/Platinum-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Keterangan</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Blue</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Gold</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Platinum</td>\n                          </tr>\n                          <tr *ngFor=\"let biaya of listLimitBiayaKartu[0].keterangan; let i = index\">\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\"> {{ biaya.keterangan }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.blue }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.gold }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.platinum }}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </my-tab-card>\n                  <my-tab-card [tabTitle]=\"'Paspor BCA GPN'\">\n                    <div class=\"w-4/5 border-t-2 shadow-t px-2 py-2\" style=\"border-color: #C4C4C4\">\n                      <table class=\"tg\" style=\"width: 100%;\">\n                        <thead>\n                          <tr>\n                            <th class=\"tg-0pky\" style=\"width: 50%;\"></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/GPN/Blue-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/GPN/Gold-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                            <th class=\"tg-0pky\" style=\"width: 15%;\"><img src=\"./assets/img/kartu/GPN/Platinum-UnNamed.png\" style=\"width: 72px; height: 46px;\"/></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Keterangan</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Blue</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Gold</td>\n                            <td class=\"font-14 font-weight-600 body-text px-2 py-2\">Platinum</td>\n                          </tr>\n                          <tr *ngFor=\"let biaya of listLimitBiayaKartu[1].keterangan; let i = index\">\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\"> {{ biaya.keterangan }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.blue }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.gold }}</td>\n                            <td class=\"px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.platinum }}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </my-tab-card>\n                </my-tab-cards>\n\n              </p-accordionTab>\n              <p-accordionTab *ngIf=\"listItem.id === 1 || listItem.id === 2\" header=\"Biaya transaksi di Tiap Jaringan\" [selected]=\"true\">\n                <!-- SIMPANAN -->\n                <div class=\"w-full mt-4 ml-4 mb-4 mr-4\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Jaringan</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Tarik Tunai</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Cek Saldo</td>\n                        <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2 pr-4\">Transaksi Ditolak</td>\n                        <td class=\"font-weight-600 font-14 pb-1 px-2 py-2 pr-6\">Transfer antar Bank</td>\n                        <td class=\"font-weight-600 font-14 pb-1 px-2 py-2\">Belanja Debit</td>\n                      </tr>\n                      <tr *ngFor=\"let biaya of listItem.biayaTransaksiJaringan; let i = index\">\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.jaringan }}</td>\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.tarik_tunai }}</td>\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.cek_saldo }}</td>\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.transaksi_ditolak }}</td>\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.transfer_antar_bank }}</td>\n                        <td class=\"pb-1 px-2 py-2 font-14 font-weight-400 body-text\">{{ biaya.belanja_debit }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab header=\"Syarat & Ketentuan\">\n                <!-- SIMPANAN -->\n                <table class=\"table-auto\">\n                  <tbody>\n                    <tr *ngIf=\"listItem.syaratKetentuan.tahapan_tanpa_buku\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Tahapan dengan Opsi Tanpa Buku</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.tahapan_tanpa_buku; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_perorangan_wni\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Perorangan WNI</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_perorangan_wni; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_perorangan_wna\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Perorangan WNA</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_perorangan_wna; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_diwakili_ortu\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Perorangan belum dewasa yang\n                        diwakili oleh orang tua</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_diwakili_ortu; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">\n                        {{ syarat.keterangan }}\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_diwakili_wali\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Perorangan belum dewasa yang\n                        diwakili oleh wali</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_diwakili_wali; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_tidak_diwakili\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Perorangan belum dewasa yang\n                        tidak\n                        diwakili</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_tidak_diwakili; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                    </tr>\n\n                    <tr *ngIf=\"listItem.syaratKetentuan.yayasan\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Yayasan</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.yayasan; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                    </tr>\n\n                    <tr *ngIf=\"listItem.syaratKetentuan.nasabah_existing\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Nasabah Tahapan Existing</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.nasabah_existing; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}</td>\n                    </tr>\n\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.keterangan_sk; let i = index\">\n                      <td class=\"w-1/6 text-keterangan font-12 pb-1 px-2 py-2 pt-4\">{{ syarat.keterangan }}</td>\n                    </tr>\n                    <!-- tabunganku-->\n                    <tr *ngIf=\"listItem.syaratKetentuan.pengertian\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Pengertian</td>\n                    </tr>\n                    <tr *ngIf=\"listItem.syaratKetentuan.pengertian\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ listItem.syaratKetentuan.pengertian }}\n                      </td>\n                    </tr>\n\n                    <tr *ngIf=\"listItem.syaratKetentuan.ketentuan_khusus\">\n                      <td class=\"w-1/6 font-weight-600 font-14 pb-1 px-2 py-2\">Ketentuan Khusus</td>\n                    </tr>\n                    <tr *ngFor=\"let syarat of listItem.syaratKetentuan.ketentuan_khusus; let i = index\">\n                      <td class=\"pb-1 px-6 py-2 font-14 font-weight-400 body-text\">{{ syarat.keterangan }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </p-accordionTab>\n              <p-accordionTab header=\"Informasi Lainnya\">\n                <div class=\"w-full py-4 px-2\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr>\n                        <td class=\"w-1/4  font-weight-600 font-14 pb-1\">Tiering Suku Bunga</td>\n                        <td class=\"w-1/6  font-weight-600 font-14 pb-1\">Besarnya</td>\n                      </tr>\n                      <tr *ngFor=\"let biaya of listItem.informasiLainya.suku_bunga; let i = index\">\n                        <td class=\"w-1/6  pb-1 font-14 font-weight-400 body-text\">{{ unicodeToChar(biaya.tiering_suku_bunga) }}</td>\n                        <td class=\"w-1/6  pb-1 font-14 font-weight-400 body-text\">{{ biaya.besarnya }}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"w-1/4  font-weight-600 font-14 pb-1 pt-4\">Perlu Diketahui</td>\n                      </tr>\n                      <tr *ngFor=\"let syarat of informasiLainnyaPerludiketahui; let i = index\">\n                        <td class=\"w-1/6 body-text font-14 pb-1 px-2 py-2\" colspan=\"2\">\n                          {{ informasiLainnyaPerludiketahui[i] }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </p-accordionTab>\n              <p-accordionTab *ngIf=\"listItem.id === 1 || listItem.id === 2\" header=\"Daftar Bank Peserta Jaringan Prima\">\n                <!-- <div class=\"flex flex-row justify-center pb-4\">\n            <input type=\"text\" class=\"px-2 py-2 input grey-line font-16 \" style=\"width: 366px;height: 48px;\" placeholder=\"serch by nama bank atau kode bank\" [(ngModel)]=\"filter\">\n          </div> -->\n                <div class=\"flex flex-row justify-center pb-4\">\n                  <div class=\"pt-2 relative mx-auto \">\n                    <!-- <input class=\"border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\"\n                type=\"search\" name=\"search\" placeholder=\"Search\"> -->\n                    <input type=\"text\"\n                      class=\"border grey-line bg-white h-10 px-5 pr-16 grey-line font-16 placeholder-c4 \n                      focus:text-gray-55\n                      focus:outline-none\"\n                      style=\"width: 366px;\" placeholder=\"search by nama bank atau kode bank\" [(ngModel)]=\"filter\">\n\n                    <button type=\"submit\" class=\"absolute right-0 top-0 mt-5 mr-4\">\n                      <svg class=\"text-gray-600 h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\"\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\"\n                        viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\"\n                        xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n                        <path\n                          d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\" />\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n\n                <table class=\"table-auto\">\n                  <thead>\n                    <tr>\n                      <td class=\"w-12\"></td>\n                      <td class=\"w-64\"></td>\n                      <td style=\"width: 20%;\" colspan=\"2\"\n                        class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">\n                        Tarik Tunai dan Cek Saldo</td>\n                      <td class=\"w-64\" colspan=\"4\" class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">\n                        Transfer Multi Arah</td>\n                      <td class=\"w-64\" colspan=\"2\" class=\"w-64 font-weight-600 font-14 body-text pb-2 text-center\">Debet\n                      </td>\n\n                    </tr>\n                    <tr>\n                      <td class=\"w-12 text-center font-weight-600 body-text\">No</td>\n                      <td class=\"w-64 font-weight-600 body-text\">Nama</td>\n                      <td class=\"w-16 text-center font-weight-600 body-text\">Issuer</td>\n                      <td class=\"w-16 text-center font-weight-600 body-text\">Acquirer</td>\n                      <td class=\"w-16 text-center pl-12 font-weight-600 body-text\">Issuer</td>\n                      <td class=\"w-16 text-center pl-2 font-weight-600 body-text\">Acquirer</td>\n                      <td class=\"w-16 text-center pl-2 font-weight-600 body-text\">Bene</td>\n                      <td class=\"w-64 text-center pl-2 font-weight-600 body-text\">Kode Bank</td>\n                      <td class=\"w-16 text-center font-weight-600 body-text\">Issuer</td>\n                      <td class=\"w-16 text-center font-weight-600 body-text\">Acquirer</td>\n                    </tr>\n\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let bank of listItem.daftarBankPrima | stringFilter: filter| paginate: configTable;\n              let i = index\">\n                      <td class=\"text-center\">{{ 10 * (configTable.currentPage - 1) + i + 1 }}</td>\n                      <td>{{bank.nama}}</td>\n                      <td class=\"text-center font-14 font-weight-400 body-text\">{{bank.ttcs_issuer}}</td>\n                      <td class=\"text-center font-14 font-weight-400 body-text\">{{bank.ttcs_acquirer}}</td>\n                      <td class=\"text-center pl-12 font-14 font-weight-400 body-text\">{{bank.tma_issuer}}</td>\n                      <td class=\"text-center pl-2 font-14 font-weight-400 body-text\">{{bank.tma_acquirer}}</td>\n                      <td class=\"text-center pl-2 font-14 font-weight-400 body-text\">{{bank.tma_bene}}</td>\n                      <td class=\"text-center pl-2 font-14 font-weight-400 body-text\">{{bank.tma_kode_bank}}</td>\n                      <td class=\"text-center font-14 font-weight-400 body-text\">{{bank.debet_issuer}}</td>\n                      <td class=\"text-center font-14 font-weight-400 body-text\">{{bank.debet_acquirer}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <pagination-template #p=\"paginationApi\" [id]=\"configTable.id\"\n                  (pageChange)=\"configTable.currentPage = $event\">\n\n\n                  <div class=\"flex flex-row pt-10 justify-center\">\n                    <div class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\n                      <!-- <svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.54312 10L9.85122 3.01117C10.4091 2.39306 10.4091 1.45313 9.85111 0.835083C9.20631 0.120841 8.08535 0.120841 7.44055 0.835082L1.58648 7.31959C0.211906 8.84219 0.211908 11.1578 1.58648 12.6804L7.44055 19.1649C8.08535 19.8792 9.20631 19.8792 9.85111 19.1649C10.4091 18.5469 10.4091 17.6069 9.85122 16.9888L3.54312 10Z\" fill=\"#C4C4C4\"/>\n                  </svg> -->\n\n                      <img src=\"./assets/img/icon/arrow-back-inactive.png\" class=\"cursor-not-allowed\"\n                        *ngIf=\"p.isFirstPage()\" />\n                      <!-- <a *ngIf=\"!p.isFirstPage()\" (click)=\"p.previous()\"> < </a>  -->\n                    </div>\n                    <div class=\"pagination-previous\" [class.disabled]=\"!p.isFirstPage()\">\n                      <!-- <svg width=\"7\" height=\"14\" viewBox=\"0 0 7 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.9594 7L6.46518 2.00798C6.86368 1.56647 6.86365 0.895094 6.4651 0.453631C6.00453 -0.0565421 5.20384 -0.0565421 4.74327 0.453631L1.25317 4.31959C-0.121398 5.84219 -0.121399 8.15781 1.25317 9.68041L4.74327 13.5464C5.20384 14.0565 6.00453 14.0565 6.4651 13.5464C6.86365 13.1049 6.86368 12.4335 6.46518 11.992L1.9594 7Z\" fill=\"#808080\"/>\n                  </svg> -->\n\n                      <img src=\"./assets/img/icon/arrow-back-active.png\" class=\"cursor-pointer\" (click)=\"p.previous()\"\n                        *ngIf=\"!p.isFirstPage()\" />\n                    </div>\n                    <input type=\"text\" class=\"flex input ml-2 text-center\" min=\"0\" style=\"width: 24px; height: 24px;\"\n                      [(ngModel)]=\"configTable.currentPage\"> <span class=\"pl-2 pr-2 font-16 grey-line\"> /\n                      {{ p.getLastPage() }} </span>\n                    <!-- <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n                    <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                      <span>{{ page.label }}</span>\n                    </a>\n                    <div *ngIf=\"p.getCurrent() === page.value\">\n                      <span>{{ page.label }}</span>\n                      \n                    </div>\n              </div> -->\n\n                    <div class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\n                      <img src=\"./assets/img/icon/arrow-next-inactive.png\" class=\"cursor-not-allowed\"\n                        *ngIf=\"p.isLastPage()\" />\n                      <!-- <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> > </a> -->\n                    </div>\n                    <div class=\"pagination-next\" [class.disabled]=\"!p.isLastPage()\">\n                      <img src=\"./assets/img/icon/arrow-next-active.png\" class=\"cursor-pointer\" (click)=\"p.next()\"\n                        *ngIf=\"!p.isLastPage()\" />\n                      <!-- <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\"> > </a> -->\n                    </div>\n\n                  </div>\n\n                </pagination-template>\n              </p-accordionTab>\n            </p-accordion>\n          </my-tab>\n          <my-tab tabTitle=\"Pilihan Produk\">\n            <!-- SIMPANAN & SIMPANAN GOLD-->\n            <div class=\"w-full background-content-tab px-6 py-6\" style=\"background-color: #F0F0F0;width: 960px;\">\n              <label class=\"block\">\n                <span class=\"text-blue-bca font-weight-600 font-20\">Pilih Jenis Kartu yang sesuai dengan kebutuhan\n                  nasabah</span>\n              </label>\n              <div class=\"flex\">\n                <div class=\"flex-col w-3/5\">\n                  <!-- TAHAPAN & TAHAPAN GOLD-->\n                  <ng-container *ngIf=\"listItem.id !== 3\">\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Rekening untuk</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 60px;\">\n                          <input type=\"radio\" class=\"option\" name=\"rekeningFor\"  [checked]=\"rekeningFor === 1\" [value]=\"1\"  [(ngModel)]=\"rekeningFor\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Pribadi</span>\n                        </label>\n                        <label class=\"mr-2 inline-flex items-center option\">\n                          <input type=\"radio\" class=\"option\" name=\"rekeningFor\" [(ngModel)]=\"rekeningFor\"  [value]=\"2\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Gabungan</span>\n                        </label>\n                      </div>\n                    </div>\n                    <!-- Relationship -->\n                    <div class=\"mt-4\" *ngIf=\"rekeningFor == 2\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Relationship</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 71px;\">\n                          <input type=\"radio\" class=\"option\" name=\"relationship\" value=\"2\" [value]=\"2\"  [checked]=\"relationship === 2\"  [(ngModel)]=\"relationship\" (change)=\"onItemChangeRelationship($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">ATAU</span>\n                        </label>\n                        <label class=\"mr-2 inline-flex items-center option\">\n                          <input type=\"radio\" class=\"option\" name=\"relationship\" value=\"1\" [value]=\"1\" [checked]=\"relationship === 1\" [(ngModel)]=\"relationship\" (change)=\"onItemChangeRelationship($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">DAN</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\" *ngIf=\"relationship == 2\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Nama pada Kartu</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 68px;\">\n                          <input type=\"radio\" class=\"option\" name=\"namaKartu\" value=\"1\"  (change)=\"onItemChangeCardName($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">YA</span>\n                        </label>\n                        <label class=\"mr-2 inline-flex items-center ml-6 option\">\n                          <input type=\"radio\" class=\"option\" name=\"namaKartu\" value=\"2\"  (change)=\"onItemChangeCardName($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Tidak</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Tipe Kartu</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" *ngIf=\"relationship == 2\">\n                          <input type=\"radio\" class=\"option\"  [(ngModel)]=\"tipeKartu\" name=\"tipeKartu\" value=\"1\"  (change)=\"onItemChangeTipeKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Blue</span>\n                        </label>\n                        <label class=\"inline-flex items-center option ml-6\" *ngIf=\"relationship == 2\">\n                          <input type=\"radio\" class=\"option\" [(ngModel)]=\"tipeKartu\" name=\"tipeKartu\" value=\"2\"  (change)=\"onItemChangeTipeKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Gold</span>\n                        </label>\n                        <label class=\"inline-flex items-center option ml-6\" *ngIf=\"relationship == 2\">\n                          <input type=\"radio\" class=\"option\" [(ngModel)]=\"tipeKartu\" name=\"tipeKartu\" value=\"3\"  (change)=\"onItemChangeTipeKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Platinum</span>\n                        </label>\n                        <label class=\"inline-flex items-center option\"\n                        [ngClass]=\"{\n                          'ml-6': (relationship == 2)\n                        }\"\n                        >\n                          <input type=\"radio\" class=\"option\" [(ngModel)]=\"tipeKartu\" name=\"tipeKartu\" value=\"4\" [value]=\"4\" [checked]=\"relationship === 1\"   (change)=\"onItemChangeTipeKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Khusus Counter</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\" *ngIf=\"relationship == 2\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Jenis Kartu</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 61px;\">\n                          <input type=\"radio\" class=\"option\" name=\"jenisKartu\" [(ngModel)]=\"jenisKartu\" value=\"1\" (change)=\"onItemChangeJenisKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">GPN</span>\n                        </label>\n                        <label class=\"inline-flex items-center ml-6 option\">\n                          <input type=\"radio\" class=\"option\" name=\"jenisKartu\" [(ngModel)]=\"jenisKartu\" value=\"2\" (change)=\"onItemChangeJenisKartu($event.target.value)\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Mastercard</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Petunjuk Layar ATM</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 26px;\">\n                          <input type=\"radio\" class=\"option\" name=\"petunjukLayar\" value=\"1\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Indonesia</span>\n                          \n                        </label>\n                        <label class=\"inline-flex items-center ml-6 option\">\n                          <input type=\"radio\" class=\"option\" name=\"petunjukLayar\" value=\"2\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Inggris</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\" >\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Dengan Buku</span>\n                      <div class=\"mt-2 light\">\n                        <label class=\"inline-flex items-center option\" style=\"margin-right: 78px;\">\n                          <input type=\"radio\" class=\"option\" name=\"denganBuku\" value=\"1\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">YA</span>\n                        </label>\n                        <label class=\"inline-flex items-center ml-6 option\">\n                          <input type=\"radio\" class=\"option\" name=\"denganBuku\" value=\"2\">\n                          <span class=\"design\"></span>\n                          <span class=\"font-16 text-gray-bca\">Tidak</span>\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4\" *ngIf=\"relationship == 2\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Fasilitas e-Channel</span>\n                      <div class=\"mt-2\">\n                        <div class=\"flex flex-row\" id=\"{{ produk.kategori }}\" *ngFor=\"let produk of listInfoChannel\">\n                          <ng-container>\n                            <div *ngFor=\"let item of produk.products\"\n                              class=\"produk-background-white border-produk border-t border-b sm:rounded sm:border shadow mr-5  relative\">\n                              <div class=\"flex justify-center h-210 w-188\">\n                                <div class=\"text-center px-6 py-4\">\n                                  <div class=\"py-0\">\n                                    <div class=\"mb-4\">\n                                      <p class=\"font-16 text-gray-55 mb-4\">{{ item.namaProduk }}</p>\n                                    </div>\n                                    <div class=\"flex mb-2 justify-center\">\n                                      <img src=\"data:image/png;base64,{{ item.image }}\" />\n                                    </div>\n                                    <div class=\"absolute inset-x-0 bottom-0 pb-2 px-4 py-2\"\n                                      *ngIf=\"item.namaProduk !== 'smsBCA'\">\n                                      <p class=\"text-secondary-bca font-14 font-bold cursor-pointer justify-start\" (click)=\"onChannelClick(item.id)\">\n                                        DETAIL PRODUK</p>\n                                      <input type=\"checkbox\" class=\"form-checkbox h-5 w-5 text-blue-600 cursor-pointer\"\n                                        [ngClass]=\"{\n                                        'checkbox-checked': checkedChannel(item.id)\n                                      }\" name=\"chk_komparasi\" id=\"chk1\" [checked]=\"checked(item.id)\"\n                                        (change)=\"onChangeChannel($event.target.checked, item.id )\">\n                                    </div>\n\n                                    <div class=\"absolute inset-x-0  pb-2 px-4 py-2\" *ngIf=\"item.namaProduk == 'smsBCA'\">\n                                      <p class=\"text-secondary-bca font-14 font-bold cursor-pointer justify-start\" (click)=\"onChannelClick(item.id)\">\n                                        DETAIL PRODUK</p>\n\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </div>\n                  </ng-container>\n\n                  <!-- Tabunganku -->\n                  <ng-container *ngIf=\"listItem.id === 3\">\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Rekening untuk</span>\n                      <div class=\"mt-2\">\n                        <label class=\"inline-flex items-center\">\n                          <span class=\"font-16 text-gray-bca\">Pribadi</span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Tipe Kartu</span>\n                      <div class=\"mt-2\">\n                        <label class=\"inline-flex items-center\">\n                          <span class=\"font-16 text-gray-bca\">Kartu Tabunganku</span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Nama pada Kartu</span>\n                      <div class=\"mt-2\">\n                        <label class=\"inline-flex items-center\">\n                          <span class=\"font-16 text-gray-bca\">Tidak</span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Petunjuk Layar ATM</span>\n                      <div class=\"mt-2\">\n                        <label class=\"inline-flex items-center\">\n                          <span class=\"font-16 text-gray-bca\">Indonesia</span>\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"mt-4\">\n                      <span class=\"text-metode-verifikasi font-weight-600 font-14\">Dengan Buku</span>\n                      <div class=\"mt-2\">\n                        <label class=\"inline-flex items-center\">\n                          <span class=\"font-16 text-gray-bca\">Ya</span>\n                        </label>\n                      </div>\n                    </div>\n                  </ng-container>\n\n\n\n                </div>\n                <div class=\"flex w-2/5 justify-end\">\n                  <div class=\"mt-4\" *ngIf=\"listItem.id === 3\">\n                    <img src=\"./assets/img/kartu/Tabunganku.png\" style=\"width: 320px; height: 208px;\" />\n                  </div>\n                  <div class=\"mt-4\" *ngIf=\"listItem.id !== 3\">\n                    <span *ngIf=\"cardName\" \n                    [ngClass]=\"{'ml-44': jenisKartu == 1, 'ml-36': jenisKartu == 2 }\"\n                    style=\"position: absolute;margin-top: 142px;font-size: 12px;line-height: 14.4px;font-weight: 400;color: #FFFFFF;font-family: 'OCR A Std';text-shadow: 1.5px 2px 0px #000000;\">{{ nameCard }}</span>\n                    <img src=\"./assets/img/{{ kartu }}\" style=\"width: 320px; height: 208px;\" />\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            </div>\n          </my-tab>\n        </my-tabs>\n\n        <div id=\"btn\" class=\"flex float-right\">\n          <button type=\"button\"\n            class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full w-200 h-36 mt-4\">PEMBUKAAN\n            PRODUK</button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  <!-- End Konten Kanan-->\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-verifikasi/detail-verifikasi.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-verifikasi/detail-verifikasi.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full lg:mb-4 lg:w-full flex flex-col justify-center\">\n  <div class=\"bg-gray-200 h-32\">\n    <div class=\"flex justify-center\">\n    </div>\n  </div>\n  <div class=\"bg-white mr-4 ml-4\">\n    <div class=\"flex justify-center\">\n      <div class=\"w-full px-4\">\n\n        <div>\n          <!-- TAB -->\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data DIN\" [selected]=\"true\">\n              <div class=\"justify-items background-content-tab\" style=\"height: 294px\">\n                <div class=\"flex items-center px-4 pt-20 justify-center\" [ngClass]=\"{'transparant-3': condition}\">\n                  <img *ngIf=\"condition\" src='./assets/img/gif/GIF_loading.gif' style=\"width: 48px; height: 48px\" />\n                  <img *ngIf=\"!condition\" src='./assets/img/Info.png' style=\"width: 48px; height: 48px\" />\n                </div>\n                <div class=\"font-24 font-weight-600 pb-5 pt-1 transparant-3 flex justify-center items-center\" ng-init=\"change\">\n                  <!-- Memproses data... -->\n                  <span>{{change ? 'Gagal memuat DIN' : 'Memproses data...'}}</span>\n                </div>\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data Nasabah\" [selected]=\"true\">\n              <div class=\"background-content-tab\" style=\"height: 260px\">\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">Nama</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">Lidya Marcelina</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Tanggal Lahir</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">23 Maret 1997</td>\n                </tr> <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nomor Handphone</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">0812 1314 1416</td>\n                </tr> <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Email</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">lidyamet@gmail.com</td>\n                </tr> <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Pekerjaan</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Pegawai Negeri</td>\n                </tr> <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nama Ibu Kandung</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Reni Oktaviance Darmawan</td>\n                </tr>\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data Rekening\" [selected]=\"true\">\n              <div class=\"justify-items background-content-tab\" style=\"height: 294px\">\n                <div class=\"flex items-center px-4 pt-20 justify-center\" [ngClass]=\"{'transparant-3': condition}\">\n                  <img *ngIf=\"condition\" src='./assets/img/gif/GIF_loading.gif' style=\"width: 48px; height: 48px;\" />\n                  <img *ngIf=\"!condition\" src='./assets/img/Info.png' style=\"width: 48px; height: 48px\" />\n                </div>\n                <div class=\"font-24 font-weight-600 pb-5 pt-1 transparant-3 flex justify-center items-center\" ng-init=\"change\">\n                  <!-- Memproses data... -->\n                  <span>{{change ? 'Gagal memuat Data Rekening' : 'Memproses data...'}}</span>\n                </div>\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <div id=\"btn\" class=\"flex float-right\">\n            <button type=\"button\"\n              class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full mt-4 mr-4\"\n              style=\"width: 120px; height: 40px;\"\n              [ngClass]=\"{\n                'secondary-blue': isShow1,\n                'disable-button cursor-not-allowed': !isShow1\n              }\"\n              [disabled]=\"!isShow1\">ULANGI</button>\n            <button type=\"button\"\n              class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full mt-4\"\n              style=\"width: 120px; height: 40px;\"\n              [ngClass]=\"{\n                'secondary-blue': isShow2,\n                'disable-button cursor-not-allowed': !isShow2\n              }\"\n              [disabled]=\"!isShow2\">LANJUT</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/info-produk/info-produk.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/info-produk/info-produk.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"flex justify-center\">\n  <p-button [label]=\"labelText + ' |'\" icon=\"pi pi-times\" iconPos=\"right\" (click)=\"backToDash()\"></p-button>\n</div> -->\n\n<div class=\"w-full lg:mb-0 lg:w-full px-32 flex justify-center\">\n  <div class=\"Blue-BDS-Web-G2 whitespace-no-wrap rounded-b-lg\" style=\"height: 52px\">\n    <div class=\"flex justify-center\">\n      <div class=\"text-white mx-4 my-3 font-16 font-weight-400\">\n        {{labelText}}\n      </div>\n      <div class=\"text-white my-1 border-r-2\"></div>\n      <img src='./assets/img/close_white.png' style=\"width: 24px; height: 24px; cursor:pointer\" class=\"mx-2 my-3\"\n        (click)=\"backToDash()\" />\n    </div>\n  </div>\n</div>\n\n<!-- no products -->\n<div class=\"flex container mx-auto sm:px-4 pt-16 pb-8\" *ngIf=\"isShown === false\">\n  <!-- Konten Kiri-->\n  <div class=\"flex-grow w-1/4 mb-6 lg:mb-0 px-4 flex flex-row border-r\">\n    <div class=\"flex flex-col bg-white overflow-hidden\">\n      <div class=\"flex px-2 py-2 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n          <img class=\"flex\" src=\"./assets/img/icon/arrow-back.png\" />\n          <span class=\"ml-4 font-16 text-gray-bca-soft font-weight-600\"> Kembali</span>\n        </div>\n      </div>\n\n      <div *ngFor=\"let produk of listInfoProduk\">\n        <div *ngIf=\"produk.kategori.toLowerCase() === 'simpanan' \">\n          <div class=\"flex px-2 py-2 text-grey-darker items-center -mx-4 cursor-pointer\" id=\"{{ produk.kategori }}\">\n            <div class=\"w-full xl:w-full px-4 flex items-center \">\n              <img class=\"flex\" src=\"./assets/img/icon/arrow-down.png\" />\n              <span class=\"ml-2 font-16 form-check-label font-weight-600\">{{ produk.kategori }}</span>\n            </div>\n          </div>\n          <ng-container>\n            <div id=\"{{ produk.kategori }}\">\n              <div *ngFor=\"let item of produk.products\">\n                <div class=\"flex text-grey-darker items-center\">\n                  <div class=\"w-full xl:w-full px-4 flex items-center cursor-pointer\">\n                    <div class=\" inset-x-0 bottom-0 pb-2 px-4 py-2\">\n                      <input type=\"checkbox\" class=\"form-checkbox h-5 w-5 text-blue-600 cursor-pointer\">\n                      <label class=\"font-14 label-for-check font-weight-600 pl-2\">{{ item.namaProduk }}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n\n      <div class=\"flex-grow flex px-2 py-8 text-grey-darker items-center  -mx-4\">\n        <div class=\"w-full xl:w-full px-4 flex items-center\">\n          <span class=\"text-xl text-blue-bca font-bold\"></span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Konten Kanan-->\n  <div class=\"w-full px-4  flex flex-grow flex-row\"></div>\n</div>\n<!-- end -->\n\n<!-- with products -->\n<div class=\"flex-grow container mx-auto sm:px-4 pt-0 pb-8\" *ngIf=\"isShown === true\">\n  <!-- Content -->\n  <div class=\"flex flex-wrap -mx-4\">\n    <div class=\"w-full pb-10 lg:mb-0 lg:w-full px-4 py-4 flex flex-col justify-center items-left\">\n      <label class=\"font-28 font-bold text-blue-bca\">Info Produk</label>\n      <label class=\"text-gray-55 font-20\">Penjelasan, Komparasi hingga Pembukaan Produk</label>\n      <div class=\"flex items-center w-full mt-2\">\n        <div class=\"w-full border-t border-solid-ca\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Dropdown-->\n  <div class=\"w-full flex justify-end sm:px-3 pt-0 pb-6\">\n    <div class=\"flex flex-row justify-center\">\n\n      <div class=\"mr-12 h-32 w-64 relative\">\n        <div class=\"flex justify-center\">\n          <div class=\"text-center px-6\">\n            <div class=\"-py-2\">\n              <div class=\"-mb-3\">\n                <div class=\"-mt-3 -ml-4\" style=\"float:right\" *ngIf=\"isIcon1\">\n                  <img src=\"./assets/img/cirle-close.png\" style=\"width: 24px; height: 24px; cursor:pointer\" (click)=\"closeProduk1()\" />\n                </div>\n                <img src=\"data:image/png;base64,{{selectedItem1}}\" style=\"width: 96px; height: 96px;\" />\n              </div>\n              <div class=\"absolute inset-x-0 bottom-5 pb-2 px-4 py-2\">\n                <o-dropdown [options]=\"list1\" (onChange)=\"getList1($event)\" [(ngModel)]=\"selectedList1\" [style]=\"{width:'260px', height: '48px'}\"\n                (onShow)=\"onShow1($event)\" (onHide)=\"onHide1($event)\" [dropdownIcon]=\"dropdownIcon1\"></o-dropdown>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mr-12 h-32 w-64 relative\">\n        <div class=\"flex justify-center\">\n          <div class=\"text-center px-6\">\n            <div class=\"-py-2\">\n              <div class=\"-mb-3\">\n                <div class=\"-mt-3 -ml-4\" style=\"float:right\" *ngIf=\"isIcon2\">\n                  <img src=\"./assets/img/cirle-close.png\" style=\"width: 24px; height: 24px; cursor:pointer\" (click)=\"closeProduk2()\" />\n                </div>\n                <img src=\"data:image/png;base64,{{selectedItem2}}\" style=\"width: 96px; height: 96px;\" />\n              </div>\n              <div class=\"absolute inset-x-0 bottom-5 pb-2 px-4 py-2\">\n                <o-dropdown [options]=\"list2\" (onChange)=\"getList2($event)\" [(ngModel)]=\"selectedList2\" [style]=\"{width:'260px', height: '48px'}\"\n                (onShow)=\"onShow2($event)\" (onHide)=\"onHide2($event)\" [dropdownIcon]=\"dropdownIcon2\"></o-dropdown>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mr-12 h-32 w-64 relative\">\n        <div class=\"flex justify-center\">\n          <div class=\"text-center px-6\">\n            <div class=\"-py-2\">\n              <div class=\"-mb-3\">\n                <div class=\"-mt-3 -ml-4\" style=\"float:right\" *ngIf=\"isIcon3\">\n                  <img src=\"./assets/img/cirle-close.png\" style=\"width: 24px; height: 24px; cursor:pointer\" (click)=\"closeProduk3()\" />\n                </div>\n                <img src=\"data:image/png;base64,{{selectedItem3}}\" style=\"width: 96px; height: 96px;\" />\n              </div>\n              <div class=\"absolute inset-x-0 bottom-5 pb-2 px-4 py-2\">\n                <o-dropdown [options]=\"list3\" (onChange)=\"getList3($event)\" [(ngModel)]=\"selectedList3\" [style]=\"{width:'260px', height: '48px'}\"\n                (onShow)=\"onShow3($event)\" (onHide)=\"onHide3($event)\" [dropdownIcon]=\"dropdownIcon3\"></o-dropdown>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"w-full border-t border-solid-ca pb-2\"></div>\n  <!-- End Dropdown -->\n\n  <!-- Detail -->\n  <div class=\"w-full pb-1 pt-1 lg:mb-0 lg:w-full px-2 py-2 flex flex-col justify-center items-left\">\n    <label class=\"text-blue-bca m-2 px-4 font-20 font-weight-600\">Dengan Buku</label>\n    <div class=\"bg-gray-200 border-t border-b sm:border shadow h-50 w-50 whitespace-no-wrap\">\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectBuku1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectBuku2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectBuku3}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w-full pb-1 pt-1 lg:mb-0 lg:w-full px-2 py-2 flex flex-col justify-center items-left\">\n    <label class=\"text-blue-bca m-2 px-4 font-20 font-weight-600\">Suku Bunga</label>\n    <div class=\"bg-gray-200 border-t border-b sm:border shadow h-50 w-50 whitespace-no-wrap\">\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectBunga1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectBunga2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectBunga3}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w-full pb-1 pt-1 lg:mb-0 lg:w-full px-2 py-2 flex flex-col justify-center items-left\">\n    <label class=\"text-blue-bca m-2 px-4 font-20 font-weight-600\">Setoran</label>\n    <div class=\"bg-gray-200 border-t border-b sm:border shadow h-50 w-50 whitespace-no-wrap\">\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Awal Minimum\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectSetor1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectSetor2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectSetor3}}\n        </div>\n      </div>\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Minimum Selanjutnya\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectNext1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectNext2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectNext3}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w-full pb-1 pt-1 lg:mb-0 lg:w-full px-2 py-2 flex flex-col justify-center items-left\">\n    <label class=\"text-blue-bca m-2 px-4 font-20 font-weight-600\">Saldo</label>\n    <div class=\"bg-gray-200 border-t border-b sm:border shadow h-50 w-50 whitespace-no-wrap\">\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Rata-rata minimum per Bulan\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectSaldo1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectSaldo2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectSaldo3}}\n        </div>\n      </div>\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Minimum Ditahan\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectMin1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectMin2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectMin3}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"w-full pb-1 pt-1 lg:mb-0 lg:w-full px-2 py-2 flex flex-col justify-center items-left\">\n    <label class=\"text-blue-bca m-2 px-4 font-20 font-weight-600\">Biaya</label>\n    <div class=\"bg-gray-200 border-t border-b sm:border shadow h-50 w-50 whitespace-no-wrap\">\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Admin dibawah saldo rata-rata minimum\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectAdmin1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectAdmin2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectAdmin3}}\n        </div>\n      </div>\n\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Cetak GTU\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectGtu1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectGtu2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectGtu3}}\n        </div>\n      </div>\n\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Cetak Mutasi per lembar\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectMutasi1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectMutasi2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectMutasi3}}\n        </div>\n      </div>\n\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Penutupan Rekening\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectTutup1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectTutup2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectTutup3}}\n        </div>\n      </div>\n\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Transaksi Debet\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectTrans1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectTrans2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectTrans3}}\n        </div>\n      </div>\n\n      <div class=\"flex justify-end\">\n        <div class=\"text-left px-6 py-2 w-64 mr-32 font-14 font-weight-400\">\n          Pasif\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-8 font-14 font-weight-400\">\n          {{selectPasif1}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-6 font-14 font-weight-400\">\n          {{selectPasif2}}\n        </div>\n        <div class=\"text-left px-2 py-2 w-64 mr-4 font-14 font-weight-400\">\n          {{selectPasif3}}\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-- End Detail -->\n\n  <!-- Pilih dan detail -->\n  <div class=\"w-full flex justify-end h-32\">\n    <div class=\"flex\">\n      <div class=\"mr-12 h-56 w-56 relative\">\n        <div class=\"flex justify-center py-4\">\n          <button type=\"button\"\n                  class=\"secondary-blue font-16 font-weight-700 outline-none focus:outline-none text-white border rounded-full px-6 py-2\"\n                  style=\"width: 168px; height: 40px;\" (click)=\"chooseProduct1()\" *ngIf=\"hide1\">PILIH</button>\n        </div>\n        <div class=\"flex justify-center pb-3 font-md -mt-4\">\n          <p class=\"text-secondary-bca font-16 font-weight-700\" style=\"cursor:pointer\" (click)=\"chooseDetail1()\" *ngIf=\"hide1\">DETAIL PRODUK</p>\n        </div>\n      </div>\n\n      <div class=\"mr-12 h-56 w-56 relative\">\n        <div class=\"flex justify-center py-4\">\n          <button type=\"button\"\n                  class=\"secondary-blue font-16 font-weight-700 outline-none focus:outline-none text-white border rounded-full px-6 py-2\"\n                  style=\"width: 168px; height: 40px;\" (click)=\"chooseProduct1()\" *ngIf=\"hide2\">PILIH</button>\n        </div>\n        <div class=\"flex justify-center pb-3 font-md -mt-4\">\n          <p class=\"text-secondary-bca font-16 font-weight-700\" style=\"cursor:pointer\" (click)=\"chooseDetail2()\" *ngIf=\"hide2\">DETAIL PRODUK</p>\n        </div>\n      </div>\n\n      <div class=\"mr-24 h-56 w-56 relative\">\n        <div class=\"flex justify-center py-4\">\n          <button type=\"button\"\n                  class=\"secondary-blue font-16 font-weight-700 outline-none focus:outline-none text-white border rounded-full px-6 py-2\"\n                  style=\"width: 168px; height: 40px;\" (click)=\"chooseProduct1()\" *ngIf=\"hide3\">PILIH</button>\n        </div>\n        <div class=\"flex justify-center pb-3 font-md -mt-4\">\n          <p class=\"text-secondary-bca font-16 font-weight-700\" style=\"cursor:pointer\" (click)=\"chooseDetail3()\" *ngIf=\"hide3\">DETAIL PRODUK</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- End -->\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/layar-verifikasi/layar-verifikasi.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/layar-verifikasi/layar-verifikasi.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full lg:mb-4 lg:w-full flex flex-col justify-center\">\n  <div class=\"background-content-tab\" style=\"height: 176px;\">\n    <div class=\"flex justify-center\">\n      <div class=\"rounded-lg bg-white my-4\" style=\"width: 662px; height: 144px;\">\n        <div class=\"mt-2 mr-2\" style=\"float:right\">\n          <img src=\"./assets/img/Close.png\" style=\"width: 16.62px; height: 16.62px; cursor:pointer\" (click)=\"closeHeader()\"/>\n        </div>\n        <div class=\"background-content-tab my-3 ml-2\" style=\"width: 443px; height: 120px;\">\n          <div class=\"mx-2 py-3\">\n            <img src=\"./assets/gallery/img1.jpg\" class=\"rounded-lg\" style=\"width: 170px; height: 96px;\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bg-white mr-4 ml-4\">\n    <div class=\"flex justify-center\">\n      <div class=\"w-full px-4\">\n\n        <div>\n          <!-- TAB -->\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data DIN\" [selected]=\"true\">\n              <div class=\"justify-items\" style=\"height: 294px\" class=\"background-content-tab\">\n                <div class=\"flex items-center px-4 pt-20 justify-center\">\n                  <!-- <img *ngIf=\"condition\" src='./assets/img/gif/GIF_loading.gif' style=\"width: 48px; height: 48px\" />\n                  <img *ngIf=\"!condition\" src='./assets/img/Info.png' style=\"width: 48px; height: 48px\" /> -->\n                </div>\n                <div class=\"font-24 font-weight-600 pb-5 pt-1 transparant-3 flex justify-center items-center\"\n                  ng-init=\"change\">\n                  <!-- Memproses data... -->\n                  <!-- <span>{{change ? 'Gagal memuat DIN' : 'Memproses data...'}}</span> -->\n                </div>\n                <ImageModal [modalImages]=\"images\">\n                  <p-footer class=\"flex justify-start body-text font-16\" style=\"font-weight: 400;\">\n                    <div class=\"flex flex-col w-full items-start\">\n                      <span>Update Terakhir : 24 Aug 2020, 11:22:23</span>\n                      <span>Cabang : KCU Kuningan</span>\n                    </div>\n\n                  </p-footer>\n                </ImageModal>\n\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data Nasabah\" [selected]=\"true\">\n              <div style=\"height: 260px\" class=\"background-content-tab\">\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">Nama</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">Lidya Marcelina</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Tanggal Lahir</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">23 Maret 1997</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nomor Handphone</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">0812 1314 1416</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Email</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">lidyamet@gmail.com</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Pekerjaan</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Pegawai Negeri</td>\n                </tr>\n                <tr>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nama Ibu Kandung</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">:</td>\n                  <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Reni Oktaviance Darmawan</td>\n                </tr>\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <p-accordion [multiple]=\"true\">\n            <p-accordionTab header=\"Data Rekening\" [selected]=\"true\">\n              <div style=\"height: 260px\" class=\"justify-items-center background-content-tab\">\n                <div class=\"flex justify-center items-center whitespace-no-wrap\">\n                  <table class=\"table-auto\">\n                    <tbody>\n                      <tr class=\"border-b border-solid-ca\">\n                        <td class=\"w-1/6 font-weight-600 font-16 pb-2 px-12 py-3 text-center text-gray-55 \">Tanggal Buka</td>\n                        <td class=\"w-1/4 font-weight-600 font-16 pb-2 px-12 py-3 text-center text-gray-55 \">Nomor Rekening</td>\n                        <td class=\"w-1/4 font-weight-600 font-16 pb-2 px-12 py-3 text-center text-gray-55 \">Jenis Rekening</td>\n                        <td class=\"w-1/6 font-weight-600 font-16 pb-2 px-12 py-3 text-center text-gray-55 \">Status</td>\n                        <td class=\"font-weight-600 font-16 pb-2 px-12 py-3 text-center text-gray-55 \">Jenis Kartu</td>\n                      </tr>\n                      <tr class=\"border-b border-solid-ca\">\n                        <td class=\"pb-2 px-2 py-3 font-14 font-weight-400 body-text text-center text-gray-55 \">20/03/2019</td>\n                        <td class=\"pb-2 px-2 py-3 font-14 font-weight-400 body-text text-center text-gray-55 \">1234567890</td>\n                        <td class=\"pb-2 px-2 py-3 font-14 font-weight-400 body-text text-center text-gray-55 \">Tahapan Gold </td>\n                        <td class=\"pb-2 px-2 py-3 font-14 font-weight-400 body-text text-center text-gray-55 \">- - D - - - T U - -</td>\n                        <td class=\"pb-2 px-2 py-3 font-14 font-weight-400 body-text text-center text-gray-55 \">Gold - Konvensional</td>\n                      </tr>\n                    </tbody>\n                  </table>\n\n                </div>\n              </div>\n            </p-accordionTab>\n          </p-accordion>\n\n          <div id=\"btn\" class=\"flex float-right\">\n            <button type=\"button\"\n              class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full mt-4 mr-4\"\n              style=\"width: 120px; height: 40px;\" [ngClass]=\"{\n                'secondary-blue': isShow1,\n                'disable-button cursor-not-allowed': !isShow1\n              }\" [disabled]=\"!isShow1\">ULANGI</button>\n            <button type=\"button\"\n              class=\"secondary-blue font-14 font-bold outline-none focus:outline-none text-white border rounded-full mt-4\"\n              style=\"width: 120px; height: 40px;\" [ngClass]=\"{\n                'secondary-blue': isShow2,\n                'disable-button cursor-not-allowed': !isShow2\n              }\" [disabled]=\"!isShow2\">LANJUT</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- dialog -->\n<p-dialog [(visible)]=\"display1\" [modal]=\"true\" [style]=\"{width: '400px',height: '328px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"true\" [closable]=\"false\">\n\n  <p-header class=\"flex flex-col items-center\">\n    <!-- M0001 -->\n    <!-- error code -->\n  </p-header>\n  <div class=\"flex flex-col items-left whitespace-no-wrap\" style=\"height: 200px;\">\n    <p class=\"text-gray-55  pb-10 pt-1 text-center font-weight-600 font-16\"> Informasi Lainnya </p>\n    <label class=\"-mt-4\">\n      <div class=\"text-center px-4 font-weight-400 font-16\">\n        Nasabah cantik dan harus selalu diberi <br> teh hangat dengan sedikit gula\n      </div>\n    </label>\n  </div>\n  <p-footer class=\"flex justify-center\">\n    <button\n      class=\"outline-none focus:outline-none  secondary-blue hover:secondary-blue text-white font-bold py-2 px-8 rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s; width: 160px; height: 40px;\" (click)=\"display1 = false\">\n      KEMBALI\n    </button>\n  </p-footer>\n</p-dialog>\n\n<!-- dialog DIK -->\n<p-dialog [(visible)]=\"display2\" [modal]=\"true\" [style]=\"{width: '640px', height: '622px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"true\" [closable]=\"false\">\n\n  <p-header class=\"flex flex-col items-center\">\n    <!-- M0001 -->\n    <!-- error code -->\n  </p-header>\n  <div class=\"flex flex-col items-left whitespace-no-wrap\">\n    <p class=\"text-gray-55 pb-5 pt-1 text-center font-weight-600 font-16\"> Daftar Identitas Khusus </p>\n      <div class=\"text-left px-4 font-weight-400 font-16\">\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">Kode Cabang</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-4 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-4 px-2\">0021</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">User ID</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">U012345</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Tanggal Update</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">20 Januari 2019</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Jenis Identitas</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">KTP</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nomor Identitas</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">1234567890123456</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nama</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Lidya Marselina</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Foto Identitas</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\"><img src=\"./assets/gallery/img1.jpg\" class=\"rounded-lg\" style=\"width: 280px; height: 148px;\" /></td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Nomor HP</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">081212121212</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Alamat e-mail</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">lidyamet@gmail.com</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Alasan</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Identitas Fiktif</td>\n        </tr>\n        <tr>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">Keterangan</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 pl-24\">:</td>\n          <td class=\"font-16 font-weight-400 pb-2 pt-2 px-2\">-</td>\n        </tr>\n      </div>\n  </div>\n  <p-footer class=\"flex justify-center\">\n    <button\n      class=\"outline-none focus:outline-none  secondary-blue hover:secondary-blue text-white font-bold py-2 px-8 rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s; width: 120px; height: 36px;\" (click)=\"display2 = false\">\n      KEMBALI\n    </button>\n  </p-footer>\n</p-dialog>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/modal/dialog.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/modal/dialog.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h5>Modal</h5>\n<div>\n  <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Show\"></p-button>\n</div>\n<br>\n<div>\n  <p-button (click)=\"showDialog1()\" icon=\"pi pi-external-link\" label=\"Show\"></p-button>\n</div>\n<br>\n<div>\n  <p-button (click)=\"showDialog2()\" icon=\"pi pi-external-link\" label=\"Show\"></p-button>\n</div>\n<br>\n<div>\n  <p-button (click)=\"showDialog3()\" icon=\"pi pi-external-link\" label=\"Show\"></p-button>\n</div>\n\n\n<!-- <p-dialog [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '30vw'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"false\">\n\n  <p-header>\n    M0001 -->\n    <!-- error code-->\n  <!-- </p-header>\n  <div class=\"flex flex-col items-center\" style=\"height: 200px;\"> -->\n    <!-- error message -->\n    <!-- <img class=\"mb-5\" width=\"100px\" height=\"100px\" src=\"./assets/img/Failed.png\" />\n    <p class=\"text-gray-700\"> Anda sedang login di perangkat lain</p>\n    <p class=\"text-gray-700\"> Apakah ingin tetap lanjut ?</p>\n  </div>\n  <p-footer class=\"flex justify-center\">\n    <button\n      class=\"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s;\">\n      BATAL\n    </button>\n    <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\" type=\"button\"\n      style=\"transition: all 0.15s ease 0s;\">\n      YA\n    </button>\n  </p-footer>\n</p-dialog> -->\n\n<p-confirmDialog #cd [transitionOptions]=\"'0ms'\" [style]=\"{width: '30vw'}\">\n  asdad\n</p-confirmDialog>\n\n<!-- note -->\n<!-- src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/AAD/////oKD/6ur/9/f/+vr/7e3/LS3/MDD/c3P/8/P/Ozv/8PD/PT3/enr/5+f/aGj/hIT/3Nz/fn7/n5//y8v/tbX/1dX/39//JCT/iIj/goL/V1f/u7v/q6v/Njb/Dw//Q0P/pqb/b2//kJD/lpb/xsb/T0//Hx//wcH/X1//SUn/sLD/VVX/YmL/FxeWBcxOAAALTklEQVR4nOWda0PiOhCGG2hBkRVFoOgKloILCML//3engL1Ac5nMTFrwvJ93ax4ySSaTycQT7hX4/ck0jhuDRiOO4+l0NFqvh+G46/tB4P6vey4/HvT60+fdh6fW6+zpZdpvuWyEM8LWcPClYytqv3kcha660wlhZ/LyCoQraDYIXTSGndAfvj3Y06Wab3vcDeIl7K4fEZ130ZVvvF3JSTic76l4Jz0MGHuSjbD/FvHgnbTZdpgaxkPYGX1z4p00H7K0jYOwtyAPPrm+JwxLCJ1wfO8G76i7mMxIJRx+OeQ7akGcdWiEoXO+IyPJq6MQ9h6r4Eu0GhBsFU/YeauI78g4qpyw04gqBEw0W1dLOLmrlu+gr3F1hF2XC4Ra0aAqwlFUC2CiWb8Kwt5TXXwHffrOCaerOgGTbrT1Vi0Ju5Us8XotXBIOHbnYdnpvOiOM62b7UdvGUi0Ig6qcNICmLgjHs7qxiroHz6lgwklUN9S5/kA9HCjhtQzBXK/AkByQ8LNuHomif4yEf+umkQu0pYIQBvU42gBBplQAYadWR1QvwG7DTNha1o2h0xudsPunbgi9jIgmQv+9bgSTPomE87oBzIpJhFfkiqqlXzT0hFUGDAnSLv1awkHdTQcq0u2mdITbulsO1koTodIQDutut4U+1OepasJmu+5m2+gJQXj1C+G5lP6bknBRd5NtpZpQVYSTuhtsrZXiJFVB2GfKG6lSS/kho5wwuKqoE1TPFoTPdTcWJ+kRo5TwllbCou66QEL/Jm30oL9AwptbKHJJHFQJYVh3Mwl6LYfCJYRXHrbQqxzUKBNeY/DXQqVIeImwX3cTiZpd2mmJcFd3E6m6jBJfEv6ru4FkrXw94abuBtL1qSUc1d08DjU1hMFN7etVetEQNmiffo/XMfk3Wm7XI+JRSV9J2CVlA0WTwzc6L7TWHafCgOY4zpWEpO9mOWdTwkc+0gWbFmMIFYQtyke/81TldYT9yCafJIYUe/pSEFL8tV1xFQqRrVsWo54hZUQXEjUKhAHhi4/nMZIxqnW787W6B73cJ9G9lJAwkZYiJD0E4vwyktQkXILLA285IWEtfBEl2XfAffkjTbyHlScw5oRr9NckgPaIEsBk7kPvVVdZyCYnREfxpYBJ66xs7FH+kSYaMdtiZITofeG96raHzTBSACamgL0UsCkRYo97v9TXWXpgRIUZHH95bNJu6oCkhAEyjL/UXYSE9qIsCJhpGOFalv5qKSFynvnQJyTDxqI8Gp8JOwUG54TI4IUpAxIyU2h78CCkr7U9I/RxHzGnlZkN1QiInebfzwhxSQmvgNvIpiXNYKJH4ew0ahYJcb/Sl6ZVmbrapR8CKFq4aXBUIGxGqE+o0wOK0o1FgIkm6uBWjF2BEBmAglip0I1FGCA6xNnNCbH5eebszqO6CkTgf0ef9o0yQh+9rYAlkyvWRdAYFITsuvuMEH9W8Qq89SAzVKCJEpLP9hkhIUPP4NRkKvcitAfxu7rTPvhISClqMQNW6Lgci8AxSMspmP4QUgI0iesAvIF0vvRDe5CW2LP7ISSeN+2A5QCKhgoFHNMuPEY/hNRM4CcgYp72DzXRMfVKbngiJB/cw3ybfCyCAcm3/icnQupnNEGIC53GItREMSHJC70cCTlO7sGID/AeRIdoCtocCVkSLaXBQIk6H1UCevvWgZDnygEUUZZ65gzwEI/y2NKdoYZaKaC3TQjxbveFoL1YJWAy6D0xZvoWJyIboDdPCBkzaLgMlWGZSDVLCDlvafMgNjnL+wQe7+0tDkNl7MFEHY/5Ah4dkW8MHhV63HcoqYbKfRlp4pG2vzLREJl7MNkEe4I9bZ1iqOyAXsNzkMqG70V+QG/gBQ7KBmkOPLVqOagCl/RhxP9VZC/yLhM/anjIczWDMIgOTNRzR4gw1Jab3FZnhNaILsbgQe4ILQ3VyRg8yCGhFSKrs30ml4QWhupoDB7klDDNhjDLQTXwVE4JoVE19REqg1wSwgEpSYgmOSSERrZ/EF31ojtCmx48yFW1JmeEtoDOxmLieTv5LvSMvig3Y9HR3sJuDGaILnqx4WR/aG+iJ7kwVCd7fFwPOurFgYM4DWYMpqJcsZCrwR9rw/egk17cssdLsWMwFfdYnHDHvCkmehL+ioVUIfO5BR0wQSTc6CrL5z17oo3BVJwOXBR4nMVoeABZp5uN8ESP7WvYQHBZfGPx/nCOzxUi4RiDGSJXLy4YczG4TPQkLkMdHQh5SgpBe7AJTPNj6sXxgZCShJsJOgZbr9B/Cb/5ptGqy5XXBu7BNjyOytGLy1NuYkT+EDjb8DirgdP86Ev/KTeRvruAnvqmgd/qDHXCkyMMBszWJTAidfMasuR5z40NLTcXaqjEM8U0z5sWjIImsp83FopIS2VPc/VJa/4SehnhwuCghhpSriOk9y0od2Y2wAslZXOD9iJlZzBOCfEJmHfAJzRl4wk6QeGztA/D8OfuGno8Ax9ekk8Y0F5Eu5X53TWBfYTE9C7Bj1QnvEDEAFs2Kr9/iDWENmyWUa9qQEPFDsXCHVKn94B1axoMkeEesMA9ifcOaZ4+nRJkqE36XW7kVecV4PKEySuBIOIG0fl9fOQponmmMXuWZkNFzjTnNRUE8sUj02oB8SuNiMjV4rwuBtb7butXfJjjbDBU7Ip/UdsEe4w4072ZDd0ZaHsRu/O5rE+Ddhw0njd866NBRHveaWEZep0o5e7JZm9XqtWWCr17mqVfyGt9oV+JVbTObvOq2Ebjd8DZK1A5IX6nL0W0LSwovS6NLyy4z+aHQlVBfGRLMoz61hEWCWIPf3yRH9QWCAl1R0s12zDXzHeXcxYlSJPX62CqfXlhqLjynu/n8QJ7Myi0J/9MsX4p5Ymu96KLii2xdra4kkq0FioJFwm7lKDPJvdu8GGHP/lH8IVsE30LOSHt0YCsBDDl2LydfoT2ItpQRdihhZiP5SZbxOyVxuEjPu2hm7Od+Xk9b0oZ50SbweiTWqvDm8WTKfEkRV3PWwTOLgVUKV1N9ht8qksiXV19Ia76aVyY9G8j3OxTT7n2HT0hNpxxPbp8WvZ/+M7MzTyvqpD5rSCGY/06tSjh/LI3u9rlTabs3bUbftNKUtf4d72dJ0vB/lXvHz7Ijtx/1RuW0mqqv+kd0vI8qiYU4xt8S1Zxmvl73gNuK2rFKt90vrklQ3XQp36X+8aeCbx0uAGErso4uJH69EpNeFOronQlNBLe0FOBuqLbOkLWC0Mutdc9s6ElvJW3j7X5EnrC23DfJloEAyHz7UQnMtQXMREGVx+ZahgITITCv/IIqtzdtiEUnat2bsx5Z2ZCEWDzayuQ0lezIhTib90gKo0AjQcRXuu6uIa0HUZ4ld7NyvRgmBUh8dTZhe765lbbEIp/DmqgULQE3vSAE4qew5Jj9noG3rayIeQqwM+hCDKJIgjFKKob7aQH2ByDIBQha8kKrJ6g7ysgCIXPXOsFI5OrTSMUYlJzgOrbxkJRhKJV65axAZ5D8YRCrGtbGpfAZ96ohMKvxxXfA3YSTISJh1PD4dQT1IthIRTBtmJT3QCvq7IRJqZa5dlNWx9Pc0OYzKpVxRpfY+sZlIdQiHElDsCnlQ/DSyhE33kQZwF8JdMVoRDNt8gdXptin1yEQnQHjjy55YjMx0OYzKv/+EPj0V9bD1QuHsJErQFrIdTNCFhRxCg2wkThG9P2cdZA+J8qcRImChfkannfMSOeYCdM3LlxjB+Tq5cRcW0oi53wqLCxiWzp9vMtzrU2yA3hQf312zdw8nnYDYbsfZfKHeFBfi/cLu43yiS5/fLxc9J30nWZ3BL+KPD98XAyjePGUYNGHG/XYc/3GRZ0o/4DKPCmk9JeOs0AAAAASUVORK5CYII=\" -->\n<!-- class=\"bg-transparant mt-2 text-blue-300 active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full mr-1 mb-1 w-full border-blue-300 border\" -->\n<!-- class=\"bg-blue-300 mt-2 text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full mr-1 mb-1 w-full border-blue-300 border\" -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p-dialog [(visible)]=\"display1\" [modal]=\"true\" [style]=\"{width: '400px',height: '298px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"true\" [closable]=\"false\">\n\n  <p-header class=\"flex flex-col items-center\">\n    <!-- M0001 -->\n    <!-- error code -->\n  </p-header>\n  <div class=\"flex flex-col items-left whitespace-no-wrap\" style=\"height: 200px;\">\n    <p class=\"text-black-bca-soft pb-10 pt-1 text-center\" style=\"font-weight: 600;\"> Proses Verifikasi Nasabah </p>\n    <label class=\"w-2/3\">\n      <div class=\"text-left px-4\" style=\"float:left\">\n        <img *ngIf=\"readerKtp\" src='./assets/img/gif/GIF_loading.gif' style=\"width: 37.33px; height: 37.33px\" />\n        <img *ngIf=\"!readerKtp\" src='./assets/img/icon/check-green.png' style=\"width: 24.8px; height: 19.2px\" />\n      </div>\n      <div class=\"font-16 pb-5 pt-1\" ng-init=\"change\">\n        <!-- Tap KTP-el pada KTP-el reader... -->\n        <span>{{change ? 'Tap KTP-el pada KTP-el reader' : 'Tap KTP-el pada KTP-el reader...'}}</span>\n      </div>\n    </label>\n    <label class=\"w-2/3\" [ngClass]=\"{'transparant-3': readerKtp}\">\n      <div class=\"text-left px-4\" style=\"float:left\">\n        <img *ngIf=\"readerFinger\" src='./assets/img/gif/GIF_loading.gif' style=\"width: 37.33px; height: 37.33px\" />\n        <img *ngIf=\"!readerFinger\" src='./assets/img/icon/check-green.png' style=\"width: 24.8px; height: 19.2px\" />\n      </div>\n      <div class=\"font-16 pb-5 pt-1\" ng-init=\"change\">\n        <!-- Scan sidik jari nasabah... -->\n        <span>{{change ? 'Scan sidik jari nasabah' : 'Scan sidik jari nasabah...'}}</span>\n      </div>\n    </label>\n  </div>\n  <p-footer class=\"flex justify-center\">\n    <button\n      class=\"outline-none focus:outline-none  bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full\"\n      type=\"button\" style=\"transition: all 0.15s ease 0s; width: 160px; height: 40px;\" (click)=\"display1 = false\">\n      BATAL\n    </button>\n  </p-footer>\n</p-dialog>\n\n<!-- dialog2 -->\n\n<p-dialog [(visible)]=\"display2\" [modal]=\"true\" [style]=\"{width: '776px',height: '339px'}\" [baseZIndex]=\"10000\" [draggable]=\"false\"\n  [resizable]=\"false\" [closable]=\"true\">\n\n  <div class=\"flex flex-col items-left whitespace-no-wrap\" style=\"height: 200px;\">\n    <p class=\"text-black-bca-soft pb-5 pt-1 text-center font-weight-600 font-16\"> Search Nasabah </p>\n    <p-table [value]=\"products\">\n      <ng-template pTemplate=\"header\">\n          <tr class=\"font-14 font-weight-600\">\n              <th width=\"150px\">CIN</th>\n              <th width=\"200px\">Nama</th>\n              <th width=\"150px\">Tgl Create CIN</th>\n              <th width=\"200px\">Nama Gadis Ibu Kandung</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-product>\n          <tr class=\"font-14 font-weight-400\">\n              <td>{{product.code}}</td>\n              <td>{{product.name}}</td>\n              <td>{{product.category}}</td>\n              <td>{{product.quantity}}</td>\n          </tr>\n      </ng-template>\n  </p-table>\n  </div>\n  <p-footer class=\"flex justify-center\"></p-footer>\n</p-dialog>\n\n<!-- button smentara -->\n<!-- <div>\n  <p-button (click)=\"showDialog()\" icon=\"pi pi-external-link\" label=\"Show\"></p-button>\n</div>\n\n<p-confirmDialog #cd [transitionOptions]=\"'0ms'\" [style]=\"{width: '30vw'}\"></p-confirmDialog> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/bar-chart/bar-chart.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/bar-chart/bar-chart.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\">\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-gray-500 mb-1 text-xs font-semibold\">\n          Performance\n        </h6>\n        <h2 class=\"text-gray-800 text-xl font-semibold\">\n          Total orders\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height:350px\">\n      <canvas id=\"bar-chart\"></canvas>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer absolute w-full bottom-0 bg-gray-900 pb-6\">\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-gray-700\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div class=\"text-sm text-white font-semibold py-1\">\n          Copyright © {{date}}\n          <a href=\"https://www.creative-tim.com\"\n            class=\"text-white hover:text-gray-400 text-sm font-semibold py-1\">Creative Tim</a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end  justify-center\">\n          <li>\n            <a href=\"https://www.creative-tim.com\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\">Creative Tim</a>\n          </li>\n          <li>\n            <a href=\"https://www.creative-tim.com/presentation\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\">About Us</a>\n          </li>\n          <li>\n            <a href=\"http://blog.creative-tim.com\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\">Blog</a>\n          </li>\n          <li>\n            <a href=\"https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/line-chart/line-chart.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/line-chart/line-chart.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-900\">\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-gray-200 mb-1 text-xs font-semibold\">\n          Overview\n        </h6>\n        <h2 class=\"text-white text-xl font-semibold\">\n          Sales value\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height:350px\">\n      <canvas id=\"line-chart\"></canvas>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\n<nav\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4\"\n>\n  <div\n    class=\"w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4\"\n  >\n    <!-- Brand -->\n    <a\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\n      href=\"http://www.ogya.co.id\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\n    >\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\n        <span\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n        <input\n          type=\"text\"\n          placeholder=\"Search here...\"\n          class=\"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10\"\n        />\n      </div>\n    </form>\n    <!-- User -->\n    <ul\n      class=\"flex-col md:flex-row list-none items-center hidden md:flex\"\n    >\n      <app-user-dropdown></app-user-dropdown>\n    </ul>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification-dropdown/notification-dropdown.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification-dropdown/notification-dropdown.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-gray-600 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\" #btnDropdownRef\n>\n  <i class=\"fas fa-bell\"></i>\n</a>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\n>\n  <div\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\n  >\n    <!-- Toggler -->\n    <button\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n      type=\"button\"\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\n    >\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <!-- Brand -->\n    <a\n      class=\"md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0\"\n      href=\"javascript:void(0)\"\n    >\n      OGYA Starter Kit\n    </a>\n    <!-- User -->\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\n      <li class=\"inline-block relative\">\n        <app-notification-dropdown></app-notification-dropdown>\n      </li>\n      <li class=\"inline-block relative\">\n        <app-user-dropdown></app-user-dropdown>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\n      [ngClass]=\"collapseShow\"\n    >\n      <!-- Collapse header -->\n      <div\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300\"\n      >\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-6/12\">\n            <a\n              class=\"md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0\"\n              href=\"javascript:void(0)\"\n            >\n              Ogya Starter Kit\n            </a>\n          </div>\n          <div class=\"w-6/12 flex justify-end\">\n            <button\n              type=\"button\"\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n              (click)=\"toggleCollapseShow('hidden')\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-6 mb-4 md:hidden\">\n        <div class=\"mb-3 pt-0\">\n          <input\n            type=\"text\"\n            placeholder=\"Search\"\n            class=\"px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\n          />\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\n        <li class=\"items-center\">\n          <a\n            class=\"text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block\"\n            href=\"#/dashboard\"\n            ><i class=\"fas fa-tv opacity-75 mr-2 text-sm\"></i>\n            Dashboard</a\n          >\n        </li>\n        <li class=\"items-center\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n            href=\"#/landing\"\n            ><i class=\"fas fa-newspaper text-gray-500 mr-2 text-sm\"></i>\n            Landing Page</a\n          >\n        </li>\n        <li class=\"items-center\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n            href=\"#/profile\"\n            ><i class=\"fas fa-user-circle text-gray-500 mr-2 text-sm\"></i>\n            Profile Page</a\n          >\n        </li>\n        <li class=\"items-center\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block\"\n            href=\"#/login\"\n            ><i class=\"fas fa-fingerprint text-gray-500 mr-2 text-sm\"></i>\n            Login</a\n          >\n        </li>\n        <li class=\"items-center\">\n          <a\n            class=\"text-gray-400 text-xs uppercase py-3 font-bold block\"\n            href=\"#pablo\"\n            ><i\n              class=\"fas fa-clipboard-list text-gray-400 mr-2 text-sm\"\n            ></i>\n            Register (soon)</a\n          >\n        </li>\n        <li class=\"items-center\">\n          <a\n            class=\"text-gray-400 text-xs uppercase py-3 font-bold block\"\n            href=\"#pablo\"\n            ><i class=\"fas fa-tools text-gray-400 mr-2 text-sm\"></i>\n            Settings (soon)</a\n          >\n        </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Documentation\n      </h6>\n      <!-- Navigation -->\n      <ul\n        class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\"\n      >\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/styles\"\n            ><i\n              class=\"fas fa-paint-brush mr-2 text-gray-500 text-base\"\n            ></i>\n            Styles</a\n          >\n        </li>\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/alerts\"\n            ><i class=\"fab fa-css3-alt mr-2 text-gray-500 text-base\"></i>\n            CSS Components</a\n          >\n        </li>\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/vue/alerts\"\n            ><i class=\"fab fa-vuejs mr-2 text-gray-500 text-base\"></i>\n            VueJS</a\n          >\n        </li>\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600  text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/react/alerts\"\n            ><i class=\"fab fa-react mr-2 text-gray-500 text-base\"></i>\n            React</a\n          >\n        </li>\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600  text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/angular/alerts\"\n            ><i class=\"fab fa-angular mr-2 text-gray-500 text-base\"></i>\n            Angular</a\n          >\n        </li>\n        <li class=\"inline-flex\">\n          <a\n            class=\"text-gray-800 hover:text-gray-600  text-sm block mb-4 no-underline font-semibold\"\n            href=\"#/documentation/javascript/alerts\"\n            ><i class=\"fab fa-js-square mr-2 text-gray-500 text-base\"></i>\n            Javascript</a\n          >\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-dropdown/user-dropdown.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-dropdown/user-dropdown.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-1/4 md:w-auto md:flex text-right\">\n    <a\n    class=\"text-gray-600 flex\"\n    style=\"cursor:pointer\"\n    (click)=\"actionTo()\"\n  >\n    <div class=\"flex flex-row items-center\">\n      <span\n        class=\"w-8 h-8 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full\"\n        style=\"width: 43.83px; height: 43.83px;\"\n      >\n        <!-- <img *ngIf=\"changeImg\"\n          alt=\"...\"\n          class=\"w-full rounded-full align-middle border-none shadow-lg\"\n          src=\"https://avatars0.githubusercontent.com/u/2367303?s=60&v=4\"\n        /> -->\n        <img *ngIf=\"changeImg\" class=\"w-full rounded-full align-middle border-none shadow-lg\" src=\"./assets/img/cs.png\" />\n        <img *ngIf=\"!changeImg\" class=\"w-full rounded-full align-middle border-none shadow-lg\" src=\"data:image/png;base64,{{avatar}}\" />\n      </span>\n    </div>\n      <div class=\"flex flex-row pl-3 items-center\">\n        <div>\n          <span class=\"text-white text-sm mr-1 font-weight-600 font-14\">{{username}}</span>\n          <div>\n            <span class=\"text-white text-sm mr-1 font-weight-400 font-12\">{{code}}</span>\n          </div>\n        </div>\n      <div>\n      <img src=\"./assets/img/Down-white.png\" class=\"h-4 w-4 block ml-2 dropdown-color\" style=\"height: 24px; width: 24px;\"/>\n      <!-- <div class=\"flex flex-row pl-3 items-center\">\n        <span class=\"text-white text-sm mr-1\">Henry</span>\n      </div> -->\n        <!-- <svg class=\"fill-current text-white h-4 w-4 block opacity-50 mx-1\" style=\"height: 24px; width: 24px;\"\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n        <path d=\"M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z\"/>\n      </svg> -->\n      </div>\n    </div>\n  </a>\n</div>\n\n<div class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 -m-12\" style=\"width: 240px; height: 106px; position: absolute; display: none;\" id=\"myP1\">\n  <!-- <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Another action\n  </a> -->\n  <a href=\"#pablo\" class=\"text-blue-bca py-2 px-4 font-16 block w-full whitespace-no-wrap bg-transparent\">\n    Tutup Transaksi\n  </a>\n  <!-- <div class=\"h-0 my-2 border border-solid border-gray-200\"></div> -->\n  <a style=\"cursor:pointer\" (click)=\"onLogout()\"  class=\"text-blue-bca py-2 px-4 font-weight-600 font-16 block w-full whitespace-no-wrap bg-transparent\">\n    SIGN OUT\n  </a>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/auth-layout.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/auth-layout.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"extr-page\" >\n  <p-confirmDialog #cd [transitionOptions]=\"'0ms'\" [style]=\"{width: '400px'}\"></p-confirmDialog>\n  <!-- <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\"></ngx-spinner>\n     -->\n  <router-outlet></router-outlet>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/empty-layout.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/empty-layout.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/main-layout.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/main-layout.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"font-sans bg-white flex flex-col min-h-screen w-full\">\n  <p-confirmDialog #cd [transitionOptions]=\"'0ms'\" [style]=\"{width: '400px'}\"></p-confirmDialog>\n\n  <!-- Header-->\n  <div>\n    <div class=\"primary-blue\">\n      <div class=\"container mx-auto px-4\">\n        <div class=\"flex items-center md:justify-between py-4\">\n          <div class=\"w-1/4 md:hidden\">\n            <svg class=\"fill-current text-white h-8 w-8\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n              <path\n                d=\"M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z\" />\n            </svg>\n          </div>\n          <div class=\"w-1/2 md:w-auto text-center text-white\">\n            <span style=\"font-size: 20px; font-weight: 400; font-style: normal;\">BDS </span><span style=\"font-size: 20px; font-weight: 400;\">Web </span> <span style=\"font-size: 20px; font-weight: 600; font-style: italic;\">Gen 2</span>\n          </div>\n          <div class=\"w-1/4 md:w-auto md:flex text-right\">\n            <app-user-dropdown></app-user-dropdown>\n            <!-- <div>\n              <img class=\"inline-block h-8 w-8 rounded-full\" src=\"https://avatars0.githubusercontent.com/u/2367303?s=60&v=4\" alt=\"\">\n            </div>\n            <div class=\"hidden md:block md:flex md:items-center ml-2\">\n              <span class=\"text-white text-sm mr-1\">Henry</span>\n              <div>\n                <svg class=\"fill-current text-white h-4 w-4 block opacity-50\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z\"/></svg>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- Content -->\n  <div id=\"main\" role=\"main\" style=\"padding-bottom: 50px;\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- footer-->\n  <div class=\"footer primary-blue border-t\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex justify-center items-center text-sm\">\n        <div class=\"text-center md:text-left py-3 md:py-4 border-b md:border-b-0\">\n          <span class=\"text-white\">© 2020 BDS Web Gen 2. All Rights Reserved.</span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/tooltip/tooltip.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/tooltip/tooltip.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    \n    <div [innerHTML]=\"text | safeHtml\"></div>\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function () { return __createBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () { return __classPrivateFieldGet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () { return __classPrivateFieldSet; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __createBinding(o, m, k, k2) {
                if (k2 === undefined)
                    k2 = k;
                o[k2] = m[k];
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (p !== "default" && !exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
                if (m)
                    return m.call(o);
                if (o && typeof o.length === "number")
                    return {
                        next: function () {
                            if (o && i >= o.length)
                                o = void 0;
                            return { value: o && o[i++], done: !o };
                        }
                    };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            function __classPrivateFieldGet(receiver, privateMap) {
                if (!privateMap.has(receiver)) {
                    throw new TypeError("attempted to get private field on non-instance");
                }
                return privateMap.get(receiver);
            }
            function __classPrivateFieldSet(receiver, privateMap, value) {
                if (!privateMap.has(receiver)) {
                    throw new TypeError("attempted to set private field on non-instance");
                }
                privateMap.set(receiver, value);
                return value;
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/dashboard/dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
            /* harmony import */ var _features_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/modal/dialog.component */ "./src/app/features/modal/dialog.component.ts");
            /* harmony import */ var _core_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
            /* harmony import */ var _shared_layout_app_layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/app-layouts/auth-layout.component */ "./src/app/shared/layout/app-layouts/auth-layout.component.ts");
            /* harmony import */ var _shared_layout_app_layouts_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/app-layouts/main-layout.component */ "./src/app/shared/layout/app-layouts/main-layout.component.ts");
            /* harmony import */ var _features_info_produk_info_produk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/info-produk/info-produk.component */ "./src/app/features/info-produk/info-produk.component.ts");
            /* harmony import */ var _features_detail_produk_detail_produk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/detail-produk/detail-produk.component */ "./src/app/features/detail-produk/detail-produk.component.ts");
            /* harmony import */ var _features_verifikasi_ktpel_verifikasi_ktpel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/verifikasi-ktpel/verifikasi-ktpel.component */ "./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.ts");
            /* harmony import */ var _features_cekin_nasabah_cekin_nasabah_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/cekin-nasabah/cekin-nasabah.component */ "./src/app/features/cekin-nasabah/cekin-nasabah.component.ts");
            /* harmony import */ var _features_detail_verifikasi_detail_verifikasi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/detail-verifikasi/detail-verifikasi.component */ "./src/app/features/detail-verifikasi/detail-verifikasi.component.ts");
            /* harmony import */ var _features_layar_verifikasi_layar_verifikasi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/layar-verifikasi/layar-verifikasi.component */ "./src/app/features/layar-verifikasi/layar-verifikasi.component.ts");
            /* harmony import */ var _features_detail_channel_detail_channel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/detail-channel/detail-channel.component */ "./src/app/features/detail-channel/detail-channel.component.ts");
            var routes = [
                {
                    path: "",
                    component: _shared_layout_app_layouts_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
                    data: { pageTitle: "Home" },
                    canActivate: [_core_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"]],
                    children: [
                        {
                            path: "",
                            redirectTo: "dashboard",
                            pathMatch: "full",
                        },
                        {
                            path: "dashboard",
                            component: _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                        },
                        {
                            path: "modal",
                            component: _features_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"],
                        },
                        {
                            path: "infoProduk",
                            component: _features_info_produk_info_produk_component__WEBPACK_IMPORTED_MODULE_8__["InfoProdukComponent"],
                        },
                        {
                            path: "detail-produk",
                            component: _features_detail_produk_detail_produk_component__WEBPACK_IMPORTED_MODULE_9__["DetailProdukComponent"],
                        },
                        {
                            path: "verifikasi-ktpel",
                            component: _features_verifikasi_ktpel_verifikasi_ktpel_component__WEBPACK_IMPORTED_MODULE_10__["VerifikasiKtpelComponent"],
                        },
                        {
                            path: "cekin-nasabah",
                            component: _features_cekin_nasabah_cekin_nasabah_component__WEBPACK_IMPORTED_MODULE_11__["CekinNasabahComponent"],
                        },
                        {
                            path: "detail-verifikasi",
                            component: _features_detail_verifikasi_detail_verifikasi_component__WEBPACK_IMPORTED_MODULE_12__["DetailVerifikasiComponent"],
                        },
                        {
                            path: "layar-verifikasi",
                            component: _features_layar_verifikasi_layar_verifikasi_component__WEBPACK_IMPORTED_MODULE_13__["LayarVerifikasiComponent"],
                        },
                        {
                            path: "detail-channel",
                            component: _features_detail_channel_detail_channel_component__WEBPACK_IMPORTED_MODULE_14__["DetailChannelComponent"],
                        },
                    ],
                },
                // { path: "", redirectTo: "dashboard", pathMatch: "full" },
                // { path: "dashboard", component: DashboardComponent },
                //{ path: "login", component: LoginComponent },
                {
                    path: "auth",
                    component: _shared_layout_app_layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
                    loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./features/auth/auth.module */ "./src/app/features/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); },
                },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AppRoutingModule);
            // export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
            //   useHash: true,
            // });
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'angular-dashboard-page';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/dashboard/dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
            /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _features_modal_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/modal/dialog.component */ "./src/app/features/modal/dialog.component.ts");
            /* harmony import */ var _shared_button_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/button/button */ "./src/app/shared/button/button.ts");
            /* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _shared_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/confirmdialog/confirmdialog */ "./src/app/shared/confirmdialog/confirmdialog.ts");
            /* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
            /* harmony import */ var _features_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/auth/auth.module */ "./src/app/features/auth/auth.module.ts");
            /* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/components.module */ "./src/app/shared/components/components.module.ts");
            /* harmony import */ var _features_info_produk_info_produk_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/info-produk/info-produk.component */ "./src/app/features/info-produk/info-produk.component.ts");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
            /* harmony import */ var _features_detail_produk_detail_produk_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features/detail-produk/detail-produk.component */ "./src/app/features/detail-produk/detail-produk.component.ts");
            /* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");
            /* harmony import */ var _shared_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/components/accordion/accordion */ "./src/app/shared/components/accordion/accordion.ts");
            /* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            /* harmony import */ var _shared_pipe_string_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/pipe/string-filter.pipe */ "./src/app/shared/pipe/string-filter.pipe.ts");
            /* harmony import */ var _shared_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/pipe/safe-html.pipe */ "./src/app/shared/pipe/safe-html.pipe.ts");
            /* harmony import */ var _features_verifikasi_ktpel_verifikasi_ktpel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./features/verifikasi-ktpel/verifikasi-ktpel.component */ "./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.ts");
            /* harmony import */ var _features_cekin_nasabah_cekin_nasabah_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./features/cekin-nasabah/cekin-nasabah.component */ "./src/app/features/cekin-nasabah/cekin-nasabah.component.ts");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _features_detail_verifikasi_detail_verifikasi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./features/detail-verifikasi/detail-verifikasi.component */ "./src/app/features/detail-verifikasi/detail-verifikasi.component.ts");
            /* harmony import */ var _shared_dialog_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/dialog/dialog */ "./src/app/shared/dialog/dialog.ts");
            /* harmony import */ var _shared_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/dropdown/dropdown */ "./src/app/shared/dropdown/dropdown.ts");
            /* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
            /* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
            /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/fesm2015/primeng-keyfilter.js");
            /* harmony import */ var _features_layar_verifikasi_layar_verifikasi_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./features/layar-verifikasi/layar-verifikasi.component */ "./src/app/features/layar-verifikasi/layar-verifikasi.component.ts");
            /* harmony import */ var _shared_directives_image_popup_image_modal_popup__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/directives/image-popup/image-modal-popup */ "./src/app/shared/directives/image-popup/image-modal-popup.ts");
            /* harmony import */ var _features_detail_channel_detail_channel_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./features/detail-channel/detail-channel.component */ "./src/app/features/detail-channel/detail-channel.component.ts");
            /* harmony import */ var _shared_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/tooltip/tooltip.component */ "./src/app/shared/tooltip/tooltip.component.ts");
            /* harmony import */ var _shared_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/tooltip/tooltip.directive */ "./src/app/shared/tooltip/tooltip.directive.ts");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            //import { LoginComponent } from "./pages/login/login.component";
            // Core providers
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _features_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                        _features_modal_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
                        _features_info_produk_info_produk_component__WEBPACK_IMPORTED_MODULE_19__["InfoProdukComponent"],
                        _features_detail_produk_detail_produk_component__WEBPACK_IMPORTED_MODULE_21__["DetailProdukComponent"],
                        _shared_pipe_string_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["StringFilterPipe"],
                        _shared_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__["Safe"],
                        _features_verifikasi_ktpel_verifikasi_ktpel_component__WEBPACK_IMPORTED_MODULE_27__["VerifikasiKtpelComponent"],
                        _features_cekin_nasabah_cekin_nasabah_component__WEBPACK_IMPORTED_MODULE_28__["CekinNasabahComponent"],
                        _features_detail_verifikasi_detail_verifikasi_component__WEBPACK_IMPORTED_MODULE_30__["DetailVerifikasiComponent"],
                        _features_layar_verifikasi_layar_verifikasi_component__WEBPACK_IMPORTED_MODULE_36__["LayarVerifikasiComponent"],
                        _shared_directives_image_popup_image_modal_popup__WEBPACK_IMPORTED_MODULE_37__["ImageModal"],
                        _features_detail_channel_detail_channel_component__WEBPACK_IMPORTED_MODULE_38__["DetailChannelComponent"],
                        _shared_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_39__["TooltipComponent"],
                        _shared_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_40__["TooltipDirective"]
                    ],
                    entryComponents: [_shared_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_39__["TooltipComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _features_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__["AuthModule"],
                        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _shared_button_button__WEBPACK_IMPORTED_MODULE_10__["ButtonCustomModule"],
                        _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_16__["OgyaLayoutModule"],
                        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_18__["OgyaComponentsModule"],
                        _shared_confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogCustomModule"],
                        _shared_dialog_dialog__WEBPACK_IMPORTED_MODULE_31__["OgyaDialogModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
                        ngx_treeview__WEBPACK_IMPORTED_MODULE_22__["TreeviewModule"].forRoot(),
                        _shared_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_23__["AccordionCustomModule"],
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_24__["NgxPaginationModule"],
                        ngx_spinner__WEBPACK_IMPORTED_MODULE_29__["NgxSpinnerModule"],
                        primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                        _shared_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_32__["OgyaDropdownModule"],
                        mydatepicker__WEBPACK_IMPORTED_MODULE_34__["MyDatePickerModule"],
                        primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__["InputTextModule"],
                        primeng_keyfilter__WEBPACK_IMPORTED_MODULE_35__["KeyFilterModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__["OverlayModule"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/core/authentication/authentication.guard.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/core/authentication/authentication.guard.ts ***!
          \*************************************************************/
        /*! exports provided: AuthenticationGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () { return AuthenticationGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");
            var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]("AuthenticationGuard");
            var AuthenticationGuard = /** @class */ (function () {
                function AuthenticationGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthenticationGuard.prototype.canActivate = function () {
                    if (this.authenticationService.isAuthenticated()) {
                        return true;
                    }
                    log.debug("authenticated : " + this.authenticationService.isAuthenticated());
                    log.debug("Not authenticated, redirecting...");
                    this.router.navigate(["/auth/login"], { replaceUrl: true });
                    return false;
                };
                return AuthenticationGuard;
            }());
            AuthenticationGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthenticationGuard);
            /***/ 
        }),
        /***/ "./src/app/core/authentication/authentication.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/core/authentication/authentication.service.ts ***!
          \***************************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/errcode-constants.enum */ "./src/app/core/enums/errcode-constants.enum.ts");
            /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            /* harmony import */ var _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            // import "rxjs/add/observable/throw";
            // import {Http, Headers, RequestOptions} from '@angular/http';
            var log = new _logger_service__WEBPACK_IMPORTED_MODULE_6__["Logger"]("AuthenticationService");
            var credentialsKey = "credentials";
            var userDomainKey = "userdomain";
            var sessionIdKey = "sessionId";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
                    "Content-Type": "application/json",
                    // "Operation": "login",
                    // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                    Accept: "application/json, text/plain, */*",
                }),
            };
            /**
             * Provides a base for authentication workflow.
             * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
             */
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http, confirmationService, router) {
                    this.http = http;
                    this.confirmationService = confirmationService;
                    this.router = router;
                    this.isLoggedIn = false;
                    this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BASE_API_URL;
                    if (_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].hasItem(credentialsKey)) {
                        this._credentials = _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].getItem(credentialsKey);
                    }
                    // const savedCredentials =
                    //   sessionStorage.getItem(credentialsKey) ||
                    //   localStorage.getItem(credentialsKey);
                    // if (savedCredentials) {
                    //   this._credentials = JSON.parse(savedCredentials);
                    // }
                }
                /**
                 * Authenticates the user.
                 * @param {LoginContext} context The login parameters.
                 * @return {Observable<Credentials>} The user credentials.
                 */
                AuthenticationService.prototype.login = function (username, password, appli1) {
                    var _this = this;
                    // Replace by proper authentication call
                    var data = {
                        username: username,
                        userId: username,
                        email: null,
                        loggedUserRoles: null,
                        token: null,
                        errorStatus: null,
                        errorMessage: null,
                    };
                    return new Promise(function (resolve, reject) {
                        _this.loginServices({
                            username: username,
                            password: password,
                            appli1: appli1
                        }).subscribe(function (resp) {
                            // log.debug(resp);
                            // console.log(resp['output_schema']['user_name']);
                            data.username = username;
                            data.token = "dummytoken";
                            // Set sesion id di storage
                            _this.setSessionId("bca@123");
                            _this.setCredentials(data, false);
                            _this.isLoggedIn = true;
                            // set storage
                            _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].setItem(userDomainKey, {
                                user_domain: username,
                                branch_code: resp["output_schema"]["branch_code"],
                                branch_name: resp["output_schema"]["branch_name"],
                                avatar: resp["output_schema"]["avatar"],
                                user_name: resp["output_schema"]["user_name"],
                            });
                            resolve(true);
                        }, function (err) {
                            if (err.error.error_schema === undefined) {
                                _this.confirmationService.confirm({
                                    icon: "./assets/img/Failed.png",
                                    acceptIcon: null,
                                    rejectIcon: null,
                                    rejectVisible: true,
                                    acceptVisible: true,
                                    acceptLabel: "ULANGI",
                                    rejectLabel: "BATAL",
                                    header: _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G29999,
                                    message: _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G29999_Message,
                                    closable: true,
                                    accept: function () {
                                        _this.login(username, password, appli1);
                                    },
                                });
                                reject(err);
                            }
                            else {
                                data.errorStatus = err.error.error_schema.error_code;
                                data.errorMessage = err.error.error_schema.error_message;
                                var str = err.error.error_schema.error_code;
                                // log.debug(" auth " + err.error.error_schema.error_message);
                                var icon = "./assets/img/Failed.png";
                                if (data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20001 ||
                                    data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20002 ||
                                    data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20003 ||
                                    data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20005) {
                                    _this.confirmationService.confirm({
                                        icon: icon,
                                        acceptIcon: null,
                                        rejectIcon: null,
                                        rejectVisible: false,
                                        acceptVisible: false,
                                        acceptLabel: "OK",
                                        rejectLabel: "BATAL",
                                        header: data.errorStatus,
                                        message: data.errorMessage,
                                        closable: true,
                                        accept: function () { },
                                    });
                                }
                                reject(err);
                                // alert(err.message);
                                // return Observable.throw(err);
                                // coba
                                var icons = "./assets/img/Failed.png";
                                if (data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20004) {
                                    _this.confirmationService.confirm({
                                        icon: icons,
                                        acceptIcon: null,
                                        rejectIcon: null,
                                        rejectVisible: true,
                                        acceptVisible: true,
                                        acceptLabel: "YA",
                                        rejectLabel: "BATAL",
                                        header: data.errorStatus,
                                        message: data.errorMessage,
                                        closable: false,
                                        accept: function () {
                                            _this.login(username, password, appli1);
                                            setTimeout(function () {
                                                _this.router.navigate(['dashboard'], { replaceUrl: true });
                                            }, 1000);
                                        },
                                    });
                                }
                                reject(err);
                                // error finger
                                if (data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G20007) {
                                    _this.confirmationService.confirm({
                                        icon: "./assets/img/Failed.png",
                                        acceptIcon: null,
                                        rejectIcon: null,
                                        rejectVisible: false,
                                        acceptVisible: false,
                                        acceptLabel: "YA",
                                        rejectLabel: "BATAL",
                                        header: data.errorStatus,
                                        message: data.errorMessage,
                                        closable: true,
                                        accept: function () { },
                                    });
                                }
                                reject(err);
                                if (data.errorStatus == _enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_5__["ErrorCodeConstants"].G29999) {
                                    _this.confirmationService.confirm({
                                        icon: "./assets/img/Failed.png",
                                        acceptIcon: null,
                                        rejectIcon: null,
                                        rejectVisible: true,
                                        acceptVisible: true,
                                        acceptLabel: "ULANGI",
                                        rejectLabel: "BATAL",
                                        header: data.errorStatus,
                                        message: data.errorMessage,
                                        closable: true,
                                        accept: function () {
                                            _this.login(username, password, appli1);
                                        },
                                    });
                                }
                                reject(err);
                            }
                            // err.error instanceof ErrorEvent
                        });
                    });
                };
                AuthenticationService.prototype.loginServices = function (context) {
                    return this.http
                        .post(this.serverUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].LOGIN_URL, context, httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
                    // .map((res: Response) => res as any)
                    // .catch(this.handleError)
                };
                AuthenticationService.prototype.logoutServices = function (username) {
                    return (this.http
                        .post(this.serverUrl + "logout", username, httpOptions)
                        // .map((res: Response) => res as any)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)));
                };
                /**
                 * Logs out the user and clear credentials.
                 * @return {Observable<boolean>} True if the user was logged out successfully.
                 */
                AuthenticationService.prototype.logout = function () {
                    var _this = this;
                    var data = JSON.parse(sessionStorage.getItem(credentialsKey));
                    log.debug(data.username);
                    this.logoutServices(data.username).subscribe(function (resp) {
                        if (resp.content.returnCode === "UIDM-401") {
                            _this.setCredentials();
                            // Username dan Password Salah
                            log.debug(resp.content.returnMessageIndonesia);
                        }
                        else if (resp.content.returnCode === "UIDM-001") {
                            log.debug(resp);
                            // Customize credentials invalidation here
                            _this.setCredentials();
                        }
                        else {
                            _this.setCredentials();
                            // return of({ username : null, token: null});
                        }
                    }, function (err) {
                        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
                };
                /**
                 * Checks is the user is authenticated.
                 * @return {boolean} True if the user is authenticated.
                 */
                AuthenticationService.prototype.isAuthenticated = function () {
                    return !!this.credentials;
                };
                AuthenticationService.prototype.encryptPass = function (pass) {
                    var strByte = pass
                        .split("")
                        .map(function (s) { return s.charCodeAt(0); });
                    console.log(strByte);
                    var sb = {
                        str: "",
                        toString: function () {
                            return this.str;
                        },
                    };
                    var encryptKey = parseInt(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].encryptKeyHexaString, 16);
                    var _loop_1 = function (i) {
                        {
                            console.log((strByte[i] & 255) ^ encryptKey);
                            var v_1 = (strByte[i] & 255) ^ encryptKey;
                            if (v_1 < 16) {
                                console.log(v_1);
                                /* append */ (function (sb) {
                                    sb.str = sb.str.concat("0");
                                    return sb;
                                })(sb);
                            }
                            /* append */ (function (sb) {
                                sb.str = sb.str.concat(v_1.toString(16));
                                return sb;
                            })(sb);
                        }
                    };
                    for (var i = 0; i < strByte.length; i++) {
                        _loop_1(i);
                    }
                    return sb.toString();
                };
                Object.defineProperty(AuthenticationService.prototype, "credentials", {
                    /**
                     * Gets the user credentials.
                     * @return {Credentials} The user credentials or null if the user is not authenticated.
                     */
                    get: function () {
                        this._credentials = null;
                        // const savedCredentials =
                        //   sessionStorage.getItem(credentialsKey) ||
                        //   localStorage.getItem(credentialsKey);
                        // if (savedCredentials) {
                        //   this._credentials = JSON.parse(savedCredentials);
                        // }
                        if (_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].hasItem(credentialsKey)) {
                            this._credentials = _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].getItem(credentialsKey);
                        }
                        return this._credentials;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.setSessionId = function (sessionId) {
                    sessionStorage.setItem(sessionIdKey, sessionId);
                };
                Object.defineProperty(AuthenticationService.prototype, "sessionId", {
                    get: function () {
                        var sessionId = sessionStorage.getItem(sessionIdKey);
                        if (sessionId) {
                            return sessionId;
                        }
                        else {
                            return "";
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the user credentials.
                 * The credentials may be persisted across sessions by setting the `remember` parameter to true.
                 * Otherwise, the credentials are only persisted for the current session.
                 * @param {Credentials=} credentials The user credentials.
                 * @param {boolean=} remember True to remember credentials across sessions.
                 */
                AuthenticationService.prototype.setCredentials = function (credentials, remember) {
                    this._credentials = credentials || null;
                    if (credentials) {
                        var storage = remember ? localStorage : sessionStorage;
                        _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].setItem(credentialsKey, credentials);
                        _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_9__["StorageUtilService"].setItem(userDomainKey, {
                            user_domain: credentials.username,
                            branch_code: credentials.branchCode,
                            branch_name: "BCA",
                            avatar: credentials.avatar,
                            user_name: "HENRY",
                        });
                        // storage.setItem(credentialsKey, JSON.stringify(credentials));
                    }
                    else {
                        sessionStorage.removeItem(credentialsKey);
                        localStorage.removeItem(credentialsKey);
                        // return !!this.credentials;
                    }
                };
                AuthenticationService.prototype.handleError = function (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _guards_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/module-import-guard */ "./src/app/core/guards/module-import-guard.ts");
            /* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
            /* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            /* harmony import */ var _services_infoproduk_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/infoproduk.service */ "./src/app/core/services/infoproduk.service.ts");
            /* harmony import */ var _services_nasabah_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/nasabah.service */ "./src/app/core/services/nasabah.service.ts");
            var CoreModule = /** @class */ (function () {
                function CoreModule(parentModule) {
                    Object(_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, "CoreModule");
                }
                return CoreModule;
            }());
            CoreModule.ctorParameters = function () { return [
                { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
            ]; };
            CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                    declarations: [],
                    providers: [
                        _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                        _services_infoproduk_service__WEBPACK_IMPORTED_MODULE_8__["InfoProdukService"],
                        _services_nasabah_service__WEBPACK_IMPORTED_MODULE_9__["NasabahService"],
                        _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"],
                        _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]
                    ],
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
            ], CoreModule);
            /***/ 
        }),
        /***/ "./src/app/core/enums/errcode-constants.enum.ts": 
        /*!******************************************************!*\
          !*** ./src/app/core/enums/errcode-constants.enum.ts ***!
          \******************************************************/
        /*! exports provided: ErrorCodeConstants */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodeConstants", function () { return ErrorCodeConstants; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ErrorCodeConstants = /** @class */ (function () {
                function ErrorCodeConstants() {
                }
                return ErrorCodeConstants;
            }());
            //Error Code LOGIN BRANCH
            ErrorCodeConstants.G20000 = 'G2-0000';
            ErrorCodeConstants.G20001 = 'G2-0001';
            ErrorCodeConstants.G20002 = 'G2-0002';
            ErrorCodeConstants.G20003 = 'G2-0003';
            ErrorCodeConstants.G20004 = 'G2-0004';
            ErrorCodeConstants.G20005 = 'G2-0005';
            ErrorCodeConstants.G20006 = 'G2-0006';
            ErrorCodeConstants.G20007 = 'G2-0007';
            ErrorCodeConstants.G29999 = 'G2-9999';
            ErrorCodeConstants.G29999_Message = 'Tidak dapat memproses data';
            /***/ 
        }),
        /***/ "./src/app/core/enums/setting-constants.enum.ts": 
        /*!******************************************************!*\
          !*** ./src/app/core/enums/setting-constants.enum.ts ***!
          \******************************************************/
        /*! exports provided: SettingCodeConstants */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCodeConstants", function () { return SettingCodeConstants; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SettingCodeConstants = /** @class */ (function () {
                function SettingCodeConstants() {
                }
                return SettingCodeConstants;
            }());
            SettingCodeConstants.rekeningPribadi = 1;
            SettingCodeConstants.rekeningGabungan = 2;
            SettingCodeConstants.relationShipDan = 1;
            SettingCodeConstants.relationShipAtau = 2;
            SettingCodeConstants.tipeKartuBlue = 1;
            SettingCodeConstants.tipeKartuGold = 2;
            SettingCodeConstants.tipeKartuPlatinum = 3;
            SettingCodeConstants.tipeKartuKhusus = 4;
            SettingCodeConstants.jenisKartuGPN = 1;
            SettingCodeConstants.jenisKartuMC = 2;
            SettingCodeConstants.denganNamaYa = 1;
            SettingCodeConstants.denganNamaTidak = 2;
            SettingCodeConstants.petunjukLayarInd = 1;
            SettingCodeConstants.petunjukLayarEng = 2;
            SettingCodeConstants.denganBukuYa = 1;
            SettingCodeConstants.denganBukuTidak = 2;
            SettingCodeConstants.styleSearchByDefault = { width: '776px', height: '181px', 'overflow': 'visible' };
            SettingCodeConstants.styleSearchByNasabah = { width: '776px', height: '781px', 'overflow': 'visible' };
            SettingCodeConstants.styleSearchBy = { width: '776px', height: '581px', 'overflow': 'visible' };
            // filter value 
            SettingCodeConstants.lakiLaki = 'L';
            SettingCodeConstants.perempuan = 'P';
            // search value 
            SettingCodeConstants.searchByNomorRekening = '1';
            SettingCodeConstants.searchByPasporBCA = '2';
            SettingCodeConstants.searchByNomorIdentitas = '3';
            SettingCodeConstants.searchByDataNasabah = '4';
            SettingCodeConstants.searchByNasabah = 4;
            // Placeholder 
            SettingCodeConstants.placeByNomorRekening = 'Input nomor rekening...';
            SettingCodeConstants.placeByPasporBCA = 'Input nomor paspor...';
            SettingCodeConstants.placeByNomorIdentitas = 'Input nomor identitas...';
            SettingCodeConstants.placeNamaNasabah = 'Input nama lengkap...';
            // maxLengthSearchVerifikasi
            SettingCodeConstants.maxLengthByNomorRekening = 10;
            SettingCodeConstants.maxLengthByPasporBCA = 16;
            SettingCodeConstants.maxLengthByNomorIdentitas = 16;
            SettingCodeConstants.maxLengthNamaNasabah = 40;
            // setting constant info produk
            SettingCodeConstants.simpanan = 'Simpanan';
            /***/ 
        }),
        /***/ "./src/app/core/guards/module-import-guard.ts": 
        /*!****************************************************!*\
          !*** ./src/app/core/guards/module-import-guard.ts ***!
          \****************************************************/
        /*! exports provided: throwIfAlreadyLoaded */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () { return throwIfAlreadyLoaded; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            function throwIfAlreadyLoaded(parentModule, moduleName) {
                if (parentModule) {
                    throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
                }
            }
            /***/ 
        }),
        /***/ "./src/app/core/logger.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/core/logger.service.ts ***!
          \****************************************/
        /*! exports provided: LogLevel, Logger */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function () { return LogLevel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function () { return Logger; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            //import { environment } from "environments/environment.prod";
            /**
             * Simple logger system with the possibility of registering custom outputs.
             *
             * 4 different log levels are provided, with corresponding methods:
             * - debug   : for debug information
             * - info    : for informative status of the application (success, ...)
             * - warning : for non-critical errors that do not prevent normal application behavior
             * - error   : for critical errors that prevent normal application behavior
             *
             * Example usage:
             * ```
             * import { Logger } from 'app/core/logger.service';
             *
             * const log = new Logger('myFile');
             * ...
             * log.debug('something happened');
             * ```
             *
             * To disable debug and info logs in production, add this snippet to your root component:
             * ```
             * export class AppComponent implements OnInit {
             *   ngOnInit() {
             *     if (environment.production) {
             *       Logger.enableProductionMode();
             *     }
             *     ...
             *   }
             * }
             *
             * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
             */
            /**
             * The possible log levels.
             * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
             */
            var LogLevel;
            (function (LogLevel) {
                LogLevel[LogLevel["Off"] = 0] = "Off";
                LogLevel[LogLevel["Error"] = 1] = "Error";
                LogLevel[LogLevel["Warning"] = 2] = "Warning";
                LogLevel[LogLevel["Info"] = 3] = "Info";
                LogLevel[LogLevel["Debug"] = 4] = "Debug";
            })(LogLevel || (LogLevel = {}));
            var Logger = /** @class */ (function () {
                function Logger(source) {
                    this.source = source;
                }
                /**
                 * Enables production mode.
                 * Sets logging level to LogLevel.Warning.
                 */
                Logger.enableProductionMode = function () {
                    Logger.level = LogLevel.Warning;
                };
                /**
                 * Logs messages or objects  with the debug level.
                 * Works the same as console.log().
                 */
                Logger.prototype.debug = function () {
                    var objects = [];
                    for (var _a = 0; _a < arguments.length; _a++) {
                        objects[_a] = arguments[_a];
                    }
                    this.log(console.log, LogLevel.Debug, objects);
                };
                /**
                 * Logs messages or objects  with the info level.
                 * Works the same as console.log().
                 */
                Logger.prototype.info = function () {
                    var objects = [];
                    for (var _a = 0; _a < arguments.length; _a++) {
                        objects[_a] = arguments[_a];
                    }
                    this.log(console.info, LogLevel.Info, objects);
                };
                /**
                 * Logs messages or objects  with the warning level.
                 * Works the same as console.log().
                 */
                Logger.prototype.warn = function () {
                    var objects = [];
                    for (var _a = 0; _a < arguments.length; _a++) {
                        objects[_a] = arguments[_a];
                    }
                    this.log(console.warn, LogLevel.Warning, objects);
                };
                /**
                 * Logs messages or objects  with the error level.
                 * Works the same as console.log().
                 */
                Logger.prototype.error = function () {
                    var objects = [];
                    for (var _a = 0; _a < arguments.length; _a++) {
                        objects[_a] = arguments[_a];
                    }
                    this.log(console.error, LogLevel.Error, objects);
                };
                Logger.prototype.log = function (func, level, objects) {
                    var _this = this;
                    if (level <= Logger.level) {
                        var log = this.source
                            ? ["[" + this.source + "]"].concat(objects)
                            : objects;
                        func.apply(console, log);
                        Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
                    }
                };
                return Logger;
            }());
            /**
             * Current logging level.
             * Set it to LogLevel.Off to disable logs completely.
             */
            Logger.level = LogLevel.Debug;
            /**
             * Additional log outputs.
             */
            Logger.outputs = [];
            /***/ 
        }),
        /***/ "./src/app/core/models/channel.ts": 
        /*!****************************************!*\
          !*** ./src/app/core/models/channel.ts ***!
          \****************************************/
        /*! exports provided: Channel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function () { return Channel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Channel = /** @class */ (function () {
                function Channel() {
                }
                return Channel;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/models/produk.ts": 
        /*!***************************************!*\
          !*** ./src/app/core/models/produk.ts ***!
          \***************************************/
        /*! exports provided: Produk */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produk", function () { return Produk; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Produk = /** @class */ (function () {
                function Produk() {
                }
                return Produk;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/services/infoproduk.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/core/services/infoproduk.service.ts ***!
          \*****************************************************/
        /*! exports provided: InfoProdukService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProdukService", function () { return InfoProdukService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            // import "rxjs/add/observable/throw";
            var log = new _logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]("InfoProdukService");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    // "Operation": "login",
                    // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                    Accept: "application/json, text/plain, */*",
                }),
            };
            var InfoProdukService = /** @class */ (function () {
                function InfoProdukService(http, confirmationService) {
                    this.http = http;
                    this.confirmationService = confirmationService;
                    this.isLoggedIn = false;
                    this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].BASE_API_URL;
                }
                InfoProdukService.prototype.getInfoProduk = function () {
                    return this.http
                        .get(this.serverUrl + 'all-produk', httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
                };
                InfoProdukService.prototype.handleError = function (error) {
                    // console.error("An error occurred", error);
                    // console.log(error.error.error_schema.error_code);
                    // error.message || error
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                };
                return InfoProdukService;
            }());
            InfoProdukService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] }
            ]; };
            InfoProdukService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], InfoProdukService);
            /***/ 
        }),
        /***/ "./src/app/core/services/nasabah.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/core/services/nasabah.service.ts ***!
          \**************************************************/
        /*! exports provided: NasabahService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasabahService", function () { return NasabahService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var log = new _logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]("NasabahService");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    // "Operation": "login",
                    // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                    Accept: "application/json, text/plain, */*",
                }),
            };
            var NasabahService = /** @class */ (function () {
                function NasabahService(http, confirmationService) {
                    this.http = http;
                    this.confirmationService = confirmationService;
                    this.isLoggedIn = false;
                    this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].BASE_API_URL;
                    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].URL;
                }
                NasabahService.prototype.checkInNasabah = function (source, detail, name, cso_id, branch) {
                    //getTotal(satkerId: string, idDistCoa: number, mataUang: string) {
                    var body = { source: source, detail: detail, name: name, cso_id: cso_id, branch: branch };
                    return this.http
                        .post(this.serverUrl + "/" + this.url, body, httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
                    // return this.http
                    //   .post(this.serverUrl + 'url', httpOptions,)
                    //   .pipe(catchError(this.handleError));
                };
                NasabahService.prototype.handleError = function (error) {
                    // console.error("An error occurred", error);
                    // console.log(error.error.error_schema.error_code);
                    // error.message || error
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                };
                return NasabahService;
            }());
            NasabahService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] }
            ]; };
            NasabahService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], NasabahService);
            /***/ 
        }),
        /***/ "./src/app/features/auth/auth.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/features/auth/auth.component.ts ***!
          \*************************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent() {
                }
                AuthComponent.prototype.ngOnInit = function () {
                };
                return AuthComponent;
            }());
            AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth',
                    template: '<router-outlet></router-outlet>',
                })
            ], AuthComponent);
            /***/ 
        }),
        /***/ "./src/app/features/auth/auth.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/features/auth/auth.module.ts ***!
          \**********************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.routing */ "./src/app/features/auth/auth.routing.ts");
            /* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/features/auth/auth.component.ts");
            /* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
            /* harmony import */ var _shared_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/button/button */ "./src/app/shared/button/button.ts");
            // import { AuthService } from "./auth.service";
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _auth_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                        _shared_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonCustomModule"],
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]],
                    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/features/auth/auth.routing.ts": 
        /*!***********************************************!*\
          !*** ./src/app/features/auth/auth.routing.ts ***!
          \***********************************************/
        /*! exports provided: routes, routing */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function () { return routing; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: "login",
                    loadChildren: function () { return __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/features/auth/login/login.module.ts")).then(function (m) { return m.LoginModule; }); },
                },
            ];
            var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);
            /***/ 
        }),
        /***/ "./src/app/features/cekin-nasabah/cekin-nasabah.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/features/cekin-nasabah/cekin-nasabah.component.ts ***!
          \*******************************************************************/
        /*! exports provided: CekinNasabahComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CekinNasabahComponent", function () { return CekinNasabahComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/enums/setting-constants.enum */ "./src/app/core/enums/setting-constants.enum.ts");
            /* harmony import */ var src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var CekinNasabahComponent = /** @class */ (function () {
                function CekinNasabahComponent(spinner, cd, confirmationService) {
                    var _this = this;
                    this.spinner = spinner;
                    this.cd = cd;
                    this.confirmationService = confirmationService;
                    this.listCekin = [
                        { label: "KTP-el", value: "0", image: "KTP.png" },
                        { label: "Paspor BCA", value: "1", image: "Paspor.png" },
                        { label: "Search by", value: "2", image: "Search.png" },
                    ];
                    this.tglLahirOptions = {
                        editableDateField: false,
                        dateFormat: "dd/mm/yyyy",
                        showClearDateBtn: false,
                        openSelectorOnInputClick: true,
                        width: "168px",
                        height: "48px",
                    };
                    this.placeholderTglLahir = "dd/mm/yyyy";
                    this.display1 = false;
                    this.displaySearchBy = false;
                    this.spinner1 = "sp1";
                    this.swipePaspor = true;
                    this.pinInput = true;
                    this.listSearch = [
                        { label: "Nomor Rekening", value: src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorRekening },
                        { label: "Nomor Kartu Paspor BCA", value: src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByPasporBCA },
                        { label: "Nomor Identitas", value: src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorIdentitas },
                        { label: "Data Nasabah", value: "4" },
                    ];
                    this.listJenkel = [
                        { label: "(Pilih jenis Kelamin)", value: "0" },
                        { label: "Laki-Laki", value: src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].lakiLaki },
                        { label: "Perempuan", value: src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].perempuan },
                    ];
                    this.txtCari = "";
                    this.selectSearch = "3";
                    this.dropdownIcon = "pi pi-chevron-down";
                    this.dropdownIconJenkel = "pi pi-chevron-down";
                    this.stylePopupDefault = { width: "776px", height: "181px", overflow: "visible" };
                    this.styleSearchBy = this.stylePopupDefault;
                    this.showTable = false;
                    this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorIdentitas;
                    this.txtCariPkeyFilter = 'alphanum';
                    this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeByNomorIdentitas;
                    this.selectSearchJenkel = "0";
                    this.isValidFormSearch = false;
                    this.loadingSwipePaspor = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.wait(5000)];
                                case 1:
                                    _a.sent();
                                    this.swipePaspor = false;
                                    //console.log("Waited 5s");
                                    return [4 /*yield*/, this.wait(5000)];
                                case 2:
                                    //console.log("Waited 5s");
                                    _a.sent();
                                    this.pinInput = false;
                                    this.display1 = false;
                                    //await this.wait(8500);
                                    this.showDialog();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                CekinNasabahComponent.prototype.ngOnChanges = function (changes) {
                    console.log(changes);
                };
                CekinNasabahComponent.prototype.ngOnInit = function () {
                    if (this.display1 === true) {
                        //this.loadingSwipePaspor();
                    }
                    else if (this.displaySearchBy === true) {
                        //this.showDialog();
                        this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByDefault;
                    }
                };
                CekinNasabahComponent.prototype.onShowSearch = function ($event) {
                    this.dropdownIcon = "pi pi-chevron-up";
                };
                CekinNasabahComponent.prototype.onHideSearch = function ($event) {
                    this.dropdownIcon = "pi pi-chevron-down";
                };
                CekinNasabahComponent.prototype.onShowSearchJenkel = function ($event) {
                    this.dropdownIconJenkel = "pi pi-chevron-up";
                };
                CekinNasabahComponent.prototype.onHideSearchJenkel = function ($event) {
                    this.dropdownIconJenkel = "pi pi-chevron-down";
                };
                CekinNasabahComponent.prototype.onHideDialogSearch = function ($event) {
                    this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByDefault;
                    this.selectSearch = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorIdentitas;
                    this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorIdentitas;
                    this.txtCariPkeyFilter = 'alphanum';
                    this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeByNomorIdentitas;
                    this.txtCari = '';
                    this.tglLahir = null;
                    this.selectSearchJenkel = "0";
                };
                CekinNasabahComponent.prototype.onChangeSearch = function ($event) {
                    this.showTable = false;
                    this.txtCari = "";
                    this.validateForm();
                    if ($event.value == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNasabah) {
                        this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByNasabah;
                        this.dropdownIcon = "pi pi-chevron-down";
                        this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthNamaNasabah;
                        this.txtCariPkeyFilter = 'alpha';
                        this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeNamaNasabah;
                    }
                    else if ($event.value == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorIdentitas) {
                        this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByDefault;
                        this.dropdownIcon = "pi pi-chevron-down";
                        this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorIdentitas;
                        this.txtCariPkeyFilter = 'alphanum';
                        this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeByNomorIdentitas;
                    }
                    else if ($event.value == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorRekening) {
                        this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByDefault;
                        this.dropdownIcon = "pi pi-chevron-down";
                        this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorRekening;
                        this.txtCariPkeyFilter = 'int';
                        this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeByNomorRekening;
                    }
                    else if ($event.value == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByPasporBCA) {
                        this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchByDefault;
                        this.dropdownIcon = "pi pi-chevron-down";
                        this.maxLength = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByPasporBCA;
                        this.txtCariPkeyFilter = 'int';
                        this.txtCariPlaceholder = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].placeByPasporBCA;
                    }
                };
                CekinNasabahComponent.prototype.onChangeSearchJenkel = function ($event) {
                    this.validateForm();
                };
                CekinNasabahComponent.prototype.onDateChanged = function (event) {
                    this.validateForm();
                    //console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
                };
                CekinNasabahComponent.prototype.onKey = function (event, type) {
                    if (type === "txtCari") {
                        this.txtCari = event.target.value;
                        this.validateForm();
                    }
                };
                CekinNasabahComponent.prototype.validateForm = function () {
                    if (this.selectSearch === src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorIdentitas) {
                        // validate maxlength
                        if (this.txtCari.length == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorIdentitas) {
                            this.isValidFormSearch = true;
                        }
                        else {
                            this.isValidFormSearch = false;
                        }
                    }
                    else if (this.selectSearch === src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByNomorRekening) {
                        // validate maxlength
                        if (this.txtCari.length == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByNomorRekening) {
                            this.isValidFormSearch = true;
                        }
                        else {
                            this.isValidFormSearch = false;
                        }
                    }
                    else if (this.selectSearch === src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByPasporBCA) {
                        // validate maxlength
                        if (this.txtCari.length == src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].maxLengthByPasporBCA) {
                            this.isValidFormSearch = true;
                        }
                        else {
                            this.isValidFormSearch = false;
                        }
                    }
                    else if (this.selectSearch === src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].searchByDataNasabah) {
                        // validate maxlength
                        if (this.txtCari.length > 0 && this.tglLahir !== undefined && this.selectSearchJenkel !== "0") {
                            console.log('tglLahir', this.tglLahir['formatted']);
                            this.isValidFormSearch = true;
                        }
                        else {
                            this.isValidFormSearch = false;
                        }
                    }
                    console.log(this.isValidFormSearch);
                };
                CekinNasabahComponent.prototype.searchBy = function () {
                    this.styleSearchBy = src_app_core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_3__["SettingCodeConstants"].styleSearchBy;
                    this.showTable = true;
                };
                CekinNasabahComponent.prototype.wait = function (timeout) {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, timeout);
                    });
                };
                CekinNasabahComponent.prototype.showSwipePasspor = function () {
                    this.display1 = true;
                    this.swipePaspor = true;
                    this.pinInput = true;
                    this.loadingSwipePaspor();
                };
                CekinNasabahComponent.prototype.showSearchBy = function () {
                    this.displaySearchBy = true;
                };
                CekinNasabahComponent.prototype.methodCekin = function (val) {
                    if (val == 0) {
                    }
                    else if (val == 1) {
                        this.showSwipePasspor();
                    }
                    else {
                        this.showSearchBy();
                    }
                };
                CekinNasabahComponent.prototype.hideSwipePasspor = function () {
                    this.display1 = false;
                };
                CekinNasabahComponent.prototype.showDialog = function () {
                    this.confirmationService.confirm({
                        icon: "./assets/img/Failed.png",
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: false,
                        acceptVisible: true,
                        acceptLabel: "ULANGI",
                        rejectLabel: "BATAL",
                        header: "M0001",
                        message: "Gagal melakukan verifikasi PIN",
                        closable: true,
                        accept: function () { },
                    });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'PIN yang Nasabah masukan salah',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal memuat data Nasabah',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal melakukan verifikasi. <br\> Kartu Paspor BCA terblokir',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Kartu Paspor BCA tidak terbaca',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Kartu Paspor BCA tidak terdaftar',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Kartu Paspor BCA terblokir',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'EDC tidak terhubung',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal memproses transaksi',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal melakukan verifikasi dengan Kartu Paspor BCA',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                };
                CekinNasabahComponent.prototype.dttot = function () {
                    var _this = this;
                    // error DTTOT
                    this.confirmationService.confirm({
                        icon: './assets/img/Info_Circle.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: true,
                        acceptVisible: true,
                        acceptLabel: 'SELESAI',
                        rejectLabel: 'OVERRIDE',
                        header: '',
                        message: 'Nasabah termasuk kategori DTOTT.' + '<br>' + 'Mohon hubungi SPV',
                        closable: false,
                        accept: function () {
                            setTimeout(function () {
                                _this.doneDialog();
                            }, 1000);
                        },
                        reject: function () {
                            _this.displayFinger = true;
                            // this.displayPass = true;
                        }
                    });
                };
                CekinNasabahComponent.prototype.doneDialog = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Done_Circle.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: false,
                        acceptVisible: true,
                        acceptLabel: 'OK',
                        rejectLabel: 'OVERRIDE',
                        header: '',
                        message: 'Transaksi selesai',
                        closable: false,
                        accept: function () { },
                    });
                };
                return CekinNasabahComponent;
            }());
            CekinNasabahComponent.ctorParameters = function () { return [
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"] }
            ]; };
            CekinNasabahComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-cekin-nasabah",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cekin-nasabah.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cekin-nasabah/cekin-nasabah.component.html")).default,
                })
            ], CekinNasabahComponent);
            /***/ 
        }),
        /***/ "./src/app/features/dashboard/dashboard.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/features/dashboard/dashboard.component.ts ***!
          \***********************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            /* harmony import */ var _core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/infoproduk.service */ "./src/app/core/services/infoproduk.service.ts");
            /* harmony import */ var _core_services_nasabah_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/nasabah.service */ "./src/app/core/services/nasabah.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/enums/errcode-constants.enum */ "./src/app/core/enums/errcode-constants.enum.ts");
            /* harmony import */ var _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/enums/setting-constants.enum */ "./src/app/core/enums/setting-constants.enum.ts");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(router, confirmationService, infoProdukServices, nasabahServices) {
                    this.router = router;
                    this.confirmationService = confirmationService;
                    this.infoProdukServices = infoProdukServices;
                    this.nasabahServices = nasabahServices;
                    this.date = new Date().getFullYear();
                    this.isKomparasi = false;
                    this.btnBandingkanValid = false;
                    this.selected = [];
                    this.display = false;
                    this.credentialsNasabahKey = "nasabahCredentials";
                    this.userDomainCredentialKey = "userdomain";
                    this.namaNasabah = "";
                    if (_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__["StorageUtilService"].hasItem(this.credentialsNasabahKey)) {
                        this._credentials = _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__["StorageUtilService"].getItem(this.credentialsNasabahKey);
                    }
                    if (_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__["StorageUtilService"].hasItem(this.userDomainCredentialKey)) {
                        this.userdomain = _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__["StorageUtilService"].getItem(this.userDomainCredentialKey);
                        console.log("this.userdomain", this.userdomain);
                    }
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                        // console.log(response)
                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_6__["chain"](response.output_schema)
                            .groupBy("kategori")
                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                            .value();
                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                        console.log(_this.listInfoProduk);
                    }, function (error) {
                        // this.loading = false;
                        // this.messageService.add({
                        //   severity: 'error',
                        //   summary: 'Gagal Mengambil Service',
                        //   detail: error.message,
                        //   key: 'tabel-message'
                        // });
                    });
                };
                DashboardComponent.prototype.showDialog = function () {
                    this.namaNasabah = "";
                    this.display = true;
                };
                DashboardComponent.prototype.checkKomparasi = function (event) {
                    console.log(event);
                    if (event === "A") {
                        this.selected = [];
                    }
                    else {
                        this.selected = [];
                        this.btnBandingkanValid = false;
                    }
                };
                // check if the item are selected
                DashboardComponent.prototype.checked = function (item) {
                    if (this.selected.indexOf(item) != -1) {
                        return true;
                    }
                };
                // when checkbox change, add/remove the item from the array
                DashboardComponent.prototype.onChange = function (checked, item) {
                    if (checked) {
                        this.selected.push(item);
                    }
                    else {
                        this.selected.splice(this.selected.indexOf(item), 1);
                    }
                    if (this.selected.length > 1) {
                        this.btnBandingkanValid = true;
                        console.log(this.selected);
                    }
                    else {
                        this.btnBandingkanValid = false;
                    }
                };
                DashboardComponent.prototype.onChangeKategori = function (kategori) {
                    this.selectedKategori = kategori;
                    this.selected = [];
                    console.log("changeKategori", kategori);
                };
                DashboardComponent.prototype.actionNext = function () {
                    var _this = this;
                    //console.log(this.selected.join(', '))
                    _shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_3__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                        namaNasabah: this.namaNasabah,
                        kategori: this.selectedKategori,
                        products: this.selected,
                    });
                    // call services checkin Nasabah
                    return new Promise(function (resolve, reject) {
                        _this.nasabahServices
                            .checkInNasabah("Info Produk", _this.selected.join(', '), _this.namaNasabah, _this.userdomain.user_domain, _this.userdomain.branch_code)
                            .subscribe(function (resp) {
                            // console.log("resp", resp);
                            if (resp.error_schema.error_code == _core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_7__["ErrorCodeConstants"].G20000) {
                                _this.display = false;
                                if (_this.btnBandingkanValid) {
                                    _this.router.navigate(["infoProduk"], { replaceUrl: true });
                                }
                                else {
                                    _this.router.navigate(["detail-produk"], { replaceUrl: true });
                                }
                            }
                        }, function (err) {
                            _this.display = false;
                            if (err.error instanceof ErrorEvent) {
                                var errorCode = err.error.error_schema.error_code;
                                var errorMessage = err.error.error_schema.error_message;
                                if (errorCode == _core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_7__["ErrorCodeConstants"].G29999) {
                                    _this.confirmationService.confirm({
                                        icon: "./assets/img/Failed.png",
                                        acceptIcon: null,
                                        rejectIcon: null,
                                        rejectVisible: true,
                                        acceptVisible: true,
                                        acceptLabel: "ULANGI",
                                        rejectLabel: "BATAL",
                                        header: errorCode,
                                        message: errorMessage,
                                        closable: true,
                                        accept: function () {
                                            _this.actionNext();
                                            //this.login(username, password)
                                        },
                                    });
                                }
                                reject(err);
                            }
                            else {
                                _this.confirmationService.confirm({
                                    icon: "./assets/img/Failed.png",
                                    acceptIcon: null,
                                    rejectIcon: null,
                                    rejectVisible: true,
                                    acceptVisible: true,
                                    acceptLabel: "ULANGI",
                                    rejectLabel: "BATAL",
                                    header: _core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_7__["ErrorCodeConstants"].G29999,
                                    message: _core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_7__["ErrorCodeConstants"].G29999_Message,
                                    closable: true,
                                    accept: function () {
                                        _this.actionNext();
                                        //this.login(username, password)
                                    },
                                });
                                reject(err);
                            }
                        });
                    });
                    //end call services
                };
                DashboardComponent.prototype.showDialogPilih = function (productId) {
                    this.selected = [productId];
                    this.display = true;
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"] },
                { type: _core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_4__["InfoProdukService"] },
                { type: _core_services_nasabah_service__WEBPACK_IMPORTED_MODULE_5__["NasabahService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-dashboard",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/dashboard.component.html")).default,
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/features/detail-channel/detail-channel.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/features/detail-channel/detail-channel.component.ts ***!
          \*********************************************************************/
        /*! exports provided: DetailChannelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailChannelComponent", function () { return DetailChannelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/infoproduk.service */ "./src/app/core/services/infoproduk.service.ts");
            /* harmony import */ var src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_models_channel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/models/channel */ "./src/app/core/models/channel.ts");
            var DetailChannelComponent = /** @class */ (function () {
                function DetailChannelComponent(router, infoProdukServices) {
                    this.router = router;
                    this.infoProdukServices = infoProdukServices;
                    this.credentialsNasabahKey = 'nasabahCredentials';
                    this.detailChannel = 'detailChannel';
                    this.listItem = new src_app_core_models_channel__WEBPACK_IMPORTED_MODULE_6__["Channel"]();
                }
                DetailChannelComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                        _this.listInfoProdukDefault = response.output_schema;
                        // console.log(response);
                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                            .groupBy('kategori')
                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                            .value();
                        _this.getNama();
                        // get list info channel
                        var channel = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](_this.listInfoProdukDefault, { 'kategori': 'Channel' });
                        _this.listInfoChannel = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](channel)
                            .groupBy('kategori')
                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                            .value();
                        // console.log('channel', this.listInfoChannel);
                    }, function (error) { });
                };
                DetailChannelComponent.prototype.isEmptyObject = function (obj) {
                    return obj && Object.keys(obj).length === 0;
                };
                DetailChannelComponent.prototype.getNama = function () {
                    this.credentials = src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__["StorageUtilService"].getItem(this.credentialsNasabahKey);
                    this.channel = src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__["StorageUtilService"].getItem(this.detailChannel);
                    // console.log('hasil', this.credentials);
                    // console.log('hasil2', this.channel);
                    this.labelText = this.credentials.namaNasabah;
                    this.listItem = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](this.listInfoProdukDefault, {
                        id: this.channel,
                    });
                    // console.log(this.listItem);
                };
                DetailChannelComponent.prototype.backToDash = function () {
                    this.router.navigate(['dashboard'], { replaceUrl: true });
                };
                DetailChannelComponent.prototype.onClickBack = function () {
                    localStorage.removeItem(this.detailChannel);
                    this.router.navigate(['detail-produk'], { replaceUrl: true });
                };
                return DetailChannelComponent;
            }());
            DetailChannelComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_3__["InfoProdukService"] }
            ]; };
            DetailChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detail-channel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-channel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-channel/detail-channel.component.html")).default,
                })
            ], DetailChannelComponent);
            /***/ 
        }),
        /***/ "./src/app/features/detail-produk/detail-produk.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/features/detail-produk/detail-produk.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".custom-pagination{\n    display: inline-block;\n    /* padding: 5px 12px; */\n    background: #afffe6;\n    margin: 0px 4px;\n    border-radius: 25px;\n}\n\n.custom-pagination .page-number{\n    display: inline-block;\n    /* padding: 5px 12px; */\n    background: #afffe6;\n    margin: 0px 4px;\n    border-radius: 25px;\n  }\n\n.page-number.current{\n    background: #ffffff!important;\n    border: 2px solid #458873;\n  }\n\n.page-number span{\n    display: block;\n    width: 28px;\n    height: 28px;\n    font-size: 18px;\n    cursor: pointer;\n  }\n\n.pagination-previous,.pagination-next{\n    display: inline-block;\n    font-weight: bold;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGV0YWlsLXByb2R1ay9kZXRhaWwtcHJvZHVrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLDZCQUE2QjtJQUM3Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kZXRhaWwtcHJvZHVrL2RldGFpbC1wcm9kdWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tcGFnaW5hdGlvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogcGFkZGluZzogNXB4IDEycHg7ICovXG4gICAgYmFja2dyb3VuZDogI2FmZmZlNjtcbiAgICBtYXJnaW46IDBweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogcGFkZGluZzogNXB4IDEycHg7ICovXG4gICAgYmFja2dyb3VuZDogI2FmZmZlNjtcbiAgICBtYXJnaW46IDBweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICBcbiAgLnBhZ2UtbnVtYmVyLmN1cnJlbnR7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ1ODg3MztcbiAgfVxuICBcbiAgLnBhZ2UtbnVtYmVyIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uLXByZXZpb3VzLC5wYWdpbmF0aW9uLW5leHR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/features/detail-produk/detail-produk.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/features/detail-produk/detail-produk.component.ts ***!
          \*******************************************************************/
        /*! exports provided: DetailProdukComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProdukComponent", function () { return DetailProdukComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js");
            /* harmony import */ var _core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/infoproduk.service */ "./src/app/core/services/infoproduk.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _core_models_produk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/models/produk */ "./src/app/core/models/produk.ts");
            /* harmony import */ var _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/enums/setting-constants.enum */ "./src/app/core/enums/setting-constants.enum.ts");
            var DetailProdukComponent = /** @class */ (function () {
                function DetailProdukComponent(router, infoProdukServices) {
                    this.router = router;
                    this.infoProdukServices = infoProdukServices;
                    this.credentialsNasabahKey = "nasabahCredentials";
                    this.config = ngx_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeviewConfig"].create({
                        hasAllCheckBox: false,
                        hasFilter: false,
                        hasCollapseExpand: false,
                        decoupleChildFromParent: false,
                        maxHeight: 400,
                    });
                    this.show = false;
                    this.showName = "";
                    this.cardName = false;
                    this.nameCard = '';
                    this.selected = [];
                    this.selectedChannel = [];
                    this.currentTutorial = null;
                    this.currentIndex = -1;
                    this.title = "";
                    this.page = 1;
                    // count = 0;
                    // pageSize = 10;
                    // pageSizes = [3, 6, 9];
                    this.count = 0;
                    this.rekeningFor = 1;
                    this.relationship = 2;
                    this.kartu = "Insert_Picture.png";
                    this.configTable = {
                        id: "advanced",
                        itemsPerPage: 10,
                        currentPage: 1,
                    };
                    this.filter = "";
                    this.listItem = new _core_models_produk__WEBPACK_IMPORTED_MODULE_7__["Produk"]();
                }
                DetailProdukComponent.prototype.onPageChange = function (number) {
                    //this.logEvent(`pageChange(${number})`);
                    this.configTable.currentPage = number;
                };
                DetailProdukComponent.prototype.onPageBoundsCorrection = function (number) {
                    //this.logEvent(`pageBoundsCorrection(${number})`);
                    this.configTable.currentPage = number;
                };
                DetailProdukComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.rekeningFor = 1;
                    this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                        _this.listInfoProdukDefault = response.output_schema;
                        // console.log(response)
                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_6__["chain"](response.output_schema)
                            .groupBy("kategori")
                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                            .value();
                        _this.getNama();
                        _this.listLimitBiayaKartu = lodash__WEBPACK_IMPORTED_MODULE_6__["chain"](_this.listItem.limitBiayaKartu)
                            .groupBy("kartu")
                            .map(function (value, key) { return ({ kategori: key, keterangan: value }); })
                            .value();
                        // console.log(this.listLimitBiayaKartu)
                        // get list info channel
                        var channel = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](_this.listInfoProdukDefault, { 'kategori': 'Channel' });
                        _this.listInfoChannel = lodash__WEBPACK_IMPORTED_MODULE_6__["chain"](channel)
                            .groupBy("kategori")
                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                            .value();
                        console.log('channel', _this.listInfoChannel);
                    }, function (error) {
                    });
                };
                DetailProdukComponent.prototype.backToDash = function () {
                    this.router.navigate(["dashboard"], { replaceUrl: true });
                };
                DetailProdukComponent.prototype.getNama = function () {
                    this.credentials = src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].getItem(this.credentialsNasabahKey);
                    console.log('detail-produk', this.credentials);
                    this.nameCard = this.credentials.namaNasabah.toUpperCase();
                    if (!this.isEmptyObject(this.credentials.products)) {
                        console.log("credentials.products", this.credentials.products);
                        // by id produk
                        if (this.credentials.products['id'] !== undefined) {
                            this.listItem = this.credentials.products;
                            console.log('tidak undifined');
                        }
                        else {
                            this.listItem = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.listInfoProdukDefault, {
                                id: this.credentials.products[0],
                            });
                        }
                        this.informasiLainnyaPerludiketahui = this.listItem["informasiLainya"]["perlu_diketahui"]["perlu_diketahui"].split(";");
                        // console.log(this.informasiLainnyaPerludiketahui);
                    }
                    else {
                        this.listItem = new _core_models_produk__WEBPACK_IMPORTED_MODULE_7__["Produk"]();
                    }
                    this.labelText = this.credentials.namaNasabah;
                };
                DetailProdukComponent.prototype.toggle = function (kategori) {
                    this.show = !this.show;
                    // CHANGE THE NAME OF THE BUTTON.
                    if (this.show)
                        this.showName = "Hide";
                    else
                        this.showName = kategori;
                };
                // check if the item are selected
                DetailProdukComponent.prototype.checked = function (item) {
                    if (this.selected.indexOf(item) != -1) {
                        return true;
                    }
                };
                // when checkbox change, add/remove the item from the array
                DetailProdukComponent.prototype.onChange = function (checked, item) {
                    if (checked) {
                        this.listItem = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.listInfoProdukDefault, { id: item });
                        // console.log(this.listItem);
                        console.log('listItem', this.listItem);
                        //console.log('listLimitBiayaKartu[0].keterangan',this.listItem.listLimitBiayaKartu[0].keterangan)
                        this.listLimitBiayaKartu = lodash__WEBPACK_IMPORTED_MODULE_6__["chain"](this.listItem.limitBiayaKartu)
                            .groupBy("kartu")
                            .map(function (value, key) { return ({ kategori: key, keterangan: value }); })
                            .value();
                        this.informasiLainnyaPerludiketahui = this.listItem["informasiLainya"]["perlu_diketahui"]["perlu_diketahui"].split(";");
                        // console.log(this.informasiLainnyaPerludiketahui);
                        this.retrieveTutorials();
                        this.selected.push(item);
                    }
                    else {
                        this.listItem = new _core_models_produk__WEBPACK_IMPORTED_MODULE_7__["Produk"]();
                        this.selected.splice(this.selected.indexOf(item), 1);
                    }
                    if (this.selected.length > 1) {
                        console.log(this.credentials.kategori);
                        console.log(this.credentials.namaNasabah);
                        console.log(this.selected);
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            namaNasabah: this.credentials.namaNasabah,
                            kategori: this.credentials.kategori,
                            products: this.selected,
                        });
                        this.router.navigate(["infoProduk"], { replaceUrl: true });
                    }
                    else {
                        // this.btnBandingkanValid = false;
                    }
                };
                DetailProdukComponent.prototype.handlePageChange = function (event) {
                    this.page = event;
                    this.retrieveTutorials();
                };
                DetailProdukComponent.prototype.retrieveTutorials = function () {
                    //const params = this.getRequestParams(this.title, this.page, this.pageSize);
                    if (this.listItem["daftarBankPrima"].length < 1) {
                        this.tutorials = [];
                    }
                    else {
                        this.tutorials = this.listItem["daftarBankPrima"];
                        this.count = this.listItem["daftarBankPrima"].length;
                    }
                };
                DetailProdukComponent.prototype.isEmptyObject = function (obj) {
                    return obj && Object.keys(obj).length === 0;
                };
                DetailProdukComponent.prototype.unicodeToChar = function (text) {
                    return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
                        return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
                    });
                };
                // check if the item are selected
                DetailProdukComponent.prototype.checkedChannel = function (item) {
                    if (this.selectedChannel.indexOf(item) != -1) {
                        return true;
                    }
                };
                // when checkbox change, add/remove the item from the array
                DetailProdukComponent.prototype.onChangeChannel = function (checked, item) {
                    if (checked) {
                        this.selectedChannel.push(item);
                    }
                    else {
                        this.selectedChannel.splice(this.selectedChannel.indexOf(item), 1);
                    }
                };
                DetailProdukComponent.prototype.onChannelClick = function (item) {
                    if (item) {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem('detailChannel', item);
                        this.router.navigate(["detail-channel"], { replaceUrl: true });
                    }
                };
                DetailProdukComponent.prototype.onItemChangeTipeKartu = function (value) {
                    console.log(" Value is : ", this.jenisKartu);
                    this.changeCard();
                };
                DetailProdukComponent.prototype.onItemChangeJenisKartu = function (value) {
                    this.changeCard();
                };
                DetailProdukComponent.prototype.onItemChangeRelationship = function (value) {
                    console.log('onItemChangeRelationship', value);
                    if (value == 1) {
                        this.tipeKartu = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].tipeKartuKhusus;
                        this.jenisKartu = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].jenisKartuGPN;
                    }
                    // console.log(" Value is : ", this.jenisKartu);
                    this.changeCard();
                };
                DetailProdukComponent.prototype.onItemChangeCardName = function (value) {
                    if (value == 1) {
                        this.cardName = true;
                    }
                    else {
                        this.cardName = false;
                    }
                };
                DetailProdukComponent.prototype.changeCard = function () {
                    var path_kartu = 'kartu';
                    var path = '';
                    var cardName = '';
                    var unNamed = '-UnNamed.png';
                    if (this.tipeKartu == _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].tipeKartuBlue) {
                        cardName = "Blue";
                    }
                    else if (this.tipeKartu == _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].tipeKartuGold) {
                        cardName = "Gold";
                    }
                    else if (this.tipeKartu == _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].tipeKartuPlatinum) {
                        cardName = "Platinum";
                    }
                    else {
                        cardName = "Blue";
                    }
                    if (this.jenisKartu === undefined) {
                        console.log('disini');
                    }
                    else {
                        // if (this.tipeKartu == 4) {
                        //   path = 'MC';
                        //   this.kartu = path_kartu + '/' + path + '/' + cardName + unNamed;
                        // }else{
                        if (this.jenisKartu == _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].jenisKartuGPN) {
                            path = 'GPN';
                            this.kartu = path_kartu + '/' + path + '/' + cardName + unNamed;
                        }
                        else {
                            path = 'MC';
                            this.kartu = path_kartu + '/' + path + '/' + cardName + unNamed;
                        }
                        //} 
                    }
                };
                return DetailProdukComponent;
            }());
            DetailProdukComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_5__["InfoProdukService"] }
            ]; };
            DetailProdukComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-detail-produk",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-produk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-produk/detail-produk.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail-produk.component.css */ "./src/app/features/detail-produk/detail-produk.component.css")).default]
                })
            ], DetailProdukComponent);
            /***/ 
        }),
        /***/ "./src/app/features/detail-verifikasi/detail-verifikasi.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/features/detail-verifikasi/detail-verifikasi.component.ts ***!
          \***************************************************************************/
        /*! exports provided: DetailVerifikasiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVerifikasiComponent", function () { return DetailVerifikasiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DetailVerifikasiComponent = /** @class */ (function () {
                function DetailVerifikasiComponent() {
                    var _this = this;
                    this.condition = true;
                    this.change = false;
                    this.isShow1 = false;
                    this.isShow2 = false;
                    this.loadingReader = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.wait(5000)];
                                case 1:
                                    _a.sent();
                                    this.condition = false;
                                    this.change = true;
                                    this.isShow1 = true;
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                DetailVerifikasiComponent.prototype.ngOnInit = function () {
                    this.loadingReader();
                };
                DetailVerifikasiComponent.prototype.wait = function (timeout) {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, timeout);
                    });
                };
                DetailVerifikasiComponent.prototype.coba = function () { };
                return DetailVerifikasiComponent;
            }());
            DetailVerifikasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detail-verifikasi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-verifikasi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/detail-verifikasi/detail-verifikasi.component.html")).default,
                })
            ], DetailVerifikasiComponent);
            /***/ 
        }),
        /***/ "./src/app/features/info-produk/info-produk.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/features/info-produk/info-produk.component.ts ***!
          \***************************************************************/
        /*! exports provided: InfoProdukComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProdukComponent", function () { return InfoProdukComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/infoproduk.service */ "./src/app/core/services/infoproduk.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/enums/errcode-constants.enum */ "./src/app/core/enums/errcode-constants.enum.ts");
            /* harmony import */ var src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            /* harmony import */ var _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/enums/setting-constants.enum */ "./src/app/core/enums/setting-constants.enum.ts");
            var InfoProdukComponent = /** @class */ (function () {
                function InfoProdukComponent(router, infoProdukServices, confirmationService) {
                    this.router = router;
                    this.infoProdukServices = infoProdukServices;
                    this.confirmationService = confirmationService;
                    this.list1 = [
                        { label: 'Pilih Produk', value: '0' },
                        { label: 'Tahapan', value: '1' },
                        { label: 'Tahapan Gold', value: '2' },
                        { label: 'Tabunganku', value: '3' },
                    ];
                    this.list2 = [
                        { label: 'Pilih Produk', value: '0' },
                        { label: 'Tahapan', value: '1' },
                        { label: 'Tahapan Gold', value: '2' },
                        { label: 'Tabunganku', value: '3' },
                    ];
                    this.list3 = [
                        { label: 'Pilih Produk', value: '0' },
                        { label: 'Tahapan', value: '1' },
                        { label: 'Tahapan Gold', value: '2' },
                        { label: 'Tabunganku', value: '3' },
                    ];
                    this.credentialsNasabahKey = 'nasabahCredentials';
                    this.selectedList1 = '0';
                    this.selectedList2 = '0';
                    this.selectedList3 = '0';
                    this.dropdownIcon1 = 'pi pi-chevron-down';
                    this.dropdownIcon2 = 'pi pi-chevron-down';
                    this.dropdownIcon3 = 'pi pi-chevron-down';
                    this.isShown = false;
                    this.isIcon1 = false;
                    this.isIcon2 = false;
                    this.isIcon3 = false;
                    this.hide1 = false;
                    this.hide2 = false;
                    this.hide3 = false;
                    if (src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].hasItem(this.credentialsNasabahKey)) {
                        this.credentials = src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].getItem(this.credentialsNasabahKey);
                        console.log(this.credentials);
                    }
                }
                InfoProdukComponent.prototype.ngOnInit = function () {
                    this.getNama();
                    this.initDrop();
                };
                // hide & show drop
                InfoProdukComponent.prototype.onShow1 = function (event) {
                    this.dropdownIcon1 = 'pi pi-chevron-up';
                };
                InfoProdukComponent.prototype.onHide1 = function (event) {
                    this.dropdownIcon1 = 'pi pi-chevron-down';
                };
                InfoProdukComponent.prototype.onShow2 = function (event) {
                    this.dropdownIcon2 = 'pi pi-chevron-up';
                };
                InfoProdukComponent.prototype.onHide2 = function (event) {
                    this.dropdownIcon2 = 'pi pi-chevron-down';
                };
                InfoProdukComponent.prototype.onShow3 = function (event) {
                    this.dropdownIcon3 = 'pi pi-chevron-up';
                };
                InfoProdukComponent.prototype.onHide3 = function (event) {
                    this.dropdownIcon3 = 'pi pi-chevron-down';
                };
                // list dropdown
                InfoProdukComponent.prototype.getList1 = function (event) {
                    if (event.value === '0') {
                        this.isIcon1 = false;
                        this.hide1 = false;
                        this.selectedItem1 = '';
                        this.selectBuku1 = '';
                        this.selectBunga1 = '';
                        this.selectSetor1 = '';
                        this.selectNext1 = '';
                        this.selectSaldo1 = '';
                        this.selectAdmin1 = '';
                        this.selectMin1 = '';
                        this.selectGtu1 = '';
                        this.selectMutasi1 = '';
                        this.selectTutup1 = '';
                        this.selectTrans1 = '';
                        this.selectPasif1 = '';
                    }
                    else if (event.value === '1') {
                        this.isIcon1 = true;
                        this.hide1 = true;
                        this.selectedItem1 = this.listInfoProduk[0].products[0].image;
                        this.selectBuku1 = 'Opsional YA/TDK';
                        this.selectedList1 = '1';
                        this.selectBuku1 = 'Opsional YA/TDK';
                        this.selectBunga1 = 'Tiering ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                        this.selectSaldo1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                        this.selectMin1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                        this.selectAdmin1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                        this.selectGtu1 = 'Rp -';
                        this.selectMutasi1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                        this.selectTutup1 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                        this.selectTrans1 = 'Rp -';
                        this.selectPasif1 = 'Rp -';
                    }
                    else if (event.value === '2') {
                        this.isIcon1 = true;
                        this.hide1 = true;
                        this.selectedItem1 = this.listInfoProduk[0].products[1].image;
                        this.selectBuku1 = 'YA';
                        this.selectedList1 = '2';
                        this.selectBunga1 = 'Tiering ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext1 = 'Rp -';
                        this.selectSaldo1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                        this.selectMin1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                        this.selectAdmin1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                        this.selectGtu1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                        this.selectMutasi1 = 'Rp -';
                        this.selectTutup1 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                        this.selectTrans1 = 'Rp -';
                        this.selectPasif1 = 'Rp -';
                    }
                    else if (event.value === '3') {
                        this.isIcon1 = true;
                        this.hide1 = true;
                        this.selectedItem1 = this.listInfoProduk[0].products[2].image;
                        this.selectBuku1 = 'YA';
                        this.selectedList1 = '3';
                        this.selectBunga1 = 'Tiering ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                        this.selectSetor1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                        this.selectNext1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                        this.selectSaldo1 = 'Rp -';
                        this.selectMin1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                        this.selectAdmin1 = 'Rp -';
                        this.selectGtu1 = 'Rp -';
                        this.selectMutasi1 = 'Rp -';
                        this.selectTutup1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                        this.selectTrans1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                        this.selectPasif1 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                    }
                };
                InfoProdukComponent.prototype.getList2 = function (event) {
                    if (event.value === '0') {
                        this.isIcon2 = false;
                        this.hide2 = false;
                        this.selectedItem2 = '';
                        this.selectBuku2 = '';
                        this.selectBunga2 = '';
                        this.selectSetor2 = '';
                        this.selectNext2 = '';
                        this.selectSaldo2 = '';
                        this.selectAdmin2 = '';
                        this.selectMin2 = '';
                        this.selectGtu2 = '';
                        this.selectMutasi2 = '';
                        this.selectTutup2 = '';
                        this.selectTrans2 = '';
                        this.selectPasif2 = '';
                    }
                    else if (event.value === '1') {
                        this.isIcon2 = true;
                        this.hide2 = true;
                        this.selectedList2 = '1';
                        this.selectedItem2 = this.listInfoProduk[0].products[0].image;
                        this.selectBuku2 = 'Opsional YA/TDK';
                        this.selectBunga2 = 'Tiering ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                        this.selectSaldo2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                        this.selectMin2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                        this.selectAdmin2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                        this.selectGtu2 = 'Rp -';
                        this.selectMutasi2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                        this.selectTutup2 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                        this.selectTrans2 = 'Rp -';
                        this.selectPasif2 = 'Rp -';
                    }
                    else if (event.value === '2') {
                        this.isIcon2 = true;
                        this.hide2 = true;
                        this.selectedList2 = '2';
                        this.selectedItem2 = this.listInfoProduk[0].products[1].image;
                        this.selectBuku2 = 'YA';
                        this.selectBunga2 = 'Tiering ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext2 = 'Rp -';
                        this.selectSaldo2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                        this.selectMin2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                        this.selectAdmin2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                        this.selectGtu2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                        this.selectMutasi2 = 'Rp. -';
                        this.selectTutup2 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                        this.selectTrans2 = 'Rp -';
                        this.selectPasif2 = 'Rp -';
                    }
                    else if (event.value === '3') {
                        this.isIcon2 = true;
                        this.hide2 = true;
                        this.selectedList2 = '2';
                        this.selectedItem2 = this.listInfoProduk[0].products[2].image;
                        this.selectBuku2 = 'YA';
                        this.selectBunga2 = 'Tiering ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                        this.selectSetor2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                        this.selectNext2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                        this.selectSaldo2 = 'Rp -';
                        this.selectMin2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                        this.selectAdmin2 = 'Rp -';
                        this.selectGtu2 = 'Rp -';
                        this.selectMutasi2 = 'Rp -';
                        this.selectTutup2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                        this.selectTrans2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                        this.selectPasif2 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                    }
                };
                InfoProdukComponent.prototype.getList3 = function (event) {
                    if (event.value === '0') {
                        this.isIcon3 = false;
                        this.hide3 = false;
                        this.selectedItem3 = '';
                        this.selectBuku3 = '';
                        this.selectBunga3 = '';
                        this.selectSetor3 = '';
                        this.selectNext3 = '';
                        this.selectSaldo3 = '';
                        this.selectAdmin3 = '';
                        this.selectMin3 = '';
                        this.selectGtu3 = '';
                        this.selectMutasi3 = '';
                        this.selectTutup3 = '';
                        this.selectTrans3 = '';
                        this.selectPasif3 = '';
                    }
                    else if (event.value === '1') {
                        this.isIcon3 = true;
                        this.hide3 = true;
                        this.selectedItem3 = this.listInfoProduk[0].products[0].image;
                        this.selectBuku3 = 'Opsional YA/TDK';
                        this.selectedList3 = '1';
                        this.selectBuku3 = 'Opsional YA/TDK';
                        this.selectBunga3 = 'Tiering ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                        this.selectSaldo3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                        this.selectMin3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                        this.selectAdmin3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                        this.selectGtu3 = 'Rp -';
                        this.selectMutasi3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                        this.selectTutup3 = this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                        this.selectTrans3 = 'Rp -';
                        this.selectPasif3 = 'Rp -';
                    }
                    else if (event.value === '2') {
                        this.isIcon3 = true;
                        this.hide3 = true;
                        this.selectedItem3 = this.listInfoProduk[0].products[1].image;
                        this.selectBuku3 = 'YA';
                        this.selectedList3 = '2';
                        this.selectBunga3 = 'Tiering ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                        this.selectSetor3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                        this.selectNext3 = 'Rp -';
                        this.selectSaldo3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                        this.selectMin3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                        this.selectAdmin3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                        this.selectGtu3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                        this.selectMutasi3 = 'Rp -';
                        this.selectTutup3 = this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                        this.selectTrans3 = 'Rp -';
                        this.selectPasif3 = 'Rp -';
                    }
                    else if (event.value === '3') {
                        this.isIcon3 = true;
                        this.hide3 = true;
                        this.selectedItem3 = this.listInfoProduk[0].products[2].image;
                        this.selectBuku3 = 'YA';
                        this.selectedList3 = '3';
                        this.selectBunga3 = 'Tiering ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                            + ' - ' + this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                        this.selectSetor3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                        this.selectNext3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                        this.selectSaldo3 = 'Rp -';
                        this.selectMin3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                        this.selectAdmin3 = 'Rp -';
                        this.selectGtu3 = 'Rp -';
                        this.selectMutasi3 = 'Rp -';
                        this.selectTutup3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                        this.selectTrans3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                        this.selectPasif3 = this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                    }
                };
                // get label nama
                InfoProdukComponent.prototype.getNama = function () {
                    // console.log(this.credentials);
                    this.labelText = this.credentials.namaNasabah;
                    if (this.credentials.products.length > 1) {
                        this.isShown = true;
                    }
                    else {
                        this.isShown = false;
                    }
                };
                // back to dashboard
                InfoProdukComponent.prototype.backToDash = function () {
                    this.router.navigate(['dashboard'], { replaceUrl: true });
                };
                // dropdown initial
                InfoProdukComponent.prototype.initDrop = function () {
                    var _this = this;
                    var a = this.credentials.products;
                    // console.log(a);
                    return new Promise(function (resolve, reject) {
                        if (a.length === 2 && a[0] === 1 && a[1] === 2) {
                            for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
                                var c = a_1[_a];
                                if (c === 1) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        console.log(_this.listInfoProduk);
                                        _this.isIcon1 = true;
                                        _this.hide1 = true;
                                        _this.selectedList1 = '1';
                                        _this.selectedItem1 = _this.listInfoProduk[0].products[0].image;
                                        _this.selectBuku1 = 'Opsional YA/TDK';
                                        _this.selectBunga1 = 'Tiering ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectSaldo1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectMin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectAdmin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectGtu1 = 'Rp -';
                                        _this.selectMutasi1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                                        _this.selectTutup1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                                        _this.selectTrans1 = 'Rp -';
                                        _this.selectPasif1 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                                else if (c === 2) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        _this.isIcon2 = true;
                                        _this.hide2 = true;
                                        _this.selectedList2 = '2';
                                        _this.selectedItem2 = _this.listInfoProduk[0].products[1].image;
                                        _this.selectBuku2 = 'YA';
                                        _this.selectBunga2 = 'Tiering ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext2 = 'Rp -';
                                        _this.selectSaldo2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectMin2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectAdmin2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectGtu2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                                        _this.selectMutasi2 = 'Rp -';
                                        _this.selectTutup2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectTrans2 = 'Rp -';
                                        _this.selectPasif2 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                            }
                        }
                        else if (a.length === 2 && a[0] === 1 && a[1] === 3) {
                            for (var _b = 0, a_2 = a; _b < a_2.length; _b++) {
                                var c = a_2[_b];
                                if (c === 1) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        console.log(_this.listInfoProduk);
                                        _this.isIcon1 = true;
                                        _this.hide1 = true;
                                        _this.selectedList1 = '1';
                                        _this.selectedItem1 = _this.listInfoProduk[0].products[0].image;
                                        _this.selectBuku1 = 'Opsional YA/TDK';
                                        _this.selectBunga1 = 'Tiering ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectSaldo1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectMin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectAdmin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectGtu1 = 'Rp -';
                                        _this.selectMutasi1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                                        _this.selectTutup1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                                        _this.selectTrans1 = 'Rp -';
                                        _this.selectPasif1 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                                else if (c === 3) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        _this.isIcon2 = true;
                                        _this.hide2 = true;
                                        _this.selectedList2 = '3';
                                        _this.selectedItem2 = _this.listInfoProduk[0].products[2].image;
                                        _this.selectBuku2 = 'YA';
                                        _this.selectBunga2 = 'Tiering ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                                        _this.selectSetor2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                                        _this.selectNext2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                                        _this.selectSaldo2 = 'Rp -';
                                        _this.selectMin2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                                        _this.selectAdmin2 = 'Rp -';
                                        _this.selectGtu2 = 'Rp -';
                                        _this.selectMutasi2 = 'Rp -';
                                        _this.selectTutup2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                                        _this.selectTrans2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                                        _this.selectPasif2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                            }
                        }
                        else if (a.length === 2 && a[0] === 2 && a[1] === 3) {
                            for (var _c = 0, a_3 = a; _c < a_3.length; _c++) {
                                var c = a_3[_c];
                                if (c === 2) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        console.log(_this.listInfoProduk);
                                        _this.isIcon1 = true;
                                        _this.hide1 = true;
                                        _this.selectedList1 = '2';
                                        _this.selectedItem1 = _this.listInfoProduk[0].products[1].image;
                                        _this.selectBuku1 = 'YA';
                                        _this.selectBunga1 = 'Tiering ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext1 = 'Rp -';
                                        _this.selectSaldo1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectMin1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectAdmin1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectGtu1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                                        _this.selectMutasi1 = 'Rp -';
                                        _this.selectTutup1 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectTrans1 = 'Rp -';
                                        _this.selectPasif1 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                                else if (c === 3) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        _this.isIcon2 = true;
                                        _this.hide2 = true;
                                        _this.selectedList2 = '3';
                                        _this.selectedItem2 = _this.listInfoProduk[0].products[2].image;
                                        _this.selectBuku2 = 'YA';
                                        _this.selectBunga2 = 'Tiering ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                                        _this.selectSetor2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                                        _this.selectNext2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                                        _this.selectSaldo2 = 'Rp -';
                                        _this.selectMin2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                                        _this.selectAdmin2 = 'Rp -';
                                        _this.selectGtu2 = 'Rp -';
                                        _this.selectMutasi2 = 'Rp -';
                                        _this.selectTutup2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                                        _this.selectTrans2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                                        _this.selectPasif2 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                            }
                        }
                        else if (a.length === 3) {
                            for (var _d = 0, a_4 = a; _d < a_4.length; _d++) {
                                var c = a_4[_d];
                                if (c === 1) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        console.log(_this.listInfoProduk);
                                        // console.log(this.listInfoProduk[0].products[0].biayaUmum[0]);
                                        // console.log(this.listInfoProduk[0].products[0].informasiLainya.suku_bunga);
                                        _this.isIcon1 = true;
                                        _this.hide1 = true;
                                        _this.selectedList1 = '1';
                                        _this.selectedItem1 = _this.listInfoProduk[0].products[0].image;
                                        _this.selectBuku1 = 'Opsional YA/TDK';
                                        _this.selectBunga1 = 'Tiering ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[0].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectSaldo1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectMin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectAdmin1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectGtu1 = 'Rp -';
                                        _this.selectMutasi1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[6].besarnya;
                                        _this.selectTutup1 = _this.listInfoProduk[0].products[0].biayaUmum.biaya_umum[8].besarnya;
                                        _this.selectTrans1 = 'Rp -';
                                        _this.selectPasif1 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                                else if (c === 2) {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        _this.isIcon2 = true;
                                        _this.hide2 = true;
                                        _this.selectedList2 = '2';
                                        _this.selectedItem2 = _this.listInfoProduk[0].products[1].image;
                                        _this.selectBuku2 = 'YA';
                                        _this.selectBunga2 = 'Tiering ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[1].informasiLainya.suku_bunga[4].besarnya + '%';
                                        _this.selectSetor2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[0].besarnya;
                                        _this.selectNext2 = 'Rp -';
                                        _this.selectSaldo2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[1].besarnya;
                                        _this.selectMin2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[3].besarnya;
                                        _this.selectAdmin2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[2].besarnya;
                                        _this.selectGtu2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[5].besarnya;
                                        _this.selectMutasi2 = 'Rp -';
                                        _this.selectTutup2 = _this.listInfoProduk[0].products[1].biayaUmum.biaya_umum[4].besarnya;
                                        _this.selectTrans2 = 'Rp -';
                                        _this.selectPasif2 = 'Rp -';
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                                else {
                                    _this.infoProdukServices.getInfoProduk().subscribe(function (response) {
                                        // console.log(response)
                                        _this.listInfoProduk = lodash__WEBPACK_IMPORTED_MODULE_5__["chain"](response.output_schema)
                                            .groupBy('kategori')
                                            .map(function (value, key) { return ({ kategori: key, products: value }); })
                                            .value();
                                        _this.selectedKategori = _core_enums_setting_constants_enum__WEBPACK_IMPORTED_MODULE_8__["SettingCodeConstants"].simpanan;
                                        _this.isIcon3 = true;
                                        _this.hide3 = true;
                                        _this.selectedList3 = '3';
                                        _this.selectedItem3 = _this.listInfoProduk[0].products[2].image;
                                        _this.selectBuku3 = 'YA';
                                        _this.selectBunga3 = 'Tiering ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[0].besarnya + '%'
                                            + ' - ' + _this.listInfoProduk[0].products[2].informasiLainya.suku_bunga[2].besarnya + '%';
                                        _this.selectSetor3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[0].besarnya;
                                        _this.selectNext3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[1].besarnya;
                                        _this.selectSaldo3 = 'Rp -';
                                        _this.selectMin3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[3].besarnya;
                                        _this.selectAdmin3 = 'Rp -';
                                        _this.selectGtu3 = 'Rp -';
                                        _this.selectMutasi3 = 'Rp -';
                                        _this.selectTutup3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[5].besarnya;
                                        _this.selectTrans3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[7].besarnya;
                                        _this.selectPasif3 = _this.listInfoProduk[0].products[2].limitBiaya.limit_biaya[6].besarnya;
                                    }, function (err) {
                                        if (err.error.error_schema === undefined) {
                                            var errorCode = err.error.error_schema.error_code;
                                            var errorMessage = err.error.error_schema.error_message;
                                            if (errorCode === src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999) {
                                                _this.confirmationService.confirm({
                                                    icon: './assets/img/Failed.png',
                                                    acceptIcon: null,
                                                    rejectIcon: null,
                                                    rejectVisible: true,
                                                    acceptVisible: true,
                                                    acceptLabel: 'ULANGI',
                                                    rejectLabel: 'BATAL',
                                                    header: errorCode,
                                                    message: errorMessage,
                                                    closable: true,
                                                    accept: function () {
                                                        _this.initDrop();
                                                    },
                                                });
                                            }
                                            reject(err);
                                        }
                                        else {
                                            _this.confirmationService.confirm({
                                                icon: './assets/img/Failed.png',
                                                acceptIcon: null,
                                                rejectIcon: null,
                                                rejectVisible: true,
                                                acceptVisible: true,
                                                acceptLabel: 'ULANGI',
                                                rejectLabel: 'BATAL',
                                                header: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999,
                                                message: src_app_core_enums_errcode_constants_enum__WEBPACK_IMPORTED_MODULE_6__["ErrorCodeConstants"].G29999_Message,
                                                closable: true,
                                                accept: function () {
                                                    _this.initDrop();
                                                },
                                            });
                                            reject(err);
                                        }
                                    });
                                }
                            }
                        }
                    });
                };
                // choose produk "PILIH"
                InfoProdukComponent.prototype.chooseProduct1 = function () {
                    var ket = 'pilih';
                    if (this.selectedList1 === '1') {
                        // console.log({klikDari: ket, namaNasabah : this.labelText,
                        //   kategori : this.selectedKategori, products: this.listInfoProduk[0].products[0]});
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList1 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList1 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                InfoProdukComponent.prototype.chooseProduct2 = function () {
                    var ket = 'pilih';
                    if (this.selectedList2 === '1') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList2 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList2 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                InfoProdukComponent.prototype.chooseProduct3 = function () {
                    var ket = 'pilih';
                    if (this.selectedList3 === '1') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList3 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList3 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                // choose produk "DETAIL"
                InfoProdukComponent.prototype.chooseDetail1 = function () {
                    var ket = 'detail';
                    if (this.selectedList1 === '1') {
                        // console.log({klikDari: ket, namaNasabah : this.labelText,
                        //   kategori : this.selectedKategori, products: this.listInfoProduk[0].products[0]});
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList1 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList1 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                InfoProdukComponent.prototype.chooseDetail2 = function () {
                    var ket = 'detail';
                    if (this.selectedList2 === '1') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList2 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList2 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                InfoProdukComponent.prototype.chooseDetail3 = function () {
                    var ket = 'detail';
                    if (this.selectedList3 === '1') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[0]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList3 === '2') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[1]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                    else if (this.selectedList3 === '3') {
                        src_app_shared_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_2__["StorageUtilService"].setItem(this.credentialsNasabahKey, {
                            klikDari: ket,
                            namaNasabah: this.labelText,
                            kategori: this.selectedKategori, products: this.listInfoProduk[0].products[2]
                        });
                        this.router.navigate(['detail-produk'], { replaceUrl: true });
                    }
                };
                // close product with icon
                InfoProdukComponent.prototype.closeProduk1 = function () {
                    this.isIcon1 = false;
                    this.hide1 = false;
                    this.selectedList1 = '0';
                    this.selectedItem1 = '';
                    this.selectBuku1 = '';
                    this.selectBunga1 = '';
                    this.selectSetor1 = '';
                    this.selectNext1 = '';
                    this.selectSaldo1 = '';
                    this.selectAdmin1 = '';
                    this.selectMin1 = '';
                    this.selectGtu1 = '';
                    this.selectMutasi1 = '';
                    this.selectTutup1 = '';
                    this.selectTrans1 = '';
                    this.selectPasif1 = '';
                };
                InfoProdukComponent.prototype.closeProduk2 = function () {
                    this.isIcon2 = false;
                    this.hide2 = false;
                    this.selectedList2 = '0';
                    this.selectedItem2 = '';
                    this.selectBuku2 = '';
                    this.selectBunga2 = '';
                    this.selectSetor2 = '';
                    this.selectNext2 = '';
                    this.selectSaldo2 = '';
                    this.selectAdmin2 = '';
                    this.selectMin2 = '';
                    this.selectGtu2 = '';
                    this.selectMutasi2 = '';
                    this.selectTutup2 = '';
                    this.selectTrans2 = '';
                    this.selectPasif2 = '';
                };
                InfoProdukComponent.prototype.closeProduk3 = function () {
                    this.isIcon3 = false;
                    this.hide3 = false;
                    this.selectedList3 = '0';
                    this.selectedItem3 = '';
                    this.selectBuku3 = '';
                    this.selectBunga3 = '';
                    this.selectSetor3 = '';
                    this.selectNext3 = '';
                    this.selectSaldo3 = '';
                    this.selectAdmin3 = '';
                    this.selectMin3 = '';
                    this.selectGtu3 = '';
                    this.selectMutasi3 = '';
                    this.selectTutup3 = '';
                    this.selectTrans3 = '';
                    this.selectPasif3 = '';
                };
                return InfoProdukComponent;
            }());
            InfoProdukComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_core_services_infoproduk_service__WEBPACK_IMPORTED_MODULE_4__["InfoProdukService"] },
                { type: src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] }
            ]; };
            InfoProdukComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-info-produk',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-produk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/info-produk/info-produk.component.html")).default,
                })
            ], InfoProdukComponent);
            /***/ 
        }),
        /***/ "./src/app/features/layar-verifikasi/layar-verifikasi.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/features/layar-verifikasi/layar-verifikasi.component.ts ***!
          \*************************************************************************/
        /*! exports provided: LayarVerifikasiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayarVerifikasiComponent", function () { return LayarVerifikasiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var LayarVerifikasiComponent = /** @class */ (function () {
                function LayarVerifikasiComponent(confirmationService) {
                    this.confirmationService = confirmationService;
                    this.images = [
                        { thumb: './assets/gallery/img1_thumb.jpg', img: './assets/gallery/img1.jpg', description: 'Image 1' },
                        { thumb: './assets/gallery/img2_thumb.jpg', img: './assets/gallery/img2.jpg', description: 'Image 2' }
                    ];
                    this.isShow1 = false;
                    this.isShow2 = true;
                    this.display1 = true;
                    this.display2 = false;
                }
                LayarVerifikasiComponent.prototype.ngOnInit = function () {
                };
                LayarVerifikasiComponent.prototype.closeHeader = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Info_Circle.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: true,
                        acceptVisible: true,
                        acceptLabel: 'YA',
                        rejectLabel: 'BATAL',
                        header: '',
                        message: 'Apakah Anda yakin untuk check out' + '<br>' + 'nasabah?',
                        closable: false,
                        accept: function () { },
                    });
                };
                return LayarVerifikasiComponent;
            }());
            LayarVerifikasiComponent.ctorParameters = function () { return [
                { type: src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }
            ]; };
            LayarVerifikasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layar-verifikasi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layar-verifikasi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/layar-verifikasi/layar-verifikasi.component.html")).default,
                })
            ], LayarVerifikasiComponent);
            /***/ 
        }),
        /***/ "./src/app/features/modal/dialog.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/features/modal/dialog.component.ts ***!
          \****************************************************/
        /*! exports provided: DialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function () { return DialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var DialogComponent = /** @class */ (function () {
                function DialogComponent(confirmationService) {
                    this.confirmationService = confirmationService;
                }
                DialogComponent.prototype.ngOnInit = function () { };
                DialogComponent.prototype.showModalDialog = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Failed.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: true,
                        acceptVisible: true,
                        acceptLabel: 'OK',
                        rejectLabel: 'BATAL',
                        header: 'M0001',
                        message: 'Anda sedang login di perangkat lain <br/> Apakah ingin tetap lanjut ?',
                        accept: function () { },
                    });
                    // this.displayModal = true;
                };
                DialogComponent.prototype.showDialog1 = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Info_Circle.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: false,
                        acceptVisible: true,
                        acceptLabel: 'OK',
                        rejectLabel: 'BATAL',
                        // header: 'M0001',
                        message: 'Anda sudah tutup transaksi <br/> Menu tidak dapat diakses',
                        accept: function () { },
                    });
                };
                DialogComponent.prototype.showDialog2 = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Failed.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: false,
                        acceptVisible: false,
                        acceptLabel: 'OK',
                        rejectLabel: 'BATAL',
                        header: 'M0001',
                        message: 'User domain tidak terdaftar',
                        accept: function () { },
                    });
                };
                DialogComponent.prototype.showDialog3 = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Failed.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: true,
                        acceptVisible: true,
                        acceptLabel: 'ULANGI',
                        rejectLabel: 'BATAL',
                        header: 'M0001',
                        message: 'Gagal memproses interaksi',
                        accept: function () { },
                    });
                };
                return DialogComponent;
            }());
            DialogComponent.ctorParameters = function () { return [
                { type: _shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }
            ]; };
            DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/modal/dialog.component.html")).default,
                })
            ], DialogComponent);
            /***/ 
        }),
        /***/ "./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.ts ***!
          \*************************************************************************/
        /*! exports provided: VerifikasiKtpelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifikasiKtpelComponent", function () { return VerifikasiKtpelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var VerifikasiKtpelComponent = /** @class */ (function () {
                function VerifikasiKtpelComponent(confirmationService) {
                    var _this = this;
                    this.confirmationService = confirmationService;
                    this.display1 = true;
                    this.display2 = false;
                    this.change = false;
                    this.readerKtp = true;
                    this.readerFinger = true;
                    this.loadingReader = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.wait(5000)];
                                case 1:
                                    _a.sent();
                                    this.readerKtp = false;
                                    return [4 /*yield*/, this.wait(8000)];
                                case 2:
                                    _a.sent();
                                    this.readerFinger = false;
                                    this.change = true;
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                }
                VerifikasiKtpelComponent.prototype.ngOnInit = function () {
                    this.actionToDo();
                };
                VerifikasiKtpelComponent.prototype.actionToDo = function () {
                    // if (this.display1 === true) {
                    //   setTimeout(() => {
                    //     // close the modal in this moment.
                    //     this.display1 = false;
                    //     this.display2 = true;
                    //  }, 8000);
                    // } else {
                    //   this.showDialog();
                    // }
                    if (this.display1 === true) {
                        this.loadingReader();
                    }
                    else {
                        // this.showDialog();
                    }
                };
                VerifikasiKtpelComponent.prototype.wait = function (timeout) {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, timeout);
                    });
                };
                VerifikasiKtpelComponent.prototype.showDialog = function () {
                    this.confirmationService.confirm({
                        icon: './assets/img/Failed.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: false,
                        acceptVisible: true,
                        acceptLabel: 'ULANGI',
                        rejectLabel: 'BATAL',
                        header: 'M0001',
                        message: 'KTP-el tidak terbaca',
                        closable: true,
                        accept: function () { },
                    });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'METODE LAIN',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal melakukan verifikasi KTP-el' + '<br>' + 'lebih dari 3 kali',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Gagal memuat data Nasabah',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: true,
                    //   acceptVisible: true,
                    //   acceptLabel: 'YA',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Nasabah belum terdaftar di BCA' + '<br>' + 'Apakah ingin lanjut transaksi?',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: Perangkat tidak terhubung',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                    // this.confirmationService.confirm({
                    //   icon: './assets/img/Failed.png',
                    //   acceptIcon: null,
                    //   rejectIcon: null,
                    //   rejectVisible: false,
                    //   acceptVisible: true,
                    //   acceptLabel: 'ULANGI',
                    //   rejectLabel: 'BATAL',
                    //   header:  'M0001',
                    //   message: 'Scan sidik jari gagal',
                    //   closable: true,
                    //   accept: () => {},
                    // });
                };
                return VerifikasiKtpelComponent;
            }());
            VerifikasiKtpelComponent.ctorParameters = function () { return [
                { type: src_app_shared_confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }
            ]; };
            VerifikasiKtpelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-verifikasi-ktpel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verifikasi-ktpel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/verifikasi-ktpel/verifikasi-ktpel.component.html")).default,
                })
            ], VerifikasiKtpelComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/animations/fade-zoom-in-top.decorator.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shared/animations/fade-zoom-in-top.decorator.ts ***!
          \*****************************************************************/
        /*! exports provided: FadeZoomInTop */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeZoomInTop", function () { return FadeZoomInTop; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /**
             * Created by griga on 12/26/16.
             */
            function FadeZoomInTop() {
                var __ref__ = window['Reflect'];
                function parseMeta(metaInformation) {
                    for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
                        var metadata = metaInformation_1[_i]; //metadata is @Component metadata
                        // decorator logic goes here
                        // metadata.animations = [fadeZoomInTop()];
                        // metadata.host = {"[@fadeZoomInTop]": ''};
                    }
                }
                //value represents the annotation parameter(s)
                return function (target) {
                    var metaInformation = __ref__.getOwnMetadata('annotations', target);
                    if (metaInformation) {
                        parseMeta(metaInformation);
                    }
                };
            }
            /***/ 
        }),
        /***/ "./src/app/shared/button/button.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/button/button.ts ***!
          \*****************************************/
        /*! exports provided: ButtonCustomDirective, ButtonCustom, ButtonCustomModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCustomDirective", function () { return ButtonCustomDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCustom", function () { return ButtonCustom; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCustomModule", function () { return ButtonCustomModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var ButtonCustomDirective = /** @class */ (function () {
                function ButtonCustomDirective(el) {
                    this.el = el;
                    this.iconPos = "left";
                    this.cornerStyleClass = "ui-corner-all";
                }
                ButtonCustomDirective.prototype.ngAfterViewInit = function () {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());
                    if (this.icon) {
                        var iconElement = document.createElement("span");
                        iconElement.setAttribute("aria-hidden", "true");
                        var iconPosClass = this.iconPos == "right"
                            ? "ui-button-icon-right"
                            : "ui-button-icon-left";
                        iconElement.className = iconPosClass + " ui-clickable " + this.icon;
                        this.el.nativeElement.appendChild(iconElement);
                    }
                    var labelElement = document.createElement("span");
                    if (this.icon && !this.label) {
                        labelElement.setAttribute("aria-hidden", "true");
                    }
                    labelElement.className = "ui-button-text ui-clickable";
                    labelElement.appendChild(document.createTextNode(this.label || "ui-btn"));
                    this.el.nativeElement.appendChild(labelElement);
                    this.initialized = true;
                };
                ButtonCustomDirective.prototype.getStyleClass = function () {
                    // "ui-button ui-widget ui-state-default " +
                    var styleClass = "abc"; //this.cornerStyleClass;
                    if (this.icon) {
                        if (this.label != null && this.label != undefined && this.label != "") {
                            if (this.iconPos == "left")
                                styleClass = styleClass + " ui-button-text-icon-left";
                            else
                                styleClass = styleClass + " ui-button-text-icon-right";
                        }
                        else {
                            styleClass = styleClass + " ui-button-icon-only";
                        }
                    }
                    else {
                        if (this.label) {
                            styleClass = styleClass + " ui-button-text-only";
                        }
                        else {
                            styleClass = styleClass + " ui-button-text-empty";
                        }
                    }
                    return styleClass;
                };
                ButtonCustomDirective.prototype.setStyleClass = function () {
                    var styleClass = this.getStyleClass();
                    this.el.nativeElement.className = styleClass;
                };
                Object.defineProperty(ButtonCustomDirective.prototype, "label", {
                    get: function () {
                        return this._label;
                    },
                    set: function (val) {
                        this._label = val;
                        if (this.initialized) {
                            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, ".ui-button-text").textContent = this._label || "ui-btn";
                            if (!this.icon) {
                                if (this._label) {
                                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(this.el.nativeElement, "ui-button-text-empty");
                                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.el.nativeElement, "ui-button-text-only");
                                }
                                else {
                                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.el.nativeElement, "ui-button-text-empty");
                                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(this.el.nativeElement, "ui-button-text-only");
                                }
                            }
                            this.setStyleClass();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonCustomDirective.prototype, "icon", {
                    get: function () {
                        return this._icon;
                    },
                    set: function (val) {
                        this._icon = val;
                        if (this.initialized) {
                            var iconPosClass = this.iconPos == "right"
                                ? "ui-button-icon-right"
                                : "ui-button-icon-left";
                            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, ".ui-clickable").className =
                                iconPosClass + " ui-clickable " + this.icon;
                            this.setStyleClass();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ButtonCustomDirective.prototype.ngOnDestroy = function () {
                    while (this.el.nativeElement.hasChildNodes()) {
                        this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
                    }
                    this.initialized = false;
                };
                return ButtonCustomDirective;
            }());
            ButtonCustomDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustomDirective.prototype, "iconPos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustomDirective.prototype, "cornerStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustomDirective.prototype, "label", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustomDirective.prototype, "icon", null);
            ButtonCustomDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[qButton]",
                })
            ], ButtonCustomDirective);
            var ButtonCustom = /** @class */ (function () {
                function ButtonCustom() {
                    this.iconPos = "left";
                    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                return ButtonCustom;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "type", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "iconPos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "icon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "label", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "disabled", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "style", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonCustom.prototype, "styleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ButtonCustom.prototype, "onClick", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ButtonCustom.prototype, "onFocus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ButtonCustom.prototype, "onBlur", void 0);
            ButtonCustom = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // [ngClass]="{
                    //     'ui-button ui-widget ui-state-default ui-corner-all': true,
                    //     'ui-button-icon-only': icon && !label,
                    //     'ui-button-text-icon-left': icon && label && iconPos === 'left',
                    //     'ui-button-text-icon-right': icon && label && iconPos === 'right',
                    //     'ui-button-text-only': !icon && label,
                    //     'ui-button-text-empty': !icon && !label,
                    //     'ui-state-disabled': disabled
                    //   }"
                    selector: "q-button",
                    template: "\n    <button\n      [attr.type]=\"type\"\n      [class]=\"styleClass\"\n      [ngStyle]=\"style\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"(disabled) ? 'disable-button cursor-not-allowed text-white font-16 font-weight-700 uppercase px-6 py-3 rounded-full\n      shadow outline-none focus:outline-none mr-1 mb-1 w-full': 'primary-blue  text-white active:bg-gray-700 font-16 font-weight-700 uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'\"\n      (click)=\"onClick.emit($event)\"\n      (focus)=\"onFocus.emit($event)\"\n      (blur)=\"onBlur.emit($event)\"\n    >\n\n      <ng-content></ng-content>\n      <span\n        [ngClass]=\"{\n          'ui-clickable': true,\n          'ui-button-icon-left': iconPos === 'left',\n          'ui-button-icon-right': iconPos === 'right'\n        }\"\n        [class]=\"icon\"\n        *ngIf=\"icon\"\n        [attr.aria-hidden]=\"true\"\n      ></span>\n      <span\n        class=\"ui-button-text ui-clickable\"\n        [attr.aria-hidden]=\"icon && !label\"\n        >{{ label || \"ui-btn\" }}</span\n      >\n    </button>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                })
            ], ButtonCustom);
            var ButtonCustomModule = /** @class */ (function () {
                function ButtonCustomModule() {
                }
                return ButtonCustomModule;
            }());
            ButtonCustomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [ButtonCustomDirective, ButtonCustom],
                    declarations: [ButtonCustomDirective, ButtonCustom],
                })
            ], ButtonCustomModule);
            /***/ 
        }),
        /***/ "./src/app/shared/components/accordion/accordion.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/components/accordion/accordion.ts ***!
          \**********************************************************/
        /*! exports provided: AccordionTab, Accordion, AccordionCustomModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTab", function () { return AccordionTab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function () { return Accordion; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionCustomModule", function () { return AccordionCustomModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            var idx = 0;
            // <a [attr.tabindex]="disabled ? -1 : 0" [attr.id]="id" [attr.aria-controls]="id + '-content'" role="tab" [attr.aria-expanded]="selected" (click)="toggle($event)" 
            //                 (keydown)="onKeydown($event)">
            //                 <span class="ui-accordion-header-text cursor-pointer" *ngIf="!hasHeaderFacet" style="font-weight: 600;font-size: 20px; color: #005CAB">
            //                     {{header}}
            //                 </span>
            //                 <span class="ui-accordion-toggle-icon cursor-pointer" [ngClass]="selected ? accordion.collapseIcon : accordion.expandIcon" style="float:right"></span>
            //                 <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
            //             </a>
            var AccordionTab = /** @class */ (function () {
                function AccordionTab(accordion, changeDetector) {
                    this.changeDetector = changeDetector;
                    this.cache = true;
                    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
                    this.id = "ui-accordiontab-" + idx++;
                    this.accordion = accordion;
                }
                Object.defineProperty(AccordionTab.prototype, "selected", {
                    get: function () {
                        return this._selected;
                    },
                    set: function (val) {
                        this._selected = val;
                        if (!this.loaded) {
                            this.changeDetector.detectChanges();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AccordionTab.prototype, "animating", {
                    get: function () {
                        return this._animating;
                    },
                    set: function (val) {
                        this._animating = val;
                        if (!this.changeDetector.destroyed) {
                            this.changeDetector.detectChanges();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AccordionTab.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.templates.forEach(function (item) {
                        switch (item.getType()) {
                            case 'content':
                                _this.contentTemplate = item.template;
                                break;
                            default:
                                _this.contentTemplate = item.template;
                                break;
                        }
                    });
                };
                AccordionTab.prototype.toggle = function (event) {
                    if (this.disabled || this.animating) {
                        return false;
                    }
                    this.animating = true;
                    var index = this.findTabIndex();
                    if (this.selected) {
                        this.selected = false;
                        this.accordion.onClose.emit({ originalEvent: event, index: index });
                    }
                    else {
                        if (!this.accordion.multiple) {
                            for (var i = 0; i < this.accordion.tabs.length; i++) {
                                this.accordion.tabs[i].selected = false;
                                this.accordion.tabs[i].selectedChange.emit(false);
                            }
                        }
                        this.selected = true;
                        this.loaded = true;
                        this.accordion.onOpen.emit({ originalEvent: event, index: index });
                    }
                    this.selectedChange.emit(this.selected);
                    this.accordion.updateActiveIndex();
                    event.preventDefault();
                };
                AccordionTab.prototype.findTabIndex = function () {
                    var index = -1;
                    for (var i = 0; i < this.accordion.tabs.length; i++) {
                        if (this.accordion.tabs[i] == this) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
                Object.defineProperty(AccordionTab.prototype, "hasHeaderFacet", {
                    get: function () {
                        return this.headerFacet && this.headerFacet.length > 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                AccordionTab.prototype.onToggleDone = function (event) {
                    this.animating = false;
                };
                AccordionTab.prototype.onKeydown = function (event) {
                    if (event.which === 32 || event.which === 13) {
                        this.toggle(event);
                        event.preventDefault();
                    }
                };
                AccordionTab.prototype.ngOnDestroy = function () {
                    this.accordion.tabs.splice(this.findTabIndex(), 1);
                };
                return AccordionTab;
            }());
            AccordionTab.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Accordion; }),] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AccordionTab.prototype, "header", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AccordionTab.prototype, "disabled", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AccordionTab.prototype, "cache", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AccordionTab.prototype, "selectedChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AccordionTab.prototype, "transitionOptions", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"])
            ], AccordionTab.prototype, "headerFacet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"])
            ], AccordionTab.prototype, "templates", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AccordionTab.prototype, "selected", null);
            AccordionTab = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'p-accordionTab',
                    template: "\n        <div class=\"bg-transparant px-2 py-2 border-grey-500 border-b ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-active': selected,'ui-state-disabled':disabled}\">\n            <a role=\"tab\" [attr.aria-expanded]=\"selected\" (click)=\"toggle($event)\" \n                (keydown)=\"onKeydown($event)\">\n                <span class=\"ui-accordion-header-text cursor-pointer\" *ngIf=\"!hasHeaderFacet\" [ngClass]=\"selected ? accordion.expandText : accordion.collapseText\" >\n                    {{header}}\n                </span>\n                <span class=\"ui-accordion-toggle-icon cursor-pointer\" [ngClass]=\"selected ? accordion.collapseIcon : accordion.expandIcon\" style=\"float:right\"></span>\n                <ng-content select=\"p-header\" *ngIf=\"hasHeaderFacet\"></ng-content>\n            </a>\n        </div>\n        <div [attr.id]=\"id + '-content'\" class=\"ui-accordion-content-wrapper\" [@tabContent]=\"selected ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}\" (@tabContent.done)=\"onToggleDone($event)\"\n            [ngClass]=\"{'ui-accordion-content-wrapper-overflown': !selected||animating}\" \n            role=\"region\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id\">\n            <div class=\"ui-accordion-content ui-widget-content bg-grey-200 border-grey-100 border-b-2 border-t-2 mb-4 pt-2 pl-2 pr-2 \" style=\"background-color: #F0F0F0;\">\n                <ng-content></ng-content>\n                <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </ng-container>\n            </div>\n        </div>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('tabContent', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                height: '0'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                height: '{{height}}'
                            }), { params: { height: '0' } }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                height: '*'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}')),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transitionParams}}'))
                        ])
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Accordion; })))
            ], AccordionTab);
            var Accordion = /** @class */ (function () {
                function Accordion(el, changeDetector) {
                    this.el = el;
                    this.changeDetector = changeDetector;
                    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.expandIcon = 'pi pi-fw pi-chevron-right-accordian';
                    this.collapseIcon = 'pi pi-fw pi-chevron-down-accordian';
                    this.collapseText = 'accordian-collapse-text';
                    this.expandText = 'accordian-expand-text';
                    this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.tabs = [];
                }
                Accordion.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.initTabs();
                    this.tabListSubscription = this.tabList.changes.subscribe(function (_) {
                        _this.initTabs();
                        _this.changeDetector.markForCheck();
                    });
                };
                Accordion.prototype.initTabs = function () {
                    this.tabs = this.tabList.toArray();
                    this.updateSelectionState();
                };
                Accordion.prototype.getBlockableElement = function () {
                    return this.el.nativeElement.children[0];
                };
                Object.defineProperty(Accordion.prototype, "activeIndex", {
                    get: function () {
                        return this._activeIndex;
                    },
                    set: function (val) {
                        this._activeIndex = val;
                        if (this.preventActiveIndexPropagation) {
                            this.preventActiveIndexPropagation = false;
                            return;
                        }
                        this.updateSelectionState();
                    },
                    enumerable: true,
                    configurable: true
                });
                Accordion.prototype.updateSelectionState = function () {
                    if (this.tabs && this.tabs.length && this._activeIndex != null) {
                        for (var i = 0; i < this.tabs.length; i++) {
                            var selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                            var changed = selected !== this.tabs[i].selected;
                            if (changed) {
                                this.tabs[i].animating = true;
                                this.tabs[i].selected = selected;
                                this.tabs[i].selectedChange.emit(selected);
                            }
                        }
                    }
                };
                Accordion.prototype.updateActiveIndex = function () {
                    var _this = this;
                    var index = this.multiple ? [] : null;
                    this.tabs.forEach(function (tab, i) {
                        if (tab.selected) {
                            if (_this.multiple) {
                                index.push(i);
                            }
                            else {
                                index = i;
                                return;
                            }
                        }
                    });
                    this.preventActiveIndexPropagation = true;
                    this.activeIndexChange.emit(index);
                };
                Accordion.prototype.ngOnDestroy = function () {
                    if (this.tabListSubscription) {
                        this.tabListSubscription.unsubscribe();
                    }
                };
                return Accordion;
            }());
            Accordion.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "multiple", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], Accordion.prototype, "onClose", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], Accordion.prototype, "onOpen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "style", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "styleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "expandIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "collapseIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "collapseText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "expandText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], Accordion.prototype, "activeIndexChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AccordionTab)
            ], Accordion.prototype, "tabList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], Accordion.prototype, "activeIndex", null);
            Accordion = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'p-accordion',
                    template: "\n        <div [ngClass]=\"'ui-accordion ui-widget ui-helper-reset'\" [ngStyle]=\"style\" [class]=\"styleClass\" role=\"tablist\">\n            <ng-content></ng-content>\n        </div>\n    "
                })
            ], Accordion);
            var AccordionCustomModule = /** @class */ (function () {
                function AccordionCustomModule() {
                }
                return AccordionCustomModule;
            }());
            AccordionCustomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
                    declarations: [Accordion, AccordionTab]
                })
            ], AccordionCustomModule);
            /***/ 
        }),
        /***/ "./src/app/shared/components/bar-chart/bar-chart.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/components/bar-chart/bar-chart.component.ts ***!
          \********************************************************************/
        /*! exports provided: BarChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () { return BarChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
            var BarChartComponent = /** @class */ (function () {
                function BarChartComponent() {
                }
                BarChartComponent.prototype.ngOnInit = function () {
                };
                BarChartComponent.prototype.ngAfterViewInit = function () {
                    var config = {
                        type: "bar",
                        data: {
                            labels: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July"
                            ],
                            datasets: [
                                {
                                    label: new Date().getFullYear(),
                                    backgroundColor: "#ed64a6",
                                    borderColor: "#ed64a6",
                                    data: [30, 78, 56, 34, 100, 45, 13],
                                    fill: false,
                                    barThickness: 8
                                },
                                {
                                    label: new Date().getFullYear() - 1,
                                    fill: false,
                                    backgroundColor: "#4c51bf",
                                    borderColor: "#4c51bf",
                                    data: [27, 68, 86, 74, 10, 4, 87],
                                    barThickness: 8
                                }
                            ]
                        },
                        options: {
                            maintainAspectRatio: false,
                            responsive: true,
                            title: {
                                display: false,
                                text: "Orders Chart"
                            },
                            tooltips: {
                                mode: "index",
                                intersect: false
                            },
                            hover: {
                                mode: "nearest",
                                intersect: true
                            },
                            legend: {
                                labels: {
                                    fontColor: "rgba(0,0,0,.4)"
                                },
                                align: "end",
                                position: "bottom"
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: false,
                                        scaleLabel: {
                                            display: true,
                                            labelString: "Month"
                                        },
                                        gridLines: {
                                            borderDash: [2],
                                            borderDashOffset: [2],
                                            color: "rgba(33, 37, 41, 0.3)",
                                            zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                            zeroLineBorderDash: [2],
                                            zeroLineBorderDashOffset: [2]
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: "Value"
                                        },
                                        gridLines: {
                                            borderDash: [2],
                                            drawBorder: false,
                                            borderDashOffset: [2],
                                            color: "rgba(33, 37, 41, 0.2)",
                                            zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                            zeroLineBorderDash: [2],
                                            zeroLineBorderDashOffset: [2]
                                        }
                                    }
                                ]
                            }
                        }
                    };
                    var ctx = document.getElementById("bar-chart");
                    ctx = ctx.getContext("2d");
                    new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, config);
                };
                return BarChartComponent;
            }());
            BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bar-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/bar-chart/bar-chart.component.html")).default
                })
            ], BarChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/components.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/components/components.module.ts ***!
          \********************************************************/
        /*! exports provided: OgyaComponentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgyaComponentsModule", function () { return OgyaComponentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/shared/components/bar-chart/bar-chart.component.ts");
            /* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/shared/components/line-chart/line-chart.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
            /* harmony import */ var _notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-dropdown/notification-dropdown.component */ "./src/app/shared/components/notification-dropdown/notification-dropdown.component.ts");
            /* harmony import */ var _user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-dropdown/user-dropdown.component */ "./src/app/shared/components/user-dropdown/user-dropdown.component.ts");
            /* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
            /* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/shared/utils/utils.module.ts");
            /* harmony import */ var _confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../confirmdialog/confirmdialog */ "./src/app/shared/confirmdialog/confirmdialog.ts");
            /* harmony import */ var _tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/tab.component */ "./src/app/shared/components/tabs/tab.component.ts");
            /* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
            /* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accordion/accordion */ "./src/app/shared/components/accordion/accordion.ts");
            /* harmony import */ var _tabs_card_tabCard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tabs-card/tabCard.component */ "./src/app/shared/components/tabs-card/tabCard.component.ts");
            /* harmony import */ var _tabs_card_tabCards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs-card/tabCards.component */ "./src/app/shared/components/tabs-card/tabCards.component.ts");
            /* harmony import */ var _dialog_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dialog/dialog */ "./src/app/shared/dialog/dialog.ts");
            var OgyaComponentsModule = /** @class */ (function () {
                function OgyaComponentsModule() {
                }
                return OgyaComponentsModule;
            }());
            OgyaComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"], _confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogCustomModule"], _accordion_accordion__WEBPACK_IMPORTED_MODULE_16__["AccordionCustomModule"], _dialog_dialog__WEBPACK_IMPORTED_MODULE_19__["OgyaDialogModule"]],
                    declarations: [
                        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["BarChartComponent"],
                        _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                        _notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["NotificationDropdownComponent"],
                        _user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["UserDropdownComponent"],
                        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                        _tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
                        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                        _tabs_card_tabCard_component__WEBPACK_IMPORTED_MODULE_17__["TabCardComponent"],
                        _tabs_card_tabCards_component__WEBPACK_IMPORTED_MODULE_18__["TabCardsComponent"]
                    ],
                    exports: [
                        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["BarChartComponent"],
                        _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                        _notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["NotificationDropdownComponent"],
                        _user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["UserDropdownComponent"],
                        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                        _tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
                        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                        _tabs_card_tabCard_component__WEBPACK_IMPORTED_MODULE_17__["TabCardComponent"],
                        _tabs_card_tabCards_component__WEBPACK_IMPORTED_MODULE_18__["TabCardsComponent"]
                    ],
                })
            ], OgyaComponentsModule);
            /***/ 
        }),
        /***/ "./src/app/shared/components/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                    this.date = new Date().getFullYear();
                }
                FooterComponent.prototype.ngOnInit = function () { };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-footer",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/line-chart/line-chart.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/line-chart/line-chart.component.ts ***!
          \**********************************************************************/
        /*! exports provided: LineChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () { return LineChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
            var LineChartComponent = /** @class */ (function () {
                function LineChartComponent() {
                }
                LineChartComponent.prototype.ngOnInit = function () {
                };
                LineChartComponent.prototype.ngAfterViewInit = function () {
                    var config = {
                        type: "line",
                        data: {
                            labels: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July"
                            ],
                            datasets: [
                                {
                                    label: new Date().getFullYear(),
                                    backgroundColor: "#4c51bf",
                                    borderColor: "#4c51bf",
                                    data: [65, 78, 66, 44, 56, 67, 75],
                                    fill: false
                                },
                                {
                                    label: new Date().getFullYear() - 1,
                                    fill: false,
                                    backgroundColor: "#ed64a6",
                                    borderColor: "#ed64a6",
                                    data: [40, 68, 86, 74, 56, 60, 87]
                                }
                            ]
                        },
                        options: {
                            maintainAspectRatio: false,
                            responsive: true,
                            title: {
                                display: false,
                                text: "Sales Charts",
                                fontColor: "white",
                            },
                            legend: {
                                labels: {
                                    fontColor: "white"
                                },
                                align: "end",
                                position: "bottom"
                            },
                            tooltips: {
                                mode: "index",
                                intersect: false
                            },
                            hover: {
                                mode: "nearest",
                                intersect: true
                            },
                            scales: {
                                xAxes: [
                                    {
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.7)"
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: "Month",
                                            fontColor: "white"
                                        },
                                        gridLines: {
                                            display: false,
                                            borderDash: [2],
                                            borderDashOffset: [2],
                                            color: "rgba(33, 37, 41, 0.3)",
                                            zeroLineColor: "rgba(0, 0, 0, 0)",
                                            zeroLineBorderDash: [2],
                                            zeroLineBorderDashOffset: [2]
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.7)"
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: "Value",
                                            fontColor: "white"
                                        },
                                        gridLines: {
                                            borderDash: [3],
                                            borderDashOffset: [3],
                                            drawBorder: false,
                                            color: "rgba(255, 255, 255, 0.15)",
                                            zeroLineColor: "rgba(33, 37, 41, 0)",
                                            zeroLineBorderDash: [2],
                                            zeroLineBorderDashOffset: [2]
                                        }
                                    }
                                ]
                            }
                        }
                    };
                    var ctx = document.getElementById("line-chart");
                    ctx = ctx.getContext("2d");
                    new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, config);
                };
                return LineChartComponent;
            }());
            LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-line-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/line-chart/line-chart.component.html")).default
                })
            ], LineChartComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/navbar/navbar.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
          \**************************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/notification-dropdown/notification-dropdown.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/shared/components/notification-dropdown/notification-dropdown.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: NotificationDropdownComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function () { return NotificationDropdownComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
            var NotificationDropdownComponent = /** @class */ (function () {
                function NotificationDropdownComponent() {
                    this.dropdownPopoverShow = false;
                    this.popper = document.createElement("div");
                }
                NotificationDropdownComponent.prototype.ngOnInit = function () {
                    this.popper.innerHTML = "<div class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1\" style=\"min-width:12rem\" #popoverDropdownRef>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Another action\n  </a>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Something else here\n  </a>\n  <div class=\"h-0 my-2 border border-solid border-gray-200\"></div>\n  <a href=\"#pablo\" class=\"text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800\">\n    Seprated link\n  </a>\n</div>";
                };
                NotificationDropdownComponent.prototype.toggleDropdown = function (event) {
                    event.preventDefault();
                    if (this.dropdownPopoverShow) {
                        this.dropdownPopoverShow = false;
                        this.destroyPopper();
                    }
                    else {
                        this.dropdownPopoverShow = true;
                        this.createPoppper();
                    }
                };
                NotificationDropdownComponent.prototype.destroyPopper = function () {
                    this.popper.parentNode.removeChild(this.popper);
                };
                NotificationDropdownComponent.prototype.createPoppper = function () {
                    new popper_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.btnDropdownRef.nativeElement, this.popper, {
                        placement: "bottom-end"
                    });
                    this.btnDropdownRef.nativeElement.parentNode.insertBefore(this.popper, this.btnDropdownRef.nativeElement.nextSibling);
                };
                return NotificationDropdownComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnDropdownRef', { static: false })
            ], NotificationDropdownComponent.prototype, "btnDropdownRef", void 0);
            NotificationDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notification-dropdown',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/notification-dropdown/notification-dropdown.component.html")).default
                })
            ], NotificationDropdownComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/sidebar/sidebar.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
          \****************************************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent() {
                    this.collapseShow = "hidden";
                }
                SidebarComponent.prototype.ngOnInit = function () {
                };
                SidebarComponent.prototype.toggleCollapseShow = function (classes) {
                    this.collapseShow = classes;
                };
                return SidebarComponent;
            }());
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html")).default
                })
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/tabs-card/tabCard.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/shared/components/tabs-card/tabCard.component.ts ***!
          \******************************************************************/
        /*! exports provided: TabCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCardComponent", function () { return TabCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * A single tab page. It renders the passed template
             * via the @Input properties by using the ngTemplateOutlet
             * and ngTemplateOutletContext directives.
             */
            var TabCardComponent = /** @class */ (function () {
                function TabCardComponent() {
                    this.active = false;
                }
                return TabCardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
            ], TabCardComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TabCardComponent.prototype, "active", void 0);
            TabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tab-card',
                    template: "\n    <div [hidden]=\"!active\" class=\"w-full\">\n      <div class=\"flex justify-center \" >\n        <ng-content></ng-content>\n      </div>\n     \n    </div>\n  ",
                    styles: ["\n    .pane{\n      padding: 1px;\n    }\n  "]
                })
            ], TabCardComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/tabs-card/tabCards.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/components/tabs-card/tabCards.component.ts ***!
          \*******************************************************************/
        /*! exports provided: TabCardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCardsComponent", function () { return TabCardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tabCard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabCard.component */ "./src/app/shared/components/tabs-card/tabCard.component.ts");
            /**
             * The main component that renders single TabComponent
             * instances.
             */
            //import { DynamicTabsDirective } from './dynamic-tabs.directive';
            // <ul class="nav nav-tabs">
            //         <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
            //           <a href="#">{{tab.title}}</a>
            //         </li>
            //       </ul>
            // [class.border-t-4]="tab.active"
            // <button *ngFor="let tab of tabs"  (click)="selectTab(tab)" [ngClass]="{'active-tab': tab.active === true, 'nonactive-tab': tab.active === false }" class="py-2 px-6 block  focus:outline-none text-blue-bca font-18 font-weight-600"> {{tab.title}} </button>
            var TabCardsComponent = /** @class */ (function () {
                function TabCardsComponent() {
                }
                // contentChildren are set
                TabCardsComponent.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                TabCardsComponent.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    // activate the tab the user has clicked on.
                    tab.active = true;
                };
                return TabCardsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tabCard_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"])
            ], TabCardsComponent.prototype, "tabs", void 0);
            TabCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tab-cards',
                    template: "\n    <nav class=\"flex flex-col sm:flex-row   justify-center\" >\n      <div *ngFor=\"let tab of tabs\" class=\"flex flex-col items-center py-2 px-6 block nonactive-font focus:outline-none font-16 font-weight-600 \">\n        <label (click)=\"selectTab(tab)\" class=\"pb-2 cursor-pointer\" [ngClass]=\"{'active-font': tab.active === true, 'nonactive-font': tab.active === false }\">{{tab.title}}</label>\n        <div [ngClass]=\"{'active-tab': tab.active === true, 'nonactive-tab': tab.active === false }\" style=\"width:32px; height:4px\" class=\"flex mb-2 cursor-pointer\"></div>\n      </div>\n    </nav>\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    .active-font{\n      color: #005CAB;\n    }\n    .nonactive-font {\n      color: #808080;\n    }\n    .active-tab {\n      border-top-width : 4px;\n      border-bottom-width: 1px;\n      border-left-width: 1px;\n      border-right-width: 1px;\n      border-color: #005CAB;\n    }\n\n    .nonactive-tab {\n      border-top-width : 0px;\n      border-bottom-width: 0px;\n      border-left-width: 0px;\n      border-right-width: 0px;\n     \n    }\n\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    "]
                })
            ], TabCardsComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/tabs/tab.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/components/tabs/tab.component.ts ***!
          \*********************************************************/
        /*! exports provided: TabComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function () { return TabComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * A single tab page. It renders the passed template
             * via the @Input properties by using the ngTemplateOutlet
             * and ngTemplateOutletContext directives.
             */
            var TabComponent = /** @class */ (function () {
                function TabComponent() {
                    this.active = false;
                }
                return TabComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
            ], TabComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TabComponent.prototype, "active", void 0);
            TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tab',
                    template: "\n    <div [hidden]=\"!active\" class=\"w-full\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .pane{\n      padding: 1px;\n    }\n  "]
                })
            ], TabComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/tabs/tabs.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
          \**********************************************************/
        /*! exports provided: TabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function () { return TabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ "./src/app/shared/components/tabs/tab.component.ts");
            /**
             * The main component that renders single TabComponent
             * instances.
             */
            //import { DynamicTabsDirective } from './dynamic-tabs.directive';
            // <ul class="nav nav-tabs">
            //         <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
            //           <a href="#">{{tab.title}}</a>
            //         </li>
            //       </ul>
            // [class.border-t-4]="tab.active"
            var TabsComponent = /** @class */ (function () {
                function TabsComponent() {
                }
                // contentChildren are set
                TabsComponent.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                TabsComponent.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    // activate the tab the user has clicked on.
                    tab.active = true;
                };
                return TabsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"])
            ], TabsComponent.prototype, "tabs", void 0);
            TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tabs',
                    template: "\n    <nav class=\"flex flex-col sm:flex-row border-grey-900 border-b\">\n      <button *ngFor=\"let tab of tabs\"  (click)=\"selectTab(tab)\" [ngClass]=\"{'active-tab': tab.active === true, 'nonactive-tab': tab.active === false }\" class=\"py-2 px-6 block  focus:outline-none text-blue-bca font-18 font-weight-600\"> {{tab.title}} </button>\n    </nav>\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    .active-tab {\n      border-top-width : 4px;\n      border-bottom-width: 1px;\n      border-left-width: 1px;\n      border-right-width: 1px;\n      border-color: #005CAB;\n    }\n\n    .nonactive-tab {\n      border-top-width : 0px;\n      border-bottom-width: 0px;\n      border-left-width: 0px;\n      border-right-width: 0px;\n      background-color: #D8D8D8;\n    }\n\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    "]
                })
            ], TabsComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/user-dropdown/user-dropdown.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/shared/components/user-dropdown/user-dropdown.component.ts ***!
          \****************************************************************************/
        /*! exports provided: UserDropdownComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function () { return UserDropdownComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../confirmdialog/confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/storage-util.service */ "./src/app/shared/utils/storage-util.service.ts");
            var UserDropdownComponent = /** @class */ (function () {
                function UserDropdownComponent(confirmationService, router, el) {
                    this.confirmationService = confirmationService;
                    this.router = router;
                    this.el = el;
                    this.dropdownPopoverShow = false;
                    this.popper = document.createElement('div');
                    this.userDomainKey = "userdomain";
                    this.changeImg = true;
                    if (_utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__["StorageUtilService"].hasItem(this.userDomainKey)) {
                        this.credentials = _utils_storage_util_service__WEBPACK_IMPORTED_MODULE_4__["StorageUtilService"].getItem('userdomain');
                        // console.log(this.credentials );
                    }
                }
                UserDropdownComponent.prototype.ngOnInit = function () {
                    //     this.popper.innerHTML = `<div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" #popoverDropdownRef>
                    //   <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
                    //     Action
                    //   </a>
                    //   <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
                    //     Another action
                    //   </a>
                    //   <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
                    //     Something else here
                    //   </a>
                    //   <div class="h-0 my-2 border border-solid border-gray-200"></div>
                    //   <a href="#" id="logout" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
                    //     SIGN OUT
                    //   </a>
                    // </div>`;
                    if (this.credentials !== undefined) {
                        this.username = this.credentials.user_name;
                        this.code = this.credentials.branch_code + ' - ' + this.credentials.user_domain;
                        if (this.credentials.avatar !== '') {
                            this.avatar = this.credentials.avatar;
                            this.changeImg = false;
                        }
                        else {
                            this.changeImg = true;
                        }
                    }
                };
                UserDropdownComponent.prototype.ngAfterViewChecked = function () {
                    // if (this.el.nativeElement.querySelector("#logout")) {
                    //   console.log(this.el);
                    //   this.el.nativeElement
                    //     .querySelector("#logout")
                    //     .addEventListener("click", this.onLogout());
                    // }
                };
                UserDropdownComponent.prototype.actionTo = function () {
                    var x = document.getElementById('myP1');
                    if (x.style.display === 'none') {
                        x.style.display = 'block';
                    }
                    else {
                        x.style.display = 'none';
                    }
                };
                // toggleDropdown(event) {
                //   event.preventDefault();
                //   if (this.dropdownPopoverShow) {
                //     this.dropdownPopoverShow = false;
                //     this.destroyPopper();
                //   } else {
                //     this.dropdownPopoverShow = true;
                //     this.createPoppper();
                //   }
                // }
                // destroyPopper() {
                //   this.popper.parentNode.removeChild(this.popper);
                // }
                // createPoppper() {
                //   new Popper(this.btnDropdownRef.nativeElement, this.popper, {
                //     placement: 'bottom-end',
                //   });
                //   this.btnDropdownRef.nativeElement.parentNode.insertBefore(
                //     this.popper,
                //     this.btnDropdownRef.nativeElement.nextSibling
                //   );
                // }
                UserDropdownComponent.prototype.onLogout = function () {
                    var _this = this;
                    // console.log('masuk');
                    document.getElementById('myP1').style.display = 'none';
                    this.confirmationService.confirm({
                        icon: './assets/img/Info_Circle.png',
                        acceptIcon: null,
                        rejectIcon: null,
                        rejectVisible: true,
                        acceptVisible: true,
                        acceptLabel: 'YA',
                        rejectLabel: 'TIDAK',
                        header: '',
                        message: 'Lanjut Sign Out',
                        closable: false,
                        accept: function () {
                            _this.router.navigate(['/auth/login']);
                        },
                        reject: function () {
                            document.getElementById('myP1').style.display = 'none';
                        }
                    });
                };
                return UserDropdownComponent;
            }());
            UserDropdownComponent.ctorParameters = function () { return [
                { type: _confirmdialog_confirmationservice__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnDropdownRef', { static: false })
            ], UserDropdownComponent.prototype, "btnDropdownRef", void 0);
            UserDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-dropdown',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-dropdown/user-dropdown.component.html")).default,
                })
            ], UserDropdownComponent);
            // note
            // <a style="cursor:pointer" (click)="onLogout()" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
            // SIGN OUT
            // </a>
            /***/ 
        }),
        /***/ "./src/app/shared/confirmdialog/confirmationservice.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/shared/confirmdialog/confirmationservice.ts ***!
          \*************************************************************/
        /*! exports provided: ConfirmationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function () { return ConfirmationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ConfirmationService = /** @class */ (function () {
                function ConfirmationService() {
                    this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
                    this.accept = this.acceptConfirmationSource.asObservable();
                }
                ConfirmationService.prototype.confirm = function (confirmation) {
                    this.requireConfirmationSource.next(confirmation);
                    return this;
                };
                ConfirmationService.prototype.close = function () {
                    this.requireConfirmationSource.next(null);
                    return this;
                };
                ConfirmationService.prototype.onAccept = function () {
                    this.acceptConfirmationSource.next();
                };
                return ConfirmationService;
            }());
            ConfirmationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ConfirmationService);
            /***/ 
        }),
        /***/ "./src/app/shared/confirmdialog/confirmdialog.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/confirmdialog/confirmdialog.ts ***!
          \*******************************************************/
        /*! exports provided: ConfirmDialogCustom, ConfirmDialogCustomModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogCustom", function () { return ConfirmDialogCustom; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogCustomModule", function () { return ConfirmDialogCustomModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            /* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/button */ "./src/app/shared/button/button.ts");
            /* harmony import */ var _confirmationservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmationservice */ "./src/app/shared/confirmdialog/confirmationservice.ts");
            var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "{{transform}}", opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("{{transition}}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "none", opacity: 1 })),
            ]);
            var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("{{transition}}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "{{transform}}", opacity: 0 })),
            ]);
            var ConfirmDialogCustom = /** @class */ (function () {
                function ConfirmDialogCustom(el, renderer, confirmationService, zone, cd) {
                    var _this = this;
                    this.el = el;
                    this.renderer = renderer;
                    this.confirmationService = confirmationService;
                    this.zone = zone;
                    this.cd = cd;
                    this.acceptIcon = "pi pi-check";
                    this.acceptLabel = "Yes";
                    this.acceptVisible = true;
                    this.rejectIcon = "pi pi-times";
                    this.rejectLabel = "No";
                    this.rejectVisible = true;
                    this.closeOnEscape = true;
                    this.blockScroll = true;
                    this.closable = true;
                    this.autoZIndex = true;
                    this.baseZIndex = 0;
                    this.transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
                    this.focusTrap = true;
                    this.defaultFocus = "accept";
                    this._position = "center";
                    this.transformOptions = "scale(0.7)";
                    this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
                        if (!confirmation) {
                            _this.hide();
                            return;
                        }
                        if (confirmation.key === _this.key) {
                            _this.confirmation = confirmation;
                            _this.confirmationOptions = {
                                message: _this.confirmation.message || _this.message,
                                icon: _this.confirmation.icon || _this.icon,
                                header: _this.confirmation.header || _this.header,
                                rejectVisible: _this.confirmation.rejectVisible == null
                                    ? _this.rejectVisible
                                    : _this.confirmation.rejectVisible,
                                acceptVisible: _this.confirmation.acceptVisible == null
                                    ? _this.acceptVisible
                                    : _this.confirmation.acceptVisible,
                                acceptLabel: _this.confirmation.acceptLabel || _this.acceptLabel,
                                rejectLabel: _this.confirmation.rejectLabel || _this.rejectLabel,
                                acceptIcon: _this.confirmation.acceptIcon || _this.acceptIcon,
                                rejectIcon: _this.confirmation.rejectIcon || _this.rejectIcon,
                                acceptButtonStyleClass: _this.confirmation.acceptButtonStyleClass ||
                                    _this.acceptButtonStyleClass,
                                rejectButtonStyleClass: _this.confirmation.rejectButtonStyleClass ||
                                    _this.rejectButtonStyleClass,
                                defaultFocus: _this.confirmation.defaultFocus || _this.defaultFocus,
                                blockScroll: _this.confirmation.blockScroll === false ||
                                    _this.confirmation.blockScroll === true
                                    ? _this.confirmation.blockScroll
                                    : _this.blockScroll,
                                closable: _this.confirmation.closable == null
                                    ? _this.closable
                                    : _this.confirmation.closable,
                            };
                            if (_this.confirmation.accept) {
                                _this.confirmation.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                                _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                            }
                            if (_this.confirmation.reject) {
                                _this.confirmation.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                                _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                            }
                            _this.visible = true;
                        }
                    });
                }
                Object.defineProperty(ConfirmDialogCustom.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        if (this._visible && !this.maskVisible) {
                            this.maskVisible = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ConfirmDialogCustom.prototype, "position", {
                    get: function () {
                        return this._position;
                    },
                    set: function (value) {
                        this._position = value;
                        switch (value) {
                            case "topleft":
                            case "bottomleft":
                            case "left":
                                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                                break;
                            case "topright":
                            case "bottomright":
                            case "right":
                                this.transformOptions = "translate3d(100%, 0px, 0px)";
                                break;
                            case "bottom":
                                this.transformOptions = "translate3d(0px, 100%, 0px)";
                                break;
                            case "top":
                                this.transformOptions = "translate3d(0px, -100%, 0px)";
                                break;
                            default:
                                this.transformOptions = "scale(0.7)";
                                break;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfirmDialogCustom.prototype.option = function (name) {
                    var source = this.confirmationOptions || this;
                    if (source.hasOwnProperty(name)) {
                        return source[name];
                    }
                    return undefined;
                };
                ConfirmDialogCustom.prototype.onAnimationStart = function (event) {
                    switch (event.toState) {
                        case "visible":
                            this.container = event.element;
                            this.wrapper = this.container.parentElement;
                            this.contentContainer = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, ".ui-dialog-content");
                            var element = this.getElementToFocus();
                            if (element) {
                                element.focus();
                            }
                            this.appendContainer();
                            this.moveOnTop();
                            this.bindGlobalListeners();
                            this.enableModality();
                            break;
                    }
                };
                ConfirmDialogCustom.prototype.onAnimationEnd = function (event) {
                    switch (event.toState) {
                        case "void":
                            this.onOverlayHide();
                            break;
                    }
                };
                ConfirmDialogCustom.prototype.getElementToFocus = function () {
                    switch (this.option("defaultFocus")) {
                        case "accept":
                            return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, "button.ui-confirmdialog-acceptbutton");
                        case "reject":
                            return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, "button.ui-confirmdialog-rejectbutton");
                        case "close":
                            return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, "a.ui-dialog-titlebar-close");
                        case "none":
                            return null;
                        //backward compatibility
                        default:
                            return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, "button.ui-confirmdialog-acceptbutton");
                    }
                };
                ConfirmDialogCustom.prototype.appendContainer = function () {
                    if (this.appendTo) {
                        if (this.appendTo === "body")
                            document.body.appendChild(this.wrapper);
                        else
                            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.wrapper, this.appendTo);
                    }
                };
                ConfirmDialogCustom.prototype.restoreAppend = function () {
                    if (this.wrapper && this.appendTo) {
                        this.el.nativeElement.appendChild(this.wrapper);
                    }
                };
                ConfirmDialogCustom.prototype.enableModality = function () {
                    if (this.option("blockScroll")) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, "ui-overflow-hidden");
                    }
                };
                ConfirmDialogCustom.prototype.disableModality = function () {
                    this.maskVisible = false;
                    if (this.option("blockScroll")) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, "ui-overflow-hidden");
                    }
                    if (this.container) {
                        this.cd.detectChanges();
                    }
                };
                ConfirmDialogCustom.prototype.close = function (event) {
                    if (this.confirmation.rejectEvent) {
                        this.confirmation.rejectEvent.emit();
                    }
                    this.hide();
                    event.preventDefault();
                };
                ConfirmDialogCustom.prototype.hide = function () {
                    this.visible = false;
                    this.confirmation = null;
                    this.confirmationOptions = null;
                };
                ConfirmDialogCustom.prototype.moveOnTop = function () {
                    if (this.autoZIndex) {
                        this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                        this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex - 1));
                    }
                };
                ConfirmDialogCustom.prototype.getMaskClass = function () {
                    var maskClass = {
                        "ui-widget-overlay ui-dialog-mask": true,
                        "ui-dialog-visible": this.maskVisible,
                        "ui-dialog-mask-scrollblocker": this.blockScroll,
                    };
                    maskClass[this.getPositionClass().toString()] = true;
                    return maskClass;
                };
                ConfirmDialogCustom.prototype.getPositionClass = function () {
                    var _this = this;
                    var positions = [
                        "left",
                        "right",
                        "top",
                        "topleft",
                        "topright",
                        "bottom",
                        "bottomleft",
                        "bottomright",
                    ];
                    var pos = positions.find(function (item) { return item === _this.position; });
                    return pos ? "ui-dialog-" + pos : "";
                };
                ConfirmDialogCustom.prototype.bindGlobalListeners = function () {
                    var _this = this;
                    if ((this.closeOnEscape && this.option('closable')) ||
                        (this.focusTrap && !this.documentEscapeListener)) {
                        this.documentEscapeListener = this.renderer.listen("document", "keydown", function (event) {
                            if (event.which == 27 && _this.closeOnEscape && _this.option('closable')) {
                                if (parseInt(_this.container.style.zIndex) ===
                                    primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex + _this.baseZIndex &&
                                    _this.visible) {
                                    _this.close(event);
                                }
                            }
                            if (event.which === 9 && _this.focusTrap) {
                                event.preventDefault();
                                var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(_this.container);
                                if (focusableElements && focusableElements.length > 0) {
                                    if (!document.activeElement) {
                                        focusableElements[0].focus();
                                    }
                                    else {
                                        var focusedIndex = focusableElements.indexOf(document.activeElement);
                                        if (event.shiftKey) {
                                            if (focusedIndex == -1 || focusedIndex === 0)
                                                focusableElements[focusableElements.length - 1].focus();
                                            else
                                                focusableElements[focusedIndex - 1].focus();
                                        }
                                        else {
                                            if (focusedIndex == -1 ||
                                                focusedIndex === focusableElements.length - 1)
                                                focusableElements[0].focus();
                                            else
                                                focusableElements[focusedIndex + 1].focus();
                                        }
                                    }
                                }
                            }
                        });
                    }
                };
                ConfirmDialogCustom.prototype.unbindGlobalListeners = function () {
                    if (this.documentEscapeListener) {
                        this.documentEscapeListener();
                        this.documentEscapeListener = null;
                    }
                };
                ConfirmDialogCustom.prototype.onOverlayHide = function () {
                    this.disableModality();
                    this.unbindGlobalListeners();
                    this.container = null;
                };
                ConfirmDialogCustom.prototype.ngOnDestroy = function () {
                    // this.restoreAppend();
                    // this.onOverlayHide();
                    this.subscription.unsubscribe();
                    // this.cd.detach();
                };
                ConfirmDialogCustom.prototype.ngOnInit = function () {
                    this.restoreAppend();
                    this.onOverlayHide();
                    this.cd.detectChanges();
                };
                ConfirmDialogCustom.prototype.accept = function () {
                    if (this.confirmation.acceptEvent) {
                        this.confirmation.acceptEvent.emit();
                    }
                    this.hide();
                };
                ConfirmDialogCustom.prototype.reject = function () {
                    if (this.confirmation.rejectEvent) {
                        this.confirmation.rejectEvent.emit();
                    }
                    this.hide();
                };
                return ConfirmDialogCustom;
            }());
            ConfirmDialogCustom.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _confirmationservice__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "header", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "icon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "message", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "style", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "styleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "maskStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "acceptIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "acceptLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "acceptVisible", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "rejectIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "rejectLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "rejectVisible", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "acceptButtonStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "rejectButtonStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "closeOnEscape", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "blockScroll", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "rtl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "closable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "appendTo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "key", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "autoZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "baseZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "transitionOptions", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "focusTrap", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "defaultFocus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "visible", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ConfirmDialogCustom.prototype, "position", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"], { static: true })
            ], ConfirmDialogCustom.prototype, "footer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", { static: true })
            ], ConfirmDialogCustom.prototype, "contentViewChild", void 0);
            ConfirmDialogCustom = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "p-confirmDialog",
                    template: "\n    <div\n      [class]=\"maskStyleClass\"\n      [ngClass]=\"getMaskClass()\"\n      *ngIf=\"maskVisible\"\n    >\n      <div\n        [ngClass]=\"{\n          'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow': true,\n          'ui-dialog-rtl': rtl\n        }\"\n        [ngStyle]=\"style\"\n        [class]=\"styleClass\"\n        (mousedown)=\"moveOnTop()\"\n        [@animation]=\"{\n          value: 'visible',\n          params: { transform: transformOptions, transition: transitionOptions }\n        }\"\n        (@animation.start)=\"onAnimationStart($event)\"\n        (@animation.done)=\"onAnimationEnd($event)\"\n        *ngIf=\"visible\"\n      >\n        <div\n          class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\"\n        >\n          <span class=\"ui-dialog-title\" *ngIf=\"option('header')\">{{\n            option(\"header\")\n          }}</span>\n          <div class=\"ui-dialog-titlebar-icons\">\n            <a\n              *ngIf=\"option('closable')\"\n              [ngClass]=\"{\n                'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all': true\n              }\"\n              tabindex=\"0\"\n              role=\"button\"\n              (click)=\"close($event)\"\n              (keydown.enter)=\"close($event)\"\n            >\n            <img\n\n            width=\"22.88px\"\n            height=\"3.52px\"\n            [src]=\"'./assets/img/Close.png'\"\n\n          />\n\n            </a>\n          </div>\n        </div>\n        <div\n          #content\n          class=\"flex flex-col items-center ui-dialog-content ui-widget-content\"\n        >\n          <img\n            class=\"mb-8\"\n            width=\"104px\"\n            height=\"104px\"\n            [src]=\"option('icon')\"\n            *ngIf=\"option('icon')\"\n          />\n\n          <span\n            class=\"text-center ui-confirmdialog-message\" style=\"font-size : 20px; font-weight : 400; \"\n            [innerHTML]=\"option('message')\"\n          ></span>\n        </div>\n        <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n          <ng-content select=\"p-footer\"></ng-content>\n        </div>\n        <div\n          class=\"flex justify-center ui-dialog-footer ui-widget-content\"\n          style=\"padding-bottom : 20px\"\n          *ngIf=\"!footer\"\n        >\n          <button\n            type=\"button\"\n            qButton\n            [label]=\"option('rejectLabel')\"\n            (click)=\"reject()\"\n            class=\"bg-transparent outline-none focus:outline-none  text-secondary-bca font-16 font-bold border-2 border-secondary-blue rounded-full\"\n            style=\"height: 40px; width: 120px\"\n            *ngIf=\"option('rejectVisible')\"\n          ></button>\n\n          <button\n            class=\"secondary-blue text-white font-bold font-16 py-2 px-4 rounded-full mb-20\"\n            type=\"button\"\n            style=\"transition: all 0.15s ease 0s; height: 40px; width: 120px\"\n            *ngIf=\"option('acceptVisible')\"\n            (click)=\"accept()\"\n            qButton\n            [label]=\"option('acceptLabel')\"\n          ></button>\n        </div>\n      </div>\n    </div>\n  ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("animation", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => visible", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("visible => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)]),
                        ]),
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                })
            ], ConfirmDialogCustom);
            var ConfirmDialogCustomModule = /** @class */ (function () {
                function ConfirmDialogCustomModule() {
                }
                return ConfirmDialogCustomModule;
            }());
            ConfirmDialogCustomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonCustomModule"]],
                    exports: [ConfirmDialogCustom, _button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonCustomModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
                    declarations: [ConfirmDialogCustom],
                })
            ], ConfirmDialogCustomModule);
            /***/ 
        }),
        /***/ "./src/app/shared/dialog/dialog.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/dialog/dialog.ts ***!
          \*****************************************/
        /*! exports provided: OgyaDialog, OgyaDialogModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgyaDialog", function () { return OgyaDialog; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgyaDialogModule", function () { return OgyaDialogModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            /* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ "./node_modules/primeng/fesm2015/primeng-focustrap.js");
            var idx = 0;
            var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: '{{transform}}', opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none', opacity: 1 }))
            ]);
            var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: '{{transform}}', opacity: 0 }))
            ]);
            var OgyaDialog = /** @class */ (function () {
                function OgyaDialog(el, renderer, zone, cd) {
                    this.el = el;
                    this.renderer = renderer;
                    this.zone = zone;
                    this.cd = cd;
                    this.draggable = true;
                    this.resizable = true;
                    this.closeOnEscape = true;
                    this.closable = true;
                    this.showHeader = true;
                    this.blockScroll = false;
                    this.autoZIndex = true;
                    this.baseZIndex = 0;
                    this.minX = 0;
                    this.minY = 0;
                    this.focusOnShow = true;
                    this.keepInViewport = true;
                    this.focusTrap = true;
                    this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
                    this.closeIcon = 'pi pi-times';
                    this.minimizeIcon = 'pi pi-window-minimize';
                    this.maximizeIcon = 'pi pi-window-maximize';
                    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.id = "ui-dialog-" + idx++;
                    this._style = {};
                    this._position = "center";
                    this.transformOptions = "scale(0.7)";
                }
                Object.defineProperty(OgyaDialog.prototype, "positionLeft", {
                    get: function () {
                        return 0;
                    },
                    set: function (_positionLeft) {
                        console.log("positionLeft property is deprecated.");
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(OgyaDialog.prototype, "positionTop", {
                    get: function () {
                        return 0;
                    },
                    set: function (_positionTop) {
                        console.log("positionTop property is deprecated.");
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(OgyaDialog.prototype, "responsive", {
                    get: function () {
                        return false;
                    },
                    set: function (_responsive) {
                        console.log("Responsive property is deprecated.");
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(OgyaDialog.prototype, "breakpoint", {
                    get: function () {
                        return 649;
                    },
                    set: function (_breakpoint) {
                        console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(OgyaDialog.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        if (this._visible && !this.maskVisible) {
                            this.maskVisible = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OgyaDialog.prototype, "style", {
                    get: function () {
                        return this._style;
                    },
                    set: function (value) {
                        if (value) {
                            this._style = Object.assign({}, value);
                            this.originalStyle = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OgyaDialog.prototype, "position", {
                    get: function () {
                        return this._position;
                    },
                    set: function (value) {
                        this._position = value;
                        switch (value) {
                            case 'topleft':
                            case 'bottomleft':
                            case 'left':
                                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                                break;
                            case 'topright':
                            case 'bottomright':
                            case 'right':
                                this.transformOptions = "translate3d(100%, 0px, 0px)";
                                break;
                            case 'bottom':
                                this.transformOptions = "translate3d(0px, 100%, 0px)";
                                break;
                            case 'top':
                                this.transformOptions = "translate3d(0px, -100%, 0px)";
                                break;
                            default:
                                this.transformOptions = "scale(0.7)";
                                break;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                OgyaDialog.prototype.focus = function () {
                    var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'button');
                    if (focusable) {
                        this.zone.runOutsideAngular(function () {
                            setTimeout(function () { return focusable.focus(); }, 5);
                        });
                    }
                };
                OgyaDialog.prototype.close = function (event) {
                    this.visibleChange.emit(false);
                    event.preventDefault();
                };
                OgyaDialog.prototype.enableModality = function () {
                    var _this = this;
                    if (this.closable && this.dismissableMask) {
                        this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
                            if (_this.wrapper && _this.wrapper.isSameNode(event.target)) {
                                _this.close(event);
                            }
                        });
                    }
                    if (this.modal) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                    }
                };
                OgyaDialog.prototype.disableModality = function () {
                    if (this.wrapper) {
                        if (this.dismissableMask) {
                            this.unbindMaskClickListener();
                        }
                        if (this.modal) {
                            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
                        }
                        if (!this.cd.destroyed) {
                            this.cd.detectChanges();
                        }
                    }
                };
                OgyaDialog.prototype.maximize = function () {
                    this.maximized = !this.maximized;
                    if (!this.modal && !this.blockScroll) {
                        if (this.maximized)
                            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                        else
                            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
                    }
                };
                OgyaDialog.prototype.unbindMaskClickListener = function () {
                    if (this.maskClickListener) {
                        this.maskClickListener();
                        this.maskClickListener = null;
                    }
                };
                OgyaDialog.prototype.moveOnTop = function () {
                    if (this.autoZIndex) {
                        this.container.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex));
                        this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex - 1));
                    }
                };
                OgyaDialog.prototype.initDrag = function (event) {
                    if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-dialog-titlebar-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target.parentElement, 'ui-dialog-titlebar-icon')) {
                        return;
                    }
                    if (this.draggable) {
                        this.dragging = true;
                        this.lastPageX = event.pageX;
                        this.lastPageY = event.pageY;
                        this.container.style.margin = '0';
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
                    }
                };
                OgyaDialog.prototype.onKeydown = function (event) {
                    if (this.focusTrap) {
                        if (event.which === 9) {
                            event.preventDefault();
                            var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(this.container);
                            if (focusableElements && focusableElements.length > 0) {
                                if (!document.activeElement) {
                                    focusableElements[0].focus();
                                }
                                else {
                                    var focusedIndex = focusableElements.indexOf(document.activeElement);
                                    if (event.shiftKey) {
                                        if (focusedIndex == -1 || focusedIndex === 0)
                                            focusableElements[focusableElements.length - 1].focus();
                                        else
                                            focusableElements[focusedIndex - 1].focus();
                                    }
                                    else {
                                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                            focusableElements[0].focus();
                                        else
                                            focusableElements[focusedIndex + 1].focus();
                                    }
                                }
                            }
                        }
                    }
                };
                OgyaDialog.prototype.onDrag = function (event) {
                    if (this.dragging) {
                        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
                        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
                        var deltaX = event.pageX - this.lastPageX;
                        var deltaY = event.pageY - this.lastPageY;
                        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.container);
                        var leftPos = offset.left + deltaX;
                        var topPos = offset.top + deltaY;
                        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getViewport();
                        this.container.style.position = 'fixed';
                        if (this.keepInViewport) {
                            if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                                this._style.left = leftPos + 'px';
                                this.lastPageX = event.pageX;
                                this.container.style.left = leftPos + 'px';
                            }
                            if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                                this._style.top = topPos + 'px';
                                this.lastPageY = event.pageY;
                                this.container.style.top = topPos + 'px';
                            }
                        }
                        else {
                            this.lastPageX = event.pageX;
                            this.container.style.left = leftPos + 'px';
                            this.lastPageY = event.pageY;
                            this.container.style.top = topPos + 'px';
                        }
                    }
                };
                OgyaDialog.prototype.endDrag = function (event) {
                    if (this.dragging) {
                        this.dragging = false;
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
                        this.cd.detectChanges();
                        this.onDragEnd.emit(event);
                    }
                };
                OgyaDialog.prototype.resetPosition = function () {
                    this.container.style.position = '';
                    this.container.style.left = '';
                    this.container.style.top = '';
                    this.container.style.margin = '';
                };
                //backward compatibility
                OgyaDialog.prototype.center = function () {
                    this.resetPosition();
                };
                OgyaDialog.prototype.initResize = function (event) {
                    if (this.resizable) {
                        this.resizing = true;
                        this.lastPageX = event.pageX;
                        this.lastPageY = event.pageY;
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
                        this.onResizeInit.emit(event);
                    }
                };
                OgyaDialog.prototype.onResize = function (event) {
                    if (this.resizing) {
                        var deltaX = event.pageX - this.lastPageX;
                        var deltaY = event.pageY - this.lastPageY;
                        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
                        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
                        var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
                        var newWidth = containerWidth + deltaX;
                        var newHeight = containerHeight + deltaY;
                        var minWidth = this.container.style.minWidth;
                        var minHeight = this.container.style.minHeight;
                        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.container);
                        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getViewport();
                        var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
                        if (hasBeenDragged) {
                            newWidth += deltaX;
                            newHeight += deltaY;
                        }
                        if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                            this._style.width = newWidth + 'px';
                            this.container.style.width = this._style.width;
                        }
                        if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                            this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
                            if (this._style.height) {
                                this._style.height = newHeight + 'px';
                                this.container.style.height = this._style.height;
                            }
                        }
                        this.lastPageX = event.pageX;
                        this.lastPageY = event.pageY;
                    }
                };
                OgyaDialog.prototype.resizeEnd = function (event) {
                    if (this.resizing) {
                        this.resizing = false;
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
                        this.onResizeEnd.emit(event);
                    }
                };
                OgyaDialog.prototype.bindGlobalListeners = function () {
                    if (this.draggable) {
                        this.bindDocumentDragListener();
                        this.bindDocumentDragEndListener();
                    }
                    if (this.resizable) {
                        this.bindDocumentResizeListeners();
                    }
                    if (this.closeOnEscape && this.closable) {
                        this.bindDocumentEscapeListener();
                    }
                };
                OgyaDialog.prototype.unbindGlobalListeners = function () {
                    this.unbindDocumentDragListener();
                    this.unbindDocumentDragEndListener();
                    this.unbindDocumentResizeListeners();
                    this.unbindDocumentEscapeListener();
                };
                OgyaDialog.prototype.bindDocumentDragListener = function () {
                    var _this = this;
                    this.zone.runOutsideAngular(function () {
                        _this.documentDragListener = _this.onDrag.bind(_this);
                        window.document.addEventListener('mousemove', _this.documentDragListener);
                    });
                };
                OgyaDialog.prototype.unbindDocumentDragListener = function () {
                    if (this.documentDragListener) {
                        window.document.removeEventListener('mousemove', this.documentDragListener);
                        this.documentDragListener = null;
                    }
                };
                OgyaDialog.prototype.bindDocumentDragEndListener = function () {
                    var _this = this;
                    this.zone.runOutsideAngular(function () {
                        _this.documentDragEndListener = _this.endDrag.bind(_this);
                        window.document.addEventListener('mouseup', _this.documentDragEndListener);
                    });
                };
                OgyaDialog.prototype.unbindDocumentDragEndListener = function () {
                    if (this.documentDragEndListener) {
                        window.document.removeEventListener('mouseup', this.documentDragEndListener);
                        this.documentDragEndListener = null;
                    }
                };
                OgyaDialog.prototype.bindDocumentResizeListeners = function () {
                    var _this = this;
                    this.zone.runOutsideAngular(function () {
                        _this.documentResizeListener = _this.onResize.bind(_this);
                        _this.documentResizeEndListener = _this.resizeEnd.bind(_this);
                        window.document.addEventListener('mousemove', _this.documentResizeListener);
                        window.document.addEventListener('mouseup', _this.documentResizeEndListener);
                    });
                };
                OgyaDialog.prototype.unbindDocumentResizeListeners = function () {
                    if (this.documentResizeListener && this.documentResizeEndListener) {
                        window.document.removeEventListener('mousemove', this.documentResizeListener);
                        window.document.removeEventListener('mouseup', this.documentResizeEndListener);
                        this.documentResizeListener = null;
                        this.documentResizeEndListener = null;
                    }
                };
                OgyaDialog.prototype.bindDocumentEscapeListener = function () {
                    var _this = this;
                    this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
                        if (event.which == 27) {
                            if (parseInt(_this.container.style.zIndex) === (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex + _this.baseZIndex)) {
                                _this.close(event);
                            }
                        }
                    });
                };
                OgyaDialog.prototype.unbindDocumentEscapeListener = function () {
                    if (this.documentEscapeListener) {
                        this.documentEscapeListener();
                        this.documentEscapeListener = null;
                    }
                };
                OgyaDialog.prototype.appendContainer = function () {
                    if (this.appendTo) {
                        if (this.appendTo === 'body')
                            document.body.appendChild(this.wrapper);
                        else
                            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.wrapper, this.appendTo);
                    }
                };
                OgyaDialog.prototype.restoreAppend = function () {
                    if (this.container && this.appendTo) {
                        this.el.nativeElement.appendChild(this.wrapper);
                    }
                };
                OgyaDialog.prototype.onAnimationStart = function (event) {
                    switch (event.toState) {
                        case 'visible':
                            this.container = event.element;
                            this.wrapper = this.container.parentElement;
                            this.onShow.emit({});
                            this.appendContainer();
                            this.moveOnTop();
                            this.bindGlobalListeners();
                            if (this.modal) {
                                this.enableModality();
                            }
                            if (!this.modal && this.blockScroll) {
                                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                            }
                            if (this.focusOnShow) {
                                this.focus();
                            }
                            break;
                    }
                };
                OgyaDialog.prototype.onAnimationEnd = function (event) {
                    switch (event.toState) {
                        case 'void':
                            this.onContainerDestroy();
                            this.onHide.emit({});
                            break;
                    }
                };
                OgyaDialog.prototype.onContainerDestroy = function () {
                    this.unbindGlobalListeners();
                    this.dragging = false;
                    this.maskVisible = false;
                    if (this.maximized) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
                        this.maximized = false;
                    }
                    if (this.modal) {
                        this.disableModality();
                    }
                    if (this.blockScroll) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
                    }
                    this.container = null;
                    this.wrapper = null;
                    this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
                };
                OgyaDialog.prototype.ngOnDestroy = function () {
                    if (this.container) {
                        this.restoreAppend();
                        this.onContainerDestroy();
                    }
                };
                return OgyaDialog;
            }());
            OgyaDialog.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "header", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "draggable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "resizable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "positionLeft", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "positionTop", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "contentStyle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "contentStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "modal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "closeOnEscape", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "dismissableMask", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "rtl", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "closable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "responsive", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "appendTo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "styleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "maskStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "showHeader", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "breakpoint", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "blockScroll", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "autoZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "baseZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "minX", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "minY", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "focusOnShow", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "maximizable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "keepInViewport", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "focusTrap", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "transitionOptions", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "closeIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "minimizeIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "maximizeIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Header"], { descendants: false })
            ], OgyaDialog.prototype, "headerFacet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"], { descendants: false })
            ], OgyaDialog.prototype, "footerFacet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titlebar', { static: true })
            ], OgyaDialog.prototype, "headerViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true })
            ], OgyaDialog.prototype, "contentViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer', { static: true })
            ], OgyaDialog.prototype, "footerViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "onShow", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "onHide", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "visibleChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "onResizeInit", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "onResizeEnd", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], OgyaDialog.prototype, "onDragEnd", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "visible", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "style", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OgyaDialog.prototype, "position", null);
            OgyaDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'o-dialog',
                    template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\" \n            [ngClass]=\"{'ui-dialog-mask': true, 'ui-widget-overlay': this.modal, 'ui-dialog-visible': this.maskVisible, 'ui-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'ui-dialog-left': position === 'left',\n                'ui-dialog-right': position === 'right',\n                'ui-dialog-top': position === 'top',\n                'ui-dialog-topleft': position === 'topleft',\n                'ui-dialog-topright': position === 'topright',\n                'ui-dialog-bottom': position === 'bottom',\n                'ui-dialog-bottomleft': position === 'bottomleft',\n                'ui-dialog-bottomright': position === 'bottomright'}\" >\n            <div #container [ngClass]=\"{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable,'ui-dialog-resizable':resizable, 'ui-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"headerFacet && headerFacet.first\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <div class=\"ui-dialog-titlebar-icons\">\n                        <a *ngIf=\"maximizable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\">\n                            <span [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </a>\n                        <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                           \n                            <img\n\n            width=\"28px\"\n            height=\"28px\"\n            [src]=\"'./assets/img/Close.png'\"\n\n          />\n                        </a>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'ui-dialog-content ui-widget-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                </div>\n                <div #footer class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footerFacet && footerFacet.first\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n                <div *ngIf=\"resizable\" class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)
                            ])
                        ])
                    ],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
                })
            ], OgyaDialog);
            var OgyaDialogModule = /** @class */ (function () {
                function OgyaDialogModule() {
                }
                return OgyaDialogModule;
            }());
            OgyaDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__["FocusTrapModule"]],
                    exports: [OgyaDialog, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
                    declarations: [OgyaDialog]
                })
            ], OgyaDialogModule);
            /***/ 
        }),
        /***/ "./src/app/shared/directives/image-popup/css/style.css": 
        /*!*************************************************************!*\
          !*** ./src/app/shared/directives/image-popup/css/style.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".ng-gallery {\n    width: 100%;\n    display: inline-block;\n  }\n  \n  img.ng-thumb {\n    height: 50px;\n    float: left;\n    display: block;\n    cursor: pointer;\n    margin: 2px 2px 0 0; \n  }\n  \n  .ng-overlay { \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,0.8);\n    /*opacity: 0.85;*/\n    z-index: 9999;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-user-drag: none;\n  }\n  \n  .ng-gallery-content { \n    /* position: fixed; */\n    top: 40%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    /* z-index: 10000; */\n    text-align: center; \n  }\n  \n  .ng-gallery-content > a.close-popup {\n    font-size: 42px;\n    float: right;\n    color: #fff;\n    text-decoration: none;\n    margin: 0 30px 0 0;\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 0;\n  }\n  \n  .ng-gallery-content > a.download-image {\n    font-size: 42px;\n    float: right;\n    color: #fff;\n    text-decoration: none;\n    margin: 0 30px 0 0;\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n    right: 63px;\n  }\n  \n  .ng-gallery-content > a.nav-left, .ng-gallery-content > a.nav-right {\n    color: #fff;\n    text-decoration: none;\n    font-size: 60px;\n    cursor: pointer;\n    outline: none;\n  }\n  \n  .ng-gallery-content > a.nav-left {\n    position: fixed;\n    left: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  \n  .ng-gallery-content > a.nav-right {\n    position: fixed;\n    right: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  \n  .ng-gallery-content > img {\n    height: 440px;\n    max-height: calc(100% - 150px);\n    max-width: calc(100% - 100px);\n    position: relative; \n    display: block;\n    margin: 0 auto 0 auto;\n    top: 70%; \n    /* transform: translateY(-50%); */\n    /* -webkit-transform: translateY(-50%); */\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-user-drag: none;\n  }\n  \n  .ng-gallery-content > img.effect {\n    -webkit-animation: fadeIn 0.5s;\n            animation: fadeIn 0.5s;\n  }\n  \n  @-webkit-keyframes fadeIn {\n      from { opacity: 0.3; }\n        to { opacity: 1; }\n  }\n  \n  @keyframes fadeIn {\n      from { opacity: 0.3; }\n        to { opacity: 1; }\n  }\n  \n  .ng-gallery-content > span.info-text {\n    color: #fff;\n    display: inline-block;\n    width: 100%;\n    height: 20px;\n    font-weight: bold;\n    text-align: center;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 100px;\n  }\n  \n  span.info-text{\n  \n    margin-top: 2px;\n    padding-left: 112.67px;\n    padding-right: 113.67px;\n\n  }\n  \n  .ng-gallery-content > .ng-thumbnails-wrapper {\n    width: 400px;\n    height: 70px;\n    text-align: center;\n    position: fixed;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    overflow-x: hidden;\n  }\n  \n  .ng-gallery-content > .ng-thumbnails-wrapper > .ng-thumbnails {\n    width: 4000px;\n    height: 70px;\n  }\n  \n  .ng-gallery-content > .ng-thumbnails-wrapper > .ng-thumbnails > div > img {\n    width: auto;\n    height: 70px;\n    float: left;\n    margin-right: 10px;\n    cursor: pointer;\n    opacity: 0.6;\n  }\n  \n  .ng-gallery-content > .ng-thumbnails-wrapper > .ng-thumbnails > div > img:hover, \n  .ng-gallery-content > .ng-thumbnails-wrapper > .ng-thumbnails > div > img.active {\n    transition: opacity 0.25s ease;\n    opacity: 1;\n  }\n  \n  /* Loading - from http://loading.io */\n  \n  uiload {\n    display: inline-block;\n    position: relative; \n  }\n  \n  uiload > div {\n      position: relative; \n  }\n  \n  @-webkit-keyframes uil-ring-anim {\n    0% {\n      transform: rotate(0deg); \n    }\n  \n    100% {\n      transform: rotate(360deg); \n    } \n  }\n  \n  @keyframes uil-ring-anim {\n    0% {\n      transform: rotate(0deg); \n    }\n  \n    100% {\n      transform: rotate(360deg); \n    } \n  }\n  \n  .uil-ring-css {\n    background: none;\n    position: relative;\n    top: 0;\n    margin: 180px auto 0 auto;\n    width: 100px;\n    height: 100px; \n  }\n  \n  .uil-ring-css > div {\n      position: absolute;\n      display: block;\n      width: 80px;\n      height: 80px;\n      top: 20px;\n      left: 20px;\n      border-radius: 40px;\n      box-shadow: 0 6px 0 0 #fff;\n      -webkit-animation: uil-ring-anim 1s linear infinite;\n      animation: uil-ring-anim 1s linear infinite; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpcmVjdGl2ZXMvaW1hZ2UtcG9wdXAvY3NzL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFFekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFFBQVE7SUFDUiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YseUJBQXlCO0lBRXpCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0VBRUE7TUFDSSxPQUFPLFlBQVksRUFBRTtRQUNuQixLQUFLLFVBQVUsRUFBRTtFQUN2Qjs7RUFIQTtNQUNJLE9BQU8sWUFBWSxFQUFFO1FBQ25CLEtBQUssVUFBVSxFQUFFO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtFQUNmOztFQUVBOztJQUVFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCOztFQUV6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaOztFQUlBLHFDQUFxQzs7RUFDckM7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO0lBQ0U7TUFLRSx1QkFBdUI7SUFDekI7O0lBRUE7TUFLRSx5QkFBeUI7SUFDM0I7RUFDRjs7RUFzQ0E7SUFDRTtNQUtFLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUtFLHlCQUF5QjtJQUMzQjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osU0FBUztNQUNULFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsMEJBQTBCO01BRzFCLG1EQUFtRDtNQUVuRCwyQ0FBMkM7RUFDL0MiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlyZWN0aXZlcy9pbWFnZS1wb3B1cC9jc3Mvc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgaW1nLm5nLXRodW1iIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMnB4IDJweCAwIDA7IFxuICB9XG4gIFxuICAubmctb3ZlcmxheSB7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xuICAgIC8qb3BhY2l0eTogMC44NTsqL1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIH1cbiAgXG4gIC5uZy1nYWxsZXJ5LWNvbnRlbnQgeyBcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogei1pbmRleDogMTAwMDA7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGEuY2xvc2UtcG9wdXAge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGEuZG93bmxvYWQtaW1hZ2Uge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogNjNweDtcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGEubmF2LWxlZnQsIC5uZy1nYWxsZXJ5LWNvbnRlbnQgPiBhLm5hdi1yaWdodCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGEubmF2LWxlZnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGEubmF2LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAubmctZ2FsbGVyeS1jb250ZW50ID4gaW1nIHtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgICB0b3A6IDcwJTsgXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAqL1xuICAgIC8qIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgfVxuICBcbiAgLm5nLWdhbGxlcnktY29udGVudCA+IGltZy5lZmZlY3Qge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIGZyb20geyBvcGFjaXR5OiAwLjM7IH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XG4gIH1cbiAgXG4gIC5uZy1nYWxsZXJ5LWNvbnRlbnQgPiBzcGFuLmluZm8tdGV4dCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIHNwYW4uaW5mby10ZXh0e1xuICBcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTIuNjdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMTMuNjdweDtcblxuICB9XG4gIFxuICAubmctZ2FsbGVyeS1jb250ZW50ID4gLm5nLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5uZy1nYWxsZXJ5LWNvbnRlbnQgPiAubmctdGh1bWJuYWlscy13cmFwcGVyID4gLm5nLXRodW1ibmFpbHMge1xuICAgIHdpZHRoOiA0MDAwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gIFxuICAubmctZ2FsbGVyeS1jb250ZW50ID4gLm5nLXRodW1ibmFpbHMtd3JhcHBlciA+IC5uZy10aHVtYm5haWxzID4gZGl2ID4gaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgXG4gIC5uZy1nYWxsZXJ5LWNvbnRlbnQgPiAubmctdGh1bWJuYWlscy13cmFwcGVyID4gLm5nLXRodW1ibmFpbHMgPiBkaXYgPiBpbWc6aG92ZXIsIFxuICAubmctZ2FsbGVyeS1jb250ZW50ID4gLm5nLXRodW1ibmFpbHMtd3JhcHBlciA+IC5uZy10aHVtYm5haWxzID4gZGl2ID4gaW1nLmFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiBcblxuICBcbiAgLyogTG9hZGluZyAtIGZyb20gaHR0cDovL2xvYWRpbmcuaW8gKi9cbiAgdWlsb2FkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgfVxuICBcbiAgdWlsb2FkID4gZGl2IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyB1aWwtcmluZy1hbmltIHtcbiAgICAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IFxuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcbiAgICB9IFxuICB9XG4gIFxuICBALW1vei1rZXlmcmFtZXMgdWlsLXJpbmctYW5pbSB7XG4gICAgMCUge1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyBcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gICAgICB9IFxuICB9XG4gIFxuICBALW1zLWtleWZyYW1lcyB1aWwtcmluZy1hbmltIHtcbiAgICAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IFxuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcbiAgICB9IFxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHVpbC1yaW5nLWFuaW0ge1xuICAgIDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAgIH0gXG4gIH1cbiAgXG4gIC51aWwtcmluZy1jc3Mge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW46IDE4MHB4IGF1dG8gMCBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgfVxuICBcbiAgLnVpbC1yaW5nLWNzcyA+IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgbGVmdDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAwIDAgI2ZmZjtcbiAgICAgIC1tcy1hbmltYXRpb246IHVpbC1yaW5nLWFuaW0gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgLW1vei1hbmltYXRpb246IHVpbC1yaW5nLWFuaW0gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHVpbC1yaW5nLWFuaW0gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgLW8tYW5pbWF0aW9uOiB1aWwtcmluZy1hbmltIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogdWlsLXJpbmctYW5pbSAxcyBsaW5lYXIgaW5maW5pdGU7IFxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/directives/image-popup/image-modal-popup.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/directives/image-popup/image-modal-popup.ts ***!
          \********************************************************************/
        /*! exports provided: default, ImageModal */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _image_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-popup */ "./src/app/shared/directives/image-popup/image-popup.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageModal", function () { return _image_popup__WEBPACK_IMPORTED_MODULE_1__["ImageModal"]; });
            /* harmony default export */ __webpack_exports__["default"] = ({
                directives: [_image_popup__WEBPACK_IMPORTED_MODULE_1__["ImageModal"]]
            });
            /***/ 
        }),
        /***/ "./src/app/shared/directives/image-popup/image-popup.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/directives/image-popup/image-popup.ts ***!
          \**************************************************************/
        /*! exports provided: ImageModal */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModal", function () { return ImageModal; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            //import {Component, Input,Output,ElementRef,EventEmitter,OnInit} from '@angular/core';
            var ImageModal = /** @class */ (function () {
                function ImageModal(element) {
                    this.element = element;
                    this.opened = false;
                    this.loading = false;
                    this.showRepeat = false;
                    this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._element = this.element.nativeElement;
                }
                ImageModal.prototype.ngOnInit = function () {
                    this.loading = true;
                    if (this.imagePointer >= 0) {
                        this.showRepeat = false;
                        this.openGallery(this.imagePointer);
                    }
                    else {
                        this.showRepeat = true;
                    }
                };
                ImageModal.prototype.closeGallery = function () {
                    this.opened = false;
                    this.cancelEvent.emit(null);
                };
                ImageModal.prototype.prevImage = function () {
                    this.loading = true;
                    this.currentImageIndex--;
                    if (this.currentImageIndex < 0) {
                        this.currentImageIndex = this.modalImages.length - 1;
                    }
                    this.openGallery(this.currentImageIndex);
                };
                ImageModal.prototype.nextImage = function () {
                    this.loading = true;
                    this.currentImageIndex++;
                    if (this.modalImages.length === this.currentImageIndex) {
                        this.currentImageIndex = 0;
                    }
                    this.openGallery(this.currentImageIndex);
                };
                ImageModal.prototype.openGallery = function (index) {
                    if (!index) {
                        this.currentImageIndex = 1;
                    }
                    this.currentImageIndex = index;
                    this.opened = true;
                    for (var i = 0; i < this.modalImages.length; i++) {
                        if (i === this.currentImageIndex) {
                            this.imgSrc = this.modalImages[i].img;
                            this.loading = false;
                            break;
                        }
                    }
                };
                return ImageModal;
            }());
            ImageModal.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('modalImages')
            ], ImageModal.prototype, "modalImages", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imagePointer')
            ], ImageModal.prototype, "imagePointer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('cancelEvent')
            ], ImageModal.prototype, "cancelEvent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"], { descendants: false })
            ], ImageModal.prototype, "footerFacet", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer', { static: true })
            ], ImageModal.prototype, "footerViewChild", void 0);
            ImageModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'ImageModal',
                    template: "\n\n   <div class=\"ng-gallery\" *ngIf=\"showRepeat\"> \n     <div *ngFor =\"let i of modalImages; let index = index\">\n       <img src=\"{{ i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\" alt=\"Image {{ index + 1 }}\" />\n      </div>\n   </div>\n\n   <div class=\" ui-dialog-mask ui-widget-overlay ui-dialog-visible ui-dialog-mask-scrollblocker \"\n   style=\"z-index: 1001;\" *ngIf=\"opened\">\n\n    <div pfocustrap=\"\" role=\"dialog\"\n        class=\"ng-trigger ng-trigger-animation  ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow ui-dialog-resizable \"\n       \n        aria-labelledby=\"ui-dialog-1-label\"\n        style=\"width: 852px; height: 581px; overflow: visible; z-index: 1002;\">\n\n        <div class=\"ui-dialog-image-titlebar ui-widget-header ui-helper-clearfix ui-corner-top \"\n            style=\"\">\n\n            <div class=\"ui-dialog-image-title flex justify-center\" id=\"ui-dialog-1-label\" style=\"width: 800px; padding-left: 40px\">\n            <a class=\"nav-left cursor-pointer\" *ngIf=\"modalImages.length >1\" (click)=\"prevImage()\"><i class=\"arrow-left-white\" style=\"width:30px; cursor: pointer\"></i></a>\n            <span class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }} - Image\n            {{currentImageIndex+1}}</span>\n            <a class=\"nav-right cursor-pointer\" *ngIf=\"modalImages.length >1\" (click)=\"nextImage()\"><i class=\"arrow-right-white\" style=\"width:30px; cursor: pointer\"></i></a>\n            </div>\n            <div class=\"ui-dialog-titlebar-icons\">\n                <a role=\"button\" tabindex=\"0\"\n                    class=\" ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all \"\n                    >\n                    <img  (click)=\"closeGallery()\" height=\"28px\" width=\"28px\" src=\"./assets/img/ClosePopupImage.png\" />\n                </a>\n            </div>\n        </div>\n        <div class=\" ui-dialog-content ui-widget-content\">\n          <div id=\"flex justify-center\">\n            <div class=\"ng-gallery-content\">\n              <div class=\"uil-ring-css\" *ngIf=\"loading\">\n                  <div></div>\n              </div>\n             \n             \n              <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" (click)=\"nextImage()\" class=\"effect\" />\n             \n              <span class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }} - Image\n                  {{currentImageIndex+1}}</span>\n          </div>\n          </div>\n        </div>\n        <div #footer class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footerFacet && footerFacet.first\">\n            <ng-content select=\"p-footer\"></ng-content>\n        </div>\n        \n        <div class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se  \"\n            style=\"z-index: 90;\"></div>\n    </div>\n</div>\n\n   \n   \n       ",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./css/style.css */ "./src/app/shared/directives/image-popup/css/style.css")).default]
                })
            ], ImageModal);
            /***/ 
        }),
        /***/ "./src/app/shared/dropdown/dropdown.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/dropdown/dropdown.ts ***!
          \*********************************************/
        /*! exports provided: DROPDOWN_VALUE_ACCESSOR, DropdownItem, Dropdown, OgyaDropdownModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function () { return DROPDOWN_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function () { return DropdownItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function () { return Dropdown; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgyaDropdownModule", function () { return OgyaDropdownModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
            /* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");
            /* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm2015/primeng-utils.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm2015/primeng-tooltip.js");
            var DROPDOWN_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return Dropdown; }),
                multi: true
            };
            var DropdownItem = /** @class */ (function () {
                function DropdownItem() {
                    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                DropdownItem.prototype.onOptionClick = function (event) {
                    this.onClick.emit({
                        originalEvent: event,
                        option: this.option
                    });
                };
                return DropdownItem;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "option", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "selected", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "disabled", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "visible", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "itemSize", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DropdownItem.prototype, "template", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], DropdownItem.prototype, "onClick", void 0);
            DropdownItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'p-dropdownItem',
                    template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ogya-ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
                })
            ], DropdownItem);
            var Dropdown = /** @class */ (function () {
                function Dropdown(el, renderer, cd, zone) {
                    this.el = el;
                    this.renderer = renderer;
                    this.cd = cd;
                    this.zone = zone;
                    this.scrollHeight = '200px';
                    this.filterBy = 'label';
                    this.resetFilterOnHide = false;
                    this.dropdownIcon = 'pi pi-chevron-down';
                    this.autoDisplayFirst = true;
                    this.emptyFilterMessage = 'No results found';
                    this.autoZIndex = true;
                    this.baseZIndex = 0;
                    this.showTransitionOptions = '225ms ease-out';
                    this.hideTransitionOptions = '195ms ease-in';
                    this.filterMatchMode = "contains";
                    this.tooltip = '';
                    this.tooltipPosition = 'right';
                    this.tooltipPositionStyle = 'absolute';
                    this.autofocusFilter = true;
                    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.onModelChange = function () { };
                    this.onModelTouched = function () { };
                    this.viewPortOffsetTop = 0;
                }
                Object.defineProperty(Dropdown.prototype, "disabled", {
                    get: function () {
                        return this._disabled;
                    },
                    set: function (_disabled) {
                        if (_disabled)
                            this.focused = false;
                        this._disabled = _disabled;
                        if (!this.cd.destroyed) {
                            this.cd.detectChanges();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Dropdown.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.templates.forEach(function (item) {
                        switch (item.getType()) {
                            case 'item':
                                _this.itemTemplate = item.template;
                                break;
                            case 'selectedItem':
                                _this.selectedItemTemplate = item.template;
                                break;
                            case 'group':
                                _this.groupTemplate = item.template;
                                break;
                            default:
                                _this.itemTemplate = item.template;
                                break;
                        }
                    });
                };
                Dropdown.prototype.ngOnInit = function () {
                    this.optionsToDisplay = this.options;
                    this.updateSelectedOption(null);
                };
                Object.defineProperty(Dropdown.prototype, "options", {
                    get: function () {
                        return this._options;
                    },
                    set: function (val) {
                        var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
                        this._options = opts;
                        this.optionsToDisplay = this._options;
                        this.updateSelectedOption(this.value);
                        this.optionsChanged = true;
                        this.updateFilledState();
                        if (this.filterValue && this.filterValue.length) {
                            this.activateFilter();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Dropdown.prototype.ngAfterViewInit = function () {
                    if (this.editable) {
                        this.updateEditableLabel();
                    }
                };
                Object.defineProperty(Dropdown.prototype, "label", {
                    get: function () {
                        return (this.selectedOption ? this.selectedOption.label : null);
                    },
                    enumerable: true,
                    configurable: true
                });
                Dropdown.prototype.updateEditableLabel = function () {
                    if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
                        this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
                    }
                };
                Dropdown.prototype.onItemClick = function (event) {
                    var _this = this;
                    var option = event.option;
                    if (!option.disabled) {
                        this.selectItem(event, option);
                        this.accessibleViewChild.nativeElement.focus();
                    }
                    setTimeout(function () {
                        _this.hide(event);
                    }, 150);
                };
                Dropdown.prototype.selectItem = function (event, option) {
                    var _this = this;
                    if (this.selectedOption != option) {
                        this.selectedOption = option;
                        this.value = option.value;
                        this.filled = true;
                        this.onModelChange(this.value);
                        this.updateEditableLabel();
                        this.onChange.emit({
                            originalEvent: event.originalEvent,
                            value: this.value
                        });
                        if (this.virtualScroll) {
                            setTimeout(function () {
                                _this.viewPortOffsetTop = _this.viewPort ? _this.viewPort.measureScrollOffset() : 0;
                            }, 1);
                        }
                    }
                };
                Dropdown.prototype.ngAfterViewChecked = function () {
                    var _this = this;
                    if (this.optionsChanged && this.overlayVisible) {
                        this.optionsChanged = false;
                        if (this.virtualScroll) {
                            this.updateVirtualScrollSelectedIndex(true);
                        }
                        this.zone.runOutsideAngular(function () {
                            setTimeout(function () {
                                _this.alignOverlay();
                            }, 1);
                        });
                    }
                    if (this.selectedOptionUpdated && this.itemsWrapper) {
                        if (this.virtualScroll && this.viewPort) {
                            var range = this.viewPort.getRenderedRange();
                            this.updateVirtualScrollSelectedIndex(false);
                            if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                            }
                        }
                        var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');
                        if (selectedItem) {
                            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight'));
                        }
                        this.selectedOptionUpdated = false;
                    }
                };
                Dropdown.prototype.writeValue = function (value) {
                    if (this.filter) {
                        this.resetFilter();
                    }
                    this.value = value;
                    this.updateSelectedOption(value);
                    this.updateEditableLabel();
                    this.updateFilledState();
                    this.cd.markForCheck();
                };
                Dropdown.prototype.resetFilter = function () {
                    this.filterValue = null;
                    if (this.filterViewChild && this.filterViewChild.nativeElement) {
                        this.filterViewChild.nativeElement.value = '';
                    }
                    this.optionsToDisplay = this.options;
                };
                Dropdown.prototype.updateSelectedOption = function (val) {
                    this.selectedOption = this.findOption(val, this.optionsToDisplay);
                    if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
                        this.selectedOption = this.optionsToDisplay[0];
                    }
                    this.selectedOptionUpdated = true;
                };
                Dropdown.prototype.registerOnChange = function (fn) {
                    this.onModelChange = fn;
                };
                Dropdown.prototype.registerOnTouched = function (fn) {
                    this.onModelTouched = fn;
                };
                Dropdown.prototype.setDisabledState = function (val) {
                    this.disabled = val;
                };
                Dropdown.prototype.onMouseclick = function (event) {
                    if (this.disabled || this.readonly || this.isInputClick(event)) {
                        return;
                    }
                    this.onClick.emit(event);
                    this.accessibleViewChild.nativeElement.focus();
                    if (this.overlayVisible)
                        this.hide(event);
                    else
                        this.show();
                    this.cd.detectChanges();
                };
                Dropdown.prototype.isInputClick = function (event) {
                    return primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].hasClass(event.target, 'ui-dropdown-clear-icon') ||
                        event.target.isSameNode(this.accessibleViewChild.nativeElement) ||
                        (this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement));
                };
                Dropdown.prototype.isOutsideClicked = function (event) {
                    return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
                };
                Dropdown.prototype.onEditableInputClick = function () {
                    this.bindDocumentClickListener();
                };
                Dropdown.prototype.onEditableInputFocus = function (event) {
                    this.focused = true;
                    this.hide(event);
                    this.onFocus.emit(event);
                };
                Dropdown.prototype.onEditableInputChange = function (event) {
                    this.value = event.target.value;
                    this.updateSelectedOption(this.value);
                    this.onModelChange(this.value);
                    this.onChange.emit({
                        originalEvent: event,
                        value: this.value
                    });
                };
                Dropdown.prototype.show = function () {
                    this.overlayVisible = true;
                };
                Dropdown.prototype.onOverlayAnimationStart = function (event) {
                    switch (event.toState) {
                        case 'visible':
                            this.overlay = event.element;
                            var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
                            this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
                            this.appendOverlay();
                            if (this.autoZIndex) {
                                this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex));
                            }
                            this.alignOverlay();
                            this.bindDocumentClickListener();
                            this.bindDocumentResizeListener();
                            if (this.options && this.options.length) {
                                if (!this.virtualScroll) {
                                    var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
                                    if (selectedListItem) {
                                        primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
                                    }
                                }
                            }
                            if (this.filterViewChild && this.filterViewChild.nativeElement) {
                                this.preventModelTouched = true;
                                if (this.autofocusFilter) {
                                    this.filterViewChild.nativeElement.focus();
                                }
                            }
                            this.onShow.emit(event);
                            break;
                        case 'void':
                            this.onOverlayHide();
                            break;
                    }
                };
                Dropdown.prototype.scrollToSelectedVirtualScrollElement = function () {
                    if (!this.virtualAutoScrolled) {
                        if (this.viewPortOffsetTop) {
                            this.viewPort.scrollToOffset(this.viewPortOffsetTop);
                        }
                        else if (this.virtualScrollSelectedIndex > -1) {
                            this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                        }
                    }
                    this.virtualAutoScrolled = true;
                };
                Dropdown.prototype.updateVirtualScrollSelectedIndex = function (resetOffset) {
                    if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
                        if (resetOffset) {
                            this.viewPortOffsetTop = 0;
                        }
                        this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
                    }
                };
                Dropdown.prototype.appendOverlay = function () {
                    if (this.appendTo) {
                        if (this.appendTo === 'body')
                            document.body.appendChild(this.overlay);
                        else
                            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].appendChild(this.overlay, this.appendTo);
                        if (!this.overlay.style.minWidth) {
                            this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
                        }
                    }
                };
                Dropdown.prototype.restoreOverlayAppend = function () {
                    if (this.overlay && this.appendTo) {
                        this.el.nativeElement.appendChild(this.overlay);
                    }
                };
                Dropdown.prototype.hide = function (event) {
                    this.overlayVisible = false;
                    if (this.filter && this.resetFilterOnHide) {
                        this.resetFilter();
                    }
                    if (this.virtualScroll) {
                        this.virtualAutoScrolled = false;
                    }
                    this.cd.markForCheck();
                    this.onHide.emit(event);
                };
                Dropdown.prototype.alignOverlay = function () {
                    if (this.overlay) {
                        if (this.appendTo)
                            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);
                        else
                            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
                    }
                };
                Dropdown.prototype.onInputFocus = function (event) {
                    this.focused = true;
                    this.onFocus.emit(event);
                };
                Dropdown.prototype.onInputBlur = function (event) {
                    this.focused = false;
                    this.onBlur.emit(event);
                    if (!this.preventModelTouched) {
                        this.onModelTouched();
                    }
                    this.preventModelTouched = false;
                };
                Dropdown.prototype.findPrevEnabledOption = function (index) {
                    var prevEnabledOption;
                    if (this.optionsToDisplay && this.optionsToDisplay.length) {
                        for (var i = (index - 1); 0 <= i; i--) {
                            var option = this.optionsToDisplay[i];
                            if (option.disabled) {
                                continue;
                            }
                            else {
                                prevEnabledOption = option;
                                break;
                            }
                        }
                        if (!prevEnabledOption) {
                            for (var i = this.optionsToDisplay.length - 1; i >= index; i--) {
                                var option = this.optionsToDisplay[i];
                                if (option.disabled) {
                                    continue;
                                }
                                else {
                                    prevEnabledOption = option;
                                    break;
                                }
                            }
                        }
                    }
                    return prevEnabledOption;
                };
                Dropdown.prototype.findNextEnabledOption = function (index) {
                    var nextEnabledOption;
                    if (this.optionsToDisplay && this.optionsToDisplay.length) {
                        for (var i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                            var option = this.optionsToDisplay[i];
                            if (option.disabled) {
                                continue;
                            }
                            else {
                                nextEnabledOption = option;
                                break;
                            }
                        }
                        if (!nextEnabledOption) {
                            for (var i = 0; i < index; i++) {
                                var option = this.optionsToDisplay[i];
                                if (option.disabled) {
                                    continue;
                                }
                                else {
                                    nextEnabledOption = option;
                                    break;
                                }
                            }
                        }
                    }
                    return nextEnabledOption;
                };
                Dropdown.prototype.onKeydown = function (event, search) {
                    if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
                        return;
                    }
                    switch (event.which) {
                        //down
                        case 40:
                            if (!this.overlayVisible && event.altKey) {
                                this.show();
                            }
                            else {
                                if (this.group) {
                                    var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                                    if (selectedItemIndex !== -1) {
                                        var nextItemIndex = selectedItemIndex.itemIndex + 1;
                                        if (nextItemIndex < (this.optionsToDisplay[selectedItemIndex.groupIndex].items.length)) {
                                            this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                                            this.selectedOptionUpdated = true;
                                        }
                                        else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                            this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                                            this.selectedOptionUpdated = true;
                                        }
                                    }
                                    else {
                                        this.selectItem(event, this.optionsToDisplay[0].items[0]);
                                    }
                                }
                                else {
                                    var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                                    var nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                                    if (nextEnabledOption) {
                                        this.selectItem(event, nextEnabledOption);
                                        this.selectedOptionUpdated = true;
                                    }
                                }
                            }
                            event.preventDefault();
                            break;
                        //up
                        case 38:
                            if (this.group) {
                                var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                                if (selectedItemIndex !== -1) {
                                    var prevItemIndex = selectedItemIndex.itemIndex - 1;
                                    if (prevItemIndex >= 0) {
                                        this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[prevItemIndex]);
                                        this.selectedOptionUpdated = true;
                                    }
                                    else if (prevItemIndex < 0) {
                                        var prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                                        if (prevGroup) {
                                            this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                                            this.selectedOptionUpdated = true;
                                        }
                                    }
                                }
                            }
                            else {
                                var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                                var prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                                if (prevEnabledOption) {
                                    this.selectItem(event, prevEnabledOption);
                                    this.selectedOptionUpdated = true;
                                }
                            }
                            event.preventDefault();
                            break;
                        //space
                        case 32:
                        case 32:
                            if (!this.overlayVisible) {
                                this.show();
                                event.preventDefault();
                            }
                            break;
                        //enter
                        case 13:
                            if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                                this.hide(event);
                            }
                            event.preventDefault();
                            break;
                        //escape and tab
                        case 27:
                        case 9:
                            this.hide(event);
                            break;
                        //search item based on keyboard input
                        default:
                            if (search) {
                                this.search(event);
                            }
                            break;
                    }
                };
                Dropdown.prototype.search = function (event) {
                    var _this = this;
                    if (this.searchTimeout) {
                        clearTimeout(this.searchTimeout);
                    }
                    var char = event.key;
                    this.previousSearchChar = this.currentSearchChar;
                    this.currentSearchChar = char;
                    if (this.previousSearchChar === this.currentSearchChar)
                        this.searchValue = this.currentSearchChar;
                    else
                        this.searchValue = this.searchValue ? this.searchValue + char : char;
                    var newOption;
                    if (this.group) {
                        var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
                        newOption = this.searchOptionWithinGroup(searchIndex);
                    }
                    else {
                        var searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        newOption = this.searchOption(++searchIndex);
                    }
                    if (newOption && !newOption.disabled) {
                        this.selectItem(event, newOption);
                        this.selectedOptionUpdated = true;
                    }
                    this.searchTimeout = setTimeout(function () {
                        _this.searchValue = null;
                    }, 250);
                };
                Dropdown.prototype.searchOption = function (index) {
                    var option;
                    if (this.searchValue) {
                        option = this.searchOptionInRange(index, this.optionsToDisplay.length);
                        if (!option) {
                            option = this.searchOptionInRange(0, index);
                        }
                    }
                    return option;
                };
                Dropdown.prototype.searchOptionInRange = function (start, end) {
                    for (var i = start; i < end; i++) {
                        var opt = this.optionsToDisplay[i];
                        if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                            return opt;
                        }
                    }
                    return null;
                };
                Dropdown.prototype.searchOptionWithinGroup = function (index) {
                    var option;
                    if (this.searchValue) {
                        for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                            for (var j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.optionsToDisplay[i].items.length; j++) {
                                var opt = this.optionsToDisplay[i].items[j];
                                if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                                    return opt;
                                }
                            }
                        }
                        if (!option) {
                            for (var i = 0; i <= index.groupIndex; i++) {
                                for (var j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.optionsToDisplay[i].items.length); j++) {
                                    var opt = this.optionsToDisplay[i].items[j];
                                    if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                                        return opt;
                                    }
                                }
                            }
                        }
                    }
                    return null;
                };
                Dropdown.prototype.findOptionIndex = function (val, opts) {
                    var index = -1;
                    if (opts) {
                        for (var i = 0; i < opts.length; i++) {
                            if ((val == null && opts[i].value == null) || primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(val, opts[i].value, this.dataKey)) {
                                index = i;
                                break;
                            }
                        }
                    }
                    return index;
                };
                Dropdown.prototype.findOptionGroupIndex = function (val, opts) {
                    var groupIndex, itemIndex;
                    if (opts) {
                        for (var i = 0; i < opts.length; i++) {
                            groupIndex = i;
                            itemIndex = this.findOptionIndex(val, opts[i].items);
                            if (itemIndex !== -1) {
                                break;
                            }
                        }
                    }
                    if (itemIndex !== -1) {
                        return { groupIndex: groupIndex, itemIndex: itemIndex };
                    }
                    else {
                        return -1;
                    }
                };
                Dropdown.prototype.findOption = function (val, opts, inGroup) {
                    if (this.group && !inGroup) {
                        var opt = void 0;
                        if (opts && opts.length) {
                            for (var _a = 0, opts_1 = opts; _a < opts_1.length; _a++) {
                                var optgroup = opts_1[_a];
                                opt = this.findOption(val, optgroup.items, true);
                                if (opt) {
                                    break;
                                }
                            }
                        }
                        return opt;
                    }
                    else {
                        var index = this.findOptionIndex(val, opts);
                        return (index != -1) ? opts[index] : null;
                    }
                };
                Dropdown.prototype.onFilter = function (event) {
                    var inputValue = event.target.value;
                    if (inputValue && inputValue.length) {
                        this.filterValue = inputValue;
                        this.activateFilter();
                    }
                    else {
                        this.filterValue = null;
                        this.optionsToDisplay = this.options;
                    }
                    this.optionsChanged = true;
                };
                Dropdown.prototype.activateFilter = function () {
                    var searchFields = this.filterBy.split(',');
                    if (this.options && this.options.length) {
                        if (this.group) {
                            var filteredGroups = [];
                            for (var _a = 0, _b = this.options; _a < _b.length; _a++) {
                                var optgroup = _b[_a];
                                var filteredSubOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"].filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                                if (filteredSubOptions && filteredSubOptions.length) {
                                    filteredGroups.push({
                                        label: optgroup.label,
                                        value: optgroup.value,
                                        items: filteredSubOptions
                                    });
                                }
                            }
                            this.optionsToDisplay = filteredGroups;
                        }
                        else {
                            this.optionsToDisplay = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                        }
                        this.optionsChanged = true;
                    }
                };
                Dropdown.prototype.applyFocus = function () {
                    if (this.editable)
                        primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
                    else
                        primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
                };
                Dropdown.prototype.focus = function () {
                    this.applyFocus();
                };
                Dropdown.prototype.bindDocumentClickListener = function () {
                    var _this = this;
                    if (!this.documentClickListener) {
                        this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                            if (_this.isOutsideClicked(event)) {
                                _this.hide(event);
                                _this.unbindDocumentClickListener();
                            }
                            _this.cd.markForCheck();
                        });
                    }
                };
                Dropdown.prototype.unbindDocumentClickListener = function () {
                    if (this.documentClickListener) {
                        this.documentClickListener();
                        this.documentClickListener = null;
                    }
                };
                Dropdown.prototype.bindDocumentResizeListener = function () {
                    this.documentResizeListener = this.onWindowResize.bind(this);
                    window.addEventListener('resize', this.documentResizeListener);
                };
                Dropdown.prototype.unbindDocumentResizeListener = function () {
                    if (this.documentResizeListener) {
                        window.removeEventListener('resize', this.documentResizeListener);
                        this.documentResizeListener = null;
                    }
                };
                Dropdown.prototype.onWindowResize = function () {
                    if (!primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].isAndroid()) {
                        this.hide(event);
                    }
                };
                Dropdown.prototype.updateFilledState = function () {
                    this.filled = (this.selectedOption != null);
                };
                Dropdown.prototype.clear = function (event) {
                    this.value = null;
                    this.onModelChange(this.value);
                    this.onChange.emit({
                        originalEvent: event,
                        value: this.value
                    });
                    this.updateSelectedOption(this.value);
                    this.updateEditableLabel();
                    this.updateFilledState();
                };
                Dropdown.prototype.onOverlayHide = function () {
                    this.unbindDocumentClickListener();
                    this.unbindDocumentResizeListener();
                    this.overlay = null;
                    this.itemsWrapper = null;
                    this.onModelTouched();
                };
                Dropdown.prototype.ngOnDestroy = function () {
                    this.restoreOverlayAppend();
                    this.onOverlayHide();
                };
                return Dropdown;
            }());
            Dropdown.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "scrollHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "filter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "name", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "style", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "panelStyle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "styleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "panelStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "readonly", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "required", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "editable", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "appendTo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "tabindex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "placeholder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "filterPlaceholder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "filterLocale", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "inputId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "selectId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "dataKey", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "filterBy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "autofocus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "resetFilterOnHide", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "dropdownIcon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "optionLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "autoDisplayFirst", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "group", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "showClear", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "emptyFilterMessage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "virtualScroll", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "itemSize", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "autoZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "baseZIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "showTransitionOptions", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "hideTransitionOptions", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "ariaFilterLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "ariaLabelledBy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "filterMatchMode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "maxlength", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "tooltip", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "tooltipPosition", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "tooltipPositionStyle", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "tooltipStyleClass", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "autofocusFilter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onFocus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onBlur", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onClick", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onShow", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
            ], Dropdown.prototype, "onHide", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('container', { static: true })
            ], Dropdown.prototype, "containerViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('filter', { static: true })
            ], Dropdown.prototype, "filterViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('in', { static: true })
            ], Dropdown.prototype, "accessibleViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], { static: true })
            ], Dropdown.prototype, "viewPort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('editableInput', { static: true })
            ], Dropdown.prototype, "editableInputViewChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"])
            ], Dropdown.prototype, "templates", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "disabled", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], Dropdown.prototype, "options", null);
            Dropdown = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'o-dropdown',
                    template: "\n         <div #container [ngClass]=\"{'ui-dropdown ogya-ui-widget-dropdown ui-state-default ogya-ui-corner-all':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible,  'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\" role=\"listbox\">\n            </div>\n            <div class=\"ui-dropdown-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ogya-ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                    <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n                </span>\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ogya-ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n                <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n                <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            </div>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ogya-ui-widget-dropdown ui-widget-content ogya-ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ogya-ui-widget-dropdown ui-state-default ogya-ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ogya-ui-widget-dropdown ogya-ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('overlayAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translateY(5%)',
                                opacity: 0
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                transform: 'translateY(0)',
                                opacity: 1
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{hideTransitionParams}}'))
                        ])
                    ],
                    host: {
                        '[class.ui-inputwrapper-filled]': 'filled',
                        '[class.ui-inputwrapper-focus]': 'focused'
                    },
                    providers: [DROPDOWN_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default
                })
            ], Dropdown);
            var OgyaDropdownModule = /** @class */ (function () {
                function OgyaDropdownModule() {
                }
                return OgyaDropdownModule;
            }());
            OgyaDropdownModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"]],
                    exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    declarations: [Dropdown, DropdownItem]
                })
            ], OgyaDropdownModule);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/app-layouts/auth-layout.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/layout/app-layouts/auth-layout.component.ts ***!
          \********************************************************************/
        /*! exports provided: AuthLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () { return AuthLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthLayoutComponent = /** @class */ (function () {
                function AuthLayoutComponent() {
                }
                AuthLayoutComponent.prototype.ngOnInit = function () {
                };
                return AuthLayoutComponent;
            }());
            AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/auth-layout.component.html")).default
                })
            ], AuthLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/app-layouts/empty-layout.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/shared/layout/app-layouts/empty-layout.component.ts ***!
          \*********************************************************************/
        /*! exports provided: EmptyLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function () { return EmptyLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _animations_fade_zoom_in_top_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade-zoom-in-top.decorator */ "./src/app/shared/animations/fade-zoom-in-top.decorator.ts");
            var EmptyLayoutComponent = /** @class */ (function () {
                function EmptyLayoutComponent() {
                }
                EmptyLayoutComponent.prototype.ngOnInit = function () {
                };
                return EmptyLayoutComponent;
            }());
            EmptyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_animations_fade_zoom_in_top_decorator__WEBPACK_IMPORTED_MODULE_2__["FadeZoomInTop"])(),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-empty-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empty-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/empty-layout.component.html")).default
                })
            ], EmptyLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/app-layouts/main-layout.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/layout/app-layouts/main-layout.component.ts ***!
          \********************************************************************/
        /*! exports provided: MainLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () { return MainLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _animations_fade_zoom_in_top_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/fade-zoom-in-top.decorator */ "./src/app/shared/animations/fade-zoom-in-top.decorator.ts");
            var MainLayoutComponent = /** @class */ (function () {
                function MainLayoutComponent() {
                }
                MainLayoutComponent.prototype.ngOnInit = function () { };
                return MainLayoutComponent;
            }());
            MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_animations_fade_zoom_in_top_decorator__WEBPACK_IMPORTED_MODULE_2__["FadeZoomInTop"])(),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-main-layout",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/app-layouts/main-layout.component.html")).default,
                })
            ], MainLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/layout.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/layout/layout.module.ts ***!
          \************************************************/
        /*! exports provided: OgyaLayoutModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OgyaLayoutModule", function () { return OgyaLayoutModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_layouts_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-layouts/main-layout.component */ "./src/app/shared/layout/app-layouts/main-layout.component.ts");
            /* harmony import */ var _app_layouts_empty_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-layouts/empty-layout.component */ "./src/app/shared/layout/app-layouts/empty-layout.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-layouts/auth-layout.component */ "./src/app/shared/layout/app-layouts/auth-layout.component.ts");
            /* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/shared/utils/utils.module.ts");
            /* harmony import */ var _confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmdialog/confirmdialog */ "./src/app/shared/confirmdialog/confirmdialog.ts");
            /* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/shared/components/components.module.ts");
            var OgyaLayoutModule = /** @class */ (function () {
                function OgyaLayoutModule() {
                }
                return OgyaLayoutModule;
            }());
            OgyaLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"], _confirmdialog_confirmdialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogCustomModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["OgyaComponentsModule"],],
                    declarations: [
                        _app_layouts_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
                        _app_layouts_empty_layout_component__WEBPACK_IMPORTED_MODULE_5__["EmptyLayoutComponent"],
                        _app_layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
                    ],
                    exports: [],
                })
            ], OgyaLayoutModule);
            /***/ 
        }),
        /***/ "./src/app/shared/pipe/safe-html.pipe.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/pipe/safe-html.pipe.ts ***!
          \***********************************************/
        /*! exports provided: Safe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safe", function () { return Safe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /**
             * A simple safe html filter, since Angular does not yet have a filter pipe built in.
             */
            var Safe = /** @class */ (function () {
                function Safe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                Safe.prototype.transform = function (style) {
                    return this.sanitizer.bypassSecurityTrustHtml(style);
                    //return this.sanitizer.bypassSecurityTrustStyle(style);
                    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
                };
                return Safe;
            }());
            Safe.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            Safe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' })
            ], Safe);
            /***/ 
        }),
        /***/ "./src/app/shared/pipe/string-filter.pipe.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/pipe/string-filter.pipe.ts ***!
          \***************************************************/
        /*! exports provided: StringFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function () { return StringFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * A simple string filter, since Angular does not yet have a filter pipe built in.
             */
            var StringFilterPipe = /** @class */ (function () {
                function StringFilterPipe() {
                }
                StringFilterPipe.prototype.transform = function (value, q) {
                    if (!q || q === '') {
                        return value;
                    }
                    var data = value.filter(function (item) { return -1 < item['nama'].toLowerCase().indexOf(q.toLowerCase()); });
                    console.log(data);
                    if (data.length < 1) {
                        //data = _.find(value, { tma_kode_bank: q }).toString();
                        data = value.filter(function (item) { return -1 < item['tma_kode_bank'].toString().toLowerCase().indexOf(q.toLowerCase()); });
                    }
                    return data;
                };
                return StringFilterPipe;
            }());
            StringFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'stringFilter'
                })
            ], StringFilterPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/tooltip/tooltip.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/tooltip/tooltip.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  /*box-shadow: 0 0 5px rgba(0, 0, 0, .2);*/\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);\n  /* margin: 1rem; margin-top: 3px;*/\n  min-width: 50px;\n  max-width: 224px;\n  background: #fff;\n  border: 1px solid #ccc;\n  pointer-events: none;\n  /*position: relative;*/\n  min-height: 1rem;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-left: 330px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16.34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeS9Xb3JrL2Jkc3dlYmdlbjIvc3JjL2FwcC9zaGFyZWQvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBVm1CO0VBV25CLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXItY29sb3I6ICNjY2M7XG5cbiR0b29sdGlwLWJvZHktY29sb3I6ICNmZmY7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAxMHB4O1xuXG4uY29udGFpbmVyIHtcbiAgLypib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjIpOyovXG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAvKiBtYXJnaW46IDFyZW07IG1hcmdpbi10b3A6IDNweDsqL1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogMjI0cHg7XG4gIGJhY2tncm91bmQ6ICR0b29sdGlwLWJvZHktY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYuMzRweDtcbn0iLCIuY29udGFpbmVyIHtcbiAgLypib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjIpOyovXG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAvKiBtYXJnaW46IDFyZW07IG1hcmdpbi10b3A6IDNweDsqL1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogMjI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYuMzRweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/tooltip/tooltip.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/tooltip/tooltip.component.ts ***!
          \*****************************************************/
        /*! exports provided: TooltipComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () { return TooltipComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TooltipComponent = /** @class */ (function () {
                function TooltipComponent() {
                }
                return TooltipComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TooltipComponent.prototype, "text", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TooltipComponent.prototype, "content", void 0);
            TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tooltip',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tooltip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/tooltip/tooltip.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/shared/tooltip/tooltip.component.scss")).default]
                })
            ], TooltipComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/tooltip/tooltip.directive.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/tooltip/tooltip.directive.ts ***!
          \*****************************************************/
        /*! exports provided: TooltipDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () { return TooltipDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/shared/tooltip/tooltip.component.ts");
            var TooltipDirective = /** @class */ (function () {
                function TooltipDirective(overlayPositionBuilder, elementRef, overlay) {
                    this.overlayPositionBuilder = overlayPositionBuilder;
                    this.elementRef = elementRef;
                    this.overlay = overlay;
                }
                TooltipDirective.prototype.ngOnInit = function () {
                    var positionStrategy = this.overlayPositionBuilder
                        .flexibleConnectedTo(this.elementRef)
                        .withPositions([
                        {
                            originX: 'center',
                            originY: 'bottom',
                            overlayX: 'center',
                            overlayY: 'top'
                        }
                    ]);
                    this.overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
                };
                TooltipDirective.prototype.show = function () {
                    var tooltipPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["TooltipComponent"]);
                    var tooltipRef = this.overlayRef.attach(tooltipPortal);
                    if (typeof (this.content) === 'string') {
                        tooltipRef.instance.text = this.content;
                    }
                    else {
                        tooltipRef.instance.content = this.content;
                    }
                };
                TooltipDirective.prototype.hide = function () {
                    this.overlayRef.detach();
                };
                TooltipDirective.prototype.onWindowScroll = function () {
                    this.overlayRef.detach();
                    // const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
                    // console.log(offset);
                };
                return TooltipDirective;
            }());
            TooltipDirective.ctorParameters = function () { return [
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTooltip')
            ], TooltipDirective.prototype, "content", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
            ], TooltipDirective.prototype, "show", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout')
            ], TooltipDirective.prototype, "hide", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
            ], TooltipDirective.prototype, "onWindowScroll", null);
            TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appTooltip]' })
            ], TooltipDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/body.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/utils/body.service.ts ***!
          \**********************************************/
        /*! exports provided: BodyService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyService", function () { return BodyService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BodyService = /** @class */ (function () {
                function BodyService() {
                    this.$body = $('body');
                }
                BodyService.prototype.addClass = function (className) {
                    this.$body.addClass(className);
                };
                BodyService.prototype.removeClass = function (className) {
                    this.$body.removeClass(className);
                };
                BodyService.prototype.toggleClass = function (className, state) {
                    this.$body.toggleClass(className, state);
                };
                return BodyService;
            }());
            BodyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], BodyService);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/encryption-util.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/utils/encryption-util.service.ts ***!
          \*********************************************************/
        /*! exports provided: EncryptionUtilService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionUtilService", function () { return EncryptionUtilService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aes-js */ "./node_modules/aes-js/index.js");
            /* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(aes_js__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var pkcs7_padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pkcs7-padding */ "./node_modules/pkcs7-padding/index.js");
            /* harmony import */ var pkcs7_padding__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(pkcs7_padding__WEBPACK_IMPORTED_MODULE_3__);
            var sessionIdKey = 'sessionId';
            var EncryptionUtilService = /** @class */ (function () {
                function EncryptionUtilService() {
                }
                EncryptionUtilService.encrypt = function (strClearText, useSession) {
                    // Buat key, dan text yang akan dienkripsi
                    var key;
                    if (useSession) {
                        var sessionId = sessionStorage.getItem(sessionIdKey);
                        key = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(this.secret.substring(0, 13) + sessionId.substring(0, 3));
                    }
                    else {
                        key = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(this.secret);
                    }
                    var text = pkcs7_padding__WEBPACK_IMPORTED_MODULE_3__["pad"](strClearText);
                    var textBytes = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(text);
                    // Proses enkripsi
                    var aesEcb = new aes_js__WEBPACK_IMPORTED_MODULE_2__["ModeOfOperation"].ecb(key);
                    var encryptedBytes = aesEcb.encrypt(textBytes);
                    // Decode menggunakan base64
                    // Base64 tidak perlu padding (karakter '=' di belakang), maksimal 2 karakter bisa dibuang
                    var b64encoded = this.ToBase64(encryptedBytes);
                    for (var i = 0; i < 2; i++) {
                        if (b64encoded[b64encoded.length - 1] === '=') {
                            b64encoded = b64encoded.slice(0, -1);
                        }
                    }
                    return b64encoded;
                };
                EncryptionUtilService.decrypt = function (strEncrypted, useSession) {
                    // Decode dari base64
                    var decodedText = this.FromBase64(strEncrypted);
                    // Buat key
                    var key;
                    if (useSession) {
                        var sessionId = sessionStorage.getItem(sessionIdKey);
                        key = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(this.secret.substring(0, 13) + sessionId.substring(0, 3));
                    }
                    else {
                        key = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(this.secret);
                    }
                    // Proses dekripsi
                    var aesEcb = new aes_js__WEBPACK_IMPORTED_MODULE_2__["ModeOfOperation"].ecb(key);
                    var decryptedBytes = aesEcb.decrypt(decodedText);
                    // Dibalik menjadi text
                    var decryptedText = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.fromBytes(decryptedBytes);
                    decryptedText = pkcs7_padding__WEBPACK_IMPORTED_MODULE_3__["unpad"](decryptedText);
                    return decryptedText;
                };
                EncryptionUtilService.ToBase64 = function (u8) {
                    var str = u8.reduce(function (acc, i) { return acc += String.fromCharCode.apply(null, [i]); }, '');
                    var base64Str = btoa(str);
                    return base64Str;
                };
                EncryptionUtilService.FromBase64 = function (base64str) {
                    var str = base64str.replace(/[_]/g, '/').replace(/[-]/g, '+');
                    return (atob(str)
                        .split('')
                        // tslint:disable-next-line: only-arrow-functions
                        .map(function (c) {
                        return c.charCodeAt(0);
                    }));
                };
                EncryptionUtilService.encodeBase64 = function (rawString) {
                    var byteString = aes_js__WEBPACK_IMPORTED_MODULE_2__["utils"].utf8.toBytes(rawString);
                    return this.ToBase64(byteString);
                };
                EncryptionUtilService.b64toBlob = function (b64Data, contentType, sliceSize) {
                    if (sliceSize === void 0) { sliceSize = 512; }
                    var byteCharacters = atob(b64Data);
                    var byteArrays = [];
                    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                        var slice = byteCharacters.slice(offset, offset + sliceSize);
                        var byteNumbers = new Array(slice.length);
                        for (var i = 0; i < slice.length; i++) {
                            byteNumbers[i] = slice.charCodeAt(i);
                        }
                        var byteArray = new Uint8Array(byteNumbers);
                        byteArrays.push(byteArray);
                    }
                    var blob = new Blob(byteArrays, { type: contentType });
                    return blob;
                };
                // public static encryptUrl(strClearText: string, useSession?: boolean) {
                //   const base64 = this.encrypt(strClearText,useSession);
                //   return this.base64UrlfromBase64(base64);
                // }
                // public static decryptUrl(strEncrypted: string, useSession?: boolean) {
                //   const base64Url = this.base64UrltoBase64(strEncrypted);
                //   return this.decrypt(base64Url,useSession);
                // }
                // public static padString(input: string): string {
                //   let segmentLength = 4;
                //   let stringLength = input.length;
                //   let diff = stringLength % segmentLength;
                //   if (!diff) {
                //       return input;
                //   }
                //   let position = stringLength;
                //   let padLength = segmentLength - diff;
                //   let paddedStringLength = stringLength + padLength;
                //   let buffer = Buffer.alloc(paddedStringLength);
                //   buffer.write(input);
                //   while (padLength--) {
                //       buffer.write("=", position++);
                //   }
                //   return buffer.toString();
                // }
                // public static base64UrlEncode(input: string | Buffer, encoding: string = "utf8"): string {
                //   if (Buffer.isBuffer(input)) {
                //       return this.base64UrlfromBase64(input.toString("base64"));
                //   }
                //   return this.base64UrlfromBase64(Buffer.from(input as string, encoding).toString("base64"));
                // }
                // public static base64UrlDecode(base64url: string, encoding: string = "utf8"): string {
                //   return Buffer.from(this.base64UrltoBase64(base64url), "base64").toString(encoding);
                // }
                // public static base64UrltoBase64(base64url: string | Buffer): string {
                //   // We this to be a string so we can do .replace on it. If it's
                //   // already a string, this is a noop.
                //   base64url = base64url.toString();
                //   return this.padString(base64url)
                //       .replace(/\-/g, "+")
                //       .replace(/_/g, "/");
                // }
                EncryptionUtilService.base64UrlfromBase64 = function (base64) {
                    return base64
                        .replace(/=/g, "")
                        .replace(/\+/g, "-")
                        .replace(/\//g, "_");
                };
                return EncryptionUtilService;
            }());
            EncryptionUtilService.secret = 'tvnw63ufg9gh5392';
            EncryptionUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EncryptionUtilService);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/field-filter.pipe.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/utils/field-filter.pipe.ts ***!
          \***************************************************/
        /*! exports provided: FieldFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFilterPipe", function () { return FieldFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FieldFilterPipe = /** @class */ (function () {
                function FieldFilterPipe() {
                }
                FieldFilterPipe.prototype.transform = function (items, field, value) {
                    if (!items)
                        return [];
                    if (!value)
                        return items;
                    return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
                };
                return FieldFilterPipe;
            }());
            FieldFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'fieldFilter',
                })
            ], FieldFilterPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/moment.pipe.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/utils/moment.pipe.ts ***!
          \*********************************************/
        /*! exports provided: MomentPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function () { return MomentPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
            var MomentPipe = /** @class */ (function () {
                function MomentPipe() {
                }
                MomentPipe.prototype.transform = function (value, format) {
                    return moment__WEBPACK_IMPORTED_MODULE_2__(value).format(format);
                };
                return MomentPipe;
            }());
            MomentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'moment'
                })
            ], MomentPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/notification.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/utils/notification.service.ts ***!
          \******************************************************/
        /*! exports provided: NotificationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function () { return NotificationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotificationService = /** @class */ (function () {
                function NotificationService() {
                }
                NotificationService.prototype.smallBox = function (data, cb) {
                    $.smallBox(data, cb);
                };
                NotificationService.prototype.bigBox = function (data, cb) {
                    $.bigBox(data, cb);
                };
                NotificationService.prototype.smartMessageBox = function (data, cb) {
                    $.OgyaMessageBox(data, cb);
                };
                NotificationService.prototype.smartMessageBoxClose = function () {
                    $.OgyaMessageBoxClose();
                };
                NotificationService.prototype.errorMessageBox = function (content) {
                    var _this = this;
                    setTimeout(function () {
                        _this.smartMessageBox({
                            title: '',
                            content: '<span style=\'font-size:18px\'> ' + content + '</span>',
                            buttons: '[Close]',
                            ButtonOneCss: 'btn btn-primary btn-sm botTempo'
                        }, function (ButtonPressed) {
                            if (ButtonPressed === 'Close') {
                                console.log('Close');
                                _this.smartMessageBoxClose();
                            }
                        });
                    }, 500);
                };
                NotificationService.prototype.cancelMessageBox = function (content) {
                    var _this = this;
                    this.smartMessageBox({
                        title: '',
                        content: '<span style=\'font-size:18px\'> ' + content + ' </span>',
                        buttons: '[Batal][OK]',
                        ButtonOneCss: 'btn btn-success btn-sm botTempo',
                        ButtonTwoCss: 'btn btn-danger btn-sm botTempo',
                        NormalButton: 1
                    }, function (ButtonPressed) {
                        if (ButtonPressed === 'OK') {
                            window.history.back();
                            _this.smartMessageBoxClose();
                        }
                        else if (ButtonPressed === 'Batal') {
                            _this.smartMessageBoxClose();
                        }
                    });
                };
                return NotificationService;
            }());
            NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], NotificationService);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/number.directive.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/utils/number.directive.ts ***!
          \**************************************************/
        /*! exports provided: OnlyNumber */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumber", function () { return OnlyNumber; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OnlyNumber = /** @class */ (function () {
                function OnlyNumber(el) {
                    this.el = el;
                }
                OnlyNumber.prototype.onKeyDown = function (event) {
                    var e = event;
                    if (this.OnlyNumber) {
                        var charCode = (e.which) ? e.which : e.keyCode;
                        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                            return false;
                        }
                        return true;
                        /*  if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                           // Allow: Ctrl+A
                           (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                           // Allow: Ctrl+C
                           (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                           // Allow: Ctrl+V
                           (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                           // Allow: Ctrl+X
                           (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                           // Allow: home, end, left, right
                           (e.keyCode >= 35 && e.keyCode <= 39)) {
                             // let it happen, don't do anything
                             return;
                           }
                           // Ensure that it is a number and stop the keypress
                           if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                               e.preventDefault();
                           } */
                    }
                };
                return OnlyNumber;
            }());
            OnlyNumber.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OnlyNumber.prototype, "OnlyNumber", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
            ], OnlyNumber.prototype, "onKeyDown", null);
            OnlyNumber = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[OnlyNumber]'
                })
            ], OnlyNumber);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/storage-util.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/utils/storage-util.service.ts ***!
          \******************************************************/
        /*! exports provided: StorageUtilService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageUtilService", function () { return StorageUtilService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _encryption_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encryption-util.service */ "./src/app/shared/utils/encryption-util.service.ts");
            var StorageUtilService = /** @class */ (function () {
                function StorageUtilService() {
                }
                /**
                 * setItem
                 * store item into storage
                 */
                StorageUtilService.setItem = function (key, obj, global) {
                    var encryptedObject = _encryption_util_service__WEBPACK_IMPORTED_MODULE_2__["EncryptionUtilService"].encrypt(JSON.stringify(obj), true);
                    if (global) {
                        localStorage.setItem(key, encryptedObject);
                    }
                    else {
                        sessionStorage.setItem(key, encryptedObject);
                    }
                };
                /**
                 * getItem
                 * get item from storage
                 * return object from storage
                 */
                StorageUtilService.getItem = function (key, global) {
                    var rawObj = '';
                    if (global) {
                        rawObj = localStorage.getItem(key);
                    }
                    else {
                        rawObj = sessionStorage.getItem(key);
                    }
                    var decodedObj = _encryption_util_service__WEBPACK_IMPORTED_MODULE_2__["EncryptionUtilService"].decrypt(rawObj, true);
                    //console.log(decodedObj);
                    return JSON.parse(decodedObj);
                };
                /**
                 * hasItem
                 */
                StorageUtilService.hasItem = function (key, global) {
                    if (global) {
                        if (localStorage.getItem(key)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        if (sessionStorage.getItem(key)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                };
                return StorageUtilService;
            }());
            StorageUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], StorageUtilService);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/time.directive.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/utils/time.directive.ts ***!
          \************************************************/
        /*! exports provided: TimeDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDirective", function () { return TimeDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TimeDirective = /** @class */ (function () {
                function TimeDirective() {
                }
                return TimeDirective;
            }());
            TimeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'time' })
            ], TimeDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/toggle-active.directive.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/utils/toggle-active.directive.ts ***!
          \*********************************************************/
        /*! exports provided: ToggleActiveDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleActiveDirective", function () { return ToggleActiveDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ToggleActiveDirective = /** @class */ (function () {
                function ToggleActiveDirective() {
                }
                return ToggleActiveDirective;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.active'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ToggleActiveDirective.prototype, "saToggleActive", void 0);
            ToggleActiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[saToggleActive]'
                })
            ], ToggleActiveDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/utils.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/utils/utils.module.ts ***!
          \**********************************************/
        /*! exports provided: UtilsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function () { return UtilsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _moment_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moment.pipe */ "./src/app/shared/utils/moment.pipe.ts");
            /* harmony import */ var _time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.directive */ "./src/app/shared/utils/time.directive.ts");
            /* harmony import */ var _field_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-filter.pipe */ "./src/app/shared/utils/field-filter.pipe.ts");
            /* harmony import */ var _body_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body.service */ "./src/app/shared/utils/body.service.ts");
            /* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ "./src/app/shared/utils/notification.service.ts");
            /* harmony import */ var _toggle_active_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-active.directive */ "./src/app/shared/utils/toggle-active.directive.ts");
            /* harmony import */ var _number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number.directive */ "./src/app/shared/utils/number.directive.ts");
            var UtilsModule_1;
            var UtilsModule = UtilsModule_1 = /** @class */ (function () {
                function UtilsModule() {
                }
                UtilsModule.forRoot = function () {
                    return {
                        ngModule: UtilsModule_1,
                        providers: [_body_service__WEBPACK_IMPORTED_MODULE_5__["BodyService"], _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]],
                    };
                };
                return UtilsModule;
            }());
            UtilsModule = UtilsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _toggle_active_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleActiveDirective"],
                        _moment_pipe__WEBPACK_IMPORTED_MODULE_2__["MomentPipe"],
                        _time_directive__WEBPACK_IMPORTED_MODULE_3__["TimeDirective"],
                        _number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumber"],
                        _field_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FieldFilterPipe"],
                    ],
                    exports: [_toggle_active_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleActiveDirective"], _moment_pipe__WEBPACK_IMPORTED_MODULE_2__["MomentPipe"], _time_directive__WEBPACK_IMPORTED_MODULE_3__["TimeDirective"], _field_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FieldFilterPipe"]],
                    providers: [_body_service__WEBPACK_IMPORTED_MODULE_5__["BodyService"], _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]],
                })
            ], UtilsModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                BASE_API_URL: "http://127.0.0.1:3001/",
                LOGIN_URL: "BdsWebGen2Servlet",
                URL: "BdsWebGen2Servlet",
                encryptKeyHexaString: "55",
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/henry/Work/bdswebgen2/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map