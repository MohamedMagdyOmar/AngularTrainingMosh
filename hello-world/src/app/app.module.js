"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var Courses_Service_1 = require("./Courses.Service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var course_component_1 = require("./course/course.component");
var favorite_component_1 = require("./Favorite/favorite.component");
var forms_1 = require("@angular/forms");
// 2- second step is to register created component in "module"
// this "decorator function" used to convert a class
// into a "module"
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // in declarations we add all "components" that is related
            // to this "module"
            declarations: [
                app_component_1.AppComponent,
                course_component_1.CourseComponent,
                favorite_component_1.FavoriteComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [Courses_Service_1.CoursesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
