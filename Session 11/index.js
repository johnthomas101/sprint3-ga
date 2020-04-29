
console.log("tester");

class Shape{
    constructor(name){
        this.name = name;
    }

    draw(){
        console.log(`drawing ${this.name}`)
    }
}

class ShapeChild extends Shape{
    constructor(name, sides){
        super(name);
        this.sides = sides;
    }

    printSides(){
        console.log(`${this.name} has ${this.sides} sides`);
    }
}