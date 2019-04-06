interface Shape {
    color: Color;
    toString: () => string;
}
interface Color {
    name: string;
}
declare class Blue implements Color {
    name: string;
}
declare class Circle implements Shape {
    color: Color;
    constructor(color: Color);
    toString(): string;
}
declare class Triangle implements Shape {
    color: Color;
    constructor(color: Color);
    toString(): string;
}
declare const blue: Blue;
declare const cirle: Circle;
declare const triangle: Triangle;
