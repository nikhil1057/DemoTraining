"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SapiensEmp = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this.pName = '';
    }
    return Person;
}());
exports.Person = Person;
var SapiensEmp = /** @class */ (function (_super) {
    __extends(SapiensEmp, _super);
    function SapiensEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SapiensEmp.prototype.nonDisclosure = function () {
        return ['Must not disclose comapny IP', 'Must not disclose Passwords'];
    };
    SapiensEmp.prototype.workHoursClause = function () {
        return '5 paid leaves per quarter of current FY';
    };
    SapiensEmp.prototype.paidLeavesClause = function () {
        return "8 hours/day for 5 days a week";
    };
    return SapiensEmp;
}(Person));
exports.SapiensEmp = SapiensEmp;
var Nikhil = new SapiensEmp();
var nonDisclosure = Nikhil.nonDisclosure();
var workHours = Nikhil.workHoursClause();
var paidLeaves = Nikhil.paidLeavesClause();
console.log(nonDisclosure);
console.log(workHours);
console.log(paidLeaves);
