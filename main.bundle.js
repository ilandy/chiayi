webpackJsonp([1,4],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqDetailComponent = (function () {
    function FaqDetailComponent() {
        this.closeDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */];
    }
    FaqDetailComponent.prototype.goBack = function () {
        this.closeDetail.emit();
    };
    FaqDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], FaqDetailComponent.prototype, "closeDetail", void 0);
    FaqDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-faq-detail',
            template: __webpack_require__(528),
            styles: [__webpack_require__(325)]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqDetailComponent);
    return FaqDetailComponent;
}());
//# sourceMappingURL=faq-detail.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_service__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqComponent = (function () {
    function FaqComponent(titleService, faqService) {
        this.titleService = titleService;
        this.faqService = faqService;
        this.categories = [];
        this.selectValue = '全部';
        this.selectSwitch = false;
        this.showDetail = false;
    }
    FaqComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    FaqComponent.prototype.getSelectItem = function (tag) {
        this.selectSwitch = false;
        this.selectValue = tag.innerHTML;
    };
    FaqComponent.prototype.getCategories = function () {
        var _this = this;
        this.faqService
            .getCategories()
            .subscribe(function (category) { return _this.categories = category; }, function (error) { return _this.error = error; });
    };
    FaqComponent.prototype.getDetail = function () {
        this.showDetail = true;
    };
    FaqComponent.prototype.closeDetail = function () {
        this.showDetail = false;
    };
    FaqComponent.prototype.ngOnInit = function () {
        this.setTitle('常見問題 FAQ - 嘉義市政府線上陳情服務平台');
        this.getCategories();
    };
    FaqComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__(529),
            styles: [__webpack_require__(520)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__faq_service__["a" /* FaqService */]) === 'function' && _b) || Object])
    ], FaqComponent);
    return FaqComponent;
    var _a, _b;
}());
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessComponent = (function () {
    function ProcessComponent(titleService) {
        this.titleService = titleService;
    }
    ProcessComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ProcessComponent.prototype.ngOnInit = function () {
        this.setTitle('服務流程 - 嘉義市政府線上陳情服務平台');
    };
    ProcessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-process',
            template: __webpack_require__(530),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], ProcessComponent);
    return ProcessComponent;
    var _a;
}());
//# sourceMappingURL=process.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueryDetailComponent = (function () {
    function QueryDetailComponent() {
        this.closeDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    QueryDetailComponent.prototype.goBack = function () {
        this.closeDetail.emit();
        // console.log(123)
    };
    QueryDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], QueryDetailComponent.prototype, "closeDetail", void 0);
    QueryDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-query-detail',
            template: __webpack_require__(531),
            styles: [__webpack_require__(325)]
        }), 
        __metadata('design:paramtypes', [])
    ], QueryDetailComponent);
    return QueryDetailComponent;
}());
//# sourceMappingURL=query-detail.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryComponent = (function () {
    function QueryComponent(titleService) {
        this.titleService = titleService;
        this.showDetail = false;
        this.errType = {
            notFound: '您查詢的內容不存在，請重新輸入。',
            numErr: '案件編號欄位為必填',
            mailErr: '查詢email有誤。請重新輸入。',
            yearErr: '案件編號-年份有誤。請重新輸入。',
            keyErr: '案件編號有誤。請重新輸入。',
            nameErr: '來電時的姓名有誤。請重新輸入。'
        };
    }
    QueryComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    QueryComponent.prototype.closeDetail = function () {
        this.showDetail = false;
    };
    QueryComponent.prototype.ngOnInit = function () {
        this.setTitle('案件查詢 - 嘉義市政府線上陳情服務平台');
    };
    QueryComponent.prototype.getDetail = function () {
        this.showDetail = true;
        //
        // this.queryVErr = "";
        // if (this.vyear == null || this.vyear.toString().length < 4){
        //   return this.queryVErr = this.errType.yearErr;
        // }
        // if (this.vp3 == null || this.vp3.length == 0){
        //   return this.queryVErr = this.errType.keyErr;
        // }
        // if (this.callerName == null || this.callerName.length == 0){
        //   return this.queryVErr = this.errType.nameErr;
        // }
        // this.subscriptions.push(
        //   //this.vp1 = 'AK';
        //   this.qService.getVResult(this.vp0, this.vp1, this.vyear, this.vp3, this.callerName, this.recaptchaCode2.TimeStamp+this.aCapcha+this.recaptchaCode2.HashCode).subscribe(data => {
        //     this.searchCase = data;
        //     //console.log(data);
        //     this.displayDetail = true;
        //     this.isCivilianSuggest = true;
        //     this.searchCase.isCivilianSuggest = true;
        //   }, (err: any) => {
        //     if (err.status == 404){
        //       return this.queryVErr = this.errType.notFound;
        //     } else if (err.status == 400){
        //       return this.queryVErr = err.json();
        //     }
        //   })
        // );
    };
    QueryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-query',
            template: __webpack_require__(532),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], QueryComponent);
    return QueryComponent;
    var _a;
}());
//# sourceMappingURL=query.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportDetailComponent = (function () {
    function ReportDetailComponent(titleService) {
        this.titleService = titleService;
        this.role = 1;
        this.dist = 1;
        this.contact = 0;
        this.completeMessg = false;
    }
    ReportDetailComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ReportDetailComponent.prototype.shoeComplete = function () {
        return true;
    };
    ReportDetailComponent.prototype.ngOnInit = function () {
        this.setTitle('案件陳情 - 嘉義市政府線上陳情服務平台');
    };
    ReportDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-report-detail',
            template: __webpack_require__(533),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], ReportDetailComponent);
    return ReportDetailComponent;
    var _a;
}());
//# sourceMappingURL=report-detail.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(titleService, reportService) {
        this.titleService = titleService;
        this.reportService = reportService;
        // console.log(this.screenSize)
    }
    ReportComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ReportComponent.prototype.getTypes = function () {
        var _this = this;
        this.reportService
            .getTypes()
            .subscribe(function (types) { return _this.caseTypes = types; });
    };
    ReportComponent.prototype.onSelected = function (id, subId) {
        var _this = this;
        this.reportService
            .getType(id)
            .subscribe(function (type) {
            _this.selectedCaseType = type;
            _this.selectedSubCaseType = type.Subitems.filter(function (item) { return item.Subitem == subId; })[0];
        });
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.setTitle('首頁 - 嘉義市政府線上陳情服務平台');
        this.getTypes();
    };
    ReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__(534),
            providers: [__WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]],
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]) === 'function' && _b) || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a, _b;
}());
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermComponent = (function () {
    function TermComponent(titleService, activeRouter) {
        this.titleService = titleService;
        this.activeRouter = activeRouter;
        this.scrollPosition = window.scrollY;
        this.screenWidth = screen.availWidth;
        this.whichLable = 'privacy';
        this.getLabelPadding = "0";
    }
    /* Setting new page title */
    TermComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    /* Geting target offset height and scroll to
       when label be clicked.  */
    TermComponent.prototype.scrollTo = function (targetAnchor) {
        var offset = document.getElementById(targetAnchor).offsetTop;
        window.scrollTo(0, offset + 400);
        this.getLabelPadding = offset + "px";
        this.whichLable = targetAnchor;
    };
    /* The range of page on scroll start to end.  */
    TermComponent.prototype.onScroll = function (event) {
        this.scrollHeight = event.body.scrollTop;
        this.getLabelPadding = this.scrollHeight - screen.availHeight / 2 + "px";
        if (this.scrollHeight === 0) {
            this.getLabelPadding = "0";
        }
        else if (this.scrollHeight > 3552) {
            this.getLabelPadding = "3352px";
        }
        switch (true) {
            case (this.scrollHeight > document.getElementById('copy').offsetTop + 250):
                this.whichLable = 'copy';
                break;
            case (this.scrollHeight > document.getElementById('sucrity').offsetTop + 250):
                this.whichLable = 'sucrity';
                break;
            default:
                this.whichLable = 'privacy';
                break;
        }
        if (this.screenWidth < 760) {
            this.getLabelPadding = "0";
        }
    };
    TermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitle("網站使用規範 - 嘉義市政府線上陳情服務平台");
        this.sub = this.activeRouter.params.subscribe(function (params) {
            if (params['lable'] !== undefined) {
                if (params['lable'] !== 'privacy') {
                    _this.scrollTo(params['lable']);
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    TermComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-term',
            template: __webpack_require__(535),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], TermComponent);
    return TermComponent;
    var _a, _b;
}());
//# sourceMappingURL=term.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".query-detail-item {\n  margin-top: 1em; }\n  .query-detail-item p {\n    margin-top: .2em;\n    font-size: 1.25em; }\n\n.info-content {\n  font-size: 1.25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.screenWidth = screen.availWidth;
        this.mb = false;
    }
    AppComponent.prototype.getMenuActive = function () {
        if (this.screenWidth < 1100) {
            this.mb = !this.mb;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(527)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_report_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_report_detail_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__query_query_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faq_faq_detail_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__term_term_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__process_process_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__query_query_detail_component__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_8__query_query_component__["a" /* QueryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_11__term_term_component__["a" /* TermComponent */],
                __WEBPACK_IMPORTED_MODULE_12__process_process_component__["a" /* ProcessComponent */],
                __WEBPACK_IMPORTED_MODULE_7__report_report_detail_component__["a" /* ReportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__query_query_detail_component__["a" /* QueryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__faq_faq_detail_component__["a" /* FaqDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_detail_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query_query_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query_query_detail_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_faq_detail_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__term_term_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__process_process_component__ = __webpack_require__(307);
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_2__report_report_component__["a" /* ReportComponent */]
    },
    {
        path: 'report/:id/:subId',
        component: __WEBPACK_IMPORTED_MODULE_3__report_report_detail_component__["a" /* ReportDetailComponent */]
    },
    {
        path: 'query',
        component: __WEBPACK_IMPORTED_MODULE_4__query_query_component__["a" /* QueryComponent */]
    },
    {
        path: 'query/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__query_query_detail_component__["a" /* QueryDetailComponent */]
    },
    {
        path: 'process',
        component: __WEBPACK_IMPORTED_MODULE_9__process_process_component__["a" /* ProcessComponent */]
    },
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'faq/:page',
        component: __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'faqDetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__faq_faq_detail_component__["a" /* FaqDetailComponent */]
    },
    {
        path: 'term/:lable',
        component: __WEBPACK_IMPORTED_MODULE_8__term_term_component__["a" /* TermComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__report_report_component__["a" /* ReportComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqService = (function () {
    //private faqUrl = 'http://soweb.kcg.gov.tw/webapi/api/faqqry/';
    function FaqService(http) {
        this.http = http;
        this.categoryUrl = './assets/data/data-department.json'; //'http://soweb.kcg.gov.tw/webapi/api/category';
    }
    FaqService.prototype.getCategories = function () {
        return this.http.get(this.categoryUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //   getFaqs(q = "", kind = "") : Observable<Faq[]> {
    //     return this.http.get(this.faqUrl + q + '?kind=' + kind)
    //                .map(this.extractData)
    //                .catch(this.handleError);
    //   }
    //   getReply(organNo: string, seqNo: number) : Observable<Reply> {
    //     var key = organNo + '-' + seqNo;
    //     var flag = sessionStorage.getItem(key) ? 'R' : 'N';
    //     sessionStorage.setItem(key, new Date().toString());
    //     return this.http.get(this.faqUrl + organNo + '?seqNo=' + seqNo + '&updFlag=' + flag)
    //                .map(this.extractData)
    //                .catch(this.handleError);
    //   }
    FaqService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FaqService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    FaqService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FaqService);
    return FaqService;
    var _a;
}());
//# sourceMappingURL=faq.service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rxjs_operators__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    //   private validationCodeUrl = this.baseApiUrl + 'ValidationCode/';//'../../assets/vd.json';
    function ReportService(http) {
        this.http = http;
        this.baseApiUrl = './assets/data/';
        this.reportTypesUrl = this.baseApiUrl + 'data-caseItems.json';
    }
    ReportService.prototype.getTypes = function () {
        return this.http.get(this.reportTypesUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReportService.prototype.getType = function (id) {
        return this.http.get(this.reportTypesUrl + id)
            .map(function (res) { return res.json()[0]; })
            .catch(this.handleError);
    };
    ReportService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ReportService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ReportService);
    return ReportService;
    var _a;
}());
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n.faq .faq-item {\n  padding-top: 1em;\n  box-shadow: 0 0.5px 0 #009797; }\n  .faq .faq-item p, .faq .faq-item a {\n    font-size: 1.125em;\n    font-weight: 500; }\n  .faq .faq-item a {\n    color: #005151; }\n  .faq .faq-item p {\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n  .faq .faq-item:nth-child(2n-1) {\n    background: rgba(0, 151, 151, 0.05); }\n\n.faq .faq-paging {\n  text-align: center;\n  margin-top: 2em; }\n  .faq .faq-paging li {\n    display: inline-block;\n    padding: 0 .85em;\n    color: #005151;\n    cursor: pointer; }\n  .faq .faq-paging .fa {\n    font-size: 1.5em;\n    margin-top: -10px; }\n  .faq .faq-paging li:first-child {\n    border-right: 0.5px solid #005151;\n    padding-right: 1em; }\n  .faq .faq-paging li:nth-last-child(1) {\n    border-left: 0.5px solid #005151;\n    padding-left: 1em; }\n  .faq .faq-paging .active {\n    position: relative;\n    color: #EB7D1F;\n    font-size: 1.75em; }\n    .faq .faq-paging .active:after {\n      content: \"\";\n      position: absolute;\n      bottom: -.2em;\n      left: 30%;\n      width: 40%;\n      height: 2px;\n      background: #EB7D1F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n.proccess .proccess-img {\n  float: left;\n  width: 35%; }\n  @media all and (max-width: 480px) {\n    .proccess .proccess-img {\n      float: none;\n      width: 100%; }\n      .proccess .proccess-img img {\n        width: 100%; } }\n\n.proccess .proccess-info {\n  width: 65%;\n  float: right; }\n  @media all and (max-width: 480px) {\n    .proccess .proccess-info {\n      float: none;\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n.query {\n  padding: 4em 0;\n  width: 90%;\n  margin: auto; }\n  @media all and (min-width: 960px) {\n    .query {\n      padding: 6em 0;\n      width: 960px; } }\n  .query h1 {\n    margin-bottom: 2em; }\n    @media all and (min-width: 960px) {\n      .query h1 {\n        width: 40%;\n        float: left;\n        text-align: center; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .query h1 {\n        width: 40%;\n        text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n.form-group {\n  font-size: 1.5em;\n  border-bottom: 1px solid #009797; }\n  @media all and (max-width: 480px) {\n    .form-group {\n      font-size: 1em; } }\n  .form-group .col-md-2 {\n    text-align: left; }\n    @media all and (min-width: 960px) {\n      .form-group .col-md-2 {\n        text-align: right; } }\n  .form-group i {\n    font-size: inherit;\n    line-height: 350%;\n    color: #1FC9C5; }\n  .form-group input[type='text'] {\n    height: 3.5em;\n    width: 95%;\n    padding-left: .3em;\n    font-size: inherit;\n    background: transparent;\n    border: none;\n    letter-spacing: .1em; }\n    .form-group input[type='text']:focus {\n      outline: none; }\n  .form-group h4,\n  .form-group .form-title {\n    position: relative;\n    display: inline-block;\n    font-size: .95em;\n    font-weight: 500; }\n    .form-group h4:after,\n    .form-group .form-title:after {\n      content: \"\";\n      position: absolute;\n      z-index: 1;\n      display: block;\n      right: -.6em;\n      bottom: -.2em;\n      height: 1em;\n      width: 2em;\n      background: rgba(133, 133, 129, 0.2); }\n    .form-group h4.valid:after,\n    .form-group .form-title.valid:after {\n      background: rgba(0, 151, 151, 0.2); }\n    .form-group h4.invalid:after,\n    .form-group .form-title.invalid:after {\n      background: rgba(235, 125, 31, 0.2); }\n\n.form-radio {\n  margin-top: .8em;\n  margin-left: 3%;\n  font-size: .85em; }\n  @media all and (max-width: 480px) {\n    .form-radio.id-list {\n      margin-top: 20px; } }\n  .form-radio li {\n    margin-bottom: 1.125em; }\n    @media all and (max-width: 480px) {\n      .form-radio li .mt-20 {\n        margin-top: 0; } }\n  .form-radio input {\n    display: none; }\n  .form-radio label {\n    display: inline-block; }\n    .form-radio label:before {\n      content: \"\";\n      display: inline-block;\n      width: 17px;\n      height: 17px;\n      border: 1px solid #005151;\n      border-radius: 50%;\n      margin-right: .95em; }\n    .form-radio label.checked:before {\n      background: #005151;\n      border: 1px solid #005151;\n      box-shadow: 0 0 0 1.5px #F0F0E1 inset; }\n\n.files {\n  font-size: 24px; }\n  @media all and (max-width: 480px) {\n    .files {\n      font-size: 16px; } }\n\n.file-upload {\n  position: relative;\n  width: 12em;\n  height: 2.7em;\n  padding-left: 3em;\n  margin: 10px 0 10px 10px;\n  border-radius: 1.35em;\n  color: white;\n  font-size: 1em;\n  text-align: center;\n  line-height: 2.7em;\n  background: #858581;\n  cursor: pointer; }\n  @media all and (max-width: 480px) {\n    .file-upload {\n      margin-bottom: 2em; } }\n  .file-upload:before {\n    content: '\\F0EE';\n    position: absolute;\n    height: 100%;\n    width: 4em;\n    left: 0;\n    top: 0;\n    border-radius: inherit;\n    background: rgba(210, 188, 155, 0.2); }\n\n.line-box-tiny {\n  float: none;\n  margin: 0 auto 10em; }\n  .line-box-tiny > div {\n    padding-top: 1em;\n    padding-bottom: 5em; }\n  .line-box-tiny .btn {\n    position: absolute;\n    bottom: -35px;\n    right: 15%;\n    width: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n.term .term-nav {\n  margin-top: 1em;\n  -webkit-transition: padding .5s;\n  transition: padding .5s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out; }\n  .term .term-nav li {\n    padding: .5em 0; }\n  .term .term-nav a {\n    position: relative;\n    display: inline-block;\n    line-height: 1.8em;\n    font-size: 1.25em;\n    color: #858581;\n    -webkit-transition: color .5s, font-size .2s;\n    transition: color .5s, font-size .2s;\n    -webkit-transition-timing-function: ease-in;\n            transition-timing-function: ease-in; }\n    .term .term-nav a:hover {\n      color: #005151;\n      font-weight: 500; }\n    .term .term-nav a.active {\n      color: #005151;\n      font-size: 1.5em;\n      font-weight: 500; }\n      .term .term-nav a.active:after {\n        width: 100%;\n        height: 2px;\n        background: #005151; }\n    .term .term-nav a:after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 0%;\n      height: 2px;\n      background: #005151;\n      -webkit-transition: width .5s;\n      transition: width .5s;\n      -webkit-transition-delay: .3s;\n              transition-delay: .3s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu\">\n    <li><a routerLink=\"/\" (click)=\"getMenuActive()\">我要陳情</a></li>\n    <li><a routerLink=\"/query\" (click)=\"getMenuActive()\">案件查詢</a></li>\n    <li><a routerLink=\"/process\" (click)=\"getMenuActive()\">服務流程</a></li>\n    <li><a routerLink=\"/faq\" (click)=\"getMenuActive()\">常見 FAQ</a></li>\n</ul>\n<div class=\"wrap\" [ngClass]=\"{'active':mb}\">\n    <header class=\"header clear-fix\">\n        <h1 class=\"header-brand\">\n            <a href=\"/\" class=\"header-logo\" alt=\"嘉義市政府 Logo\" title=\"嘉義市政府線上即時服務系統\">\n\n            </a>\n        </h1>\n        <div class=\"header-menu\">\n            <div class=\"menu-button hidden-lg\" [ngClass]=\"{'active':mb}\" (click)=\"getMenuActive()\" >\n\n            </div>\n        </div>\n    </header>\n    <article class=\"content\">\n        <router-outlet></router-outlet>\n    </article>\n    <footer class=\"footer\">\n        <div class=\"footer-warp clear-fix\">\n            <div class=\"footer-info clear-fix\">\n                <img class=\"footer-img hidden-xs hidden-sm\" width=\"117\" height=\"117\" src=\"./assets/images/share/qrcode.png\" alt=\"網站手機版連結\" title=\"請使用手機 QRcode 掃描\">\n                <section class=\"footer-content\">\n                    <h2 class=\"font-default block-sprade bs-green\">本系統由 嘉義市政府企劃處 維護</h2>\n                    <p class=\"font-xs\">\n                        當系統處於定期維護時間，<br>\n                        每日凌晨 01:00 ~ 02:00 時，如有不便還請見諒。<br>\n                        嘉義市政府聯合服務中心電話：05-2254321<br>\n                    </p>\n                </section>\n            </div>\n            <ul class=\"footer-links font-sm\">\n                <li><a routerLink=\"/term/privacy\">隱私權保護政策</a></li>\n                <li><a routerLink=\"/term/sucrity\">網站安全政策</a></li>\n                <li><a routerLink=\"/term/copy\">著作權聲明</a></li>\n                <li><a href=\"http://www.chiayi.gov.tw/2015web/index.aspx\">嘉義市政府全球資訊網</a></li>\n            </ul>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<section class=\"query-detail main-wrap\">\n  <div class=\"main-content line-box\">\n    <div class=\"\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>問題內容</h1>\n        <p>Questions  Detail</p>\n      </header>\n      <div class=\"query-detail-content\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <article class=\"info\">\n              <h2 class=\"info-title\">處理單位資訊</h2>\n            </article>\n            <div class=\"query-detail-item\">\n              <small>回覆單位</small>\n              <p>嘉義市政府資訊中心</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>科室</small>\n              <p>系統發展科</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>修改日期</small>\n              <p>2017-02-18</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>張貼日期</small>\n              <p>2017-02-18</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>問題類別</small>\n              <p>社會</p>\n            </div>\n\n          </div>\n          <div class=\"col-md-6 col-md-offset-1\">\n            <article class=\"info\">\n              <h2 class=\"info-title\">問題主旨</h2>\n              <p class=\"info-content\">\n                政府未能廣設卸貨停車區，造成不便？\n              </p>\n            </article>\n            <article class=\"info\">\n              <h2 class=\"info-title\">問題答覆</h2>\n              <p class=\"info-content\">\n                本處已於本市重要道路、商業區等地段設置「貨車裝卸貨專用區」，以提供小型貨車及小型客貨兩用車臨時卸貨使用，民眾亦可視需求向本處提出建議地點，本處將綜合考量現地條件檢討設置「貨車裝卸貨專用區」的可行性。\n              </p>\n            </article>\n            <br>\n            <button tyep=\"button\" class=\"btn btn-green\" (click)=\"goBack()\"> 繼續查詢 </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<section class=\"faq main-wrap\" *ngIf=\"!showDetail\">\n  <div class=\"main-content line-box\">\n    <div class=\"faq-header\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>常見 FAQ</h1>\n        <p>Frequently Asked Questions </p>\n\n      </header>\n      <div class=\"faq-seach\">\n        <div class=\"row\">\n          <div class=\"col-md-7\">\n            <div class=\"field\">\n              <label class=\"field-name\">關鍵字</label>\n              <input class=\"field-entery\" type=\"text\" placeholder=\"有什麼我能幫助您的呢？\" >\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"field\">\n              <label class=\"field-name\">處理單位</label>\n              <div class=\"field-select\" role=\"combobox\" (click)=\"selectSwitch = !selectSwitch\">\n                <input class=\"field-entery\" type=\"text\" value=\"{{selectValue}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 select\" [ngClass]=\"{'active':selectSwitch}\">\n            <ul class=\"select-options\">\n              <li *ngFor=\"let item of categories\" [ngClass]=\"{'active': selectValue === item.kind_name }\" data-value=\"{{item.kind}}\" (click)=\"getSelectItem($event.target)\">{{item.kind_name}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"faq-list\">\n        <div class=\"row faq-item\" *ngFor=\"let i of [1,2,3,4,5,6,7]\">\n          <div class=\"col-md-10\">\n            <small>問題內容</small>\n            <p><a href=\"javascript:void(0)\" (click)=\"getDetail()\">如果我希望在住家前面安裝錄影監視系統，請問要如何要向市政府申請？</a></p>\n          </div>\n          <div class=\"col-md-2\">\n            <small>單位</small>\n            <p>民政區政</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <ul class=\"faq-paging\">\n            <li class=\"hidden-xs\"><i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;&nbsp;<span>第一頁</span></li>\n            <li>2</li>\n            <li class=\"active\">3</li>\n            <li>4</li>\n            <li class=\"hidden-xs\"><span>最後頁</span>&nbsp;&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i></li>\n          </ul>\n          <ul class=\"faq-paging hidden-sm hidden-md hidden-lg mt-20\">\n            <li ><i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;&nbsp;<span>第一頁</span></li>\n            <li ><span>最後頁</span>&nbsp;&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div *ngIf=\"showDetail\" >\n  <app-faq-detail (closeDetail)=\"closeDetail()\"></app-faq-detail>\n</div>\n"

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<section class=\"proccess main-wrap\">\n  <div class=\"main-content line-box\">\n    <div class=\"\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>服務流程</h1>\n        <p>Service Process</p>\n      </header>\n      <div class=\"clear-fix\">\n        <div class=\"proccess-img\">\n          <img class=\"\" src=\"./assets/images/share/process.png\" alt=\"\">\n        </div>\n        \n        <div class=\"proccess-info\">\n          <article class=\"info\">\n            <h2 class=\"info-title\">案件陳情服務系統作業方式</h2>\n            <ol class=\"info-content\">\n              \t<li>請您於投書時提供正確之 E-MAIL 帳號、電話、姓名，俾系統自動回覆您信件收件編號及回覆內容亦將以 E-MAIL 的方式傳送給您。</li>\n                <li>查詢回覆內容時，請您透過系統自動提供之收件編號及姓名（或 E-MAIL ），於「即時服務案件查詢」選擇鍵中進行查閱。</li>\n                <li>案件之處理依「行政院暨所屬各機關處理人民陳情案件要點」辦理，當您收到相關單位的處理結果後，還可經由滿意度問卷調查填寫對該項回函處理的滿意程度，歡迎您多加利用。</li>\n            </ol>\n          </article>\n\n          <article class=\"info\">\n            <h2 class=\"info-title\">未確認函之處理</h2>\n            <p class=\"info-content\">\n              \t本府為避免所處理的信件無法傳送當事人，甚或信箱遭冒用之情形，將會在受理分案後回傳收件編號後分派至相關機關處理，若您一直無法收到收件編號函，可能是您填寫的電子信箱有誤，建議您重新檢視並再次傳送。\n            </p>\n          </article>\n\n          <article class=\"info\">\n            <h2 class=\"info-title\">流程說明</h2>\n            <p class=\"info-content\">\n              \t步驟一、陳情民眾於案件陳情系統填入正確資料後等待確認郵件。<br/>\n步驟二、點選確認郵件後，會依照項目別分別採取自動分案或人工線上分案，分案給承辦單位。<br/>\n步驟三、承辦單位於處理後，系統將寄出處理情形通知陳情民眾，若因時效內無法完成，亦會寄出展期信件通知陳情民眾。<br/>\n            </p>\n          </article>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<section class=\"query-detail main-wrap\">\n  <div class=\"main-content line-box\">\n    <div class=\"\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>案件查詢</h1>\n        <p>Search Case</p>\n      </header>\n      <div class=\"query-detail-content\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"query-detail-item\">\n              <small>主項目</small>\n              <p>公園綠地行道樹維護</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>子項目</small>\n              <p>公園、綠地、安全島髒亂</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>收件編號</small>\n              <p>88182</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>收件時間</small>\n              <p>2017-02-18</p>\n            </div>\n            <div class=\"query-detail-item\">\n              <small>機密等級</small>\n              <p>保密</p>\n            </div>\n            <button class=\"btn btn-green hidden-xs hidden-sm\" (click)=\"goBack()\"> 繼續查詢 </button>\n\n          </div>\n          <div class=\"col-md-6 col-md-offset-1\">\n            <article class=\"info\">\n              <h2 class=\"info-title\">陳情內容</h2>\n              <p class=\"info-content\">\n                政府未能廣設卸貨停車區，造成不便？\n              </p>\n            </article>\n            <article class=\"info\">\n              <h2 class=\"info-title\">答覆內容</h2>\n              <p class=\"info-content\">\n                本處已於本市重要道路、商業區等地段設置「貨車裝卸貨專用區」，以提供小型貨車及小型客貨兩用車臨時卸貨使用，民眾亦可視需求向本處提出建議地點，本處將綜合考量現地條件檢討設置「貨車裝卸貨專用區」的可行性。\n              </p>\n            </article>\n            <article class=\"info\">\n              <h2 class=\"info-title\">處理單位資訊</h2>\n              <div class=\"row\">\n                <div class=\"col-md-12 query-detail-item\">\n                  <small>承辦機關</small>\n                  <p>嘉義市政府資訊中心</p>\n                </div>\n                <div class=\"col-md-12 query-detail-item\">\n                  <small>科室</small>\n                  <p>系統發展科</p>\n                </div>\n                <div class=\"col-md-12 query-detail-item\">\n                  <small>回覆日期</small>\n                  <p>2017-02-18</p>\n                </div>\n                <div class=\"col-md-5 query-detail-item\">\n                  <small>承辦人員</small>\n                  <p>陳小白</p>\n                </div>\n                <div class=\"col-md-7 query-detail-item\">\n                  <small>回覆日期</small>\n                  <p>06-225-4123 #2780</p>\n                </div>\n              </div>\n            </article>\n            <br>\n            <button type=\"button\" class=\"btn btn-green hidden-md hidden-lg\" (click)=\"goBack()\"> 繼續查詢 </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<section class=\"query clear-fix\" *ngIf=\"!showDetail\">\n  <h1 class=\"big-title\">陳情案件查詢</h1>\n  <div class=\"line-box line-triangle-deco line-box-tiny\">\n    <div>\n      <p class=\"deco-triangle\">請記得輸入您的電子信箱及收件編號方可查看您申訴案件的處理狀況哦！</p>\n      <div class=\"field\">\n        <label class=\"field-name\">收件編號</label>\n        <input class=\"field-entery\" type=\"text\" placeholder=\"請輸入收件編號\" >\n      </div>\n      <div class=\"field\">\n        <label class=\"field-name\">電子信箱</label>\n        <input class=\"field-entery\" type=\"text\" placeholder=\"example@example.com\" >\n      </div>\n      <div class=\"field\">\n        <label class=\"field-name\">陳情人</label>\n        <input class=\"field-entery\" type=\"text\" placeholder=\"請輸入姓名\" >\n      </div>\n      <p class=\"field-message\">\n        案件編號錯誤\n      </p>\n      <button type=\"button\" class=\"btn btn-green\" (click)=\"getDetail()\">查詢案件</button>\n    </div>\n  </div>\n</section>\n<div *ngIf=\"showDetail\" >\n  <app-query-detail (closeDetail)=\"closeDetail()\"></app-query-detail>\n</div>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<section class=\"rpdetail main-wrap\">\n  <div class=\"main-content line-box\" *ngIf=\"completeMessg === false\">\n    <div class=\"rpdetail-header\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>陳情案件</h1>\n        <p>Petition Cases</p>\n\n      </header>\n\n      <div class=\"rpdetail-for\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"field\">\n              <label class=\"field-name\">主項目</label>\n              <input class=\"field-entery\" type=\"text\" value=\"公園綠地行道樹維護\" readonly >\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"field\">\n              <label class=\"field-name\">子項目</label>\n              <input class=\"field-entery\" type=\"text\" value=\"公園、綠地、安全島髒亂\" readonly >\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"rpdetail-fieldset pt-20\">\n        <form #reportForm=\"ngForm\">\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <h4 class=\"my-0\">身份</h4>\n            </div>\n            <div class=\"col-md-9\">\n              <ul class=\"form-radio row id-list\">\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"1\" name=\"Identity\" id=\"id1\"> <label class=\"checked\" for=\"id1\">一般市民</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"2\" name=\"Identity\" id=\"id2\"> <label for=\"id2\">議員</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"3\" name=\"Identity\" id=\"id3\"> <label for=\"id3\">里幹事</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"4\" name=\"Identity\" id=\"id4\"> <label for=\"id4\">里長</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"5\" name=\"Identity\" id=\"id5\"> <label for=\"id5\">公務員</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"6\" name=\"Identity\" id=\"id6\"> <label for=\"id6\">學生</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"role\" type=\"radio\" [value]=\"7\" name=\"Identity\" id=\"id7\"> <label for=\"id7\">其他</label></li>\n              </ul>\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <h4 class=\"valid form-common\">陳情區域</h4>\n            </div>\n            <div class=\"col-md-9\">\n              <ul class=\"form-radio row pt-20\">\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"dist\" [value]=\"1\" type=\"radio\" name=\"district\" id=\"dist1\" checked> <label class=\"checked\" for=\"dist1\">東區</label></li>\n                <li class=\"col-md-3 col-sm-4\"><input [(ngModel)]=\"dist\" [value]=\"2\" type=\"radio\" name=\"district\" id=\"dist2\"> <label for=\"dist2\">西區</label></li>\n              </ul>\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <label for=\"addr\"><h4 class=\"invalid\">地點</h4></label>\n            </div>\n            <div class=\"col-md-9\">\n              <input ngModel name=\"addr\" type=\"text\" id=\"addr\" required placeholder=\"請輸入地址\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <label for=\"name\"><h4 class=\"form-title\">姓名</h4></label>\n            </div>\n            <div class=\"col-md-9\">\n              <input ngModel name=\"name\" type=\"text\" id=\"name\" required placeholder=\"請輸入您的大名\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <h4 class=\"form-title\">電話聯絡</h4>\n            </div>\n            <div class=\"col-md-9\">\n              <ul class=\"form-radio pt-20\">\n                <li class=\"col-md-5\"><input [(ngModel)]=\"contact\" [value]=\"0\"  type=\"radio\" name=\"phoneContact\" id=\"pC1\" checked> <label class=\"checked\" for=\"pC1\">可以用電話聯繫我</label></li>\n                <li class=\"col-md-5\"><input [(ngModel)]=\"contact\" [value]=\"1\"  type=\"radio\" name=\"phoneContact\" id=\"pC2\"> <label for=\"pC2\">不要用電話聯繫我</label></li>\n              </ul>\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <label for=\"phone\"><h4 class=\"form-title\">電話</h4></label>\n            </div>\n            <div class=\"col-md-9\">\n              <input ngModel type=\"text\" name=\"phoen\" id=\"phone\" [required]=\"true\" placeholder=\"請輸入電話號碼\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <label for=\"email\"><h4 class=\"form-title\">E-Mail</h4></label>\n            </div>\n            <div class=\"col-md-9\">\n              <input ngModel type=\"text\" name=\"email\" id=\"email\" required placeholder=\"請輸入聯繫用的 Email\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <label for=\"comment\"><h4 class=\"form-title\">陳情內容</h4></label>\n            </div>\n            <div class=\"col-md-9\">\n              <input ngModel type=\"text\" name=\"comment\" id=\"comment\" required placeholder=\"請輸陳情內容\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n              <i class=\"fa fa-check-circle\"></i>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-2\">\n              <h4 class=\"form-title\">附加檔案</h4>\n            </div>\n            <div class=\"col-md-9\">\n              <div class=\"files\">\n              <div class=\"file-upload fa\">檔案上傳</div>\n              </div>\n              <input class=\"hidden\" ngModel name=\"filies\" type=\"file\">\n            </div>\n            <div class=\"col-md-1 hidden-xs\">\n\n            </div>\n          </div>\n\n          <div class=\"row pt-20\">\n            <div class=\"col-md-7 pb-20\">\n              <strong class=\"font-color-brown\"><span class=\"font-bolder font-color-orange\">橘色</span>為必填。</strong>\n            </div>\n            <div class=\"col-md-5 text-right\">\n                <button class=\"btn btn-green\" (click)=\"completeMessg = true\">填寫完成</button>\n            </div>\n          </div>\n\n        </form>\n        <pre>\n          {{ role.type | json }}\n          {{ dist.type | json }}\n          {{ reportForm.value | json }}\n        </pre>\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"line-box line-box-tiny mx-auto\" *ngIf=\"completeMessg === true\">\n    <div>\n      <header class=\"line-box-title deco-triangle\">\n        <h1>申報完成</h1>\n        <p>Success</p>\n      </header>\n      <article class=\"info\">\n        <p class=\"info-content\">\n          我們已收到您對本府的反映案件，為確認您的信箱未遭冒用，我們即將寄出確認信至您所填寫的：kkk@kkk.com 信箱， 請您於收到該確認信後，點選「確認信件」連結，以便完成您的案件反映流程，我們在收到您的確認後，將由系統自動寄出案件編號至您的信箱並立即進行分案處理。 謝謝您！\n        </p>\n      </article>\n\n        <a type=\"button\" class=\"btn btn-green\" routerLink=\"/\">回到首頁</a>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<section class=\"topic\">\n    <div class=\"topic-outer line-box line-triangle-deco\">\n        <div class=\"topic-inner\">\n          <div class=\"clear-fix topic-layout\">\n            <div class=\"topic-layout-left\">\n              <h1 class=\"big-title\">\n                線上陳情系統\n              </h1>\n              <button class=\"btn btn-green hidden-xs\">我要陳情</button>\n            </div>\n            <div class=\"topic-layout-right\">\n              <p class=\"block-sprade bs-brown topic-info-top\">\n                歡迎大家為嘉義市的發展共同努力<span class=\"line-break\"></span>\n                把您所看到的問題，上傳給我們！<br>\n              </p>\n              <p class=\"topic-info-center\">\n                  您可以經由網路留言的方式來表達您的寶貴\n                  建議，也可以經由電洽或傳真方式傳達至本府企劃處。\n              </p>\n              <small class=\"topic-info-bottom\">\n                電話：05-2251999<br>\n                傳真：05-2285949\n              </small>\n              <br>\n              <br>\n              <button class=\"btn btn-green hidden-lg hidden-md hidden-sm\"><span>我要陳情</span></button>\n            </div>\n          </div>\n          <div class=\"topic-words-deco\">CHIAYI . GOV . TW</div>\n        </div>\n    </div>\n</section>\n\n<section class=\"hot\">\n  <div class=\"hot-contain clear-fix\">\n    <div class=\"hot-layout-left\">\n      <h2 class=\"block-sprade bs-green font-bolder\">陳情須知</h2>\n      <p class=\"font-bolder mt-0\">人民陳情案件，有下列情形之一者，承辦單位得依行政程序法第一百七十三條及本府分層負責權限規定，簽准不予處理：</p>\n      <ul class=\"hot-rule\">\n        <li>無具體內容、未具姓名、住址、電子郵件地址者。</li>\n        <li>同一事由經予適當處理並已明確答覆兩次後，而仍一再陳情者。</li>\n        <li>非主管陳情內容之機關，接獲陳情人以同一事由分向各機關陳情者。</li>\n        <li>提醒大家，請勿為私人恩怨報案、或報假案。</li>\n      </ul>\n      <h2 class=\"block-sprade bs-green font-bolder\">緊急事件</h2>\n      <p class=\"font-bolder mt-0\">犯罪事件請撥打 <mark class=\"mark font-lg\">110</mark> <span class=\"line-break-small-device\"></span>火警及救難事件 <mark class=\"mark font-lg\">119</mark></p>\n      <div class=\"hot-deco\"><i class=\"fa fa-chevron-right\"></i></div>\n    </div>\n    <div class=\"hot-layout-right\">\n\n      <ul class=\"hot-list\">\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-1.png\" alt=\"\"> <span>違規停車</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-2.png\" alt=\"\"> <span>違規小廣告</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-3.png\" alt=\"\"> <span>號誌故障</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-4.png\" alt=\"\"> <span>路燈不亮</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-5.png\" alt=\"\"> <span>溝蓋破損</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/report/1/1\"><img src=\"./assets/images/icons/icon-6.png\" alt=\"\"> <span>道路凹陷坑洞</span></a>\n        </li>\n      </ul>\n      <div class=\"hot-shadow\"></div>\n    </div>\n  </div>\n</section>\n\n<section class=\"more\">\n  <div class=\"more-contain\">\n    <h2 class=\"more-title\">更多申報項目</h2>\n    <div class=\"clear-fix\">\n      <ul class=\"more-list hidden-xs hidden-sm\" *ngFor=\"let list of [0,1,2]\" >\n        <template ngFor let-item [ngForOf]=\"caseTypes\" let-i=\"index\">\n          <li class=\"more-item\" *ngIf=\"i%3 == list\">\n            <a href=\"javascript:void(0)\" (click)=\"item.active=!item.active\" [ngClass]=\"{active:item.active}\">\n              <span>{{i+1}}</span> <i class=\"fa fa-angle-double-right\"></i> <span>{{item.ItemName}}</span>\n            </a>\n            <ul class=\"more-subitems active\" [ngClass]=\"{active:item.active}\">\n              <li *ngFor=\"let subItems of item.Subitems\">\n                <a routerLink=\"/report/1/1\" >\n                  <i class=\"fa fa-angle-right\"></i>&nbsp;&nbsp;<span>{{subItems.SubitemName}}</span>\n                </a>\n              </li>\n            </ul>\n          </li>\n        </template>\n      </ul>\n    </div>\n    <ul class=\"more-list visible-xs visible-sm\">\n        <li class=\"more-item\" *ngFor=\"let item of caseTypes; let i = index\">\n          <a href=\"javascript:void(0)\" (click)=\"item.active=!item.active\" [ngClass]=\"{active:item.active}\">\n            <span>{{i+1}}</span> <i class=\"fa fa-angle-double-right\"></i> <span>{{item.ItemName}}</span>\n          </a>\n          <ul class=\"more-subitems active\" [ngClass]=\"{active:item.active}\">\n            <li *ngFor=\"let subItems of item.Subitems\">\n              <a routerLink=\"~/report/1/1\" >\n                <i class=\"fa fa-angle-right\"></i>&nbsp;&nbsp;<span>{{subItems.SubitemName}}</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<section class=\"term main-wrap\" (window:scroll)=\"onScroll($event.target)\">\n  <div class=\"main-content line-box\">\n    <div class=\"term-header\">\n      <header class=\"line-box-title deco-triangle\">\n        <h1>網站規範</h1>\n        <p>Web User Term</p>\n      </header>\n      <div class=\"term-content\">\n        <div class=\"row\">\n          <aside class=\"col-md-4\">\n            <ul class=\"term-nav\" [ngStyle]=\"{'padding-top': getLabelPadding}\">\n              <li><a routerLink=\"/term/privacy\" (click)=\"scrollTo('privacy')\" [ngClass]=\"{'active':whichLable==='privacy'}\">隱私權保護政策</a></li>\n              <li><a routerLink=\"/term/sucrity\" (click)=\"scrollTo('sucrity')\" [ngClass]=\"{'active':whichLable==='sucrity'}\">網站安全政策</a></li>\n              <li><a routerLink=\"/term/copy\" (click)=\"scrollTo('copy')\" [ngClass]=\"{'active':whichLable==='copy'}\">著作權聲明</a></li>\n            </ul>\n          </aside>\n          <div class=\"col-md-8\">\n            <article class=\"info\" id =\"privacy\">\n              <h2 class=\"info-title\">隱私權暨資訊安全保護政策</h2>\n              <p class=\"info-content\">\n                由於網際網路資料的傳輸不能保證百分之百的安全，本網站 努力保護網友的個人資料安全。由於資料傳輸過程牽涉您上網環境保全之良窳，並無法確信或保證網友傳送或接收本網站資料的安全，網友須注意並承擔網路資料傳 輸之風險。 <br>                網友基於個人意願在網站透露的各種個人資料，例如在熱門話題討論區公佈個人資料如電子郵件、姓名等，可能會被他人收集和使用，如果您擔心這些困擾，您可以 不用輸入這些資料。如果您在網路上公佈可被他人讀取的個人資料時，可能會收到其他團體主動提供的廣告或垃圾郵件。請您諒解此部份所造成的後果均非本網站所\n                能控制範圍，也無法負擔任何責任。 <br>\n              </p>\n              <br>\n              <h3 class=\"font-bolder\">適用範圍<br>＿</h3>\n              <p class=\"info-content\">\n                以下的隱私權保護政策，適用於您在嘉義市政府線上陳情服務系統網站以及其延伸服務網站（以 <a href=\"http://www.chiayi.gov.tw/petition/\">http://www.chiayi.gov.tw/petition/</a>                網域為原則，以下均簡稱本網站）活動時，所涉及有關個人資料收集、運用與保護。但不適用 於經由本網站搜尋連結之其他網站，當您在這些網站進行活動時，關於個人資料的保護，則適用各該網站的隱私權保護政策。\n              </p>\n              <br>\n              <h3 class=\"font-bolder\">個人資料收集方式<br>＿</h3>\n              <p class=\"info-content\">\n                本網站依據「嘉義市政府及所屬各機關處理人民陳情案件要點」透過以下幾 種管道收集網友個人資料：<br> 案件反應或查詢： <br> 當您點選本網站中建議(檢舉)類別時，依據「嘉義市政府及所屬各機關處理人民陳情案件要點」會請您提供姓名、電話、電子信箱、性別及住址等個人資訊，限於\n                公務處理使用，若您選擇不提供或提供非正確資料，受理機關有權不予處理，若是您冒名檢舉要自行負擔法律責任，於案件結案時會有滿意度問卷調查，您可依個人 意願與否提供相關意見供研考會彙整參考改進。<br> 一般瀏覽：\n                <br> 本網站會保留網友在上網瀏覽或查詢時，伺服器自行產生的相關記錄(LOG)，包括連線設備IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等。本網 站會對個別連線者的瀏覽器予以標示，歸納使用者瀏覽器在本網站內部所瀏覽的網頁，除非您願意告知您的個人資料，否則本網站不會，也無法將此項記錄和您的個\n                人資料進行對應。 <br> 其他： <br> 除了您主動於網站登錄提供個人資料外，您可能在本網站的討論區等單元，主動提供個人資料如電子郵件，姓名等。這種形式的資料提供，不在本網站隱私權保護政 策的範圍以內。此外，如果您寫信與本網站聯繫或是透過其他管道向我們反應意見，也會保存此項通訊及處理紀錄。<br>\n\n\n              </p>\n              <br>\n              <h3 class=\"font-bolder\">個人 Cookies的運用與政策<br>＿</h3>\n              <p class=\"info-content\">\n                為提供個人化的服務，會使用Cookies技術來儲存及在追蹤網友在某 時段的資料。Cookie是從網站傳送到瀏覽器，並保存在使用者電腦硬碟中的簡短資料。網友可以在Netscape的「功能設定」的「進階」或是IE的 「Internet選項」的「安全性」或Chrome「選項」的「進階」中選擇修改瀏覽器對Cookies的接受程度，包括接受所有Cookies、設定\n                Cookies時得到通知、拒絕所有Cookies等。如果您選擇拒絕所有的Cookies，可能無法使用部份個人化服務或是參與部份的活動。 一般而言，會依據以下目的及情況，在網友瀏覽器中寫入並讀取Cookies︰\n                <br> 為提供更好、更個人化的服務： <br> 方便您參與個人化的互動活動。Cookies 在您註冊或登入時建立，並在您登出時修改。 <br> 為統計瀏覽人數及分析瀏覽模式：\n                <br> 以了解網頁瀏覽的情況，做為改善服務的參考。 <br> 追蹤點選宣導廣告或參加行銷活動情形： <br> 在發送電子報或網站主辦的行銷活動時，有時會寫入Cookies資料以追蹤整個活動過程中，網友的參與程度及相關數據。\n                <br>\n              </p>\n              <br>\n              <h3 class=\"font-bolder\">資料的分享與公開方式<br>＿</h3>\n              <p class=\"info-content\">\n                本網站不會任意出售、交換、或出租任何您的個人資料給其他團體或個人。 只有在以下狀況，本網站會在本政策原則之下與第三者共用您的個人資料︰<br> 本網站有義務保護其網友隱私及個人資料，非經您本人同意不會自行修改、刪除或提供任何（或部份）網友個人資料及檔案。除非經過您事先同意或符合以下情況：\n                <br> （1）中華民國司法檢調單位透過合法程序進行調閱。 <br> （2）違反網站相關規章且已造成脅迫性。 <br> （3）基於主動衍伸政府網站服務效益之考量。 <br> （4）保護其他網友之合法使用權益。\n                <br>\n              </p>\n\n            </article>\n            <br>\n            <br>\n            <article class=\"info\" id=\"sucrity\">\n              <h2 class=\"info-title\">網站安全政策</h2>\n              <br>\n              <h3 class=\"font-bolder\">隱私權暨資訊安全保護政策修訂<br>＿</h3>\n              <p class=\"info-content\">\n                本網站會不定時修訂本項政策，以符合最新之隱私權保護規範。當在使用個 人資料的規定做較大幅度修改時，會在網頁上張貼告示，通知您相關事項。\n              </p>\n              <br>\n              <h3 class=\"font-bolder\">隱私權暨資訊安全保護政策諮詢<br>＿</h3>\n              <p class=\"info-content\">\n                如果您對於本網站的隱私權保護政策或是有個人資料收集、運用、更新等問題， 歡迎來信至意見信箱： <a href=\"mailto:cycg288@ems.chiayi.gov.tw?subject=嘉義市政府線上陳情平台意見反應\">cycg288@ems.chiayi.gov.tw</a>。\n              </p>\n            </article>\n            <br>\n            <br>\n            <article class=\"info\" id=\"copy\">\n              <h2 class=\"info-title\">著作權聲明條款</h2>\n              <br>\n              <p class=\"info-content\">\n                由於網際網路資料的傳輸不能保證百分之百的安全，本網站 努力保護網友的個人資料安全。由於資料傳輸過程牽涉您上網環境保全之良窳，並無法確信或保證網友傳送或接收本網站資料的安全，網友須注意並承擔網路資料傳 輸之風險。 <br>                網友基於個人意願在網站透露的各種個人資料，例如在熱門話題討論區公佈個人資料如電子郵件、姓名等，可能會被他人收集和使用，如果您擔心這些困擾，您可以 不用輸入這些資料。如果您在網路上公佈可被他人讀取的個人資料時，可能會收到其他團體主動提供的廣告或垃圾郵件。請您諒解此部份所造成的後果均非本網站所\n                能控制範圍，也無法負擔任何責任。 <br> 一、 嘉義市政府網站上所刊載之所有內容，除著作權法規定不得為著作權之標的（如法律、命令、公務員 撰擬之講稿、新聞稿等...請參考著作權法第９條規定）外，其他包括文字敘述、攝影、圖片、錄音、影像及其他資訊，均受著作權法保護。<br>                二、 上述不得為著作權標的者，任何人均得自由利用，歡迎各界廣為利用。<br> 三、 本網站資訊內容受著作權法保護者，除有合理使用情形外，應取得該著作財產權人同意或授權後，方得利用。<br> 四、 上述“合理使用情形”，說明如下：<br>\n                <br> * 本網站上所刊載以嘉義市政府暨所屬機關學校名義公開發表之著作，即著作人為嘉義市 政府暨所屬機關學校者，在合理範圍內，得重製、公開播送或公開傳輸，利用時，並請註明出處。<br> * 本網站之資訊，可為個人或家庭非營利之目的而重製。<br>                * 為報導、評論、教學、研究或其他正當目的，在合理範圍內，得引用本網站上之資訊，引用時，並請註明出處。<br> * 其他合理使用情形，請參考著作權法第四十四條至第六十五條之規定。<br>\n              </p>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ })

},[569]);
//# sourceMappingURL=main.bundle.js.map