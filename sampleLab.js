this.Utils = function(value){

    this.Square = () => value*value; //Arrow function

    this.AreaofCircle = function(Square){   //Callback

        return Math.PI * Square(); 

    }

    this.AreaofRectangle = function(breadth){ 

        return breadth * ((function(){             //IFEE
            return value*2;
        })());

    }

    this.MergeString = function(){ //string interpolation

        var result = `Let's put ${value} boxes`;

        for(i=0;i<arguments.length;i++)
        result = `${result} into a ${arguments[i]}`;

        return result;
    }

}

var objUtils = new this.Utils(10);
console.log(objUtils.Square());
console.log(objUtils.AreaofCircle(objUtils.Square));
console.log(objUtils.AreaofRectangle(8));
console.log(objUtils.MergeString("big box","bigger box","biggest box"));
console.log(objUtils.MergeString("big box"));