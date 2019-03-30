"use strict";
class Target {
    request() {
        return "target";
    }
}
class Adaptee {
    specificRequest() {
        return "specific request";
    }
}
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee
            .specificRequest()
            .split("")
            .reverse()
            .join("");
        return `Adapter: ${result}`;
    }
}
function printRequest(target) {
    console.log(target.request());
}
function run() {
    const target = new Target();
    printRequest(target);
    const adaptee = new Adaptee();
    console.log(`Adaptee: ${adaptee.specificRequest()}`);
    const adapter = new Adapter(adaptee);
    printRequest(adapter);
}
run();
