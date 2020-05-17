import { Creator } from "./Creators/AbstractCreator";
import { 
    OrangeRickyCreator,
    BlueRickyCreator,
    ClevelandZCreator,
    RhodeIslandZCreator,
    HeroCreator,
    TeeweeCreator,
    SmashboyCreator
} from "./Creators/ConcreteCreators";

const getFigure = (creator: Creator) => {
    console.log(creator.someOperation());
}

const getRandomFigure = () => {
    const randomValue = Math.floor(Math.random() * 7) + 1;
    switch (randomValue) {
        case 1 : return getFigure(new OrangeRickyCreator());
        case 2 : return getFigure(new BlueRickyCreator());
        case 3 : return getFigure(new ClevelandZCreator());
        case 4 : return getFigure(new RhodeIslandZCreator());
        case 5 : return getFigure(new HeroCreator());
        case 6 : return getFigure(new TeeweeCreator());
        case 7 : return getFigure(new SmashboyCreator());
    }
}

getRandomFigure();