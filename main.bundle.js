webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tarea1_tarea1_component__ = __webpack_require__("../../../../../src/app/tarea1/tarea1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tarea2_tarea2_component__ = __webpack_require__("../../../../../src/app/tarea2/tarea2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tarea3_tarea3_component__ = __webpack_require__("../../../../../src/app/tarea3/tarea3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tarea4_tarea4_component__ = __webpack_require__("../../../../../src/app/tarea4/tarea4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tarea5_tarea5_component__ = __webpack_require__("../../../../../src/app/tarea5/tarea5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__exam_exam_component__ = __webpack_require__("../../../../../src/app/exam/exam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tarea1_tarea1_component__["a" /* Tarea1Component */],
            __WEBPACK_IMPORTED_MODULE_8__tarea2_tarea2_component__["a" /* Tarea2Component */],
            __WEBPACK_IMPORTED_MODULE_9__tarea3_tarea3_component__["a" /* Tarea3Component */],
            __WEBPACK_IMPORTED_MODULE_10__tarea4_tarea4_component__["a" /* Tarea4Component */],
            __WEBPACK_IMPORTED_MODULE_11__tarea5_tarea5_component__["a" /* Tarea5Component */],
            __WEBPACK_IMPORTED_MODULE_12__exam_exam_component__["a" /* ExamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarea1_tarea1_component__ = __webpack_require__("../../../../../src/app/tarea1/tarea1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tarea2_tarea2_component__ = __webpack_require__("../../../../../src/app/tarea2/tarea2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarea3_tarea3_component__ = __webpack_require__("../../../../../src/app/tarea3/tarea3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarea4_tarea4_component__ = __webpack_require__("../../../../../src/app/tarea4/tarea4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarea5_tarea5_component__ = __webpack_require__("../../../../../src/app/tarea5/tarea5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exam_exam_component__ = __webpack_require__("../../../../../src/app/exam/exam.component.ts");






var AppRoutes = [
    {
        path: '',
        redirectTo: 'tarea1',
        pathMatch: 'full',
    },
    {
        path: 'tarea1',
        component: __WEBPACK_IMPORTED_MODULE_0__tarea1_tarea1_component__["a" /* Tarea1Component */]
    },
    {
        path: 'tarea2',
        component: __WEBPACK_IMPORTED_MODULE_1__tarea2_tarea2_component__["a" /* Tarea2Component */]
    },
    {
        path: 'tarea3',
        component: __WEBPACK_IMPORTED_MODULE_2__tarea3_tarea3_component__["a" /* Tarea3Component */]
    },
    {
        path: 'tarea4',
        component: __WEBPACK_IMPORTED_MODULE_3__tarea4_tarea4_component__["a" /* Tarea4Component */]
    },
    {
        path: 'tarea5',
        component: __WEBPACK_IMPORTED_MODULE_4__tarea5_tarea5_component__["a" /* Tarea5Component */]
    },
    {
        path: 'exam',
        component: __WEBPACK_IMPORTED_MODULE_5__exam_exam_component__["a" /* ExamComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/exam/exam.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/exam/exam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamComponent = (function () {
    function ExamComponent(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    ExamComponent.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: "La forma política del Estado español es la...",
                options: [
                    {
                        id: "btn-1",
                        answer: "monarquía parlamentaria",
                        correct: true
                    },
                    {
                        id: "btn-2",
                        answer: "república federal",
                        correct: false
                    },
                    {
                        id: "btn-3",
                        answer: "monarquía federal",
                        correct: false
                    }
                ]
            },
            {
                question: "Según la Constitución española, la soberanía nacional reside en el pueblo, del que proceden...",
                options: [
                    {
                        id: "btn-1",
                        answer: "las leyes orgánicas del Estado",
                        correct: false
                    },
                    {
                        id: "btn-2",
                        answer: "los estatutos de autonomía",
                        correct: false
                    },
                    {
                        id: "btn-3",
                        answer: "los poderes del Estado",
                        correct: true
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    ExamComponent.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    ExamComponent.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    ExamComponent.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'exam-cmp',
        template: __webpack_require__("../../../../../src/app/exam/exam.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], ExamComponent);

var _a, _b;
//# sourceMappingURL=exam.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.mapping = {
            "tarea1": "Tarea 1",
            "tarea2": "Tarea 2",
            "tarea3": "Tarea 3",
            "tarea4": "Tarea 4",
            "tarea5": "Tarea 5",
            "exam": "Exam",
        };
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.mapping[titlee];
            }
        }
        return 'Test';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        Options\n    </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\" (click)=\"sidebarToggle()\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'dashboard', title: 'Home', icon: 'ti-direction-alt', class: '' },
    { path: 'tarea1', title: 'Tarea 1', icon: 'ti-pencil-alt2', class: '' },
    { path: 'tarea2', title: 'Tarea 2', icon: 'ti-pencil-alt2', class: '' },
    { path: 'tarea3', title: 'Tarea 3', icon: 'ti-pencil-alt2', class: '' },
    { path: 'tarea4', title: 'Tarea 4', icon: 'ti-pencil-alt2', class: '' },
    { path: 'tarea5', title: 'Tarea 5', icon: 'ti-pencil-alt2', class: '' },
    { path: 'exam', title: 'Examen', icon: 'ti-ruler-alt-2', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.sidebarToggle = function () {
        var toggleButton = document.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        toggleButton.classList.remove('toggled');
        body.classList.remove('nav-open');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/tarea1/tarea1.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/tarea1/tarea1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tarea1Component = (function () {
    function Tarea1Component(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    Tarea1Component.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: 'La forma política del Estado español es la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'monarquía parlamentaria.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'república federal.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'monarquía federal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Según la Constitución española, la soberanía nacional reside en el pueblo, del que proceden...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las leyes orgánicas del Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los estatutos de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los poderes del Estado.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los valores superiores del ordenamiento jurídico de España son: el pluralismo político, la libertad, la igualdad y la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fraternidad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'justicia.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'solidaridad.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución reconoce y garantiza el derecho a la autonomía de las nacionali- dades y regiones que integran España y la ... entre todas ellas.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fraternidad',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'igualdad',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'solidaridad',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Constitución garantiza la libertad religiosa de los individuos y las comunidades, por eso España es un país...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'laico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'católico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'aconfesional.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En la Constitución se establece la separación de los poderes judicial, legislativo y ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'administrativo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ejecutivo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'económico.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El funcionamiento de las instituciones se garantiza por la ... de los poderes ejecu- tivo, legislativo y judicial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'relación',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'separación',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'unión',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución garantiza la seguridad... de los españoles.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'jurídica',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'legislativa',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ejecutiva',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución española fue firmada por el Rey, el presidente de las Cortes, el presidente del Congreso y el presidente del...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Senado.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Estado.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Deben respetar la Constitución y el resto de legislación vigente...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los ciudadanos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los poderes públicos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los poderes públicos y los ciudadanos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El referéndum para la aprobación de la Constitución española se celebró el día...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '22 de noviembre de 1975.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '15 de junio de 1977.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '6 de diciembre de 1978.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los proyectos de reforma constitucional deben ser aprobados por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Congreso.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Senado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las dos Cámaras.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué tribunal interpreta la Constitución con respecto a actuaciones de los pode- res públicos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Constitucional.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Supremo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Tribunal Constitucional es ... de los poderes del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'dependiente',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'independiente',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'subordinado',
                        correct: false
                    }
                ]
            },
            {
                question: 'El jefe del Estado es ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El mando supremo de las Fuerzas Armadas corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Defensa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si el Rey o la Reina de España fuera menor de edad, ¿quién sería el regente hasta su mayoría de edad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El padre o la madre del Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El ministro del Interior.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los embajadores y otros representantes diplomáticos extranjeros son acreditados por ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Convocar elecciones corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro del Interior.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Rey.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La más alta representación del Estado español en las relaciones internacionales corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente de Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El heredero o heredera de la Corona de España, desde su nacimiento, tiene el título de Príncipe o Princesa de ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Aragón.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Asturias.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Rey de España vive en el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El lugar donde se celebran actos de Estado presididos por el Rey es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Generalmente, se considera que el primer rey de España fue...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Fernando el Santo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Carlos I.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Felipe II.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La dinastía del Rey de España, que se inició en el siglo XVIII, es la dinastía...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Austria.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Baviera.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Borbón.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántas franjas tiene la bandera de España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '2 horizontales.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '3 verticales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '3 horizontales.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos colores tiene la bandera española?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '2.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '3.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '4.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los colores de la bandera española son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'blanco y rojo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'rojo y amarillo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'amarillo y blanco.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las comunidades autónomas pueden utilizar, junto con la bandera de España, sus propias banderas en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'sus edificios públicos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'actos oficiales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'sus edificios públicos y actos oficiales.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La bandera azul con 12 estrellas amarillas en círculo es el símbolo de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Unión Europea.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Organización de Se- guridad y Cooperación en Europa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Comisión de Europa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El escudo de España incluye en su interior la representación de la unión de Casti- lla, León, Navarra, Granada y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Aragón.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Asturias.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El bable.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El aragonés.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El euskera.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Todos los españoles tienen el deber de conocer la lengua... del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'autonómica',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'oficial',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'local',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El catalán.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El murciano.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El asturleonés.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El murciano.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El valenciano.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El bable.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El gallego.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El aragonés.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El murciano.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El ... tiene como fin la promoción y la enseñanza del español y las lenguas cooficiales, y también la difusión de la cultura española e hispanoamericana.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Instituto Nacional de Administración Pública',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Instituto Nacional de Estadística',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'lnstituto Cervantes',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Instituto Cervantes, el Instituto Ramon Llull y el Instituto Vasco Etxepare son organismos que promueven, respectivamente y entre otros, la difusión de las lenguas...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'española, catalana y vasca.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'española, catalana y gallega.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'gallega, catalana y vasca.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La sede de la Presidencia del Gobierno y residencia oficial del presidente es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Si en unas elecciones generales ningún candidato a la presidencia del Gobierno consigue la confianza del Congreso, ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Congreso elige al candidato con más votos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Rey convoca nuevas elecciones.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Rey elige al candidato con más votos.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quiénes forman parte del Gobierno?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los concejales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los alcaldes.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El poder ejecutivo corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'a los jueces y magistrados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'al presidente del Gobierno y ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'a los diputados y senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los proyectos de ley son aprobados por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Congreso de los Diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La administración civil de España corresponde al poder...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ejecutivo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'legislativo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'judicial.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La política sanitaria del Gobierno corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ministerio de Sanidad, Servicios Sociales e Igualdad.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Ministerio de Empleo y Seguridad Social.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Ministerio de Asuntos Exteriores y Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El gobierno responde en su gestión política ante...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Senado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Congreso de los Diputados.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El mando superior de las Fuerzas y Cuerpos de Seguridad del Estado corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro de Defensa.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ministro del Interior.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Justicia.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántas veces ha presidido España el Consejo Europeo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Dos veces.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Tres veces.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cuatro veces.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántas veces ha reformado España su Constitución para adaptarse a las deci- siones y directivas europeas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ninguna.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una vez.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Dos veces.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A cuál de estas organizaciones internacionales pertenece España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Al Mercado Común del Sur (MERCOSUR).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A la Organización de las Naciones Unidas (ONU).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A la Unión Económica Euroasiática (UEE).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las Cortes Generales representan al pueblo. Están formadas por el Senado y por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Congreso de los Diputados.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ayuntamiento.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El poder legislativo corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'al presidente y los ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'a los jueces y magistrados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'a los diputados y senadores.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Las Cortes Generales controlan la acción...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de las provincias.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los diputados del Congreso son elegidos para...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El criterio para determinar cuántos diputados corresponden a cada provincia, con excepción de las ciudades autónomas de Ceuta y Melilla, es el número de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ciudades.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'habitantes.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'partidos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las poblaciones de las ciudades autónomas de Ceuta y Melilla están representadas en el Congreso cada una por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 diputado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '2 diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '3 diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Al poder legislativo le corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'crear empleo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'elaborar leyes.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'elegir alcaldes.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tercera autoridad del Estado, tras el Rey y el presidente del Gobierno, es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro del Interior.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'jefe del Estado Mayor del Ejército.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'presidente del Congreso de los Diputados.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos ciudadanos deben respaldar una iniciativa legislativa para poder presentar una proposición de ley?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '400.000.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '500.000.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '600.000.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En primera votación para la elección del presidente del Gobierno, se requiere una mayoría... de los votos de los diputados del Congreso.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'absoluta',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'relativa',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'simple',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los miembros del Senado se eligen cada...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si los presupuestos del Gobierno no se aprueban en el Congreso de los Diputados antes del día 1 de enero del año correspondiente...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'se prorrogan los del año anterior.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'se vuelve a votar la propuesta el día 2 de enero.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'se aprueba la propuesta del Gobierno automáticamente.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las leyes que se refieren a los derechos fundamentales y a las libertades públicas son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'leyes orgánicas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'decretos ley.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'leyes generales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para aprobar, modificar o derogar una ley orgánica, es necesaria en el Congreso una mayoría...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'simple.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'absoluta.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'relativa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El primer periodo ordinario de reunión de las Cámaras es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de agosto a noviembre.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de septiembre a diciembre.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de septiembre a noviembre.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El segundo periodo ordinario de reunión de las Cámaras es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de febrero a junio.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de enero a junio.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de enero a julio.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Cámara de representación territorial se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Congreso de los Diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cámara de Comercio.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Senado.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos senadores se eligen en cada provincia, con excepción de las islas y las ciudades autónomas de Ceuta y Melilla?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las ciudades autónomas de Ceuta y Melilla eligen en las elecciones cada una de ellas a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 senador.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '2 senadores.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '3 senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las sesiones conjuntas del Congreso y el Senado son presididas por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el presidente del Congreso.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El poder judicial está constituido por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los ministros y el presidente',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los jueces y magistrados',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'los diputados y senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es de estos organismos forma parte del poder judicial?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Constitucional.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Supremo.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El órgano con funciones de gobierno del poder judicial es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ministerio de Justicia.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Tribunal Supremo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Consejo General del Poder Judicial.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Consejo General del Poder Judicial...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'es diferente en cada comunidad autónoma.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'está formado por ministros',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'garantiza la independencia de los jueces.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La defensa de la integridad territorial de España corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Policía Nacional y la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las Fuerzas Armadas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional y las policías autonómicas.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Ejército español participa desde 1989 en misiones de paz de la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Organización de Estados Iberoamericanos (OEI).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Unión Europea Occidental (UEO).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Organización de Naciones Unidas (ONU).',
                        correct: true
                    }
                ]
            },
            {
                question: 'La vigilancia de puertos y aeropuertos, fronteras y costas corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El control de la entrada y salida del territorio nacional de españoles y extranjeros corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La regulación del tráfico en las ciudades corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama la policía autonómica de Cataluña?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Ertzaintza.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mossos d’Esquadra.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cómo se llama la la policía autonómica del País Vasco?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ertzaintza.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mossos d’Esquadra.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El supremo órgano consultivo del Gobierno de España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Consejo de Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El órgano consultivo del Gobierno de España en el que están representados em- presarios, sindicatos y organizaciones sociales es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Consejo de Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién puede presentar una queja al Defensor del Pueblo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Solo los ciudadanos legalmente residentes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Solo los españoles mayores de 18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Todos los ciudadanos, españoles o extranjeros.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A quién informa de su gestión el Defensor del Pueblo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Al Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Al presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A las Cortes Generales.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el órgano que controla la gestión económico-financiera del Estado?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Supremo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Constitucional.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La inspección y recaudación de los impuestos que gestiona el Estado corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Agencia Tributaria.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El organismo que elabora y difunde estadísticas sobre España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Instituto Nacional de Estadística.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Agencia Tributaria.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la publicación oficial del Estado que sirve para publicitar leyes, normas o convocatorias públicas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El BOE (Boletín Oficial del Estado).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Gobierno ofrece toda la información sobre novedades e iniciativas de la Administración Electrónica de España a través del...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El BOE (Boletín Oficial del Estado).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: true
                    }
                ]
            },
            {
                question: 'El teléfono de la Administración General del Estado que ofrece información sobre empleo público, becas o ayudas y subvenciones, organismos de las Administraciones, etc., es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '010.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '060.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '091.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Estado español se organiza territorialmente en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'municipios, cantones y regiones administrativas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'municipios, provincias y comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'municipios, distritos y estados federales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las provincias limítrofes con características históricas, culturales y económicas comunes, las islas y las provincias con especial entidad regional histórica fueron la base de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los distritos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los municipios.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'leyes de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'estatutos de autonomía.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'reglamentos de autonomía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La norma institucional fundamental de una comunidad autónoma es ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Constitución española.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el estatuto de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Código Civil.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién es el representante de la Administración del Estado en una comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente de la comunidad autónoma.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El delegado del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El presidente de la Asamblea autonómica.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los fondos públicos en España creados para corregir los desequilibrios económicos de las distintas autonomías son el Fondo Complementario y el Fondo de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Solidaridad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Compensación.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Autonomía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La enseñanza de las lenguas cooficiales es competencia...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'del Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de la comunidad autónoma.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de la provincia.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas ciudades fue capital de España antes del reinado de Felipe II?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Salamanca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas ciudades es capital de España desde el reinado de Felipe II (ex- cepto durante un breve periodo)?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Salamanca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de relaciones internacionales, la competencia es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de nacionalidad, inmigración, emigración, extranjería y derecho de asilo, la competencia exclusiva es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de Sanidad e higiene, la competencia de gestión es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El desarrollo económico de una comunidad autónoma es competencia... de dicha comunidad, de acuerdo con la política económica nacional.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'compartida',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'exclusiva',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'tutelada',
                        correct: false
                    }
                ]
            },
            {
                question: 'El ayuntamiento está formado por el alcalde y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los concejales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quiénes forman parte del órgano ejecutivo de las comunidades autónomas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente y los ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El alcalde y los concejales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El presidente y los consejeros.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el órgano de gobierno en los municipios?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El ayuntamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La diputación.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El cabildo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llaman los órganos de gobierno de las provincias españolas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cabildos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Consejos Insulares.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Diputaciones.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres ciudades españolas está entre las diez más pobladas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Málaga.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Gijón.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles son mayores de edad a los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España la enseñanza básica es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'voluntaria y gratuita.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'obligatoria y gratuita.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'obligatoria y de pago.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles pueden votar a partir de los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ciudadanos de la UE y de algunos países con acuerdos de reciprocidad, residentes en España, pueden votar en las elecciones...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'locales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'autonómicas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'generales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España, los cargos de presidente y vocales de las mesas electorales son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'obligatorios.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'voluntarios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'permanentes.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A quiénes se elige en las elecciones generales?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los senadores y diputados.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los senadores y eurodiputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los concejales y diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El organismo que elabora el censo electoral en España es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'INE (Instituto Nacional de Estadística).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'PAE (Portal de Administración Electrónica).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Pueden ser elegidos para algún cargo político en España los miembros de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Familia Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los partidos políticos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'las Fuerzas y Cuerpos de Seguridad en activo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El registro de Organizaciones No Gubernamentales para Desarrollo (ONGD) está adscrito a la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agencia Española de Cooperación.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Agencia Tributaria.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Agencia Española de Protección de datos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La organización que defiende y promueve los intereses de los trabajadores se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'asociación.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'partido.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'sindicato.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién tiene por finalidad garantizar la transparencia y objetividad de las eleccio- nes en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Administración electoral.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Administración electrónica.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La Administración pública.',
                        correct: false
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    Tarea1Component.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    Tarea1Component.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    Tarea1Component.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return Tarea1Component;
}());
Tarea1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tarea1-cmp',
        template: __webpack_require__("../../../../../src/app/tarea1/tarea1.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], Tarea1Component);

var _a, _b;
//# sourceMappingURL=tarea1.component.js.map

/***/ }),

/***/ "../../../../../src/app/tarea2/tarea2.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/tarea2/tarea2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tarea2Component = (function () {
    function Tarea2Component(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    Tarea2Component.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: 'La mayoría de edad en España es a los 16 años.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los españoles tienen los mismos derechos fundamentales en cualquier parte del territorio del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los extranjeros en España tienen los mismos derechos que los españoles, aunque España no haya firmado tratados específicos al respecto con su país de origen.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los ciudadanos pueden proponer nuevas leyes ante el Defensor del Pueblo.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se puede obligar a alguien a declarar su ideología, religión o creencias.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'En la Constitución no se habla del derecho a comunicar o recibir libremente información veraz por cualquier medio de difusión.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Constitución garantiza el derecho de los españoles a una vivienda digna.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España las fuerzas de seguridad pueden entrar en un domicilio privado sin resolución judicial en cualquier momento.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Se reconoce la autonomía de las universidades en los términos que establezca la ley.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'La enseñanza básica (Primaria y Secundaria, de 6 a 16 años) es obligatoria y gratuita.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los profesores, los padres y los alumnos intervienen en el control y gestión de los centros sostenidos por la Administración con fondos públicos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los profesores universitarios tienen derecho a enseñar con libertad, dentro de los límites de la Constitución.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos tienen obligación de fomentar la educación sanitaria, la educación física y el deporte.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ciudadanos tienen derecho a la producción y creación literaria, artística, científica y técnica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España se regulan mediante ley las causas de separación y disolución matrimonial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Es obligatorio cumplir las sentencias de los jueces y tribunales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Se puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse no constituían delito.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Es obligatorio colaborar en un juicio, cuando así lo piden los jueces y tribunales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las penas de cárcel y las medidas de seguridad están orientadas en España hacia la reeducación y reinserción social.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos los españoles mayores de edad pueden ser elegidos para algún cargo público.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los ciudadanos tienen el derecho a participar en los asuntos públicos, directamente o por medio de representantes, libremente elegidos en las elecciones.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España no está reconocido el derecho de asociación.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'En caso de huelga, la ley no garantiza el mantenimiento de los servicios esenciales de la comunidad.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los trabajadores tienen derecho a la huelga para defender sus intereses laborales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos deben contribuir al sostenimiento de los gastos públicos de acuerdo con su capacidad económica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos deben mantener un régimen público de Seguridad Social para todos los ciudadanos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos pueden promover la participación de la juventud en el desarrollo político, social, económico y cultural, si así lo desean.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los poderes públicos garantizarán la defensa de los consumidores y usuarios, protegiendo la seguridad, la salud y los intereses económicos de los mismos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos pueden planificar y ejecutar los recursos públicos con total libertad y sin ningún tipo de criterio de gestión.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los españoles pueden plantear reclamaciones ante instituciones europeas.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles tienen la obligación de declarar los bienes que posean en el extranjero por un valor inferior a 50.000 euros.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Todos los españoles tienen el derecho y el deber de defender España.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En caso de grave riesgo o catástrofe pública los ciudadanos españoles pueden ayudar si quieren.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    Tarea2Component.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    Tarea2Component.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    Tarea2Component.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return Tarea2Component;
}());
Tarea2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tarea2-cmp',
        template: __webpack_require__("../../../../../src/app/tarea2/tarea2.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], Tarea2Component);

var _a, _b;
//# sourceMappingURL=tarea2.component.js.map

/***/ }),

/***/ "../../../../../src/app/tarea3/tarea3.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/tarea3/tarea3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tarea3Component = (function () {
    function Tarea3Component(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    Tarea3Component.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: '¿De qué comunidad autónoma forman parte Castellón, Valencia y Alicante?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Principado de Asturias.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Comunidad Valenciana.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La capital de la comunidad autónoma de Cantabria es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Oviedo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palma de Mallorca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Santander.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A qué grupo de islas pertenecen Mallorca, Menorca e Ibiza?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Islas Canarias.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Islas Baleares.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Islas Cíes.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué comunidad autónoma se encuentra la ciudad de Pamplona?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Comunidad de Aragón.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Comunidad de Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Comunidad Foral de Navarra.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas provincias no está en la comunidad autónoma de Galicia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A Coruña.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cáceres.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pontevedra.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántas comunidades autónomas hay en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '7.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '17.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '27.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿De qué comunidad autónoma es capital Sevilla?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Extremadura.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Galicia.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Barcelona es la capital de la comunidad autónoma de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Comunidad Valenciana.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cataluña.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cantabria.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La capital de la comunidad autónoma de Extremadura es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Badajoz.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cáceres.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mérida.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Las instituciones de la comunidad autónoma de... tienen su sede en Valladolid.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Canarias',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Castilla y León',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Castilla-La Mancha',
                        correct: false
                    }
                ]
            },
            {
                question: 'Huesca, Teruel y Zaragoza forman parte de la comunidad autónoma de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cataluña.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'País Vasco.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Aragón.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué comunidad autónoma se encuentra la ciudad de Logroño?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Rioja.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Castilla y León.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'País Vasco.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la sede de las instituciones de la comunidad autónoma del País Vasco?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Bilbao.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Vitoria-Gasteiz.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'San Sebastián.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La sede de las instituciones/capital de Castilla-La Mancha está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ciudad Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Toledo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Guadalajara.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En la costa norte de África se encuentran las ciudades autónomas de Ceuta y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Almería.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Melilla.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cádiz.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En el estrecho de Gibraltar se unen el océano Atlántico y el mar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantábrico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Menor.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mediterráneo.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Principado de Asturias limita al norte con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el océano Atlántico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el mar Mediterráneo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el mar Cantábrico.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Región de Murcia limita al este con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el mar Mediterráneo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el océano Atlántico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el mar Cantábrico.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En el centro de la península ibérica, los inviernos son fríos, los veranos calurosos y llueve poco. Este clima es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'continental.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'oceánico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'subtropical.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El clima de Canarias se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'mediterráneo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'oceánico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'subtropical.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El principal río que desemboca en el mar Mediterráneo es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ebro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Duero.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Tajo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántos parques nacionales hay en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '10.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '12.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: ') 15.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La extensa llanura situada en la zona central de España se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'península.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'meseta.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'sierra.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué sistema montañoso separa España de Francia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Picos de Europa.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Pirineos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Sierra de Gredos.',
                        correct: false
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    Tarea3Component.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    Tarea3Component.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    Tarea3Component.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return Tarea3Component;
}());
Tarea3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tarea3-cmp',
        template: __webpack_require__("../../../../../src/app/tarea3/tarea3.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], Tarea3Component);

var _a, _b;
//# sourceMappingURL=tarea3.component.js.map

/***/ }),

/***/ "../../../../../src/app/tarea4/tarea4.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/tarea4/tarea4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tarea4Component = (function () {
    function Tarea4Component(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    Tarea4Component.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: 'Los personajes principales de la novela el Quijote son Don Quijote y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Don Juan.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Sancho Panza.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Cid.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Miguel Hernández era un famoso... español nacido en Orihuela.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'cantante',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'actor',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'poeta',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres obras literarias es de Federico García Lorca?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Quijote.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Cantar de Mio Cid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La casa de Bernarda Alba.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la profesión de Enrique Iglesias?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantante.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guitarrista.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Actor.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Uno de los compositores españoles de música clásica más famosos es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Plácido Domingo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Josep Carreras.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Manuel de Falla.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la profesión de Penélope Cruz?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantante.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guitarrista.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Actriz.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Ballet Nacional de España realiza...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'danza clásica.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'danza contemporánea.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'distintos estilos de danza.',
                        correct: true
                    }
                ]
            },
            {
                question: '... es una famosa figura del pensamiento español.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Montserrat Caballé',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'María Zambrano',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Margarita Salas',
                        correct: false
                    }
                ]
            },
            {
                question: '... es responsable de los bienes del Estado que pertenecían a la Corona española.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Patrimonio Nacional',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Patrimonio Real',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Patrimonio Universal',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué ciudad de España se encuentra una famosa mezquita, patrimonio de la Humanidad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Santiago de Compostela.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Córdoba.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué ciudad de España se encuentra La Alhambra, que es patrimonio de la Humanidad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Sevilla.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Córdoba.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Granada.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué ciudad se encuentra el monumento La Sagrada Familia de Gaudí?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En Barcelona.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En Granada.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En Madrid.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Francisco de Goya era un famoso... español.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pintor',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'músico',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'escritor',
                        correct: false
                    }
                ]
            },
            {
                question: 'Salvador Dalí era...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'escritor.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'director de cine.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintor.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Joaquín Sorolla es un famoso... nacido en Valencia.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'escritor',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'futbolista',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintor',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estos museos está en Bilbao?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Museo Nacional Centro de Arte Reina Sofía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'b) El Museo Thyssen-Bornemisza.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Museo Guggenheim.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué es el Camino de Santiago?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Una obra de teatro.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una ciudad de Galicia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una ruta de peregrinación.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué año conquistaron Granada los Reyes Católicos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En 1452.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En 1472.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En 1492.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La guerra de la independencia en España transcurrió entre los años...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1701 - 1715.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '1808 - 1814.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '1936 - 1939.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué fecha entró en vigor el Tratado de adhesión por el que España se integró',
                options: [
                    {
                        id: 'btn-1',
                        answer: '26 de julio de 1977.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El 12 de junio de 1985.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El 1 de enero de 1986.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El rey de España que gobernó la mayor extensión conocida de territorios en el mundo fue...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Felipe II.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Felipe III.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Felipe IV.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién fue nombrado primer presidente de Gobierno después de la aprobación de la Constitución española de 1978?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Felipe González.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Adolfo Suárez.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Leopoldo Calvo Sotelo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Desde 1975 y hasta junio de 2014, el rey de España era...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Juan Carlos I.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Felipe VI.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Alfonso XIII.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Lentejas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Uvas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Aceitunas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué ciudad es famosa por sus Fallas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Pontevedra.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Segovia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Valencia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la fiesta más famosa en Cádiz y Canarias?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El carnaval.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Semana Santa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los sanfermines.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué ciudad es famosa por su Feria de Abril?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Sevilla.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Segovia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Salamanca.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué tres culturas convivieron en la España medieval?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La cristiana, la judía y la musulmana.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La fenicia, la judía y la musulmana.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La griega, la cristiana y la judía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El 6 de diciembre se celebra en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Día de la Constitución.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la llegada de Colón a América.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Día del Libro.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Juan Ramón Jiménez recibió en 1956 el Premio Nobel de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Medicina.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Física.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Literatura.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién recibió el Premio Nobel de Fisiología y Medicina en 1959?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Santiago Ramón y Cajal.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Juan Ramón Jiménez.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Severo Ochoa.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Cervantes es un premio que se concede a... de España e Hispanoamérica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'actores',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'escritores',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintores',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los Premios Goya están relacionados con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el cine.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la literatura.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la pintura.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué premios promueven en España los valores científicos, culturales y humanísticos que son patrimonio universal?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los Premios Cervantes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los Premios Princesa de Asturias.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los Premios Goya.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se desarrolla el Festival Internacional de Teatro Clásico de Mérida?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En el Teatro romano.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En la Ciudad deportiva.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En el Museo Nacional de Arte Romano.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estos deportes tiene una competición denominada «La Vuelta»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El ciclismo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El fútbol.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El tenis.',
                        correct: false
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    Tarea4Component.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    Tarea4Component.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    Tarea4Component.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return Tarea4Component;
}());
Tarea4Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tarea4-cmp',
        template: __webpack_require__("../../../../../src/app/tarea4/tarea4.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], Tarea4Component);

var _a, _b;
//# sourceMappingURL=tarea4.component.js.map

/***/ }),

/***/ "../../../../../src/app/tarea5/tarea5.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h5 class=\"title\">{{currentQuestion.question}}</h5>\n                    </div>\n                    <div *ngFor=\"let option of currentQuestion.options\">\n                        <div class=\"content\">\n                            <button class=\"btn btn-default\" [ngClass]=\"option.id\" data-toggle=\"button\">{{option.answer}}</button>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"btn btn-warning\" (click)=\"okClick()\">OK</button>\n                <button class=\"btn btn-warning\" (click)=\"nextClick()\">Siguiente</button>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/tarea5/tarea5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarea5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tarea5Component = (function () {
    function Tarea5Component(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.nativeElement = element.nativeElement;
    }
    Tarea5Component.prototype.ngOnInit = function () {
        var q = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        this.questions = [
            {
                question: '¿Qué cuerpo de seguridad gestiona la expedición del DNI?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Policía Nacional.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La Policía Local.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los trámites relativos al permiso de conducir se realizan en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las comisarías de policía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las delegaciones de Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las jefaturas de tráfico.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A qué edad es obligatorio tener el DNI?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los 14 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los 18 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué edad se puede sacar el carné de conducir en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los 18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los 21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para solicitar el pasaporte hay que presentar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fotografía reciente y partida de nacimiento.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'DNI y partida de nacimiento.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'DNI y fotografía reciente.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El DNI o NIE, una fotografía reciente y un informe de aptitud psicológica son necesarios para solicitar el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'carné de conducir.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'pasaporte.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'número de identificación fiscal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tramitación del libro de familia se realiza en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Registro Civil.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Seguridad Social.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las comisarías de policía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La solicitud de nacionalidad debe presentarse en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Ministerio de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'una oficina del Registro Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Ministerio de Justicia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Para qué gestión es necesario cumplir el siguiente requisito: «Haber residido en España durante 10 años de forma legal, continuada e inmediatamente anterior a la solicitud»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Para solicitar la nacionalidad española.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Para solicitar una beca de estudios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Para solicitar la ayuda por desempleo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué país puede viajar con su DNI en vigor?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A Alemania.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A Ecuador.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A Marruecos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La certificación de nacimiento o nacionalidad, una fotografía reciente y el certificado de empadronamiento son necesarios para solicitar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el carné de conducir.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el DNI.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la tarjeta sanitaria.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El certificado de empadronamiento se solicita en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la oficina de Registro Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el ayuntamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la asociación de vecinos.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama la revisión que deben pasar obligatoriamente los coches?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IBI (Impuesto sobre Bienes Inmuebles).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ITV (Inspección Técnica de Vehículos).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'ITE (Inspección Técnica de edificios).',
                        correct: false
                    }
                ]
            },
            {
                question: 'El IVTM (Impuesto de Vehículos de Tracción Mecánica) es el impuesto que pagan...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los propietarios de coches aptos para la circulación.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las personas que obtienen el permiso de conducir.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los viajeros que utilizan el transporte urbano.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se denomina la unión jurídica de dos personas que crea un vínculo conyugal mediante ciertos ritos o formalidades legales, con obligaciones y derechos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Pareja de hecho.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Matrimonio.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pareja formal.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las siguientes familias es una familia numerosa en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Una pareja con 1 hijo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una pareja con 2 hijos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una pareja con 3 hijos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La baja por maternidad en España, de carácter general por un solo hijo, puede ser de hasta...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '10 semanas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '16 semanas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '20 semanas.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España, los matrimonios con hijos que se divorcian pueden tener su custodia...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'compartida.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'dividida.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'exclusiva.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ... de una vivienda pagan anualmente el Impuesto sobre Bienes Inmuebles (IBI).',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'inquilinos',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'propietarios',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'inquilinos y propietarios',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A cuál de estas tres acciones no tiene derecho el inquilino de una vivienda en alquiler?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Tener un recibo del alquiler del mes y de todos los gastos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Hacer los cambios y obras que quiera en la casa.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Recuperar la fianza al final del contrato de alquiler.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas acciones no debe hacer el inquilino de una vivienda de alquiler?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Usar la vivienda para actividades comerciales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cuidar la vivienda y pagar los daños que haga.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pagar los gastos de agua, luz y gas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las siguientes conductas no es adecuada ni responsable en una comunidad de vecinos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Reducir el nivel de ruido entre las 22:00 y las 8:00 h.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Depositar la basura en bolsas bien cerradas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Lavar coches y motos en el garaje.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En España, los propietarios de los perros deben identificarlos con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'un collar.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'un microchip.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'una cadena.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En un menú, una tarta de almendra es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'primer plato.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'segundo plato.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'postre.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Rioja es una región famosa por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el cava.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la sidra.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el vino.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué comida típica española tiene como principal ingrediente el tomate?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La paella.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El gazpacho.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el cocido.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El turrón y el mazapán son dulces típicos de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Navidad.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Semana Santa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'San Juan.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El menú de tres platos que ofrecen los restaurantes de lunes a viernes al mediodía por un precio especial se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'menú especial.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'menú del día.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'menú infantil.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La moneda de curso legal en España es, desde el año 2002, ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la peseta.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el peso.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el euro.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El organismo que protege a los consumidores y usuarios es la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agencia Española de Protección de Datos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Agencia Española de Consumo, Seguridad Alimentaria y Nutrición.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Agencia Española de Medicamentos y Productos Sanitarios.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se denomina la resolución de la Dirección Nacional de Empleo por la que se fijan anualmente las fiestas laborables para cada año?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Calendario fiscal.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Calendario laboral.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Calendario español.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El horario de Canarias, con respecto a la Península, tiene...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'dos horas menos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'una hora menos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'una hora más.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España hay 14 días festivos al año, nacionales, autonómicos y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'regionales.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'provinciales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'locales.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En España, en general, los bancos tienen un horario de atención al público de lunes a viernes...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de 8:30 a 14:00 h, sin pausa.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de 8:30 a 17:00 h, sin pausa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de 8:30 a 19:00 h, con pausa.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas etapas educativas no es obligatoria en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Infantil (hasta los 6 años).',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Primaria (entre 6 y 12 años).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Secundaria ESO (entre 12 y 16 años).',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España hay pruebas especiales para el acceso de los adultos a la universidad a partir de los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '23 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '25 años.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La ESO (Enseñanza Secundaria Obligatoria) es la enseñanza a alumnos...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de 6 a 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de 12 a 16 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de 14 a 16 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Bachillerato en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'es obligatorio.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'se compone de dos cursos académicos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'es la enseñanza a alumnos de 14 a 16 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para hacer Formación Profesional Básica es necesario...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'haber cumplido 15 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'haber completado el Bachillerato.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'haber pasado un año en el extranjero.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para hacer Formación Profesional de Grado Medio se necesita...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'haber completado el Bachillerato.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'tener el título de Educación Secundaria Obligatoria (ESO).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'tener más de 18 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los colegios públicos...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pueden decidir su número de plazas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'pueden contratar los profesores que quieran.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'están financiados por el Gobierno.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Además de los padres y profesores, ¿quiénes intervienen en el control y gestión de los centros educativos sostenidos por la Administración?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los alumnos del centro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los inspectores de Educación.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los concejales del municipio.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Un colegio concertado es un colegio privado que...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'recibe subvenciones del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'financian los padres de los alumnos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'recibe dinero de los bancos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las EEOOII (Escuelas Oficiales de Idiomas)...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pertenecen a las universidades.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'hacen exámenes en junio y en septiembre.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'solo admiten alumnos adultos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las bibliotecas públicas son gratuitas para...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'todos.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los parados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los niños.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se puede encontrar un servicio de préstamo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En un supermercado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En una biblioteca.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un taller de coches.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde no está permitido hacer fotos ni filmaciones de vídeo generalmente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En un museo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En un supermercado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un restaurante.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se puede encontrar el siguiente aviso: «La entrada incluye el acceso a la colección y a las exposiciones temporales coetáneas el día de la visita»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En unos grandes almacenes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En un museo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un banco.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el establecimiento, con un horario establecido, en el que se pres-',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Hospital.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Centro de salud.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Farmacia.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tarjeta sanitaria europea permite acceder gratuitamente a la sanidad pública durante...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '6 meses.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '12 meses.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '2 años.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La documentación necesaria para cambiar de centro médico es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'DNI, Tarjeta Sanitaria anterior y el certificado de empadronamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'DNI, historial médico y una carta de su médico anterior.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'DNI, Tarjeta Sanitaria anterior e historial médico.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el número de teléfono único de asistencia al ciudadano ante cualquier emergencia en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '060.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '112.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '911.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los viajes de vacaciones para las personas mayores de 65 años los organiza...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el IEF (Instituto de Estudios Fiscales).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el IMSERSO (Instituto de Mayores y Servicios Sociales).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ICO (Instituto de Crédito Oficial).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Una persona que tiene a su cargo hijos menores de 18 años o hijos mayores de edad discapacitados, puede recibir una...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pensión de viudedad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'prestación por desempleo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ayuda familiar.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el tiempo mínimo de cotización que da derecho a una pensión de jubilación?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '15 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '20 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '25 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La organización que trabaja para conseguir la integración de las personas con discapacidad visual es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la ONCE.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el CERMI.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cáritas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de los siguientes no es un medio público de comunicación audiovisual?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Televisión Española.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Instituto de la Cinematografía y de las Artes Audiovisuales.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Radio Nacional de España.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el canal de televisión estatal que transmite noticias de actualidad nacionales e internacionales continuamente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Teledeporte.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'La 1.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Canal 24 horas.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cómo se llama el informativo de la televisión pública Televisión Española que se ofrece en directo a las 15:00 y a las 21:00 horas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Noticiario.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Telenoticias.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Telediario.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Al comprar un producto nuevo, ¿cuánto tiempo dura la garantía normalmente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 año.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '2 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '3 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las tres opciones no es correcta?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Un litro de leche.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Un kilo de patatas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una docena de pan.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Si compramos 250 gramos de queso, estamos comprando... de queso.',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1/2 kilo',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '1/4 de kilo',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '1/3 kilo',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si compramos una botella de agua de 750 ml, estamos comprando una botella de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3/4 de litro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '1/2 litro.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '1 litro.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el establecimiento donde se pueden comprar medicinas con precios regulados, con un horario establecido mínimo y servicios de guardia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Hospital.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Centro de salud.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Farmacia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres recomendaciones podemos encontrar en un parque?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Respete las plantas y el mobiliario urbano.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Es conveniente abonar el billete con el importe exacto.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mantenga la distancia de seguridad con el vehículo precedente.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Uno de los principales puertos de España en transporte de viajeros es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Gran Canaria.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Alicante.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Algeciras.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El aeropuerto Adolfo Suárez está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Barcelona.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Bilbao.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En un coche es obligatorio el uso del cinturón de seguridad...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'solo en el asiento del conductor.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'en los asientos delanteros.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'en todos los asientos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El límite de velocidad para los coches dentro de las ciudades es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '40 km/h.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '50 km/h.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '60 km/h.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La estación de trenes de Atocha está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Barcelona.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Bilbao.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los taxis en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'son todos de color rojo',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'se pueden compartir entre varios clientes.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'llevan una luz verde cuando están libres.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El acrónimo RENFE corresponde a:',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Red Nacional de Fondos Europeos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Red Nacional de los Ferrocarriles Españoles.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Red Nacional de Fundaciones Estatales.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué usuarios de transporte se refiere este aviso: «El Abono Normal finalizará su validez al cumplir el cliente los 65 años. A partir de esta fecha podrá cargar el Abono Tercera Edad»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A parados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A jubilados.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A niños.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la edad mínima para trabajar en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el sector de mayor peso en la economía española?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agricultura.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Servicios.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Construcción.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estos productos exporta España a otros países en grandes cantidades?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Frutas y legumbres.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Café.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Gas natural.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La norma principal que regula los derechos de los trabajadores en España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Constitución.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Estatuto de los Trabajadores.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Servicio Público de Empleo Estatal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Un acuerdo firmado entre la empresa y los representantes de los trabajadores (sindicatos) es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'un convenio colectivo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'un código laboral.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'un finiquito.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién tiene derecho a afiliarse a un sindicato?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los trabajadores autónomos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los funcionarios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Todos los trabajadores.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué es un Parador de Turismo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Un albergue situado en el Camino de Santiago.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Un circuito turístico con varias paradas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Un hotel con ubicación de interés histórico o cultural.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La jornada laboral que tiene una interrupción para comer se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'jornada continua.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'jornada partida.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'jornada ordinaria.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el documento oficial que recoge las fechas de todos los contratos de trabajo de una persona?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Informe de Vida Laboral.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Recibo de finiquito.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Certificado de profesionalidad.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué impuesto pagan los residentes en España en función de la renta o el dinero ganado (salario, ingresos como autónomo, etc.)?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IRPF (Impuesto sobre la Renta de las Personas Físicas).',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'IVA (Impuesto sobre el Valor Añadido).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'IS (Impuesto sobre Sociedades).',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el impuesto que pagan al Estado todos los consumidores al comprar productos y bienes o contratar servicios?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IRPF (Impuesto sobre la Renta de las Personas Físicas).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'IVA (Impuesto sobre el Valor Añadido).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'IS (Impuesto sobre Sociedades).',
                        correct: false
                    }
                ]
            }
        ];
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    };
    Tarea5Component.prototype.okClick = function () {
        var q = this.element.nativeElement;
        this.currentQuestion.options.map(function (option) {
            if (option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
            else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                if (optionButton.classList.contains('active')) {
                    console.log("in 2");
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
            }
        });
    };
    Tarea5Component.prototype.nextClick = function () {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex >= this.questions.length) {
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    };
    Tarea5Component.prototype.shuffle = function () {
        var currentIndex = this.questions.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.questions[currentIndex];
            this.questions[currentIndex] = this.questions[randomIndex];
            this.questions[randomIndex] = temporaryValue;
        }
    };
    return Tarea5Component;
}());
Tarea5Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tarea5-cmp',
        template: __webpack_require__("../../../../../src/app/tarea5/tarea5.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], Tarea5Component);

var _a, _b;
//# sourceMappingURL=tarea5.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map