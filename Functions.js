function fnamed(){  //named Function


}

//Named Function Expression
var fRenamed = function friendlyName(a){
    console.log("Named");
}

fRenamed();

//Anonymous Function Expression
var fAnonymous = function(){

}

//Anonymous function
console.log((function(){
    return ('I am Anonymous in log');   
   })());

((function(){
    console.log ('I am Anonymous');   
})());

//self Invoking Anonymous Function IIFE - Immediately Invoking Function Expressions
console.log(
    (function(){
        this.$ = function(){
            console.log("call me");
        }

        this.ajax = function(){
            console.log("else call me");
        }

        return "Hey !"
    })()
);

//Anonymous function => Arrow Functions

var sum = (a,b,c) => a+b+c;

console.log(sum(2,3,200));

//CallBack

function addEventListener(clickEvent, func)
{
    console.log("event "+ clickEvent);
    func();
}

addEventListener("click", () => console.log("click happened"));

function Addup(){
    var result = 0;

    var args = Array.from(arguments);

    args.forEach(element => {
        result += element;
    });

    // for(var i=0; i<arguments.length; i++){
    //     result += arguments[i];
    // }

    console.log(`The total is : ${result}. This is possible in JS arguments. The values for arguments are ${Array.from(arguments).toString()}`);
}

Addup(10,20);
Addup();
Addup(10,20,30);

