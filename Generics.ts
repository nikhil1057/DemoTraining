import { Shape,Circle,Square } from "./Polymorphism";
export class Bag<T>{

    private list:T[] = [];
    public Add(item:T){
        this.list.push(item);
    }

    public GetAll():T[]{
        return this.list;
    }
}

//create bags
let stringBag = new Bag<string>();
stringBag.Add('New string');
stringBag.Add('Sling Bag');
stringBag.GetAll().map(item=>console.log(item));

let shapeBag = new Bag<Shape>();
shapeBag.Add(new Circle(20));
shapeBag.Add(new Square(5));
shapeBag.GetAll().map(item => item.draw());

