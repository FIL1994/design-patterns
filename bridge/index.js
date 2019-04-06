"use strict";
class Blue {
    constructor() {
        this.name = "Blue";
    }
}
class Circle {
    constructor(color) {
        this.color = color;
    }
    toString() {
        return `${this.color.name} Circle`;
    }
}
class Triangle {
    constructor(color) {
        this.color = color;
    }
    toString() {
        return `${this.color.name} Triangle`;
    }
}
const blue = new Blue();
const cirle = new Circle(blue);
const triangle = new Triangle(blue);
console.log(cirle.toString());
console.log(triangle);
