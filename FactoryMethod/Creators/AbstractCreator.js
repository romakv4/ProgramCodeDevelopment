"use strict";
exports.__esModule = true;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var figure = this.factoryMethod();
        return "Creator: The same creator's code has just worked with " + figure.operation();
    };
    return Creator;
}());
exports.Creator = Creator;
