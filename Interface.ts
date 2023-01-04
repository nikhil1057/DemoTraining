export interface IContract{
    workHoursClause():string;
    paidLeavesClause():string;
}

export interface INda{
    nonDisclosure():string[];
}

export class Person{
    public pName:string =''
}

export class SapiensEmp extends Person implements INda,IContract{
    nonDisclosure(): string[] {
        return ['Must not disclose comapny IP','Must not disclose Passwords']
    }
    workHoursClause(): string {
        return '5 paid leaves per quarter of current FY'
    }
    paidLeavesClause(): string {
        return "8 hours/day for 5 days a week"
    }
    
}

let Nikhil = new SapiensEmp();

let nonDisclosure = Nikhil.nonDisclosure();
let workHours = Nikhil.workHoursClause();
let paidLeaves = Nikhil.paidLeavesClause();
Nikhil.pName = 'Nikhil'

console.log(nonDisclosure);
console.log(workHours);
console.log(paidLeaves);
