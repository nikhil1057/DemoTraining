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
exports.HollywoodMovie = exports.Movie = void 0;
var num1 = 100; //js
var num2 = 200; //es
var num3 = 300; //ts
var num4 = 400; //ts
var sum = function (salt) {
    return (num1 + num2 + num3 + num4) * salt;
};
console.log(sum(2.5));
var Movie = /** @class */ (function () {
    function Movie(pMovieName) {
        if (pMovieName === void 0) { pMovieName = ''; }
        var others = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            others[_i - 1] = arguments[_i];
        }
        this.movieName = '';
        this.rating = 0;
        this.isReleased = false;
        this.expenses = 0;
        this.rights = undefined;
    }
    Movie.shoot = function (type) {
        console.log("Movie shooting in progress: ".concat(type));
    };
    Movie.prototype.Release = function () {
        this.isReleased = true;
    };
    Movie.prototype.applyFunding = function (budget) {
        return budget * 100;
    };
    Movie.prototype.printAllDetails = function (budget) {
        this.Release();
        var release = this.isReleased;
        var total = this.applyFunding(budget);
        console.log("Movie release is done: ".concat(this.isReleased, ", the budget is: ").concat(total));
    };
    return Movie;
}());
exports.Movie = Movie;
var HollywoodMovie = /** @class */ (function (_super) {
    __extends(HollywoodMovie, _super);
    function HollywoodMovie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Vfx = [];
        _this.Theaters = ['PVR', 'Adlabs'];
        _this.Ott = ['Netflix', 'AmazonPrime', 'DisneyHotstar'];
        return _this;
    }
    HollywoodMovie.prototype.ReleaseToTheateres = function () {
        this.Release(); //protected method of base class accessible ONLY INSIDE derived class
        this.Theaters.map(function (t) { return console.log(t); });
    };
    HollywoodMovie.prototype.RelaseToOTT = function () {
        this.Release();
        this.Ott.map(function (t) { return console.log(t); });
    };
    return HollywoodMovie;
}(Movie));
exports.HollywoodMovie = HollywoodMovie;
var Kantara = new Movie();
Kantara.printAllDetails(2000);
Movie.shoot('outDoor');
HollywoodMovie.shoot('Space');
var Avengers = new HollywoodMovie();
Avengers.RelaseToOTT();
Avengers.ReleaseToTheateres();
var slumdog = new HollywoodMovie();
slumdog.isReleased = true;
slumdog.printAllDetails(100);
var hollywoodPart = slumdog;
hollywoodPart.RelaseToOTT();
hollywoodPart.ReleaseToTheateres();
hollywoodPart.Vfx = ['Rigging', 'Furring'];
