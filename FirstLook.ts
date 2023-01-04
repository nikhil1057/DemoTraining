var num1 = 100; //js
let num2 = 200 //es
var num3: number = 300 //ts
let num4: number = 400 //ts

let sum = (salt: number): number => {
    return (num1 + num2 + num3 + num4) * salt
}

console.log(sum(2.5))

export class Movie {
    public movieName: string = '';
    public rating: number = 0;
    public isReleased: boolean = false;
    private expenses: number = 0;
    protected rights: any = undefined;

    constructor(pMovieName: string = '', ...others: any[]) {

    }

    static shoot(type: string) {
        console.log(`Movie shooting in progress: ${type}`);
    }

    protected Release() {
        this.isReleased = true;
    }

    private applyFunding(budget: number) {
        return budget * 100;
    }

    public printAllDetails(budget: number) {
        this.Release();
        let release = this.isReleased;
        let total = this.applyFunding(budget);
        console.log(`Movie release is done: ${this.isReleased}, the budget is: ${total}`);
    }
}

export class HollywoodMovie extends Movie{
    public Vfx:any[] = [];
    protected Theaters:string[] = ['PVR','Adlabs']
    protected Ott:string[] = ['Netflix','AmazonPrime','DisneyHotstar']
    public ReleaseToTheateres(){
        this.Release(); //protected method of base class accessible ONLY INSIDE derived class
        this.Theaters.map(t=>console.log(t))
    }
    public RelaseToOTT(){
        this.Release();
        this.Ott.map(t=>console.log(t));
    }

}

let Kantara = new Movie();
Kantara.printAllDetails(2000);
Movie.shoot('outDoor');
HollywoodMovie.shoot('Space');

let Avengers = new HollywoodMovie();
Avengers.RelaseToOTT();
Avengers.ReleaseToTheateres();

let slumdog:Movie = new HollywoodMovie();
slumdog.isReleased = true;
(<HollywoodMovie>slumdog).printAllDetails(100);

let hollywoodPart:HollywoodMovie = (<HollywoodMovie>slumdog);
hollywoodPart.RelaseToOTT();
hollywoodPart.ReleaseToTheateres();
hollywoodPart.Vfx=['Rigging','Furring'];

