interface Shape {
  color: Color;
  toString: () => string;
}

interface Color {
  name: string;
}

class Blue implements Color {
  name: string = "Blue";
}

class Circle implements Shape {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  toString(): string {
    return `${this.color.name} Circle`;
  }
}

class Triangle implements Shape {
  color: Color;

  constructor(color: Color) {
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
console.log(triangle.toString());
