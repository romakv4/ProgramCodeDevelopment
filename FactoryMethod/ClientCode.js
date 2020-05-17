"use strict";
exports.__esModule = true;
var ConcreteCreators_1 = require("./Creators/ConcreteCreators");
var getFigure = function (creator) {
    console.log(creator.someOperation());
};
getFigure(new ConcreteCreators_1.OrangeRickyCreator());
getFigure(new ConcreteCreators_1.BlueRickyCreator());
getFigure(new ConcreteCreators_1.ClevelandZCreator());
getFigure(new ConcreteCreators_1.RhodeIslandZCreator());
getFigure(new ConcreteCreators_1.HeroCreator());
getFigure(new ConcreteCreators_1.TeeweeCreator());
getFigure(new ConcreteCreators_1.SmashboyCreator());
