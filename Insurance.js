"use strict";
exports.__esModule = true;
exports.TermInsurance = exports.HealthInsurance = exports.LifeInsurance = exports.Covid_cover = exports.Disablity_cover = exports.Life_cover = exports.Accidenatal_cover = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(pName, pAge) {
        if (pName === void 0) { pName = 'defaultName'; }
        if (pAge === void 0) { pAge = 0; }
        this.name = pName;
        this.age = pAge;
    }
    return Person;
}());
exports.Person = Person;
var Accidenatal_cover = /** @class */ (function () {
    function Accidenatal_cover() {
        this.factor = 10;
    }
    Accidenatal_cover.prototype.calculatePremium = function (age) {
        return age * this.factor;
    };
    return Accidenatal_cover;
}());
exports.Accidenatal_cover = Accidenatal_cover;
var Life_cover = /** @class */ (function () {
    function Life_cover() {
        this.factor = 20;
    }
    Life_cover.prototype.calculatePremium = function (age) {
        return age * this.factor;
    };
    return Life_cover;
}());
exports.Life_cover = Life_cover;
var Disablity_cover = /** @class */ (function () {
    function Disablity_cover() {
        this.factor = 15;
    }
    Disablity_cover.prototype.calculatePremium = function (age) {
        return age * this.factor;
    };
    return Disablity_cover;
}());
exports.Disablity_cover = Disablity_cover;
var Covid_cover = /** @class */ (function () {
    function Covid_cover() {
        this.factor = 8;
    }
    Covid_cover.prototype.calculatePremium = function (age) {
        return age * this.factor;
    };
    return Covid_cover;
}());
exports.Covid_cover = Covid_cover;
var LifeInsurance = /** @class */ (function () {
    function LifeInsurance() {
        this.life_cover = new Life_cover();
        this.accidental_cover = new Accidenatal_cover();
        this.covid_cover = new Covid_cover();
    }
    LifeInsurance.prototype.Purchase = function (person) {
        console.log("Hi ".concat(person.name, " You have purchased Life Insurance"));
    };
    LifeInsurance.prototype.getQuote = function (person) {
        this.person = person;
        console.log("The total Premium for Life Insurance for you is : ".concat(this.calculateTotalPremium(this.person.age)));
    };
    LifeInsurance.prototype.showAllCovers = function () {
        console.log('Life cover');
        console.log('Accidenatal cover');
        console.log('Covid cover');
    };
    LifeInsurance.prototype.calculateTotalPremium = function (age) {
        return this.life_cover.calculatePremium(age) + this.accidental_cover.calculatePremium(age)
            + this.covid_cover.calculatePremium(age);
    };
    return LifeInsurance;
}());
exports.LifeInsurance = LifeInsurance;
var HealthInsurance = /** @class */ (function () {
    function HealthInsurance() {
        this.accidental_cover = new Accidenatal_cover();
        this.covid_cover = new Covid_cover();
        this.disability_cover = new Disablity_cover();
    }
    HealthInsurance.prototype.Purchase = function (person) {
        console.log("Hi ".concat(person.name, " You have purchased Health Insurance"));
    };
    HealthInsurance.prototype.getQuote = function (person) {
        this.person = person;
        console.log("The total Premium for Health Insurance for you is : ".concat(this.calculateTotalPremium(this.person.age)));
    };
    HealthInsurance.prototype.showAllCovers = function () {
        console.log('Accidenatal cover');
        console.log('Disablity cover');
        console.log('Covid cover');
    };
    HealthInsurance.prototype.calculateTotalPremium = function (age) {
        return this.accidental_cover.calculatePremium(age) + this.disability_cover.calculatePremium(age)
            + this.covid_cover.calculatePremium(age);
    };
    return HealthInsurance;
}());
exports.HealthInsurance = HealthInsurance;
var TermInsurance = /** @class */ (function () {
    function TermInsurance() {
        this.life_cover = new Life_cover();
    }
    TermInsurance.prototype.Purchase = function (person) {
        console.log("Hi ".concat(person.name, " You have purchased Term Insurance"));
    };
    TermInsurance.prototype.getQuote = function (person) {
        this.person = person;
        console.log("The total Premium for Term Insurance for you is : ".concat(this.calculateTotalPremium(this.person.age)));
    };
    TermInsurance.prototype.showAllCovers = function () {
        console.log('Life cover');
    };
    TermInsurance.prototype.calculateTotalPremium = function (age) {
        return this.life_cover.calculatePremium(age);
    };
    return TermInsurance;
}());
exports.TermInsurance = TermInsurance;
var Mark = new Person('Mark', 40);
var lifeInsurance = new LifeInsurance();
var healthInsurance = new HealthInsurance();
var termInsurance = new TermInsurance();
lifeInsurance.showAllCovers();
lifeInsurance.getQuote(Mark);
lifeInsurance.Purchase(Mark);
healthInsurance.showAllCovers();
healthInsurance.getQuote(Mark);
healthInsurance.Purchase(Mark);
termInsurance.showAllCovers();
termInsurance.getQuote(Mark);
termInsurance.Purchase(Mark);
