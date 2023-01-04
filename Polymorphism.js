"use strict";
//Polymorphism
// overloading = Compile-time polymorphism
// overriding = Runtime polymorphism
// IFF = base-derived relation
//  i. virtual:: giving permission to Allow overriding
//  ii. abstract:: Incomplete implementation MUST override in derived
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
exports.Square = exports.Circle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.DisplayDetails = function () {
        console.log('Nothing to display');
    };
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(rad) {
        var _this = _super.call(this) || this;
        _this.radius = 0;
        _this.radius = rad;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Circle drawn with radius ".concat(this.radius, " and having area: ").concat(this.radius * this.radius));
    };
    Circle.prototype.DisplayDetails = function () {
        console.log('this is a circle');
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(rad) {
        var _this = _super.call(this) || this;
        _this.side = 0;
        _this.side = rad;
        return _this;
    }
    Square.prototype.draw = function () {
        console.log("Square drawn with side ".concat(this.side, " and having area: ").concat(this.side * this.side));
    };
    Square.prototype.DisplayDetails = function () {
        console.log('this is a square');
    };
    return Square;
}(Shape));
exports.Square = Square;
var shape;
var sh = 'Circle';
if (sh === 'Circle') {
    shape = new Circle(10);
    shape.radius = 10;
}
else {
    shape = new Square(1);
    shape.side = 10;
}
shape.draw();
shape.DisplayDetails();
