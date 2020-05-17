"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractCreator_1 = require("./AbstractCreator");
var ConcreteFigures_1 = require("../TetrisFigures/ConcreteFigures");
var OrangeRickyCreator = /** @class */ (function (_super) {
    __extends(OrangeRickyCreator, _super);
    function OrangeRickyCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrangeRickyCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.OrangeRicky();
    };
    return OrangeRickyCreator;
}(AbstractCreator_1.Creator));
exports.OrangeRickyCreator = OrangeRickyCreator;
var BlueRickyCreator = /** @class */ (function (_super) {
    __extends(BlueRickyCreator, _super);
    function BlueRickyCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueRickyCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.BlueRicky();
    };
    return BlueRickyCreator;
}(AbstractCreator_1.Creator));
exports.BlueRickyCreator = BlueRickyCreator;
var ClevelandZCreator = /** @class */ (function (_super) {
    __extends(ClevelandZCreator, _super);
    function ClevelandZCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClevelandZCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.ClevelandZ();
    };
    return ClevelandZCreator;
}(AbstractCreator_1.Creator));
exports.ClevelandZCreator = ClevelandZCreator;
var RhodeIslandZCreator = /** @class */ (function (_super) {
    __extends(RhodeIslandZCreator, _super);
    function RhodeIslandZCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RhodeIslandZCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.RhodeIslandZ();
    };
    return RhodeIslandZCreator;
}(AbstractCreator_1.Creator));
exports.RhodeIslandZCreator = RhodeIslandZCreator;
var HeroCreator = /** @class */ (function (_super) {
    __extends(HeroCreator, _super);
    function HeroCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.Hero();
    };
    return HeroCreator;
}(AbstractCreator_1.Creator));
exports.HeroCreator = HeroCreator;
var TeeweeCreator = /** @class */ (function (_super) {
    __extends(TeeweeCreator, _super);
    function TeeweeCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeeweeCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.Teewee();
    };
    return TeeweeCreator;
}(AbstractCreator_1.Creator));
exports.TeeweeCreator = TeeweeCreator;
var SmashboyCreator = /** @class */ (function (_super) {
    __extends(SmashboyCreator, _super);
    function SmashboyCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmashboyCreator.prototype.factoryMethod = function () {
        return new ConcreteFigures_1.Smashboy();
    };
    return SmashboyCreator;
}(AbstractCreator_1.Creator));
exports.SmashboyCreator = SmashboyCreator;
