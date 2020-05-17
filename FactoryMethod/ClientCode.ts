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

getFigure(new OrangeRickyCreator());
getFigure(new BlueRickyCreator());
getFigure(new ClevelandZCreator());
getFigure(new RhodeIslandZCreator());
getFigure(new HeroCreator());
getFigure(new TeeweeCreator());
getFigure(new SmashboyCreator());