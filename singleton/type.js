"use strict";
class Singleton {
    constructor() { }
    static get Instance() {
        return this.instance || (this.instance = new this());
    }
}
