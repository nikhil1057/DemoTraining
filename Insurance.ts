export class Person{

    public name:string;
    public age:number;

    constructor(pName:string ='defaultName', pAge:number=0){

        this.name = pName;
        this.age = pAge;
    }

}

export interface Insuarance{

    getQuote(person:Person);
    showAllCovers();
    Purchase(person:Person);
}

export interface Cover{

    calculatePremium(age:number):number;
}

export class Accidenatal_cover implements Cover{

    private factor = 10;

    calculatePremium(age:number): number {
        return age*this.factor;
    }

}

export class Life_cover implements Cover{

    private factor = 20;

    calculatePremium(age: number): number {
        return age*this.factor;
    }
    
}

export class Disablity_cover implements Cover{

    private factor = 15;

    calculatePremium(age: number): number {
        return age*this.factor;
    }

}

export class Covid_cover implements Cover{

    private factor = 8;

    calculatePremium(age: number): number {
        return age*this.factor;
    }

}

export class LifeInsurance implements Insuarance{

    private life_cover:Life_cover = new Life_cover();
    private accidental_cover:Accidenatal_cover = new Accidenatal_cover();
    private covid_cover:Covid_cover = new Covid_cover();
    private person:Person;

    Purchase(person) {
        console.log(`Hi ${person.name} You have purchased Life Insurance`);
    }

    getQuote(person:Person) {

        this.person = person;
        console.log(`The total Premium for Life Insurance for you is : ${this.calculateTotalPremium(this.person.age)}`);
    }

    showAllCovers() {
        console.log('Life cover');
        console.log('Accidenatal cover');
        console.log('Covid cover');
    }


    private calculateTotalPremium(age:number): number {

        return this.life_cover.calculatePremium(age) + this.accidental_cover.calculatePremium(age)
                                    + this.covid_cover.calculatePremium(age); 
    }

}

export class HealthInsurance implements Insuarance{

    private accidental_cover:Accidenatal_cover = new Accidenatal_cover();
    private covid_cover:Covid_cover = new Covid_cover();
    private disability_cover:Disablity_cover = new Disablity_cover();
    private person:Person;

    Purchase(person) {
        console.log(`Hi ${person.name} You have purchased Health Insurance`);
    }

    getQuote(person:Person) {

        this.person = person;
        console.log(`The total Premium for Health Insurance for you is : ${this.calculateTotalPremium(this.person.age)}`);
    }

    showAllCovers() {
        console.log('Accidenatal cover');
        console.log('Disablity cover');
        console.log('Covid cover');
    }


    private calculateTotalPremium(age:number): number {

        return this.accidental_cover.calculatePremium(age) + this.disability_cover.calculatePremium(age)
                                    + this.covid_cover.calculatePremium(age) ; 
    }
}

export class TermInsurance implements Insuarance{
    
    private life_cover:Life_cover = new Life_cover();
    private person:Person;

    Purchase(person) {
        console.log(`Hi ${person.name} You have purchased Term Insurance`);
    }

    getQuote(person:Person) {

        this.person = person;
        console.log(`The total Premium for Term Insurance for you is : ${this.calculateTotalPremium(this.person.age)}`);
    }

    showAllCovers() {
        console.log('Life cover');
    }


    private calculateTotalPremium(age:number): number {

        return this.life_cover.calculatePremium(age); 
    }
}



let Mark:Person = new Person('Mark',40)
let lifeInsurance:LifeInsurance = new LifeInsurance()
let healthInsurance:HealthInsurance = new HealthInsurance()
let termInsurance:TermInsurance = new TermInsurance()

lifeInsurance.showAllCovers()
lifeInsurance.getQuote(Mark)
lifeInsurance.Purchase(Mark)

healthInsurance.showAllCovers()
healthInsurance.getQuote(Mark)
healthInsurance.Purchase(Mark)

termInsurance.showAllCovers()
termInsurance.getQuote(Mark)
termInsurance.Purchase(Mark)