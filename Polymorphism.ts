//Polymorphism
// overloading = Compile-time polymorphism
// overriding = Runtime polymorphism
// IFF = base-derived relation
//  i. virtual:: giving permission to Allow overriding
//  ii. abstract:: Incomplete implementation MUST override in derived

export abstract class Shape{
    public abstract draw();
    public DisplayDetails(){
        console.log('Nothing to display')
    }
}

export class Circle extends Shape{
    public radius:number = 0
    
    constructor(rad:number) {
        super();
        this.radius = rad;
    }

    public draw(){
        console.log(`Circle drawn with radius ${this.radius} and having area: ${this.radius*this.radius}`)
    }
    public DisplayDetails(): void {
        console.log('this is a circle')
    }
}

export class Square extends Shape{
    public side:number = 0

    constructor(rad:number) {
        super();
        this.side = rad;
    }
    public draw(){
        console.log(`Square drawn with side ${this.side} and having area: ${this.side*this.side}`)
    }
    public DisplayDetails(): void {
        console.log('this is a square')
    }
}



let shape:Shape;
let sh = 'Circle'


if(sh==='Circle')
{
shape = new Circle(10);
(<Circle>shape).radius = 10;
}

else{
shape = new Square(1);
(<Square>shape).side = 10;
}

shape.draw();
shape.DisplayDetails();

