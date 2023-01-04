class Person{
    constructor(name='',gender='',age=0){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    works(){
        console.log('WAT');
    }

    static sleeps(){
        console.log(`${arguments[0].name} is not sleeping...Arrgggghhhhh`);
    }

}

class Employee extends Person{
    constructor(name='',gender='',age=0){
        super(name,gender,age);

        this.empId = 0;
        this.designation='';
        this.salary=0;
    }

    works()
    {
        console.log(`${this.name} is working as ${this.designation} for Software Products division`);
    }

}

let obj = new Person('Nikhil','Male',26);
Person.sleeps(obj);
obj.works();

let obj2 = new Employee('Shreyas','Male',30);
obj2.designation = 'Senior dev'
obj2.works();


