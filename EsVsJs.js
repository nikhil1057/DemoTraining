//Block scoping
let num = 100;
if(true){
    let num = 200
    console.log(num);
}
console.log(num);

//DeStructuring

let greetings =['Hello','Namaste','Hola']; //structuring
let[engGreet,hindiGreet,spanishGreet] = greetings;  //de-structuring

console.log(`English : ${engGreet} | Hindi : ${hindiGreet} | Spanish : ${spanishGreet}`);

let[,g2,] = greetings;
let[g1] = greetings;
console.log(`g2 : ${g2} , g1 : ${g1}`);

//Spread Operator => Because JS has arguments for infinte items
//...

let randomNums = [1,3,5,7,9,11,13,15,17,19,21]

let[n1,,,,,...nums] = randomNums;

console.log(`n1 : ${n1} , nums : ${nums}`);


let swap = (x,y) => [x,y] = [y,x]


console.log(swap(2,3));

function createShape(type='Circle'){
    console.log(type);
}

createShape();
createShape('Square');

let printBill = (cost,...items) =>{
    for (const iterator of items) {
        console.log(`item : ${iterator} ......... ₹${cost}`);
        cost-=10;
    }
}

printBill();
printBill(100,'iPhone','Bottle','watch');