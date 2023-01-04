"use strict";
exports.__esModule = true;
exports.Bag = void 0;
var Polymorphism_1 = require("./Polymorphism");
var Bag = /** @class */ (function () {
    function Bag() {
        this.list = [];
    }
    Bag.prototype.Add = function (item) {
        this.list.push(item);
    };
    Bag.prototype.GetAll = function () {
        return this.list;
    };
    return Bag;
}());
exports.Bag = Bag;
//create bags
var stringBag = new Bag();
stringBag.Add('New string');
stringBag.Add('Sling Bag');
stringBag.GetAll().map(function (item) { return console.log(item); });
var shapeBag = new Bag();
shapeBag.Add(new Polymorphism_1.Circle(20));
shapeBag.Add(new Polymorphism_1.Square(5));
shapeBag.GetAll().map(function (item) { return item.draw(); });
