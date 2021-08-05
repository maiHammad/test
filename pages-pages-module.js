(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class AboutusComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Company Overview | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 78, vars: 0, consts: [[1, "container-fluid"], [1, "row", "headerCtn", "aboutHeader", "align-content-center", "text-center"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], ["id", "GreateOrg"], [1, "GreateOverLay"], [1, "container"], [1, "row"], [1, "GreatCont"], ["id", "WhoWe"], [1, "col-lg-6", "col-md-12"], [1, "Who"], [1, "BackImg"], ["src", "assets/images/about/u624.jpg", 1, "WhoImg"], ["id", "about"], [1, "ImgLg", "col-lg-4"], [1, "ImgCont"], ["src", "assets/images/home/u59.jpg", 1, "NG"], [1, "col-lg-8", "AboutInfo"], [1, "AboutContTab"], [1, "ImgCont", "ImgTab"], [1, "TabCoute"], [1, "ContMob"], [1, "ImgCont", "ImgMob"], [1, "MopParag"], [1, "ImgLeft", "mb-2"], ["src", "assets/images/home/u65.png"], [1, "mb6", "F16"], [1, "MobParag"], [1, "mb-2", "F16"], [1, "WeCan"], [1, "ImgRight", "mb6", "text-right"], ["src", "assets/images/home/u66.png"], [1, "tit"], [1, "Founder"], ["id", "WorkUs"], [1, "schdualCtn", "py-3", "CallToAction"], [1, "container-xl"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["href", "http://careers.civilsoft.org/ExternalCand/Home/HomePage", 1, "btn-primary", "btn", "px-4"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#1 in the Middle East");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Build Great Organizations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Like a good building, a good organization is one that is strong enough to stand the test of time and survive the winds of change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Building enduring organizations requires a holistic approach to organization architecture, one that addresses all five sources of competitive advantage and value creation: strategy, structure, culture, people, and processes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " At CivilSoft, we have made it our business to employ technology to help organizations achieve strategic alignment and continuously adapt those five pillars in response to the rapidly changing business environment, to create organizations that execute, endure, and thrive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Who we are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CivilSoft is an enterprise software company specialized in Strategy Execution and Human Capital Management. Founded in 1994, the company focuses on emerging markets, and has achieved a wide footprint across the MENA region and Indian subcontinent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " CivilSoft develops innovative and cutting-edge workforce technologies to help source, develop, and reward talent and increase the rates of return on human capital.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Being the first of its kind in the Middle East, CivilSoft has achieved a long-standing presence and unbeatable knowledge of the local market that enable it to serve the region better than international and local counterparts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Software programming has always been my passion and profession.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Producing Arab-developed software business solutions,with international standards, has always been my dream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " However, there are some thoughts that I have preserved at the back of my mind along the road. During my study of Civil Engineering at the University of Alexandria, Egypt, Dr. Salah Seleem has fed us with the core business ethics that one should follow in the IT business. \"Do not take advantage of others' lack of knowledge to sell your product, do not pretend to know what you really don't , do not hide information and always share your knowledge.\" Those were his exact words. That's why the very first thing a new employee at CivilSoft is being taught is how to hold on to his/her integrity and transparency while developing the company's product or business. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Vision, perfection, aspiration, integrity, precision, commitment, achievement, innovation and control are our core values and we, at CivilSoft, believe that these values will certainly pave the way to our company to become one of the leading software houses in the world. We will always want to do the right thing,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " WE CAN AND WE WILL!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Mohamed Nagdy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Founder of the company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " We're always on the lookout for people who share our values and believe in our dream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "work with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".aboutHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/about/u588.jpg\");\n}\n.aboutHeader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(28, 28, 35, 0.95);\n}\n#GreateOrg[_ngcontent-%COMP%] {\n  height: 418px;\n  background-image: url(\"/assets/images/about/u625.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#GreateOrg[_ngcontent-%COMP%]   .GreateOverLay[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.4980392157);\n  height: 100%;\n}\n#GreateOrg[_ngcontent-%COMP%]   .GreateOverLay[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%] {\n  width: 56%;\n  margin: auto;\n  text-align: center;\n  padding: 6% 0;\n  color: #333333;\n  font-weight: 400;\n}\n#GreateOrg[_ngcontent-%COMP%]   .GreateOverLay[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-size: 28px;\n  margin-bottom: 6%;\n}\n#GreateOrg[_ngcontent-%COMP%]   .GreateOverLay[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-size: 14px;\n  margin-bottom: 2%;\n}\n#WhoWe[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  padding-top: 7%;\n}\n#WhoWe[_ngcontent-%COMP%]   .Who[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 400;\n}\n#WhoWe[_ngcontent-%COMP%]   .Who[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-size: 28px;\n  margin-bottom: 4%;\n}\n#WhoWe[_ngcontent-%COMP%]   .Who[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-size: 14px;\n  margin-bottom: 3%;\n}\n#WhoWe[_ngcontent-%COMP%]   .BackImg[_ngcontent-%COMP%] {\n  width: 460px;\n  height: 358px;\n  background: inherit;\n  background-color: #dfd5c0;\n  position: relative;\n}\n#WhoWe[_ngcontent-%COMP%]   .BackImg[_ngcontent-%COMP%]   .WhoImg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 460px;\n  height: 358px;\n  left: -4%;\n  top: -5%;\n}\n#about[_ngcontent-%COMP%] {\n  background-color: #f8f6f2;\n}\n#about[_ngcontent-%COMP%]   .AboutInfo[_ngcontent-%COMP%] {\n  \n  padding-top: 4%;\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%] {\n  padding-left: 5%;\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  color: #AF2F20;\n  margin-bottom: 6px;\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 2% !important;\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .Founder[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666666;\n  font-family: \"Muli\";\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .AboutTab[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgMob[_ngcontent-%COMP%] {\n  display: none;\n}\n#about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-weight: 400;\n  font-style: oblique;\n  color: #666666;\n  line-height: 20px;\n  font-size: 13px;\n}\n#about[_ngcontent-%COMP%]   .NG[_ngcontent-%COMP%] {\n  width: 341px;\n  height: 468px;\n}\n#WorkUs[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n}\n@media all and (max-width: 1152px) {\n  .AboutContTab[_ngcontent-%COMP%] {\n    padding-left: 8% !important;\n  }\n}\n@media all and (min-width: 766px) and (max-width: 950px) {\n  .GreatCont[_ngcontent-%COMP%] {\n    width: 60% !important;\n  }\n\n  #WhoWe[_ngcontent-%COMP%]   .Who[_ngcontent-%COMP%] {\n    margin-bottom: 6%;\n  }\n  #WhoWe[_ngcontent-%COMP%]   .BackImg[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  #about[_ngcontent-%COMP%]   .ImgLg[_ngcontent-%COMP%] {\n    width: 30%;\n    display: inline-block;\n  }\n  #about[_ngcontent-%COMP%]   .ImgLg[_ngcontent-%COMP%]   .NG[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 328px;\n    margin-top: 48%;\n  }\n  #about[_ngcontent-%COMP%]   .AboutInfo[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media all and (max-width: 768px) {\n  .GreatCont[_ngcontent-%COMP%] {\n    width: 90% !important;\n    padding: 9% 0 !important;\n  }\n  .GreatCont[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 4% !important;\n  }\n\n  #WhoWe[_ngcontent-%COMP%]   .Who[_ngcontent-%COMP%] {\n    margin-bottom: 10%;\n  }\n  #WhoWe[_ngcontent-%COMP%]   .BackImg[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  #about[_ngcontent-%COMP%]   .AboutInfo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #about[_ngcontent-%COMP%]   .ImgLg[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   ImgMob[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .mb-2[_ngcontent-%COMP%] {\n    margin-bottom: 1%;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgRight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 15px;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 2% !important;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .ImgTab[_ngcontent-%COMP%]   .NG[_ngcontent-%COMP%] {\n    width: 154px;\n    height: 218px;\n  }\n  #about[_ngcontent-%COMP%]   .AboutContTab[_ngcontent-%COMP%]   .TabCoute[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 77%;\n    padding-left: 2%;\n    vertical-align: middle;\n  }\n  #about[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 1% !important;\n  }\n  #about[_ngcontent-%COMP%]   .Founder[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  #WorkUs[_ngcontent-%COMP%] {\n    \n  }\n}\n@media all and (min-width: 321px) and (max-width: 750px) {\n  .TabCoute[_ngcontent-%COMP%] {\n    width: 68% !important;\n  }\n}\n@media all and (max-width: 500px) {\n  #about[_ngcontent-%COMP%] {\n    padding: 7% 0;\n  }\n  #about[_ngcontent-%COMP%]   .ImgMob[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  #about[_ngcontent-%COMP%]   .ImgMob[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 93px;\n    height: 131px;\n  }\n  #about[_ngcontent-%COMP%]   .ImgCont.ImgTab[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  #about[_ngcontent-%COMP%]   .TabCoute[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #about[_ngcontent-%COMP%]   .TabCoute[_ngcontent-%COMP%]   .MopParag[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 65%;\n    vertical-align: middle;\n    padding-left: 4%;\n  }\n  #about[_ngcontent-%COMP%]   .TabCoute[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 6% !important;\n  }\n\n  .BackImg[_ngcontent-%COMP%], .WhoImg[_ngcontent-%COMP%] {\n    width: 330px !important;\n    height: 230px !important;\n  }\n\n  .BackImg[_ngcontent-%COMP%] {\n    margin: 5% auto !important;\n  }\n\n  \n}\n@media all and (max-width: 400px) {\n  #GreateOrg[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media all and (max-width: 320px) {\n  header[_ngcontent-%COMP%] {\n    height: 211px;\n  }\n  header[_ngcontent-%COMP%]   .AboutCont[_ngcontent-%COMP%] {\n    padding-top: 30% !important;\n  }\n  header[_ngcontent-%COMP%]   .AboutCont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  #GreateOrg[_ngcontent-%COMP%] {\n    \n    background-image: none;\n    background-color: #f9f8f9;\n  }\n  #GreateOrg[_ngcontent-%COMP%]   .GreateOverLay[_ngcontent-%COMP%] {\n    background-color: #f9f8f9;\n  }\n  #GreateOrg[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%] {\n    padding: 12% 0 !important;\n  }\n  #GreateOrg[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5% !important;\n  }\n  #GreateOrg[_ngcontent-%COMP%]   .GreatCont[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    margin-bottom: 6% !important;\n  }\n\n  #WhoWe[_ngcontent-%COMP%] {\n    padding: 12% 0;\n  }\n  #WhoWe[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 6%;\n  }\n  #WhoWe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 6% !important;\n  }\n\n  .BackImg[_ngcontent-%COMP%], .WhoImg[_ngcontent-%COMP%] {\n    width: 275px !important;\n    height: 214px !important;\n  }\n}\n@media all and (max-width: 300px) {\n  #about[_ngcontent-%COMP%]   .ImgMob[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85px;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXR1cy9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXR1c1xcYWJvdXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0RBQUE7QUNDSjtBRENJO0VBQ0csd0NBQUE7QUNDUDtBREdBO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURFSTtFQUNJLG1EQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FaO0FERVk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FoQjtBREdZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEaEI7QURPQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDSko7QURNSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETVE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0paO0FET1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xaO0FEU0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNSWjtBRGFBO0VBQ0kseUJBQUE7QUNWSjtBRFlJO0VBQ0ksNENBQUE7RUFDQSxlQUFBO0FDVlI7QURhSTtFQUNJLGdCQUFBO0FDWFI7QURlUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNiWjtBRGdCUTtFQUNJLDRCQUFBO0FDZFo7QURpQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDZlo7QURrQlE7RUFDSSxhQUFBO0FDaEJaO0FEbUJRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2pCWjtBRHFCSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDbkJSO0FEdUJBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDcEJKO0FEdUJBO0VBQ0k7SUFDSSwyQkFBQTtFQ3BCTjtBQUNGO0FEdUJBO0VBQ0k7SUFDSSxxQkFBQTtFQ3JCTjs7RUQyQk07SUFDSSxpQkFBQTtFQ3hCVjtFRDJCTTtJQUNJLFlBQUE7RUN6QlY7O0VEOEJNO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0VDM0JWO0VEOEJVO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VDNUJkO0VEZ0NNO0lBQ0ksVUFBQTtFQzlCVjtBQUNGO0FEbUNBO0VBQ0k7SUFDSSxxQkFBQTtJQUNBLHdCQUFBO0VDakNOO0VEbUNNO0lBQ0ksNEJBQUE7RUNqQ1Y7O0VEc0NNO0lBQ0ksa0JBQUE7RUNuQ1Y7RURzQ007SUFDSSxZQUFBO0VDcENWOztFRHlDTTtJQUNJLFdBQUE7RUN0Q1Y7RUR5Q007SUFDSSxhQUFBO0VDdkNWO0VEMENNO0lBQ0ksNEJBQUE7RUN4Q1Y7RUQwQ1U7SUFDSSxpQkFBQTtFQ3hDZDtFRDJDVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDekNkO0VENENVO0lBQ0ksNEJBQUE7RUMxQ2Q7RUQ2Q1U7SUFDSSxxQkFBQTtFQzNDZDtFRDZDYztJQUNJLFlBQUE7SUFDQSxhQUFBO0VDM0NsQjtFRCtDVTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUM3Q2Q7RURpRE07SUFDSSxlQUFBO0lBQ0EsNEJBQUE7RUMvQ1Y7RURrRE07SUFDSSxlQUFBO0VDaERWOztFRG9ERTtJQUNJOzs7Ozs7OztNQUFBO0VDekNOO0FBQ0Y7QURvREE7RUFDSTtJQUNJLHFCQUFBO0VDbEROO0FBQ0Y7QURxREE7RUFDSTtJQUNJLGFBQUE7RUNuRE47RURxRE07SUFDSSxnQ0FBQTtFQ25EVjtFRHFEVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDbkRkO0VEdURNO0lBQ0ksd0JBQUE7RUNyRFY7RUR3RE07SUFDSSxzQkFBQTtFQ3REVjtFRHdEVTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUN0RGQ7RUR5RFU7SUFDSSw0QkFBQTtFQ3ZEZDs7RUQ0REU7SUFDSSx1QkFBQTtJQUNBLHdCQUFBO0VDekROOztFRDJERTtJQUNJLDBCQUFBO0VDeEROOztFRDJERTs7Ozs7Ozs7Ozs7O0lBQUE7QUM1Q0o7QUQyREE7RUFDSTtJQUNJLFlBQUE7RUN6RE47QUFDRjtBRDJEQTs7OztFQUFBO0FBS0E7RUFDSTtJQUNJLGFBQUE7RUN6RE47RUQyRE07SUFDSSwyQkFBQTtFQ3pEVjtFRDJEVTtJQUNJLGVBQUE7RUN6RGQ7O0VEOERFO0lBQ0ksZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0VDM0ROO0VENkRNO0lBQ0kseUJBQUE7RUMzRFY7RUQrRE07SUFDSSx5QkFBQTtFQzdEVjtFRCtEVTtJQUNJLDRCQUFBO0VDN0RkO0VEZ0VVO0lBQ0ksMEJBQUE7SUFDQSw0QkFBQTtFQzlEZDs7RURtRUU7SUFDSSxjQUFBO0VDaEVOO0VEa0VNO0lBQ0ksaUJBQUE7RUNoRVY7RURtRU07SUFDSSw0QkFBQTtFQ2pFVjs7RUR1RUU7SUFDSSx1QkFBQTtJQUNBLHdCQUFBO0VDcEVOO0FBQ0Y7QURzRUE7RUFDSTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDcEVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXRIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC91NTg4LmpwZycpO1xyXG5cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDI4LCAzNSwgMC45NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNHcmVhdGVPcmcge1xyXG4gICAgaGVpZ2h0OiA0MThweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdTYyNS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIC5HcmVhdGVPdmVyTGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDk4MDM5MjE1Njg2Mjc1KTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC5HcmVhdENvbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTYlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNiUgMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jV2hvV2Uge1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxuICAgIHBhZGRpbmctdG9wOiA3JSA7XHJcblxyXG4gICAgLldobyB7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5CYWNrSW1nIHtcclxuICAgICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyMTMsIDE5MiwgMSk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHJcbiAgICAgICAgLldob0ltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1OHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtNCU7XHJcbiAgICAgICAgICAgIHRvcDogLTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2Fib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDYsIDI0MiwgMSk7XHJcblxyXG4gICAgLkFib3V0SW5mbyB7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ2LCAyNDIsIDEpOyovXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5BYm91dENvbnRUYWIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0FGMkYyMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1iLTIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkZvdW5kZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkFib3V0VGFiLCAuSW1nVGFiLCAuSW1nTW9iIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ011bGknO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLk5HIHtcclxuICAgICAgICB3aWR0aDogMzQxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NjhweDtcclxuICAgIH1cclxufVxyXG5cclxuI1dvcmtVcyB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsgICBcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE1MnB4ICkge1xyXG4gICAgLkFib3V0Q29udFRhYiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjc2NnB4KSBhbmQgKG1heC13aWR0aDo5NTBweCkge1xyXG4gICAgLkdyZWF0Q29udCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNXaG9XZSB7XHJcblxyXG5cclxuICAgICAgICAuV2hvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuQmFja0ltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0IHtcclxuICAgICAgICAuSW1nTGcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG5cclxuICAgICAgICAgICAgLk5HIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzI4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0OCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5BYm91dEluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4ICkge1xyXG4gICAgLkdyZWF0Q29udCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDklIDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNXaG9XZSB7XHJcbiAgICAgICAgLldobyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5CYWNrSW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQge1xyXG4gICAgICAgIC5BYm91dEluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JbWdMZywgSW1nTW9iIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5BYm91dENvbnRUYWIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLm1iLTIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5JbWdMZWZ0IGltZywgLkltZ1JpZ2h0IGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuSW1nVGFiIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAuTkcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuVGFiQ291dGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc3JTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkZvdW5kZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNXb3JrVXMge1xyXG4gICAgICAgIC8qLldvcmtQYXJnIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLldvcmtCdXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjMyMXB4KSBhbmQgKG1heC13aWR0aDo3NTBweCkge1xyXG4gICAgLlRhYkNvdXRlIHtcclxuICAgICAgICB3aWR0aDogNjglICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAjYWJvdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDclIDA7XHJcblxyXG4gICAgICAgIC5JbWdNb2Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JbWdDb250LkltZ1RhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5UYWJDb3V0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuTW9wUGFyYWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLkJhY2tJbWcsIC5XaG9JbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMjMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5CYWNrSW1ne1xyXG4gICAgICAgIG1hcmdpbjo1JSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyojV29ya1VzIHtcclxuICAgICAgICBwYWRkaW5nOiA2JSAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOTRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAjR3JlYXRlT3JnIHtcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgIH1cclxufVxyXG4vKkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAjR3JlYXRlT3JnIHtcclxuICAgICAgICBoZWlnaHQ6IDQzNXB4O1xyXG4gICAgfVxyXG59Ki9cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTFweDtcclxuXHJcbiAgICAgICAgLkFib3V0Q29udCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjR3JlYXRlT3JnIHtcclxuICAgICAgICAvKmhlaWdodDogYXV0bzsqL1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ4LCAyNDkpO1xyXG5cclxuICAgICAgICAuR3JlYXRlT3ZlckxheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OCwgMjQ5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuR3JlYXRDb250IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTIlIDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNXaG9XZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTIlIDA7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNiUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuQmFja0ltZywgLldob0ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAjYWJvdXQgLkltZ01vYiBpbWcge1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgfVxyXG59IiwiLmFib3V0SGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdTU4OC5qcGdcIik7XG59XG4uYWJvdXRIZWFkZXIgLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LCAyOCwgMzUsIDAuOTUpO1xufVxuXG4jR3JlYXRlT3JnIHtcbiAgaGVpZ2h0OiA0MThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYWJvdXQvdTYyNS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNHcmVhdGVPcmcgLkdyZWF0ZU92ZXJMYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDk4MDM5MjE1Nyk7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNHcmVhdGVPcmcgLkdyZWF0ZU92ZXJMYXkgLkdyZWF0Q29udCB7XG4gIHdpZHRoOiA1NiU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2JSAwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiNHcmVhdGVPcmcgLkdyZWF0ZU92ZXJMYXkgLkdyZWF0Q29udCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cbiNHcmVhdGVPcmcgLkdyZWF0ZU92ZXJMYXkgLkdyZWF0Q29udCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4jV2hvV2Uge1xuICBwYWRkaW5nOiA1JSAwO1xuICBwYWRkaW5nLXRvcDogNyU7XG59XG4jV2hvV2UgLldobyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI1dob1dlIC5XaG8gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG59XG4jV2hvV2UgLldobyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuI1dob1dlIC5CYWNrSW1nIHtcbiAgd2lkdGg6IDQ2MHB4O1xuICBoZWlnaHQ6IDM1OHB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkNWMwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jV2hvV2UgLkJhY2tJbWcgLldob0ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ2MHB4O1xuICBoZWlnaHQ6IDM1OHB4O1xuICBsZWZ0OiAtNCU7XG4gIHRvcDogLTUlO1xufVxuXG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmNmYyO1xufVxuI2Fib3V0IC5BYm91dEluZm8ge1xuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDYsIDI0MiwgMSk7Ki9cbiAgcGFkZGluZy10b3A6IDQlO1xufVxuI2Fib3V0IC5BYm91dENvbnRUYWIge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuI2Fib3V0IC5BYm91dENvbnRUYWIgLnRpdCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjQUYyRjIwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4jYWJvdXQgLkFib3V0Q29udFRhYiAubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG4jYWJvdXQgLkFib3V0Q29udFRhYiAuRm91bmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn1cbiNhYm91dCAuQWJvdXRDb250VGFiIC5BYm91dFRhYiwgI2Fib3V0IC5BYm91dENvbnRUYWIgLkltZ1RhYiwgI2Fib3V0IC5BYm91dENvbnRUYWIgLkltZ01vYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jYWJvdXQgLkFib3V0Q29udFRhYiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNhYm91dCAuTkcge1xuICB3aWR0aDogMzQxcHg7XG4gIGhlaWdodDogNDY4cHg7XG59XG5cbiNXb3JrVXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTE1MnB4KSB7XG4gIC5BYm91dENvbnRUYWIge1xuICAgIHBhZGRpbmctbGVmdDogOCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY2cHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuR3JlYXRDb250IHtcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjV2hvV2UgLldobyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gIH1cbiAgI1dob1dlIC5CYWNrSW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAjYWJvdXQgLkltZ0xnIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAjYWJvdXQgLkltZ0xnIC5ORyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzI4cHg7XG4gICAgbWFyZ2luLXRvcDogNDglO1xuICB9XG4gICNhYm91dCAuQWJvdXRJbmZvIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuR3JlYXRDb250IHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOSUgMCAhaW1wb3J0YW50O1xuICB9XG4gIC5HcmVhdENvbnQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNCUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNXaG9XZSAuV2hvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIH1cbiAgI1dob1dlIC5CYWNrSW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAjYWJvdXQgLkFib3V0SW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2Fib3V0IC5JbWdMZywgI2Fib3V0IEltZ01vYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjYWJvdXQgLkFib3V0Q29udFRhYiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAjYWJvdXQgLkFib3V0Q29udFRhYiAubWItMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIH1cbiAgI2Fib3V0IC5BYm91dENvbnRUYWIgLkltZ0xlZnQgaW1nLCAjYWJvdXQgLkFib3V0Q29udFRhYiAuSW1nUmlnaHQgaW1nIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbiAgI2Fib3V0IC5BYm91dENvbnRUYWIgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgfVxuICAjYWJvdXQgLkFib3V0Q29udFRhYiAuSW1nVGFiIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgI2Fib3V0IC5BYm91dENvbnRUYWIgLkltZ1RhYiAuTkcge1xuICAgIHdpZHRoOiAxNTRweDtcbiAgICBoZWlnaHQ6IDIxOHB4O1xuICB9XG4gICNhYm91dCAuQWJvdXRDb250VGFiIC5UYWJDb3V0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3NyU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICNhYm91dCAudGl0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMSUgIWltcG9ydGFudDtcbiAgfVxuICAjYWJvdXQgLkZvdW5kZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gICNXb3JrVXMge1xuICAgIC8qLldvcmtQYXJnIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5Xb3JrQnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICB9Ki9cbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzIxcHgpIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuVGFiQ291dGUge1xuICAgIHdpZHRoOiA2OCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2Fib3V0IHtcbiAgICBwYWRkaW5nOiA3JSAwO1xuICB9XG4gICNhYm91dCAuSW1nTW9iIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAjYWJvdXQgLkltZ01vYiBpbWcge1xuICAgIHdpZHRoOiA5M3B4O1xuICAgIGhlaWdodDogMTMxcHg7XG4gIH1cbiAgI2Fib3V0IC5JbWdDb250LkltZ1RhYiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gICNhYm91dCAuVGFiQ291dGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2Fib3V0IC5UYWJDb3V0ZSAuTW9wUGFyYWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgfVxuICAjYWJvdXQgLlRhYkNvdXRlIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuQmFja0ltZywgLldob0ltZyB7XG4gICAgd2lkdGg6IDMzMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkJhY2tJbWcge1xuICAgIG1hcmdpbjogNSUgYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyojV29ya1VzIHtcbiAgICAgIHBhZGRpbmc6IDYlIDAgIWltcG9ydGFudDtcblxuICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxOTRweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0qL1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgI0dyZWF0ZU9yZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4vKkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgI0dyZWF0ZU9yZyB7XG4gICAgICAgIGhlaWdodDogNDM1cHg7XG4gICAgfVxufSovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogMjExcHg7XG4gIH1cbiAgaGVhZGVyIC5BYm91dENvbnQge1xuICAgIHBhZGRpbmctdG9wOiAzMCUgIWltcG9ydGFudDtcbiAgfVxuICBoZWFkZXIgLkFib3V0Q29udCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgI0dyZWF0ZU9yZyB7XG4gICAgLypoZWlnaHQ6IGF1dG87Ki9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjk7XG4gIH1cbiAgI0dyZWF0ZU9yZyAuR3JlYXRlT3ZlckxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmOTtcbiAgfVxuICAjR3JlYXRlT3JnIC5HcmVhdENvbnQge1xuICAgIHBhZGRpbmc6IDEyJSAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgI0dyZWF0ZU9yZyAuR3JlYXRDb250IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgI0dyZWF0ZU9yZyAuR3JlYXRDb250IGgyIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA2JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI1dob1dlIHtcbiAgICBwYWRkaW5nOiAxMiUgMDtcbiAgfVxuICAjV2hvV2UgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDYlO1xuICB9XG4gICNXaG9XZSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLkJhY2tJbWcsIC5XaG9JbWcge1xuICAgIHdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjE0cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgI2Fib3V0IC5JbWdNb2IgaW1nIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/careers/careers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/careers/careers.component.ts ***!
  \****************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CareersComponent.ɵfac = function CareersComponent_Factory(t) { return new (t || CareersComponent)(); };
CareersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareersComponent, selectors: [["app-careers"]], decls: 2, vars: 0, template: function CareersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "careers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-careers',
                templateUrl: './careers.component.html',
                styleUrls: ['./careers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/contactus/contactus.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.ts ***!
  \********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contact-us.service */ "./src/app/services/contact-us.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");








function ContactusComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_78_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactusComponent_div_78_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactusComponent_div_78_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
} }
function ContactusComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactusComponent_agm_marker_93_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markerClick", function ContactusComponent_agm_marker_93_Template_agm_marker_markerClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const m_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clickedMarker(m_r7.label, i_r8); })("dragEnd", function ContactusComponent_agm_marker_93_Template_agm_marker_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const m_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.markerDragEnd(m_r7, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "InfoWindow content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r7.lat)("longitude", m_r7.lng)("label", m_r7.label)("markerDraggable", m_r7.draggable);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactusComponent {
    constructor(titleService, formBuilder, sendMail) {
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.sendMail = sendMail;
        this.title = 'Contact Numbers & Office Locations | CivilSoft HCM';
        this.submitted = false;
        // google maps zoom level
        this.zoom = 4;
        // initial center position for the map
        this.lat = 31.231180799999997;
        this.lng = 29.956505600000003;
        this.markers = [
            {
                lat: 25.257441,
                lng: 55.337158,
                label: 'A',
                draggable: true
            },
            {
                lat: 31.231180799999997,
                lng: 29.956505600000003,
                label: 'B',
                draggable: true
            },
            {
                lat: 21.575240,
                lng: 39.143220,
                label: 'C',
                draggable: true
            }
        ];
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.contactForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        //form submitted
        //alert('SUCCESS!! :-)')
        $('#ScheduleModal').modal('hide');
        // $('#SuccessPopup').modal('show');
        //this.contactForm.reset();
        let FormMail = JSON.stringify(this.contactForm.value);
        this.sendMail.SetNewMail(FormMail);
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__["ContactUsService"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 102, vars: 23, consts: [[1, "container-fluid"], [1, "row", "headerCtn", "contactHeader", "align-content-center", "text-center", "mb-5"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "container"], [1, "row"], [1, "col-lg-7", "order-lg-1", "order-md-2", "order-2"], [1, "row", "office-row"], [1, "office-label", "TitColor"], [1, "col-lg-12", "office"], [1, "uae"], [1, "row", "line-dashed"], [1, "office-part", "head", "TitColor", "mb-4"], ["src", "assets/images/home/u150.png", 1, "uae-img"], [1, "col-lg-12"], [1, "office-part", "contactIcon", "locationIcon"], ["src", "assets/images/home/iconfinder_location_1814106_2.png"], [1, "address"], [1, "office-part", "contactIcon"], ["src", "assets/images/home/iconfinder_00-ELASTOFONT-STORE-READY_phone_2703069.png"], ["src", "assets/images/home/iconfinder___Letter_19046602.png"], [1, "col-md-6", "office"], [1, "egy"], ["src", "assets/images/home/u153.png", 1, "uae-img"], [1, "address", "height"], ["src", "assets/images/home/iconfinder_00-ELASTOFONT-STORE-READY_phone_2703069.png", 1, "egy-img"], [1, "ksa"], ["src", "assets/images/home/u155.png", 1, "uae-img"], [1, "col-lg-5", "send-part", "order-lg-2", "order-md-1", "order-1"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-12"], ["type", "text", "name", "name", "value", "", "placeholder", "Full Name", "formControlName", "fullName", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "name", "email", "value", "", "placeholder", "Email Address", "formControlName", "email", "required", "", 1, "form-control", 3, "ngClass"], ["type", "text", "name", "subject", "value", "", "placeholder", "Subject", "formControlName", "subject", "required", "", 1, "form-control", 3, "ngClass"], ["name", "msg", "rows", "5", "cols", "80", "placeholder", "Message", "formControlName", "message", "required", "", 1, "form-control", "contact-area", 3, "ngClass"], ["type", "submit", "name", "send", 1, "sendBtn", "px-5", "btn-primary", "btn"], [1, "row", "map-row"], [1, "map"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "mapClick"], [3, "latitude", "longitude", "label", "markerDraggable", "markerClick", "dragEnd", 4, "ngFor", "ngForOf"], [1, "ReqMeeting", "py-5"], [1, "display-4", "TitColor"], [1, "lead", "TitColor", "py-2"], ["type", "button", "name", "demo", "data-toggle", "modal", "data-target", "#ScheduleModal", 1, "demoBtn", "btn", "btn-primary", "px-5"], [1, "invalid-feedback"], [4, "ngIf"], [3, "latitude", "longitude", "label", "markerDraggable", "markerClick", "dragEnd"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Let us hear from you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our Offices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Head Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sultan Group Investment Building, Airport Road, Port Said Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "P.O. Box: 22764 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dubai, UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+971 4 294 2425 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " info@civilsoft.net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Egypt Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "146 Ahmed Shawky Street, Roushdy Alexandria, Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "+2 03 5463496 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "KSA Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Alhumaidi Building, Amir Sultan Street,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Al Khalidiya Al Rawada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Jeddah, KSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "+966 12 690 1491/2/3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Send us a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactusComponent_Template_form_ngSubmit_70_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ContactusComponent_div_74_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ContactusComponent_div_78_Template, 3, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ContactusComponent_div_82_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ContactusComponent_div_86_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "agm-map", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function ContactusComponent_Template_agm_map_mapClick_92_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ContactusComponent_agm_marker_93_Template, 4, 4, "agm-marker", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h1", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Request a meeting now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Enter your details and we will get in touch to set up a live personalized demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.fullName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fullName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.subject.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.subject.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.message.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.message.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false)("zoomControl", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmInfoWindow"]], styles: [".contactHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/home/u518.png\");\n}\n\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n}\n\n.container[_ngcontent-%COMP%]   .office-row[_ngcontent-%COMP%]   .office-label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 24px;\n  margin-bottom: 1.5rem;\n}\n\n.container[_ngcontent-%COMP%]   .office-row[_ngcontent-%COMP%]   .line-dashed[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bfbfbf;\n  padding: 0 0 15px 0;\n  margin-bottom: 25px;\n}\n\n.container[_ngcontent-%COMP%]   .office-row[_ngcontent-%COMP%]   .no-line[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  margin-right: 10px;\n  font-family: \"Muli\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  color: #1C1C23;\n  font-size: 14px;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 89%;\n  vertical-align: top;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%] {\n  height: 85px;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 20px;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .contactIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n}\n\n.container[_ngcontent-%COMP%]   .office[_ngcontent-%COMP%]   .locationIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-right: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .contact-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #bfbfbf;\n  margin-bottom: 15px;\n  padding: 15px;\n}\n\n.container[_ngcontent-%COMP%]   .contact-area[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.container[_ngcontent-%COMP%]   .send-part[_ngcontent-%COMP%]   .office-label[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 24px;\n  margin-bottom: 1.5rem;\n}\n\n.container[_ngcontent-%COMP%]   .uae-img[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 18px;\n  margin-top: 7px;\n}\n\n.map-row[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.map-row[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 414px;\n  width: 100%;\n  background-color: #333;\n}\n\n.map-row[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%] {\n  height: 414px;\n}\n\n.ReqMeeting[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n  height: 209px;\n  background-color: #f2f2f2;\n}\n\n.ReqMeeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  text-align: center;\n  font-size: 32px;\n}\n\n.ReqMeeting[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 14px;\n  text-align: center;\n}\n\n.ReqMeeting[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 268px;\n}\n\n@media all and (max-width: 1200px) {\n  .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n    width: 85% !important;\n  }\n}\n\n@media all and (max-width: 950px) {\n  .sendBtn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n@media all and (max-width: 768px) {\n  .img-section[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/home/u519_a.png\");\n    height: 300px;\n    background-size: auto;\n  }\n  .img-section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    height: 300px;\n    padding-top: 150px;\n  }\n\n  .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 750px) {\n  .office[_ngcontent-%COMP%]   .office-part[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n}\n\n@media (max-width: 550px) {\n  .ReqMeeting[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media (max-width: 500px) {\n  .img-section[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/home/u520_b.png\");\n    height: 300px;\n    background-size: cover;\n  }\n  .img-section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    height: 300px;\n    padding-top: 150px;\n  }\n\n  form[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  form[_ngcontent-%COMP%]   .sendBtn[_ngcontent-%COMP%] {\n    margin: 7% auto;\n  }\n}\n\n.TitColor[_ngcontent-%COMP%] {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHVzL0U6XFxNYWkubVxcQ2l2aWxzb2Z0V2Vic2l0ZTIwMjBcXFdlYnNpdGUuV2ViVUkvc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0dXNcXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFEQUFBO0FDQ0o7O0FER0k7RUFDSSxtQkFBQTtBQ0FSOztBRElRO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDRlo7O0FES1E7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNIWjs7QURNUTtFQUNJLG1CQUFBO0FDSlo7O0FEUUk7RUFDSSxnQkFBQTtBQ05SOztBRFVRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUlo7O0FEVVk7RUFDSSxpQkFBQTtBQ1JoQjs7QURXWTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDVGhCOztBRFlZO0VBQ0ksWUFBQTtBQ1ZoQjs7QURjUTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaWjs7QURnQlk7RUFDSSxXQUFBO0FDZGhCOztBRG1CWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2pCaEI7O0FEd0JJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDdEJSOztBRHlCSTtFQUNJLGdCQUFBO0FDdkJSOztBRDJCUTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ3pCWjs7QUQ2Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMzQlI7O0FEK0JBO0VBQ0ksY0FBQTtBQzVCSjs7QUQ4Qkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDNUJSOztBRDhCUTtFQUNJLGFBQUE7QUM1Qlo7O0FEaUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQzlCSjs7QURnQ0k7RUFDSSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUM5QlI7O0FEaUNJO0VBQ0ksbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDL0JSOztBRGtDSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDaENSOztBRG9DQTtFQUNLO0lBRUcscUJBQUE7RUNsQ047QUFDRjs7QURvQ0E7RUFDSTtJQUNJLG1CQUFBO0VDbENOO0FBQ0Y7O0FEcUNBO0VBQ0k7SUFDSSx1REFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQ25DTjtFRHFDTTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQ25DVjs7RUR3Q007SUFDSSxlQUFBO0VDckNWO0VEd0NNO0lBQ0ksZUFBQTtFQ3RDVjtBQUNGOztBRDJDQTtFQUNJO0lBQ0ksdUJBQUE7RUN6Q047QUFDRjs7QUQyQ0E7RUFDSTtJQUNJLFlBQUE7RUN6Q047QUFDRjs7QUQyQ0E7RUFDSTtJQUNJLHVEQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VDekNOO0VEMkNNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0VDekNWOztFRDRDRTtJQUNJLGtCQUFBO0VDekNOO0VEMkNNO0lBQ0ksZUFBQTtFQ3pDVjtBQUNGOztBRCtDQTtFQUNJLGNBQUE7QUM3Q0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaG9tZS91NTE4LnBuZ1wiKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBidXR0b24sIGlucHV0LCBvcHRncm91cCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpJztcclxuICAgIH1cclxuXHJcbiAgICAub2ZmaWNlLXJvdyB7XHJcbiAgICAgICAgLm9mZmljZS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGluZS1kYXNoZWQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDE1cHggMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uby1saW5lIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9mZmljZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcblxyXG5cclxuICAgICAgICAub2ZmaWNlLXBhcnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpJztcclxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFDMUMyMztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODklO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlaWdodCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiJztcclxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFjdEljb24ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2NhdGlvbkljb24ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuY29udGFjdC1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmZiZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VuZC1wYXJ0IHtcclxuICAgICAgICAub2ZmaWNlLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG9TbGFiJztcclxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVhZS1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAtcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG5cclxuICAgIC5tYXAge1xyXG4gICAgICAgIGhlaWdodDogNDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHJcbiAgICAgICAgYWdtLW1hcCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uUmVxTWVldGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAyMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAubGVhZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpJztcclxuICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZW1vIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2OHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAgLm9mZmljZSAub2ZmaWNlLXBhcnQgLmFkZHJlc3Mge1xyXG4gICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgLnNlbmRCdG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaW1nLXNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTUxOV9hLnBuZ1wiKTtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAub2ZmaWNlIC5vZmZpY2UtcGFydCAuaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5SZXFNZWV0aW5ne1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmltZy1zZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lL3U1MjBfYi5wbmdcIik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5zZW5kQnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA3JSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxufVxyXG5cclxuXHJcbi5UaXRDb2xvciB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4iLCIuY29udGFjdEhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTUxOC5wbmdcIik7XG59XG5cbi5jb250YWluZXIgYnV0dG9uLCAuY29udGFpbmVyIGlucHV0LCAuY29udGFpbmVyIG9wdGdyb3VwLCAuY29udGFpbmVyIHNlbGVjdCwgLmNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn1cbi5jb250YWluZXIgLm9mZmljZS1yb3cgLm9mZmljZS1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5jb250YWluZXIgLm9mZmljZS1yb3cgLmxpbmUtZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY29udGFpbmVyIC5vZmZpY2Utcm93IC5uby1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jb250YWluZXIgLm9mZmljZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyIC5vZmZpY2UgLm9mZmljZS1wYXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogIzFDMUMyMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhaW5lciAub2ZmaWNlIC5vZmZpY2UtcGFydCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWluZXIgLm9mZmljZSAub2ZmaWNlLXBhcnQgLmFkZHJlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4OSU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uY29udGFpbmVyIC5vZmZpY2UgLm9mZmljZS1wYXJ0IC5oZWlnaHQge1xuICBoZWlnaHQ6IDg1cHg7XG59XG4uY29udGFpbmVyIC5vZmZpY2UgLmhlYWQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAub2ZmaWNlIC5jb250YWN0SWNvbiBpbWcge1xuICB3aWR0aDogMjJweDtcbn1cbi5jb250YWluZXIgLm9mZmljZSAubG9jYXRpb25JY29uIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5jb250YWN0LWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY29udGFpbmVyIC5jb250YWN0LWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRhaW5lciAuc2VuZC1wYXJ0IC5vZmZpY2UtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uY29udGFpbmVyIC51YWUtaW1nIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ubWFwLXJvdyB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLm1hcC1yb3cgLm1hcCB7XG4gIGhlaWdodDogNDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuLm1hcC1yb3cgLm1hcCBhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0MTRweDtcbn1cblxuLlJlcU1lZXRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogMjA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4uUmVxTWVldGluZyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5SZXFNZWV0aW5nIC5sZWFkIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlJlcU1lZXRpbmcgLmRlbW8ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyNjhweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZpY2UgLm9mZmljZS1wYXJ0IC5hZGRyZXNzIHtcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC5zZW5kQnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hvbWUvdTUxOV9hLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgfVxuICAuaW1nLXNlY3Rpb24gLm92ZXJsYXkge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICB9XG5cbiAgLmp1bWJvdHJvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5qdW1ib3Ryb24gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLm9mZmljZSAub2ZmaWNlLXBhcnQgLmhlaWdodCB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAuUmVxTWVldGluZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmltZy1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ob21lL3U1MjBfYi5wbmdcIik7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5pbWctc2VjdGlvbiAub3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZm9ybSAuc2VuZEJ0biB7XG4gICAgbWFyZ2luOiA3JSBhdXRvO1xuICB9XG59XG4uVGl0Q29sb3Ige1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__["ContactUsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/future/future.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/future/future.component.ts ***!
  \**************************************************/
/*! exports provided: FutureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureComponent", function() { return FutureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FutureComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'Work Tech for The Road to Recovery and Beyond | CivilSoft HCM';
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
            { name: 'keywords', content: 'civilsoft, hr, future' },
            { name: 'description', content: ' The coronavirus crisis has hit hard, but technology has proven critical in helping organizations survive, endure, and rise from the crisis to a new age of opportunity.' },
            { name: 'title', content: 'Work Tech for The Road to Recovery and Beyond | CivilSoft HCM' },
            { property: "og:image:width", content: "xxx" },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "http://www.civilsoft.net/" },
            { property: "og:title", content: "Work Tech for The Road to Recovery and Beyond | CivilSoft HCM" },
            { property: "og:description", content: "The coronavirus crisis has hit hard, but technology has proven critical in helping organizations survive, endure, and rise from the crisis to a new age of opportunity. " },
            { property: "og:image", content: "/assets/images/metaTags/Future.jpg" },
            { property: "twitter:card", content: "summary_large_image" },
            { property: "twitter:url", content: "http://www.civilsoft.net/" },
            { property: "twitter:title", content: "Work Tech for The Road to Recovery and Beyond | CivilSoft HCM" },
            { property: "twitter:description", content: "The coronavirus crisis has hit hard, but technology has proven critical in helping organizations survive, endure, and rise from the crisis to a new age of opportunity. " },
            { property: "twitter:image", content: "/assets/images/metaTags/Future.jpg" }
        ]);
        // go to top
        $('[routerLink]').click(function () {
            $('#myBtn').trigger('click');
        });
    }
}
FutureComponent.ɵfac = function FutureComponent_Factory(t) { return new (t || FutureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
FutureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FutureComponent, selectors: [["app-future"]], decls: 72, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "futureHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "mt-auto", "col-md-9"], [1, "mb-4"], [1, "mtL-auto", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mtb", "col-md-12", "text-center"], ["src", "assets\\images\\future\\future.jpg", 1, "img-responsive", "arrowImg"], [1, "lastSec", "py-4"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["routerLink", "/pages/contact", "routerLinkActive", "active", 1, "btn-primary", "btn", "px-4"]], template: function FutureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Work Tech for The Road to Recovery and Beyond ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The global economy is expected to contract by 3% this year as quarantines and lockdowns cripple output. Mckinsey called it a global humanitarian challenge, Josh Bersin called it the big reset, and the IMF predicted the worst downturn since the great depression. One thing is certain, COVID-19 has disrupted businesses in a way nothing else has. Among job losses, liquidity challenges, demand shocks, and operational issues, organizations have found themselves fighting for their survival. However, according to a recent BCG survey, 85% of CFOs see opportunities rising. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Across the world, reopening plans are being drafted and tested. As organizations embark on the road to recovery, they have to address 3 realities: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1- Cost Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The lockdown has caused reductions in demand and client credit defaults, which have significantly impacted the profitability and liquidity of most organizations. Businesses are thus contemplating ways to recover revenues, and more importantly, strategies for cost avoidance, reduction, and optimization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2- Health and Safety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " COVID-19 has forced us into a contact-free economy. Health and safety are now primary concerns and keeping a safe distance is on every organization's reopening playbook. The extent to which an organization can offer contactless services to employees, candidates, and customers can develop competitive advantage and help restore confidence and build trust. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3- Digital Literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " The coronavirus has forced technology to become an inherent element of everyone's lives, not just the digital natives. Confined to their homes, many people have picked up new digital ways of doing things, and have found more convenient replacements for traditional in-person activities. People of all ages and backgrounds now have higher technology literacy and wider access to technology, and have come to expect digital experiences from their vendors and employers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "These three realities have pushed every organization to at least think of ways to accelerate digital transformation as a means of survival.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "To adapt to the new normal, organizations have to reimagine experiences, reengineer processes, and automate, fast.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Over the past decade, technology has been developing at an accelerating pace, and the time has come for us to reap the benefits of automation to survive, endure, and rise from the crisis to a new age of opportunity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Here are 6 technologies especially useful for organizations on the road to recovery and beyond: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1- Robotic Process Automation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " RPA presents a low-cost and easy-to-implement approach to automating mundane and highly repetitive tasks that were traditionally performed by humans. Companies are turning to RPA for the speed, accuracy, and efficiency it promises in HR processes such as payroll and onboarding as well as other processes such as order processing and handling complaints. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2- Chatbots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Organizations are fostering an increased reliance on chatbots, thereby removing intermediaries, saving time, and making way for faster issue resolution. Chatbots have proven highly effective in answering queries that candidates, employees, and customers may have, and are revolutionizing user interfaces. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "3- Low Code Development Platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Low Code Development Platforms enable you to create applications in a visual WYSIWYG environment with minimum development intervention, providing for a fast response to challenges and a solution that is easy to setup and maintain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "4- Machine learning and analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " COVID-19 was a difficult risk to predict, and more difficult to mitigate. But other risks aren't. Machine learning and analytics can help organizations break the chains of limited oversight and support continuous foresight, and manage risks such as churn, performance derailments, or bad hires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "5- Talent & Performance Management tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " With anxious employees and dispersed work teams, engagement and productivity are undoubtedly affected. To support employee wellbeing and ensure remote work actually works, organizations need tools to maintain communication and increase collaboration, to listen and create feedback loops, and to assess and enhance the digital competencies that their workforce needs going forward. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "6- Video interviewing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Video interviewing has filled in for in-person interviewing as organizations try to limit contact and comply with safety measures, but it has significant benefits that make it the better choice even in normal times. It helps overcome scheduling constraints, improve process standardization, and allows for higher collaboration between recruiters and hiring managers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " We're ready to help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "CivilSoft puts you on the fastest route to bottomline growth with smart digitization at only a fraction of the savings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".futureHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/future/u376.png\");\n}\n\n.mt-auto[_ngcontent-%COMP%] {\n  margin: 1rem auto 0 auto;\n}\n\n.mtL-auto[_ngcontent-%COMP%] {\n  margin: 1rem auto 0 1rem;\n  padding-right: 0;\n}\n\n.mtb[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n}\n\n.image-with-conntent[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin-bottom: 2% !important;\n}\n\n.lastSec[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.lastSec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Muli\";\n}\n\n@media all and (max-width: 450px) {\n  .arrowImg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .headerCtn[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    margin-top: 7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnV0dXJlL0U6XFxNYWkubVxcQ2l2aWxzb2Z0V2Vic2l0ZTIwMjBcXFdlYnNpdGUuV2ViVUkvc3JjXFxhcHBcXHBhZ2VzXFxmdXR1cmVcXGZ1dHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnV0dXJlL2Z1dHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURESTtFQUNJLDRCQUFBO0FDSVI7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ1o7O0FER0E7RUFDSTtJQUNJLFdBQUE7RUNBTjs7RURFRTtJQUNJLGdCQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1dHVyZS9mdXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnV0dXJlSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZnV0dXJlL3UzNzYucG5nJyk7XHJcbn1cclxuLm10LWF1dG8ge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xyXG59XHJcbi5tdEwtYXV0byB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwIDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbn1cclxuLm10YntcclxuICAgIG1hcmdpbjoycmVtIGF1dG87XHJcbn1cclxuLmltYWdlLXdpdGgtY29ubnRlbnQge1xyXG4gICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4ubGFzdFNlYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6XCJNdWxpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuYXJyb3dJbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlckN0biAucGFnZS10aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOjdyZW07XHJcbiAgICB9XHJcblxyXG59IiwiLmZ1dHVyZUhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Z1dHVyZS91Mzc2LnBuZ1wiKTtcbn1cblxuLm10LWF1dG8ge1xuICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XG59XG5cbi5tdEwtYXV0byB7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDAgMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm10YiB7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuXG4uaW1hZ2Utd2l0aC1jb25udGVudCAuc3ViLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cblxuLmxhc3RTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmxhc3RTZWMgaDMgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmFycm93SW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oZWFkZXJDdG4gLnBhZ2UtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FutureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-future',
                templateUrl: './future.component.html',
                styleUrls: ['./future.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/mental-health/mental-health.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/mental-health/mental-health.component.ts ***!
  \****************************************************************/
/*! exports provided: MentalHealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentalHealthComponent", function() { return MentalHealthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MentalHealthComponent {
    constructor() { }
    ngOnInit() {
    }
}
MentalHealthComponent.ɵfac = function MentalHealthComponent_Factory(t) { return new (t || MentalHealthComponent)(); };
MentalHealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentalHealthComponent, selectors: [["app-mental-health"]], decls: 123, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "mentalHealthHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "m-auto", "mt-auto", "col-md-9"], [1, "mb-4"], [1, "mentalHealthLink"], ["href", "https://ourworldindata.org/mental-health", "target", "_blank"], ["href", "https://www.who.int/health-topics/mental-health#tab=tab_2", "target", "_blank"], [1, "mtL-auto", "col-md-12", "px-0"], [1, "sub-title", "mb-2"], ["href", "https://www.who.int/teams/mental-health-and-substance-use/mental-health-in-the-workplace", "target", "_blank"], ["href", "https://www.mqmentalhealth.org/stress-and-mental-health/", "target", "_blank"], [1, "mtL-auto", "mx-3", "col-md-12"], [1, "sub-points", "mb-1"], ["href", "https://www.healthline.com/health/yerkes-dodson-law#stress-performance-bell-curve", "target", "_blank"], [1, "mtb", "col-md-12", "text-center", "my-4"], ["src", "assets\\images\\mental-health\\curveImage.png", 1, "img-responsive", "arrowImg", "mentalHealthImg"], ["href", "https://www.stress.org/workplace-stress", "target", "_blank"], [1, "lastSec", "py-4"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["routerLink", "/pages/contact", "routerLinkActive", "active", 1, "btn-primary", "btn", "px-4"]], template: function MentalHealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " How to Create a Positive Mental Health Company Culture? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Mental health conditions affect more than 792 million people worldwide annually, according to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " conducted in 2017. This amounts to slightly more than 1 in 10 of the human population. The situation gets worse with the young population with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " World Health Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " listing mental health-related suicide as the second leading cause of death among 15-29-year-olds. With such staggering statistics and with people spending more than one-third of their lives at work, it seems necessary to revisit workplace practices, the extent to which they may put people at risk for mental health conditions, and, more importantly, what you, as an HR professional, can do about it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " First of all, why does it matter? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Mental Health & The Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " The estimated cost of depression and anxiety on the global economy is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " $1trillion a year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " from lost productivity through absenteeism and stress. A study suggests that mental health conditions such as stress-induced anxiety cause more work absenteeism than physical injury or physical illness. In a 2000 Integra survey, 19% or almost one in five of the survey respondents reported quitting a previous position because of job stress, and 14% reported having workplace equipment undergo damage due to workplace rage. Simply put, a poor mental health culture in any organization is a leading driver behind absenteeism, lost productivity, poor collaboration, employee turnover, and , even worse, workplace violence. So, it is only sensible that HR professionals put mental health first and develop solid programs and policies that support a positive mental health culture in their organizations. This article is part 1 in a series of articles that will tackle the triggers of mental health conditions in organizations and the best practices to foster positive mental health cultures. In this article, we will discuss psychological stress, what it is, its effect on employees, and what you can do to limit its detrimental effects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " What is Psychological Stress? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Psychological stress is the physiological response due to an imbalance between the internal desires or needs of an individual and their external environment. As such, stress is a driving force that directs people to take action in order to restore their psychological balance. In that sense, stress is not entirely a negative phenomenon, and it can have positive effects on productivity and creativity. This does not mean, however, that stress is an entirely positive phenomenon either. Some types and levels of stress can have detrimental effects not only on productivity but also on an individual's mental and physical health. In fact, unhealthy types and levels of stress have been linked to several of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " most prevalent mental health conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " of our time such as depression, anxiety, psychosis, post-traumatic stress disorder (PTSD), sleeping disorders, and, in some professions, eating disorders. Moreover, research has also shown a strong link between stress and the weakening of the immune system, leading to a wide array of psychosomatic and psychogenic illnesses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " What are Healthy and Unhealthy Types of Psychological Stress? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Not all psychological stress is created equal. There are healthy types of stress and unhealthy types. To understand this, we need to look into the different types of psychological stress as they are divided according to these two main criteria: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Stress Intensity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Stress varies greatly in intensity depending on the type of stressor. The stress you feel as you race to deliver a deck to a co-worker is very different from the stress you feel as you race to deliver an annual report to the CEO. Based on intensity, stress can be divided into high, moderate, and mild. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Stress Duration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Stress also varies greatly depending on the duration throughout which it lasts. It is relatively easy to tolerate uncertainty for two minutes but relatively hard to tolerate it for two years, although it is the same stressor. As such, psychological stress can be divided into short-term, medium-term, and long-term or chronic stress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Needless to say that the longer the duration and the higher the intensity of stress, the more likely the individual will crash under its effect. Think of your stress tolerance as a muscle, that no matter how strong and mobile it is, it needs periods of rest in order to function. Moderate or high-intensity levels of stress that persist over prolonged periods of time are exactly the types of stress that are strongly linked to triggering mental health conditions. This is why it is important, as an HR professional, that you create work environments that eliminate these types of stress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " What are Productive and Unproductive Levels of Stress? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " At times, psychological stress can be a great factor for driving performance at work, and, at other times, it can be distracting, disrupting, and simply demotivating. So, what exactly is the relation between psychological stress and performance at work? This question is aptly answered by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Yerkes-Dodson Law ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " also known as the inverted U-model of arousal. According to the research conducted by psychologists Robert Yerkes and John Dillingham Dodson in 1908, low levels of stress actually negatively impact performance as employees lack the motivation to perform. Interestingly, however, high levels of stress equally negatively impact performance, as the higher levels of arousal, under such levels of stress, actually distract employees and make focus challenging. According to Yerkes and Dodson, optimal performance is achieved when intermediate levels of stress are maintained. Not only that but the definition of 'intermediate' differs depending on the type of task at hand. The more complex the task, the lesser the intermediate level of stress is going to be. In other words, complex or cognitive tasks present lower optimal levels of arousal than simple or physical tasks. So, as an HR professional, you must strive to create work environments that foster intermediate levels of stress, bearing in consideration the type of work involved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " The HR Professional and De-Stressing the Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " As an HR professional working to create a positive mental health culture in your organization, your aim should never be to eliminate psychological stress altogether but to maintain intermediate levels of stress that can drive performance. Also, your aim is to make sure that these intermediate levels of stress do not extend endlessly for prolonged periods of time, as chronic stress is one of the leading causes of mental health conditions at work. So, how can you go about doing this? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Job Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " It all starts by designing your organization's jobs correctly. With 46% of work-related stress being attributed to workload, according to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " American Institute of Stress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " a poorly designed job leads to employees being overloaded, a not-so-positive level of stress. For reasons unknown, workload analysis is one of the most missed elements of job design with many HR professionals, in the process, simply listing down the tasks with no consideration to their time requirement. Therefore, it is essential as you conduct job design in your organization that you estimate the time allocated for the job's tasks and their level of frequency to ensure that the time needed for the completion of tasks aligns well with the expected working hours of the job incumbent. As you conduct this exercise, do not fall into the mistake of planning for 100% of the time, but rather plan for 80% of the expected working hours, making room for unexpected tasks, employee communication, learning, and time-off. Also, take the time to re-visit the job design regularly, at least once every two years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Talent Acquisition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Incorporate your mental health program into your employer branding. Make job applicants know that it is a priority for your organization. Shy away from the so-called 'stress interview', for as long as you are not hiring for a central intelligence agency position, it is extremely unnecessary. Contrarily, strive to make your interviewees comfortable so that you can reach a fair evaluation of their true fit. And, at all times, do not add the cliches such as 'can work under pressure' or 'can handle high levels of stress' in the job requirements section of your job posts. HR technology can help you further reduce the psychological stress that job candidates face by conducting smart interviews and sending them application status updates. By using Civilsoft HCMS, you can send candidates application status updates and use smart interviews to enable them to send their answers to interview questions in a recorded video format, thus, eliminating the face-to-face stress of a traditional interview setting and allowing candidates the time to think. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Learning & Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " One of the most stressful elements in any job is for the employee to feel inadequately trained to perform the job. Employee training programs can help you reduce this stress by making sure employees have access to the necessary knowledge and skills to excel at what they do. Besides job-related training programs, deliver training programs and make learning resources available to employees to help them develop positive stress management mechanisms. However, as tempting as this proposition can be, remember that putting all the responsibility for stress management onto the employee is a disguised form of 'blaming the victim'. In fact, no amount of stress coping mechanisms will make up for a faulty job design. So, as much as it is tempting to deliver a two-hour training to employees about stress management and get done with the whole thing, it is more important to deliver training to managers about how to structure work in an unstressing way, estimate time for tasks, prioritize tasks, respect work-life balance and boundaries, involve employees, and give them a sense of control. HR technology, such as Civilsoft's HCMS, can help you easily and efficiently conduct competency mapping, skills gap analysis, and manage employee learning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Performance Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Performance goals should be realistic and attainable so that employees work under intermediate levels of stress. Establish a healthy performance culture where managers ensure that employees have the time and resources to achieve their goals. Otherwise, unhealthy levels of stress may emerge. As goals are set, make sure that the deadlines of goals do not overlap in a way that only reflects poor time planning and triggers employee stress. Moreover, provide managers with adequate training on how to deal with poor performance without adding more stress or demonstrating disrespect. Using HR technology allows for the existence of transparent, objective performance management systems that significantly reduce employee stress resulting from fear of bias or favoritism interfering with the organizational performance management process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Compensation & Benefits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " With 20% of the causes of workplace stress coming from work-life imbalance, according to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " American Institute of Stress, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " it is essential that your compensation and benefits highlight the importance of work-life balance. Introduce flexible hours and remote work options, if possible. Create recognition programs for employees with excellent work-life balance. Give female employees the option of taking their children to work at times or at least provide them with childcare assistance. And to make sure that work stress levels never transform to chronic, insist that employees enjoy a two-day weekend and fully enjoy their annual leave every year. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Employee Engagement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " You can kick-start your mental health employee engagement program by including mental health in your quarterly employee satisfaction survey. Knowing where you are will help give you direction. Moreover, make sure that some of your employee engagement activities are family-inclusive. You can organize a company family day where team members bring their spouses or children to work or you can organize company gatherings where family members are invited, for example. And, as with all human resources initiatives, communication is key. Make sure that the company's mental health values are clearly and regularly communicated to employees through different formats and channels. Also, make sure that employees can easily communicate together, with their managers, and, if needed, with all levels of management in the organization. This open communication approach eliminates the stress resulting from employees not understanding requirements, not having a clear picture of organizational or project goals, or even not knowing who to talk to when a problem occurs or an escalation is needed. HR technology, such as Civilsoft HCMS, provides you with an employee database and chat options that enable this level of open communication among all the employees in your organization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " HR Compliance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " It is never fully implemented until it is officially documented. So, create policies that promote mental health and prevent mental health violations, i.e. any behaviors that could negatively stress employees or stigmatize employees with mental health conditions. Not only that, but you can also polish your efforts up by creating a company mental health email to which any mental health complaints or requests for support can be dealt with anonymously. With such all-rounded HR initiatives in place, you should be all set to creating and maintaining a positive mental health culture in your organization that eliminates unhealthy psychological stress and drives performance. Stay tuned for our upcoming articles in the mental health series. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Who Are We? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Civilsoft is an enterprise software company specialized in Strategy Execution and Human Capital Management. We provide you with innovative software solutions to make managing your HR processes simple, fast, and easy. Contact us at info@civilsoft.net for more information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " How Can We Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " If you're an organization that is struggling with how to upgrade your HR processes and provide world-class HR services, at Civilsoft, we can bring forth our 25 years of expertise to help you source, acquire, develop, retain, and reward employees using digital solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " We're ready to help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CivilSoft puts you on the fastest route to bottomline growth with smart digitization at only a fraction of the savings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mentalHealthHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/mental-health/header.jpg\");\n}\n\n.mentalHealthLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #BFAA81;\n}\n\n.mentalHealthLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.sub-points[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  text-transform: capitalize;\n  font-size: 15px;\n}\n\n.mentalHealthImg[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.lastSec[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.lastSec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Muli\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudGFsLWhlYWx0aC9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcbWVudGFsLWhlYWx0aFxcbWVudGFsLWhlYWx0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudGFsLWhlYWx0aC9tZW50YWwtaGVhbHRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREhRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDS1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW50YWwtaGVhbHRoL21lbnRhbC1oZWFsdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudGFsSGVhbHRoSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudGFsLWhlYWx0aC9oZWFkZXIuanBnJyk7XHJcbn1cclxuLm1lbnRhbEhlYWx0aExpbmsgYSB7XHJcbiAgICBjb2xvcjogI0JGQUE4MTtcclxufVxyXG4ubWVudGFsSGVhbHRoTGluayBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4uc3ViLXBvaW50cyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLm1lbnRhbEhlYWx0aEltZ3tcclxuICAgIHdpZHRoOjgwJSA7XHJcbn1cclxuLmxhc3RTZWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLm1lbnRhbEhlYWx0aEhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21lbnRhbC1oZWFsdGgvaGVhZGVyLmpwZ1wiKTtcbn1cblxuLm1lbnRhbEhlYWx0aExpbmsgYSB7XG4gIGNvbG9yOiAjQkZBQTgxO1xufVxuXG4ubWVudGFsSGVhbHRoTGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Yi1wb2ludHMge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWVudGFsSGVhbHRoSW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmxhc3RTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmxhc3RTZWMgaDMgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentalHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mental-health',
                templateUrl: './mental-health.component.html',
                styleUrls: ['./mental-health.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/our-team/our-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/our-team/our-team.component.ts ***!
  \******************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function OurTeamComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empTargetNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empTargetTitle);
} }
function OurTeamComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empTargetNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empTargetTitle);
} }
function OurTeamComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.spacialTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.midTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.lastTarget);
} }
function OurTeamComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.spacialTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.midTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.lastTarget);
} }
function OurTeamComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.spacialTarget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.midTarget);
} }
function OurTeamComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OurTeamComponent_div_10_div_4_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OurTeamComponent_div_10_div_5_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OurTeamComponent_div_10_div_6_Template, 7, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OurTeamComponent_div_10_div_7_Template, 7, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurTeamComponent_div_10_div_8_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", emp_r1.empImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", emp_r1.empType == "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", emp_r1.empType == "five");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", emp_r1.empType == "two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", emp_r1.empType == "four");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", emp_r1.empType == "three");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empNmae);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.empPosition);
} }
class OurTeamComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Meet the Team | CivilSoft HCM';
        this.employees = [
            {
                empImg: "/assets/images/home/ourteam/u39.png",
                empNmae: "Mushtaque Qazi",
                empPosition: "Head of Operations",
                empTargetNo: "100+",
                empTargetTitle: "Successful HCM Implementations",
                empType: "five"
            },
            {
                empImg: "/assets/images/home/ourteam/u118.png",
                empNmae: "Mohamed Bahaa",
                empPosition: "Project Manager",
                empTargetNo: "250+",
                empTargetTitle: "Processes Optimized",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u48.png",
                empNmae: "Aziz Dilwarawala",
                empPosition: "Software Development Manager",
                empTargetNo: "70+",
                empTargetTitle: "Product Releases",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u31.png",
                empNmae: "Heba El Akkad",
                empPosition: "Customer Success Manager",
                empTargetNo: "",
                empTargetTitle: "",
                spacialTarget: "THE VOICE",
                midTarget: "OF THE",
                lastTarget: "CUSTOMER",
                empType: "four"
            },
            {
                empImg: "/assets/images/home/ourteam/u66.png",
                empNmae: "Islam Ibrahim",
                empPosition: "Head of Technical Support",
                empTargetNo: "800+",
                empTargetTitle: "Tickets Resolved",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u75.png",
                empNmae: "Jenna El Attal",
                empPosition: "Product Manager",
                empTargetNo: "380%",
                empTargetTitle: "Growth in active users",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u92.png",
                empNmae: "Ahmed Hafez",
                empPosition: "Head of Consulting",
                empTargetNo: "300+",
                empTargetTitle: "Organizational Audits",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u84.png",
                empNmae: "Yomna Mamdouh",
                empPosition: "Solution Advisor",
                empTargetNo: "",
                empTargetTitle: "",
                spacialTarget: "MASTER NETWORKER",
                empType: "two"
            },
            {
                empImg: "/assets/images/home/ourteam/u101.png",
                empNmae: "Mohamed Hamed",
                empPosition: "Project Manager",
                empTargetNo: "50+",
                empTargetTitle: "Projects Delivered",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u57.png",
                empNmae: "Hend Ibrahim",
                empPosition: "Software Development Manager",
                empTargetNo: "1000+",
                empTargetTitle: "Standup Meetings",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u127.png",
                empNmae: "Cherian Babu",
                empPosition: "Senior Software Developer",
                empTargetNo: "100+",
                empTargetTitle: "Features Delivered",
                empType: "one"
            },
            {
                empImg: "/assets/images/home/ourteam/u110.png",
                empNmae: "Nihal Rocca",
                empPosition: "Head of Product",
                empTargetNo: "",
                empTargetTitle: "",
                spacialTarget: "HR TECH",
                midTarget: "GEEK",
                empType: "three"
            }
        ];
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
OurTeamComponent.ɵfac = function OurTeamComponent_Factory(t) { return new (t || OurTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
OurTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurTeamComponent, selectors: [["app-our-team"]], decls: 21, vars: 1, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "teamHeader", "align-content-center", "text-center"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "background", "px-5"], [1, "container", "px-5"], [1, "row", "row-cols-1", "row-cols-sm-1", "row-cols-md-2", "row-cols-lg-3", "row-cols-xl-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "schdualCtn", "py-3", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["href", "http://careers.civilsoft.org/ExternalCand/Home/HomePage", 1, "btn-primary", "btn", "px-4"], [1, "col"], [1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], ["class", "target one", 4, "ngIf"], ["class", "target five", 4, "ngIf"], ["class", "target two", 4, "ngIf"], ["class", "target four", 4, "ngIf"], ["class", "target three", 4, "ngIf"], [1, "card-title"], [1, "card-text"], [1, "target", "one"], [1, "target", "five"], [1, "target", "two"], [1, "special"], [1, "mid"], [1, "target", "four"], [1, "target", "three"]], template: function OurTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Our Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The talent behind CivilSoft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurTeamComponent_div_10_Template, 13, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " We are always on the lookout for people who share our values and believe in our dream. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "work with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".teamHeader[_ngcontent-%COMP%] {\n  background-image: url('/assets/images/home/ourteam/u1.png');\n}\n\n.background[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  padding-top: 5%;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 420px;\n  max-height: 420px;\n  min-height: 420px;\n  margin: 0 auto 70px auto;\n  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.1490196078);\n  border-radius: 3px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 280px;\n  max-height: 280px;\n  min-height: 280px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 1.25rem 0 1.25rem;\n  margin-top: 50px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 18px;\n  color: #333333;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-variation-settings: \"wght\" 600;\n  font-style: normal;\n  font-size: 14px;\n  color: #BFAA81;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 113px;\n  height: 113px;\n  background-color: #af2f20;\n  color: #fff;\n  bottom: 100px;\n  right: 25px;\n  text-align: center;\n  padding: 12px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 28px;\n  color: #FFFFFF;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Muli\";\n  font-variation-settings: \"wght\" 400;\n  font-style: normal;\n  font-size: 12px;\n  color: #FFFFFF;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .target[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n  padding: 25px 0;\n}\n\n.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n@media all and (max-width: 425px) {\n  .last-section-quot[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n\n  .workBtn[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .background[_ngcontent-%COMP%]   .container.px-5[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .background[_ngcontent-%COMP%]   .container.px-5[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n  .background[_ngcontent-%COMP%]   .container.px-5[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n@media all and (max-width: 350px) {\n  .background.px-5[_ngcontent-%COMP%] {\n    padding-left: 2.5rem !important;\n  }\n}\n\n@media (max-width: 310px) {\n  .background.px-5[_ngcontent-%COMP%] {\n    padding-left: 1.7rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3VyLXRlYW0vRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxccGFnZXNcXG91ci10ZWFtXFxvdXItdGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3VyLXRlYW0vb3VyLXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FERVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7QUNBaEI7O0FERWdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQXBCOztBREdnQjtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7QUNEcEI7O0FER29CO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0R4Qjs7QURJb0I7RUFDSSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0Z4Qjs7QURLb0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIeEI7O0FES3dCO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNINUI7O0FETXdCO0VBQ0ksbUJBQUE7RUFFQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNMNUI7O0FEUXdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNONUI7O0FEU3dCO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNQNUI7O0FEV29CO0VBQ0ksaUJBQUE7QUNUeEI7O0FEWW9CO0VBQ0ksZUFBQTtBQ1Z4Qjs7QURhb0I7RUFDSSxZQUFBO0FDWHhCOztBRHFCQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQ2xCTjs7RURvQkU7SUFDSSxjQUFBO0VDakJOOztFRG9CRTtJQUVBLHFCQUFBO0VDbEJGO0VEbUJNO0lBQ0ksWUFBQTtFQ2pCVjtFRGtCVTtJQUNJLFVBQUE7RUNoQmQ7QUFDRjs7QURxQkE7RUFDSTtJQUNJLCtCQUFBO0VDbkJOO0FBQ0Y7O0FEcUJBO0VBQ0k7SUFDQSwrQkFBQTtFQ25CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3VyLXRlYW0vb3VyLXRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbUhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZS9vdXJ0ZWFtL3UxLnBuZ1wiKTtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDcwcHggYXV0bztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjdweCByZ2JhKDAsIDAsIDAsIDAuMTQ5MDE5NjA3ODQzMTM3KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMS4yNXJlbSAwIDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ3dnaHQnIDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnd2dodCcgNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNCRkFBODE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGFyZ2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgMzIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2xhYic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ3dnaHQnIDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5taWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudHdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZml2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5sYXN0LXNlY3Rpb24tcXVvdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgLndvcmtCdG57XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2dyb3VuZFxyXG4gICAgLmNvbnRhaW5lci5weC01e1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIC5jb2x7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzUwcHgpe1xyXG4gICAgLmJhY2tncm91bmQucHgtNSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzEwcHgpIHtcclxuICAgIC5iYWNrZ3JvdW5kLnB4LTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjdyZW0gIWltcG9ydGFudDtcclxufX0iLCIudGVhbUhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob21lL291cnRlYW0vdTEucG5nXCIpO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbi5iYWNrZ3JvdW5kIC5jb250YWluZXIgLnJvdyAuY2FyZCB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgbWF4LWhlaWdodDogNDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICBtYXJnaW46IDAgYXV0byA3MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjdweCByZ2JhKDAsIDAsIDAsIDAuMTQ5MDE5NjA3OCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5iYWNrZ3JvdW5kIC5jb250YWluZXIgLnJvdyAuY2FyZCBpbWcge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbn1cbi5iYWNrZ3JvdW5kIC5jb250YWluZXIgLnJvdyAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxLjI1cmVtIDAgMS4yNXJlbTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5iYWNrZ3JvdW5kIC5jb250YWluZXIgLnJvdyAuY2FyZCAuY2FyZC1ib2R5IGg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYlwiO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uYmFja2dyb3VuZCAuY29udGFpbmVyIC5yb3cgLmNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNCRkFBODE7XG59XG4uYmFja2dyb3VuZCAuY29udGFpbmVyIC5yb3cgLmNhcmQgLmNhcmQtYm9keSAudGFyZ2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEzcHg7XG4gIGhlaWdodDogMTEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjJmMjA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDEwMHB4O1xuICByaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmJhY2tncm91bmQgLmNvbnRhaW5lciAucm93IC5jYXJkIC5jYXJkLWJvZHkgLnRhcmdldCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWJcIjtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFwid2dodFwiIDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmJhY2tncm91bmQgLmNvbnRhaW5lciAucm93IC5jYXJkIC5jYXJkLWJvZHkgLnRhcmdldCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiO1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJ3Z2h0XCIgNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uYmFja2dyb3VuZCAuY29udGFpbmVyIC5yb3cgLmNhcmQgLmNhcmQtYm9keSAudGFyZ2V0IC5zcGVjaWFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5iYWNrZ3JvdW5kIC5jb250YWluZXIgLnJvdyAuY2FyZCAuY2FyZC1ib2R5IC50YXJnZXQgLm1pZCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuLmJhY2tncm91bmQgLmNvbnRhaW5lciAucm93IC5jYXJkIC5jYXJkLWJvZHkgLnR3byB7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xufVxuLmJhY2tncm91bmQgLmNvbnRhaW5lciAucm93IC5jYXJkIC5jYXJkLWJvZHkgLnRocmVlIHtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuLmJhY2tncm91bmQgLmNvbnRhaW5lciAucm93IC5jYXJkIC5jYXJkLWJvZHkgLmZpdmUge1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5sYXN0LXNlY3Rpb24tcXVvdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAud29ya0J0biB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYmFja2dyb3VuZCAuY29udGFpbmVyLnB4LTUge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuYmFja2dyb3VuZCAuY29udGFpbmVyLnB4LTUgLnJvdyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5iYWNrZ3JvdW5kIC5jb250YWluZXIucHgtNSAucm93IC5jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5iYWNrZ3JvdW5kLnB4LTUge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMTBweCkge1xuICAuYmFja2dyb3VuZC5weC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuN3JlbSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-team',
                templateUrl: './our-team.component.html',
                styleUrls: ['./our-team.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/ourclients/ourclients.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ourclients/ourclients.component.ts ***!
  \**********************************************************/
/*! exports provided: OurclientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurclientsComponent", function() { return OurclientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");




class OurclientsComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'CivilSoft Customers & Testimonials | CivilSoft HCM';
        this.userCounter = {
            countTo: 200000,
            from: 0,
            duration: 3
        };
        this.companiesCounter = {
            countTo: 300,
            from: 0,
            duration: 3
        };
        this.industriesCounter = {
            countTo: 12,
            from: 0,
            duration: 3
        };
        this.countriesCounter = {
            countTo: 8,
            from: 0,
            duration: 3
        };
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        $('.carousel').carousel({
            interval: 2000
        });
    }
}
OurclientsComponent.ɵfac = function OurclientsComponent_Factory(t) { return new (t || OurclientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
OurclientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurclientsComponent, selectors: [["app-ourclients"]], decls: 178, vars: 12, consts: [["id", "header", 1, "container-fluid"], [1, "row", "clientHeader", "headerCtn", "align-content-center", "text-center"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], ["id", "counters", 1, "counterCtn"], [1, "container-xl"], [1, "row", "row-cols-2", "row-cols-sm-2", "row-cols-md-4"], [1, "col", "text-center"], ["src", "/assets/images/ourClientsAssets/users.png", 1, "counterImg"], [1, "w-100", "counterNo", 3, "CountTo", "from", "duration"], [1, "w-100", "counterText"], ["src", "/assets/images/ourClientsAssets/companies.png", 1, "counterImg"], ["src", "/assets/images/ourClientsAssets/industries.png", 1, "counterImg"], ["src", "/assets/images/ourClientsAssets/countries.png", 1, "counterImg"], ["id", "clients"], [1, "container-xl", "px-10"], [1, "row", "row-cols-2", "row-cols-sm-4", "row-cols-md-4", "row-cols-lg-7", "row-col-pb-20"], ["src", "/assets/images/ourClientsAssets/u442.jpg"], ["src", "/assets/images/ourClientsAssets/u179.jpg"], ["src", "/assets/images/ourClientsAssets/u444.jpg"], ["src", "/assets/images/ourClientsAssets/u445.jpg"], ["src", "/assets/images/ourClientsAssets/u183.jpg"], ["src", "/assets/images/ourClientsAssets/u182.jpg"], ["src", "/assets/images/ourClientsAssets/u448.jpg"], ["src", "/assets/images/ourClientsAssets/u180.jpg"], ["src", "/assets/images/ourClientsAssets/u450.jpg"], ["src", "/assets/images/ourClientsAssets/u451.jpg"], ["src", "/assets/images/ourClientsAssets/u452.jpg"], ["src", "/assets/images/ourClientsAssets/u186.jpg"], ["src", "/assets/images/ourClientsAssets/u184.jpg"], ["src", "/assets/images/ourClientsAssets/u455.jpg"], ["src", "/assets/images/ourClientsAssets/u456.jpg"], ["src", "/assets/images/ourClientsAssets/u457.jpg"], ["src", "/assets/images/ourClientsAssets/u458.jpg"], ["src", "/assets/images/ourClientsAssets/u459.jpg"], ["src", "/assets/images/ourClientsAssets/u460.jpg"], ["src", "/assets/images/ourClientsAssets/u461.jpg"], ["src", "/assets/images/ourClientsAssets/u178.jpg"], ["src", "/assets/images/ourClientsAssets/u185.jpg"], ["src", "/assets/images/ourClientsAssets/u464.jpg"], ["src", "/assets/images/ourClientsAssets/u465.jpg"], ["src", "/assets/images/ourClientsAssets/u466.jpg"], ["src", "/assets/images/ourClientsAssets/u467.jpg"], ["src", "/assets/images/ourClientsAssets/u468.jpg"], ["src", "/assets/images/ourClientsAssets/u469.jpg"], ["id", "ourClientsWords", 1, ""], [1, ""], ["id", "clientCarousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#clientCarousel", "data-slide-to", "0", 1, "active"], ["data-target", "#clientCarousel", "data-slide-to", "1"], ["data-target", "#clientCarousel", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row"], [1, "col-lg-6", "col-md-12", "wordsCtn", "px-5"], [1, "offset-md-1", "col-md-10"], ["src", "/assets/images/ourClientsAssets/u501.png", 1, "carouselLogo"], [1, "my-3"], ["src", "/assets/images/ourClientsAssets/u276.png"], [1, "carouselParag"], [1, "d-flex", "justify-content-end"], ["src", "/assets/images/ourClientsAssets/u277.png"], [1, "d-flex", "align-items-center"], [1, "p-1", "rounded-circle", "border", "border-gold"], ["src", "/assets/images/ourClientsAssets/u500.png", 1, ""], [1, "ml-2"], [1, "d-flex", "clientName"], [1, "clientPosition"], [1, "col-lg-6", "col-md-12", "eltayer-Img", "clientBk-img"], [1, "carousel-item"], ["src", "/assets/images/ourClientsAssets/u518.png", 1, "carouselLogo"], ["src", "/assets/images/ourClientsAssets/u517.png", 1, ""], [1, "col-lg-6", "col-md-12", "clientBk-img", "ppmdc-Img"], ["src", "/assets/images/ourClientsAssets/u485.png", 1, "carouselLogo"], ["src", "/assets/images/ourClientsAssets/u484.png", 1, ""], [1, "col-lg-6", "col-md-12", "clientBk-img", "schen-Img"], ["id", "sechdualNdSupp"], [1, "schdualCtn"], [1, "col-md-6"], [1, "col-md-6", "text-center"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn", "px-5"], [1, "supportCtn"], [1, "container-xl", "justify-content-center", "d-flex"], ["href", "https://desk.zoho.com/portal/civilsoftstrategichcm/", "target", "_blank", 1, "suppAmchor"]], template: function OurclientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Learned from the world's best organizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Industries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ol", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " \" A reliable, consistent, and customer centric partner that helped us go through the journey of HR evolution for the last 15 years. CivilSoft brings the regional flavor in the way we approach HRIS and Employee Services through a flexible platform that can be adjusted and modified to suit your specific needs.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Ehsan Shammasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Head of HR shared services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \"We have been partners with CivilSoft for over 10 years simply because we both speak the same language. They understand the challenging demands of our business and their solutions are a perfect fit for our purposes because they are quick and simple to use, especially given the range and complexity of our time & attendance planning process. Out of all HCM vendors that we came across, CivilSoft has proven to be the most committed.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Mohamed Al Barnawi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "IT Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " \"For me, what makes CivilSoft stand out is its people. I haven't personally experienced that level of after sales service with any other vendor. The implementation process was flawless and the support I have been receiving ever since is beyond satisfactory. Partnering with CivilSoft made me enjoy a reachable, approachable and most-importantly quick assistance whenever needed.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Nashwa Nageeb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Human Resources Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "section", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Hundreds of success stories. It's your turn to write yours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Already a client ? Visit our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Support Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.userCounter.countTo)("from", ctx.userCounter.from)("duration", ctx.userCounter.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.companiesCounter.countTo)("from", ctx.companiesCounter.from)("duration", ctx.companiesCounter.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.industriesCounter.countTo)("from", ctx.industriesCounter.from)("duration", ctx.industriesCounter.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", ctx.countriesCounter.countTo)("from", ctx.countriesCounter.from)("duration", ctx.countriesCounter.duration);
    } }, directives: [angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToDirective"]], styles: [".clientHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourClientsAssets/ourClientsHeader.png\");\n}\n\n#ourClientsWords[_ngcontent-%COMP%] {\n  background-color: #f8f6f2;\n}\n\n.counterCtn[_ngcontent-%COMP%] {\n  background-color: #f8f6f2;\n  padding: 30px 0;\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n}\n\n.counterText[_ngcontent-%COMP%] {\n  color: #BFAA81;\n}\n\n.counterNo[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.counterImg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n#clients[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n\n#clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 122px;\n  height: 81px;\n}\n\n.schdualCtn[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  color: #333;\n  padding: 30px 0;\n}\n\n.supportCtn[_ngcontent-%COMP%] {\n  background-color: #e3dbcc;\n  padding: 15px 0;\n  font-family: \"RobotoSlab\";\n  color: #333;\n}\n\na[_ngcontent-%COMP%] {\n  color: #AF2F20;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\n#clientCarousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n#clientCarousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  right: 12%;\n}\n\n.carouselLogo[_ngcontent-%COMP%] {\n  width: 123px;\n  height: 38px;\n}\n\n.carouselParag[_ngcontent-%COMP%] {\n  color: rgba(28, 28, 35, 0.6);\n  font-style: oblique;\n  font-family: Muli;\n}\n\n.border.border-gold[_ngcontent-%COMP%] {\n  border-color: #bfaa81 !important;\n}\n\n.clientName[_ngcontent-%COMP%] {\n  font-family: \"RobotoSlab\";\n  color: #BFAA81;\n}\n\n.clientPosition[_ngcontent-%COMP%] {\n  color: rgba(28, 28, 35, 0.6);\n}\n\n.wordsCtn[_ngcontent-%COMP%] {\n  \n  padding-top: 2.8rem !important;\n  margin-bottom: 2.8rem !important;\n  \n}\n\n.clientBk-img[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.eltayer-Img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourClientsAssets/u472.png\");\n}\n\n.ppmdc-Img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourClientsAssets/u473.png\");\n}\n\n.schen-Img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourClientsAssets/u471.png\");\n}\n\n@media screen and (max-width: 991px) {\n  .clientBk-img[_ngcontent-%COMP%] {\n    min-height: 550px;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: 55%;\n    right: 0 !important;\n  }\n}\n\n@media screen and (max-width: 730px) {\n  .clientBk-img[_ngcontent-%COMP%] {\n    min-height: 230px;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: 33%;\n  }\n\n  .schdualCtn[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 485px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: 30%;\n  }\n}\n\n@media screen and (max-width: 330px) {\n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: 26%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3VyY2xpZW50cy9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcb3VyY2xpZW50c1xcb3VyY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3VyY2xpZW50cy9vdXJjbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLGNBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7QUNXSjs7QURSQTtFQUNJLHNCQUFBO0FDV0o7O0FEVEE7RUFDSSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxnQ0FBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDZ0JKOztBRGRBO0VBQ0ksNEJBQUE7QUNpQko7O0FEZkE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGlFQUFBO0FDb0JKOztBRGxCQTtFQUNJLGlFQUFBO0FDcUJKOztBRG5CQTtFQUNJLGlFQUFBO0FDc0JKOztBRG5CQTtFQUNJO0lBQ0ksaUJBQUE7RUNzQk47O0VEcEJFO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0VDdUJOO0FBQ0Y7O0FEckJBO0VBQ0k7SUFDSSxpQkFBQTtFQ3VCTjs7RURyQkU7SUFDSSxXQUFBO0VDd0JOOztFRHRCRTtJQUNJLHFCQUFBO0VDeUJOO0FBQ0Y7O0FEdkJBO0VBQ0k7SUFDSSxXQUFBO0VDeUJOO0FBQ0Y7O0FEdEJBO0VBQ0k7SUFDSSxXQUFBO0VDd0JOO0FBQ0Y7O0FEdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJjbGllbnRzL291cmNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50SGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyQ2xpZW50c0Fzc2V0cy9vdXJDbGllbnRzSGVhZGVyLnBuZycpOyBcclxufVxyXG4jb3VyQ2xpZW50c1dvcmRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNDYsIDI0MiwgMSlcclxufVxyXG4uY291bnRlckN0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ2LCAyNDIsIDEpO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYlwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY291bnRlclRleHQge1xyXG4gICAgY29sb3I6ICNCRkFBODE7XHJcbiAgIFxyXG59XHJcbi5jb3VudGVyTm8ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jb3VudGVySW1nIHtcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG4jY2xpZW50cyB7XHJcbiAgICBwYWRkaW5nOjYwcHggMDtcclxufVxyXG4jY2xpZW50cyBpbWcge1xyXG4gICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgaGVpZ2h0OiA4MXB4O1xyXG59XHJcbi5zY2hkdWFsQ3RuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOnJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgcGFkZGluZzozMHB4IDAgO1xyXG59XHJcbi5zdXBwb3J0Q3RuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMTksIDIwNCwgMSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogI0FGMkYyMDtcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiMzMzM7XHJcbn1cclxuLy9jdXN0b21lIHNsaWRlciBzdHlsZSB0byBDbGllbnRzIHBhZ2VcclxuI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgIHJpZ2h0OiAxMiU7XHJcbn1cclxuLmNhcm91c2VsTG9nbyB7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHhcclxufVxyXG4uY2Fyb3VzZWxQYXJhZyB7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDM1LCAwLjYpO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG59XHJcbi5ib3JkZXIuYm9yZGVyLWdvbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmZhYTgxICFpbXBvcnRhbnRcclxufVxyXG4uY2xpZW50TmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1NsYWInO1xyXG4gICAgY29sb3I6ICNCRkFBODE7XHJcbn1cclxuLmNsaWVudFBvc2l0aW9uIHtcclxuICAgIGNvbG9yOiByZ2JhKDI4LCAyOCwgMzUsIDAuNik7XHJcbn1cclxuLndvcmRzQ3RuIHtcclxuICAgIC8qbWluLWhlaWdodDogNTAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOjIuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyLjhyZW0gIWltcG9ydGFudDtcclxuICAgIC8qbWFyZ2luLWJvdHRvbToxLjVyZW0gIWltcG9ydGFudDsqL1xyXG59XHJcbi5jbGllbnRCay1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbn1cclxuLmVsdGF5ZXItSW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyQ2xpZW50c0Fzc2V0cy91NDcyLnBuZycpO1xyXG59XHJcbi5wcG1kYy1JbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJDbGllbnRzQXNzZXRzL3U0NzMucG5nJyk7XHJcbn1cclxuLnNjaGVuLUltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291ckNsaWVudHNBc3NldHMvdTQ3MS5wbmcnKTtcclxufVxyXG4vL3N0eWxlIGZvciBtYXggd2lkdGggNzY3XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLmNsaWVudEJrLWltZyB7XHJcbiAgICAgICAgbWluLWhlaWdodDo1NTBweDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBib3R0b206NTUlO1xyXG4gICAgICAgIHJpZ2h0OjAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjczMHB4KSB7XHJcbiAgICAuY2xpZW50QmstaW1nIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBib3R0b206IDMzJTtcclxuICAgIH1cclxuICAgIC5zY2hkdWFsQ3RuIGg1IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODVweCkge1xyXG4gICAgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogMzAlO1xyXG4gICAgfVxyXG4gXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMzBweCl7XHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgYm90dG9tOiAyNiU7XHJcbiAgICB9XHJcbn1cclxuLypAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogNTUlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTBweCkge1xyXG4gICAgI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBib3R0b206IDUwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XHJcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogNDUlO1xyXG4gICAgfVxyXG4gICAgLndvcmRzQ3RuIHtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDMwcHgpIHtcclxuICAgICNjbGllbnRDYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgYm90dG9tOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOTBweCkge1xyXG4gICAgI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBib3R0b206IDM1JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM1MHB4KSB7XHJcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gICAgICAgIGJvdHRvbTogMzAlO1xyXG4gICAgfVxyXG59Ki8iLCIuY2xpZW50SGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyQ2xpZW50c0Fzc2V0cy9vdXJDbGllbnRzSGVhZGVyLnBuZ1wiKTtcbn1cblxuI291ckNsaWVudHNXb3JkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY2ZjI7XG59XG5cbi5jb3VudGVyQ3RuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjZmMjtcbiAgcGFkZGluZzogMzBweCAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb3VudGVyVGV4dCB7XG4gIGNvbG9yOiAjQkZBQTgxO1xufVxuXG4uY291bnRlck5vIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb3VudGVySW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuI2NsaWVudHMge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbiNjbGllbnRzIGltZyB7XG4gIHdpZHRoOiAxMjJweDtcbiAgaGVpZ2h0OiA4MXB4O1xufVxuXG4uc2NoZHVhbEN0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5zdXBwb3J0Q3RuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGJjYztcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiXCI7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5hIHtcbiAgY29sb3I6ICNBRjJGMjA7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbn1cblxuI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcmlnaHQ6IDEyJTtcbn1cblxuLmNhcm91c2VsTG9nbyB7XG4gIHdpZHRoOiAxMjNweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4uY2Fyb3VzZWxQYXJhZyB7XG4gIGNvbG9yOiByZ2JhKDI4LCAyOCwgMzUsIDAuNik7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGZvbnQtZmFtaWx5OiBNdWxpO1xufVxuXG4uYm9yZGVyLmJvcmRlci1nb2xkIHtcbiAgYm9yZGVyLWNvbG9yOiAjYmZhYTgxICFpbXBvcnRhbnQ7XG59XG5cbi5jbGllbnROYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYlwiO1xuICBjb2xvcjogI0JGQUE4MTtcbn1cblxuLmNsaWVudFBvc2l0aW9uIHtcbiAgY29sb3I6IHJnYmEoMjgsIDI4LCAzNSwgMC42KTtcbn1cblxuLndvcmRzQ3RuIHtcbiAgLyptaW4taGVpZ2h0OiA1MDBweDsqL1xuICBwYWRkaW5nLXRvcDogMi44cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuOHJlbSAhaW1wb3J0YW50O1xuICAvKm1hcmdpbi1ib3R0b206MS41cmVtICFpbXBvcnRhbnQ7Ki9cbn1cblxuLmNsaWVudEJrLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmVsdGF5ZXItSW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyQ2xpZW50c0Fzc2V0cy91NDcyLnBuZ1wiKTtcbn1cblxuLnBwbWRjLUltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL291ckNsaWVudHNBc3NldHMvdTQ3My5wbmdcIik7XG59XG5cbi5zY2hlbi1JbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJDbGllbnRzQXNzZXRzL3U0NzEucG5nXCIpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2xpZW50QmstaW1nIHtcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDU1JTtcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xuICAuY2xpZW50QmstaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDMzJTtcbiAgfVxuXG4gIC5zY2hkdWFsQ3RuIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NXB4KSB7XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDMwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzMwcHgpIHtcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIGJvdHRvbTogMjYlO1xuICB9XG59XG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgICBib3R0b206IDU1JTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTBweCkge1xuICAgICNjbGllbnRDYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgICBib3R0b206IDQ1JTtcbiAgICB9XG4gICAgLndvcmRzQ3RuIHtcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQzMHB4KSB7XG4gICAgI2NsaWVudENhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICAgICAgYm90dG9tOiA0MCU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOTBweCkge1xuICAgICNjbGllbnRDYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgIGJvdHRvbTogMzUlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzUwcHgpIHtcbiAgICAjY2xpZW50Q2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgICAgICBib3R0b206IDMwJTtcbiAgICB9XG59Ki8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurclientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ourclients',
                templateUrl: './ourclients.component.html',
                styleUrls: ['./ourclients.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/budget/budget.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/oursolutions/budget/budget.component.ts ***!
  \***************************************************************/
/*! exports provided: BudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetComponent", function() { return BudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class BudgetComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Workforce Planning & Budgeting Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        $('.carousel').carousel({
            interval: 2000
        });
    }
}
BudgetComponent.ɵfac = function BudgetComponent_Factory(t) { return new (t || BudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetComponent, selectors: [["app-budget"]], decls: 77, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "align-content-center", "text-center", "budgetHeader"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "Cars", "text-center", 2, "height", "350px"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/ourSolutions/budget/budget1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/ourSolutions/budget/budget11.jpg", "alt", "Second slide", 1, "d-block", "w-100"], [1, "dark-with-bk", "py-5", "ScenarioBk"], [1, "overlay"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], [1, "imgCtn", "text-center"], ["src", "assets/images/ourSolutions/budget/budget2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], [1, "light-them", "py-5"], ["src", "assets/images/ourSolutions/budget/budget3.jpg", 1, "w-100"], [1, "light-with-bk", "py-5", "ReviewBk"], ["src", "assets/images/ourSolutions/budget/budget4.jpg", 1, "w-100"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function BudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Workforce Planning & Budgeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Create a workforce plan and budget that is driven by strategy, integrated with and supporting the execution of your goals. Get an accurate view of your workforce costs and preserve your funds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Workforce Forecasting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " CivilSoft helps you get an estimate of each leader's people needs and prepare headcount and compensation plans that support successful strategy execution, offering increased visibility into how the funds will be used and the objectives to which they relate. The application allows leaders to cascade the budget to their direct reports to better account for all of their workforce costs, and plan expenses ranging from bonuses, visa renewal fees, and residency permits, to on-boarding, commissions, pensions, taxation, in a very precise way so that everything is planned ahead. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Scenario Planning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Conduct if-then analysis, and predict the financial impact of various workforce scenarios, in order to pursue the road with the most favorable outcomes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Cost Control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Exercise greater control over your expenses, the system helps you stay within the boundaries of your budget and lets you know when to pull the handbrakes on your expenses. It imposes quotas on certain transactions to protect your budget and make sure it is allocated in the right way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Ongoing Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " The system allows you to revise your budget throughout the financial year to provide for necessary expenses or reallocate it according to your objectives. It gives you a snapshot of your workforce structure and costs at any given time and allows you to manage your accounts more effectively through the interface with your accounting system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " A sound plan will set you up for success and keep you focused on your goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " See our product in action!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".budgetHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/budget/u2.png\");\n}\n\n.ScenarioBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/budget/u94.png\");\n}\n\n.ReviewBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/budget/u7.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2J1ZGdldC9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcb3Vyc29sdXRpb25zXFxidWRnZXRcXGJ1ZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2J1ZGdldC9idWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrRUFBQTtBQ0NKOztBREVBO0VBQ0ksbUVBQUE7QUNDSjs7QURFQTtFQUNJLGtFQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBOztFQUFBOztBQUdBOzs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJzb2x1dGlvbnMvYnVkZ2V0L2J1ZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWRnZXRIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvYnVkZ2V0L3UyLnBuZycpO1xyXG59XHJcblxyXG4uU2NlbmFyaW9CayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9idWRnZXQvdTk0LnBuZycpO1xyXG59XHJcblxyXG4uUmV2aWV3Qmsge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvYnVkZ2V0L3U3LnBuZycpO1xyXG59XHJcbi5yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKi5pbWdDdG4uQ2FycyB7XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG59Ki9cclxuLypAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgLmltZ0N0bi5DYXJzIHtcclxuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgfVxyXG59Ki8iLCIuYnVkZ2V0SGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL2J1ZGdldC91Mi5wbmdcIik7XG59XG5cbi5TY2VuYXJpb0JrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL2J1ZGdldC91OTQucG5nXCIpO1xufVxuXG4uUmV2aWV3Qmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvYnVkZ2V0L3U3LnBuZ1wiKTtcbn1cblxuLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qLmltZ0N0bi5DYXJzIHtcbiAgICBoZWlnaHQ6IDMzMHB4O1xufSovXG4vKkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmltZ0N0bi5DYXJzIHtcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcbiAgICB9XG59Ki8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-budget',
                templateUrl: './budget.component.html',
                styleUrls: ['./budget.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/core-hr/core-hr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/oursolutions/core-hr/core-hr.component.ts ***!
  \*****************************************************************/
/*! exports provided: CoreHrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreHrComponent", function() { return CoreHrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class CoreHrComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Core HR & Payroll Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
CoreHrComponent.ɵfac = function CoreHrComponent_Factory(t) { return new (t || CoreHrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
CoreHrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreHrComponent, selectors: [["app-core-hr"]], decls: 80, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "CoreHrHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["src", "assets/images/ourSolutions/CoreHr/Core1.jpg", 1, "w-100"], ["id", "fingertips", 1, "image-with-conntent"], [1, "dark-with-bk", "py-5", "reachBk"], [1, "overlay"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], ["src", "assets/images/ourSolutions/CoreHr/Core2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], [1, "light-them", "py-5"], [1, ""], [1, "text-right"], ["src", "assets/images/ourSolutions/CoreHr/Core3.png", 1, "img_Style", "MobImg"], ["id", "complexReward", 1, "image-with-conntent"], [1, "light-with-bk", "py-5", "rightChBk"], ["src", "assets/images/ourSolutions/CoreHr/Core4.jpg", 1, "w-100"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function CoreHrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Core HR & Payroll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Alleviate complexity, elevate compliance, reduce administrative burden, and ensure your people are rewarded fairly, equitably, and consistently in accordance with their value to your organization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dynamic Organization Structures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Plan, model and execute organization structures that support your strategy. Breakdown your organization into entities, units, departments and cost centers in a way that reflects the real-life structure of your business. Display a position-based organization chart that enables you to visualize roles and reporting structures and get employee data that matters most, right at your fingertips. Keeping up with changes is as simple as a drag and drop tool to manage departments, reporting lines and decision hierarchies. Add, modify, and delegate positions to drive workflows and ensure a smooth flow of transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Employee Information at your fingertips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Consolidate your data into one searchable, unified database for the entire workforce. Employee profiles give you comprehensive employee information including personal details, family details, contact information, compensation and benefit information, as well as performance, in-service education and training, and career progression history. You can also keep track of any other employee information such as business trips, assignments, conferences attended, warnings, or complaints. Attach scans of employee documents and track the validity and expiration of licenses and certificates, just in time for renewal. Easily search & filter your employee base by any standard or user-defined fields in the employee profile and find people with certain skills or qualifications that would allow them to perform certain tasks or assume new roles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Leave Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " CivilSoft allows you to set up location-specific holiday calendars, set up user-defined leave types, and define leave entitlements for different employee populations. For each leave type, users can also define the effects on each salary element, benefit, and allowance, as well as on employee subscriptions or taxation and pension deductions, so that they can be automatically triggered when a leave transaction is processed. More importantly, CivilSoft helps you look after your employees and support work-life balance while maintaining business performance standards. The system allows employees to plan their annual leave in such a way that prevents the violation of minimum headcount rules, to mitigate the risk of staff shortages and drops in productivity. Through the system, managers and HR administrators can track how much time-off is earned, used, and carried over by each employee, and track how much time-off is requested and rejected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Employee Self Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " CivilSoft helps leaders empower employees to update their own data and access HR requests, reducing the time they spend tracking their requests and submitting claims and allowing them to focus on more productive tasks. Introducing employee self-service capabilities allows you to enhance the productivity of the HR department and reduce the cost of delivering HR services to employees. As employees become more self-reliant, HR staff can now spend time on more strategic aspects of business. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Manage complex reward structures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " CivilSoft enables you to configure different pay calculations, pay frequencies, and eligibility rules for different employee populations, paving the way for more personalized employee compensation. In addition to base pay, you can define, manage and process an unlimited number of allowances, benefits, and bonus schemes. With its advanced housing, travel, and insurance modules, CivilSoft takes out the complexity out of managing attractive benefit packages, to support your talent acquisition and retention efforts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Payroll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " With tight integration between Core HR, payroll, and workforce management, CivilSoft enables real-time Autopilot calculation of gross and net salary based on approved timesheets, allowances, and mandatory and non-mandatory withholdings and deductions including income tax, social insurance, insurance premiums, union fees, charitable contributions, loan repayment, or warnings. The system allows for flexible definition of taxation and pension schemes in line with company policy and statutory regulations and the ability to modify formulas and computation without development intervention ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " On average, customers who used CivilSoft Core HR & Payroll have slashed payroll processing time by 80%. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " See our product in action!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".CoreHrHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/CoreHr/u1.png\");\n}\n\n#fingertips[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/CoreHr/u44.png\");\n}\n\n#complexReward[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/CoreHr/u5.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2NvcmUtaHIvRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxccGFnZXNcXG91cnNvbHV0aW9uc1xcY29yZS1oclxcY29yZS1oci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2NvcmUtaHIvY29yZS1oci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtFQUFBO0FDQUo7O0FER0E7RUFDSSxtRUFBQTtBQ0FKOztBREdBO0VBQ0ksa0VBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJzb2x1dGlvbnMvY29yZS1oci9jb3JlLWhyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5Db3JlSHJIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvQ29yZUhyL3UxLnBuZycpO1xyXG59XHJcblxyXG4jZmluZ2VydGlwcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Db3JlSHIvdTQ0LnBuZycpO1xyXG59XHJcblxyXG4jY29tcGxleFJld2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Db3JlSHIvdTUucG5nJyk7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiLkNvcmVIckhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Db3JlSHIvdTEucG5nXCIpO1xufVxuXG4jZmluZ2VydGlwcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Db3JlSHIvdTQ0LnBuZ1wiKTtcbn1cblxuI2NvbXBsZXhSZXdhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvQ29yZUhyL3U1LnBuZ1wiKTtcbn1cblxuLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreHrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-core-hr',
                templateUrl: './core-hr.component.html',
                styleUrls: ['./core-hr.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/gov-r/gov-r.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/oursolutions/gov-r/gov-r.component.ts ***!
  \*************************************************************/
/*! exports provided: GovRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovRComponent", function() { return GovRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class GovRComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Government Relations Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        $('.carousel').carousel({
            interval: 2000
        });
    }
}
GovRComponent.ɵfac = function GovRComponent_Factory(t) { return new (t || GovRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
GovRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GovRComponent, selectors: [["app-gov-r"]], decls: 76, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "GovRHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/ourSolutions/GovR/Govr1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/ourSolutions/GovR/Govr11.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["id", "WinTalent", 1, "image-with-conntent"], [1, "dark-with-bk", "py-5", "reachBk"], [1, "overlay"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], ["src", "assets/images/ourSolutions/GovR/Govr2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], [1, "text-right"], ["src", "assets/images/ourSolutions/GovR/Govr3.jpg", 1, "img_Style", "MobImg", "w-100"], ["id", "TopFinance", 1, "image-with-conntent"], [1, "light-with-bk", "py-5", "rightChBk"], [1, "imgCtn", "text-center", "order-lg-1", "order-md-2", "order-2"], ["src", "assets/images/ourSolutions/GovR/Govr4.jpg", 1, "w-100"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function GovRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Government Relations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Manual government relations processes are plagued by inefficiency, vulnerable to fraud, and may impose serious risks on the organization's productivity and bottomline. CivilSoft has introduced the first government relations system that completely streamlines processes, providing for substantial cost savings and enhanced employer branding, and redirecting precious time and resources to more strategic aspects of operation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Smarter, Faster, Better ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " CivilSoft eliminates manual form filling and interfaces with government portals to directly fill employee information, thereby eliminating the risk of human error. With document verification capabilities, you can guarantee that no process shall be halted due to missing documents or faulty information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Win the war for talent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Slow and cumbersome processing can cost you spectacular talent, cause project delays, and disrupt organizational performance. With CivilSoft, Candidates and employees can request visas and permits for themselves or family members through their employee portal. All they need to do is submit their documents, and sit back and relax while they track the status of the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Compliance Guaranteed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " The system can generate auto-alerts in case of the expiration of employee documents or pending, overdue, or about to expire milestones, so that action could be taken in a timely manner. You will no longer face the risk of paying hefty fines due to the mismanagement of renewing visas and permits on time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Stay on top of your finances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " The system provides executives with increased visibility into government relations expenditure and helps avoid financial discrepancies when billing business units. CivilSoft supports organizations that have shared service centers handling government relations processes, with auto-invoicing and integration with accounting systems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Using CivilSoft Government Relations System, customers can reduce the cost of government services by 50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " See our product in action!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".GovRHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/GovR/u226.png\");\n}\n\n#WinTalent[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/GovR/u247.png\");\n}\n\n#TopFinance[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/GovR/u230.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2dvdi1yL0U6XFxNYWkubVxcQ2l2aWxzb2Z0V2Vic2l0ZTIwMjBcXFdlYnNpdGUuV2ViVUkvc3JjXFxhcHBcXHBhZ2VzXFxvdXJzb2x1dGlvbnNcXGdvdi1yXFxnb3Ytci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2dvdi1yL2dvdi1yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0VBQUE7QUNBSjs7QURFQTtFQUNJLGtFQUFBO0FDQ0o7O0FERUE7RUFDSSxrRUFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL291cnNvbHV0aW9ucy9nb3Ytci9nb3Ytci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uR292UkhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Hb3ZSL3UyMjYucG5nJyk7XHJcbn1cclxuI1dpblRhbGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9Hb3ZSL3UyNDcucG5nJyk7XHJcbn1cclxuXHJcbiNUb3BGaW5hbmNlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL0dvdlIvdTIzMC5wbmcnKTtcclxufVxyXG4ucm93e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5Hb3ZSSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL0dvdlIvdTIyNi5wbmdcIik7XG59XG5cbiNXaW5UYWxlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvR292Ui91MjQ3LnBuZ1wiKTtcbn1cblxuI1RvcEZpbmFuY2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvR292Ui91MjMwLnBuZ1wiKTtcbn1cblxuLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GovRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gov-r',
                templateUrl: './gov-r.component.html',
                styleUrls: ['./gov-r.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/housing/housing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/oursolutions/housing/housing.component.ts ***!
  \*****************************************************************/
/*! exports provided: HousingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousingComponent", function() { return HousingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class HousingComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Housing Management Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
HousingComponent.ɵfac = function HousingComponent_Factory(t) { return new (t || HousingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HousingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HousingComponent, selectors: [["app-housing"]], decls: 59, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "HousingHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["src", "assets/images/ourSolutions/housing/housing1.jpg", 1, "w-100"], ["id", "WinTalent", 1, "image-with-conntent"], [1, "dark-with-bk", "py-5", "HomeAwayBk"], [1, "overlay"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], ["src", "assets/images/ourSolutions/housing/housing2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], [1, "light-them", "py-5"], [1, "text-right"], ["src", "assets/images/ourSolutions/housing/housing3.jpg", 1, "img_Style", "MobImg", "w-100"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function HousingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Housing Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CivilSoft's Housing Management System introduces a streamlined approach to housing that allows you to provide your people with convenient housing units, comply with tenancy conditions, and control your expenditure, helping you offer an attractive benefits package that will support your talent acquisition and retention efforts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Manage Accommodation Units ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Manage your housing units in different locations, sizes and configurations. CivilSoft allows you to define the types and hierarchy of housing units in accordance with your policy, manage property-related information such as building name and location and define the facilities and amenities available within each. Define employee eligibility and entitlements in accordance with your policy to account for differences in salary grades, positions, genders, nationalities, or family sizes. The system allows you to create employee groups based on any number of criteria and assign them different entitlements and integrates with your compensation and benefits system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Home away from home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Help your people smoothly settle into their new lives and immediately focus on the job. Allocate new joiners to appropriate housing units based on their entitlements and the occupancy criteria. The system allows employees to post relocation or upgrade requests, family room requests, and reserves housing units on a first-come-first-serve basis. The system also allows you to manage the accommodation requirements of visitors, consultants, or contingent workers. CivilSoft's Housing Management System helps you stay in charge of the regular upkeep of the housing units. Guarantee they are clean and well-maintained to provide your employees with physical ease and relaxation that will allow them to get back to work, fully recharged. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Stay on Track ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Track and manage the expenses incurred on housing units and get a detailed analysis of all the costing elements related to housing such as water or electricity charges. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " CivilSoft Housing Management can help you save up to 20% on your staff housing program. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " See our product in action! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".HousingHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/housing/u2101.png\");\n}\n\n.HomeAwayBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/housing/u2103.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.CallToAction[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2hvdXNpbmcvRTpcXE1haS5tXFxDaXZpbHNvZnRXZWJzaXRlMjAyMFxcV2Vic2l0ZS5XZWJVSS9zcmNcXGFwcFxccGFnZXNcXG91cnNvbHV0aW9uc1xcaG91c2luZ1xcaG91c2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL2hvdXNpbmcvaG91c2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNFQUFBO0FDQ0o7O0FERUE7RUFDSSxzRUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJzb2x1dGlvbnMvaG91c2luZy9ob3VzaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkhvdXNpbmdIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvaG91c2luZy91MjEwMS5wbmcnKTtcclxufVxyXG5cclxuLkhvbWVBd2F5Qmsge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvaG91c2luZy91MjEwMy5wbmcnKTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uQ2FsbFRvQWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcclxufSIsIi5Ib3VzaW5nSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL2hvdXNpbmcvdTIxMDEucG5nXCIpO1xufVxuXG4uSG9tZUF3YXlCayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy9ob3VzaW5nL3UyMTAzLnBuZ1wiKTtcbn1cblxuLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5DYWxsVG9BY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HousingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-housing',
                templateUrl: './housing.component.html',
                styleUrls: ['./housing.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/oursolutions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/oursolutions/oursolutions.component.ts ***!
  \**************************************************************/
/*! exports provided: OursolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OursolutionsComponent", function() { return OursolutionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OursolutionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OursolutionsComponent.ɵfac = function OursolutionsComponent_Factory(t) { return new (t || OursolutionsComponent)(); };
OursolutionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OursolutionsComponent, selectors: [["app-oursolutions"]], decls: 0, vars: 0, template: function OursolutionsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL291cnNvbHV0aW9ucy9vdXJzb2x1dGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OursolutionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oursolutions',
                templateUrl: './oursolutions.component.html',
                styleUrls: ['./oursolutions.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/pms/pms.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/oursolutions/pms/pms.component.ts ***!
  \*********************************************************/
/*! exports provided: PMSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMSComponent", function() { return PMSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class PMSComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Talent & Performance Management Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
PMSComponent.ɵfac = function PMSComponent_Factory(t) { return new (t || PMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PMSComponent, selectors: [["app-pms"]], decls: 73, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "align-content-center", "text-center", "PMSHeader"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "light-them", "py-5"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["src", "/assets/images/ourSolutions/pms/pms1.jpg", 1, "w-100"], [1, "dark-with-bk", "py-5", "discussionsBK"], [1, "overlay"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], ["src", "/assets/images/ourSolutions/pms/pms2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], ["src", "/assets/images/ourSolutions/pms/pms3.jpg", 1, "w-100"], [1, "light-with-bk", "py-5", "GaugeBK"], ["src", "/assets/images/ourSolutions/pms/pms4.jpg", 1, "w-100"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function PMSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Performance Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CivilSoft Performance Management helps improve overall organizational performance by keeping employees focused on what matters most, and allowing leaders to monitor performance information and get data-driven recommendations that help address critical vulnerabilities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Develop a shared language to drive results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Help your employees focus on what's important and what needs to be done and align their time and energy with activities that yield the greatest results. Setting a unified competency framework and clear expectations for employees in terms of knowledge, skills, behaviors, and objectives, is key to successful strategy execution. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Forward-looking performance discussions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Your performance conversations are now more frequent, more contextual, more portable, and more effective. Use CivilSoft's communication center to guide, coach, and support your team on their learning and execution journey. Check-in with employees to see how they're doing on their tasks and exchange supporting documents and multimedia on the go.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Collect more objective performance data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Define performance metrics, set up rating indicators, and CivilSoft will do the rest. CivilSoft connects to external data sources to automatically fetch data and rate employee performance, slashing time spent on ratings and filling forms, and leaving no room for subjectivity, favoritism, or bias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Gauge opinions, feelings, and attitudes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Capture employee ideas, suggestions, or development needs, and gather feedback on training, events, or work issues. CivilSoft helps you design assessments, polls, and surveys and build customizable charts and talent maps. Our assessments & surveys tool gives you great insight into the underlying talent issues that may be affecting performance or standing in the way of successful strategy execution and helps you craft better reward packages, succession plans, or training agendas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Customers who use CivilSoft Performance Management experienced higher engagement and objective completion rates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " See our product in action! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".PMSHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/pms/u1.png\");\n}\n\n.discussionsBK[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/pms/u34.png\");\n}\n\n.GaugeBK[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/pms/u5.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3Btcy9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcb3Vyc29sdXRpb25zXFxwbXNcXHBtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3Btcy9wbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBQTtBQ0NKOztBREVBO0VBQ0ksZ0VBQUE7QUNDSjs7QURFQTtFQUNJLCtEQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3Btcy9wbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUE1TSGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3Btcy91MS5wbmcnKTtcclxufVxyXG5cclxuLmRpc2N1c3Npb25zQksge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvcG1zL3UzNC5wbmcnKTtcclxufVxyXG5cclxuLkdhdWdlQksge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvcG1zL3U1LnBuZycpO1xyXG59XHJcbi5yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5QTVNIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvcG1zL3UxLnBuZ1wiKTtcbn1cblxuLmRpc2N1c3Npb25zQksge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvcG1zL3UzNC5wbmdcIik7XG59XG5cbi5HYXVnZUJLIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3Btcy91NS5wbmdcIik7XG59XG5cbi5yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pms',
                templateUrl: './pms.component.html',
                styleUrls: ['./pms.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/talent-acquisition/talent-acquisition.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/oursolutions/talent-acquisition/talent-acquisition.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TalentAcquisitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentAcquisitionComponent", function() { return TalentAcquisitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class TalentAcquisitionComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Recruitment & Talent Acquisition Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
TalentAcquisitionComponent.ɵfac = function TalentAcquisitionComponent_Factory(t) { return new (t || TalentAcquisitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
TalentAcquisitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TalentAcquisitionComponent, selectors: [["app-talent-acquisition"]], decls: 94, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "align-content-center", "text-center", "talentHeader"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "light-them", "py-5"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "title", "col-md-12", "mb-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["src", "/assets/images/ourSolutions/talentAcq/Talant1.jpg", 1, "w-100"], [1, "dark-with-bk", "py-5", "reachBk"], [1, "overlay"], [1, "title", "col-md-7", "offset-md-5", "mb-3", "order-lg-1", "order-md-1", "order-1"], [1, "col-lg-5", "col-md-12", "order-lg-2", "order-md-3", "order-3"], ["src", "/assets/images/ourSolutions/talentAcq/Talant2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-3", "order-md-2", "order-2"], [1, "col-lg-7", "col-md-12", "mt-3"], ["src", "/assets/images/ourSolutions/talentAcq/Talant3.jpg", 1, "w-100"], [1, "light-with-bk", "py-5", "rightChBk"], [1, "title", "col-md-7", "offset-md-5", "order-lg-1", "order-md-1", "order-1"], ["src", "/assets/images/ourSolutions/talentAcq/Talant4.jpg", 1, "w-100"], [1, ""], [1, "container-xl", "schdualCtn", "py-4", "CallToAction"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "d-flex", "justify-content-center", "align-items-center"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function TalentAcquisitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Talent Acquisition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CivilSoft Talent Acquisition presents a strategic approach to talent acquisition and helps you make hiring decisions in alignment with your business needs, budget, and workforce plan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Plan Your Hiring Needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Planning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Getting the job requisition right is the first step towards a successful hire. CivilSoft Talent Acquisition enables you to manage requisitions in accordance with your recruitment plan, allowing you to safeguard your budget and plan your expenditure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Requisitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " We recognize positions may vary in nature, which has implications on the way requisitions are managed and the way talent is sourced. CivilSoft's talent acquisition suite provides you with the flexibility to build job-specific application forms and set up a unique workflow, sourcing strategy and assessment set for each job requisition. It allows you to define the mandatory and preferred competencies and qualifications the ideal candidate should hold, and against which candidates should be assessed, enabling you to select a better strategic fit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Reach The Right People");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Utilize a wide range of media to reach diverse talent communities, both inside and outside of your organization, through integration with third-party job boards and social networks as well as your own career website and employee portal. You can customize job posting details and publish adverts in multiple languages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Career Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Showcase your employer brand and highlight your organization as an employer of choice; Leverage video, photography and web design to show people what it's really like to work for your organization. With dynamic career websites, you will feel empowered to always keep content fresh and relevant . The career portal also helps offer a more positive candidate experience through the simplification of the registration and application process and the improvement of candidate engagement, enabling candidates to keep track of their application status and keeping them constantly in the know about new vacancies within their area of interest. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Build Your Talent Pipeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Screening and Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " You no longer have to screen through thousands of resumes to find the right match. The application screens, disqualifies, and sorts candidates according to how well they fit. With the automation of reference checks, you can design feedback forms that can be automatically sent to references provided by the candidate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Talent Directory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Ensure a constant flow of candidates are available as recruitment needs arise. and build a searchable pool of talent suitable for a variety of roles and functions. With CivilSoft Talent Acquisition, you can track applicant activity history, and handpick talent for different positions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Make The Right Choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Interviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " The talent acquisition suite encompasses an interview management platform that enables smart interview scheduling and notifies candidates of interview date, time and location. It supports the design of competency-based interviews and features a Q&A library for every competency. With CivilSoft's own tablet application, interviewers can view their interview calendar, scan resumes of interviewees, view questions and record notes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " The talent acquisition suite encompasses an interview management platform that enables smart interview scheduling and notifies candidates of interview date, time and location. It supports the design of competency-based interviews and features a Q&A library for every competency. With CivilSoft's own tablet application, interviewers can view their interview calendar, scan resumes of interviewees, view questions and record notes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " CivilSoft Talent Acquisition can help you fill positions up to 5x faster! See the product in action. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Schedule a Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".talentHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/talentAcq/talentHeader.png\");\n}\n\n.reachBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/talentAcq/reachBk.png\");\n}\n\n.rightChBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/talentAcq/rightChBk.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3RhbGVudC1hY3F1aXNpdGlvbi9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcb3Vyc29sdXRpb25zXFx0YWxlbnQtYWNxdWlzaXRpb25cXHRhbGVudC1hY3F1aXNpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3RhbGVudC1hY3F1aXNpdGlvbi90YWxlbnQtYWNxdWlzaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrRUFBQTtBQ0NKOztBRENBO0VBQ0ksMEVBQUE7QUNFSjs7QURBQTtFQUNJLDRFQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJzb2x1dGlvbnMvdGFsZW50LWFjcXVpc2l0aW9uL3RhbGVudC1hY3F1aXNpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWxlbnRIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvdGFsZW50QWNxL3RhbGVudEhlYWRlci5wbmcnKTtcclxufVxyXG4ucmVhY2hCayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy90YWxlbnRBY3EvcmVhY2hCay5wbmcnKTtcclxufVxyXG4ucmlnaHRDaEJrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3RhbGVudEFjcS9yaWdodENoQmsucG5nJyk7XHJcbn0iLCIudGFsZW50SGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3RhbGVudEFjcS90YWxlbnRIZWFkZXIucG5nXCIpO1xufVxuXG4ucmVhY2hCayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL291clNvbHV0aW9ucy90YWxlbnRBY3EvcmVhY2hCay5wbmdcIik7XG59XG5cbi5yaWdodENoQmsge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvdGFsZW50QWNxL3JpZ2h0Q2hCay5wbmdcIik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalentAcquisitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-talent-acquisition',
                templateUrl: './talent-acquisition.component.html',
                styleUrls: ['./talent-acquisition.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/oursolutions/workforce/workforce.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/oursolutions/workforce/workforce.component.ts ***!
  \*********************************************************************/
/*! exports provided: WorkforceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkforceComponent", function() { return WorkforceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class WorkforceComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Time Tracking & Staff Scheduling Software | CivilSoft HCM';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
WorkforceComponent.ɵfac = function WorkforceComponent_Factory(t) { return new (t || WorkforceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
WorkforceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkforceComponent, selectors: [["app-workforce"]], decls: 49, vars: 0, consts: [[1, "header", "container-fluid"], [1, "row", "headerCtn", "WorkforceHeader", "align-content-center", "text-center", "backQround_img"], [1, "overlay", "w-100", "h-100"], [1, "col-md-12", "page-title"], [1, "col-md-12", "page-description"], [1, "section-info"], [1, "container-xl", "px-5"], [1, "image-with-conntent"], [1, "container-xl", "py-5"], [1, "row", "m-0", "my-3"], [1, "col-lg-7", "mt-3", "col-md-12"], [1, "sub-title", "mb-2"], [1, "mb-4"], [1, "col-lg-5", "col-md-12"], [1, "imgCtn", "text-center"], ["src", "assets/images/ourSolutions/workforce/workforce1.jpg", 1, "w-100"], [1, "dark-with-bk", "py-5", "TimMoneyBk"], [1, "overlay"], [1, "container-xl", "my-3"], [1, "row", "m-0"], [1, "col-lg-5", "col-md-12", "order-lg-1", "order-md-2", "order-2"], ["src", "assets/images/ourSolutions/workforce/workforce2.jpg", 1, "w-100"], [1, "col-lg-7", "col-md-12", "mt-3", "order-lg-2", "order-md-1", "order-1"], [1, "schdualCtn", "py-4", "CallToAction"], [1, "container-xl"], [1, "row"], [1, "col-md-9"], [1, "col-md-3", "text-right"], ["data-toggle", "modal", "data-target", "#ScheduleModal", 1, "btn-primary", "btn"]], template: function WorkforceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Workforce Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Our Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CivilSoft makes time and job information available at your fingertips, increasing the simplicity in measuring efficiency, productivity and downtime, enhancing cost control, and facilitating headcount and shift planning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Meet demand with utmost sophistication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " In today's ever-changing business environment, demand varies from day to day and consequently, resource requirements differ. CivilSoft helps you create shifts based on business needs and can handle complex shift definition, scheduling, and assignments, enabling you to fulfill demand, adjust for fluctuations, avoid scheduling conflicts and ensure staffing levels for any given shift are just right. The system allows you to plan the optimum utilization of your resources, take employee schedule constraints and shift patterns into consideration, and to pre-notify staff of their respective schedules to avoid frustration and maintain a healthy employer-employee relationship. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Time is money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " CivilSoft's Time Tracking module makes tracking and organizing working hours simple and straightforward, reduces administrative burden, and improves operational efficiency. It interfaces with a variety of time clocks and devices such as RFID, Facial Recognition, Fingerprint, etc.to gather data automatically and process it in accordance with your organization's policy, thereby reducing the hours spent on processing manual timesheets to minutes, eliminating human errors, and inspiring greater confidence among employees in the accuracy of their salary calculations. The system allows you to record and identify attendance exceptions as well as overtime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Overtime is pre-planned, scheduled and budgeted for in advance, preventing overtime abuse and establishing tight controls over overtime expenditure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Customers who use CivilSoft Performance Management experienced higher engagement and objective completion rates. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " See our product in action! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Schedule a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".WorkforceHeader[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/pms/u1640.png\");\n}\n\n.TimMoneyBk[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/ourSolutions/pms/u1645.png\");\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3dvcmtmb3JjZS9FOlxcTWFpLm1cXENpdmlsc29mdFdlYnNpdGUyMDIwXFxXZWJzaXRlLldlYlVJL3NyY1xcYXBwXFxwYWdlc1xcb3Vyc29sdXRpb25zXFx3b3JrZm9yY2VcXHdvcmtmb3JjZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Vyc29sdXRpb25zL3dvcmtmb3JjZS93b3JrZm9yY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrRUFBQTtBQ0NKOztBRENBO0VBQ0ksa0VBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXJzb2x1dGlvbnMvd29ya2ZvcmNlL3dvcmtmb3JjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Xb3JrZm9yY2VIZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vdXJTb2x1dGlvbnMvcG1zL3UxNjQwLnBuZycpO1xyXG59XHJcbi5UaW1Nb25leUJrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3Btcy91MTY0NS5wbmcnKTtcclxufVxyXG4ucm93IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIuV29ya2ZvcmNlSGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3Btcy91MTY0MC5wbmdcIik7XG59XG5cbi5UaW1Nb25leUJrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3VyU29sdXRpb25zL3Btcy91MTY0NS5wbmdcIik7XG59XG5cbi5yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkforceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workforce',
                templateUrl: './workforce.component.html',
                styleUrls: ['./workforce.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _oursolutions_oursolutions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oursolutions/oursolutions.component */ "./src/app/pages/oursolutions/oursolutions.component.ts");
/* harmony import */ var _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourclients/ourclients.component */ "./src/app/pages/ourclients/ourclients.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/pages/careers/careers.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var _future_future_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./future/future.component */ "./src/app/pages/future/future.component.ts");
/* harmony import */ var _mental_health_mental_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mental-health/mental-health.component */ "./src/app/pages/mental-health/mental-health.component.ts");
/* harmony import */ var _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./our-team/our-team.component */ "./src/app/pages/our-team/our-team.component.ts");
/* harmony import */ var _oursolutions_talent_acquisition_talent_acquisition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oursolutions/talent-acquisition/talent-acquisition.component */ "./src/app/pages/oursolutions/talent-acquisition/talent-acquisition.component.ts");
/* harmony import */ var _oursolutions_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oursolutions/core-hr/core-hr.component */ "./src/app/pages/oursolutions/core-hr/core-hr.component.ts");
/* harmony import */ var _oursolutions_gov_r_gov_r_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oursolutions/gov-r/gov-r.component */ "./src/app/pages/oursolutions/gov-r/gov-r.component.ts");
/* harmony import */ var _oursolutions_pms_pms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oursolutions/pms/pms.component */ "./src/app/pages/oursolutions/pms/pms.component.ts");
/* harmony import */ var _oursolutions_budget_budget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./oursolutions/budget/budget.component */ "./src/app/pages/oursolutions/budget/budget.component.ts");
/* harmony import */ var _oursolutions_workforce_workforce_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./oursolutions/workforce/workforce.component */ "./src/app/pages/oursolutions/workforce/workforce.component.ts");
/* harmony import */ var _oursolutions_housing_housing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./oursolutions/housing/housing.component */ "./src/app/pages/oursolutions/housing/housing.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-count-to */ "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/__ivy_ngcc__/esm2015/ng2-tel-input.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");

















//import { SuccessPopupComponent } from '../sharedComponent/success-popup/success-popup.component';










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], pathMatch: 'full' },
    //{ path: '', component: HomeComponent, pathMatch: 'full' }, 
    { path: 'CoreHr', component: _oursolutions_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_11__["CoreHrComponent"] },
    { path: 'oursolutions', component: _oursolutions_oursolutions_component__WEBPACK_IMPORTED_MODULE_3__["OursolutionsComponent"] },
    { path: 'clients', component: _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_4__["OurclientsComponent"] },
    { path: 'about', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"] },
    { path: 'career', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__["CareersComponent"] },
    { path: 'contact', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"] },
    { path: 'team', component: _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_9__["OurTeamComponent"] },
    { path: 'GovR', component: _oursolutions_gov_r_gov_r_component__WEBPACK_IMPORTED_MODULE_12__["GovRComponent"] },
    { path: 'PMS', component: _oursolutions_pms_pms_component__WEBPACK_IMPORTED_MODULE_13__["PMSComponent"] },
    { path: 'budget', component: _oursolutions_budget_budget_component__WEBPACK_IMPORTED_MODULE_14__["BudgetComponent"] },
    { path: 'workforce', component: _oursolutions_workforce_workforce_component__WEBPACK_IMPORTED_MODULE_15__["WorkforceComponent"] },
    { path: 'TalentAcquisition', component: _oursolutions_talent_acquisition_talent_acquisition_component__WEBPACK_IMPORTED_MODULE_10__["TalentAcquisitionComponent"] },
    { path: 'housing', component: _oursolutions_housing_housing_component__WEBPACK_IMPORTED_MODULE_16__["HousingComponent"] },
    { path: 'future', component: _future_future_component__WEBPACK_IMPORTED_MODULE_7__["FutureComponent"] },
    { path: 'mental-health', component: _mental_health_mental_health_component__WEBPACK_IMPORTED_MODULE_8__["MentalHealthComponent"] },
];
class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyCY9ecqz90GFKJ7Sm59bXvV4yuZPgnpfG0'
            }),
            angular_count_to__WEBPACK_IMPORTED_MODULE_18__["CountToModule"],
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_19__["Ng2TelInputModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"],
        _oursolutions_oursolutions_component__WEBPACK_IMPORTED_MODULE_3__["OursolutionsComponent"],
        _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_4__["OurclientsComponent"],
        _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__["CareersComponent"],
        _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"],
        _future_future_component__WEBPACK_IMPORTED_MODULE_7__["FutureComponent"],
        _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_9__["OurTeamComponent"],
        //SuccessPopupComponent,
        _oursolutions_talent_acquisition_talent_acquisition_component__WEBPACK_IMPORTED_MODULE_10__["TalentAcquisitionComponent"],
        _oursolutions_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_11__["CoreHrComponent"],
        _oursolutions_gov_r_gov_r_component__WEBPACK_IMPORTED_MODULE_12__["GovRComponent"],
        _oursolutions_pms_pms_component__WEBPACK_IMPORTED_MODULE_13__["PMSComponent"],
        _oursolutions_budget_budget_component__WEBPACK_IMPORTED_MODULE_14__["BudgetComponent"],
        _oursolutions_workforce_workforce_component__WEBPACK_IMPORTED_MODULE_15__["WorkforceComponent"],
        _oursolutions_housing_housing_component__WEBPACK_IMPORTED_MODULE_16__["HousingComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_18__["CountToModule"],
        ng2_tel_input__WEBPACK_IMPORTED_MODULE_19__["Ng2TelInputModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"],
                    _oursolutions_oursolutions_component__WEBPACK_IMPORTED_MODULE_3__["OursolutionsComponent"],
                    _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_4__["OurclientsComponent"],
                    _careers_careers_component__WEBPACK_IMPORTED_MODULE_5__["CareersComponent"],
                    _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"],
                    _future_future_component__WEBPACK_IMPORTED_MODULE_7__["FutureComponent"],
                    _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_9__["OurTeamComponent"],
                    //SuccessPopupComponent,
                    _oursolutions_talent_acquisition_talent_acquisition_component__WEBPACK_IMPORTED_MODULE_10__["TalentAcquisitionComponent"],
                    _oursolutions_core_hr_core_hr_component__WEBPACK_IMPORTED_MODULE_11__["CoreHrComponent"],
                    _oursolutions_gov_r_gov_r_component__WEBPACK_IMPORTED_MODULE_12__["GovRComponent"],
                    _oursolutions_pms_pms_component__WEBPACK_IMPORTED_MODULE_13__["PMSComponent"],
                    _oursolutions_budget_budget_component__WEBPACK_IMPORTED_MODULE_14__["BudgetComponent"],
                    _oursolutions_workforce_workforce_component__WEBPACK_IMPORTED_MODULE_15__["WorkforceComponent"],
                    _oursolutions_housing_housing_component__WEBPACK_IMPORTED_MODULE_16__["HousingComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                        // please get your own API key here:
                        // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                        apiKey: 'AIzaSyCY9ecqz90GFKJ7Sm59bXvV4yuZPgnpfG0'
                    }),
                    angular_count_to__WEBPACK_IMPORTED_MODULE_18__["CountToModule"],
                    ng2_tel_input__WEBPACK_IMPORTED_MODULE_19__["Ng2TelInputModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map