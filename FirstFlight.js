console.log("First Flight");
var name = 'Nikhil';
var arr = [10,20,30];
var str = arr.toString();
console.log(str);
console.log(arr);

//Object Literal

var obj = {
    id: 1001,
    ename: 'Nikhil'
};

obj.desigantion ='Developer';

console.log(obj);

//In Js - To create a class, use function syntax

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
    //Below code executes only if this is called as a fucntion
    return "ha ha ha";
}

employee(); //call as a function
var objEmployee= new employee();
console.log(objEmployee);
console.log(employee());

objEmployee.eName = 'Nikhil';
console.log(objEmployee.works());