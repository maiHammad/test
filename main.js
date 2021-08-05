(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'pages', loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sharedComponent_success_popup_success_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharedComponent/success-popup/success-popup.component */ "./src/app/sharedComponent/success-popup/success-popup.component.ts");







class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-success-popup");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sharedComponent_success_popup_success_popup_component__WEBPACK_IMPORTED_MODULE_5__["SuccessPopupComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_contact_us_form_contact_us_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/contact-us-form/contact-us-form.component */ "./src/app/home/contact-us-form/contact-us-form.component.ts");
/* harmony import */ var _home_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/slider/slider.component */ "./src/app/home/slider/slider.component.ts");
/* harmony import */ var _sharedComponent_success_popup_success_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sharedComponent/success-popup/success-popup.component */ "./src/app/sharedComponent/success-popup/success-popup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-count-to */ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");













//import { GoogleMapsModule } from '@angular/google-maps';










//import { PagesModule } from './pages/pages.module';
//import { RouterModule } from '@angular/router';
//const routes = [{path: 'ViewStory', component: AboutusComponent}]
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            //GoogleMapsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // PagesModule,
            // RouterModule.forRoot(routes, {
            //    anchorScrolling: 'enabled',
            //}),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__["AngularSvgIconModule"].forRoot(),
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"],
            angular_count_to__WEBPACK_IMPORTED_MODULE_15__["CountToModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyCY9ecqz90GFKJ7Sm59bXvV4yuZPgnpfG0'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _home_contact_us_form_contact_us_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsFormComponent"],
        _home_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
        _sharedComponent_success_popup_success_popup_component__WEBPACK_IMPORTED_MODULE_10__["SuccessPopupComponent"],
        _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], 
        //GoogleMapsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // PagesModule,
        // RouterModule.forRoot(routes, {
        //    anchorScrolling: 'enabled',
        //}),
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__["AngularSvgIconModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"],
        angular_count_to__WEBPACK_IMPORTED_MODULE_15__["CountToModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _home_contact_us_form_contact_us_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsFormComponent"],
                    _home_slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
                    _sharedComponent_success_popup_success_popup_component__WEBPACK_IMPORTED_MODULE_10__["SuccessPopupComponent"],
                    _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    //GoogleMapsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // PagesModule,
                    // RouterModule.forRoot(routes, {
                    //    anchorScrolling: 'enabled',
                    //}),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_12__["AngularSvgIconModule"].forRoot(),
                    ng2_tel_input__WEBPACK_IMPORTED_MODULE_13__["Ng2TelInputModule"],
                    angular_count_to__WEBPACK_IMPORTED_MODULE_15__["CountToModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                        // please get your own API key here:
                        // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                        apiKey: 'AIzaSyCY9ecqz90GFKJ7Sm59bXvV4yuZPgnpfG0'
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
        var mybutton = document.getElementById("myBtn");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction(); };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            }
            else {
                mybutton.style.display = "none";
            }
        }
    }
    topFunction() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 17, vars: 0, consts: [[1, "page-footer", "font-small", "text-white", "bg-dark"], [1, "container"], [1, "row"], [1, "footer-copyright", "py-3", "col-sm-7"], [1, "col-sm-5", "socialCont"], ["href", "https://www.instagram.com/lifeatcivilsoft/", "target", "_blank"], ["src", "/assets/images/home/instagram.png", 1, "socialImg"], ["href", "https://www.twitter.com/civilsofthcm", "target", "_blank"], ["src", "/assets/images/home/twiter.png", 1, "socialImg"], ["href", "https://www.linkedin.com/company/civilsoft/", "target", "_blank"], ["src", "/assets/images/home/linked.png", 1, "socialImg"], ["href", "https://www.facebook.com/HCMScivilSoft", "target", "_blank"], ["src", "/assets/images/home/faceebook.png", 1, "socialImg"], ["id", "myBtn", "title", "Go to top", 1, "btn-primary", "btn", 3, "click"], ["src", "/assets/images/home/u223.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Copyright \u00A9 2020 CivilSoft. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_15_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#myBtn[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  font-size: 16px !important;\n  width: 50px !important;\n  height: 50px !important;\n  padding: 0px !important;\n}\n\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-weight: 400;\n}\n\nfooter[_ngcontent-%COMP%]   img.socialImg[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n  cursor: pointer;\n  opacity: 0.5;\n  padding-top: 1rem;\n}\n\nfooter[_ngcontent-%COMP%]   img.socialImg[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\nfooter[_ngcontent-%COMP%]   .socialCont[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n@media (max-width: 600px) {\n  .footer-copyright[_ngcontent-%COMP%], .socialCont[_ngcontent-%COMP%] {\n    text-align: center !important;\n    max-width: 100%;\n    flex: 100%;\n  }\n\n  .socialCont[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .socialCont[_ngcontent-%COMP%]   img.socialImg[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .socialCont[_ngcontent-%COMP%]   img.socialImg[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxNYWkubVxcQ2l2aWxzb2Z0V2Vic2l0ZTIwMjBcXFdlYnNpdGUuV2ViVUkvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRElJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBREtJO0VBQ0ksVUFBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURPSTtFQUNJLGdCQUFBO0FDTFI7O0FEV0E7RUFDSTtJQUNJLDZCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RUNSTjs7RURXRTtJQUNJLG1CQUFBO0VDUk47RURVTTtJQUNJLGNBQUE7RUNSVjtFRFdNO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQ1RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215QnRuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmZvb3RlciB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLnNvY2lhbEltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5zb2NpYWxJbWc6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbENvbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29weXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmZvb3Rlci1jb3B5cmlnaHQsIC5zb2NpYWxDb250IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleDoxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWxDb250IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBpbWcuc29jaWFsSW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcuc29jaWFsSW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIjbXlCdG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmZvb3RlciBpbWcuc29jaWFsSW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5mb290ZXIgaW1nLnNvY2lhbEltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5mb290ZXIgLnNvY2lhbENvbnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9vdGVyLWNvcHlyaWdodCwgLnNvY2lhbENvbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxMDAlO1xuICB9XG5cbiAgLnNvY2lhbENvbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNvY2lhbENvbnQgaW1nLnNvY2lhbEltZyB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLnNvY2lhbENvbnQgaW1nLnNvY2lhbEltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/countries-with-calling-code.json":
/*!*********************************************************!*\
  !*** ./src/app/header/countries-with-calling-code.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"country\":\"Afghanistan\",\"calling_code\":93},{\"country\":\"Albania\",\"calling_code\":355},{\"country\":\"Algeria\",\"calling_code\":213},{\"country\":\"American Samoa\",\"calling_code\":1684},{\"country\":\"Andorra\",\"calling_code\":376},{\"country\":\"Angola\",\"calling_code\":244},{\"country\":\"Anguilla\",\"calling_code\":1264},{\"country\":\"Antarctica\",\"calling_code\":null},{\"country\":\"Antigua and Barbuda\",\"calling_code\":1268},{\"country\":\"Argentina\",\"calling_code\":54},{\"country\":\"Armenia\",\"calling_code\":374},{\"country\":\"Aruba\",\"calling_code\":297},{\"country\":\"Australia\",\"calling_code\":61},{\"country\":\"Austria\",\"calling_code\":43},{\"country\":\"Azerbaijan\",\"calling_code\":994},{\"country\":\"Bahamas\",\"calling_code\":1242},{\"country\":\"Bahrain\",\"calling_code\":973},{\"country\":\"Bangladesh\",\"calling_code\":880},{\"country\":\"Barbados\",\"calling_code\":1246},{\"country\":\"Belarus\",\"calling_code\":375},{\"country\":\"Belgium\",\"calling_code\":32},{\"country\":\"Belize\",\"calling_code\":501},{\"country\":\"Benin\",\"calling_code\":229},{\"country\":\"Bermuda\",\"calling_code\":1441},{\"country\":\"Bhutan\",\"calling_code\":975},{\"country\":\"Bolivia\",\"calling_code\":591},{\"country\":\"Bosnia and Herzegovina\",\"calling_code\":387},{\"country\":\"Botswana\",\"calling_code\":267},{\"country\":\"Bouvet Island\",\"calling_code\":null},{\"country\":\"Brazil\",\"calling_code\":55},{\"country\":\"British Indian Ocean Territory\",\"calling_code\":246},{\"country\":\"Brunei\",\"calling_code\":null},{\"country\":\"Bulgaria\",\"calling_code\":359},{\"country\":\"Burkina Faso\",\"calling_code\":226},{\"country\":\"Burundi\",\"calling_code\":257},{\"country\":\"Cambodia\",\"calling_code\":855},{\"country\":\"Cameroon\",\"calling_code\":237},{\"country\":\"Canada\",\"calling_code\":1},{\"country\":\"Cape Verde\",\"calling_code\":null},{\"country\":\"Cayman Islands\",\"calling_code\":1345},{\"country\":\"Central African Republic\",\"calling_code\":236},{\"country\":\"Chad\",\"calling_code\":235},{\"country\":\"Chile\",\"calling_code\":56},{\"country\":\"China\",\"calling_code\":86},{\"country\":\"Christmas Island\",\"calling_code\":61},{\"country\":\"Cocos (Keeling) Islands\",\"calling_code\":61},{\"country\":\"Colombia\",\"calling_code\":57},{\"country\":\"Comoros\",\"calling_code\":269},{\"country\":\"Congo\",\"calling_code\":242},{\"country\":\"Cook Islands\",\"calling_code\":682},{\"country\":\"Costa Rica\",\"calling_code\":506},{\"country\":\"Croatia\",\"calling_code\":385},{\"country\":\"Cuba\",\"calling_code\":53},{\"country\":\"Cyprus\",\"calling_code\":357},{\"country\":\"Czech Republic\",\"calling_code\":420},{\"country\":\"Denmark\",\"calling_code\":45},{\"country\":\"Djibouti\",\"calling_code\":253},{\"country\":\"Dominica\",\"calling_code\":1767},{\"country\":\"Dominican Republic\",\"calling_code\":1849},{\"country\":\"East Timor\",\"calling_code\":670},{\"country\":\"Ecuador\",\"calling_code\":593},{\"country\":\"Egypt\",\"calling_code\":20},{\"country\":\"El Salvador\",\"calling_code\":503},{\"country\":\"England\",\"calling_code\":null},{\"country\":\"Equatorial Guinea\",\"calling_code\":240},{\"country\":\"Eritrea\",\"calling_code\":291},{\"country\":\"Estonia\",\"calling_code\":372},{\"country\":\"Ethiopia\",\"calling_code\":251},{\"country\":\"Falkland Islands\",\"calling_code\":500},{\"country\":\"Faroe Islands\",\"calling_code\":298},{\"country\":\"Fiji Islands\",\"calling_code\":null},{\"country\":\"Finland\",\"calling_code\":358},{\"country\":\"France\",\"calling_code\":33},{\"country\":\"French Guiana\",\"calling_code\":594},{\"country\":\"French Polynesia\",\"calling_code\":689},{\"country\":\"French Southern territories\",\"calling_code\":null},{\"country\":\"Gabon\",\"calling_code\":241},{\"country\":\"Gambia\",\"calling_code\":220},{\"country\":\"Georgia\",\"calling_code\":995},{\"country\":\"Germany\",\"calling_code\":49},{\"country\":\"Ghana\",\"calling_code\":233},{\"country\":\"Gibraltar\",\"calling_code\":350},{\"country\":\"Greece\",\"calling_code\":30},{\"country\":\"Greenland\",\"calling_code\":299},{\"country\":\"Grenada\",\"calling_code\":1473},{\"country\":\"Guadeloupe\",\"calling_code\":590},{\"country\":\"Guam\",\"calling_code\":1671},{\"country\":\"Guatemala\",\"calling_code\":502},{\"country\":\"Guinea\",\"calling_code\":224},{\"country\":\"Guinea-Bissau\",\"calling_code\":245},{\"country\":\"Guyana\",\"calling_code\":592},{\"country\":\"Haiti\",\"calling_code\":509},{\"country\":\"Heard Island and McDonald Islands\",\"calling_code\":null},{\"country\":\"Holy See (Vatican City State)\",\"calling_code\":null},{\"country\":\"Honduras\",\"calling_code\":504},{\"country\":\"Hong Kong\",\"calling_code\":852},{\"country\":\"Hungary\",\"calling_code\":36},{\"country\":\"Iceland\",\"calling_code\":354},{\"country\":\"India\",\"calling_code\":91},{\"country\":\"Indonesia\",\"calling_code\":62},{\"country\":\"Iran\",\"calling_code\":98},{\"country\":\"Iraq\",\"calling_code\":964},{\"country\":\"Ireland\",\"calling_code\":353},{\"country\":\"Israel\",\"calling_code\":972},{\"country\":\"Italy\",\"calling_code\":39},{\"country\":\"Ivory Coast\",\"calling_code\":225},{\"country\":\"Jamaica\",\"calling_code\":1876},{\"country\":\"Japan\",\"calling_code\":81},{\"country\":\"Jordan\",\"calling_code\":962},{\"country\":\"Kazakhstan\",\"calling_code\":7},{\"country\":\"Kenya\",\"calling_code\":254},{\"country\":\"Kiribati\",\"calling_code\":686},{\"country\":\"Kuwait\",\"calling_code\":965},{\"country\":\"Kyrgyzstan\",\"calling_code\":996},{\"country\":\"Laos\",\"calling_code\":856},{\"country\":\"Latvia\",\"calling_code\":371},{\"country\":\"Lebanon\",\"calling_code\":961},{\"country\":\"Lesotho\",\"calling_code\":266},{\"country\":\"Liberia\",\"calling_code\":231},{\"country\":\"Libyan Arab Jamahiriya\",\"calling_code\":null},{\"country\":\"Liechtenstein\",\"calling_code\":423},{\"country\":\"Lithuania\",\"calling_code\":370},{\"country\":\"Luxembourg\",\"calling_code\":352},{\"country\":\"Macao\",\"calling_code\":null},{\"country\":\"North Macedonia\",\"calling_code\":389},{\"country\":\"Madagascar\",\"calling_code\":261},{\"country\":\"Malawi\",\"calling_code\":265},{\"country\":\"Malaysia\",\"calling_code\":60},{\"country\":\"Maldives\",\"calling_code\":960},{\"country\":\"Mali\",\"calling_code\":223},{\"country\":\"Malta\",\"calling_code\":356},{\"country\":\"Marshall Islands\",\"calling_code\":692},{\"country\":\"Martinique\",\"calling_code\":596},{\"country\":\"Mauritania\",\"calling_code\":222},{\"country\":\"Mauritius\",\"calling_code\":230},{\"country\":\"Mayotte\",\"calling_code\":262},{\"country\":\"Mexico\",\"calling_code\":52},{\"country\":\"Micronesia, Federated States of\",\"calling_code\":691},{\"country\":\"Moldova\",\"calling_code\":373},{\"country\":\"Monaco\",\"calling_code\":377},{\"country\":\"Mongolia\",\"calling_code\":976},{\"country\":\"Montserrat\",\"calling_code\":1664},{\"country\":\"Morocco\",\"calling_code\":212},{\"country\":\"Mozambique\",\"calling_code\":258},{\"country\":\"Myanmar\",\"calling_code\":95},{\"country\":\"Namibia\",\"calling_code\":264},{\"country\":\"Nauru\",\"calling_code\":674},{\"country\":\"Nepal\",\"calling_code\":977},{\"country\":\"Netherlands\",\"calling_code\":31},{\"country\":\"Netherlands Antilles\",\"calling_code\":null},{\"country\":\"New Caledonia\",\"calling_code\":687},{\"country\":\"New Zealand\",\"calling_code\":64},{\"country\":\"Nicaragua\",\"calling_code\":505},{\"country\":\"Niger\",\"calling_code\":227},{\"country\":\"Nigeria\",\"calling_code\":234},{\"country\":\"Niue\",\"calling_code\":683},{\"country\":\"Norfolk Island\",\"calling_code\":672},{\"country\":\"North Korea\",\"calling_code\":null},{\"country\":\"Northern Ireland\",\"calling_code\":null},{\"country\":\"Northern Mariana Islands\",\"calling_code\":1670},{\"country\":\"Norway\",\"calling_code\":47},{\"country\":\"Oman\",\"calling_code\":968},{\"country\":\"Pakistan\",\"calling_code\":92},{\"country\":\"Palau\",\"calling_code\":680},{\"country\":\"Palestine\",\"calling_code\":null},{\"country\":\"Panama\",\"calling_code\":507},{\"country\":\"Papua New Guinea\",\"calling_code\":675},{\"country\":\"Paraguay\",\"calling_code\":595},{\"country\":\"Peru\",\"calling_code\":51},{\"country\":\"Philippines\",\"calling_code\":63},{\"country\":\"Pitcairn\",\"calling_code\":null},{\"country\":\"Poland\",\"calling_code\":48},{\"country\":\"Portugal\",\"calling_code\":351},{\"country\":\"Puerto Rico\",\"calling_code\":1939},{\"country\":\"Qatar\",\"calling_code\":974},{\"country\":\"Reunion\",\"calling_code\":262},{\"country\":\"Romania\",\"calling_code\":40},{\"country\":\"Russian Federation\",\"calling_code\":7},{\"country\":\"Rwanda\",\"calling_code\":250},{\"country\":\"Saint Helena\",\"calling_code\":290},{\"country\":\"Saint Kitts and Nevis\",\"calling_code\":1869},{\"country\":\"Saint Lucia\",\"calling_code\":1758},{\"country\":\"Saint Pierre and Miquelon\",\"calling_code\":508},{\"country\":\"Saint Vincent and the Grenadines\",\"calling_code\":1784},{\"country\":\"Samoa\",\"calling_code\":685},{\"country\":\"San Marino\",\"calling_code\":378},{\"country\":\"Sao Tome and Principe\",\"calling_code\":239},{\"country\":\"Saudi Arabia\",\"calling_code\":966},{\"country\":\"Scotland\",\"calling_code\":null},{\"country\":\"Senegal\",\"calling_code\":221},{\"country\":\"Seychelles\",\"calling_code\":248},{\"country\":\"Sierra Leone\",\"calling_code\":232},{\"country\":\"Singapore\",\"calling_code\":65},{\"country\":\"Slovakia\",\"calling_code\":421},{\"country\":\"Slovenia\",\"calling_code\":386},{\"country\":\"Solomon Islands\",\"calling_code\":677},{\"country\":\"Somalia\",\"calling_code\":252},{\"country\":\"South Africa\",\"calling_code\":27},{\"country\":\"South Georgia and the South Sandwich Islands\",\"calling_code\":500},{\"country\":\"South Korea\",\"calling_code\":null},{\"country\":\"South Sudan\",\"calling_code\":211},{\"country\":\"Spain\",\"calling_code\":34},{\"country\":\"SriLanka\",\"calling_code\":null},{\"country\":\"Sudan\",\"calling_code\":249},{\"country\":\"Suriname\",\"calling_code\":597},{\"country\":\"Svalbard and Jan Mayen\",\"calling_code\":null},{\"country\":\"Swaziland\",\"calling_code\":268},{\"country\":\"Sweden\",\"calling_code\":46},{\"country\":\"Switzerland\",\"calling_code\":41},{\"country\":\"Syria\",\"calling_code\":963},{\"country\":\"Tajikistan\",\"calling_code\":992},{\"country\":\"Tanzania\",\"calling_code\":255},{\"country\":\"Thailand\",\"calling_code\":66},{\"country\":\"The Democratic Republic of Congo\",\"calling_code\":243},{\"country\":\"Togo\",\"calling_code\":228},{\"country\":\"Tokelau\",\"calling_code\":690},{\"country\":\"Tonga\",\"calling_code\":676},{\"country\":\"Trinidad and Tobago\",\"calling_code\":1868},{\"country\":\"Tunisia\",\"calling_code\":216},{\"country\":\"Turkey\",\"calling_code\":90},{\"country\":\"Turkmenistan\",\"calling_code\":993},{\"country\":\"Turks and Caicos Islands\",\"calling_code\":1649},{\"country\":\"Tuvalu\",\"calling_code\":688},{\"country\":\"Uganda\",\"calling_code\":256},{\"country\":\"Ukraine\",\"calling_code\":380},{\"country\":\"United Arab Emirates\",\"calling_code\":971},{\"country\":\"United Kingdom\",\"calling_code\":44},{\"country\":\"United States\",\"calling_code\":1},{\"country\":\"United States Minor Outlying Islands\",\"calling_code\":null},{\"country\":\"Uruguay\",\"calling_code\":598},{\"country\":\"Uzbekistan\",\"calling_code\":998},{\"country\":\"Vanuatu\",\"calling_code\":678},{\"country\":\"Venezuela\",\"calling_code\":58},{\"country\":\"Vietnam\",\"calling_code\":84},{\"country\":\"Virgin Islands, British\",\"calling_code\":null},{\"country\":\"Virgin Islands, U.S.\",\"calling_code\":null},{\"country\":\"Wales\",\"calling_code\":null},{\"country\":\"Wallis and Futuna\",\"calling_code\":681},{\"country\":\"Western Sahara\",\"calling_code\":null},{\"country\":\"Yemen\",\"calling_code\":967},{\"country\":\"Yugoslavia\",\"calling_code\":null},{\"country\":\"Zambia\",\"calling_code\":260},{\"country\":\"Zimbabwe\",\"calling_code\":263}]");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _countries_with_calling_code_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries-with-calling-code.json */ "./src/app/header/countries-with-calling-code.json");
var _countries_with_calling_code_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./countries-with-calling-code.json */ "./src/app/header/countries-with-calling-code.json", 1);
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");












function HeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_26_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_26_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.BusinessEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.BusinessEmail.errors.email);
} }
function HeaderComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_29_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_29_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.PhoneNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.PhoneNumber.errors.minlength);
} }
function HeaderComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r10.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.country);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["ae", "eg", "sa"]; };
const _c2 = function (a1) { return { initialCountry: "ae", preferredCountries: a1 }; };
class HeaderComponent {
    constructor(formBuilder, sendDemo) {
        this.formBuilder = formBuilder;
        this.sendDemo = sendDemo;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        //private customer_id = this.appComponent.customer_id;
        this.countryList = _countries_with_calling_code_json__WEBPACK_IMPORTED_MODULE_2__;
        this.submitted = false;
    }
    onWindowScroll(e) {
        let element = document.querySelector('.navbar');
        let another = document.querySelector('#navbarSupportedContent');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('navbar-scrolled');
            another.classList.add('navbar-scrolled');
        }
        else {
            element.classList.remove('navbar-scrolled');
            another.classList.remove('navbar-scrolled');
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            First_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Last_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BusinessEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanySize: [''],
            Role: [''],
            Country: [''],
            Product: [''],
            PhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]]
        });
        $('a.nav-link ').click(function () {
            $('a.nav-link ').removeClass('active');
            $(this).addClass('active');
        });
        $('.mainLogo').click(function () { $('a.nav-link').removeClass('active'); });
        $('select.form-control').change(function () {
            $(this).css('color', '#495057');
        });
        this.dropdownList = [
            { item_id: 1, item_text: 'Core HR and Payroll' },
            { item_id: 2, item_text: 'Workforce Management' },
            { item_id: 3, item_text: 'Talent Acquisition' },
            { item_id: 4, item_text: 'Performance Management' },
            { item_id: 5, item_text: 'Government Relations' },
            { item_id: 6, item_text: 'Budgeting' },
            { item_id: 7, item_text: 'Housing' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 7,
            limitSelection: 7,
            allowSearchFilter: false,
        };
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //form submitted
        //alert('SUCCESS!! :-)')
        // $('#ScheduleModal').modal('hide');
        //$('#SuccessPopup').modal('show');
        //Object.keys(this.registerForm.controls).forEach(key => {
        //    this.registerForm.controls[key].setErrors(null)
        //});
        debugger;
        // set demoCountryCallingCode
        this.registerForm.value.PhoneNumber = '(+' + (this.demoCountryCallingCode || 971) + ') ' + this.registerForm.value.PhoneNumber;
        let FormMail = JSON.stringify(this.registerForm.value);
        this.sendDemo.SetSecdualDemo(FormMail);
        //this.registerForm.reset();
        //$("#DemoForm")[0].reset();
    }
    onCountryChange(obj) {
        //console.log(obj);
        this.demoCountryCallingCode = obj.dialCode;
        //alert('country' + obj.name);
    }
    numericOnly(event) {
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_demo_service__WEBPACK_IMPORTED_MODULE_3__["DemoService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 78, vars: 29, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light", "text-white", 3, "scroll"], [1, "navbar-wrapper"], ["routerLink", "", 1, "navbar-brand"], ["id", "u88_img", "routerLinkActive", "active", "src", "assets/images/home/u79.png", "tabindex", "0", 1, "img", "mainLogo"], ["id", "ScheduleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "mx-1"], ["id", "DemoForm", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "id", "firstName", "placeholder", "First Name", "formControlName", "First_Name", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "id", "lastName", "placeholder", "Last Name", "formControlName", "Last_Name", "required", "", 1, "form-control", 3, "ngClass"], ["type", "email", "id", "businessEmail", "placeholder", "Business Email", "formControlName", "BusinessEmail", "required", "", 1, "form-control", 3, "ngClass"], ["type", "text", "ng2TelInput", "", "formControlName", "PhoneNumber", "id", "phoneNumber", "required", "", 1, "form-control", 3, "ng2TelInputOptions", "ngClass", "countryChange", "keypress"], ["type", "text", "id", "company", "placeholder", "Company", "formControlName", "Company", "required", "", 1, "form-control", 3, "ngClass"], ["id", "companySize", "formControlName", "CompanySize", 1, "form-control"], ["selected", "", "value", "", "disabled", ""], ["id", "role", "formControlName", "Role", 1, "form-control"], ["selected", "", "disabled", "", "value", ""], ["id", "country", "formControlName", "Country", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-md-12"], ["id", "product", "formControlName", "Product", 3, "placeholder", "settings", "data"], ["type", "submit", "id", "submitForm", "value", "submit", 2, "display", "none"], ["id", "SendFailed"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "px-4"], ["type", "submit", "id", "sendSchdule", "onclick", "$('#submitForm').trigger('click')", 1, "btn", "btn-primary", "px-5"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_nav_scroll_0_listener($event) { return ctx.onWindowScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Schedule a demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_div_22_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_div_26_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("countryChange", function HeaderComponent_Template_input_countryChange_28_listener($event) { return ctx.onCountryChange($event); })("keypress", function HeaderComponent_Template_input_keypress_28_listener($event) { return ctx.numericOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_div_29_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HeaderComponent_div_33_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Company Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Less than 500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "500 - 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1000 - 5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "5000 - 10000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "More than 10000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "General Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "HR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "IT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HeaderComponent_option_67_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "ng-multiselect-dropdown", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.First_Name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.First_Name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.Last_Name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Last_Name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.BusinessEmail.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.BusinessEmail.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.PhoneNumber.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.PhoneNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.Company.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Company.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Product")("settings", ctx.dropdownSettings)("data", ctx.dropdownList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["MultiSelectComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  \n  \n  width: 100%;\n  padding: 10px;\n  \n  \n  font-family: Muli;\n  font-weight: 700;\n  font-size: 18px;\n  \n  \n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 132px;\n  height: 55px;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   .bi-list[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #fff;\n}\n@media screen and (min-width: 992px) {\n  .navbar[_ngcontent-%COMP%]   #navbarSupportedContent[_ngcontent-%COMP%] {\n    display: block !important;\n    text-align: right;\n  }\n}\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n#SendFailed[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n  font-size: 80%;\n  color: #dc3545;\n  padding-left: 2%;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton.navbar-toggler[_ngcontent-%COMP%]:focus, button.navbar-toggler[_ngcontent-%COMP%]:active, button.navbar-toggler[_ngcontent-%COMP%]:hover, img[_ngcontent-%COMP%]:focus, img[_ngcontent-%COMP%]:active, img[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  border: none;\n  box-shadow: unset;\n  outline: none;\n}\n\n\n.navbar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 15px 15px;\n  padding: 10px 15px;\n  background-color: rgba(21, 21, 27, 0.6);\n  transition: all 0.5s ease;\n}\n.navbar-scrolled[_ngcontent-%COMP%]   .navbar-wrapper[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 10px 20px;\n  font-size: 14px;\n}\n.navbar.navbar-scrolled[_ngcontent-%COMP%] {\n  background-color: #29272a !important;\n  margin: 0 0 !important;\n  padding: 0px;\n}\n.navbar.navbar-scrolled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 102px;\n  height: 42px;\n}\n.navbar.navbar-scrolled[_ngcontent-%COMP%]   a.nav-link.text-white[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n@media screen and (max-width: 992px) {\n  .navbar-wrapper[_ngcontent-%COMP%] {\n    background-color: #000 !important;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFxNYWkubVxcQ2l2aWxzb2Z0V2Vic2l0ZTIwMjBcXFdlYnNpdGUuV2ViVUkvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHVFQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FDQUo7QURFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNEUjtBRElJO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLGlCQUFBO0VDRlY7QUFDRjtBRE1BO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLGNBQUE7QUNISjtBRE1BO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSEo7QURNQSxnSEFBQTtBQUdBOzs7OztFQUFBO0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEo7QURRQTtFQUNJLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDTEo7QURPSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDTFI7QURRSTtFQUNJLDBCQUFBO0FDTlI7QURVQTtFQUNJO0lBQ0ksaUNBQUE7SUFDQSxTQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL011bGktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpOyovXHJcbi5uYXZiYXIge1xyXG4gICAgLyp0b3A6IDMlOyovXHJcbiAgICAvKnotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OyovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiAyJTsqL1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDIlOyovXHJcbiAgICBmb250LWZhbWlseTogTXVsaTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvKm9wYWNpdHk6IC43OyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIxLCAyNywgMC42KTsqL1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAuYmktbGlzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4jU2VuZEZhaWxlZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHBhZGRpbmctbGVmdDoyJTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbi5uYXZiYXItdG9nZ2xlcjpmb2N1cywgYnV0dG9uLm5hdmJhci10b2dnbGVyOmFjdGl2ZSwgYnV0dG9uLm5hdmJhci10b2dnbGVyOmhvdmVyLCBpbWc6Zm9jdXMsIGltZzphY3RpdmUsIGltZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLypidXR0b246aG92ZXIsIC5idG4uYnRuLXByaW1hcnk6aG92ZXIsIC5idG4uYnRuLXByaW1hcnkuZm9jdXMsIC5idG4uYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4uYnRuLXByaW1hcnk6YWN0aXZlKi9cclxuXHJcblxyXG4vKmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSovXHJcbi5uYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwyMSwyNywuNik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItc2Nyb2xsZWQgLm5hdmJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLm5hdmJhci1zY3JvbGxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNzJhICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMnB4O1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgIH1cclxuXHJcbiAgICBhLm5hdi1saW5rLnRleHQtd2hpdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgICAubmF2YmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL011bGktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpOyovXG4ubmF2YmFyIHtcbiAgLyp0b3A6IDMlOyovXG4gIC8qei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk7Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qbWFyZ2luLWxlZnQ6IDIlOyovXG4gIC8qbWFyZ2luLXJpZ2h0OiAyJTsqL1xuICBmb250LWZhbWlseTogTXVsaTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvKm9wYWNpdHk6IC43OyovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjEsIDI3LCAwLjYpOyovXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4ubmF2YmFyIGltZyB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLm5hdmJhciAuYmktbGlzdCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI1NlbmRGYWlsZWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbi5uYXZiYXItdG9nZ2xlcjpmb2N1cywgYnV0dG9uLm5hdmJhci10b2dnbGVyOmFjdGl2ZSwgYnV0dG9uLm5hdmJhci10b2dnbGVyOmhvdmVyLCBpbWc6Zm9jdXMsIGltZzphY3RpdmUsIGltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKmJ1dHRvbjpob3ZlciwgLmJ0bi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi5idG4tcHJpbWFyeS5mb2N1cywgLmJ0bi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi5idG4tcHJpbWFyeTphY3RpdmUqL1xuLypidXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICBvdXRsaW5lOiBub25lO1xufSovXG4ubmF2YmFyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMTVweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyMSwgMjcsIDAuNik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5uYXZiYXItc2Nyb2xsZWQgLm5hdmJhci13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmF2YmFyLm5hdmJhci1zY3JvbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI3MmEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4O1xufVxuLm5hdmJhci5uYXZiYXItc2Nyb2xsZWQgaW1nIHtcbiAgd2lkdGg6IDEwMnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4ubmF2YmFyLm5hdmJhci1zY3JvbGxlZCBhLm5hdi1saW5rLnRleHQtd2hpdGUge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_3__["DemoService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuComponent {
    constructor() { }
    ngOnInit() {
        $('.navbar-nav').on("click", "a:not([data-toggle])", function () {
            $('.navbar-toggler').click();
            $('#myBtn').click();
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 47, vars: 0, consts: [["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hamburger", "hamburger--spin", "collapsed"], [1, "hamburger-box"], [1, "hamburger-inner"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "tabletMode", "text-white", "px-2", "float-right", "mt-2", "btn", "btn-primary", "d-none"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown", "mr-3"], ["id", "company", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "routerLinkActive", "active", 1, "nav-link", "text-white", "dropdown-toggle"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["aria-labelledby", "company", 1, "dropdown-menu"], ["routerLink", "/pages/about", 1, "dropdown-item"], ["routerLink", "/pages/team", 1, "dropdown-item"], ["id", "soultions", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "routerLinkActive", "active", 1, "nav-link", "text-white", "dropdown-toggle"], ["aria-labelledby", "soultions", 1, "dropdown-menu"], ["routerLink", "/pages/CoreHr", 1, "dropdown-item"], ["routerLink", "/pages/TalentAcquisition", 1, "dropdown-item"], ["routerLink", "/pages/PMS", 1, "dropdown-item"], ["routerLink", "/pages/workforce", 1, "dropdown-item"], ["routerLink", "/pages/GovR", 1, "dropdown-item"], ["routerLink", "/pages/budget", 1, "dropdown-item"], ["routerLink", "/pages/housing", 1, "dropdown-item"], [1, "nav-item", "mr-3"], ["routerLink", "/pages/clients", "routerLinkActive", "active", 1, "nav-link", "text-white"], ["href", "http://careers.civilsoft.org/ExternalCand/Home/HomePage", "target", "_blank", 1, "nav-link", "text-white"], ["routerLink", "/pages/contact", "routerLinkActive", "active", 1, "nav-link", "text-white"], [1, "nav-item", "SchedualLg"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "nav-link", "text-white", "px-2", "btn", "btn-primary"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Schedule a demo\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Core HR & Payroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Talent Acquisition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Performance Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Workforce Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Government Relations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Workforce Planning & Budgeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Housing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Schedule a demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]   .bi-list[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: 8px;\n  margin-right: 8px;\n  font-size: 18px;\n  transition: all 0.5s ease;\n}\n.navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #bfaa81 !important;\n}\n.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton.navbar-toggler[_ngcontent-%COMP%]:focus, button.navbar-toggler[_ngcontent-%COMP%]:active, button.navbar-toggler[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  border: none;\n  box-shadow: unset;\n  outline: none;\n}\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.navbar-nav[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%], #navbarSupportedContent[_ngcontent-%COMP%] {\n  float: right;\n}\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  margin-top: 0.79rem;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n@media screen and (max-height: 600px) and (max-width: 991px) {\n  #navbarSupportedContent[_ngcontent-%COMP%] {\n    max-height: 420px;\n    overflow-y: auto;\n  }\n}\n@media screen and (max-width: 991px) {\n  .SchedualLg[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n\n  .navbar-wrapper[_ngcontent-%COMP%] {\n    background-color: #000 !important;\n  }\n\n  #navbarSupportedContent[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    background-color: transparent;\n    border: 0;\n  }\n\n  .dropdown-item[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n@media screen and (max-width: 991px) and (min-width: 420px) {\n  .tabletMode[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .SchedualLg[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.navbar-scrolled#navbarSupportedContent[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUvRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxcaGVhZGVyXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNGUjtBRElJO0VBQ0ksb0JBQUE7QUNGUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRlo7QURLSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0hSO0FETUk7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBRFFBO0VBQ0ksY0FBQTtBQ0xKO0FEUUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtBQ0xKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FETUE7RUFDSSwwQkFBQTtBQ0hKO0FES0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNGTjtBQUNGO0FES0E7RUFDSTtJQUNJLHlCQUFBO0VDSE47O0VES0U7SUFDSSxpQ0FBQTtFQ0ZOOztFREtFO0lBQ0ksV0FBQTtFQ0ZOOztFREtFO0lBQ0kseUJBQUE7SUFDQSw2QkFBQTtJQUNBLFNBQUE7RUNGTjs7RURLRTtJQUNJLFlBQUE7RUNGTjtBQUNGO0FESUE7RUFDSTtJQUNJLHlCQUFBO0VDRk47O0VESUU7SUFDSSx3QkFBQTtFQ0ROO0FBQ0Y7QURJQTtFQUNJLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXIge1xyXG5cclxuICAgIC5iaS1saXN0IHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICB1bC5uYXZiYXItbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHJcbiAgICAgICAgbGkubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhLm5hdi1saW5rOmhvdmVyLCBhLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE5MSwgMTcwLCAxMjksIDEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbi5uYXZiYXItdG9nZ2xlcjpmb2N1cywgYnV0dG9uLm5hdmJhci10b2dnbGVyOmFjdGl2ZSwgYnV0dG9uLm5hdmJhci10b2dnbGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYsIC5oYW1idXJnZXIsICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOjAuNzlyZW07XHJcbn1cclxuaSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDo2MDBweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLy8vLy8vIE1lbnUgIGluIFRhYmVsdCBhbmQgbW9iaWxlIG1vZGUgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpICB7XHJcbiAgICAuU2NoZWR1YWxMZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCwgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGZsb2F0OiBub25lXHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSBhbmQgKG1pbi13aWR0aDo0MjBweCl7XHJcbiAgICAudGFibGV0TW9kZSB7XHJcbiAgICAgICAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLlNjaGVkdWFsTGcge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLXNjcm9sbGVkI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59IiwiLm5hdmJhciAuYmktbGlzdCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIHVsLm5hdmJhci1uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5uYXZiYXIgdWwubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLm5hdmJhciBhLm5hdi1saW5rOmhvdmVyLCAubmF2YmFyIGEubmF2LWxpbmsuYWN0aXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2JmYWE4MSAhaW1wb3J0YW50O1xufVxuLm5hdmJhciBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMsIGJ1dHRvbi5uYXZiYXItdG9nZ2xlcjphY3RpdmUsIGJ1dHRvbi5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubmF2YmFyLW5hdiwgLmhhbWJ1cmdlciwgI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMC43OXJlbTtcbn1cblxuaSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gICAgbWF4LWhlaWdodDogNDIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLlNjaGVkdWFsTGcge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50LCAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAuZHJvcGRvd24taXRlbSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC50YWJsZXRNb2RlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLlNjaGVkdWFsTGcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5hdmJhci1zY3JvbGxlZCNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/contact-us-form/contact-us-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/contact-us-form/contact-us-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactUsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsFormComponent", function() { return ContactUsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-us.service */ "./src/app/services/contact-us.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ContactUsFormComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsFormComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsFormComponent_div_48_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.FullName.errors.required);
} }
function ContactUsFormComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsFormComponent_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsFormComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsFormComponent_div_51_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactUsFormComponent_div_51_div_2_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.Email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.Email.errors.email);
} }
function ContactUsFormComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsFormComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsFormComponent_div_54_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.Subject.errors.required);
} }
function ContactUsFormComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsFormComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsFormComponent_div_57_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.Message.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactUsFormComponent {
    constructor(sendMail, fb) {
        this.sendMail = sendMail;
        this.fb = fb;
        this.submitted = false;
    }
    ngOnInit() {
        this.SendMailForm = this.fb.group({
            FullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    get f() { return this.SendMailForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.SendMailForm.invalid) {
            return;
        }
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SendMailForm.value, null, 4));
        let FormMail = JSON.stringify(this.SendMailForm.value);
        this.sendMail.SetNewMail(FormMail);
    }
}
ContactUsFormComponent.ɵfac = function ContactUsFormComponent_Factory(t) { return new (t || ContactUsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactUsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsFormComponent, selectors: [["app-contact-us-form"]], decls: 109, vars: 17, consts: [["id", "contactUS", 1, "MTB30"], [1, "contactOpacity"], [1, "container-xl", "contact-container"], [1, "contact-label", "text-center", "secName"], [1, "mb6", "text-center"], [1, "row", "office-row"], [1, "col-lg-3", "col-md-6", "office", "order-lg-1", "order-md-2", "order-3"], [1, "office-label"], [1, "uae", "line-dashed"], [1, "row"], [1, "col-2", "uae-cont"], ["src", "assets/images/home/u150.png", 1, "uae-img"], [1, "col-10"], [1, "office-part", "officeSublabel"], [1, "office-part"], ["src", "assets/images/home/u152.png"], ["src", "assets/images/home/iconfinder___Letter_1904660.png", "width", "18"], [1, "egy", "line-dashed"], [1, "col-2", "egy-cont"], ["src", "assets/images/home/u153.png", 1, "uae-img"], [1, "ksa", "line-dashed", "no-line"], ["src", "assets/images/home/u155.png", 1, "uae-img"], [1, "col-md-6", "order-lg-2", "order-md-1", "order-1", "send-part", "form"], ["id", "SendMail", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "FullName", "placeholder", "Full Name", "maxlength", "100", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "formControlName", "Email", "placeholder", "Email Address", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "Subject", "placeholder", "Subject", "maxlength", "100", 1, "form-control", 3, "ngClass"], ["name", "Message", "rows", "5", "cols", "80", "placeholder", "Message", "maxlength", "700", "formControlName", "Message", 1, "form-control", "contact-area", 3, "ngClass"], ["id", "mailFailed"], ["type", "submit", "id", "sendEmail", 2, "display", "none"], [1, "col-lg-3", "col-md-6", "social", "order-lg-3", "order-md-4", "order-4"], [1, "social-label", "d-none", "d-lg-block"], [1, "social-label", "d", "d-lg-none"], [1, "col-lg-12", "col-2", "d-ib"], [1, "facebook", "line-dashed"], [1, "col-md-2", "facebook-cont"], ["href", "https://www.facebook.com/HCMScivilSoft"], ["src", "assets/images/home/u181.png", 1, "facebook-img", "SocialImg"], [1, "col-md-10", "d-none", "d-lg-block"], [1, "social-part"], ["href", "https://www.facebook.com/HCMScivilSoft", "target", "_blank", 1, "social-link"], [1, "linked", "line-dashed"], [1, "col-md-2", "linked-cont"], ["href", "https://www.linkedin.com/company/civilsoft/"], ["src", "assets/images/home/u180.png", 1, "linked-img", "SocialImg"], ["href", "https://www.linkedin.com/company/civilsoft/", "target", "_blank", 1, "social-link"], [1, "twitter", "line-dashed"], [1, "col-md-2", "twitter-cont"], ["href", "https://www.twitter.com/civilsofthcm"], ["src", "assets/images/home/u182.png", 1, "twitter-img", "SocialImg"], ["href", "https://www.twitter.com/civilsofthcm", "target", "_blank", 1, "social-link"], [1, "instagram", "line-dashed", "no-line"], [1, "col-md-2", "instagram-cont"], ["href", "https://www.instagram.com/lifeatcivilsoft/"], ["src", "assets/images/home/u184.png", 1, "instagram-img", "SocialImg"], ["href", "https://www.instagram.com/lifeatcivilsoft/", "target", "_blank", 1, "social-link"], [1, "col-lg-12", "col-md-6", "order-lg-4", "order-md-3", "order-2", "text-center"], ["type", "button", "name", "send", "onclick", "$('#sendEmail').trigger('click')", 1, "px-5", "sendBtn", "btn", "btn-primary", "MBbutton"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ContactUsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Let us hear from you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our Offices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " UAE Office (Head Office) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " +971 4 294 2425 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " info@civilsoft.net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Egypt Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " +2 03 5463496 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " KSA Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " +966 12 690 1491/2/3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsFormComponent_Template_form_ngSubmit_45_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContactUsFormComponent_div_48_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContactUsFormComponent_div_51_Template, 3, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContactUsFormComponent_div_54_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ContactUsFormComponent_div_57_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " error message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Our Socials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "HCMScivilSoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "CivilSoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "civilsofthcm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "lifeatcivilsoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SendMailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.FullName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.FullName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.Email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.Subject.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Subject.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.Message.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Message.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]], styles: ["#contactUS[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u144.png\");\n  background-size: cover;\n  padding: 0;\n  margin: 0;\n}\n#contactUS[_ngcontent-%COMP%]   .mb6[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n}\n#contactUS[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%] {\n  background-color: rgba(251, 249, 244, 0.8980392157);\n  padding-bottom: 35px;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .contact-label[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 15px;\n  text-align: left;\n  border: 1px solid #e4e4e4;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  font-family: \"Muli\";\n  font-size: 14px;\n  font-variation-settings: \"wght\" 400;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .officeSublabel[_ngcontent-%COMP%] {\n  \n  font-style: normal;\n  font-size: 16px;\n  font-variation-settings: \"wght\" 600;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .line-dashed[_ngcontent-%COMP%] {\n  border-bottom: 0.1px dashed #e2e0e0;\n  padding: 10px 0;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .no-line[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 15px;\n  text-align: left;\n  border: 1px solid #e4e4e4;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 20px;\n  margin-right: 20px;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .d-ib[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-part[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .line-dashed[_ngcontent-%COMP%] {\n  border-bottom: 0.1px dashed #e2e0e0;\n  padding: 15px 0;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .line-dashed[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000;\n  font-variation-settings: \"wght\" 600;\n  font-family: \"Muli\";\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .no-line[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .no-line[_ngcontent-%COMP%]   .instagram-img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 24px;\n}\n#contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n#contactUS[_ngcontent-%COMP%]   #nameMessage[_ngcontent-%COMP%], #contactUS[_ngcontent-%COMP%]   #emailMessage[_ngcontent-%COMP%], #contactUS[_ngcontent-%COMP%]   #subjectMessage[_ngcontent-%COMP%], #contactUS[_ngcontent-%COMP%]   #MessageMes[_ngcontent-%COMP%], #contactUS[_ngcontent-%COMP%]   #mailFailed[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 13px;\n  text-align: left;\n  margin-left: 3%;\n  display: none;\n}\n#contactUS[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  \n  padding: 15px;\n  border: 1px solid #e4e4e4;\n}\n#contactUS[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1px solid #e4e4e4;\n  resize: none;\n}\n@media (min-width: 992px) {\n  div.d-lg-block[_ngcontent-%COMP%] {\n    padding-left: 8px;\n  }\n\n  .SocialImg[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n\n  .line-dashed[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n  .line-dashed[_ngcontent-%COMP%]   .col-10[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0LXVzLWZvcm0vRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxcaG9tZVxcY29udGFjdC11cy1mb3JtXFxjb250YWN0LXVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29udGFjdC11cy1mb3JtL2NvbnRhY3QtdXMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFBQTtBQUlBO0VBQ0kscURBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDREo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7QUNGUjtBREtJO0VBQ0ksbURBQUE7RUFDQSxvQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURNUTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNKWjtBRE1ZO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0poQjtBRFNZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1BoQjtBRFVZO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ1JoQjtBRFdZO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0FDVGhCO0FEWVk7RUFDSSxtQkFBQTtBQ1ZoQjtBRGNRO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1paO0FEZVk7RUFDSSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiaEI7QURnQlk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNkaEI7QURpQlk7RUFDSSxrQkFBQTtBQ2ZoQjtBRGtCWTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtBQ2hCaEI7QURrQmdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FDaEJwQjtBRG9CWTtFQUNJLG1CQUFBO0FDbEJoQjtBRG9CZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2xCcEI7QUR3QlE7RUFDSSxnQkFBQTtBQ3RCWjtBRDBCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3hCUjtBRDJCSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDekJSO0FENEJJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDMUJSO0FEOEJBO0VBQ0k7SUFDSSxpQkFBQTtFQzNCTjs7RUQ2QkU7SUFDSSxpQkFBQTtFQzFCTjs7RUQ2Qk07SUFDSSxrQkFBQTtFQzFCVjtFRDZCTTtJQUNJLGtCQUFBO0VDM0JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhY3QtdXMtZm9ybS9jb250YWN0LXVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyppbnB1dDppbnZhbGlkLCBpbnB1dC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG59Ki9cclxuXHJcbiNjb250YWN0VVMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS91MTQ0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5tYjYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdE9wYWNpdHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUxLCAyNDksIDI0NCwgMC44OTgwMzkyMTU2ODYyNzUpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG5cclxuICAgICAgICAuY29udGFjdC1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9mZmljZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI4LCAyMjgsIDIyOCwgMSk7XHJcblxyXG4gICAgICAgICAgICAub2ZmaWNlLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC5vZmZpY2UtcGFydCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm9mZmljZVN1YmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIC8qZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiJzsqL1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmUtZGFzaGVkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMXB4IGRhc2hlZCAjZTJlMGUwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm8tbGluZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjgsIDIyOCwgMjI4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc29jaWFsLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZC1pYiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jaWFsLXBhcnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZS1kYXNoZWQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcHggZGFzaGVkICNlMmUwZTA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm8tbGluZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnN0YWdyYW0taW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuY29udGFjdC1hcmVhIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI25hbWVNZXNzYWdlLCAjZW1haWxNZXNzYWdlLCAjc3ViamVjdE1lc3NhZ2UsICNNZXNzYWdlTWVzLCAjbWFpbEZhaWxlZCB7XHJcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIC8qYm9yZGVyLWNvbG9yOiAjYmZiZmJmOyovXHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xyXG4gICAgICAgIHJlc2l6ZTpub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIGRpdi5kLWxnLWJsb2NrIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5Tb2NpYWxJbWcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmxpbmUtZGFzaGVkIHtcclxuICAgICAgICAuY29sLTIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLTEwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8qaW5wdXQ6aW52YWxpZCwgaW5wdXQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59Ki9cbiNjb250YWN0VVMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lL3UxNDQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4jY29udGFjdFVTIC5tYjYge1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cbiNjb250YWN0VVMgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDI0OSwgMjQ0LCAwLjg5ODAzOTIxNTcpO1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IC5jb250YWN0LWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAub2ZmaWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IC5vZmZpY2UgLm9mZmljZS1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAub2ZmaWNlIC5vZmZpY2UtcGFydCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAub2ZmaWNlIC5vZmZpY2VTdWJsYWJlbCB7XG4gIC8qZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiJzsqL1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDYwMDtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IC5vZmZpY2UgLmxpbmUtZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcHggZGFzaGVkICNlMmUwZTA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IC5vZmZpY2UgLm5vLWxpbmUge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLnNvY2lhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5zb2NpYWwtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5kLWliIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLnNvY2lhbCAuc29jaWFsLXBhcnQge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5saW5lLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDAuMXB4IGRhc2hlZCAjZTJlMGUwO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5saW5lLWRhc2hlZCAuc29jaWFsLWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNjAwO1xuICBmb250LWZhbWlseTogXCJNdWxpXCI7XG59XG4jY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5uby1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbiNjb250YWN0VVMgLmNvbnRhY3RPcGFjaXR5IC5zb2NpYWwgLm5vLWxpbmUgLmluc3RhZ3JhbS1pbWcge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLmNvbnRhY3QtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4jY29udGFjdFVTICNuYW1lTWVzc2FnZSwgI2NvbnRhY3RVUyAjZW1haWxNZXNzYWdlLCAjY29udGFjdFVTICNzdWJqZWN0TWVzc2FnZSwgI2NvbnRhY3RVUyAjTWVzc2FnZU1lcywgI2NvbnRhY3RVUyAjbWFpbEZhaWxlZCB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNjb250YWN0VVMgaW5wdXQge1xuICAvKmJvcmRlci1jb2xvcjogI2JmYmZiZjsqL1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuI2NvbnRhY3RVUyB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGRpdi5kLWxnLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuXG4gIC5Tb2NpYWxJbWcge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG5cbiAgLmxpbmUtZGFzaGVkIC5jb2wtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gIC5saW5lLWRhc2hlZCAuY29sLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us-form',
                templateUrl: './contact-us-form.component.html',
                styleUrls: ['./contact-us-form.component.scss']
            }]
    }], function () { return [{ type: _services_contact_us_service__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/home/slider/slider.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_us_form_contact_us_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us-form/contact-us-form.component */ "./src/app/home/contact-us-form/contact-us-form.component.ts");






class HomeComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'HR & Talent Management System in the Middle East | CivilSoft HCM';
    }
    ngOnInit() {
        //  set meta tags variable
        this.titleService.setTitle(this.title);
        // remove prev meta-tags
        this.metaService.removeTag('name="keywords"');
        this.metaService.removeTag('name="description"');
        this.metaService.removeTag('name="title"');
        this.metaService.removeTag('property="og:type"');
        this.metaService.removeTag('property="og:url"');
        this.metaService.removeTag('property="og:title"');
        this.metaService.removeTag('property="og:description"');
        this.metaService.removeTag('property="og:image"');
        this.metaService.removeTag('property="og:image:width"');
        this.metaService.removeTag('property="twitter:card"');
        this.metaService.removeTag('property="twitter:url"');
        this.metaService.removeTag('property="twitter:title"');
        this.metaService.removeTag('property="twitter:description"');
        this.metaService.removeTag('property="twitter:image"');
        // add new seo meta-tags
        this.metaService.addTags([
            { name: 'keywords', content: 'civilsoft, hr, it' },
            { name: 'description', content: 'CivilSoft develops innovative workforce technologies to help source, develop, and reward talent and increase the rates of return on human capital.' },
            { name: 'title', content: '#1 HR & Talent Management System in the Middle East | CivilSoft HCM' },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "http://www.civilsoft.net/" },
            { property: "og:title", content: "#1 HR & Talent Management System in the Middle East | CivilSoft HCM" },
            { property: "og:description", content: "CivilSoft develops innovative workforce technologies to help source, develop, and reward talent and increase the rates of return on human capital." },
            { property: "og:image", content: "/assets/images/metaTags/Home.png" },
            { property: "twitter:card", content: "summary_large_image" },
            { property: "twitter:url", content: "http://www.civilsoft.net/" },
            { property: "twitter:title", content: "#1 HR & Talent Management System in the Middle East | CivilSoft HCM" },
            { property: "twitter:description", content: "CivilSoft develops innovative workforce technologies to help source, develop, and reward talent and increase the rates of return on human capital." },
            { property: "twitter:image", content: "/assets/images/metaTags/Home.png" }
        ]);
        // go to top
        $('[routerLink]').click(function () {
            $('#myBtn').trigger('click');
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 223, vars: 0, consts: [["id", "about"], [1, "container-xl", "MTB30"], [1, "row"], [1, "col-md-5", "AboutParag"], [1, "mb6", "secName"], [1, "mb6", "F30", "secTit"], [1, "mb6", "F14", "pr-5"], ["routerLink", "/pages/about", 1, "AboutLg", "btn-primary", "btn"], ["src", "./assets/images/home/u71.png"], [1, "col-md-3", "ImgLg"], [1, "ImgCont"], ["src", "assets/images/home/u59.jpg", 1, "NG"], [1, "col-md-4", "AboutContTabCont"], [1, "AboutContTab"], [1, "ImgLeft", "mb-3"], ["src", "assets/images/home/u65.png"], [1, "mb-3", "F16"], [1, "MobParag"], [1, "mb-2", "F16"], [1, "ImgRight", "text-right"], ["src", "assets/images/home/u66.png"], [1, "tit"], [1, "Founder"], [1, "ImgCont", "ImgTab"], ["routerLink", "/pages/about", 1, "AboutTab", "btn", "btn-primary"], ["id", "Gartner", 1, "MTB30", "BGImg"], [1, "GOpacity", "h-100"], [1, "container"], [1, "row", "py-5"], [1, "col-md-4", "GartContImg"], ["src", "assets/images/home/u127.png", 1, "GartImg"], [1, "col-md-8", "GartParag"], [1, "F28"], [1, "only"], [1, "Gartner"], ["id", "solutions"], ["solutions", ""], [1, "solOpacity"], [1, "container", "text-center"], [1, "Soul", "secName"], [1, "secTit"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-xs-12"], [1, "solCont"], [1, "solHover"], ["src", "assets/images/home/SolutionsIcons/hr.png"], ["href", "", "routerLink", "/pages/CoreHr", "routerLinkActive", "active"], [1, "SeeMore"], ["src", "assets/images/home/SolutionsIcons/workforce.png"], ["href", "", "routerLink", "/pages/workforce", "routerLinkActive", "active"], ["src", "assets/images/home/SolutionsIcons/talent.png"], ["href", "", "routerLink", "/pages/TalentAcquisition", "routerLinkActive", "active"], ["src", "assets/images/home/SolutionsIcons/pms.png"], ["href", "", "routerLink", "/pages/PMS", "routerLinkActive", "active"], ["src", "assets/images/home/SolutionsIcons/govr.png"], ["href", "", "routerLink", "/pages/GovR", "routerLinkActive", "active"], ["src", "assets/images/home/SolutionsIcons/budget.png"], ["href", "", "routerLink", "/pages/budget", "routerLinkActive", "active"], ["src", "assets/images/home/SolutionsIcons/housing.png"], ["href", "", "routerLink", "/pages/housing", "routerLinkActive", "active"], ["src", "assets/images/home/solution-payroll.png"], ["id", "clients", 1, "MTB30", "text-center"], [1, "secName"], [1, "mb6", "secTit"], [1, "col-md", "order-sm-12"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/home/u193.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/home/u194.png", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u195.png", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u196.png", "alt", "four slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u197.png", "alt", "five slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u198.png", "alt", "six slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u199.png", "alt", "seven slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u200.png", "alt", "eight slide", 1, "d-block", "w-100"], ["src", "assets/images/home/u201.png", "alt", "nine slide", 1, "d-block", "w-100"], [1, "col-md", "order-sm-1", "clients-logos"], [1, "col-4"], ["src", "assets/images/home/u206.jpg"], ["src", "assets/images/home/u212.jpg"], ["src", "assets/images/home/u213.jpg"], ["src", "assets/images/home/u210.jpg"], ["src", "assets/images/home/u211.jpg"], ["src", "assets/images/home/u209.jpg"], ["src", "assets/images/home/u208.jpg"], ["src", "assets/images/home/u205.jpg"], ["src", "assets/images/home/u207.jpg"], ["routerLink", "/pages/clients", 1, "MTB30", "btn", "btn-primary", "px-4", "MBbutton"], ["id", "Ready", 1, "MTB30", "BGImg"], [1, "ReadyOpacitty", "h-100"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn", "btn-primary", "BtnLg", "px-5"], ["id", "Ourteam"], [1, "row", 2, "margin-right", "0px", "margin-left", "0px"], [1, "col-md-7", "col-xs-12", "ImgTeam"], [1, "col-md-5", "order-sm-12"], [1, "team"], [1, "mb6"], ["routerLink", "/pages/team", 1, "btn", "btn-primary", "px-4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#1 in the Middle East");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CivilSoft is an enterprise software company specialized in Strategy Execution and Human Capital Management. Founded in 1994, the company focuses on emerging markets, and has achieved a wide footprint across the MENA region and Indian subcontinent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " CivilSoft develops innovative and cutting-edge workforce technologies to help source, develop, and reward talent and increase the rates of return on human capital. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Learn more about us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Software programming has always been my passion and profession, Producing Arab-developed software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " business solutions,with international standards, has always been my dream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Vision, perfection, aspiration, integrity, precision, commitment, achievement, innovation and control are our core values and we, at CivilSoft, believe that these values will certainly pave the way to our company to become one of the leading software houses in the world. We will always want to do the right thing, WE CAN AND WE WILL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mohamed Nagdy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Founder of the company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Learn more about us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Middle-East based Vendor recognized in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Gartner's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " market guide for cloud HCM suites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " A modern, comprehensive HCM suite for all of your HR needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Core HR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Workforce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Talent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Acquisition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Relations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Budgeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Housing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Payroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " See more > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Our Clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h2", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Learned from the World's Best Organizations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " View our clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Ready to begin your transformation journey?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Whether it's achieving strategic alignment, securing the right talent, improving employee performance, or optimizing expenditure, we'd love to help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Our Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " The best thing about CivilSoft, is the talent behind it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Each an expert in their own field, but passion, perseverance, and a strong customer focus are the common denominator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Meet the Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "app-contact-us-form");
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _contact_us_form_contact_us_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsFormComponent"]], styles: ["input[_ngcontent-%COMP%]:invalid, input.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n}\n\n.m0auto[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"robotoSlab\";\n}\n.ImgCont[_ngcontent-%COMP%] {\n  border: 1px solid #bfaa81;\n  padding: 4px;\n  width: 100%;\n  margin: auto;\n}\n#about[_ngcontent-%COMP%]   .ImgLg[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-left: -10px;\n}\n#about[_ngcontent-%COMP%]   .ImgCont[_ngcontent-%COMP%] {\n  width: 286px;\n  height: 406px;\n}\n#about[_ngcontent-%COMP%]   .ImgCont[_ngcontent-%COMP%]   .NG[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#about[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 450;\n  font-style: normal;\n  font-size: 16px;\n  color: #AF2F20;\n  margin-bottom: 0;\n}\n#about[_ngcontent-%COMP%]   .Founder[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666666;\n}\n#about[_ngcontent-%COMP%]   .AboutTab[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n  display: none;\n}\n#about[_ngcontent-%COMP%]   .F16[_ngcontent-%COMP%] {\n  line-height: normal;\n  font-family: \"Muli\";\n  font-variation-settings: \"wght\" 600;\n  font-style: normal;\n  font-size: 16px;\n  color: rgba(28, 28, 35, 0.6);\n}\n.MTB30[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Muli  Roman\", \"Muli\";\n}\n.mb6[_ngcontent-%COMP%] {\n  margin-bottom: 6%;\n}\n\n.F14[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n}\n.F30[_ngcontent-%COMP%] {\n  color: #3D3D4B;\n}\n.F28[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n#Gartner[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u125.png\");\n  \n}\n#Gartner[_ngcontent-%COMP%]   .GartImg[_ngcontent-%COMP%] {\n  width: 234px;\n  height: 74px;\n}\n#Gartner[_ngcontent-%COMP%]   .GOpacity[_ngcontent-%COMP%] {\n  background-color: rgba(242, 242, 242, 0.8);\n  \n}\n#Gartner[_ngcontent-%COMP%]   .Gartner[_ngcontent-%COMP%] {\n  color: #3F81B4;\n}\n#Gartner[_ngcontent-%COMP%]   .only[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n#Gartner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-weight: 400;\n}\n@media (min-width: 1200px) {\n  .GartParag[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-right: 145px;\n  }\n}\n#solutions[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u2.jpg\");\n  padding: 0;\n  background-attachment: fixed;\n  background-size: cover;\n}\n#solutions[_ngcontent-%COMP%]   .Soul[_ngcontent-%COMP%] {\n  color: #BFAA81;\n  margin-bottom: 1.5rem;\n}\n#solutions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin-bottom: 4%;\n  font-family: \"robotoslab\";\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%] {\n  background-color: rgba(28, 28, 35, 0.8980392157);\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%] {\n  border: 1px dotted white;\n  text-align: center;\n  height: 200px;\n  display: table;\n  width: 100%;\n  margin-bottom: 35px;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  position: relative;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px auto 15px;\n  max-width: 50px;\n  height: auto !important;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 20%;\n  height: 50%;\n  fill: #bfaa81 !important;\n  margin-bottom: -2%;\n  \n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #bfaa81;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   .zoom-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  zoom: 0.2;\n  width: 30%;\n  padding-top: 10%;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   .st0[_ngcontent-%COMP%] {\n  fill: #bfaa81;\n}\n#solutions[_ngcontent-%COMP%]   .solOpacity[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]   .solHover[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  color: #FFFFFF;\n  text-align: center;\n  font-family: \"RobotoSlab\";\n  padding-bottom: 1rem;\n}\n#solutions[_ngcontent-%COMP%]   .SeeMore[_ngcontent-%COMP%] {\n  color: #bfaa81;\n  position: absolute;\n  bottom: -5px;\n  transition: bottom 1s ease;\n  visibility: hidden;\n  left: 37%;\n  font-size: 14px;\n}\n#solutions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n#solutions[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]:hover   .solHover[_ngcontent-%COMP%] {\n  background-color: rgba(191, 170, 129, 0.2);\n  \n}\n#solutions[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#solutions[_ngcontent-%COMP%]   .solCont[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .SeeMore[_ngcontent-%COMP%] {\n  bottom: 8px;\n  display: block;\n  opacity: 1;\n  visibility: visible;\n}\n#clients[_ngcontent-%COMP%] {\n  \n  \n}\n#clients[_ngcontent-%COMP%]   .clients-logos[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n#clients[_ngcontent-%COMP%]   .clients-logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  height: 100%;\n}\n#Ready[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u130.jpg\");\n  height: 250px;\n}\n#Ready[_ngcontent-%COMP%]   .ReadyOpacitty[_ngcontent-%COMP%] {\n  background-color: rgba(242, 242, 242, 0.6);\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n#Ready[_ngcontent-%COMP%]   .ReadyOpacitty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #1d0606;\n}\n#Ready[_ngcontent-%COMP%]   .ReadyOpacitty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-size: 14px;\n  font-variation-settings: \"wght\" 400;\n  color: #1d0606;\n  width: 80%;\n  margin: 2% auto;\n}\n#Ourteam[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\n  padding-top: 6%;\n  padding-bottom: 6%;\n}\n#Ourteam[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333333;\n  font-family: \"Muli\";\n}\n#Ourteam[_ngcontent-%COMP%]   .ImgTeam[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u136.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nlabel[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-weight: 700;\n  font-size: 16px;\n  color: #3D3D4B;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-size: 30px;\n  color: #3D3D4B;\n  font-weight: 400;\n}\n@media all and (max-width: 1152px) {\n  \n  #about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  #about[_ngcontent-%COMP%]   .F16[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  #about[_ngcontent-%COMP%]   .AboutLg[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .ImgLg[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #about[_ngcontent-%COMP%]   .AboutTab[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 2% auto;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%] {\n    background-color: #f5f2eb;\n    \n    position: relative;\n    width: 94%;\n    padding: 3%;\n    padding-right: 15%;\n  }\n  #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 4%;\n    width: 154px;\n    height: 218px;\n    right: -5%;\n  }\n  #about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0px;\n    max-width: 100%;\n  }\n  #about[_ngcontent-%COMP%]   .ImgRight[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    margin-bottom: 0%;\n  }\n  #about[_ngcontent-%COMP%]   .mb6[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n    margin-top: 2%;\n  }\n  #about[_ngcontent-%COMP%]   .AboutParag[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 100%;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTabCont[_ngcontent-%COMP%] {\n    flex: 100%;\n    max-width: 95%;\n    margin: auto;\n  }\n}\n@media (max-width: 991.98px) {\n  .col-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .GartParag[_ngcontent-%COMP%]   .F28[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    margin-top: 20px;\n  }\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .line-dashed[_ngcontent-%COMP%] {\n    border-bottom: none;\n    padding: 15px 0;\n  }\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%] {\n    margin: 38px 0 0 0;\n  }\n}\n@media all and (max-width: 850px) {\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%] {\n    padding-right: 23%;\n    margin-bottom: 4%;\n  }\n}\n@media all and (max-width: 768px) {\n  #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 200px;\n  }\n\n  #Gartner[_ngcontent-%COMP%]   .GartContImg[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 30%;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartContImg[_ngcontent-%COMP%]   .GartImg[_ngcontent-%COMP%] {\n    width: 167px;\n    height: 53px;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartParag[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartParag[_ngcontent-%COMP%]   p.F28[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  #solutions[_ngcontent-%COMP%]   .Soul[_ngcontent-%COMP%], #clients[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  h2[_ngcontent-%COMP%], #Ready[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  #Ourteam[_ngcontent-%COMP%]   .ImgTeam[_ngcontent-%COMP%] {\n    height: 310px;\n  }\n  #Ourteam[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .ImgTeam[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ReadyOpacitty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 2% 0;\n  }\n\n  .ReadyOpacitty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 4%;\n  }\n}\n@media all and (max-width: 750px) {\n  .GartParag[_ngcontent-%COMP%]   p.F28[_ngcontent-%COMP%] {\n    padding-left: 4%;\n  }\n}\n@media all and (max-width: 600px) {\n  .AboutContTab[_ngcontent-%COMP%] {\n    padding-right: 31% !important;\n  }\n}\n@media all and (max-width: 500px) {\n  #Gartner[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartContImg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding-bottom: 3%;\n    \n  }\n  #Gartner[_ngcontent-%COMP%]   .GartContImg[_ngcontent-%COMP%]   .GartImg[_ngcontent-%COMP%] {\n    width: 102px;\n    height: 32px;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartParag[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  #Gartner[_ngcontent-%COMP%]   .GartParag[_ngcontent-%COMP%]   p.F28[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  #solutions[_ngcontent-%COMP%] {\n    background-image: unset;\n  }\n  #solutions[_ngcontent-%COMP%]   .secName[_ngcontent-%COMP%] {\n    padding-top: 8%;\n    letter-spacing: 1rem;\n  }\n}\n@media all and (max-width: 425px) {\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n    padding: 0 30px;\n  }\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .send-part[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  #contactUS[_ngcontent-%COMP%]   .contactOpacity[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%] {\n    margin: 10px 0 20px 0;\n  }\n\n  #about[_ngcontent-%COMP%] {\n    \n  }\n  #about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: 60%;\n  }\n  #about[_ngcontent-%COMP%]   .mb6[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n  }\n  #about[_ngcontent-%COMP%]   .F16[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%] {\n    padding-right: 3% !important;\n    width: 100%;\n    margin-top: 5%;\n  }\n  #about[_ngcontent-%COMP%]   .MobParag[_ngcontent-%COMP%] {\n    width: 64%;\n    display: block;\n    margin-bottom: 2%;\n  }\n  #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    top: -9%;\n    width: 93px;\n    height: 125px;\n    right: 4%;\n  }\n\n  .zoom-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    padding-left: 5%;\n  }\n\n  #Ourteam[_ngcontent-%COMP%]   .ImgTeam[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #Ourteam[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .ImgTeam[_ngcontent-%COMP%] {\n    display: block;\n    height: 162px;\n    margin-bottom: 6%;\n  }\n\n  #Ready[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  #Ready[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 6%;\n  }\n  #Ready[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 4% 0;\n  }\n\n  #clients[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n}\n@media all and (max-width: 375px) {\n  #about[_ngcontent-%COMP%] {\n    \n  }\n  #about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: 70%;\n  }\n}\n@media all and (max-width: 330px) {\n  #about[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    top: -5%;\n    width: 80px;\n    height: 115px;\n  }\n}\n@media all and (max-width: 320px) {\n  .ImgTeam[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/home/teamMob.png\");\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBQUE7QUFJQTtFQUNJLGdDQUFBO0FDREo7QURJQTs7OztFQUFBO0FBTUE7RUFDSSxjQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNGSjtBREtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjtBRE1JO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDSFI7QURNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDSlI7QURNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSlo7QURVSTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtBQ1ZSO0FEYUk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ1hSO0FEZUE7RUFDSSxjQUFBO0FDWko7QURlQTtFQUNJLGtDQUFBO0FDWko7QURlQTtFQUNJLGlCQUFBO0FDWko7QURlQTs7Ozs7RUFBQTtBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksY0FBQTtBQ2JKO0FEZ0JBO0VBQ0ksZUFBQTtBQ2JKO0FEZ0JBO0VBQ0kscURBQUE7RUFDQSxpQkFBQTtBQ2JKO0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNkUjtBRGlCSTtFQUNJLDBDQUFBO0VBQ0E7c0JBQUE7QUNkUjtBRGtCSTtFQUNJLGNBQUE7QUNoQlI7QURtQkk7RUFDSSxnQkFBQTtBQ2pCUjtBRG9CSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNsQlI7QURzQkE7RUFDSTtJQUNJLG9CQUFBO0VDbkJOO0FBQ0Y7QUR1QkE7RUFDSSxtREFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDckJKO0FEdUJJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDckJSO0FEd0JJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUN0QlI7QUR5Qkk7RUFDSSxnREFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3ZCUjtBRHlCUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3ZCWjtBRHlCWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3ZCaEI7QUR5QmdCO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDdkJwQjtBRDBCZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FDeEJwQjtBRHlCb0I7RUFDSSxlQUFBO0FDdkJ4QjtBRDRCb0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDMUJ4QjtBRDhCZ0I7RUFDSSxhQUFBO0FDNUJwQjtBRCtCZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUM3QnBCO0FEbUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ2pDUjtBRG9DSTtFQUNJLGdDQUFBO0FDbENSO0FEc0NRO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQ3BDWjtBRHVDUTtFQUNJLGVBQUE7QUNyQ1o7QUR1Q1k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ3JDaEI7QUQ0Q0E7RUFDSSx5Q0FBQTtFQVVBLElBQUE7QUNsREo7QUR5Q0k7RUFDSSxnQkFBQTtBQ3ZDUjtBRHlDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ3ZDWjtBRDZDQTtFQUNJLHFEQUFBO0VBQ0EsYUFBQTtBQzFDSjtBRDRDSTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDMUNSO0FENENRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMxQ1o7QUQ2Q1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQzNDWjtBRGtESTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQ2hEUjtBRGtEUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ2hEWjtBRG9ESTtFQUNJLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDbERSO0FEd0RBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDckRKO0FEd0RBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDckRKO0FEd0RBO0VBQ0k7Ozs7O0lBQUE7RUFPSTtJQUNJLHFCQUFBO0VDdERWO0VEeURNO0lBQ0ksZUFBQTtFQ3ZEVjtFRDBETTtJQUNJLGFBQUE7RUN4RFY7RUQyRE07SUFDSSx5QkFBQTtJQUNBLGVBQUE7RUN6RFY7RUQ0RE07SUFDSSx5QkFBQTtJQUNBLGtDQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDMURWO0VENkRNO0lBQ0ksa0JBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VDM0RWO0VEOERNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDNURWO0VEK0RNO0lBQ0ksaUJBQUE7RUM3RFY7RURnRU07SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUM5RFY7RURpRU07SUFDSSxlQUFBO0lBQ0EsVUFBQTtFQy9EVjtFRGtFTTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ2hFVjtBQUNGO0FEb0VBO0VBQ0k7SUFDSSxVQUFBO0VDbEVOOztFRG9FRTtJQUNJLGVBQUE7RUNqRU47O0VEcUVVO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VDbEVkO0VEb0VjO0lBQ0ksbUJBQUE7SUFDQSxlQUFBO0VDbEVsQjtFRHNFVTtJQUNJLGtCQUFBO0VDcEVkO0FBQ0Y7QUR5RUE7RUFFUTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUN4RVY7QUFDRjtBRDRFQTtFQUdRO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUM1RVY7O0VEaUZNO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0VDOUVWO0VEZ0ZVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUM5RWQ7RURrRk07SUFDSSxVQUFBO0VDaEZWO0VEa0ZVO0lBQ0ksZUFBQTtFQ2hGZDs7RURxRkU7SUFDSSxlQUFBO0VDbEZOOztFRHFGRTtJQUNJLDBCQUFBO0VDbEZOOztFRHNGTTtJQUNJLGFBQUE7RUNuRlY7RUR1RlU7SUFDSSxhQUFBO0VDckZkOztFRDBGRTtJQUNJLGFBQUE7RUN2Rk47O0VEMEZFO0lBQ0ksY0FBQTtFQ3ZGTjtBQUNGO0FEMEZBO0VBQ0k7SUFFSSxnQkFBQTtFQ3pGTjtBQUNGO0FENEZBO0VBQ0k7SUFDSSw2QkFBQTtFQzFGTjtBQUNGO0FENkZBO0VBQ0k7SUFDSSxrQkFBQTtFQzNGTjtFRDZGTTtJQUNJLGNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzNGVjtFRDZGVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDM0ZkO0VEK0ZNO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUM3RlY7RURnR1U7SUFDSSxlQUFBO0VDOUZkOztFRGtHRTtJQUNJLHVCQUFBO0VDL0ZOO0VEZ0dNO0lBQ0ksZUFBQTtJQUNBLG9CQUFBO0VDOUZWO0FBQ0Y7QURtR0E7RUFHWTtJQUNJLGVBQUE7RUNuR2Q7RURxR2M7SUFDSSxVQUFBO0VDbkdsQjtFRHVHYztJQUNJLHFCQUFBO0VDckdsQjs7RUQyR0U7SUFDSSxtQkFBQTtFQ3hHTjtFRDBHTTtJQUNJLGVBQUE7RUN4R1Y7RUQyR007SUFDSSxpQkFBQTtFQ3pHVjtFRDRHTTtJQUNJLGVBQUE7RUMxR1Y7RUQ2R007SUFDSSw0QkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDM0dWO0VEOEdNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQzVHVjtFRCtHTTtJQUNJLFFBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7RUM3R1Y7O0VEa0hNO0lBQ0ksZ0JBQUE7RUMvR1Y7O0VEc0hNO0lBQ0ksYUFBQTtFQ25IVjtFRHVIVTtJQUNJLGNBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUNySGQ7O0VEMEhFO0lBQ0ksYUFBQTtFQ3ZITjtFRHlITTtJQUNJLGNBQUE7RUN2SFY7RUQwSE07SUFDSSxhQUFBO0VDeEhWOztFRDRIRTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtFQ3pITjtBQUNGO0FENkhBO0VBQ0k7SUFDSSxtQkFBQTtFQzNITjtFRDZITTtJQUNJLGVBQUE7RUMzSFY7QUFDRjtBRCtIQTtFQUVRO0lBQ0ksUUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDOUhWO0FBQ0Y7QURrSUE7RUFHSTtJQUNJLHdEQUFBO0VDbElOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypidXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59Ki9cclxuXHJcbmlucHV0OmludmFsaWQsIGlucHV0Lm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSovXHJcblxyXG4ubTBhdXRvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG9TbGFiJztcclxufVxyXG5cclxuLkltZ0NvbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTEsIDE3MCwgMTI5LCAxKTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jYWJvdXQge1xyXG4gICAgLkltZ0xnIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuSW1nQ29udCB7XHJcbiAgICAgICAgd2lkdGg6IDI4NnB4O1xyXG4gICAgICAgIGhlaWdodDogNDA2cHg7XHJcblxyXG4gICAgICAgIC5ORyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiJztcclxuICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDUwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNBRjJGMjA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuRm91bmRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgfVxyXG5cclxuICAgIC5BYm91dFRhYiwgLkltZ1RhYiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuRjE2IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XHJcbiAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDYwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI4LCAyOCwgMzUsIDAuNik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5NVEIzMCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ011bGkgIFJvbWFuJywgJ011bGknO1xyXG59XHJcblxyXG4ubWI2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG59XHJcblxyXG4vKi5GMTYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDM1LCAwLjYpO1xyXG59Ki9cclxuXHJcbi5GMTQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uRjMwIHtcclxuICAgIGNvbG9yOiAjM0QzRDRCO1xyXG59XHJcblxyXG4uRjI4IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuI0dhcnRuZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS91MTI1LnBuZ1wiKTtcclxuICAgIC8qaGVpZ2h0OiAyMDBweDsqL1xyXG5cclxuXHJcbiAgICAuR2FydEltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIzNHB4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgIH1cclxuXHJcbiAgICAuR09wYWNpdHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC44MCk7XHJcbiAgICAgICAgLypwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMlOyovXHJcbiAgICB9XHJcblxyXG4gICAgLkdhcnRuZXIge1xyXG4gICAgICAgIGNvbG9yOiAjM0Y4MUI0O1xyXG4gICAgfVxyXG5cclxuICAgIC5vbmx5IHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuR2FydFBhcmFnIHAge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuI3NvbHV0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lL3UyLmpwZ1wiKTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAuU291bCB7XHJcbiAgICAgICAgY29sb3I6ICNCRkFBODE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJyb2JvdG9zbGFiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvbE9wYWNpdHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDI4LCAzNSwgMC44OTgwMzkyMTU2ODYyNzUpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcblxyXG4gICAgICAgIC5zb2xDb250IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggZG90dGVkIHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHJcbiAgICAgICAgICAgIC5zb2xIb3ZlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2JmYWE4MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yJTtcclxuICAgICAgICAgICAgICAgICAgICAvKmJveC1zaGFkb3c6IDRweCA0cHggN3B4IDNweCByZ2JhKDE5MSwxNzAsMTI5LDAuNSk7Ki9cclxuICAgICAgICAgICAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjYmZhYTgxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuem9vbS1zdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IDAuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0MCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2JmYWE4MTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5TZWVNb3JlIHtcclxuICAgICAgICBjb2xvcjogI2JmYWE4MTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAxcyBlYXNlO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBsZWZ0OiAzNyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2xDb250OmhvdmVyIHtcclxuICAgICAgICAuc29sSG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTcwLCAxMjksIDAuMik7XHJcbiAgICAgICAgICAgIC8qY3Vyc29yOiBwb2ludGVyOyovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLlNlZU1vcmUge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuI2NsaWVudHMge1xyXG4gICAgLypAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgeyovXHJcbiAgICAuY2xpZW50cy1sb2dvcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKn0qL1xyXG59XHJcblxyXG4jUmVhZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS91MTMwLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgLlJlYWR5T3BhY2l0dHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgLjYpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzFkMDYwNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWQwNjA2O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIlIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jT3VydGVhbSB7XHJcblxyXG4gICAgLnRlYW0ge1xyXG4gICAgICAgIC8vIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2JTtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuSW1nVGVhbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS91MTM2LmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzRDNENEI7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzNEM0Q0QjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MTE1MnB4KSB7XHJcbiAgICAvKiNhYm91dCB7XHJcbiAgICAgICAgLkltZ0NvbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG4gICAgI2Fib3V0IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkYxNiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5BYm91dExnLCAuSW1nTGcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFib3V0VGFiLCAuSW1nVGFiIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFib3V0Q29udFRhYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDIsIDIzNSwgMSk7XHJcbiAgICAgICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlOyovXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICAgICAgcGFkZGluZzogMyU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JbWdUYWIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMThweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JbWdSaWdodCwgLnRpdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1iNiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5BYm91dFBhcmFnIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFib3V0Q29udFRhYkNvbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAuY29sLTQgaW1nIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLkdhcnRQYXJhZyAuRjI4IHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAjY29udGFjdFVTIHtcclxuICAgICAgICAuY29udGFjdE9wYWNpdHkge1xyXG4gICAgICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpbmUtZGFzaGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbmRCdG4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzOHB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgI2Fib3V0IHtcclxuICAgICAgICAuQWJvdXRDb250VGFiIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjMlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjQlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAjYWJvdXQge1xyXG4gICAgICAgIC5JbWdUYWIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNHYXJ0bmVyIHtcclxuICAgICAgICAuR2FydENvbnRJbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcblxyXG4gICAgICAgICAgICAuR2FydEltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTY3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5HYXJ0UGFyYWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG5cclxuICAgICAgICAgICAgcC5GMjgge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzb2x1dGlvbnMgLlNvdWwsICNjbGllbnRzIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIsICNSZWFkeSBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI091cnRlYW0ge1xyXG4gICAgICAgIC5JbWdUZWFtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtIHtcclxuICAgICAgICAgICAgLkltZ1RlYW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuUmVhZHlPcGFjaXR0eSBwIHtcclxuICAgICAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5SZWFkeU9wYWNpdHR5IGgyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo3NTBweCl7XHJcbiAgICAuR2FydFBhcmFnIHAuRjI4IHtcclxuICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuQWJvdXRDb250VGFiIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICNHYXJ0bmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5HYXJ0Q29udEltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICAvKnBhZGRpbmctdG9wOiA0JTsqL1xyXG5cclxuICAgICAgICAgICAgLkdhcnRJbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuR2FydFBhcmFnIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHAuRjI4IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNzb2x1dGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0O1xyXG4gICAgICAgIC5zZWNOYW1le1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo4JTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgI2NvbnRhY3RVUyB7XHJcbiAgICAgICAgLmNvbnRhY3RPcGFjaXR5IHtcclxuICAgICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuc2VuZC1wYXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VuZEJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNhYm91dCB7XHJcbiAgICAgICAgLyptYXJnaW4tdG9wOiAzMyU7Ki9cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYjYge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5GMTYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuQWJvdXRDb250VGFiIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLk1vYlBhcmFnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY0JTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkltZ1RhYiB7XHJcbiAgICAgICAgICAgIHRvcDogLTklO1xyXG4gICAgICAgICAgICB3aWR0aDogOTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDQlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuem9vbS1zdmcge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgI091cnRlYW0ge1xyXG4gICAgICAgIC5JbWdUZWFtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtIHtcclxuICAgICAgICAgICAgLkltZ1RlYW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjUmVhZHkge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNCUgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2NsaWVudHMgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgI2Fib3V0IHtcclxuICAgICAgICAvKm1hcmdpbi10b3A6IDc3JTsqL1xyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozMzBweCl7XHJcbiAgICAjYWJvdXQge1xyXG4gICAgICAgIC5JbWdUYWIge1xyXG4gICAgICAgICAgICB0b3A6IC01JTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICBcclxuXHJcbiAgICAuSW1nVGVhbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS90ZWFtTW9iLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCIvKmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufSovXG5pbnB1dDppbnZhbGlkLCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi8qbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0qL1xuLm0wYXV0byB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJyb2JvdG9TbGFiXCI7XG59XG5cbi5JbWdDb250IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYWE4MTtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jYWJvdXQgLkltZ0xnIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuI2Fib3V0IC5JbWdDb250IHtcbiAgd2lkdGg6IDI4NnB4O1xuICBoZWlnaHQ6IDQwNnB4O1xufVxuI2Fib3V0IC5JbWdDb250IC5ORyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jYWJvdXQgLnRpdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQ1MDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjQUYyRjIwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI2Fib3V0IC5Gb3VuZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjY2Njtcbn1cbiNhYm91dCAuQWJvdXRUYWIsICNhYm91dCAuSW1nVGFiIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNhYm91dCAuRjE2IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYmEoMjgsIDI4LCAzNSwgMC42KTtcbn1cblxuLk1UQjMwIHtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJNdWxpICBSb21hblwiLCBcIk11bGlcIjtcbn1cblxuLm1iNiB7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuXG4vKi5GMTYge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMjgsIDI4LCAzNSwgMC42KTtcbn0qL1xuLkYxNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLkYzMCB7XG4gIGNvbG9yOiAjM0QzRDRCO1xufVxuXG4uRjI4IHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4jR2FydG5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTEyNS5wbmdcIik7XG4gIC8qaGVpZ2h0OiAyMDBweDsqL1xufVxuI0dhcnRuZXIgLkdhcnRJbWcge1xuICB3aWR0aDogMjM0cHg7XG4gIGhlaWdodDogNzRweDtcbn1cbiNHYXJ0bmVyIC5HT3BhY2l0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC44KTtcbiAgLypwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTsqL1xufVxuI0dhcnRuZXIgLkdhcnRuZXIge1xuICBjb2xvcjogIzNGODFCNDtcbn1cbiNHYXJ0bmVyIC5vbmx5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNHYXJ0bmVyIHAge1xuICBmb250LWZhbWlseTogXCJNdWxpXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLkdhcnRQYXJhZyBwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNDVweDtcbiAgfVxufVxuI3NvbHV0aW9ucyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTIuanBnXCIpO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuI3NvbHV0aW9ucyAuU291bCB7XG4gIGNvbG9yOiAjQkZBQTgxO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4jc29sdXRpb25zIGgyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBmb250LWZhbWlseTogXCJyb2JvdG9zbGFiXCI7XG59XG4jc29sdXRpb25zIC5zb2xPcGFjaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgMjgsIDM1LCAwLjg5ODAzOTIxNTcpO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cbiNzb2x1dGlvbnMgLnNvbE9wYWNpdHkgLnNvbENvbnQge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuI3NvbHV0aW9ucyAuc29sT3BhY2l0eSAuc29sQ29udCAuc29sSG92ZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jc29sdXRpb25zIC5zb2xPcGFjaXR5IC5zb2xDb250IC5zb2xIb3ZlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMTVweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbiNzb2x1dGlvbnMgLnNvbE9wYWNpdHkgLnNvbENvbnQgLnNvbEhvdmVyIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNTAlO1xuICBmaWxsOiAjYmZhYTgxICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC0yJTtcbiAgLypib3gtc2hhZG93OiA0cHggNHB4IDdweCAzcHggcmdiYSgxOTEsMTcwLDEyOSwwLjUpOyovXG59XG4jc29sdXRpb25zIC5zb2xPcGFjaXR5IC5zb2xDb250IC5zb2xIb3ZlciBzdmcgcGF0aCB7XG4gIHN0cm9rZTogI2JmYWE4MTtcbn1cbiNzb2x1dGlvbnMgLnNvbE9wYWNpdHkgLnNvbENvbnQgLnNvbEhvdmVyIC56b29tLXN2ZyBzdmcge1xuICB6b29tOiAwLjI7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG4jc29sdXRpb25zIC5zb2xPcGFjaXR5IC5zb2xDb250IC5zb2xIb3ZlciAuc3QwIHtcbiAgZmlsbDogI2JmYWE4MTtcbn1cbiNzb2x1dGlvbnMgLnNvbE9wYWNpdHkgLnNvbENvbnQgLnNvbEhvdmVyIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4jc29sdXRpb25zIC5TZWVNb3JlIHtcbiAgY29sb3I6ICNiZmFhODE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICB0cmFuc2l0aW9uOiBib3R0b20gMXMgZWFzZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBsZWZ0OiAzNyU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNzb2x1dGlvbnMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuI3NvbHV0aW9ucyAuc29sQ29udDpob3ZlciAuc29sSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTcwLCAxMjksIDAuMik7XG4gIC8qY3Vyc29yOiBwb2ludGVyOyovXG59XG4jc29sdXRpb25zIC5zb2xDb250OmhvdmVyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc29sdXRpb25zIC5zb2xDb250OmhvdmVyIGEgLlNlZU1vcmUge1xuICBib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbiNjbGllbnRzIHtcbiAgLypAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgeyovXG4gIC8qfSovXG59XG4jY2xpZW50cyAuY2xpZW50cy1sb2dvcyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4jY2xpZW50cyAuY2xpZW50cy1sb2dvcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jUmVhZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lL3UxMzAuanBnXCIpO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuI1JlYWR5IC5SZWFkeU9wYWNpdHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjYpO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cbiNSZWFkeSAuUmVhZHlPcGFjaXR0eSBoMiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMxZDA2MDY7XG59XG4jUmVhZHkgLlJlYWR5T3BhY2l0dHkgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xuICBjb2xvcjogIzFkMDYwNjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyJSBhdXRvO1xufVxuXG4jT3VydGVhbSAudGVhbSB7XG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1ib3R0b206IDYlO1xufVxuI091cnRlYW0gLnRlYW0gcCB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogXCJNdWxpXCI7XG59XG4jT3VydGVhbSAuSW1nVGVhbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTEzNi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogXCJNdWxpXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzRDNENEI7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYlwiO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjM0QzRDRCO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIHtcbiAgLyojYWJvdXQge1xuICAgICAgLkltZ0NvbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgfSovXG4gICNhYm91dCBwIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2Fib3V0IC5GMTYge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAjYWJvdXQgLkFib3V0TGcsICNhYm91dCAuSW1nTGcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2Fib3V0IC5BYm91dFRhYiwgI2Fib3V0IC5JbWdUYWIge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyJSBhdXRvO1xuICB9XG4gICNhYm91dCAuQWJvdXRDb250VGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMmViO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlOyovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5NCU7XG4gICAgcGFkZGluZzogMyU7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICB9XG4gICNhYm91dCAuSW1nVGFiIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0JTtcbiAgICB3aWR0aDogMTU0cHg7XG4gICAgaGVpZ2h0OiAyMThweDtcbiAgICByaWdodDogLTUlO1xuICB9XG4gICNhYm91dCAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2Fib3V0IC5JbWdSaWdodCwgI2Fib3V0IC50aXQge1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICB9XG4gICNhYm91dCAubWI2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgfVxuICAjYWJvdXQgLkFib3V0UGFyYWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxMDAlO1xuICB9XG4gICNhYm91dCAuQWJvdXRDb250VGFiQ29udCB7XG4gICAgZmxleDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuY29sLTQgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLkdhcnRQYXJhZyAuRjI4IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cblxuICAjY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAjY29udGFjdFVTIC5jb250YWN0T3BhY2l0eSAuc29jaWFsIC5saW5lLWRhc2hlZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLnNlbmRCdG4ge1xuICAgIG1hcmdpbjogMzhweCAwIDAgMDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgI2Fib3V0IC5BYm91dENvbnRUYWIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2Fib3V0IC5JbWdUYWIge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgI0dhcnRuZXIgLkdhcnRDb250SW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAjR2FydG5lciAuR2FydENvbnRJbWcgLkdhcnRJbWcge1xuICAgIHdpZHRoOiAxNjdweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gIH1cbiAgI0dhcnRuZXIgLkdhcnRQYXJhZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAjR2FydG5lciAuR2FydFBhcmFnIHAuRjI4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAjc29sdXRpb25zIC5Tb3VsLCAjY2xpZW50cyBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgaDIsICNSZWFkeSBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjT3VydGVhbSAuSW1nVGVhbSB7XG4gICAgaGVpZ2h0OiAzMTBweDtcbiAgfVxuICAjT3VydGVhbSAudGVhbSAuSW1nVGVhbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5SZWFkeU9wYWNpdHR5IHAge1xuICAgIHBhZGRpbmc6IDIlIDA7XG4gIH1cblxuICAuUmVhZHlPcGFjaXR0eSBoMiB7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5HYXJ0UGFyYWcgcC5GMjgge1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5BYm91dENvbnRUYWIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMxJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjR2FydG5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNHYXJ0bmVyIC5HYXJ0Q29udEltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuICAgIC8qcGFkZGluZy10b3A6IDQlOyovXG4gIH1cbiAgI0dhcnRuZXIgLkdhcnRDb250SW1nIC5HYXJ0SW1nIHtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG4gICNHYXJ0bmVyIC5HYXJ0UGFyYWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNHYXJ0bmVyIC5HYXJ0UGFyYWcgcC5GMjgge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gICNzb2x1dGlvbnMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0O1xuICB9XG4gICNzb2x1dGlvbnMgLnNlY05hbWUge1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXJlbTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gIH1cbiAgI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLmNvbnRhY3QtY29udGFpbmVyIC5zZW5kLXBhcnQge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgI2NvbnRhY3RVUyAuY29udGFjdE9wYWNpdHkgLmNvbnRhY3QtY29udGFpbmVyIC5zZW5kQnRuIHtcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gIH1cblxuICAjYWJvdXQge1xuICAgIC8qbWFyZ2luLXRvcDogMzMlOyovXG4gIH1cbiAgI2Fib3V0IC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDYwJTtcbiAgfVxuICAjYWJvdXQgLm1iNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIH1cbiAgI2Fib3V0IC5GMTYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAjYWJvdXQgLkFib3V0Q29udFRhYiB7XG4gICAgcGFkZGluZy1yaWdodDogMyUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuICAjYWJvdXQgLk1vYlBhcmFnIHtcbiAgICB3aWR0aDogNjQlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG4gICNhYm91dCAuSW1nVGFiIHtcbiAgICB0b3A6IC05JTtcbiAgICB3aWR0aDogOTNweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIHJpZ2h0OiA0JTtcbiAgfVxuXG4gIC56b29tLXN2ZyBzdmcge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gIH1cblxuICAjT3VydGVhbSAuSW1nVGVhbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjT3VydGVhbSAudGVhbSAuSW1nVGVhbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgfVxuXG4gICNSZWFkeSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAjUmVhZHkgaDIge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICB9XG4gICNSZWFkeSBwIHtcbiAgICBwYWRkaW5nOiA0JSAwO1xuICB9XG5cbiAgI2NsaWVudHMgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgI2Fib3V0IHtcbiAgICAvKm1hcmdpbi10b3A6IDc3JTsqL1xuICB9XG4gICNhYm91dCAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMzMHB4KSB7XG4gICNhYm91dCAuSW1nVGFiIHtcbiAgICB0b3A6IC01JTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuSW1nVGVhbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS90ZWFtTW9iLnBuZ1wiKTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SliderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toSolutions() {
        document.getElementById("solutions").scrollIntoView({ behavior: "smooth" });
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 39, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/home/slider/slide01.jpg", "alt", "Better People Experience, Better Business Outcomes", 1, "d-none", "d-sm-block", "w-100", "large"], ["src", "assets/images/home/slider/slide01-sm.jpg", "alt", "Better People Experience, Better Business Outcomes", 1, "d-block", "d-sm-none", "w-100", "small"], [1, "carousel-caption", "caption1", "better-pep-exp", "text-left"], [1, "mb25", "thin"], [1, "mb25", "bold"], [1, "btn-primary", "btn", 3, "click"], ["src", "./assets/images/home/u71.png"], [1, "carousel-item", "surviveCont"], ["src", "assets/images/home/slider/slide02.png", "alt", "Applying Technologies", 1, "d-none", "d-sm-block", "w-100", "large"], ["src", "assets/images/home/slider/slide02-sm.png", "alt", "Applying Technologies", 1, "d-block", "d-sm-none", "w-100", "small"], [1, "carousel-caption", "caption2", "survive", "text-left"], [1, "mb4"], ["routerLink", "/pages/about", 1, "btn", "btn-primary"], [1, "carousel-item"], ["src", "assets/images/home/slider/slide03.png", "alt", "Survive, Endure, and Thrive", 1, "d-none", "d-sm-block", "w-100", "large"], ["src", "assets/images/home/slider/slide03-sm.png", "alt", "Survive, Endure, and Thrive", 1, "d-block", "d-sm-none", "w-100", "small"], [1, "carousel-caption", "caption3", "applyTec", "text-left"], [1, "mb25"], ["routerLink", "/pages/future", 1, "btn", "btn-primary"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Better People Experience, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Better Business Outcomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_a_click_14_listener() { return ctx.toSolutions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Explore our solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " We\u2019re in the business of building organizations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " We design tech-enabled solutions that focus on strategy, structure, culture, people, and processes to help leaders build enduring organizations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Brand Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Survive, Endure, and Thrive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " As the coronavirus crisis looms, technology has proven critical in helping organizations stand the test of time and survive the winds of change. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Find out how CivilSoft can help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".better-pep-exp[_ngcontent-%COMP%] {\n  top: 40%;\n}\n.better-pep-exp[_ngcontent-%COMP%]   h3.thin[_ngcontent-%COMP%] {\n  font-variation-settings: \"wght\" 300;\n}\n.better-pep-exp[_ngcontent-%COMP%]   h3.bold[_ngcontent-%COMP%] {\n  font-variation-settings: \"wght\" 400;\n}\n.survive[_ngcontent-%COMP%] {\n  top: 30%;\n}\n.survive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  width: 60%;\n}\n.applyTec[_ngcontent-%COMP%] {\n  top: 40%;\n  width: 30%;\n  background-color: rgba(60, 59, 59, 0.4);\n  padding: 15px;\n}\n.applyTec[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  left: 2%;\n  bottom: auto;\n}\n.mb25[_ngcontent-%COMP%] {\n  margin-bottom: 2.5%;\n}\n.mb4[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n}\n.surviveCont[_ngcontent-%COMP%] {\n  \n  background-color: #29272a;\n}\nlabel[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n}\nh3[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n}\n.carousel[_ngcontent-%COMP%] {\n  height: 700px;\n  overflow: hidden;\n}\n.carousel-inner[_ngcontent-%COMP%] {\n  height: 700px;\n}\n.carousel-inner[_ngcontent-%COMP%]   .large[_ngcontent-%COMP%] {\n  height: 700px;\n}\n.carousel-indicators[_ngcontent-%COMP%] {\n  top: 90%;\n}\n@media (max-width: 1024px) {\n  .carousel[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  .carousel-inner[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]   .large[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 460px;\n  }\n\n  .applyTec[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%] {\n    \n    width: 75%;\n  }\n\n  .carousel[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%] {\n    height: 70vh;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 460px;\n  }\n}\n@media (max-width: 768px) {\n  .carousel[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%] {\n    height: 420px;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 90%;\n  }\n\n  .thin[_ngcontent-%COMP%], .bold[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  label[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 700px) {\n  .better-pep-exp[_ngcontent-%COMP%], .survive[_ngcontent-%COMP%], .applyTec[_ngcontent-%COMP%] {\n    top: 25% !important;\n  }\n\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%] {\n    top: 30%;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  .carousel-inner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]   .large[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media (max-width: 550px) and (min-width: 450px) {\n  .carousel[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n\n  .carousel-inner[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n}\n@media (max-width: 600px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 90%;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  .carousel-inner[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]   .large[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media (max-width: 450px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 95%;\n    height: 2px;\n  }\n}\n@media (max-width: 425px) {\n  .better-pep-exp[_ngcontent-%COMP%], .survive[_ngcontent-%COMP%], .applyTec[_ngcontent-%COMP%] {\n    top: 90% !important;\n  }\n\n  .carousel[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%] {\n    height: 690px;\n  }\n\n  #carouselExampleIndicators[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 460px;\n  }\n\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    bottom: auto !important;\n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    \n    width: 75% !important;\n    margin-left: 12.5%;\n    top: auto;\n    padding: 10px;\n    background-color: #bfaa81;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    \n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n    top: auto;\n    text-align: center !important;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n    text-align: center;\n  }\n}\n@media (max-width: 410px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 440px;\n  }\n}\n@media (max-width: 390px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 60%;\n  }\n}\n@media (max-width: 375px) {\n  .better-pep-exp[_ngcontent-%COMP%], .survive[_ngcontent-%COMP%], .applyTec[_ngcontent-%COMP%] {\n    top: 90% !important;\n  }\n\n  .carousel[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%] {\n    height: 625px;\n  }\n\n  #carouselExampleIndicators[_ngcontent-%COMP%] {\n    \n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 65%;\n  }\n\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    bottom: auto !important;\n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n    \n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    \n    width: 75% !important;\n    margin-left: 12.5%;\n    top: auto;\n    padding: 10px;\n    background-color: #bfaa81;\n    \n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    \n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n    top: auto;\n    text-align: center !important;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n  }\n}\n@media (max-width: 360px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 63%;\n  }\n}\n@media (max-width: 340px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 55%;\n  }\n}\n@media (max-width: 320px) {\n  .better-pep-exp[_ngcontent-%COMP%], .survive[_ngcontent-%COMP%], .applyTec[_ngcontent-%COMP%] {\n    top: 87% !important;\n  }\n\n  .carousel[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n\n  #carouselExampleIndicators[_ngcontent-%COMP%] {\n    \n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    top: 55%;\n  }\n\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n    overflow: visible;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    bottom: auto !important;\n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n    font-size: 13px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    \n    width: 75% !important;\n    margin-left: 12.5%;\n    top: 87%;\n    padding: 10px;\n    background-color: #bfaa81;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%] {\n    left: auto;\n    right: auto;\n    \n    bottom: -16% !important;\n    width: 75% !important;\n    margin-left: 12.5%;\n    background-color: #bfaa81;\n    top: auto;\n    text-align: center !important;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #000;\n  }\n  .carousel[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .caption1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zbGlkZXIvRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxcaG9tZVxcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFFBQUE7QUNBSjtBREVJO0VBQ0ksbUNBQUE7QUNBUjtBREdJO0VBQ0ksbUNBQUE7QUNEUjtBRE1BO0VBQ0ksUUFBQTtBQ0hKO0FES0k7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNIUjtBRE9BO0VBQ0ksUUFBQTtFQUVBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FEU0E7RUFDSSxRQUFBO0VBQ0EsWUFBQTtBQ05KO0FEU0E7RUFDSSxtQkFBQTtBQ05KO0FEU0E7RUFDSSxpQkFBQTtBQ05KO0FEU0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDTko7QURRQTtFQUNJLG1CQUFBO0FDTEo7QURPQTtFQUNJLHlCQUFBO0FDSko7QURPQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0pKO0FETUE7RUFDSSxhQUFBO0FDSEo7QURJSTtFQUNJLGFBQUE7QUNGUjtBRE1BO0VBQ0ksUUFBQTtBQ0hKO0FES0E7RUFDSTtJQUNJLGFBQUE7RUNGTjs7RURLRTtJQUNJLGFBQUE7RUNGTjtFRElNO0lBQ0ksYUFBQTtFQ0ZWOztFREtFO0lBQ0ksVUFBQTtFQ0ZOOztFRElFO0lBQ0ksVUFBQTtFQ0ROO0FBQ0Y7QURHQTs7Ozs7OztFQUFBO0FBU0E7RUFJWTtJQUNJLGNBQUE7SUFDQSxVQUFBO0VDTGQ7O0VEU0U7SUFDSSxZQUFBO0VDTk47O0VEUUU7SUFDSSxVQUFBO0VDTE47QUFDRjtBRFFBO0VBQ0k7SUFDSSxhQUFBO0VDTk47O0VEU0U7SUFDSSxRQUFBO0VDTk47O0VEU0U7SUFDSSxlQUFBO0VDTk47O0VEU0U7SUFDSSxlQUFBO0VDTk47O0VEU0U7SUFDSSxlQUFBO0VDTk47QUFDRjtBRFNBO0VBQ0k7SUFDSSxtQkFBQTtFQ1BOOztFRFdVO0lBQ0ksUUFBQTtFQ1JkOztFRFlFO0lBQ0ksYUFBQTtFQ1ROOztFRFlFO0lBQ0ksYUFBQTtFQ1ROO0VEV007SUFDSSxhQUFBO0VDVFY7QUFDRjtBRGFBO0VBQ0k7SUFDSSxhQUFBO0VDWE47O0VEY0U7SUFDSSxhQUFBO0VDWE47RURhTTtJQUNJLGFBQUE7RUNYVjtBQUNGO0FEY0E7RUFDSTtJQUNJLFFBQUE7RUNaTjs7RURlRTtJQUNJLGFBQUE7RUNaTjs7RURlRTtJQUNJLGFBQUE7RUNaTjtFRGNNO0lBQ0ksYUFBQTtFQ1pWO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFdBQUE7RUNiTjtBQUNGO0FEZ0JRO0VBQ0k7SUFDSSxtQkFBQTtFQ2RkOztFRGlCVTtJQUNJLGFBQUE7RUNkZDs7RURpQlU7SUFDSSxnQkFBQTtFQ2RkOztFRGlCVTtJQUNJLFVBQUE7RUNkZDs7RURtQmtCO0lBQ0ksZUFBQTtFQ2hCdEI7RURtQmtCO0lBQ0ksZUFBQTtFQ2pCdEI7RURxQmM7SUFDSSxpQkFBQTtFQ25CbEI7RURxQmtCO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VDbkJ0QjtFRHFCc0I7SUFDSSxzQkFBQTtJQUNBLFdBQUE7RUNuQjFCO0VEdUJrQjtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0VDckJ0QjtFRHVCc0I7SUFDSSxXQUFBO0VDckIxQjtFRHdCc0I7SUFDSSxlQUFBO0VDdEIxQjtFRHlCc0I7SUFDSSxzQkFBQTtJQUNBLFdBQUE7RUN2QjFCO0VEMkJrQjtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFNBQUE7SUFDQSw2QkFBQTtFQ3pCdEI7RUQyQnNCO0lBQ0ksc0JBQUE7SUFDQSxXQUFBO0VDekIxQjtFRDRCc0I7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUMxQjFCO0FBQ0Y7QURnQ1E7RUFDSTtJQUNJLFVBQUE7RUM5QmQ7QUFDRjtBRGlDUTtFQUNJO0lBQ0ksUUFBQTtFQy9CZDtBQUNGO0FEa0NRO0VBQ0k7SUFDSSxtQkFBQTtFQ2hDZDs7RURtQ1U7SUFDSSxhQUFBO0VDaENkOztFRG1DVTtJQUNJLHNCQUFBO0VDaENkOztFRG1DVTtJQUNJLFFBQUE7RUNoQ2Q7O0VEcUNrQjtJQUNJLGVBQUE7RUNsQ3RCO0VEcUNrQjtJQUNJLDBCQUFBO0VDbkN0QjtFRHVDYztJQUNJLGlCQUFBO0VDckNsQjtFRHVDa0I7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUNyQ3RCO0VEdUNzQjtJQUNJLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDckMxQjtFRHlDa0I7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtJQVNBOztNQUFBO0VDN0N0QjtFRHNDc0I7SUFDSSxXQUFBO0VDcEMxQjtFRHVDc0I7SUFDSSxlQUFBO0VDckMxQjtFRDRDa0I7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxTQUFBO0lBQ0EsNkJBQUE7RUMxQ3RCO0VENENzQjtJQUNJLHNCQUFBO0lBQ0EsV0FBQTtFQzFDMUI7RUQ2Q3NCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDM0MxQjtBQUNGO0FEaURRO0VBQ0k7SUFDSSxRQUFBO0VDL0NkO0FBQ0Y7QURrRFE7RUFDSTtJQUNJLFFBQUE7RUNoRGQ7QUFDRjtBRG1EUTtFQUNJO0lBQ0ksbUJBQUE7RUNqRGQ7O0VEb0RVO0lBQ0ksYUFBQTtFQ2pEZDs7RURvRFU7SUFDSSxzQkFBQTtFQ2pEZDs7RURvRFU7SUFDSSxRQUFBO0VDakRkOztFRHVEYztJQUNJLGlCQUFBO0VDcERsQjtFRHNEa0I7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUNwRHRCO0VEc0RzQjtJQUNJLGVBQUE7RUNwRDFCO0VEdURzQjtJQUNJLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNyRDFCO0VEeURrQjtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSwyQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0VDdkR0QjtFRHlEc0I7SUFDSSxlQUFBO0VDdkQxQjtFRDBEc0I7SUFDSSxXQUFBO0VDeEQxQjtFRDJEc0I7SUFDSSxlQUFBO0VDekQxQjtFRDREc0I7SUFDSSxlQUFBO0VDMUQxQjtFRDhEa0I7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxTQUFBO0lBQ0EsNkJBQUE7RUM1RHRCO0VEOERzQjtJQUNJLHNCQUFBO0lBQ0EsV0FBQTtFQzVEMUI7RUQrRHNCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDN0QxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iZXR0ZXItcGVwLWV4cCB7XHJcbiAgICB0b3A6IDQwJTtcclxuXHJcbiAgICBoMy50aGluIHtcclxuICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgzLmJvbGQge1xyXG4gICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc3Vydml2ZSB7XHJcbiAgICB0b3A6IDMwJTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwbHlUZWMge1xyXG4gICAgdG9wOiA0MCU7XHJcblxyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNTksIDU5LC40KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBsZWZ0OiAyJTtcclxuICAgIGJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLm1iMjUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxufVxyXG5cclxuLm1iNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLnN1cnZpdmVDb250IHtcclxuICAgIC8qaGVpZ2h0OiA5MHZoOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNzJhO1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaSdcclxufVxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInXHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgLmxhcmdle1xyXG4gICAgICAgIGhlaWdodDo3MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgdG9wOiA5MCU7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgLmNhcm91c2VsIHtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgICAgICAgLmxhcmdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgdG9wOiA0NjBweDtcclxuICAgIH1cclxuICAgIC5hcHBseVRlYyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAudy0xMDAge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICB0b3A6IDY1MHB4O1xyXG4gICAgfVxyXG59Ki9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG5cclxuICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAgICAgLmNhcHRpb24zIHtcclxuICAgICAgICAgICAgICAgIC8qYm90dG9tOiA1JTsqL1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJvdXNlbCwgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgdG9wOiA0NjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwsIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgdG9wOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaW4sIC5ib2xkIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwsIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuYmV0dGVyLXBlcC1leHAsIC5zdXJ2aXZlLCAuYXBwbHlUZWMge1xyXG4gICAgICAgIHRvcDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgICAgIC5jYXB0aW9uMyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgICAgIC5sYXJnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NTBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG5cclxuICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICB0b3A6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICAubGFyZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICB0b3A6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgICAuYmV0dGVyLXBlcC1leHAsIC5zdXJ2aXZlLCAuYXBwbHlUZWMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2OTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcm91c2VsIHtcclxuICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCwgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbjMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYWE4MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypib3R0b206IC0xNyUgIWltcG9ydGFudDsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24sIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbjEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qYm90dG9tOiAtMTQlICFpbXBvcnRhbnQ7Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmFhODE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24sIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcclxuICAgICAgICAgICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAuYmV0dGVyLXBlcC1leHAsIC5zdXJ2aXZlLCAuYXBwbHlUZWMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnMge1xyXG4gICAgICAgICAgICAgICAgLyptYXJnaW4tYm90dG9tOiA2NSU7Ki9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA2NSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwsIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qZm9udC1zaXplOiAxMHB4OyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypib3R0b206IC0yMSUgIWltcG9ydGFudDsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbjEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qYm90dG9tOiAtMTQlICFpbXBvcnRhbnQ7Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmFhODE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDYzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgLmJldHRlci1wZXAtZXhwLCAuc3Vydml2ZSwgLmFwcGx5VGVjIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODclICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJvdXNlbCwgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcclxuICAgICAgICAgICAgICAgIC8qbWFyZ2luLWJvdHRvbTogNjAlOyovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbjMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYWE4MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKmJvdHRvbTogLTE4JSAhaW1wb3J0YW50OyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDg3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYWE4MTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FwdGlvbjEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTE2JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYWE4MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0iLCIuYmV0dGVyLXBlcC1leHAge1xuICB0b3A6IDQwJTtcbn1cbi5iZXR0ZXItcGVwLWV4cCBoMy50aGluIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDMwMDtcbn1cbi5iZXR0ZXItcGVwLWV4cCBoMy5ib2xkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbn1cblxuLnN1cnZpdmUge1xuICB0b3A6IDMwJTtcbn1cbi5zdXJ2aXZlIHAge1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmFwcGx5VGVjIHtcbiAgdG9wOiA0MCU7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDU5LCA1OSwgMC40KTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5hcHBseVRlYyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGxlZnQ6IDIlO1xuICBib3R0b206IGF1dG87XG59XG5cbi5tYjI1IHtcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcbn1cblxuLm1iNCB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG4uc3Vydml2ZUNvbnQge1xuICAvKmhlaWdodDogOTB2aDsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNzJhO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG59XG5cbi5jYXJvdXNlbCB7XG4gIGhlaWdodDogNzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogNzAwcHg7XG59XG4uY2Fyb3VzZWwtaW5uZXIgLmxhcmdlIHtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB0b3A6IDkwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWlubmVyIC5sYXJnZSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB0b3A6IDQ2MHB4O1xuICB9XG5cbiAgLmFwcGx5VGVjIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4vKkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC53LTEwMCB7XG4gICAgICAgIGhlaWdodDogOTB2aDtcbiAgICB9XG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgICB0b3A6IDY1MHB4O1xuICAgIH1cbn0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24zIHtcbiAgICAvKmJvdHRvbTogNSU7Ki9cbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB0b3A6IDQ2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGhlaWdodDogNDIwcHg7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgdG9wOiA5MCU7XG4gIH1cblxuICAudGhpbiwgLmJvbGQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIGxhYmVsLCBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmJldHRlci1wZXAtZXhwLCAuc3Vydml2ZSwgLmFwcGx5VGVjIHtcbiAgICB0b3A6IDI1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjMge1xuICAgIHRvcDogMzAlO1xuICB9XG5cbiAgLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgLmNhcm91c2VsLWlubmVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciAubGFyZ2Uge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgfVxuICAuY2Fyb3VzZWwtaW5uZXIgLnNtYWxsIHtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIHRvcDogOTAlO1xuICB9XG5cbiAgLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgLmNhcm91c2VsLWlubmVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciAubGFyZ2Uge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgdG9wOiA5NSU7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuYmV0dGVyLXBlcC1leHAsIC5zdXJ2aXZlLCAuYXBwbHlUZWMge1xuICAgIHRvcDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2Fyb3VzZWwsIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgaGVpZ2h0OiA2OTBweDtcbiAgfVxuXG4gICNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIHRvcDogNDYwcHg7XG4gIH1cblxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gbGFiZWwsIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjMge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24zIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMiB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgICAvKmJvdHRvbTogLTE3JSAhaW1wb3J0YW50OyovXG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICB0b3A6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24yIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24yIGgzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjIgYnV0dG9uLCAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMiBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24xIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICAgIC8qYm90dG9tOiAtMTQlICFpbXBvcnRhbnQ7Ki9cbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmFhODE7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24xIGJ1dHRvbiwgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjEgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMSBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxMHB4KSB7XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB0b3A6IDQ0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIHRvcDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLmJldHRlci1wZXAtZXhwLCAuc3Vydml2ZSwgLmFwcGx5VGVjIHtcbiAgICB0b3A6IDkwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGhlaWdodDogNjI1cHg7XG4gIH1cblxuICAjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycyB7XG4gICAgLyptYXJnaW4tYm90dG9tOiA2NSU7Ki9cbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICB0b3A6IDY1JTtcbiAgfVxuXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSBsYWJlbCwgLmNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjMge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24zIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAvKmZvbnQtc2l6ZTogMTBweDsqL1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24yIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICAgIC8qYm90dG9tOiAtMjElICFpbXBvcnRhbnQ7Ki9cbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgIHRvcDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmFhODE7XG4gICAgLypidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfSovXG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjIgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjIgaDMge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgICAvKmJvdHRvbTogLTE0JSAhaW1wb3J0YW50OyovXG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xuICAgIHRvcDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMSBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjEgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgdG9wOiA2MyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgdG9wOiA1NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYmV0dGVyLXBlcC1leHAsIC5zdXJ2aXZlLCAuYXBwbHlUZWMge1xuICAgIHRvcDogODclICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2Fyb3VzZWwsIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuXG4gICNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcbiAgICAvKm1hcmdpbi1ib3R0b206IDYwJTsqL1xuICB9XG5cbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIHRvcDogNTUlO1xuICB9XG5cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjMge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gICAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZhYTgxO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24zIGgzIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMiB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgICAvKmJvdHRvbTogLTE4JSAhaW1wb3J0YW50OyovXG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICB0b3A6IDg3JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmFhODE7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjIgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMiBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIC5jYXB0aW9uMiBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24yIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24xIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICAgIGJvdHRvbTogLTE2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYWE4MTtcbiAgICB0b3A6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2FwdGlvbjEgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmNhcHRpb24xIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/contact-us.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/contact-us.service.ts ***!
  \************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ContactUsService {
    constructor(http) {
        this.http = http;
    }
    SetNewMail(NewObject) {
        if (NewObject != undefined) {
            debugger;
            //$('#SuccessPopup').find("p").html("  We'll be getting in touch shortly. ")
            //       $('#SuccessPopup').modal('show');
            NewObject = JSON.parse(NewObject);
            this.http.post('/api/ContactUs', NewObject).subscribe(data => {
                debugger;
                console.log('success', data);
                $('#SuccessPopup').find("p").html(" We'll be getting in touch shortly. ");
                $('#SuccessPopup').modal('show');
                $('form :input').val('');
            }, error => {
                debugger;
                console.log('oops', error);
            });
        }
    }
}
ContactUsService.ɵfac = function ContactUsService_Factory(t) { return new (t || ContactUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactUsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactUsService, factory: ContactUsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/demo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/demo.service.ts ***!
  \******************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DemoService {
    constructor(http) {
        this.http = http;
    }
    SetSecdualDemo(NewObject) {
        if (NewObject != undefined) {
            debugger;
            NewObject = JSON.parse(NewObject);
            // resolve Product list to comma separated text values
            let productList = '';
            for (let i = 0; i < NewObject.Product.length; i++) {
                productList += NewObject.Product[i].item_text + ', ';
            }
            // remove last comma
            if (productList.length > 0) {
                productList = productList.substring(0, productList.length - 2);
            }
            NewObject.Product = productList;
            this.http.post('/api/ScheduleDemo', NewObject).subscribe(data => {
                debugger;
                $('#ScheduleModal').find("#SendFailed").html("");
                $('#ScheduleModal').modal('hide');
                $('form#DemoForm :input').val('');
                $("#DemoForm")[0].reset();
                $('#SuccessPopup').find("p").html(" We'll be getting in touch shortly. ");
                $('#SuccessPopup').modal('show');
            }, error => {
                debugger;
                console.log('oops', error);
                $('#ScheduleModal').find("#SendFailed").html(error.message);
            });
        }
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DemoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DemoService, factory: DemoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sharedComponent/success-popup/success-popup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sharedComponent/success-popup/success-popup.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuccessPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPopupComponent", function() { return SuccessPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SuccessPopupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessPopupComponent.ɵfac = function SuccessPopupComponent_Factory(t) { return new (t || SuccessPopupComponent)(); };
SuccessPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessPopupComponent, selectors: [["app-success-popup"]], decls: 14, vars: 0, consts: [["tabindex", "-1", "role", "dialog", "id", "SuccessPopup", 1, "modal"], ["role", "document", 1, "modal-dialog", "SuccessPopup", "text-center"], [1, "modal-content"], [1, "modal-body"], [1, "SuccessCircle"], [1, "SuccessContImg"], ["id", "CheckImg", "src", "/assets/images/home/check_u80.png"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]], template: function SuccessPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Thank you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We'll be getting in touch shortly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%] {\n  top: 8%;\n  width: 350px;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   .SuccessCircle[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  margin: auto;\n  border-radius: 50%;\n  padding-top: 3%;\n  background-color: #dfd5c0;\n  margin-top: 6%;\n  position: relative;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   .SuccessCircle[_ngcontent-%COMP%]   .SuccessContImg[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  border: 5px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 5%;\n  bottom: 5.5%;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   .SuccessCircle[_ngcontent-%COMP%]   .SuccessContImg[_ngcontent-%COMP%]   #CheckImg[_ngcontent-%COMP%] {\n  width: 49px;\n  height: 34px;\n  position: absolute;\n  top: 31%;\n  right: 26%;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #333333;\n  margin: 6% auto;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-weight: 400;\n  font-size: 14px;\n  color: #333333;\n  margin-bottom: 7%;\n}\n#SuccessPopup[_ngcontent-%COMP%]   .SuccessPopup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 2% auto;\n  font-family: \"Muli\";\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkQ29tcG9uZW50L3N1Y2Nlc3MtcG9wdXAvRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxcc2hhcmVkQ29tcG9uZW50XFxzdWNjZXNzLXBvcHVwXFxzdWNjZXNzLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWRDb21wb25lbnQvc3VjY2Vzcy1wb3B1cC9zdWNjZXNzLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksT0FBQTtFQUNBLFlBQUE7QUNBUjtBREVRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBWjtBREVZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBREVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0FwQjtBREtRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0haO0FETVE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0paO0FET1E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWRDb21wb25lbnQvc3VjY2Vzcy1wb3B1cC9zdWNjZXNzLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1N1Y2Nlc3NQb3B1cCB7XHJcbiAgICAuU3VjY2Vzc1BvcHVwIHtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuXHJcbiAgICAgICAgLlN1Y2Nlc3NDaXJjbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1YzA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuU3VjY2Vzc0NvbnRJbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1LjUlO1xyXG5cclxuICAgICAgICAgICAgICAgICNDaGVja0ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxJTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjYlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNiUgYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMiUgYXV0bztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpJztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIjU3VjY2Vzc1BvcHVwIC5TdWNjZXNzUG9wdXAge1xuICB0b3A6IDglO1xuICB3aWR0aDogMzUwcHg7XG59XG4jU3VjY2Vzc1BvcHVwIC5TdWNjZXNzUG9wdXAgLlN1Y2Nlc3NDaXJjbGUge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmQ1YzA7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jU3VjY2Vzc1BvcHVwIC5TdWNjZXNzUG9wdXAgLlN1Y2Nlc3NDaXJjbGUgLlN1Y2Nlc3NDb250SW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiA1LjUlO1xufVxuI1N1Y2Nlc3NQb3B1cCAuU3VjY2Vzc1BvcHVwIC5TdWNjZXNzQ2lyY2xlIC5TdWNjZXNzQ29udEltZyAjQ2hlY2tJbWcge1xuICB3aWR0aDogNDlweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzElO1xuICByaWdodDogMjYlO1xufVxuI1N1Y2Nlc3NQb3B1cCAuU3VjY2Vzc1BvcHVwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDYlIGF1dG87XG59XG4jU3VjY2Vzc1BvcHVwIC5TdWNjZXNzUG9wdXAgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogNyU7XG59XG4jU3VjY2Vzc1BvcHVwIC5TdWNjZXNzUG9wdXAgYnV0dG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyJSBhdXRvO1xuICBmb250LWZhbWlseTogXCJNdWxpXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-popup',
                templateUrl: './success-popup.component.html',
                styleUrls: ['./success-popup.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Mai.m\CivilsoftWebsite2020\Website.WebUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map