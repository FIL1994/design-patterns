declare class Target {
    request(): string;
}
declare class Adaptee {
    specificRequest(): string;
}
declare class Adapter extends Target {
    private adaptee;
    constructor(adaptee: Adaptee);
    request(): string;
}
declare function printRequest(target: Target): void;
declare function run(): void;
//# sourceMappingURL=index.d.ts.map