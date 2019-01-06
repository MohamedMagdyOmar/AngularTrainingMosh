"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// 1- First Step Creating a Component
// in order to convert this class to a component
// we need to add some metadata to it for angular to understand.
// in angular we have a "decorator" called "component" that is attached to a class
// to convert this class to a component
var core_1 = require("@angular/core");
// then we need to apply this component to this class
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        this.isActive = false;
        this.title = "List Of Courses";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.colSpan = 2;
    }
    CoursesComponent.prototype.onKeyUp = function () {
        console.log("Enter Is Pressed");
    };
    CoursesComponent.prototype.onDivClick = function () {
        console.log("Div Is  Clicked");
    };
    CoursesComponent.prototype.onClickSave = function ($event) {
        $event.stopPropagation();
        console.log("button is clicked", $event);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            // we add here one or more properties, that describes for angular how this component work
            // with component we can extend HTML vocabulary, so we can define new elements
            // like courses.
            selector: 'courses',
            // html markup we need to render for this component
            template: "\n    <input (keyup.enter) = \"onKeyUp()\" />\n    "
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
// 2- now second step is to register this component in a module.
