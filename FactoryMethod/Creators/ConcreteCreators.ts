import { Creator } from "./AbstractCreator";
import { IFigure } from "../TetrisFigures/IFigure";
import {
    OrangeRicky,
    BlueRicky,
    ClevelandZ,
    RhodeIslandZ,
    Hero,
    Teewee,
    Smashboy
} from "../TetrisFigures/ConcreteFigures"


export class OrangeRickyCreator extends Creator {
    public factoryMethod(): IFigure {
        return new OrangeRicky()
    }
}

export class BlueRickyCreator extends Creator {
    public factoryMethod(): IFigure {
        return new BlueRicky()
    }
}

export class ClevelandZCreator extends Creator {
    public factoryMethod(): IFigure {
        return new ClevelandZ()
    }
}

export class RhodeIslandZCreator extends Creator {
    public factoryMethod(): IFigure {
        return new RhodeIslandZ()
    }
}

export class HeroCreator extends Creator {
    public factoryMethod(): IFigure {
        return new Hero()
    }
}

export class TeeweeCreator extends Creator {
    public factoryMethod(): IFigure {
        return new Teewee()
    }
}

export class SmashboyCreator extends Creator {
    public factoryMethod(): IFigure {
        return new Smashboy()
    }
}