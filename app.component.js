"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.classesToApply = 'styleClass sizeClass';
        this.applyBoldClass = false;
        this.applyStyleClass = true;
        this.pageHeader = 'Employee Details';
        this.imagePath = 'image/stucornerlogo.png';
        this.isDisabled = false;
        this.badHtml = 'Hello <script> alert("Hacked");</script> World';
        this.firstName = 'Tom';
        this.lastName = 'Jerry';
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            styleClass: this.applyStyleClass
        };
        return classes;
    };
    AppComponent.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>\n                    <button style=\"color:green\">Green Button</button>\n                    <br><br>\n                    <button class=\"colorClass\" [class]='classesToApply'> My Button </button>\n                    <br><br>\n                    <button class=\"colorClass styleClass sizeClass boldClass\"> New Button </button>\n                    <br><br>\n                    <button class=\"colorClass\" [ngClass]='addClasses()'> New Button </button>\n                    <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>\n                    <h1>{{'Full Name = '+fullName()}}</h1>\n                    <img src='https://www.stucorner.com/{{imagePath}}'/>\n                    <my-employee></my-employee>\n                    <button [disabled] = 'isDisabled'> Click Me!</button>\n                    <span bind-innerHTML= 'pageHeader'></span>\n                    <div [innerHTML]='badHtml'></div>\n                </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map