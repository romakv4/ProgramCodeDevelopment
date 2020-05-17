"use strict";
exports.__esModule = true;
var ConcreteCreators_1 = require("./Creators/ConcreteCreators");
var getFigure = function (creator) {
    console.log(creator.someOperation());
};
var getRandomFigure = function () {
    var randomValue = Math.floor(Math.random() * 7) + 1;
    switch (randomValue) {
        case 1: return getFigure(new ConcreteCreators_1.OrangeRickyCreator());
        case 2: return getFigure(new ConcreteCreators_1.BlueRickyCreator());
        case 3: return getFigure(new ConcreteCreators_1.ClevelandZCreator());
        case 4: return getFigure(new ConcreteCreators_1.RhodeIslandZCreator());
        case 5: return getFigure(new ConcreteCreators_1.HeroCreator());
        case 6: return getFigure(new ConcreteCreators_1.TeeweeCreator());
        case 7: return getFigure(new ConcreteCreators_1.SmashboyCreator());
    }
};
getRandomFigure();
