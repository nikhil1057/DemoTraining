const obj = {
    empid: 1001,
    eName: "John",
    works: (tasks) =>  {
                            for (let index = 0; index < tasks.length; index++) {
                            console.log(tasks[index]);
                            sendEmail();
                            
                            }    
                        },
    projects : ['Underwriting Pro', 'Illustrations'],
    accolades: ['Best Dancer', {y2021: ['Best Developer','Spot Award']}]
};

Object.seal(obj);

const obj3 = Object.create(obj);

obj3.eName = 'Abhi';

console.log(obj3); //It Creates Object after Sealing the parent object.

obj.eName = 'Abhijeet'
obj3.eName = 'Abhijeet M' 

console.log(obj3);
console.log(obj);  //Object can be edited after sealing the object.

obj.address = 'Bangalore';
obj3.address = 'Agra';

console.log(obj3); //Copy of object can add properties.
console.log(obj);  //Nothing can be add after sealing the object.

function employee(){
    //Property
    this.id =0;
    this.eName = '';
    this.desigantion = '';

    //normal variables = private fields
    var secret = "Top secret";

    //public functions
    this.works = function(){
        return this.eName.concat(secretFun());
    }

    var secretFun = function(){
        return ' Not Accessible';
    }
}

var funcObj = new employee();

var funcObj2 = Object.create(funcObj);

funcObj.id = 1;
funcObj2.id = 2;

console.log(funcObj);
console.log(funcObj2); //Create Works with Function Object

Object.seal(funcObj2);

funcObj.id = 3;
funcObj2.id = 4;

funcObj.address = 'Bangalore';
funcObj.address = 'Agra';

console.log(funcObj);
console.log(funcObj2); //Seal a function object only allow edits

Object.freeze(funcObj);

funcObj.id = 5;
funcObj2.id = 6;

funcObj.address = 'Bangalore';
funcObj.address = 'Agra';

console.log(funcObj);
console.log(funcObj2); //Freeze works fine in function objects

var funcObj3 = Object.create(funcObj);

console.log(funcObj3);

var funcObj4 = Object.assign({}, funcObj)

console.log(funcObj4);

const obj2 = Object.assign({},obj);

obj.eName = "Nik";
obj.accolades[1].y2021 = ['CC Award'];

obj2.accolades[1].y2021 = ['ABCD Awards']

console.log(obj.eName, obj.accolades[1].y2021);
console.log(obj2.eName, obj2.accolades[1].y2021);  //If object is created inside object it is refrenced, 
                                                    //Assign will change the value for both the objects



