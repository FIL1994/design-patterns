var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Object.defineProperty(Singleton, "Instance", {
        get: function () {
            return this.instance || (this.instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    return Singleton;
}());
